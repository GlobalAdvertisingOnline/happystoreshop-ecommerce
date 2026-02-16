"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart/CartContext";
import { CartItemRow } from "./CartItemRow";
import { CartSummary } from "./CartSummary";
import { CartMembershipUpsell } from "@/components/membership/CartMembershipUpsell";

export function CartPage() {
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
        <ShoppingBag className="h-20 w-20 text-slate-200" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mt-2 text-slate-500">
            Looks like you haven&apos;t added anything yet.
          </p>
        </div>
        <Link
          href="/shop"
          className="btn-shine rounded-xl bg-brand-blue px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-lg"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left: Cart Items */}
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <CartItemRow
              key={item.variantId}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        {/* Membership upsell */}
        <div className="mt-6">
          <CartMembershipUpsell subtotal={subtotal} />
        </div>
      </div>

      {/* Right: Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <CartSummary subtotal={subtotal} itemCount={itemCount} />
        </div>
      </div>
    </div>
  );
}
