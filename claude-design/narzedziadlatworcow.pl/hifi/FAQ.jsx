// FAQ.jsx + FinalCTA + Footer

const FAQS = [
  {
    q: "Kiedy ruszy pełna aplikacja?",
    a: "Zamknięta beta dla lifetime członków — od razu po zakupie. Publiczna subskrybcja planowana na Q2 2026. Jeśli wchodzisz na lifetime, nie czekasz.",
  },
  {
    q: "Czym różni się lifetime od subskrybcji?",
    a: "Lifetime to jednorazowa płatność 399 zł z dostępem do bety od dziś i ceną na zawsze. Subskrybcja to 79 zł/mc po publicznym starcie. Lifetime zwraca się po ~5 miesiącach.",
  },
  {
    q: "Ile miejsc lifetime zostało?",
    a: "Pula 50 miejsc w cenie 399 zł. Po wyczerpaniu cena lifetime pójdzie w górę (planowo 599 zł). Aktualny stan pokazujemy w checkout.",
  },
  {
    q: "Czy kurs bez aplikacji ma sens?",
    a: "Tak. Kurs + workbook strategii to kompletna metodologia — możesz wdrożyć ją w Notion, Google Docs, gdziekolwiek. Aplikacja to akcelerator, nie warunek.",
  },
  {
    q: "Co, jeśli nie spełni moich oczekiwań?",
    a: "14 dni gwarancji zwrotu — bez tłumaczenia się. Piszesz, zwracamy pełną kwotę. Dotyczy wszystkich trzech planów.",
  },
  {
    q: "Dla kogo to NIE jest?",
    a: "Dla twórców szukających generatora treści \u201Eza jednym kliknięciem\u201D i dla początkujących, którzy jeszcze nie nagrali pierwszego filmu. NDT zakłada, że już tworzysz — dajemy Ci system.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="compact">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Najczęstsze pytania</h2>
        </div>
        <div className="faq-grid">
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="compact">
      <div className="wrap">
        <div className="final-cta">
          <div className="inner">
            <span className="eyebrow" style={{color:"hsl(283 50% 78%)"}}>Gotowy?</span>
            <h2>Przestań się rozpraszać. <br/>Zacznij <span style={{background:"var(--brand-gradient-text)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent"}}>tworzyć z systemem</span>.</h2>
            <p>Zacznij od kursu za 199 zł, albo wejdź na lifetime i dostań aplikację, społeczność i cenę na zawsze.</p>
            <div className="ctas">
              <button className="btn lg btn-primary">Zacznij od 199 zł <I.ArrowRight/></button>
              <button className="btn lg btn-outline"><I.Crown/> Chcę lifetime (399 zł)</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer">
          <div className="brand">
            <img src="assets/logo.png" alt="NDT"/>
            <p>Narzędzia dla Twórców. Jedno miejsce do strategii, inspiracji i produkcji treści — prowadzone przez AI, które rozumie Twoją niszę.</p>
          </div>
          <div>
            <h5>Produkt</h5>
            <ul>
              <li><a href="#jak-dziala">Jak działa</a></li>
              <li><a href="#kurs">Kurs</a></li>
              <li><a href="#pricing">Cennik</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Społeczność</h5>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Kontakt</h5>
            <ul>
              <li><a href="mailto:hej@ndt.pl">hej@ndt.pl</a></li>
              <li><a href="#">Regulamin</a></li>
              <li><a href="#">Polityka prywatności</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bot wrap" style={{padding:"16px 0 0"}}>
          <span>© 2026 NDT · narzedziadlatworcow.pl</span>
          <span>Robione w Polsce · Warszawa</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FAQ, FinalCTA, Footer });
