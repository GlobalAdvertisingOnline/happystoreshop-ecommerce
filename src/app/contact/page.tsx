import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the HappyStoreShop support team. We're here to help with orders, shipping, returns, and any questions you may have.",
};

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    note: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`,
    note: "Mon–Fri, 9:00 AM – 6:00 PM EST",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Fri",
    href: null,
    note: "9:00 AM – 6:00 PM EST",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${IMAGES.contactHero})` }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <MessageSquare className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            We&apos;re here to help. Reach out through any of the channels below and
            our team will assist you promptly.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <card.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-lg font-semibold text-brand-blue hover:underline"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-slate-900">
                    {card.value}
                  </p>
                )}
                <p className="text-sm text-slate-500">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
