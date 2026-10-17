/* =========================================================
   변호사 김광욱 홈페이지
   - 연락처 등 사이트 정보는 CONFIG 에서 수정합니다.
   - 경력 / 업무분야 / 인사이트 / FAQ 등의 내용은 아래 데이터 배열에서 수정합니다.
   - 카피 원칙: 영향력·결과 보장·심리학 과장 표현을 쓰지 않습니다.
   ========================================================= */

const CONFIG = {
  phone: '02-0000-0000',            // TODO: 실제 전화번호
  email: 'contact@example.com',     // TODO: 실제 이메일 (상담 신청서가 이 주소로 작성됩니다)
  hours: '평일 09:00 – 19:00 (야간·주말 예약 상담 가능)',
  address: '서울특별시 (상세 주소 업데이트 예정)', // TODO: 실제 주소
  channels: {                        // TODO: 개설되면 URL 입력 (빈 값이면 '준비 중'으로 표시)
    youtube: '',
    blog: '',
    instagram: '',
  },
};

const PAGE_TITLES = {
  home: '변호사 김광욱 | 경찰 출신 형사변호사',
  about: '변호사 소개 | 변호사 김광욱',
  practice: '주요 업무분야 | 변호사 김광욱',
  process: '수사 단계별 대응 | 변호사 김광욱',
  insight: '인사이트 | 변호사 김광욱',
  contact: '상담 안내 | 변호사 김광욱',
};
const ROUTE_ALIASES = { cases: 'insight' };

