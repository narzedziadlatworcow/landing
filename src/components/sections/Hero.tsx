import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StrategyMockup } from "@/components/mockups/StrategyMockup";
import { EditorMockup } from "@/components/mockups/EditorMockup";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

function splitWords(text: string) {
  // Split preserving spaces. Each word is a nowrap container so chars don't break mid-word.
  const tokens = text.split(/(\s+)/); // keeps whitespace tokens
  return tokens.map((token, ti) => {
    if (/^\s+$/.test(token)) {
      return (
        <span key={`s${ti}`} data-char style={{ opacity: 0, whiteSpace: "pre" }}>
          {token}
        </span>
      );
    }
    return (
      <span
        key={`w${ti}`}
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {Array.from(token).map((ch, ci) => (
          <span
            key={ci}
            data-char
            style={{ opacity: 0, display: "inline-block" }}
          >
            {ch}
          </span>
        ))}
      </span>
    );
  });
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();

      if (reduced) {
        gsap.set("[data-char]", { opacity: 1 });
        gsap.set("[data-hero-scribble]", { strokeDashoffset: 0 });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "none" } });
      intro
        .to("[data-char]", {
          opacity: 1,
          duration: 0.01,
          stagger: 0.022,
          delay: 0.1,
        })
        .to(
          "[data-hero-scribble]",
          { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" },
          ">+=0.1",
        );
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="mx-auto max-w-[1200px] w-full px-6">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          {/* Copy column */}
          <div>

            <h1 className="font-semibold tracking-tight text-ink leading-[1.02] text-[44px] sm:text-[56px] md:text-[64px]">
              {splitWords("Nadaj treściom ")}
              <span className="relative italic text-brand">
                {splitWords("kierunek")}
                <svg
                  viewBox="0 0 220 12"
                  className="absolute left-0 -bottom-2 w-full h-3"
                  aria-hidden
                >
                  <path
                    data-hero-scribble
                    d="M2 8 Q 55 2, 110 6 T 218 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="240"
                    strokeDashoffset="240"
                  />
                </svg>
              </span>
              {splitWords(".")}
            </h1>

            <p className="mt-6 text-ink/75 text-[16px] leading-relaxed max-w-[520px]">
              Od strategii do gotowych scenariuszy — w jednej sesji. Dla twórców,
              którzy chcą wreszcie wiedzieć, co publikować.
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

            {/* Author attribution */}
            <div className="mt-10 flex items-center gap-3.5">
              <img
                src="/nikodem-professional.jpg"
                alt="Nikodem Rudziński"
                className="size-14 rounded-full object-cover border-2 border-white shadow-[0_6px_14px_-2px_hsl(266_51%_16%_/_0.25)]"
              />
              <div className="leading-tight">
                <div className="font-hand text-[20px] text-ink">
                  Od <b>@Szhakal</b> — twórcy, który przeszedł tę drogę.
                </div>
                <div className="text-[12.5px] text-muted mt-1">
                  631K na TikToku · 151K na Instagramie
                </div>
              </div>
            </div>
          </div>

          {/* Mockup column — editorial scrapbook stack */}
          <div className="relative min-h-[480px] md:min-h-[560px]">
            {/* Editor — peek z prawej-dolnej, za Strategy. Tylko desktop. */}
            <div
              className="hidden md:block absolute bottom-[-12px] right-[-56px] w-[420px] z-0 pointer-events-none"
              style={{ transform: "rotate(6deg)" }}
            >
              <EditorMockup className="w-full" />
            </div>

            {/* Strategy — z przodu, główna karta */}
            <div className="absolute inset-x-0 top-[60px] md:top-[24px] flex justify-center md:justify-start z-10 pointer-events-none">
              <div style={{ transform: "rotate(-3deg)" }}>
                <StrategyMockup className="w-[320px] md:w-[360px]" />
              </div>
            </div>

            {/* Handwritten flow labels */}
            <span
              className="absolute top-0 left-[10px] md:-top-4 md:-left-2 font-scribble scribble-sticker text-brand text-xl md:text-2xl z-20 pointer-events-none"
              style={{ transform: "rotate(-6deg)" }}
            >
              ① strategia, którą rozumiesz
            </span>
            <span
              className="hidden md:block absolute bottom-[-4px] right-[-8px] font-scribble scribble-sticker text-ink/85 text-xl z-20 pointer-events-none"
              style={{ transform: "rotate(4deg)" }}
            >
              ② gotowe scenariusze →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
