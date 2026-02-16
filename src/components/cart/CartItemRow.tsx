"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/lib/types/product";
import { formatPrice } from "@/components/product/PriceDisplay";

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (variantId: string, qty: number) => void;
  onRemove: (variantId: string) => void;
}

export function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemRowProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      {/* Image */}
      <Link
        href={`/products/${item.productSlug}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 md:h-28 md:w-28"
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          className="object-cover"
          sizes="112px"
        />
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            href={`/products/${item.productSlug}`}
            className="text-sm font-semibold text-slate-900 hover:text-brand-blue transition-colors md:text-base"
          >
            {item.name}
          </Link>
          <p className="text-sm text-slate-500">{item.variantName}</p>
          {item.type === "subscription" && (
            <span className="mt-1 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
              Monthly Membership
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          {/* Quantity controls */}
          <div className="flex items-center rounded-lg border border-slate-200">
            <button
              onClick={() => onUpdateQuantity(item.variantId, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="flex h-11 w-11 items-center justify-center text-slate-500 transition-colors hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="flex h-11 w-10 items-center justify-center border-x border-slate-200 text-sm font-medium text-slate-900">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.variantId, item.quantity + 1)}
              className="flex h-11 w-11 items-center justify-center text-slate-500 transition-colors hover:bg-slate-50"
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-slate-900">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              onClick={() => onRemove(item.variantId)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
              aria-label={`Remove ${item.name} from cart`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
