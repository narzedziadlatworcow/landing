import { SectionHead } from "@/components/ui/SectionHead";
import { Box } from "@/components/ui/Box";

const quotes = [
  {
    text: "Otwierasz Notion. Pustka.",
    rotate: -1.5,
    tape: { color: "bg-yellow-200", rotate: -8, top: -10, left: 24 },
  },
  {
    text: "ChatGPT pisze „ładnie”, ale nie Twoim głosem.",
    rotate: 1,
    tape: { color: "bg-pink-200", rotate: 6, top: -9, right: 28 },
  },
  {
    text: "Masz 40 pomysłów i 0 wykonanych.",
    rotate: -0.5,
    tape: { color: "bg-violet-200", rotate: -4, top: -10, left: "50%" },
  },
];

export function Problem() {
  return (
    <section id="produkt" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead n="02" title="Znasz to uczucie?" right="lekki problem" />

        <div className="grid md:grid-cols-3 gap-5 md:gap-7 mt-6">
          {quotes.map((q, i) => (
            <div key={i} className="relative" style={{ transform: `rotate(${q.rotate}deg)` }}>
              {/* Tape */}
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
                className="p-6 md:p-7 min-h-[150px] flex items-center bg-white/70"
              >
                <p className="font-hand text-[19px] md:text-[21px] text-ink/90 leading-snug">
                  „{q.text}”
                </p>
              </Box>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
