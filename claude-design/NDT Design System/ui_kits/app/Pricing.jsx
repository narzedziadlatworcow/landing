// Pricing.jsx — three-tier plan page (Solo / Creator / Studio)
const { useState: useStatePricing } = React;

const PLANS = [
  {
    id: "solo",
    name: "Solo",
    eyebrow: "Dla początkujących",
    price: 0, priceLabel: "za darmo",
    tagline: "Solo creator z jedną marką.",
    cta: "Zacznij za darmo",
    primary: false,
    features: [
      "1 workspace",
      "500 tokenów AI / mies",
      "Podstawowa strategia marki",
      "Research z 3 źródeł",
      "Eksport do Markdown",
    ],
  },
  {
    id: "creator",
    name: "Creator",
    eyebrow: "Najczęściej wybierany",
    price: 15, priceLabel: "$15 / miesiąc",
    priceHint: "~65 zł / mies",
    tagline: "Pełny produkt na trial — zero zobowiązania.",
    cta: "Wybierz Creator →",
    primary: true,
    icon: "Sparkles",
    features: [
      "3 workspace'y",
      "3 000 tokenów AI / mies",
      "Pełna Strategia Marki (7 etapów)",
      "Research bez limitu źródeł",
      "Eksport do wszystkich formatów",
      "Integracja z YouTube + RSS",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    eyebrow: "Dla zespołów",
    price: 45, priceLabel: "$45 / miesiąc",
    priceHint: "~195 zł / mies",
    tagline: "Kilka marek, więcej mocy, priority AI.",
    cta: "Skontaktuj się",
    primary: false,
    icon: "Crown",
    features: [
      "Workspace'y bez limitu",
      "15 000 tokenów AI / mies",
      "Priority AI queue",
      "Kolaboracja — 5 miejsc",
      "API + webhooks",
      "Early access do nowych funkcji",
    ],
  },
];

function PlanCard({ plan, cycle }) {
  const price = cycle === "yearly" ? Math.floor(plan.price * 0.8) : plan.price;
  const Icon = plan.icon ? I[plan.icon] : null;
  return (
    <div className="glass" style={{
      padding: 28, display:"flex", flexDirection:"column", gap:16,
      border: plan.primary ? "2px solid hsl(286 86% 57%)" : "1px solid hsl(283 68% 88% / 0.3)",
      position:"relative",
    }}>
      {plan.primary && (
        <div style={{position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)"}}>
          <div style={{background:"hsl(286 86% 57%)", color:"#fff", fontSize:11, fontWeight:600, padding:"4px 12px", borderRadius:999, letterSpacing:"0.04em"}}>
            {plan.eyebrow}
          </div>
        </div>
      )}
      {!plan.primary && <span className="eyebrow">{plan.eyebrow}</span>}
      <div style={{display:"flex", alignItems:"center", gap:8}}>
        {Icon && <Icon style={{color:"hsl(286 86% 57%)", width:20, height:20}}/>}
        <h2 style={{margin:0, fontSize:22, fontWeight:700}}>{plan.name}</h2>
      </div>
      <div style={{fontSize:13, color:"var(--muted-foreground)", lineHeight:1.5}}>{plan.tagline}</div>
      <div style={{display:"flex", alignItems:"baseline", gap:8, marginTop:4}}>
        {plan.price === 0 ? (
          <span style={{fontSize:36, fontWeight:800, letterSpacing:"-0.02em"}}>Free</span>
        ) : (
          <>
            <span style={{fontSize:36, fontWeight:800, letterSpacing:"-0.02em"}}>${price}</span>
            <span style={{fontSize:13, color:"var(--muted-foreground)"}}>/ mies{cycle==="yearly" && " · rozliczane rocznie"}</span>
          </>
        )}
      </div>
      {plan.priceHint && <small style={{marginTop:-8, color:"var(--muted-foreground)"}}>{plan.priceHint}</small>}
      <button className={"btn lg " + (plan.primary ? "btn-primary" : "btn-secondary")}>{plan.cta}</button>
      <div className="divider" style={{margin:"8px 0"}}/>
      <ul style={{margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:10}}>
        {plan.features.map(f => (
          <li key={f} style={{display:"flex", gap:10, alignItems:"flex-start", fontSize:13, lineHeight:1.45}}>
            <I.Check style={{color:"hsl(142 70% 40%)", width:14, height:14, flexShrink:0, marginTop:3}}/>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  const [cycle, setCycle] = useStatePricing("monthly");
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"24px 16px 80px"}}>
      <div style={{textAlign:"center", marginBottom:36}}>
        <span className="eyebrow">Pricing</span>
        <h1 style={{margin:"10px 0 12px", fontSize:42, fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.05}}>
          Wybierz <span className="gradient-text">swój plan</span>
        </h1>
        <p style={{margin:"0 auto", maxWidth:560, color:"var(--muted-foreground)", fontSize:15, lineHeight:1.55}}>
          Pełny produkt na trial — zero zobowiązania. Anulujesz w dowolnym momencie, bez tłumaczenia się.
        </p>
        {/* Billing cycle toggle */}
        <div style={{display:"inline-flex", alignItems:"center", gap:2, marginTop:22, padding:4, borderRadius:999, background:"hsl(289 100% 97%)", border:"1px solid hsl(283 68% 88%)"}}>
          {["monthly","yearly"].map(c => (
            <button key={c} onClick={()=>setCycle(c)} style={{
              height:32, padding:"0 16px", borderRadius:999, fontSize:13, fontWeight:500,
              background: cycle===c ? "#fff" : "transparent",
              color: cycle===c ? "var(--foreground)" : "var(--muted-foreground)",
              boxShadow: cycle===c ? "0 1px 3px hsl(283 68% 88% / 0.6)" : "none",
            }}>
              {c==="monthly" ? "Miesięcznie" : "Rocznie · −20%"}
            </button>
          ))}
        </div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16}}>
        {PLANS.map(p => <PlanCard key={p.id} plan={p} cycle={cycle}/>)}
      </div>
      <div style={{textAlign:"center", marginTop:40, fontSize:13, color:"var(--muted-foreground)"}}>
        Masz pytania? <a href="#" style={{color:"hsl(286 86% 47%)", textDecoration:"none", fontWeight:500}}>Napisz do nas →</a>
      </div>
    </div>
  );
}

window.Pricing = Pricing;
