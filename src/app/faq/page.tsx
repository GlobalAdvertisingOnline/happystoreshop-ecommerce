import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about orders, shipping, returns, refunds, payments, and more at HappyStoreShop.",
};

const faqCategories = [
  {
    category: "Orders & Shipping",
    faqs: [
      {
        question: "How do I track my order?",
        answer:
          "You can track your order by visiting our dedicated tracking page. Simply enter the tracking number from your shipping confirmation email and get real-time updates on your package's location and estimated delivery date.",
        link: { label: "Go to Tracking Page", href: "/tracking" },
      },
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping typically takes 5–12 business days for domestic orders and 10–20 business days for international orders. Delivery times may vary depending on your location and the carrier used. Express shipping options are available at checkout for faster delivery.",
      },
      {
        question: "What shipping carriers do you use?",
        answer:
          "We partner with all major shipping carriers including USPS, UPS, FedEx, and DHL, along with 1,500+ additional carriers worldwide. The carrier used for your order depends on your location and the shipping method selected at checkout.",
      },
      {
        question: "Can I change my shipping address after ordering?",
        answer:
          "If your order hasn't been dispatched yet, we may be able to update the shipping address. Please contact our support team as soon as possible with your order number and the new address. Once the order has been shipped, address changes are no longer possible.",
        link: { label: "Contact Support", href: "/contact" },
      },
    ],
  },
  {
    category: "Returns & Refunds",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy on most items. Products must be returned in their original condition and packaging. Some items such as perishable goods, custom products, and personal care items may not be eligible for return. Please review our full return policy for complete details.",
        link: { label: "View Refund Policy", href: "/refund-policy" },
      },
      {
        question: "How do I request a refund?",
        answer:
          "To request a refund, contact our customer support team with your order number and reason for the return. Our team will review your request and, if approved, issue a Return Merchandise Authorization (RMA) number along with instructions for returning your item. Once we receive and inspect the returned product, your refund will be processed.",
        link: { label: "Contact Support", href: "/contact" },
      },
      {
        question: "How long do refunds take?",
        answer:
          "Once we receive your returned item and verify its condition, refunds are typically processed within 5–10 business days. The refund will be credited to your original payment method. Please note that your bank or payment provider may take additional time to reflect the refund in your account.",
      },
    ],
  },
  {
    category: "Account & Security",
    faqs: [
      {
        question: "Is my payment information secure?",
        answer:
          "Absolutely. We take security very seriously. All transactions are protected with 256-bit SSL encryption, and we are fully PCI-DSS compliant. We never store your credit card data in plaintext. Your payment information is processed through secure, industry-leading payment gateways to ensure maximum protection.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept a wide range of payment methods for your convenience, including Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All payment methods are processed securely through our encrypted checkout system.",
      },
      {
        question: "How do I cancel my order?",
        answer:
          "You can request an order cancellation through our cancellation page. If your order hasn't been shipped yet, we'll process the cancellation and issue a full refund. Orders that have already been dispatched cannot be cancelled but may be eligible for return once delivered.",
        link: { label: "Cancel an Order", href: "/cancel" },
      },
    ],
  },
  {
    category: "Contact & Support",
    faqs: [
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our customer support team by email at support@happystoreshop.com or by phone at (844) 308-2059. You can also send us a message through our contact page and we'll respond within 24 hours.",
        link: { label: "Visit Contact Page", href: "/contact" },
      },
      {
        question: "What are your business hours?",
        answer:
          "Our customer support team is available Monday through Friday, 9:00 AM to 6:00 PM EST. Messages received outside of business hours will be responded to on the next business day. We strive to answer all inquiries within 24 hours.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 md:py-20">
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <HelpCircle className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Find answers to common questions about orders, shipping, returns,
            and more. Can&apos;t find what you&apos;re looking for? Feel free to
            contact us.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FAQAccordion categories={faqCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-600">
            Contact our support team and we&apos;ll be happy to help you with
            anything you need.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-blue px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue/90"
          >
            Contact Our Support Team
          </Link>
        </div>
      </section>
    </>
  );
}
