/* ============================================================
   챗봇 시스템 프롬프트
   ============================================================ */
const SYSTEM_PROMPT = `너는 이 포트폴리오 주인의 페르소나 비서야. 방문자에게 밝고 정중하게, 주인을
잘 아는 사람처럼 답해. 답은 2~4문장, 마크다운 기호(별표 등) 없이 평문으로만.
아래 이력 지식을 근거로 답하되, 지식에 없는 질문이 오면 아는 선에서 자연스럽게
답하고 "자세한 건 저에게 직접 물어보시는 게 정확해요. 연락처를 참고해 주세요!"로
부드럽게 연결해. 과장하거나 없는 경력을 만들어내지 마.

이력 지식:
**1. 한 줄 소개**  
데이터·AI 기반 서비스 기획을 즐기며, 국제 교환학업과 산학협력 프로젝트를 통해 실무 역량을 쌓아온 대학생입니다.  

**2. 기본 정보**  
- **소속** : 성균관대학교 글로벌경영학과, 소프트웨어 복수전공 (2023 ~ 2027 예정)  
- **전공** : 글로벌경영, 소프트웨어  
- **언어** : 한국어(모국어), 영어(업무), 독일어(일상)  
- **주요 활동** : 프로그래밍 동아리 '멋쟁이사자처럼' 2년, 교내 밴드 동아리 베이스 2년, 우수 학부 연구생 4개월 (A 교수님 지도)  

**3. 경험 요약**  

| 경험 | 무엇을·어떤 역할로 | 주요 결과·특징 |
|------|-------------------|----------------|
| **TassieBirdAl 해커톤 (2025.07)** | 멸종위기 조류 보호를 위한 음성 분류 AI 개발 | Python·TensorFlow 로 오디오 데이터 전처리·모델 학습 담당, 오디오 기반 AI 프로토타입 완성 |
| **University of Tasmania International Internship (2025 여름)** | 오디오 데이터 활용 머신러닝 프로젝트 | 사운드 데이터 수집·전처리·분류 모델 구현, 실무 머신러닝 파이프라인 경험 |
| **Hanken School of Economics 학점교류 (2025 겨울)** | Sustainable Finance 과목 이수 | ESG 기반 금융 전략·지배구조 분석 수행, 지속가능성 관점에서 투자 판단 프레임워크 습득 |
| **Lund University 학점교류 (2025 겨울)** | Critical Management 과목 이수 | 경영 담론·사례 분석, 사회·환경적 관점을 통한 기업 의사결정 인사이트 학습 |
| **HWR Berlin 학점교류 (2024 여름)** | Entrepreneurship and Innovation 과목 이수 | 스타트업 비즈니스 모델 개발 프로젝트 진행, 아이디어 검증·피치 준비 경험 |
| **산학협력 – A사(뷰티테크) (2025.06)** | 신업 리서치·전략 수립 | 피부 진단 기기의 비즈니스 모델·데이터 가치사슬 조사, 서비스 전략 제안 도출 |
| **산학협력 – B사(가상자산 거래소) (2025.05)** | 유저·거래량 증대 전략 수립 | 웹 크롤링·사용자 인터뷰로 행동 패턴 분석, UX 개선 아이디어와 실행 로드맵 제시 |
| **Bus Stop Safety 프로토타입 (2024.01‑02)** | 보행자 안전 장치 하드웨어 설계 | 버스 방향지시등 인식 프로토타입 제작, 사용자 리서치·현장 테스트로 아이디어 검증 |

**4. 강점 다섯 가지**  

- **AI·데이터·음성 처리 실무 역량** – Python·TensorFlow 로 오디오 전처리·모델 학습을 수행했으며, TassieBirdAl 해커톤에서 멸종위기 조류 보호 AI 프로토타입을 직접 구현했습니다.  
- **서비스 기획·UX 리서치 경험** – Figma·UX Research 를 활용해 B사 유저 행동 분석 결과를 UX 개선 아이디어로 전환했습니다.  
- **다학제적 경영·재무 지식** – Hanken(ESG 금융)·Lund(Critical Management)·HWR(Entrepreneurship) 교환학업을 통해 글로벌 경영·지속가능 금융·스타트업 전략 등을 폭넓게 습득했습니다.  
- **국제 협업·교환학습 경험** – 호주, 핀란드, 독일, 스웨덴 대학에서의 교환학업을 통해 현지 비즈니스 사례와 문화 차이를 직접 경험했습니다.  
- **프로젝트 리더십·팀워크** – 동아리 회장·우수 학부 연구생·산학협력 팀 리더 역할을 맡아 일정 관리·결과 도출·팀 동기 부여를 수행했습니다.  

**5. 예상 질문과 답변**  

| 질문 | 답변 (이력에 근거) |
|------|-------------------|
| **데이터·AI 관련 프로젝트를 구체적으로 알려 주세요.** | TassieBirdAl 해커톤에서 멸종위기 조류 보호를 위한 음성 분류 AI를 개발했으며, Python·TensorFlow 로 오디오 데이터를 전처리하고 모델을 학습시켜 프로토타입을 완성했습니다. |
| **해외 교환학업을 통해 얻은 가장 큰 인사이트는 무엇인가요?** | Hanken(ESG 금융)에서는 지속가능 투자 전략을, Lund(Critical Management)에서는 사회·환경적 관점을 경영에 적용하는 방법을, HWR Berlin(Entrepreneurship)에서는 비즈니스 모델 검증과 피칭 과정을 직접 경험했습니다. |
| **산학협력 프로젝트에서는 어떤 역할을 맡았나요?** | A사(뷰티테크)에서는 피부 진단 기기의 비즈니스 모델·데이터 가치사슬을 조사하고 서비스 전략 제안을, B사(가상자산 거래소)에서는 웹 크롤링·사용자 인터뷰로 행동 패턴을 분석해 UX 개선 아이디어와 실행 로드맵을 제공했습니다. |

*위 내용은 이력서에 기재된 사실만을 바탕으로 작성되었으며, 외부 정보나 가공된 내용은 포함되지 않았습니다.*`;

