"use client";

interface ShippingData {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface ShippingStepProps {
  data: ShippingData;
  onChange: (data: ShippingData) => void;
  errors: Record<string, string>;
  onNext: () => void;
  onBack: () => void;
}

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

function InputField({
  id,
  label,
  required,
  error,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={id}
        {...props}
        className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
          error ? "border-brand-red" : "border-slate-200"
        }`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-brand-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ShippingStep({
  data,
  onChange,
  errors,
  onNext,
  onBack,
}: ShippingStepProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-slate-900">Shipping Address</h2>

      <div className="grid grid-cols-2 gap-4">
        <InputField
          id="firstName"
          label="First Name"
          required
          autoComplete="given-name"
          value={data.firstName}
          onChange={(e) => onChange({ ...data, firstName: e.target.value })}
          error={errors.firstName}
        />
        <InputField
          id="lastName"
          label="Last Name"
          required
          autoComplete="family-name"
          value={data.lastName}
          onChange={(e) => onChange({ ...data, lastName: e.target.value })}
          error={errors.lastName}
        />
      </div>

      <InputField
        id="address1"
        label="Address"
        required
        autoComplete="address-line1"
        value={data.address1}
        onChange={(e) => onChange({ ...data, address1: e.target.value })}
        error={errors.address1}
        placeholder="123 Main St"
      />

      <InputField
        id="address2"
        label="Apartment, Suite, etc."
        autoComplete="address-line2"
        value={data.address2}
        onChange={(e) => onChange({ ...data, address2: e.target.value })}
        placeholder="Apt 4B"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <InputField
          id="city"
          label="City"
          required
          autoComplete="address-level2"
          value={data.city}
          onChange={(e) => onChange({ ...data, city: e.target.value })}
          error={errors.city}
        />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="state" className="text-sm font-medium text-slate-700">
            State <span className="text-brand-red">*</span>
          </label>
          <select
            id="state"
            autoComplete="address-level1"
            value={data.state}
            onChange={(e) => onChange({ ...data, state: e.target.value })}
            className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
              errors.state ? "border-brand-red" : "border-slate-200"
            }`}
          >
            <option value="">Select</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && (
            <p className="text-xs text-brand-red" role="alert">{errors.state}</p>
          )}
        </div>

        <InputField
          id="zip"
          label="ZIP Code"
          required
          autoComplete="postal-code"
          value={data.zip}
          onChange={(e) => onChange({ ...data, zip: e.target.value })}
          error={errors.zip}
          placeholder="12345"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="country" className="text-sm font-medium text-slate-700">
          Country <span className="text-brand-red">*</span>
        </label>
        <select
          id="country"
          autoComplete="country"
          value={data.country}
          onChange={(e) => onChange({ ...data, country: e.target.value })}
          className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="US">United States</option>
        </select>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:shadow-md"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
