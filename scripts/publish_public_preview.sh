#!/usr/bin/env bash
set -euo pipefail
SRC="$(cd "$(dirname "$0")/.." && pwd)"
PREVIEW="${PREVIEW_DIR:-/Users/ligang/Desktop/SoulStone_Preview_Public}"
mkdir -p "$PREVIEW"
python3 - <<'PY'
from pathlib import Path
import shutil, os
src=Path('/Users/ligang/Desktop/SoulStone_MVP')
dst=Path(os.environ.get('PREVIEW_DIR','/Users/ligang/Desktop/SoulStone_Preview_Public'))
keep_git=dst/'.git'
if not keep_git.exists():
    raise SystemExit(f'Preview repo not found: {dst}')
for item in list(dst.iterdir()):
    if item.name in {'.git', '.github'}:
        continue
    if item.is_dir(): shutil.rmtree(item)
    else: item.unlink()
include_files=['index.html','design.html','stones.html','quiz.html','ritual.html','trust.html','admin.html','package.json','vercel.json','netlify.toml','wrangler.toml']
include_dirs=['assets','css','js']
for f in include_files:
    p=src/f
    if p.exists(): shutil.copy2(p,dst/f)
for d in include_dirs:
    p=src/d
    if p.exists():
        shutil.copytree(p,dst/d, ignore=shutil.ignore_patterns('*.bak*','*.tmp','*.log'))
(dst/'README.md').write_text('# SoulStone Public Preview\n\nStatic preview build for team discussion. Main project repo is private.\n', encoding='utf-8')
(dst/'.nojekyll').write_text('', encoding='utf-8')
PY
cd "$PREVIEW"
git add -A
if git diff --cached --quiet; then
  echo "No preview changes to publish."
else
  git commit -m "Publish SoulStone public preview update"
  git push
fi
