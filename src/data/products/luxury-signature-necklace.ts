import { Product } from "@/lib/types/product";

export const luxurySignatureNecklace: Product = {
  slug: "luxury-signature-necklace",
  name: "Luxury Signature Necklace",
  shortDescription:
    "A high-end statement necklace with refined structure and premium styling aesthetics, designed as a centerpiece jewelry item.",
  description: `
    <p>
      Experience the pinnacle of accessory design with the Luxury Signature
      Necklace — an exquisite statement piece crafted to serve as the
      definitive centerpiece of any jewelry collection. Every element of this
      necklace has been considered with the discerning wearer in mind, from
      its refined structural lines to its premium surface finishing that
      delivers a depth of luster typically reserved for the finest fashion
      houses.
    </p>
    <p>
      The design language of this necklace speaks to a confident, elevated
      aesthetic. Its structured form creates bold geometric interplay that
      transforms with light and movement, revealing new facets and dimensions
      as you wear it. The proportions are calibrated to sit with authority
      along the neckline, framing the face and shoulders in a way that
      enhances any silhouette — from tailored evening wear to refined
      casual dressing.
    </p>
    <p>
      The Luxury Signature Necklace is engineered to match its visual
      ambition with lasting comfort. Premium construction ensures the piece
      maintains its refined appearance wear after wear, while the advanced
      clasp system provides seamless fastening and dependable security.
      Presented as a luxury fashion accessory for personal adornment, this
      necklace carries no claims beyond its role as an exceptional styling
      piece.
    </p>
    <ul>
      <li>Premium construction with refined structural design</li>
      <li>High-luster finish for exceptional light reflection</li>
      <li>Calibrated proportions for flattering neckline placement</li>
      <li>Advanced clasp system for seamless, secure fastening</li>
      <li>Durable build quality for lasting wear and enjoyment</li>
    </ul>
  `,
  category: "Necklaces",
  type: "physical",
  images: [
    { src: "https://images.checkoutchamp.com/global_advertising_llc/product1021.png", alt: "Luxury Signature Necklace" },
  ],
  variants: [
    {
      id: "necklace-luxury-signature",
      name: "Luxury Signature Necklace",
      sku: "JW- 047",
      price: 18600,
      inStock: true,
    },
  ],
  features: [
    "Premium construction with high-end structural design",
    "Exceptional high-luster polished finish",
    "Calibrated proportions for flattering placement",
    "Advanced secure clasp system",
    "Durable build for lasting luxury styling",
  ],
  rating: 4.9,
  reviewCount: 72,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Luxury Signature Necklace | Happy Store Shop",
    description:
      "Shop the Luxury Signature Necklace — a high-end statement piece with refined structure and premium aesthetics. The centerpiece of any jewelry collection.",
  },
  checkoutChampProductId: "206",
};
