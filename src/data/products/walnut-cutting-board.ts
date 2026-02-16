import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const walnutCuttingBoard: Product = {
  slug: "walnut-cutting-board",
  name: "Handcrafted Walnut Cutting Board",
  shortDescription:
    "Solid black walnut end-grain cutting board with juice groove and rubber feet. Built to last a lifetime.",
  description: `<p>Our Handcrafted Walnut Cutting Board is a functional work of art for your kitchen. Each board is hand-selected from kiln-dried black walnut and assembled in an end-grain pattern that's gentler on knife edges and self-healing over time.</p>
<p>The deep juice groove catches runoff when carving meats, while non-slip rubber feet keep the board stable on any countertop. Finished with food-safe mineral oil and beeswax.</p>
<ul>
<li>Solid black walnut (end-grain)</li>
<li>18" × 12" × 1.5" thick</li>
<li>Deep juice groove on one side</li>
<li>Non-slip rubber feet</li>
<li>Food-safe mineral oil + beeswax finish</li>
<li>Self-healing surface</li>
<li>Handcrafted in the USA</li>
</ul>`,
  category: "Kitchen",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.cuttingBoard1, alt: "Handcrafted walnut cutting board on kitchen counter" },
    { src: PRODUCT_IMAGES.cuttingBoard2, alt: "End-grain pattern detail of walnut cutting board" },
  ],
  variants: [
    {
      id: "board-medium",
      name: "Medium (18\" × 12\")",
      sku: "HSS-BOARD-M",
      price: 8900,
      compareAtPrice: 10900,
      inStock: true,
    },
    {
      id: "board-large",
      name: "Large (20\" × 14\")",
      sku: "HSS-BOARD-L",
      price: 11900,
      compareAtPrice: 13900,
      inStock: true,
    },
  ],
  features: [
    "Solid black walnut",
    "End-grain construction",
    "Deep juice groove",
    "Non-slip rubber feet",
    "Food-safe finish",
    "Self-healing surface",
    "Handcrafted in the USA",
  ],
  rating: 4.9,
  reviewCount: 267,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 3-5 business days. Each board is made to order.",
  seo: {
    title: "Handcrafted Walnut Cutting Board | HappyStoreShop",
    description:
      "Solid black walnut end-grain cutting board with juice groove. Handcrafted in the USA, food-safe finish, built to last a lifetime.",
  },
  checkoutChampProductId: "",
};
