"use client";

import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMAGES } from "@/lib/constants";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I was impressed by the quality and fast shipping. My order arrived in perfect condition, and the tracking updates kept me informed every step of the way. Highly recommend!",
    image: IMAGES.avatarSarah,
  },
  {
    name: "James R.",
    rating: 5,
    text: "Outstanding customer service! I had a question about my order and their support team responded within hours. They really care about their customers. Will definitely shop again.",
    image: IMAGES.avatarJames,
  },
  {
    name: "Emily W.",
    rating: 5,
    text: "The products exceeded my expectations. Great prices, secure checkout, and reliable delivery. This is my go-to shop for quality products. A genuinely trustworthy company.",
    image: IMAGES.avatarEmily,
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "From order to delivery, everything was smooth and professional. The package was well-wrapped and arrived ahead of schedule. Excellent experience from start to finish!",
    image: IMAGES.avatarMichael,
  },
];

export function TestimonialsSection() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don&apos;t just take our word for it — hear from our satisfied customers.
          </p>
        </div>

        <div
          ref={gridRef}
          className="scroll-reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="hover-lift flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">Customer Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
