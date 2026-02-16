import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your purchase securely.",
};

export default function CheckoutPage() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
          Checkout
        </h1>
        <CheckoutForm />
      </div>
    </section>
  );
}
