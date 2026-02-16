"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Where do I find my tracking number?",
    answer:
      "Your tracking number is included in the shipping confirmation email sent to you after your order has been dispatched. Check your inbox (and spam folder) for an email from us with the subject line containing your order number.",
  },
  {
    question: "How long does shipping typically take?",
    answer:
      "Shipping times vary based on your location and the shipping method selected. Standard shipping typically takes 5–12 business days for domestic orders and 10–20 business days for international orders. Express options are also available at checkout.",
  },
  {
    question: "What if my tracking shows no updates?",
    answer:
      "It can take 24–48 hours after shipping for tracking information to appear in the system. If your tracking hasn't updated after 5 business days, please contact our support team and we'll investigate right away.",
  },
  {
    question: "What should I do if my package is lost?",
    answer:
      "If your package hasn't arrived within the expected delivery window and tracking shows no updates, please reach out to our customer support team. We'll work with the carrier to locate your package or arrange a replacement or refund.",
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer:
      "If your order hasn't shipped yet, we may be able to update the shipping address. Please contact our support team as soon as possible with your order number and the new address. Once the order has been dispatched, changes may not be possible.",
  },
];

export function TrackingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-sm font-semibold text-slate-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="border-t border-slate-100 px-6 pb-4 pt-3">
                <p className="text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-600">
          Still need help?{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-blue hover:underline"
          >
            Contact our support team
          </Link>
        </p>
      </div>
    </section>
  );
}
