import {
  Globe,
  Fingerprint,
  Target,
  Users,
  Palette,
  Package,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";
import { cn } from "@/lib/cn";

const stages = [
  { id: "channels", label: "Kanały", Icon: Globe, progress: 1 },
  { id: "identity", label: "Tożsamość", Icon: Fingerprint, progress: 1 },
  { id: "goals", label: "Cele", Icon: Target, progress: 1 },
  { id: "audience", label: "Odbiorcy", Icon: Users, progress: 0.62, active: true },
  { id: "style", label: "Styl", Icon: Palette, progress: 0.15 },
  { id: "offer", label: "Oferta", Icon: Package, progress: 0 },
  { id: "series", label: "Serie treści", Icon: Layers, progress: 0 },
];

export function StrategyMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass-strong rounded-2xl overflow-hidden text-ink select-none",
        "grid grid-cols-[180px_1fr]",
        className,
      )}
    >
      {/* Sidebar — 7 stages */}
      <aside className="bg-gradient-to-b from-brand-soft/90 to-white/30 border-r border-border-soft/40 p-3">
        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted px-2 pb-2 pt-1">
          Strategia
        </div>
        <ul className="space-y-0.5">
          {stages.map((s) => {
            const done = s.progress >= 1;
            return (
              <li key={s.id}>
                <div
                  className={cn(
                    "flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px]",
                    s.active
                      ? "bg-white shadow-sm border border-brand/25 text-ink font-medium"
                      : "text-ink/75 hover:bg-white/50",
                  )}
                >
                  <span
                    className={cn(
                      "grid place-items-center size-5 rounded-md shrink-0",
                      done
                        ? "bg-brand text-white"
                        : s.active
                          ? "bg-brand/15 text-brand"
                          : "bg-white/70 text-muted border border-border-soft",
                    )}
                  >
                    {done ? (
                      <Check className="size-3" strokeWidth={3} />
                    ) : (
                      <s.Icon className="size-3" />
                    )}
                  </span>
                  <span className="flex-1 truncate">{s.label}</span>
                  {!done && s.progress > 0 && (
                    <span className="text-[9px] tabular-nums text-muted">
                      {Math.round(s.progress * 100)}%
                    </span>
                  )}
                </div>
                {s.active && (
                  <div className="mx-2 mt-1 h-1 bg-white/70 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand to-brand-ring"
                      style={{ width: `${s.progress * 100}%` }}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main — Audience stage detail */}
      <div className="p-4 bg-white/70">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-brand mb-1">
              Etap 4 · Odbiorcy
            </div>
            <h3 className="text-[15px] font-semibold text-ink">
              Opisz 3 konkretne persony
            </h3>
          </div>
          <span className="text-[10px] text-muted font-hand text-base">
            ~12 min
          </span>
        </div>

        {/* Persona card — in-progress */}
        <div className="rounded-lg border border-brand/25 bg-brand-soft/50 p-3 mb-2.5">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="size-7 rounded-full bg-gradient-to-br from-brand to-brand-ring text-white grid place-items-center text-[11px] font-bold shadow-sm">
              KM
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-semibold text-ink">
                Kasia, 28
              </div>
              <div className="text-[10px] text-muted">
                UX designer · szuka pivotu do tworzenia
              </div>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white text-muted border border-border-soft">
              1/3
            </span>
          </div>
          <div className="space-y-1 pl-0">
            <div className="h-1.5 rounded-full bg-white/80">
              <div className="h-full w-[80%] bg-brand/80 rounded-full" />
            </div>
            <div className="h-1.5 rounded-full bg-white/80">
              <div className="h-full w-[55%] bg-brand/80 rounded-full" />
            </div>
          </div>
        </div>

        {/* AI suggestion */}
        <div className="rounded-lg border border-border-soft bg-white p-2.5 mb-2.5 flex items-start gap-2">
          <Sparkles className="size-3.5 text-brand shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="text-[11px] text-ink/90 leading-snug">
              Na bazie Twojej niszy — dodać personę „Marcin, 35, founder B2B”?
            </div>
            <div className="flex gap-1.5 mt-1.5">
              <button className="text-[10px] px-2 py-0.5 rounded bg-brand text-white font-medium">
                Dodaj
              </button>
              <button className="text-[10px] px-2 py-0.5 rounded bg-white border border-border-soft text-muted">
                Pomiń
              </button>
            </div>
          </div>
        </div>

        {/* Empty slot */}
        <div className="rounded-lg border border-dashed border-border-soft/80 bg-white/40 p-2.5 text-center">
          <div className="text-[10px] text-muted">+ dodaj personę 3/3</div>
        </div>
      </div>
    </div>
  );
}
