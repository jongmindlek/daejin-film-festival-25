import { Header, Footer } from "./site-components";

export default function Home() {
  return (
    <div className="site-page">
      <Header active="home" />
      <main className="home-main">
        <section className="home-title">
          <p>DAEJIN UNIVERSITY · FILM &amp; MOVING IMAGES</p>
          <h1>THE 25TH<br />GRADUATION<br />FILM FESTIVAL</h1>
          <p className="home-date">2026. 12. 04 — 12. 06</p>
          <a className="outline-button" href="/films">상영작 전체 보기</a>
        </section>
      </main>
      <Footer compact />
    </div>
  );
}
