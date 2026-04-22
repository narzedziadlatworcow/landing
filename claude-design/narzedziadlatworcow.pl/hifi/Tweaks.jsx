// Tweaks.jsx — floating tweaks panel

function TweaksPanel({ headlineIdx, setHeadlineIdx, ctaText, setCtaText, persist }) {
  const HEADLINES = [
    "Nadaj treściom kierunek",
    "Od chaosu do spójnej marki",
    "Twój drugi mózg do tworzenia",
    "Zacznij tworzyć jak zawodowiec",
  ];
  const CTAS = [
    "Zacznij od 199 zł",
    "Chcę early access",
    "Zacznij za darmo",
    "Wejdź na lifetime",
  ];

  return (
    <div className="tw-panel" id="tw">
      <span className="close" onClick={() => document.getElementById("tw").classList.remove("on")}>✕</span>
      <h4>Tweaks</h4>
      <div className="sub">Zmieniaj copy w locie — zmiany zapisują się do pliku.</div>

      <label>Headline</label>
      <select value={headlineIdx} onChange={e => { const v = +e.target.value; setHeadlineIdx(v); persist({ headlineIdx: v }); }}>
        {HEADLINES.map((h, i) => <option key={i} value={i}>{h}</option>)}
      </select>

      <label>CTA primary</label>
      <select value={ctaText} onChange={e => { setCtaText(e.target.value); persist({ ctaText: e.target.value }); }}>
        {CTAS.map((c, i) => <option key={i} value={c}>{c}</option>)}
      </select>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
