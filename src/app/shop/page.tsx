import type { Metadata } from "next";
import { ALL_PRODUCTS } from "@/data/products";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse our curated collection of premium home essentials. From candles and textiles to smart home and kitchen items. Free shipping on orders over $75.",
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
            Curated home essentials designed to elevate every room. Premium quality,
            thoughtful design, delivered to your door.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ProductGrid products={ALL_PRODUCTS} />
        </div>
      </section>
    </>
  );
}
