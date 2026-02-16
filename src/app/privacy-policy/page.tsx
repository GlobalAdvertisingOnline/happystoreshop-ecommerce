import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { privacyPolicyContent } from "@/content/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how HappyStoreShop collects, uses, and protects your personal information. Your privacy is important to us.",
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout {...privacyPolicyContent} />;
}
