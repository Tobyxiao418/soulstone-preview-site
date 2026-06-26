# SoulStone Formal Launch Plan

Status: planning baseline after public preview.

## Current stage

SoulStone is currently a public-preview prototype: suitable for internal/team discussion and early visual/product-direction review. It is not yet a formal ecommerce launch.

## Launch gates

### P0 — must be solved before real launch

1. Brand direction
   - Decide whether SoulStone is primarily: luxury healing jewelry, AI-custom crystal bracelet, gift customization, TikTok impulse product, or zodiac/energy personalization.
   - Confirm tone: premium / mystical / modern wellness / giftable.

2. Real product boundary
   - Confirm available stones, bead sizes, accessories, packaging, production capacity, and lead time.
   - Define made-to-order rules and what is not supported.

3. Pricing and fulfillment
   - Material cost table.
   - Base bracelet price and premium bead surcharge.
   - Shipping cost and regions.
   - Refund/return/cancellation policy.

4. Conversion flow
   - Product/quiz/design CTA.
   - Checkout or order-intake form.
   - Payment route: Stripe, PayPal, Shopify, or manual invoice.
   - Order confirmation and internal order routing.

5. Trust and compliance
   - About, Contact, Shipping, Returns, Privacy, Terms.
   - Customer support email.
   - No medical claims in crystal/energy copy.

### P1 — visual and UX upgrade before traffic

1. Homepage
   - Stronger hero with one clear value proposition.
   - Real product-looking bracelet photography / render.
   - Collections by intention: Calm, Love, Protection, Abundance, Clarity.
   - Quiz and Design Studio as primary funnels.

2. Design Studio
   - Finished-product preview should feel like ecommerce jewelry photography.
   - Add real-time price and materials summary.
   - Add wrist-size guidance.
   - Add story card: "Your bracelet is designed for..."
   - Add share/save design.

3. Stone library
   - Improve each stone card: meaning, color, best-for, pairing, price impact.
   - Add search/filter by intention.

4. Mobile
   - Rework first screen and design controls for mobile-only users.
   - Ensure CTA remains visible and tap targets are large.

### P2 — traffic and automation

1. Tracking
   - GA4, Meta Pixel, TikTok Pixel.
   - Events: quiz_start, quiz_complete, design_start, design_complete, checkout_click, lead_submit.

2. AIUGC landing pages
   - Calm/anxiety landing page.
   - Love/gift landing page.
   - Protection/grounding landing page.
   - Abundance/clarity landing page.

3. Product-render automation
   - Explore design-to-product-image workflow for higher realism.
   - Keep current frontend renderer as fast preview; use Image2/product render for hero/order-confirmation imagery.

## Decisions needed from Tao Ge

1. Primary brand positioning.
2. Target buyer and traffic source priority.
3. Price range and fulfillment capacity.
4. Payment route.
5. Visual references for the next design upgrade.

## Current publish model

- Main working repository: private.
- Public preview repository: static preview only, for team discussion.
- Public preview URL: https://tobyxiao418.github.io/soulstone-preview-site/
- Publishing script from private repo: `scripts/publish_public_preview.sh`.
