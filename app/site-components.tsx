const links = [
  ["home", "/", "영화제"],
  ["films", "/films", "상영작"],
  ["schedule", "/schedule", "상영일정"],
  ["info", "/info", "안내"],
  ["reservation", "/reservation", "예매"],
] as const;

export function Header({ active }: { active: string }) {
  return (
    <header className="main-header">
      <a className="logo" href="/" aria-label="홈으로">
        <img src="/logo.png" alt="대진대학교 영화영상학과" />
      </a>
      <nav aria-label="주요 메뉴">
        {links.map(([key, href, label]) => <a className={active === key ? "active" : ""} href={href} key={key}>{label}</a>)}
      </nav>
      <p className="festival-no">25th</p>
    </header>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={compact ? "main-footer compact" : "main-footer"}>
      <div><strong>대진대학교 영화영상학과 제25회 졸업영화제</strong><p>© 2026 DAEJIN UNIVERSITY FILM &amp; MOVING IMAGES</p></div>
      <div className="footer-links"><a href="/films">상영작</a><a href="/schedule">상영일정</a><a href="/info">안내</a><a href="/reservation">예매</a></div>
    </footer>
  );
}

export function PageTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="page-title"><p>{eyebrow}</p><h1>{title}</h1>{children}</div>;
}
