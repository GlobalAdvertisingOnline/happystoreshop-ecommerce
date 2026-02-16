"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/support@happystoreshop.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success === "true" || json.success === true || res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-brand-green/20 bg-brand-green/5 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-brand-green" />
        <h3 className="text-lg font-semibold text-slate-900">Message Sent!</h3>
        <p className="text-sm text-slate-600">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-brand-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot for spam protection */}
      <input type="text" name="_honey" className="hidden" />
      {/* Disable captcha page redirect */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New message from HappyStoreShop contact form" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="order"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Order Number <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            id="order"
            name="order_number"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="#12345"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Subject <span className="text-brand-red">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Order Issue">Order Issue</option>
            <option value="Shipping Question">Shipping Question</option>
            <option value="Refund Request">Refund Request</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          placeholder="How can we help you?"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-brand-red/20 bg-red-50 px-4 py-3 text-sm text-brand-red">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please try again or email us directly at support@happystoreshop.com.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-slate-500">
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}
