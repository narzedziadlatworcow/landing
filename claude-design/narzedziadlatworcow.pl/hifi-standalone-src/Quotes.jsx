// Quotes.jsx — problem cytaty (3 twórców)

const QUOTES = [
  {
    text: "Mam 40 pomysłów w Notion, 12 zaczętych skryptów i żadnego skończonego wideo. Brak kierunku to większy problem niż brak czasu.",
    name: "Kamil, 26",
    role: "YouTube · tech",
    initials: "KB",
  },
  {
    text: "Codziennie scrolluję konkurencję i zastanawiam się \u201Edlaczego oni rosną, a ja nie\u201D. A potem kopiuję ich i dalej nic.",
    name: "Ola, 23",
    role: "Instagram · lifestyle",
    initials: "OW",
  },
  {
    text: "Umiem nagrywać. Umiem montować. Ale kiedy siadam do planu na kwartał — pustka. Potrzebuję systemu, nie kolejnego kursu edycji.",
    name: "Maciek, 31",
    role: "TikTok + YT · edukacja",
    initials: "MR",
  },
];

function Quotes() {
  return (
    <section className="compact">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Znasz to?</span>
          <h2>Tworzenie to nie brak pomysłów. To brak systemu.</h2>
        </div>
        <div className="quotes-grid">
          {QUOTES.map((q, i) => (
            <div key={i} className="quote">
              <span className="q-mark">"</span>
              <p>{q.text}</p>
              <div className="who">
                <span className="avatar-mini">{q.initials}</span>
                <span><b style={{color:"var(--foreground)"}}>{q.name}</b> · {q.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Quotes = Quotes;