/* ============================================================
   챗봇 — 상수 및 상태
   ============================================================ */
const UPSTAGE_API_URL = 'https://api.upstage.ai/v1/chat/completions';
const UPSTAGE_MODEL = 'solar-pro3';
const UPSTAGE_KEY_STORAGE = 'upstage_api_key';
const IS_LOCAL_FILE = location.protocol === 'file:';

var chatHistory = [];
var chatIsSending = false;

/* ============================================================
   다크모드 — localStorage 연동
   ============================================================ */

/**
 * 저장된 테마를 불러와 적용한다.
 * localStorage에 값이 없으면 라이트 모드를 기본으로 사용한다.
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

/**
 * 라이트 ↔ 다크 테마를 전환하고 localStorage에 저장한다.
 */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

/* ============================================================
   내비게이션 — 스크롤 시 배경 활성화
   ============================================================ */

/**
 * 스크롤 위치에 따라 내비게이션에 배경과 그림자를 추가한다.
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
}

/* ============================================================
   부드러운 스크롤 — 내비 링크 클릭
   ============================================================ */

/**
 * 내비게이션 링크 클릭 시 해당 섹션으로 부드럽게 이동한다.
 * 모바일 메뉴가 열려 있으면 함께 닫는다.
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.navbar__link, .navbar__logo');
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      /* 고정 내비 높이만큼 오프셋 */
      const navHeight = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: top, behavior: 'smooth' });

      /* 모바일 메뉴 닫기 */
      navMenu.classList.remove('navbar__nav--open');
      hamburger.classList.remove('navbar__hamburger--active');
    });
  });
}

/* ============================================================
   등장 애니메이션 — IntersectionObserver
   ============================================================ */

