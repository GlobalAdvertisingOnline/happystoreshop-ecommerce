import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { cookiePolicyContent } from "@/content/cookie-policy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how HappyStoreShop uses cookies and similar technologies, and how you can manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return <LegalPageLayout {...cookiePolicyContent} />;
}
