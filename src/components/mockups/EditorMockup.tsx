import { Sparkles, Film, Image as ImageIcon, MoreHorizontal } from "lucide-react";
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
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-soft text-accent-strong font-semibold tracking-wider uppercase">
            YouTube · 8 min
          </span>
          <span className="text-[10px] text-muted">Projekt: @Szhakal · April</span>
          <MoreHorizontal className="size-3.5 text-muted ml-auto" />
        </div>
        <div className="text-[14px] font-semibold text-ink">
          Jak zbudować markę osobistą w 2026 — 5 rzeczy, których nikt nie mówi
        </div>
      </div>

      {/* Body — paragraphs with annotations */}
      <div className="p-4 space-y-3 bg-white/70">
        {/* Hook paragraph */}
        <div className="grid grid-cols-[1fr_110px] gap-3">
          <div>
            <div className="text-[9px] font-semibold tracking-wider uppercase text-brand mb-1">
              Hook
            </div>
            <div className="text-[12px] leading-relaxed text-ink/85">
              W 2019 miałem 2 000 followersów. W 2026 — <span className="bg-brand/15 px-0.5">ponad pół miliona</span>. A różnica to nie content. Różnica to <b>strategia</b>.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[9px] text-muted">Adnotacje</div>
            <div className="flex items-center gap-1 text-[10px] bg-brand-soft/80 rounded px-1.5 py-1 border border-brand/20">
              <Film className="size-3 text-brand" />
              <span className="text-accent-strong">B-roll: 2019</span>
            </div>
          </div>
        </div>

        {/* AI suggestion block */}
        <div className="rounded-lg bg-gradient-to-r from-brand-soft to-white border border-brand/25 p-2.5 flex items-start gap-2">
          <Sparkles className="size-3.5 text-brand shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="text-[10px] font-semibold text-brand tracking-wide uppercase mb-0.5">
              AI · pamięta Twój styl
            </div>
            <div className="text-[11px] text-ink/85 italic leading-snug">
              „Druga część zaczyna się za słabo — doda­ję konkret z Twojej strategii: niszę content creatorów B2C.”
            </div>
          </div>
        </div>

        {/* Content paragraph */}
        <div className="grid grid-cols-[1fr_110px] gap-3">
          <div>
            <div className="text-[9px] font-semibold tracking-wider uppercase text-muted mb-1">
              Główna myśl 1
            </div>
            <div className="text-[12px] leading-relaxed text-ink/70">
              Wszyscy mówią „bądź autentyczny”. Ja Ci pokażę jak to zrobić — bez tracenia algorytmu.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[10px] bg-subtle rounded px-1.5 py-1 border border-border-soft">
              <ImageIcon className="size-3 text-muted" />
              <span className="text-muted">grafika</span>
            </div>
          </div>
        </div>

        {/* Placeholder paragraph */}
        <div className="h-1 rounded bg-subtle/90 w-[80%]" />
        <div className="h-1 rounded bg-subtle/90 w-[65%]" />
      </div>
    </div>
  );
}