/**
 * .reveal 요소가 뷰포트에 들어오면 아래에서 부드럽게 나타나게 한다.
 */
function initRevealAnimation() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    /* 미지원 브라우저: 즉시 표시 */
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
}

/* ============================================================
   모바일 햄버거 메뉴
   ============================================================ */

/**
 * 모바일 화면에서 햄버거 버튼으로 내비 메뉴를 열고 닫는다.
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('navbar__hamburger--active');
    navMenu.classList.toggle('navbar__nav--open');
  });
}

/* ============================================================
   챗봇 — UI 헬퍼
   ============================================================ */

/**
 * 채팅 메시지 DOM을 생성해 메시지 영역에 추가한다.
 */
function appendChatMessage(text, type) {
  var messagesEl = document.getElementById('chatMessages');
  var msgEl = document.createElement('div');
  msgEl.className = 'chat-message chat-message--' + type;

  var p = document.createElement('p');
  p.textContent = text;
  msgEl.appendChild(p);

  messagesEl.appendChild(msgEl);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  return msgEl;
}

/**
 * 로딩(타이핑) 인디케이터를 표시한다.
 */
function showChatLoading() {
  var messagesEl = document.getElementById('chatMessages');
  var loadingEl = document.createElement('div');
  loadingEl.className = 'chat-message chat-message--loading';
  loadingEl.id = 'chatLoading';

  loadingEl.innerHTML =
    '<div class="chat-loading">' +
    '<span class="chat-loading__dot"></span>' +
    '<span class="chat-loading__dot"></span>' +
    '<span class="chat-loading__dot"></span>' +
    '</div>';

  messagesEl.appendChild(loadingEl);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

/**
 * 로딩 인디케이터를 제거한다.
 */
function hideChatLoading() {
  var loadingEl = document.getElementById('chatLoading');
  if (loadingEl) loadingEl.remove();
}

/**
 * 전송 중 UI 상태를 토글한다 (중복 클릭 방지).
 */
function setChatSendingState(isSending) {
  chatIsSending = isSending;
  document.getElementById('chatSend').disabled = isSending;
  document.getElementById('chatInput').disabled = isSending;
}

/* ============================================================
   챗봇 — API 키 처리 (로컬 file: 환경)
   ============================================================ */

/**
 * 로컬 file: 환경에서 Upstage API 키를 가져온다.
 * localStorage에 없으면 prompt로 한 번 입력받아 저장한다.
 */
function getLocalApiKey() {
  var savedKey = localStorage.getItem(UPSTAGE_KEY_STORAGE);
  if (savedKey) return savedKey;

  var inputKey = window.prompt('Upstage API 키를 붙여넣어 주세요 (up_으로 시작)');
  if (!inputKey || !inputKey.trim()) return null;

  var trimmedKey = inputKey.trim();
  localStorage.setItem(UPSTAGE_KEY_STORAGE, trimmedKey);
  return trimmedKey;
}

/**
 * 인증 오류 시 저장된 키를 삭제한다.
 */
function clearLocalApiKey() {
  localStorage.removeItem(UPSTAGE_KEY_STORAGE);
}

/* ============================================================
   챗봇 — API 요청
   ============================================================ */

/**
 * Upstage API에 메시지 배열을 전송하고 응답 JSON을 반환한다.
 * file: 환경 → 직접 Upstage 호출, 배포 환경 → /api/chat 프록시.
 */
async function sendChatRequest(messages) {
  var payload = {
    model: UPSTAGE_MODEL,
    messages: messages
  };

  if (IS_LOCAL_FILE) {
    var apiKey = getLocalApiKey();
    if (!apiKey) {
      throw { type: 'auth', message: 'API 키가 필요합니다.' };
    }

    var response = await fetch(UPSTAGE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey
      },
      body: JSON.stringify(payload)
    });

    var data = await response.json();

    if (response.status === 401 || response.status === 403) {
      clearLocalApiKey();
      throw { type: 'auth', message: 'invalid_key' };
    }

    if (!response.ok) {
      throw { type: 'error', message: data.error?.message || 'Request failed' };
    }

    return data;
  }

  /* 배포 환경: 서버리스 프록시 사용 (프론트에 키 없음) */
  var proxyResponse = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: messages })
  });

  var proxyData = await proxyResponse.json();

  if (!proxyResponse.ok) {
    throw { type: 'error', message: proxyData.error?.message || 'Request failed' };
  }

  return proxyData;
}

