"use client";

import { ProductVariant } from "@/lib/types/product";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (variantId: string) => void;
}

export function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: VariantSelectorProps) {
  if (variants.length <= 1) return null;

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-slate-700">
        Options
      </legend>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onSelect(variant.id)}
            disabled={!variant.inStock}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
              selectedId === variant.id
                ? "border-brand-blue bg-brand-blue/5 text-brand-blue ring-1 ring-brand-blue/20"
                : variant.inStock
                ? "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                : "cursor-not-allowed border-slate-100 text-slate-300 line-through"
            }`}
            aria-pressed={selectedId === variant.id}
          >
            {variant.name}
            {!variant.inStock && " (Sold Out)"}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
