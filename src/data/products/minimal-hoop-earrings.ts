import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const minimalHoopEarrings: Product = {
  slug: "minimal-hoop-earrings",
  name: "Minimal Hoop Earrings",
  shortDescription:
    "Classic hoop earrings featuring a smooth polished surface and timeless design suited for daily wear. Lightweight and versatile for various styles.",
  description: `
    <p>
      The Minimal Hoop Earrings are a wardrobe essential — timeless in form,
      effortless in style. Featuring a smooth, polished surface and a perfectly
      proportioned hoop silhouette, these earrings transition seamlessly from
      casual weekends to polished workday looks. Their clean circular profile
      flatters every face shape and pairs naturally with virtually any outfit in
      your closet.
    </p>
    <p>
      Crafted with a focus on comfort and quality, each hoop is lightweight
      enough for extended wear without pulling on the earlobe. The polished
      finish catches light beautifully, adding a soft glow that elevates your
      look without overpowering it. These are the hoops you'll reach for day
      after day when you want something that simply works.
    </p>
    <p>
      Versatility is at the heart of this design. Wear them solo for a refined
      minimalist statement, or mix them into a multi-earring arrangement for a
      more curated look. The hinged closure snaps securely into place, so you
      can move through your day with confidence knowing they'll stay put.
    </p>
    <ul>
      <li>Smooth polished hoop with timeless silhouette</li>
      <li>Lightweight construction for comfortable all-day wear</li>
      <li>Secure hinged closure</li>
      <li>Versatile design for solo or layered styling</li>
      <li>Classic proportions that complement every face shape</li>
    </ul>
  `,
  category: "Earrings",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.minimalHoop1, alt: "Minimal Hoop Earrings — front view" },
    { src: PRODUCT_IMAGES.minimalHoop2, alt: "Minimal Hoop Earrings — detail view" },
  ],
  variants: [
    {
      id: "earrings-minimal-hoop",
      name: "Minimal Hoop Earrings",
      sku: "JW- 010",
      price: 2900,
      inStock: true,
    },
  ],
  features: [
    "Smooth polished hoop with timeless silhouette",
    "Lightweight construction for all-day comfort",
    "Secure hinged closure for confident wear",
    "Versatile enough for solo or layered styling",
    "Classic proportions suited to every face shape",
  ],
  rating: 4.8,
  reviewCount: 274,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Minimal Hoop Earrings | Happy Store Shop",
    description:
      "Shop the Minimal Hoop Earrings — classic polished hoops with a timeless design. Lightweight, versatile, and perfect for daily wear or layered styling.",
  },
  checkoutChampProductId: "168",
};
