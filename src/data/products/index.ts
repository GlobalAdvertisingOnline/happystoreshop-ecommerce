import { Product, ProductCategory } from "@/lib/types/product";
import { layeringChainNecklace } from "./layering-chain-necklace";
import { barPendantNecklace } from "./bar-pendant-necklace";
import { fineCableChainNecklace } from "./fine-cable-chain-necklace";
import { modernPearlNecklace } from "./modern-pearl-necklace";
import { geometricMiniEarrings } from "./geometric-mini-earrings";
import { minimalHoopEarrings } from "./minimal-hoop-earrings";
import { elegantDropCrystalEarrings } from "./elegant-drop-crystal-earrings";
import { texturedStackableRing } from "./textured-stackable-ring";
import { crystalAccentRing } from "./crystal-accent-ring";
import { doubleChainBracelet } from "./double-chain-bracelet";
import { sculptedCuffBracelet } from "./sculpted-cuff-bracelet";
import { luxeJewelrySet } from "./luxe-jewelry-set";
import { happyStorePlusMembership } from "./happystore-plus-membership";

// HappyStore+ membership is exported separately — not in main catalog
export { happyStorePlusMembership } from "./happystore-plus-membership";

export const ALL_PRODUCTS: Product[] = [
  layeringChainNecklace,
  barPendantNecklace,
  fineCableChainNecklace,
  modernPearlNecklace,
  geometricMiniEarrings,
  minimalHoopEarrings,
  elegantDropCrystalEarrings,
  texturedStackableRing,
  crystalAccentRing,
  doubleChainBracelet,
  sculptedCuffBracelet,
  luxeJewelrySet,
];

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return ALL_PRODUCTS.filter((p) => p.isFeatured);
}

export function getAllCategories(): ProductCategory[] {
  const categories = new Set(ALL_PRODUCTS.map((p) => p.category));
  return Array.from(categories) as ProductCategory[];
}
