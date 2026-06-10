// Jedno źródło prawdy oferty NDT.
//
// 15.06.2026 (dzień launchu) → przełącz LAUNCHED na `true`.
// To jeden ręczny swap: cały landing przechodzi z trybu pre-launch
// (zbiórka maili + kupon na pierwszy miesiąc) na tryb sprzedaży
// (CTA redirectuje na checkout). Trzymamy boolean ręczny, nie automat
// po dacie — gdyby launch się ześlizgnął o dni, nie chcemy, żeby strona
// sama otworzyła sprzedaż produktu, którego nie ma.

export const LAUNCHED = false;

export const CHECKOUT_URL = "https://app.narzedziadlatworcow.pl/checkout";

/** Cena docelowa subskrypcji. */
export const PRICE = "79 zł";
export const PRICE_UNIT = "/ mies";

/** Cena pierwszego miesiąca dla zapisanych przed launchem (kupon −20 zł). */
export const PRICE_FIRST = "59 zł";

/** Data publicznego startu — komunikowana jako wydarzenie. */
export const LAUNCH_DATE = "15.06";

/** Główne CTA — etykieta zależna od stanu launchu. */
export const CTA_LABEL = LAUNCHED
  ? "Zacznij za 79 zł/mies"
  : "Pierwszy miesiąc za 59 zł";

/** Dokąd prowadzi główne CTA: pre-launch → kotwica do cennika, po → checkout. */
export const CTA_HREF = LAUNCHED ? CHECKOUT_URL : "/#pricing";
