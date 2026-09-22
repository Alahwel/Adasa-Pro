/**
 * عدسة برو | AdasaPro
 * نظام إدارة الزبائن، الجلسات، والحسابات للمصورين
 * تم التصميم وفق معايير UI/UX الاحترافية (Minimalist Studio Aesthetic, Libyan Dinar)
 */

// ================= STORAGE KEYS =================
const STORAGE_KEY_CLIENTS = 'adasapro_clients_v4';
const STORAGE_KEY_SESSIONS = 'adasapro_sessions_v4';
const STORAGE_KEY_GEAR = 'adasapro_gear_v4';
const CURRENCY_LABEL = 'د.ل';

// ================= SEED DATA (CLEAN & ANONYMOUS) =================
// النسخة الآمنة للمنصة: تبدأ فارغة تماماً لضمان عدم تسريب أي بيانات شخصية، أرقام هواتف، أو سجلات مالية
const DEFAULT_CLIENTS = [];
const DEFAULT_SESSIONS = [];

// بيانات نموذجية وهمية 100% (تُحمّل فقط اختيارياً عند الرغبة في معاينة شكل الواجهات)
const DEMO_MOCK_CLIENTS = [
  {
    id: 'cli-demo-1',
    name: 'شركة الأفق الرقمي للتطوير والتقنية',
    phone: '0912345678',
    type: 'شركة / جهة تجارية',
    notes: 'عقد تصوير مؤتمر سنوي وإنتاج 3 ريلز',
    createdAt: Date.now() - 86400000 * 10
  },
  {
    id: 'cli-demo-2',
    name: 'مطعم أصل المذاق الفاخر',
    phone: '0923456789',
    type: 'شركة / جهة تجارية',
    notes: 'تصوير قائمة طعام وفيديو إعلاني',
    createdAt: Date.now() - 86400000 * 5
  },
  {
    id: 'cli-demo-3',
    name: 'سارة المهدي',
    phone: '0919876543',
    type: 'فرد / مناسبات خاصة',
    notes: 'جلسة بورتريه وتخرج أستوديو',
    createdAt: Date.now() - 86400000 * 2
  }
];

const DEMO_MOCK_SESSIONS = [
  {
    id: 'sess-demo-1',
    clientId: 'cli-demo-1',
    sessionType: 'تغطية مؤتمر ومعرض سنوي',
    status: 'مؤكدة',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '10:00',
    location: 'فندق المهاري - قاعة طرابلس',
    totalPrice: 2800,
    payments: [
      { id: 'pay-demo-1', amount: 1000, date: new Date().toISOString().split('T')[0], note: 'عربون تأكيد حجز', method: 'تحويل مصرفي' }
    ],
    assistantsCost: 250,
    extraExpenses: 80,
    driveLink: '',
    notes: 'تغطية فوتو وفيديو مع تصوير مقابلات المسؤولين'
  },
  {
    id: 'sess-demo-2',
    clientId: 'cli-demo-2',
    sessionType: 'تصوير أطباق ومينيو إعلاني',
    status: 'قيد التصوير اليوم',
    date: new Date().toISOString().split('T')[0],
    time: '15:30',
    location: 'فرع السياحية - طرابلس',
    totalPrice: 1500,
    payments: [
      { id: 'pay-demo-2', amount: 500, date: new Date().toISOString().split('T')[0], note: 'دفعة أولى', method: 'نقداً / كاش' }
    ],
    assistantsCost: 150,
    extraExpenses: 40,
    driveLink: '',
    notes: 'إضاءة أستوديو مخصصة للأطعمة وفلاشات ماكرو'
  },
  {
    id: 'sess-demo-3',
    clientId: 'cli-demo-3',
    sessionType: 'جلسة تصوير بورتريه وتخرج',
    status: 'جاهزة للتسليم',
    date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
    time: '17:00',
    location: 'الأستوديو الداخلي',
    totalPrice: 800,
    payments: [
      { id: 'pay-demo-3', amount: 800, date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0], note: 'تسديد كامل القيمة', method: 'كاش / نقداً' }
    ],
    assistantsCost: 0,
    extraExpenses: 20,
    driveLink: 'https://drive.google.com',
    notes: 'تم إنهاء تعديل وريتاتش 25 صورة بجودة عالية'
  }
];

const DEFAULT_GEAR = [
  {
    category: 'الكاميرات والعدسات الأساسية',
    items: [
      { id: 'g1', name: 'الكاميرا الأساسية (Sony A7IV / Canon R6)', checked: true },
      { id: 'g2', name: 'الكاميرا الاحتياطية (Backup Body)', checked: true },
      { id: 'g3', name: 'عدسة 24-70mm f/2.8 (شاملة)', checked: true },
      { id: 'g4', name: 'عدسة 85mm f/1.4 (بورتريه وعزل)', checked: true }
    ]
  },
  {
    category: 'الإضاءة والطاقة والملحقات',
    items: [
      { id: 'g5', name: 'فلاش سبيدلايت وتريجر لاسلكي', checked: true },
      { id: 'g6', name: '4 بطاريات مشحونة 100%', checked: true },
      { id: 'g7', name: 'كروت ذاكرة مفورمتة وجاهزة', checked: true },
      { id: 'g8', name: 'ترايبود وحامل الكاميرا للتثبيت', checked: true }
    ]
  }
];

const WHATSAPP_TEMPLATES = [
  {
    title: 'تأكيد الحجز والعربون',
    icon: '✨',
    text: `أهلاً بك عزيزي/عزيزتي [العميل] 📸
يسعدنا تأكيد حجز جلستكم الخاصة بـ [نوع الجلسة] بتاريخ [التاريخ].
تم استلام العربون بمبلغ [المدفوع] د.ل، والمتبقي هو [المتبقي] د.ل عند التسليم.
نتشرف بكم ونتطلع لتوثيق أجمل لحظاتكم بكل احترافية!`
  },
  {
    title: 'تذكير قبل موعد الجلسة',
    icon: '👗',
    text: `مرحباً [العميل] 🌸
تذكير بموعد جلستنا غداً في تمام الساعة [الوقت] في [الموقع].
نصائح سريعة لصور أروع:
1. اختيار ألوان ملابس متناسقة ومريحة.
2. التواجد قبل الموعد بـ 15 دقيقة.
بانتظاركم بكل حماس!`
  },
  {
    title: 'رابط التسليم النهائي وتصفية الحساب',
    icon: '🎉',
    text: `أهلاً [العميل]، صوركم جاهزة الآن بأعلى جودة! 🌟
يمكنكم تصفح وتحميل الصور عبر الرابط التالي:
[رابط_الصور]

المبلغ المتبقي للجلسة هو: [المتبقي] د.ل.
نسعد دائماً بخدمتكم ويسرنا تقييمكم لتجربتكم معنا!`
  }
];

// ================= APP STATE =================
let clients = [];
let sessions = [];
let gearList = [];
let currentFilter = 'all';
let currentClientFilter = 'all';
let searchQuery = '';

function triggerHaptic(duration = 10) {
  try {
    if (navigator && typeof navigator.vibrate === 'function') {
      navigator.vibrate(duration);
    }
  } catch (e) {}
}

function playClickSound() {
  triggerHaptic(10);
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {}
}

function requestPersistentStorage() {
  try {
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().catch(() => {});
    }
  } catch (e) {}
}

function setupNumberInputsAutoClear() {
  // Delegated focusin & click listeners ensure all number inputs across all modals
  // (sessions, pricing calculator, contracts, payments) auto-clear zero and select text
  document.addEventListener('focusin', function(e) {
    const input = e.target;
    if (input && input.matches && input.matches('input[type="number"]')) {
      if (input.value === '0' || input.value === 0) {
        input.value = '';
      }
      setTimeout(() => {
        try { input.select(); } catch (err) {}
      }, 20);
    }
  });

  document.addEventListener('click', function(e) {
    const input = e.target;
    if (input && input.matches && input.matches('input[type="number"]')) {
      if (input.value === '0' || input.value === 0) {
        input.value = '';
      }
    }
  });
}

function setupPhoneInputsValidation() {
  // Enforce digits only and maximum 10 digits globally
  document.addEventListener('input', function(e) {
    const input = e.target;
    if (!input) return;
    if (input.type === 'tel' || input.id === 'form-c-phone' || input.id === 'contract-photographer-phone' || input.id === 'contract-client-phone') {
      let digits = input.value.replace(/[^0-9]/g, '');
      if (digits.length > 10) {
        digits = digits.slice(0, 10);
      }
      if (input.value !== digits) {
        input.value = digits;
      }
    }
  });

  // Ensure initial attributes
  const phoneInputs = document.querySelectorAll('input[type="tel"], #form-c-phone, #contract-photographer-phone, #contract-client-phone');
  phoneInputs.forEach(input => {
    input.setAttribute('maxlength', '10');
    input.setAttribute('inputmode', 'numeric');
  });
}

// ================= THEME ENGINE (DARK / LIGHT / AUTO) =================
function initTheme() {
  const savedTheme = localStorage.getItem('adasapro_theme') || 'auto';
  applyTheme(savedTheme, false);

  // Listen to OS dark mode change if user chose 'auto'
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', () => {
        const pref = localStorage.getItem('adasapro_theme') || 'auto';
        if (pref === 'auto') {
          applyTheme('auto', false);
        }
      });
    }
  }

  // Toggle button event listeners
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('mobile-theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Settings modal choices
  document.querySelectorAll('.theme-choice-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const choice = this.getAttribute('data-theme-choice');
      if (choice) {
        setThemeChoice(choice);
      }
    });
  });
}

function getEffectiveTheme(preference) {
  if (preference === 'dark') return 'dark';
  if (preference === 'light') return 'light';
  // auto
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function applyTheme(themeChoice, notify = true) {
  const effectiveTheme = getEffectiveTheme(themeChoice);
  document.documentElement.setAttribute('data-theme', effectiveTheme);

  // Update meta theme-color for iOS / Android mobile address bar
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', effectiveTheme === 'dark' ? '#0B0F17' : '#F4F5F7');
  }

  // Update button labels
  const themeLabels = document.querySelectorAll('.theme-btn-label');
  themeLabels.forEach(lbl => {
    lbl.textContent = effectiveTheme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي';
  });

  // Update settings modal buttons
  document.querySelectorAll('.theme-choice-btn').forEach(btn => {
    const choice = btn.getAttribute('data-theme-choice');
    btn.classList.toggle('active', choice === themeChoice);
  });

  // Update theme badge in settings
  const badge = document.getElementById('current-theme-badge');
  if (badge) {
    if (themeChoice === 'auto') {
      badge.textContent = `تلقائي (${effectiveTheme === 'dark' ? 'ليلي 🌙' : 'نهاري ☀️'})`;
      badge.className = 'badge-warning-soft';
    } else if (themeChoice === 'dark') {
      badge.textContent = 'الوضع الليلي 🌙';
      badge.className = 'badge-purple-soft';
    } else {
      badge.textContent = 'الوضع النهاري ☀️';
      badge.className = 'badge-info-soft';
    }
  }

  if (notify) {
    showToast(effectiveTheme === 'dark' ? 'تم تفعيل الوضع الليلي الفاخر 🌙' : 'تم تفعيل الوضع النهاري ☀️');
    playClickSound();
  }
}

function setThemeChoice(choice) {
  localStorage.setItem('adasapro_theme', choice);
  applyTheme(choice, true);
}

function toggleTheme() {
  const currentEffective = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentEffective === 'dark' ? 'light' : 'dark';
  setThemeChoice(newTheme);
}

// ================= INITIALIZATION =================
function initApp() {
  initTheme();
  requestPersistentStorage();
  loadData();
  setupEventListeners();
  setupNumberInputsAutoClear();
  setupPhoneInputsValidation();
  setupModalSwipeToClose();
  setupPWAInstallBanner();
  updateMobileFAB('tab-dashboard');
  renderApp();
  renderGearChecklist();
  renderTemplates();
  initPricingCalc();

  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateFormatted = today.toLocaleDateString('ar-LY', options);
  const dateEl = document.getElementById('current-date-display');
  if (dateEl) dateEl.textContent = dateFormatted;
}

function loadData() {
  try {
    const storedClients = localStorage.getItem(STORAGE_KEY_CLIENTS);
    if (storedClients) {
      clients = JSON.parse(storedClients);
    } else {
      clients = [...DEFAULT_CLIENTS];
      saveClients();
    }

    const storedSessions = localStorage.getItem(STORAGE_KEY_SESSIONS);
    if (storedSessions) {
      sessions = JSON.parse(storedSessions);
    } else {
      sessions = [...DEFAULT_SESSIONS];
      saveSessions();
    }

    const storedGear = localStorage.getItem(STORAGE_KEY_GEAR);
    if (storedGear) {
      gearList = JSON.parse(storedGear);
    } else {
      gearList = JSON.parse(JSON.stringify(DEFAULT_GEAR));
      saveGear();
    }
  } catch (err) {
    console.error('Error loading state', err);
    clients = [...DEFAULT_CLIENTS];
    sessions = [...DEFAULT_SESSIONS];
    gearList = JSON.parse(JSON.stringify(DEFAULT_GEAR));
  }
}

function saveClients() {
  localStorage.setItem(STORAGE_KEY_CLIENTS, JSON.stringify(clients));
}

function saveSessions() {
  localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions));
}

function saveGear() {
  localStorage.setItem(STORAGE_KEY_GEAR, JSON.stringify(gearList));
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 280);
  }, 3000);
}

// ================= CALCULATIONS & RELATIONSHIPS =================
function getClientById(clientId) {
  return clients.find(c => c.id === clientId) || { name: 'زبون غير مسجل', phone: '', type: 'فرد' };
}

