# HappyStoreShop — Complete Build Documentation

> A step-by-step guide documenting everything built in this project and how to replicate it from scratch.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Step-by-Step Build Guide](#3-step-by-step-build-guide)
   - [Step 1: Project Initialization](#step-1-project-initialization)
   - [Step 2: Project Configuration](#step-2-project-configuration)
   - [Step 3: Global Styling & Theme](#step-3-global-styling--theme)
   - [Step 4: Constants & Company Info](#step-4-constants--company-info)
   - [Step 5: Custom Logo](#step-5-custom-logo)
   - [Step 6: Layout Components (Header, Footer, Cookie Banner)](#step-6-layout-components)
   - [Step 7: Home Page Sections](#step-7-home-page-sections)
   - [Step 8: Contact Page & Form](#step-8-contact-page--form)
   - [Step 9: Order Tracking Page](#step-9-order-tracking-page)
   - [Step 10: Legal / Policy Pages](#step-10-legal--policy-pages)
   - [Step 11: SEO Setup](#step-11-seo-setup)
   - [Step 12: AI Image Generation](#step-12-ai-image-generation)
   - [Step 13: Build & Deploy](#step-13-build--deploy)
4. [Complete File Structure](#4-complete-file-structure)
5. [Trust Signals Checklist](#5-trust-signals-checklist)
6. [Third-Party Services](#6-third-party-services)
7. [Customization Guide](#7-customization-guide)
8. [Deployment Options](#8-deployment-options)

---

## 1. Project Overview

**HappyStoreShop** is a static e-commerce trust-building website designed to establish customer confidence. It is **not** a full store with a cart/checkout — instead, it serves as a professional storefront that builds trust through:

- Professional design and branding
- Comprehensive legal policies (Privacy, Terms, Refund, Shipping, Cookie)
- Real order tracking via 17TRACK integration
- Contact form connected to email via FormSubmit.co
- Customer testimonials and social proof
- Payment and shipping partner logos
- Security and trust badges
- Cookie consent compliance

The site exports as **pure static HTML/CSS/JS** — no server required.

---

## 2. Tech Stack

| Category         | Technology                | Version  |
|------------------|--------------------------|----------|
| Framework        | Next.js (App Router)     | 16.1.6   |
| UI Library       | React                    | 19.2.3   |
| Language         | TypeScript               | ^5       |
| Styling          | Tailwind CSS             | ^4       |
| Icons            | lucide-react             | ^0.564.0 |
| Linting          | ESLint + eslint-config-next | ^9    |
| Script Runner    | tsx                      | ^4.21.0  |
| CSS Processing   | PostCSS + @tailwindcss/postcss | ^4 |

---

## 3. Step-by-Step Build Guide

### Step 1: Project Initialization

Create a new Next.js project with TypeScript and Tailwind CSS:

```bash
npx create-next-app@latest happystoreshop \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --use-npm

cd happystoreshop
```

Install additional dependencies:

```bash
npm install lucide-react
npm install -D tsx
```

**What this gives you:**
- Next.js App Router structure with `src/app/` directory
- TypeScript configuration (`tsconfig.json`)
- Tailwind CSS v4 with PostCSS (`postcss.config.mjs`)
- ESLint configuration (`eslint.config.mjs`)
- Path alias `@/*` pointing to `src/*`

---

### Step 2: Project Configuration

**`next.config.ts`** — Configure for static export:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Generates static HTML in /out
  images: {
    unoptimized: true,       // Required for static export
  },
  trailingSlash: true,       // URLs end with / (e.g., /contact/)
};

export default nextConfig;
```

**Why these settings matter:**
- `output: "export"` — Makes the entire site static HTML. No Node.js server needed. Deployable anywhere.
- `images.unoptimized: true` — Next.js Image Optimization requires a server. Since we're static, we disable it.
- `trailingSlash: true` — Creates `/contact/index.html` instead of `/contact.html`. Better for most static hosts.

---

### Step 3: Global Styling & Theme

**`src/app/globals.css`** — Define the brand theme and utility animations:

```css
@import "tailwindcss";

@theme inline {
  --color-brand-blue: #1E40AF;
  --color-brand-blue-light: #3B82F6;
  --color-brand-blue-dark: #1E3A8A;
  --color-brand-green: #059669;
  --color-brand-green-light: #10B981;
  --color-brand-gold: #F59E0B;
  --color-brand-red: #DC2626;
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
}
```

**Custom utility classes created:**
- `.scroll-reveal` / `.is-visible` — Fade-in-up animation triggered on scroll
- `.hover-lift` — Cards lift up with shadow on hover
- `.animate-slide-up` — Cookie banner entrance animation
- `.btn-shine` — Sweeping shine effect on CTA buttons
- `.img-reveal` / `.loaded` — Fade-in for images after loading

**Font:** Inter from Google Fonts, loaded via `next/font/google` with `display: "swap"` for performance.

---

### Step 4: Constants & Company Info

**`src/lib/constants.ts`** — Single source of truth for all company details:

```typescript
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
  legalName: "HappyStoreShop LLC",
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
] as const;
```

**Why this matters:** Every reference to company name, email, phone, images, and navigation is centralized. To rebrand the entire site, you only edit this one file.

---

### Step 5: Custom Logo

**`src/components/ui/Logo.tsx`** — A custom SVG logo component:

- Blue rounded-square background (`#1E40AF`)
- White shopping bag outline
- Gold/amber smiley mouth curve
- White dot eyes
- Accepts `size` prop for reuse at different scales

Used in both the Header and Footer. To replace: swap the SVG paths or use an `<img>` tag with your own logo file.

---

### Step 6: Layout Components

These three components wrap every page via `src/app/layout.tsx`:

#### Header (`src/components/layout/Header.tsx`)
- **Sticky navigation** — Fixed to top, gains backdrop blur and shadow on scroll
- **Desktop:** Logo + nav links + "Track Order" CTA button
- **Mobile:** Logo + hamburger menu icon that toggles a dropdown menu
- Uses `useState` for scroll detection and mobile menu toggle
- Highlights the current page with blue underline via `usePathname()`

#### Footer (`src/components/layout/Footer.tsx`)
- **4-column responsive grid:**
  1. Brand name + description
  2. Quick Links (Home, Track Order, Contact)
  3. Legal Links (all 5 policy pages)
  4. Contact Info (email, phone, hours with lucide-react icons)
- SSL/TLS security badge at bottom
- Copyright with dynamic year

#### Cookie Banner (`src/components/layout/CookieBanner.tsx`)
- Fixed to bottom of screen
- Checks `localStorage` for prior consent
- Shows a banner with "Accept" button and link to Cookie Policy
- Slides up with animation on mount
- Once accepted, never shown again (stored in `localStorage`)

#### Root Layout (`src/app/layout.tsx`)
- Loads Inter font from Google Fonts
- Sets global metadata (title template, description, OpenGraph, robots)
- Wraps all pages in `<Header />`, `<main>`, `<Footer />`, `<CookieBanner />`

---

### Step 7: Home Page Sections

The home page (`src/app/page.tsx`) composes 7 sections in order:

#### 7a. HeroSection (`src/components/home/HeroSection.tsx`)
- Large headline: "Shop With Confidence at HappyStoreShop"
- Subheadline about quality products and customer service
- Two CTA buttons: "Track Your Order" + "Contact Us"
- Social proof badge: "50,000+ Happy Customers"
- Star rating: 4.9/5 with gold stars
- Hero background image from R2 CDN

#### 7b. TrustBadges (`src/components/home/TrustBadges.tsx`)
- 4 badges in a horizontal row (2x2 on mobile):
  1. **Secure Shopping** — Shield icon, "256-bit SSL encryption"
  2. **Safe Checkout** — Lock icon, "Your payment is protected"
  3. **Money-Back Guarantee** — RefreshCw icon, "30-day return policy"
  4. **24/7 Support** — Headphones icon, "We're here to help anytime"
- Blue border-top accent, hover-lift effect

#### 7c. AboutSection (`src/components/home/AboutSection.tsx`)
- Two-column layout: image left, text right
- Headline: "Your Trusted Shopping Partner"
- Description paragraph about the company mission
- 4 stat cards in a 2x2 grid:
  - 10,000+ Products
  - 50,000+ Happy Customers
  - 98% Satisfaction Rate
  - 24/7 Customer Support

#### 7d. ValuesSection (`src/components/home/ValuesSection.tsx`)
- Section title: "Why Shop With Us?"
- 4 value cards with icons:
  1. **Quality First** — Award icon, curated products with quality standards
  2. **Customer Obsessed** — Heart icon, dedicated support team
  3. **Secure Shopping** — ShieldCheck icon, bank-level security and data protection
  4. **Fast Shipping** — Truck icon, worldwide tracked delivery

#### 7e. TestimonialsSection (`src/components/home/TestimonialsSection.tsx`)
- Section title: "What Our Customers Say"
- 4 testimonial cards with:
  - 5-star rating (gold stars)
  - Customer quote
  - Customer name and avatar image
  - Green "Verified Buyer" badge
- 4 customers: Sarah M., James K., Emily R., Michael T.

#### 7f. PartnersSection (`src/components/home/PartnersSection.tsx`)
- **"We Accept" section:** Custom SVG logos for Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay
- **"Trusted Shipping Partners" section:** Custom SVG logos for USPS, UPS, FedEx, DHL
- All logos are inline SVGs (no external images needed), styled with brand-accurate colors

#### 7g. CTASection (`src/components/home/CTASection.tsx`)
- Blue gradient background
- Headline: "Need Help? We're Here For You"
- Description about 24/7 support
- Two CTA buttons: "Contact Support" + "Track Your Order"

---

### Step 8: Contact Page & Form

#### Contact Page (`src/app/contact/page.tsx`)
- Page-level metadata with title and description
- Hero section with Mail icon and heading
- 3 contact method cards:
  1. **Email Us** — support@happystoreshop.com
  2. **Call Us** — (844) 308-2059
  3. **Business Hours** — Monday–Friday, 9:00 AM–6:00 PM EST
- Embeds the `<ContactForm />` component

#### ContactForm (`src/components/contact/ContactForm.tsx`)
- **Fields:**
  - Full Name (required)
  - Email Address (required)
  - Order Number (optional)
  - Subject (dropdown: General Inquiry, Order Status, Returns & Refunds, Shipping, Product Question, Other)
  - Message (required, textarea)
- **Form submission via FormSubmit.co:**
  - Endpoint: `https://formsubmit.co/ajax/support@happystoreshop.com`
  - Sends as JSON via `fetch()` POST
  - Honeypot field (`_honey`) for spam protection
  - Captcha disabled (`_captcha: false`)
  - Table-formatted email template
- **UX:**
  - Loading spinner during submission
  - Green success message on completion
  - Red error message on failure
  - Form resets after successful submission

---

### Step 9: Order Tracking Page

#### Tracking Page (`src/app/tracking/page.tsx`)
- Page-level metadata
- Hero section with Package icon
- Embeds `<TrackingForm />` and `<TrackingFAQ />`

#### TrackingForm (`src/components/tracking/TrackingForm.tsx`)
- Text input for tracking number
- "Track Package" button
- **Integration with 17TRACK.net:**
  - Loads external script: `https://www.17track.net/externalcall.js`
  - On submit, creates a 17TRACK YQV5 widget to display tracking results inline
  - Falls back to opening `https://www.17track.net/en#nums=TRACKING_NUMBER` in a new tab
- "View on 17TRACK.net" direct link always visible
- **Supported carriers grid:** 6 carrier badges with brand colors:
  - USPS (blue), UPS (brown), FedEx (purple/orange), DHL (red/yellow), China Post (red), Royal Mail (red)

#### TrackingFAQ (`src/components/tracking/TrackingFAQ.tsx`)
- 5 expandable FAQ items (click to toggle):
  1. "How do I track my order?" — Enter tracking number from confirmation email
  2. "When will I receive my tracking number?" — Within 1-3 business days
  3. "What carriers do you use?" — USPS, UPS, FedEx, DHL, and more
  4. "My tracking hasn't updated in a while" — International = up to 15 days
  5. "What if my package is lost?" — Contact support within 30 days
- ChevronDown icon rotates when expanded

---

### Step 10: Legal / Policy Pages

All 5 legal pages follow the same pattern:

#### Content Files (`src/content/`)
Each policy is a TypeScript file exporting an object with:
```typescript
{
  title: "Privacy Policy",
  lastUpdated: "January 15, 2025",
  sections: [
    { id: "anchor-id", title: "Section Title", content: "<p>HTML content...</p>" },
    // ...
  ]
}
```

#### Reusable Layout (`src/components/legal/LegalPageLayout.tsx`)
- Hero section with title and "Last Updated" date
- **Desktop:** Sidebar with sticky table of contents (links to section anchors)
- **Mobile:** Content only (sidebar hidden)
- Renders each section with `dangerouslySetInnerHTML` for HTML content
- "Related Policies" section at bottom linking to other legal pages

#### Pages Created:

**Privacy Policy** (`/privacy-policy`) — Comprehensive, GDPR/CCPA-aligned:
- Information collection (personal, usage, cookies)
- How data is used (orders, communication, improvement, personalization)
- Third-party sharing (service providers, legal requirements, business transfers)
- Data security (SSL/TLS, secure storage, access controls, audits)
- User rights (access, correction, deletion, opt-out, data portability)
- Cookie types (essential, analytics, functional, advertising)
- Children's privacy, third-party links, policy changes

**Terms of Service** (`/terms-of-service`):
- Acceptance of terms, account responsibilities
- Products, pricing, orders, payment
- Intellectual property, prohibited uses
- Limitation of liability, indemnification
- Dispute resolution, governing law

**Refund & Return Policy** (`/refund-policy`):
- 30-day return window from delivery
- Eligibility criteria (unused, original packaging, proof of purchase)
- Non-returnable items (personalized, perishable, intimate, hazardous, gift cards)
- Return process with RMA (Return Merchandise Authorization) number
- Refund timeline: 5-10 business days after inspection
- Damaged/defective product procedures

**Shipping Policy** (`/shipping-policy`):
- Domestic and international shipping methods
- Delivery time estimates by method
- Free shipping thresholds
- Tracking information availability
- Lost/delayed package procedures

**Cookie Policy** (`/cookie-policy`):
- Types: essential, performance, functional, marketing
- Third-party cookies (analytics, advertising)
- How to manage cookies in browser settings
- Opt-out mechanisms

---

### Step 11: SEO Setup

#### Metadata in Layout (`src/app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: {
    default: "HappyStoreShop — Your Trusted Online Shopping Partner",
    template: "%s | HappyStoreShop",
  },
  description: "...",
  keywords: ["online shopping", "trusted store", "customer service", ...],
  openGraph: { type: "website", locale: "en_US", siteName: "HappyStoreShop", ... },
  robots: { index: true, follow: true },
};
```

Each page also defines its own `metadata` export with unique title and description.

#### robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /
Sitemap: https://happystoreshop.com/sitemap.xml
```

#### sitemap.xml (`public/sitemap.xml`)
Lists all 8 pages with `lastmod` dates and `weekly` change frequency:
- `/` (homepage, priority 1.0)
- `/tracking/`, `/contact/` (priority 0.8)
- 5 legal pages (priority 0.5)

---

### Step 12: AI Image Generation

**`scripts/generate-images.ts`** — Optional script that uses Google Gemini API to generate professional images:

```bash
GEMINI_API_KEY=your_key npm run generate-images
```

**Images generated (9 total):**

| Image | Aspect Ratio | Description |
|-------|-------------|-------------|
| `hero.webp` | 16:9 | Woman opening a delivery box at her front door |
| `about.webp` | 4:3 | Modern fulfillment center with workers packing orders |
| `tracking-hero.webp` | 16:9 | Delivery van on a residential street |
| `contact-hero.webp` | 16:9 | Customer support representative with headset |
| `avatar-sarah.webp` | 1:1 | Female customer testimonial avatar |
| `avatar-james.webp` | 1:1 | Male customer testimonial avatar |
| `avatar-emily.webp` | 1:1 | Young female customer avatar |
| `avatar-michael.webp` | 1:1 | Older male customer avatar |
| `og-image.webp` | 16:9 | Social media sharing image |

**Quality control:** Each image is scored by the Gemini API on visual quality, commercial appropriateness, trustworthiness, and prompt adherence. Only images scoring 7/10 or higher are accepted. Failed images are regenerated up to 3 times.

Images are hosted on **Cloudflare R2** CDN and referenced from `src/lib/constants.ts`.

---

### Step 13: Build & Deploy

#### Build the static site:

```bash
npm run build
```

This generates the `/out` directory with all static files:
```
out/
├── index.html
├── contact/index.html
├── tracking/index.html
├── privacy-policy/index.html
├── terms-of-service/index.html
├── refund-policy/index.html
├── shipping-policy/index.html
├── cookie-policy/index.html
├── _next/static/        # JS/CSS bundles
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

#### Deploy anywhere static files can be hosted (see Section 8).

---

## 4. Complete File Structure

```
happystoreshop/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (Header + Footer + CookieBanner)
│   │   ├── page.tsx                   # Home page (composes 7 sections)
│   │   ├── globals.css                # Tailwind theme + custom animations
│   │   ├── favicon.ico
│   │   ├── contact/page.tsx           # Contact page
│   │   ├── tracking/page.tsx          # Order tracking page
│   │   ├── privacy-policy/page.tsx    # Privacy policy
│   │   ├── terms-of-service/page.tsx  # Terms of service
│   │   ├── refund-policy/page.tsx     # Refund policy
│   │   ├── shipping-policy/page.tsx   # Shipping policy
│   │   └── cookie-policy/page.tsx     # Cookie policy
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Sticky nav with mobile menu
│   │   │   ├── Footer.tsx             # 4-column footer
│   │   │   └── CookieBanner.tsx       # Cookie consent banner
│   │   ├── home/
│   │   │   ├── HeroSection.tsx        # Hero with CTA + social proof
│   │   │   ├── TrustBadges.tsx        # SSL, Guarantee, Support badges
│   │   │   ├── AboutSection.tsx       # Company story + stats
│   │   │   ├── ValuesSection.tsx      # 4 core values
│   │   │   ├── TestimonialsSection.tsx # 4 customer reviews
│   │   │   ├── PartnersSection.tsx    # Payment + shipping logos (SVG)
│   │   │   └── CTASection.tsx         # Secondary CTA
│   │   ├── contact/
│   │   │   └── ContactForm.tsx        # FormSubmit.co integration
│   │   ├── tracking/
│   │   │   ├── TrackingForm.tsx       # 17TRACK.net integration
│   │   │   └── TrackingFAQ.tsx        # 5 expandable FAQs
│   │   ├── legal/
│   │   │   └── LegalPageLayout.tsx    # Reusable layout for policy pages
│   │   └── ui/
│   │       └── Logo.tsx               # Custom SVG logo
│   ├── content/
│   │   ├── privacy-policy.ts          # Privacy policy content
│   │   ├── terms-of-service.ts        # Terms content
│   │   ├── refund-policy.ts           # Refund policy content
│   │   ├── shipping-policy.ts         # Shipping policy content
│   │   └── constants.ts              # (duplicate, see lib/constants.ts)
│   └── lib/
│       └── constants.ts               # Company info, nav links, image URLs
├── public/
│   ├── robots.txt                     # SEO crawling rules
│   └── sitemap.xml                    # Site structure for search engines
├── scripts/
│   └── generate-images.ts             # Gemini API image generator
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── .gitignore
```

---

## 5. Trust Signals Checklist

Everything implemented to build customer trust:

### Visual Trust
- [x] Professional, clean design with consistent branding
- [x] Custom logo (shopping bag with smiley face)
- [x] Cohesive color scheme (brand blue `#1E40AF`)
- [x] Inter font for readability
- [x] Smooth animations (scroll reveal, hover lift, shine effect)
- [x] Mobile-responsive design at all breakpoints

### Security Trust
- [x] "256-bit SSL Encryption" badge
- [x] "Safe Checkout" badge with lock icon
- [x] SSL/TLS security badge in footer
- [x] "Bank-level security" claim in Values section
- [x] PCI DSS compliance mentioned in Privacy Policy
- [x] Data security practices documented

### Social Proof
- [x] "50,000+ Happy Customers" badge in hero
- [x] "4.9/5 Average Rating" with gold stars
- [x] "98% Satisfaction Rate" stat card
- [x] 4 customer testimonials with 5-star reviews
- [x] "Verified Buyer" badges on testimonials
- [x] Customer avatar photos

### Payment & Shipping Trust
- [x] 6 payment method logos (Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay)
- [x] 4 shipping carrier logos (USPS, UPS, FedEx, DHL)
- [x] "1,500+ carriers supported" on tracking page

### Guarantees
- [x] "30-Day Money-Back Guarantee" badge
- [x] Full refund policy page with clear process
- [x] RMA process documented
- [x] Damaged/defective product procedures

### Accessibility & Support
- [x] Email contact prominently displayed
- [x] Phone number visible
- [x] Business hours listed
- [x] Contact form with multiple subject options
- [x] "24/7 Support" claim
- [x] FAQ section for common tracking questions

### Legal Compliance
- [x] Privacy Policy (GDPR/CCPA aligned)
- [x] Terms of Service
- [x] Refund & Return Policy
- [x] Shipping Policy
- [x] Cookie Policy
- [x] Cookie consent banner

### SEO & Discoverability
- [x] Unique meta title and description per page
- [x] OpenGraph tags for social sharing
- [x] robots.txt allowing crawling
- [x] sitemap.xml with all pages
- [x] Semantic HTML structure
- [x] Proper heading hierarchy

---

## 6. Third-Party Services

| Service | Purpose | Cost | Setup |
|---------|---------|------|-------|
| **FormSubmit.co** | Email form submissions | Free | Change email in ContactForm.tsx fetch URL |
| **17TRACK.net** | Package tracking widget | Free | No account needed; loads external script |
| **Google Fonts** | Inter font family | Free | Loaded via `next/font/google` |
| **Cloudflare R2** | Image hosting (CDN) | Free tier available | Upload images, update R2_BASE in constants.ts |
| **Google Gemini API** | AI image generation (optional) | Pay-per-use | Set GEMINI_API_KEY env var, run generate script |

---

## 7. Customization Guide

### To rebrand for a different store:

1. **Edit `src/lib/constants.ts`:**
   - Change `COMPANY.name`, `email`, `phone`, `hours`, `url`
   - Update `R2_BASE` to your own image CDN
   - Update `IMAGES` with your own image URLs

2. **Replace the logo:**
   - Edit `src/components/ui/Logo.tsx` with your own SVG or image

3. **Update colors:**
   - Edit `src/app/globals.css` — change `--color-brand-*` values

4. **Update content:**
   - Edit files in `src/content/` to change policy text
   - Edit testimonials in `src/components/home/TestimonialsSection.tsx`
   - Edit stats in `src/components/home/AboutSection.tsx`

5. **Update contact form:**
   - Change the FormSubmit.co email in `src/components/contact/ContactForm.tsx`
   - The endpoint URL contains the destination email

6. **Update SEO:**
   - Edit metadata in `src/app/layout.tsx`
   - Update `public/sitemap.xml` with your domain
   - Update `public/robots.txt` with your sitemap URL

7. **Generate new images:**
   - Edit prompts in `scripts/generate-images.ts`
   - Run `GEMINI_API_KEY=your_key npm run generate-images`
   - Upload to your CDN and update `IMAGES` in constants

---

## 8. Deployment Options

The site builds to static HTML in the `/out` directory. Deploy to any static host:

### Cloudflare Pages (Recommended for free tier)
```bash
npm run build
# Upload /out directory via Cloudflare dashboard or Wrangler CLI
```

### Vercel
```bash
# Connect GitHub repo to Vercel — it detects Next.js automatically
# Or deploy manually:
npx vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push /out directory to gh-pages branch
```

### Netlify
```bash
npm run build
# Drag /out folder to Netlify dashboard or connect GitHub repo
```

### Traditional Web Host (cPanel, etc.)
```bash
npm run build
# Upload contents of /out via FTP/SFTP
```

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
# Configure CloudFront distribution pointing to the S3 bucket
```

---

## Summary

This project creates a professional, trustworthy e-commerce storefront by combining:

1. **Modern tech stack** — Next.js + React + TypeScript + Tailwind CSS
2. **Static export** — No server needed, deploys anywhere, fast loading
3. **Trust architecture** — 20+ trust signals across security, social proof, guarantees, and compliance
4. **Third-party integrations** — FormSubmit.co for contact, 17TRACK for package tracking
5. **Comprehensive legal pages** — 5 policies covering privacy, terms, refunds, shipping, and cookies
6. **Professional visuals** — AI-generated images, custom SVG logos, smooth animations
7. **Mobile-first responsive design** — Works on all devices
8. **SEO optimization** — Meta tags, sitemap, robots.txt, semantic HTML

To replicate: follow Steps 1–13 in order, customize using Section 7, and deploy using Section 8.
