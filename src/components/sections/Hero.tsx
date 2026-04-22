import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StrategyMockup } from "@/components/mockups/StrategyMockup";
import { EditorMockup } from "@/components/mockups/EditorMockup";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-14 md:pt-20 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          {/* Copy column */}
          <div>
            <Badge tone="brand" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Early access · zamknięta beta
            </Badge>

            <h1 className="font-semibold tracking-tight text-ink leading-[1.02] text-[44px] sm:text-[56px] md:text-[64px]">
              Nadaj treściom{" "}
              <span className="relative italic text-brand">
                kierunek
                <svg
                  viewBox="0 0 220 12"
                  className="absolute left-0 -bottom-2 w-full h-3"
                  aria-hidden
                >
                  <path
                    d="M2 8 Q 55 2, 110 6 T 218 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-6 text-ink/75 text-[17px] leading-relaxed max-w-[520px]">
              Strategia marki, bank pomysłów i produkcja treści — w jednym miejscu.
              Stworzone dla twórców, którzy robią to na serio.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="size-4" />}
              >
                Zacznij od 199 zł
              </Button>
              <Button size="lg" variant="outline" leftIcon={<Play className="size-4" />}>
                Zobacz, co dostajesz
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand" /> natychmiastowy dostęp do kursu
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand" /> 14 dni gwarancji zwrotu
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand" /> 540+ twórców w społeczności
              </span>
            </div>

            {/* Author attribution */}
            <div className="mt-10 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-brand via-brand-ring to-fuchsia-400 text-white grid place-items-center font-bold text-sm shadow-[0_4px_10px_-2px_hsl(286_86%_57%_/_0.45)]">
                NR
              </div>
              <div className="font-hand text-[15px] text-ink/85 leading-tight">
                Od <b className="text-ink">@Szhakal</b> — twórcy, który przeszedł tę drogę.
                <div className="text-[12px] text-muted font-sans">
                  631K na TikToku · kurs „Nadaj treściom kierunek” wbudowany w produkt
                </div>
              </div>
            </div>
          </div>

          {/* Mockup column */}
          <div className="relative min-h-[480px] md:min-h-[520px]">
            {/* Strategy — main, rotate +1.5deg */}
            <div
              className="absolute top-0 right-0 w-[100%] max-w-[520px] float-slow"
              style={{ ["--rot" as string]: "1.5deg" }}
            >
              <div
                className="transform"
                style={{ transform: "rotate(1.5deg)" }}
              >
                <StrategyMockup />
              </div>
            </div>

            {/* Editor — smaller, rotate -3deg, bottom-left */}
            <div
              className="absolute bottom-0 -left-4 md:left-[-20px] w-[260px] md:w-[300px] float-slow"
              style={{ ["--rot" as string]: "-3deg", animationDelay: "1.2s" }}
            >
              <div
                className="transform"
                style={{ transform: "rotate(-3deg)" }}
              >
                <EditorMockup />
              </div>
            </div>

            {/* Floating scribble anno */}
            <span
              className="absolute top-[-12px] left-[10px] font-scribble text-brand text-2xl"
              style={{ transform: "rotate(-6deg)" }}
            >
              ✦ 7 etapów, 1 strategia
            </span>
            <span
              className="absolute bottom-[10px] right-[-6px] font-scribble text-ink/70 text-lg"
              style={{ transform: "rotate(4deg)" }}
            >
              → pamięć Twojej marki
            </span>
          </div>
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div
        className="absolute -top-20 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(286 86% 57% / 0.5) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}
