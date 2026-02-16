import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_PRODUCTS, getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/product/ProductDetail";
import { RelatedProducts } from "@/components/product/RelatedProducts";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.seo.title,
    description: product.seo.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
            <a href="/shop" className="hover:text-brand-blue transition-colors">Shop</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-brand-blue transition-colors"
            >
              {product.category}
            </a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-slate-700 font-medium" aria-current="page">{product.name}</span>
          </nav>

          <ProductDetail product={product} />

          {/* Full description */}
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-4 text-xl font-bold text-slate-900">About This Product</h2>
            <div
              className="prose prose-slate max-w-none prose-p:leading-relaxed prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}
