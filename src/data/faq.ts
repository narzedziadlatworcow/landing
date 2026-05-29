import {
  LAUNCHED,
  PRICE,
  PRICE_UNIT,
  PRICE_FIRST,
  LAUNCH_DATE,
} from "@/data/offer";

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Co dokładnie dostaję w subskrypcji?",
    a: `Wszystko w jednym miejscu: pełny kurs Nikodema „Nadaj treściom kierunek" (5–6 modułów video, ok. 30–40 min), workbook strategii marki (PDF) i szablony, oraz aplikację NDT — strategię w 7 etapach, research (feedy YouTube i RSS + inspiracje z AI scoringiem), edytor z pamięcią marki i 3 000 tokenów AI miesięcznie. Pełen dostęp od pierwszego dnia, za ${PRICE}${PRICE_UNIT}.`,
  },
  {
    q: "Czy mogę zrezygnować w każdej chwili?",
    a: `Tak — anuluj kiedy chcesz, bez zobowiązań i bez tłumaczenia się. Płacisz miesiąc z góry, rezygnujesz przed kolejnym i tyle. Nie wiążemy Cię umową ani okresem minimalnym.`,
  },
  {
    q: "Kiedy startujecie?",
    a: `Publiczny start to ${LAUNCH_DATE} — kurs, strategia i aplikacja ruszają naraz.${
      LAUNCHED
        ? ""
        : ` Do tego czasu zostaw maila przez formularz, a w dniu startu dostaniesz kupon na pierwszy miesiąc w cenie ${PRICE_FIRST} zamiast ${PRICE}.`
    }`,
  },
  ...(LAUNCHED
    ? []
    : [
        {
          q: `Na czym polega pierwszy miesiąc za ${PRICE_FIRST}?`,
          a: `Jeśli zapiszesz się przed startem (${LAUNCH_DATE}), dostaniesz jednorazowy kupon −20 zł na pierwszy miesiąc — zapłacisz ${PRICE_FIRST} zamiast ${PRICE}. To zniżka tylko na pierwszy miesiąc; od kolejnego subskrypcja kosztuje ${PRICE}${PRICE_UNIT}. Płatność dopiero w dniu startu — teraz zostawiasz wyłącznie adres e-mail.`,
        },
      ]),
  {
    q: "Czy potrzebuję doświadczenia w marketingu?",
    a: `Nie. Kurs jest zaprojektowany od zera — zakładam tylko, że masz pomysł na siebie, a brakuje ci struktury. Prowadzę krok po kroku od „kim jestem jako twórca" do „co publikuję w przyszłym tygodniu". Żadnego korpo-marketingu, żadnych funnel-hacków — pracujesz na swojej marce.`,
  },
  {
    q: "Czy wszystko jest po polsku?",
    a: `Tak — kurs Nikodema (5–6 modułów, ok. 30–40 min) i interfejs aplikacji są po polsku. Aplikacja obsługuje treści pisane w dowolnym języku, ale interfejs i kurs na ten moment są tylko PL (EN w planach).`,
  },
];
