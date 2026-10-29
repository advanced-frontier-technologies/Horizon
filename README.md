# Horizon — PREVIEW packaging

> **PREVIEW packaging · HOLD_EXTERNAL · HOLD_PRODUCTION · Not customer GA · Eng Proof + Release Gate + exact Trevor ship-yes still required**

Horizon by Advanced Frontier Technologies — a next-generation AI platform unifying intelligent agents, open-source models, enterprise workflows, and connected services through one adaptive, governed interface.

This public repository currently carries a **thin PREVIEW platform scaffold** only. It is a **development build**, not production, not certified, and not customer GA.

## Three PREVIEW surfaces (distinct)

| Surface | Route / folder | Status |
|---|---|---|
| **Chatbot PREVIEW** | `apps/web` → ChatbotPreview | Development shell · local/demo defaults |
| **Paladin Containment PREVIEW** | `apps/web` → ContainmentPreview | Agentic demo labels only · **not** hosted ProofPacket · **≠ Kids** |
| **Kids PREVIEW / coming soon** | `apps/web` → KidsPreview | Horizon-branded · **COPPA HOLD** · no under-13 accounts or collection |

**Containment ≠ Kids.** See [`docs/CONTAINMENT_NE_KIDS.md`](docs/CONTAINMENT_NE_KIDS.md).

## Claim ceiling (everywhere)

Persistent UI / README banner language:

`PREVIEW · Development build · Not production · Not certified · Not customer GA · Features may change or stop without notice.`

Locks:

- **HOLD_EXTERNAL** — not cleared for external customer GA claims
- **HOLD_PRODUCTION** — no production / LIVE / certified language
- **COPPA HOLD** on Kids — no under-13 accounts, DOB collection, or child signup
- Draft PR only — **no merge claiming GA**

See [`docs/PREVIEW.md`](docs/PREVIEW.md) and [`docs/COPPA_HOLD.md`](docs/COPPA_HOLD.md).

## Layout (intentionally small)

```
apps/web/          thin Vite/React PREVIEW shells
docs/              PREVIEW · COPPA HOLD · Containment ≠ Kids
services/          optional slim static only (no secrets)
.github/workflows/ minimal preview CI (Actions billing may still fail)
```

This is **not** a dump of the private monorepo. No secrets, no clinical trees, no LIVE Stripe, no under-13 collection.

## Contributing / security

- [`CONTRIBUTING.md`](CONTRIBUTING.md) — draft-PR workflow; no GA claims
- [`SECURITY.md`](SECURITY.md) — report path only

## License

**ASK** — no LICENSE file in this PREVIEW scaffold until counsel / founder chooses one.
