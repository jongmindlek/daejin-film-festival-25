import { Header, Footer, PageTitle } from "../site-components";

const films = [
  ["01", "잔상", "AFTERIMAGE", "김도윤", "18 MIN", "장편"],
  ["02", "파란 밤", "BLUE NIGHT", "이서현", "24 MIN", "장편"],
  ["03", "나의 작은 우주", "MY LITTLE UNIVERSE", "박지민", "16 MIN", "단편"],
  ["04", "숨", "BREATH", "최유진", "21 MIN", "단편"],
  ["05", "사이에", "BETWEEN US", "정하늘", "17 MIN", "단편"],
  ["06", "마지막 여름", "THE LAST SUMMER", "한서진", "22 MIN", "장편"],
];

export default function FilmsPage() {
  return <div className="site-page"><Header active="films" /><main className="content-main"><PageTitle eyebrow="OFFICIAL SELECTION" title="상영작"><p>스물다섯 번째 영화제의 작품들을 소개합니다.</p></PageTitle><div className="filter-row"><button className="selected">전체</button><button>장편 상영작</button><button>단편 상영작</button></div><section className="works-grid">{films.map((film, index) => <article className={`work-card work-${index + 1}`} key={film[0]}><a href={`/films/${film[0]}`}><div className="work-image"><span>{film[0]}</span><i>STILL CUT<br />COMING SOON</i></div><div className="work-info"><div><p>{film[5]} 상영작</p><h2>{film[1]}</h2><p>{film[2]}</p></div><p>연출 {film[3]}<br />{film[4]}</p></div></a></article>)}</section></main><Footer /></div>;
}
