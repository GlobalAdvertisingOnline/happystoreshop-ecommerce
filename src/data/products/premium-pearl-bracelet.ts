import { Product } from "@/lib/types/product";

export const premiumPearlBracelet: Product = {
  slug: "premium-pearl-bracelet",
  name: "Premium Pearl Bracelet",
  shortDescription:
    "A refined bracelet with pearl-style elements, clean spacing, and minimalist detailing. Designed for elegant daily wear and timeless sophistication.",
  description: `
    <p>
      Discover timeless refinement with the Premium Pearl Bracelet — an exquisite
      accessory that showcases pearl-style elements in a clean, contemporary
      setting. Each pearl-inspired bead is carefully spaced along the bracelet,
      creating a rhythmic pattern that balances classic elegance with modern
      minimalism. The result is a piece that feels both luxurious and approachable,
      equally suited for boardrooms and brunch.
    </p>
    <p>
      The attention to detail in this bracelet is evident in every aspect of its
      construction. The pearl-style elements exhibit a soft, luminous quality that
      complements a wide range of skin tones, while the minimalist hardware and
      clean spacing prevent the design from feeling overly ornate. The secure yet
      discreet clasp maintains the bracelet's seamless aesthetic, and the
      comfortable fit ensures you can wear it from morning through evening
      without a second thought.
    </p>
    <p>
      The Premium Pearl Bracelet occupies a special place in any jewelry
      collection — it's the piece you reach for when you want to add a touch of
      sophistication without effort. Pair it with pearl earrings or a pendant
      necklace for a coordinated look, or let it contrast against more modern,
      geometric accessories for a style that's entirely your own. This is elegant
      daily wear, redefined.
    </p>
    <ul>
      <li>Pearl-style elements with a soft, luminous finish</li>
      <li>Clean spacing and minimalist detailing</li>
      <li>Discreet, secure clasp for a seamless look</li>
      <li>Comfortable fit designed for all-day elegance</li>
      <li>Versatile pairing with both classic and modern accessories</li>
    </ul>
  `,
  category: "Bracelets",
  type: "physical",
  images: [
    { src: "https://images.checkoutchamp.com/global_advertising_llc/product891.png", alt: "Premium Pearl Bracelet" },
  ],
  variants: [
    {
      id: "bracelet-premium-pearl",
      name: "Premium Pearl Bracelet",
      sku: "JW- 034",
      price: 10749,
      inStock: true,
    },
  ],
  features: [
    "Pearl-style elements with a soft, luminous finish",
    "Clean spacing and minimalist detailing",
    "Discreet, secure clasp for a seamless look",
    "Comfortable fit designed for all-day elegance",
    "Versatile pairing with both classic and modern accessories",
  ],
  rating: 4.8,
  reviewCount: 89,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Premium Pearl Bracelet | Happy Store Shop",
    description:
      "Shop the Premium Pearl Bracelet — refined pearl-style elements with clean spacing and minimalist detailing. Timeless sophistication for elegant daily wear.",
  },
  checkoutChampProductId: "193",
};
