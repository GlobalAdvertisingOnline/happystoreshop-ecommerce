import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const doubleChainBracelet: Product = {
  slug: "double-chain-bracelet",
  name: "Double Chain Bracelet",
  shortDescription:
    "A bracelet combining two complementary chain styles for a layered and elegant look. Designed for comfort and versatile daily styling.",
  description: `
    <p>
      Embrace effortless elegance with the Double Chain Bracelet — a thoughtfully
      designed piece that combines two distinct chain styles into one cohesive
      accessory. The interplay of the dual chains creates a natural layered effect
      without the hassle of coordinating multiple bracelets, giving you a polished,
      put-together look every time you clasp it on.
    </p>
    <p>
      Each chain has been selected for its complementary weight and texture,
      resulting in a bracelet that moves gracefully with your wrist. The balanced
      drape sits comfortably throughout the day, whether you're at your desk or
      heading out for the evening. The combined chains catch light from different
      angles, adding subtle dimension and visual interest to your wrist.
    </p>
    <p>
      Versatility is at the heart of this design. The Double Chain Bracelet pairs
      beautifully with watches, bangles, and other bracelets for a curated arm
      stack, or it stands confidently on its own as a refined everyday accessory.
      The secure closure keeps both chains aligned and in place, so you can wear it
      with confidence from morning to night.
    </p>
    <ul>
      <li>Two complementary chain styles in one bracelet</li>
      <li>Natural layered look without multiple pieces</li>
      <li>Lightweight and comfortable for all-day wear</li>
      <li>Secure clasp keeps chains aligned</li>
      <li>Versatile design for stacking or solo styling</li>
    </ul>
  `,
  category: "Bracelets",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.doubleChain1, alt: "Double Chain Bracelet — front view" },
    { src: PRODUCT_IMAGES.doubleChain2, alt: "Double Chain Bracelet — detail view" },
  ],
  variants: [
    {
      id: "bracelet-double-chain",
      name: "Double Chain Bracelet",
      sku: "JW- 007",
      price: 1677,
      inStock: true,    },
  ],
  features: [
    "Two complementary chain styles in one bracelet",
    "Natural layered look without multiple pieces",
    "Lightweight and comfortable for all-day wear",
    "Secure clasp keeps chains aligned",
    "Versatile design for stacking or solo styling",
  ],
  rating: 4.5,
  reviewCount: 165,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Double Chain Bracelet | Happy Store Shop",
    description:
      "Shop the Double Chain Bracelet — two complementary chain styles combined for an elegant layered look. Comfortable, versatile, and designed for everyday wear.",
  },
  checkoutChampProductId: "165",
};
