import { Check, X, Zap, ArrowRight, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHead } from "@/components/ui/SectionHead";
import { cn } from "@/lib/cn";

type PlanFeature = { t: string; off?: boolean };

const coursePlan = {
  eyebrow: "Start",
  title: "Kurs + Strategia",
  price: "199 zł",
  priceNote: "jednorazowo · dostęp dożywotni",
  features: [
    { t: "Pełny kurs „Nadaj treściom kierunek”" },
    { t: "Workbook strategii marki (PDF)" },
    { t: "Eksport gotowej strategii: MD, docx, pdf" },
    { t: "Szablony: serii, tematów, kalendarza" },
    { t: "Dostęp do aplikacji NDT", off: true },
  ] as PlanFeature[],
  cta: "Kup kurs",
  ctaVariant: "outline" as const,
};

const subPlan = {
  eyebrow: "Zajawka",
  title: "Aplikacja NDT",
  price: "79 zł",
  priceUnit: "/ mies",
  priceNote: "startuje Q3 2026 · 1 workspace",
  features: [
    { t: "Wszystko z kursu" },
    { t: "Aplikacja: research, pisanie, eksport" },
    { t: "Inspiracje + biblioteka marki" },
    { t: "1 workspace, 3 000 tokenów AI/mies" },
    { t: "Bez limitu na strategii i edytorze" },
  ] as PlanFeature[],
};

