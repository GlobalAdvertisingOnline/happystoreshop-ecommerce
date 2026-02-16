"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";

type CookieConsent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT_CONSENT: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
};

function getStoredConsent(): CookieConsent | null {
  try {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored);
    }
  }, []);

  const saveConsent = (c: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(c));
    setConsent(c);
    setVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () =>
    saveConsent({ essential: true, analytics: true, marketing: true });
  const rejectAll = () =>
    saveConsent({ essential: true, analytics: false, marketing: false });
  const savePreferences = () => saveConsent(consent);

  if (!visible) return null;

  return (
    <div className="animate-slide-up fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-4 shadow-2xl md:p-6">
      <div className="mx-auto max-w-7xl">
        {showPreferences ? (
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Cookie Preferences
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Choose which cookies you allow. Essential cookies cannot be
              disabled.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Essential
                  </p>
                  <p className="text-xs text-slate-500">
                    Required for the site to function properly
                  </p>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Always on
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Analytics
                  </p>
                  <p className="text-xs text-slate-500">
                    Help us understand how visitors use the site
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConsent({ ...consent, analytics: !consent.analytics })
                  }
                  role="switch"
                  aria-checked={consent.analytics}
                  aria-label="Toggle analytics cookies"
                  className={`relative h-6 w-11 rounded-full transition-colors ${consent.analytics ? "bg-brand-blue" : "bg-slate-300"}`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${consent.analytics ? "translate-x-5" : ""}`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Marketing
                  </p>
                  <p className="text-xs text-slate-500">
                    Personalized ads and content
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConsent({ ...consent, marketing: !consent.marketing })
                  }
                  role="switch"
                  aria-checked={consent.marketing}
                  aria-label="Toggle marketing cookies"
                  className={`relative h-6 w-11 rounded-full transition-colors ${consent.marketing ? "bg-brand-blue" : "bg-slate-300"}`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${consent.marketing ? "translate-x-5" : ""}`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={savePreferences}
                className="rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-relaxed text-slate-600">
              We use cookies to enhance your browsing experience and analyze
              site traffic.{" "}
              <Link
                href="/cookie-policy"
                className="font-medium text-brand-blue underline-offset-2 hover:underline"
              >
                Learn more
              </Link>
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                onClick={rejectAll}
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                <Settings className="h-3.5 w-3.5" />
                Manage
              </button>
              <button
                onClick={acceptAll}
                className="rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
