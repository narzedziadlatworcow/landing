// Hero.jsx — centered hero with app mockup frame

const HEADLINES = [
  ["Nadaj treściom", "kierunek"],
  ["Od chaosu do", "spójnej marki"],
  ["Twój drugi mózg", "do tworzenia"],
  ["Zacznij tworzyć jak", "zawodowiec"],
];

function Hero({ headlineIdx = 0, ctaText = "Zacznij od 199 zł" }) {
  const [a, b] = HEADLINES[headlineIdx] || HEADLINES[0];
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <span className="badge badge-muted">
          <span style={{width:6, height:6, borderRadius:"50%", background:"hsl(286 86% 57%)"}}/>
          Early access · zamknięta beta
        </span>
        <h1>
          {a} <span className="gradient-text">{b}</span>.
        </h1>
        <p className="sub">
          Jedno miejsce: strategia marki, banka pomysłów i produkcja treści — prowadzone przez AI, które rozumie Twoją niszę. Dla twórców na YouTube, Instagramie i TikToku.
        </p>
        <div className="hero-ctas">
          <button className="btn lg btn-primary">{ctaText} <I.ArrowRight/></button>
          <a href="#jak-dziala" className="btn lg btn-outline"><I.Play/> Zobacz, co dostajesz</a>
        </div>
        <div className="hero-trust">
          <span>✓ natychmiastowy dostęp do kursu</span>
          <span className="dot"/>
          <span>✓ 14 dni gwarancji zwrotu</span>
          <span className="dot"/>
          <span>✓ 540+ twórców w społeczności</span>
        </div>
      </div>

      <div className="hero-frame">
        <div className="hero-frame-inner" style={{height: 580}}>
          <MockContent/>
        </div>
      </div>
    </header>
  );
}

window.Hero = Hero;
