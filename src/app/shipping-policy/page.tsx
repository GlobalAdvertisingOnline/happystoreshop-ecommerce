import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { shippingPolicyContent } from "@/content/shipping-policy";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Find out about HappyStoreShop's shipping methods, estimated delivery times, carriers, and international shipping options.",
};

export default function ShippingPolicyPage() {
  return <LegalPageLayout {...shippingPolicyContent} />;
}
