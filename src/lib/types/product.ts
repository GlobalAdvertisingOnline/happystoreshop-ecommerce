export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  type: "physical" | "digital" | "subscription";
  images: { src: string; alt: string }[];
  variants: ProductVariant[];
  features: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNew: boolean;
  shippingInfo: string;
  subscription?: {
    interval: "weekly" | "monthly" | "quarterly" | "yearly";
    trialDays?: number;
    trialPrice?: number;
    recurringPrice: number;
    cancelUrl: string;
  };
  seo: { title: string; description: string };
  checkoutChampProductId: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
}

export type ProductCategory =
  | "Living Room"
  | "Bedroom"
  | "Kitchen"
  | "Bathroom"
  | "Home Office"
  | "Decor"
  | "Bundles";

export interface CartItem {
  productSlug: string;
  variantId: string;
  quantity: number;
  name: string;
  variantName: string;
  price: number;
  image: { src: string; alt: string };
  type: "physical" | "digital" | "subscription";
}
