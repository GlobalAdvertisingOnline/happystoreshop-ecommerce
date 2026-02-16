import { Product } from "@/lib/types/product";

export const velvetPouch: Product = {
  slug: "velvet-pouch",
  name: "Velvet Pouch",
  shortDescription:
    "A soft velvet drawstring pouch perfect for storing jewelry, accessories, and small keepsakes.",
  description: `
    <p>
      Keep your favorite pieces safe and beautifully organized with the Velvet
      Pouch — a luxuriously soft drawstring bag designed to cradle jewelry,
      accessories, and treasured keepsakes. The plush velvet exterior feels
      indulgent to the touch while providing a gentle, scratch-free interior
      that helps protect delicate surfaces from everyday wear and friction.
    </p>
    <p>
      Compact enough to slip into a handbag, carry-on, or dresser drawer, this
      pouch is an essential companion for travel and daily organization alike.
      The smooth drawstring closure keeps contents secure without added bulk,
      making it equally suited for gifting — simply place a piece of jewelry
      inside for an effortlessly elegant presentation.
    </p>
    <p>
      Whether you use it to organize your jewelry collection at home or to
      protect accessories on the go, the Velvet Pouch combines practicality with
      a refined aesthetic. Lightweight and reusable, it is a versatile addition
      to any accessory routine. This product is a fashion accessory and storage
      item only.
    </p>
    <ul>
      <li>Soft velvet fabric with plush interior lining</li>
      <li>Drawstring closure for secure, easy access</li>
      <li>Compact and lightweight for travel convenience</li>
      <li>Reusable design suitable for gifting and organization</li>
      <li>Helps protect jewelry and accessories from surface scratches</li>
    </ul>
  `,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://images.checkoutchamp.com/global_advertising_llc/product541.png", alt: "Velvet Pouch" },
  ],
  variants: [
    {
      id: "accessory-velvet-pouch",
      name: "Velvet Pouch",
      sku: "JW- VP",
      price: 500,
      inStock: true,
    },
  ],
  features: [
    "Soft velvet fabric for gentle jewelry protection",
    "Drawstring closure keeps contents secure",
    "Compact and lightweight for on-the-go storage",
    "Reusable and versatile for gifting or organization",
  ],
  rating: 4.6,
  reviewCount: 312,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Velvet Pouch | Happy Store Shop",
    description:
      "Shop the Velvet Pouch — a soft drawstring pouch for storing jewelry, accessories, and keepsakes. Lightweight, reusable, and perfect for travel or gifting.",
  },
  checkoutChampProductId: "158",
};