function getSessionsForClient(clientId) {
  return sessions.filter(s => s.clientId === clientId);
}

function calculateSessionFinance(session) {
  const total = Number(session.totalPrice) || 0;
  let totalPaid = 0;
  if (Array.isArray(session.payments)) {
    totalPaid = session.payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  }
  const remaining = Math.max(0, total - totalPaid);
  const assistantsCost = Number(session.assistantsCost) || 0;
  const extraExpenses = Number(session.extraExpenses) || 0;
  const netProfit = total - (assistantsCost + extraExpenses);

  return { total, paid: totalPaid, remaining, assistantsCost, extraExpenses, netProfit };
}

function calculateClientTotalFinance(clientId) {
  const clientSessions = getSessionsForClient(clientId);
  let total = 0, paid = 0, remaining = 0;
  clientSessions.forEach(s => {
    const f = calculateSessionFinance(s);
    total += f.total;
    paid += f.paid;
    remaining += f.remaining;
  });
  return { total, paid, remaining, sessionsCount: clientSessions.length };
}

function calculateOverallFinancials() {
  let grandTotal = 0, totalCollected = 0, totalRemaining = 0, totalAssistants = 0, totalExpenses = 0, unpaidCount = 0;

  sessions.forEach(s => {
    const f = calculateSessionFinance(s);
    grandTotal += f.total;
    totalCollected += f.paid;
    totalRemaining += f.remaining;
    totalAssistants += f.assistantsCost;
    totalExpenses += f.extraExpenses;
    if (f.remaining > 0) unpaidCount++;
  });

  const grandNetProfit = grandTotal - (totalAssistants + totalExpenses);
  return { grandTotal, totalCollected, totalRemaining, totalAssistants, totalExpenses, grandNetProfit, unpaidCount, sessionsCount: sessions.length };
}

