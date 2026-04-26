import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHead } from "@/components/ui/SectionHead";
import { StrategyMockup } from "@/components/mockups/StrategyMockup";
import { InspirationMockup } from "@/components/mockups/InspirationMockup";
import { EditorMockup } from "@/components/mockups/EditorMockup";
import { ExportMockup } from "@/components/mockups/ExportMockup";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

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

export function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      steps.forEach((_, i) => {
        gsap.set(`[data-step="${i}"] [data-mockup]`, {
          rotate: i % 2 === 1 ? -1 : 1,
        });
      });

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
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative">
      <div className="mx-auto max-w-[1200px] px-6 pt-14 md:pt-20">
        <SectionHead n="05" title="Jak to działa" right="4 kroki, jeden flow" />
      </div>

      <div className="pb-12">
        {steps.map((s, i) => {
          const reversed = i % 2 === 1;
          const Mockup = s.Mockup;

          return (
            <div key={s.t} data-step={i} className="py-14 md:py-20">
              <div className="mx-auto max-w-[1200px] w-full px-6">
                <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-center">
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

                  <div
                    data-mockup
                    className={`relative ${reversed ? "md:order-1" : ""}`}
                  >
                    <Mockup className="w-full max-w-[540px] mx-auto shadow-[0_20px_40px_-16px_hsl(266_51%_16%_/_0.2)]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
