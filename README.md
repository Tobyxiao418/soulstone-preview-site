# SoulStone MVP

SoulStone is a bilingual custom crystal / pearl bracelet MVP: users choose an intention, design a bracelet, preview the finished piece, and move toward an order preview.

## Current focus

- AIUGC traffic source: TikTok / Instagram content drives discovery.
- Independent site conversion: SoulStone converts custom jewelry intent into a made-to-order bracelet.
- Visual priority: finished bracelet previews must feel like real ecommerce-grade product photography, not a design-board diagram.

## Local preview

```bash
cd ~/Desktop/SoulStone_MVP
python3 -m http.server 8765 --bind 127.0.0.1
```

Open:

- Home: <http://127.0.0.1:8765/index.html>
- Design Studio: <http://127.0.0.1:8765/design.html?preset=ocean-calm>
- Admin / Order Preview: <http://127.0.0.1:8765/admin.html>

## Key pages

- `index.html` — homepage and product/collection storytelling.
- `design.html` — bracelet configurator and finished preview.
- `quiz.html` — intention quiz.
- `stones.html` — stone library.
- `admin.html` — prototype order/admin preview.

## Important files

- `js/data.js` — stone, preset, wrist size, price, story data.
- `js/bracelet-renderer.js` — SVG bracelet renderer, including finished-product preview mode.
- `css/style.css` — visual system and ecommerce UI styling.
- `assets/beads/` — picker/card bead images.
- `assets/beads-cut/` — transparent bead cutouts for finished product rendering.
- `assets/generated/` — ecommerce/product-style hero and material images.

## Current quality gate

Before calling a change ready:

1. Open `design.html?preset=ocean-calm`.
2. Confirm the completed bracelet uses finished-product mode, not the design tray.
3. Click **Complete Design**.
4. Confirm the checkout preview looks like a purchasable finished bracelet.
5. Check mobile width.
6. Run:

```bash
node --check js/bracelet-renderer.js
```

## GitHub usage plan

GitHub should become the project control center:

- Issues = product backlog / bugs / visual QA tasks.
- Projects = roadmap board: Visual, Configurator, Conversion, Content/AIUGC, Deployment.
- Releases = packaged MVP versions with screenshots and SHA256.
- GitHub Pages / Vercel / Netlify = stable preview URL.
- README + screenshots = communicate product direction clearly to future collaborators or agents.
## Visibility / preview model

- Main repository: private while the product is still early.
- Public preview URL for team discussion: <https://tobyxiao418.github.io/soulstone-preview-site/>
- Public preview repository contains only the static site build, not the private roadmap/work-in-progress repository.
- Publish preview updates with `scripts/publish_public_preview.sh`.

