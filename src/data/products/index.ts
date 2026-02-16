import { Product, ProductCategory } from "@/lib/types/product";

// Existing products (12)
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

// Accessories (2)
import { velvetPouch } from "./velvet-pouch";
import { magneticPouch } from "./magnetic-pouch";

// Necklaces (7)
import { ovalLinkNecklace } from "./oval-link-necklace";
import { flatSnakeChainNecklace } from "./flat-snake-chain-necklace";
import { contemporaryPendantNecklace } from "./contemporary-pendant-necklace";
import { statementChainNecklace } from "./statement-chain-necklace";
import { multiLayerLuxeNecklace } from "./multi-layer-luxe-necklace";
import { signatureStatementNecklace } from "./signature-statement-necklace";
import { luxurySignatureNecklace } from "./luxury-signature-necklace";

// Earrings (5)
import { modernDropEarrings } from "./modern-drop-earrings";
import { pearlDropEarrings } from "./pearl-drop-earrings";
import { sculpturalDropEarrings } from "./sculptural-drop-earrings";
import { polishedPearlDropEarrings } from "./polished-pearl-drop-earrings";
import { designerDropEarrings } from "./designer-drop-earrings";

// Rings (6)
import { hammeredTextureRing } from "./hammered-texture-ring";
import { pixiuRing } from "./pixiu-ring";
import { minimalSignetRing } from "./minimal-signet-ring";
import { texturedStatementRing } from "./textured-statement-ring";
import { sculpturalOpenRing } from "./sculptural-open-ring";
import { premiumSculpturalRing } from "./premium-sculptural-ring";

// Bracelets (11)
import { adjustableCharmBracelet } from "./adjustable-charm-bracelet";
import { polishedCuffBracelet } from "./polished-cuff-bracelet";
import { magneticBracelet } from "./magnetic-bracelet";
import { fengshuiBracelet } from "./fengshui-bracelet";
import { slimBangleBracelet } from "./slim-bangle-bracelet";
import { dualLayerChainBracelet } from "./dual-layer-chain-bracelet";
import { designerLinkBracelet } from "./designer-link-bracelet";
import { premiumPearlBracelet } from "./premium-pearl-bracelet";
import { architecturalCuffBracelet } from "./architectural-cuff-bracelet";
import { premiumLinkBracelet } from "./premium-link-bracelet";
import { sculptedStatementCuff } from "./sculpted-statement-cuff";

// Sets (4)
import { layeredNecklaceSet } from "./layered-necklace-set";
import { tripleLayerNecklaceSet } from "./triple-layer-necklace-set";
import { luxuryLayeredNecklaceSet } from "./luxury-layered-necklace-set";
import { premiumPearlJewelrySet } from "./premium-pearl-jewelry-set";

// HappyStore+ membership is exported separately — not in main catalog
export { happyStorePlusMembership } from "./happystore-plus-membership";

export const ALL_PRODUCTS: Product[] = [
  // Accessories
  velvetPouch,
  magneticPouch,
  // Necklaces
  layeringChainNecklace,
  barPendantNecklace,
  fineCableChainNecklace,
  ovalLinkNecklace,
  flatSnakeChainNecklace,
  modernPearlNecklace,
  contemporaryPendantNecklace,
  statementChainNecklace,
  multiLayerLuxeNecklace,
  signatureStatementNecklace,
  luxurySignatureNecklace,
  // Earrings
  geometricMiniEarrings,
  modernDropEarrings,
  minimalHoopEarrings,
  pearlDropEarrings,
  sculpturalDropEarrings,
  polishedPearlDropEarrings,
  elegantDropCrystalEarrings,
  designerDropEarrings,
  // Rings
  texturedStackableRing,
  hammeredTextureRing,
  pixiuRing,
  crystalAccentRing,
  minimalSignetRing,
  texturedStatementRing,
  sculpturalOpenRing,
  premiumSculpturalRing,
  // Bracelets
  doubleChainBracelet,
  adjustableCharmBracelet,
  polishedCuffBracelet,
  magneticBracelet,
  fengshuiBracelet,
  slimBangleBracelet,
  dualLayerChainBracelet,
  sculptedCuffBracelet,
  designerLinkBracelet,
  premiumPearlBracelet,
  architecturalCuffBracelet,
  premiumLinkBracelet,
  sculptedStatementCuff,
  // Sets
  luxeJewelrySet,
  layeredNecklaceSet,
  tripleLayerNecklaceSet,
  luxuryLayeredNecklaceSet,
  premiumPearlJewelrySet,
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
