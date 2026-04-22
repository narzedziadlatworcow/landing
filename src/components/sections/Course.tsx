import { Play, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHead } from "@/components/ui/SectionHead";

const modules = [
  { n: "01", t: "Dlaczego strategia, a nie taktyka", time: "18 min" },
  { n: "02", t: "Nadaj treściom kierunek", time: "24 min" },
  { n: "03", t: "Twoja widownia — persony, które zamieniają się w klientów", time: "32 min" },
  { n: "04", t: "Ton, styl, serie — jak brzmieć jak Ty", time: "28 min" },
  { n: "05", t: "Produkcja bez wypalenia — szablon na tydzień", time: "22 min" },
];

export function Course() {
  return (
    <section
      id="kurs"
      className="relative py-20 md:py-24 bg-gradient-to-b from-brand-soft/70 via-brand-soft/40 to-transparent border-y border-brand/20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          n="06"
          title="Kurs — Nadaj treściom kierunek"
          right="prowadzi @Szhakal"
        />

        <div className="grid md:grid-cols-[1fr_1.05fr] gap-10 md:gap-14 items-center">
          {/* Left — pitch */}
          <div>
            <Badge tone="brand" className="mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              12 modułów · 3h 20min
            </Badge>

            <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight text-ink leading-[1.05]">
              Nikodem Rudziński
            </h2>
            <div className="font-hand text-[20px] text-muted mt-1.5">
              @Szhakal · 631K na TikToku · 151K Instagram
            </div>

            <p className="mt-6 text-[16px] text-ink/80 leading-relaxed max-w-[480px]">
              Kurs, który jest jednocześnie mapą produktu. Robisz ćwiczenia,
              wypełniasz strategię w aplikacji — kończysz z marką, a nie notesem
              notatek.
            </p>

            <ul className="mt-6 space-y-2.5 max-w-[480px]">
              {[
                "12 modułów video (3h 20min) z Nikodemem",
                "Workbook strategii marki (PDF)",
                "Szablony: serii, tematów, kalendarza",
                "Dożywotni dostęp + przyszłe aktualizacje",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2.5 text-[15px] text-ink/85">
                  <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" strokeWidth={2.25} />
                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight className="size-4" />}>
                Program kursu
              </Button>
              <Badge tone="muted">💬 540+ twórców w społeczności</Badge>
            </div>
          </div>

          {/* Right — thumb + curriculum */}
          <div className="relative">
            {/* Thumb */}
            <div
              className="relative rounded-2xl overflow-hidden border-[3px] border-ink shadow-[8px_8px_0_0_hsl(286_86%_57%)] aspect-video bg-gradient-to-br from-fuchsia-600 via-brand to-purple-800"
              style={{ transform: "rotate(-1deg)" }}
            >
              <img
                src="/hqdefault.webp"
                alt="Kurs Nikodem Rudziński"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              {/* Play button */}
              <button
                className="absolute inset-0 grid place-items-center group"
                aria-label="Zobacz zwiastun"
              >
                <span className="size-20 rounded-full bg-white/95 shadow-2xl grid place-items-center group-hover:scale-105 transition-transform">
                  <Play className="size-8 text-brand fill-brand ml-1" />
                </span>
              </button>
              {/* Caption */}
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase opacity-80">
                    Zwiastun
                  </div>
                  <div className="text-[14px] font-semibold">
                    Nadaj treściom kierunek · 2 min
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur border border-white/30 font-medium">
                  HD
                </span>
              </div>
            </div>

            {/* Curriculum peek */}
            <div
              className="mt-6 glass rounded-xl p-4 max-w-[440px] mx-auto shadow-lg"
              style={{ transform: "rotate(0.5deg)" }}
            >
              <div className="text-[10px] font-semibold tracking-widest uppercase text-muted mb-2.5">
                Program kursu
              </div>
              <ul className="space-y-1.5">
                {modules.map((m) => (
                  <li
                    key={m.n}
                    className="flex items-center gap-3 text-[13px] text-ink/85 hover:text-ink transition-colors"
                  >
                    <span className="text-brand font-mono font-semibold text-[11px] w-6">
                      {m.n}
                    </span>
                    <span className="flex-1 truncate">{m.t}</span>
                    <span className="text-[11px] text-muted tabular-nums">
                      {m.time}
                    </span>
                  </li>
                ))}
                <li className="text-[11px] text-muted italic text-center pt-1">
                  + 7 modułów głębi · strategia krok po kroku
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
