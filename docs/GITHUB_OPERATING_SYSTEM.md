# GitHub Operating System for SoulStone

## Purpose

Use GitHub as the long-term control center for SoulStone: source control, public preview, roadmap, QA, issues, releases, and future collaborator/agent handoff.

## Recommended repository settings

- Visibility: Public while building marketing/product proof; switch to Private if proprietary assets become sensitive.
- Default branch: `main`.
- GitHub Pages: deploy from `main` branch, root directory.
- Issues: enabled.
- Discussions: optional later; not needed at MVP stage.
- Wiki: off; keep docs in `/docs` so they version with code.
- Projects: create one project board named `SoulStone Product OS`.

## Labels

Create these labels:

- `p0-critical` — page broken, preview broken, order flow broken.
- `visual` — product photography / ecommerce visual quality.
- `conversion` — checkout, CTA, trust, pricing, order-preview improvements.
- `aiugc` — TikTok/IG traffic and content-to-landing experiments.
- `design-studio` — bracelet configurator and finished preview.
- `content` — copywriting, story cards, stone meanings.
- `qa` — regression and browser/mobile checks.
- `deployment` — GitHub Pages / hosting / URL / release work.
- `good-first-agent-task` — safe scoped tasks for future agents.

## Project columns

- Inbox
- Ready
- Doing
- Review / QA
- Done

## Milestones

- `MVP Public Preview` — stable public URL, core pages visible, finished preview acceptable.
- `Conversion v1` — product detail/order preview feels purchasable.
- `AIUGC Landing v1` — landing states map to traffic hooks/presets.
- `Real Product Render v1` — per-design Image2/realistic hero render.

## Maintenance rhythm

Weekly:

1. Review open visual/conversion issues.
2. Pick 1–3 high-leverage tasks only.
3. Commit small changes with screenshots or QA notes.
4. Keep README and roadmap current.
5. Cut release notes when a visual milestone is reached.

## Agent workflow

Future Bruce/Codex work should follow:

1. Read `README.md`, `docs/ROADMAP.md`, `docs/VISUAL_QA.md`.
2. Create or select an issue.
3. Implement a focused change.
4. Run the quality gate.
5. Commit with a clear message.
6. Update the issue with evidence and preview URL.
