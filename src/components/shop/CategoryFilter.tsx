"use client";

import { ProductCategory } from "@/lib/types/product";

interface CategoryFilterProps {
  categories: ProductCategory[];
  selected: ProductCategory | "All";
  onSelect: (category: ProductCategory | "All") => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("All")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          selected === "All"
            ? "bg-brand-blue text-white shadow-sm"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
        }`}
      >
        All Products
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selected === cat
              ? "bg-brand-blue text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
