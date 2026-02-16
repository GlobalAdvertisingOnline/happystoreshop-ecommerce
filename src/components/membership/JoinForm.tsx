"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Crown, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart/CartContext";
import { happyStorePlusMembership } from "@/data/products";

export function JoinForm() {
  const [agreed, setAgreed] = useState(false);
  const { addItem, items } = useCart();
  const router = useRouter();

  const alreadyInCart = items.some(
    (item) => item.productSlug === happyStorePlusMembership.slug
  );

  const handleAddToCart = () => {
    if (alreadyInCart) {
      router.push("/cart");
      return;
    }

    const variant = happyStorePlusMembership.variants[0];
    addItem({
      productSlug: happyStorePlusMembership.slug,
      variantId: variant.id,
      quantity: 1,
      name: happyStorePlusMembership.name,
      variantName: variant.name,
      price: variant.price,
      image: happyStorePlusMembership.images[0],
      type: "subscription",
      ccProductId: happyStorePlusMembership.checkoutChampProductId,
    });
    router.push("/cart");
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-lg px-4 md:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-200 bg-white p-8 shadow-lg shadow-amber-100/50">
          <div className="mb-6 text-center">
            <Crown className="mx-auto mb-3 h-8 w-8 text-amber-500" />
            <h2 className="text-xl font-bold text-slate-900">Join HappyStore+</h2>
            <p className="mt-1 text-sm text-slate-600">
              $39.95/month · Cancel anytime
            </p>
          </div>

          {/* Disclosure */}
          <div className="mb-6 rounded-lg border border-amber-100 bg-amber-50 p-4">
            <p className="text-xs text-amber-800">
              You will be charged <strong>$39.95/month</strong>. Your membership
              renews automatically each month until you cancel. Cancel anytime at{" "}
              <a href="/membership/manage" className="font-medium underline">
                happystoreshop.com/membership/manage
              </a>
              .
            </p>
          </div>

          {/* Consent checkbox */}
          <label className="mb-6 flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
            />
            <span className="text-sm text-slate-600">
              I understand this is a <strong>$39.95/month recurring charge</strong>.
              I agree to the{" "}
              <Link href="/membership/terms" className="font-medium text-brand-blue underline">
                Membership Terms
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="font-medium text-brand-blue underline">
                Terms of Service
              </Link>
              .
            </span>
          </label>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            disabled={!agreed}
            className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-base font-semibold text-white shadow-md shadow-amber-200/50 transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingCart className="h-5 w-5" />
            {alreadyInCart ? "View in Cart" : "Add to Cart — $39.95/month"}
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            No trial period. Full benefits start immediately after checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
