import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../lib/checkout-champ";
import { confirmSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = confirmSchema.parse(body);

    const result = await callCheckoutChamp(context.env, "/order/confirm/", {
      orderId: parsed.orderId,
    });

    if (result.result !== "SUCCESS") {
      return errorResponse(result.message || "Failed to confirm order", 502);
    }

    return jsonResponse({
      result: "SUCCESS",
      message: "Order confirmed",
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
