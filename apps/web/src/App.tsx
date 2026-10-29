import { ChatbotPreview } from "./surfaces/ChatbotPreview";
import { ContainmentPreview } from "./surfaces/ContainmentPreview";
import { KidsPreview } from "./surfaces/KidsPreview";
import { PlatformNav } from "./surfaces/PlatformNav";
import { PreviewBanner } from "./surfaces/PreviewBanner";

/** Thin PREVIEW platform shell — three distinct surfaces. */
export default function App() {
  return (
    <main>
      <header>
        <p className="brand">Horizon</p>
        <PreviewBanner />
        <PlatformNav />
      </header>
      <ChatbotPreview />
      <ContainmentPreview />
      <KidsPreview />
    </main>
  );
}
