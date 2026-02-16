import type { Metadata } from "next";
import { Suspense } from "react";
import { ALL_PRODUCTS } from "@/data/products";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse our curated collection of fine jewelry. From necklaces and earrings to rings, bracelets, and curated sets. Free shipping on orders over $75.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Shop Our Collection
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Curated fine jewelry designed to elevate every look. Premium craftsmanship,
            modern design, delivered to your door.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Suspense>
            <ProductGrid products={ALL_PRODUCTS} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
