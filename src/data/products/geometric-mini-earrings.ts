import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const geometricMiniEarrings: Product = {
  slug: "geometric-mini-earrings",
  name: "Geometric Mini Earrings",
  shortDescription:
    "Minimal geometric earrings designed with clean lines and a refined silhouette inspired by modern jewelry trends. Lightweight construction ensures comfortable wear.",
  description: `
    <p>
      Discover the perfect balance of structure and subtlety with the Geometric
      Mini Earrings. Inspired by contemporary jewelry trends, these earrings
      feature clean angular lines and a refined silhouette that adds a modern
      edge to any outfit. Their compact size makes them an ideal everyday
      accessory — understated enough for the office yet distinctive enough to
      stand out at a casual dinner.
    </p>
    <p>
      Each pair is crafted with precision to ensure crisp geometric angles and a
      smooth polished finish. The lightweight construction means you can wear
      them comfortably from morning to night without fatigue. Whether paired with
      a tailored blazer or a simple tee, these earrings bring a touch of
      architectural elegance to your look.
    </p>
    <p>
      Designed for versatility, the Geometric Mini Earrings complement a wide
      range of styles and face shapes. Their minimalist profile works beautifully
      on its own or alongside other earrings for a curated ear stack. The secure
      post-and-back closure keeps them firmly in place throughout the day.
    </p>
    <ul>
      <li>Clean geometric silhouette with polished finish</li>
      <li>Lightweight and comfortable for all-day wear</li>
      <li>Compact mini size perfect for everyday styling</li>
      <li>Secure post-and-back closure</li>
      <li>Versatile design suited for layering or solo wear</li>
    </ul>
  `,
  category: "Earrings",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.geometricEarrings1, alt: "Geometric Mini Earrings — front view" },
    { src: PRODUCT_IMAGES.geometricEarrings2, alt: "Geometric Mini Earrings — detail view" },
  ],
  variants: [
    {
      id: "earrings-geometric-mini",
      name: "Geometric Mini Earrings",
      sku: "JW- 004",
      price: 995,
      inStock: true,
    },
  ],
  features: [
    "Clean geometric silhouette with polished finish",
    "Lightweight and comfortable for all-day wear",
    "Compact mini size for everyday styling",
    "Secure post-and-back closure",
    "Modern minimalist design inspired by architectural forms",
  ],
  rating: 4.5,
  reviewCount: 187,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Geometric Mini Earrings | Happy Store Shop",
    description:
      "Shop the Geometric Mini Earrings — minimal geometric studs with clean lines and a modern silhouette. Lightweight, comfortable, and perfect for everyday wear.",
  },
  checkoutChampProductId: "162",
};
