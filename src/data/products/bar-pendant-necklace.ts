import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const barPendantNecklace: Product = {
  slug: "bar-pendant-necklace",
  name: "Bar Pendant Necklace",
  shortDescription:
    "A minimalist bar pendant necklace designed with modern simplicity and balanced proportions.",
  description: `
    <p>
      Make a quiet statement with the Bar Pendant Necklace — a clean-lined
      accessory that embodies modern minimalism at its finest. The horizontal bar
      pendant sits at the perfect drop length, creating a balanced focal point
      that draws the eye without competing with the rest of your outfit. Whether
      paired with a crisp blouse or a casual tee, this necklace adds a
      polished, intentional touch to any look.
    </p>
    <p>
      The pendant's sleek geometric profile reflects a contemporary design
      sensibility rooted in simplicity and proportion. Its smooth, refined finish
      gives it a subtle luminosity that transitions seamlessly from daytime
      errands to dinner plans. Layer it with finer chains for added dimension, or
      let it stand alone as an elegant accent piece.
    </p>
    <p>
      Built for the pace of real life, the Bar Pendant Necklace is lightweight
      enough for comfortable all-day wear while remaining durable enough to
      withstand daily use. The adjustable chain length lets you customize the
      fit, and the dependable clasp keeps everything securely in place.
    </p>
    <ul>
      <li>Horizontal bar pendant with smooth finish</li>
      <li>Balanced proportions for a modern silhouette</li>
      <li>Lightweight and comfortable for everyday styling</li>
      <li>Adjustable chain length</li>
      <li>Versatile enough for layering or solo wear</li>
    </ul>
  `,
  category: "Necklaces",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.barPendant1, alt: "Bar Pendant Necklace — front view" },
    { src: PRODUCT_IMAGES.barPendant2, alt: "Bar Pendant Necklace — detail view" },
  ],
  variants: [
    {
      id: "necklace-bar-pendant",
      name: "Bar Pendant Necklace",
      sku: "JW- 005",
      price: 1258,
      inStock: true,    },
  ],
  features: [
    "Horizontal bar pendant with refined finish",
    "Modern geometric design",
    "Lightweight for comfortable all-day wear",
    "Adjustable chain length for custom fit",
    "Perfect for layering or standalone styling",
  ],
  rating: 4.6,
  reviewCount: 156,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Bar Pendant Necklace | Happy Store Shop",
    description:
      "Shop the Bar Pendant Necklace — a minimalist geometric pendant with balanced proportions. Designed for modern simplicity and everyday versatility.",
  },
  checkoutChampProductId: "163",
};
