# 변호사 김광욱 홈페이지

정적 사이트(HTML/CSS/JS, 빌드 과정 없음)이며 GitHub Pages 로 배포됩니다.

## 구조
- `index.html` — 페이지 구조 (탭: 홈 / 변호사 소개 / 주요 업무분야 / 수사 단계별 대응 / 사건사례 / 상담 안내)
- `css/style.css` — 스타일 (모바일 우선, 600px · 1024px 브레이크포인트)
- `js/main.js` — 탭 라우팅(`#about`, `#practice/stalking` 등)과 콘텐츠 데이터
- `assets/img/` — 이미지 (`profile.jpg` 를 넣으면 변호사 소개 탭에 자동 표시)

## 내용 수정
- 전화번호 · 이메일 · 주소 · 상담시간: `js/main.js` 상단 `CONFIG`
- 업무분야 / 수사 단계 / 사건사례 / FAQ: `js/main.js` 의 `PRACTICE`, `STEPS`, `CASES`, `FAQ`
- 상담 신청서는 서버가 없으므로 `CONFIG.email` 주소로 메일 앱을 열어 전송합니다.
- 카카오톡 등 링크 공유 썸네일: `assets/img/og-image.jpg` (1200×630) 와 `index.html` 의 `og:*` 태그.
  주소(도메인)가 바뀌면 `og:url` · `og:image` 도 새 주소로 바꿔야 합니다. 카카오톡은 미리보기를 캐시하므로
  바꾼 뒤에는 카카오 공유 디버거(developers.kakao.com/tool/debugger/sharing)에서 캐시를 초기화합니다.

## 배포
GitHub Pages 는 `gh-pages` 브랜치에서 서비스됩니다. `main` 에 push 하면
`.github/workflows/pages.yml` 이 같은 내용을 `gh-pages` 로 복사해 자동 배포합니다.

주소: https://gdrpaul3-byte.github.io/gwangwooklawyer_test/

로컬 미리보기: `python3 -m http.server 8000` 후 http://localhost:8000
