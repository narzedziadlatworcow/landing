import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "#produkt", label: "Produkt" },
  { href: "#kurs", label: "Kurs" },
  { href: "#pricing", label: "Cennik" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-border-soft/50">
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="NDT" className="h-7 w-auto" />
          <span className="font-semibold text-ink text-[15px] tracking-tight sr-only">
            NDT
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="md" rightIcon={<ArrowRight className="size-4" />}>
            Zacznij od 199 zł
          </Button>
          <button
            type="button"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center size-10 rounded-lg text-ink hover:bg-brand-soft transition-colors"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav className="px-6 pb-4 pt-1 flex flex-col border-t border-border-soft/50 bg-white/85 backdrop-blur-md">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-ink/85 hover:text-brand border-b border-border-soft/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
