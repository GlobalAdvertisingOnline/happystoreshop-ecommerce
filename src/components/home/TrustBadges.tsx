"use client";

import Link from "next/link";
import { ShieldCheck, Lock, RefreshCw, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const badges = [
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "256-bit SSL encryption",
  },
  {
    icon: Lock,
    title: "Safe Checkout",
    description: "Protected payments",
  },
  {
    icon: RefreshCw,
    title: "Money-Back Guarantee",
    description: "30-day return policy*",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Mon–Fri, 9 AM – 6 PM EST",
  },
];

export function TrustBadges() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div ref={gridRef} className="scroll-reveal grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <badge.icon className="h-7 w-7 text-brand-green" />
              <h3 className="text-sm font-semibold text-slate-900">
                {badge.title}
              </h3>
              <p className="text-xs text-slate-500">{badge.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-slate-400">
          *Subject to{" "}
          <Link href="/refund-policy" className="underline hover:text-slate-600">
            refund policy conditions
          </Link>
        </p>
      </div>
    </section>
  );
}
