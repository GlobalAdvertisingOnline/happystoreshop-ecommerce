import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const crystalAccentRing: Product = {
  slug: "crystal-accent-ring",
  name: "Crystal Accent Ring",
  shortDescription:
    "A modern ring featuring a subtle crystal-style detail within a clean minimalist setting. Designed for decorative wear and personal styling.",
  description: `
    <p>
      Make a refined statement with the Crystal Accent Ring — a sleek,
      contemporary piece that balances modern minimalism with a touch of sparkle.
      A carefully set crystal-style stone sits at the center of a clean band,
      catching the light in a way that feels both understated and eye-catching.
      This ring is designed for those who appreciate fine details without excess.
    </p>
    <p>
      The minimalist setting allows the crystal accent to take center stage,
      creating a focal point that elevates any outfit. Whether you're dressing up
      for a special occasion or adding a finishing touch to your everyday look,
      this ring transitions seamlessly between settings. Its low-profile design
      ensures it won't catch on clothing or feel cumbersome during daily tasks.
    </p>
    <p>
      Crafted with precision, the Crystal Accent Ring delivers a polished
      appearance that stands the test of time. The secure stone setting and
      smooth interior band provide lasting comfort, making it a piece you'll
      reach for again and again. Pair it with simple bands for a stacked look or
      let it shine on its own.
    </p>
    <ul>
      <li>Crystal-style accent stone in a minimalist setting</li>
      <li>Low-profile design for everyday comfort</li>
      <li>Polished band with smooth interior finish</li>
      <li>Versatile styling from casual to formal</li>
      <li>Secure stone setting for lasting wear</li>
    </ul>
  `,
  category: "Rings",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.crystalRing1, alt: "Crystal Accent Ring — front view" },
    { src: PRODUCT_IMAGES.crystalRing2, alt: "Crystal Accent Ring — detail view" },
  ],
  variants: [
    {
      id: "ring-crystal-accent",
      name: "Crystal Accent Ring",
      sku: "JW- 021",
      price: 4900,
      inStock: true,    },
  ],
  features: [
    "Crystal-style accent stone in a minimalist setting",
    "Low-profile design for everyday comfort",
    "Polished band with smooth interior finish",
    "Versatile styling from casual to formal",
    "Secure stone setting for lasting wear",
  ],
  rating: 4.8,
  reviewCount: 142,
  isFeatured: true,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Crystal Accent Ring | Happy Store Shop",
    description:
      "Shop the Crystal Accent Ring — a modern, minimalist ring with a subtle crystal-style detail. Clean design meets understated sparkle for effortless personal styling.",
  },
  checkoutChampProductId: "180",
};
