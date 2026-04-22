// Pricing.jsx — 3 progi: kurs, subskrybcja (locked), lifetime z Hormozi-stack

function PricingSection() {
  return (
    <section id="pricing" className="dense" style={{paddingTop: 80}}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Cennik</span>
          <h2>Wybierz, <span className="gradient-text">jak wchodzisz</span>.</h2>
          <p>Kurs dostępny od ręki. Aplikacja otwiera się etapami — subskrybcja w zamkniętej becie, a lifetime daje wejście do środka i cenę na zawsze.</p>
        </div>

        <div className="plans">
          {/* PLAN 1 — Kurs + Strategia */}
          <div className="plan glass">
            <span className="eyebrow">Kurs + Strategia</span>
            <h3>Pełny kurs</h3>
            <p className="tagline">Wejdź w metodę. Zbuduj strategię swojej marki krok po kroku.</p>
            <div className="price-row">
              <span className="price">199 zł</span>
              <span className="price-unit">jednorazowo</span>
            </div>
            <div className="price-note">dostęp dożywotni do materiałów</div>
            <button className="btn lg btn-secondary">Kup kurs <I.ArrowRight/></button>
            <div className="divider-plan"/>
            <ul>
              <li><I.Check className="ok"/><span>12 modułów video (3h 20min) z Nikodemem</span></li>
              <li><I.Check className="ok"/><span>PDF workbook strategii marki</span></li>
              <li><I.Check className="ok"/><span>Szablony: serii, tematów, kalendarza</span></li>
              <li><I.Check className="ok"/><span>Dożywotni dostęp + aktualizacje</span></li>
              <li className="off"><I.X className="no"/><span>Bez dostępu do aplikacji</span></li>
            </ul>
          </div>

          {/* PLAN 2 — Subskrybcja (locked) */}
          <div className="plan glass locked">
            <span className="eyebrow">Subskrybcja · zamknięta beta</span>
            <h3>
              Creator
              <span className="badge badge-muted" style={{marginLeft:"auto", fontSize:10}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Beta
              </span>
            </h3>
            <p className="tagline">Pełna aplikacja — strategia, inspiracje, produkcja. Dostępna po otwarciu bety.</p>
            <div className="price-row">
              <span className="price" style={{color:"hsl(283 20% 55%)"}}>79 zł</span>
              <span className="price-unit">/ miesiąc</span>
            </div>
            <div className="price-note">~$19 / mies · planowany start Q2 2026</div>

            <div className="locked-overlay">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <div>Chcesz wejść teraz? <a href="#plan-lifetime">Lifetime →</a> daje dostęp do zamkniętej bety.</div>
            </div>

            <div className="divider-plan"/>
            <ul>
              <li><I.Check className="ok"/><span>Wszystko z kursu</span></li>
              <li><I.Check className="ok"/><span>3 workspace'y, 3 000 tokenów AI/mies</span></li>
              <li><I.Check className="ok"/><span>Pełna Strategia Marki (7 etapów)</span></li>
              <li><I.Check className="ok"/><span>Inspiracje · YouTube + RSS bez limitu</span></li>
              <li><I.Check className="ok"/><span>Eksport do wszystkich formatów</span></li>
            </ul>
          </div>

          {/* PLAN 3 — Lifetime */}
          <div className="plan glass primary" id="plan-lifetime">
            <span className="plan-ribbon">Best value · 50 miejsc</span>
            <span className="eyebrow">Lifetime · wejście do bety</span>
            <h3>
              <I.Crown style={{color:"hsl(286 86% 57%)"}}/>
              Lifetime
            </h3>
            <p className="tagline">Wchodzisz do zamkniętej bety dziś. Cena na zawsze, bez abonamentu.</p>
            <div className="price-row">
              <span className="price gradient-text">399 zł</span>
              <span className="price-unit">jednorazowo</span>
            </div>
            <div className="price-note">1 rok aplikacji + kurs + społeczność + −20% lifetime</div>

            <div className="stack">
              <div className="stack-row"><span className="label">Kurs + Strategia</span><span className="val">199 zł</span></div>
              <div className="stack-row"><span className="label">1 rok aplikacji (12 × 79 zł)</span><span className="val">948 zł</span></div>
              <div className="stack-row"><span className="label">Zamknięta społeczność</span><span className="val">bezcenne</span></div>
              <div className="stack-row"><span className="label">−20% lifetime na kolejne lata</span><span className="val">∞</span></div>
              <div className="stack-total">
                <span className="label">Płacisz dziś</span>
                <span className="val"><s>1 147 zł</s><b>399 zł</b></span>
              </div>
            </div>
            <div className="stack-note handwritten">≈ 65% taniej · zwrot po ~5 miesiącach używania aplikacji</div>

            <button className="btn lg btn-primary">Chcę lifetime <I.ArrowRight/></button>
            <div className="divider-plan"/>
            <ul>
              <li><I.Check className="ok"/><span>Wszystko z kursu + subskrybcji</span></li>
              <li><I.Check className="ok"/><span>Wejście do zamkniętej bety od dziś</span></li>
              <li><I.Check className="ok"/><span>Zamknięta społeczność Discord (540+)</span></li>
              <li><I.Check className="ok"/><span>Priority AI · early access funkcji</span></li>
              <li><I.Check className="ok"/><span>−20% na kolejne plany · na zawsze</span></li>
            </ul>
          </div>
        </div>

        <div className="trust-strip">
          <span className="item"><I.Users/> 540+ twórców w społeczności</span>
          <span className="item"><I.Check/> 14 dni gwarancji zwrotu</span>
          <span className="item"><I.Zap/> Natychmiastowy dostęp do kursu</span>
          <span className="item"><I.Globe/> Płatność w PLN · FV na firmę</span>
        </div>
      </div>
    </section>
  );
}

window.PricingSection = PricingSection;
