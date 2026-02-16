import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const digitalHomeGuide: Product = {
  slug: "digital-home-guide",
  name: "Digital Home Styling Guide",
  shortDescription:
    "120-page professional styling guide with room-by-room blueprints, color palettes, and shopping lists. Instant PDF download.",
  description: `<p>Design your dream home with confidence using our Digital Home Styling Guide. This comprehensive 120-page PDF guide was created by our team of professional interior designers to help you transform every room in your home.</p>
<p>Includes room-by-room styling blueprints, curated color palettes, furniture arrangement templates, seasonal refresh checklists, and shoppable product recommendations. Whether you're starting from scratch or refreshing an existing space, this guide has everything you need.</p>
<ul>
<li>120 pages of professional design guidance</li>
<li>Room-by-room styling blueprints</li>
<li>Curated color palettes</li>
<li>Furniture arrangement templates</li>
<li>Seasonal refresh checklists</li>
<li>Shoppable product recommendations</li>
<li>Instant PDF download</li>
</ul>`,
  category: "Home Office",
  type: "digital",
  images: [
    { src: PRODUCT_IMAGES.homeGuide1, alt: "Digital home styling guide cover and sample pages" },
    { src: PRODUCT_IMAGES.homeGuide2, alt: "Interior design guide color palette pages" },
  ],
  variants: [
    {
      id: "guide-pdf",
      name: "PDF Download",
      sku: "HSS-GUIDE-PDF",
      price: 1900,
      compareAtPrice: 2900,
      inStock: true,
    },
  ],
  features: [
    "120 pages of content",
    "Room-by-room blueprints",
    "Curated color palettes",
    "Furniture arrangement templates",
    "Seasonal checklists",
    "Instant PDF download",
  ],
  rating: 4.4,
  reviewCount: 93,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Instant digital delivery. Download link sent to your email immediately after purchase.",
  seo: {
    title: "Digital Home Styling Guide | HappyStoreShop",
    description:
      "120-page professional interior design guide with room-by-room blueprints, color palettes, and shopping lists. Instant PDF download.",
  },
  checkoutChampProductId: "",
};
