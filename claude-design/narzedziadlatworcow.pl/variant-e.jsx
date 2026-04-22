// Wariant E — "Editorial": remix ulubionych sekcji
// Hero B (split) · Problem-cytaty B · Moduły A (karty+preview) · 4 kroki A · Kurs A · Pricing B · CTA+FAQ B split

function VariantE({ headlineIdx = 0, ctaIdx = 0, long = true }) {
  const H = HEADLINES[headlineIdx];
  const CTA = CTA_PRIMARY[ctaIdx];
  const CTA2 = CTA_SECONDARY[ctaIdx];
  return (
    <div className="wf">
      <WFNav variant="E" />

      {/* HERO — split (B) */}
      <div className="wf-section" style={{padding:"64px 48px"}}>
        <WFLabel n="01" title="Hero — split (z B)" right="copy + preview" />
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
              <WFImg h={100} label="edytor content" />
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEM — cytaty (B) */}
      <div className="wf-section">
        <WFLabel n="02" title="Znasz to uczucie? (z B)" />
        <div className="wf-grid wf-grid-3">
          {[
            "Otwierasz Notion. Pustka.",
            "ChatGPT pisze „ładnie”, ale nie Twoim głosem.",
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

      {/* MODUŁY — karty z preview (A) */}
      <div className="wf-section">
        <WFLabel n="03" title="Trzy moduły, jeden flow (z A)" />
        <div className="wf-grid wf-grid-3">
          {[
            {t:"Strategia", d:"7 etapów: Tożsamość · Cele · Oferta · Widzowie · Styl · Serie", tag:"Fundament"},
            {t:"Content", d:"Projekty → Tematy → Kawałki. 31 formatów. Edytor z kontekstem.", tag:"Produkcja"},
            {t:"Inspiracje", d:"Feedy YT/RSS, search, zapisane. Research, który nie ginie.", tag:"Research"},
          ].map((m,i)=>(
            <div key={i} className="wf-box" style={{padding:24}}>
              <div className="wf-flex wf-gap-3" style={{alignItems:"center", marginBottom:12}}>
                <span className="wf-icon wf-icon-xl" />
                <div>
                  <span className="wf-pill wf-pill-brand">{m.tag}</span>
                  <h3 className="wf-h3" style={{marginTop:6}}>{m.t}</h3>
                </div>
              </div>
              <p className="wf-p" style={{fontSize:14, marginBottom:14}}>{m.d}</p>
              <WFImg h={140} label={`preview: ${m.t.toLowerCase()}`} />
            </div>
          ))}
        </div>
      </div>

      {/* JAK DZIAŁA — 4 kroki z ilustracjami (A) */}
      <div className="wf-section">
        <WFLabel n="04" title="Jak to działa (z A)" right="4 kroki + thumb" />
        <div className="wf-col wf-gap-6">
          {[
            {t:"Zrób strategię", d:"Odpowiadasz na pytania, AI porządkuje. 7 etapów, ~60 min."},
            {t:"Zbieraj pomysły", d:"Feedy, research, zapisane. Kontekst się sam gromadzi."},
            {t:"Pisz z pomocą AI", d:"Każdy kawałek ma pamięć Twojej marki. Ton, styl, widownia."},
            {t:"Eksportuj i publikuj", d:"Markdown, docx, pdf. Kopiujesz i wrzucasz."},
          ].map((s,i)=>(
            <div key={i} className="wf-flex wf-gap-4" style={{alignItems:"flex-start"}}>
              <span className="wf-step">{i+1}</span>
              <div style={{flex:1}}>
                <h3 className="wf-h3" style={{marginBottom:4}}>{s.t}</h3>
                <p className="wf-p">{s.d}</p>
              </div>
              <div style={{width:260}}>
                <WFImg h={80} label={`krok ${i+1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {long && (
      <>
      {/* KURS — szczegółowy (A) */}
      <div className="wf-section">
        <WFLabel n="05" title="Kurs: Nadaj treściom kierunek (z A)" />
        <div className="wf-grid wf-grid-2" style={{gap:32}}>
          <div>
            <span className="wf-eyebrow">prowadzi @Szhakal</span>
            <h2 className="wf-h2" style={{margin:"12px 0"}}>Strategia marki<br/>+ kurs <span className="wf-u">jako fundament</span></h2>
            <p className="wf-p" style={{marginBottom:16}}>Nikodem Rudziński — twórca, który zbudował markę na YouTube od zera. Pokazuje krok po kroku, jak to zrobić u Ciebie.</p>
            <div className="wf-col wf-gap-3">
              {["12 modułów wideo","Ćwiczenia do wykonania w aplikacji","Dostęp do społeczności na Discordzie","Lifetime access"].map(x=>(
                <div key={x} className="wf-check">{x}</div>
              ))}
            </div>
            <button className="wf-btn wf-btn-primary wf-btn-lg" style={{marginTop:24}}>Zobacz program kursu →</button>
          </div>
          <div>
            <WFImg h={320} label="thumbnail kursu — Nikodem" />
          </div>
        </div>
      </div>
      </>
      )}

      {/* PRICING — kompakt (B) */}
      <div className="wf-section">
        <WFLabel n={long?"06":"05"} title="Cennik (z B)" />
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

      {/* FAQ + CTA split (B) */}
      <div className="wf-section wf-grid wf-grid-2" style={{gap:32}}>
        <div>
          <WFLabel n={long?"07":"06"} title="FAQ (z B)" />
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
          <WFLabel n={long?"08":"07"} title="Dołącz teraz (z B)" />
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
window.VariantE = VariantE;
