"use client";

import { useState, useCallback } from "react";
import Script from "next/script";
import { Search, Loader2, ExternalLink, Mail } from "lucide-react";

declare global {
  interface Window {
    YQV5: {
      trackSingle: (opts: {
        YQ_ContainerId: string;
        YQ_Height: number;
        YQ_Lang: string;
        YQ_Num: string;
      }) => void;
    };
  }
}

export function TrackingForm() {
  const [activeTab, setActiveTab] = useState<"track" | "email">("track");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [tracked, setTracked] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [lookupEmail, setLookupEmail] = useState("");
  const [lookupOrderNumber, setLookupOrderNumber] = useState("");

  const handleScriptLoad = useCallback(() => {
    // The script is loaded, but YQV5 might need a moment to initialize
    const check = () => {
      if (window.YQV5) {
        setScriptReady(true);
      } else {
        setTimeout(check, 200);
      }
    };
    check();
  }, []);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const num = trackingNumber.trim();
    if (num.length < 5) return;

    setLoading(true);
    setTracked(true);

    if (scriptReady && window.YQV5) {
      // Use the embedded 17TRACK widget
      try {
        window.YQV5.trackSingle({
          YQ_ContainerId: "YQContainer",
          YQ_Height: 560,
          YQ_Lang: "en",
          YQ_Num: num,
        });
      } catch {
        // If widget fails, open 17TRACK in new tab
        window.open(`https://t.17track.net/en#nums=${encodeURIComponent(num)}`, "_blank");
      }
      setTimeout(() => setLoading(false), 2000);
    } else {
      // Fallback: open 17TRACK in a new tab
      window.open(`https://t.17track.net/en#nums=${encodeURIComponent(num)}`, "_blank");
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const openExternal = () => {
    const num = trackingNumber.trim();
    if (num.length >= 5) {
      window.open(`https://t.17track.net/en#nums=${encodeURIComponent(num)}`, "_blank");
    }
  };

  const handleEmailLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const email = lookupEmail.trim();
    const orderNum = lookupOrderNumber.trim();
    if (!email || !orderNum) return;

    const subject = encodeURIComponent("Order Lookup Request");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to look up the tracking information for my order.\n\nEmail: ${email}\nOrder Number: ${orderNum}\n\nThank you.`
    );
    window.location.href = `mailto:support@happystoreshop.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Script
        src="https://www.17track.net/externalcall.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />

      {/* Tab navigation */}
      <div className="mx-auto mb-6 flex max-w-2xl">
        <button
          type="button"
          onClick={() => setActiveTab("track")}
          className={`flex-1 border-b-2 px-4 py-3 text-center text-sm font-semibold transition-colors ${
            activeTab === "track"
              ? "border-brand-blue text-brand-blue"
              : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
          }`}
        >
          <Search className="mr-2 inline-block h-4 w-4" />
          Track by Number
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("email")}
          className={`flex-1 border-b-2 px-4 py-3 text-center text-sm font-semibold transition-colors ${
            activeTab === "email"
              ? "border-brand-blue text-brand-blue"
              : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
          }`}
        >
          <Mail className="mr-2 inline-block h-4 w-4" />
          Look Up by Email
        </button>
      </div>

      {/* Track by Number tab */}
      {activeTab === "track" && (
        <>
          <form onSubmit={handleTrack} className="mx-auto max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number"
                  className="w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <button
                type="submit"
                disabled={trackingNumber.trim().length < 5}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Track Package"
                )}
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">
              You can find your tracking number in your order confirmation email.
            </p>
          </form>

          {/* Results container */}
          {tracked && (
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div id="YQContainer" className="min-h-[200px]" />
              </div>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={openExternal}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue transition-colors hover:text-brand-blue-dark hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View on 17TRACK.net for more details
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Look Up by Email tab */}
      {activeTab === "email" && (
        <form onSubmit={handleEmailLookup} className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={lookupEmail}
                onChange={(e) => setLookupEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={lookupOrderNumber}
                onChange={(e) => setLookupOrderNumber(e.target.value)}
                placeholder="Enter your order number"
                required
                className="w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <button
              type="submit"
              disabled={!lookupEmail.trim() || !lookupOrderNumber.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Mail className="h-5 w-5" />
              Request Tracking Info
            </button>
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            Our support team will respond with your tracking information within 24 hours.
          </p>
        </form>
      )}
    </>
  );
}
