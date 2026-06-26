#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-soulstone-mvp}"
VISIBILITY="${2:-public}"

cd "$(dirname "$0")/.."

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not authenticated. Run: gh auth login --web --git-protocol https --scopes repo,workflow"
  exit 2
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Working tree has uncommitted changes. Commit or stash first."
  git status --short
  exit 3
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push
else
  git push -u origin main
fi

OWNER_REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"

# Enable Pages via Actions workflow. Ignore if already enabled.
gh api -X POST "repos/${OWNER_REPO}/pages" -f build_type=workflow >/dev/null 2>&1 || true

# Labels for long-term product management.
# Keep this Bash-3-compatible for the default macOS /bin/bash.
while IFS='|' read -r name color desc; do
  [[ -z "$name" ]] && continue
  gh label create "$name" --color "$color" --description "$desc" --force >/dev/null || true
done <<'LABELS'
P0|d73a4a|Critical / must fix first
P1|fb8500|High priority
visual|9b5de5|Visual quality / product photography
conversion|00b4d8|Conversion funnel / ecommerce
aiugc|2a9d8f|AIUGC traffic / content assets
design-studio|f15bb5|Bracelet configurator
deployment|577590|Preview / hosting / GitHub Pages
qa|f9c74f|Quality assurance
LABELS

# Milestones. Ignore duplicates.
for milestone in "MVP Public Preview" "Conversion v1" "AIUGC Landing v1" "Real Product Render v1"; do
  gh api -X POST "repos/${OWNER_REPO}/milestones" -f title="$milestone" >/dev/null 2>&1 || true
done

# Seed issues only when repo has no open issues.
OPEN_ISSUES="$(gh issue list --state open --limit 1 --json number -q 'length')"
if [[ "$OPEN_ISSUES" == "0" ]]; then
  gh issue create --title "MVP Public Preview QA" --label "P0,qa,deployment" --body "Verify GitHub Pages public preview, key pages, mobile layout, and design-studio finished preview." >/dev/null
  gh issue create --title "Design Studio visual upgrade backlog" --label "P1,visual,design-studio" --body "Track next product-photography-level improvements: bracelet scale, lighting, shadows, material realism, gift/try-on scene variants." >/dev/null
  gh issue create --title "AIUGC traffic landing plan" --label "P1,aiugc,conversion" --body "Plan TikTok/IG traffic path into SoulStone landing pages and quiz/design-studio conversion flow." >/dev/null
fi

# Tag the first public-preview snapshot if missing.
if ! git rev-parse v0.1.0-public-preview >/dev/null 2>&1; then
  git tag -a v0.1.0-public-preview -m "SoulStone MVP public preview baseline"
  git push origin v0.1.0-public-preview
fi

PAGE_URL="$(gh api "repos/${OWNER_REPO}/pages" -q .html_url 2>/dev/null || true)"
if [[ -z "$PAGE_URL" ]]; then
  OWNER="${OWNER_REPO%%/*}"
  REPO="${OWNER_REPO##*/}"
  PAGE_URL="https://${OWNER}.github.io/${REPO}/"
fi

echo "Repo: https://github.com/${OWNER_REPO}"
echo "Pages: ${PAGE_URL}"
echo "Note: first Pages deployment can take 1-3 minutes after the workflow run finishes."
