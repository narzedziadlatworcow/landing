// Wariant F — "Bold statement": odważny remix
// Hero C (full-bleed gradient) · Manifest C · Ciemny problem C · 4 kroki B horyzontalne · Kurs C z play · Pricing C · FAQ B

function VariantF({ headlineIdx = 0, ctaIdx = 0, long = true }) {
  const H = HEADLINES[headlineIdx];
  const CTA = CTA_PRIMARY[ctaIdx];
  const CTA2 = CTA_SECONDARY[ctaIdx];
  return (
    <div className="wf">
      <WFNav variant="F" />

      {/* HERO — full-bleed (C) */}
      <div className="wf-section" style={{padding:0}}>
        <div style={{
          padding:"88px 48px 72px",
          background:"linear-gradient(135deg, rgba(201,43,240,0.12) 0%, rgba(91,140,255,0.10) 50%, rgba(255,95,162,0.12) 100%)",
          borderBottom:"1.5px dashed rgba(43,22,69,0.25)",
          position:"relative", overflow:"hidden"
        }}>
          <WFLabel n="01" title="Hero — full-bleed (z C)" right="odważny" />
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
        </div>
      </div>

      {/* MANIFEST (C) */}
      <div className="wf-section" style={{textAlign:"center", padding:"60px 48px"}}>
        <WFLabel n="02" title="Manifest (z C)" />
        <h2 className="wf-h1" style={{fontSize:52, maxWidth:820, margin:"0 auto"}}>
          Wierzymy, że tworzenie <em>zasługuje</em><br/>na lepsze narzędzia niż <span style={{textDecoration:"line-through", opacity:0.5}}>15 zakładek</span>.
        </h2>
        <p className="wf-p" style={{fontSize:17, maxWidth:600, margin:"20px auto 0"}}>
          NDT to nie kolejny „AI writer”.<br/>To system: strategia → research → produkcja.
        </p>
      </div>

      {/* PROBLEM — dark (C) */}
      <div className="wf-section" style={{background:"var(--ink)", color:"#fff", padding:"60px 48px"}}>
        <WFLabel n="03" title="Problem — dark (z C)" />
        <div style={{maxWidth:800}}>
          <h2 className="wf-scribble" style={{fontSize:56, lineHeight:1.05, color:"#fff"}}>
            Bez strategii każdy post to <span style={{color:"var(--brand)"}}>zgadywanka</span>.
          </h2>
          <p className="wf-hand" style={{fontSize:18, color:"rgba(255,255,255,0.75)", marginTop:20, maxWidth:560}}>
            ChatGPT nie zna Twojej widowni. Notion nie pisze. Canva nie myśli. A Ty — nie masz czasu, żeby to wszystko spinać.
          </p>
        </div>
      </div>

      {/* 4 KROKI horyzontalne (B) */}
      <div className="wf-section">
        <WFLabel n="04" title="Jak działa (z B)" right="4 kroki horyzontalnie" />
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
      {/* KURS — emotional + play (C) */}
      <div className="wf-section" style={{padding:"60px 48px", background:"var(--brand-soft)", borderTop:"2px solid var(--brand)", borderBottom:"2px solid var(--brand)"}}>
        <WFLabel n="05" title="Kurs (z C)" />
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

      {/* PRICING z mocnym lifetime (C) */}
      <div className="wf-section">
        <WFLabel n={long?"06":"05"} title="Pricing (z C)" right="lifetime accent" />
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

      {/* FAQ split (B) */}
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
          <WFLabel n={long?"08":"07"} title="CTA końcowe" />
          <div className="wf-box-accent" style={{padding:32, background:"linear-gradient(135deg, rgba(201,43,240,0.08) 0%, rgba(255,95,162,0.08) 100%)"}}>
            <h2 className="wf-h1" style={{fontSize:48}}>Gotowy?</h2>
            <p className="wf-p" style={{margin:"12px 0 20px"}}>Discord. Ludzie. Produkt. Decyzja potem.</p>
            <button className="wf-btn wf-btn-lg wf-discord-cta" style={{width:"100%", justifyContent:"center", fontSize:17}}>{CTA}</button>
          </div>
        </div>
      </div>

      <WFFooter />
    </div>
  );
}
window.VariantF = VariantF;
