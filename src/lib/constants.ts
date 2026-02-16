export const R2_BASE = "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev";

export const IMAGES = {
  hero: `${R2_BASE}/hero.webp`,
  about: `${R2_BASE}/about.webp`,
  avatarSarah: `${R2_BASE}/avatar-sarah.webp`,
  avatarJames: `${R2_BASE}/avatar-james.webp`,
  avatarEmily: `${R2_BASE}/avatar-emily.webp`,
  avatarMichael: `${R2_BASE}/avatar-michael.webp`,
  trackingHero: `${R2_BASE}/tracking-hero.webp`,
  contactHero: `${R2_BASE}/contact-hero.webp`,
  ogImage: `${R2_BASE}/og-image.webp`,
} as const;

export const PRODUCT_IMAGES = {
  layeringChain1: `${R2_BASE}/product-layering-chain-1.webp`,
  layeringChain2: `${R2_BASE}/product-layering-chain-2.webp`,
  barPendant1: `${R2_BASE}/product-bar-pendant-1.webp`,
  barPendant2: `${R2_BASE}/product-bar-pendant-2.webp`,
  fineCableChain1: `${R2_BASE}/product-fine-cable-chain-1.webp`,
  fineCableChain2: `${R2_BASE}/product-fine-cable-chain-2.webp`,
  modernPearl1: `${R2_BASE}/product-modern-pearl-1.webp`,
  modernPearl2: `${R2_BASE}/product-modern-pearl-2.webp`,
  geometricEarrings1: `${R2_BASE}/product-geometric-earrings-1.webp`,
  geometricEarrings2: `${R2_BASE}/product-geometric-earrings-2.webp`,
  minimalHoop1: `${R2_BASE}/product-minimal-hoop-1.webp`,
  minimalHoop2: `${R2_BASE}/product-minimal-hoop-2.webp`,
  elegantDropCrystal1: `${R2_BASE}/product-elegant-drop-crystal-1.webp`,
  elegantDropCrystal2: `${R2_BASE}/product-elegant-drop-crystal-2.webp`,
  texturedRing1: `${R2_BASE}/product-textured-ring-1.webp`,
  texturedRing2: `${R2_BASE}/product-textured-ring-2.webp`,
  crystalRing1: `${R2_BASE}/product-crystal-ring-1.webp`,
  crystalRing2: `${R2_BASE}/product-crystal-ring-2.webp`,
  doubleChain1: `${R2_BASE}/product-double-chain-1.webp`,
  doubleChain2: `${R2_BASE}/product-double-chain-2.webp`,
  sculptedCuff1: `${R2_BASE}/product-sculpted-cuff-1.webp`,
  sculptedCuff2: `${R2_BASE}/product-sculpted-cuff-2.webp`,
  luxeSet1: `${R2_BASE}/product-luxe-set-1.webp`,
  luxeSet2: `${R2_BASE}/product-luxe-set-2.webp`,
} as const;

export const COMPANY = {
  name: "HappyStoreShop",
  tagline: "Your Trusted Online Jewelry Partner",
  email: "support@happystoreshop.com",
  phone: "(844) 308-2059",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  url: "https://happystoreshop.com",
  year: 2025,
} as const;

export const MEMBERSHIP = {
  name: "HappyStore+",
  price: 3995,
  interval: "monthly" as const,
  shippingDiscount: 100,
  productDiscount: 15,
  checkoutChampProductId: "176",
} as const;

export const SHIPPING = {
  flatRate: 599,
  freeThreshold: 7500,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "HappyStore+", href: "/membership" },
  { label: "Track Order", href: "/tracking" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Do Not Sell My Info", href: "/do-not-sell" },
] as const;

export const NAV_LINKS_FOOTER = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "HappyStore+", href: "/membership" },
  { label: "Track Order", href: "/tracking" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Cancel Order", href: "/cancel" },
] as const;
