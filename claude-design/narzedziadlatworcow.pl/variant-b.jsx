// Wariant B: Split hero (copy lewo / preview prawo), asymetryczny bento, \u015bredni d\u0142ugo\u015bcią
function VariantB({ headlineIdx = 0, ctaIdx = 0, long = true }) {
  const H = HEADLINES[headlineIdx];
  const CTA = CTA_PRIMARY[ctaIdx];
  const CTA2 = CTA_SECONDARY[ctaIdx];
  return (
    <div className="wf">
      <WFNav variant="B" />

      {/* HERO — split */}
      <div className="wf-section" style={{padding:"64px 48px"}}>
        <WFLabel n="01" title="Hero — split z preview" right="interaktywny" />
        <div className="wf-grid" style={{gridTemplateColumns:"1.1fr 1fr", gap:48, alignItems:"center"}}>
          <div className="wf-col wf-gap-5">
            <span className="wf-pill wf-pill-brand">early access · discord open</span>
            <h1 className="wf-h1" style={{fontSize:56}}>{H.main} <em>{H.accent}</em></h1>
            <p className="wf-p" style={{fontSize:17}}>{H.sub}</p>
            <div className="wf-flex wf-gap-3">
              <button className="wf-btn wf-btn-primary wf-btn-lg wf-discord-cta">{CTA}</button>
              <button className="wf-btn wf-btn-lg wf-btn-ghost">{CTA2}</button>
            </div>
            <div className="wf-flex wf-gap-3" style={{marginTop:8, alignItems:"center"}}>
              <span className="wf-avatar" style={{width:32, height:32, fontSize:12}}>NR</span>
              <span className="wf-hand" style={{fontSize:13, color:"var(--muted)"}}>Od <b style={{color:"var(--ink)"}}>@Szhakal</b> — twórcy, który przeszedł tę drogę.</span>
            </div>
          </div>
          <div style={{position:"relative"}}>
            <div className="wf-box-accent" style={{padding:12, transform:"rotate(1.5deg)"}}>
              <WFImg h={280} label="workspace — moduł strategia" />
            </div>
            <div className="wf-box" style={{padding:8, position:"absolute", bottom:-30, left:-40, width:200, transform:"rotate(-3deg)"}}>
              <WFImg h={100} label="edytor content" style={{background:"#fff"}} />
            </div>
            <WFNote style={{position:"absolute", top:-20, right:-30, maxWidth:150, transform:"rotate(4deg)"}}>
              interaktywny hover? play button?
            </WFNote>
          </div>
        </div>
      </div>

      {/* PROOF STRIP */}
      <div className="wf-section" style={{padding:"20px 48px", background:"var(--paper-2)"}}>
        <div className="wf-flex" style={{alignItems:"center", gap:32, justifyContent:"space-between", flexWrap:"wrap"}}>
          <span className="wf-hand" style={{fontSize:14}}>⭑ 4.9 · early feedback</span>
          <span className="wf-hand" style={{fontSize:14}}>120+ twórców w discordzie</span>
          <span className="wf-hand" style={{fontSize:14}}>7 etapów · 31 formatów</span>
          <span className="wf-hand" style={{fontSize:14}}>Polska, 100%</span>
        </div>
      </div>

      {/* PROBLEM */}
      <div className="wf-section">
        <WFLabel n="02" title="Znasz to uczucie?" />
        <div className="wf-grid wf-grid-3">
          {[
            "Otwierasz Notion. Pustka.",
            "ChatGPT pisze \u201eładnie\u201d, ale nie Twoim głosem.",
            "Masz 40 pomysłów i 0 wykonanych.",
          ].map((q,i)=>(
            <div key={i} className="wf-box-dashed" style={{padding:22, fontFamily:"var(--hand)", fontSize:17, lineHeight:1.4}}>
              „{q}”
            </div>
          ))}
        </div>
        <div style={{textAlign:"center", marginTop:24}}>
          <span className="wf-anno wf-scribble" style={{fontSize:22}}>↓ brakuje kontekstu i systemu</span>
        </div>
      </div>

      {/* MODUŁY — bento */}
      <div className="wf-section">
        <WFLabel n="03" title="Produkt" right="bento 2×2" />
        <div className="wf-grid" style={{gridTemplateColumns:"2fr 1fr", gridTemplateRows:"auto auto", gap:16}}>
          <div className="wf-box-accent" style={{padding:24, gridRow:"span 2"}}>
            <span className="wf-eyebrow">flagship</span>
            <h3 className="wf-h3" style={{margin:"10px 0"}}>Strategia marki — 7 etapów</h3>
            <p className="wf-p" style={{marginBottom:16}}>Tożsamość → Cele → Oferta → Widzowie → Styl → Serie → Eksport. AI prowadzi, Ty decydujesz.</p>
            <WFImg h={220} label="przepływ 7 etapów" />
          </div>
          <div className="wf-box" style={{padding:20}}>
            <h3 className="wf-h3" style={{marginBottom:6}}>Content</h3>
            <p className="wf-p" style={{fontSize:13, marginBottom:10}}>31 formatów. Edytor z pamięcią marki.</p>
            <WFImg h={90} label="edytor" />
          </div>
          <div className="wf-box" style={{padding:20}}>
            <h3 className="wf-h3" style={{marginBottom:6}}>Inspiracje</h3>
            <p className="wf-p" style={{fontSize:13, marginBottom:10}}>Feedy YT/RSS, search, zapisane.</p>
            <WFImg h={90} label="inspiracje" />
          </div>
        </div>
      </div>

      {/* JAK DZIAŁA — horyzontalne kroki */}
      <div className="wf-section">
        <WFLabel n="04" title="Jak działa" right="4 kroki" />
        <div className="wf-grid wf-grid-4">
          {["Strategia","Research","Pisanie","Eksport"].map((s,i)=>(
            <div key={i} className="wf-col wf-gap-3" style={{position:"relative"}}>
              <span className="wf-step">{i+1}</span>
              <h3 className="wf-h3">{s}</h3>
              <WFLines count={2} widths={["long","med"]} />
              {i < 3 && <span className="wf-anno" style={{position:"absolute", top:10, right:-14, fontSize:22}}>→</span>}
            </div>
          ))}
        </div>
      </div>

      {long && (
      <>
      {/* DLA KOGO — pigułka */}
      <div className="wf-section">
        <WFLabel n="05" title="Dla kogo" />
        <div className="wf-grid wf-grid-2" style={{gap:24}}>
          <div className="wf-box" style={{padding:24}}>
            <span className="wf-pill wf-pill-brand">✓ to Ty jeśli</span>
            <div className="wf-col wf-gap-3" style={{marginTop:12}}>
              {["Zaczynasz jako twórca / masz JDG","Chcesz markę z strategią, nie vibem","Publikujesz regularnie (YT/IG/blog)","Cenisz polski produkt"].map(x=><div key={x} className="wf-check">{x}</div>)}
            </div>
          </div>
          <div className="wf-box-dashed" style={{padding:24, opacity:0.8}}>
            <span className="wf-pill" style={{borderColor:"#d64545", color:"#d64545"}}>✕ nie to Ty jeśli</span>
            <div className="wf-col wf-gap-3" style={{marginTop:12}}>
              {["Szukasz agencji end-to-end","Chcesz „ghostwritera AI” bez wkładu","Nie masz jeszcze o czym tworzyć"].map(x=>(
                <div key={x} className="wf-hand" style={{fontSize:14, color:"var(--muted)"}}>— {x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* KURS */}
      <div className="wf-section" style={{background:"var(--paper-2)"}}>
        <WFLabel n="06" title="Kurs — przewodnik" />
        <div className="wf-grid wf-grid-2" style={{gap:32, alignItems:"center"}}>
          <WFImg h={260} label="kurs — 12 modułów wideo z @Szhakal" />
          <div>
            <h2 className="wf-h2" style={{marginBottom:12}}>„Nadaj treściom <span className="wf-u">kierunek</span>”</h2>
            <p className="wf-p" style={{marginBottom:16}}>Kurs od Nikodema Rudzińskiego (@Szhakal). 12 modułów, ćwiczenia w aplikacji, lifetime access.</p>
            <div className="wf-grid wf-grid-2 wf-gap-3">
              {["12 modułów","~6h wideo","Społeczność","Lifetime"].map(x=>(
                <div key={x} className="wf-box" style={{padding:"8px 12px", fontFamily:"var(--hand)", fontSize:14, textAlign:"center"}}>{x}</div>
              ))}
            </div>
            <button className="wf-btn wf-btn-primary wf-btn-lg" style={{marginTop:20}}>Zobacz program →</button>
          </div>
        </div>
      </div>
      </>
      )}

      {/* PRICING — kompakt */}
      <div className="wf-section">
        <WFLabel n={long?"07":"05"} title="Cennik" />
        <div className="wf-grid wf-grid-3">
          {[
            {n:"Solo", p:"Free", t:"Zaczynasz.", feat:["1 workspace","500 tokenów","Podstawowa strategia"]},
            {n:"Creator", p:"$15/mies", t:"Pełny produkt.", feat:["3 workspace'y","3000 tokenów","Wszystkie formaty","Eksport"], primary:true},
            {n:"Lifetime ⚡", p:"$299", t:"Raz. Na zawsze.", feat:["Wszystko + kurs","Early access","−30% na przyszłe produkty"], lifetime:true},
          ].map((pl,i)=>(
            <div key={i} className={pl.primary?"wf-box-accent":pl.lifetime?"wf-box-thick":"wf-box"} style={{padding:20}}>
              {pl.lifetime && <span className="wf-pill" style={{background:"#fff8b8", borderColor:"#d4c24a", color:"#5a4a10"}}>limited early access</span>}
              {pl.primary && <span className="wf-pill wf-pill-brand">top wybór</span>}
              <h3 className="wf-h3" style={{marginTop:8}}>{pl.n}</h3>
              <div className="wf-price" style={{marginTop:8}}>{pl.p === "Free" ? "Free" : pl.p}</div>
              <p className="wf-p" style={{fontSize:13, marginTop:4, marginBottom:14}}>{pl.t}</p>
              <div className="wf-col wf-gap-2" style={{marginBottom:16}}>
                {pl.feat.map(f=><div key={f} className="wf-check">{f}</div>)}
              </div>
              <button className={"wf-btn "+(pl.primary?"wf-btn-primary":"")} style={{width:"100%", justifyContent:"center"}}>
                {pl.lifetime ? "Chcę lifetime" : pl.primary ? "Wybieram" : "Start"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ + CTA wspólnie */}
      <div className="wf-section wf-grid wf-grid-2" style={{gap:32}}>
        <div>
          <WFLabel n={long?"08":"06"} title="FAQ" />
          <div className="wf-col wf-gap-2">
            {["Czy discord jest darmowy?","Co z lifetime access?","Jak działa early access?","Czy moje dane są prywatne?"].map(q=>(
              <div key={q} className="wf-box" style={{padding:"12px 16px"}}>
                <div className="wf-flex" style={{justifyContent:"space-between"}}>
                  <span className="wf-hand" style={{fontSize:15}}>{q}</span>
                  <span className="wf-anno">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <WFLabel n={long?"09":"07"} title="Dołącz teraz" />
          <div className="wf-box-accent" style={{padding:32}}>
            <h2 className="wf-h2">Ruszamy razem.</h2>
            <p className="wf-p" style={{margin:"12px 0 20px"}}>Discord otwarty. Newsletter leci w marcu. Wejdź wcześnie.</p>
            <div className="wf-flex wf-gap-3" style={{flexDirection:"column"}}>
              <button className="wf-btn wf-btn-lg wf-discord-cta" style={{width:"100%", justifyContent:"center"}}>{CTA}</button>
              <button className="wf-btn wf-btn-lg" style={{width:"100%", justifyContent:"center"}}>Newsletter</button>
            </div>
          </div>
        </div>
      </div>

      <WFFooter />
    </div>
  );
}
window.VariantB = VariantB;
