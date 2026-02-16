"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTASection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-brand-blue py-16 md:py-20">
      <div ref={sectionRef} className="scroll-reveal mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Need Help With Your Order?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Our dedicated support team is ready to assist you with tracking,
          returns, or any questions about your purchase.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/tracking"
            className="btn-shine inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-brand-blue shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl sm:w-auto"
          >
            Track Your Order
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
