import { Product } from "@/lib/types/product";

export const magneticBracelet: Product = {
  slug: "magnetic-bracelet",
  name: "Magnetic Bracelet",
  shortDescription:
    "A wearable fashion accessory with embedded magnetic elements and minimalist style. Features an adjustable fit for comfortable everyday wear.",
  description: `
    <p>
      Explore a unique blend of style and design with the Magnetic Bracelet — a
      fashion-forward accessory that incorporates embedded magnetic elements into
      a sleek, minimalist form. The clean exterior reveals no unnecessary
      embellishments, letting the bracelet's smooth finish and modern proportions
      speak for themselves. This is an accessory designed to complement your look
      with understated sophistication.
    </p>
    <p>
      The adjustable fit ensures this bracelet sits comfortably on a wide range of
      wrist sizes, making it an excellent choice for personal wear or as a
      thoughtful gift. The magnetic elements are seamlessly integrated into the
      design, contributing to the bracelet's distinctive character without
      compromising its streamlined appearance. Lightweight yet substantial, it
      strikes the perfect balance between presence and comfort for all-day wear.
    </p>
    <p>
      The Magnetic Bracelet pairs effortlessly with both casual and polished
      ensembles. Layer it with other bracelets for a curated wrist stack, or let
      it stand on its own as a conversation-starting accessory. Its durable
      construction ensures it maintains its refined appearance through daily wear.
    </p>
    <p>
      <em>Intended as a fashion accessory; it is not a medical device and is not
      intended to diagnose, treat, cure, or prevent any disease.</em>
    </p>
    <ul>
      <li>Embedded magnetic elements with minimalist styling</li>
      <li>Adjustable fit for a wide range of wrist sizes</li>
      <li>Lightweight construction for comfortable all-day wear</li>
      <li>Sleek, polished finish with modern proportions</li>
      <li>Fashion accessory — not a medical device</li>
    </ul>
  `,
  category: "Bracelets",
  type: "physical",
  images: [
    { src: "https://images.checkoutchamp.com/global_advertising_llc/product691.png", alt: "Magnetic Bracelet" },
  ],
  variants: [
    {
      id: "bracelet-magnetic",
      name: "Magnetic Bracelet",
      sku: "JW- 015",
      price: 3900,
      inStock: true,
    },
  ],
  features: [
    "Embedded magnetic elements with minimalist styling",
    "Adjustable fit for a wide range of wrist sizes",
    "Lightweight construction for comfortable all-day wear",
    "Sleek, polished finish with modern proportions",
    "Fashion accessory — not a medical device",
  ],
  rating: 4.5,
  reviewCount: 312,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Magnetic Bracelet | Happy Store Shop",
    description:
      "Shop the Magnetic Bracelet — a minimalist fashion accessory with embedded magnetic elements and an adjustable fit. Stylish, lightweight, and designed for everyday wear.",
  },
  checkoutChampProductId: "173",
};
