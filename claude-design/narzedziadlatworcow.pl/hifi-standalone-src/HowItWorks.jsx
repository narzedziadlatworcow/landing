// HowItWorks.jsx — 4 kroki + sticky visual

const STEPS = [
  {
    n: "01",
    title: "Strategia marki w 7 etapach",
    text: "Tożsamość, cele, oferta, widzowie, styl, serie. AI asystent prowadzi Cię przez każdy etap — masz fundament, nie biurokrację.",
    mock: "MockStrategy",
  },
  {
    n: "02",
    title: "Inspiracje filtrowane pod niszę",
    text: "Podłączasz źródła (YouTube, RSS). System dostarcza tylko to, co pasuje do Twojej strategii. Koniec z chaosem zakładek.",
    mock: "MockInspiration",
  },
  {
    n: "03",
    title: "Od pomysłu do scenariusza",
    text: "Projekty → tematy → gotowe treści. 31 formatów. AI pamięta Twoją markę, więc ton i styl zostają spójne.",
    mock: "MockContent",
  },
  {
    n: "04",
    title: "Ucz się podczas tworzenia",
    text: "Kurs z Nikodemem Rudzińskim wpleciony w aplikację. 12 modułów, 3h 20min — materiał pod okno, w którym właśnie pracujesz.",
    mock: "MockCourse",
  },
];

function HowItWorks() {
  const [active, setActive] = React.useState(0);
  const MockComp = window[STEPS[active].mock];

  return (
    <section id="jak-dziala" className="dense">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Jak to działa</span>
          <h2>Cztery kroki. <span className="gradient-text">Jeden workflow.</span></h2>
          <p>Zamiast żonglować sześcioma narzędziami, masz jedno miejsce, które rozumie kontekst Twojej marki i prowadzi Cię od strategii do publikacji.</p>
        </div>

        <div className="steps">
          <div className="steps-list">
            {STEPS.map((s, i) => (
              <div key={i} className={"step" + (active === i ? " active" : "")} onClick={() => setActive(i)}>
                <span className="num">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="steps-visual">
            <div className="steps-visual-inner">
              {MockComp && <MockComp/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