function getAllPaymentsHistory() {
  const list = [];
  sessions.forEach(s => {
    const client = getClientById(s.clientId);
    if (Array.isArray(s.payments)) {
      s.payments.forEach(p => {
        list.push({
          sessionId: s.id,
          clientId: s.clientId,
          clientName: client.name,
          clientPhone: client.phone,
          sessionType: s.sessionType,
          paymentId: p.id,
          amount: Number(p.amount) || 0,
          date: p.date || s.date,
          note: p.note || 'عربون / دفعة',
          method: p.method || 'كاش / نقداً'
        });
      });
    }
  });
  return list.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// ================= RENDER FUNCTIONS =================
function renderApp() {
  populateClientSelectDropdown();
  renderKPIs();
  renderClientsTab();
  renderAllSessions();
  renderDashboardSessions();
  renderDashboardRecentPayments();
  renderFinancesTab();
  renderGlobalPaymentsHistory();
  checkOnboardingState();
  checkBackupReminder();
}

function populateClientSelectDropdown() {
  const select = document.getElementById('form-session-client-select');
  if (!select) return;

  if (clients.length === 0) {
    select.innerHTML = `<option value="">-- لا يوجد زبائن، اضغط زبون جديد أولاً --</option>`;
    return;
  }

  select.innerHTML = clients.map(c => `
    <option value="${c.id}">${c.name} (${c.phone || c.type})</option>
  `).join('');
}

function renderKPIs() {
  const fin = calculateOverallFinancials();
  const costs = fin.totalAssistants + fin.totalExpenses;

  document.getElementById('stat-net-profit').textContent = fin.grandNetProfit.toLocaleString('en-US');
  document.getElementById('stat-total-revenue').textContent = `${fin.grandTotal.toLocaleString('en-US')} ${CURRENCY_LABEL}`;
  
  const costsEl = document.getElementById('stat-total-costs');
  if (costsEl) costsEl.textContent = `${costs.toLocaleString('en-US')} ${CURRENCY_LABEL}`;

  const barEl = document.getElementById('stat-profit-bar');
  if (barEl) {
    const pct = fin.grandTotal > 0 ? Math.min(100, Math.max(5, Math.round((fin.grandNetProfit / fin.grandTotal) * 100))) : 0;
    barEl.style.width = `${pct}%`;
  }

  document.getElementById('stat-remaining-clients').textContent = fin.totalRemaining.toLocaleString('en-US');
  document.getElementById('stat-unpaid-count').textContent = `${fin.unpaidCount} زبائن`;
  document.getElementById('stat-collected-text').textContent = `تم تحصيل ${fin.totalCollected.toLocaleString('en-US')} ${CURRENCY_LABEL} حتى الآن`;

  // Upcoming Sessions Snapshot
  const upcomingSessions = sessions.filter(s => !s.status.includes('مكتملة'));
  const badgeEl = document.getElementById('stat-upcoming-count-badge');
  if (badgeEl) badgeEl.textContent = upcomingSessions.length;

  const hintEl = document.getElementById('stat-next-session-hint');
  if (hintEl) {
    if (upcomingSessions.length > 0) {
      const sorted = [...upcomingSessions].sort((a, b) => new Date(a.date) - new Date(b.date));
      hintEl.textContent = `أقرب موعد: ${sorted[0].date} (${sorted[0].time || '10:00'})`;
    } else {
      hintEl.textContent = `لا توجد مواعيد معلقة`;
    }
  }
}

// Render Clients Tab
function renderClientsTab() {
  const container = document.getElementById('clients-list-container');
  if (!container) return;

  const q = (document.getElementById('client-search-input')?.value || '').toLowerCase().trim();
  let filtered = clients.filter(c => c.name.toLowerCase().includes(q) || (c.phone && c.phone.includes(q)));

  if (currentClientFilter === 'unpaid') {
    filtered = filtered.filter(c => calculateClientTotalFinance(c.id).remaining > 0);
  } else if (currentClientFilter === 'paid') {
    filtered = filtered.filter(c => calculateClientTotalFinance(c.id).remaining === 0);
  } else if (currentClientFilter === 'company') {
    filtered = filtered.filter(c => (c.type || '').includes('شركة'));
  } else if (currentClientFilter === 'individual') {
    filtered = filtered.filter(c => !(c.type || '').includes('شركة'));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-secondary);">
        <p>لا يوجد زبائن يطابقون خيارات البحث والتصفية.</p>
        <button class="btn-primary-sm" onclick="openAddClientModal()" style="margin-top: 0.75rem;">+ إضافة زبون جديد</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(c => {
    const fin = calculateClientTotalFinance(c.id);
    return `
      <div class="client-box-card" onclick="openClientProfile('${c.id}')">
        <div class="client-card-header">
          <div class="client-title-group">
            <div class="client-badge-avatar">${c.name.charAt(0)}</div>
            <div>
              <h3 class="client-name-text">${c.name}</h3>
              <span class="client-type-tag">${c.type || 'فرد'}</span>
            </div>
          </div>
          <div style="text-align: left;">
            <span style="font-size: 0.72rem; color: var(--text-secondary); direction: ltr; display: block; font-family: var(--font-mono);">${c.phone}</span>
            ${fin.remaining > 0 ? `
              <span class="badge-warning-soft" style="font-size: 0.65rem; margin-top: 0.2rem; display: inline-block;">عليه: ${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}</span>
            ` : `
              <span class="badge-status-profit" style="font-size: 0.65rem; margin-top: 0.2rem; display: inline-block;">خالص ✓</span>
            `}
          </div>
        </div>

        <div class="client-stats-grid">
          <div class="c-stat-item">
            <span class="c-stat-label">عدد الجلسات</span>
            <span class="c-stat-val text-gold">${fin.sessionsCount} جلسة</span>
          </div>
          <div class="c-stat-item">
            <span class="c-stat-label">المدفوع</span>
            <span class="c-stat-val text-success">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span>
          </div>
          <div class="c-stat-item">
            <span class="c-stat-label">المتبقي</span>
            <span class="c-stat-val ${fin.remaining > 0 ? 'text-danger' : 'text-success'}">
              ${fin.remaining > 0 ? fin.remaining.toLocaleString() + ' ' + CURRENCY_LABEL : 'خالص'}
            </span>
          </div>
        </div>

        <div class="client-card-footer" onclick="event.stopPropagation()">
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn-primary-sm" onclick="openAddSessionModal('${c.id}')">
              <span>+ جلسة</span>
            </button>
            ${fin.remaining > 0 ? `
              <button class="btn-secondary-sm" style="color: var(--gold-light); border-color: rgba(245,158,11,0.3);" onclick="openRecordPaymentForClient('${c.id}')">
                <span>سجل دفعة</span>
              </button>
            ` : ''}
          </div>
          <div style="display: flex; gap: 0.4rem;">
            <a href="tel:${c.phone}" class="btn-secondary-sm" title="اتصال هاتف">اتصال</a>
            <a href="https://wa.me/${cleanPhoneForWhatsApp(c.phone)}" target="_blank" class="btn-whatsapp-sm" title="مراسلة واتساب">واتساب</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Sessions Tab
function renderAllSessions() {
  const container = document.getElementById('all-sessions-list');
  if (!container) return;

  let filtered = [...sessions];

  if (currentFilter === 'unpaid') {
    filtered = filtered.filter(s => calculateSessionFinance(s).remaining > 0);
  } else if (currentFilter === 'upcoming') {
    const todayStr = new Date().toISOString().split('T')[0];
    filtered = filtered.filter(s => s.date >= todayStr);
  } else if (currentFilter === 'editing') {
    filtered = filtered.filter(s => s.status.includes('تعديل') || s.status.includes('ريتاتش'));
  } else if (currentFilter === 'completed') {
    filtered = filtered.filter(s => s.status.includes('مكتملة') || s.status.includes('تسليم'));
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(s => {
      const client = getClientById(s.clientId);
      return client.name.toLowerCase().includes(q) || s.sessionType.toLowerCase().includes(q);
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; color: var(--text-secondary); background: #FAFBFD; border-radius: 16px; border: 1px dashed var(--border-subtle);">
        <p style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">لا توجد جلسات تصوير تطابق التصفية</p>
        <p style="font-size: 0.82rem; margin-bottom: 1rem;">سجل مواعيد وتفاصيل جلسات التصوير لمتابعة الإيرادات والمصاريف</p>
        <button class="btn-primary-sm" onclick="openAddSessionModal()">+ إضافة جلسة تصوير جديدة</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => createSessionCardHTML(s)).join('');
}

function renderDashboardSessions() {
  const container = document.getElementById('dashboard-sessions-list');
  if (!container) return;
  const recent = [...sessions].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);
  if (recent.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-secondary); background: #FAFBFD; border-radius: 16px; border: 1px dashed var(--border-subtle);">
        <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">لا توجد جلسات تصوير قادمة</p>
        <p style="font-size: 0.8rem; margin-bottom: 0.85rem;">ابدأ بإضافة جلسة جديدة لجدولة مواعيدك وأرباحك</p>
        <button class="btn-primary-sm" onclick="openAddSessionModal()">+ حجز جلسة تصوير</button>
      </div>
    `;
    return;
  }
  container.innerHTML = recent.map(s => createSessionCardHTML(s)).join('');
}

function renderDashboardRecentPayments() {
  const container = document.getElementById('dashboard-recent-payments');
  if (!container) return;
  const list = getAllPaymentsHistory().slice(0, 3);
  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 1rem; color: var(--text-secondary); background: #FAFBFD; border-radius: 16px; border: 1px dashed var(--border-subtle); font-size: 0.82rem;">
        <p style="margin-bottom: 0.65rem;">لا توجد أي دفعات أو مقبوضات مسجلة بعد.</p>
        <button class="btn-secondary-sm" onclick="openRecordPaymentModal()">+ تسجيل دفعة نقدية</button>
      </div>
    `;
    return;
  }
  container.innerHTML = list.map(p => `
    <div class="payment-history-card">
      <div class="pay-card-info">
        <span class="pay-card-client">${p.clientName}</span>
        <div class="pay-card-meta">
          <span><svg class="meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${p.date}</span>
          <span>•</span>
          <span>${p.note}</span>
        </div>
      </div>
      <div class="pay-card-amount-box">
        <span class="pay-card-amount">+${p.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
        <span class="pay-method-badge">${p.method}</span>
      </div>
    </div>
  `).join('');
}

function createSessionCardHTML(session) {
  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);

  let statusClass = 'status-confirmed';
  if (session.status.includes('تصوير اليوم')) statusClass = 'status-shooting';
  else if (session.status.includes('تعديل')) statusClass = 'status-editing';
  else if (session.status.includes('مكتملة') || session.status.includes('تسليم')) statusClass = 'status-completed';

  return `
    <div class="session-card" onclick="openSessionDetails('${session.id}')">
      <div class="session-card-top">
        <span class="session-type-badge">${session.sessionType}</span>
        <span class="session-status-badge ${statusClass}">${session.status}</span>
      </div>

      <h3 class="session-client-name">${client.name}</h3>

      <div class="session-meta-row">
        <span><svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${session.date}</span>
        <span><svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${session.time || '16:00'}</span>
        ${session.location ? `<span><svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>${session.location}</span>` : ''}
        ${session.assistantsCost > 0 ? `<span style="color: var(--gold-light);"><svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>مساعد: ${session.assistantsCost} ${CURRENCY_LABEL}</span>` : ''}
      </div>

      <div class="session-finance-pill">
        <div class="s-fin-item"><span class="s-fin-label">الإجمالي</span><span class="s-fin-val val-total">${fin.total.toLocaleString()} ${CURRENCY_LABEL}</span></div>
        <div class="s-fin-item"><span class="s-fin-label">المدفوع</span><span class="s-fin-val val-paid">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span></div>
        <div class="s-fin-item">
          <span class="s-fin-label">المتبقي</span>
          <span class="s-fin-val ${fin.remaining > 0 ? 'val-remaining' : 'val-paid'}">
            ${fin.remaining > 0 ? fin.remaining.toLocaleString() + ' ' + CURRENCY_LABEL : 'مسدد بالكامل'}
          </span>
        </div>
      </div>

      <div class="session-card-actions" onclick="event.stopPropagation()">
        <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap;">
          <button class="btn-whatsapp-sm" onclick="sendQuickWhatsAppInvoice('${session.id}')">فاتورة واتساب</button>
          <button class="btn-calendar-sm" onclick="addToGoogleCalendar('${session.id}')" title="إضافة للتقويم وتنبيه قبل الموعد">📅 تقويم</button>
          ${client.phone ? `
            <a href="tel:${client.phone}" class="btn-call-sm" title="اتصال هاتفي">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          ` : ''}
        </div>
        <div style="display: flex; gap: 0.35rem; align-items: center;">
          ${fin.remaining > 0 ? `
            <button class="btn-primary-sm" onclick="openRecordPaymentModal('${session.id}')">+ تسجيل دفعة</button>
          ` : `<span style="font-size: 0.72rem; color: var(--color-success); font-weight: 700;">خالص ✓</span>`}
          <button class="btn-details-sm" onclick="openSessionDetails('${session.id}')">التفاصيل ←</button>
        </div>
      </div>
    </div>
  `;
}

// Render Finances Tab
function renderFinancesTab() {
  const fin = calculateOverallFinancials();
  document.getElementById('fin-grand-total').textContent = fin.grandTotal.toLocaleString('en-US');
  document.getElementById('fin-total-collected').textContent = fin.totalCollected.toLocaleString('en-US');
  document.getElementById('fin-total-remaining').textContent = fin.totalRemaining.toLocaleString('en-US');
  document.getElementById('fin-assistants-total').textContent = fin.totalAssistants.toLocaleString('en-US');
  document.getElementById('fin-expenses-total').textContent = fin.totalExpenses.toLocaleString('en-US');
  document.getElementById('fin-net-profit-total').textContent = fin.grandNetProfit.toLocaleString('en-US');

  // Unpaid clients list
  const unpaidContainer = document.getElementById('unpaid-clients-list');
  if (unpaidContainer) {
    const unpaidSessions = sessions.filter(s => calculateSessionFinance(s).remaining > 0);
    if (unpaidSessions.length === 0) {
      unpaidContainer.innerHTML = `<div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-sm); padding: 0.85rem; text-align: center; color: var(--color-success); font-size: 0.82rem;">جميع الحسابات مسددة بالكامل.</div>`;
    } else {
      unpaidContainer.innerHTML = unpaidSessions.map(s => {
        const client = getClientById(s.clientId);
        const f = calculateSessionFinance(s);
        return `
          <div class="session-card" style="border-right: 4px solid var(--color-danger);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <h4 style="font-size: 0.92rem;">${client.name}</h4>
              <span class="badge-status-profit" style="background: var(--color-danger-bg); color: #fda4af; border-color: rgba(244,63,94,0.3);">متبقي: ${f.remaining.toLocaleString()} ${CURRENCY_LABEL}</span>
            </div>
            <div style="font-size: 0.74rem; color: var(--text-secondary); margin-bottom: 0.6rem;">
              جلسة: ${s.sessionType} • إجمالي: ${f.total.toLocaleString()} ${CURRENCY_LABEL} (دُفع منها: ${f.paid.toLocaleString()} ${CURRENCY_LABEL})
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
              <button class="btn-primary-sm" onclick="openRecordPaymentModal('${s.id}')">تسجيل دفعة</button>
              <button class="btn-whatsapp-sm" onclick="sendQuickWhatsAppReminder('${s.id}')">تذكير واتساب</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

function renderGlobalPaymentsHistory() {
  const container = document.getElementById('global-payments-history-list');
  const countBadge = document.getElementById('total-payments-count-badge');
  if (!container) return;

  const payments = getAllPaymentsHistory();
  if (countBadge) countBadge.textContent = `${payments.length} دفعات`;

  if (payments.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 1.5rem; color: var(--text-secondary); font-size: 0.82rem;">لا توجد أي دفعات أو عربونات مسجلة حتى الآن.</div>`;
    return;
  }

  container.innerHTML = payments.map(p => `
    <div class="payment-history-card" onclick="openSessionDetails('${p.sessionId}')" style="cursor: pointer;">
      <div class="pay-card-info">
        <span class="pay-card-client">${p.clientName}</span>
        <div class="pay-card-meta">
          <span><svg class="meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${p.date}</span> • <span>${p.note}</span> • <span style="color: var(--text-muted);">${p.sessionType}</span>
        </div>
      </div>
      <div class="pay-card-amount-box">
        <span class="pay-card-amount">+${p.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
        <span class="pay-method-badge">${p.method}</span>
      </div>
    </div>
  `).join('');
}

// ================= CLIENT PROFILE MODAL =================
function openClientProfile(clientId) {
  playClickSound();
  const client = getClientById(clientId);
  const fin = calculateClientTotalFinance(clientId);
  const clientSessions = getSessionsForClient(clientId);

  const modal = document.getElementById('client-profile-modal');
  document.getElementById('profile-client-name').textContent = client.name;

  const content = document.getElementById('client-profile-content');
  content.innerHTML = `
    <div style="background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.15rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
        <div>
          <strong style="font-size: 1.1rem; color: var(--text-main); font-weight: 800;">${client.name}</strong>
          <span style="display: block; font-size: 0.74rem; color: var(--text-secondary); margin-top: 0.15rem;">${client.type}</span>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          <a href="tel:${client.phone}" class="btn-secondary-sm">اتصال</a>
          <a href="https://wa.me/${cleanPhoneForWhatsApp(client.phone)}" target="_blank" class="btn-whatsapp-sm">واتساب</a>
        </div>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-secondary);">
        <strong>رقم الهاتف:</strong> <span style="direction: ltr; display: inline-block; font-family: var(--font-num); font-weight: 700;">${client.phone}</span>
      </div>
      ${client.notes ? `<div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 0.45rem;"><strong>ملاحظات:</strong> ${client.notes}</div>` : ''}
    </div>

    <div class="session-finance-pill" style="margin-bottom: 1.25rem;">
      <div class="s-fin-item"><span class="s-fin-label">إجمالي عقود الزبون</span><span class="s-fin-val val-total">${fin.total.toLocaleString()} ${CURRENCY_LABEL}</span></div>
      <div class="s-fin-item"><span class="s-fin-label">المدفوع</span><span class="s-fin-val val-paid">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span></div>
      <div class="s-fin-item">
        <span class="s-fin-label">المتبقي المطلوب</span>
        <span class="s-fin-val ${fin.remaining > 0 ? 'val-remaining' : 'val-paid'}">${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}</span>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main);">جلسات التصوير الخاصة بهذا الزبون (${clientSessions.length})</h4>
        <button class="btn-primary-sm" onclick="openAddSessionModal('${client.id}')">+ جلسة جديدة</button>
      </div>

      <div class="cards-list">
        ${clientSessions.length === 0 ? `
          <div style="text-align: center; padding: 1.5rem; color: var(--text-secondary); font-size: 0.8rem; background: var(--bg-subtle); border-radius: var(--radius-md);">
            لا توجد جلسات مسجلة لهذا الزبون حتى الآن.
          </div>
        ` : clientSessions.map(s => {
          const sf = calculateSessionFinance(s);
          return `
            <div class="session-card" style="padding: 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
                <strong style="color: var(--text-main); font-size: 0.95rem;">${s.sessionType}</strong>
                <span class="session-status-badge status-confirmed">${s.status}</span>
              </div>
              <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.55rem;">
                <span>تاريخ: ${s.date}</span> • <span>السعر: ${sf.total.toLocaleString()} ${CURRENCY_LABEL}</span> | <span style="font-weight: 700; color: ${sf.remaining > 0 ? 'var(--badge-red-text)' : 'var(--badge-green-text)'}">المتبقي: ${sf.remaining.toLocaleString()} ${CURRENCY_LABEL}</span>
              </div>
              <div style="display: flex; justify-content: flex-end; gap: 0.4rem;">
                ${sf.remaining > 0 ? `<button class="btn-primary-sm" onclick="openRecordPaymentModal('${s.id}')">تسجيل دفعة</button>` : ''}
                <button class="btn-details-sm" onclick="openSessionDetails('${s.id}')">التفاصيل ←</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 0.5rem; border-top: 1px solid var(--border-subtle); padding-top: 0.85rem; flex-wrap: wrap;">
      <button class="btn-primary" style="flex: 1; min-width: 140px;" onclick="closeClientProfile(); openContractModal('${client.id}')">
        <span>📜 إنشاء عقد فيديو</span>
      </button>
      <button class="btn-secondary" onclick="editClient('${client.id}')">تعديل بيانات الزبون</button>
      <button class="btn-cancel" style="color: var(--color-danger);" onclick="deleteClient('${client.id}')">حذف الزبون</button>
    </div>
  `;

  modal.classList.add('show');
}

function closeClientProfile() {
  document.getElementById('client-profile-modal').classList.remove('show');
}

// ================= CLIENT CRUD =================
function openAddClientModal() {
  playClickSound();
  document.getElementById('client-form').reset();
  document.getElementById('client-form-id').value = '';
  document.getElementById('client-modal-title').textContent = 'إضافة زبون أو شركة جديدة';
  document.getElementById('client-modal').classList.add('show');
}

function closeClientModal() {
  document.getElementById('client-modal').classList.remove('show');
}

function handleSaveClient(e) {
  e.preventDefault();
  playClickSound();

  const id = document.getElementById('client-form-id').value || 'cli-' + Date.now();
  const name = document.getElementById('form-c-name').value.trim();
  const phone = document.getElementById('form-c-phone').value.trim();
  const type = document.getElementById('form-c-type').value;
  const notes = document.getElementById('form-c-notes').value.trim();

  if (!name || !phone) {
    alert('يرجى إدخال اسم الزبون ورقم الهاتف.');
    return;
  }

  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (cleanPhone.length < 9 || cleanPhone.length > 10) {
    alert('⚠️ رقم الهاتف غير صحيح: يجب أن يتكون من 9 إلى 10 أرقام فقط (مثال: 091XXXXXXX أو 092XXXXXXX).');
    const pInput = document.getElementById('form-c-phone');
    if (pInput) { pInput.focus(); pInput.select(); }
    return;
  }

  const existingIdx = clients.findIndex(c => c.id === id);
  if (existingIdx >= 0) {
    clients[existingIdx] = { ...clients[existingIdx], name, phone, type, notes };
    showToast('تم تحديث بيانات الزبون بنجاح.');
  } else {
    clients.unshift({ id, name, phone, type, notes, createdAt: Date.now() });
    showToast('تمت إضافة الزبون الجديد بنجاح!');
  }

  saveClients();
  closeClientModal();
  renderApp();
}

function editClient(clientId) {
  closeClientProfile();
  const client = getClientById(clientId);
  document.getElementById('client-form-id').value = client.id;
  document.getElementById('client-modal-title').textContent = 'تعديل بيانات الزبون';
  document.getElementById('form-c-name').value = client.name;
  document.getElementById('form-c-phone').value = client.phone;
  document.getElementById('form-c-type').value = client.type || 'فرد';
  document.getElementById('form-c-notes').value = client.notes || '';
  document.getElementById('client-modal').classList.add('show');
}

function deleteClient(clientId) {
  const clientSessions = getSessionsForClient(clientId);
  if (clientSessions.length > 0) {
    alert(`لا يمكن حذف هذا الزبون لوجود ${clientSessions.length} جلسة تصوير مسجلة باسمه. قم بحذف الجلسات أولاً.`);
    return;
  }
  if (confirm('هل أنت متأكد من حذف هذا الزبون؟')) {
    clients = clients.filter(c => c.id !== clientId);
    saveClients();
    closeClientProfile();
    renderApp();
    showToast('تم حذف الزبون.');
  }
}

// ================= SESSION CRUD =================
function openAddSessionModal(preselectedClientId = null) {
  playClickSound();
  const form = document.getElementById('session-form');
  form.reset();
  document.getElementById('session-id').value = '';
  document.getElementById('session-modal-title').textContent = 'جلسة تصوير جديدة';

  document.getElementById('form-total-price').value = '';
  document.getElementById('form-initial-deposit').value = '';
  document.getElementById('form-assistants-cost').value = '';
  document.getElementById('form-extra-expenses').value = '';

  populateClientSelectDropdown();

  if (preselectedClientId) {
    document.getElementById('form-session-client-select').value = preselectedClientId;
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('form-date').value = tomorrow.toISOString().split('T')[0];

  updateSessionFormLiveCalculations();
  document.getElementById('session-modal').classList.add('show');
}

function closeSessionModal() {
  document.getElementById('session-modal').classList.remove('show');
}

function updateSessionFormLiveCalculations() {
  const total = parseFloat(document.getElementById('form-total-price').value) || 0;
  const deposit = parseFloat(document.getElementById('form-initial-deposit').value) || 0;
  const assistants = parseFloat(document.getElementById('form-assistants-cost').value) || 0;
  const expenses = parseFloat(document.getElementById('form-extra-expenses').value) || 0;

  const remaining = Math.max(0, total - deposit);
  const netProfit = total - (assistants + expenses);

  const remEl = document.getElementById('live-client-remaining');
  if (remEl) {
    remEl.textContent = `${remaining.toLocaleString()} ${CURRENCY_LABEL}`;
    remEl.className = remaining > 0 ? 'calc-val text-warning' : 'calc-val text-success';
  }

  const profitEl = document.getElementById('live-session-profit');
  if (profitEl) {
    profitEl.textContent = `${netProfit.toLocaleString()} ${CURRENCY_LABEL}`;
    profitEl.className = netProfit >= 0 ? 'calc-val text-success' : 'calc-val text-danger';
  }
}

function handleSaveSession(e) {
  e.preventDefault();
  playClickSound();

  const id = document.getElementById('session-id').value || 'sess-' + Date.now();
  const clientId = document.getElementById('form-session-client-select').value;
  const sessionType = document.getElementById('form-session-type').value;
  const status = document.getElementById('form-status').value;
  const date = document.getElementById('form-date').value;
  const time = document.getElementById('form-time').value;
  const location = document.getElementById('form-location').value.trim();
  const totalPrice = parseFloat(document.getElementById('form-total-price').value) || 0;
  const initialDeposit = parseFloat(document.getElementById('form-initial-deposit').value) || 0;
  const assistantsCost = parseFloat(document.getElementById('form-assistants-cost').value) || 0;
  const extraExpenses = parseFloat(document.getElementById('form-extra-expenses').value) || 0;
  const driveLink = document.getElementById('form-drive-link').value.trim();
  const notes = document.getElementById('form-notes').value.trim();

  if (!clientId) {
    alert('يرجى اختيار الزبون أولاً أو إنشاء زبون جديد.');
    return;
  }

  const existingIdx = sessions.findIndex(s => s.id === id);
  let payments = [];

  if (existingIdx >= 0) {
    payments = sessions[existingIdx].payments || [];
  } else {
    if (initialDeposit > 0) {
      payments.push({
        id: 'pay-' + Date.now(),
        amount: initialDeposit,
        date: date,
        note: 'عربون مبدئي لتأكيد الحجز',
        method: 'كاش / نقداً'
      });
    }
  }

  const sessionObj = {
    id,
    clientId,
    sessionType,
    status,
    date,
    time,
    location,
    totalPrice,
    payments,
    assistantsCost,
    extraExpenses,
    driveLink,
    notes
  };

  if (existingIdx >= 0) {
    sessions[existingIdx] = sessionObj;
    showToast('تم تحديث بيانات الجلسة بنجاح.');
  } else {
    sessions.unshift(sessionObj);
    showToast('تمت إضافة الجلسة الجديدة بنجاح!');
  }

  saveSessions();
  closeSessionModal();
  renderApp();
}

function openSessionDetails(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);

  const modal = document.getElementById('details-modal');
  document.getElementById('detail-client-name').textContent = `${client.name} (${session.sessionType})`;

  const content = document.getElementById('details-modal-content');
  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <span class="session-type-badge">${session.sessionType}</span>
      <select onchange="changeSessionStatus('${session.id}', this.value)" style="background: #FFFFFF; color: var(--text-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-full); padding: 0.38rem 0.85rem; font-size: 0.78rem; font-weight: 700;">
        <option value="مؤكدة" ${session.status === 'مؤكدة' ? 'selected' : ''}>مؤكدة وقادمة</option>
        <option value="قيد التصوير اليوم" ${session.status === 'قيد التصوير اليوم' ? 'selected' : ''}>قيد التصوير اليوم</option>
        <option value="قيد التعديل والريتاتش" ${session.status === 'قيد التعديل والريتاتش' ? 'selected' : ''}>قيد التعديل والريتاتش</option>
        <option value="جاهزة للتسليم" ${session.status === 'جاهزة للتسليم' ? 'selected' : ''}>جاهزة للتسليم</option>
        <option value="مكتملة ومغلقة" ${session.status === 'مكتملة ومغلقة' ? 'selected' : ''}>مكتملة ومغلقة</option>
      </select>
    </div>

    <div style="background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1rem; font-size: 0.82rem;">
      <div><strong>الزبون:</strong> <span onclick="openClientProfile('${client.id}')" style="color: var(--primary); font-weight: 800; cursor: pointer; text-decoration: underline;">${client.name}</span> (${client.phone})</div>
      <div style="margin-top: 0.35rem;"><strong>الموعد:</strong> ${session.date} في تمام ${session.time || '16:00'}</div>
      ${session.location ? `<div style="margin-top: 0.35rem;"><strong>المكان:</strong> ${session.location}</div>` : ''}
      ${session.driveLink ? `<div style="margin-top: 0.5rem;"><a href="${session.driveLink}" target="_blank" class="btn-secondary-sm">رابط تسليم الصور (Cloud)</a></div>` : ''}
      ${session.notes ? `<div style="margin-top: 0.45rem; color: var(--text-secondary);"><strong>ملاحظات:</strong> ${session.notes}</div>` : ''}
      
      <!-- Calendar Actions Row -->
      <div class="calendar-actions-row">
        <button type="button" class="btn-cal-google" onclick="addToGoogleCalendar('${session.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>إضافة لتقويم Google</span>
        </button>
        <button type="button" class="btn-cal-ics" onclick="downloadIcsCalendar('${session.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>تنزيل تقويم الهاتف (.ics)</span>
        </button>
      </div>
    </div>

    <div class="session-finance-pill" style="margin-bottom: 1rem;">
      <div class="s-fin-item"><span class="s-fin-label">السعر الكلي</span><span class="s-fin-val val-total">${fin.total.toLocaleString()} ${CURRENCY_LABEL}</span></div>
      <div class="s-fin-item"><span class="s-fin-label">المدفوع</span><span class="s-fin-val val-paid">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span></div>
      <div class="s-fin-item"><span class="s-fin-label">المتبقي المطلوب</span><span class="s-fin-val ${fin.remaining > 0 ? 'val-remaining' : 'val-paid'}">${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}</span></div>
    </div>

    <div style="background: #FFFFFF; border-radius: var(--radius-md); padding: 1rem; border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
        <strong style="font-size: 0.84rem; color: var(--text-main); font-weight: 800;">سجل الدفعات المستلمة:</strong>
        ${fin.remaining > 0 ? `
          <button class="btn-primary-sm" style="font-size: 0.72rem; padding: 0.25rem 0.75rem;" onclick="openRecordPaymentModal('${session.id}')">+ إضافة دفعة</button>
        ` : `<span class="pill-badge badge-success-soft">مسدد بالكامل ✓</span>`}
      </div>

      ${(!session.payments || session.payments.length === 0) ? `<p style="font-size: 0.76rem; color: var(--text-secondary);">لا توجد دفعات مسجلة.</p>` : session.payments.map(p => `
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; padding: 0.4rem 0; border-bottom: 1px solid var(--border-subtle);">
          <div>
            <strong style="color: var(--text-main);">${p.note}</strong>
            <span style="display: block; font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.1rem;">تاريخ: ${p.date} • ${p.method}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-family: var(--font-num); color: var(--badge-green-text); font-weight: 800; font-size: 0.95rem;">+${p.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
            <button onclick="deletePayment('${session.id}', '${p.id}')" style="background: none; border: none; color: var(--color-danger); cursor: pointer; font-size: 0.9rem;" title="حذف">✕</button>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="session-card-actions">
      <button class="btn-whatsapp-sm" style="flex: 1;" onclick="sendQuickWhatsAppInvoice('${session.id}')">فاتورة واتساب</button>
      <button class="btn-cancel" style="color: var(--color-danger); border-color: var(--badge-red-bg);" onclick="deleteSession('${session.id}')">حذف الجلسة</button>
    </div>
  `;

  modal.classList.add('show');
}

function closeDetailsModal() {
  document.getElementById('details-modal').classList.remove('show');
}

function changeSessionStatus(sessionId, newStatus) {
  const session = sessions.find(s => s.id === sessionId);
  if (session) {
    session.status = newStatus;
    saveSessions();
    renderApp();
    showToast(`تم تغيير الحالة إلى: ${newStatus}`);
  }
}

function deleteSession(sessionId) {
  if (confirm('هل أنت متأكد من رغبتك في حذف هذه الجلسة؟')) {
    sessions = sessions.filter(s => s.id !== sessionId);
    saveSessions();
    closeDetailsModal();
    renderApp();
    showToast('تم حذف الجلسة بنجاح.');
  }
}

// ================= RECORD PAYMENT WITH STRICT OVERPAYMENT REJECTION =================
function openRecordPaymentModal(targetSessionId = null) {
  playClickSound();
  const select = document.getElementById('pay-session-select');
  if (!select) return;

  const unpaidSessions = sessions.filter(s => calculateSessionFinance(s).remaining > 0);
  if (unpaidSessions.length === 0) {
    alert('جميع الجلسات مسددة بالكامل ولا يوجد مبالغ متبقية.');
    return;
  }

  select.innerHTML = unpaidSessions.map(s => {
    const client = getClientById(s.clientId);
    const f = calculateSessionFinance(s);
    return `<option value="${s.id}" ${targetSessionId === s.id ? 'selected' : ''}>
      ${client.name} - ${s.sessionType} (المتبقي: ${f.remaining.toLocaleString()} ${CURRENCY_LABEL})
    </option>`;
  }).join('');

  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('pay-date-input').value = todayStr;
  document.getElementById('pay-amount-input').value = '';
  document.getElementById('pay-note-input').value = 'عربون / دفعة نقدية';

  validatePaymentAmountLive();
  document.getElementById('add-payment-modal').classList.add('show');
}

function closeRecordPaymentModal() {
  document.getElementById('add-payment-modal').classList.remove('show');
}

function validatePaymentAmountLive() {
  const select = document.getElementById('pay-session-select');
  const infoBox = document.getElementById('pay-remaining-info-box');
  const alertBox = document.getElementById('pay-overpayment-alert');
  const alertText = document.getElementById('pay-overpayment-text');
  const amountInput = document.getElementById('pay-amount-input');
  const submitBtn = document.getElementById('save-payment-submit-btn');

  if (!select || !infoBox) return;

  const sessionId = select.value;
  const session = sessions.find(s => s.id === sessionId);
  if (!session) {
    infoBox.innerHTML = '';
    return;
  }

  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);
  const maxAllowed = fin.remaining;

  infoBox.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
      <div>
        <strong style="color: #fff;">${session.sessionType}</strong> — <span>${client.name}</span><br>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">الإجمالي: ${fin.total.toLocaleString()} ${CURRENCY_LABEL} | مسدد: ${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span>
      </div>
      <div style="text-align: left; white-space: nowrap;">
        <span style="font-size: 0.68rem; color: var(--text-secondary); display: block;">المتبقي للدفع:</span>
        <strong style="font-size: 1.05rem; color: ${maxAllowed > 0 ? 'var(--gold-light)' : 'var(--color-success)'}; font-family: var(--font-mono);">${maxAllowed.toLocaleString()} ${CURRENCY_LABEL}</strong>
      </div>
    </div>
    ${maxAllowed > 0 ? `
      <div style="margin-top: 0.45rem; padding-top: 0.45rem; border-top: 1px dashed rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.7rem; color: var(--text-secondary);">تعبئة سريعة:</span>
        <button type="button" class="btn-xs-pill" onclick="fillFullRemaining(${maxAllowed})">دفع كامل المتبقي (${maxAllowed.toLocaleString()} د.ل) ✓</button>
      </div>
    ` : '<div style="margin-top: 0.35rem; color: var(--color-success); font-weight: 700; font-size: 0.78rem;">هذه الجلسة مسددة بالكامل ✓</div>'}
  `;

  const enteredAmount = parseFloat(amountInput.value) || 0;

  // STRICT OVERPAYMENT CHECK:
  if (enteredAmount > maxAllowed) {
    alertBox.classList.remove('hidden');
    if (alertText) {
      alertText.innerHTML = `المبلغ المدخل (<strong>${enteredAmount.toLocaleString()} ${CURRENCY_LABEL}</strong>) أكبر من الرصيد المتبقي على الزبون (<strong>${maxAllowed.toLocaleString()} ${CURRENCY_LABEL}</strong>)!<br>يرجى إدخال مبلغ لا يتجاوز <strong>${maxAllowed.toLocaleString()} ${CURRENCY_LABEL}</strong>. تم تعطيل الحفظ تلقائياً لمنع الخطأ.`;
    }
    amountInput.style.borderColor = 'var(--color-danger)';
    amountInput.style.boxShadow = '0 0 0 3px rgba(244, 63, 94, 0.35)';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.35';
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.textContent = `المبلغ يتجاوز المتبقي (${maxAllowed.toLocaleString()} د.ل)`;
  } else {
    alertBox.classList.add('hidden');
    amountInput.style.borderColor = 'var(--border-subtle)';
    amountInput.style.boxShadow = 'none';
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
    submitBtn.textContent = enteredAmount > 0 ? `حفظ وتأكيد الدفعة (${enteredAmount.toLocaleString()} د.ل)` : 'حفظ وتأكيد الدفعة';
  }
}

function handleRecordPaymentSubmit(e) {
  e.preventDefault();
  playClickSound();

  const sessionId = document.getElementById('pay-session-select').value;
  const amount = parseFloat(document.getElementById('pay-amount-input').value) || 0;
  const date = document.getElementById('pay-date-input').value;
  const note = document.getElementById('pay-note-input').value.trim() || 'دفعة';
  const method = document.getElementById('pay-method-select').value;

  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const fin = calculateSessionFinance(session);
  const maxAllowed = fin.remaining;

  // HARD REJECTION:
  if (amount > maxAllowed) {
    alert(`❌ تم رفض الحفظ!\nالمبلغ المدخل (${amount} ${CURRENCY_LABEL}) أكبر من المتبقي على الزبون (${maxAllowed} ${CURRENCY_LABEL}). يرجى تصحيح المبلغ.`);
    return;
  }

  if (amount <= 0) {
    alert('يرجى إدخال مبلغ صحيح.');
    return;
  }

  if (!Array.isArray(session.payments)) session.payments = [];
  session.payments.push({
    id: 'pay-' + Date.now(),
    amount,
    date,
    note,
    method
  });

  saveSessions();
  closeRecordPaymentModal();
  renderApp();

  const client = getClientById(session.clientId);
  showToast(`تم بنجاح تسجيل دفعة بقيمة ${amount.toLocaleString()} ${CURRENCY_LABEL} من ${client.name}! 💵`);

  const detailsModal = document.getElementById('details-modal');
  if (detailsModal.classList.contains('show')) openSessionDetails(sessionId);
}

function deletePayment(sessionId, paymentId) {
  if (confirm('هل ترغب في حذف هذا القيد من سجل الدفعات؟')) {
    const session = sessions.find(s => s.id === sessionId);
    if (!session || !Array.isArray(session.payments)) return;
    session.payments = session.payments.filter(p => p.id !== paymentId);
    saveSessions();
    renderApp();
    openSessionDetails(sessionId);
    showToast('تم حذف الدفعة وتحديث الرصيد.');
  }
}

// ================= WHATSAPP INTEGRATION =================
function cleanPhoneForWhatsApp(phone) {
  if (!phone) return '';
  let clean = phone.replace(/\D/g, '');
  if (clean.startsWith('09')) clean = '218' + clean.substring(1);
  return clean;
}

function sendQuickWhatsAppInvoice(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);

  const remainingText = fin.remaining > 0 
    ? `• ⚠️ المبلغ المتبقي: ${fin.remaining.toLocaleString()} ${CURRENCY_LABEL} (يُسدد عند التسليم)`
    : `• حالة الحساب: تم السداد بالكامل ✅ شكراً لكم!`;

  const message = 
`📸 *ستوديو المصور المحترف*
مرحباً أستاذ/ة *${client.name}*،
يسعدنا تزويدكم بتفاصيل وحساب جلسة التصوير:

🗓 *نوع الجلسة:* ${session.sessionType}
📅 *الموعد:* ${session.date} الساعة ${session.time || '16:00'}
📍 *الموقع:* ${session.location || 'حسب الاتفاق'}

💳 *البيان المالي للحجز:*
• إجمالي السعر المتفق عليه: ${fin.total.toLocaleString()} ${CURRENCY_LABEL}
• المدفوع حتى الآن: ${fin.paid.toLocaleString()} ${CURRENCY_LABEL}
${remainingText}

✨ نتشرف بخدمتكم ونسعى دائماً لتقديم أفضل توثيق يليق بلحظاتكم!`;

  window.open(`https://wa.me/${cleanPhoneForWhatsApp(client.phone)}?text=${encodeURIComponent(message)}`, '_blank');
}

function sendQuickWhatsAppReminder(sessionId) {
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);

  const message = 
`مرحباً أستاذ/ة *${client.name}* 🌸
تذكير لطيف بخصوص المستحق المتبقي لجلسة (${session.sessionType}) بقيمة: *${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}*.
نرجو التكرم بالتحويل عند تيسر الأمر وتزويدنا بصورة الإشعار.
شاكرين ومقدرين حسن تعاونكم الدائم! 📸✨`;

  window.open(`https://wa.me/${cleanPhoneForWhatsApp(client.phone)}?text=${encodeURIComponent(message)}`, '_blank');
}

// ================= GEAR CHECKLIST =================
function renderGearChecklist() {
  const container = document.getElementById('gear-checklist-container');
  if (!container) return;
  container.innerHTML = gearList.map((cat, cIdx) => `
    <div style="margin-bottom: 0.85rem;">
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">${cat.category}</div>
      ${cat.items.map((item, iIdx) => `
        <div class="gear-item ${item.checked ? 'checked' : ''}" onclick="toggleGear(${cIdx}, ${iIdx})" style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem 0.75rem; background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); margin-bottom:0.35rem; cursor:pointer;">
          <span style="font-size:0.8rem; ${item.checked ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${item.name}</span>
          <input type="checkbox" ${item.checked ? 'checked' : ''} onclick="event.stopPropagation(); toggleGear(${cIdx}, ${iIdx})" style="width:18px; height:18px; accent-color:var(--color-success);">
        </div>
      `).join('')}
    </div>
  `).join('');
}

function toggleGear(cIdx, iIdx) {
  gearList[cIdx].items[iIdx].checked = !gearList[cIdx].items[iIdx].checked;
  saveGear();
  renderGearChecklist();
}

// ================= PRICING CALCULATOR =================
function initPricingCalc() {
  ['calc-shoot-hours', 'calc-edit-hours', 'calc-hourly-rate', 'calc-assistants', 'calc-expenses', 'calc-margin'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', calculateSuggestedPrice);
  });
  calculateSuggestedPrice();
}

function calculateSuggestedPrice() {
  const shoot = parseFloat(document.getElementById('calc-shoot-hours')?.value) || 0;
  const edit = parseFloat(document.getElementById('calc-edit-hours')?.value) || 0;
  const rate = parseFloat(document.getElementById('calc-hourly-rate')?.value) || 0;
  const ast = parseFloat(document.getElementById('calc-assistants')?.value) || 0;
  const exp = parseFloat(document.getElementById('calc-expenses')?.value) || 0;
  const margin = parseFloat(document.getElementById('calc-margin')?.value) || 0;

  const labor = (shoot + edit) * rate;
  const costs = ast + exp;
  const subtotal = labor + costs;
  const total = Math.round((subtotal + subtotal * (margin / 100)) / 25) * 25;

  document.getElementById('suggested-price-result').textContent = total.toLocaleString();
  document.getElementById('suggested-price-breakdown').textContent = `(صافي ربحك: ${(total - costs).toLocaleString()} ${CURRENCY_LABEL} | تكاليف: ${costs.toLocaleString()} ${CURRENCY_LABEL})`;
}

function applyCalculatedPriceToNewSession() {
  const price = parseFloat(document.getElementById('suggested-price-result')?.textContent.replace(/,/g, '')) || 0;
  const ast = parseFloat(document.getElementById('calc-assistants')?.value) || 0;
  const exp = parseFloat(document.getElementById('calc-expenses')?.value) || 0;

  document.getElementById('pricing-modal').classList.remove('show');
  openAddSessionModal();

  document.getElementById('form-total-price').value = price;
  document.getElementById('form-initial-deposit').value = Math.round(price * 0.4);
  document.getElementById('form-assistants-cost').value = ast || '';
  document.getElementById('form-extra-expenses').value = exp || '';
  updateSessionFormLiveCalculations();
}

// ================= TEMPLATES & BACKUP =================
function renderTemplates() {
  const container = document.getElementById('templates-list-container');
  if (!container) return;
  container.innerHTML = WHATSAPP_TEMPLATES.map(t => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.75rem;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
        <strong style="font-size: 0.85rem; color: var(--gold-light);">${t.title}</strong>
        <button class="btn-secondary-sm" onclick="navigator.clipboard.writeText('${t.text.replace(/\n/g, '\\n')}'); showToast('تم نسخ القالب!');">نسخ</button>
      </div>
      <p style="font-size: 0.76rem; color: var(--text-secondary); white-space: pre-line; background: rgba(0,0,0,0.25); padding: 0.5rem; border-radius: 6px;">${t.text}</p>
    </div>
  `).join('');
}

function exportDataAsJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ clients, sessions, gearList }, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = `AdasaPro_Backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  
  // Record last backup timestamp
  localStorage.setItem('adasapro_last_export', Date.now().toString());
  showToast('تم تنزيل النسخة الاحتياطية بنجاح 💾');
  checkBackupReminder();
}

function handleImportJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (Array.isArray(data.clients)) { clients = data.clients; saveClients(); }
      if (Array.isArray(data.sessions)) { sessions = data.sessions; saveSessions(); }
      localStorage.removeItem('adasapro_is_demo');
      localStorage.setItem('adasapro_last_export', Date.now().toString());
      renderApp();
      showToast('تمت استعادة البيانات بنجاح.');
      document.getElementById('backup-modal').classList.remove('show');
    } catch (err) { alert('الملف غير صالح.'); }
  };
  reader.readAsText(file);
}

function resetToDemoData() {
  if (confirm('هل ترغب في تحميل بيانات نموذجية وهمية للمعاينة والاختبار؟')) {
    clients = JSON.parse(JSON.stringify(DEMO_MOCK_CLIENTS));
    sessions = JSON.parse(JSON.stringify(DEMO_MOCK_SESSIONS));
    gearList = JSON.parse(JSON.stringify(DEFAULT_GEAR));
    localStorage.setItem('adasapro_is_demo', 'true');
    saveClients();
    saveSessions();
    saveGear();
    renderApp();
    showToast('تم تحميل بيانات تجريبية وهمية للمعاينة 🧪');
    document.getElementById('backup-modal')?.classList.remove('show');
  }
}

function clearAllData() {
  if (confirm('تنبيه: هل أنت متأكد من رغبتك في تفريغ ومسح كافة البيانات والبدء بحساب نظيف 100%؟')) {
    clients = [];
    sessions = [];
    localStorage.removeItem('adasapro_is_demo');
    saveClients();
    saveSessions();
    renderApp();
    showToast('تم تصفير ومسح كافة البيانات بنجاح.');
    document.getElementById('backup-modal')?.classList.remove('show');
  }
}

// ================= SMART BACKUP REMINDER & HEALTH =================
function checkBackupReminder() {
  const reminderBanner = document.getElementById('backup-reminder-banner');
  const healthBadge = document.getElementById('backup-health-badge');
  const lastExportTimeEl = document.getElementById('backup-last-export-time');
  const recordsSummaryEl = document.getElementById('backup-records-summary');

  const totalSessions = sessions.length;
  const totalClients = clients.length;
  const lastExportTs = Number(localStorage.getItem('adasapro_last_export') || 0);
  const dismissedUntil = Number(localStorage.getItem('adasapro_backup_dismissed_until') || 0);

  if (recordsSummaryEl) {
    recordsSummaryEl.textContent = `${totalSessions} جلسة • ${totalClients} زبون`;
  }

  let formattedDate = 'لم يتم التصدير بعد';
  let isOverdue = false;
  let reasonText = '';

  if (lastExportTs > 0) {
    const diffDays = Math.floor((Date.now() - lastExportTs) / (1000 * 60 * 60 * 24));
    const d = new Date(lastExportTs);
    formattedDate = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} (${diffDays === 0 ? 'اليوم' : 'منذ ' + diffDays + ' يوم'})`;
    if (diffDays >= 7 && totalSessions > 0) {
      isOverdue = true;
      reasonText = `مر أكثر من ${diffDays} أيام منذ آخر نسخة احتياطية ولديك ${totalSessions} جلسة مسجلة. احفظ نسختك الآن لتأمين بياناتك.`;
    }
  } else if (totalSessions >= 3) {
    isOverdue = true;
    reasonText = `لديك ${totalSessions} جلسات وبيانات مالية هامة غير منسوخة احتياطياً بعد. قم بتنزيل نسختك الآن لتأمين حساباتك عند مسح الكاش.`;
  }

  if (lastExportTimeEl) lastExportTimeEl.textContent = formattedDate;

  if (healthBadge) {
    if (isOverdue) {
      healthBadge.textContent = 'بحاجة لنسخ احتياطي ⚠️';
      healthBadge.className = 'pill-badge badge-danger-soft';
    } else {
      healthBadge.textContent = lastExportTs > 0 ? 'بياناتك مؤمنة ✓' : 'لا توجد بيانات حرجة';
      healthBadge.className = 'pill-badge badge-success-soft';
    }
  }

  if (reminderBanner) {
    if (isOverdue && Date.now() > dismissedUntil) {
      const reasonEl = document.getElementById('backup-reminder-reason');
      if (reasonEl && reasonText) reasonEl.textContent = reasonText;
      reminderBanner.style.display = 'flex';
    } else {
      reminderBanner.style.display = 'none';
    }
  }
}

function dismissBackupReminder() {
  localStorage.setItem('adasapro_backup_dismissed_until', (Date.now() + 24 * 60 * 60 * 1000).toString());
  const reminderBanner = document.getElementById('backup-reminder-banner');
  if (reminderBanner) reminderBanner.style.display = 'none';
  showToast('تم تأجيل تنبيه النسخ الاحتياطي لمدة 24 ساعة.');
}

// ================= ONBOARDING & DEMO STATE =================
function checkOnboardingState() {
  const heroBanner = document.getElementById('onboarding-hero-banner');
  const demoBar = document.getElementById('demo-mode-indicator');
  const isDemo = localStorage.getItem('adasapro_is_demo') === 'true';

  if (clients.length === 0 && sessions.length === 0) {
    if (heroBanner) heroBanner.style.display = 'block';
    if (demoBar) demoBar.style.display = 'none';
  } else if (isDemo) {
    if (heroBanner) heroBanner.style.display = 'none';
    if (demoBar) demoBar.style.display = 'flex';
  } else {
    if (heroBanner) heroBanner.style.display = 'none';
    if (demoBar) demoBar.style.display = 'none';
  }
}

// ================= MOBILE METRICS ACCORDION =================
function toggleMobileMetrics() {
  const wrap = document.getElementById('collapsible-financial-metrics');
  const btn = document.getElementById('toggle-more-metrics-btn');
  const textEl = document.getElementById('toggle-metrics-text');
  const arrowEl = document.getElementById('toggle-metrics-arrow');
  if (!wrap || !btn) return;

  const isOpen = wrap.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  if (textEl) {
    textEl.textContent = isOpen ? '🔼 إخفاء المؤشرات الإضافية' : '📊 عرض باقي المؤشرات (العقود والتكاليف)';
  }
  if (arrowEl) {
    arrowEl.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

// ================= CALENDAR SYNC (GOOGLE & RFC 5545 ICS) =================
function addToGoogleCalendar(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);

  const title = `جلسة تصوير - ${client.name} (${session.sessionType})`;
  const location = session.location || 'موقع التصوير';
  
  const timeStr = session.time || '10:00';
  const [hours, minutes] = timeStr.split(':').map(Number);
  const dateParts = session.date.split('-').map(Number);
  
  const startDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], hours || 10, minutes || 0, 0);
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  const formatIsoForGoogle = (d) => {
    return d.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const datesParam = `${formatIsoForGoogle(startDate)}/${formatIsoForGoogle(endDate)}`;
  const details = `📸 جلسة تصوير مسجلة في منصة عدسة برو\nالزبون: ${client.name}\nالهاتف: ${client.phone || 'غير مسجل'}\nنوع الجلسة: ${session.sessionType}\nالحالة: ${session.status}\nإجمالي الاتفاق: ${fin.total} د.ل\nالمتبقي المطلوب: ${fin.remaining} د.ل\nالموقع: ${location}\nملاحظات: ${session.notes || 'لا توجد'}`;

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${datesParam}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  window.open(googleUrl, '_blank', 'noopener,noreferrer');
  showToast('جاري فتح تقويم Google لإضافة موعد الجلسة...');
}

function downloadIcsCalendar(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  const client = getClientById(session.clientId);
  const fin = calculateSessionFinance(session);

  const timeStr = session.time || '10:00';
  const [hours, minutes] = timeStr.split(':').map(Number);
  const dateParts = session.date.split('-').map(Number);
  
  const startDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], hours || 10, minutes || 0, 0);
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  const formatUtcIso = (d) => {
    return d.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const dtStamp = formatUtcIso(new Date());
  const dtStart = formatUtcIso(startDate);
  const dtEnd = formatUtcIso(endDate);
  const uid = `adasapro-session-${session.id}-${Date.now()}@adasapro.app`;
  const summary = `جلسة تصوير: ${client.name} (${session.sessionType})`;
  const description = `جلسة تصوير مسجلة في عدسة برو\\nالزبون: ${client.name}\\nالهاتف: ${client.phone || ''}\\nالمبلغ: ${fin.total} د.ل\\nالمتبقي: ${fin.remaining} د.ل\\nملاحظات: ${session.notes || ''}`;
  const location = session.location || '';

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AdasaPro//Photographer Studio OS//AR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'ACTION:DISPLAY',
    'DESCRIPTION:تذكير: موعد جلسة التصوير بعد ساعتين',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `session-${session.date}-${client.name.replace(/\s+/g, '_')}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('تم تنزيل ملف التقويم (.ics) مع تنبيه ذكي قبل ساعتين ⏰');
}

// ================= CONTRACT GENERATOR ENGINE =================
let lastGeneratedContract = null;

function handleContractServiceTypeChange(type) {
  const wrapVideos = document.getElementById('wrap-videos-count');
  const wrapPhotos = document.getElementById('wrap-photos-count');
  if (!wrapVideos || !wrapPhotos) return;

  if (type === 'videos') {
    wrapVideos.style.display = 'block';
    wrapPhotos.style.display = 'none';
  } else if (type === 'photos') {
    wrapVideos.style.display = 'none';
    wrapPhotos.style.display = 'block';
  } else {
    // both
    wrapVideos.style.display = 'block';
    wrapPhotos.style.display = 'block';
  }
}

function handleContractWorkTypeChange(val) {
  const wrapCustom = document.getElementById('wrap-custom-work-type');
  const customInput = document.getElementById('contract-custom-work-type');
  if (!wrapCustom) return;

  if (val === 'أخرى') {
    wrapCustom.style.display = 'block';
    if (customInput) customInput.focus();
  } else {
    wrapCustom.style.display = 'none';
  }
}

function openContractModal(preselectedClientId = null) {
  playClickSound();

  // Populate client dropdown
  const quickSelect = document.getElementById('contract-client-select-quick');
  if (quickSelect) {
    quickSelect.innerHTML = '<option value="">-- اضغط للاختيار من الزبائن الحاليين --</option>' +
      clients.map(c => `<option value="${c.id}">${c.name} (${c.phone})</option>`).join('');
  }

  // Preload saved photographer info from localStorage
  const savedMyName = localStorage.getItem('adasapro_my_name') || '';
  const savedMyPhone = localStorage.getItem('adasapro_my_phone') || '';
  const myNameInput = document.getElementById('contract-photographer-name');
  const myPhoneInput = document.getElementById('contract-photographer-phone');

  if (myNameInput && !myNameInput.value) {
    myNameInput.value = savedMyName;
  }
  if (myPhoneInput && !myPhoneInput.value) {
    myPhoneInput.value = savedMyPhone;
  }

  // If a client ID was passed, auto-select and auto-fill
  if (preselectedClientId) {
    if (quickSelect) quickSelect.value = preselectedClientId;
    autoFillContractClient(preselectedClientId);
  }

  // Synchronize service type and work type visibility
  const serviceSelect = document.getElementById('contract-service-type');
  if (serviceSelect) {
    handleContractServiceTypeChange(serviceSelect.value);
  }
  const workSelect = document.getElementById('contract-work-type');
  if (workSelect) {
    handleContractWorkTypeChange(workSelect.value);
  }

  // Switch to Form View
  const formView = document.getElementById('contract-form-view');
  const previewView = document.getElementById('contract-preview-view');
  if (formView) formView.style.display = 'block';
  if (previewView) previewView.style.display = 'none';

  updateContractLiveCalculations();

  document.getElementById('contract-modal')?.classList.add('show');
}

function closeContractModal() {
  document.getElementById('contract-modal')?.classList.remove('show');
}

function autoFillContractClient(clientId) {
  if (!clientId) return;
  const client = getClientById(clientId);
  if (client) {
    const compName = document.getElementById('contract-company-name');
    const compPhone = document.getElementById('contract-client-phone');
    if (compName) compName.value = client.name;
    if (compPhone) compPhone.value = client.phone;
  }
}

function updateContractLiveCalculations() {
  const total = parseFloat(document.getElementById('contract-total-price')?.value) || 0;
  const deposit = parseFloat(document.getElementById('contract-deposit-price')?.value) || 0;
  const remaining = Math.max(0, total - deposit);

  const depEl = document.getElementById('contract-live-deposit');
  const remEl = document.getElementById('contract-live-remaining');

  if (depEl) depEl.textContent = `${deposit.toLocaleString()} ${CURRENCY_LABEL}`;
  if (remEl) remEl.textContent = `${remaining.toLocaleString()} ${CURRENCY_LABEL}`;
}

function generateContractDocument(e) {
  if (e) e.preventDefault();
  playClickSound();

  const photogName = document.getElementById('contract-photographer-name')?.value.trim() || 'المصور';
  const photogPhone = document.getElementById('contract-photographer-phone')?.value.trim() || '';
  const companyName = document.getElementById('contract-company-name')?.value.trim() || 'الشركة';
  const clientPhone = document.getElementById('contract-client-phone')?.value.trim() || '';

  const cleanPhotogPhone = photogPhone.replace(/[^0-9]/g, '');
  if (cleanPhotogPhone.length < 9 || cleanPhotogPhone.length > 10) {
    alert('⚠️ رقم هاتفك كمصور يجب أن يتكون من 9 إلى 10 أرقام فقط (مثال: 091XXXXXXX).');
    document.getElementById('contract-photographer-phone')?.focus();
    return;
  }

  const cleanClientPhone = clientPhone.replace(/[^0-9]/g, '');
  if (cleanClientPhone.length < 9 || cleanClientPhone.length > 10) {
    alert('⚠️ رقم هاتف الشركة / العميل يجب أن يتكون من 9 إلى 10 أرقام فقط (مثال: 092XXXXXXX).');
    document.getElementById('contract-client-phone')?.focus();
    return;
  }

  const serviceType = document.getElementById('contract-service-type')?.value || 'both';
  const videosCount = parseInt(document.getElementById('contract-videos-count')?.value) || 0;
  const photosCount = parseInt(document.getElementById('contract-photos-count')?.value) || 0;

  const workTypeSelect = document.getElementById('contract-work-type')?.value || '';
  const customWorkType = document.getElementById('contract-custom-work-type')?.value.trim() || '';

  // Handle custom type when 'أخرى' is selected
  let finalWorkType = workTypeSelect;
  if (workTypeSelect === 'أخرى') {
    finalWorkType = customWorkType || 'تصوير وإنتاج مخصص وفق متطلبات الطرف الثاني';
  }

  const deliveryDays = parseInt(document.getElementById('contract-delivery-days')?.value) || 5;
  const revisionsCount = parseInt(document.getElementById('contract-revisions-count')?.value) || 2;
  const extraSpecs = document.getElementById('contract-extra-specs')?.value.trim() || '';
  const totalPrice = parseFloat(document.getElementById('contract-total-price')?.value) || 0;
  const depositPrice = parseFloat(document.getElementById('contract-deposit-price')?.value) || 0;
  const remainingPrice = Math.max(0, totalPrice - depositPrice);

  // Remember photographer info in localStorage for future convenience
  if (photogName) localStorage.setItem('adasapro_my_name', photogName);
  if (photogPhone) localStorage.setItem('adasapro_my_phone', photogPhone);

  const now = new Date();
  const arabicDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const arabicMonths = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const dayName = arabicDays[now.getDay()];
  const dateFormatted = `${dayName}، ${now.getDate()} ${arabicMonths[now.getMonth()]} ${now.getFullYear()}م`;
  const contractCode = `CON-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Determine contract title & subtitle based on service
  let contractTitle = 'عقد تقديم خدمات تصوير فوتوغرافي وإنتاج مرئي شامل';
  let contractSubtitle = 'اتفاقية عمل مهنية رسمية لإنتاج المحتوى المرئي وجلسات التصوير الفوتوغرافي';
  if (serviceType === 'videos') {
    contractTitle = 'عقد تقديم خدمات تصوير وإنتاج مرئي';
    contractSubtitle = 'اتفاقية عمل مهنية رسمية لإنتاج وتوثيق المحتوى المرئي والإعلاني';
  } else if (serviceType === 'photos') {
    contractTitle = 'عقد تقديم خدمات تصوير فوتوغرافي';
    contractSubtitle = 'اتفاقية عمل مهنية رسمية لخدمات التصوير الفوتوغرافي ومعالجة الصور بالريتاتش';
  }

  lastGeneratedContract = {
    code: contractCode,
    date: dateFormatted,
    photogName,
    photogPhone,
    companyName,
    clientPhone,
    serviceType,
    videosCount,
    photosCount,
    workType: finalWorkType,
    contractTitle,
    deliveryDays,
    revisionsCount,
    extraSpecs,
    totalPrice,
    depositPrice,
    remainingPrice
  };

  // Build deliverables list
  let deliverablesListHtml = '';
  if (serviceType === 'videos' || serviceType === 'both') {
    deliverablesListHtml += `<li><strong>عدد الفيديوهات المطلوبة:</strong> <span style="font-weight: 800; color: #0F172A; text-decoration: underline;">${videosCount} فيديو نهائي معتمد ومكتمل المونتاج</span>.</li>`;
  }
  if (serviceType === 'photos' || serviceType === 'both') {
    deliverablesListHtml += `<li><strong>عدد الصور الفوتوغرافية:</strong> <span style="font-weight: 800; color: #0F172A; text-decoration: underline;">${photosCount} صورة فوتوغرافية مصححة الألوان ومعدلة بالريتاتش الاحترافي</span>.</li>`;
  }
  deliverablesListHtml += `<li><strong>تصنيف ونوع العمل المطلوب:</strong> <span style="font-weight: 700; color: #1D4ED8;">${finalWorkType}</span>.</li>`;
  if (extraSpecs) {
    deliverablesListHtml += `<li><strong>المواصفات الفنية الخاصة:</strong> ${extraSpecs}.</li>`;
  } else {
    deliverablesListHtml += `<li><strong>المواصفات الفنية القياسية:</strong> تصوير بأعلى جودة سينمائية واحترافية (4K / Full HD / High-Res)، استخدام أحدث العدسات والإضاءة، معالجة وتصحيح ألوان متقدم، وتسليم نسخ عالية الدقة جاهزة للطباعة والنشر الرقمي.</li>`;
  }

  const printArea = document.getElementById('contract-print-area');
  if (printArea) {
    printArea.innerHTML = `
      <div class="contract-header">
        <div class="contract-title-group">
          <h2>${contractTitle}</h2>
          <p>${contractSubtitle}</p>
        </div>
        <div class="contract-meta-box">
          <div><strong>رقم العقد:</strong> <span dir="ltr">${contractCode}</span></div>
          <div><strong>تاريخ التحرير:</strong> ${dateFormatted}</div>
          <div><strong>العملة المعتمدة:</strong> الدينار الليبي (د.ل)</div>
        </div>
      </div>

      <div class="contract-parties-grid">
        <div class="contract-party-box first-party">
          <div class="contract-party-title">الطرف الأول (المصور / جهة التنفيذ):</div>
          <div class="contract-party-row">
            <strong>الاسم / الاستوديو:</strong> <span>${photogName}</span>
          </div>
          <div class="contract-party-row">
            <strong>رقم الهاتف / الواتساب:</strong> <span dir="ltr">${photogPhone || 'غير محدد'}</span>
          </div>
          <div class="contract-party-row">
            <strong>الصفة:</strong> <span>المسؤول والمشرف الفني على الإنتاج والتصوير</span>
          </div>
        </div>

        <div class="contract-party-box second-party">
          <div class="contract-party-title">الطرف الثاني (الشركة / العميل):</div>
          <div class="contract-party-row">
            <strong>اسم الجهة / الشركة:</strong> <span>${companyName}</span>
          </div>
          <div class="contract-party-row">
            <strong>رقم هاتف المفوض:</strong> <span dir="ltr">${clientPhone || 'غير محدد'}</span>
          </div>
          <div class="contract-party-row">
            <strong>الصفة:</strong> <span>الجهة الطالبة للمحتوى والمرخص لها بالاستخدام</span>
          </div>
        </div>
      </div>

      <div class="contract-preamble">
        <strong>ديباجة الاتفاق:</strong><br>
        بعون الله تعالى وتوفيقه، تم إبرام هذا العقد بالتراضي التام بين الطرفين، حيث رغب الطرف الثاني في تكليف الطرف الأول بتنفيذ أعمال تصوير وإنتاج احترافي للترويج لنشاطه وأعماله، وبما أن الطرف الأول يمتلك الكفاءة والخبرة والمعدات التقنية اللازمة لإنجاز هذا العمل وفق المعايير الفنية العالية، فقد اتفق الطرفان بكامل أهليتهما المعتبرة قانوناً على الالتزام بالبنود والشروط الآتية:
      </div>

      <!-- البند الأول -->
      <div class="contract-clause">
        <div class="contract-clause-header">
          <span class="contract-clause-num">1</span>
          <span>البند الأول: موضوع العقد ونطاق المخرجات (Deliverables)</span>
        </div>
        <div class="contract-clause-body">
          يلتزم الطرف الأول بتصوير وإعداد وتسليم المحتوى التالي لصالح الطرف الثاني:
          <ul>
            ${deliverablesListHtml}
          </ul>
        </div>
      </div>

      <!-- البند الثاني -->
      <div class="contract-clause">
        <div class="contract-clause-header">
          <span class="contract-clause-num">2</span>
          <span>البند الثاني: الجدول الزمني ومواعيد التسليم</span>
        </div>
        <div class="contract-clause-body">
          <ul>
            <li>يلتزم الطرف الأول بتسليم النسخ المبدئية للعرض والمراجعة (Draft Preview) خلال مدة أقصاها <strong>${deliveryDays} أيام عمل</strong> تبدأ من تاريخ اكتمال جلسات التصوير الميداني وتسليم الطرف الثاني لكافة الشعارات والمواد اللازمة.</li>
            <li>يتم تسليم المواد النهائية عبر رابط سحابي خاص (Google Drive أو WeTransfer) يتيح للطرف الثاني تنزيل الفيديوهات والصور بأعلى دقة خام، ويلتزم الطرف الثاني بتحميل وأرشفة ملفاته خلال 30 يوماً من تاريخ الإرسال.</li>
          </ul>
        </div>
      </div>

      <!-- البند الثالث -->
      <div class="contract-clause">
        <div class="contract-clause-header">
          <span class="contract-clause-num">3</span>
          <span>البند الثالث: سياسة المراجعة والتعديلات (Revisions)</span>
        </div>
        <div class="contract-clause-body">
          <ul>
            <li>يشمل هذا الاتفاق عدد <strong>(${revisionsCount}) جولات مراجعة وتعديل مجانية</strong> للمسودة الأولية، على أن يقوم الطرف الثاني بتقديم كافة ملاحظاته الفنية في قائمة واضحة وموحدة لكل جولة.</li>
            <li>تشمل جولات المراجعة تعديل المونتاج، ضبط النصوص، أو تصحيح درجات الألوان، ولا تشمل إعادة تصوير لقطات أو مشاهد جديدة لم تكن متفقاً عليها في السيناريو المعتمد، وأي يوم تصوير إضافي يخضع لتكلفة مستقلة يتفق عليها الطرفان مسبقاً.</li>
          </ul>
        </div>
      </div>

      <!-- البند الرابع -->
      <div class="contract-clause">
        <div class="contract-clause-header">
          <span class="contract-clause-num">4</span>
          <span>البند الرابع: القيمة المالية وآلية الدفع (بالدينار الليبي د.ل)</span>
        </div>
        <div class="contract-clause-body">
          اتفق الطرفان على أن المقابل المالي الإجمالي لإنجاز هذا العقد يسدد وفق جدول الدفعات التالي:
          <table class="contract-financial-table">
            <thead>
              <tr>
                <th>البيان والوصف</th>
                <th>المبلغ (د.ل)</th>
                <th>شرط وموعد الاستحقاق</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>الدفعة الأولى (العربون المبدئي لتأكيد الحجز)</strong></td>
                <td style="font-weight: 700; color: #15803D;">${depositPrice.toLocaleString()} د.ل</td>
                <td>تُدفع فوراً عند توقيع هذا الاتفاق لبدء التحضير والحجز</td>
              </tr>
              <tr>
                <td><strong>الدفعة الثانية (المتبقي النهائي)</strong></td>
                <td style="font-weight: 700; color: #B91C1C;">${remainingPrice.toLocaleString()} د.ل</td>
                <td>تُسدد عند اعتماد النسخ النهائية وقبل تسليم الملفات الأصلية</td>
              </tr>
              <tr class="total-row">
                <td><strong>إجمالي قيمة العقد</strong></td>
                <td colspan="2" style="font-size: 0.95rem; font-weight: 800; color: #0F172A;">${totalPrice.toLocaleString()} دينار ليبي فقط لا غير</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- البند الخامس -->
      <div class="contract-clause">
        <div class="contract-clause-header">
          <span class="contract-clause-num">5</span>
          <span>البند الخامس: حقوق الملكية الفكرية والنشر</span>
        </div>
        <div class="contract-clause-body">
          <ul>
            <li>تنتقل كافة حقوق الاستخدام التجاري والتسويقي للمواد المنجزة والمعتمدة لصالح الطرف الثاني حصرياً فور سداد كامل مستحقات العقد المالية.</li>
            <li>يحتفظ الطرف الأول بحق الإشارة إلى العمل وعرض مقتطفات منه في معرض أعماله المهني (Portfolio) وحساباته الرقمية لأغراض التسويق الفني، ما لم يُخطر الطرف الثاني كتابياً برغبته في سرية المواد قبل التوقيع.</li>
          </ul>
        </div>
      </div>

      <!-- توقيعات الأطراف -->
      <div class="contract-signatures-grid">
        <div class="contract-sig-col">
          <h4>توقيع الطرف الأول (المصور / جهة التنفيذ):</h4>
          <div style="font-size: 0.82rem; color: #334155; margin-top: 0.35rem;">
            <strong>الاسم:</strong> ${photogName}
          </div>
          <div class="contract-sig-line">
            <span>التوقيع: ............................</span>
            <span>التاريخ: .....................</span>
          </div>
        </div>

        <div class="contract-sig-col">
          <h4>توقيع وختم الطرف الثاني (الشركة / العميل):</h4>
          <div style="font-size: 0.82rem; color: #334155; margin-top: 0.35rem;">
            <strong>الجهة:</strong> ${companyName}
          </div>
          <div class="contract-sig-line">
            <span>التوقيع والختم: ............................</span>
            <span>التاريخ: .....................</span>
          </div>
        </div>
      </div>
    `;
  }

  // Switch view to Preview
  const formView = document.getElementById('contract-form-view');
  const previewView = document.getElementById('contract-preview-view');
  if (formView) formView.style.display = 'none';
  if (previewView) {
    previewView.style.display = 'block';
    previewView.scrollTop = 0;
  }

  showToast('تم توليد العقد الرسمي الجاهز بنجاح! 📜');
}

function backToContractForm() {
  playClickSound();
  const formView = document.getElementById('contract-form-view');
  const previewView = document.getElementById('contract-preview-view');
  if (previewView) previewView.style.display = 'none';
  if (formView) formView.style.display = 'block';
}

function printContractDocument() {
  playClickSound();
  window.print();
}

function copyContractText() {
  playClickSound();
  if (!lastGeneratedContract) {
    showToast('يرجى توليد العقد أولاً.');
    return;
  }

  const c = lastGeneratedContract;
  let itemsSummary = '';
  if (c.serviceType === 'videos' || c.serviceType === 'both') {
    itemsSummary += `- عدد الفيديوهات المعتمدة: ${c.videosCount} فيديو\n`;
  }
  if (c.serviceType === 'photos' || c.serviceType === 'both') {
    itemsSummary += `- عدد الصور الفوتوغرافية المعدلة: ${c.photosCount} صورة\n`;
  }
  itemsSummary += `- نوع وتصنيف العمل: ${c.workType}`;

  const contractText = `📜 *${c.contractTitle}*
رقم العقد: ${c.code}
تاريخ التحرير: ${c.date}

🔹 *الطرف الأول (المصور):* ${c.photogName} (هاتف: ${c.photogPhone || 'غير محدد'})
🔹 *الطرف الثاني (الشركة):* ${c.companyName} (هاتف: ${c.clientPhone || 'غير محدد'})

📌 *نطاق العمل والمخرجات:*
${itemsSummary}
- مدة تسليم المسودة: خلال ${c.deliveryDays} أيام عمل
- جولات التعديل المسموحة: (${c.revisionsCount}) جولات مجانية
${c.extraSpecs ? `- مواصفات فنية إضافية: ${c.extraSpecs}` : ''}

💰 *الاتفاق المالي (بالدينار الليبي د.ل):*
- إجمالي قيمة العقد: ${c.totalPrice.toLocaleString()} د.ل
- الدفعة الأولى (العربون المبدئي): ${c.depositPrice.toLocaleString()} د.ل
- المتبقي عند الاعتماد والتسليم: ${c.remainingPrice.toLocaleString()} د.ل

⚖️ *أبرز الشروط والبنود:*
1. يبدأ العمل وتجهيز التصوير فور استلام العربون.
2. يتم التسليم عبر رابط إلكتروني سحابي بجودة فائقة.
3. تشمل جولات التعديل المونتاج ومعالجة الألوان ولا تشمل إعادة تصوير لقطات جديدة خارج الاتفاق.
4. تنتقل حقوق الاستخدام التجاري للشركة بعد سداد كامل المستحقات.

تم الاتفاق بالتراضي التام بين الطرفين.`;

  navigator.clipboard.writeText(contractText).then(() => {
    showToast('تم نسخ نص العقد كاملاً إلى الحافظة! 📋');
  }).catch(() => {
    showToast('تعذر النسخ التلقائي، يمكنك استخدام زر الطباعة أو المشاركة.');
  });
}

function shareContractWhatsApp() {
  playClickSound();
  if (!lastGeneratedContract) {
    showToast('يرجى توليد العقد أولاً.');
    return;
  }

  const c = lastGeneratedContract;
  let itemsSummary = '';
  if (c.serviceType === 'videos' || c.serviceType === 'both') {
    itemsSummary += `• عدد الفيديوهات: ${c.videosCount} فيديو معتمد\n`;
  }
  if (c.serviceType === 'photos' || c.serviceType === 'both') {
    itemsSummary += `• عدد الصور المعدلة: ${c.photosCount} صورة فوتوغرافية\n`;
  }
  itemsSummary += `• نوع ومواصفات العمل: ${c.workType}`;

  const msg = `السلام عليكم ورحمة الله،
تحية طيبة لكم من ${c.photogName} 📸

مرفق ملخص ${c.contractTitle} لشركة/جهة: *${c.companyName}*

📜 *تفاصيل الاتفاق:*
${itemsSummary}
• مدة تسليم المسودة الأولية: خلال ${c.deliveryDays} أيام عمل
• جولات التعديل والمراجعة: (${c.revisionsCount}) جولات مجانية

💵 *المقابل المالي (بالدينار الليبي):*
• القيمة الإجمالية: ${c.totalPrice.toLocaleString()} د.ل
• الدفعة الأولى (عربون الحجز): ${c.depositPrice.toLocaleString()} د.ل
• المتبقي عند التسليم النهائي: ${c.remainingPrice.toLocaleString()} د.ل

نتشرف بالتعاون معكم ونسعد بخدمتكم لإنتاج عمل متميز يليق بكم! ✨`;

  let phone = c.clientPhone.replace(/[^0-9]/g, '');
  if (phone.startsWith('09')) {
    phone = '218' + phone.substring(1);
  } else if (phone.startsWith('9')) {
    phone = '218' + phone;
  }

  const url = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    : `https://wa.me/?text=${encodeURIComponent(msg)}`;

  window.open(url, '_blank');
}

// ================= EVENT LISTENERS =================
function setupEventListeners() {
  // Navigation: Synchronize both sidebar and mobile bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      playClickSound();
      const targetTabId = item.getAttribute('data-tab');
      if (!targetTabId) return;

      document.querySelectorAll('.nav-item').forEach(n => {
        if (n.getAttribute('data-tab') === targetTabId) {
          n.classList.add('active');
        } else {
          n.classList.remove('active');
        }
      });

      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.getElementById(targetTabId)?.classList.add('active');
      const scrollView = document.getElementById('main-scroll-view');
      if (scrollView) scrollView.scrollTop = 0;
      updateMobileFAB(targetTabId);
    });
  });

  // Global Topbar Search
  document.getElementById('global-top-search')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length > 0) {
      document.querySelector('.nav-item[data-tab="tab-sessions"]')?.click();
      const sessionSearch = document.getElementById('session-search-input');
      if (sessionSearch) {
        sessionSearch.value = q;
        searchQuery = q;
        document.getElementById('clear-search-btn')?.classList.remove('hidden');
        renderAllSessions();
      }
    }
  });

  // Desktop Frame Switch
  document.getElementById('view-mode-toggle')?.addEventListener('click', () => {
    const container = document.getElementById('app-container');
    const text = document.getElementById('view-mode-text');
    if (container.classList.contains('mobile-frame')) {
      container.classList.remove('mobile-frame');
      container.classList.add('full-screen');
      text.textContent = 'إطار الهاتف';
    } else {
      container.classList.remove('full-screen');
      container.classList.add('mobile-frame');
      text.textContent = 'عرض كامل';
    }
  });

  // Home Three Big Buttons
  document.getElementById('btn-home-add-client')?.addEventListener('click', openAddClientModal);
  document.getElementById('btn-home-add-session')?.addEventListener('click', () => openAddSessionModal());
  document.getElementById('btn-home-add-payment')?.addEventListener('click', () => openRecordPaymentModal());

  // Quick Action Buttons
  document.getElementById('quick-add-client-btn')?.addEventListener('click', openAddClientModal);
  document.getElementById('btn-add-client-tab')?.addEventListener('click', openAddClientModal);
  document.getElementById('btn-add-session-tab')?.addEventListener('click', () => openAddSessionModal());
  document.getElementById('btn-finance-add-payment')?.addEventListener('click', () => openRecordPaymentModal());
  document.getElementById('btn-quick-new-client-from-session')?.addEventListener('click', () => {
    closeSessionModal();
    openAddClientModal();
  });

  // Client Modal
  document.getElementById('close-client-modal-btn')?.addEventListener('click', closeClientModal);
  document.getElementById('cancel-client-btn')?.addEventListener('click', closeClientModal);
  document.getElementById('client-form')?.addEventListener('submit', handleSaveClient);
  document.getElementById('close-profile-modal-btn')?.addEventListener('click', closeClientProfile);

  // Session Modal
  document.getElementById('close-session-modal-btn')?.addEventListener('click', closeSessionModal);
  document.getElementById('cancel-session-btn')?.addEventListener('click', closeSessionModal);
  document.getElementById('session-form')?.addEventListener('submit', handleSaveSession);

  // Live session calculation
  document.getElementById('form-total-price')?.addEventListener('input', updateSessionFormLiveCalculations);
  document.getElementById('form-initial-deposit')?.addEventListener('input', updateSessionFormLiveCalculations);
  document.getElementById('form-assistants-cost')?.addEventListener('input', updateSessionFormLiveCalculations);
  document.getElementById('form-extra-expenses')?.addEventListener('input', updateSessionFormLiveCalculations);

  // Payment Modal validation & handlers
  document.getElementById('close-payment-modal-btn')?.addEventListener('click', closeRecordPaymentModal);
  document.getElementById('cancel-add-payment-btn')?.addEventListener('click', closeRecordPaymentModal);
  document.getElementById('pay-session-select')?.addEventListener('change', validatePaymentAmountLive);
  document.getElementById('pay-amount-input')?.addEventListener('input', validatePaymentAmountLive);
  document.getElementById('record-payment-form')?.addEventListener('submit', handleRecordPaymentSubmit);

  // Details Modal
  document.getElementById('close-details-modal-btn')?.addEventListener('click', closeDetailsModal);

  // Search & Filters
  document.getElementById('client-search-input')?.addEventListener('input', renderClientsTab);
  document.getElementById('session-search-input')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    document.getElementById('clear-search-btn')?.classList.toggle('hidden', searchQuery.length === 0);
    renderAllSessions();
  });
  document.getElementById('clear-search-btn')?.addEventListener('click', () => {
    document.getElementById('session-search-input').value = '';
    searchQuery = '';
    document.getElementById('clear-search-btn').classList.add('hidden');
    renderAllSessions();
  });

  // Session filters
  document.querySelectorAll('#tab-sessions .filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      playClickSound();
      document.querySelectorAll('#tab-sessions .filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter');
      renderAllSessions();
    });
  });

  // Client filters
  document.querySelectorAll('#client-filter-pills .filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      playClickSound();
      document.querySelectorAll('#client-filter-pills .filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentClientFilter = pill.getAttribute('data-client-filter');
      renderClientsTab();
    });
  });

  // Toolkit buttons
  document.getElementById('open-gear-modal-btn')?.addEventListener('click', () => document.getElementById('gear-modal')?.classList.add('show'));
  document.getElementById('close-gear-modal-btn')?.addEventListener('click', () => document.getElementById('gear-modal')?.classList.remove('show'));
  document.getElementById('save-gear-checklist-btn')?.addEventListener('click', () => {
    gearList.forEach(c => c.items.forEach(i => i.checked = true));
    saveGear();
    renderGearChecklist();
    document.getElementById('gear-modal')?.classList.remove('show');
    showToast('تم تأكيد فحص جميع المعدات!');
  });
  document.getElementById('reset-gear-checklist')?.addEventListener('click', () => {
    gearList.forEach(c => c.items.forEach(i => i.checked = false));
    saveGear();
    renderGearChecklist();
    showToast('تمت إعادة ضبط القائمة.');
  });

  document.getElementById('open-pricing-calc-btn')?.addEventListener('click', () => document.getElementById('pricing-modal')?.classList.add('show'));
  document.getElementById('close-pricing-modal-btn')?.addEventListener('click', () => document.getElementById('pricing-modal')?.classList.remove('show'));
  document.getElementById('apply-calculated-price-btn')?.addEventListener('click', applyCalculatedPriceToNewSession);

  document.getElementById('open-templates-btn')?.addEventListener('click', () => document.getElementById('templates-modal')?.classList.add('show'));
  document.getElementById('close-templates-modal-btn')?.addEventListener('click', () => document.getElementById('templates-modal')?.classList.remove('show'));

  document.getElementById('quick-backup-btn')?.addEventListener('click', () => document.getElementById('backup-modal')?.classList.add('show'));
  document.getElementById('open-backup-modal-btn')?.addEventListener('click', () => document.getElementById('backup-modal')?.classList.add('show'));
  document.getElementById('close-backup-modal-btn')?.addEventListener('click', () => document.getElementById('backup-modal')?.classList.remove('show'));
  document.getElementById('btn-export-json')?.addEventListener('click', exportDataAsJSON);
  document.getElementById('import-file-input')?.addEventListener('change', handleImportJSON);
  document.getElementById('btn-reset-demo-data')?.addEventListener('click', resetToDemoData);
  document.getElementById('btn-clear-all-data')?.addEventListener('click', clearAllData);

  // Smart Backup Reminder listeners
  document.getElementById('btn-reminder-export')?.addEventListener('click', exportDataAsJSON);
  document.getElementById('btn-reminder-dismiss')?.addEventListener('click', dismissBackupReminder);

  // Onboarding & Demo banner listeners
  document.getElementById('btn-onboarding-demo')?.addEventListener('click', resetToDemoData);
  document.getElementById('btn-exit-demo')?.addEventListener('click', () => {
    if (confirm('هل ترغب في مسح البيانات النموذجية والبدء بإضافة زبائنك وجلساتك الحقيقية؟')) {
      clients = [];
      sessions = [];
      localStorage.removeItem('adasapro_is_demo');
      saveClients();
      saveSessions();
      renderApp();
      showToast('تم تفريغ بيانات Demo. يمكنك الآن بدء عملك الفعلي!');
    }
  });

  // Mobile Metrics accordion toggle
  document.getElementById('toggle-more-metrics-btn')?.addEventListener('click', toggleMobileMetrics);

  document.getElementById('see-all-sessions-btn')?.addEventListener('click', () => {
    document.querySelector('.nav-item[data-tab="tab-sessions"]')?.click();
  });
  document.getElementById('see-all-payments-btn')?.addEventListener('click', () => {
    document.querySelector('.nav-item[data-tab="tab-finances"]')?.click();
    document.getElementById('payments-history-section')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Contract Generator listeners
  document.getElementById('open-contract-modal-btn')?.addEventListener('click', () => openContractModal());
  document.getElementById('close-contract-modal-btn')?.addEventListener('click', closeContractModal);
  document.getElementById('contract-total-price')?.addEventListener('input', updateContractLiveCalculations);
  document.getElementById('contract-deposit-price')?.addEventListener('input', updateContractLiveCalculations);

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('show');
    });
  });
}

