import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Plus, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { cn } from "@/lib/cn";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const faqs = [
  {
    q: "Co dokładnie dostaję za 199 zł?",
    a: `Pełny kurs Nikodema „Nadaj treściom kierunek" — 10 lekcji video w 5 sekcjach (ok. 2h), workbook strategii marki (PDF), szablony serii, tematów i kalendarza. Dostęp dożywotni z przyszłymi aktualizacjami. Dorzucam też 1 miesiąc aplikacji NDT w cenie — aktywuje się przy publicznym starcie (Q3 2026), żebyś mógł od razu przełożyć strategię na konkretne treści. Po miesiącu możesz przedłużyć subskrypcję (79 zł/mies). Jeśli chcesz wcześniej i z większą paczką wartości — sprawdź Pierwszą Trzydziestkę.`,
  },
  {
    q: "Czy potrzebuję doświadczenia w marketingu?",
    a: `Nie. Kurs jest zaprojektowany od zera — zakładam tylko, że masz pomysł na siebie, a brakuje ci struktury. Prowadzę krok po kroku od „kim jestem jako twórca" do „co publikuję w przyszłym tygodniu". Żadnego korpo-marketingu, żadnych funnel-hacków — pracujesz na swojej marce.`,
  },
  {
    q: "Kiedy ruszy pełna aplikacja?",
    a: "Aktualnie jesteśmy w zamkniętej becie — dostęp dostają osoby z Pierwszej Trzydziestki. Publiczny start subskrypcji planujemy w Q3 2026, po fazie stabilizacji i zebraniu feedbacku z bety.",
  },
  {
    q: "Co to jest Pierwsza Trzydziestka?",
    a: "Limitowane wejście dla 30 osób które chcą wejść do NDT zanim ruszy publicznie. Za 599 zł dostajesz cały kurs, 1 rok aplikacji w cenie (po publicznym starcie), 1:1 onboarding (60 min), dostęp do zamkniętej grupy, realny wpływ na rozwój aplikacji oraz 20% promocji na zawsze. Pakt jest prosty: ty wchodzisz wcześniej i masz wpływ, my dostajemy realny feedback od osób które naprawdę używają NDT.",
  },
  {
    q: "Czy kurs jest po polsku?",
    a: "Tak — cały kurs Nikodema (10 lekcji, ok. 2h) jest po polsku. Aplikacja też. Obsługuje treści pisane w dowolnym języku, ale interfejs i kurs — tylko PL (EN w planach post-MVP).",
  },
  {
    q: "Co jeśli nie będzie mi się podobać?",
    a: "14 dni gwarancji zwrotu — bez pytań. Dotyczy zarówno kursu 199 zł, jak i Pierwszej Trzydziestki 599 zł. Wystarczy mail na hello@ndt.pl.",
  },
  {
    q: "Ile miejsc w Pierwszej Trzydziestce zostało?",
    a: "Pula 30 miejsc — aktualny stan pokazujemy na stronie zakupu w czasie rzeczywistym. Gdy się skończą, zostanie tylko subskrypcja po publicznym starcie.",
  },
];

export function FaqAndFinalCta() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // FAQ — cała lista pojawia się jednocześnie gdy nagłówek FAQ wjedzie w viewport.
      gsap.set("[data-faq-item]", { opacity: 0, y: 18 });
      gsap.to("[data-faq-item]", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-faq-list]",
          start: "top 80%",
          once: true,
        },
      });

      // Final CTA — peak-end emphasis: karta z lekkim overshoot, potem content
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-cta-card]",
          start: "top 55%",
          once: true,
        },
      });

      ctaTl
        .from("[data-cta-card]", {
          opacity: 0,
          scale: 0.94,
          y: 26,
          duration: 0.75,
          ease: "back.out(1.6)",
        })
        .from(
          "[data-cta-title]",
          { opacity: 0, y: 18, duration: 0.6, ease: "power2.out" },
          "-=0.35",
        )
        .from(
          "[data-cta-desc]",
          { opacity: 0, y: 16, duration: 0.55, ease: "power2.out" },
          "-=0.4",
        )
        .from(
          "[data-cta-buttons] > *",
          {
            opacity: 0,
            y: 16,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.12,
          },
          "-=0.38",
        )
        .from(
          "[data-cta-footer]",
          { opacity: 0, y: 14, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .from(
          "[data-cta-scribble]",
          {
            opacity: 0,
            rotate: 18,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(2)",
          },
          "-=0.5",
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="faq" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
          {/* FAQ */}
          <div>
            <SectionHead n="08" title="FAQ" right="ostatnie wątpliwości" />
            <div data-faq-list className="space-y-2.5">
              {faqs.map((f, i) => (
                <div key={i} data-faq-item>
                  <FaqItem question={f.q} answer={f.a} defaultOpen={i === 0} />
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div>
            <SectionHead n="09" title="Dołącz teraz" right="finał" />
            <div
              data-cta-card
              className="relative rounded-2xl border-[2.5px] border-ink bg-gradient-to-br from-brand-soft via-white to-brand-soft/40 shadow-[6px_6px_0_0_hsl(266_51%_16%)] p-7 md:p-8"
            >

              <h3
                data-cta-title
                className="text-[28px] md:text-[32px] font-semibold tracking-tight text-ink leading-tight"
              >
                Zacznij budować{" "}
                <span className="italic text-brand">system</span>.
              </h3>
              <p
                data-cta-desc
                className="mt-3 text-[15px] text-ink/75 leading-relaxed"
              >
                Kurs masz od zaraz. Aplikację — gdy ruszy publicznie. A jeśli
                chcesz wcześniej, jest Pierwsza Trzydziestka.
              </p>

              <div data-cta-buttons className="mt-7 flex flex-col gap-3">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full"
                  rightIcon={<ArrowRight className="size-4" />}
                >
                  Zacznij od 199 zł
                </Button>
                <a href="#pierwsza-trzydziestka" className="block">
                  <Button size="lg" variant="secondary" className="w-full">
                    Pierwsza Trzydziestka — 599 zł
                  </Button>
                </a>
              </div>

              <div
                data-cta-footer
                className="mt-5 flex items-start gap-2 text-[12px] text-muted"
              >
                <MessageCircle className="size-3.5 text-brand shrink-0 mt-1" />
                <span className="font-hand text-[14px] leading-snug">
                  Discord polski-startup — otwarty dla wszystkich.
                  <br />
                  Zamknięte kanały NDT — tylko dla Pierwszej Trzydziestki.
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
        <span className="font-semibold text-[15px] md:text-[16px] text-ink leading-snug">
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
