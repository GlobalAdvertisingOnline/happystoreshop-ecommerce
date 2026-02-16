import { callCheckoutChamp, jsonResponse, errorResponse, type Env } from "../../lib/checkout-champ";
import { membershipStatusSchema } from "../../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = membershipStatusSchema.parse(body);

    const result = await callCheckoutChamp(context.env, "/membership/query", {
      emailAddress: parsed.email,
    });

    if (result.result !== "SUCCESS") {
      return jsonResponse({
        result: "SUCCESS",
        status: "none",
        email: parsed.email,
      });
    }

    // Extract membership data from CC response
    const memberData = result.data as Record<string, unknown> | undefined;

    return jsonResponse({
      result: "SUCCESS",
      status: memberData?.status || "none",
      email: parsed.email,
      customerId: memberData?.customerId || null,
      joinedAt: memberData?.createdAt || null,
      nextBillingDate: memberData?.nextBillingDate || null,
    });
  } catch (err) {
    return errorResponse(
      err instanceof Error ? err.message : "Internal error",
      500
    );
  }
};
