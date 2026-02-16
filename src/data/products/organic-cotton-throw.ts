import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const organicCottonThrow: Product = {
  slug: "organic-cotton-throw",
  name: "Organic Cotton Throw Blanket",
  shortDescription:
    "Ultra-soft GOTS-certified organic cotton throw. Generously sized at 60×80 inches with hand-finished fringe detail.",
  description: `<p>Wrap yourself in pure comfort with our Organic Cotton Throw Blanket. Woven from GOTS-certified organic cotton, this generously sized throw is impossibly soft with a beautiful textured weave.</p>
<p>The hand-finished fringe detail adds an artisanal touch that elevates any sofa, armchair, or bed. Pre-washed for maximum softness right out of the box — it only gets softer with every wash.</p>
<ul>
<li>GOTS-certified organic cotton</li>
<li>60 × 80 inches — generously sized</li>
<li>Pre-washed for immediate softness</li>
<li>Hand-finished fringe detail</li>
<li>Machine washable, tumble dry low</li>
<li>OEKO-TEX Standard 100 certified</li>
</ul>`,
  category: "Living Room",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.cottonThrow1, alt: "Organic cotton throw blanket draped over sofa" },
    { src: PRODUCT_IMAGES.cottonThrow2, alt: "Close-up of organic cotton throw texture and fringe" },
  ],
  variants: [
    {
      id: "throw-natural",
      name: "Natural Ivory",
      sku: "HSS-THROW-NAT",
      price: 8900,
      compareAtPrice: 11900,
      inStock: true,
    },
    {
      id: "throw-sage",
      name: "Sage Green",
      sku: "HSS-THROW-SGE",
      price: 8900,
      compareAtPrice: 11900,
      inStock: true,
    },
    {
      id: "throw-terracotta",
      name: "Terracotta",
      sku: "HSS-THROW-TER",
      price: 8900,
      compareAtPrice: 11900,
      inStock: true,
    },
    {
      id: "throw-charcoal",
      name: "Charcoal",
      sku: "HSS-THROW-CHR",
      price: 9900,
      compareAtPrice: 12900,
      inStock: true,
    },
  ],
  features: [
    "GOTS-certified organic cotton",
    "60 × 80 inches",
    "Pre-washed for softness",
    "Hand-finished fringe detail",
    "Machine washable",
    "OEKO-TEX Standard 100",
  ],
  rating: 4.9,
  reviewCount: 487,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-2 business days. Free shipping on orders over $75.",
  seo: {
    title: "Organic Cotton Throw Blanket | HappyStoreShop",
    description:
      "Ultra-soft GOTS-certified organic cotton throw blanket. 60×80 inches with hand-finished fringe. Machine washable, OEKO-TEX certified.",
  },
  checkoutChampProductId: "",
};
