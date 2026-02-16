import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const monthlyHomeBox: Product = {
  slug: "monthly-home-box",
  name: "Monthly Home Essentials Box",
  shortDescription:
    "Curated monthly delivery of 4-6 premium home essentials. Candles, textiles, decor, and seasonal accents valued at $80+.",
  description: `<p>Discover something new for your home every month with our Home Essentials Box. Each box is thoughtfully curated by our design team and includes 4-6 premium items — from artisan candles and luxury textiles to unique decor pieces and seasonal accents.</p>
<p>Every box is valued at $80 or more, delivered to your door for just $49/month. It's the easiest way to keep your home feeling fresh and inspired, all year long.</p>
<ul>
<li>4-6 premium home items per box</li>
<li>Curated by professional designers</li>
<li>$80+ retail value guaranteed</li>
<li>Seasonal themes and accents</li>
<li>Ships on the 15th of each month</li>
<li>Cancel anytime — no commitment</li>
</ul>`,
  category: "Bundles",
  type: "subscription",
  images: [
    { src: PRODUCT_IMAGES.homeBox1, alt: "Monthly home essentials subscription box contents" },
    { src: PRODUCT_IMAGES.homeBox2, alt: "Unboxing the monthly home essentials box" },
  ],
  variants: [
    {
      id: "homebox-monthly",
      name: "Monthly",
      sku: "HSS-HOMEBOX-MO",
      price: 4900,
      inStock: true,
    },
  ],
  features: [
    "4-6 premium items per box",
    "Curated by designers",
    "$80+ retail value",
    "Seasonal themes",
    "Ships on the 15th monthly",
    "Cancel anytime",
  ],
  rating: 4.6,
  reviewCount: 134,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships on the 15th of each month. Free shipping included with subscription.",
  subscription: {
    interval: "monthly",
    recurringPrice: 4900,
    cancelUrl: "/cancel",
  },
  seo: {
    title: "Monthly Home Essentials Box | HappyStoreShop",
    description:
      "Curated monthly delivery of 4-6 premium home items valued at $80+. Candles, textiles, decor, and seasonal accents. Cancel anytime.",
  },
  checkoutChampProductId: "",
};
