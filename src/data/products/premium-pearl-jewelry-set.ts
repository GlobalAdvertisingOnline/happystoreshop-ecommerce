import { Product } from "@/lib/types/product";

export const premiumPearlJewelrySet: Product = {
  slug: "premium-pearl-jewelry-set",
  name: "Premium Pearl Jewelry Set",
  shortDescription:
    "A coordinated jewelry set featuring pearl-style elements designed for a timeless, elegant look. Perfect for gifting or occasion styling.",
  description: `
    <p>Discover timeless sophistication with the Premium Pearl Jewelry Set, a beautifully coordinated collection featuring pearl-style accents that bring classic elegance to any ensemble. Each piece in this set is designed to work in harmony, delivering a cohesive, refined aesthetic that transitions effortlessly from everyday wear to special occasions. The lustrous pearl-inspired elements add a touch of grace that never goes out of style.</p>
    <p>Whether you're preparing for a wedding, a formal dinner, a milestone celebration, or simply want to elevate your daily look, this set provides everything you need in one carefully curated package. The pieces are lightweight yet substantial in appearance, striking the perfect balance between comfort and visual impact. Pair them together for a coordinated statement or wear individual items to accent your favorite outfits throughout the week.</p>
    <p>This fashion accessory set is intended for decorative and personal styling purposes only. It does not contain genuine pearls, precious metals, or gemstones. Presented in gift-ready packaging, the Premium Pearl Jewelry Set makes an exceptional gift for birthdays, anniversaries, holidays, or any occasion that calls for a thoughtful and elegant present.</p>
    <ul>
      <li>Pearl-style accents for a timeless, classic aesthetic</li>
      <li>Coordinated multi-piece set for a complete, polished look</li>
      <li>Lightweight design comfortable enough for extended wear</li>
      <li>Versatile styling for everyday, formal, and occasion outfits</li>
      <li>Gift-ready presentation ideal for special celebrations</li>
    </ul>
  `,
  category: "Sets",
  type: "physical",
  images: [
    {
      src: "https://images.checkoutchamp.com/global_advertising_llc/product1011.png",
      alt: "Premium Pearl Jewelry Set",
    },
  ],
  variants: [
    {
      id: "premium-pearl-jewelry-set-default",
      name: "Premium Pearl Jewelry Set",
      sku: "JW- 046",
      price: 16950,
      inStock: true,
    },
  ],
  features: [
    "Pearl-style elements for timeless, classic elegance",
    "Coordinated multi-piece set for effortless styling",
    "Lightweight and comfortable for all-day wear",
    "Versatile design for casual, formal, and occasion outfits",
    "Gift-ready packaging for birthdays, anniversaries, and holidays",
  ],
  rating: 4.9,
  reviewCount: 62,
  isFeatured: true,
  isNew: true,
  shippingInfo:
    "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Premium Pearl Jewelry Set | Happy Store Shop",
    description:
      "Shop the Premium Pearl Jewelry Set — a coordinated pearl-style jewelry collection for timeless elegance. Perfect for gifting and special occasion styling.",
  },
  checkoutChampProductId: "205",
};
