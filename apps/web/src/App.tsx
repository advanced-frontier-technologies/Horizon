import { useState } from "react";
import { ChatbotPreview } from "./surfaces/ChatbotPreview";
import { ContainmentPreview } from "./surfaces/ContainmentPreview";
import { KidsPreview } from "./surfaces/KidsPreview";
import { PlatformNav } from "./surfaces/PlatformNav";
import type { PreviewSurface } from "./surfaces/PreviewBanner";

function renderSurface(surface: PreviewSurface) {
  switch (surface) {
    case "chatbot":
      return <ChatbotPreview />;
    case "containment":
      return <ContainmentPreview />;
    case "kids":
      return <KidsPreview />;
    default: {
      const _exhaustive: never = surface;
      return _exhaustive;
    }
  }
}

export function App() {
  const [surface, setSurface] = useState<PreviewSurface>("chatbot");

  return (
    <div className="app-shell">
      <PlatformNav active={surface} onSelect={setSurface} />
      <main className="app-main">{renderSurface(surface)}</main>
      <footer className="app-footer">
        <p>
          Horizon PREVIEW · Advanced Frontier Technologies / Advanced Universal
          Solutions, LLC · HOLD_EXTERNAL · HOLD_PRODUCTION · Not customer GA
        </p>
      </footer>
    </div>
  );
}
