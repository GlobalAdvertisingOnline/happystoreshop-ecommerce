import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../lib/checkout-champ";
import { clickSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = clickSchema.parse(body);

    const result = await callCheckoutChamp(context.env, "/click/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      pageType: parsed.pageType,
      requestUri: context.request.headers.get("Referer") || "https://happystoreshop.com/checkout",
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
    });

    if (result.result !== "SUCCESS") {
      return errorResponse(result.message || "Failed to create session", 502);
    }

    return jsonResponse({
      sessionId: result.message,
      result: "SUCCESS",
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
