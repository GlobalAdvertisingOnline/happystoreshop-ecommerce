import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const minimalistDeskLamp: Product = {
  slug: "minimalist-desk-lamp",
  name: "Minimalist LED Desk Lamp",
  shortDescription:
    "Sleek aluminum desk lamp with touch-dimming, three color temperatures, and wireless charging base.",
  description: `<p>Elevate your workspace with our Minimalist LED Desk Lamp. Crafted from brushed aluminum with a slim, architectural silhouette that complements any modern desk setup.</p>
<p>Features three color temperature modes — warm, neutral, and cool — with smooth touch-dimming across 10 brightness levels. The integrated wireless charging base keeps your phone powered without cable clutter.</p>
<ul>
<li>Brushed aluminum construction</li>
<li>3 color temperatures (2700K / 4000K / 6500K)</li>
<li>10 brightness levels with touch control</li>
<li>Built-in Qi wireless charging pad</li>
<li>Energy-efficient LED (lasts 50,000+ hours)</li>
<li>360° adjustable arm</li>
</ul>`,
  category: "Home Office",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.deskLamp1, alt: "Minimalist LED desk lamp on wooden desk" },
    { src: PRODUCT_IMAGES.deskLamp2, alt: "Desk lamp showing wireless charging feature" },
  ],
  variants: [
    {
      id: "lamp-matte-black",
      name: "Matte Black",
      sku: "HSS-LAMP-BLK",
      price: 7900,
      compareAtPrice: 9900,
      inStock: true,
    },
    {
      id: "lamp-brushed-silver",
      name: "Brushed Silver",
      sku: "HSS-LAMP-SLV",
      price: 7900,
      compareAtPrice: 9900,
      inStock: true,
    },
    {
      id: "lamp-warm-gold",
      name: "Warm Gold",
      sku: "HSS-LAMP-GLD",
      price: 8900,
      compareAtPrice: 11900,
      inStock: true,
    },
  ],
  features: [
    "Brushed aluminum construction",
    "3 color temperatures",
    "10-level touch dimming",
    "Built-in Qi wireless charger",
    "50,000+ hour LED lifespan",
    "360° adjustable arm",
  ],
  rating: 4.7,
  reviewCount: 218,
  isFeatured: true,
  isNew: true,
  shippingInfo: "Ships within 1-2 business days. Free shipping on orders over $75.",
  seo: {
    title: "Minimalist LED Desk Lamp | HappyStoreShop",
    description:
      "Sleek aluminum desk lamp with touch-dimming, 3 color temperatures, and built-in wireless charging. Perfect for modern home offices.",
  },
  checkoutChampProductId: "",
};
