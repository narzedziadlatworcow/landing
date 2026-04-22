import { useState } from "react";
import { Plus, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "Co dokładnie dostaję za 199 zł?",
    a: `Pełny kurs Nikodema „Nadaj treściom kierunek" — 10 lekcji video w 5 sekcjach (ok. 2h), workbook strategii marki (PDF), szablony serii, tematów i kalendarza. Dostęp dożywotni z przyszłymi aktualizacjami. Aplikacja NDT dostępna w planie lifetime (399 zł) albo w subskrypcji 79 zł/mies po publicznym starcie.`,
  },
  {
    q: "Czy potrzebuję doświadczenia w marketingu?",
    a: `Nie. Kurs jest zaprojektowany od zera — zakładam tylko, że masz pomysł na siebie, a brakuje ci struktury. Prowadzę krok po kroku od „kim jestem jako twórca" do „co publikuję w przyszłym tygodniu". Żadnego korpo-marketingu, żadnych funnel-hacków — pracujesz na swojej marce.`,
  },
  {
    q: "Kiedy ruszy pełna aplikacja?",
    a: "Aktualnie jesteśmy w zamkniętej becie — dostęp dostają użytkownicy lifetime. Publiczny start subskrypcji planujemy w Q3 2026, po fazie stabilizacji i zebraniu feedbacku z bety.",
  },
  {
    q: "Czym różni się lifetime od subskrypcji?",
    a: "Lifetime to jednorazowe 399 zł — dostajesz dostęp do bety od zaraz, wszystko z kursu, rok aplikacji w cenie i 20% rabatu na kolejne lata. Subskrypcja to 79 zł/mies, ale otworzy się dopiero po becie.",
  },
  {
    q: "Czy kurs jest po polsku?",
    a: "Tak — cały kurs Nikodema (10 lekcji, ok. 2h) jest po polsku. Aplikacja też. Obsługuje treści pisane w dowolnym języku, ale interfejs i kurs — tylko PL (EN w planach post-MVP).",
  },
  {
    q: "Co jeśli nie będzie mi się podobać?",
    a: "14 dni gwarancji zwrotu — bez pytań. Dotyczy zarówno kursu 199 zł, jak i lifetime 399 zł. Wystarczy mail na hello@ndt.pl.",
  },
  {
    q: "Ile miejsc lifetime zostało?",
    a: "Pula 30 miejsc — aktualny stan pokazujemy na stronie zakupu w czasie rzeczywistym. Gdy zamkniemy lifetime, zostanie tylko subskrypcja po becie.",
  },
];

export function FaqAndFinalCta() {
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
          {/* FAQ */}
          <div>
            <SectionHead n="08" title="FAQ" right="ostatnie wątpliwości" />
            <div className="space-y-2.5">
              {faqs.map((f, i) => (
                <FaqItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div>
            <SectionHead n="09" title="Dołącz teraz" right="finał" />
            <div
              className="relative rounded-2xl border-[2.5px] border-ink bg-gradient-to-br from-brand-soft via-white to-brand-soft/40 shadow-[6px_6px_0_0_hsl(266_51%_16%)] p-7 md:p-8"
            >
              {/* Decorative scribble */}
              <span
                className="absolute -top-7 -right-5 font-scribble scribble-sticker text-brand text-xl md:text-2xl z-10"
                style={{ transform: "rotate(6deg)" }}
              >
                ✦ od dziś
              </span>

              <h3 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-ink leading-tight">
                Zacznij budować{" "}
                <span className="italic text-brand">system</span>.
              </h3>
              <p className="mt-3 text-[15px] text-ink/75 leading-relaxed">
                Kurs masz od zaraz. Aplikację — jako jeden z pierwszych, jeśli
                wybierzesz lifetime.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full"
                  rightIcon={<ArrowRight className="size-4" />}
                >
                  Zacznij od 199 zł
                </Button>
                <Button size="lg" variant="secondary" className="w-full">
                  Chcę lifetime (399 zł)
                </Button>
              </div>

              <div className="mt-5 flex items-start gap-2 text-[12px] text-muted">
                <MessageCircle className="size-3.5 text-brand shrink-0 mt-1" />
                <span className="font-hand text-[14px] leading-snug">
                  Discord polski-startup — otwarty dla wszystkich.
                  <br />
                  Zamknięta grupa NDT tylko dla lifetime.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={cn(
        "rounded-xl border bg-white/80 transition-all",
        open
          ? "border-brand/30 shadow-[0_8px_24px_-12px_hsl(286_86%_57%_/_0.3)]"
          : "border-border-soft hover:border-brand/20",
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4"
      >
        <span className="font-hand text-[17px] md:text-[18px] text-ink">
          {question}
        </span>
        <Plus
          className={cn(
            "size-4 text-brand shrink-0 transition-transform duration-300",
            open && "rotate-45",
          )}
          strokeWidth={2.5}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[14px] text-ink/75 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
