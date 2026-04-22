import { useRef } from "react";
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

export function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-step]", { opacity: 1, x: 0 });
        gsap.set('[data-dot="0"]', { backgroundColor: "hsl(286 86% 57%)", scale: 1.3 });
        return;
      }

      gsap.set("[data-step]", { opacity: 0, y: 80 });
      gsap.set('[data-step="0"]', { opacity: 1, y: 0 });
      gsap.set('[data-dot="0"]', { backgroundColor: "hsl(286 86% 57%)", scale: 1.3 });

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      for (let i = 0; i < steps.length - 1; i++) {
        const cur = `[data-step="${i}"]`;
        const next = `[data-step="${i + 1}"]`;
        const curDot = `[data-dot="${i}"]`;
        const nextDot = `[data-dot="${i + 1}"]`;

        tl.to({}, { duration: 0.8 }) // hold current
          .to(cur, { opacity: 0, y: -80, duration: 0.4 })
          .fromTo(
            next,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 0.4 },
            "<",
          )
          .to(
            curDot,
            { backgroundColor: "hsl(266 51% 16% / 0.2)", scale: 1, duration: 0.25 },
            "<",
          )
          .to(
            nextDot,
            { backgroundColor: "hsl(286 86% 57%)", scale: 1.3, duration: 0.25 },
            "<",
          );
      }
      tl.to({}, { duration: 0.8 }); // final hold

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "+=260%",
        pin: true,
        scrub: 1,
        animation: tl,
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative">
      <div className="mx-auto max-w-[1200px] px-6 min-h-screen flex flex-col justify-center py-16">
        <SectionHead n="05" title="Jak to działa" right="4 kroki, jeden flow" />

        <div className="relative mt-10 flex-1 grid place-items-center min-h-[480px] md:min-h-[520px]">
          {steps.map((s, i) => (
            <div
              key={s.t}
              data-step={i}
              className="absolute inset-0 grid md:grid-cols-[1fr_1.15fr] gap-6 md:gap-12 items-center px-2"
            >
              {/* Copy column */}
              <div>
                <div className="flex items-start gap-4">
                  <div
                    className="size-10 rounded-xl bg-gradient-to-br from-brand to-brand-ring text-white font-bold grid place-items-center text-[15px] shadow-[0_4px_14px_-2px_hsl(286_86%_57%_/_0.4)] shrink-0"
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl md:text-[28px] font-semibold text-ink tracking-tight">
                        {s.t}
                      </h3>
                      <span className="font-hand text-brand text-[15px]">
                        {s.meta}
                      </span>
                    </div>
                    <p className="mt-3 text-ink/75 text-[16px] leading-relaxed max-w-[440px]">
                      {s.d}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mockup column */}
              <div
                className="relative"
                style={{ transform: `rotate(${i % 2 === 1 ? -1 : 1}deg)` }}
              >
                <s.Mockup className="w-full max-w-[540px] mx-auto shadow-[0_20px_40px_-16px_hsl(266_51%_16%_/_0.2)]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Step indicator — pionowy po prawej, fixed w obrębie pinowanej sekcji */}
      <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        {steps.map((_, i) => (
          <span
            key={i}
            data-dot={i}
            className="w-2 h-2 rounded-full bg-ink/20"
            style={{ transformOrigin: "center" }}
          />
        ))}
      </div>
    </section>
  );
}
