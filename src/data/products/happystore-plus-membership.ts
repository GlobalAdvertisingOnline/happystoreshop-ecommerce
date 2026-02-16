import { Product } from "@/lib/types/product";
import { MEMBERSHIP } from "@/lib/constants";

export const happyStorePlusMembership: Product = {
  slug: "happystore-plus-membership",
  name: "HappyStore+ Membership",
  shortDescription:
    "Unlock free shipping on every order, 15% off all products storewide, and early access to new arrivals. $39.95/month, cancel anytime.",
  description: `
    <p>
      Join <strong>HappyStore+</strong> and transform your shopping experience.
      As a member, you'll enjoy exclusive perks designed to save you money on
      every purchase while giving you priority access to our newest collections
      and limited-edition releases.
    </p>
    <h3>Membership Benefits</h3>
    <ul>
      <li><strong>Free Shipping on Every Order</strong> — No minimums, no exceptions. Every order ships free for as long as you're a member.</li>
      <li><strong>15% Off Everything</strong> — An exclusive storewide discount applied automatically at checkout on all products.</li>
      <li><strong>Early Access</strong> — Shop new arrivals and seasonal sales before they go live to the public.</li>
      <li><strong>Member-Only Deals</strong> — Special offers and bundles available only to HappyStore+ members.</li>
    </ul>
    <h3>How It Works</h3>
    <p>
      Your membership begins immediately upon purchase. Your 15% discount and
      free shipping benefits apply to all future orders placed while your
      membership is active. Your account will be charged $39.95 each month
      on the same date you joined. You can cancel at any time with one click
      at <a href="/membership/manage">happystoreshop.com/membership/manage</a>.
    </p>
    <h3>Recurring Billing Disclosure</h3>
    <p>
      <strong>Important:</strong> HappyStore+ is a monthly subscription service
      billed at $39.95/month. By purchasing, you authorize recurring monthly
      charges of $39.95 to your payment method until you cancel. Cancellation
      is available anytime through your membership management page. Benefits
      remain active through the end of your current billing period after
      cancellation. No partial-month refunds.
    </p>
  `,
  category: "Sets",
  type: "subscription",
  images: [
    { src: "/membership-badge.svg", alt: "HappyStore+ Membership" },
    { src: "/membership-badge.svg", alt: "HappyStore+ Membership Benefits" },
  ],
  variants: [
    {
      id: "membership-happystore-plus",
      name: "HappyStore+ Monthly",
      sku: "MEMBERSHIP-001",
      price: MEMBERSHIP.price,
      inStock: true,
    },
  ],
  features: [
    "Free shipping on every order — no minimums",
    "15% off all products storewide",
    "Early access to new arrivals and sales",
    "Member-only deals and exclusive offers",
    "Cancel anytime with one click",
  ],
  rating: 4.9,
  reviewCount: 312,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Digital membership — no shipping required.",
  subscription: {
    interval: "monthly",
    recurringPrice: MEMBERSHIP.price,
    cancelUrl: "/membership/manage",
  },
  seo: {
    title: "HappyStore+ Membership | Happy Store Shop",
    description:
      "Join HappyStore+ for $39.95/month and unlock free shipping, 15% off everything, and early access to new arrivals. Cancel anytime.",
  },
  checkoutChampProductId: MEMBERSHIP.checkoutChampProductId,
};
