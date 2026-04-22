import { Youtube, Rss, Bookmark, TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  {
    kind: "yt" as const,
    channel: "Ali Abdaal",
    title: "The 6-Book Framework I Use to Learn Anything",
    time: "2h temu",
    score: 94,
    thumb: "from-orange-300 to-rose-400",
  },
  {
    kind: "rss" as const,
    channel: "Every.to",
    title: "The New AI Creator Economy — why niches win",
    time: "5h temu",
    score: 88,
    thumb: "from-blue-300 to-indigo-400",
  },
  {
    kind: "yt" as const,
    channel: "Szhakal",
    title: "Dlaczego Twój content nie dociera — case study",
    time: "1d temu",
    score: 76,
    saved: true,
    thumb: "from-fuchsia-400 to-purple-500",
  },
];

export function InspirationMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass-strong rounded-2xl overflow-hidden text-ink select-none",
        className,
      )}
    >
      {/* Header */}
      <div className="px-4 pt-3.5 pb-2.5 border-b border-border-soft/40 bg-white/40 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-semibold tracking-widest uppercase text-muted">
            Inspiracje
          </div>
          <div className="text-[13px] font-semibold text-ink">Feed · Dzisiaj</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-1 rounded-full bg-brand-soft text-accent-strong border border-brand/25 font-medium">
            12 nowych
          </span>
        </div>
      </div>

      {/* Items */}
      <div className="divide-y divide-border-soft/40 bg-white/60">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3">
            <div
              className={cn(
                "w-16 h-10 rounded-md bg-gradient-to-br shrink-0 relative overflow-hidden",
                it.thumb,
              )}
            >
              <div className="absolute inset-0 grid place-items-center text-white/90">
                {it.kind === "yt" ? (
                  <Youtube className="size-4" />
                ) : (
                  <Rss className="size-3.5" />
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-medium text-muted">
                  {it.channel}
                </span>
                <span className="text-[10px] text-muted/60">·</span>
                <span className="text-[10px] text-muted/80">{it.time}</span>
              </div>
              <div className="text-[12px] text-ink leading-tight line-clamp-1">
                {it.title}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <div className="flex items-center gap-0.5 text-[10px] font-semibold text-brand">
                <TrendingUp className="size-3" strokeWidth={2.5} />
                {it.score}
              </div>
              <Bookmark
                className={cn(
                  "size-3.5",
                  it.saved ? "fill-brand text-brand" : "text-muted",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
