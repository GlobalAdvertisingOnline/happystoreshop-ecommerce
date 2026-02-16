interface Env {
  CHECKOUT_CHAMP_LOGIN_ID: string;
  CHECKOUT_CHAMP_PASSWORD: string;
  CHECKOUT_CHAMP_CAMPAIGN_ID: string;
  WEBHOOK_SECRET: string;
}

const CC_API_BASE = "https://api.checkoutchamp.com";

interface CCResponse {
  result: string;
  message?: string;
  [key: string]: unknown;
}

export async function callCheckoutChamp(
  env: Env,
  endpoint: string,
  params: Record<string, string>
): Promise<CCResponse> {
  const normalizedEndpoint = endpoint.endsWith("/") ? endpoint : endpoint + "/";
  const url = new URL(normalizedEndpoint, CC_API_BASE);
  url.searchParams.set("loginId", env.CHECKOUT_CHAMP_LOGIN_ID);
  url.searchParams.set("password", env.CHECKOUT_CHAMP_PASSWORD);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`CC API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<CCResponse>;
}

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ result: "ERROR", message }, status);
}

export type { Env };
