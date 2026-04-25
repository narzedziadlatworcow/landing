import { Sparkles, Film } from "lucide-react";
import { cn } from "@/lib/cn";

export function EditorMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass-strong rounded-2xl overflow-hidden text-ink select-none",
        className,
      )}
    >
      {/* Topic header */}
      <div className="px-4 pt-4 pb-3 border-b border-border-soft/40 bg-white/40">
        <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-brand-soft text-accent-strong font-semibold tracking-wider uppercase mb-1.5">
          YouTube · 8 min
        </span>
        <div className="text-[14px] font-semibold text-ink leading-snug">
          Jak zbudować markę osobistą w 2026
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3 bg-white/70">
        {/* Hook paragraph */}
        <div className="grid grid-cols-[1fr_92px] gap-3">
          <div>
            <div className="text-[9px] font-semibold tracking-wider uppercase text-brand mb-1">
              Hook
            </div>
            <div className="text-[12px] leading-relaxed text-ink/85">
              W 2019 miałem 2 000 followersów. W 2026 — <span className="bg-brand/15 px-0.5">ponad pół miliona</span>.
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center gap-1 text-[10px] bg-brand-soft/80 rounded px-1.5 py-1 border border-brand/20">
              <Film className="size-3 text-brand" />
              <span className="text-accent-strong">B-roll</span>
            </div>
          </div>
        </div>

        {/* AI suggestion block */}
        <div className="rounded-lg bg-gradient-to-r from-brand-soft to-white border border-brand/25 p-2.5 flex items-start gap-2">
          <Sparkles className="size-3.5 text-brand shrink-0 mt-0.5" />
          <div className="text-[11px] text-ink/85 italic leading-snug">
            „Doda­ję konkret z Twojej strategii — niszę B2C.”
          </div>
        </div>

        {/* Placeholder lines — sygnał że "tu jest więcej" */}
        <div className="space-y-1.5 pt-1">
          <div className="h-1 rounded bg-subtle/90 w-[88%]" />
          <div className="h-1 rounded bg-subtle/90 w-[72%]" />
          <div className="h-1 rounded bg-subtle/90 w-[60%]" />
        </div>
      </div>
    </div>
  );
}
