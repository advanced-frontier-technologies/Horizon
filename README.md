# Horizon

**PREVIEW packaging · HOLD_EXTERNAL · HOLD_PRODUCTION · Not customer GA · Eng Proof + Release Gate + exact Trevor ship-yes still required**

Horizon is a development PREVIEW scaffold from Advanced Frontier Technologies / Advanced Universal Solutions, LLC. This public tree is a **thin platform shell** only — not a customer GA product, not certified, and not production-hosted.

## PREVIEW surfaces

| Surface | Route | Status |
|---|---|---|
| **Chatbot PREVIEW** | `/` · Chat | Development chat shell · local/demo defaults · fail-closed if OIDC unset · no LIVE Stripe |
| **Paladin Containment PREVIEW** | Containment | Agentic containment **demo** · not hosted ProofPacket · **≠ Kids** |
| **Kids PREVIEW** | Kids | Coming soon · **COPPA HOLD** · no under-13 accounts · no child data collection |

See [`docs/PREVIEW.md`](docs/PREVIEW.md), [`docs/COPPA_HOLD.md`](docs/COPPA_HOLD.md), and [`docs/CONTAINMENT_NE_KIDS.md`](docs/CONTAINMENT_NE_KIDS.md).

## What this is / is not

**Is:** draft PREVIEW packaging for review; claim-safe banners on every surface; distinct nav for Chatbot · Containment · Kids.

**Is not:** customer GA · production · LIVE payments · Eng Proof VERIFIED · hosted Containment ProofPacket · COPPA clearance · under-13 accounts · a dump of the private monorepo.

## Run the web PREVIEW locally

```bash
cd apps/web
npm install
npm run dev
```

Build check: `npm run build` from `apps/web`.

## Contributing / security

- [`CONTRIBUTING.md`](CONTRIBUTING.md) — draft PRs only; Paladin gates; no GA / ship claims.
- [`SECURITY.md`](SECURITY.md) — report-path only.

## Holds (do not flip in this tree)

`HOLD_EXTERNAL` · `HOLD_PRODUCTION` · `HOLD_SPEND` · Kids `COPPA HOLD` · no merge-as-GA · no LIVE Stripe · no secrets in this repo.
