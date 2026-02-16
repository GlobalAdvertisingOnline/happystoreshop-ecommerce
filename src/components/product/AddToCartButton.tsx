"use client";

import { useState } from "react";
import { ShoppingCart, Check, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart/CartContext";
import { Product, ProductVariant } from "@/lib/types/product";

interface AddToCartButtonProps {
  product: Product;
  variant: ProductVariant;
}

export function AddToCartButton({ product, variant }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      productSlug: product.slug,
      variantId: variant.id,
      quantity,
      name: product.name,
      variantName: variant.name,
      price: variant.price,
      image: product.images[0],
      type: product.type,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isSubscription = product.type === "subscription";

  return (
    <div className="flex flex-col gap-3">
      {/* Quantity selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-slate-700">Qty</label>
        <div className="flex items-center rounded-lg border border-slate-200">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-50"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="flex h-10 w-12 items-center justify-center text-sm font-medium text-slate-900">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-50"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart / Subscribe button */}
      <button
        onClick={handleAdd}
        disabled={!variant.inStock || added}
        className={`btn-shine flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold transition-all ${
          added
            ? "bg-brand-green text-white"
            : !variant.inStock
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-lg"
        }`}
      >
        {added ? (
          <>
            <Check className="h-5 w-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5" />
            {isSubscription ? "Subscribe & Save" : "Add to Cart"}
          </>
        )}
      </button>

      {/* Subscription disclosure */}
      {isSubscription && product.subscription && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-xs text-amber-800">
            You will be charged {`$${(product.subscription.recurringPrice / 100).toFixed(2)}`}/{product.subscription.interval}.
            Cancel anytime at{" "}
            <a href={product.subscription.cancelUrl} className="font-medium underline">
              {product.subscription.cancelUrl}
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
