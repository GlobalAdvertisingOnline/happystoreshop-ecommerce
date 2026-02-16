import { Truck, Percent, Clock } from "lucide-react";

const BENEFITS = [
  {
    icon: Truck,
    title: "Free Shipping, Every Order",
    description:
      "No minimums, no exceptions. Every order ships free for HappyStore+ members. Save $5.99–$12.99 per order.",
  },
  {
    icon: Percent,
    title: "15% Off Everything",
    description:
      "Exclusive member discount applied automatically at checkout on every product in our store, every time.",
  },
  {
    icon: Clock,
    title: "Early Access & Exclusives",
    description:
      "Shop new arrivals and seasonal sales before anyone else. Plus member-only deals you won't find anywhere else.",
  },
];

export function BenefitsGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
          Your HappyStore+ Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="hover-lift rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50/50 to-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-md shadow-amber-200/50">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
