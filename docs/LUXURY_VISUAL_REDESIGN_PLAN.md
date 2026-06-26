# SoulStone 高端视觉重设计方向

> 目标：把 SoulStone 从“灵性/手作/廉价水晶串珠”提升到“精品珠宝级的定制水晶/珍珠手链”。面向美国/欧洲主流用户，视觉应更接近 Mejuri、VRAI、Blue Nile、Missoma、gorjana 这类现代珠宝电商：克制、真实、材料可信、移动端强转化。

## 1. 竞品视觉模式提炼

本次快速查看了可访问的欧美珠宝电商页面，包括 Mejuri、VRAI、Blue Nile、Missoma、gorjana；部分品牌页面有 403/超时，但它们的行业共性仍可作为方向参考。

### 共性模式

1. **产品摄影优先，而不是符号/插画优先**
   - 首屏通常用大幅商品图、手部佩戴图、材质近景。
   - 画面留白多，背景干净，光线柔和，突出金属、宝石、珍珠的反射与质感。

2. **“Everyday fine jewelry” 语言**
   - 视觉不是玄学市集，而是日常可佩戴的高级饰品。
   - 文案重点是 handcrafted、natural material、modern、timeless、gift、easy returns、shipping，而不是过度神秘化。

3. **列表页与产品页重视统一色温**
   - 白/奶油/浅米背景用于大众高级感。
   - 深色背景可以用，但更适合少量 editorial 或夜间奢华氛围；若全站过暗，容易偏“神秘小众”而非“主流精品”。

4. **信任与转化信息非常显性**
   - Free shipping、easy returns、gift-ready、reviews、material details、size guide、secure checkout、customer care 通常靠近 CTA。
   - 高客单价商品必须降低用户疑虑：材质、尺寸、退换、礼盒、交付时间。

5. **个性化/定制交互强调“完成品”**
   - 用户不只是在选零件，而是在看到一件可购买、可送礼的成品。
   - 预览应像商品照片/珠宝 CAD 渲染，而不是像“珠子排列工具”。

---

## 2. 当前 SoulStone 已具备的基础

### 已有优势

- 已有本地生成图：hero、collection、gift box、macro、stone library、studio tray，尺寸足够大。
- 已有 `assets/beads-cut/*.png` 透明珠子素材，可用于更真实的 SVG/HTML 预览。
- `bracelet-renderer.js` 已支持 productMode / completed 模式，并尝试用照片纹理、阴影、金属/珍珠滤镜模拟材质。
- `design.html` 已有设计路径、推荐下一颗、完成预览、Story Card、价格与 BOM。
- `css/style.css` 已开始使用精品深色视觉系统、衬线标题、金色 accent、摄影卡片。

### 主要风险

- 全站深色 + 能量词汇较多，若不控制，会偏“神秘水晶疗愈”而非“主流精品珠宝”。
- 当前 configurator 的左侧画布仍可能被理解为“DIY 工具”，需要更像“珠宝定制 studio”。
- 首屏和设计页需要更强的材质证据：天然水晶的内含物、珍珠 nacre、银色配件、礼盒、佩戴比例。
- 定价较低时，视觉若过度奢华会有落差；需用“accessible boutique / made-to-order”定位，而不是硬奢。

---

## 3. 视觉基调建议

### 推荐关键词

- Boutique jewelry studio
- Modern ritual, not mystical cliché
- Natural stone realism
- Soft editorial light
- Gift-ready personalization
- Fine-jewelry inspired, accessible price

### 色彩

当前深色系统可保留，但建议加入更多 **warm ivory / champagne / stone beige** 面积：

- 背景：`#151210` 只用于 hero、studio、重点 editorial 区块。
- 主内容：增加 `#f5f0e8`、`#faf6f0`、`#e8e0d4` 的浅色卡片/区块。
- Accent：继续用香槟金 `#c8a87c`，避免高饱和金黄。
- 意图色降低饱和度，只作为小面积 chips，不要铺满背景。

### 字体与排版

- 保留 Cormorant Garamond 做品牌标题，Inter 做正文。
- 大标题更少词、更像精品广告：例如 “Designed by intention. Finished like jewelry.”
- 正文减少“能量承诺”，增加材料、工艺、佩戴与礼物场景。

