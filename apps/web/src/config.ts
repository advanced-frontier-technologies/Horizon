/**
 * PREVIEW operator config — local/demo defaults; fail-closed when OIDC unset.
 * No LIVE Stripe. Do not put secrets in this file or VITE_* vars committed here.
 */

export type StripeMode = "off" | "demo";

export interface PreviewConfig {
  oidcConfigured: boolean;
  stripeMode: StripeMode;
  demoLabel: string;
}

function readStripeMode(): StripeMode {
  const raw = (import.meta.env.VITE_STRIPE_MODE ?? "off").toLowerCase();
  if (raw === "demo") {
    return "demo";
  }
  // Anything else (including "live") is treated as off — no LIVE Stripe in PREVIEW.
  return "off";
}

export function getPreviewConfig(): PreviewConfig {
  const issuer = (import.meta.env.VITE_OIDC_ISSUER ?? "").trim();
  const clientId = (import.meta.env.VITE_OIDC_CLIENT_ID ?? "").trim();
  const oidcConfigured = issuer.length > 0 && clientId.length > 0;

  return {
    oidcConfigured,
    stripeMode: readStripeMode(),
    demoLabel: "local/demo",
  };
}
