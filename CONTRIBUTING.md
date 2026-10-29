# Contributing

**PREVIEW packaging · HOLD_EXTERNAL · HOLD_PRODUCTION · Not customer GA**

Thank you for interest in Horizon. This public repository is a **thin PREVIEW scaffold**. Contributions must stay within the claim ceiling below.

## Draft PRs only

1. Open **draft** pull requests against `main`.
2. Do **not** merge claiming GA, production, LIVE, certified, or ship-yes.
3. Do **not** add secrets, `.env*` files, API keys, OIDC client secrets, or billing tokens.
4. Keep the public tree **small** — do not dump private monorepo services.

## Paladin / claim ceiling

- Public push and merge may require **Paladin** approval gates. Do not invent Eng Proof VERIFIED or Release Gate clear.
- Forbidden claims on surfaces, docs, PR titles, or comments: Released / GA / production / LIVE / certified / HIPAA / clinical / escape-proof / buy-now / specific live model SLAs.
- Prefer the banners in [`docs/PREVIEW.md`](docs/PREVIEW.md).

## Surfaces

| Surface | Rules |
|---|---|
| Chatbot PREVIEW | Local/demo defaults; fail-closed if OIDC unset; no LIVE Stripe; AI disclosure + 988 if composer present |
| Paladin Containment PREVIEW | Demo allow/deny/hold/KILL labels only; **≠ Kids**; not hosted ProofPacket |
| Kids PREVIEW | Coming soon · COPPA HOLD · no under-13 accounts · no DOB collection for kids · no child chat · no kid tracking pixels |

See [`docs/COPPA_HOLD.md`](docs/COPPA_HOLD.md) and [`docs/CONTAINMENT_NE_KIDS.md`](docs/CONTAINMENT_NE_KIDS.md).

## Local checks

```bash
cd apps/web && npm install && npm run build
```

CI (`.github/workflows/preview-ci.yml`) is minimal; Actions billing may still wall — do not invent green CI as Eng Proof.

## License / counsel

License choice is **ASK** until counsel/founder selects one. Do not claim open-source GA or production support SLAs.