function fillFullRemaining(amount) {
  playClickSound();
  const input = document.getElementById('pay-amount-input');
  if (input) {
    input.value = amount;
    validatePaymentAmountLive();
  }
}

function openRecordPaymentForClient(clientId) {
  playClickSound();
  const clientSessions = getSessionsForClient(clientId);
  const unpaidSession = clientSessions.find(s => calculateSessionFinance(s).remaining > 0) || clientSessions[0];
  if (unpaidSession) {
    openRecordPaymentModal(unpaidSession.id);
  } else {
    alert('هذا الزبون خالص بالكامل وليس عليه أي ديون مسجلة!');
  }
}

// ================= MOBILE ADVANCED UX (GESTURES, FAB, HAPTICS, PWA) =================
function updateMobileFAB(tabId) {
  const fab = document.getElementById('mobile-fab');
  const label = document.getElementById('mobile-fab-label');
  if (!fab || !label) return;

  if (tabId === 'tab-dashboard' || tabId === 'tab-sessions') {
    label.textContent = '+ جلسة جديدة';
    fab.onclick = () => { triggerHaptic(12); openAddSessionModal(); };
  } else if (tabId === 'tab-clients') {
    label.textContent = '+ زبون جديد';
    fab.onclick = () => { triggerHaptic(12); openAddClientModal(); };
  } else if (tabId === 'tab-finances') {
    label.textContent = '+ تسجيل دفعة';
    fab.onclick = () => { triggerHaptic(12); openRecordPaymentModal(); };
  } else if (tabId === 'tab-gear') {
    label.textContent = 'تأكيد الحقيبة ✓';
    fab.onclick = () => { triggerHaptic(12); document.getElementById('save-gear-checklist-btn')?.click(); };
  } else {
    label.textContent = '+ جلسة جديدة';
    fab.onclick = () => { triggerHaptic(12); openAddSessionModal(); };
  }
}

