"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, X } from "lucide-react";

interface CancelModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

export function CancelModal({ onConfirm, onClose }: CancelModalProps) {
  const cancelBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[80] bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cancel membership confirmation"
        className="fixed left-1/2 top-1/2 z-[90] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="h-6 w-6 text-brand-red" />
        </div>

        <h3 className="text-lg font-bold text-slate-900">Cancel HappyStore+?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Are you sure? You&apos;ll lose these benefits:
        </p>
        <ul className="mt-3 flex flex-col gap-1.5 text-sm text-slate-600">
          <li>• Free shipping on every order</li>
          <li>• 15% discount on all products</li>
          <li>• Early access to sales and new arrivals</li>
        </ul>
        <p className="mt-3 text-sm text-slate-500">
          Your benefits will remain active until the end of your current billing period.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            ref={cancelBtnRef}
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
          >
            Keep Membership
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-700"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </>
  );
}
