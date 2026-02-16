import { jsonResponse, errorResponse, type Env } from "../lib/checkout-champ";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    // Verify webhook secret
    const authHeader = context.request.headers.get("Authorization") || "";
    const expectedSecret = context.env.WEBHOOK_SECRET;

    if (!expectedSecret || authHeader !== `Bearer ${expectedSecret}`) {
      return errorResponse("Unauthorized", 401);
    }

    const body = await context.request.json();

    // Log webhook event (structured, no sensitive data)
    // In production, this could write to a KV namespace or D1 database
    // For now, we just acknowledge receipt
    return jsonResponse({
      result: "SUCCESS",
      message: "Webhook received",
      orderId: (body as Record<string, unknown>).orderId || null,
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
