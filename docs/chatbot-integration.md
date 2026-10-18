# 무료 AI 법률 상담 — 챗봇 연결 규격

홈페이지 위젯(`js/chat.js`)은 이미 배치되어 있고, 챗봇 서버만 연결하면 동작합니다.

## 위젯이 열리는 곳
- PC 우하단 플로팅 버튼 / 모바일 하단 바 "AI 상담"
- 홈: "상담 전에, 궁금한 것부터 먼저 물어보세요" 섹션 (예시 질문 클릭 시 입력창에 채워짐)
- 업무분야 상세: "AI에게 먼저 물어보기" (해당 분야명을 `context` 로 전달)
- 상담 안내 탭: 연락처 위 카드

## 연결 방법 (`js/chat.js` 상단 `CHATBOT`)
### A. API 방식 (권장)
```js
mode: 'api', endpoint: 'https://<서버>/api/chat'
```
요청: `POST` JSON
```json
{ "messages": [{ "role": "user", "content": "..." }, { "role": "assistant", "content": "..." }],
  "context": "스토킹 · 관계성범죄" }
```
응답: `{ "reply": "..." }` (JSON) 또는 text/plain 본문. `**굵게**`, `- 목록`, 줄바꿈을 렌더링합니다.

서버 요구사항
- CORS: 홈페이지 도메인 허용 (`Access-Control-Allow-Origin`, `OPTIONS` 처리)
- API 키는 서버 환경변수에만 보관 (브라우저 코드에 절대 포함 금지)
- 요청 빈도 제한(rate limit)과 입력 길이 제한(위젯은 1,000자 제한)
- 시스템 프롬프트 원칙: 일반적 법률 정보만 제공, 개별 사건 결론·결과 예측 금지, 개인정보 수집 금지,
  구체적 사건은 변호사 상담으로 안내, 수사기관 영향력·승소 보장 등 표현 금지

### B. iframe 방식
```js
mode: 'iframe', embedUrl: 'https://<챗봇>/embed'
```
챗봇 페이지가 `X-Frame-Options`/CSP `frame-ancestors` 로 홈페이지 삽입을 허용해야 합니다.
