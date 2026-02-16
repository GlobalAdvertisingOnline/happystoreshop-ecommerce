"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart/CartContext";
import { ProgressIndicator } from "./ProgressIndicator";
import { ContactStep } from "./ContactStep";
import { ShippingStep } from "./ShippingStep";
import { PaymentStep } from "./PaymentStep";
import { ReviewStep } from "./ReviewStep";
import { OrderSummary } from "./OrderSummary";
import { TrustBar } from "./TrustBar";

interface ContactData {
  email: string;
  phone: string;
  marketingOptIn: boolean;
}

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

interface PaymentData {
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  billingName: string;
  billingSameAsShipping: boolean;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^\+?[\d\s()-]{7,}$/.test(phone);
}

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [subscriptionConsent, setSubscriptionConsent] = useState(false);

  const [contact, setContact] = useState<ContactData>({
    email: "",
    phone: "",
    marketingOptIn: false,
  });
  const [shipping, setShipping] = useState<ShippingData>({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  });
  const [payment, setPayment] = useState<PaymentData>({
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    billingName: "",
    billingSameAsShipping: true,
  });

  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [shippingErrors, setShippingErrors] = useState<Record<string, string>>({});
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});

  const hasSubscription = items.some((item) => item.type === "subscription");

  function validateContact(): boolean {
    const errs: Record<string, string> = {};
    if (!contact.email.trim()) errs.email = "Email is required.";
    else if (!validateEmail(contact.email)) errs.email = "Enter a valid email address.";
    if (!contact.phone.trim()) errs.phone = "Phone number is required.";
    else if (!validatePhone(contact.phone)) errs.phone = "Enter a valid phone number.";
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateShipping(): boolean {
    const errs: Record<string, string> = {};
    if (!shipping.firstName.trim()) errs.firstName = "First name is required.";
    if (!shipping.lastName.trim()) errs.lastName = "Last name is required.";
    if (!shipping.address1.trim()) errs.address1 = "Address is required.";
    if (!shipping.city.trim()) errs.city = "City is required.";
    if (!shipping.state) errs.state = "State is required.";
    if (!shipping.zip.trim()) errs.zip = "ZIP code is required.";
    else if (!/^\d{5}(-\d{4})?$/.test(shipping.zip.trim())) errs.zip = "Enter a valid ZIP code.";
    setShippingErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validatePayment(): boolean {
    const errs: Record<string, string> = {};
    if (!payment.billingName.trim()) errs.billingName = "Name on card is required.";
    const cardDigits = payment.cardNumber.replace(/\s/g, "");
    if (!cardDigits) errs.cardNumber = "Card number is required.";
    else if (cardDigits.length < 13 || cardDigits.length > 16) errs.cardNumber = "Enter a valid card number.";
    if (!payment.cardExpiry.trim()) errs.cardExpiry = "Expiry date is required.";
    else if (!/^\d{2}\/\d{2}$/.test(payment.cardExpiry)) errs.cardExpiry = "Use MM/YY format.";
    else {
      const [mm, yy] = payment.cardExpiry.split("/");
      const month = parseInt(mm, 10);
      if (month < 1 || month > 12) {
        errs.cardExpiry = "Enter a valid month (01-12).";
      } else {
        const now = new Date();
        const expYear = 2000 + parseInt(yy, 10);
        if (expYear < now.getFullYear() || (expYear === now.getFullYear() && month < now.getMonth() + 1)) {
          errs.cardExpiry = "This card has expired.";
        }
      }
    }
    if (!payment.cardCvv.trim()) errs.cardCvv = "CVV is required.";
    else if (payment.cardCvv.length < 3 || payment.cardCvv.length > 4) errs.cardCvv = "Enter a valid CVV (3-4 digits).";
    setPaymentErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleContactNext = () => {
    if (validateContact()) setStep(1);
  };

  const handleShippingNext = () => {
    if (validateShipping()) setStep(2);
  };

  const handlePaymentNext = () => {
    if (validatePayment()) setStep(3);
  };

  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    setOrderError(null);

    try {
      // Step 1: Import Click
      const clickRes = await fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageType: "checkoutPage" }),
      });
      const clickData = await clickRes.json();

      if (!clickRes.ok || !clickData.sessionId) {
        throw new Error("Unable to initialize checkout session.");
      }

      const sessionId = clickData.sessionId;

      // Step 2: Import Lead
      const leadRes = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          email: contact.email,
          phone: contact.phone,
          firstName: shipping.firstName,
          lastName: shipping.lastName,
          address1: shipping.address1,
          address2: shipping.address2,
          city: shipping.city,
          state: shipping.state,
          zip: shipping.zip,
          country: shipping.country,
        }),
      });

      if (!leadRes.ok) {
        throw new Error("Unable to submit shipping information.");
      }

      // Step 3: Import Order
      const cardDigits = payment.cardNumber.replace(/\s/g, "");
      const [expMonth, expYear] = payment.cardExpiry.split("/");
      const orderRes = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          cardNumber: cardDigits,
          cardExpiryDate: `${expMonth}${expYear}`,
          cvv: payment.cardCvv,
          products: items.map((item, i) => ({
            id: item.ccProductId,
            qty: item.quantity,
            price: item.price,
            index: i + 1,
          })),
        }),
      });
      const orderData = await orderRes.json();

      if (!orderRes.ok || orderData.result !== "SUCCESS") {
        throw new Error(
          orderData.message || "Payment declined. Please check your card details or try another card."
        );
      }

      // Step 4: Confirm
      await fetch("/api/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: orderData.orderId }),
      });

      clearCart();
      router.push(`/thank-you?orderId=${orderData.orderId}`);
    } catch (err) {
      setOrderError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call (844) 308-2059 for help."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardLast4 = payment.cardNumber.replace(/\s/g, "").slice(-4) || "****";
  const shippingAddress = [
    shipping.address1,
    shipping.address2,
    `${shipping.city}, ${shipping.state} ${shipping.zip}`,
  ]
    .filter(Boolean)
    .join(", ");

  // Guard: empty cart
  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="mb-4 text-lg text-slate-600">
          Your cart is empty. Add some items before checking out.
        </p>
        <a
          href="/shop"
          className="inline-block rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark"
        >
          Browse Products
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left: Form */}
      <div className="lg:col-span-2">
        <ProgressIndicator currentStep={step} />

        {step === 0 && (
          <ContactStep
            data={contact}
            onChange={setContact}
            errors={contactErrors}
            onNext={handleContactNext}
          />
        )}
        {step === 1 && (
          <ShippingStep
            data={shipping}
            onChange={setShipping}
            errors={shippingErrors}
            onNext={handleShippingNext}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <PaymentStep
            data={payment}
            onChange={setPayment}
            errors={paymentErrors}
            onNext={handlePaymentNext}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <ReviewStep
            contactEmail={contact.email}
            contactPhone={contact.phone}
            shippingName={`${shipping.firstName} ${shipping.lastName}`}
            shippingAddress={shippingAddress}
            cardLast4={cardLast4}
            items={items}
            subtotal={subtotal}
            hasSubscription={hasSubscription}
            subscriptionConsent={subscriptionConsent}
            onSubscriptionConsentChange={setSubscriptionConsent}
            onBack={() => setStep(2)}
            onPlaceOrder={handlePlaceOrder}
            isSubmitting={isSubmitting}
            error={orderError}
          />
        )}

        <div className="mt-8">
          <TrustBar />
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <OrderSummary items={items} subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
