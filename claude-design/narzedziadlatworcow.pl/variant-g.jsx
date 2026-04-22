// Wariant G v3 — finalna \u015bcie\u017cka u\u017cytkownika
// CTA: platforma (nie Discord). Discord = social proof badge.
// Pricing: Kurs+Strategia 199z\u0142 \u00b7 Subskrybcja 79z\u0142/mc (wkr\u00f3tce \u2192 lifetime) \u00b7 Lifetime 399z\u0142 (Hormozi-style stack)
// Dark section skr\u00f3cona.

function VariantG({ headlineIdx = 0, ctaIdx = 0, long = true }) {
  const H = HEADLINES[headlineIdx];

  // Lokalne CTA — skupione na platformie, nie na Discordzie
  const CTA_MAIN = "Zacznij od 199 zł →";
  const CTA_ALT  = "Zobacz, co dostajesz";

  return (
    <div className="wf">
      <WFNav variant="G" />

      {/* 1. HERO */}
      <div className="wf-section" style={{padding:"64px 48px"}}>
        <WFLabel n="01" title="Hero split" right="hook + CTA na produkt" />
        <div className="wf-grid" style={{gridTemplateColumns:"1.1fr 1fr", gap:48, alignItems:"center"}}>
          <div className="wf-col wf-gap-5">
            <span className="wf-pill wf-pill-brand">early access · zamknięta beta</span>
            <h1 className="wf-h1" style={{fontSize:56}}>{H.main} <em>{H.accent}</em></h1>
            <p className="wf-p" style={{fontSize:17}}>{H.sub}</p>
            <div className="wf-flex wf-gap-3">
              <button className="wf-btn wf-btn-primary wf-btn-lg">{CTA_MAIN}</button>
              <button className="wf-btn wf-btn-lg wf-btn-ghost">{CTA_ALT}</button>
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

      {/* 2. CYTATY — lżejsze wejście w problem */}
      <div className="wf-section">
        <WFLabel n="02" title="Znasz to uczucie?" right="lekki problem" />
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
          <span className="wf-anno wf-scribble" style={{fontSize:22}}>↓ to nie Twoja wina. Brakuje systemu.</span>
        </div>
      </div>

      {/* 3. DARK PROBLEM — krótko (padding zmniejszony, jedno zdanie, bez dodatkowego akapitu) */}
      <div className="wf-section" style={{background:"var(--ink)", color:"#fff", padding:"36px 48px"}}>
        <div style={{maxWidth:900, display:"flex", alignItems:"center", gap:24, flexWrap:"wrap"}}>
          <span className="wf-label" style={{color:"rgba(255,255,255,0.5)", flexShrink:0}}>03 — punkt bólu</span>
          <h2 className="wf-scribble" style={{fontSize:34, lineHeight:1.15, color:"#fff", margin:0, flex:1, minWidth:280}}>
            Bez strategii każdy post to <span style={{color:"var(--brand)"}}>zgadywanka</span>.
          </h2>
        </div>
      </div>

      {/* 4. MANIFEST */}
      <div className="wf-section" style={{textAlign:"center", padding:"60px 48px"}}>
        <WFLabel n="04" title="Manifest" right="punkt zwrotny" />
        <h2 className="wf-h1" style={{fontSize:52, maxWidth:820, margin:"0 auto"}}>
          Wierzymy, że tworzenie <em>zasługuje</em><br/>na lepsze narzędzia niż <span style={{textDecoration:"line-through", opacity:0.5}}>15 zakładek</span>.
        </h2>
        <p className="wf-p" style={{fontSize:17, maxWidth:600, margin:"20px auto 0"}}>
          NDT to nie kolejny „AI writer”.<br/>To system: strategia → research → produkcja.
        </p>
      </div>

      {/* 5. JAK DZIAŁA */}
      <div className="wf-section">
        <WFLabel n="05" title="Jak działa — 4 kroki" right="konkret" />
        <div className="wf-grid wf-grid-4">
          {[
            {t:"Strategia", d:"7 etapów · ~60 min"},
            {t:"Research", d:"Feedy YT/RSS, zapisane"},
            {t:"Pisanie", d:"AI z pamięcią marki"},
            {t:"Eksport", d:"MD, docx, pdf"},
          ].map((s,i)=>(
            <div key={i} className="wf-col wf-gap-3" style={{position:"relative"}}>
              <span className="wf-step">{i+1}</span>
              <h3 className="wf-h3">{s.t}</h3>
              <p className="wf-p" style={{fontSize:13}}>{s.d}</p>
              <WFImg h={90} label={`krok ${i+1}`} />
              {i < 3 && <span className="wf-anno" style={{position:"absolute", top:10, right:-14, fontSize:22}}>→</span>}
            </div>
          ))}
        </div>
      </div>

      {long && (
      <>
      {/* 6. KURS — social proof */}
      <div className="wf-section" style={{padding:"60px 48px", background:"var(--brand-soft)", borderTop:"2px solid var(--brand)", borderBottom:"2px solid var(--brand)"}}>
        <WFLabel n="06" title="Kurs — Nadaj treściom kierunek" right="social proof + wartość" />
        <div className="wf-grid wf-grid-2" style={{gap:48, alignItems:"center"}}>
          <div>
            <span className="wf-eyebrow">prowadzi</span>
            <h2 className="wf-h1" style={{fontSize:44, margin:"8px 0 4px"}}>Nikodem Rudziński</h2>
            <div className="wf-hand" style={{fontSize:18, color:"var(--muted)", marginBottom:16}}>@Szhakal · twórca YouTube</div>
            <p className="wf-p" style={{fontSize:17, marginBottom:20}}>Kurs, który jest jednocześnie mapą produktu. Robisz ćwiczenia, wypełniasz strategię w aplikacji, kończysz z marką.</p>
            <div className="wf-flex wf-gap-3" style={{alignItems:"center", flexWrap:"wrap"}}>
              <button className="wf-btn wf-btn-primary wf-btn-lg">Program kursu →</button>
              <span className="wf-pill">💬 540+ w zamkniętej społeczności</span>
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

      {/* 7. PRICING — Hormozi-style */}
      <div className="wf-section">
        <WFLabel n={long?"07":"06"} title="Pricing — wybierz wejście" right="moment decyzji" />

        <div className="wf-grid" style={{gridTemplateColumns:"1fr 1fr 1.25fr", gap:16, alignItems:"stretch"}}>

          {/* Kurs + Strategia — podstawowy */}
          <div className="wf-box" style={{padding:22, display:"flex", flexDirection:"column"}}>
            <span className="wf-eyebrow">Start</span>
            <h3 className="wf-h3" style={{marginTop:4}}>Kurs + Strategia</h3>
            <div className="wf-price" style={{marginTop:12, fontSize:36}}>199 zł</div>
            <p className="wf-p" style={{fontSize:12, marginTop:2, color:"var(--muted)"}}>jednorazowo · dostęp na zawsze</p>
            <div className="wf-col wf-gap-2" style={{marginTop:16, marginBottom:20, flex:1}}>
              <div className="wf-check">Pełny kurs „Nadaj treściom kierunek”</div>
              <div className="wf-check">Workbook strategii marki</div>
              <div className="wf-check">Materiały do pobrania</div>
              <div className="wf-x" style={{color:"var(--muted)", fontSize:13}}>✕ Bez dostępu do aplikacji</div>
            </div>
            <button className="wf-btn" style={{width:"100%", justifyContent:"center"}}>Kup kurs</button>
          </div>

          {/* Subskrybcja — zablokowana, CTA do lifetime */}
          <div className="wf-box" style={{padding:22, display:"flex", flexDirection:"column", position:"relative", opacity:0.75}}>
            <div style={{position:"absolute", top:12, right:12}}>
              <span className="wf-pill" style={{background:"#f1f1ee", color:"var(--muted)"}}>🔒 beta zamknięta</span>
            </div>
            <span className="wf-eyebrow">Subskrybcja</span>
            <h3 className="wf-h3" style={{marginTop:4}}>Aplikacja NDT</h3>
            <div className="wf-price" style={{marginTop:12, fontSize:36}}>79 zł<span style={{fontSize:14, fontWeight:400, color:"var(--muted)"}}>/mc</span></div>
            <p className="wf-p" style={{fontSize:12, marginTop:2, color:"var(--muted)"}}>start po becie · 1 workspace</p>
            <div className="wf-col wf-gap-2" style={{marginTop:16, marginBottom:20, flex:1}}>
              <div className="wf-check">Kurs + strategia</div>
              <div className="wf-check">Aplikacja: research, pisanie, eksport</div>
              <div className="wf-check">Inspiracje i biblioteka</div>
              <div className="wf-check">1 workspace</div>
            </div>
            <div className="wf-box-dashed" style={{padding:10, fontSize:12, textAlign:"center", marginBottom:10}}>
              <span className="wf-hand">Chcesz wejść teraz?</span><br/>
              <b style={{color:"var(--brand)"}}>→ Lifetime daje dostęp do bety</b>
            </div>
          </div>

          {/* LIFETIME — Hormozi stack */}
          <div className="wf-box-thick" style={{padding:24, display:"flex", flexDirection:"column", position:"relative", background:"var(--brand-soft)"}}>
            <div style={{position:"absolute", top:-12, left:20, display:"flex", gap:6}}>
              <span className="wf-pill wf-pill-brand">⚡ best value</span>
              <span className="wf-pill" style={{background:"#fff8b8", borderColor:"#d4c24a", color:"#5a4a10"}}>limited · 50 miejsc</span>
            </div>
            <span className="wf-eyebrow">Lifetime</span>
            <h3 className="wf-h3" style={{marginTop:4, fontSize:22}}>Wszystko + beta aplikacji</h3>

            {/* Stack wartości — Hormozi style */}
            <div className="wf-col wf-gap-2" style={{marginTop:18, padding:"12px 14px", background:"#fff", border:"1.5px solid var(--ink)", borderRadius:6}}>
              <div className="wf-flex" style={{justifyContent:"space-between", fontSize:14}}>
                <span>Kurs + Strategia</span>
                <span style={{fontFamily:"var(--hand)"}}>199 zł</span>
              </div>
              <div className="wf-flex" style={{justifyContent:"space-between", fontSize:14}}>
                <span>1 rok aplikacji (79 zł × 12)</span>
                <span style={{fontFamily:"var(--hand)"}}>948 zł</span>
              </div>
              <div className="wf-flex" style={{justifyContent:"space-between", fontSize:14}}>
                <span>Dostęp do zamkniętej społeczności</span>
                <span style={{fontFamily:"var(--hand)"}}>bezcenne</span>
              </div>
              <div className="wf-flex" style={{justifyContent:"space-between", fontSize:14}}>
                <span>Lifetime −20% na kolejne lata</span>
                <span style={{fontFamily:"var(--hand)"}}>∞</span>
              </div>
              <div style={{height:1, background:"var(--ink)", margin:"4px 0"}} />
              <div className="wf-flex" style={{justifyContent:"space-between", fontSize:14}}>
                <span style={{color:"var(--muted)"}}>Wartość razem</span>
                <span style={{textDecoration:"line-through", color:"var(--muted)"}}>1 147 zł+</span>
              </div>
              <div className="wf-flex" style={{justifyContent:"space-between", fontSize:16, fontWeight:700}}>
                <span>Płacisz dziś</span>
                <span style={{color:"var(--brand)", fontSize:22}}>399 zł</span>
              </div>
            </div>

            <p className="wf-hand" style={{fontSize:13, color:"var(--muted)", marginTop:12, marginBottom:14}}>
              ≈ 65% taniej · zwrot po ~5 miesiącach używania aplikacji
            </p>

            <button className="wf-btn wf-btn-primary wf-btn-lg" style={{width:"100%", justifyContent:"center", marginTop:"auto"}}>
              Chcę lifetime — wejdź do bety
            </button>
          </div>

        </div>

        {/* Dodatkowy social proof pod cennikiem — Discord jako dowód, nie cel */}
        <div className="wf-flex" style={{justifyContent:"center", gap:24, marginTop:24, flexWrap:"wrap", fontSize:13, color:"var(--muted)"}}>
          <span>💬 540+ twórców w społeczności</span>
          <span>·</span>
          <span>🔒 14 dni gwarancji zwrotu</span>
          <span>·</span>
          <span>⚡ Natychmiastowy dostęp do kursu</span>
        </div>
      </div>

      {/* 8. FAQ + CTA split */}
      <div className="wf-section wf-grid wf-grid-2" style={{gap:32}}>
        <div>
          <WFLabel n={long?"08":"07"} title="FAQ" right="ostatnie obiekcje" />
          <div className="wf-col wf-gap-2">
            {[
              "Kiedy ruszy aplikacja?",
              "Czym różni się lifetime od subskrybcji?",
              "Czy kurs jest po polsku?",
              "Co jeśli nie będzie mi się podobać?",
              "Ile miejsc lifetime zostało?",
            ].map(q=>(
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
          <WFLabel n={long?"09":"08"} title="Dołącz teraz" right="finał" />
          <div className="wf-box-accent" style={{padding:32}}>
            <h2 className="wf-h2">Zacznij budować system.</h2>
            <p className="wf-p" style={{margin:"12px 0 20px"}}>Kurs masz dziś. Aplikację — jako jeden z pierwszych, jeśli wybierzesz lifetime.</p>
            <div className="wf-flex wf-gap-3" style={{flexDirection:"column"}}>
              <button className="wf-btn wf-btn-primary wf-btn-lg" style={{width:"100%", justifyContent:"center"}}>{CTA_MAIN}</button>
              <button className="wf-btn wf-btn-lg" style={{width:"100%", justifyContent:"center"}}>Chcę lifetime (399 zł)</button>
            </div>
            <p className="wf-hand" style={{fontSize:12, color:"var(--muted)", textAlign:"center", marginTop:12}}>💬 Discord społeczność dostępna po zakupie</p>
          </div>
        </div>
      </div>

      <WFFooter />
    </div>
  );
}
window.VariantG = VariantG;
