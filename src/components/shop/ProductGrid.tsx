"use client";

import { useState } from "react";
import { Product, ProductCategory } from "@/lib/types/product";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import { getAllCategories } from "@/data/products";

export function ProductGrid({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<ProductCategory | "All">("All");
  const categories = getAllCategories();

  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-slate-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
