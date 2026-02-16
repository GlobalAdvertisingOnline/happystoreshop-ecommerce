"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

export function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-2xl space-y-10">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h2 className="mb-4 text-lg font-bold text-slate-900 md:text-xl">
            {cat.category}
          </h2>
          <div className="space-y-3">
            {cat.faqs.map((faq) => {
              const key = `${cat.category}-${faq.question}`;
              const isOpen = openIndex === key;

              return (
                <div
                  key={key}
                  className="rounded-xl border border-slate-200 bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-4 pt-3">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="mt-3 inline-flex text-sm font-semibold text-brand-blue hover:underline"
                        >
                          {faq.link.label} &rarr;
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