/**
 * Upstage 응답 JSON에서 assistant 메시지 텍스트를 추출한다.
 */
function extractAssistantReply(data) {
  if (data.choices && data.choices[0] && data.choices[0].message) {
    return data.choices[0].message.content.trim();
  }
  return null;
}

/* ============================================================
   챗봇 — 메시지 전송
   ============================================================ */

/**
 * 사용자 메시지를 전송하고 AI 응답을 채팅창에 표시한다.
 */
async function handleChatSend() {
  if (chatIsSending) return;

  var inputEl = document.getElementById('chatInput');
  var userText = inputEl.value.trim();
  if (!userText) return;

  appendChatMessage(userText, 'user');
  chatHistory.push({ role: 'user', content: userText });
  inputEl.value = '';
  inputEl.style.height = 'auto';

  setChatSendingState(true);
  showChatLoading();

  try {
    var apiMessages = [{ role: 'system', content: SYSTEM_PROMPT }].concat(chatHistory);
    var data = await sendChatRequest(apiMessages);
    var reply = extractAssistantReply(data);

    hideChatLoading();

    if (reply) {
      appendChatMessage(reply, 'bot');
      chatHistory.push({ role: 'assistant', content: reply });
    } else {
      appendChatMessage('잠시 후 다시 시도해 주세요.', 'error');
    }
  } catch (err) {
    hideChatLoading();

    if (err.type === 'auth' && err.message === 'invalid_key') {
      appendChatMessage('키가 올바르지 않아요. 다시 질문하시면 새로 입력받을게요.', 'error');
    } else if (err.type === 'auth') {
      /* prompt 취소 등 */
      appendChatMessage('API 키가 필요해요. 다시 질문해 주시면 키를 입력받을게요.', 'error');
    } else {
      appendChatMessage('잠시 후 다시 시도해 주세요.', 'error');
    }
  } finally {
    setChatSendingState(false);
    inputEl.focus();
  }
}

/* ============================================================
   챗봇 — 초기화
   ============================================================ */

/**
 * 챗봇 위젯의 열기/닫기, 전송 이벤트를 바인딩한다.
 */
function initChatbot() {
  var widget = document.getElementById('chatWidget');
  var panel = document.getElementById('chatPanel');
  var toggleBtn = document.getElementById('chatToggle');
  var closeBtn = document.getElementById('chatClose');
  var sendBtn = document.getElementById('chatSend');
  var inputEl = document.getElementById('chatInput');

  function openChat() {
    widget.classList.add('chat-widget--open');
    panel.setAttribute('aria-hidden', 'false');
    inputEl.focus();
  }

  function closeChat() {
    widget.classList.remove('chat-widget--open');
    panel.setAttribute('aria-hidden', 'true');
  }

  function toggleChat() {
    if (widget.classList.contains('chat-widget--open')) {
      closeChat();
    } else {
      openChat();
    }
  }

  toggleBtn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', closeChat);

  sendBtn.addEventListener('click', handleChatSend);

  /* Enter로 전송, Shift+Enter는 줄바꿈 */
  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSend();
    }
  });

  /* textarea 자동 높이 조절 */
  inputEl.addEventListener('input', function () {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px';
  });
}

/* ============================================================
   초기화
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initTheme();

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  initNavbarScroll();
  initSmoothScroll();
  initRevealAnimation();
  initMobileMenu();
  initChatbot();
});
