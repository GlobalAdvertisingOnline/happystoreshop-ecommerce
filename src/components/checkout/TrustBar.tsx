import { Shield, Lock, RotateCcw } from "lucide-react";

export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl bg-slate-50 px-6 py-4">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Lock className="h-4 w-4 text-brand-green" />
        <span>SSL Encrypted</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Shield className="h-4 w-4 text-brand-green" />
        <span>Secure Payment</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <RotateCcw className="h-4 w-4 text-brand-green" />
        <span>30-Day Money Back</span>
      </div>
    </div>
  );
}
