import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/cn";

export function ScribbleAnno({
  children,
  className,
  style,
  rotate = -2,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  rotate?: number;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = { sm: "text-base", md: "text-lg", lg: "text-xl", xl: "text-2xl" };
  return (
    <span
      className={cn(
        "inline-block font-hand text-brand leading-snug",
        sizes[size],
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </span>
  );
}
