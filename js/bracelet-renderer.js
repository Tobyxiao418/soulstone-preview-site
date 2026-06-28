// SoulStone — Realistic SVG Bracelet Renderer

function renderBracelet(containerEl, stoneIds, options = {}) {
  const {
    width = 340,
    height = 340,
    beadSize = 22,
    showLabels = false,
    animated = true,
    completed = false,
    productMode = false,
  } = options;

  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy) - beadSize - 14;
  const isProduct = productMode || completed;
  const braceletRx = isProduct ? radius * 0.76 : radius;
  const braceletRy = isProduct ? radius * 0.46 : radius;
  const count = stoneIds.length;

  if (isProduct && count > 0) {
    renderRealProductBracelet(containerEl, stoneIds, { width, height, beadSize, animated });
    return;
  }

  if (count === 0) {
    containerEl.innerHTML = `
      <svg class="soulstone-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <defs>
          <filter id="empty-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000" flood-opacity="0.35"/>
          </filter>
        </defs>
        <ellipse cx="${cx}" cy="${cy + 24}" rx="${radius * 0.88}" ry="${radius * 0.28}" fill="#000" opacity="0.18" filter="url(#empty-soft-shadow)"/>
        <circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#5a4b39" stroke-width="1.4" stroke-dasharray="5 7" opacity="0.95"/>
        <text x="${cx}" y="${cy - 10}" text-anchor="middle" fill="#dcc4a0" font-family="'Cormorant Garamond', serif" font-size="18" font-style="italic">Your bracelet is empty</text>
        <text x="${cx}" y="${cy + 18}" text-anchor="middle" fill="#c9beb0" font-family="Inter, sans-serif" font-size="11" letter-spacing="0.08em">CHOOSE YOUR FIRST MATERIAL</text>
      </svg>`;
    return;
  }

  let svg = `<svg class="soulstone-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<defs>`;

  // Global material filters
  svg += `
    <filter id="bead-cast-shadow" x="-70%" y="-70%" width="240%" height="240%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000" flood-opacity="0.42"/>
      <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#fff" flood-opacity="0.12"/>
    </filter>
    <filter id="gemstone-noise" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="8" result="noise"/>
      <feColorMatrix in="noise" type="saturate" values="0" result="mono"/>
      <feComponentTransfer in="mono" result="softNoise">
        <feFuncA type="table" tableValues="0 0.18"/>
      </feComponentTransfer>
      <feBlend in="SourceGraphic" in2="softNoise" mode="overlay"/>
    </filter>
    <filter id="pearl-luster" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="12" result="pearlNoise"/>
      <feColorMatrix in="pearlNoise" type="matrix" values="0.8 0 0 0 0.95  0 0.75 0 0 0.86  0 0 0.9 0 0.72  0 0 0 0.16 0" result="luster"/>
      <feBlend in="SourceGraphic" in2="luster" mode="screen"/>
    </filter>
    <filter id="metal-polish" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="0.25"/>
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.35"/>
    </filter>
    <radialGradient id="silver-metal" cx="30%" cy="25%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="22%" stop-color="#ecebea"/>
      <stop offset="48%" stop-color="#a8a6a2"/>
      <stop offset="68%" stop-color="#f4f1ea"/>
      <stop offset="100%" stop-color="#696865"/>
    </radialGradient>
    <radialGradient id="cord-glow" cx="50%" cy="40%">
      <stop offset="0%" stop-color="#8d8172" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#3f372f" stop-opacity="0.2"/>
    </radialGradient>
  `;

  const uniqueStones = [...new Set(stoneIds)];
  uniqueStones.forEach(id => {
    const stone = getStoneById(id);
    if (!stone) return;
    const colors = parseGradientColors(stone.gradient);
    const beadImg = (typeof beadImagePath === 'function') ? beadImagePath(id) : '';
    svg += `
      <pattern id="photo-${id}" patternUnits="objectBoundingBox" width="1" height="1">
        <image href="${beadImg}" x="-0.08" y="-0.08" width="1.16" height="1.16" preserveAspectRatio="xMidYMid slice"/>
      </pattern>
      <radialGradient id="grad-${id}" cx="32%" cy="24%" r="78%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.78"/>
        <stop offset="12%" stop-color="${colors[0]}" stop-opacity="0.96"/>
        <stop offset="42%" stop-color="${colors[1]}"/>
        <stop offset="78%" stop-color="${colors[2]}"/>
        <stop offset="100%" stop-color="#17120f" stop-opacity="0.55"/>
      </radialGradient>
      <linearGradient id="vein-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
        <stop offset="45%" stop-color="#fff" stop-opacity="0.18"/>
        <stop offset="52%" stop-color="#2a211b" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>`;
  });
  svg += `</defs>`;

  // Surface + cord. Product mode must read as a wearable bracelet, not beads in a plate.
  if (isProduct) {
    svg += `<ellipse cx="${cx}" cy="${cy + braceletRy * 0.82}" rx="${braceletRx * 0.92}" ry="${braceletRy * 0.18}" fill="#000" opacity="0.30" filter="url(#bead-cast-shadow)"/>`;
    svg += `<ellipse cx="${cx}" cy="${cy}" rx="${braceletRx}" ry="${braceletRy}" fill="none" stroke="#d7c7ad" stroke-opacity="0.62" stroke-width="3.4"/>`;
    svg += `<ellipse cx="${cx}" cy="${cy}" rx="${braceletRx * 0.985}" ry="${braceletRy * 0.985}" fill="none" stroke="#fff4df" stroke-opacity="0.24" stroke-width="1.1"/>`;
    svg += `<ellipse cx="${cx}" cy="${cy}" rx="${braceletRx * 0.88}" ry="${braceletRy * 0.86}" fill="none" stroke="#5f5142" stroke-opacity="0.34" stroke-width="1.2" stroke-dasharray="5 8"/>`;
  } else {
    svg += `<ellipse cx="${cx}" cy="${cy + radius * 0.58}" rx="${radius * 0.92}" ry="${radius * 0.26}" fill="#000" opacity="0.24" filter="url(#bead-cast-shadow)"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${radius + beadSize * 0.92}" fill="none" stroke="#f4ead7" stroke-opacity="0.10" stroke-width="12"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${radius + beadSize * 0.55}" fill="none" stroke="#0f0c0a" stroke-opacity="0.26" stroke-width="1.4"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="url(#cord-glow)" stroke-width="3.2" opacity="0.62"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${radius + 1.2}" fill="none" stroke="#d8c7ad" stroke-width="0.65" opacity="0.22"/>`;
  }
  if (completed && !isProduct) {
    svg += `<circle cx="${cx}" cy="${cy}" r="${radius + beadSize * 0.72}" fill="none" stroke="#d9b985" stroke-opacity="0.46" stroke-width="1.1" stroke-dasharray="2 8"/>`;
  }
  if (completed || isProduct) {
    const claspY = cy + braceletRy + beadSize * 0.74;
    svg += `<g opacity="0.96" filter="url(#bead-cast-shadow)">
      <circle cx="${cx - beadSize * 0.62}" cy="${claspY}" r="${beadSize * 0.24}" fill="url(#silver-metal)"/>
      <circle cx="${cx + beadSize * 0.62}" cy="${claspY}" r="${beadSize * 0.24}" fill="url(#silver-metal)"/>
      <path d="M ${cx - beadSize * 0.38} ${claspY} C ${cx - beadSize * 0.12} ${claspY + beadSize * 0.18}, ${cx + beadSize * 0.12} ${claspY + beadSize * 0.18}, ${cx + beadSize * 0.38} ${claspY}" stroke="#f6f0e5" stroke-opacity="0.7" stroke-width="1.25" fill="none"/>
    </g>`;
  }

  stoneIds.forEach((id, i) => {
    const stone = getStoneById(id);
    if (!stone) return;

    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    const x = cx + braceletRx * Math.cos(angle);
    const y = cy + braceletRy * Math.sin(angle);
    const isAccent = stone.isAccent;
    const pearl = stone.texture === 'baroque';
    const faceted = stone.texture === 'faceted';
    const irregular = stone.texture === 'irregular';
    const productScale = isProduct ? 1.55 : 1;
    const r = (isAccent ? beadSize * 0.54 : pearl ? beadSize * 0.92 : beadSize) * productScale;
    const imgHref = (typeof beadImagePath === 'function')
      ? (isProduct ? beadImagePath(id).replace('/beads/', '/beads-cut/').replace('.jpg', '.png') : beadImagePath(id))
      : '';
    const clipId = `bead-clip-${i}-${id}`;
    const delay = animated ? `style="animation: beadPop 0.42s cubic-bezier(.2,.9,.2,1.2) ${i * 0.035}s both"` : '';
    const filter = isAccent ? 'url(#metal-polish)' : pearl ? 'url(#pearl-luster)' : 'url(#gemstone-noise)';

    svg += `<g ${delay} class="bead-group" data-index="${i}" data-stone="${id}">`;
    svg += `<circle cx="${x}" cy="${y + r * 0.18}" r="${r * 0.86}" fill="#000" opacity="0.22"/>`;

    if (pearl) {
      svg += `<ellipse cx="${x}" cy="${y}" rx="${r * 1.04}" ry="${r * 0.88}" fill="url(#grad-${id})" filter="url(#bead-cast-shadow)" transform="rotate(${18 + i * 23} ${x} ${y})"/>`;
      svg += `<clipPath id="${clipId}"><ellipse cx="${x}" cy="${y}" rx="${r * 1.02}" ry="${r * 0.88}" transform="rotate(${18 + i * 23} ${x} ${y})"/></clipPath>`;
      svg += `<image href="${imgHref}" x="${x - r * 1.45}" y="${y - r * 1.45}" width="${r * 2.9}" height="${r * 2.9}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" style="clip-path: circle(49% at 50% 50%);" filter="url(#pearl-luster)"/>`;
      svg += `<ellipse cx="${x - r * 0.18}" cy="${y - r * 0.2}" rx="${r * 0.46}" ry="${r * 0.28}" fill="#fff7e6" opacity="0.30" transform="rotate(-25 ${x} ${y})"/>`;
      svg += `<path d="M ${x - r * .58} ${y + r * .08} C ${x - r * .18} ${y + r * .26}, ${x + r * .34} ${y + r * .22}, ${x + r * .62} ${y - r * .02}" stroke="#fff" stroke-opacity="0.18" stroke-width="1.2" fill="none"/>`;
    } else if (isAccent) {
      svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#silver-metal)" filter="url(#bead-cast-shadow)"/>`;
      svg += `<clipPath id="${clipId}"><circle cx="${x}" cy="${y}" r="${r * 0.94}"/></clipPath>`;
      svg += `<image href="${imgHref}" x="${x - r * 1.25}" y="${y - r * 1.25}" width="${r * 2.5}" height="${r * 2.5}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" style="clip-path: circle(49% at 50% 50%);" filter="url(#metal-polish)"/>`;
      svg += `<path d="M ${x-r*.55} ${y-r*.15} C ${x-r*.1} ${y-r*.45}, ${x+r*.3} ${y-r*.35}, ${x+r*.58} ${y-r*.08}" stroke="#fff" stroke-opacity="0.45" stroke-width="1.1" fill="none"/>`;
      svg += `<circle cx="${x}" cy="${y}" r="${r * 0.35}" fill="none" stroke="#5b5852" stroke-opacity="0.38" stroke-width="1"/>`;
    } else {
      svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#grad-${id})" filter="url(#bead-cast-shadow)"/>`;
      svg += `<clipPath id="${clipId}"><circle cx="${x}" cy="${y}" r="${r * 0.98}"/></clipPath>`;
      svg += `<image href="${imgHref}" x="${x - r * 1.35}" y="${y - r * 1.35}" width="${r * 2.7}" height="${r * 2.7}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" style="clip-path: circle(49% at 50% 50%);"/>`;
      svg += `<circle cx="${x}" cy="${y}" r="${r * 0.96}" fill="url(#grad-${id})" opacity="0.08" filter="url(#gemstone-noise)"/>`;
      svg += `<circle cx="${x}" cy="${y}" r="${r * 0.93}" fill="url(#vein-${id})" opacity="${irregular ? 0.28 : 0.18}"/>`;
      svg += `<circle cx="${x}" cy="${y}" r="${r * 0.82}" fill="none" stroke="#fff" stroke-opacity="0.10" stroke-width="1.1"/>`;
      if (faceted) {
        svg += `<path d="M ${x} ${y-r*.9} L ${x+r*.62} ${y-r*.18} L ${x+r*.38} ${y+r*.72} L ${x-r*.42} ${y+r*.72} L ${x-r*.64} ${y-r*.18} Z" fill="none" stroke="#fff" stroke-opacity="0.22" stroke-width="0.9"/>`;
        svg += `<path d="M ${x-r*.64} ${y-r*.18} L ${x+r*.62} ${y-r*.18} M ${x} ${y-r*.9} L ${x} ${y+r*.72}" stroke="#211b17" stroke-opacity="0.12" stroke-width="0.8"/>`;
      }
      if (irregular) {
        svg += `<path d="M ${x-r*.52} ${y+r*.1} C ${x-r*.22} ${y-r*.18}, ${x+r*.16} ${y+r*.28}, ${x+r*.5} ${y-r*.08}" stroke="#fff" stroke-opacity="0.16" stroke-width="1.4" fill="none"/>`;
        svg += `<circle cx="${x + r * 0.22}" cy="${y + r * 0.16}" r="${r * 0.075}" fill="#1a1410" opacity="0.16"/>`;
        svg += `<circle cx="${x - r * 0.28}" cy="${y - r * 0.02}" r="${r * 0.055}" fill="#fff" opacity="0.16"/>`;
      }
      svg += `<ellipse cx="${x - r * 0.27}" cy="${y - r * 0.32}" rx="${r * 0.34}" ry="${r * 0.19}" fill="#fff" opacity="0.34" transform="rotate(-28 ${x - r * 0.27} ${y - r * 0.32})"/>`;
      svg += `<ellipse cx="${x - r * 0.34}" cy="${y - r * 0.42}" rx="${r * 0.12}" ry="${r * 0.055}" fill="#fff" opacity="0.72" transform="rotate(-28 ${x} ${y})"/>`;
    }

    svg += `</g>`;
  });

  if (!isProduct) {
    svg += `
      <text x="${cx}" y="${cy - 8}" text-anchor="middle" fill="#d8bd90" font-family="'Cormorant Garamond', serif" font-size="13" font-weight="500" opacity="0.76">SoulStone</text>
      <text x="${cx}" y="${cy + 10}" text-anchor="middle" fill="#8d8276" font-family="'Inter', sans-serif" font-size="9" letter-spacing="0.1em" opacity="0.58">${count} BEADS</text>
    `;
  }

  svg += `</svg>`;

  if (animated && !document.getElementById('bead-anim-style')) {
    const style = document.createElement('style');
    style.id = 'bead-anim-style';
    style.textContent = `
      @keyframes beadPop {
        from { opacity: 0; transform: scale(0.58) translateY(8px); transform-origin: center; }
        to { opacity: 1; transform: scale(1) translateY(0); transform-origin: center; }
      }
      .soulstone-svg { overflow: visible; }
    `;
    document.head.appendChild(style);
  }

  containerEl.innerHTML = svg;
}

