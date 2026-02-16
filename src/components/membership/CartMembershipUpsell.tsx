"use client";

import Link from "next/link";
import { Crown, Truck, Percent, Check } from "lucide-react";
import { useMembership } from "@/lib/membership/MembershipContext";
import { formatPrice } from "@/components/product/PriceDisplay";

interface CartMembershipUpsellProps {
  subtotal: number;
}

export function CartMembershipUpsell({ subtotal }: CartMembershipUpsellProps) {
  const { isActive } = useMembership();

  // For active members — show applied badge
  if (isActive) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <Check className="h-5 w-5 text-brand-green" />
          </div>
          <div>
            <p className="text-sm font-bold text-green-700">
              HappyStore+ Member — Discounts Applied
            </p>
            <p className="text-xs text-green-600">
              Free shipping + 15% off applied to your order.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Calculate savings for non-members
  const shippingSaved = subtotal >= 7500 ? 0 : 599; // What they'd save on shipping
  const discountSaved = Math.round(subtotal * 0.15);
  const totalSaved = shippingSaved + discountSaved;

  // Only show if savings are meaningful
  if (totalSaved < 500) return null; // Less than $5 — not worth showing

  return (
    <div className="rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100/50 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
          <Crown className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-slate-900">
            Join HappyStore+ and save {formatPrice(totalSaved)} on this order
          </p>

          <div className="mt-3 flex flex-col gap-1.5">
            {shippingSaved > 0 && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Truck className="h-4 w-4 text-amber-600" />
                FREE shipping (save {formatPrice(shippingSaved)})
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Percent className="h-4 w-4 text-amber-600" />
              15% off all items (save {formatPrice(discountSaved)})
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Just $29.95/month · Cancel anytime
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/membership"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-md"
            >
              Join HappyStore+
            </Link>
            <Link
              href="/membership"
              className="rounded-lg border border-amber-200 px-5 py-2.5 text-sm font-medium text-amber-700 transition-all hover:bg-amber-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
