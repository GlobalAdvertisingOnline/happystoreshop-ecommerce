import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../../lib/checkout-champ";
import { membershipCancelSchema } from "../../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = membershipCancelSchema.parse(body);

    const result = await callCheckoutChamp(context.env, "/membership/cancel", {
      customerId: parsed.customerId,
    });

    if (result.result !== "SUCCESS") {
      return errorResponse(
        result.message || "Unable to cancel membership. Please contact support at (844) 308-2059.",
        502
      );
    }

    return jsonResponse({
      result: "SUCCESS",
      message: "Membership cancelled successfully. Benefits remain active until the end of your billing period.",
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