function setupModalSwipeToClose() {
  document.querySelectorAll('.modal-sheet').forEach(sheet => {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    sheet.addEventListener('touchstart', (e) => {
      if (e.target.closest('.modal-handle') || e.target.closest('.modal-header')) {
        startY = e.touches[0].clientY;
        isDragging = true;
      }
    }, { passive: true });

    sheet.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      if (deltaY > 0) {
        sheet.style.transform = `translateY(${deltaY}px)`;
      }
    }, { passive: true });

    sheet.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      const deltaY = currentY - startY;
      if (deltaY > 85) {
        const modal = sheet.closest('.modal-backdrop');
        if (modal) {
          modal.classList.remove('show');
          triggerHaptic(8);
        }
      }
      sheet.style.transform = '';
    }, { passive: true });
  });
}

let deferredPWAEvent = null;
function setupPWAInstallBanner() {
  const banner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('btn-pwa-install');
  const dismissBtn = document.getElementById('btn-pwa-dismiss');
  if (!banner || !installBtn || !dismissBtn) return;

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) return;
  if (sessionStorage.getItem('pwa_banner_closed')) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPWAEvent = e;
    banner.style.display = 'flex';
  });

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS && !isStandalone) {
    setTimeout(() => {
      banner.style.display = 'flex';
    }, 2000);
  }

  installBtn.addEventListener('click', async () => {
    triggerHaptic(10);
    if (deferredPWAEvent) {
      deferredPWAEvent.prompt();
      const choice = await deferredPWAEvent.userChoice;
      if (choice.outcome === 'accepted') {
        banner.style.display = 'none';
      }
      deferredPWAEvent = null;
    } else if (isIOS) {
      alert('📲 للتثبيت على آيفون:\n1. اضغط على زر المشاركة (Share ⎋) في أسفل متصفح Safari.\n2. اختر "إضافة إلى الشاشة الرئيسية" (Add to Home Screen).\nستفتح المنصة كتطبيق كامل بأيقونة عدسة برو.');
      banner.style.display = 'none';
      sessionStorage.setItem('pwa_banner_closed', '1');
    } else {
      alert('📲 لتثبيت التطبيق:\nافتح خيارات المتصفح (⋮) واختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".');
      banner.style.display = 'none';
      sessionStorage.setItem('pwa_banner_closed', '1');
    }
  });

  dismissBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    sessionStorage.setItem('pwa_banner_closed', '1');
  });
}

