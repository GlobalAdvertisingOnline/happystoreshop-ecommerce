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

export const COMPANY = {
  name: "HappyStoreShop",
  tagline: "Your Trusted Online Shopping Partner",
  email: "support@happystoreshop.com",
  phone: "(844) 308-2059",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  url: "https://happystoreshop.com",
  year: 2024,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
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
  { label: "Track Order", href: "/tracking" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Cancel Order", href: "/cancel" },
] as const;
