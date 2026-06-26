// SoulStone — Lightweight bilingual i18n (EN / 中文)

const SOULSTONE_LANG_KEY = 'soulstone_lang';
const SUPPORTED_LANGS = ['en', 'zh'];

const I18N = {
  en: {
    nav_home: 'Home', nav_products: 'Shop', nav_design: 'Design Studio', nav_quiz: 'Quiz', nav_stones: 'Stones', nav_policies: 'Policies', nav_trust: 'Trust', nav_admin: 'Admin',
    logo_tagline: 'Design Your Energy', lang_toggle: '中文',
    footer_disclaimer: 'For symbolic and personal inspiration only. Natural stones vary in color and texture.<br>SoulStone does not claim any medical, therapeutic, or financial benefits.',
    footer_tagline: 'Design Your Energy — Handcrafted crystal & pearl bracelets', footer_proto: 'MVP Prototype · Not for production use',

    home_eyebrow: 'Handcrafted Crystal & Pearl Bracelets', home_h1: 'Design Your <span class="text-accent">Energy</span>', home_subtitle: 'Design your intention. Wear your ritual.',
    home_body: 'Each bracelet is composed of natural crystals, freshwater pearls, and sterling silver details — chosen by you, assembled by hand. No two are alike.',
    home_cta_design: 'Open Design Studio', home_cta_quiz: 'Find Your Energy', home_seek: 'What energy are you seeking?',
    home_process: 'The Process', home_steps_title: 'Three Steps to Your Bracelet',
    home_step1_title: 'Set Your Intention', home_step1_body: 'Love, Abundance, Calm, Protection, or Clarity — begin with the energy you want to carry.',
    home_step2_title: 'Choose Your Materials', home_step2_body: 'Select chunky stones, baroque pearls, silver charms, cords and knots. Watch your material system become a bracelet.',
    home_step3_title: 'Receive Your Story', home_step3_body: 'Every bracelet ships with a handwritten Energy Story Card — your intention, your stones, your personal ritual.',
    home_curated: 'Curated Designs', home_collections: 'Signature Collections', home_collections_sub: 'Start with a curated design, or build entirely your own.',
    home_materials_eyebrow: 'Real Materials', home_materials_title: 'Choose the whole material system — chunky stones, pearls, charms, cords.', home_materials_body: 'Build from irregular crystal cuts, baroque pearls, silver hardware, cord colors and knot finishes — not just bead colors.', home_materials_macro: 'DIY material library', home_materials_library: 'Four-style product system',
    home_gifting: 'Meaningful Gifting', home_gift_title: 'A Gift That <span class="text-accent">Holds Meaning</span>', home_gift_sub: 'More than jewelry — a wearable intention designed for someone you love.',
    home_gift_body: "Choose stones that match their energy. We'll include a handwritten Energy Story Card explaining the meaning behind each stone — making it personal, thoughtful, and one-of-a-kind.",
    home_gift_cta: 'Design a Gift',

    design_beads: 'Materials', design_wrist: 'Wrist', design_bead_size: 'Scale', design_price_note: 'USD · incl. string & clasp',
    design_intention: 'Intention', design_wrist_size: 'Wrist Size', design_presets: 'Quick Start — Presets', design_add: 'Choose Materials',
    design_undo: 'Undo', design_clear: 'Clear All', design_composition: 'Current Composition', design_story_label: 'Energy Story Card', design_story_title: 'Your Story',
    design_story_empty: 'Choose your intention and stones to generate your personal Energy Story Card.', design_complete: 'Complete Design', design_proto: 'Prototype — no payment processed', design_material_caption: 'Live material reference · chunky stone / pearl / charm / cord',
    design_order: 'Order Summary', design_view_admin: 'View in Admin', design_close: 'Close', design_bom: 'Bill of Materials', design_story_card: 'Energy Story Card', design_total: 'Total', design_string: 'String & Clasp',

    quiz_eyebrow: 'Intention Quiz', quiz_title: 'Find Your Energy', quiz_sub: 'Answer three quick questions to discover the intention your bracelet can carry.', quiz_start: 'Start Quiz', quiz_result: 'Your suggested intention', quiz_design: 'Design with this intention', quiz_reset: 'Retake Quiz',
    stones_eyebrow: 'Materials', stones_title: 'Stone Library', stones_sub: 'Explore the natural stones and pearl accents used in SoulStone designs.', stones_all: 'All Stones',
    admin_eyebrow: 'Internal Preview', admin_title: 'Order Preview', admin_details: 'Design Details', admin_bom: 'Bill of Materials', admin_story: 'Story Card Text', admin_preview: 'Bracelet Preview', admin_sequence: 'Bead Sequence', admin_shopify: 'Simulated Shopify Draft Order', admin_back: 'Back to Design Studio', admin_copy: 'Copy JSON Payload', admin_empty: 'Complete a design to generate an order preview.', admin_proto: 'Prototype mode — no live Shopify connection'
  },
  zh: {
    nav_home: '首页', nav_products: '首发产品', nav_design: '设计工作室', nav_quiz: '能量测试', nav_stones: '宝石库', nav_policies: '政策草案', nav_trust: '信任说明', nav_admin: '订单预览',
    logo_tagline: '设计你的能量', lang_toggle: 'EN',
    footer_disclaimer: '仅用于象征意义与个人灵感。天然石材的颜色和纹理会自然变化。<br>SoulStone 不宣称任何医疗、治疗或财务收益。',
    footer_tagline: '设计你的能量 — 手作水晶与珍珠手链', footer_proto: 'MVP 原型 · 非正式生产版本',

    home_eyebrow: '手作水晶与珍珠手链', home_h1: '设计你的<span class="text-accent">能量</span>', home_subtitle: '选择你的意图，佩戴你的仪式感。',
    home_body: '每一条手链都由天然水晶、淡水珍珠和 925 银色细节组成——由你选择，由手工完成。每一条都不完全相同。',
    home_cta_design: '打开设计工作室', home_cta_quiz: '找到你的能量', home_seek: '你正在寻找哪种能量？',
    home_process: '定制流程', home_steps_title: '三步完成你的手链',
    home_step1_title: '设定你的意图', home_step1_body: '爱、丰盛、平静、守护或清晰——先选择你想随身携带的能量。',
    home_step2_title: '选择你的材料系统', home_step2_body: '选择大颗异形石、巴洛克珍珠、银色吊坠、绳子和打结方式，看着你的组合逐步成形。',
    home_step3_title: '获得你的故事卡', home_step3_body: '每条手链都会配一张 Energy Story Card，记录你的意图、宝石和个人仪式感。',
    home_curated: '精选设计', home_collections: '标志系列', home_collections_sub: '从精选设计开始，或完全自由搭配。',
    home_materials_eyebrow: '真实材质', home_materials_title: '选择完整材质系统：异形石、珍珠、银件、绳结。', home_materials_body: '不只是换颜色，而是选择大颗异形石、巴洛克珍珠、银色配件、绳子颜色和打结方式。', home_materials_macro: 'DIY 材料台', home_materials_library: '四种产品结构',
    home_gifting: '有意义的礼物', home_gift_title: '一份<span class="text-accent">有含义</span>的礼物', home_gift_sub: '不只是首饰，而是一份为重要的人设计的可佩戴心意。',
    home_gift_body: '选择与对方能量相配的宝石。我们会附上一张手写感 Energy Story Card，解释每颗宝石背后的含义，让礼物更个人、更用心、更独一无二。',
    home_gift_cta: '设计一份礼物',

    design_beads: '材料', design_wrist: '手围', design_bead_size: '尺寸', design_price_note: '美元 · 含绳线与扣件',
    design_intention: '意图', design_wrist_size: '手围尺寸', design_presets: '快速开始 — 预设', design_add: '选择材料',
    design_undo: '撤销', design_clear: '清空', design_composition: '当前组合', design_story_label: '能量故事卡', design_story_title: '你的故事',
    design_story_empty: '选择你的意图和材料，生成你的个人 Energy Story Card。', design_complete: '完成设计', design_proto: '原型 — 不会产生真实付款', design_material_caption: '实时材质参考 · 异形石 / 珍珠 / 吊坠 / 绳结',
    design_order: '订单摘要', design_view_admin: '查看订单预览', design_close: '关闭', design_bom: '材料清单', design_story_card: '能量故事卡', design_total: '合计', design_string: '绳线与扣件',

    quiz_eyebrow: '能量测试', quiz_title: '找到你的能量', quiz_sub: '回答三个简单问题，看看你的手链可以承载哪一种意图。', quiz_start: '开始测试', quiz_result: '推荐给你的意图', quiz_design: '用这个意图开始设计', quiz_reset: '重新测试',
    stones_eyebrow: '材质', stones_title: '宝石库', stones_sub: '探索 SoulStone 设计中使用的天然宝石与珍珠点缀。', stones_all: '全部宝石',
    admin_eyebrow: '内部预览', admin_title: '订单预览', admin_details: '设计详情', admin_bom: '材料清单', admin_story: '故事卡文案', admin_preview: '手链预览', admin_sequence: '珠子顺序', admin_shopify: '模拟 Shopify 草稿订单', admin_back: '返回设计工作室', admin_copy: '复制 JSON Payload', admin_empty: '完成一个设计后，会在这里生成订单预览。', admin_proto: '原型模式 — 未连接真实 Shopify'
  }
};