const lifetimePlan = {
  eyebrow: "Lifetime",
  title: "Wszystko + wejście do bety",
  subtitle: "Najlepszy deal, jeśli chcesz wejść teraz.",
  stack: [
    { t: "Kurs + Strategia", v: "199 zł" },
    { t: "1 rok aplikacji (79 zł × 12)", v: "948 zł" },
    { t: "Zamknięta społeczność", v: "bezcenne" },
    { t: "−20% na kolejne lata (na zawsze)", v: "∞" },
  ],
  total: "1 147 zł+",
  todayPrice: "399 zł",
  payoff: "≈ 65% taniej od sumy wartości",
  cta: "Chcę lifetime — wejdź do bety",
};

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <SectionHead
          n="07"
          title="Cennik — wybierz wejście"
          right="moment decyzji"
        />

        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-semibold tracking-tight text-ink leading-[1.08] text-[36px] md:text-[48px]">
            Kurs masz dziś.{" "}
            <span className="italic text-brand">Aplikację</span> —
            <br className="hidden md:block" />
            {" "}jako jeden z pierwszych.
          </h2>
          <p className="mt-4 text-ink/70 text-[16px] max-w-[620px] mx-auto">
            Subskrypcja otworzy się po becie. Lifetime daje dostęp do środka
            już teraz — i cenę zamrożoną na zawsze.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr_1.2fr] gap-5 md:gap-6 items-stretch">
          {/* PLAN 1 — Course + Strategy */}
          <PlanCard
            eyebrow={coursePlan.eyebrow}
            title={coursePlan.title}
            price={coursePlan.price}
            priceNote={coursePlan.priceNote}
          >
            <FeatureList items={coursePlan.features} />
            <Button
              variant="outline"
              size="lg"
              className="w-full mt-auto"
              rightIcon={<ArrowRight className="size-4" />}
            >
              {coursePlan.cta}
            </Button>
          </PlanCard>

          {/* PLAN 2 — Subscription (peek) */}
          <PlanCard
            eyebrow={subPlan.eyebrow}
            title={subPlan.title}
            price={subPlan.price}
            priceUnit={subPlan.priceUnit}
            priceNote={subPlan.priceNote}
            peek
          >
            <FeatureList items={subPlan.features} />
            <div className="mt-auto rounded-lg bg-white/70 p-3 text-center">
              <div className="font-hand text-[15px] text-ink/85">
                Chcesz wejść teraz?
              </div>
              <a
                href="#lifetime"
                className="text-[13px] font-semibold text-brand hover:underline inline-flex items-center gap-1 mt-1"
              >
                → Lifetime daje dostęp do bety
              </a>
            </div>
          </PlanCard>

          {/* PLAN 3 — Lifetime (Hormozi stack) */}
          <div
            id="lifetime"
            className="relative rounded-2xl p-6 md:p-7 bg-gradient-to-br from-white via-brand-soft/30 to-white border-[2.5px] border-ink shadow-[6px_6px_0_0_hsl(286_86%_57%)] flex flex-col"
          >
            {/* Top badges */}
            <div className="absolute -top-3.5 left-5 right-5 flex gap-1.5 flex-wrap">
              <Badge tone="brand">
                <Zap className="size-3" />
                Best value
              </Badge>
              <Badge tone="gold">
                30 miejsc w becie
              </Badge>
            </div>

            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand mt-2">
              {lifetimePlan.eyebrow}
            </div>
            <h3 className="mt-1 text-[22px] font-semibold text-ink leading-tight">
              {lifetimePlan.title}
            </h3>
            <p className="mt-1 text-[13px] text-muted">{lifetimePlan.subtitle}</p>

            {/* Value stack */}
            <div className="mt-5 rounded-xl bg-white border-[1.5px] border-ink p-3.5 space-y-1.5">
              {lifetimePlan.stack.map((s) => (
                <div
                  key={s.t}
                  className="flex items-center justify-between text-[13px]"
                >
                  <span className="text-ink/85">{s.t}</span>
                  <span className="font-hand text-[16px] text-ink">{s.v}</span>
                </div>
              ))}
              <div className="h-px bg-ink/80 my-2" />
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-muted">Wartość razem</span>
                <span className="line-through text-muted">
                  {lifetimePlan.total}
                </span>
              </div>
              <div className="flex items-end justify-between pt-1">
                <span className="text-[14px] font-semibold text-ink">
                  Płacisz dziś
                </span>
                <span className="text-[28px] font-bold text-brand leading-none">
                  {lifetimePlan.todayPrice}
                </span>
              </div>
            </div>

            <p className="mt-3 font-hand text-[14px] text-muted leading-snug">
              {lifetimePlan.payoff}
            </p>

            <Button
              variant="primary"
              size="lg"
              className="w-full mt-5"
              rightIcon={<ArrowRight className="size-4" />}
            >
              {lifetimePlan.cta}
            </Button>
          </div>
        </div>

        {/* Social proof row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-muted">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="size-3.5 text-brand" /> 540+ twórców w społeczności
          </span>
          <span className="text-border-soft">·</span>
          <span className="inline-flex items-center gap-2">
            <Shield className="size-3.5 text-brand" /> 14 dni gwarancji zwrotu
          </span>
          <span className="text-border-soft">·</span>
          <span className="inline-flex items-center gap-2">
            <Zap className="size-3.5 text-brand" /> Natychmiastowy dostęp do kursu
          </span>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  eyebrow,
  title,
  price,
  priceUnit,
  priceNote,
  peek,
  children,
}: {
  eyebrow: string;
  title: string;
  price: string;
  priceUnit?: string;
  priceNote: string;
  peek?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 flex flex-col",
        peek
          ? "bg-brand-soft/50 border-2 border-dashed border-brand/40"
          : "bg-white/90 border border-border-soft shadow-[0_10px_30px_-12px_hsl(266_51%_16%_/_0.15)]",
      )}
      style={peek ? { transform: "rotate(0.5deg)" } : undefined}
    >
      {peek && (
        <div className="absolute -top-3 right-5">
          <Badge tone="brand">Wkrótce</Badge>
        </div>
      )}

      <div
        className={cn(
          "text-[11px] font-semibold tracking-[0.18em] uppercase",
          peek ? "text-brand" : "text-muted",
        )}
      >
        {eyebrow}
      </div>
      <h3 className="mt-1 text-[20px] font-semibold text-ink">{title}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-[36px] font-bold leading-none tracking-tight text-ink">
          {price}
        </span>
        {priceUnit && (
          <span className="text-[14px] text-muted font-normal">{priceUnit}</span>
        )}
      </div>
      <div className="mt-1.5 text-[12px] text-muted">{priceNote}</div>
      <div
        className={cn(
          "my-5 h-px",
          peek ? "bg-brand/20" : "bg-border-soft",
        )}
      />
      {children}
    </div>
  );
}

function FeatureList({ items }: { items: PlanFeature[] }) {
  return (
    <ul className="space-y-2 mb-5 flex-1">
      {items.map((f, i) => (
        <li
          key={i}
          className={cn(
            "flex items-start gap-2 text-[13.5px] leading-snug",
            f.off ? "text-muted" : "text-ink/85",
          )}
        >
          {f.off ? (
            <X className="size-4 text-muted/70 shrink-0 mt-0.5" strokeWidth={2.25} />
          ) : (
            <Check className="size-4 text-brand shrink-0 mt-0.5" strokeWidth={2.5} />
          )}
          {f.t}
        </li>
      ))}
    </ul>
  );
}
