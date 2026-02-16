import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../../lib/checkout-champ";
import { membershipJoinSchema } from "../../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = membershipJoinSchema.parse(body);

    // Step 1: Import Click for membership
    const clickResult = await callCheckoutChamp(context.env, "/click/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      pageType: "checkoutPage",
      requestUri: "https://happystoreshop.com/membership",
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
    });

    if (clickResult.result !== "SUCCESS") {
      return errorResponse("Failed to initialize membership session", 502);
    }

    const sessionId = clickResult.message as string;

    // Step 2: Import Lead
    await callCheckoutChamp(context.env, "/lead/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      sessionId,
      emailAddress: parsed.email,
      phoneNumber: parsed.phone,
      firstName: parsed.firstName,
      lastName: parsed.lastName,
      address1: parsed.address1,
      address2: parsed.address2,
      city: parsed.city,
      state: parsed.state,
      postalCode: parsed.zip,
      country: parsed.country,
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
    });

    // Step 3: Import Order with membership subscription product
    // SECURITY: Card data forwarded directly, never logged or stored
    const orderResult = await callCheckoutChamp(context.env, "/order/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      sessionId,
      creditCardNumber: parsed.cardNumber,
      expirationDate: parsed.cardExpiryDate,
      CVV: parsed.cvv,
      product1_id: "membership", // Will be mapped to actual CC product ID
      product1_qty: "1",
      product1_price: "29.95",
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
    });

    if (orderResult.result !== "SUCCESS") {
      return jsonResponse(
        {
          result: "ERROR",
          message:
            orderResult.message ||
            "Payment declined. Please check your card details.",
        },
        422
      );
    }

    return jsonResponse({
      result: "SUCCESS",
      orderId: orderResult.message,
      customerId: orderResult.customerId || null,
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
