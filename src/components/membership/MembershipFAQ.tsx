"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How does billing work?",
    answer:
      "You're charged $39.95/month on the same date you joined. Your membership renews automatically each month until you cancel.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Cancel anytime with one click at happystoreshop.com/membership/manage or happystoreshop.com/cancel. No phone call required, no hoops to jump through. Your benefits remain active until the end of your current billing period.",
  },
  {
    question: "When do I get my discount?",
    answer:
      "Immediately! As soon as your membership is active, the 15% discount and free shipping are applied automatically to all your orders.",
  },
  {
    question: "Is there a trial period?",
    answer:
      "There's no trial — you get full benefits from day one. Since you can cancel anytime with one click, there's zero risk.",
  },
];

export function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-100 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-slate-900">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
