import { Product } from "@/lib/types/product";

export const magneticPouch: Product = {
  slug: "magnetic-pouch",
  name: "Magnetic Pouch",
  shortDescription:
    "A compact storage pouch with a magnetic closure designed for quick access to jewelry and small accessories.",
  description: `
    <p>
      Streamline your accessory storage with the Magnetic Pouch — a sleek,
      compact case engineered for effortless organization. The integrated
      magnetic closure provides a satisfying snap-shut seal that keeps your
      jewelry and small accessories securely contained while allowing instant,
      one-handed access whenever you need it.
    </p>
    <p>
      Designed with travel in mind, this pouch fits neatly into handbags,
      carry-ons, and even jacket pockets without adding unnecessary bulk. The
      interior offers a smooth, protective surface that helps shield rings,
      earrings, and pendants from contact scratches during transit. Its
      structured form maintains shape over time, ensuring your pieces stay
      neatly in place.
    </p>
    <p>
      Whether you are heading to the office or across the globe, the Magnetic
      Pouch delivers polished convenience in a refined package. Pair it with
      your favorite jewelry for a complete gifting experience, or keep one in
      every bag for always-ready organization. This product is a fashion
      accessory and storage item only.
    </p>
    <ul>
      <li>Magnetic snap closure for quick, secure access</li>
      <li>Compact profile fits bags, pockets, and carry-ons</li>
      <li>Smooth interior helps protect delicate jewelry surfaces</li>
      <li>Structured design maintains shape over time</li>
      <li>Ideal for travel, gifting, and everyday organization</li>
    </ul>
  `,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://images.checkoutchamp.com/global_advertising_llc/product551.jpeg", alt: "Magnetic Pouch" },
  ],
  variants: [
    {
      id: "accessory-magnetic-pouch",
      name: "Magnetic Pouch",
      sku: "JW- MP",
      price: 500,
      inStock: true,
    },
  ],
  features: [
    "Magnetic closure for effortless one-handed access",
    "Compact and travel-friendly design",
    "Smooth interior lining protects delicate pieces",
    "Structured form holds shape during use",
  ],
  rating: 4.5,
  reviewCount: 287,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Magnetic Pouch | Happy Store Shop",
    description:
      "Shop the Magnetic Pouch — a compact storage case with magnetic closure for quick access to jewelry and accessories. Perfect for travel and daily organization.",
  },
  checkoutChampProductId: "159",
};
