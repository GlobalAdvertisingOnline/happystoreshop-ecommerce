import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const linenDuvetCover: Product = {
  slug: "linen-duvet-cover",
  name: "Premium Linen Duvet Cover",
  shortDescription:
    "Stonewashed European flax linen duvet cover with coconut shell buttons. Gets softer with every wash.",
  description: `<p>Experience the luxury of European flax linen with our Premium Duvet Cover. Made from 100% French flax linen that's been stonewashed for an effortlessly relaxed look and a buttery-soft hand feel from day one.</p>
<p>The set includes one duvet cover and two matching pillowcases, each finished with natural coconut shell buttons — no hidden zippers. Linen is naturally temperature-regulating, breathable, and antimicrobial.</p>
<ul>
<li>100% French flax linen</li>
<li>Stonewashed for softness</li>
<li>Includes 2 matching pillowcases</li>
<li>Coconut shell button closure</li>
<li>Temperature regulating and breathable</li>
<li>OEKO-TEX Standard 100 certified</li>
<li>Machine washable</li>
</ul>`,
  category: "Bedroom",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.duvetCover1, alt: "Premium linen duvet cover on a modern bed" },
    { src: PRODUCT_IMAGES.duvetCover2, alt: "Close-up of linen texture with coconut shell buttons" },
  ],
  variants: [
    {
      id: "duvet-queen-natural",
      name: "Queen / Natural",
      sku: "HSS-DUVET-Q-NAT",
      price: 12900,
      compareAtPrice: 16900,
      inStock: true,
    },
    {
      id: "duvet-queen-sage",
      name: "Queen / Sage",
      sku: "HSS-DUVET-Q-SGE",
      price: 12900,
      compareAtPrice: 16900,
      inStock: true,
    },
    {
      id: "duvet-king-natural",
      name: "King / Natural",
      sku: "HSS-DUVET-K-NAT",
      price: 15900,
      compareAtPrice: 18900,
      inStock: true,
    },
    {
      id: "duvet-king-sage",
      name: "King / Sage",
      sku: "HSS-DUVET-K-SGE",
      price: 15900,
      compareAtPrice: 18900,
      inStock: true,
    },
  ],
  features: [
    "100% French flax linen",
    "Stonewashed for softness",
    "2 matching pillowcases included",
    "Coconut shell button closure",
    "Temperature regulating",
    "OEKO-TEX Standard 100",
    "Machine washable",
  ],
  rating: 4.8,
  reviewCount: 312,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-2 business days. Free shipping on orders over $75.",
  seo: {
    title: "Premium Linen Duvet Cover | HappyStoreShop",
    description:
      "Stonewashed European flax linen duvet cover set with 2 pillowcases. Temperature-regulating, breathable, gets softer with every wash.",
  },
  checkoutChampProductId: "",
};
