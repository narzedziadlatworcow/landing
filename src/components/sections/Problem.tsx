import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHead } from "@/components/ui/SectionHead";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const quotes = [
  {
    text: "Otwierasz Notion. Pustka.",
    rotate: -2,
    tape: { rotate: -8, top: -10, left: 24 },
    pos: "top-0 left-0 md:left-[2%]",
    enter: { x: -50, y: -30 },
  },
  {
    text: "ChatGPT pisze „ładnie”, ale nie Twoim głosem.",
    rotate: 1.2,
    tape: { rotate: 6, top: -9, right: 28 },
    pos: "top-[36%] md:top-1/2 md:-translate-y-1/2 right-0 md:right-[3%]",
    enter: { x: 70, y: 0 },
  },
  {
    text: "Masz 40 pomysłów i 0 wykonanych.",
    rotate: -1.5,
    tape: { rotate: -4, top: -10, left: "50%" },
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
        return;
      }

      quotes.forEach((q, i) => {
        gsap.set(`[data-quote="${i}"]`, {
          opacity: 0,
          scale: 0.85,
          x: q.enter.x,
          y: q.enter.y,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 65%",
          once: true,
        },
      });

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
                  className="absolute bg-gold-bg w-14 h-4 rounded-sm shadow-[0_1px_3px_hsl(266_51%_16%_/_0.12)]"
                  style={{
                    top: q.tape.top,
                    left: q.tape.left,
                    right: q.tape.right,
                    transform: `rotate(${q.tape.rotate}deg) translateX(${
                      q.tape.left === "50%" ? "-50%" : "0"
                    })`,
                  }}
                />
                <div className="bg-white border border-border-soft rounded-xl shadow-[0_10px_30px_-12px_hsl(266_51%_16%_/_0.18)] p-6 md:p-8 min-h-[130px] md:min-h-[150px] flex items-center">
                  <p className="font-hand text-[20px] md:text-[26px] text-ink/90 leading-snug">
                    „{q.text}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
