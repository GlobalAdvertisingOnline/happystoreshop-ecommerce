"use client";

import Link from "next/link";
import { Star, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMAGES } from "@/lib/constants";

export function HeroSection() {
  const textRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-green/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div ref={textRef} className="scroll-reveal text-center lg:text-left">
            {/* Trust badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
              </span>
              Trusted by 50,000+ Happy Customers
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Your Trusted Online{" "}
              <span className="text-brand-blue">Shopping Partner</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
              Delivering quality products and exceptional service to thousands of
              satisfied customers worldwide. Your satisfaction is our commitment.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/tracking"
                className="btn-shine inline-flex w-full items-center justify-center rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark hover:shadow-xl sm:w-auto"
              >
                Track Your Order
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-brand-blue hover:text-brand-blue sm:w-auto"
              >
                Contact Us
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-green" />
                <span>50,000+ Customers</span>
              </div>
              <div className="hidden h-4 w-px bg-slate-300 sm:block" />
              <div className="hidden items-center gap-2 sm:flex">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                <span>4.9/5 Average Rating</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="mt-8 lg:mt-0">
            <img
              src={IMAGES.hero}
              alt="Happy customer receiving a beautifully packaged delivery"
              width={640}
              height={360}
              className="img-reveal mx-auto rounded-2xl shadow-2xl"
              loading="eager"
              onLoad={(e) => e.currentTarget.classList.add("loaded")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
