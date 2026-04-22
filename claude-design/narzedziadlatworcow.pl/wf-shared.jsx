// Shared wireframe atoms — używane przez wszystkie warianty
// Expose na window, by wszystkie pliki JSX mia\u0142y dost\u0119p.

const WFNav = ({ variant = "A" }) => (
  <div className="wf-nav">
    <div className="wf-nav-logo">
      <span className="wf-nav-logo-mark" />
      <span>ndt</span>
    </div>
    <div className="wf-nav-links">
      <span>Produkt</span>
      <span>Kurs</span>
      <span>Pricing</span>
      <span>FAQ</span>
    </div>
    <div className="wf-flex wf-gap-3" style={{alignItems:"center"}}>
      <span className="wf-pill">{variant === "D" ? "Zaloguj" : "Discord"}</span>
      <button className="wf-btn wf-btn-primary" style={{padding:"8px 14px", fontSize:14}}>Dołącz →</button>
    </div>
  </div>
);

const WFLabel = ({ n, title, right }) => (
  <div className="wf-section-head">
    <span className="wf-section-num">{n}.</span>
    <span className="wf-section-title">{title}</span>
    {right && <span className="wf-label" style={{marginLeft:"auto"}}>{right}</span>}
  </div>
);

const WFImg = ({ h = 220, label = "screenshot UI", style = {} }) => (
  <div className="wf-img" style={{height: h, ...style}}>
    <span className="wf-img-label">{label}</span>
  </div>
);

const WFLines = ({ count = 3, widths }) => {
  const W = widths || ["long","long","med"];
  return (
    <div className="wf-lines">
      {Array.from({length:count}).map((_,i)=>(
        <div key={i} className={"wf-line "+(W[i]||"long")} />
      ))}
    </div>
  );
};

const WFNote = ({ children, style }) => (
  <div className="wf-note" style={style}>{children}</div>
);

const WFFooter = () => (
  <div className="wf-footer">
    <div className="wf-grid wf-grid-4" style={{alignItems:"flex-start"}}>
      <div className="wf-footer-col">
        <div style={{fontFamily:"var(--hand-title)", fontSize:22, marginBottom:12, display:"flex", alignItems:"center", gap:8}}>
          <span className="wf-nav-logo-mark" /> ndt
        </div>
        <div style={{fontFamily:"var(--hand)", fontSize:13, color:"rgba(255,255,255,0.6)", lineHeight:1.5}}>
          Narzędzia dla Twórców.<br/>Zbuduj markę, której słuchają.
        </div>
      </div>
      <div className="wf-footer-col">
        <h4>Produkt</h4>
        <span className="wf-footer-link">Strategia</span>
        <span className="wf-footer-link">Content</span>
        <span className="wf-footer-link">Inspiracje</span>
        <span className="wf-footer-link">Pricing</span>
      </div>
      <div className="wf-footer-col">
        <h4>Społeczność</h4>
        <span className="wf-footer-link">Discord</span>
        <span className="wf-footer-link">Newsletter</span>
        <span className="wf-footer-link">Kurs</span>
        <span className="wf-footer-link">Blog</span>
      </div>
      <div className="wf-footer-col">
        <h4>Kontakt</h4>
        <span className="wf-footer-link">hello@ndt.pl</span>
        <span className="wf-footer-link">Regulamin</span>
        <span className="wf-footer-link">Polityka prywatności</span>
      </div>
    </div>
  </div>
);

// Standard headline + CTA options (sterowane przez tweaki)
const HEADLINES = [
  { main: "Nadaj treściom", accent: "kierunek.", sub: "Strategia marki, pomysły i teksty — w jednym miejscu. Stworzone dla twórców, którzy robią to na serio." },
  { main: "Od chaosu do", accent: "spójnej marki.", sub: "7 etapów strategii. AI, które pisze z Twoim głosem. Kurs, który tłumaczy dlaczego." },
  { main: "Twój drugi mózg", accent: "do tworzenia.", sub: "Plan, research, teksty, feedback — w jednym workspace. Bez przełączania między 12 zakładkami." },
  { main: "Zacznij tworzyć", accent: "jak zawodowiec.", sub: "Narzędzie, które ogarnia kreatywne chaos. Strategia, pomysły, scenariusze — wszystko z kontekstem Twojej marki." },
];

const CTA_PRIMARY = [
  "Dołącz do Discorda →",
  "Zacznij za darmo →",
  "Chcę early access →",
  "Zobacz jak to działa →",
];
const CTA_SECONDARY = [
  "Zobacz demo",
  "Program kursu",
  "Pobierz próbkę strategii",
  "Porozmawiajmy",
];

Object.assign(window, { WFNav, WFLabel, WFImg, WFLines, WFNote, WFFooter, HEADLINES, CTA_PRIMARY, CTA_SECONDARY });
