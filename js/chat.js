/* =========================================================
   무료 AI 법률 상담 위젯
   - CHATBOT.mode
       'off'    : 준비 중 안내 (기본값)
       'api'    : CHATBOT.endpoint 로 POST { messages, context } → { reply } (또는 text/plain)
       'iframe' : CHATBOT.embedUrl 을 패널 안에 표시
   - API 키는 절대 이 파일에 넣지 않습니다. 키는 서버(서버리스 함수)에만 둡니다.
   ========================================================= */

const CHATBOT = {
  mode: 'off',
  endpoint: '',   // 예: 'https://<배포주소>/api/chat'
  embedUrl: '',   // 예: 'https://<챗봇주소>/embed'
};

const CHAT_SUGGESTIONS = [
  '경찰에서 출석 요구 문자를 받았어요. 어떻게 해야 하나요?',
  '피해자 조사에는 누구와 함께 갈 수 있나요?',
  '스토킹 잠정조치는 어떤 절차로 진행되나요?',
  '학교폭력 심의위원회 절차가 궁금해요.',
];

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => t.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = (t) => esc(t)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m.replace(/\n/g, '')}</ul>`)
    .replace(/\n/g, '<br>');

  const history = [];
  let context = '';
  let busy = false;

  document.body.insertAdjacentHTML('beforeend', `
    <button class="chat-fab" type="button" data-chat-open aria-label="무료 AI 법률 상담 열기">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 9.5h8M8 12.5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
      <span>무료 AI 법률 상담</span>
    </button>
    <div class="chat-backdrop" data-chat-close hidden></div>
    <section class="chat-panel" role="dialog" aria-modal="true" aria-labelledby="chat-title" hidden>
      <header class="chat-head">
        <div>
          <p class="chat-kicker">FREE · AI LEGAL GUIDE</p>
          <h2 id="chat-title">무료 AI 법률 상담</h2>
        </div>
        <button type="button" class="chat-x" data-chat-close aria-label="닫기">×</button>
      </header>
      <p class="chat-notice">AI가 제공하는 <strong>일반적인 법률 정보</strong>이며, 변호사의 검토를 거친 법률 자문이 아닙니다. 이름·연락처 등 개인정보나 사건을 특정할 수 있는 내용은 입력하지 마세요.</p>
      <div class="chat-body" data-chat-body aria-live="polite"></div>
      <div class="chat-suggest" data-chat-suggest></div>
      <form class="chat-form" data-chat-form>
        <textarea name="q" rows="1" placeholder="궁금한 점을 입력하세요" aria-label="질문 입력" maxlength="1000"></textarea>
        <button type="submit" aria-label="보내기"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      </form>
      <a class="chat-handoff" href="#contact" data-chat-close>내 사건은 변호사와 직접 상담하기 →</a>
      <a class="chat-powered" href="https://otterax-homepage.vercel.app/" target="_blank" rel="noopener"><img src="assets/img/otterax/otter-symbol-white.png" alt="" width="14" height="14" />Powered by OtterAX</a>
    </section>`);

  const panel = $('.chat-panel');
  const backdrop = $('.chat-backdrop');
  const body = $('[data-chat-body]');
  const form = $('[data-chat-form]');
  const input = form.q;
  const suggest = $('[data-chat-suggest]');
  let lastFocus = null;

  function addMsg(role, text) {
    body.insertAdjacentHTML('beforeend', `<div class="chat-msg ${role}">${role === 'bot' ? md(text) : esc(text)}</div>`);
    body.scrollTop = body.scrollHeight;
  }

  function greet() {
    if (body.childElementCount) return;
    if (CHATBOT.mode === 'iframe' && CHATBOT.embedUrl) {
      body.innerHTML = `<iframe class="chat-frame" src="${esc(CHATBOT.embedUrl)}" title="AI 법률 상담"></iframe>`;
      panel.classList.add('is-iframe');
      return;
    }
    if (CHATBOT.mode === 'api' && CHATBOT.endpoint) {
      addMsg('bot', '안녕하세요. 형사절차, 수사 단계별 대응, 피해자 보호제도 등 **일반적인 법률 정보**를 안내해 드립니다. 무엇이 궁금하신가요?');
    } else {
      addMsg('bot', 'AI 법률 상담은 **준비 중**입니다.\n곧 형사절차와 수사 단계별 대응 등 일반적인 법률 정보를 무료로 안내해 드릴 예정입니다.\n지금 바로 상담이 필요하시면 아래 버튼으로 변호사 상담을 신청해 주세요.');
      form.hidden = true;
    }
  }

  function renderSuggestions() {
    const ready = CHATBOT.mode === 'api' && CHATBOT.endpoint;
    suggest.innerHTML = ready && history.length === 0
      ? CHAT_SUGGESTIONS.map((s) => `<button type="button" data-chat-q="${esc(s)}">${esc(s)}</button>`).join('')
      : '';
  }

  function open(prefill, ctx) {
    lastFocus = document.activeElement;
    context = ctx || context;
    panel.hidden = false; backdrop.hidden = false;
    document.body.classList.add('chat-open');
    greet(); renderSuggestions();
    if (prefill && !form.hidden) { input.value = prefill; autosize(); }
    requestAnimationFrame(() => (form.hidden ? $('.chat-x') : input).focus());
  }

  function close() {
    panel.hidden = true; backdrop.hidden = true;
    document.body.classList.remove('chat-open');
    lastFocus?.focus?.();
  }

  async function send(text) {
    if (busy || !text.trim()) return;
    busy = true;
    history.push({ role: 'user', content: text.trim() });
    addMsg('user', text.trim());
    renderSuggestions();
    input.value = ''; autosize();
    body.insertAdjacentHTML('beforeend', '<div class="chat-msg bot is-typing"><span></span><span></span><span></span></div>');
    body.scrollTop = body.scrollHeight;
    try {
      const res = await fetch(CHATBOT.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-12), context }),
      });
      if (!res.ok) throw new Error(res.status);
      const type = res.headers.get('content-type') || '';
      const reply = type.includes('json') ? (await res.json()).reply : await res.text();
      history.push({ role: 'assistant', content: reply });
      $('.is-typing', body)?.remove();
      addMsg('bot', reply || '답변을 가져오지 못했습니다.');
    } catch {
      $('.is-typing', body)?.remove();
      addMsg('bot', '일시적으로 답변을 가져오지 못했습니다. 잠시 후 다시 시도하시거나, 변호사 상담을 신청해 주세요.');
    } finally {
      busy = false;
    }
  }

  function autosize() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 140) + 'px';
  }

  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-chat-open]');
    if (opener) { e.preventDefault(); open(opener.dataset.chatPrefill, opener.dataset.chatContext); return; }
    if (e.target.closest('[data-chat-close]')) close();
    const q = e.target.closest('[data-chat-q]');
    if (q) send(q.dataset.chatQ);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) close(); });
  form.addEventListener('submit', (e) => { e.preventDefault(); send(input.value); });
  input.addEventListener('input', autosize);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(input.value); }
  });

  window.LawChat = { open };
})();
