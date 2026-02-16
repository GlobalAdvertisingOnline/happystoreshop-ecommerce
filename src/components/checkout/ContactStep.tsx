"use client";

interface ContactData {
  email: string;
  phone: string;
  marketingOptIn: boolean;
}

interface ContactStepProps {
  data: ContactData;
  onChange: (data: ContactData) => void;
  errors: Record<string, string>;
  onNext: () => void;
}

export function ContactStep({ data, onChange, errors, onNext }: ContactStepProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-slate-900">Contact Information</h2>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email Address <span className="text-brand-red">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
            errors.email ? "border-brand-red" : "border-slate-200"
          }`}
          placeholder="you@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-brand-red" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Phone Number <span className="text-brand-red">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
            errors.phone ? "border-brand-red" : "border-slate-200"
          }`}
          placeholder="(555) 555-5555"
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs text-brand-red" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.marketingOptIn}
          onChange={(e) => onChange({ ...data, marketingOptIn: e.target.checked })}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
        />
        <span className="text-sm text-slate-600">
          I&apos;d like to receive emails about new products, promotions, and exclusive offers.
          You can unsubscribe at any time.
        </span>
      </label>

      <button
        onClick={onNext}
        className="mt-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-md"
      >
        Continue to Shipping
      </button>
    </div>
  );
}
