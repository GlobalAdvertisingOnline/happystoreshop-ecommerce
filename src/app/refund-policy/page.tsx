import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { refundPolicyContent } from "@/content/refund-policy";

export const metadata: Metadata = {
  title: "Refund & Return Policy",
  description:
    "Learn about HappyStoreShop's 30-day return policy, refund process, and how to initiate a return or exchange.",
};

export default function RefundPolicyPage() {
  return <LegalPageLayout {...refundPolicyContent} />;
}
