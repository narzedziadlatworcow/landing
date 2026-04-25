import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Box } from "@/components/ui/Box";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const quotes = [
  {
    text: "Otwierasz Notion. Pustka.",
    rotate: -2,
    tape: { color: "bg-yellow-200", rotate: -8, top: -10, left: 24 },
    // Desktop: top-left scattered. Mobile: top of stack.
    pos: "top-0 left-0 md:left-[2%]",
    enter: { x: -50, y: -30 },
  },
  {
    text: "ChatGPT pisze „ładnie”, ale nie Twoim głosem.",
    rotate: 1.2,
    tape: { color: "bg-pink-200", rotate: 6, top: -9, right: 28 },
    // Desktop: middle-right. Mobile: middle, right-aligned.
    pos: "top-[36%] md:top-1/2 md:-translate-y-1/2 right-0 md:right-[3%]",
    enter: { x: 70, y: 0 },
  },
  {
    text: "Masz 40 pomysłów i 0 wykonanych.",
    rotate: -1.5,
    tape: { color: "bg-violet-200", rotate: -4, top: -10, left: "50%" },
    // Desktop: bottom-left. Mobile: bottom, slightly indented.
    pos: "bottom-0 left-0 md:left-[18%]",
    enter: { x: -30, y: 60 },
  },
];

export function Problem() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-quote]", { opacity: 1, scale: 1, x: 0, y: 0 });
        gsap.set("[data-problem-outro]", { opacity: 1, y: 0 });
        return;
      }

      // Initial — all hidden, off-position per their entry direction
      quotes.forEach((q, i) => {
        gsap.set(`[data-quote="${i}"]`, {
          opacity: 0,
          scale: 0.85,
          x: q.enter.x,
          y: q.enter.y,
        });
      });
      gsap.set("[data-problem-outro]", { opacity: 0, y: 18 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 65%",
          once: true,
        },
      });

      // Każda karta laduje z overshoot przez 0.55s, stagger 0.4s — user widzi
      // jak każda osiada zanim startuje następna. Outro po pauzie 0.15s.
      tl.to('[data-quote="0"]', {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.55,
        ease: "back.out(1.8)",
      })
        .to(
          '[data-quote="1"]',
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.55,
            ease: "back.out(1.8)",
          },
          "-=0.15",
        )
        .to(
          '[data-quote="2"]',
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.55,
            ease: "back.out(1.8)",
          },
          "-=0.15",
        )
        .to(
          "[data-problem-outro]",
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "+=0.15",
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="produkt" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead n="02" title="Znasz to uczucie?" right="lekki problem" />

        <div className="relative mt-8 md:mt-10 min-h-[520px] md:min-h-[440px]">
          {quotes.map((q, i) => (
            <div
              key={i}
              data-quote={i}
              className={`absolute w-full max-w-[320px] md:max-w-[400px] ${q.pos}`}
              style={{ transform: `rotate(${q.rotate}deg)` }}
            >
              <div className="relative">
                <span
                  className={`absolute ${q.tape.color} opacity-85 w-14 h-4 shadow-sm rounded-sm`}
                  style={{
                    top: q.tape.top,
                    left: q.tape.left,
                    right: q.tape.right,
                    transform: `rotate(${q.tape.rotate}deg) translateX(${
                      q.tape.left === "50%" ? "-50%" : "0"
                    })`,
                  }}
                />
                <Box
                  variant="dashed"
                  className="p-6 md:p-8 min-h-[130px] md:min-h-[150px] flex items-center bg-white/90"
                >
                  <p className="font-hand text-[20px] md:text-[26px] text-ink/90 leading-snug">
                    „{q.text}”
                  </p>
                </Box>
              </div>
            </div>
          ))}
        </div>

        <div data-problem-outro className="mt-10 md:mt-14 text-center">
          <span
            className="inline-block font-scribble text-[22px] md:text-2xl text-brand"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            ↓ to nie Twoja wina. Brakuje systemu.
          </span>
        </div>
      </div>
    </section>
  );
}
