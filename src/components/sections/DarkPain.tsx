import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const headline = "Bez strategii każdy post to";

export function DarkPain() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-darkpain-label], [data-darkpain-word], [data-darkpain-zgadywanka]", {
          opacity: 1,
          y: 0,
          x: 0,
        });
        gsap.set("[data-darkpain-scribble]", { strokeDashoffset: 0 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        "[data-darkpain-label]",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4 },
      )
        .fromTo(
          "[data-darkpain-word]",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.055 },
          "-=0.25",
        )
        .fromTo(
          "[data-darkpain-zgadywanka]",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.35 },
          ">-0.1",
        )
        .to(
          "[data-darkpain-scribble]",
          { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" },
          "-=0.15",
        );
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden"
      style={{ background: "hsl(270 30% 8%)" }}
    >
      <div
        className="relative mx-auto max-w-[1200px] px-6 py-9 md:py-10"
        style={{ color: "hsl(280 20% 92%)" }}
      >
        <div className="flex items-center gap-5 md:gap-8 flex-wrap">
          <span
            data-darkpain-label
            className="text-[11px] font-semibold tracking-[0.2em] uppercase shrink-0 inline-block"
            style={{ color: "hsl(271 15% 55%)" }}
          >
            03 — punkt bólu
          </span>
          <h2 className="flex-1 min-w-[280px] font-semibold tracking-tight leading-[1.15] text-[26px] md:text-[32px]">
            {headline.split(" ").map((w, i) => (
              <span
                key={i}
                data-darkpain-word
                className="inline-block"
                style={{ whiteSpace: "nowrap", marginRight: "0.25em" }}
              >
                {w}
              </span>
            ))}
            <span
              data-darkpain-zgadywanka
              className="relative inline-block"
            >
              zgadywanka
              <svg
                viewBox="0 0 220 12"
                className="absolute left-0 -bottom-1.5 w-full h-2.5 text-brand"
                aria-hidden
              >
                <path
                  data-darkpain-scribble
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
            .
          </h2>
        </div>
      </div>
    </section>
  );
}
