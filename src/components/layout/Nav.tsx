import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const links = [
  { href: "#produkt", label: "Produkt" },
  { href: "#kurs", label: "Kurs" },
  { href: "#pricing", label: "Cennik" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
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

        <div className="flex items-center gap-3">
          <Badge tone="muted" className="hidden sm:inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Beta
          </Badge>
          <Button size="md" rightIcon={<ArrowRight className="size-4" />}>
            Zacznij od 199 zł
          </Button>
        </div>
      </div>
    </header>
  );
}