// Global window exposure
window.openAddClientModal = openAddClientModal;
window.openClientProfile = openClientProfile;
window.editClient = editClient;
window.deleteClient = deleteClient;
window.openAddSessionModal = openAddSessionModal;
window.openSessionDetails = openSessionDetails;
window.changeSessionStatus = changeSessionStatus;
window.deleteSession = deleteSession;
window.openRecordPaymentModal = openRecordPaymentModal;
window.deletePayment = deletePayment;
window.sendQuickWhatsAppInvoice = sendQuickWhatsAppInvoice;
window.sendQuickWhatsAppReminder = sendQuickWhatsAppReminder;
window.toggleGear = toggleGear;
window.fillFullRemaining = fillFullRemaining;
window.openRecordPaymentForClient = openRecordPaymentForClient;
window.resetToDemoData = resetToDemoData;
window.clearAllData = clearAllData;
window.openContractModal = openContractModal;
window.closeContractModal = closeContractModal;
window.autoFillContractClient = autoFillContractClient;
window.updateContractLiveCalculations = updateContractLiveCalculations;
window.generateContractDocument = generateContractDocument;
window.backToContractForm = backToContractForm;
window.printContractDocument = printContractDocument;
window.copyContractText = copyContractText;
window.shareContractWhatsApp = shareContractWhatsApp;
window.handleContractServiceTypeChange = handleContractServiceTypeChange;
window.handleContractWorkTypeChange = handleContractWorkTypeChange;
window.addToGoogleCalendar = addToGoogleCalendar;
window.downloadIcsCalendar = downloadIcsCalendar;
window.toggleMobileMetrics = toggleMobileMetrics;
window.dismissBackupReminder = dismissBackupReminder;
window.checkBackupReminder = checkBackupReminder;
window.checkOnboardingState = checkOnboardingState;

document.addEventListener('DOMContentLoaded', initApp);
