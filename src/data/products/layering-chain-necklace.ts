import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const layeringChainNecklace: Product = {
  slug: "layering-chain-necklace",
  name: "Layering Chain Necklace",
  shortDescription:
    "A fine chain necklace crafted for layering with other pieces or wearing alone for a subtle minimalist look.",
  description: `
    <p>
      Elevate your everyday style with the Layering Chain Necklace — a delicate,
      fine-link chain designed to complement any look. Whether you're building a
      curated necklace stack or seeking a single understated accent, this piece
      delivers effortless versatility. The lightweight construction sits
      comfortably against the skin, making it an ideal choice for all-day wear
      from morning meetings to evening outings.
    </p>
    <p>
      Crafted with attention to modern proportions, the chain features a smooth,
      polished finish that catches the light without overwhelming your ensemble.
      Its minimalist silhouette pairs beautifully with pendants, charms, and
      bolder statement pieces, or stands on its own as a refined finishing touch.
      The secure clasp ensures a confident fit throughout the day.
    </p>
    <p>
      Designed for comfort and durability, this necklace is built to keep up with
      your lifestyle. The sleek profile means it won't snag on clothing or get in
      the way, and the timeless design ensures it will remain a wardrobe staple
      season after season.
    </p>
    <ul>
      <li>Fine-link chain with polished finish</li>
      <li>Lightweight and comfortable for all-day wear</li>
      <li>Perfect for layering or wearing solo</li>
      <li>Secure clasp closure</li>
      <li>Modern minimalist design</li>
    </ul>
  `,
  category: "Necklaces",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.layeringChain1, alt: "Layering Chain Necklace — front view" },
    { src: PRODUCT_IMAGES.layeringChain2, alt: "Layering Chain Necklace — detail view" },
  ],
  variants: [
    {
      id: "necklace-layering-chain",
      name: "Layering Chain Necklace",
      sku: "JW- 003",
      price: 775,
      inStock: true,    },
  ],
  features: [
    "Fine-link chain with polished finish",
    "Lightweight and comfortable for all-day wear",
    "Ideal for layering with other necklaces",
    "Secure clasp closure",
    "Modern minimalist silhouette",
  ],
  rating: 4.7,
  reviewCount: 218,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Layering Chain Necklace | Happy Store Shop",
    description:
      "Shop the Layering Chain Necklace — a fine, versatile chain designed for layering or minimalist solo styling. Lightweight, comfortable, and crafted for everyday wear.",
  },
  checkoutChampProductId: "160",
};
