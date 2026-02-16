"use client";

import { useState } from "react";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Product } from "@/lib/types/product";
import { ImageGallery } from "./ImageGallery";
import { VariantSelector } from "./VariantSelector";
import { AddToCartButton } from "./AddToCartButton";
import { PriceDisplay } from "./PriceDisplay";

export function ProductDetail({ product }: { product: Product }) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* Left: Image Gallery */}
      <ImageGallery images={product.images} />

      {/* Right: Product Info */}
      <div className="flex flex-col gap-5">
        {/* Category + badges */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-brand-blue">{product.category}</span>
          {product.isNew && (
            <span className="rounded-full bg-brand-blue px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          )}
          {product.type === "digital" && (
            <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Digital
            </span>
          )}
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-brand-gold text-brand-gold"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-700">{product.rating}</span>
          <span className="text-sm text-slate-500">({product.reviewCount} reviews)</span>
        </div>

        {/* Price */}
        <PriceDisplay
          price={selectedVariant.price}
          compareAtPrice={selectedVariant.compareAtPrice}
          interval={product.type === "subscription" ? product.subscription?.interval : undefined}
        />

        {/* Short description */}
        <p className="text-slate-600 leading-relaxed">{product.shortDescription}</p>

        {/* Variant selector */}
        <VariantSelector
          variants={product.variants}
          selectedId={selectedVariantId}
          onSelect={setSelectedVariantId}
        />

        {/* Add to Cart */}
        <AddToCartButton product={product} variant={selectedVariant} />

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <Truck className="h-5 w-5 text-brand-blue" />
            <span className="text-xs font-medium text-slate-600">Free Shipping $75+</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center">
            <Shield className="h-5 w-5 text-brand-blue" />
            <span className="text-xs font-medium text-slate-600">Secure Checkout</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center">
            <RotateCcw className="h-5 w-5 text-brand-blue" />
            <span className="text-xs font-medium text-slate-600">30-Day Returns</span>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">Features</h3>
          <ul className="flex flex-col gap-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Shipping info */}
        <div className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3">
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-700">Shipping:</span> {product.shippingInfo}
          </p>
        </div>
      </div>
    </div>
  );
}
