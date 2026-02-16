"use client";

import { Award, Heart, Shield, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every product in our catalog goes through rigorous quality checks. We partner only with trusted manufacturers and brands that share our commitment to excellence.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Your satisfaction is at the heart of everything we do. From browsing to delivery, we strive to make every interaction seamless, friendly, and memorable.",
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description:
      "Shop with complete confidence. We use bank-level 256-bit SSL encryption to protect your personal information and payment details at every step.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Shipping",
    description:
      "We partner with the world's leading carriers — USPS, UPS, FedEx, and DHL — to ensure your orders arrive safely and on time, every time.",
  },
];

export function ValuesSection() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These core principles guide everything we do and set us apart.
          </p>
        </div>

        <div ref={gridRef} className="scroll-reveal mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="hover-lift rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                <value.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
