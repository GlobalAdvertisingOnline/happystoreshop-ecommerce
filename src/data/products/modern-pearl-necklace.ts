import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const modernPearlNecklace: Product = {
  slug: "modern-pearl-necklace",
  name: "Modern Pearl Necklace",
  shortDescription:
    "A contemporary necklace featuring pearl-style elements arranged in a balanced minimalist design.",
  description: `
    <p>
      Reimagine a classic with the Modern Pearl Necklace — a contemporary take on
      pearl jewelry that feels fresh, intentional, and unmistakably current. This
      necklace features lustrous pearl-style elements arranged along a refined
      chain in a balanced composition that honors tradition while embracing
      modern design sensibility. The result is a piece that feels at home in
      both casual and occasion-driven wardrobes.
    </p>
    <p>
      Each pearl-style element is carefully selected for its smooth surface and
      consistent luminosity, creating a cohesive visual rhythm along the
      necklace. The minimalist setting allows the beauty of the materials to take
      center stage, free from unnecessary embellishment. Worn against a simple
      neckline, this necklace becomes an effortless focal point that elevates the
      entire outfit.
    </p>
    <p>
      From a morning coffee run to an evening gathering, the Modern Pearl
      Necklace adapts to the moment. Its comfortable weight and secure closure
      make it easy to wear for hours on end, and its versatile length works
      beautifully on its own or paired with complementary chains for a layered
      look. This is modern elegance, simplified.
    </p>
    <ul>
      <li>Pearl-style elements with consistent luminosity</li>
      <li>Contemporary minimalist arrangement</li>
      <li>Refined chain with secure clasp closure</li>
      <li>Comfortable weight for extended wear</li>
      <li>Versatile for everyday and occasion styling</li>
    </ul>
  `,
  category: "Necklaces",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.modernPearl1, alt: "Modern Pearl Necklace — front view" },
    { src: PRODUCT_IMAGES.modernPearl2, alt: "Modern Pearl Necklace — detail view" },
  ],
  variants: [
    {
      id: "necklace-modern-pearl",
      name: "Modern Pearl Necklace",
      sku: "JW- 027",
      price: 6965,
      inStock: true,    },
  ],
  features: [
    "Lustrous pearl-style elements",
    "Contemporary minimalist design",
    "Refined chain with secure clasp",
    "Comfortable weight for all-day wear",
    "Suitable for everyday and occasion styling",
  ],
  rating: 4.9,
  reviewCount: 89,
  isFeatured: true,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Modern Pearl Necklace | Happy Store Shop",
    description:
      "Shop the Modern Pearl Necklace — a contemporary pearl-style necklace with a balanced minimalist design. Perfect for everyday elegance and special occasions.",
  },
  checkoutChampProductId: "186",
};
