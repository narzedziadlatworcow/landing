// Manifest.jsx — 3 filary NDT

const PILLARS = [
  {
    icon: "Target",
    title: "Strategia przed produkcją",
    text: "7-etapowy proces marki: tożsamość, cele, widzowie, styl, serie. Nie zgadujesz — wiesz, dla kogo i po co tworzysz.",
  },
  {
    icon: "Lightbulb",
    title: "Pomysły bez scrollowania",
    text: "Twoje źródła (YouTube, RSS) filtrowane pod Twoją niszę. AI łączy inspiracje w tematy i serie — kompatybilne z Twoją strategią.",
  },
  {
    icon: "FileText",
    title: "Produkcja w jednym miejscu",
    text: "Projekty → tematy → scenariusze. 31 formatów (long-form, shorts, karuzele, newslettery). Bez żonglowania 6 narzędziami.",
  },
];

function Manifest() {
  return (
    <section className="manifest" id="dlaczego">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Co budujemy</span>
        </div>
        <p className="manifest-lead">
          Narzędzia dla <span className="gradient-text">Twórców</span> to nie generator treści.
          To <b>drugi mózg</b>, który pamięta Twoją markę — i pomaga Ci tworzyć <b>spójnie</b>, <b>bez wypalenia</b>, <b>w swoim tempie</b>.
        </p>
        <div className="manifest-grid">
          {PILLARS.map((p, i) => {
            const Ic = I[p.icon];
            return (
              <div key={i} className="glass manifest-card">
                <div className="icon-wrap"><Ic/></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Manifest = Manifest;
