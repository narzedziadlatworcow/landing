// Wariant C: Full-bleed z gradientem NDT, odwa\u017cniejszy layout, zine-style
function VariantC({ headlineIdx = 0, ctaIdx = 0, long = true }) {
  const H = HEADLINES[headlineIdx];
  const CTA = CTA_PRIMARY[ctaIdx];
  const CTA2 = CTA_SECONDARY[ctaIdx];
  return (
    <div className="wf">
      <WFNav variant="C" />

      {/* HERO — full-bleed */}
      <div className="wf-section" style={{padding:0}}>
        <div style={{
          padding:"88px 48px 72px",
          background: "linear-gradient(135deg, rgba(201,43,240,0.12) 0%, rgba(91,140,255,0.10) 50%, rgba(255,95,162,0.12) 100%)",
          borderBottom: "1.5px dashed rgba(43,22,69,0.25)",
          position:"relative",
          overflow:"hidden"
        }}>
          <WFLabel n="01" title="Hero — full-bleed gradient" right="odważny" />
          <div style={{position:"absolute", top:40, right:48, width:280, height:280, borderRadius:"50%",
            background:"radial-gradient(circle, rgba(201,43,240,0.25) 0%, transparent 70%)", pointerEvents:"none"}}/>
          <div style={{maxWidth:900}}>
            <span className="wf-eyebrow">Narzędzia dla Twórców · v1.0</span>
            <h1 className="wf-h1" style={{fontSize:84, lineHeight:0.98, marginTop:16, marginBottom:24}}>
              {H.main}<br/><em>{H.accent}</em>
            </h1>
            <p className="wf-p" style={{fontSize:19, maxWidth:560, marginBottom:28}}>{H.sub}</p>
            <div className="wf-flex wf-gap-3">
              <button className="wf-btn wf-btn-primary wf-btn-lg wf-discord-cta">{CTA}</button>
              <button className="wf-btn wf-btn-lg wf-btn-ghost">{CTA2}</button>
            </div>
          </div>
          {/* Floating UI chips */}
          <div style={{position:"absolute", right:60, top:200, transform:"rotate(4deg)"}}>
            <div className="wf-box-accent" style={{padding:8, width:220}}>
              <WFImg h={130} label="strategia · etap 3" />
            </div>
          </div>
          <div style={{position:"absolute", right:180, bottom:60, transform:"rotate(-3deg)"}}>
            <div className="wf-box" style={{padding:6, width:180}}>
              <WFImg h={100} label="inspiracje" />
            </div>
          </div>
          <WFNote style={{position:"absolute", right:40, bottom:100, maxWidth:140}}>
            TODO: dodać loop video tła?
          </WFNote>
        </div>
      </div>

      {/* MANIFEST */}
      <div className="wf-section" style={{textAlign:"center", padding:"60px 48px"}}>
        <WFLabel n="02" title="Manifest" />
        <h2 className="wf-h1" style={{fontSize:52, maxWidth:820, margin:"0 auto"}}>
          Wierzymy, że tworzenie <em>zasługuje</em><br/>na lepsze narzędzia niż <span style={{textDecoration:"line-through", opacity:0.5}}>15 zakładek</span>.
        </h2>
        <p className="wf-p" style={{fontSize:17, maxWidth:600, margin:"20px auto 0"}}>
          NDT to nie kolejny „AI writer”.<br/>To system: strategia → research → produkcja.
        </p>
      </div>

      {/* PROBLEM — mocny, typograficzny */}
      <div className="wf-section" style={{background:"var(--ink)", color:"#fff", padding:"60px 48px"}}>
        <WFLabel n="03" title="Problem" right="kontrast dla uwagi" />
        <div style={{maxWidth:800}}>
          <h2 className="wf-scribble" style={{fontSize:56, lineHeight:1.05, color:"#fff"}}>
            Bez strategii każdy post to <span style={{color:"var(--brand)"}}>zgadywanka</span>.
          </h2>
          <p className="wf-hand" style={{fontSize:18, color:"rgba(255,255,255,0.75)", marginTop:20, maxWidth:560}}>
            ChatGPT nie zna Twojej widowni. Notion nie pisze. Canva nie myśli. A Ty — nie masz czasu, żeby to wszystko spinać.
          </p>
        </div>
      </div>

      {/* MODUŁY — numerowane, duże */}
      <div className="wf-section">
        <WFLabel n="04" title="Moduły" />
        {[
          {n:"I", t:"Strategia", d:"Fundament marki w 7 etapach. AI, która pyta — Ty decydujesz."},
          {n:"II", t:"Content", d:"Projekty → Tematy → Kawałki. 31 formatów. Edytor z pamięcią."},
          {n:"III", t:"Inspiracje", d:"Feedy YT/RSS, research, zapisane. Wszystko w kontekście."},
        ].map((m,i)=>(
          <div key={i} className="wf-grid" style={{gridTemplateColumns:"120px 1fr 1.5fr", gap:24, padding:"32px 0", borderBottom: i===2?"none":"1.5px solid var(--line)", alignItems:"center"}}>
            <div className="wf-scribble" style={{fontSize:72, color:"var(--brand)", lineHeight:1}}>{m.n}</div>
            <div>
              <h3 className="wf-h2" style={{marginBottom:8}}>{m.t}</h3>
              <p className="wf-p">{m.d}</p>
            </div>
            <WFImg h={160} label={`moduł: ${m.t}`} />
          </div>
        ))}
      </div>

      {long && (
      <>
      {/* DLA KOGO */}
      <div className="wf-section">
        <WFLabel n="05" title="Dla kogo" />
        <div className="wf-flex wf-gap-4" style={{flexWrap:"wrap"}}>
          {["Solo creator","JDG","Marka osobista","Kursant","Freelancer","Twórca YT","IG creator","Podcaster"].map(x=>(
            <div key={x} className="wf-pill" style={{padding:"8px 18px", fontSize:16}}>{x}</div>
          ))}
        </div>
      </div>

      {/* KURS */}
      <div className="wf-section" style={{padding:"60px 48px", background:"var(--brand-soft)", borderTop:"2px solid var(--brand)", borderBottom:"2px solid var(--brand)"}}>
        <WFLabel n="06" title="Kurs" />
        <div className="wf-grid wf-grid-2" style={{gap:48, alignItems:"center"}}>
          <div>
            <span className="wf-eyebrow">prowadzi</span>
            <h2 className="wf-h1" style={{fontSize:44, margin:"8px 0 4px"}}>Nikodem Rudziński</h2>
            <div className="wf-hand" style={{fontSize:18, color:"var(--muted)", marginBottom:16}}>@Szhakal · twórca YouTube</div>
            <p className="wf-p" style={{fontSize:17, marginBottom:20}}>„Nadaj treściom kierunek” — kurs, który jest jednocześnie mapą produktu. Robisz ćwiczenia, wypełniasz strategię w aplikacji, kończysz z marką.</p>
            <div className="wf-flex wf-gap-3">
              <button className="wf-btn wf-btn-primary wf-btn-lg">Program kursu →</button>
              <button className="wf-btn wf-btn-lg wf-btn-ghost">Przykładowy moduł</button>
            </div>
          </div>
          <div style={{position:"relative"}}>
            <div className="wf-box-thick" style={{padding:8}}>
              <WFImg h={300} label="hero thumb @Szhakal" />
            </div>
            <div style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none"}}>
              <div className="wf-avatar" style={{width:80, height:80, background:"#fff", fontSize:28}}>▶</div>
            </div>
          </div>
        </div>
      </div>
      </>
      )}

      {/* PRICING */}
      <div className="wf-section">
        <WFLabel n={long?"07":"05"} title="Pricing" right="lifetime accent" />
        <div className="wf-grid wf-grid-3">
          {[
            {n:"Solo", p:"Free", t:"Test bez ryzyka.", feat:["1 workspace","500 tokenów","Podstawy"]},
            {n:"Creator", p:"$15", t:"Codzienne narzędzie.", feat:["3 workspace'y","3000 tokenów","7 etapów","Wszystkie formaty"], primary:true},
            {n:"Lifetime", p:"$299", t:"Early access + kurs.", feat:["Wszystko z Creator","Kurs w cenie","−30% na zawsze","Bezpośredni kanał na Discord"], lifetime:true},
          ].map((pl,i)=>(
            <div key={i} className={pl.primary?"wf-box-accent":"wf-box"} style={{padding:24, position:"relative", ...(pl.lifetime?{background:"linear-gradient(135deg, #fff 0%, #fff8b8 100%)", borderColor:"#d4c24a"}:{})}}>
              {pl.primary && <div className="wf-pill wf-pill-brand" style={{position:"absolute", top:-12, left:20}}>polecane</div>}
              {pl.lifetime && <div className="wf-pill" style={{position:"absolute", top:-12, left:20, background:"#fff8b8", borderColor:"#d4c24a", color:"#5a4a10"}}>limited ⚡</div>}
              <h3 className="wf-h3">{pl.n}</h3>
              <div className="wf-price" style={{marginTop:8}}>{pl.p === "Free" ? "Free" : <><span className="cur">$</span>{pl.p.replace("$","")}<span className="per">{pl.lifetime?"/ once":"/ mies"}</span></>}</div>
              <p className="wf-p" style={{fontSize:13, marginTop:4, marginBottom:16}}>{pl.t}</p>
              <div className="wf-col wf-gap-2" style={{marginBottom:18}}>
                {pl.feat.map(f=><div key={f} className="wf-check">{f}</div>)}
              </div>
              <button className={"wf-btn "+(pl.primary?"wf-btn-primary":"")+" wf-btn-lg"} style={{width:"100%", justifyContent:"center"}}>
                {pl.lifetime ? "Zgarniam →" : pl.primary ? "Wybieram" : "Start"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="wf-section">
        <WFLabel n={long?"08":"06"} title="FAQ" />
        <div className="wf-grid wf-grid-2 wf-gap-4">
          {["Discord — darmowy?","Lifetime — co to znaczy?","Early access — co dostaję?","Kurs osobno do kupienia?","Anulowanie subskrypcji?","Polski support?"].map(q=>(
            <div key={q} className="wf-box" style={{padding:"14px 18px"}}>
              <div className="wf-flex" style={{justifyContent:"space-between", alignItems:"center"}}>
                <span className="wf-hand" style={{fontSize:15}}>{q}</span>
                <span className="wf-anno">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA końcowe */}
      <div className="wf-section" style={{padding:"96px 48px", textAlign:"center",
        background:"linear-gradient(135deg, rgba(201,43,240,0.15) 0%, rgba(255,95,162,0.15) 100%)"}}>
        <h2 className="wf-h1" style={{fontSize:72}}>Gotowy?</h2>
        <p className="wf-p" style={{fontSize:18, marginTop:12, marginBottom:28}}>Wejdź na Discord. Zobacz ludzi. Zobacz produkt. Decyduj potem.</p>
        <button className="wf-btn wf-btn-lg wf-discord-cta" style={{fontSize:18, padding:"18px 32px"}}>{CTA}</button>
      </div>

      <WFFooter />
    </div>
  );
}
window.VariantC = VariantC;
