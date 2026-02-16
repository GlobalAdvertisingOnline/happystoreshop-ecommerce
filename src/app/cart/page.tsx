import type { Metadata } from "next";
import { CartPage } from "@/components/cart/CartPage";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your cart and proceed to checkout.",
};

export default function CartRoute() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
          Your Cart
        </h1>
        <CartPage />
      </div>
    </section>
  );
}
