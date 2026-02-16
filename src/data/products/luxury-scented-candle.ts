import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const luxuryScentedCandle: Product = {
  slug: "luxury-scented-candle",
  name: "Luxury Scented Candle Set",
  shortDescription:
    "Hand-poured soy wax candles in three signature scents. Burns cleanly for up to 45 hours each.",
  description: `<p>Transform your home into a sanctuary with our Luxury Scented Candle Set. Each candle is hand-poured using 100% natural soy wax and infused with premium essential oil blends.</p>
<p>The set includes three signature scents — Lavender &amp; Chamomile, Vanilla &amp; Sandalwood, and Eucalyptus &amp; Mint — each designed to create a distinct mood throughout your home.</p>
<ul>
<li>100% natural soy wax with cotton wicks</li>
<li>Up to 45 hours burn time per candle</li>
<li>Hand-poured in small batches</li>
<li>Reusable ceramic vessels</li>
<li>Presented in a premium gift box</li>
</ul>`,
  category: "Decor",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.scentedCandle1, alt: "Luxury scented candle set in ceramic vessels" },
    { src: PRODUCT_IMAGES.scentedCandle2, alt: "Close-up of lit scented candle with warm glow" },
  ],
  variants: [
    {
      id: "candle-3pack",
      name: "3-Pack Set",
      sku: "HSS-CANDLE-3PK",
      price: 3900,
      compareAtPrice: 4500,
      inStock: true,
    },
    {
      id: "candle-6pack",
      name: "6-Pack Set",
      sku: "HSS-CANDLE-6PK",
      price: 5900,
      compareAtPrice: 9000,
      inStock: true,
    },
  ],
  features: [
    "100% natural soy wax",
    "Premium essential oil blends",
    "Up to 45 hours burn time each",
    "Hand-poured in small batches",
    "Reusable ceramic vessels",
    "Gift-ready packaging",
  ],
  rating: 4.8,
  reviewCount: 342,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-2 business days. Free shipping on orders over $75.",
  seo: {
    title: "Luxury Scented Candle Set | HappyStoreShop",
    description:
      "Hand-poured soy wax candles in three signature scents. 45-hour burn time, premium essential oils, reusable ceramic vessels.",
  },
  checkoutChampProductId: "",
};
