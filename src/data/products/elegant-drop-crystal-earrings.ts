import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const elegantDropCrystalEarrings: Product = {
  slug: "elegant-drop-crystal-earrings",
  name: "Elegant Drop Crystal Earrings",
  shortDescription:
    "Long-form drop earrings featuring subtle crystal-style accents designed for refined elegance. Lightweight and balanced for comfortable wear.",
  description: `
    <p>
      Make a statement with the Elegant Drop Crystal Earrings — a sophisticated
      pair that blends graceful movement with sparkling crystal-style accents.
      These long-form drop earrings are designed to frame the face beautifully,
      drawing the eye with a gentle sway and a refined sense of occasion. Whether
      you're dressing for an evening event or elevating a daytime ensemble, these
      earrings deliver effortless glamour.
    </p>
    <p>
      The crystal-style elements are carefully set to capture and refract light,
      producing a subtle shimmer that adds depth and dimension to your look
      without feeling overdone. Each earring is meticulously balanced so that the
      weight is evenly distributed, ensuring comfortable wear even throughout
      longer events. The elongated silhouette creates an elegant visual line that
      complements both updos and flowing hairstyles.
    </p>
    <p>
      Despite their striking presence, these earrings remain remarkably
      lightweight. The secure post-and-back closure holds them firmly in place,
      giving you the freedom to move, dance, and enjoy your evening without a
      second thought. From cocktail parties to candlelit dinners, the Elegant
      Drop Crystal Earrings are your go-to accessory for moments that call for
      something extraordinary.
    </p>
    <ul>
      <li>Long-form drop design with graceful movement</li>
      <li>Crystal-style accents for subtle shimmer and sparkle</li>
      <li>Balanced construction for comfortable extended wear</li>
      <li>Secure post-and-back closure</li>
      <li>Elegant silhouette that frames and flatters the face</li>
    </ul>
  `,
  category: "Earrings",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.elegantDropCrystal1, alt: "Elegant Drop Crystal Earrings — front view" },
    { src: PRODUCT_IMAGES.elegantDropCrystal2, alt: "Elegant Drop Crystal Earrings — detail view" },
  ],
  variants: [
    {
      id: "earrings-elegant-drop-crystal",
      name: "Elegant Drop Crystal Earrings",
      sku: "JW- 038",
      price: 12096,
      inStock: true,
    },
  ],
  features: [
    "Long-form drop design with graceful movement",
    "Crystal-style accents for subtle shimmer",
    "Balanced and lightweight for extended wear",
    "Secure post-and-back closure",
    "Elegant silhouette that frames the face",
  ],
  rating: 4.9,
  reviewCount: 63,
  isFeatured: true,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Elegant Drop Crystal Earrings | Happy Store Shop",
    description:
      "Shop the Elegant Drop Crystal Earrings — sophisticated drop earrings with crystal-style accents for refined elegance. Lightweight, balanced, and designed for special occasions.",
  },
  checkoutChampProductId: "197",
};
