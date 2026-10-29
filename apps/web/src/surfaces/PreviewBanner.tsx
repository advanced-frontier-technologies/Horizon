/** Claim-safe PREVIEW strip — required on every surface. */
export function PreviewBanner({ variant = "default" }: { variant?: "default" | "containment" | "kids" }) {
  if (variant === "containment") {
    return (
      <aside role="status" className="preview-banner">
        PREVIEW · Agentic containment demo · Not hosted ProofPacket · Not LIVE · Not Kids.
      </aside>
    );
  }
  if (variant === "kids") {
    return (
      <aside role="status" className="preview-banner">
        PREVIEW / Coming soon · Horizon Kids · COPPA HOLD · No accounts for under-13 · No data
        collection from children.
      </aside>
    );
  }
  return (
    <aside role="status" className="preview-banner">
      PREVIEW · Development build · Not production · Not certified · Not customer GA · Features may
      change or stop without notice. · HOLD_EXTERNAL · HOLD_PRODUCTION
    </aside>
  );
}
