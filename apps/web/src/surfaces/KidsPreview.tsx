import { PreviewBanner } from "./PreviewBanner";

/**
 * Kids PREVIEW / coming-soon — COPPA HOLD.
 * No under-13 accounts, DOB collection, or child signup.
 * Paladin Learn label only on safe-AI learning copy.
 */
export function KidsPreview() {
  return (
    <section id="kids" aria-labelledby="kids-heading">
      <PreviewBanner variant="kids" />
      <h1 id="kids-heading">Horizon Kids — Coming soon</h1>
      <p>
        Horizon-branded PREVIEW. <strong>COPPA HOLD</strong>: no accounts for under-13 and no data
        collection from children on this surface.
      </p>
      <aside aria-labelledby="paladin-learn-heading">
        <h2 id="paladin-learn-heading">Paladin Learn</h2>
        <p>
          Safe-AI learning copy placeholder only. Still no under-13 signup or collection.
        </p>
      </aside>
    </section>
  );
}
