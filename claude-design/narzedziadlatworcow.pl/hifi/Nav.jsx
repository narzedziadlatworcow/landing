// Nav.jsx — sticky top navigation for the landing

function Nav({ ctaText, onCta }) {
  return (
    <div className="nav-wrap">
      <nav className="nav">
        <a href="#top" className="nav-logo">
          <img src="assets/logo.png" alt="NDT"/>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#jak-dziala">Jak działa</a>
          <a className="nav-link" href="#kurs">Kurs</a>
          <a className="nav-link" href="#pricing">Cennik</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </div>
        <div className="nav-spacer"/>
        <div className="nav-right">
          <a className="btn sm btn-ghost" href="#">Zaloguj</a>
          <button className="btn sm btn-primary" onClick={onCta}>{ctaText} <I.ArrowRight/></button>
        </div>
      </nav>
    </div>
  );
}

window.Nav = Nav;
