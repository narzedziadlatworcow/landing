// Course.jsx — section o kursie z Nikodemem

const MODULES = [
  "01 — Fundament: po co tworzysz i dla kogo",
  "02 — Niszowanie bez utraty siebie",
  "03 — Strategia marki osobistej",
  "04 — Planowanie serii i tematów",
  "05 — Od scenariusza do nagrania",
  "06 — Psychologia retencji widza",
  "07 — Pierwszy tysiąc subów",
  "08 — Tytuły i miniaturki — CTR",
  "09 — Monetyzacja zanim będziesz gotowy",
  "10 — Growth loop: 1k → 10k → 100k",
  "11 — Burnout i rytm twórcy",
  "12 — Co dalej: biznes wokół marki",
];

function CourseSection() {
  return (
    <section id="kurs" className="compact">
      <div className="wrap">
        <div className="course">
          <div className="course-left">
            <span className="eyebrow">Kurs podstaw · w cenie</span>
            <h2 className="title">12 modułów z <span className="gradient-text">Nikodemem Rudzińskim</span></h2>
            <p>Twórca kanału <b>@Szhakal</b> (500k+ subów) przeprowadza Cię przez wszystko, czego nie uczą w kursach edycji: strategia marki, psychologia widza, monetyzacja i growth loop. Materiał wplecony w aplikację — uczysz się w kontekście tego, co właśnie tworzysz.</p>
            <ul className="course-modules">
              {MODULES.slice(0, 6).map((m, i) => {
                const [n, t] = m.split(" — ");
                return (
                  <li key={i}>
                    <span className="num-chip">{n}</span>
                    <span>{t}</span>
                  </li>
                );
              })}
              <li style={{color:"var(--muted-foreground)", fontStyle:"italic", paddingLeft: 38}}>…+ 6 kolejnych modułów</li>
            </ul>
            <div style={{display:"flex", gap:18, fontSize:13, color:"var(--muted-foreground)", marginTop: 8}}>
              <span><b style={{color:"var(--foreground)"}}>12</b> modułów</span>
              <span><b style={{color:"var(--foreground)"}}>3h 20min</b> video</span>
              <span><b style={{color:"var(--foreground)"}}>PDF workbook</b> strategii</span>
            </div>
          </div>
          <div className="course-right">
            <div className="course-thumb">
              <div className="play"><I.Play/></div>
              <div className="meta">
                <div>
                  <div className="who">Nikodem Rudziński</div>
                  <div className="sub">@Szhakal · 500k+ subów</div>
                </div>
                <span className="badge badge-dark-soft"><I.Play/> Intro · 4:12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CourseSection = CourseSection;
