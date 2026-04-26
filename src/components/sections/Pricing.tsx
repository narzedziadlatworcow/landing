import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Check, X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHead } from "@/components/ui/SectionHead";
import { cn } from "@/lib/cn";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

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
    { t: "Aplikacja NDT — 1 miesiąc w cenie (od publicznego startu, Q3 2026)" },
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

const pierwszaTrzydziestkaPlan = {
  eyebrow: "Pierwsza Trzydziestka",
  title: "Wczesny dostęp + 1 rok aplikacji",
  subtitle: "Dla 30 osób które wchodzą zanim ruszy publicznie.",
  stack: [
    { t: "Kurs + Strategia", v: "199 zł" },
    { t: "1 rok aplikacji (79 zł × 12)", v: "948 zł" },
    { t: "1:1 onboarding", v: "60 min" },
    { t: "Dostęp do zamkniętej grupy", v: "bezcenne" },
    { t: "Wpływ na rozwój aplikacji", v: "bezcenne" },
    { t: "20% promocji na zawsze", v: "∞" },
  ],
  total: "1 147 zł+",
  todayPrice: "599 zł",
  payoff: "≈ 48% taniej + dostęp do bety od zaraz",
  cta: "Dołącz do Pierwszej Trzydziestki",
};

export function Pricing() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 45%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      tl.from("[data-pricing-headline]", {
        opacity: 0,
        y: 18,
        duration: 0.7,
      })
        .from(
          "[data-pricing-sub]",
          { opacity: 0, y: 16, duration: 0.6 },
          "-=0.4",
        )
        .from(
          "[data-pricing-card]",
          { opacity: 0, y: 30, duration: 0.75, stagger: 0.15 },
          "-=0.3",
        )
        .from(
          "[data-pricing-trust]",
          { opacity: 0, y: 14, duration: 0.55 },
          "-=0.25",
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="pricing" className="py-20 md:py-28 relative">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <SectionHead
          n="07"
          title="Cennik — wybierz wejście"
          right="moment decyzji"
        />

        <div className="text-center mb-10 md:mb-14">
          <h2
            data-pricing-headline
            className="font-semibold tracking-tight text-ink leading-[1.08] text-[36px] md:text-[48px]"
          >
            Kurs masz dziś. Aplikację —
            <br className="hidden md:block" />
            {" "}jako jeden z pierwszych.
          </h2>
          <p
            data-pricing-sub
            className="mt-4 text-ink/70 text-[16px] max-w-[620px] mx-auto"
          >
            Subskrypcja otworzy się po becie. Pierwsza Trzydziestka daje
            dostęp już teraz — i lock 20% rabatu na każdy kolejny rok.
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
            <NewsletterForm />
          </PlanCard>

          {/* PLAN 3 — Pierwsza Trzydziestka (Hormozi stack) */}
          <div
            id="pierwsza-trzydziestka"
            data-pricing-card
            className="relative rounded-2xl p-6 md:p-7 bg-gradient-to-br from-white via-brand-soft/30 to-white border-[2.5px] border-ink shadow-[6px_6px_0_0_hsl(286_86%_57%)] flex flex-col"
          >
            {/* Top badges */}
            <div className="absolute -top-3.5 left-5 right-5 flex gap-1.5 flex-wrap">
              <Badge tone="brand">
                <Zap className="size-3" />
                Wczesny dostęp
              </Badge>
              <Badge tone="gold">
                30 miejsc
              </Badge>
            </div>

            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand mt-2">
              {pierwszaTrzydziestkaPlan.eyebrow}
            </div>
            <h3 className="mt-1 text-[22px] font-semibold text-ink leading-tight">
              {pierwszaTrzydziestkaPlan.title}
            </h3>
            <p className="mt-1 text-[13px] text-muted">
              {pierwszaTrzydziestkaPlan.subtitle}
            </p>

            {/* Value stack */}
            <div className="mt-5 rounded-xl bg-white border-[1.5px] border-ink p-3.5 space-y-1.5">
              {pierwszaTrzydziestkaPlan.stack.map((s) => (
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
                  {pierwszaTrzydziestkaPlan.total}
                </span>
              </div>
              <div className="flex items-end justify-between pt-1">
                <span className="text-[14px] font-semibold text-ink">
                  Płacisz dziś
                </span>
                <span className="text-[28px] font-bold text-brand leading-none">
                  {pierwszaTrzydziestkaPlan.todayPrice}
                </span>
              </div>
            </div>

            <p className="mt-3 font-hand text-[14px] text-muted leading-snug">
              {pierwszaTrzydziestkaPlan.payoff}
            </p>

            <Button
              variant="primary"
              size="lg"
              className="w-full mt-5"
              rightIcon={<ArrowRight className="size-4" />}
            >
              {pierwszaTrzydziestkaPlan.cta}
            </Button>
          </div>
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
      data-pricing-card
      className={cn(
        "relative rounded-2xl p-6 flex flex-col",
        peek
          ? "bg-brand-soft/30 border border-dashed border-brand/30 opacity-95"
          : "bg-white/90 border border-border-soft shadow-[0_10px_30px_-12px_hsl(266_51%_16%_/_0.15)]",
      )}
    >
      {peek && (
        <div className="absolute -top-3 right-5">
          <Badge tone="muted">Wkrótce</Badge>
        </div>
      )}

      <div
        className={cn(
          "text-[11px] font-semibold tracking-[0.18em] uppercase",
          peek ? "text-muted" : "text-muted",
        )}
      >
        {eyebrow}
      </div>
      <h3
        className={cn(
          "mt-1 font-semibold text-ink",
          peek ? "text-[18px]" : "text-[20px]",
        )}
      >
        {title}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span
          className={cn(
            "font-bold leading-none tracking-tight",
            peek ? "text-[28px] text-ink/80" : "text-[36px] text-ink",
          )}
        >
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
          peek ? "bg-muted/15" : "bg-border-soft",
        )}
      />
      {children}
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state !== "idle") return;
    setState("submitting");
    // TODO: podłączyć Resend (audience contact create) — zamockowane
    await new Promise((r) => setTimeout(r, 700));
    setState("success");
  }

  return (
    <div className="mt-auto">
      <div className="text-[13px] text-muted text-center mb-2">
        {state === "success"
          ? "✓ Dzięki — damy znać."
          : "Powiadom mnie gdy startuje"}
      </div>
      {state !== "success" && (
        <form onSubmit={handleSubmit} className="flex gap-1.5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Twój e-mail"
            className="flex-1 min-w-0 px-2.5 py-1.5 text-[13px] rounded-md border border-border-soft bg-white/80 text-ink focus:outline-none focus:border-brand/60 transition-colors"
          />
          <button
            type="submit"
            disabled={state === "submitting"}
            aria-label="Zapisz na newsletter"
            className="px-3 py-1.5 text-[13px] font-semibold text-brand bg-transparent border border-brand/40 rounded-md hover:bg-brand-soft transition-colors disabled:opacity-60"
          >
            {state === "submitting" ? "…" : "→"}
          </button>
        </form>
      )}
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
