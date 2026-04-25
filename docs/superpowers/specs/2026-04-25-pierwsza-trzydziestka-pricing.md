# Pierwsza Trzydziestka — restrukturyzacja oferty i pricingu

**Data:** 2026-04-25
**Status:** Spec zatwierdzony, gotowy do planowania implementacji
**Autorzy decyzji:** Mikołaj (product owner) + Claude (brainstorming)

## 1. Kontekst

Obecny pricing landingu NDT ma 3 karty:

- **Kurs (199 zł)** — kurs + brak aplikacji
- **Subskrypcja (79 zł/mc)** — peek, startuje Q3 2026
- **Lifetime (399 zł)** — kurs + 1 rok aplikacji + społeczność + 20% rabat na zawsze

W trakcie iteracji pricingu cena lifetime została podniesiona do 499 zł, app okres obcięty do 6 miesięcy, a "wow"-procent oszczędności spadł z 65% do 26% — co zdiagnozowano jako objaw głębszego problemu: **lifetime był pozycjonowany jako "tańsza subskrypcja z bonusami"**, podczas gdy rzeczywista intencja to **filtr na early adopters i mechanizm cashflow przed launchem MVP**.

## 2. Cel

Wymienić "Lifetime" na osobny produkt — **Pierwsza Trzydziestka** — z własną narracją, miejscem na stronie i wartościową propozycją zbudowaną wokół wzajemnego paktu (kasa + zaangażowanie ↔ wpływ + wczesny dostęp + status).

**Strategiczne cele Pierwszej Trzydziestki:**

1. **Cashflow** — ~18 000 zł na pre-launch (30 × 599 zł), pokrywające ~2 miesiące MVP costs (legal, księgowość, hosting)
2. **Filtr early adopters** — selekcja osób które realnie chcą współbudować NDT, dające jakościowy feedback
3. **Skalowalny mechanizm** — Pierwsza Trzydziestka jako *label* (nie brand) który można powtórzyć dla kolejnych produktów Polski Startup

## 3. Decyzje (locked)

| # | Decyzja | Rationale |
|---|---------|-----------|
| 1 | **Nazwa: "Pierwsza Trzydziestka"** | Gra ze scarcity (30 miejsc), długoterminowy mechanizm dla wszystkich produktów Polski Startup, niegoryczy. **Label, nie brand — bez specjalnej typografii / logo / dekoracji.** |
| 2 | **Cena: 599 zł** (jednorazowo) | Pod psychologicznym progiem 600. 3× cena kursu — czytelny "to inna liga". Mniej niż samo roczne subskrypcji z 20% loyalty discount (758 zł) — killer anchor narracyjny. |
| 3 | **App access: 1 rok w cenie + 20% rabat na każdy kolejny rok forever** | Lifetime app zżera LTV (3-letni LTV ≈ 3 000 zł vs Pierwszej Trzydziestki ≈ 2 100 zł — fair discount ~30% bez rujnowania monetyzacji długoterminowej). |
| 4 | **Liczba miejsc: 30** | Cashflow wystarczający. 4-osobowy team obsłuży 30 jakościowo (m.in. 30 × 1h onboarding = 30h burst); więcej obniżyłoby jakość. |
| 5 | **Włączony cały kurs** ("Nadaj treściom kierunek") | Tangible deliverable on day-1, zanim apka będzie gotowa. Bez sensu kazać im dokupywać kurs osobno za 199 zł skoro płacą 3× tyle. |
| 6 | **1:1 onboarding call (60 min, opcjonalny)** przy starcie apki | Personal touch który tworzy "founder vibe". Opcjonalny — introwertyk może pominąć. Ograniczony commitment (jednorazowy burst, nie monthly). |
| 7 | **Polski Startup mention: minimal** | Landing pozostaje produktowy (NDT), nie company-focused. Co najwyżej 1 linijka footnote przy CTA Pierwszej Trzydziestki: "NDT to pierwszy produkt z [Polski Startup](link)". |

## 4. Co dostają (value stack)

