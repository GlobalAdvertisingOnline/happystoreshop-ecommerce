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
  scentedCandle1: `${R2_BASE}/product-scented-candle-1.webp`,
  scentedCandle2: `${R2_BASE}/product-scented-candle-2.webp`,
  deskLamp1: `${R2_BASE}/product-desk-lamp-1.webp`,
  deskLamp2: `${R2_BASE}/product-desk-lamp-2.webp`,
  cottonThrow1: `${R2_BASE}/product-cotton-throw-1.webp`,
  cottonThrow2: `${R2_BASE}/product-cotton-throw-2.webp`,
  planterSet1: `${R2_BASE}/product-planter-set-1.webp`,
  planterSet2: `${R2_BASE}/product-planter-set-2.webp`,
  bathCaddy1: `${R2_BASE}/product-bath-caddy-1.webp`,
  bathCaddy2: `${R2_BASE}/product-bath-caddy-2.webp`,
  diffuser1: `${R2_BASE}/product-diffuser-1.webp`,
  diffuser2: `${R2_BASE}/product-diffuser-2.webp`,
  duvetCover1: `${R2_BASE}/product-duvet-cover-1.webp`,
  duvetCover2: `${R2_BASE}/product-duvet-cover-2.webp`,
  cuttingBoard1: `${R2_BASE}/product-cutting-board-1.webp`,
  cuttingBoard2: `${R2_BASE}/product-cutting-board-2.webp`,
  homeBox1: `${R2_BASE}/product-home-box-1.webp`,
  homeBox2: `${R2_BASE}/product-home-box-2.webp`,
  decorBox1: `${R2_BASE}/product-decor-box-1.webp`,
  decorBox2: `${R2_BASE}/product-decor-box-2.webp`,
  homeGuide1: `${R2_BASE}/product-home-guide-1.webp`,
  homeGuide2: `${R2_BASE}/product-home-guide-2.webp`,
  kitchenBundle1: `${R2_BASE}/product-kitchen-bundle-1.webp`,
  kitchenBundle2: `${R2_BASE}/product-kitchen-bundle-2.webp`,
} as const;

export const COMPANY = {
  name: "HappyStoreShop",
  tagline: "Your Trusted Online Shopping Partner",
  email: "support@happystoreshop.com",
  phone: "(844) 308-2059",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  url: "https://happystoreshop.com",
  year: 2024,
} as const;

export const MEMBERSHIP = {
  name: "HappyStore+",
  price: 2995,
  interval: "monthly" as const,
  shippingDiscount: 100,
  productDiscount: 15,
  checkoutChampProductId: "",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
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
