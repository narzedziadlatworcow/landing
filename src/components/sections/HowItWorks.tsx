import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { StrategyMockup } from "@/components/mockups/StrategyMockup";
import { InspirationMockup } from "@/components/mockups/InspirationMockup";
import { EditorMockup } from "@/components/mockups/EditorMockup";
import { ExportMockup } from "@/components/mockups/ExportMockup";

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
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead n="05" title="Jak to działa" right="4 kroki, jeden flow" />

        <div className="space-y-8 md:space-y-10">
          {steps.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.t}
                className="relative grid md:grid-cols-[1fr_1.15fr] gap-6 md:gap-12 items-center"
              >
                {/* Copy column */}
                <div className={reversed ? "md:order-2" : ""}>
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
                  className={`relative ${reversed ? "md:order-1" : ""}`}
                  style={{ transform: `rotate(${reversed ? -1 : 1}deg)` }}
                >
                  <s.Mockup className="w-full max-w-[540px] mx-auto shadow-[0_20px_40px_-16px_hsl(266_51%_16%_/_0.2)]" />
                </div>

                {/* Connector arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 text-muted/60">
                    <ArrowRight
                      className="size-5 rotate-90"
                      strokeWidth={2.5}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
