import { Product, ProductCategory } from "@/lib/types/product";
import { luxuryScentedCandle } from "./luxury-scented-candle";
import { minimalistDeskLamp } from "./minimalist-desk-lamp";
import { organicCottonThrow } from "./organic-cotton-throw";
import { ceramicPlanterSet } from "./ceramic-planter-set";
import { bambooBathCaddy } from "./bamboo-bath-caddy";
import { smartDiffuser } from "./smart-diffuser";
import { linenDuvetCover } from "./linen-duvet-cover";
import { walnutCuttingBoard } from "./walnut-cutting-board";
import { monthlyHomeBox } from "./monthly-home-box";
import { quarterlyDecorBox } from "./quarterly-decor-box";
import { digitalHomeGuide } from "./digital-home-guide";
import { kitchenEssentialsBundle } from "./kitchen-essentials-bundle";

export const ALL_PRODUCTS: Product[] = [
  luxuryScentedCandle,
  minimalistDeskLamp,
  organicCottonThrow,
  ceramicPlanterSet,
  bambooBathCaddy,
  smartDiffuser,
  linenDuvetCover,
  walnutCuttingBoard,
  monthlyHomeBox,
  quarterlyDecorBox,
  digitalHomeGuide,
  kitchenEssentialsBundle,
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
