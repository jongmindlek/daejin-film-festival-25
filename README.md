# 대진대학교 제25회 졸업영화제 홈페이지

레퍼런스처럼 한 장의 포스터 배경 위에 여러 페이지가 열리는 구조입니다.

## 가장 먼저 바꿀 것

1. 최종 포스터 이미지를 `public/poster.jpg`라는 이름으로 넣습니다.
2. `app/globals.css` 첫 부분의 `--poster-image: none;`을 아래처럼 바꿉니다.

```css
--poster-image: url('/poster.jpg');
```

그러면 영화제, 상영작, 상영일정, 안내, 예매 모든 페이지의 배경이 한 번에 바뀝니다.

## 내용 수정 위치

- 첫 화면: `app/page.tsx`
- 상영작: `app/films/page.tsx`
- 상영일정: `app/schedule/page.tsx`
- 안내: `app/info/page.tsx`
- 예매: `app/reservation/page.tsx`
- 공통 메뉴와 하단 정보: `app/site-components.tsx`
- 로고: `public/logo.png`

## 실행과 배포

```bash
pnpm install
pnpm dev
pnpm build
```

Cloudflare에서 GitHub 저장소를 연결한 뒤 빌드 명령을 `pnpm build`로 지정합니다.
