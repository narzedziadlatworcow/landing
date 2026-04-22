// Toolbar.jsx — global app shell (workspace selector + nav + user)

function WorkspaceSelector({ workspace }) {
  return (
    <button className="btn btn-ghost" style={{height:36, padding:"0 10px", gap:8, background:"hsl(289 100% 97%)"}}>
      <span style={{width:20, height:20, borderRadius:6, background:"var(--brand-gradient)"}}/>
      <span style={{fontSize:13, fontWeight:500}}>{workspace}</span>
      <I.ChevronDown style={{opacity:0.5}}/>
    </button>
  );
}

function NavTab({ icon: Icon, label, active, onClick }) {
  return (
    <button
      className="btn btn-ghost"
      onClick={onClick}
      style={{
        height:32, padding:"0 12px", fontSize:13, fontWeight: active?500:400,
        background: active ? "hsl(276 100% 96%)" : "transparent",
        color: active ? "hsl(286 86% 40%)" : "var(--muted-foreground)",
      }}
    >
      <Icon/> {label}
    </button>
  );
}

function Toolbar({ active, setActive, onHome }) {
  return (
    <div style={{position:"sticky", top:0, zIndex:20, padding:"12px 16px"}}>
      <div className="glass" style={{display:"flex", alignItems:"center", gap:12, height:56, padding:"0 14px"}}>
        <button onClick={onHome} style={{background:"transparent", border:"none", padding:0, cursor:"pointer"}}>
          <img src="../../assets/logo.png" alt="NDT" style={{height:28, display:"block"}}/>
        </button>
        <div className="divider" style={{width:1, height:24, background:"hsl(283 68% 88%)"}}/>
        <WorkspaceSelector workspace="Moje studio"/>
        <nav style={{display:"flex", gap:2, marginLeft:8}}>
          <NavTab icon={I.Target} label="Strategia"  active={active==="strategy"}   onClick={()=>setActive("strategy")}/>
          <NavTab icon={I.Lightbulb} label="Inspiracje" active={active==="inspiration"} onClick={()=>setActive("inspiration")}/>
          <NavTab icon={I.FileText} label="Content"   active={active==="content"}    onClick={()=>setActive("content")}/>
          <NavTab icon={I.GraduationCap} label="Kurs"  active={active==="course"}     onClick={()=>setActive("course")}/>
          <NavTab icon={I.Crown} label="Pricing"       active={active==="pricing"}    onClick={()=>setActive("pricing")}/>
        </nav>
        <div style={{flex:1}}/>
        <div className="badge badge-muted"><I.Zap/> 3 000 tokenów</div>
        <button className="btn btn-ghost icon"><I.Settings/></button>
        <div className="avatar md">KN</div>
      </div>
    </div>
  );
}

window.Toolbar = Toolbar;