function renderRealProductBracelet(containerEl, stoneIds, options = {}) {
  const { width = 560, height = 370, beadSize = 22, animated = true } = options;
  const cx = width / 2;
  const cy = height * 0.50;
  const productScale = Math.max(0.94, Math.min(1.18, Math.min(width / 560, height / 370)));
  const count = Math.max(1, stoneIds.length);
  // P1.2: tighter threaded geometry. The old strand used a broad oval and
  // visually separated beads; this deliberately packs centers closer than the
  // nominal bead diameter so the finished state reads like a real elastic strand.
  const nominalR = beadSize * 1.46 * productScale;
  const strandCircumference = count * nominalR * 1.12;
  const rx = Math.min(width * 0.265, Math.max(width * 0.145, strandCircumference / 7.32));
  const ry = Math.min(height * 0.225, Math.max(height * 0.118, rx * 0.48));

  const beadCutPath = (id) => {
    if (typeof beadImagePath !== 'function') return '';
    return beadImagePath(id).replace('/beads/', '/beads-cut/').replace('.jpg', '.png');
  };

  const items = stoneIds.map((id, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    const stone = getStoneById(id) || getStoneById('aquamarine');
    const front = Math.sin(angle) > 0;
    const side = Math.abs(Math.cos(angle));
    const materialType = stone.type || (stone.isAccent ? 'hardware' : 'stone');
    const baseR = materialType === 'cord' ? beadSize * 0.42 : materialType === 'hardware' ? beadSize * 0.60 : stone.texture === 'chunk' ? beadSize * 1.24 : stone.texture === 'baroque' ? beadSize * 1.14 : beadSize * 1.22;
    const depthScale = front ? 1.20 : 0.98;
    const featureScale = (!stone.isAccent && (i % 5 === 0 || stone.texture === 'irregular')) ? 1.07 : 1;
    return {
      id,
      originalIndex: i,
      stone,
      angle,
      front,
      r: baseR * productScale * depthScale * featureScale,
      x: cx + rx * Math.cos(angle) + (((i * 17) % 3) - 1) * 0.18 * productScale,
      y: cy + ry * Math.sin(angle) + (front ? 2.4 : -1.1) * productScale + (((i * 11) % 3) - 1) * 0.12 * productScale,
      rotate: -16 + ((i * 31) % 39),
      opacity: front ? 1 : 0.86,
      side,
    };
  }).sort((a, b) => a.y - b.y);

  let svg = `<svg class="soulstone-svg soulstone-product-svg luxe-finished-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<defs>
    <filter id="finished-contact-shadow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
      <feOffset in="blur" dx="0" dy="8" result="offset"/>
      <feComponentTransfer in="offset"><feFuncA type="linear" slope="0.38"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="finished-bead-shadow" x="-80%" y="-80%" width="260%" height="260%">
      <feDropShadow dx="0" dy="5" stdDeviation="3.6" flood-color="#000" flood-opacity="0.42"/>
      <feDropShadow dx="-1" dy="-1" stdDeviation="0.7" flood-color="#fff" flood-opacity="0.08"/>
    </filter>
    <filter id="finished-linen-grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" seed="33" result="grain"/>
      <feColorMatrix in="grain" type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 0.10"/></feComponentTransfer>
      <feBlend in="SourceGraphic" mode="overlay"/>
    </filter>
    <radialGradient id="finished-vignette" cx="50%" cy="43%" r="72%">
      <stop offset="0%" stop-color="#efe4cf" stop-opacity="0.18"/>
      <stop offset="54%" stop-color="#3a3026" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0b0806" stop-opacity="0.40"/>
    </radialGradient>
    <radialGradient id="finished-silver" cx="30%" cy="24%">
      <stop offset="0%" stop-color="#fffdf7"/><stop offset="28%" stop-color="#e7e3da"/><stop offset="58%" stop-color="#a6a099"/><stop offset="100%" stop-color="#5e5b56"/>
    </radialGradient>`;
  [...new Set(items.map(item => item.id))].forEach(id => {
    const stone = getStoneById(id);
    if (!stone) return;
    const colors = parseGradientColors(stone.gradient);
    svg += `<radialGradient id="finished-grad-${id}" cx="31%" cy="25%" r="82%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.82"/>
      <stop offset="20%" stop-color="${colors[0]}" stop-opacity="0.98"/>
      <stop offset="52%" stop-color="${colors[1]}" stop-opacity="0.96"/>
      <stop offset="100%" stop-color="${colors[2]}" stop-opacity="1"/>
    </radialGradient>`;
  });
  svg += `</defs>`;

  // Product-photography surface: warm linen / stone slab, not a design plate.
  svg += `<rect x="0" y="0" width="${width}" height="${height}" rx="30" fill="#17110d"/>`;
  svg += `<rect x="18" y="16" width="${width - 36}" height="${height - 32}" rx="26" fill="#8f826d" opacity="0.30" filter="url(#finished-linen-grain)"/>`;
  svg += `<rect x="18" y="16" width="${width - 36}" height="${height - 32}" rx="26" fill="url(#finished-vignette)"/>`;
  svg += `<ellipse cx="${cx}" cy="${cy + ry * 0.96}" rx="${rx * 0.98}" ry="${Math.max(20, ry * 0.26)}" fill="#050302" opacity="0.36" filter="url(#finished-contact-shadow)"/>`;
  svg += `<path class="threaded-cord threaded-cord-shadow" d="M ${cx - rx * 0.96} ${cy + 4} C ${cx - rx * 0.48} ${cy - ry * 1.04}, ${cx + rx * 0.48} ${cy - ry * 1.04}, ${cx + rx * 0.96} ${cy + 4} C ${cx + rx * 0.56} ${cy + ry * 1.02}, ${cx - rx * 0.56} ${cy + ry * 1.02}, ${cx - rx * 0.96} ${cy + 4}" fill="none" stroke="#4b392a" stroke-width="6.2" stroke-linecap="round" stroke-opacity="0.18"/>`;
  svg += `<path class="threaded-cord" d="M ${cx - rx * 0.96} ${cy + 4} C ${cx - rx * 0.48} ${cy - ry * 1.04}, ${cx + rx * 0.48} ${cy - ry * 1.04}, ${cx + rx * 0.96} ${cy + 4} C ${cx + rx * 0.56} ${cy + ry * 1.02}, ${cx - rx * 0.56} ${cy + ry * 1.02}, ${cx - rx * 0.96} ${cy + 4}" fill="none" stroke="#efe6d6" stroke-width="3.1" stroke-linecap="round" stroke-opacity="0.36"/>`;

  items.forEach((item, i) => {
    const { id, x, y, r, stone, rotate, opacity, front, originalIndex, angle } = item;
    const clipId = `finished-clip-${i}-${id}`;
    const img = beadCutPath(id);
    const delay = animated ? `style="animation: beadPop 0.42s cubic-bezier(.2,.9,.2,1.2) ${i * 0.016}s both"` : '';
    const pearl = stone.type === 'pearl' || stone.texture === 'baroque';
    const metal = stone.type === 'hardware' || (stone.isAccent && stone.type !== 'cord');
    const cord = stone.type === 'cord' || stone.texture === 'cord';
    const chunky = stone.texture === 'chunk' || stone.scale === 'hero';
    const irregular = stone.texture === 'irregular' || chunky;
    const tangent = angle + Math.PI / 2;
    const hx = Math.cos(tangent);
    const hy = Math.sin(tangent);
    const holeLength = r * (chunky ? 0.36 : pearl ? 0.42 : 0.48);
    const holeStroke = Math.max(0.8, r * 0.055);
    const threadCue = () => (cord || metal) ? '' : `
      <path d="M ${x - hx * holeLength} ${y - hy * holeLength} L ${x + hx * holeLength} ${y + hy * holeLength}" stroke="#21160f" stroke-opacity="${front ? 0.34 : 0.22}" stroke-width="${holeStroke}" stroke-linecap="round"/>
      <path d="M ${x - hx * holeLength * 0.84} ${y - hy * holeLength * 0.84} L ${x + hx * holeLength * 0.84} ${y + hy * holeLength * 0.84}" stroke="#f5ead6" stroke-opacity="${front ? 0.13 : 0.08}" stroke-width="${Math.max(0.45, holeStroke * 0.45)}" stroke-linecap="round"/>`;
    svg += `<g class="finished-product-bead draggable-product-bead" data-index="${originalIndex}" opacity="${opacity}" ${delay}>`;
    svg += `<ellipse cx="${x}" cy="${y + r * 0.42}" rx="${r * 0.82}" ry="${r * 0.34}" fill="#000" opacity="${front ? 0.28 : 0.18}"/>`;
    if (cord) {
      svg += `<g transform="rotate(${rotate} ${x} ${y})" filter="url(#finished-bead-shadow)">
        <path d="M ${x-r*1.28} ${y-r*.02} C ${x-r*.38} ${y-r*.20}, ${x+r*.38} ${y+r*.20}, ${x+r*1.28} ${y-r*.02}" stroke="url(#finished-grad-${id})" stroke-opacity="0.42" stroke-width="${Math.max(1.4, r*.18)}" stroke-linecap="round" fill="none"/>
        <ellipse cx="${x}" cy="${y}" rx="${r*.44}" ry="${r*.26}" fill="url(#finished-grad-${id})" opacity="0.52"/>
        <path d="M ${x-r*.34} ${y-r*.05} C ${x-r*.08} ${y-r*.16}, ${x+r*.16} ${y+r*.14}, ${x+r*.36} ${y-r*.02}" stroke="#fff" stroke-opacity="0.18" stroke-width="0.55" fill="none"/>
      </g>`;
    } else if (metal) {
      svg += `<g transform="rotate(${rotate} ${x} ${y})" filter="url(#finished-bead-shadow)">
        <ellipse cx="${x}" cy="${y}" rx="${r * 1.20}" ry="${r * 0.72}" fill="url(#finished-silver)"/>
        <clipPath id="${clipId}"><ellipse cx="${x}" cy="${y}" rx="${r * 1.12}" ry="${r * 0.66}"/></clipPath>
        <image href="${img}" x="${x - r * 1.45}" y="${y - r * 1.45}" width="${r * 2.9}" height="${r * 2.9}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" opacity="0.78"/>
        <path d="M ${x-r*.82} ${y-r*.16} C ${x-r*.20} ${y-r*.50}, ${x+r*.48} ${y-r*.44}, ${x+r*.88} ${y-r*.08}" stroke="#fff" stroke-opacity="0.42" stroke-width="0.95" fill="none"/>
      </g>`;
    } else if (pearl) {
      svg += `<ellipse cx="${x}" cy="${y}" rx="${r * 1.14}" ry="${r * 0.88}" fill="url(#finished-grad-${id})" filter="url(#finished-bead-shadow)" transform="rotate(${rotate} ${x} ${y})"/>`;
      svg += `<clipPath id="${clipId}"><ellipse cx="${x}" cy="${y}" rx="${r * 1.09}" ry="${r * 0.84}" transform="rotate(${rotate} ${x} ${y})"/></clipPath>`;
      svg += `<image href="${img}" x="${x - r * 1.48}" y="${y - r * 1.48}" width="${r * 2.96}" height="${r * 2.96}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" opacity="0.92"/>`;
      svg += `<ellipse cx="${x-r*.22}" cy="${y-r*.24}" rx="${r*.40}" ry="${r*.17}" fill="#fff8ec" opacity="0.31" transform="rotate(${rotate-22} ${x} ${y})"/>`;
      svg += threadCue();
    } else if (irregular) {
      const chunkPath = chunky
        ? `M ${x-r*.96} ${y-r*.20} L ${x-r*.50} ${y-r*.78} L ${x+r*.42} ${y-r*.66} L ${x+r*.90} ${y-r*.07} L ${x+r*.50} ${y+r*.70} L ${x-r*.38} ${y+r*.76} L ${x-r*.90} ${y+r*.30} Z`
        : `M ${x-r*.80} ${y-r*.34} C ${x-r*.42} ${y-r*.94}, ${x+r*.48} ${y-r*.82}, ${x+r*.82} ${y-r*.18} C ${x+r*.94} ${y+r*.44}, ${x+r*.18} ${y+r*.86}, ${x-r*.44} ${y+r*.72} C ${x-r*.98} ${y+r*.42}, ${x-r*1.02} ${y+r*.02}, ${x-r*.80} ${y-r*.34}`;
      svg += `<path d="${chunkPath}" fill="url(#finished-grad-${id})" filter="url(#finished-bead-shadow)" transform="rotate(${rotate} ${x} ${y})"/>`;
      svg += `<clipPath id="${clipId}"><path d="${chunkPath}" transform="rotate(${rotate} ${x} ${y})"/></clipPath>`;
      svg += `<image href="${img}" x="${x-r*1.45}" y="${y-r*1.45}" width="${r*2.9}" height="${r*2.9}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" opacity="0.94"/>`;
      svg += `<ellipse cx="${x-r*.25}" cy="${y-r*.36}" rx="${r*.32}" ry="${r*.13}" fill="#fff" opacity="0.22" transform="rotate(${rotate-25} ${x} ${y})"/>`;
      svg += threadCue();
    } else {
      svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#finished-grad-${id})" filter="url(#finished-bead-shadow)"/>`;
      svg += `<clipPath id="${clipId}"><circle cx="${x}" cy="${y}" r="${r * 0.96}"/></clipPath>`;
      svg += `<image href="${img}" x="${x-r*1.35}" y="${y-r*1.35}" width="${r*2.7}" height="${r*2.7}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" opacity="0.93"/>`;
      svg += `<ellipse cx="${x-r*.28}" cy="${y-r*.38}" rx="${r*.29}" ry="${r*.12}" fill="#fff" opacity="0.28" transform="rotate(-28 ${x} ${y})"/>`;
      svg += threadCue();
    }
    svg += `<circle cx="${x}" cy="${y}" r="${r * 0.92}" fill="none" stroke="#fff" stroke-opacity="0.10" stroke-width="0.8"/>`;
    svg += `</g>`;
  });

  // Fine jewelry clasp detail, deliberately small so the beads remain hero.
  const claspX = cx + rx * 0.99;
  const claspY = cy + ry * 0.12;
  svg += `<g filter="url(#finished-bead-shadow)" opacity="0.92">
    <path d="M ${claspX - 6} ${claspY - 8} C ${claspX + 10} ${claspY - 22}, ${claspX + 23} ${claspY - 2}, ${claspX + 8} ${claspY + 10}" stroke="#efe6d6" stroke-width="2.2" fill="none"/>
    <circle cx="${claspX - 9}" cy="${claspY - 5}" r="4" fill="url(#finished-silver)"/>
  </g>`;

  svg += `</svg>`;
  if (animated && !document.getElementById('bead-anim-style')) {
    const style = document.createElement('style');
    style.id = 'bead-anim-style';
    style.textContent = `@keyframes beadPop { from { opacity: 0; transform: scale(0.76) translateY(9px); transform-origin: center; } to { opacity: 1; transform: scale(1) translateY(0); transform-origin: center; } } .soulstone-svg { overflow: visible; }`;
    document.head.appendChild(style);
  }
  containerEl.innerHTML = svg;
}

function parseGradientColors(gradientStr) {
  const matches = gradientStr.match(/#[0-9a-fA-F]{6}/g) || [];
  while (matches.length < 3) matches.push(matches[matches.length - 1] || '#888888');
  return matches;
}

function renderBeadMini(stoneId) {
  const stone = getStoneById(stoneId);
  if (!stone) return '';
  const img = (typeof beadImagePath === 'function') ? beadImagePath(stoneId) : '';
  return `<span class="bead-mini realistic-mini bead-photo-mini material-${stone.type || 'stone'} shape-${stone.texture || stone.shape || 'natural'}" style="background: ${stone.gradient};"><img src="${img}" alt="" aria-hidden="true" loading="lazy" onerror="this.style.display='none'"></span>`;
}
