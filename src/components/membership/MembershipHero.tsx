import { Crown, Truck, Percent, Clock } from "lucide-react";

export function MembershipHero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-200">
          <Crown className="h-8 w-8 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
          Join <span className="membership-gold">HappyStore+</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
          Unlock free shipping and 15% off everything, every time you shop.
          Premium perks, one simple membership.
        </p>

        <p className="mt-6 text-2xl font-bold text-slate-900">
          $39.95<span className="text-base font-normal text-slate-500">/month</span>
          <span className="mx-3 text-slate-300">·</span>
          <span className="text-base font-normal text-slate-500">Cancel anytime</span>
        </p>

        {/* Benefits pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <Truck className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-slate-700">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <Percent className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-slate-700">15% Off Everything</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <Clock className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-slate-700">Early Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
