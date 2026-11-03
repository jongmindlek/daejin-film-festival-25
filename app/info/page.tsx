import { Header, Footer, PageTitle } from "../site-components";

export default function InfoPage() {
  return <div className="site-page"><Header active="info" /><main className="content-main"><PageTitle eyebrow="FESTIVAL INFORMATION" title="안내"><p>영화제 관람에 필요한 정보를 확인하세요.</p></PageTitle><section className="info-grid"><article><span>01</span><h2>영화제 소개</h2><p>스물다섯 번째 프레임 안에서 우리는 각자의 세계를 꺼내 보입니다. 서로 다른 시선으로 완성한 이야기들이 스크린 위에서 관객과 만납니다.</p></article><article><span>02</span><h2>관람 안내</h2><p>모든 상영은 무료이며 사전 예매자 우선으로 입장합니다. 상영 시작 이후에는 입장이 제한될 수 있습니다.</p></article><article><span>03</span><h2>오시는 길</h2><p>대진대학교 예술관 영화관<br />경기도 포천시 호국로 1007<br />문의 film@daejin.ac.kr</p></article></section><div className="poster-guide"><div><p>POSTER BACKGROUND</p><h2>최종 포스터가 완성되면<br />이 자리에 적용됩니다.</h2></div><p>사이트 전체의 배경은 한 장의 포스터 이미지로 연결됩니다. README의 안내대로 파일만 교체하면 모든 페이지에 동시에 반영됩니다.</p></div></main><Footer /></div>;
}