| Pozycja | Wartość retail |
|---|---|
| Cały kurs "Nadaj treściom kierunek" — natychmiast | 199 zł |
| 1 rok aplikacji NDT (12 × 79 zł) — od public launch (Q3 2026) | 948 zł |
| 1:1 onboarding call (60 min, opcjonalny) | bezcenne |
| 20% rabat na każdy kolejny rok subskrypcji — forever | ∞ |
| Ranga "Pierwsza Trzydziestka" w Polski Startup Discord — zamknięte kanały, "backstage" build-in-public | bezcenne |
| Wczesny dostęp do każdej feature (2-4 tygodnie przed publicznym wydaniem) | bezcenne |
| Voting na roadmapie + dedykowany kanał feature requests | bezcenne |
| Imię w credits NDT (sekcja "Pierwsza Trzydziestka" w about) | bezcenne |
| **Razem (mierzalne)** | **1 147 zł+** |
| **Płacisz dziś** | **599 zł** |
| **Oszczędność** | **548 zł ≈ 48%** |

**Killer anchor (must-have w copy):** *"Sama roczna subskrypcja apki kosztuje 948 zł (79 × 12). Pierwsza Trzydziestka kosztuje **599 zł — mniej niż jeden rok apki w retail** — a dodatkowo dostajesz cały kurs, onboarding 1:1, rangę i 20% rabat na każdy kolejny rok forever."*

## 5. Co świadomie NIE obiecujemy (anti-promise — must-have w copy)

Eksponowane na landingu jako trust signal i differentiator vs typowych "founder programs":

- **Nie obiecujemy monthly callów** których byśmy nie dowieźli
- **Nie obiecujemy 1:1 mentoringu długofalowego** — onboarding to jednorazowy burst
- **Live Q&A robimy ad-hoc** — gdy mamy coś konkretnego do pokazania, nie według kalendarza
- **Nie ma fake-urgency** — counter pokazuje prawdziwy stan, nie sztuczną "ostatnią szansę"

Cel: brzmi szczerze, filtruje osoby liczące na korpo-mentoring, podnosi zaufanie tych co i tak rozumieją deal.

## 6. Co od nich oczekujemy (delikatnie, nie wymóg)

- Używać apki po starcie i pisać feedback w dedykowanym Discord-kanale
- Brać udział w okazjonalnych liveach jeśli się odbywają
- *(Bonus, nie wymóg)* Public testimonial po kilku miesiącach jeśli się przyjmie

## 7. Architektura landingu — zmiany

### 7.1. Sekcja `Pricing` — uproszczenie z 3 kart do 2

- **Karta 1: "Kurs + Strategia"** — 199 zł
  - Bez zmian poza ostatnim feature item
  - Nowy ostatni item: *"Aplikacja NDT — 1 miesiąc w cenie (aktywny od publicznego startu, Q3 2026)"* z wyraźnym disclaimerem
- **Karta 2: "Aplikacja NDT" (subskrypcja)** — 79 zł/mc
  - Bez zmian
- **Karta 3 "Lifetime" — usunięta**
- Pod kartami, w miejscu sekcji social-proof, dodatkowy cross-sell: *"Chcesz wcześniej, z lepszą ceną i dostępem do bety? **↓ Pierwsza Trzydziestka**"* (anchor link do nowej sekcji)

### 7.2. Nowa sekcja: `PierwszaTrzydziestka`

Umiejscowienie: bezpośrednio po `Pricing`, przed `FaqAndFinalCta`.

Struktura wizualna (scrapbook-spójna, ale **bez specjalnego brand-treatment dla nazwy**):

1. **Eyebrow + Headline** — "Pierwsza Trzydziestka" + zdanie tagline (np. *"30 osób które wchodzą do środka, zanim to wyjdzie publicznie"*)
2. **Manifest** (2-4 zdania) — co i dlaczego. Ludzki ton, pierwsza osoba.
3. **Co dostają** — wizualna lista value-stack z brand-decoracją (tape, scribble, owale). Eksponowany killer-anchor (*"mniej niż sam rok apki"*).
4. **Co świadomie NIE obiecujemy** — anti-promise lista jako trust signal.
5. **Counter miejsc** — prawdziwy stan ("X z 30 zajętych"), bez fake-urgency
6. **CTA** — "Dołącz do Pierwszej Trzydziestki — 599 zł"
7. **Footnote** — minimal mention Polski Startup ("NDT to pierwszy produkt z Polski Startup")

