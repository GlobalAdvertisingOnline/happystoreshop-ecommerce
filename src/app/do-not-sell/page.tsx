import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "Learn about your rights under the CCPA/CPRA to opt out of the sale or sharing of your personal information at HappyStoreShop.",
};

export default function DoNotSellPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <ShieldAlert className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Do Not Sell or Share My Personal Information
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We respect your privacy and your right to control how your personal
            data is used.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <article className="prose prose-slate mx-auto max-w-3xl">
            {/* Your Privacy Rights */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900">
                Your Privacy Rights
              </h2>
              <div className="mt-3 text-[15px] leading-relaxed text-slate-600">
                <p className="mb-4">
                  Under the California Consumer Privacy Act (CCPA) and the
                  California Privacy Rights Act (CPRA), California residents have
                  the right to opt out of the sale or sharing of their personal
                  information. This right allows you to direct businesses not to
                  sell or share your personal data with third parties for
                  commercial purposes, including targeted advertising.
                </p>
                <p className="mb-4">
                  We believe everyone deserves transparency and control over their
                  personal data, regardless of where they live. This page explains
                  how {COMPANY.name} handles your information and how you can
                  exercise your rights.
                </p>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900">
                Our Commitment
              </h2>
              <div className="mt-3 text-[15px] leading-relaxed text-slate-600">
                <p className="mb-4">
                  {COMPANY.name} does not sell your personal information to third
                  parties. We may share limited data with service providers who
                  assist in operating our business (such as payment processing,
                  shipping, and analytics), but these providers are contractually
                  prohibited from using your data for their own purposes.
                </p>
                <p className="mb-4">
                  Our service providers are carefully vetted and bound by strict
                  data processing agreements. They may only use your information
                  to fulfill the specific services we have engaged them to perform
                  on our behalf and are required to maintain the confidentiality
                  and security of your data at all times.
                </p>
              </div>
            </div>

            {/* How to Submit a Request */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900">
                How to Submit a Request
              </h2>
              <div className="mt-3 text-[15px] leading-relaxed text-slate-600">
                <p className="mb-4">
                  If you would like to exercise your right to opt out of the sale
                  or sharing of your personal information, you can submit a
                  request by emailing us at{" "}
                  <a
                    href={`mailto:${COMPANY.email}?subject=Do%20Not%20Sell%20My%20Info`}
                    className="text-brand-blue underline-offset-2 hover:underline"
                  >
                    {COMPANY.email}
                  </a>{" "}
                  with the subject line{" "}
                  <strong>&quot;Do Not Sell My Info&quot;</strong>.
                </p>
                <p className="mb-4">
                  Please include the following information in your email to help
                  us locate and process your request:
                </p>
                <ul className="mb-4 list-disc pl-5">
                  <li>Your full name</li>
                  <li>The email address associated with your account</li>
                </ul>
                <p className="mb-4">
                  We will acknowledge your request and respond within 30 days of
                  receipt. If we need additional time, we will notify you of the
                  reason and the expected completion date.
                </p>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900">
                What Happens Next
              </h2>
              <div className="mt-3 text-[15px] leading-relaxed text-slate-600">
                <p className="mb-4">
                  Once we receive your request, we follow a clear process to
                  ensure it is handled promptly and accurately:
                </p>
                <ol className="mb-4 list-decimal pl-5">
                  <li className="mb-2">
                    <strong>Identity Verification:</strong> We verify your
                    identity to protect your account and ensure the request is
                    legitimate. This may involve confirming details associated
                    with your account.
                  </li>
                  <li className="mb-2">
                    <strong>Request Processing:</strong> Your request will be
                    processed within 15 business days of successful verification.
                    During this time, we will update our systems to reflect your
                    preferences.
                  </li>
                  <li className="mb-2">
                    <strong>Confirmation:</strong> Once your request has been
                    fully processed, we will send you a confirmation email to the
                    address on file, confirming that your opt-out preferences have
                    been applied.
                  </li>
                </ol>
                <p className="mb-4">
                  You will not be discriminated against for exercising your
                  privacy rights. Opting out will not affect the quality of
                  service you receive from {COMPANY.name}.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900">Contact Us</h2>
              <div className="mt-3 text-[15px] leading-relaxed text-slate-600">
                <p className="mb-4">
                  If you have any questions about this page, your privacy rights,
                  or how we handle your personal information, please contact us:
                </p>
                <ul className="mb-4 list-disc pl-5">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-brand-blue underline-offset-2 hover:underline"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                      className="text-brand-blue underline-offset-2 hover:underline"
                    >
                      {COMPANY.phone}
                    </a>
                  </li>
                </ul>
                <p className="mb-4">
                  We aim to respond to all inquiries within two business days.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
