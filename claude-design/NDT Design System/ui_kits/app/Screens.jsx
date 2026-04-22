// Content.jsx — projects list + topics with linked pieces (matches list-page.tsx)
const { useState: useStateC, useMemo: useMemoC } = React;

const PROJECTS = [
  { id:"p1", name:"Podcast — 2026 Q2" },
  { id:"p2", name:"Kampania launch narzędzia" },
  { id:"p3", name:"Newsletter biweekly" },
];

const TOPICS = [
  { id:"t1", title:"Jak nie dać się AI, czyli co jeszcze ma sens w marketingu 2026", status:"gotowe", pieces:["LinkedIn post","YouTube script","Newsletter"] },
  { id:"t2", title:"3 niedoceniane źródła pomysłów na content", status:"w trakcie", pieces:["LinkedIn post"] },
  { id:"t3", title:"Polski startup dla twórców — czego uczymy się od Was", status:"research", pieces:[] },
  { id:"t4", title:"Dlaczego długie formaty wracają (i co z tym zrobić)", status:"draft", pieces:["YouTube script","Blog post"] },
];

const STATUS_STYLE = {
  "gotowe":    { cls:"badge-success",  label:"Gotowe" },
  "w trakcie": { cls:"badge-primary",  label:"W trakcie" },
  "research":  { cls:"badge-muted",    label:"Research" },
  "draft":     { cls:"badge-outline",  label:"Draft" },
};

