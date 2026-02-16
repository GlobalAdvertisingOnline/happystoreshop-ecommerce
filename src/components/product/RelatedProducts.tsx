import { Product } from "@/lib/types/product";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function RelatedProducts({
  product,
}: {
  product: Product;
}) {
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
