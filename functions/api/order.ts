import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../lib/checkout-champ";
import { orderSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = orderSchema.parse(body);

    // Build product params (CC expects product1, product1Qty, product1Price, etc.)
    const productParams: Record<string, string> = {};
    for (const product of parsed.products) {
      const idx = product.index;
      productParams[`product${idx}_id`] = product.id;
      productParams[`product${idx}_qty`] = String(product.qty);
      productParams[`product${idx}_price`] = (product.price / 100).toFixed(2);
    }

    // SECURITY: Card data is validated but NEVER logged or stored.
    // It is forwarded directly to Checkout Champ and immediately discarded.
    const result = await callCheckoutChamp(context.env, "/order/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      sessionId: parsed.sessionId,
      creditCardNumber: parsed.cardNumber,
      expirationDate: parsed.cardExpiryDate,
      CVV: parsed.cvv,
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
      ...productParams,
    });

    if (result.result !== "SUCCESS") {
      return jsonResponse(
        {
          result: "ERROR",
          message:
            result.message ||
            "Payment declined. Please check your card details or try another card.",
        },
        422
      );
    }

    return jsonResponse({
      result: "SUCCESS",
      orderId: result.message,
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
