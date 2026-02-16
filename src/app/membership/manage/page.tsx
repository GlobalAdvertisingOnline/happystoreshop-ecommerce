import type { Metadata } from "next";
import { ManageMembership } from "@/components/membership/ManageMembership";

export const metadata: Metadata = {
  title: "Manage Membership",
  description: "View, manage, or cancel your HappyStore+ membership.",
};

export default function ManageMembershipPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ManageMembership />
      </div>
    </section>
  );
}
