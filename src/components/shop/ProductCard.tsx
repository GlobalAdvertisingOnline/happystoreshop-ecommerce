"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types/product";
import { useCart } from "@/lib/cart/CartContext";

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const defaultVariant = product.variants[0];
  const hasCompare = defaultVariant.compareAtPrice && defaultVariant.compareAtPrice > defaultVariant.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productSlug: product.slug,
      variantId: defaultVariant.id,
      quantity: 1,
      name: product.name,
      variantName: defaultVariant.name,
      price: defaultVariant.price,
      image: product.images[0],
      type: product.type,
    });
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="hover-lift group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-blue px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            New
          </span>
        )}
        {product.type === "subscription" && (
          <span className="absolute right-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Subscribe
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-semibold text-slate-900 leading-tight line-clamp-2 group-hover:text-brand-blue transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-brand-gold text-brand-gold"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">
            {formatPrice(defaultVariant.price)}
          </span>
          {hasCompare && (
            <span className="price-compare text-sm">
              {formatPrice(defaultVariant.compareAtPrice!)}
            </span>
          )}
          {product.type === "subscription" && (
            <span className="text-xs text-slate-500">/{product.subscription?.interval}</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-md"
        >
          <ShoppingCart className="h-4 w-4" />
          {product.type === "subscription" ? "Subscribe" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}
