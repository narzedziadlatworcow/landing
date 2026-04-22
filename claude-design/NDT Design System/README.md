# NDT — Narzędzia dla Twórców — Design System

NDT (**Narzędzia dla Twórców** — "Tools for Creators") is a Polish SaaS for content creators: a single workspace that walks you from brand-strategy, through idea-sourcing / inspiration feeds, into AI-assisted long- and short-form content production. Built on the Arc framework (React 19, Tailwind 4, Bun, SQLite).

The product personality is **purple, glassy, calm-tech, Polish-language first**. Marketing & UI copy is Polish; English is the secondary locale.

## Sources used

- **Codebase:** `ndt/` (locally mounted via File System Access API) — monorepo with `@ndt/*` packages: `ndt`, `auth`, `workspace`, `strategy`, `content`, `content-core`, `inspiration`, `admin`, `external-api`, `integrations`. The Arc design system (`@arcote.tech/arc-ds`) supplies primitives: `Box`, `Button`, `Badge`, `Avatar`, `BentoCard`, `Input`, `Tooltip`, `Separator`.
- **Brand tokens of record:** `ndt/theme.css` (ported to `theme-original.css`) + `ndt/manifest.json`.
- **Raster/vector assets:** `ndt/public/logo.png`, `ndt/public/logo-white.png`, `ndt/public/ndtbg.svg`, `ndt/public/icons/favicon.svg`, `ndt/public/hqdefault.webp` — copied into `assets/`.
- **Iconography in code:** `lucide-react` (`lucide` icon set) — every page imports from it directly.
- **Copy/Tone reference:** `ndt/locales/pl-PL.po` (source locale) + Polish strings inside `.tsx` files.

## Products represented

One product surface, multi-module:

| Module | What it does |
|---|---|
| **ndt (shell)** | Toolbar — workspace selector, main nav, user menu; Pricing, Course, Collaborate pages |
| **strategy** | 7-stage AI assistant that builds the creator's brand: Tożsamość, Cele, Oferta, Widzowie, Styl, Serie |
| **content** | Projects → Topics → Pieces; ProseMirror editor; 31 format types |
| **inspiration** | Search, Feeds (RSS / YouTube), Saved — bento cards |
| **workspace** | Multi-workspace, team members, invitations |
| **auth** | OAuth + email/pw |

There is no separate marketing website or mobile app in the attached codebase; pricing & course pages live inside the same app under `BlankLayout`. The UI kit below recreates the **app** itself.

## Index

| File | What it is |
|---|---|
| `README.md` | (this) brand context, visual/content foundations, iconography |
| `SKILL.md` | Agent Skill wrapper — invoke to design in NDT's brand |
| `colors_and_type.css` | Single source of truth for color + type CSS vars; import in every file |
| `theme-original.css` | Verbatim copy of the production `theme.css` (reference only) |
| `assets/` | `logo.png`, `logo-white.png`, `ndtbg.svg`, `favicon.svg`, `hqdefault.webp` |
| `preview/` | Design-system cards (swatches, type scale, components, logos) |
| `ui_kits/app/` | React recreation of the NDT app — toolbar, inspiration, content, strategy, pricing |

---

## Content fundamentals

**Language.** Polish first, English translated via `<Trans>` / `t\`\``. When designing, write Polish unless told otherwise; English copy is a translation, not a rewrite.

**Pronoun & address.** Informal second-person singular — **Ty / Twój / twoje** (lowercased, no capitalized reverence). *"Zacznij za darmo"*, *"Wybierz swój plan"*, *"Wybierz workspace"*. Never formal *Pan/Pani*.

**Voice.** Warm, concrete, creator-to-creator — assumes you already make content, treats AI as a helper, not a magician. Pricing copy reads like a fellow freelancer explaining the plans: *"Solo creator z jedną marką"*, *"Kilka marek, więcej mocy, priority AI"*. Course copy is encouraging and practical: *"Nadaj swoim treściom kierunek"*.

**Casing.** Sentence-case everywhere. Section titles are short nouns: *Projekty*, *Tematy*, *Serie*, *Widzowie*. No Title Case. No ALL-CAPS except the 11px `eyebrow` label style.

