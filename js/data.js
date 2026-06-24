// SoulStone MVP — Stone & Preset Data

const BEAD_IMAGE_BASE = 'assets/beads';
const BEAD_IMAGE_EXT = 'jpg';
function beadImagePath(id) {
  return `${BEAD_IMAGE_BASE}/${id}.${BEAD_IMAGE_EXT}`;
}

const STONES = [
  {
    id: 'aquamarine',
    name: 'Aquamarine',
    color: '#7EC8D9',
    gradient: 'radial-gradient(circle at 32% 28%, #d8f4f2, #9fd7d8 34%, #6eb5bf 68%, #407f8a 100%)',
    price: 4.5,
    size: 8,
    intention: ['Calm', 'Clarity'],
    description: 'Translucent blue-green stone with ocean-like depth. Associated with tranquility and clear communication.',
    origin: 'Brazil',
    texture: 'irregular',
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    color: '#E8B4C8',
    gradient: 'radial-gradient(circle at 32% 28%, #ffe7ee, #eab8c9 42%, #c989a2 78%, #9f657d 100%)',
    price: 3.5,
    size: 8,
    intention: ['Love'],
    description: 'Soft pink stone with gentle translucent warmth. Symbol of compassion and self-care.',
    origin: 'Madagascar',
    texture: 'smooth',
  },
  {
    id: 'citrine',
    name: 'Citrine',
    color: '#E8C84A',
    gradient: 'radial-gradient(circle at 35% 35%, #f5e08a, #E8C84A 40%, #c9a62e 80%)',
    price: 5.0,
    size: 8,
    intention: ['Abundance', 'Clarity'],
    description: 'Warm golden-yellow stone with lemon accents. Traditionally linked to confidence and personal power.',
    origin: 'Brazil',
    texture: 'faceted',
  },
  {
    id: 'moonstone',
    name: 'Moonstone',
    color: '#D4D8E8',
    gradient: 'radial-gradient(circle at 30% 26%, #fbfbff, #dce3ee 36%, #b8c2d2 68%, #8c96aa 100%)',
    price: 5.5,
    size: 8,
    intention: ['Love', 'Calm'],
    description: 'Pearlescent stone with an ethereal blue-white sheen. Represents intuition and inner balance.',
    origin: 'Sri Lanka',
    texture: 'smooth',
  },
  {
    id: 'smoky-quartz',
    name: 'Smoky Quartz',
    color: '#6B5E5A',
    gradient: 'radial-gradient(circle at 35% 35%, #9e908a, #6B5E5A 40%, #4a3f3c 80%)',
    price: 3.5,
    size: 8,
    intention: ['Protection'],
    description: 'Deep brown-gray translucent stone with grounding energy. Represents stability and resilience.',
    origin: 'Scotland',
    texture: 'irregular',
  },
  {
    id: 'obsidian',
    name: 'Black Obsidian',
    color: '#2A2A2E',
    gradient: 'radial-gradient(circle at 30% 26%, #54545a, #25262b 42%, #0d0d10 86%, #030304 100%)',
    price: 3.0,
    size: 8,
    intention: ['Protection'],
    description: 'Volcanic glass with mirror-like depth. Known as a stone of strength and clear boundaries.',
    origin: 'Mexico',
    texture: 'smooth',
  },
  {
    id: 'green-aventurine',
    name: 'Green Aventurine',
    color: '#6B9E6B',
    gradient: 'radial-gradient(circle at 35% 35%, #9ec89e, #6B9E6B 40%, #4d7a4d 80%)',
    price: 3.5,
    size: 8,
    intention: ['Abundance'],
    description: 'Lush green stone with subtle shimmer. Associated with opportunity and optimistic outlook.',
    origin: 'India',
    texture: 'irregular',
  },
  {
    id: 'clear-quartz',
    name: 'Clear Quartz',
    color: '#E8E8EE',
    gradient: 'radial-gradient(circle at 30% 30%, #ffffff, #E8E8EE 40%, #ccccdd 70%, #b8b8cc 90%)',
    price: 3.0,
    size: 8,
    intention: ['Clarity'],
    description: 'Transparent crystal with prismatic clarity. Called the "master amplifier" for its versatile symbolic presence.',
    origin: 'Arkansas, USA',
    texture: 'faceted',
  },
  {
    id: 'freshwater-pearl',
    name: 'Freshwater Pearl',
    color: '#F0E6D8',
    gradient: 'radial-gradient(circle at 30% 24%, #fffdf2, #f3ead8 35%, #dacbb7 62%, #bba994 100%)',
    price: 6.0,
    size: 7,
    intention: ['Love', 'Calm'],
    description: 'Organic baroque pearl with unique luster. Each one is naturally formed and one-of-a-kind.',
    origin: 'China',
    texture: 'baroque',
  },
  {
    id: 'lemon-quartz',
    name: 'Lemon Quartz',
    color: '#F0E060',
    gradient: 'radial-gradient(circle at 35% 35%, #f8f0a0, #F0E060 40%, #d4c440 80%)',
    price: 4.0,
    size: 8,
    intention: ['Abundance', 'Clarity'],
    description: 'Bright lemon-yellow stone with sunny transparency. Symbolizes optimism and mental sharpness.',
    origin: 'Brazil',
    texture: 'faceted',
  },
  {
    id: 'silver-bead',
    name: 'Sterling Silver Bead',
    color: '#C0C0C0',
    gradient: 'radial-gradient(circle at 30% 30%, #e8e8e8, #C0C0C0 40%, #909090 80%)',
    price: 2.5,
    size: 4,
    intention: [],
    description: 'Handcrafted .925 sterling silver accent bead. Adds refined structure between natural stones.',
    origin: 'Thailand',
    texture: 'polished',
    isAccent: true,
  },
];

