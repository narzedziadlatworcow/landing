import { FileText, FileDown, FileCode2, Check } from "lucide-react";
import { cn } from "@/lib/cn";

const formats = [
  { Icon: FileCode2, label: "Markdown", note: ".md", active: true },
  { Icon: FileText, label: "Word", note: ".docx" },
  { Icon: FileDown, label: "PDF", note: ".pdf" },
];

export function ExportMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass-strong rounded-2xl p-3.5 text-ink select-none",
        className,
      )}
    >
      <div className="text-[10px] font-semibold tracking-widest uppercase text-muted mb-2.5">
        Eksport strategii
      </div>
      <div className="space-y-1.5">
        {formats.map((f) => (
          <div
            key={f.label}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-2 rounded-lg",
              f.active
                ? "bg-brand-soft border border-brand/30"
                : "bg-white/60 border border-border-soft",
            )}
          >
            <f.Icon
              className={cn(
                "size-4",
                f.active ? "text-brand" : "text-muted",
              )}
            />
            <span
              className={cn(
                "text-[12px] flex-1",
                f.active ? "text-ink font-medium" : "text-ink/70",
              )}
            >
              {f.label}
            </span>
            <span className="text-[10px] text-muted font-mono">{f.note}</span>
            {f.active && <Check className="size-3.5 text-brand" strokeWidth={3} />}
          </div>
        ))}
      </div>
      <button className="w-full mt-3 bg-ink text-white text-[12px] py-2 rounded-lg font-medium">
        Pobierz (.md)
      </button>
    </div>
  );
}
