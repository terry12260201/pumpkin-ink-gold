# 🪄 AI 咒語｜南瓜墨金美學

> 要叫 ChatGPT、Gemini、Codex、v0、Cursor 或生圖模型照這套風格做東西時，直接複製下面的咒語。
> **最好的做法**：把 `references/ink-gold.css` 一起貼給它，並說「只能用這份 CSS 的 class 和變數」。

---

## 一、做網頁／工具／平台（中文版）

```text
請用「南瓜墨金美學（Ink & Gold）」風格做一個【頁面用途】。

【風格一句話】像一本排版講究的筆記本：墨色寫字、點格打底、金色只畫重點。

【顏色】
- 頁面底 #F5F5F5，加 16px 間距、10% 透明度的淡點格。卡片純白 #FFFFFF。
- 文字只用一個墨色 #161415，靠透明度分層：標題 100%、內文 65%、標籤 45%、hover 邊框 18%、卡片邊框 8%。不要用純黑，不要用多種灰。
- 深色區塊（導覽列、行動呼籲、FAQ）用 #2D2B2C → #242223 的 135 度漸層，一頁最多 2 塊。
- 金色 #FDC302 → #FFD83A（由下往上漸層）只用在「一個畫面唯一的主按鈕」；金色上的字用 #2D2B2C。白底上的金色文字用 #B88800。
- 點綴色只能少量：螢光筆黃 #FDE68A、粉 #FDA4AF、藍 #BAE6FD；成功 #059669；錯誤 #DC2626。

【字體】
- Roboto（英數）＋ Noto Sans TC（中文）；眉標、數字、日期用 Roboto Mono。
- 大標做粗細反差：第一行 900、第二行 300。英文字詞可以斜體，中文絕對不斜體。
- 中文標題字距 0（不要負字距），內文行高 1.75，最小 12px。
- 眉標：等寬字 12px、全大寫、字距 0.14em，格式像「01 · TOOLKIT · 工具包」。
- 中文要強調時用螢光筆底（下半段 #FDE68A），不要用斜體。

【形狀】
- 卡片：白底、1px 8% 墨色邊框、圓角 18px、平常沒有陰影；hover 上浮 2px、邊框變 18%、出現淡淡往下拉長的陰影。
- 按鈕與篩選膠囊都是全圓角膠囊。按鈕高 44，篩選膠囊高 32；選中的膠囊是墨色底白字，右邊帶淡色計數。
- 導覽列：深炭色浮動膠囊，高 60，離頂 16px，右側一顆小金色按鈕。
- 深色大區塊圓角 32px。

【元件】
- 工具卡：左邊 72px 白底圓角 12px 的 Logo 方塊，右邊標題 17px/600（一行）、描述 14px 兩行截斷、底下小標籤；右上角淡淡的 ↗。
- 搜尋框：高 52、圓角 14、左邊放大鏡、右邊快捷鍵提示，focus 時金色光圈。
- 數據卡：圖示＋等寬大數字＋小說明，4 張一排。

【圖示】線條圖示（Lucide 風格），線寬 2，圓角端點，單色 45% 墨色；不要用彩色 emoji 當圖示。

【動態】只做上浮 1–2px、變色、淡入；時間 120/200/320ms，曲線 cubic-bezier(.4,0,.2,1)。不要彈跳、旋轉。

【禁止】紫藍漸層、霓虹光、玻璃擬態、整頁深色、多顆金色按鈕、中文斜體、厚陰影、圓角不一致。

【頁面內容】
（在這裡寫：要有哪些區塊、資料、按鈕）
```

## 二、Make a page (English version)

```text
Design a 【purpose】 page in the "Ink & Gold" style.

Essence: a well-typeset notebook — ink for text, a dotted paper background, gold only for the single most important thing.

Colors: page #F5F5F5 with a subtle 16px dot grid; cards #FFFFFF. One ink color #161415 layered by opacity (100% headings, 65% body, 45% labels, 18% hover borders, 8% card borders) — never pure black, never multiple grays. Dark "stage" sections (floating nav, CTA, FAQ) use a 135° gradient #333233 → #242223, max two per page. Gold gradient #FDC302 → #FFD83A (bottom to top) only on the one primary button per screen, with #2D2B2C text; use #B88800 for gold text on white.

Type: Roboto + Roboto Mono (eyebrows, numbers, dates). Hero headline pairs a 900-weight line (italic allowed for Latin) with a 300-weight line. Eyebrows: 12px mono uppercase, 0.14em tracking.

Shapes: cards 18px radius, 1px 8% ink border, no shadow at rest, lift 2px on hover. Pill buttons (44px) and pill filters (32px; active = ink background, white text, faint count). Floating charcoal pill navbar, 60px tall. Dark stages 32px radius.

Components: horizontal tool card (72px white logo tile + 17px/600 title + two-line clamped description + small tags + faint ↗), search field 52px with gold focus ring, stat cards with mono numbers.

Icons: Lucide-style outline, 2px stroke, single color. Motion: subtle lift, color and fade only (120/200/320ms).

Avoid: purple-blue gradients, neon glow, glassmorphism, all-dark pages, multiple gold buttons, heavy shadows.
```

## 三、生圖咒語（gpt-image 等）

### A. 墨線吉祥物＋漂浮圖示方塊（Hero 插圖）

```text
A clean editorial illustration on a transparent background.
Center: an ORIGINAL friendly mascot character 【描述角色，例如：a small round pumpkin character with a leaf hat, holding a laptop】, drawn as hand-drawn black ink line art, 2–3px confident outlines, pure white fill, slight doodle texture, no color on the character.
Around it: 5 floating rounded-square app tiles (about 20% corner radius), each gently tilted between -12° and +12°, soft 3D look with a thin white highlight on the top edge and a soft shadow below. Tile colors: warm gold (#FDC302), pale sky blue (#BAE6FD), pale pink (#FDA4AF), white, and charcoal (#2D2B2C). Each tile holds one simple single-color outline icon.
Thin gold lines fade in and out between the character and the tiles.
Style: minimal, airy, premium, lots of empty space. No text, no logos of real brands, no gradients on the background, no glow.
isolated on FULLY TRANSPARENT background, nothing else in the image.
```

### B. 單顆漂浮圖示方塊（功能卡插圖）

```text
A single floating rounded-square app tile, tilted about -8°, soft 3D, thin white highlight on the top edge, gentle soft shadow beneath.
Tile color: 【warm gold #FDC302 / pale sky blue #BAE6FD / white / charcoal #2D2B2C】.
On the tile: one simple outline icon of 【icon subject】, 2px rounded strokes, color 【#2D2B2C on light tiles / white on charcoal】.
Minimal, clean, premium. No text. isolated on FULLY TRANSPARENT background, nothing else in the image.
```

### C. 社群封面底圖（深炭版）

```text
A 1280x720 dark charcoal background (#2D2B2C to #242223 diagonal gradient) with a very subtle dot grid.
On the right third: 3 floating rounded-square app tiles (gold #FDC302, white, pale blue #BAE6FD), tilted slightly, soft 3D, connected by thin fading gold lines.
Leave the left two-thirds completely empty for headline text. No text, no logos, no glow effects.
```

生完圖的檢查：
1. 角色是**原創**的，沒有撞到任何現有品牌吉祥物。
2. 透明背景是真的透明（用 PIL 檢查 alpha）。
3. 顏色有落在色票裡（金、淡藍、淡粉、白、深炭），沒有多出紫色或霓虹色。
