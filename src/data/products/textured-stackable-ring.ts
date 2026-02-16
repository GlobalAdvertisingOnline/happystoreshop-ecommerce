import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const texturedStackableRing: Product = {
  slug: "textured-stackable-ring",
  name: "Textured Stackable Ring",
  shortDescription:
    "A textured ring featuring subtle design detailing intended for stacking or individual wear. Crafted to add visual interest while maintaining a refined appearance.",
  description: `
    <p>
      Discover the Textured Stackable Ring — a beautifully detailed band that
      brings dimension and character to your ring collection. Featuring a
      carefully applied surface texture, this ring offers a tactile quality and
      visual depth that sets it apart from plain bands. Whether worn alone as a
      quiet statement or combined with other rings for a curated stack, it adapts
      effortlessly to your personal style.
    </p>
    <p>
      The subtle patterning across the band catches light at every angle,
      creating a soft shimmer that draws the eye without overwhelming your look.
      Its slim profile makes it comfortable for all-day wear and a natural
      companion to both casual and polished outfits. The ring's versatile
      aesthetic means it pairs well with smooth bands, gemstone pieces, or other
      textured styles for a layered effect.
    </p>
    <p>
      Built with durability in mind, this ring is designed to maintain its
      distinctive texture through everyday activities. The refined proportions
      ensure a comfortable fit on any finger, making it easy to mix, match, and
      rearrange your stack whenever inspiration strikes.
    </p>
    <ul>
      <li>Hand-finished textured surface detail</li>
      <li>Slim, stackable profile</li>
      <li>Comfortable for all-day wear</li>
      <li>Pairs easily with other ring styles</li>
      <li>Durable construction for everyday use</li>
    </ul>
  `,
  category: "Rings",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.texturedRing1, alt: "Textured Stackable Ring — front view" },
    { src: PRODUCT_IMAGES.texturedRing2, alt: "Textured Stackable Ring — detail view" },
  ],
  variants: [
    {
      id: "ring-textured-stackable",
      name: "Textured Stackable Ring",
      sku: "JW- 006",
      price: 1500,
      inStock: true,    },
  ],
  features: [
    "Hand-finished textured surface detail",
    "Slim, stackable profile",
    "Comfortable for all-day wear",
    "Pairs easily with other ring styles",
    "Durable construction for everyday use",
  ],
  rating: 4.6,
  reviewCount: 203,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Textured Stackable Ring | Happy Store Shop",
    description:
      "Shop the Textured Stackable Ring — a detailed, versatile band designed for stacking or solo wear. Subtle texture adds visual interest while maintaining a refined look.",
  },
  checkoutChampProductId: "164",
};
