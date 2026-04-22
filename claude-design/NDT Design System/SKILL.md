---
name: ndt-design
description: Use this skill to generate well-branded interfaces and assets for NDT (Narzędzia dla Twórców) — a Polish SaaS for content creators — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key cheat sheet:
- Polish UI copy, informal "Ty", sentence-case, no emoji.
- Purple `hsl(286 86% 57%)` primary, pink-tinted borders `hsl(283 68% 88%)`, deep-violet foreground `hsl(266 51% 16%)`.
- Inter font, 14px body, tight -0.02em on h1.
- Every card is `.glass` — blur(12px) + 65% white + pink shadow.
- Background is always `brand-bg` (SVG wash over blue→lavender gradient).
- Icons from `lucide-react`; size 14-16px; stroke-width 2.
- Radii default 12px; bento cards 16-20px; pill toggles full-round.
- Animations: 150-200ms fades + small y-translate, nothing bouncy.
