import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const bambooBathCaddy: Product = {
  slug: "bamboo-bath-caddy",
  name: "Bamboo Bath Caddy",
  shortDescription:
    "Expandable bamboo bathtub tray with book holder, wine glass slot, and waterproof phone stand.",
  description: `<p>Turn every bath into a spa experience with our Bamboo Bath Caddy. Crafted from sustainably sourced bamboo with a water-resistant lacquer finish, this expandable tray fits bathtubs from 27" to 41" wide.</p>
<p>Features a fold-down book holder, integrated wine glass slot, waterproof tablet/phone stand, and two removable storage compartments for candles, soap, or bath accessories.</p>
<ul>
<li>Sustainably sourced bamboo</li>
<li>Expands from 27" to 41"</li>
<li>Fold-down book/tablet holder</li>
<li>Integrated wine glass slot</li>
<li>Waterproof phone stand</li>
<li>Two removable storage trays</li>
<li>Non-slip rubber grips</li>
</ul>`,
  category: "Bathroom",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.bathCaddy1, alt: "Bamboo bath caddy across bathtub with accessories" },
    { src: PRODUCT_IMAGES.bathCaddy2, alt: "Bath caddy close-up showing wine glass slot and book holder" },
  ],
  variants: [
    {
      id: "caddy-natural",
      name: "Natural Bamboo",
      sku: "HSS-CADDY-NAT",
      price: 5900,
      compareAtPrice: 7500,
      inStock: true,
    },
    {
      id: "caddy-dark",
      name: "Dark Walnut Stain",
      sku: "HSS-CADDY-DRK",
      price: 6900,
      compareAtPrice: 7900,
      inStock: true,
    },
  ],
  features: [
    "Sustainably sourced bamboo",
    "Expands 27\" to 41\"",
    "Fold-down book/tablet holder",
    "Wine glass slot",
    "Waterproof phone stand",
    "Non-slip rubber grips",
  ],
  rating: 4.7,
  reviewCount: 203,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-2 business days. Free shipping on orders over $75.",
  seo: {
    title: "Bamboo Bath Caddy | HappyStoreShop",
    description:
      "Expandable bamboo bathtub tray with book holder, wine glass slot, and waterproof phone stand. Fits tubs 27-41 inches.",
  },
  checkoutChampProductId: "",
};