const PRESETS = [
  {
    id: 'ocean-calm',
    name: 'Ocean Calm',
    intention: 'Calm',
    tagline: 'Breathe in stillness, wear the tide.',
    description: 'Aquamarine and blue-green irregular stones paired with freshwater pearls and sterling silver accents. Inspired by the quiet depth of coastal waters.',
    stones: ['aquamarine', 'aquamarine', 'freshwater-pearl', 'aquamarine', 'silver-bead', 'moonstone', 'aquamarine', 'freshwater-pearl', 'aquamarine', 'silver-bead', 'aquamarine', 'freshwater-pearl', 'aquamarine'],
    story: 'This bracelet carries the rhythm of the sea — each stone a moment of calm reclaimed from the noise. The pearls remind you that beauty forms slowly, in layers.',
    image: 'ocean-calm',
  },
  {
    id: 'golden-clarity',
    name: 'Golden Clarity',
    intention: 'Clarity',
    tagline: 'See clearly, shine boldly.',
    description: 'Citrine and lemon quartz with clear quartz amplifiers and silver detail. A composition of light and focus.',
    stones: ['citrine', 'lemon-quartz', 'clear-quartz', 'citrine', 'silver-bead', 'lemon-quartz', 'citrine', 'clear-quartz', 'lemon-quartz', 'silver-bead', 'citrine', 'clear-quartz', 'citrine'],
    story: 'Golden Clarity is designed for moments when the mind needs space. Each warm stone is a point of focus, each clear quartz a window to your clearest thinking.',
    image: 'golden-clarity',
  },
  {
    id: 'soft-love',
    name: 'Soft Love',
    intention: 'Love',
    tagline: 'Tenderness you can touch.',
    description: 'Rose quartz and moonstone with freshwater pearls. Gentle pinks and pearlescent whites in organic shapes.',
    stones: ['rose-quartz', 'moonstone', 'freshwater-pearl', 'rose-quartz', 'silver-bead', 'moonstone', 'rose-quartz', 'freshwater-pearl', 'moonstone', 'silver-bead', 'rose-quartz', 'freshwater-pearl', 'rose-quartz'],
    story: 'Soft Love is a quiet declaration — that you are worthy of the tenderness you give. Rose quartz and moonstone hold the frequency of compassion, and the pearls are nature\'s own love letters.',
    image: 'soft-love',
  },
  {
    id: 'grounded-protection',
    name: 'Grounded Protection',
    intention: 'Protection',
    tagline: 'Stand firm. Stay shielded.',
    description: 'Smoky quartz and black obsidian with sterling silver structure. Dark, grounding, powerful.',
    stones: ['smoky-quartz', 'obsidian', 'smoky-quartz', 'obsidian', 'silver-bead', 'smoky-quartz', 'obsidian', 'smoky-quartz', 'obsidian', 'silver-bead', 'smoky-quartz', 'obsidian', 'smoky-quartz'],
    story: 'Grounded Protection is your wearable boundary. Smoky quartz absorbs what doesn\'t serve you; obsidian reflects negativity back to its source. Silver holds the line.',
    image: 'grounded-protection',
  },
  {
    id: 'abundance-ritual',
    name: 'Abundance Ritual',
    intention: 'Abundance',
    tagline: 'Open the channel. Receive freely.',
    description: 'Green aventurine and citrine with pearl accents. Growth energy meets golden opportunity.',
    stones: ['green-aventurine', 'citrine', 'freshwater-pearl', 'green-aventurine', 'silver-bead', 'citrine', 'green-aventurine', 'freshwater-pearl', 'citrine', 'silver-bead', 'green-aventurine', 'citrine', 'green-aventurine'],
    story: 'Abundance Ritual combines the green of new growth with the gold of harvest. Pearl accents mark the moments of gratitude that keep the channel open.',
    image: 'abundance-ritual',
  },
];