const ICONS = {
  memory: '<path d="M12 4a5 5 0 0 0-5 5c0 2 1 3 1 5v2h8v-2c0-2 1-3 1-5a5 5 0 0 0-5-5zM9 19h6M10 22h4"/><path d="M12 8v3l2 1"/>',
  speech: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
  people: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-4 3-6 6-6s6 2 6 6M14 15c1-1 2-1.5 3-1.5 3 0 5 2 5 5.5"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h5"/>',
  station: '<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5M9 11h.01M15 11h.01M12 11h.01"/>',
  hq: '<path d="M4 21V5l8-2 8 2v16M2 21h20M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  nation: '<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/>',
  cap: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
  shield: '<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  bear: '<circle cx="7" cy="6" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="12" cy="12" r="7"/><path d="M10 14c1 1 3 1 4 0M10 11h.01M14 11h.01"/>',
  school: '<path d="M3 10 12 5l9 5-9 5z"/><path d="M7 12v5h10v-5M12 15v6"/>',
  home: '<path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5"/>',
  night: '<path d="M20 15A8 8 0 1 1 9 4a7 7 0 0 0 11 11z"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7h6zM19 7l-3 7h6z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-4 1 2-5z"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',
  blog: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13 7 4 4"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;

/* ---------- 경력: 수사의 실행 → 지휘 → 기준 ---------- */
const ROLES = [
  {
    axis: '수사의 실행', icon: 'station',
    org: '서울중부경찰서', unit: '경제범죄수사팀 · 여성청소년수사팀 수사관',
    summary: '사건 접수부터 조사, 증거 수집, 혐의 판단까지 수사를 직접 수행',
    duties: ['경제범죄 및 여성·청소년 관련 사건 직접 수사', '피의자·피해자 조사와 증거 수집', '사실관계 분석, 혐의 판단 및 사건 처리'],
    meaning: '사건 초기에 수사관이 어떤 사실과 증거를 확인하는지, 조사 과정에서 진술이 어떻게 기록되는지를 구체적으로 설명할 수 있습니다.',
  },
  {
    axis: '수사의 지휘', icon: 'hq',
    org: '서울경찰청', unit: '풍속범죄수사팀장',
    summary: '조직적 성매매, 성범죄, 도박장·불법 게임장 등 광역수사 지휘',
    duties: ['조직적 성매매 및 성범죄 사건 광역수사', '불법 도박장·불법 게임장 등 특별법 위반 사건', '수사 방향과 쟁점 설정, 증거 확보 및 수사 진행 관리'],
    meaning: '개별 조사를 넘어, 사건 전체의 구조와 수사 방향이 어떻게 정해지는지를 지휘자의 관점에서 검토합니다.',
  },
  {
    axis: '수사의 기준', icon: 'nation',
    org: '경찰청 국가수사본부', unit: '여성청소년범죄수사과',
    summary: '전국 단위 여성·청소년 주요 사건 수사지휘와 수사지침·매뉴얼 업무',
    duties: ['전국 여성·청소년 관련 주요 사건의 수사지휘 및 현안 관리', '여성청소년 수사관 대상 수사지침 하달, 수사 매뉴얼 개정', '전국 경찰서 여성청소년 수사부서 업무 실태 현장점검', '주요 사건·수사 현안에 대한 언론 및 국회 대응', '관계성범죄·사회적 약자 대상 범죄 수사제도와 정책적 대응 검토'],
    meaning: '수사기관이 어떤 기준과 절차에 따라 사건을 판단하고 관리하는지, 현장에서 생기는 수사상의 문제와 제도적 한계를 함께 이해합니다.',
  },
];

const PSYCH = [
  { icon: 'speech', title: '진술', text: '진술이 어떤 질문과 정보 속에서 형성되고 변화했는지' },
  { icon: 'memory', title: '기억', text: '시간의 경과와 질문 방식에 따른 회상의 차이' },
  { icon: 'people', title: '관계', text: '당사자의 관계, 범행 전후의 행동과 반복성의 맥락' },
  { icon: 'brain', title: '발달', text: '아동·청소년의 인지발달 수준과 언어 이해 능력' },
];

const PSYCH_DETAIL = [
  { icon: 'memory', title: '기억의 형성과 회상', text: '기억은 영상처럼 고정된 기록이 아닙니다. 부호화·저장·인출의 과정, 시간의 경과, 질문 방식과 사후 정보에 따라 회상 내용에 차이가 생길 수 있습니다.' },
  { icon: 'speech', title: '진술의 형성과 변화', text: '피해자·피의자·목격자의 진술은 어떤 질문을 받았는지, 어떤 정보에 노출되었는지에 영향을 받을 수 있습니다. 일관성이나 불일치만으로 진실 여부를 단정하지 않습니다.' },
  { icon: 'brain', title: '아동·청소년 진술의 특수성', text: '인지발달 수준과 언어 이해 능력, 유도·반복 질문에 대한 반응, 경험을 표현하는 방식을 고려해야 합니다. 성인 사건과 다른 분석적 접근이 필요한 경우가 많습니다.' },
  { icon: 'people', title: '관계성범죄의 맥락', text: '성범죄·스토킹·가정폭력에서는 당사자의 관계, 범행 전후 행동, 반복성과 대응 양상이 중요한 맥락이 될 수 있습니다. 반드시 객관적 증거와 함께 검토합니다.' },
];

const ANALYSIS = [
  '진술 내용뿐 아니라 진술이 형성된 질문 과정',
  '최초 진술과 후속 진술 사이의 변화',
  '개방형·폐쇄형·유도형·반복형·복합 질문의 구분',
  '진술이 바뀌기 직전에 제시된 질문과 정보',
  '핵심적 사실과 주변적 세부사항의 구분',
  '진술과 객관적 증거의 부합 여부',
  '아동의 발달 특성과 진술 능력',
  '면담자와 조사 환경이 달라진 영향',
];

const PRINCIPLES = [
  { title: '영향력이 아니라 판단', text: '경찰 경력의 가치는 인맥이나 친분이 아니라, 사건을 읽고 판단하는 경험에 있습니다. 수사기관과의 관계를 내세우지 않습니다.' },
  { title: '과장 없는 설명', text: '결과를 장담하지 않습니다. 대신 지금 확인된 사실과 증거, 예상되는 절차와 쟁점을 있는 그대로 설명드립니다.' },
  { title: '변호사의 직접 검토', text: '상담부터 사건 기록 검토, 의견서 작성, 조사 참여까지 변호사가 직접 사건을 검토하고 책임집니다.' },
];

const ACADEMIC = [
  { school: '고려대학교', degree: '심리학과 학사' },
  { school: '고려대학교', degree: '인지심리학 석사' },
  { school: '동국대학교', degree: '경찰행정학과 법심리학 박사과정', note: '(수료 예정)' },
];

const QUESTIONS = [
  '내 사건은 앞으로 어떻게 진행될까?',
  '경찰은 지금 무엇을 확인하고 있을까?',
  '어떤 증거가 중요하게 작용할까?',
  '첫 조사에서 무엇을 조심해야 할까?',
  '내 설명을 수사기관이 제대로 이해할까?',
  '지금 내가 할 수 있는 대응은 무엇일까?',
];

const METHOD = [
  { title: '사실관계와 진술 확인', text: '무슨 일이 있었는지, 지금까지 어떤 진술이 이루어졌는지 정리합니다.' },
  { title: '증거와 법률적 쟁점 검토', text: '객관적 증거와 진술의 관계, 다툼이 될 법률적 쟁점을 확인합니다.' },
  { title: '진행 단계와 향후 절차 분석', text: '사건이 어느 단계에 있고, 다음 절차에서 무엇이 확인될지 설명합니다.' },
  { title: '사건에 맞는 대응 방향 수립', text: '사건의 특성에 맞춰 지금 취할 수 있는 대응을 구체적으로 제시합니다.' },
];

/* ---------- 업무분야 ---------- */
const GROUPS = {
  core: '핵심 전문 · 여성·청소년 사건',
  special: '특화 · 사행성·조직적 범죄',
  general: '형사사건 전반',
};

const PRACTICE = [
  {
    id: 'sexual', group: 'core', icon: 'shield', title: '성범죄', tone: 't1',
    short: '강간·강제추행, 디지털 성범죄, 진술증거 중심 사건',
    lead: '성범죄 사건 중에는 당사자의 진술이 증거의 중심이 되는 사건이 있습니다. 이런 사건에서는 진술의 내용뿐 아니라 진술이 어떤 경위로 이루어졌는지, 다른 증거와 어떻게 맞물리는지가 중요한 쟁점이 됩니다.',
    items: ['강간 · 유사강간 · 준강간', '강제추행 · 준강제추행', '불법촬영 · 촬영물 유포 등 디지털 성범죄', '통신매체 이용 음란', '아동·청소년 대상 성범죄'],
    approach: ['조사 전 사실관계와 쟁점 정리', '진술의 형성 경위와 변화 과정 검토', '디지털 증거와 정황 증거의 분석', '피해자 대리 시 보호조치와 2차 피해 방지'],
  },
  {
    id: 'prostitution', group: 'core', icon: 'night', title: '성매매', tone: 't2',
    short: '성매매, 조직적 성매매, 알선 및 특별법 위반',
    lead: '서울경찰청 풍속범죄수사팀장으로 조직적 성매매 사건의 광역수사를 지휘했습니다. 단속과 압수수색 이후 수사가 어떤 증거를 중심으로 구성되는지를 바탕으로 사건을 검토합니다.',
    items: ['성매매 알선 · 영업', '조직적 성매매 및 관련 특별법 위반', '성매수 사건', '아동·청소년 성매수', '성매매 광고 · 장소 제공'],
    approach: ['단속·압수수색 직후의 초기 대응', '장부·계좌·메신저 등 증거 구조 분석', '가담 정도와 역할에 따른 쟁점 정리', '처분 단계에 맞춘 의견 개진'],
  },
  {
    id: 'stalking', group: 'core', icon: 'eye', title: '스토킹 · 관계성범죄', tone: 't3',
    short: '스토킹, 교제관계 형사사건, 반복적 접근·위협',
    lead: '스토킹과 교제관계에서 발생하는 사건에서는 행위의 반복성과 지속성, 관계의 경과, 상대방의 대응 양상이 중요한 맥락이 됩니다. 국가수사본부에서 관계성범죄 수사제도와 정책을 검토한 경험을 바탕으로 접근합니다.',
    items: ['스토킹범죄처벌법 위반', '교제관계에서 발생한 폭행·협박 등', '긴급응급조치 · 잠정조치', '접근금지 · 피해자 보호명령'],
    approach: ['행위의 반복성·지속성에 관한 사실관계 정리', '관계의 경과와 전후 맥락 검토', '잠정조치 결정에 대한 대응 또는 신청', '피해자 측 신변보호 절차 안내'],
  },
  {
    id: 'domestic', group: 'core', icon: 'home', title: '가정폭력', tone: 't7',
    short: '가정폭력 형사사건, 보호조치 및 형사절차 대응',
    lead: '가정폭력 사건은 가족이라는 관계의 특수성 때문에 형사처벌, 가정보호사건, 보호조치 등 여러 절차가 함께 진행될 수 있습니다. 관계의 장기적인 맥락을 함께 고려합니다.',
    items: ['가정폭력처벌법 위반', '가정보호사건 · 보호처분', '임시조치 · 접근금지', '피해자 보호명령'],
    approach: ['형사사건과 가정보호사건 절차 검토', '관계의 경과와 폭력 양상의 정리', '임시조치·보호명령 신청 및 대응', '가족관계를 고려한 현실적인 대응 방향'],
  },
  {
    id: 'child-abuse', group: 'core', icon: 'bear', title: '아동학대', tone: 't4',
    short: '아동학대 신고·수사, 보호자·교직원 사건, 아동 진술',
    lead: '아동학대 사건에서는 아동의 진술이 어떤 질문과 환경 속에서 만들어졌는지가 중요한 쟁점이 될 수 있습니다. 아동의 발달 수준과 조사 방식의 영향을 객관적 증거와 함께 검토합니다.',
    items: ['신체적 · 정서적 학대, 방임', '보호자 관련 아동학대 사건', '어린이집 · 학교 등 교직원 관련 사건', '아동보호사건 · 임시조치'],
    approach: ['아동 진술의 형성 과정과 조사 방식 검토', '발달 수준을 고려한 진술 분석', 'CCTV 등 객관적 증거와의 부합 여부 확인', '피해아동 측 보호 절차 지원'],
  },
  {
    id: 'school', group: 'core', icon: 'school', title: '학교폭력 · 소년사건', tone: 't5',
    short: '학교폭력 절차와 형사사건, 소년보호사건',
    lead: '학교폭력은 학교의 절차와 형사·소년 절차가 함께 진행되는 경우가 많고, 소년사건은 처벌보다 보호와 개선에 중점을 둡니다. 학생의 발달적 특성과 사건 경위를 함께 설명하는 것이 중요합니다.',
    items: ['학교폭력대책심의위원회 대응', '사이버폭력 · 따돌림', '소년보호사건 · 소년형사사건', '촉법소년 사건, 보호처분 관련 절차'],
    approach: ['학교 절차와 형사·소년 절차의 동시 검토', '학생 진술의 맥락과 관계 분석', '보호자·학교와 연계한 환경 개선 자료 준비', '조치 결정에 대한 불복 절차 검토'],
  },
  {
    id: 'gambling', group: 'special', icon: 'dice', title: '사행성범죄', tone: 't6',
    short: '불법 도박장, 불법 게임장, 사행성 영업 관련 사건',
    lead: '서울경찰청 풍속범죄수사팀장으로 도박장과 불법 게임장 등 특별법 위반 사건의 광역수사를 지휘했습니다. 조직적 사건에서 수사가 어떤 구조로 증거를 확보하고 가담자의 역할을 구분하는지를 바탕으로 검토합니다.',
    items: ['불법 도박장 개설 · 도박 관련 범죄', '불법 게임장 · 게임산업법 위반', '사행성 영업 관련 형사사건', '기타 조직적 범죄 관련 형사대응'],
    approach: ['단속·압수 이후 증거 구조 분석', '조직 내 역할과 가담 정도의 정리', '범죄수익 관련 쟁점 검토', '절차 단계별 대응 방향 수립'],
  },
  {
    id: 'general', group: 'general', icon: 'scale', title: '일반 형사사건', tone: 't8',
    short: '경제범죄 등 다양한 형사사건',
    lead: '경제범죄수사팀 수사 경험을 바탕으로 사기·횡령 등 경제범죄를 비롯한 다양한 형사사건을 다룹니다. 사건의 종류와 관계없이 사실관계, 증거, 절차를 구조적으로 검토하는 방식은 같습니다.',
    items: ['사기 · 횡령 · 배임 등 경제범죄', '폭행 · 상해 · 협박', '명예훼손 · 모욕', '기타 형사사건 전반'],
    approach: ['사실관계와 자료의 체계적 정리', '수사기관이 주목할 쟁점 검토', '조사 참여 및 의견서 제출', '검찰·재판 단계까지의 대응'],
  },
];

/* ---------- 수사 단계별 대응 ---------- */
const STEPS = {
  suspect: [
    { title: '수사 개시 전', sub: '고소 예상 · 출석 요구 전', text: '고소가 예상되거나 출석 요구를 받기 전이라도 사실관계와 자료를 미리 정리해 두는 것이 도움이 됩니다. 상대방에게 섣불리 연락하거나 해명하는 것은 신중해야 합니다.', points: ['사실관계 타임라인 정리', '관련 자료 보존', '상대방 접촉에 신중'] },
    { title: '경찰 출석 · 피의자 조사', sub: '최초 진술', text: '최초 진술은 조서로 남아 이후 절차에서 계속 참조됩니다. 수사기관이 어떤 사실과 쟁점을 확인하려 하는지 미리 검토하고, 변호인이 조사에 참여합니다.', points: ['예상 쟁점 검토', '변호인 조사 참여', '조서 열람 및 정정'] },
    { title: '압수수색 · 증거 수집', sub: '디지털 증거', text: '휴대전화·PC 등에 대한 압수수색에서 영장의 범위와 절차를 확인하고, 참여권을 행사합니다.', points: ['영장 범위 확인', '포렌식 참여권 행사', '증거 수집 절차 검토'] },
    { title: '송치 · 불송치 결정', sub: '경찰 단계의 판단', text: '경찰은 수사 결과에 따라 사건을 검찰에 송치하거나 불송치 결정을 합니다. 그 전에 의견서와 자료를 제출해 사건에 대한 의견을 개진합니다.', points: ['변호인 의견서 제출', '추가 자료 제출', '수사 결과 확인'] },
    { title: '검찰 단계', sub: '기소 여부 판단', text: '검사는 송치된 사건을 검토해 기소 여부를 결정하고, 필요한 경우 보완수사를 요구합니다. 이 단계에서도 판단은 달라질 수 있습니다.', points: ['검찰 의견서 제출', '처분 단계에 맞춘 대응', '합의 · 양형 자료 검토'] },
    { title: '재판', sub: '공판 대응', text: '수사 단계에서 형성된 증거와 진술을 다시 검토해 쟁점을 다투고, 필요한 경우 양형 자료를 준비합니다.', points: ['증거 · 진술의 신빙성 검토', '증인신문', '양형 변론'] },
  ],
  victim: [
    { title: '고소 준비', sub: '피해 사실 정리', text: '피해 사실과 증거를 체계적으로 정리하고, 적용될 수 있는 죄명과 절차를 검토합니다.', points: ['증거 확보 및 보존', '고소장 작성', '죄명 · 절차 검토'] },
    { title: '피해자 조사', sub: '진술 지원', text: '피해자 진술은 중요한 증거가 됩니다. 조사에 동석하고, 필요한 경우 진술조력인·신뢰관계인 동석 등 제도를 안내합니다.', points: ['피해자 조사 동석', '진술조력인 · 신뢰관계인', '2차 피해 방지'] },
    { title: '보호조치', sub: '신변 안전', text: '스토킹·가정폭력·성범죄 등에서 접근금지, 잠정조치, 신변보호 등 필요한 보호조치를 검토하고 신청합니다.', points: ['잠정조치 · 임시조치 신청', '신변보호 요청', '지원기관 안내'] },
    { title: '수사 진행 확인', sub: '수사 결과 대응', text: '수사 진행 상황을 확인하고 추가 자료와 의견을 제출합니다. 불송치 결정에는 이의신청 절차가 있습니다.', points: ['추가 자료 · 의견서 제출', '불송치 이의신청', '진행 상황 확인'] },
    { title: '재판 · 피해 회복', sub: '공판 참여', text: '재판 절차에서 진술권을 행사하고, 배상명령·손해배상 등 피해 회복 절차를 검토합니다.', points: ['재판 절차 진술', '배상명령 신청', '손해배상 청구 검토'] },
  ],
};

/* ---------- 인사이트 ---------- */
const TOPICS = [
  { icon: 'scale', title: '사건 해설', text: '실제 사건과 공개된 사건에 대한 법률적 해설' },
  { icon: 'layers', title: '수사와 절차', text: '수사기관의 판단구조와 형사절차를 쉽게 설명' },
  { icon: 'search', title: '분야별 쟁점', text: '성범죄·스토킹·아동학대 등 분야별 주요 쟁점' },
  { icon: 'memory', title: '진술과 기억', text: '진술과 기억에 관한 법심리학적 설명' },
  { icon: 'compass', title: '행동과 사건 분석', text: '범죄 행동과 사건 전개에 대한 분석적 시각' },
];

const CHANNELS = [
  { key: 'youtube', name: 'YouTube', text: '사건 해설과 형사절차 영상' },
  { key: 'blog', name: 'Blog', text: '분야별 쟁점과 칼럼' },
  { key: 'instagram', name: 'Instagram', text: '짧고 정확한 형사 정보' },
];

const FAQ = [
  { q: '상담 내용은 비밀이 보장되나요?', a: '변호사는 법률상 비밀유지의무를 부담합니다. 상담 내용은 사건 수임 여부와 관계없이 외부에 공개되지 않습니다.' },
  { q: '경찰 출신 변호사라서 수사기관에 영향력이 있나요?', a: '아닙니다. 경찰 경력의 가치는 인맥이나 영향력이 아니라 수사 절차와 판단구조에 대한 이해, 그리고 사건을 분석하는 경험에 있습니다. 모든 대응은 정해진 절차와 증거를 바탕으로 이루어집니다.' },
  { q: '경찰 출석 요구를 받았는데, 바로 가야 하나요?', a: '출석 일정은 조정을 요청할 수 있습니다. 준비 없이 출석하기보다 사실관계와 쟁점을 먼저 정리한 뒤 출석하시는 것이 좋습니다.' },
  { q: '피해자도 변호사의 도움을 받을 수 있나요?', a: '네. 고소장 작성, 피해자 조사 동석, 보호조치 신청, 재판 절차 진술, 피해 회복 절차까지 피해자 측을 대리할 수 있습니다.' },
  { q: '여성·청소년 사건이 아니어도 상담할 수 있나요?', a: '네. 경제범죄를 비롯한 다양한 형사사건을 다룹니다. 여성·청소년 사건과 사행성범죄는 경력상 특히 깊이 다뤄온 분야입니다.' },
  { q: '심리학으로 진술이 거짓인지 판별할 수 있나요?', a: '그렇지 않습니다. 심리학으로 거짓말을 판별하거나 진실성을 확정할 수는 없습니다. 진술이 형성된 과정과 증거와의 관계를 더 정교하게 검토하는 데 활용합니다.' },
];

/* ---------------------------------------------------------
   Rendering
--------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const pad = (n) => String(n).padStart(2, '0');

function renderStatic() {
  $$('[data-config]').forEach((el) => { el.textContent = CONFIG[el.dataset.config] || ''; });
  $$('[data-config-href="tel"]').forEach((el) => { el.href = 'tel:' + CONFIG.phone.replace(/[^0-9+]/g, ''); });
  $$('[data-config-href="mailto"]').forEach((el) => { el.href = 'mailto:' + CONFIG.email; });
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  $('[data-career-cards]').innerHTML = ROLES.map((r, i) => `
    <li class="career-card">
      <div class="career-visual v${i + 1}"><span class="badge-num">${pad(i + 1)}</span><span class="career-axis">${r.axis}</span><span class="career-icon">${icon(r.icon)}</span></div>
      <div class="career-body">
        <h3>${r.org}</h3>
        <p class="muted">${r.unit}</p>
        <p>${r.summary}</p>
      </div>
    </li>`).join('') + `
    <li class="career-card career-card--plus">
      <div class="career-body">
        <p class="career-plus-label">+ 분석의 토대</p>
        <h3>인지심리학 · 법심리학</h3>
        <p>진술·기억·행동과 증거를 분석적으로 검토하는 학문적 배경</p>
      </div>
    </li>`;

  $('[data-roles]').innerHTML = ROLES.map((r, i) => `
    <li class="role">
      <div class="role-head">
        <span class="role-axis">${pad(i + 1)} · ${r.axis}</span>
        <h3>${r.org}</h3>
        <p class="muted">${r.unit}</p>
      </div>
      <div class="role-body">
        <ul class="dot-list">${r.duties.map((d) => `<li>${d}</li>`).join('')}</ul>
        <p class="role-meaning"><strong>의뢰인의 사건에서</strong>${r.meaning}</p>
      </div>
    </li>`).join('');

  $('[data-questions]').innerHTML = QUESTIONS.map((q) => `<li>${q}</li>`).join('');
  $('[data-method]').innerHTML = METHOD.map((m, i) => `
    <li><span class="method-num">${pad(i + 1)}</span><div><strong>${m.title}</strong><p>${m.text}</p></div></li>`).join('');

  $('[data-psych-list]').innerHTML = PSYCH.map((p) => `
    <li><span class="psych-icon">${icon(p.icon)}</span><div><h3>${p.title}</h3><p>${p.text}</p></div></li>`).join('');
  $('[data-psych-detail]').innerHTML = PSYCH_DETAIL.map((p) => `
    <li><span class="psych-icon">${icon(p.icon)}</span><div><h3>${p.title}</h3><p>${p.text}</p></div></li>`).join('');
  $('[data-analysis]').innerHTML = ANALYSIS.map((a) => `<li>${a}</li>`).join('');
  $('[data-principles]').innerHTML = PRINCIPLES.map((p, i) => `
    <li><span class="principle-num">${pad(i + 1)}</span><h3>${p.title}</h3><p>${p.text}</p></li>`).join('');

  $$('[data-academic-list]').forEach((ul) => {
    ul.innerHTML = ACADEMIC.map((a) => `
      <li><span class="academic-icon">${icon('cap')}</span><div><strong>${a.school}</strong><span>${a.degree}${a.note ? ` <em>${a.note}</em>` : ''}</span></div></li>`).join('');
  });

  $('[data-practice-preview]').innerHTML = PRACTICE.map((p) => `
    <a class="pp-card ${p.tone}" href="#practice/${p.id}">
      <span class="pp-visual">${icon(p.icon)}<em class="pp-group g-${p.group}">${p.group === 'core' ? '핵심' : p.group === 'special' ? '특화' : '전반'}</em></span>
      <span class="pp-body"><strong>${p.title}</strong><small>${p.short}</small><span class="arrow" aria-hidden="true">→</span></span>
    </a>`).join('');

  $('[data-practice-chips]').innerHTML = Object.entries(GROUPS).map(([key, label]) => `
    <div class="chip-group">
      <p class="chip-group-label">${label}</p>
      <div class="chip-row" role="tablist">${PRACTICE.filter((p) => p.group === key).map((p) =>
        `<a class="chip" role="tab" href="#practice/${p.id}" data-practice-id="${p.id}">${p.title}</a>`).join('')}</div>
    </div>`).join('');

  $('[data-area-select]').insertAdjacentHTML('beforeend', PRACTICE.map((p) => `<option>${p.title}</option>`).join(''));

  $('[data-topics]').innerHTML = TOPICS.map((t) => `
    <li><span class="topic-icon">${icon(t.icon)}</span><h3>${t.title}</h3><p>${t.text}</p></li>`).join('');
  $('[data-channels]').innerHTML = CHANNELS.map((c) => {
    const url = CONFIG.channels[c.key];
    const inner = `<span class="channel-icon">${icon(c.key)}</span><span><strong>${c.name}</strong><small>${c.text}</small></span><em class="channel-state">${url ? '바로가기 →' : '준비 중'}</em>`;
    return `<li>${url ? `<a class="channel" href="${url}" target="_blank" rel="noopener">${inner}</a>` : `<div class="channel is-soon">${inner}</div>`}</li>`;
  }).join('');

  $('[data-faq]').innerHTML = FAQ.map((f) => `
    <details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');

  renderSteps('suspect');
}

function renderPractice(id) {
  const p = PRACTICE.find((x) => x.id === id) || PRACTICE[0];
  $$('[data-practice-id]').forEach((c) => {
    const on = c.dataset.practiceId === p.id;
    c.classList.toggle('is-active', on);
    c.setAttribute('aria-selected', on);
  });
  const idx = PRACTICE.indexOf(p);
  const prev = PRACTICE[(idx - 1 + PRACTICE.length) % PRACTICE.length];
  const next = PRACTICE[(idx + 1) % PRACTICE.length];
  $('[data-practice-detail]').innerHTML = `
    <header class="pd-head ${p.tone}">
      <span class="pd-icon">${icon(p.icon)}</span>
      <div><p class="kicker">${GROUPS[p.group]}</p><h2 class="h2">${p.title}</h2><p class="muted">${p.short}</p></div>
    </header>
    <p class="pd-lead">${p.lead}</p>
    <div class="pd-cols">
      <section><h3 class="h4">주요 사건 유형</h3><ul class="dot-list">${p.items.map((i) => `<li>${i}</li>`).join('')}</ul></section>
      <section><h3 class="h4">검토하고 대응하는 것</h3><ol class="num-list">${p.approach.map((i) => `<li>${i}</li>`).join('')}</ol></section>
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
      <span class="step-num">${pad(i + 1)}</span>
      <div class="step-body">
        <p class="step-sub">${s.sub}</p>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <ul class="step-points">${s.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
      </div>
    </li>`).join('');
}

/* ---------------------------------------------------------
   Tab routing (hash based: #about, #practice/stalking, #about/psychology)
--------------------------------------------------------- */
function route() {
  let [page = 'home', sub] = location.hash.replace(/^#\/?/, '').split('/');
  page = ROUTE_ALIASES[page] || page;
  const target = PAGE_TITLES[page] ? page : 'home';

  $$('.page').forEach((s) => { s.hidden = s.dataset.page !== target; });
  $$('[data-tab]').forEach((a) => {
    const on = a.dataset.tab === target;
    a.classList.toggle('is-active', on);
    a.setAttribute('aria-selected', on);
    if (on) {
      const nav = a.closest('.main-nav');
      nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: 'smooth' });
    }
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
  });

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
  $$('.whyme-copy, .career-card, .q-copy, .q-answer, .psych-copy, .psych-list li, .pp-card, .profile, .role, .principles li, .topic-grid li, .contact-form, .contact-info, .academic-list li')
    .forEach((el) => el.classList.add('reveal'));
}

renderStatic();
markReveal();
bindEvents();
route();
