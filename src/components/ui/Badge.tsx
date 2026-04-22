import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "brand" | "gold" | "muted" | "dark";

const tones: Record<Tone, string> = {
  default:
    "bg-white/70 text-ink border-border-soft",
  brand:
    "bg-brand-soft text-accent-strong border-brand/30",
  gold:
    "bg-gold-bg text-gold-ink border-gold-border/70",
  muted:
    "bg-subtle text-muted border-border-soft",
  dark:
    "bg-ink text-white border-ink",
};

export function Badge({
  children,
  tone = "default",
  className,
  icon,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full",
        "text-[11px] font-medium tracking-wide uppercase",
        "border",
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
