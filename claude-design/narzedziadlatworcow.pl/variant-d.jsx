// Wariant D: Bento grid hero (zajawka modu\u0142\u00f3w od razu), kr\u00f3tki, produktowy
function VariantD({ headlineIdx = 0, ctaIdx = 0, long = false }) {
  const H = HEADLINES[headlineIdx];
  const CTA = CTA_PRIMARY[ctaIdx];
  return (
    <div className="wf">
      <WFNav variant="D" />

      {/* HERO — bento grid z zajawkami modu\u0142\u00f3w */}
      <div className="wf-section" style={{padding:"48px 48px 40px"}}>
        <WFLabel n="01" title="Hero — bento z zajawką" right="produktowy" />
        <div style={{textAlign:"center", maxWidth:720, margin:"0 auto 32px"}}>
          <span className="wf-pill wf-pill-brand">wersja early access</span>
          <h1 className="wf-h1" style={{fontSize:52, margin:"16px 0 12px"}}>{H.main} <em>{H.accent}</em></h1>
          <p className="wf-p" style={{fontSize:16}}>{H.sub}</p>
          <div className="wf-flex wf-gap-3" style={{justifyContent:"center", marginTop:20}}>
            <button className="wf-btn wf-btn-primary wf-btn-lg wf-discord-cta">{CTA}</button>
          </div>
        </div>

        {/* Bento */}
        <div className="wf-grid" style={{gridTemplateColumns:"2fr 1fr 1fr", gridTemplateRows:"220px 180px", gap:12}}>
          <div className="wf-box-accent" style={{padding:16, gridRow:"span 2"}}>
            <span className="wf-eyebrow">strategia</span>
            <h3 className="wf-h3" style={{margin:"6px 0 10px"}}>7 etapów, jeden flow</h3>
            <WFImg h={320} label="duży preview strategii" />
          </div>
          <div className="wf-box" style={{padding:14}}>
            <span className="wf-eyebrow">content</span>
            <h3 className="wf-h3" style={{marginTop:4}}>Edytor</h3>
            <WFImg h={120} label="edytor" style={{marginTop:8}} />
          </div>
          <div className="wf-box" style={{padding:14}}>
            <span className="wf-eyebrow">inspiracje</span>
            <h3 className="wf-h3" style={{marginTop:4}}>Feedy</h3>
            <WFImg h={120} label="feedy" style={{marginTop:8}} />
          </div>
          <div className="wf-box" style={{padding:14, background:"var(--brand-soft)", borderColor:"var(--brand)"}}>
            <span className="wf-eyebrow" style={{color:"var(--brand)"}}>kurs</span>
            <h3 className="wf-h3" style={{marginTop:4}}>@Szhakal</h3>
            <WFImg h={90} label="kurs" style={{marginTop:8}} />
          </div>
          <div className="wf-box-dashed" style={{padding:14, display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <span className="wf-scribble" style={{fontSize:28, color:"var(--brand)"}}>+</span>
            <span className="wf-hand" style={{fontSize:13, color:"var(--muted)"}}>społeczność na Discord</span>
          </div>
        </div>
      </div>

      {/* PROBLEM/ROZWIĄZANIE kompakt */}
      <div className="wf-section">
        <WFLabel n="02" title="Dlaczego ndt" />
        <div className="wf-grid wf-grid-3">
          {[
            {t:"Kontekst, nie prompt", d:"AI zna Twoją strategię. Nie zgaduje."},
            {t:"System, nie tool", d:"Strategia → research → content → eksport."},
            {t:"Polski, nie tłumaczony", d:"Produkt i społeczność w PL."},
          ].map((x,i)=>(
            <div key={i} className="wf-box" style={{padding:18}}>
              <span className="wf-icon" />
              <h3 className="wf-h3" style={{marginTop:10, marginBottom:6}}>{x.t}</h3>
              <p className="wf-p" style={{fontSize:14}}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* JAK DZIAŁA — 3 kroki */}
      <div className="wf-section">
        <WFLabel n="03" title="3 kroki" />
        <div className="wf-grid wf-grid-3">
          {[
            {t:"Zbuduj strategię",d:"~60 min, 7 etapów"},
            {t:"Twórz z AI",d:"Z pamięcią marki"},
            {t:"Eksportuj i publikuj",d:"MD, docx, pdf"},
          ].map((s,i)=>(
            <div key={i} className="wf-flex wf-gap-3" style={{alignItems:"flex-start"}}>
              <span className="wf-step">{i+1}</span>
              <div>
                <h3 className="wf-h3">{s.t}</h3>
                <p className="wf-p" style={{fontSize:14}}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KURS STRIP */}
      <div className="wf-section" style={{background:"var(--ink)", color:"#fff", padding:"40px 48px"}}>
        <div className="wf-flex" style={{alignItems:"center", gap:32, justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{maxWidth:520}}>
            <span className="wf-eyebrow" style={{color:"var(--brand)"}}>kurs · @Szhakal</span>
            <h2 className="wf-scribble" style={{fontSize:34, color:"#fff", marginTop:8}}>Nadaj treściom kierunek.</h2>
            <p className="wf-hand" style={{fontSize:15, color:"rgba(255,255,255,0.75)", marginTop:8}}>12 modułów · ćwiczenia w aplikacji · lifetime.</p>
          </div>
          <button className="wf-btn wf-btn-lg" style={{background:"#fff"}}>Zobacz kurs →</button>
        </div>
      </div>

      {/* PRICING */}
      <div className="wf-section">
        <WFLabel n="04" title="Pricing" />
        <div className="wf-grid wf-grid-3">
          {[
            {n:"Solo", p:"Free", feat:["1 workspace","500 tok"]},
            {n:"Creator", p:"$15/mies", feat:["3 ws'y","3000 tok","Pełen flow"], primary:true},
            {n:"Lifetime", p:"$299", feat:["Raz na zawsze","Kurs w cenie","−30%"], lifetime:true},
          ].map((pl,i)=>(
            <div key={i} className={pl.primary?"wf-box-accent":"wf-box"} style={{padding:18}}>
              {pl.lifetime && <span className="wf-pill" style={{background:"#fff8b8", borderColor:"#d4c24a", color:"#5a4a10"}}>early ⚡</span>}
              <h3 className="wf-h3" style={{marginTop:8}}>{pl.n}</h3>
              <div className="wf-price" style={{marginTop:6}}>{pl.p === "Free" ? "Free" : pl.p}</div>
              <div className="wf-col wf-gap-2" style={{margin:"12px 0 14px"}}>
                {pl.feat.map(f=><div key={f} className="wf-check">{f}</div>)}
              </div>
              <button className={"wf-btn "+(pl.primary?"wf-btn-primary":"")} style={{width:"100%", justifyContent:"center"}}>
                {pl.lifetime?"Chcę":pl.primary?"Wybieram":"Start"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ kompakt */}
      <div className="wf-section">
        <WFLabel n="05" title="FAQ" />
        <div className="wf-box" style={{padding:"0 20px"}}>
          {["Discord — darmowy?","Lifetime — co obejmuje?","Kiedy pełne wdrożenie?","Anulowanie?"].map(q=>(
            <div key={q} className="wf-faq-item">
              <span className="wf-hand" style={{fontSize:15}}>{q}</span>
              <span className="wf-anno">+</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA końcowe */}
      <div className="wf-section" style={{textAlign:"center", padding:"56px 48px"}}>
        <h2 className="wf-h2" style={{marginBottom:12}}>Zaczynamy razem.</h2>
        <button className="wf-btn wf-btn-lg wf-discord-cta">{CTA}</button>
      </div>

      <WFFooter />
    </div>
  );
}
window.VariantD = VariantD;
