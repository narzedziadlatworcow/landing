import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Box } from "@/components/ui/Box";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const quotes = [
  {
    text: "Otwierasz Notion. Pustka.",
    rotate: -1.5,
    tape: { color: "bg-yellow-200", rotate: -8, top: -10, left: "24px" as string | number },
  },
  {
    text: "ChatGPT pisze „ładnie”, ale nie Twoim głosem.",
    rotate: 1,
    tape: { color: "bg-pink-200", rotate: 6, top: -9, right: "28px" as string | number },
  },
  {
    text: "Masz 40 pomysłów i 0 wykonanych.",
    rotate: -0.5,
    tape: { color: "bg-violet-200", rotate: -4, top: -10, left: "50%" as string | number },
  },
];

export function Problem() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-problem-card]", { opacity: 1, scale: 1, y: 0 });
        gsap.set("[data-problem-outro]", { opacity: 1, y: 0 });
        return;
      }

      gsap.set("[data-problem-card]", { opacity: 0, scale: 0.88, y: 30 });
      gsap.set("[data-problem-outro]", { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to('[data-problem-index="1"]', { opacity: 1, scale: 1, y: 0, duration: 1 })
        .to('[data-problem-index="1"]', { opacity: 0, scale: 0.9, y: -20, duration: 0.7 }, "+=1")
        .to('[data-problem-index="2"]', { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.3")
        .to('[data-problem-index="2"]', { opacity: 0, scale: 0.9, y: -20, duration: 0.7 }, "+=1")
        .to('[data-problem-index="3"]', { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.3")
        .to("[data-problem-outro]", { opacity: 1, y: 0, duration: 1 }, "+=1");

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "+=228%",
        pin: true,
        scrub: 1,
        animation: tl,
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="produkt" className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 min-h-screen flex flex-col justify-center">
        <SectionHead n="02" title="Znasz to uczucie?" right="lekki problem" />

        <div className="relative mt-10 flex-1 grid place-items-center min-h-[280px] md:min-h-[320px]">
          {quotes.map((q, i) => (
            <div
              key={i}
              data-problem-card
              data-problem-index={i + 1}
              className="absolute w-full max-w-[520px] px-6"
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
                  className="p-8 md:p-10 min-h-[180px] flex items-center bg-white/90"
                >
                  <p className="font-hand text-[24px] md:text-[32px] text-ink/90 leading-snug">
                    „{q.text}”
                  </p>
                </Box>
              </div>
            </div>
          ))}
        </div>

        <div data-problem-outro className="mt-10 text-center">
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
