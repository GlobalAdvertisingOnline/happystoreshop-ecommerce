export interface MembershipState {
  status: "none" | "active" | "cancelled" | "loading";
  email: string | null;
  customerId: string | null;
  joinedAt: string | null;
  nextBillingDate: string | null;
}

export const MEMBERSHIP_CONFIG = {
  name: "HappyStore+",
  price: 2995,
  priceFormatted: "$29.95",
  interval: "monthly" as const,
  shippingDiscountPercent: 100,
  productDiscountPercent: 15,
} as const;

export const initialMembershipState: MembershipState = {
  status: "none",
  email: null,
  customerId: null,
  joinedAt: null,
  nextBillingDate: null,
};
