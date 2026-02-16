import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const fineCableChainNecklace: Product = {
  slug: "fine-cable-chain-necklace",
  name: "Fine Cable Chain Necklace",
  shortDescription:
    "A refined cable chain necklace designed for layering or standalone minimalist styling.",
  description: `
    <p>
      Discover the Fine Cable Chain Necklace — a timeless essential that brings
      quiet elegance to every outfit. The classic cable link pattern is rendered
      in a fine gauge that feels almost weightless against the skin, yet carries
      enough visual presence to stand confidently on its own. Its smooth,
      polished links create a fluid drape that moves naturally with you
      throughout the day.
    </p>
    <p>
      This necklace was designed with intentional restraint. Every link is
      crafted to sit flat and catch the light evenly, producing a soft, refined
      shimmer rather than a flashy glare. The result is a piece that feels
      equally at home in a boardroom, at brunch, or on a weekend stroll — the
      kind of necklace you reach for without thinking because it simply works
      with everything.
    </p>
    <p>
      Whether you're an avid layerer building a signature stack or someone who
      prefers the impact of a single well-chosen piece, the Fine Cable Chain
      delivers. Its durable construction is engineered to resist tangling, and
      the secure lobster clasp ensures it stays exactly where you want it. This
      is everyday jewelry done right.
    </p>
    <ul>
      <li>Classic cable link design with polished finish</li>
      <li>Fine gauge for a lightweight, comfortable fit</li>
      <li>Tangle-resistant construction</li>
      <li>Secure lobster clasp closure</li>
      <li>Versatile styling — layer or wear solo</li>
    </ul>
  `,
  category: "Necklaces",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.fineCableChain1, alt: "Fine Cable Chain Necklace — front view" },
    { src: PRODUCT_IMAGES.fineCableChain2, alt: "Fine Cable Chain Necklace — detail view" },
  ],
  variants: [
    {
      id: "necklace-fine-cable",
      name: "Fine Cable Chain Necklace",
      sku: "JW- 011",
      price: 2995,
      inStock: true,    },
  ],
  features: [
    "Classic cable link pattern with polished finish",
    "Fine gauge for lightweight comfort",
    "Tangle-resistant link construction",
    "Secure lobster clasp closure",
    "Designed for layering or standalone wear",
  ],
  rating: 4.8,
  reviewCount: 312,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Fine Cable Chain Necklace | Happy Store Shop",
    description:
      "Shop the Fine Cable Chain Necklace — a refined cable link chain with a smooth polished finish. Lightweight, tangle-resistant, and perfect for everyday elegance.",
  },
  checkoutChampProductId: "169",
};
