# NDT Landing — Design System Info

Skondensowany brief projektu. Aktualizować w miarę decyzji. Dla pełnego brand-contextu aplikacji zobacz `claude-design/NDT Design System/README.md`.

---

## Architektura dwu-warstwowa

```
┌─ Marketing Layer (landing-only) ────────────────┐
│ Caveat, Shadows Into Light, tape, scribble      │
│ rotate, editorial headlines, Problem quotes     │
│ Zbudowane DLA grupy: mali twórcy PL B2C         │
├─ Brand Anchor (shared z ../ndt aplikacji) ──────┤
│ Inter 400/500/600/700                           │
│ purple hsl(286 86% 57%) + pink-tinted borders   │
│ .glass card language                            │
│ Lucide icons only, ZERO emoji                   │
│ radius 12px, shadow pink-tinted (nie black)     │
│ Polish informal „Ty", sentence-case             │
│ 14–16px body (dense, tool-like)                 │
└──────────────────────────────────────────────────┘
```

**Zasada rzeźbienia**: każda decyzja odpowiada na pytanie — *czy to musi się zgadzać z aplikacją, bo user po zakupie to rozpozna (anchor), czy to akcent marketingowy którego aplikacja może sobie podarować (marketing layer)?*

- Kolor brand, border, Inter, Lucide, sentence-case, „Ty", zero emoji → **anchor** (nigdy nie łamać)
- Caveat/Shadows Into Light jako akcent, tape, rotate karty, scribble underline, editorial section numbering → **marketing layer** (OK, dozować)

---

## Tokens (z `src/styles.css`)

