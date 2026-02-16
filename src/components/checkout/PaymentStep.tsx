"use client";

import { CreditCard, Lock } from "lucide-react";

interface PaymentData {
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  billingName: string;
  billingSameAsShipping: boolean;
}

interface PaymentStepProps {
  data: PaymentData;
  onChange: (data: PaymentData) => void;
  errors: Record<string, string>;
  onNext: () => void;
  onBack: () => void;
}

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}

export function PaymentStep({
  data,
  onChange,
  errors,
  onNext,
  onBack,
}: PaymentStepProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Payment Details</h2>
        <div className="flex items-center gap-1.5 text-brand-green">
          <Lock className="h-4 w-4" />
          <span className="text-xs font-medium">Secure & Encrypted</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="billingName" className="text-sm font-medium text-slate-700">
          Name on Card <span className="text-brand-red">*</span>
        </label>
        <input
          id="billingName"
          type="text"
          autoComplete="cc-name"
          value={data.billingName}
          onChange={(e) => onChange({ ...data, billingName: e.target.value })}
          className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
            errors.billingName ? "border-brand-red" : "border-slate-200"
          }`}
          placeholder="John Smith"
        />
        {errors.billingName && (
          <p className="text-xs text-brand-red" role="alert">{errors.billingName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cardNumber" className="text-sm font-medium text-slate-700">
          Card Number <span className="text-brand-red">*</span>
        </label>
        <div className="relative">
          <input
            id="cardNumber"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            value={data.cardNumber}
            onChange={(e) =>
              onChange({ ...data, cardNumber: formatCardNumber(e.target.value) })
            }
            className={`w-full rounded-lg border py-3 pl-4 pr-12 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
              errors.cardNumber ? "border-brand-red" : "border-slate-200"
            }`}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
          <CreditCard className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300" />
        </div>
        {errors.cardNumber && (
          <p className="text-xs text-brand-red" role="alert">{errors.cardNumber}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cardExpiry" className="text-sm font-medium text-slate-700">
            Expiry Date <span className="text-brand-red">*</span>
          </label>
          <input
            id="cardExpiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={data.cardExpiry}
            onChange={(e) =>
              onChange({ ...data, cardExpiry: formatExpiry(e.target.value) })
            }
            className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
              errors.cardExpiry ? "border-brand-red" : "border-slate-200"
            }`}
            placeholder="MM/YY"
            maxLength={5}
          />
          {errors.cardExpiry && (
            <p className="text-xs text-brand-red" role="alert">{errors.cardExpiry}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cardCvv" className="text-sm font-medium text-slate-700">
            CVV <span className="text-brand-red">*</span>
          </label>
          <input
            id="cardCvv"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            value={data.cardCvv}
            onChange={(e) =>
              onChange({
                ...data,
                cardCvv: e.target.value.replace(/\D/g, "").slice(0, 4),
              })
            }
            className={`rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
              errors.cardCvv ? "border-brand-red" : "border-slate-200"
            }`}
            placeholder="123"
            maxLength={4}
          />
          {errors.cardCvv && (
            <p className="text-xs text-brand-red" role="alert">{errors.cardCvv}</p>
          )}
        </div>
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.billingSameAsShipping}
          onChange={(e) =>
            onChange({ ...data, billingSameAsShipping: e.target.checked })
          }
          className="h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
        />
        <span className="text-sm text-slate-600">
          Billing address same as shipping
        </span>
      </label>

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
          Review Order
        </button>
      </div>
    </div>
  );
}
