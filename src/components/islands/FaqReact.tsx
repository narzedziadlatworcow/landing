import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Faq } from "@/data/faq";

function FaqItem({ q, a, defaultOpen }: Faq & { defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={cn(
        "rounded-xl border bg-white/80 transition-all",
        open
          ? "border-brand/30 shadow-[0_8px_24px_-12px_hsl(286_86%_57%_/_0.3)]"
          : "border-border-soft hover:border-brand/20",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4"
      >
        <span className="font-semibold text-[15px] md:text-[16px] text-ink leading-snug">
          {q}
        </span>
        <Plus
          className={cn(
            "size-4 text-brand shrink-0 transition-transform duration-300",
            open && "rotate-45",
          )}
          strokeWidth={2.5}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[14px] text-ink/75 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqReact({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-2.5">
      {faqs.map((f, i) => (
        <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
