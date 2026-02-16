import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IMAGES } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { CartProvider } from "@/lib/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { MembershipProvider } from "@/lib/membership/MembershipContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HappyStoreShop — Your Trusted Online Shopping Partner",
    template: "%s | HappyStoreShop",
  },
  description:
    "HappyStoreShop is your trusted online shopping partner, delivering quality products and exceptional customer service to thousands of happy customers worldwide.",
  keywords: ["online shopping", "trusted store", "customer service", "order tracking", "secure shopping"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HappyStoreShop",
    title: "HappyStoreShop — Your Trusted Online Shopping Partner",
    description:
      "Delivering quality products and exceptional customer service to thousands of happy customers worldwide.",
    images: [
      {
        url: IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: "HappyStoreShop — Your Trusted Online Shopping Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HappyStoreShop — Your Trusted Online Shopping Partner",
    description:
      "Delivering quality products and exceptional customer service to thousands of happy customers worldwide.",
    images: [IMAGES.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
        <MembershipProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <CookieBanner />
        </MembershipProvider>
        </CartProvider>
      </body>
    </html>
  );
}
