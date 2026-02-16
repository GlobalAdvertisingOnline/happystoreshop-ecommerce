import { Product } from "@/lib/types/product";

export const multiLayerLuxeNecklace: Product = {
  slug: "multi-layer-luxe-necklace",
  name: "Multi-Layer Luxe Necklace",
  shortDescription:
    "A sophisticated multi-layer necklace with depth and texture for a luxury-inspired aesthetic.",
  description: `
    <p>
      Achieve the art of effortless layering in a single piece with the
      Multi-Layer Luxe Necklace — a sophisticated design that combines multiple
      chain strands into one harmonious composition. Each layer falls at a
      carefully considered length, creating cascading depth and dimensional
      texture that mimics the look of a perfectly curated stack without any of
      the guesswork.
    </p>
    <p>
      The interplay between the different chain textures and lengths gives this
      necklace a richly layered appearance that shifts and shimmers with
      movement. From fine links to more substantial strands, each layer
      contributes to a cohesive luxury-inspired aesthetic that reads as both
      intentional and effortless. Pair it with a simple neckline to let the
      layers take center stage, or use it as the foundation of a bolder
      jewelry story.
    </p>
    <p>
      Despite its multi-strand construction, the Multi-Layer Luxe Necklace is
      engineered to avoid tangling, with each layer independently secured for
      smooth, hassle-free wear. The unified clasp system makes it easy to put
      on and remove, while the balanced weight ensures comfortable wear
      throughout even the longest days. This product is a fashion accessory
      only and is not intended for any purpose beyond personal adornment.
    </p>
    <ul>
      <li>Multiple chain layers at varied lengths for cascading depth</li>
      <li>Mixed textures for a rich, dimensional appearance</li>
      <li>Tangle-resistant construction with independently secured strands</li>
      <li>Unified clasp system for easy on and off</li>
      <li>Balanced weight for comfortable extended wear</li>
    </ul>
  `,
  category: "Necklaces",
  type: "physical",
  images: [
    { src: "https://images.checkoutchamp.com/global_advertising_llc/product951.png", alt: "Multi-Layer Luxe Necklace" },
  ],
  variants: [
    {
      id: "necklace-multi-layer-luxe",
      name: "Multi-Layer Luxe Necklace",
      sku: "JW- 040",
      price: 12981,
      inStock: true,
    },
  ],
  features: [
    "Multiple chain layers for cascading dimensional depth",
    "Mixed textures create luxury-inspired aesthetic",
    "Tangle-resistant construction for hassle-free wear",
    "Unified clasp for easy fastening and removal",
    "Balanced weight distribution for all-day comfort",
  ],
  rating: 4.9,
  reviewCount: 97,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",
  seo: {
    title: "Multi-Layer Luxe Necklace | Happy Store Shop",
    description:
      "Shop the Multi-Layer Luxe Necklace — a sophisticated multi-strand design with cascading depth and texture. Luxury-inspired styling in a single piece.",
  },
  checkoutChampProductId: "199",
};