function ProjectRow({ p }) {
  return (
    <button style={{display:"flex", alignItems:"center", gap:10, padding:"12px 16px", textAlign:"left", fontSize:13, background:"transparent", width:"100%", transition:"background .15s"}}
      onMouseEnter={e => e.currentTarget.style.background = "hsl(276 100% 96%)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
      <I.FolderOpen style={{width:16, height:16, color:"var(--muted-foreground)"}}/>
      <span>{p.name}</span>
    </button>
  );
}

function TopicRow({ t, onOpen }) {
  const st = STATUS_STYLE[t.status];
  return (
    <button onClick={onOpen} style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"14px 16px", textAlign:"left", fontSize:13, background:"transparent", width:"100%", transition:"background .15s"}}
      onMouseEnter={e => e.currentTarget.style.background = "hsl(276 100% 96%)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
      <div style={{display:"flex", alignItems:"center", gap:12, flex:1, minWidth:0}}>
        <I.Sparkles style={{width:16, height:16, color:"hsl(286 86% 57%)", flexShrink:0}}/>
        <span style={{flex:1, textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>{t.title}</span>
      </div>
      <div style={{display:"flex", alignItems:"center", gap:8, flexShrink:0}}>
        {t.pieces.length > 0 && <span style={{fontSize:11, color:"var(--muted-foreground)"}}>{t.pieces.length} mat.</span>}
        <span className={"badge " + st.cls}>{st.label}</span>
      </div>
    </button>
  );
}

function Content({ onOpenTopic }) {
  const [search, setSearch] = useStateC("");
  const [sortAsc, setSortAsc] = useStateC(false);
  const topics = useMemoC(() => {
    const filtered = TOPICS.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
    return sortAsc ? filtered : [...filtered].reverse();
  }, [search, sortAsc]);

  return (
    <div style={{maxWidth:900, margin:"0 auto", padding:"16px 16px 60px", display:"flex", flexDirection:"column", gap:24}}>
      <section>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 4px", marginBottom:12}}>
          <h2 style={{margin:0, fontSize:18, fontWeight:600}}>Projekty</h2>
          <button className="btn btn-ghost icon sm" title="Nowy projekt"><I.Plus/></button>
        </div>
        <div className="glass" style={{padding:0, overflow:"hidden"}}>
          {PROJECTS.map((p,i) => (
            <React.Fragment key={p.id}>
              {i>0 && <div className="divider" style={{opacity:0.5}}/>}
              <ProjectRow p={p}/>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 4px", marginBottom:12}}>
          <h2 style={{margin:0, fontSize:18, fontWeight:600}}>Tematy</h2>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            <div className="input-wrap has-icon" style={{width:200}}>
              <I.Search className="leading"/>
              <input className="input sm" placeholder="Szukaj..." value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>
            <button className="btn btn-ghost icon sm" onClick={()=>setSortAsc(v=>!v)} title="Zmień kolejność"><I.ArrowUpDown/></button>
            <button className="btn btn-primary sm"><I.Plus/> Nowy temat</button>
          </div>
        </div>
        <div className="glass" style={{padding:0, overflow:"hidden"}}>
          {topics.map((t,i) => (
            <React.Fragment key={t.id}>
              {i>0 && <div className="divider" style={{opacity:0.5}}/>}
              <TopicRow t={t} onOpen={()=>onOpenTopic?.(t)}/>
            </React.Fragment>
          ))}
          {topics.length === 0 && (
            <div style={{padding:"24px 16px", textAlign:"center", fontSize:12, color:"var(--muted-foreground)"}}>
              Brak tematów pasujących do wyszukiwania
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// -------- Strategy (7-stage sidebar) --------
const STRATEGY_STAGES = [
  { id:1, icon:"Fingerprint", name:"Tożsamość",     desc:"Nisza, wartości, doświadczenia i misja — fundament, nie biurokracja.", done:true },
  { id:2, icon:"Target",      name:"Cele",          desc:"Co chcesz osiągnąć w następnych 3 miesiącach?", done:true },
  { id:3, icon:"Package",     name:"Oferta",        desc:"Produkty i usługi, które sprzedajesz swojej publiczności.", done:false, current:true },
  { id:4, icon:"Users",       name:"Widzowie",      desc:"Kim są i jakich problemów szukają rozwiązania?", done:false },
  { id:5, icon:"Palette",     name:"Styl",          desc:"Ton głosu i wizualna tożsamość twojej marki.", done:false },
  { id:6, icon:"Layers",      name:"Serie",         desc:"Cykle treści, które się powtarzają i budują rozpoznawalność.", done:false },
  { id:7, icon:"Sparkles",    name:"Podsumowanie",  desc:"Wszystko razem — twój brand w jednym miejscu.", done:false },
];

function Strategy() {
  const [active, setActive] = useStateC(3);
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"16px 16px 60px", display:"grid", gridTemplateColumns:"280px 1fr", gap:16}}>
      <aside className="glass" style={{padding:12, display:"flex", flexDirection:"column", gap:4, height:"fit-content", position:"sticky", top:88}}>
        <span className="eyebrow" style={{padding:"6px 10px"}}>Strategia marki</span>
        {STRATEGY_STAGES.map(s => {
          const SIcon = I[s.icon];
          const isActive = active === s.id;
          return (
            <button key={s.id} onClick={()=>setActive(s.id)} style={{
              display:"flex", alignItems:"center", gap:10, padding:"10px 12px", borderRadius:10, textAlign:"left",
              background: isActive ? "hsl(286 86% 57% / 0.12)" : "transparent",
              color: isActive ? "hsl(286 86% 40%)" : "var(--foreground)",
              transition:"all .15s",
            }}>
              <div style={{
                width:26, height:26, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
                background: s.done ? "hsl(142 70% 45%)" : isActive ? "hsl(286 86% 57%)" : "hsl(289 100% 97%)",
                color: s.done || isActive ? "#fff" : "var(--muted-foreground)",
                fontSize:11, fontWeight:600, flexShrink:0,
              }}>{s.done ? <I.Check style={{width:14, height:14}}/> : s.id}</div>
              <div style={{display:"flex", flexDirection:"column", gap:1, flex:1}}>
                <span style={{fontSize:13, fontWeight: isActive ? 600 : 500}}>{s.name}</span>
              </div>
              <SIcon style={{width:14, height:14, opacity:0.5, flexShrink:0}}/>
            </button>
          );
        })}
      </aside>
      <main style={{display:"flex", flexDirection:"column", gap:16}}>
        <div className="glass" style={{padding:28}}>
          <span className="eyebrow">Etap 3 z 7 · Oferta</span>
          <h1 style={{margin:"8px 0 10px", fontSize:30, fontWeight:700, letterSpacing:"-0.02em"}}>Co sprzedajesz?</h1>
          <p style={{margin:"0 0 20px", color:"var(--muted-foreground)", fontSize:14, lineHeight:1.55, maxWidth:640}}>
            Produkty i usługi to fundament — bez nich strategia wisi w powietrzu. Napisz, co oferujesz teraz, albo co chcesz oferować w ciągu 3 miesięcy. AI pomoże Ci to uporządkować.
          </p>
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            <div style={{padding:14, background:"hsl(289 100% 97%)", border:"1px solid hsl(283 68% 88%)", borderRadius:12, display:"flex", gap:10}}>
              <I.Bot style={{width:18, height:18, color:"hsl(286 86% 57%)", flexShrink:0, marginTop:1}}/>
              <div style={{fontSize:13, lineHeight:1.5}}>
                <strong style={{fontWeight:600}}>Asystent:</strong> Na podstawie twojej tożsamości („edukacja twórców w PL") proponuję trzy kategorie oferty: <em>kurs online, konsultacje 1:1, community</em>. Zgadza się?
              </div>
            </div>
            <textarea rows={5} className="input" style={{padding:14, fontSize:13, height:"auto", resize:"vertical"}} defaultValue={'Kurs „Pomysły do treści" — 8 tygodni, self-paced, 450 zł\nKonsultacje 1:1 — godzina za 300 zł\nCommunity na Discordzie — 29 zł/mies'}/>
            <div style={{display:"flex", gap:8, justifyContent:"space-between"}}>
              <button className="btn btn-ghost">← Widzowie wrócą za chwilę</button>
              <div style={{display:"flex", gap:8}}>
                <button className="btn btn-secondary"><I.Sparkles/> Dopracuj z AI</button>
                <button className="btn btn-primary">Zapisz i dalej <I.ArrowRight/></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// -------- Course page --------
function Course() {
  const lessons = [
    { n:"01", t:"Nadaj swoim treściom kierunek", dur:"8 min", done:true },
    { n:"02", t:"Tożsamość w 30 minut (naprawdę)", dur:"24 min", done:true },
    { n:"03", t:"Widzowie — dla kogo to wszystko", dur:"18 min", done:false, current:true },
    { n:"04", t:"Serie — jak budować rozpoznawalność", dur:"22 min", done:false },
    { n:"05", t:"Od pomysłu do publikacji w 48h", dur:"31 min", done:false, locked:true },
    { n:"06", t:"AI jako co-writer, nie ghostwriter", dur:"19 min", done:false, locked:true },
  ];
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"16px 16px 60px"}}>
      <div style={{position:"relative", borderRadius:20, overflow:"hidden", marginBottom:24, background:"#1a0a2e", minHeight:320}}>
        <img src="../../assets/hqdefault.webp" alt="" style={{width:"100%", height:320, objectFit:"cover", opacity:0.75}}/>
        <div style={{position:"absolute", inset:0, background:"linear-gradient(to top, hsl(266 51% 10% / 0.92) 0%, hsl(266 51% 10% / 0.4) 50%, transparent 100%)"}}/>
        <div style={{position:"absolute", left:0, right:0, bottom:0, padding:28, color:"#fff"}}>
          <span className="eyebrow" style={{color:"hsl(289 100% 85%)"}}>Kurs · Nikodem Rudziński · 6 lekcji · 2h 3min</span>
          <h1 style={{margin:"8px 0 8px", fontSize:34, fontWeight:800, letterSpacing:"-0.02em", maxWidth:720, lineHeight:1.1}}>
            Nadaj swoim treściom kierunek
          </h1>
          <p style={{margin:"0 0 16px", fontSize:14, color:"hsl(0 0% 100% / 0.8)", maxWidth:560, lineHeight:1.55}}>
            Praktyczny kurs — zero teorii bez zastosowania. Po każdej lekcji wiesz co robić dalej.
          </p>
          <button className="btn lg btn-primary"><I.Play/> Kontynuuj — lekcja 3</button>
        </div>
      </div>
      <h2 style={{margin:"0 0 14px", fontSize:18, fontWeight:600, padding:"0 4px"}}>Program kursu</h2>
      <div className="glass" style={{padding:0, overflow:"hidden"}}>
        {lessons.map((l,i) => (
          <React.Fragment key={l.n}>
            {i>0 && <div className="divider" style={{opacity:0.5}}/>}
            <div style={{display:"flex", alignItems:"center", gap:14, padding:"14px 18px", opacity: l.locked ? 0.5 : 1}}>
              <div style={{
                width:32, height:32, borderRadius:8, fontFamily:"var(--font-mono)", fontSize:12, fontWeight:600,
                display:"flex", alignItems:"center", justifyContent:"center",
                background: l.done ? "hsl(142 70% 45%)" : l.current ? "hsl(286 86% 57%)" : "hsl(289 100% 97%)",
                color: l.done || l.current ? "#fff" : "var(--muted-foreground)",
              }}>{l.done ? <I.Check style={{width:14, height:14}}/> : l.n}</div>
              <span style={{flex:1, fontSize:14, fontWeight:500}}>{l.t}</span>
              <span style={{fontSize:12, color:"var(--muted-foreground)", fontFamily:"var(--font-mono)"}}>{l.dur}</span>
              {l.current && <span className="badge badge-primary">Teraz</span>}
              {l.locked && <I.Lightbulb style={{width:14, height:14, color:"var(--muted-foreground)"}}/>}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

window.Content = Content;
window.Strategy = Strategy;
window.Course = Course;
