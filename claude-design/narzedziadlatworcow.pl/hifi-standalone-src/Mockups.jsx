// Mockups.jsx — reusable app-screen mockups used in hero + how-it-works

function MockContent() {
  return (
    <div className="mock">
      <div className="mock-toolbar">
        <img src={window.__resources.logo} alt="NDT"/>
        <span style={{width:1, height:16, background:"hsl(283 68% 88%)"}}/>
        <span className="mock-chip"><span style={{width:10,height:10,borderRadius:3,background:"var(--brand-gradient)"}}/>Moje studio</span>
        <span className="mock-chip">Strategia</span>
        <span className="mock-chip">Inspiracje</span>
        <span className="mock-chip on">Content</span>
        <span className="mock-chip">Kurs</span>
        <span style={{flex:1}}/>
        <span className="mock-chip"><I.Zap/> 3 000 tok</span>
        <span style={{width:24, height:24, borderRadius:"50%", background:"var(--brand-gradient)"}}/>
      </div>
      <div className="mock-body">
        <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:4}}>
          <div className="mock-icon"><I.FolderOpen/></div>
          <div style={{flex:1}}>
            <div className="mock-title">Kanał YouTube · Q4</div>
            <div className="mock-sub">12 tematów · 4 w produkcji</div>
          </div>
          <button className="btn sm btn-primary"><I.Plus/> Nowy temat</button>
        </div>

        <div className="mock-grid-3">
          {[
            {tag:"Shorts · 60s", title:"Dlaczego 80% creatorów rezygnuje", state:"W pisaniu"},
            {tag:"Long · 12min", title:"Studio na 2 500 zł — setup", state:"Research"},
            {tag:"Seria · cz.3", title:"Od 0 do 10k subów — miesiąc 3", state:"Draft"},
          ].map((c,i)=>(
            <div key={i} className="mock-card">
              <div style={{display:"flex", gap:6, alignItems:"center", marginBottom:8}}>
                <span style={{fontSize:10, fontWeight:600, color:"hsl(286 86% 40%)", textTransform:"uppercase", letterSpacing:"0.08em"}}>{c.tag}</span>
              </div>
              <div style={{fontSize:13, fontWeight:600, lineHeight:1.3, marginBottom:10, letterSpacing:"-0.005em"}}>{c.title}</div>
              <div style={{display:"flex", gap:4, flexDirection:"column"}}>
                <div className="mock-bar long"/>
                <div className="mock-bar mid"/>
                <div className="mock-bar short"/>
              </div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:12, fontSize:11, color:"var(--muted-foreground)"}}>
                <span>{c.state}</span>
                <span>3h temu</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mock-card accent" style={{display:"flex", gap:12, alignItems:"flex-start"}}>
          <div className="mock-icon" style={{background:"hsl(286 86% 57%)", color:"#fff"}}><I.Sparkles/></div>
          <div style={{flex:1}}>
            <div style={{fontSize:12, fontWeight:600, marginBottom:6}}>Asystent strategii</div>
            <div style={{fontSize:12, color:"var(--muted-foreground)", lineHeight:1.5, marginBottom:10}}>Wygląda, że ten temat pasuje do serii <b style={{color:"var(--foreground)"}}>"Studio za mniej"</b>. Dodać go do serii i zaproponować 3 tytuły?</div>
            <div style={{display:"flex", gap:6}}>
              <button className="btn sm btn-primary">Dodaj do serii</button>
              <button className="btn sm btn-outline">Zaproponuj tytuły</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockStrategy() {
  const steps = [
    {icon:"Fingerprint", label:"Tożsamość", done:true},
    {icon:"Target", label:"Cele", done:true},
    {icon:"Package", label:"Oferta", done:true},
    {icon:"Users", label:"Widzowie", done:true},
    {icon:"Palette", label:"Styl", done:false, active:true},
    {icon:"Layers", label:"Serie", done:false},
  ];
  return (
    <div className="mock">
      <div className="mock-toolbar">
        <img src={window.__resources.logo} alt="NDT"/>
        <span style={{width:1, height:16, background:"hsl(283 68% 88%)"}}/>
        <span className="mock-chip on">Strategia</span>
        <span className="mock-chip">Inspiracje</span>
        <span className="mock-chip">Content</span>
        <span style={{flex:1}}/>
        <span className="mock-chip"><I.Zap/> 2 840 tok</span>
        <span style={{width:24, height:24, borderRadius:"50%", background:"var(--brand-gradient)"}}/>
      </div>
      <div className="mock-body">
        <div style={{display:"flex", alignItems:"center", gap:10}}>
          <div className="mock-icon"><I.Target/></div>
          <div style={{flex:1}}>
            <div className="mock-title">Strategia marki</div>
            <div className="mock-sub">5 z 6 etapów · postęp 83%</div>
          </div>
          <span className="badge badge-primary"><I.Sparkles/> AI asystent</span>
        </div>

        <div style={{display:"flex", gap:6}}>
          {steps.map((s,i) => {
            const Ic = I[s.icon];
            return (
              <div key={i} style={{
                flex:1, padding:"10px 8px", borderRadius:10,
                background: s.active ? "hsl(286 86% 57% / 0.12)" : s.done ? "hsl(142 70% 45% / 0.08)" : "hsl(289 100% 97%)",
                border: s.active ? "1.5px solid hsl(286 86% 57%)" : "1px solid hsl(283 68% 92%)",
                textAlign: "center"
              }}>
                <div style={{
                  width: 24, height:24, borderRadius:6, margin:"0 auto 6px",
                  background: s.done ? "hsl(142 70% 45%)" : s.active ? "hsl(286 86% 57%)" : "hsl(289 100% 94%)",
                  color: (s.done || s.active) ? "#fff" : "hsl(270 30% 50%)",
                  display:"inline-flex", alignItems:"center", justifyContent:"center"
                }}>
                  {s.done ? <I.Check style={{width:12,height:12}}/> : <Ic style={{width:12,height:12}}/>}
                </div>
                <div style={{fontSize:10, fontWeight:600, color: s.active ? "hsl(286 86% 40%)" : "var(--muted-foreground)"}}>{s.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mock-card accent">
          <div style={{display:"flex", gap:10, alignItems:"center", marginBottom:10}}>
            <div className="mock-icon" style={{background:"hsl(286 86% 57%)", color:"#fff"}}><I.Palette/></div>
            <div style={{fontSize:13, fontWeight:600}}>Etap 5 — Styl komunikacji</div>
          </div>
          <div style={{fontSize:11, color:"var(--muted-foreground)", marginBottom:8, fontWeight:500, letterSpacing:"0.04em", textTransform:"uppercase"}}>AI asystent</div>
          <div style={{fontSize:12, lineHeight:1.55, color:"var(--foreground)"}}>
            Na podstawie poprzednich odpowiedzi widzę, że Twoja marka jest <b>praktyczna, bezpośrednia i ciepła</b>. Czy chcesz, żebym zaproponował 3 wzorce stylistyczne (tone of voice + przykłady) dopasowane do Twojej niszy?
          </div>
          <div style={{display:"flex", gap:6, marginTop:10}}>
            <button className="btn sm btn-primary">Tak, pokaż</button>
            <button className="btn sm btn-outline">Napiszę sam</button>
          </div>
        </div>

        <div className="mock-card" style={{display:"flex", gap:10, alignItems:"center"}}>
          <div className="mock-icon"><I.History/></div>
          <div style={{flex:1, fontSize:12}}>
            <div style={{fontWeight:600, marginBottom:2}}>Plan serii na 8 tygodni — wygenerowany</div>
            <div style={{color:"var(--muted-foreground)"}}>2 dni temu · automatycznie zsynchronizowane z Content</div>
          </div>
          <span className="badge badge-success"><I.Check/> Aktywne</span>
        </div>
      </div>
    </div>
  );
}

function MockInspiration() {
  return (
    <div className="mock">
      <div className="mock-toolbar">
        <img src={window.__resources.logo} alt="NDT"/>
        <span style={{width:1, height:16, background:"hsl(283 68% 88%)"}}/>
        <span className="mock-chip">Strategia</span>
        <span className="mock-chip on">Inspiracje</span>
        <span className="mock-chip">Content</span>
        <span style={{flex:1}}/>
        <span className="mock-chip"><I.Zap/> 2 840 tok</span>
        <span style={{width:24, height:24, borderRadius:"50%", background:"var(--brand-gradient)"}}/>
      </div>
      <div className="mock-body">
        <div style={{display:"flex", alignItems:"center", gap:10}}>
          <div className="mock-icon"><I.Lightbulb/></div>
          <div style={{flex:1}}>
            <div className="mock-title">Inspiracje</div>
            <div className="mock-sub">28 nowych dzisiaj · z 6 źródeł</div>
          </div>
          <span className="badge badge-muted"><I.Rss/> 4 feedy</span>
          <span className="badge badge-muted"><I.Youtube/> 2 kanały</span>
        </div>

        <div className="mock-grid-2">
          {[
            {src:"YouTube · MKBHD", title:"The $200 studio camera setup", time:"2h", saved:true},
            {src:"RSS · The Verge", title:"Why short-form fatigue is real", time:"5h", saved:false},
            {src:"YouTube · Peter McKinnon", title:"Lighting bez wydawania fortuny", time:"1d", saved:true},
            {src:"RSS · Creator Economy", title:"2026 trends dla YT creatorów", time:"2d", saved:false},
          ].map((c,i)=>(
            <div key={i} className="mock-card" style={{display:"flex", gap:10}}>
              <div style={{width:64, height:44, borderRadius:8, background:"linear-gradient(135deg, hsl(286 86% 57% / 0.25), hsl(260 70% 60% / 0.25))", flexShrink:0}}/>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:10, color:"var(--muted-foreground)", fontWeight:500, marginBottom:3}}>{c.src} · {c.time}</div>
                <div style={{fontSize:12, fontWeight:600, lineHeight:1.35, marginBottom:6, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{c.title}</div>
                <div style={{display:"flex", gap:4}}>
                  {c.saved ? <span className="badge badge-primary" style={{height:20, padding:"0 8px", fontSize:10}}><I.BookmarkCheck/> Zapisane</span>
                   : <span className="badge badge-muted" style={{height:20, padding:"0 8px", fontSize:10}}><I.Bookmark/> Zapisz</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mock-card accent" style={{display:"flex", gap:10, alignItems:"center"}}>
          <div className="mock-icon" style={{background:"hsl(286 86% 57%)", color:"#fff"}}><I.Sparkles/></div>
          <div style={{flex:1, fontSize:12, lineHeight:1.5}}>
            <b>3 zapisane pasują do Twojej serii "Studio za mniej"</b> — chcesz je przekształcić w tematy?
          </div>
          <button className="btn sm btn-primary">Przekształć →</button>
        </div>
      </div>
    </div>
  );
}

function MockCourse() {
  return (
    <div className="mock">
      <div className="mock-toolbar">
        <img src={window.__resources.logo} alt="NDT"/>
        <span style={{width:1, height:16, background:"hsl(283 68% 88%)"}}/>
        <span className="mock-chip">Strategia</span>
        <span className="mock-chip">Inspiracje</span>
        <span className="mock-chip">Content</span>
        <span className="mock-chip on">Kurs</span>
        <span style={{flex:1}}/>
        <span style={{width:24, height:24, borderRadius:"50%", background:"var(--brand-gradient)"}}/>
      </div>
      <div className="mock-body">
        <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:4}}>
          <div className="mock-icon"><I.GraduationCap/></div>
          <div style={{flex:1}}>
            <div className="mock-title">Kurs podstaw</div>
            <div className="mock-sub">6 z 12 modułów ukończonych · ~3h 20min</div>
          </div>
        </div>

        <div style={{
          height: 120, borderRadius: 12, position: "relative", overflow: "hidden",
          background: `#1a0e2e url(${window.__resources.courseThumb}) center/cover`
        }}>
          <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, transparent 40%, hsl(266 51% 8% / 0.85) 100%)"}}/>
          <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:44, height:44, borderRadius:"50%", background:"hsl(0 0% 100% / 0.95)", display:"inline-flex", alignItems:"center", justifyContent:"center", color:"hsl(266 51% 16%)"}}>
            <I.Play style={{width:16, height:16, marginLeft:2}}/>
          </div>
          <div style={{position:"absolute", bottom:10, left:12, right:12, color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"flex-end"}}>
            <div>
              <div style={{fontSize:12, fontWeight:600}}>Moduł 7 — Pierwszy tysiąc subów</div>
              <div style={{fontSize:10, opacity:0.75}}>18 min · z Nikodemem Rudzińskim</div>
            </div>
            <span className="badge badge-dark-soft" style={{height:20, fontSize:10}}>W TRAKCIE</span>
          </div>
        </div>

        {[
          {n:"08", t:"Tytuły i miniaturki — psychologia CTR", done:false},
          {n:"09", t:"Retention hack — pierwsza minuta", done:false},
          {n:"10", t:"Growth loop — od 1k do 10k", done:false},
        ].map((m,i) => (
          <div key={i} className="mock-card" style={{display:"flex", gap:10, alignItems:"center"}}>
            <span className="num-chip" style={{width:28, height:28, borderRadius:8, background:"hsl(286 86% 57% / 0.12)", color:"hsl(286 86% 40%)", fontSize:11, fontWeight:600, display:"inline-flex", alignItems:"center", justifyContent:"center"}}>{m.n}</span>
            <div style={{flex:1, fontSize:12, fontWeight:500}}>{m.t}</div>
            <I.Play style={{width:14, height:14, color:"hsl(286 86% 45%)"}}/>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { MockContent, MockStrategy, MockInspiration, MockCourse });
