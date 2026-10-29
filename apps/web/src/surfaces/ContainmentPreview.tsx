import { useState } from "react";
import { PreviewBanner } from "./PreviewBanner";

type DemoVerdict = "allow" | "deny" | "hold" | "KILL";

const DEMO_ACTIONS: { id: string; label: string; verdict: DemoVerdict }[] = [
  { id: "read-public", label: "Read public docs", verdict: "allow" },
  { id: "write-staging", label: "Write staging fixture", verdict: "hold" },
  { id: "exfil-secret", label: "Exfiltrate secrets", verdict: "deny" },
  { id: "disable-safety", label: "Disable safety rail", verdict: "KILL" },
];

export function ContainmentPreview() {
  const [selected, setSelected] = useState<string>(DEMO_ACTIONS[0].id);
  const current =
    DEMO_ACTIONS.find((a) => a.id === selected) ?? DEMO_ACTIONS[0];

  return (
    <section
      className="surface surface--containment"
      aria-labelledby="containment-title"
    >
      <PreviewBanner surface="containment" />
      <header className="surface__header">
        <p className="surface__eyebrow">Paladin</p>
        <h1 id="containment-title" className="surface__title">
          Containment PREVIEW
        </h1>
        <p className="surface__lede">
          Agentic containment demo labels only. This is not Kids, not LIVE, and
          not a hosted ProofPacket.
        </p>
      </header>

      <p className="callout" role="note">
        Demo allow / deny / hold / KILL labels —{" "}
        <strong>no Eng Proof VERIFIED claims</strong>. Operator tooling and
        production gate keys are not shipped in this public scaffold.
      </p>

      <div className="containment-grid">
        <ul className="verdict-list" aria-label="Demo policy actions">
          {DEMO_ACTIONS.map((action) => {
            const isActive = action.id === selected;
            return (
              <li key={action.id}>
                <button
                  type="button"
                  className={
                    isActive
                      ? "verdict-item verdict-item--active"
                      : "verdict-item"
                  }
                  onClick={() => setSelected(action.id)}
                >
                  <span className="verdict-item__label">{action.label}</span>
                  <span
                    className={`verdict-tag verdict-tag--${action.verdict.toLowerCase()}`}
                  >
                    {action.verdict}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="verdict-detail" aria-live="polite">
          <h2 className="verdict-detail__title">Selected demo verdict</h2>
          <p className="verdict-detail__action">{current.label}</p>
          <p
            className={`verdict-tag verdict-tag--lg verdict-tag--${current.verdict.toLowerCase()}`}
          >
            {current.verdict}
          </p>
          <p className="verdict-detail__note">
            Scripted PREVIEW labels for packaging review. Do not treat as hosted
            hardening, tenant-isolation ProofPacket, or Eng Proof VERIFIED.
          </p>
        </div>
      </div>
    </section>
  );
}
