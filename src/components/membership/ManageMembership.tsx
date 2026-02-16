"use client";

import { useState } from "react";
import Link from "next/link";
import { Crown, Mail } from "lucide-react";
import { CancelModal } from "./CancelModal";

export function ManageMembership() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "active" | "cancelled" | "none">("idle");
  const [memberData, setMemberData] = useState<{
    customerId: string;
    joinedAt: string;
    nextBillingDate: string;
  } | null>(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelComplete, setCancelComplete] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    if (!email.trim()) return;
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/membership/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.status === "active") {
        setStatus("active");
        setMemberData({
          customerId: data.customerId || "",
          joinedAt: data.joinedAt || "",
          nextBillingDate: data.nextBillingDate || "",
        });
      } else if (data.status === "cancelled") {
        setStatus("cancelled");
        setMemberData({
          customerId: data.customerId || "",
          joinedAt: data.joinedAt || "",
          nextBillingDate: data.nextBillingDate || "",
        });
      } else {
        setStatus("none");
      }
    } catch {
      setError("Unable to look up membership. Please try again.");
      setStatus("idle");
    }
  };

  const handleCancel = async () => {
    if (!memberData?.customerId) return;

    try {
      const res = await fetch("/api/membership/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: memberData.customerId }),
      });
      const data = await res.json();

      if (data.result === "SUCCESS") {
        setCancelComplete(true);
        setShowCancelModal(false);
        setStatus("cancelled");
      } else {
        setError(data.message || "Unable to cancel. Please contact support.");
        setShowCancelModal(false);
      }
    } catch {
      setError("Unable to cancel. Please contact support at (844) 308-2059.");
      setShowCancelModal(false);
    }
  };

  // Not found — redirect to membership join
  if (status === "none") {
    return (
      <div className="mx-auto max-w-lg py-12 text-center">
        <p className="mb-4 text-lg text-slate-600">
          No active membership found for <strong>{email}</strong>.
        </p>
        <Link
          href="/membership"
          className="inline-block rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-amber-600 hover:to-amber-700"
        >
          Join HappyStore+
        </Link>
      </div>
    );
  }

  // Active or cancelled member
  if (status === "active" || status === "cancelled") {
    return (
      <div className="mx-auto max-w-lg">
        {/* Status badge */}
        <div className={`mb-6 flex items-center gap-3 rounded-xl p-4 ${
          status === "active"
            ? "border border-green-200 bg-green-50"
            : "border border-slate-200 bg-slate-50"
        }`}>
          <Crown className={`h-6 w-6 ${status === "active" ? "text-amber-500" : "text-slate-400"}`} />
          <div>
            <p className={`text-sm font-bold ${status === "active" ? "text-green-700" : "text-slate-600"}`}>
              {status === "active" ? "HappyStore+ Active Member" : "Membership Cancelled"}
            </p>
            <p className="text-xs text-slate-500">{email}</p>
          </div>
        </div>

        {/* Details */}
        {memberData && (
          <div className="mb-6 rounded-xl border border-slate-100 bg-white p-4">
            {memberData.joinedAt && (
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-500">Member since</span>
                <span className="font-medium text-slate-700">{memberData.joinedAt}</span>
              </div>
            )}
            {memberData.nextBillingDate && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  {status === "active" ? "Next billing date" : "Benefits active until"}
                </span>
                <span className="font-medium text-slate-700">{memberData.nextBillingDate}</span>
              </div>
            )}
          </div>
        )}

        {/* Benefits summary */}
        {status === "active" && (
          <div className="mb-6 rounded-xl border border-amber-100 bg-amber-50/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Your Benefits</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-slate-600">
              <li>Free shipping on every order</li>
              <li>15% off all products</li>
              <li>Early access to new arrivals and sales</li>
            </ul>
          </div>
        )}

        {/* Cancel notification */}
        {cancelComplete && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-medium text-green-700">
              Your membership has been cancelled. Benefits remain active until the end of your current billing period.
              A confirmation email has been sent to {email}.
            </p>
          </div>
        )}

        {/* Cancel button — FTC compliant, prominent */}
        {status === "active" && !cancelComplete && (
          <button
            onClick={() => setShowCancelModal(true)}
            className="w-full rounded-xl border-2 border-brand-red px-6 py-4 text-base font-semibold text-brand-red transition-all hover:bg-red-50"
          >
            Cancel Membership
          </button>
        )}

        {/* Rejoin button for cancelled members */}
        {status === "cancelled" && (
          <Link
            href="/membership"
            className="block w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-center text-base font-semibold text-white transition-all hover:from-amber-600 hover:to-amber-700"
          >
            Rejoin HappyStore+
          </Link>
        )}

        {/* Support link */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Need help?{" "}
          <a href="mailto:support@happystoreshop.com" className="font-medium text-brand-blue hover:underline">
            Contact Support
          </a>
        </p>

        {error && (
          <div className="mt-4 rounded-lg border border-brand-red/20 bg-red-50 p-3">
            <p className="text-sm text-brand-red">{error}</p>
          </div>
        )}

        {showCancelModal && (
          <CancelModal
            onConfirm={handleCancel}
            onClose={() => setShowCancelModal(false)}
          />
        )}
      </div>
    );
  }

  // Email lookup form (idle or loading)
  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <Crown className="mx-auto mb-3 h-8 w-8 text-amber-500" />
          <h2 className="text-xl font-bold text-slate-900">Manage Your Membership</h2>
          <p className="mt-1 text-sm text-slate-600">
            Enter your email to view or cancel your membership.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="membership-email" className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <input
                id="membership-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLookup()}
                className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                placeholder="you@example.com"
              />
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <button
            onClick={handleLookup}
            disabled={!email.trim() || status === "loading"}
            className="rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-md disabled:opacity-50"
          >
            {status === "loading" ? "Looking up..." : "Look Up Membership"}
          </button>

          {error && (
            <p className="text-sm text-brand-red">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
