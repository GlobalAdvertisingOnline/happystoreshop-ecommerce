import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const kitchenEssentialsBundle: Product = {
  slug: "kitchen-essentials-bundle",
  name: "Kitchen Essentials Starter Bundle",
  shortDescription:
    "Complete kitchen starter set: walnut cutting board, ceramic utensil holder, linen towel set, and bamboo organizer tray.",
  description: `<p>Everything you need to outfit a beautiful, functional kitchen in one curated bundle. Our Kitchen Essentials Starter Bundle brings together four of our most popular kitchen items at a savings of over $60 compared to buying separately.</p>
<p>The bundle includes our handcrafted walnut cutting board, a ceramic utensil holder, a set of three premium linen kitchen towels, and a multi-compartment bamboo drawer organizer. Each piece is chosen to work together aesthetically while delivering everyday utility.</p>
<ul>
<li>Walnut cutting board (18" × 12")</li>
<li>Ceramic utensil holder (matte white)</li>
<li>3-pack premium linen kitchen towels</li>
<li>Bamboo drawer organizer tray</li>
<li>Save $60+ vs. buying separately</li>
<li>Gift-ready packaging</li>
</ul>`,
  category: "Kitchen",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.kitchenBundle1, alt: "Kitchen essentials bundle arranged on marble counter" },
    { src: PRODUCT_IMAGES.kitchenBundle2, alt: "Kitchen bundle items individually displayed" },
  ],
  variants: [
    {
      id: "kitchen-bundle-standard",
      name: "Complete Bundle",
      sku: "HSS-KITBUNDLE-STD",
      price: 19900,
      compareAtPrice: 26500,
      inStock: true,
    },
  ],
  features: [
    "Walnut cutting board included",
    "Ceramic utensil holder",
    "3 premium linen towels",
    "Bamboo drawer organizer",
    "Save $60+ vs. separate",
    "Gift-ready packaging",
  ],
  rating: 4.8,
  reviewCount: 145,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 2-3 business days. Free shipping included.",
  seo: {
    title: "Kitchen Essentials Starter Bundle | HappyStoreShop",
    description:
      "Complete kitchen starter set with walnut cutting board, ceramic utensil holder, linen towels, and bamboo organizer. Save $60+.",
  },
  checkoutChampProductId: "",
};
