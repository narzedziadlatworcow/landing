import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg " +
  "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-brand-ring focus-visible:ring-offset-2 disabled:opacity-50 " +
  "disabled:cursor-not-allowed whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand/90 active:scale-[0.98] " +
    "shadow-[0_4px_14px_-2px_hsl(286_86%_57%_/_0.45)] hover:shadow-[0_6px_20px_-2px_hsl(286_86%_57%_/_0.55)]",
  secondary:
    "bg-ink text-white hover:bg-ink/90 active:scale-[0.98] " +
    "shadow-[0_4px_14px_-2px_hsl(266_51%_16%_/_0.35)]",
  ghost:
    "bg-transparent text-ink hover:bg-accent hover:text-accent-strong",
  outline:
    "bg-white/80 border border-border-soft text-ink hover:bg-white hover:border-brand/40",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
