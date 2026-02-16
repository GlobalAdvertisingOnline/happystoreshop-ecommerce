"use client";

import Image from "next/image";
import { CartItem } from "@/lib/types/product";
import { formatPrice } from "@/components/product/PriceDisplay";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
}

export function OrderSummary({ items, subtotal }: OrderSummaryProps) {
  const shippingCost = subtotal >= 7500 ? 0 : 599;
  const total = subtotal + shippingCost;

  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
      <h2 className="mb-4 text-lg font-bold text-slate-900">
        Order Summary ({items.length})
      </h2>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.variantId} className="flex gap-3">
            <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover"
                sizes="56px"
              />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-600 text-[10px] font-bold text-white">
                {item.quantity}
              </span>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900 leading-tight">{item.name}</p>
                <p className="text-xs text-slate-500">{item.variantName}</p>
              </div>
              <span className="text-sm font-medium text-slate-900">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-slate-200 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-medium text-slate-900">{formatPrice(subtotal)}</span>
        </div>
        <div className="mt-1 flex justify-between text-sm">
          <span className="text-slate-600">Shipping</span>
          <span className="font-medium text-slate-900">
            {shippingCost === 0 ? (
              <span className="text-brand-green">FREE</span>
            ) : (
              formatPrice(shippingCost)
            )}
          </span>
        </div>
        <div className="mt-3 flex justify-between border-t border-slate-200 pt-3">
          <span className="text-base font-bold text-slate-900">Total</span>
          <span className="text-xl font-bold text-slate-900">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Your information is encrypted and secure.
      </div>
    </div>
  );
}
