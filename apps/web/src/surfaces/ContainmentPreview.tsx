import { PreviewBanner } from "./PreviewBanner";

/** Paladin Containment PREVIEW (ex-Playground) — demo labels only; ≠ Kids. */
export function ContainmentPreview() {
  return (
    <section id="containment" aria-labelledby="containment-heading">
      <PreviewBanner variant="containment" />
      <h1 id="containment-heading">Paladin Containment PREVIEW</h1>
      <p>
        Agentic containment demo shell. Allow / deny / hold / KILL shown as{" "}
        <strong>demo labels only</strong>. Not hosted ProofPacket · Not LIVE · Not Kids.
      </p>
      <ul aria-label="Demo gate labels">
        <li>ALLOW (demo)</li>
        <li>DENY (demo)</li>
        <li>HOLD (demo)</li>
        <li>KILL (demo)</li>
      </ul>
    </section>
  );
}