---

## 4. 图片与摄影方向

### 首页首屏

应呈现为“精品珠宝商品摄影”，建议：

1. 左侧：一句强定位 + 2 个 CTA。
2. 右侧：一张大产品图，不要过多轮播文字。
3. 首屏信任条：`Natural stones`、`Freshwater pearls`、`Made to order`、`Gift-ready card`。

当前使用 carousel 可保留，但建议：

- 移动端只显示一张最强 hero 图，减少轮播造成的加载/视觉干扰。
- 首屏图优先使用 `soulstone_hero_ocean_calm.jpg` 或 `soulstone_gift_box_story_card.jpg`，再用 collection 图做下方分组。
- 图片卡片加 subtle frame，不要过度玻璃拟态。

### 材质区

必须突出“这不是塑料珠子”：

- 使用 `soulstone_macro_crystal_pearl.jpg` 作为大幅横图。
- 配三条短标签：
  - Natural inclusions, not uniform plastic
  - Freshwater pearl luster
  - Sterling silver accents
- 石材库 `soulstone_stone_library.jpg` 用作“choose your materials”的背景或卡片。

### 商品集合卡片

每个 preset 卡片应像珠宝商品卡：

- 图占 70%，文字占 30%。
- 显示：名称、材料简写、价格 from、适合场景。
- 不要让卡片像 blog/灵性解释卡。

示例结构：

```html
<article class="product-card luxe">
  <img ...>
  <div>
    <p class="eyebrow">Calm / Gift-ready</p>
    <h3>Ocean Calm</h3>
    <p>Aquamarine · Freshwater pearl · Sterling silver</p>
    <strong>From $68</strong>
  </div>
</article>
```

---

## 5. 材质真实感实现建议

### 珠子预览

当前 `bracelet-renderer.js` 已使用 `assets/beads-cut/*.png`。下一步应强化：

1. **每颗珠子轻微大小/位置差异**
   - 天然水晶和珍珠不应完全等圆、等距。
   - pearl 用椭圆与旋转；stone 可加 2–4% random scale，但保持同一设计每次渲染稳定，可用 index 伪随机。

2. **分层高光**
   - 每颗珠子：底部阴影、照片纹理、顶部小白高光、边缘暗角。
   - 透明水晶：增加内部 cloud/noise clip，避免塑料糖果感。
   - obsidian/smoky：更强镜面反射，但不要纯黑死块。

3. **银珠**
   - 银色配件应有线性金属高光，不要灰色圆点。
   - 可增加小孔/边缘 ring，让它像 spacer bead。

4. **绳/弹力线**
   - completed/productMode 只露出少量 cord，不要像画线绕圈。
   - 增加 clasp 或 small silver finishing detail，让成品更像珠宝。

### 完成品预览

重点：用户点击 “Preview finished piece” 后，看到的不是订单清单，而是一张“可截图/可购买”的商品预览。

建议 modal 首屏：

- 左侧/上方：大尺寸 product render，椭圆透视，背景为浅米或深香槟台面。
- 右侧/下方：商品名、材料、尺寸、价格、CTA。
- 下方才是 BOM 与 Story Card。

增加视角切换：

- `Studio view`：设计过程圆形排布。
- `Finished view`：椭圆商品图。
- `Gift view`：手链 + story card + box 背景。

在静态站中可用三个按钮切换 CSS class / render options，无需后端。

---

## 6. Configurator 交互方向

### 当前交互应改名为“Design Studio”而非“Builder”

视觉上要像预约珠宝顾问：

- 左侧大画布：成品感，少 UI 干扰。
- 右侧面板：分步骤、窄信息密度。
- 移动端：底部 sticky summary + CTA。

### 推荐流程

1. **Start with a moment**
   - Gift / Stress reset / Work focus / Everyday shield / New chapter。
   - 这是很适合欧美 mainstream 的入口，比直接选“chakra”更高级。

2. **Choose a palette**
   - Calm: aquamarine / moonstone / pearl
   - Love: rose quartz / moonstone / pearl
   - Protection: smoky / obsidian / silver
   - Abundance: green / citrine / pearl
   - Clarity: citrine / clear quartz / lemon quartz

