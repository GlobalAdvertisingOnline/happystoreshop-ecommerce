import type { Metadata } from "next";
import { XCircle } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { CancelForm } from "@/components/cancel/CancelForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancel Order",
  description:
    "Request to cancel your HappyStoreShop order. Fill out our cancellation form and we'll process your request within 24 hours.",
};

const steps = [
  {
    number: "1",
    title: "Fill in your details",
    description:
      "Provide your email, order number, and reason for cancellation.",
  },
  {
    number: "2",
    title: "We review within 24 hours",
    description:
      "Our team will review your cancellation request and verify your order status.",
  },
  {
    number: "3",
    title: "Confirmation email sent",
    description:
      "You'll receive an email confirming whether your order has been successfully cancelled.",
  },
];

export default function CancelPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${IMAGES.contactHero})` }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <XCircle className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Cancel Your Order
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Changed your mind? No problem. Submit a cancellation request and
            we&apos;ll take care of the rest.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <span className="text-lg font-bold text-brand-blue">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancel Form */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Cancellation Request
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form below and we&apos;ll process your cancellation
                as quickly as possible.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <CancelForm />
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">
              Already shipped? If your order has already been dispatched, please
              visit our{" "}
              <Link
                href="/refund-policy"
                className="font-medium text-brand-blue hover:underline"
              >
                refund policy page
              </Link>{" "}
              for return instructions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