**Punctuation.** Em-dash (`—`) used frequently as soft connector: *"Nisza, wartości, doświadczenia i misja — fundament, nie biurokracja."* Proper Polish quotes („…") are OK but double ASCII (`"…"`) is what's actually in the code.

**Numbers.** Polish number formatting (`3 000 tokenów`, `450 zł`). Prices shown in USD with `~PLN` hint: *"$15 / miesiąc · ~65 zł / mies"*. Currency symbol after amount for PLN.

**Emoji.** **Not used in product UI.** Zero emoji in pricing, nav, dialogs. Lucide icons replace every role emoji would play.

**Loanwords accepted.** `workspace`, `creator`, `content`, `priority`, `early access`, `tokens` — kept in English inside Polish sentences. Don't translate these.

**Example copy patterns.**
- CTA: *"Wybierz Creator →"*, *"Zacznij za darmo"*, *"Skontaktuj się"*
- Empty state: *"Brak inspiracji — wybierz źródła i uruchom wyszukiwanie"*
- Tooltip: *"Twoje centrum tworzenia treści"* (one short sentence, friendly)
- Section headers: 1-2 words max (*Projekty*, *Znalezione inspiracje*, *Program kursu*)
- Microcopy: explanation beneath heading, sentence-case, one line preferred (*"Pełny produkt na trial — zero zobowiązania"*)

---

## Visual foundations

**Palette.** Purple is the entire brand — magenta-violet for primary accent (`hsl(286 86% 57%)` / `#c92bf0`), near-white violet for accents (`hsl(289 100% 97%)` / `#fdf4ff`), deep violet-ink for foreground (`hsl(266 51% 16%)` / `#2b1645`). Only the **logo** uses the full 4-stop rainbow gradient (violet → magenta → lilac → azure). Do not invent new hues; when a chart or tag needs variety, use `--chart-1..5` which are all different H values on the same saturation/lightness rail.

**Type.** `Inter` across the board, weights 400/500/600/700. No serif, no display font. Track -0.02em on h1 only. Body is **14px** (`text-sm` in Tailwind) — this is a dense, tool-like app, not a marketing page. Micro-labels 10-11px with 0.08em tracking, uppercase, muted-foreground color.

**Background.** The signature move: `ndtbg.svg` (stroked outline of the logo, 9% opacity, radial-gradient-stroked) placed at `140% size / 30% 30%` over a `linear-gradient(135deg, #dbeafe → #ffffff → #f3e8ff)` — blueish white to lavender white. Fixed-attachment so it doesn't scroll. Never use plain white.

**Glassmorphism is the card language.** Every `Box` is `.glass`: `background: rgba(255,255,255,0.65)`, `backdrop-filter: blur(12px)`, `1px solid hsl(283 68% 88% / 0.3)` border, layered pink-tinted shadow. On hover, blur goes to 16px and shadow intensifies. When a box is `data-expanded`, the blur turns off and background becomes opaque — important contract: never leave a focused editor translucent.

**Radii.** Defaults are generous — `--radius: 12px` (0.75rem) on buttons/inputs/cards; bento cards go 16-20px; the little `rounded-full` pill toggles (billing cycle) are fully round. No sharp corners anywhere.

**Shadows.** Always pink-tinted (`hsl(283 68% 88%)` alpha), never pure black. Two-stop stack: a tight 4/10px pair at rest, 10/20px pair at elevation. Dark mode uses true black with 0.2/0.3 alpha instead.

**Borders.** 1px, hsl(283 68% 88%) — a soft lavender. `--ring` for focus is hotter (hsl(277 90% 61%)).

**Hover / press.**
- Ghost buttons → `hover:bg-accent` (near-white lavender).
- Primary buttons keep color; slight shadow lift.
- Cards (`.glass`) darken shadow + deepen blur.
- Icon buttons go `opacity-60 → 100` on hover (see inspiration save button).
- No scale-down on press; no bounce animations.

**Animation.** Subtle and fast. Framer-Motion on page-level mounts: `initial={{opacity:0, y:8}} animate={{y:0}} transition={{duration:0.2}}`. `transition-colors` on every interactive thing, always default 150ms. No parallax, no confetti, no spring-heavy gestures. The bookmark toggle fades. Spinners are 2px purple borders on 30%-alpha rings.

**Transparency & blur.** Used only for: (a) the `.glass` card, (b) thumbnail protection gradients (`bg-gradient-to-t from-black/60 via-transparent` on course hero), (c) backdrop of modal sheets. Not used for decorative overlays.

**Imagery.** Brand photography: warm-saturated, slightly film-grain, human subjects (YouTube thumbnails of Nikodem Rudziński). No illustrations. No abstract 3D. The only "illustration" in the whole system is `ndtbg.svg` — that's the logo, unrolled.

**Protection gradients vs. capsules.** Thumbnails get full-bleed with a `from-black/60 via-transparent to-transparent` gradient so the badge overlaid on top stays readable. Avatars + tag rows use pill capsules (`rounded-full`, `px-2 py-0.5`, `text-[10px]`). No drop-shadow under text; always a gradient or a capsule.

**Layout rules.** Single fixed toolbar at top (workspace | nav | user). Content is always `max-w-4xl mx-auto` or `max-w-6xl` — never edge-to-edge. Pages use `flex flex-col gap-6`. Divide lists with `divide-y` inside a `Box` rather than card-per-row.

**Density.** Dense, not airy. 14px body, 12/16px padding in most cards. This is a daily-driver tool.

---

## Iconography

- **Primary icon set:** `lucide-react` (MIT). Every page imports specific icons (`Bot`, `Sparkles`, `Lightbulb`, `Crown`, `Rocket`, `Zap`, `Check`, `Plus`, `Search`, `FileText`, `FolderOpen`, `GraduationCap`, `Handshake`, `Target`, `Fingerprint`, `Palette`, `Layers`, `Package`, `Users`, `Coins`, `Settings`, `Sun`, `Moon`, `LogOut`, `Play`, `Lock`, `CheckCircle`, `Bookmark`, `BookmarkCheck`, `X`, `ChevronDown`, `ArrowRight`, `ArrowUpDown`, `AlertTriangle`, `History`, `Gauge`, `Building2`, `Mail`, `Send`, `Globe`). Use Lucide — it's CDN-available: `https://unpkg.com/lucide@latest/dist/umd/lucide.js` or inline SVGs from `https://lucide.dev/icons/`.
- **Icon sizing:** `h-3 w-3` (12px, inline labels), `h-3.5 w-3.5` (14px, default), `h-4 w-4` (16px, nav / buttons), `h-5 w-5` (20px, card headers). Stroke width default (2). Never recolor stroke manually — inherit `currentColor` off text color classes (`text-primary`, `text-muted-foreground`, `text-emerald-600`, `text-destructive`).
- **Emoji:** never. See Content fundamentals.
- **Unicode as icon:** only the em-dash (`—`) as a connector, never as a bullet.
- **Logo usage:** `logo.png` is the gradient ribbon mark. `logo-white.png` exists for dark surfaces but is mostly blank (watermarked) — **FLAG for user:** the white logo PNG in the source appears near-empty; we treat it as a missing asset and fall back to the gradient mark on dark backgrounds.
- **Favicon:** same gradient ribbon, in `assets/favicon.svg`.
- **Background motif:** `assets/ndtbg.svg` is the logo unrolled — 9% opacity wash. Used only as page background, never foreground.

### Substitutions flagged

1. **Inter web font** — the codebase references `"Inter"` but does not ship font files. We load Inter from Google Fonts as a CDN substitute. *Ask user: do you want local .woff2 files bundled instead?*
2. **Logo-white.png** — visually empty in the source. If a true white-monochrome lockup exists, please re-upload.
3. **No product screenshots / marketing photography** were in the codebase other than `hqdefault.webp` (course thumbnail of creator Nikodem Rudziński / @Szhakal). UI kit scenes use muted gray placeholder blocks where photography would normally sit.

---

## For agents

If you're an LLM about to design something for NDT: read `SKILL.md` and `colors_and_type.css`, then pull components from `ui_kits/app/` rather than hand-rolling. The `.glass` card + `Inter` + purple `hsl(286 86% 57%)` + Lucide icons is the whole system — get those four right and it will feel like NDT.
