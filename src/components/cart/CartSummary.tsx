"use client";

import Link from "next/link";
import { Shield, Truck, RotateCcw, Crown } from "lucide-react";
import { formatPrice } from "@/components/product/PriceDisplay";
import { useMembership } from "@/lib/membership/MembershipContext";
import { SHIPPING, MEMBERSHIP } from "@/lib/constants";

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
}

export function CartSummary({ subtotal, itemCount }: CartSummaryProps) {
  const { isActive } = useMembership();

  const memberDiscount = isActive ? Math.round(subtotal * (MEMBERSHIP.productDiscount / 100)) : 0;
  const discountedSubtotal = subtotal - memberDiscount;
  const shippingEstimate = isActive ? 0 : discountedSubtotal >= SHIPPING.freeThreshold ? 0 : SHIPPING.flatRate;
  const total = discountedSubtotal + shippingEstimate;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-900">Order Summary</h2>

      {isActive && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2">
          <Crown className="h-4 w-4 text-green-600" />
          <span className="text-xs font-semibold text-green-700">HappyStore+ Discounts Applied</span>
        </div>
      )}

      <div className="flex flex-col gap-3 border-b border-slate-100 pb-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Subtotal ({itemCount} items)</span>
          <span className="font-medium text-slate-900">{formatPrice(subtotal)}</span>
        </div>
        {memberDiscount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-green-600">Member Discount (15%)</span>
            <span className="font-medium text-green-600">-{formatPrice(memberDiscount)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Shipping</span>
          <span className="font-medium text-slate-900">
            {shippingEstimate === 0 ? (
              <span className="text-brand-green">{isActive ? "FREE (Member)" : "FREE"}</span>
            ) : (
              formatPrice(shippingEstimate)
            )}
          </span>
        </div>
        {shippingEstimate > 0 && (
          <p className="text-xs text-slate-500">
            Free shipping on orders over $75.00
          </p>
        )}
      </div>

      <div className="flex justify-between py-4">
        <span className="text-base font-bold text-slate-900">Estimated Total</span>
        <span className="text-xl font-bold text-slate-900">{formatPrice(total)}</span>
      </div>

      <p className="mb-4 text-xs text-slate-500">
        Tax calculated at checkout.
      </p>

      <Link
        href="/checkout"
        className="btn-shine flex w-full items-center justify-center rounded-xl bg-brand-blue px-6 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-lg"
      >
        Proceed to Checkout
      </Link>

      <Link
        href="/shop"
        className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
      >
        Continue Shopping
      </Link>

      {/* Trust badges */}
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <Shield className="h-4 w-4 text-brand-green" />
          <span className="text-[10px] font-medium text-slate-500">Secure</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <Truck className="h-4 w-4 text-brand-green" />
          <span className="text-[10px] font-medium text-slate-500">Fast Ship</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <RotateCcw className="h-4 w-4 text-brand-green" />
          <span className="text-[10px] font-medium text-slate-500">30-Day</span>
        </div>
      </div>
    </div>
  );
}
