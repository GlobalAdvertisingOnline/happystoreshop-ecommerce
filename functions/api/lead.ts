import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../lib/checkout-champ";
import { leadSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = leadSchema.parse(body);

    const result = await callCheckoutChamp(context.env, "/lead/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      sessionId: parsed.sessionId,
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

    if (result.result !== "SUCCESS") {
      return errorResponse(result.message || "Failed to submit lead", 502);
    }

    return jsonResponse({
      leadId: result.message,
      result: "SUCCESS",
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
