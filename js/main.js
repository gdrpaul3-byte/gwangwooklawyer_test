/* =========================================================
   변호사 김광욱 홈페이지
   - 연락처 등 사이트 정보는 CONFIG 에서 수정합니다.
   - 업무분야 / 사건사례 / FAQ 등의 내용은 아래 데이터 배열에서 수정합니다.
   ========================================================= */

const CONFIG = {
  phone: '02-0000-0000',            // TODO: 실제 전화번호
  email: 'contact@example.com',     // TODO: 실제 이메일 (상담 신청서가 이 주소로 작성됩니다)
  hours: '평일 09:00 – 19:00 (야간·주말 예약 상담 가능)',
  address: '서울특별시 서초구 (상세 주소 업데이트 예정)', // TODO: 실제 주소
};

const PAGE_TITLES = {
  home: '변호사 김광욱 | 형사사건 · 여성청소년 사건',
  about: '변호사 소개 | 변호사 김광욱',
  practice: '주요 업무분야 | 변호사 김광욱',
  process: '수사 단계별 대응 | 변호사 김광욱',
  cases: '사건사례 | 변호사 김광욱',
  contact: '상담 안내 | 변호사 김광욱',
};

const ICONS = {
  memory: '<path d="M12 4a5 5 0 0 0-5 5c0 2 1 3 1 5v2h8v-2c0-2 1-3 1-5a5 5 0 0 0-5-5zM9 19h6M10 22h4"/><path d="M12 8v3l2 1"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
  people: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-4 3-6 6-6s6 2 6 6M14 15c1-1 2-1.5 3-1.5 3 0 5 2 5 5.5"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h5"/><path d="m3 15 3 3"/>',
  station: '<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5M9 11h.01M15 11h.01M12 11h.01"/>',
  hq: '<path d="M4 21V5l8-2 8 2v16M2 21h20M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  nation: '<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/>',
  cap: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
  shield: '<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7h6zM19 7l-3 7h6z"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  bear: '<circle cx="7" cy="6" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="12" cy="12" r="7"/><path d="M10 14c1 1 3 1 4 0M10 11h.01M14 11h.01"/>',
  school: '<path d="M3 10 12 5l9 5-9 5z"/><path d="M7 12v5h10v-5M12 15v6"/>',
  youth: '<circle cx="12" cy="6" r="3"/><path d="M6 21v-4a6 6 0 0 1 12 0v4M9 21v-3M15 21v-3"/>',
  home: '<path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5"/>',
  night: '<path d="M20 15A8 8 0 1 1 9 4a7 7 0 0 0 11 11z"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;

const PSYCH = [
  { icon: 'memory', title: '진술과 기억', text: '기억의 형성·회상 과정, 질문 방식의 영향, 진술의 신빙성 검토' },
  { icon: 'brain', title: '발달적 특성', text: '아동·청소년의 인지·정서 발달 수준과 연령별 특성에 따른 접근 전략' },
  { icon: 'people', title: '관계와 맥락', text: '피해자와 가해자의 관계, 권력·의존 관계 분석, 사건 전후의 행동과 경위' },
  { icon: 'doc', title: '조사 과정', text: '수사·재판 단계 조사 환경의 영향과 적절한 조사 방식 제안' },
];

const ACADEMIC = [
  { school: '고려대학교', degree: '심리학 학사' },
  { school: '고려대학교', degree: '인지심리학 석사' },
  { school: '동국대학교', degree: '경찰행정학과 법심리학 박사과정', note: '(수료 예정)' },
];

const PRACTICE = [
  {
    id: 'sexual', icon: 'shield', title: '성범죄', tone: 't1',
    short: '강간, 강제추행, 통신매체 이용 음란 등',
    lead: '성범죄 사건은 대부분 당사자 간 진술이 엇갈리고, 객관적 증거가 제한적인 경우가 많습니다. 첫 진술의 내용과 진술 경위가 사건 전체의 방향을 좌우합니다.',
    items: ['강간 · 유사강간 · 준강간', '강제추행 · 준강제추행', '카메라 등 이용 촬영 · 불법촬영물 유포', '통신매체 이용 음란', '아동·청소년 대상 성범죄', '업무상 위력 등에 의한 추행'],
    approach: ['초기 진술 전 사실관계 정리 및 조사 대비', '진술의 형성 과정과 일관성 분석', '디지털 증거 · 정황 증거 검토', '피해자 측 2차 피해 방지 및 보호조치 신청'],
  },
  {
    id: 'prostitution', icon: 'night', title: '성매매', tone: 't2',
    short: '조직 성매매, 청소년 성매매, 유흥업소 관련 사건 등',
    lead: '서울경찰청 풍속범죄수사팀장으로 조직 성매매 사건의 광역수사를 직접 지휘한 경험을 바탕으로, 수사기관이 어떤 증거와 흐름으로 사건을 구성하는지 정확히 짚습니다.',
    items: ['성매매 알선 · 영업', '성매수 · 단순 성매매', '아동·청소년 성매수', '유흥업소 · 마사지업소 관련 사건', '성매매 광고 · 장소 제공'],
    approach: ['단속 · 압수수색 이후 즉각적인 초기 대응', '장부 · 계좌 · 메신저 등 증거 구조 분석', '가담 정도와 역할에 따른 대응 전략 수립', '기소유예 · 교육조건부 처분 등 선처 방안 검토'],
  },
  {
    id: 'stalking', icon: 'eye', title: '스토킹', tone: 't3',
    short: '스토킹범죄처벌법 위반, 잠정조치 및 보호조치 등',
    lead: '스토킹 사건은 행위의 반복성과 지속성, 상대방이 느낀 불안감이 핵심 쟁점입니다. 관계의 맥락을 함께 살펴야 정확한 판단이 가능합니다.',
    items: ['스토킹범죄처벌법 위반', '긴급응급조치 · 잠정조치', '접근금지 · 전기통신 이용 접근금지', '피해자 보호명령 신청'],
    approach: ['행위의 반복성 · 지속성에 대한 사실관계 정리', '관계의 경과와 맥락 분석', '잠정조치 결정에 대한 대응 및 신청', '피해자 측 신변보호 · 보호조치 연계'],
  },
  {
    id: 'child-abuse', icon: 'bear', title: '아동학대', tone: 't4',
    short: '아동학대, 아동·청소년 피해아동 보호 절차 등',
    lead: '아동학대 사건은 아동의 진술이 핵심 증거가 되는 경우가 많습니다. 아동의 발달 수준과 조사 방식이 진술에 미치는 영향을 이해하는 것이 무엇보다 중요합니다.',
    items: ['신체적 · 정서적 학대', '방임 · 유기', '어린이집 · 학교 등 기관 내 학대', '아동보호사건 · 임시조치'],
    approach: ['아동 진술의 형성 과정 및 조사 방식 검토', '발달 수준을 고려한 진술 신빙성 분석', '아동보호전문기관 조사 대응', '피해아동 보호 및 임시조치 절차 지원'],
  },
  {
    id: 'school', icon: 'school', title: '학교폭력', tone: 't5',
    short: '학교폭력, 소년사건, 청소년 비행 사건 등',
    lead: '학교폭력 사건은 학교의 절차와 형사·소년 절차가 동시에 진행되는 경우가 많습니다. 학생의 장래까지 고려한 종합적인 대응이 필요합니다.',
    items: ['학교폭력대책심의위원회 대응', '사이버폭력 · 언어폭력 · 따돌림', '학폭 관련 형사 고소 · 소년보호사건', '행정심판 · 행정소송'],
    approach: ['학교 절차와 형사 절차의 동시 대응 전략', '학생 진술의 맥락 및 관계 분석', '조치 결정에 대한 불복 절차 진행', '피해 학생 보호조치 및 분리 요청'],
  },
  {
    id: 'juvenile', icon: 'youth', title: '소년사건', tone: 't6',
    short: '소년법, 보호처분, 형사처벌 대응 등',
    lead: '소년사건은 처벌보다 보호와 교화에 중점을 둡니다. 소년의 환경과 개선 가능성을 구체적으로 보여주는 것이 처분 결과에 큰 영향을 미칩니다.',
    items: ['소년보호사건 (1호 ~ 10호 처분)', '소년형사사건', '촉법소년 · 우범소년 사건', '보호처분 변경 · 항고'],
    approach: ['보호자 · 학교와 연계한 환경 개선 자료 준비', '소년의 발달적 특성과 사건 경위 설명', '조사관 면담 · 심리 기일 대비', '가장 가벼운 처분을 위한 의견서 작성'],
  },
  {
    id: 'domestic', icon: 'home', title: '가정폭력', tone: 't7',
    short: '가정폭력, 접근금지, 임시조치 등',
    lead: '가정폭력 사건은 가족이라는 관계의 특수성 때문에 형사처벌, 보호처분, 이혼 등 여러 절차가 얽혀 있습니다. 관계의 장기적인 맥락을 함께 고려해야 합니다.',
    items: ['가정폭력처벌법 위반', '가정보호사건 · 보호처분', '임시조치 · 접근금지', '피해자 보호명령'],
    approach: ['형사사건 · 가정보호사건 전환 검토', '관계의 경과와 폭력 양상 분석', '임시조치 · 보호명령 신청 및 대응', '가족 관계를 고려한 현실적인 해결 방안 모색'],
  },
];

const STEPS = {
  suspect: [
    { title: '수사 개시 전', sub: '고소 예상 · 내사 단계', text: '고소가 예상되거나 출석 요구를 받기 전이라도 사실관계와 자료를 미리 정리해 두는 것이 중요합니다. 섣부른 연락이나 해명은 오히려 불리한 증거가 될 수 있습니다.', points: ['사실관계 타임라인 정리', '유리한 자료 보존', '상대방 접촉 자제'] },
    { title: '경찰 출석 · 피의자 조사', sub: '가장 중요한 단계', text: '첫 피의자 신문조서는 이후 모든 판단의 기준이 됩니다. 수사기관이 어떤 쟁점에 주목하는지 미리 파악하고, 변호인이 조사에 동석해 방어권을 보장합니다.', points: ['예상 질문 및 쟁점 분석', '변호인 조사 동석', '조서 열람 및 정정'] },
    { title: '압수수색 · 증거 수집', sub: '디지털 증거 대응', text: '휴대전화 · PC 등 압수수색 과정에서 영장 범위와 절차의 적법성을 확인하고, 참여권을 행사해 불필요한 정보가 수집되지 않도록 대응합니다.', points: ['영장 범위 확인', '포렌식 참여권 행사', '위법수집증거 검토'] },
    { title: '송치 · 불송치 결정', sub: '경찰 단계의 결론', text: '경찰은 혐의가 인정되는 경우에만 검찰에 송치합니다. 수사 결과보고 전에 의견서와 증거를 제출해 불송치 결정을 이끌어내는 것이 목표입니다.', points: ['변호인 의견서 제출', '추가 증거 제출', '불송치 결정 도출'] },
    { title: '검찰 단계', sub: '기소 여부 판단', text: '송치된 사건은 검사가 기소 여부를 결정합니다. 혐의없음, 기소유예 등 불기소 처분이나 약식기소를 목표로 대응합니다.', points: ['불기소 의견 제출', '기소유예 · 조건부 처분 검토', '합의 및 양형 자료 준비'] },
    { title: '재판', sub: '공판 대응', text: '수사 단계에서 형성된 증거와 진술의 문제점을 정확히 짚어 무죄를 다투거나, 양형 자료를 통해 선처를 이끌어냅니다.', points: ['증거 · 진술 신빙성 다툼', '증인신문', '양형 변론'] },
  ],
  victim: [
    { title: '고소 준비', sub: '피해 사실 정리', text: '피해 사실과 증거를 체계적으로 정리하고, 적용 가능한 죄명과 절차를 검토합니다. 고소장 작성 단계부터 수사기관의 판단 기준을 반영합니다.', points: ['증거 확보 및 보존', '고소장 작성', '죄명 · 절차 검토'] },
    { title: '피해자 조사', sub: '진술 지원', text: '피해자 진술은 사건의 핵심 증거입니다. 2차 피해 없이 사실대로 진술할 수 있도록 조사에 동석하고, 필요한 경우 진술조력인 · 신뢰관계인 동석을 요청합니다.', points: ['피해자 조사 동석', '진술조력인 · 신뢰관계인', '2차 피해 방지'] },
    { title: '보호조치', sub: '신변 안전 확보', text: '스토킹 · 가정폭력 · 성범죄 등에서 접근금지, 잠정조치, 신변보호 등 필요한 보호조치를 신속하게 신청합니다.', points: ['잠정조치 · 임시조치 신청', '신변보호 요청', '피해자 지원기관 연계'] },
    { title: '수사 진행 확인', sub: '수사 결과 대응', text: '수사 진행 상황을 확인하고 추가 증거와 의견을 제출합니다. 불송치 결정 시 이의신청을 통해 사건을 다시 다툴 수 있습니다.', points: ['추가 증거 · 의견서 제출', '불송치 이의신청', '수사기관 소통'] },
    { title: '재판 · 피해 회복', sub: '공판 참여', text: '재판 절차 진술권을 행사하고, 피해자 국선변호사 · 배상명령 · 민사상 손해배상 등 피해 회복 절차를 함께 진행합니다.', points: ['재판 절차 진술', '배상명령 신청', '손해배상 청구'] },
  ],
};

const CASES = [
  { area: '아동학대', title: '아동 진술의 형성 과정이 쟁점이 된 사건', text: '반복된 질문과 보호자의 개입 이후 형성된 아동 진술의 신빙성을 진술 경위 분석을 통해 다툰 사례', tag: '피의자 변호' },
  { area: '성범죄', title: '당사자 진술만 존재하는 강제추행 사건', text: '객관적 증거 없이 진술이 엇갈린 사건에서 사건 전후 정황과 진술의 일관성을 중심으로 대응한 사례', tag: '피의자 변호' },
  { area: '스토킹', title: '반복적 연락 및 주거지 접근 사건', text: '긴급응급조치와 잠정조치를 신속하게 신청하여 피해자의 신변 안전을 확보한 사례', tag: '피해자 대리' },
  { area: '성매매', title: '업소 단속 이후 연루된 성매수 사건', text: '단속 자료의 증거 구조를 분석하고 가담 정도를 소명하여 대응한 사례', tag: '피의자 변호' },
  { area: '학교폭력', title: '사이버 따돌림 학교폭력 사건', text: '학폭위 절차와 형사 고소를 함께 진행하며 피해 학생 보호조치를 이끌어낸 사례', tag: '피해자 대리' },
  { area: '소년사건', title: '촉법소년 보호사건', text: '보호자 · 학교와 함께 환경 개선 자료를 준비하여 소년의 개선 가능성을 소명한 사례', tag: '보호사건' },
];

const FAQ = [
  { q: '상담 내용은 비밀이 보장되나요?', a: '변호사는 법률상 비밀유지의무를 부담합니다. 상담 내용은 사건 수임 여부와 관계없이 외부에 공개되지 않습니다.' },
  { q: '경찰 출석 요구를 받았는데, 바로 가야 하나요?', a: '출석 일정은 조율이 가능합니다. 준비 없이 출석하기보다 변호인과 사실관계와 쟁점을 먼저 정리한 뒤 출석하시는 것이 좋습니다.' },
  { q: '피해자도 변호사의 도움을 받을 수 있나요?', a: '네. 고소장 작성, 피해자 조사 동석, 보호조치 신청, 재판 절차 진술, 피해 회복 절차까지 피해자 측을 대리하여 진행합니다.' },
  { q: '자녀가 학교폭력 / 소년사건에 연루되었습니다.', a: '학교 절차와 형사 · 소년 절차가 함께 진행될 수 있어 초기 대응이 중요합니다. 보호자와 함께 상담하시면 자녀의 상황에 맞는 대응 방법을 안내해 드립니다.' },
  { q: '야간이나 주말에도 상담이 가능한가요?', a: '사전 예약 시 야간 및 주말 상담이 가능합니다. 긴급한 사건은 전화로 먼저 연락 주시기 바랍니다.' },
];

/* ---------------------------------------------------------
   Rendering
--------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function renderStatic() {
  // config values
  $$('[data-config]').forEach((el) => { el.textContent = CONFIG[el.dataset.config] || ''; });
  $$('[data-config-href="tel"]').forEach((el) => { el.href = 'tel:' + CONFIG.phone.replace(/[^0-9+]/g, ''); });
  $$('[data-config-href="mailto"]').forEach((el) => { el.href = 'mailto:' + CONFIG.email; });
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  $$('[data-psych-list]').forEach((ul) => {
    ul.innerHTML = PSYCH.map((p) => `
      <li><span class="psych-icon">${icon(p.icon)}</span><div><h3>${p.title}</h3><p>${p.text}</p></div></li>`).join('');
  });

  $$('[data-academic-list]').forEach((ul) => {
    ul.innerHTML = ACADEMIC.map((a) => `
      <li><span class="academic-icon">${icon('cap')}</span><div><strong>${a.school}</strong><span>${a.degree}${a.note ? ` <em>${a.note}</em>` : ''}</span></div></li>`).join('');
  });

  $$('.career-icon').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

  $('[data-practice-preview]').innerHTML = PRACTICE.map((p) => `
    <a class="pp-card ${p.tone}" href="#practice/${p.id}">
      <span class="pp-visual">${icon(p.icon)}</span>
      <span class="pp-body"><strong>${p.title}</strong><small>${p.short}</small><span class="arrow" aria-hidden="true">→</span></span>
    </a>`).join('');

  $('[data-practice-chips]').innerHTML = PRACTICE.map((p) =>
    `<a class="chip" role="tab" href="#practice/${p.id}" data-practice-id="${p.id}">${p.title}</a>`).join('');

  $('[data-area-select]').insertAdjacentHTML('beforeend',
    PRACTICE.map((p) => `<option>${p.title}</option>`).join('') + '<option>기타 형사사건</option>');

  $('[data-faq]').innerHTML = FAQ.map((f) => `
    <details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');

  renderCases('전체');
  renderSteps('suspect');
}

function renderPractice(id) {
  const p = PRACTICE.find((x) => x.id === id) || PRACTICE[0];
  $$('[data-practice-id]').forEach((c) => {
    const on = c.dataset.practiceId === p.id;
    c.classList.toggle('is-active', on);
    c.setAttribute('aria-selected', on);
    if (on) c.scrollIntoView({ block: 'nearest', inline: 'center' });
  });
  const idx = PRACTICE.indexOf(p);
  const prev = PRACTICE[(idx - 1 + PRACTICE.length) % PRACTICE.length];
  const next = PRACTICE[(idx + 1) % PRACTICE.length];
  $('[data-practice-detail]').innerHTML = `
    <header class="pd-head ${p.tone}">
      <span class="pd-icon">${icon(p.icon)}</span>
      <div><p class="kicker">PRACTICE ${String(idx + 1).padStart(2, '0')}</p><h2 class="h2">${p.title}</h2><p class="muted">${p.short}</p></div>
    </header>
    <p class="pd-lead">${p.lead}</p>
    <div class="pd-cols">
      <section><h3 class="h4">주요 사건 유형</h3><ul class="dot-list">${p.items.map((i) => `<li>${i}</li>`).join('')}</ul></section>
      <section><h3 class="h4">대응 방법</h3><ol class="num-list">${p.approach.map((i) => `<li>${i}</li>`).join('')}</ol></section>
    </div>
    <div class="pd-foot">
      <a class="btn btn-navy" href="#contact">${p.title} 사건 상담하기 <span class="arrow" aria-hidden="true">→</span></a>
      <nav class="pd-nav" aria-label="다른 업무분야">
        <a href="#practice/${prev.id}">← ${prev.title}</a>
        <a href="#practice/${next.id}">${next.title} →</a>
      </nav>
    </div>`;
}

function renderSteps(side) {
  $$('[data-side]').forEach((b) => b.setAttribute('aria-selected', b.dataset.side === side));
  $('[data-steps]').innerHTML = STEPS[side].map((s, i) => `
    <li class="step">
      <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="step-body">
        <p class="step-sub">${s.sub}</p>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <ul class="step-points">${s.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
      </div>
    </li>`).join('');
}

function renderCases(filter) {
  const areas = ['전체', ...new Set(CASES.map((c) => c.area))];
  $('[data-case-filter]').innerHTML = areas.map((a) =>
    `<button type="button" class="chip${a === filter ? ' is-active' : ''}" data-case-area="${a}">${a}</button>`).join('');
  const list = CASES.filter((c) => filter === '전체' || c.area === filter);
  $('[data-case-grid]').innerHTML = list.map((c) => `
    <article class="case-card">
      <div class="case-top"><span class="case-area">${c.area}</span><span class="case-tag">${c.tag}</span></div>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </article>`).join('');
}

/* ---------------------------------------------------------
   Tab routing (hash based: #about, #practice/stalking, #about/psychology)
--------------------------------------------------------- */
function route() {
  const [page = 'home', sub] = location.hash.replace(/^#\/?/, '').split('/');
  const target = PAGE_TITLES[page] ? page : 'home';

  $$('.page').forEach((s) => { s.hidden = s.dataset.page !== target; });
  $$('[data-tab]').forEach((a) => {
    const on = a.dataset.tab === target;
    a.classList.toggle('is-active', on);
    a.setAttribute('aria-selected', on);
    if (on) a.scrollIntoView({ block: 'nearest', inline: 'center' });
  });
  document.title = PAGE_TITLES[target];
  document.body.dataset.page = target;

  if (target === 'practice') renderPractice(sub);

  const anchor = target !== 'practice' && sub && document.getElementById(sub);
  if (anchor) {
    requestAnimationFrame(() => {
      const offset = $('.site-header').offsetHeight + 8;
      window.scrollTo({ top: anchor.getBoundingClientRect().top + scrollY - offset, behavior: 'smooth' });
    });
  } else if (!(target === 'practice' && sub && route.last === 'practice')) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  route.last = target;
  revealOnScroll();
}

/* ---------------------------------------------------------
   Interactions
--------------------------------------------------------- */
function bindEvents() {
  window.addEventListener('hashchange', route);

  document.addEventListener('click', (e) => {
    const side = e.target.closest('[data-side]');
    if (side) renderSteps(side.dataset.side);
    const area = e.target.closest('[data-case-area]');
    if (area) renderCases(area.dataset.caseArea);
  });

  // header shadow
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // contact form → mailto (GitHub Pages 는 서버가 없으므로 메일 앱으로 전송)
  const form = $('[data-contact-form]');
  const status = $('[data-form-status]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const missing = ['name', 'phone', 'message'].filter((k) => !String(fd.get(k) || '').trim());
    form.querySelectorAll('.field input, .field textarea').forEach((el) =>
      el.classList.toggle('is-invalid', missing.includes(el.name)));
    if (missing.length) { status.textContent = '필수 항목(*)을 입력해 주세요.'; status.className = 'form-status is-error'; return; }
    if (!fd.get('agree')) { status.textContent = '개인정보 수집·이용에 동의해 주세요.'; status.className = 'form-status is-error'; return; }

    const subject = `[상담 신청] ${fd.get('name')} / ${fd.get('area') || '분야 미선택'}`;
    const body = [
      `성함: ${fd.get('name')}`,
      `연락처: ${fd.get('phone')}`,
      `사건 분야: ${fd.get('area') || '-'}`,
      `진행 단계: ${fd.get('stage') || '-'}`,
      `의뢰인 입장: ${fd.get('side') || '-'}`,
      '',
      '[상담 내용]',
      fd.get('message'),
    ].join('\n');
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = '메일 앱이 열리면 전송 버튼을 눌러 주세요. 열리지 않으면 전화로 문의해 주세요.';
    status.className = 'form-status is-ok';
  });
}

let observer;
function revealOnScroll() {
  if (!('IntersectionObserver' in window)) return;
  observer ||= new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); observer.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.page:not([hidden]) .reveal:not(.is-in)').forEach((el) => observer.observe(el));
}

function markReveal() {
  $$('.why-card, .whyme-copy, .career-card, .psych-copy, .psych-list li, .pp-card, .profile, .timeline li, .step, .case-card, .contact-form, .contact-info, .academic-list li')
    .forEach((el) => el.classList.add('reveal'));
}

renderStatic();
markReveal();
bindEvents();
route();
