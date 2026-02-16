"use client";

import { useState } from "react";
import { SHIPPING } from "@/lib/constants";

export function SavingsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(200);

  const shippingThresholdDollars = SHIPPING.freeThreshold / 100;
  const shippingDollars = SHIPPING.flatRate / 100;
  const shippingSaved = monthlySpend < shippingThresholdDollars ? shippingDollars : 0;
  const discountSaved = monthlySpend * 0.15;
  const totalSaved = shippingSaved + discountSaved;
  const netSavings = totalSaved - 39.95;

  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          How Much Will You Save?
        </h2>
        <p className="mb-8 text-slate-600">
          Drag the slider to see your estimated monthly savings.
        </p>

        <div className="mb-6">
          <label htmlFor="spend-slider" className="mb-2 block text-sm font-medium text-slate-700">
            Your estimated monthly spend: <span className="text-lg font-bold text-brand-blue">${monthlySpend}</span>
          </label>
          <input
            id="spend-slider"
            type="range"
            min={50}
            max={500}
            step={10}
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-amber-200 accent-amber-500"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>$50</span>
            <span>$500</span>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Free shipping savings</span>
              <span className="font-semibold text-brand-green">+${shippingSaved.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">15% product discount</span>
              <span className="font-semibold text-brand-green">+${discountSaved.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">HappyStore+ membership</span>
              <span className="font-semibold text-slate-500">&minus;$39.95</span>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <div className="flex justify-between">
                <span className="text-base font-bold text-slate-900">Your net savings</span>
                <span className={`text-xl font-bold ${netSavings > 0 ? "text-brand-green" : "text-slate-500"}`}>
                  {netSavings > 0 ? `$${netSavings.toFixed(2)}` : "$0.00"}
                </span>
              </div>
              {netSavings > 0 && (
                <p className="mt-2 text-sm text-brand-green">
                  You save ${netSavings.toFixed(2)} every month with HappyStore+!
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Shipping is ${shippingDollars.toFixed(2)} per order (free on orders ${shippingThresholdDollars}+). Actual savings may vary.
        </p>
      </div>
    </section>
  );
}
