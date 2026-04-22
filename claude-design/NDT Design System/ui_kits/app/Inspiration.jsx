// Inspiration.jsx — search + feeds + saved bento cards
const { useState: useStateInsp, useMemo: useMemoInsp } = React;

const INSP_SOURCES = [
  { id:"yt1", type:"YouTube", channel:"Nikodem Rudziński", title:"Jak nie dać się AI, czyli co jeszcze ma sens w marketingu 2026", meta:"12 min · 45k wyświetleń", tags:["marketing","AI","strategia"], saved:true, hot:true },
  { id:"yt2", type:"YouTube", channel:"Marketingowa Kawa", title:"3 niedoceniane źródła pomysłów na content", meta:"8 min · 12k wyświetleń", tags:["pomysły","content"], saved:false },
  { id:"rss1", type:"RSS", channel:"NoCode.pl", title:"Automatyzacja dla twórców — co się zmieniło w 2026", meta:"przeczytane · wczoraj", tags:["narzędzia","automatyzacja"], saved:true },
  { id:"rss2", type:"RSS", channel:"Content Studio", title:"Dlaczego długie formaty wracają (i co z tym zrobić)", meta:"3 dni temu", tags:["long-form","video"], saved:false, hot:true },
  { id:"yt3", type:"YouTube", channel:"Szhakal", title:"Najlepszy sposób na pomysły do treści — moja metoda", meta:"14 min · 82k wyświetleń", tags:["proces","pomysły"], saved:true },
  { id:"rss3", type:"RSS", channel:"Tech Weekly PL", title:"Polski startup dla twórców — rozmawiamy z twórcą NDT", meta:"2 dni temu", tags:["wywiad","saas"], saved:false },
];

function InspCard({ item, onToggle }) {
  const TypeIcon = item.type === "YouTube" ? I.Youtube : I.Rss;
  const Save = item.saved ? I.BookmarkCheck : I.Bookmark;
  return (
    <div className="glass" style={{padding:16, display:"flex", flexDirection:"column", gap:10, minHeight:160}}>
      <div style={{display:"flex", alignItems:"center", gap:8}}>
        <TypeIcon style={{width:14, height:14, color:"hsl(286 86% 47%)"}}/>
        <span className="eyebrow">{item.type} · {item.channel}</span>
        {item.hot && <span className="badge badge-primary" style={{marginLeft:"auto"}}><I.Sparkles/> Na topie</span>}
      </div>
      <h3 style={{margin:0, fontSize:15, fontWeight:600, lineHeight:1.35}}>{item.title}</h3>
      <div style={{fontSize:12, color:"var(--muted-foreground)"}}>{item.meta}</div>
      <div style={{display:"flex", gap:6, flexWrap:"wrap", marginTop:"auto"}}>
        {item.tags.map(t => <span key={t} className="badge badge-muted">#{t}</span>)}
      </div>
      <div style={{display:"flex", gap:6, marginTop:4}}>
        <button className="btn sm btn-secondary" style={{flex:1}}><I.Sparkles/> Stwórz temat</button>
        <button
          onClick={()=>onToggle(item.id)}
          className="btn sm btn-ghost icon"
          style={{
            background: item.saved ? "hsl(286 86% 57% / 0.15)" : "transparent",
            color: item.saved ? "hsl(286 86% 47%)" : "var(--muted-foreground)",
            opacity: item.saved ? 1 : 0.6,
          }}
        ><Save/></button>
      </div>
    </div>
  );
}

function Inspiration() {
  const [tab, setTab] = useStateInsp("search");
  const [query, setQuery] = useStateInsp("");
  const [saved, setSaved] = useStateInsp(() => Object.fromEntries(INSP_SOURCES.map(s => [s.id, s.saved])));

  const items = useMemoInsp(() => {
    const base = INSP_SOURCES.map(s => ({...s, saved: saved[s.id]}));
    if (tab === "saved") return base.filter(s => s.saved);
    if (!query) return base;
    const q = query.toLowerCase();
    return base.filter(s => s.title.toLowerCase().includes(q) || s.tags.some(t => t.includes(q)));
  }, [tab, query, saved]);

  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"16px 16px 60px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:16, marginBottom:20}}>
        <div>
          <span className="eyebrow">Inspiracje</span>
          <h1 style={{margin:"6px 0 0", fontSize:28, fontWeight:700, letterSpacing:"-0.01em"}}>Znajdź pomysł na temat</h1>
        </div>
        <div style={{display:"flex", gap:2, padding:4, background:"hsl(289 100% 97%)", borderRadius:12, border:"1px solid hsl(283 68% 88%)"}}>
          {[["search","Wyszukiwarka"],["feeds","Źródła"],["saved","Zapisane"]].map(([id,label]) => (
            <button key={id} onClick={()=>setTab(id)} style={{
              height:30, padding:"0 14px", borderRadius:8, fontSize:12.5, fontWeight:500,
              background: tab===id ? "#fff" : "transparent",
              color: tab===id ? "var(--foreground)" : "var(--muted-foreground)",
              boxShadow: tab===id ? "0 1px 2px hsl(283 68% 88%)" : "none",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {tab === "search" && (
        <div className="glass" style={{padding:16, marginBottom:20, display:"flex", gap:10, alignItems:"center"}}>
          <div className="input-wrap has-icon" style={{flex:1}}>
            <I.Search className="leading"/>
            <input className="input" placeholder={'Szukaj w feedach… np. „pomysły na YouTube"'} value={query} onChange={e=>setQuery(e.target.value)}/>
          </div>
          <button className="btn btn-primary"><I.Sparkles/> Wyszukaj z AI</button>
        </div>
      )}
      {tab === "feeds" && (
        <div className="glass" style={{padding:16, marginBottom:20, display:"flex", gap:10, flexWrap:"wrap"}}>
          <span className="badge badge-muted"><I.Youtube/> 4 kanały</span>
          <span className="badge badge-muted"><I.Rss/> 7 RSS feedów</span>
          <div style={{flex:1}}/>
          <button className="btn btn-secondary sm"><I.Plus/> Dodaj źródło</button>
        </div>
      )}

      <div style={{fontSize:12, color:"var(--muted-foreground)", marginBottom:10, paddingLeft:4}}>
        {items.length} {items.length === 1 ? "pozycja" : "pozycje"}
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14}}>
        {items.map(it => <InspCard key={it.id} item={it} onToggle={id => setSaved(s => ({...s, [id]: !s[id]}))}/>)}
      </div>
    </div>
  );
}

window.Inspiration = Inspiration;
