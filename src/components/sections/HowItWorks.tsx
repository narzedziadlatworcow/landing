import { useRef, Fragment } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHead } from "@/components/ui/SectionHead";
import { StrategyMockup } from "@/components/mockups/StrategyMockup";
import { InspirationMockup } from "@/components/mockups/InspirationMockup";
import { EditorMockup } from "@/components/mockups/EditorMockup";
import { ExportMockup } from "@/components/mockups/ExportMockup";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const steps = [
  {
    t: "Strategia",
    d: "7 etapów: Kanały, Tożsamość, Cele, Odbiorcy, Styl, Oferta, Serie treści. AI prowadzi za rękę.",
    meta: "~75 min · jednorazowo",
    Mockup: StrategyMockup,
  },
  {
    t: "Research",
    d: "Feedy YouTube i RSS, search, zapisane. Inspiracje z AI scoringiem dopasowanym do niszy.",
    meta: "RSS · YouTube · zapisane",
    Mockup: InspirationMockup,
  },
  {
    t: "Pisanie",
    d: "Edytor z pamięcią marki. Każdy paragraf ma adnotacje: b-roll, grafiki, CTA, referencje.",
    meta: "31 formatów · AI w kontekście",
    Mockup: EditorMockup,
  },
  {
    t: "Eksport",
    d: "Markdown, docx, pdf. Kurs + strategia to kompletny dokument, który zabierasz ze sobą.",
    meta: ".md · .docx · .pdf",
    Mockup: ExportMockup,
  },
];

const ACTIVE = "hsl(286 86% 57%)";
const INACTIVE = "hsl(266 51% 16% / 0.2)";

export function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set('[data-dot="0"]', { backgroundColor: ACTIVE, scale: 1.3 });
        return;
      }

      // Initial: dot 0 active, mockupy z lekkim rotacjami scrapbookowymi
      gsap.set('[data-dot="0"]', { backgroundColor: ACTIVE, scale: 1.3 });
      steps.forEach((_, i) => {
        gsap.set(`[data-step="${i}"] [data-mockup]`, {
          rotate: i % 2 === 1 ? -1 : 1,
        });
      });

      // Per-step staggered entrance gdy krok wchodzi w viewport
      steps.forEach((_, i) => {
        const sel = (s: string) => `[data-step="${i}"] ${s}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `[data-step="${i}"]`,
            start: "top 70%",
            once: true,
          },
        });

        tl.from(sel("[data-num]"), {
          opacity: 0,
          scale: 0.6,
          duration: 0.45,
          ease: "back.out(2.2)",
        })
          .from(
            sel("[data-title]"),
            { opacity: 0, y: 22, duration: 0.45, ease: "power2.out" },
            "-=0.3",
          )
          .from(
            sel("[data-meta]"),
            {
              opacity: 0,
              rotate: -8,
              scale: 0.85,
              duration: 0.4,
              ease: "back.out(2)",
            },
            "-=0.32",
          )
          .from(
            sel("[data-desc]"),
            { opacity: 0, y: 14, duration: 0.45, ease: "power2.out" },
            "-=0.3",
          )
          .from(
            sel("[data-mockup]"),
            {
              opacity: 0,
              scale: 0.94,
              y: 28,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.4",
          );
      });

      // Indicator: aktywny dot zmienia się gdy step jest w środkowych 50% viewportu
      const activateDot = (active: number) => {
        gsap.to("[data-dot]", {
          backgroundColor: INACTIVE,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(`[data-dot="${active}"]`, {
          backgroundColor: ACTIVE,
          scale: 1.3,
          duration: 0.3,
          ease: "back.out(2)",
        });
      };

      steps.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `[data-step="${i}"]`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => activateDot(i),
          onEnterBack: () => activateDot(i),
        });
      });

      // Connector arrow draw — gdy connector wchodzi w viewport, rysuje linię
      steps.slice(0, -1).forEach((_, i) => {
        gsap.from(`[data-connector="${i}"] [data-connector-path]`, {
          strokeDashoffset: 200,
          duration: 0.7,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: `[data-connector="${i}"]`,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative">
      <div className="mx-auto max-w-[1200px] px-6 pt-14 md:pt-20">
        <SectionHead n="05" title="Jak to działa" right="4 kroki, jeden flow" />
      </div>

      {/* Wrapper kroków — relative dla sticky indicatora */}
      <div className="relative pb-12">
        {/* Sticky pionowy indicator */}
        <div className="absolute top-0 right-0 bottom-0 pointer-events-none z-10">
          <div className="sticky top-1/2 -translate-y-1/2 mr-4 md:mr-10 flex flex-col gap-3">
            {steps.map((_, i) => (
              <span
                key={i}
                data-dot={i}
                className="w-2 h-2 rounded-full bg-ink/20"
                style={{ transformOrigin: "center" }}
              />
            ))}
          </div>
        </div>

        {steps.map((s, i) => {
          const reversed = i % 2 === 1;
          const Mockup = s.Mockup;

          return (
            <Fragment key={s.t}>
              <div data-step={i} className="py-14 md:py-20">
                <div className="mx-auto max-w-[1200px] w-full px-6 pr-12 md:pr-16">
                  <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-center">
                    {/* Copy */}
                    <div className={reversed ? "md:order-2" : ""}>
                      <div className="flex items-start gap-4">
                        <div
                          data-num
                          className="size-10 rounded-xl bg-gradient-to-br from-brand to-brand-ring text-white font-bold grid place-items-center text-[15px] shadow-[0_4px_14px_-2px_hsl(286_86%_57%_/_0.4)] shrink-0"
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3
                              data-title
                              className="text-2xl md:text-[28px] font-semibold text-ink tracking-tight"
                            >
                              {s.t}
                            </h3>
                            <span
                              data-meta
                              className="font-hand text-brand text-[15px] inline-block"
                            >
                              {s.meta}
                            </span>
                          </div>
                          <p
                            data-desc
                            className="mt-3 text-ink/75 text-[16px] leading-relaxed max-w-[440px]"
                          >
                            {s.d}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mockup */}
                    <div
                      data-mockup
                      className={`relative ${reversed ? "md:order-1" : ""}`}
                    >
                      <Mockup className="w-full max-w-[540px] mx-auto shadow-[0_20px_40px_-16px_hsl(266_51%_16%_/_0.2)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Scribble connector — pomiędzy każdą parą kroków */}
              {i < steps.length - 1 && (
                <div
                  data-connector={i}
                  className="flex justify-center py-1 md:py-2"
                >
                  <svg
                    viewBox="0 0 40 100"
                    className="w-10 h-20 md:w-12 md:h-24 text-brand/65"
                    aria-hidden
                  >
                    <path
                      data-connector-path
                      d="M20 4 Q 28 24, 16 48 Q 8 70, 22 92 M22 92 L16 86 M22 92 L28 86"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