3. **Refine materials**
   - 每次推荐 2–3 个下一颗，不展示过多石头。
   - 每颗石头卡片要有 macro texture + material note + price increment。

4. **Review finished piece**
   - 完成度到 70% 后就引导预览，而不是等满珠数。
   - 预览页展示：材料、尺寸、故事卡、礼盒、配送/退换。

### 交互微动效

- 添加珠子：轻微 pop + shadow settle。
- reorder：珠子沿圆弧滑动，而不是列表跳动。
- 完成预览：画布从 circle morph 到 ellipse（可用重新渲染 + fade/scale）。
- hover/focus：只改变边框和光泽，不要彩虹发光。

---

## 7. 奢华转化 cues

需要在设计页和 checkout modal 靠近 CTA 放置：

1. **材料可信**
   - Natural crystal beads
   - Freshwater pearls
   - Sterling silver accent beads
   - Made to order

2. **购买安心**
   - Secure checkout（当前 prototype 可先写 Order preview）
   - Size guide
   - Gift-ready packaging
   - Easy support / changes before production

3. **个性化价值**
   - Energy Story Card included
   - Design ID
   - Material composition
   - Gift message optional（未来）

4. **稀缺但不过度营销**
   - Small-batch materials
   - Each stone varies naturally
   - Handmade after order

避免：

- “healing guaranteed” 等医疗/玄学承诺。
- 大面积 chakra 彩虹。
- 太多闪光粒子、星星、宇宙背景。
- 过度低价促销视觉。

---

## 8. 可直接落地的静态站改造清单

### P0：最快提升高级感

1. 首页首屏改为单张强商品摄影 + 简洁文案。
2. `design.html` 的 preview modal 首屏改成大图成品卡，而不是 “Order Summary” 起手。
3. 在所有 CTA 附近增加小型 luxury trust row：材料、礼盒、定制、预览。
4. Product/preset 卡统一成珠宝商品卡样式：大图、材料、from price、CTA。
5. 减少深色背景连续区块，在中段加入 ivory 材质区。

### P1：强化定制体验

1. 增加 Studio / Finished / Gift 三种预览 tab。
2. 石头卡增加 material thumbnail、大一点的真实珠子图、origin/texture 标签。
3. completed/productMode 渲染默认椭圆透视，显示银色收尾细节。
4. 完成进度从“数量完成”升级为“设计平衡”：hero stone、support tone、accent spacing、size chosen。

### P2：更接近精品电商

1. 新增 PDP 风格 landing：每个 preset 一页或详情 modal。
2. 添加佩戴比例图：手腕/手部 lifestyle，如果暂无素材，可用生成图补齐。
3. 添加 gift packaging 模块：礼盒、故事卡、赠礼场景。
4. 增加 Review/UGC 区块占位，哪怕先用 editorial quotes/press-style notes，后续替换真实评价。

---

## 9. 推荐页面结构

### 首页

1. Hero：大商品图 + 强定位 + CTA。
2. Material proof：macro 图 + 三个材质承诺。
3. Shop by intention：5 个意图，但视觉是商品系列，不是玄学分类。
4. Design Studio preview：展示 configurator 的 finished view。
5. Gift-ready：礼盒 + Story Card。
6. Trust：shipping / returns / material / size guide。

### Design Studio

1. 左侧/顶部：大画布，默认浅米/香槟台面或暗色 jewelry tray。
2. 右侧：
   - Step 1 Occasion / Intention
   - Step 2 Wrist + bead size
   - Step 3 Recommended materials
   - Step 4 Composition tray
   - Sticky Review CTA
3. Modal：
   - Finished product render
   - Product title + material line
   - Price + CTA
   - Gift/story card preview
   - BOM accordion

---

## 10. 最重要的视觉判断标准

每个新增模块都用这 5 个问题验收：

1. 第一眼像不像珠宝，而不是手作串珠？
2. 用户是否能看清材质真实纹理？
3. 定制过程是否在不断接近“成品”，而不是停留在“零件”？
4. CTA 附近是否有足够信任信息？
5. 移动端是否能在 5 秒内理解：我选意图 → 看成品 → 可送礼？

如果只能做一件事：**优先把 Design Studio 的完成预览做成精品商品图卡**。这是从“玩具式配置器”变成“可购买定制珠宝”的关键。 
