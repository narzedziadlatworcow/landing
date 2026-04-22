# NDT App — UI Kit

High-fidelity recreation of the NDT app surface. Components are visual-only; real logic is stubbed.

## Screens
- **Strategia** — 7-stage AI-assisted brand strategy wizard (sidebar + active step with assistant helper).
- **Inspiracje** — search / feeds / saved toggle, results as glass bento cards with YouTube + RSS sources.
- **Content** — projects + topics (matches `list-page.tsx`: Box with divide-y, search + sort controls, status badges).
- **Kurs** — hero-image course page with lesson list.
- **Pricing** — 3-tier plan picker (Solo / Creator / Studio) with monthly/yearly toggle.

## Files
- `index.html` — entry; renders Toolbar + active screen from localStorage.
- `kit.css` — buttons, inputs, badges, glass primitive. Imports `../../colors_and_type.css`.
- `Icons.jsx` — Lucide-style SVG set, inlined (no npm dependency).
- `Toolbar.jsx` — sticky app header with workspace selector + nav tabs.
- `Screens.jsx` — Strategy, Content, Course.
- `Inspiration.jsx` — Inspiration tab.
- `Pricing.jsx` — Pricing page.

## Notes
- All copy is Polish, informal "Ty". Currency shown in USD with PLN hint (matches codebase pattern).
- Background: `ndtbg.svg` + blue-to-lavender gradient (signature brand wash).
- Glass cards everywhere — never flat white.
