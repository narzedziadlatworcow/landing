const cols = [
  {
    title: "Produkt",
    links: ["Strategia", "Content", "Inspiracje", "Cennik"],
  },
  {
    title: "Społeczność",
    links: ["Discord", "Newsletter", "Kurs", "Blog"],
  },
  {
    title: "Kontakt",
    links: ["hello@ndt.pl", "Regulamin", "Polityka prywatności"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand to-brand-ring grid place-items-center text-white font-bold shadow-[0_4px_10px_-2px_hsl(286_86%_57%_/_0.45)]">
                N
              </span>
              <span className="font-semibold tracking-tight text-[17px]">
                NDT
              </span>
            </div>
            <p className="font-hand text-white/70 text-[15px] leading-snug max-w-[220px]">
              Narzędzia dla Twórców.
              <br />
              Zbuduj markę, której słuchają.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-white/80 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span>© {new Date().getFullYear()} NDT — Narzędzia dla Twórców</span>
          <span className="font-hand text-[15px] text-white/60">
            Zrobione w Polsce · z głową
          </span>
        </div>
      </div>
    </footer>
  );
}
