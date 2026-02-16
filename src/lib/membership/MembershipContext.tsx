"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { MembershipState, initialMembershipState } from "./types";

const STORAGE_KEY = "happystore-membership";
const RECHECK_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface MembershipContextValue {
  membership: MembershipState;
  isActive: boolean;
  checkStatus: (email: string) => Promise<void>;
  setMembership: (state: MembershipState) => void;
  clearMembership: () => void;
}

const MembershipContext = createContext<MembershipContextValue | null>(null);

function loadMembership(): MembershipState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MembershipState;
  } catch {
    return null;
  }
}

function saveMembership(state: MembershipState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Silently ignore
  }
}

export function MembershipProvider({ children }: { children: ReactNode }) {
  const [membership, setMembershipState] = useState<MembershipState>(initialMembershipState);
  const [lastChecked, setLastChecked] = useState(0);

  // Hydrate from localStorage
  useEffect(() => {
    const saved = loadMembership();
    if (saved) {
      setMembershipState(saved);
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (membership.status !== "none" || membership.email) {
      saveMembership(membership);
    }
  }, [membership]);

  const checkStatus = useCallback(async (email: string) => {
    // Skip if recently checked
    if (Date.now() - lastChecked < RECHECK_INTERVAL_MS && membership.email === email) {
      return;
    }

    setMembershipState((prev) => ({ ...prev, status: "loading" }));

    try {
      const res = await fetch("/api/membership/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.result === "SUCCESS") {
        setMembershipState({
          status: data.status === "active" ? "active" : data.status === "cancelled" ? "cancelled" : "none",
          email,
          customerId: data.customerId || null,
          joinedAt: data.joinedAt || null,
          nextBillingDate: data.nextBillingDate || null,
        });
        setLastChecked(Date.now());
      } else {
        setMembershipState((prev) => ({ ...prev, status: "none" }));
      }
    } catch {
      setMembershipState((prev) => ({ ...prev, status: "none" }));
    }
  }, [lastChecked, membership.email]);

  const setMembership = useCallback((state: MembershipState) => {
    setMembershipState(state);
  }, []);

  const clearMembership = useCallback(() => {
    setMembershipState(initialMembershipState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Silently ignore
    }
  }, []);

  const isActive = membership.status === "active";

  return (
    <MembershipContext.Provider
      value={{
        membership,
        isActive,
        checkStatus,
        setMembership,
        clearMembership,
      }}
    >
      {children}
    </MembershipContext.Provider>
  );
}

export function useMembership(): MembershipContextValue {
  const context = useContext(MembershipContext);
  if (!context) {
    throw new Error("useMembership must be used within a MembershipProvider");
  }
  return context;
}
