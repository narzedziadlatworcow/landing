// Wariant A: Centered hero, edukacyjny, d\u0142ugi layout, spokojny
// G\u0142\u00f3wny ruch: Hero \u2192 Dla kogo \u2192 Problem \u2192 Rozwi\u0105zanie \u2192 Moduły \u2192 Jak działa \u2192 Kurs \u2192 Pricing \u2192 FAQ

function VariantA({ headlineIdx = 0, ctaIdx = 0, long = true }) {
  const H = HEADLINES[headlineIdx];
  const CTA = CTA_PRIMARY[ctaIdx];
  const CTA2 = CTA_SECONDARY[ctaIdx];
  return (
    <div className="wf">
      <WFNav variant="A" />

      {/* HERO */}
      <div className="wf-section" style={{padding:"72px 48px 48px", textAlign:"center"}}>
        <WFLabel n="01" title="Hero — centered" right="edukacyjny ton" />
        <div style={{maxWidth:740, margin:"0 auto", display:"flex", flexDirection:"column", gap:24, alignItems:"center"}}>
          <span className="wf-pill wf-pill-brand">◆ Zbuduj markę, która ma głos</span>
          <h1 className="wf-h1" style={{textAlign:"center"}}>
            {H.main} <em>{H.accent}</em>
          </h1>
          <p className="wf-p" style={{fontSize:18, maxWidth:580}}>{H.sub}</p>
          <div className="wf-flex wf-gap-4" style={{marginTop:8}}>
            <button className="wf-btn wf-btn-primary wf-btn-lg wf-discord-cta">{CTA}</button>
            <button className="wf-btn wf-btn-lg wf-btn-ghost">{CTA2}</button>
          </div>
          <div className="wf-flex wf-gap-4" style={{marginTop:16, alignItems:"center", opacity:0.7}}>
            <div className="wf-flex" style={{marginLeft:8}}>
              {[0,1,2,3].map(i=>(
                <span key={i} className="wf-avatar" style={{width:28, height:28, fontSize:11, marginLeft:-8, background:`hsl(${280+i*15} 60% 85%)`}}>N{i+1}</span>
              ))}
            </div>
            <span className="wf-hand" style={{fontSize:13, color:"var(--muted)"}}>+ 120 twórców w społeczności</span>
          </div>
        </div>
        <div style={{maxWidth:860, margin:"48px auto 0"}}>
          <WFImg h={360} label="duży screenshot aplikacji — workspace strategia" />
        </div>
      </div>

      {/* LOGO BAR / PROOF */}
      <div className="wf-section" style={{padding:"28px 48px"}}>
        <div style={{textAlign:"center", marginBottom:16}}>
          <span className="wf-eyebrow">Twórcy z którymi budujemy</span>
        </div>
        <div className="wf-flex wf-gap-8" style={{justifyContent:"center", flexWrap:"wrap"}}>
          {["@Szhakal","logo 2","logo 3","logo 4","logo 5"].map(l=>(
            <div key={l} className="wf-box-dashed" style={{padding:"12px 20px", fontFamily:"var(--hand)", opacity:0.7}}>{l}</div>
          ))}
        </div>
      </div>

      {/* DLA KOGO */}
      <div className="wf-section">
        <WFLabel n="02" title="Dla kogo to jest" />
        <div className="wf-grid wf-grid-3">
          {[
            {t:"Solo twórca", d:"Zaczynasz i nie wiesz od czego. Brakuje Ci systemu."},
            {t:"JDG / marka osobista", d:"Tworzysz, ale chcesz budować spójną narrację."},
            {t:"Kursant / freelancer", d:"Uczysz się i potrzebujesz narzędzi, które nie walczą z Tobą."},
          ].map((p,i)=>(
            <div key={i} className="wf-box" style={{padding:20}}>
              <div className="wf-flex wf-gap-3" style={{alignItems:"center", marginBottom:10}}>
                <span className="wf-icon wf-icon-lg" />
                <h3 className="wf-h3">{p.t}</h3>
              </div>
              <p className="wf-p" style={{fontSize:14}}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM -> ROZWIĄZANIE */}
      <div className="wf-section">
        <WFLabel n="03" title="Zamiast chaosu — system" />
        <div className="wf-grid wf-grid-2" style={{gap:32}}>
          <div className="wf-box-dashed" style={{padding:28}}>
            <span className="wf-eyebrow" style={{color:"#d64545"}}>bez ndt</span>
            <h3 className="wf-h3" style={{marginTop:10, marginBottom:16}}>Notion, ChatGPT, 15 kart w przeglądarce</h3>
            <div className="wf-col wf-gap-3">
              {["Nie wiesz, czy to co piszesz pasuje do Twojej marki.","Każdy post piszesz od zera.","Pomysły umierają w zakładkach.","Strategia? „Zrobię później”."].map(x=>(
                <div key={x} className="wf-flex wf-gap-3" style={{alignItems:"flex-start"}}>
                  <span style={{fontFamily:"var(--hand)", color:"#d64545", fontWeight:700, fontSize:18}}>✕</span>
                  <span className="wf-hand" style={{fontSize:15}}>{x}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="wf-box-accent" style={{padding:28}}>
            <span className="wf-eyebrow">z ndt</span>
            <h3 className="wf-h3" style={{marginTop:10, marginBottom:16}}>Jedno miejsce. Twój kontekst. Twój głos.</h3>
            <div className="wf-col wf-gap-3">
              {["AI zna Twoją strategię — pisze jak Ty.","Research + pomysły + scenariusze — razem.","Eksport do każdego formatu (YT, IG, blog).","7-etapowy framework — prowadzi za rękę."].map(x=>(
                <div key={x} className="wf-check">{x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODUŁY */}
      <div className="wf-section">
        <WFLabel n="04" title="Trzy moduły, jeden flow" />
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

      {/* JAK TO DZIAŁA */}
      <div className="wf-section">
        <WFLabel n="05" title="Jak to działa" />
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
      {/* KURS */}
      <div className="wf-section">
        <WFLabel n="06" title="Kurs: Nadaj treściom kierunek" />
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

      {/* PORÓWNANIE */}
      <div className="wf-section">
        <WFLabel n="07" title="Dlaczego nie Notion + ChatGPT" />
        <div className="wf-box" style={{padding:0, overflow:"hidden"}}>
          <div className="wf-grid" style={{gridTemplateColumns:"2fr 1fr 1fr 1fr", borderBottom:"1.5px solid var(--line)", background:"var(--paper-2)"}}>
            {["", "ndt", "Notion+GPT", "freestyle"].map((h,i)=>(
              <div key={i} className="wf-scribble" style={{padding:"12px 16px", fontSize:18, textAlign: i===0 ? "left" : "center"}}>{h}</div>
            ))}
          </div>
          {[
            ["Kontekst Twojej marki w AI","✓","~","✕"],
            ["Framework strategii","✓","✕","✕"],
            ["Research + content w jednym","✓","✕","✕"],
            ["Kurs + społeczność","✓","✕","✕"],
            ["Eksport do formatów","✓","~","✕"],
          ].map((row,i)=>(
            <div key={i} className="wf-grid" style={{gridTemplateColumns:"2fr 1fr 1fr 1fr", borderBottom: i===4?"none":"1.5px dashed rgba(43,22,69,0.2)"}}>
              {row.map((c,j)=>(
                <div key={j} className="wf-hand" style={{padding:"10px 16px", textAlign: j===0 ? "left":"center", fontSize: j===0?14:18, color: c==="✓"?"var(--brand)":c==="✕"?"#d64545":"var(--muted)"}}>{c}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </>
      )}

      {/* PRICING */}
      <div className="wf-section">
        <WFLabel n={long?"08":"06"} title="Cennik" right="+ toggle mies/rok" />
        <div className="wf-grid wf-grid-3">
          {[
            {n:"Solo", p:"Free", t:"Solo creator, jedna marka.", feat:["1 workspace","500 tokenów / mies","Podstawowa strategia","Eksport .md"]},
            {n:"Creator", p:"$15", t:"Pełny produkt, bez limitów.", feat:["3 workspace'y","3 000 tokenów / mies","Pełna Strategia (7 etapów)","Wszystkie formaty eksportu"], primary:true},
            {n:"Lifetime", p:"$299", t:"Jednorazowo. Dostęp na zawsze + kurs.", feat:["Wszystko z Creator","Kurs w cenie","−30% na nowe produkty","Early access"], lifetime:true},
          ].map((pl,i)=>(
            <div key={i} className={pl.primary?"wf-box-accent":"wf-box"} style={{padding:24, position:"relative"}}>
              {pl.primary && <div style={{position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)"}} className="wf-pill wf-pill-brand">Najczęściej wybierany</div>}
              {pl.lifetime && <div style={{position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)"}} className="wf-pill" style={{background:"#fff8b8", borderColor:"#d4c24a"}}>early access · −30% na zawsze</div>}
              <h3 className="wf-h3" style={{marginBottom:4}}>{pl.n}</h3>
              <p className="wf-p" style={{fontSize:13, marginBottom:16}}>{pl.t}</p>
              <div className="wf-price">
                {pl.p === "Free" ? "Free" : (<><span className="cur">$</span>{pl.p.replace("$","")}<span className="per">{pl.lifetime?"/ once":"/ mies"}</span></>)}
              </div>
              <div className="wf-col wf-gap-3" style={{marginTop:16, marginBottom:20}}>
                {pl.feat.map(f=><div key={f} className="wf-check">{f}</div>)}
              </div>
              <button className={"wf-btn "+(pl.primary?"wf-btn-primary":"")+" wf-btn-lg"} style={{width:"100%", justifyContent:"center"}}>
                {pl.primary ? "Wybierz Creator →" : pl.lifetime ? "Chcę lifetime →" : "Zacznij za darmo"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="wf-section">
        <WFLabel n={long?"09":"07"} title="FAQ" />
        <div className="wf-box" style={{padding:"0 24px"}}>
          {[
            "Czy mogę zacząć za darmo?",
            "Jak działa kurs — dostaję dostęp na zawsze?",
            "Czy moja strategia jest prywatna?",
            "Ile kosztuje lifetime i co dostaję?",
            "Anulowanie — na jakich zasadach?",
          ].map((q,i)=>(
            <div key={i} className="wf-faq-item">
              <span className="wf-hand" style={{fontSize:16}}>{q}</span>
              <span className="wf-anno">+</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA KOŃCOWE */}
      <div className="wf-section" style={{textAlign:"center", padding:"72px 48px"}}>
        <h2 className="wf-h1" style={{fontSize:48}}>Dołącz do <em>społeczności</em>.</h2>
        <p className="wf-p" style={{fontSize:18, maxWidth:560, margin:"16px auto 28px"}}>Discord otwarty dla każdego. Produkt w early access. Ruszasz z nami od początku.</p>
        <div className="wf-flex wf-gap-4" style={{justifyContent:"center"}}>
          <button className="wf-btn wf-btn-lg wf-discord-cta">{CTA}</button>
          <button className="wf-btn wf-btn-lg wf-btn-ghost">Zapisz się na newsletter</button>
        </div>
      </div>

      <WFFooter />
    </div>
  );
}

window.VariantA = VariantA;
