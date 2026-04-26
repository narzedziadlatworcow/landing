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
    <footer className="bg-ink text-white mt-20">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-brand to-brand-ring grid place-items-center text-white text-[13px] font-bold">
                N
              </span>
              <span className="font-semibold tracking-tight text-[15px]">
                NDT
              </span>
            </div>
            <p className="text-white/60 text-[13px] leading-snug max-w-[200px]">
              Narzędzia dla Twórców. Zbuduj markę, której słuchają.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/45 mb-3">
                {col.title}
              </h4>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-white/75 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/40">
          <span>© {new Date().getFullYear()} NDT — Narzędzia dla Twórców</span>
          <span className="font-hand text-[13px] text-white/55">
            Zrobione w Polsce · z głową
          </span>
        </div>
      </div>
    </footer>
  );
}
