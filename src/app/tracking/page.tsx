import type { Metadata } from "next";
import { Package, Truck } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { TrackingFAQ } from "@/components/tracking/TrackingFAQ";

export const metadata: Metadata = {
  title: "Track Your Order",
  description:
    "Track your HappyStoreShop order in real time. Enter your tracking number to get instant shipping updates from USPS, UPS, FedEx, DHL, and 1,500+ carriers worldwide.",
};

export default function TrackingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${IMAGES.trackingHero})` }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <Package className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Track Your Order
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Enter your tracking number below to get real-time shipping updates
            on your package.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <TrackingForm />
        </div>
      </section>

      {/* Supported Carriers */}
      <section className="border-y border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
            <Truck className="h-4 w-4" />
            Supported Carriers
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              { name: "USPS", bg: "bg-[#333366]", text: "text-white" },
              { name: "UPS", bg: "bg-[#351C15]", text: "text-[#FFB500]" },
              { name: "FedEx", bg: "bg-[#4D148C]", text: "text-white" },
              { name: "DHL", bg: "bg-[#FFCC00]", text: "text-[#D40511]" },
              { name: "China Post", bg: "bg-[#006633]", text: "text-white" },
              { name: "Royal Mail", bg: "bg-[#D4351C]", text: "text-white" },
            ].map((carrier) => (
              <div
                key={carrier.name}
                className={`rounded-lg px-4 py-2 text-sm font-bold shadow-sm ${carrier.bg} ${carrier.text}`}
              >
                {carrier.name}
              </div>
            ))}
            <div className="rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-4 py-2 text-sm font-semibold text-brand-blue">
              1,500+ More
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <TrackingFAQ />
        </div>
      </section>
    </>
  );
}
