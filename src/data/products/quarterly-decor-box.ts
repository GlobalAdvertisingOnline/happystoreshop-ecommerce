import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const quarterlyDecorBox: Product = {
  slug: "quarterly-decor-box",
  name: "Quarterly Decor Refresh Box",
  shortDescription:
    "Seasonal decor collection delivered every 3 months. 6-8 statement pieces to transform your space, valued at $200+.",
  description: `<p>Reimagine your home each season with our Quarterly Decor Refresh Box. Every three months, receive a curated collection of 6-8 statement decor pieces — from artisan vases and sculptural objects to premium textiles and wall art.</p>
<p>Each box follows a seasonal design theme crafted by our in-house stylists, with a combined retail value of $200+. Delivered for just $99 per quarter, it's the ultimate way to keep your home design-forward.</p>
<ul>
<li>6-8 statement decor pieces</li>
<li>Curated seasonal design themes</li>
<li>$200+ retail value per box</li>
<li>Professional styling tips included</li>
<li>Delivered quarterly (Mar, Jun, Sep, Dec)</li>
<li>Cancel anytime — no commitment</li>
</ul>`,
  category: "Bundles",
  type: "subscription",
  images: [
    { src: PRODUCT_IMAGES.decorBox1, alt: "Quarterly decor refresh box with seasonal items" },
    { src: PRODUCT_IMAGES.decorBox2, alt: "Styled room using quarterly decor box pieces" },
  ],
  variants: [
    {
      id: "decorbox-quarterly",
      name: "Quarterly",
      sku: "HSS-DECORBOX-QT",
      price: 9900,
      inStock: true,
    },
  ],
  features: [
    "6-8 statement pieces",
    "Seasonal design themes",
    "$200+ retail value",
    "Professional styling tips",
    "Quarterly delivery",
    "Cancel anytime",
  ],
  rating: 4.7,
  reviewCount: 89,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships at the start of each quarter. Free shipping included with subscription.",
  subscription: {
    interval: "quarterly",
    recurringPrice: 9900,
    cancelUrl: "/cancel",
  },
  seo: {
    title: "Quarterly Decor Refresh Box | HappyStoreShop",
    description:
      "Seasonal decor collection of 6-8 statement pieces valued at $200+. Delivered quarterly with professional styling tips. Cancel anytime.",
  },
  checkoutChampProductId: "",
};
