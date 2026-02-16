"use client";

import Link from "next/link";
import { CartItem } from "@/lib/types/product";
import { formatPrice } from "@/components/product/PriceDisplay";

interface ReviewStepProps {
  contactEmail: string;
  contactPhone: string;
  shippingName: string;
  shippingAddress: string;
  cardLast4: string;
  items: CartItem[];
  subtotal: number;
  hasSubscription: boolean;
  subscriptionConsent: boolean;
  onSubscriptionConsentChange: (checked: boolean) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export function ReviewStep({
  contactEmail,
  contactPhone,
  shippingName,
  shippingAddress,
  cardLast4,
  items,
  subtotal,
  hasSubscription,
  subscriptionConsent,
  onSubscriptionConsentChange,
  onBack,
  onPlaceOrder,
  isSubmitting,
  error,
}: ReviewStepProps) {
  const shippingCost = subtotal >= 7500 ? 0 : 599;
  const total = subtotal + shippingCost;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-slate-900">Review Your Order</h2>

      {/* Contact */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Contact</h3>
        <p className="text-sm text-slate-600">{contactEmail}</p>
        <p className="text-sm text-slate-600">{contactPhone}</p>
      </div>

      {/* Shipping */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Ship To</h3>
        <p className="text-sm text-slate-600">{shippingName}</p>
        <p className="text-sm text-slate-600">{shippingAddress}</p>
      </div>

      {/* Payment */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Payment</h3>
        <p className="text-sm text-slate-600">Card ending in {cardLast4}</p>
      </div>

      {/* Items */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">Items ({items.length})</h3>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.variantId} className="flex justify-between text-sm">
              <span className="text-slate-600">
                {item.name} ({item.variantName}) × {item.quantity}
              </span>
              <span className="font-medium text-slate-900">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-slate-100 pt-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Shipping</span>
            <span className="font-medium">
              {shippingCost === 0 ? "FREE" : formatPrice(shippingCost)}
            </span>
          </div>
          <div className="mt-2 flex justify-between text-base font-bold text-slate-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {/* Subscription consent (required for subscription items) */}
      {hasSubscription && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="mb-3 text-sm font-medium text-amber-800">
            Your order includes recurring subscription items. You will be charged
            on a recurring basis until you cancel.
          </p>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={subscriptionConsent}
              onChange={(e) => onSubscriptionConsentChange(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-amber-400 text-brand-blue focus:ring-brand-blue"
            />
            <span className="text-sm text-amber-800">
              I agree to recurring charges as described above. I understand I can
              cancel anytime at{" "}
              <a href="/cancel" className="font-medium underline">happystoreshop.com/cancel</a>.
            </span>
          </label>
        </div>
      )}

      {/* Legal links */}
      <p className="text-xs text-slate-500">
        By placing this order, you agree to our{" "}
        <Link href="/terms-of-service" className="underline hover:text-brand-blue">Terms of Service</Link>,{" "}
        <Link href="/privacy-policy" className="underline hover:text-brand-blue">Privacy Policy</Link>, and{" "}
        <Link href="/refund-policy" className="underline hover:text-brand-blue">Refund Policy</Link>.
      </p>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-brand-red/20 bg-red-50 p-4" role="alert">
          <p className="text-sm font-medium text-brand-red">{error}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={onPlaceOrder}
          disabled={isSubmitting || (hasSubscription && !subscriptionConsent)}
          className="btn-shine flex-1 rounded-xl bg-brand-blue px-6 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