**Fonty:**
- `--font-sans`: Inter (body + H)
- `--font-hand`: Caveat (handwritten akcenty — podpisy, badges, mikrokopia)
- `--font-scribble`: Shadows Into Light (scribble captions — dopiski, „✦ 7 etapów")

**Kolory:**
- `--color-brand`: `hsl(286 86% 57%)` — fiolet marki, akcent PUNKTOWY
- `--color-brand-soft`: `hsl(289 100% 97%)` — tła sekcji, badge brand
- `--color-brand-ring`: `hsl(277 90% 61%)` — focus ring
- `--color-ink`: `hsl(266 51% 16%)` — text primary
- `--color-muted`: `hsl(271 22% 48%)` — text secondary
- `--color-subtle`: `hsl(285 100% 97%)` — muted surface
- `--color-border-soft`: `hsl(283 68% 88%)` — pink-tinted border
- `--color-accent`: `hsl(276 100% 96%)` / `--color-accent-strong`: `hsl(270 60% 30%)`
- `--color-gold-bg` / `-border` / `-ink`: highlighty, badge lifetime

**Dark theme (dla przełamania DarkPain sekcji)** — z `../ndt/theme.css`:
- bg `hsl(270 30% 8%)` / fg `hsl(280 20% 92%)` / muted `hsl(271 15% 55%)`
- **ZERO purple radial glow** — to nie jest styl brandu

**Radii:** `--radius-xs 0.25 / -sm 0.5 / -md 0.75 / -lg 1 / -xl 1.5rem`

---

## Utility classes (z `src/styles.css`)

| Class | Zastosowanie |
|---|---|
| `.glass` | Podstawowa karta — `bg white 65%`, blur(12px), pink border + shadow. Card language brandu. |
| `.glass-strong` | Mocniejszy wariant dla hero mockupów |
| `.tape` | Taśma scotch (żółta, 60×18, blur, rotate z inline style) |
| `.underline-brand` | Handwritten marker-underline pod słowem (gradient 62–92%) |
| `.scribble-circle` | Ręcznie zakreślony owal wokół elementu (`::before` border organic-radius) |
| `.float-slow` | 7s vertical float (używa `--rot` CSS var do zachowania rotacji) |
| `.scribble-sticker` | Białe halo text-shadow (4-warstwowe) — dla scribble captions nachodzących na mockup/ramkę |
| `.font-hand` / `.font-scribble` | Handwritten akcenty marketingu |

---

## Copy voice (z DS aplikacji + landing decyzje)

- **Polish first**, informal „Ty / Twój / twoje" (zawsze lowercased, nigdy Pan/Pani)
- **Sentence-case** wszędzie. Wyjątek: 11 px eyebrow z `tracking-[0.18em] uppercase`
- **ZERO emoji** — wszystkie role emoji bierze Lucide (`Zap`, `MessageCircle`, `ArrowRight`...)
- **Unicode OK jako dekoracja scribble**: `✦`, `→`, `↓` — tylko w `font-scribble` / `font-hand`, jako glif ozdobny, nigdy jako „urgency-emoji"
- **Bez myślników (—, –) w copy.** Naturalna interpunkcja: kropka, przecinek, dwukropek. Teksty mają brzmieć jak pisane przez człowieka do człowieka, nie przez AI.
- **Polish quotes**: `„…"` dla cytatów (użyj **backticki `…`** w JSX zamiast double-quote string, bo mieszanka `„"` + `"` łamie parsowanie TS)
- **Liczby PL**: `3 000 tokenów`, `199 zł` (zł po kwocie)
- **Loanwords akceptowane**: `workspace`, `creator`, `content`, `priority`, `early access`, `tokens` — EN inside PL sentence, nie tłumaczone
- **Brak korpo-bełkotu** („synergia", „unlock potential") i **brak fake-urgency** („tylko 3 miejsca!!!") — jeśli ograniczenie jest prawdziwe, komunikuj faktem („30 miejsc w becie")

## Poprawność ortograficzna

- **Subskrypcja** (nie „Subskrybcja") — przez „y", nie „i"

---

## Anti-patterns (nie robić)

- **Purple radial glow blobs w rogu** — klasyczny AI-tell, usunięte z Hero + Pricing
- **Gradient text** na słowach kluczowych — `italic text-brand` max 1 raz na stronie („kierunek" w Hero)
- **Three-stop purple gradient avatary/logo** — zastąpione realnymi assetami (`/logo.png`, `/nikodem-professional.jpg`)
- **Pulsing dot badges** (`animate-pulse`) — SaaS-template signal
- **Dark mode + purple glow neon-accent** — jeśli potrzebny dark moment, użyj oficjalnych dark tokens bez glow
- **Glassmorphism jako dekoracja** na płaskim białym tle (nie ma co blurować) — `.glass` ma sens tylko gdy pod spodem jest kontent/gradient
- **Identical card grid** — 4+ karty w rzędzie tym samym wzorem (icon + heading + text) bez break-the-grid momentu
- **Fake-urgency vocabulary**: `⚡ Limited`, countdownery, `tylko X miejsc!!!`. Real pool limits komunikujemy rzeczowo
- **Dozować fiolet** — jeśli wszystko jest brand, nic się nie wyróżnia

---

## Assets (`public/`)

- `/logo.png` — oficjalne logo NDT (gradient ribbon), używane w Nav
- `/nikodem-professional.jpg` — profesjonalne zdjęcie Nikodema Rudzińskiego (Hero avatar)
- `/hqdefault.webp` — thumbnail kursu (YouTube-style, używane w Course section)
- `/ndtbg.svg` — logo rozłożone, 9% opacity wash, tło body
- `/favicon.svg` / `/logo-white.png`

---

## Struktura landingu

```
Nav (sticky, backdrop-blur, logo.png)
├─ Hero — H1 „Nadaj treściom kierunek" + subline funkcjonalna
│         + Editor mockup dominant / Strategy mockup accent (swap warstw)
│         + avatar zdjęcie Nikodema + podpis font-hand [20px]
├─ Problem (02) — 3 cytaty na dashed box + tape
├─ DarkPain (03) — ciemny break, editorial, bez purple glow
├─ Manifest (04) — jedno heading 1:1 z wireframe (em bez brand color, stały br, s opacity-50)
├─ HowItWorks (05) — 4 kroki alternating L-R
├─ Course (06) — Nikodem pitch + thumbnail + curriculum peek
├─ Pricing (07) — 3 karty: Kurs | Zajawka (dashed brand) | Lifetime (ink offset shadow)
└─ FaqAndFinalCta (08+09) — accordion + CTA card scribble „✦ od dziś"
Footer
```

---

## Kurs — dane rzeczywiste (źródło: `../ndt/packages/ndt/src/pages/course-page.tsx`)

- **Tytuł w aplikacji**: „Strategia treści — od zera do spójnej marki"
- **Tytuł na landingu**: „Nadaj treściom kierunek" (marketing-layer rename, świadomie inny)
- **Struktura**: 5 sekcji × 2 lekcje = 10 lekcji video, łącznie ~120 min (2h)
  - 01 Tożsamość twórcy (27 min)
  - 02 Cele twórcy (24 min)
  - 03 Odbiorcy (24 min)
  - 04 Styl komunikacji (22 min)
  - 05 Format treści (23 min)
- **Cena w aplikacji**: 450 zł (Badge w course-page.tsx)
- **Cena na landingu**: 199 zł (pre-MVP cashflow pricing, świadomie inny — potem realignment)

⚠️ **Do przemyślenia**: user który kupił landing za 199 zł, po wejściu do aplikacji zobaczy Badge „450 zł" — trzeba to ukryć/ogłosić jako „wartość" zamiast cenę.

---

## Pricing landingu (pre-MVP cashflow)

| Plan | Cena | Dla kogo | Status |
|---|---|---|---|
| Kurs + Strategia | 199 zł jednorazowo | Tylko kurs + workbook + szablony | Dostępne teraz |
| **Zajawka — Aplikacja NDT** | 79 zł/mies | Subskrypcja po becie (Q3 2026) | **Wkrótce**, dashed brand border |
| Lifetime | 399 zł jednorazowo | Wszystko + dostęp do bety + −20% na lata | Limitowane 30 miejsc |

**Limit 30 miejsc** (lifetime) — to prawdziwe ograniczenie liczby beta testerów, NIE fake-urgency. Komunikowany rzeczowo: `Badge: "30 miejsc w becie"`.

## Discord

- **Discord polski-startup** (spółka) — otwarty dla wszystkich
- **Zamknięta grupa NDT** w ramach discorda — tylko dla lifetime

---

## Stack

- React 19 + Vite 7 + Tailwind 4 + TypeScript 5.9
- `tw-animate-css`, `lucide-react`, `clsx`, `tailwind-merge`
- Bun runtime (`bun run dev` / `bun run build`)
- No dark mode w landingu (tylko light), ale DarkPain używa dark-theme tokens aplikacji dla break
