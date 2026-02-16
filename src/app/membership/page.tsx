import type { Metadata } from "next";
import { MembershipHero } from "@/components/membership/MembershipHero";
import { BenefitsGrid } from "@/components/membership/BenefitsGrid";
import { SavingsCalculator } from "@/components/membership/SavingsCalculator";
import { MembershipFAQ } from "@/components/membership/MembershipFAQ";
import { JoinForm } from "@/components/membership/JoinForm";

export const metadata: Metadata = {
  title: "HappyStore+ Membership",
  description:
    "Join HappyStore+ for $29.95/month. Get free shipping and 15% off everything, every time you shop. Cancel anytime.",
};

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <BenefitsGrid />
      <SavingsCalculator />
      <JoinForm />
      <MembershipFAQ />
    </>
  );
}