const INTENTIONS = ['Love', 'Abundance', 'Calm', 'Protection', 'Clarity'];

const INTENTION_COLORS = {
  Love: '#E8B4C8',
  Abundance: '#6B9E6B',
  Calm: '#7EC8D9',
  Protection: '#6B5E5A',
  Clarity: '#E8C84A',
};

const WRIST_SIZES = [
  { label: 'S (15cm)', cm: 15, beadCount8mm: 12 },
  { label: 'M (17cm)', cm: 17, beadCount8mm: 14 },
  { label: 'L (19cm)', cm: 19, beadCount8mm: 15 },
  { label: 'XL (21cm)', cm: 21, beadCount8mm: 17 },
];

const BASE_PRICE = 12.00; // string + clasp

function getStoneById(id) {
  return STONES.find(s => s.id === id);
}

function calculatePrice(stoneIds) {
  let total = BASE_PRICE;
  stoneIds.forEach(id => {
    const stone = getStoneById(id);
    if (stone) total += stone.price;
  });
  return total;
}

function generateDesignId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'SS-';
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function generateStoryCard(stoneIds, intention) {
  const uniqueStones = [...new Set(stoneIds)].map(getStoneById).filter(Boolean).filter(s => !s.isAccent);
  const names = uniqueStones.map(s => s.name);
  const preset = PRESETS.find(p => p.intention === intention);

  if (preset) return preset.story;

  const templates = [
    `Your bracelet weaves together ${names.join(', ')} — each chosen to support your intention of ${intention.toLowerCase()}. Wear it as a quiet reminder of the energy you're cultivating.`,
    `${names.join(' and ')} come together in this design, each stone carrying its own character. Together they hold the space for ${intention.toLowerCase()} in your daily rhythm.`,
    `This is your personal composition of ${names.join(', ')}. No two stones are alike, just as no two days are alike. Let this piece anchor your intention of ${intention.toLowerCase()}.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateDesignPoetry(stoneIds, intention) {
  const uniqueStones = [...new Set(stoneIds)].map(getStoneById).filter(Boolean).filter(s => !s.isAccent);
  const preset = PRESETS.find(p => sameStoneSet(p.stones, stoneIds) || (p.intention === intention && p.stones.length === stoneIds.length));
  const intent = intention || 'Custom';
  const intentCopy = {
    Love: ['Soft Love Composition', 'A gentle piece for tenderness, self-kindness, and the quiet courage to receive love.'],
    Abundance: ['Abundance Ritual Composition', 'A green-and-gold reminder to stay open to growth, gratitude, and the opportunities already moving toward you.'],
    Calm: ['Ocean Calm Composition', 'A wearable pause — cool stones, pearl light, and a tide-like rhythm for days that ask you to breathe slower.'],
    Protection: ['Grounded Protection Composition', 'A darker, steadier piece for boundaries, resilience, and the feeling of standing firmly in your own energy.'],
    Clarity: ['Golden Clarity Composition', 'A bright, focused composition for clean decisions, renewed attention, and a little more light around the next step.'],
    Custom: ['Personal Energy Composition', 'A one-of-one arrangement of stones chosen by hand, made to carry your own private meaning.'],
  };
  const [title, body] = preset ? [preset.name, preset.story] : (intentCopy[intent] || intentCopy.Custom);
  const stoneLine = uniqueStones.slice(0, 4).map(s => s.name).join(' · ');
  return {
    title,
    subtitle: stoneLine ? `${stoneLine} · ${stoneIds.length} beads` : `${stoneIds.length} beads`,
    body,
    cta: 'Made to order with natural stones, freshwater pearl accents, a finished-piece preview, and a printed Energy Story Card for gifting or personal ritual.',
  };
}

function sameStoneSet(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((id, i) => id === b[i]);
}
