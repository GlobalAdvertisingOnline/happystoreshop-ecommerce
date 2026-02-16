import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const sculptedCuffBracelet: Product = {
  slug: "sculpted-cuff-bracelet",
  name: "Sculpted Cuff Bracelet",
  shortDescription:
    "A sculptural cuff bracelet inspired by modern design principles and clean architectural curves. Designed for statement styling with a refined appearance.",
  description: `
    <p>
      Command attention with the Sculpted Cuff Bracelet — a bold yet refined
      piece that draws inspiration from modern architecture and contemporary
      sculpture. The sweeping curves and clean lines create a striking silhouette
      on the wrist, transforming a simple accessory into a true conversation
      piece. This cuff is designed for those who appreciate the intersection of
      art and fashion.
    </p>
    <p>
      Every angle of this bracelet reveals a new perspective, from the smooth
      outer surface that reflects light in broad, elegant strokes to the gently
      tapered edges that give the piece its distinctive sculptural quality. The
      open-cuff design allows for easy on and off while providing a comfortable,
      adjustable fit that conforms naturally to the shape of your wrist.
    </p>
    <p>
      Despite its statement presence, the Sculpted Cuff Bracelet is remarkably
      wearable. The polished finish and carefully considered weight distribution
      ensure it sits comfortably without feeling heavy or cumbersome. Wear it as a
      standalone focal point or pair it with delicate chain bracelets for a
      layered look that balances boldness with subtlety.
    </p>
    <ul>
      <li>Sculptural design inspired by modern architecture</li>
      <li>Open-cuff style for easy wear and adjustable fit</li>
      <li>Polished finish with smooth, tapered edges</li>
      <li>Balanced weight distribution for all-day comfort</li>
      <li>Statement piece that pairs well with delicate accessories</li>
    </ul>
  `,
  category: "Bracelets",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.sculptedCuff1, alt: "Sculpted Cuff Bracelet — front view" },
    { src: PRODUCT_IMAGES.sculptedCuff2, alt: "Sculpted Cuff Bracelet — detail view" },
  ],
  variants: [
    {
      id: "bracelet-sculpted-cuff",
      name: "Sculpted Cuff Bracelet",
      sku: "JW- 028",
      price: 7800,
      inStock: true,    },
  ],
  features: [
    "Sculptural design inspired by modern architecture",
    "Open-cuff style for easy wear and adjustable fit",
    "Polished finish with smooth, tapered edges",
    "Balanced weight distribution for all-day comfort",
    "Statement piece that pairs well with delicate accessories",
  ],
  rating: 4.7,
  reviewCount: 98,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Sculpted Cuff Bracelet | Happy Store Shop",
    description:
      "Shop the Sculpted Cuff Bracelet — a bold, architecturally inspired cuff with clean curves and a polished finish. Designed for statement styling with refined comfort.",
  },
  checkoutChampProductId: "187",
};
