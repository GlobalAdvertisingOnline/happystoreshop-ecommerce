"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10">
          <CheckCircle className="h-10 w-10 text-brand-green" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Thank You for Your Order!
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Your order has been placed successfully.
          A confirmation email has been sent to your inbox.
        </p>

        {/* Order details card */}
        <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Package className="h-5 w-5 text-brand-blue" />
            <h2 className="text-base font-semibold text-slate-900">Order Details</h2>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {orderId && (
              <div className="flex justify-between">
                <span className="text-slate-500">Order Number</span>
                <span className="font-semibold text-slate-900">{orderId}</span>
              </div>
            )}
            <p className="text-slate-600">
              Most orders ship within 1-3 business days. You&apos;ll receive a tracking email when your order is on its way.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/tracking"
            className="flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-md"
          >
            Track Your Order
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/shop"
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Support */}
        <p className="mt-8 text-sm text-slate-500">
          Questions about your order? Contact us at{" "}
          <a href="mailto:support@happystoreshop.com" className="font-medium text-brand-blue hover:underline">
            support@happystoreshop.com
          </a>{" "}
          or call{" "}
          <a href="tel:+18443082059" className="font-medium text-brand-blue hover:underline">
            (844) 308-2059
          </a>
        </p>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10">
              <CheckCircle className="h-10 w-10 text-brand-green" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Thank You for Your Order!
            </h1>
            <p className="mt-4 text-lg text-slate-600">Loading order details...</p>
          </div>
        </section>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
