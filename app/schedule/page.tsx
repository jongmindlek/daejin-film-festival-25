import { Header, Footer, PageTitle } from "../site-components";

const screenings = [
  ["18:30", "개막식 및 SECTION A", "잔상 · 파란 밤", "82분", "예매"],
  ["15:00", "SECTION B", "나의 작은 우주 · 숨", "79분", "예매"],
  ["18:00", "SECTION C", "사이에 · 마지막 여름", "84분", "예매"],
];

export default function SchedulePage() {
  return <div className="site-page"><Header active="schedule" /><main className="content-main"><PageTitle eyebrow="SCREENING SCHEDULE" title="상영일정"><p>날짜를 선택해 상영 작품과 시간을 확인하세요.</p></PageTitle><div className="date-tabs"><button>12.04 금</button><button className="selected">12.05 토</button><button>12.06 일</button></div><section className="schedule-board">{screenings.map((item, index) => <article key={item[0]}><div className={`schedule-thumb thumb-${index + 1}`}><span>0{index + 1}</span></div><time>{item[0]}</time><div><p>25th DAEJIN FILM FESTIVAL</p><h2>{item[1]}</h2><span>{item[2]} · {item[3]}</span></div><a href="/reservation">{item[4]}</a></article>)}</section><p className="board-note">상영 시작 10분 전까지 입장해 주세요. 상영 후 관객과의 대화가 진행될 수 있습니다.</p></main><Footer /></div>;
}
