import { PreviewBanner } from "./PreviewBanner";

export function KidsPreview() {
  return (
    <section className="surface surface--kids" aria-labelledby="kids-title">
      <PreviewBanner surface="kids" />
      <header className="surface__header">
        <p className="surface__eyebrow">Horizon</p>
        <h1 id="kids-title" className="surface__title">
          Kids PREVIEW
        </h1>
        <p className="surface__lede">
          Coming soon. Horizon Kids remains on COPPA HOLD — no accounts for
          under-13 and no data collection from children in this scaffold.
        </p>
      </header>

      <div className="kids-soon">
        <p className="kids-soon__mark">Coming soon</p>
        <ul className="kids-soon__rules">
          <li>No under-13 accounts</li>
          <li>No date-of-birth collection for kids</li>
          <li>No child chat</li>
          <li>No kid tracking pixels</li>
        </ul>
      </div>

      <section
        className="paladin-learn"
        aria-labelledby="paladin-learn-title"
      >
        <h2 id="paladin-learn-title" className="paladin-learn__title">
          Paladin Learn
        </h2>
        <p className="paladin-learn__copy">
          Optional safe-AI learning copy for guardians and educators. This
          subsection does not create child accounts, collect child data, or open
          under-13 chat. COPPA HOLD still applies.
        </p>
        <ul className="paladin-learn__points">
          <li>Talk with kids about what AI can and cannot do.</li>
          <li>Keep personal details offline — never paste secrets into demos.</li>
          <li>Adult PREVIEW surfaces (Chatbot, Containment) stay separate from Kids.</li>
        </ul>
      </section>
    </section>
  );
}
