import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHead } from "@/components/ui/SectionHead";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

function splitWords(text: string, italic = false) {
  const tokens = text.split(/(\s+)/);
  return tokens.map((token, ti) => {
    if (/^\s+$/.test(token)) {
      return (
        <span
          key={`s${ti}`}
          data-manifest-char
          style={{ opacity: 0, whiteSpace: "pre" }}
        >
          {token}
        </span>
      );
    }
    return (
      <span
        key={`w${ti}`}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontStyle: italic ? "italic" : undefined,
        }}
      >
        {Array.from(token).map((ch, ci) => (
          <span
            key={ci}
            data-manifest-char
            style={{ opacity: 0, display: "inline-block" }}
          >
            {ch}
          </span>
        ))}
      </span>
    );
  });
}

export function Manifest() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-manifest-char]", { opacity: 1 });
        gsap.set("[data-manifest-strike]", { strokeDashoffset: 0 });
        gsap.set("[data-manifest-subcopy]", { opacity: 1, y: 0 });
        return;
      }

      gsap.set("[data-manifest-subcopy]", { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to("[data-manifest-char]", {
        opacity: 1,
        duration: 0.01,
        stagger: 0.018,
      })
        .to({}, { duration: 0.3 }) // dramatic pause after text is written
        .to("[data-manifest-strike]", {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          "[data-manifest-subcopy]",
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.15",
        );

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: isMobile ? "+=100%" : "+=143%",
        pin: true,
        scrub: 1,
        animation: tl,
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative">
      <div className="mx-auto max-w-[1200px] px-6 min-h-screen flex flex-col justify-center py-20 md:py-28">
        <SectionHead n="04" title="Manifest" align="center" />

        <h2 className="mx-auto max-w-[820px] text-center tracking-tight text-ink leading-[1.12] text-[30px] sm:text-[36px] md:text-[52px]">
          {splitWords("Wierzymy, że tworzenie ")}
          {splitWords("zasługuje", true)}
          <br />
          {splitWords("na lepsze narzędzia niż ")}
          <span className="relative inline-block">
            {splitWords("15 zakładek")}
            <svg
              viewBox="0 0 220 20"
              className="absolute left-[-4%] top-1/2 -translate-y-1/2 w-[108%] h-[0.55em] text-brand pointer-events-none"
              aria-hidden
              preserveAspectRatio="none"
            >
              <path
                data-manifest-strike
                d="M2 12 Q 60 4, 110 11 T 218 8"
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
        </h2>

        <p
          data-manifest-subcopy
          className="mx-auto max-w-[600px] text-center text-[17px] md:text-[19px] text-ink/70 mt-8 leading-relaxed"
        >
          Zrobiłem to narzędzie, którego sam
          <br />
          potrzebowałem przez ostatnie 5 lat.
        </p>
      </div>
    </section>
  );
}
