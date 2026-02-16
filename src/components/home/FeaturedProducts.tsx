import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Featured Collection
            </h2>
            <p className="mt-2 text-slate-600">
              Handpicked pieces our customers love most.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark sm:block"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
