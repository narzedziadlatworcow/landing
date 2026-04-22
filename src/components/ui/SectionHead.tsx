import { cn } from "@/lib/cn";

export function SectionHead({
  n,
  title,
  right,
  align = "left",
  className,
}: {
  n: string;
  title: string;
  right?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 mb-8",
        align === "center" && "justify-center text-center",
        className,
      )}
    >
      <span className="text-xs font-semibold tracking-widest uppercase text-muted">
        {n}.
      </span>
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
        {title}
      </span>
      {right && (
        <span className="ml-auto font-hand text-sm text-brand italic">
          {right}
        </span>
      )}
    </div>
  );
}
