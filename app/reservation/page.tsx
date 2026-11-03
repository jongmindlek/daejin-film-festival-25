import { Header, Footer, PageTitle } from "../site-components";

export default function ReservationPage() {
  return <div className="site-page"><Header active="reservation" /><main className="content-main"><PageTitle eyebrow="FREE ADMISSION · LIMITED SEATS" title="예매"><p>관람을 원하는 날짜와 회차를 선택해 주세요.</p></PageTitle><section className="reservation-box"><div><span>STEP 01</span><h2>상영 회차 선택</h2><label><input type="radio" name="screening" defaultChecked /> 12월 4일 금요일 · 18:30 개막식</label><label><input type="radio" name="screening" /> 12월 5일 토요일 · 15:00 SECTION B</label><label><input type="radio" name="screening" /> 12월 6일 일요일 · 18:00 SECTION C</label></div><div><span>STEP 02</span><h2>예매 안내</h2><p>현재 예매 링크는 임시 상태입니다. 실제 예매 폼 또는 외부 예매 페이지 주소가 확정되면 아래 버튼에 연결할 수 있습니다.</p><a className="solid-button" href="mailto:film@daejin.ac.kr?subject=제25회 졸업영화제 예매 문의">예매 문의하기</a></div></section></main><Footer /></div>;
}