function getLang() {
  const stored = localStorage.getItem(SOULSTONE_LANG_KEY);
  if (SUPPORTED_LANGS.includes(stored)) return stored;
  const browserLang = (navigator.language || '').toLowerCase();
  return browserLang.startsWith('zh') ? 'zh' : 'en';
}

function setLang(lang) {
  const next = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
  localStorage.setItem(SOULSTONE_LANG_KEY, next);
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  applyI18n();
  document.dispatchEvent(new CustomEvent('soulstone:langchange', { detail: { lang: next } }));
}

function toggleLang() {
  setLang(getLang() === 'en' ? 'zh' : 'en');
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function applyI18n(root = document) {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  root.querySelectorAll('[data-i18n-text]').forEach(el => {
    const key = el.getAttribute('data-i18n-text');
    el.textContent = t(key);
  });
  const toggle = document.querySelector('[data-lang-toggle]');
  if (toggle) toggle.textContent = t('lang_toggle');
}

function localizeIntent(intent) {
  if (getLang() !== 'zh') return intent;
  return ({ Love: '爱', Abundance: '丰盛', Calm: '平静', Protection: '守护', Clarity: '清晰' })[intent] || intent;
}

function localizePresetName(name) {
  if (getLang() !== 'zh') return name;
  return ({
    'Ocean Calm': '海洋平静', 'Golden Clarity': '金色清晰', 'Soft Love': '柔软之爱', 'Grounded Protection': '稳固守护', 'Abundance Ritual': '丰盛仪式'
  })[name] || name;
}

function localizeStoneName(name) {
  if (getLang() !== 'zh') return name;
  return ({
    'Aquamarine': '海蓝宝', 'Rose Quartz': '粉晶', 'Citrine': '黄水晶', 'Moonstone': '月光石', 'Smoky Quartz': '茶晶', 'Black Obsidian': '黑曜石', 'Green Aventurine': '绿东陵', 'Clear Quartz': '白水晶', 'Freshwater Pearl': '淡水珍珠', 'Lemon Quartz': '柠檬晶', 'Sterling Silver Bead': '925 银珠', 'Lapis Lazuli Chunk': '青金石大颗异形石', 'Prehnite Nugget': '葡萄石异形石', 'Clear Quartz Chunk': '白水晶大颗原石', 'Large Baroque Pearl': '大颗巴洛克珍珠', 'Silver Moon Charm': '银色月亮吊坠', 'Silver Tube Spacer': '银管隔珠', 'Navy Silk Cord': '海军蓝丝绳', 'Sand Silk Cord': '沙色丝绳'
  })[name] || name;
}

function localizeWristLabel(label) {
  if (getLang() !== 'zh') return label;
  return label.replace('S ', 'S ').replace('M ', 'M ').replace('L ', 'L ').replace('XL ', 'XL ').replace('cm', 'cm');
}

document.addEventListener('DOMContentLoaded', () => applyI18n());
