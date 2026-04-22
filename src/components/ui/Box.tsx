import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/cn";

type Variant = "glass" | "glass-strong" | "accent" | "thick" | "dashed" | "plain";

const variants: Record<Variant, string> = {
  glass: "glass rounded-xl",
  "glass-strong": "glass-strong rounded-xl",
  accent: "bg-brand-soft border-2 border-brand/40 rounded-xl shadow-[0_8px_24px_-8px_hsl(286_86%_57%_/_0.25)]",
  thick: "bg-white border-[2.5px] border-ink rounded-xl shadow-[4px_4px_0_0_hsl(266_51%_16%)]",
  dashed: "bg-white/60 border-2 border-dashed border-muted/50 rounded-xl",
  plain: "bg-white border border-border-soft rounded-xl",
};

export function Box({
  variant = "glass",
  className,
  style,
  children,
}: {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div className={cn(variants[variant], className)} style={style}>
      {children}
    </div>
  );
}
