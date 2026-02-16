import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { membershipTerms } from "@/content/membership-terms";

export const metadata: Metadata = {
  title: membershipTerms.title,
  description: "Terms and conditions for the HappyStore+ membership program.",
};

export default function MembershipTermsPage() {
  return (
    <LegalPageLayout
      title={membershipTerms.title}
      lastUpdated={membershipTerms.lastUpdated}
      sections={membershipTerms.sections}
    />
  );
}
