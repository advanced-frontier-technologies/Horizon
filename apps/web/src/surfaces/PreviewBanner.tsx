export type PreviewSurface = "chatbot" | "containment" | "kids";

const BANNERS: Record<PreviewSurface, string> = {
  chatbot:
    "PREVIEW · Development build · Not production · Not certified · Not customer GA · Features may change or stop without notice.",
  containment:
    "PREVIEW · Agentic containment demo · Not hosted ProofPacket · Not LIVE · Not Kids.",
  kids: "PREVIEW / Coming soon · Horizon Kids · COPPA HOLD · No accounts for under-13 · No data collection from children.",
};

interface PreviewBannerProps {
  surface: PreviewSurface;
}

export function PreviewBanner({ surface }: PreviewBannerProps) {
  return (
    <div className="preview-banner" role="status" aria-live="polite">
      <p className="preview-banner__text">{BANNERS[surface]}</p>
    </div>
  );
}
