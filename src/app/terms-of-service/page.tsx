import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { termsContent } from "@/content/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the HappyStoreShop website and services.",
};

export default function TermsOfServicePage() {
  return <LegalPageLayout {...termsContent} />;
}
