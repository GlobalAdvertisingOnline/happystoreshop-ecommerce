import { Check } from "lucide-react";

const STEPS = ["Contact", "Shipping", "Payment", "Review"] as const;

export function ProgressIndicator({ currentStep }: { currentStep: number }) {
  return (
    <nav aria-label="Checkout progress" className="mb-8">
      <ol className="flex items-center gap-2">
        {STEPS.map((step, i) => {
          const isCompleted = i < currentStep;
          const isCurrent = i === currentStep;

          return (
            <li key={step} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  isCompleted
                    ? "bg-brand-green text-white"
                    : isCurrent
                    ? "bg-brand-blue text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={`hidden text-sm font-medium sm:block ${
                  isCurrent ? "text-brand-blue" : isCompleted ? "text-brand-green" : "text-slate-400"
                }`}
              >
                {step}
              </span>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px w-6 sm:w-10 ${
                    isCompleted ? "bg-brand-green" : "bg-slate-200"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