### 7.3. FAQ — aktualizacje

W `FaqAndFinalCta.tsx`:

- "Co dokładnie dostaję za 199 zł?" — utrzymać aktualne brzmienie z 1mc apką po publicznym starcie
- "Czym różni się lifetime od subskrypcji?" → przepisać na: **"Czym jest Pierwsza Trzydziestka?"** — wyjaśnić mechanizm (30 miejsc, 599 zł, kurs + 1 rok app + onboarding + ranga + 20% forever)
- "14 dni gwarancji" — zaktualizować "lifetime 499 zł" → "Pierwsza Trzydziestka 599 zł"
- "Ile miejsc lifetime zostało?" → przemianować na **"Ile miejsc w Pierwszej Trzydziestce zostało?"**, treść analogiczna
- Final CTA na końcu sekcji: "Chcę lifetime (499 zł)" → "Dołącz do Pierwszej Trzydziestki (599 zł)"

### 7.4. Stany sekcji Pierwszej Trzydziestki

- **Available** (X z 30 zajętych): pełna sekcja z CTA aktywnym
- **Sold out** (30 z 30 zajętych): sekcja widoczna ale z komunikatem "Wszystkie 30 miejsc zajętych — dziękujemy. Dołącz do listy oczekującej na publiczny start subskrypcji.", CTA przekierowuje na waitlist subskrypcji

## 8. Anti-patterns (czego unikać)

- **Nie robić logo / specjalnej typografii dla "Pierwsza Trzydziestka"** — to label powtarzalny dla przyszłych produktów, nie brand. Standardowa typografia jak inne sekcje.
- **Nie używać fake-urgency** — "zostało tylko X!" jako manipulacja; tylko prawdziwy counter
- **Nie obiecywać commitmentów** których team realnie nie dowiezie (monthly calle, 1:1 mentoring)
- **Nie pozycjonować jako "premium tier" kursu** — to inny produkt z inną narracją, nie upgrade-path
- **Nie mocować Polski Startup w hero / głównej narracji** — landing produktowy, PS jako footnote

## 9. LTV check (referencja, nie wymóg)

| Ścieżka | Rok 1 | Rok 2 | Rok 3 | 3-letni LTV |
|---|---|---|---|---|
| Pierwsza Trzydziestka | 599 zł (zawiera kurs + 1 rok app) | 758 zł (z 20% loyalty) | 758 zł (z 20% loyalty) | **~2 115 zł** |
| Standard buyer (kurs + sub) | 199 + 948 = 1 147 zł | 948 zł | 948 zł | **~3 043 zł** |

Pierwsza Trzydziestka kosztuje ~30% mniej w 3-letnim horyzoncie — fair dla founder cohort, nie zżera monetyzacji długoterminowej.

## 10. Out of scope (nie w tym specu)

- Implementacja realnego countera (na razie static placeholder lub manualnie aktualizowany)
- Mechanika płatności / integracja z payment processor
- Backend logiki "30 miejsc"
- Onboarding scheduling system (na MVP wystarczy email po zakupie z linkiem Calendly)
- Ranking-system Discord-rangi (manualne nadanie po zakupie)
- Brzmienie końcowych copy strings w sekcji Pierwsza Trzydziestka — będą tworzone na etapie implementacji w oparciu o ten spec

## 11. Success criteria

- Lifetime card usunięty z `Pricing.tsx`, pricing ma 2 karty
- Karta kursu jasno komunikuje że 1mc apki aktywuje się Q3 2026
- Sekcja `PierwszaTrzydziestka` istnieje, ma manifest, value stack, anti-promise, counter, CTA
- FAQ zaktualizowane (lifetime → Pierwsza Trzydziestka, 499 → 599, etc.)
- Brak referencji do "lifetime" / "399 zł" / "499 zł" / "26% taniej" / "1 rok aplikacji (79 zł × 12)" w kodzie
- Landing wizualnie zachowuje scrapbook-tone, Pierwsza Trzydziestka nie wyróżnia się jako "obcy element"
- Polski Startup wzmianka tylko jako footnote przy CTA Pierwszej Trzydziestki
