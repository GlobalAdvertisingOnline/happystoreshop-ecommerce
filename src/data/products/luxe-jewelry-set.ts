import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const luxeJewelrySet: Product = {
  slug: "luxe-jewelry-set",
  name: "Luxe Jewelry Set",
  shortDescription:
    "A coordinated jewelry set combining matching necklace and earrings designed for elegant styling and gifting. Crafted for visual harmony and modern appeal.",
  description: `
    <p>
      Elevate every occasion with the Luxe Jewelry Set — a beautifully
      coordinated collection that pairs a matching necklace and earrings in one
      thoughtfully curated package. Designed to work in perfect harmony, this set
      takes the guesswork out of accessorizing and delivers a polished,
      put-together look from the moment you put it on. Whether you're treating
      yourself or searching for the perfect gift, the Luxe Jewelry Set makes a
      lasting impression.
    </p>
    <p>
      The necklace features a clean, modern silhouette that sits elegantly at the
      collarbone, while the coordinating earrings echo its design language with
      complementary proportions and finish. Together, the pieces create a sense of
      visual continuity that elevates any outfit — from a simple blouse and jeans
      to a cocktail dress. Each component has been crafted with the same attention
      to detail, ensuring a cohesive aesthetic across the entire set.
    </p>
    <p>
      Presented in packaging that's ready for gifting, the Luxe Jewelry Set is an
      ideal choice for birthdays, anniversaries, holidays, or simply a meaningful
      gesture for someone special. The versatile design ensures the recipient can
      wear the pieces together for maximum impact or separately for everyday
      styling flexibility.
    </p>
    <ul>
      <li>Coordinated necklace and earring set</li>
      <li>Matching design language for a cohesive look</li>
      <li>Versatile pieces that work together or independently</li>
      <li>Gift-ready presentation</li>
      <li>Modern, elegant aesthetic for any occasion</li>
    </ul>
  `,
  category: "Sets",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.luxeSet1, alt: "Luxe Jewelry Set — full set view" },
    { src: PRODUCT_IMAGES.luxeSet2, alt: "Luxe Jewelry Set — detail view" },
  ],
  variants: [
    {
      id: "set-luxe-jewelry",
      name: "Luxe Jewelry Set",
      sku: "JW- 041",
      price: 14000,
      inStock: true,    },
  ],
  features: [
    "Coordinated necklace and earring set",
    "Matching design language for a cohesive look",
    "Versatile pieces that work together or independently",
    "Gift-ready presentation",
    "Modern, elegant aesthetic for any occasion",
  ],
  rating: 4.9,
  reviewCount: 47,
  isFeatured: true,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Luxe Jewelry Set | Happy Store Shop",
    description:
      "Shop the Luxe Jewelry Set — a coordinated necklace and earring collection designed for elegant styling and gifting. Modern design with visual harmony for any occasion.",
  },
  checkoutChampProductId: "200",
};
