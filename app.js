/**
 * عدسة برو | AdasaPro
 * نظام إدارة الزبائن، الجلسات، والحسابات للمصورين
 * تم التصميم وفق معايير UI/UX الاحترافية (Minimalist Studio Aesthetic, Libyan Dinar)
 */

// ================= STORAGE KEYS =================
const STORAGE_KEY_CLIENTS = 'adasapro_clients_v4';
const STORAGE_KEY_SESSIONS = 'adasapro_sessions_v4';
const STORAGE_KEY_GEAR = 'adasapro_gear_v4';
const STORAGE_KEY_STUDIO = 'adasapro_studio_profile_v1';
const STORAGE_KEY_CONTRACTS = 'adasapro_saved_contracts_v1';
const CURRENCY_LABEL = 'د.ل';
const APP_VERSION = 'v2.6 (تحديث #26)';
const APP_BUILD_NUM = '26';

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
let savedContracts = [];
let currentFilter = 'all';
let currentClientFilter = 'all';
let searchQuery = '';

const DEFAULT_STUDIO_PROFILE = {
  studioName: 'عدسة برو للتصوير والإنتاج المرئي',
  photogName: '',
  phone: '',
  city: 'طرابلس - ليبيا',
  paymentNotes: 'سداد: 091XXXXXXX | مصرف التجارة والتنمية: XXXXXX',
  social: '@adasapro_studio',
  logo: ''
};

let studioProfile = { ...DEFAULT_STUDIO_PROFILE };

function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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

// ================= MODAL SCROLL LOCK ENGINE =================
let savedBodyScrollY = 0;
let isBodyScrollLocked = false;

function setBodyScrollLocked(lock) {
  if (lock) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
}

function checkAnyModalOpen() {
  const openModal = document.querySelector('.modal-backdrop.show');
  setBodyScrollLocked(!!openModal);
}

function initModalScrollLock() {
  const modals = document.querySelectorAll('.modal-backdrop');
  if ('MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      checkAnyModalOpen();
    });
    modals.forEach(m => {
      observer.observe(m, { attributes: true, attributeFilter: ['class'] });
    });
  }

  // Prevent touchmove on backdrop from scrolling background
  modals.forEach(modal => {
    modal.addEventListener('touchmove', (e) => {
      if (e.target === modal) {
        e.preventDefault();
      }
    }, { passive: false });
  });

  // ESC key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal-backdrop.show');
      if (openModals.length > 0) {
        openModals[openModals.length - 1].classList.remove('show');
        checkAnyModalOpen();
      }
    }
  });
}

// ================= INITIALIZATION =================
function initApp() {
  initTheme();
  requestPersistentStorage();
  loadData();
  loadStudioProfile();
  renderStudioProfile();
  setupEventListeners();
  setupNumberInputsAutoClear();
  setupPhoneInputsValidation();
  setupModalSwipeToClose();
  initModalScrollLock();
  syncVersionBadges();
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

    const storedContracts = localStorage.getItem(STORAGE_KEY_CONTRACTS);
    if (storedContracts) {
      savedContracts = JSON.parse(storedContracts);
    } else {
      savedContracts = [];
    }
  } catch (err) {
    console.error('Error loading state', err);
    clients = [...DEFAULT_CLIENTS];
    sessions = [...DEFAULT_SESSIONS];
    gearList = JSON.parse(JSON.stringify(DEFAULT_GEAR));
    savedContracts = [];
  }
  updateContractsArchiveCountBadge();
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

function saveContracts() {
  localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(savedContracts));
  updateContractsArchiveCountBadge();
}

function updateContractsArchiveCountBadge() {
  const count = (savedContracts || []).length;
  const text = `${count} ${count === 1 ? 'عقد' : count === 2 ? 'عقدان' : count >= 3 && count <= 10 ? 'عقود' : 'عقد'}`;
  const badge = document.getElementById('contracts-archive-count-badge');
  if (badge) {
    badge.textContent = text;
  }
  const toolkitBadge = document.getElementById('toolkit-contracts-count-badge');
  if (toolkitBadge) {
    toolkitBadge.textContent = text;
  }
}

function syncVersionBadges() {
  const sidebarBadge = document.getElementById('sidebar-version-badge');
  if (sidebarBadge) sidebarBadge.textContent = `#${APP_BUILD_NUM}`;
  const mobileBadge = document.getElementById('mobile-version-badge');
  if (mobileBadge) mobileBadge.textContent = `#${APP_BUILD_NUM}`;
}

// ================= STUDIO BRANDING & PROFILE ENGINE =================
function loadStudioProfile() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_STUDIO);
    if (stored) {
      const parsed = JSON.parse(stored);
      studioProfile = { ...DEFAULT_STUDIO_PROFILE, ...parsed };
      // Clear any legacy default name from local storage
      const legacyDefaultName = '\u0623\u0646\u0633 \u0627\u0644\u0623\u062d\u0648\u0644';
      if (studioProfile.photogName === legacyDefaultName) {
        studioProfile.photogName = '';
        saveStudioProfile();
      }
    } else {
      studioProfile = { ...DEFAULT_STUDIO_PROFILE };
    }
  } catch (e) {
    studioProfile = { ...DEFAULT_STUDIO_PROFILE };
  }
  if (typeof window !== 'undefined') window.studioProfile = studioProfile;
}

function saveStudioProfile() {
  try {
    localStorage.setItem(STORAGE_KEY_STUDIO, JSON.stringify(studioProfile));
  } catch (e) {}
}

function renderStudioProfile() {
  const nameEl = document.getElementById('sidebar-studio-name');
  const photogEl = document.getElementById('sidebar-photog-name');
  const avatarImg = document.getElementById('sidebar-avatar-img');
  const avatarText = document.getElementById('sidebar-avatar-text');

  if (nameEl) nameEl.textContent = studioProfile.studioName || 'عدسة برو';
  if (photogEl) photogEl.textContent = studioProfile.photogName ? `${studioProfile.photogName} (المصور)` : 'المصور المحترف';

  if (avatarImg && avatarText) {
    if (studioProfile.logo) {
      avatarImg.src = studioProfile.logo;
      avatarImg.style.display = 'block';
      avatarText.style.display = 'none';
    } else {
      avatarImg.style.display = 'none';
      avatarText.style.display = 'block';
      const initials = (studioProfile.studioName || 'AP').trim().slice(0, 2);
      avatarText.textContent = initials;
    }
  }

  // Update Mobile Header & Dashboard Studio Quick Banner
  const mobName = document.getElementById('mobile-studio-name-display');
  const mobSub = document.getElementById('mobile-studio-sub-display');
  const mobAvatar = document.getElementById('mobile-studio-avatar');

  if (mobName) mobName.textContent = studioProfile.studioName || 'عدسة برو للإنتاج';
  if (mobSub) mobSub.textContent = studioProfile.photogName ? `${studioProfile.photogName} • انقر لتعديل الهوية` : 'انقر لتخصيص شعار واسم استوديوك 🎨';
  if (mobAvatar) {
    if (studioProfile.logo) {
      mobAvatar.innerHTML = `<img src="${studioProfile.logo}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">`;
    } else {
      mobAvatar.innerHTML = '📷';
    }
  }
}

function openStudioSettingsModal() {
  playClickSound();
  loadStudioProfile();

  const nameInput = document.getElementById('studio-name-input');
  const photogInput = document.getElementById('studio-photog-name-input');
  const phoneInput = document.getElementById('studio-phone-input');
  const cityInput = document.getElementById('studio-city-input');
  const paymentInput = document.getElementById('studio-payment-info-input');
  const socialInput = document.getElementById('studio-social-input');

  if (nameInput) nameInput.value = studioProfile.studioName || '';
  if (photogInput) photogInput.value = studioProfile.photogName || '';
  if (phoneInput) phoneInput.value = studioProfile.phone || '';
  if (cityInput) cityInput.value = studioProfile.city || '';
  if (paymentInput) paymentInput.value = studioProfile.paymentNotes || '';
  if (socialInput) socialInput.value = studioProfile.social || '';

  const imgEl = document.getElementById('studio-logo-preview-img');
  const phEl = document.getElementById('studio-logo-preview-placeholder');
  const removeBtn = document.getElementById('btn-remove-logo');

  if (studioProfile.logo) {
    if (imgEl) { imgEl.src = studioProfile.logo; imgEl.style.display = 'block'; }
    if (phEl) phEl.style.display = 'none';
    if (removeBtn) removeBtn.style.display = 'inline-block';
  } else {
    if (imgEl) { imgEl.src = ''; imgEl.style.display = 'none'; }
    if (phEl) phEl.style.display = 'flex';
    if (removeBtn) removeBtn.style.display = 'none';
  }

  document.getElementById('studio-settings-modal')?.classList.add('show');
}

function closeStudioSettingsModal() {
  document.getElementById('studio-settings-modal')?.classList.remove('show');
}

function handleStudioLogoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert('⚠️ حجم صورة الشعار يجب ألا يتجاوز 2 ميجابايت.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    studioProfile.logo = base64;

    const imgEl = document.getElementById('studio-logo-preview-img');
    const phEl = document.getElementById('studio-logo-preview-placeholder');
    const removeBtn = document.getElementById('btn-remove-logo');

    if (imgEl) { imgEl.src = base64; imgEl.style.display = 'block'; }
    if (phEl) phEl.style.display = 'none';
    if (removeBtn) removeBtn.style.display = 'inline-block';
  };
  reader.readAsDataURL(file);
}

function removeStudioLogo() {
  studioProfile.logo = '';
  const imgEl = document.getElementById('studio-logo-preview-img');
  const phEl = document.getElementById('studio-logo-preview-placeholder');
  const removeBtn = document.getElementById('btn-remove-logo');
  const fileInput = document.getElementById('studio-logo-input');

  if (imgEl) { imgEl.src = ''; imgEl.style.display = 'none'; }
  if (phEl) phEl.style.display = 'flex';
  if (removeBtn) removeBtn.style.display = 'none';
  if (fileInput) fileInput.value = '';
}

function handleSaveStudioProfile(event) {
  if (event) event.preventDefault();
  playClickSound();

  const nameInput = document.getElementById('studio-name-input');
  const photogInput = document.getElementById('studio-photog-name-input');
  const phoneInput = document.getElementById('studio-phone-input');
  const cityInput = document.getElementById('studio-city-input');
  const paymentInput = document.getElementById('studio-payment-info-input');
  const socialInput = document.getElementById('studio-social-input');

  studioProfile.studioName = nameInput ? nameInput.value.trim() : studioProfile.studioName;
  studioProfile.photogName = photogInput ? photogInput.value.trim() : studioProfile.photogName;
  studioProfile.phone = phoneInput ? phoneInput.value.trim() : studioProfile.phone;
  studioProfile.city = cityInput ? cityInput.value.trim() : studioProfile.city;
  studioProfile.paymentNotes = paymentInput ? paymentInput.value.trim() : studioProfile.paymentNotes;
  studioProfile.social = socialInput ? socialInput.value.trim() : studioProfile.social;

  if (studioProfile.photogName) localStorage.setItem('adasapro_my_name', studioProfile.photogName);
  if (studioProfile.phone) localStorage.setItem('adasapro_my_phone', studioProfile.phone);

  saveStudioProfile();
  renderStudioProfile();
  closeStudioSettingsModal();
  showToast('تم حفظ وتطبيق هوية الاستوديو بنجاح 🎨✓');
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

let currentFinancePeriod = 'all';

function isDateInFinancePeriod(dateStr, period) {
  if (period === 'all' || !dateStr) return true;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return true;
  const now = new Date();
  const curY = now.getFullYear();
  const curM = now.getMonth();
  if (period === 'this_month') {
    return d.getFullYear() === curY && d.getMonth() === curM;
  }
  if (period === 'last_month') {
    const prevY = curM === 0 ? curY - 1 : curY;
    const prevM = curM === 0 ? 11 : curM - 1;
    return d.getFullYear() === prevY && d.getMonth() === prevM;
  }
  return true;
}

function calculateOverallFinancials(period = 'all') {
  let grandTotal = 0, totalCollected = 0, totalRemaining = 0, totalAssistants = 0, totalExpenses = 0, unpaidCount = 0;

  const targetSessions = (period === 'all') 
    ? sessions 
    : sessions.filter(s => isDateInFinancePeriod(s.date, period));

  targetSessions.forEach(s => {
    const f = calculateSessionFinance(s);
    grandTotal += f.total;
    totalCollected += f.paid;
    totalRemaining += f.remaining;
    totalAssistants += f.assistantsCost;
    totalExpenses += f.extraExpenses;
    if (f.remaining > 0) unpaidCount++;
  });

  const grandNetProfit = grandTotal - (totalAssistants + totalExpenses);
  return { grandTotal, totalCollected, totalRemaining, totalAssistants, totalExpenses, grandNetProfit, unpaidCount, sessionsCount: targetSessions.length };
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
            <button type="button" class="btn-whatsapp-sm" onclick="openWhatsAppChat('${c.phone}')" title="مراسلة واتساب">واتساب</button>
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
      <div style="text-align: center; padding: 3rem 1.5rem; color: var(--text-secondary); background: var(--bg-subtle); border-radius: 16px; border: 1px dashed var(--border-subtle);">
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
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-secondary); background: var(--bg-subtle); border-radius: 16px; border: 1px dashed var(--border-subtle);">
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
      <div style="text-align: center; padding: 1.5rem 1rem; color: var(--text-secondary); background: var(--bg-subtle); border-radius: 16px; border: 1px dashed var(--border-subtle); font-size: 0.82rem;">
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
      <div class="pay-card-amount-box" style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem;">
        <span class="pay-card-amount">+${p.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
        <div style="display: flex; gap: 0.35rem; align-items: center;">
          <span class="pay-method-badge">${p.method}</span>
          <button type="button" class="btn-xs-pill" onclick="event.stopPropagation(); openPaymentReceipt('${p.sessionId}', '${p.paymentId}')" title="عرض وسحب سند قبض رسمي" style="background: var(--bg-card); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.72rem; padding: 0.15rem 0.5rem; border-radius: 4px; cursor: pointer;">🧾 وصل</button>
        </div>
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

      ${(session.targetVideos > 0 || session.targetPhotos > 0 || session.deliverablesType) ? `
        <div class="session-deliverables-pill" style="display: flex; gap: 0.45rem; align-items: center; margin: 0.35rem 0 0.5rem 0; font-size: 0.72rem; background: var(--bg-subtle); padding: 0.25rem 0.65rem; border-radius: 6px; border: 1px dashed var(--border-subtle); flex-wrap: wrap;">
          ${(session.deliverablesType === 'videos' || session.deliverablesType === 'both' || (!session.deliverablesType && session.targetVideos > 0)) ? `
            <span style="font-weight: 700; color: #0284C7;">🎬 فيديو: <b>${session.completedVideos || 0}/${session.targetVideos || 0}</b></span>
          ` : ''}
          ${(session.deliverablesType === 'photos' || session.deliverablesType === 'both' || (!session.deliverablesType && session.targetPhotos > 0)) ? `
            <span style="font-weight: 700; color: #10B981;">📷 صور: <b>${session.completedPhotos || 0}/${session.targetPhotos || 0}</b></span>
          ` : ''}
          ${(session.targetVideos > 0 || session.targetPhotos > 0) ? `
            <span style="margin-right: auto; font-size: 0.7rem; color: var(--text-muted); font-weight: 600;">
              الإنجاز: ${Math.min(100, Math.round((((session.completedVideos || 0) + (session.completedPhotos || 0)) / Math.max(1, (session.targetVideos || 0) + (session.targetPhotos || 0))) * 100))}%
            </span>
          ` : ''}
        </div>
      ` : ''}

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
          <button class="btn-whatsapp-sm" onclick="sendWhatsAppAppointmentReminder('${session.id}')" title="إرسال رسالة تذكير أنيقة بموعد ومكان الجلسة عبر الواتساب">📲 تذكير بالموعد</button>
          <button class="btn-whatsapp-sm" style="background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-subtle);" onclick="sendQuickWhatsAppInvoice('${session.id}')">فاتورة واتساب</button>
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
          <button class="btn-secondary-sm" onclick="editSession('${session.id}')" title="تعديل بيانات الجلسة">✏️ تعديل</button>
          <button class="btn-details-sm" onclick="openSessionDetails('${session.id}')">التفاصيل ←</button>
        </div>
      </div>
    </div>
  `;
}

// Render Finances Tab
function renderFinancesTab() {
  const fin = calculateOverallFinancials(currentFinancePeriod);
  document.getElementById('fin-grand-total').textContent = fin.grandTotal.toLocaleString('en-US');
  document.getElementById('fin-total-collected').textContent = fin.totalCollected.toLocaleString('en-US');
  document.getElementById('fin-total-remaining').textContent = fin.totalRemaining.toLocaleString('en-US');
  document.getElementById('fin-assistants-total').textContent = fin.totalAssistants.toLocaleString('en-US');
  document.getElementById('fin-expenses-total').textContent = fin.totalExpenses.toLocaleString('en-US');
  document.getElementById('fin-net-profit-total').textContent = fin.grandNetProfit.toLocaleString('en-US');

  const periodLabelEl = document.getElementById('finance-period-label');
  if (periodLabelEl) {
    if (currentFinancePeriod === 'this_month') {
      const now = new Date();
      const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      periodLabelEl.textContent = `شهر ${monthNames[now.getMonth()]} ${now.getFullYear()} (${fin.sessionsCount} جلسات)`;
    } else if (currentFinancePeriod === 'last_month') {
      const now = new Date();
      const prevM = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
      const prevY = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
      const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      periodLabelEl.textContent = `شهر ${monthNames[prevM]} ${prevY} (${fin.sessionsCount} جلسات)`;
    } else {
      periodLabelEl.textContent = `كافة العمليات المسجلة (${fin.sessionsCount} جلسات)`;
    }
  }

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
      <div class="pay-card-amount-box" style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem;">
        <span class="pay-card-amount">+${p.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
        <div style="display: flex; gap: 0.35rem; align-items: center;">
          <span class="pay-method-badge">${p.method}</span>
          <button type="button" class="btn-xs-pill" onclick="event.stopPropagation(); openPaymentReceipt('${p.sessionId}', '${p.paymentId}')" title="عرض وسحب سند قبض رسمي" style="background: var(--bg-card); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.72rem; padding: 0.15rem 0.5rem; border-radius: 4px; cursor: pointer;">🧾 وصل</button>
        </div>
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
          <button type="button" class="btn-whatsapp-sm" onclick="openWhatsAppChat('${client.phone}')" title="مراسلة واتساب">واتساب</button>
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
      <button class="btn-primary" style="flex: 1; min-width: 130px;" onclick="closeClientProfile(); openContractModal('${client.id}')">
        <span>📜 إنشاء عقد عمل</span>
      </button>
      <button class="btn-secondary" style="flex: 1; min-width: 130px;" onclick="openClientStatement('${client.id}')">
        <span>📄 كشف حساب رسمي</span>
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
  const errBox = document.getElementById('client-form-error');
  if (errBox) errBox.style.display = 'none';
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

  const errBox = document.getElementById('client-form-error');
  const errText = document.getElementById('client-form-error-msg');
  if (errBox) errBox.style.display = 'none';

  if (!name || !phone) {
    const msg = 'يرجى إدخال اسم الزبون ورقم الهاتف.';
    if (errBox && errText) {
      errText.textContent = msg;
      errBox.style.display = 'block';
    }
    alert(msg);
    return;
  }

  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (cleanPhone.length < 9 || cleanPhone.length > 10) {
    const msg = '⚠️ رقم الهاتف غير صحيح: يجب أن يتكون من 9 إلى 10 أرقام فقط (مثال: 091XXXXXXX أو 092XXXXXXX).';
    if (errBox && errText) {
      errText.textContent = msg;
      errBox.style.display = 'block';
    }
    alert(msg);
    const pInput = document.getElementById('form-c-phone');
    if (pInput) { pInput.focus(); pInput.select(); }
    return;
  }

  // Duplicate Prevention: Check if another client has the same clean phone or normalized name
  const normName = name.toLowerCase().trim();
  const duplicate = clients.find(c => {
    if (c.id === id) return false;
    const cPhone = (c.phone || '').replace(/[^0-9]/g, '');
    const cName = (c.name || '').toLowerCase().trim();
    return (cPhone && cPhone === cleanPhone) || (cName && cName === normName);
  });

  if (duplicate) {
    const isSamePhone = (duplicate.phone || '').replace(/[^0-9]/g, '') === cleanPhone;
    let msg = '';
    if (isSamePhone) {
      msg = `⚠️ لا يمكن التكرار: يوجد زبون مسجل مسبقاً بنفس رقم الهاتف!\nالزبون المسجل: "${duplicate.name}" (${duplicate.phone}).`;
      const pInput = document.getElementById('form-c-phone');
      if (pInput) { pInput.focus(); pInput.select(); }
    } else {
      msg = `⚠️ لا يمكن التكرار: يوجد زبون مسجل مسبقاً بنفس الاسم ("${duplicate.name}") ورقم هاتفه (${duplicate.phone})!\nيرجى تمييز الاسم أو تعديل ملف الزبون الحالي لتفادي تداخل الحسابات.`;
      const nInput = document.getElementById('form-c-name');
      if (nInput) { nInput.focus(); nInput.select(); }
    }
    if (errBox && errText) {
      errText.innerHTML = msg.replace(/\n/g, '<br>');
      errBox.style.display = 'block';
    }
    alert(msg);
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

  const typeSelect = document.getElementById('form-session-type');
  if (typeSelect) typeSelect.value = 'تصوير ريلز';
  const customGroup = document.getElementById('form-session-custom-type-group');
  if (customGroup) customGroup.style.display = 'none';
  const customInput = document.getElementById('form-session-custom-type');
  if (customInput) {
    customInput.value = '';
    customInput.required = false;
  }

  document.getElementById('form-total-price').value = '';
  document.getElementById('form-initial-deposit').value = '';
  document.getElementById('form-assistants-cost').value = '';
  document.getElementById('form-extra-expenses').value = '';

  const deliverablesSelect = document.getElementById('form-deliverables-type');
  if (deliverablesSelect) deliverablesSelect.value = 'both';
  const targetVideosInput = document.getElementById('form-target-videos');
  if (targetVideosInput) targetVideosInput.value = '4';
  const targetPhotosInput = document.getElementById('form-target-photos');
  if (targetPhotosInput) targetPhotosInput.value = '30';
  const completedVideosInput = document.getElementById('form-completed-videos');
  if (completedVideosInput) completedVideosInput.value = '0';
  const completedPhotosInput = document.getElementById('form-completed-photos');
  if (completedPhotosInput) completedPhotosInput.value = '0';
  handleSessionDeliverablesTypeChange('both');
  updateSessionLiveProgress();

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

function handleSessionTypeChange() {
  const typeSelect = document.getElementById('form-session-type');
  const customGroup = document.getElementById('form-session-custom-type-group');
  const customInput = document.getElementById('form-session-custom-type');
  if (!typeSelect || !customGroup) return;

  if (typeSelect.value === 'أخرى') {
    customGroup.style.display = 'block';
    if (customInput) {
      customInput.required = true;
      setTimeout(() => customInput.focus(), 50);
    }
  } else {
    customGroup.style.display = 'none';
    if (customInput) {
      customInput.required = false;
      customInput.value = '';
    }
  }
}

function handleSessionDeliverablesTypeChange(type) {
  const wrapVideos = document.getElementById('wrap-session-target-videos');
  const wrapPhotos = document.getElementById('wrap-session-target-photos');
  const wrapCompVideos = document.getElementById('wrap-session-completed-videos');
  const wrapCompPhotos = document.getElementById('wrap-session-completed-photos');

  if (type === 'videos') {
    if (wrapVideos) wrapVideos.style.display = 'block';
    if (wrapPhotos) wrapPhotos.style.display = 'none';
    if (wrapCompVideos) wrapCompVideos.style.display = 'block';
    if (wrapCompPhotos) wrapCompPhotos.style.display = 'none';
  } else if (type === 'photos') {
    if (wrapVideos) wrapVideos.style.display = 'none';
    if (wrapPhotos) wrapPhotos.style.display = 'block';
    if (wrapCompVideos) wrapCompVideos.style.display = 'none';
    if (wrapCompPhotos) wrapCompPhotos.style.display = 'block';
  } else { // both
    if (wrapVideos) wrapVideos.style.display = 'block';
    if (wrapPhotos) wrapPhotos.style.display = 'block';
    if (wrapCompVideos) wrapCompVideos.style.display = 'block';
    if (wrapCompPhotos) wrapCompPhotos.style.display = 'block';
  }
  updateSessionLiveProgress();
}

function updateSessionLiveProgress() {
  const dType = document.getElementById('form-deliverables-type')?.value || 'both';
  const targetVideos = parseInt(document.getElementById('form-target-videos')?.value) || 0;
  const targetPhotos = parseInt(document.getElementById('form-target-photos')?.value) || 0;
  const completedVideos = parseInt(document.getElementById('form-completed-videos')?.value) || 0;
  const completedPhotos = parseInt(document.getElementById('form-completed-photos')?.value) || 0;

  let totalTarget = 0;
  let totalDone = 0;

  if (dType === 'videos') {
    totalTarget = targetVideos;
    totalDone = completedVideos;
  } else if (dType === 'photos') {
    totalTarget = targetPhotos;
    totalDone = completedPhotos;
  } else {
    totalTarget = targetVideos + targetPhotos;
    totalDone = completedVideos + completedPhotos;
  }

  const pct = totalTarget > 0 ? Math.min(100, Math.round((totalDone / totalTarget) * 100)) : 0;
  const badge = document.getElementById('session-live-progress-badge');
  if (badge) {
    if (pct >= 100 && totalTarget > 0) {
      badge.textContent = `100% مكتمل بالكامل ✓`;
      badge.style.background = 'rgba(16, 185, 129, 0.2)';
      badge.style.color = '#10B981';
    } else {
      badge.textContent = `${pct}% مكتمل`;
      badge.style.background = 'rgba(2, 132, 199, 0.15)';
      badge.style.color = '#0284C7';
    }
  }
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
  let sessionType = document.getElementById('form-session-type').value;

  if (sessionType === 'أخرى') {
    const customVal = document.getElementById('form-session-custom-type')?.value?.trim();
    if (!customVal) {
      alert('يرجى كتابة نوع الجلسة المخصص في الخانة المخصصة.');
      const cInput = document.getElementById('form-session-custom-type');
      if (cInput) { cInput.focus(); }
      return;
    }
    sessionType = customVal;
  }
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

  const deliverablesType = document.getElementById('form-deliverables-type')?.value || 'both';
  const targetVideos = parseInt(document.getElementById('form-target-videos')?.value) || 0;
  const targetPhotos = parseInt(document.getElementById('form-target-photos')?.value) || 0;
  const completedVideos = parseInt(document.getElementById('form-completed-videos')?.value) || 0;
  const completedPhotos = parseInt(document.getElementById('form-completed-photos')?.value) || 0;

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
    notes,
    deliverablesType,
    targetVideos,
    targetPhotos,
    completedVideos,
    completedPhotos
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
      <select onchange="changeSessionStatus('${session.id}', this.value)" style="background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-full); padding: 0.38rem 0.85rem; font-size: 0.78rem; font-weight: 700;">
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
      ${session.driveLink ? `
        <div style="margin-top: 0.65rem; padding-top: 0.65rem; border-top: 1px dashed var(--border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <a href="${session.driveLink}" target="_blank" class="btn-secondary-sm" style="display: inline-flex; align-items: center; gap: 0.3rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            <span>فتح رابط الصور (Cloud)</span>
          </a>
          <button type="button" class="btn-whatsapp-sm" onclick="shareDriveDeliveryWhatsApp('${session.id}')" title="إرسال رابط الصور للزبون في رسالة واتساب جاهزة">
            <span>📤 إرسال الصور للزبون بالواتساب</span>
          </button>
        </div>
      ` : ''}
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

    <!-- Deliverables & Progress Management Card -->
    <div class="session-deliverables-mgmt-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.45rem;">
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <span style="font-size: 1.1rem;">📦</span>
          <strong style="font-size: 0.86rem; color: var(--text-main); font-weight: 800;">مخرجات الجلسة وإدارة المحتوى</strong>
        </div>
        <span class="pill-badge pill-purple" style="font-size: 0.68rem;">تحكم فوري</span>
      </div>

      <!-- Videos Counter Row -->
      <div class="deliverable-counter-row">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 700; color: #0284C7; font-size: 0.84rem; display: flex; align-items: center; gap: 0.3rem;">
            🎬 الفيديوهات المطلوبة (ريلز / مونتاج)
          </span>
          <span style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 0.15rem;">
            المنجز: <b style="color: var(--text-main); font-family: var(--font-num);">${session.completedVideos || 0}</b> من أصل <b style="color: #0284C7; font-family: var(--font-num);">${session.targetVideos || 0}</b>
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <div class="deliverable-stepper" title="تعديل إجمالي الفيديوهات المطلوبة">
            <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 0.2rem;">المطلوب:</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'targetVideos', -1)">-</button>
            <span class="stepper-num" onclick="promptSetSessionDeliverable('${session.id}', 'targetVideos', 'إجمالي الفيديوهات المطلوبة')" title="اضغط لكتابة الرقم مباشرة">${session.targetVideos || 0}</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'targetVideos', 1)">+</button>
          </div>
          <div class="deliverable-stepper" style="background: rgba(2, 132, 199, 0.08); border-color: rgba(2, 132, 199, 0.25);" title="تعديل عدد الفيديوهات المنجزة والمصورة">
            <span style="font-size: 0.68rem; color: #0284C7; margin-left: 0.2rem;">أنجزت:</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'completedVideos', -1)">-</button>
            <span class="stepper-num" style="color: #0284C7;" onclick="promptSetSessionDeliverable('${session.id}', 'completedVideos', 'عدد الفيديوهات المنجزة')" title="اضغط لكتابة الرقم مباشرة">${session.completedVideos || 0}</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'completedVideos', 1)">+</button>
          </div>
        </div>
      </div>

      <!-- Photos Counter Row -->
      <div class="deliverable-counter-row">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 700; color: #10B981; font-size: 0.84rem; display: flex; align-items: center; gap: 0.3rem;">
            📷 الصور الفوتوغرافية المعدلة
          </span>
          <span style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 0.15rem;">
            المنجز: <b style="color: var(--text-main); font-family: var(--font-num);">${session.completedPhotos || 0}</b> من أصل <b style="color: #10B981; font-family: var(--font-num);">${session.targetPhotos || 0}</b>
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <div class="deliverable-stepper" title="تعديل إجمالي الصور المطلوبة">
            <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 0.2rem;">المطلوب:</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'targetPhotos', -5)">-</button>
            <span class="stepper-num" onclick="promptSetSessionDeliverable('${session.id}', 'targetPhotos', 'إجمالي الصور المطلوبة')" title="اضغط لكتابة الرقم مباشرة">${session.targetPhotos || 0}</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'targetPhotos', 5)">+</button>
          </div>
          <div class="deliverable-stepper" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25);" title="تعديل عدد الصور المنجزة والمعدلة">
            <span style="font-size: 0.68rem; color: #10B981; margin-left: 0.2rem;">أنجزت:</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'completedPhotos', -5)">-</button>
            <span class="stepper-num" style="color: #10B981;" onclick="promptSetSessionDeliverable('${session.id}', 'completedPhotos', 'عدد الصور المنجزة')" title="اضغط لكتابة الرقم مباشرة">${session.completedPhotos || 0}</span>
            <button type="button" class="btn-stepper" onclick="adjustSessionDeliverable('${session.id}', 'completedPhotos', 5)">+</button>
          </div>
        </div>
      </div>

      <!-- Extra Videos Feature (فيديوهات إضافية خارج الاتفاق) -->
      <div style="margin-top: 0.75rem; padding-top: 0.65rem; border-top: 1px dashed var(--border-subtle);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <strong style="font-size: 0.78rem; color: var(--text-main); display: flex; align-items: center; gap: 0.3rem;">
              <span>✨ فيديوهات إضافية خارج الاتفاق</span>
              ${(session.extraVideos && session.extraVideos.length > 0) ? `<span class="pill-badge pill-purple" style="font-size: 0.65rem;">+${session.extraVideos.reduce((acc, x) => acc + (x.count || 0), 0)} فيديو إضافي</span>` : ''}
            </strong>
            <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">طلب ريلز أو فيديوهات غير محسوبة مسبقاً مع احتساب سعرها الإضافي</span>
          </div>
          <button type="button" class="btn-primary-sm" onclick="promptAddExtraVideos('${session.id}')" style="font-size: 0.74rem; padding: 0.35rem 0.75rem; background: linear-gradient(135deg, #8B5CF6, #6D28D9);">
            ➕ إضافة فيديوهات إضافية
          </button>
        </div>

        ${(session.extraVideos && session.extraVideos.length > 0) ? `
          <div style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.35rem;">
            ${session.extraVideos.map(ext => `
              <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(139, 92, 246, 0.07); border: 1px solid rgba(139, 92, 246, 0.2); padding: 0.35rem 0.65rem; border-radius: 6px; font-size: 0.74rem;">
                <span>🎬 <b>${ext.count} فيديو إضافي</b> ${ext.pricePerVideo > 0 ? `(بسعر ${ext.pricePerVideo.toLocaleString()} د.ل = <b>${ext.totalPrice.toLocaleString()} د.ل</b>)` : '(مجاني/هدية)'}</span>
                <button type="button" onclick="removeExtraVideos('${session.id}', '${ext.id}')" style="background: none; border: none; color: var(--color-danger); cursor: pointer; font-size: 0.85rem;" title="حذف">✕</button>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>

    <div class="session-finance-pill" style="margin-bottom: 1rem;">
      <div class="s-fin-item"><span class="s-fin-label">السعر الكلي</span><span class="s-fin-val val-total">${fin.total.toLocaleString()} ${CURRENCY_LABEL}</span></div>
      <div class="s-fin-item"><span class="s-fin-label">المدفوع</span><span class="s-fin-val val-paid">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span></div>
      <div class="s-fin-item"><span class="s-fin-label">المتبقي المطلوب</span><span class="s-fin-val ${fin.remaining > 0 ? 'val-remaining' : 'val-paid'}">${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}</span></div>
    </div>

    <div style="background: var(--bg-card); border-radius: var(--radius-md); padding: 1rem; border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
        <strong style="font-size: 0.84rem; color: var(--text-main); font-weight: 800;">سجل الدفعات المستلمة:</strong>
        ${fin.remaining > 0 ? `
          <button class="btn-primary-sm" style="font-size: 0.72rem; padding: 0.25rem 0.75rem;" onclick="openRecordPaymentModal('${session.id}')">+ إضافة دفعة</button>
        ` : `<span class="pill-badge badge-success-soft">مسدد بالكامل ✓</span>`}
      </div>

      ${(!session.payments || session.payments.length === 0) ? `<p style="font-size: 0.76rem; color: var(--text-secondary);">لا توجد دفعات مسجلة.</p>` : session.payments.map(p => `
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; padding: 0.45rem 0; border-bottom: 1px solid var(--border-subtle);">
          <div>
            <strong style="color: var(--text-main);">${p.note}</strong>
            <span style="display: block; font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.1rem;">تاريخ: ${p.date} • ${p.method}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            <span style="font-family: var(--font-num); color: var(--badge-green-text); font-weight: 800; font-size: 0.95rem;">+${p.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
            <button type="button" class="btn-xs-pill" onclick="openPaymentReceipt('${session.id}', '${p.id}')" title="عرض وسحب سند استلام دفعة رسمي" style="background: var(--bg-card); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.72rem; padding: 0.2rem 0.5rem; border-radius: 4px; cursor: pointer;">🧾 سند قبض</button>
            <button onclick="deletePayment('${session.id}', '${p.id}')" style="background: none; border: none; color: var(--color-danger); cursor: pointer; font-size: 0.9rem;" title="حذف">✕</button>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="session-card-actions" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
      <button class="btn-whatsapp-sm" style="flex: 1; min-width: 130px;" onclick="sendWhatsAppAppointmentReminder('${session.id}')" title="إرسال تذكير بالموعد والتفاصيل للزبون بالواتساب">📲 تذكير بالموعد</button>
      <button class="btn-secondary-sm" style="flex: 1; min-width: 110px;" onclick="editSession('${session.id}')" title="تعديل بيانات وأرقام الجلسة">✏️ تعديل الجلسة</button>
      <button class="btn-whatsapp-sm" style="flex: 1; min-width: 110px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-subtle);" onclick="sendQuickWhatsAppInvoice('${session.id}')">فاتورة واتساب</button>
      <button class="btn-cancel" style="color: var(--color-danger); border-color: var(--badge-red-bg); padding: 0.4rem 0.8rem;" onclick="deleteSession('${session.id}')">حذف الجلسة</button>
    </div>
  `;

  modal.classList.add('show');
}

function closeDetailsModal() {
  document.getElementById('details-modal').classList.remove('show');
}

function adjustSessionDeliverable(sessionId, field, delta) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const current = parseInt(session[field]) || 0;
  const nextVal = Math.max(0, current + delta);
  session[field] = nextVal;

  const targetVid = parseInt(session.targetVideos) || 0;
  const targetPho = parseInt(session.targetPhotos) || 0;
  if (targetVid > 0 && targetPho > 0) {
    session.deliverablesType = 'both';
  } else if (targetVid > 0) {
    session.deliverablesType = 'videos';
  } else if (targetPho > 0) {
    session.deliverablesType = 'photos';
  }

  saveSessions();
  renderApp();
  openSessionDetails(sessionId);
  triggerHaptic(5);
}

function promptSetSessionDeliverable(sessionId, field, label) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const current = session[field] !== undefined ? session[field] : 0;
  const input = prompt(`أدخل ${label}:`, current);
  if (input === null) return;

  const val = parseInt(input.trim());
  if (isNaN(val) || val < 0) {
    showToast('يرجى إدخال رقم صحيح');
    return;
  }

  session[field] = val;
  const targetVid = parseInt(session.targetVideos) || 0;
  const targetPho = parseInt(session.targetPhotos) || 0;
  if (targetVid > 0 && targetPho > 0) {
    session.deliverablesType = 'both';
  } else if (targetVid > 0) {
    session.deliverablesType = 'videos';
  } else if (targetPho > 0) {
    session.deliverablesType = 'photos';
  }

  saveSessions();
  renderApp();
  openSessionDetails(sessionId);
  showToast(`تم تحديث ${label} إلى ${val}`);
}

function promptAddExtraVideos(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const countStr = prompt('كم عدد الفيديوهات الإضافية المطلوب إضافتها للجلسة؟', '1');
  if (countStr === null) return;
  const count = parseInt(countStr.trim());
  if (isNaN(count) || count <= 0) {
    showToast('يرجى إدخال عدد فيديوهات صحيح');
    return;
  }

  const priceStr = prompt('سعر الفيديو الإضافي الواحد (بالدينار الليبي د.ل)؟\n(اكتب 0 إذا كانت الفيديوهات مجانية أو كهدية للزبون)', '200');
  if (priceStr === null) return;
  const pricePerVideo = Math.max(0, parseFloat(priceStr.trim()) || 0);
  const totalExtraAmount = count * pricePerVideo;

  let addFinance = false;
  if (totalExtraAmount > 0) {
    addFinance = confirm(`هل ترغب في إضافة القيمة المالية (${totalExtraAmount.toLocaleString()} د.ل) إلى إجمالي سعر الجلسة تلقائياً؟\n\nالسعر الحالي: ${session.totalPrice || 0} د.ل ← سيصبح: ${((session.totalPrice || 0) + totalExtraAmount).toLocaleString()} د.ل`);
  }

  if (!session.extraVideos) session.extraVideos = [];
  const extraId = 'ext-' + Date.now();
  session.extraVideos.push({
    id: extraId,
    count: count,
    pricePerVideo: pricePerVideo,
    totalPrice: totalExtraAmount,
    addedFinance: addFinance,
    date: new Date().toISOString().split('T')[0]
  });

  session.targetVideos = (parseInt(session.targetVideos) || 0) + count;
  if (session.deliverablesType === 'photos') {
    session.deliverablesType = 'both';
  } else if (!session.deliverablesType) {
    session.deliverablesType = 'videos';
  }

  if (addFinance) {
    session.totalPrice = (parseFloat(session.totalPrice) || 0) + totalExtraAmount;
  }

  const noteTag = `[+${count} فيديو إضافي${totalExtraAmount > 0 ? ` بقيمة ${totalExtraAmount} د.ل` : ' (مجاني)'}]`;
  session.notes = session.notes ? `${session.notes} • ${noteTag}` : noteTag;

  saveSessions();
  renderApp();
  openSessionDetails(sessionId);
  showToast(`تمت إضافة ${count} فيديو إضافي للجلسة بنجاح!`);
}

function removeExtraVideos(sessionId, extraId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session || !session.extraVideos) return;

  const extraIdx = session.extraVideos.findIndex(e => e.id === extraId);
  if (extraIdx < 0) return;

  const extra = session.extraVideos[extraIdx];
  if (!confirm(`هل أنت متأكد من حذف هذه الإضافة (${extra.count} فيديو)؟`)) return;

  session.targetVideos = Math.max(0, (parseInt(session.targetVideos) || 0) - (extra.count || 0));
  if (extra.addedFinance && extra.totalPrice > 0) {
    session.totalPrice = Math.max(0, (parseFloat(session.totalPrice) || 0) - extra.totalPrice);
  }

  session.extraVideos.splice(extraIdx, 1);
  saveSessions();
  renderApp();
  openSessionDetails(sessionId);
  showToast('تم حذف الفيديوهات الإضافية وتحديث الجلسة.');
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

function editSession(sessionId) {
  playClickSound();
  closeDetailsModal();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const form = document.getElementById('session-form');
  form.reset();

  document.getElementById('session-id').value = session.id;
  document.getElementById('session-modal-title').textContent = 'تعديل بيانات الجلسة';

  populateClientSelectDropdown();
  document.getElementById('form-session-client-select').value = session.clientId;

  const typeSelect = document.getElementById('form-session-type');
  const customGroup = document.getElementById('form-session-custom-type-group');
  const customInput = document.getElementById('form-session-custom-type');

  if (session.sessionType === 'تصوير ريلز' || session.sessionType === 'تصوير ثابت') {
    typeSelect.value = session.sessionType;
    if (customGroup) customGroup.style.display = 'none';
    if (customInput) { customInput.value = ''; customInput.required = false; }
  } else {
    typeSelect.value = 'أخرى';
    if (customGroup) customGroup.style.display = 'block';
    if (customInput) { customInput.value = session.sessionType; customInput.required = true; }
  }

  document.getElementById('form-status').value = session.status || 'مؤكدة';
  document.getElementById('form-date').value = session.date || '';
  document.getElementById('form-time').value = session.time || '16:00';
  document.getElementById('form-location').value = session.location || '';
  document.getElementById('form-total-price').value = session.totalPrice || '';

  const firstDeposit = (session.payments && session.payments.length > 0) ? session.payments[0].amount : 0;
  document.getElementById('form-initial-deposit').value = firstDeposit || '';

  document.getElementById('form-assistants-cost').value = session.assistantsCost || '';
  document.getElementById('form-extra-expenses').value = session.extraExpenses || '';
  document.getElementById('form-drive-link').value = session.driveLink || '';
  document.getElementById('form-notes').value = session.notes || '';

  const deliverablesType = session.deliverablesType || 'both';
  const dTypeSelect = document.getElementById('form-deliverables-type');
  if (dTypeSelect) dTypeSelect.value = deliverablesType;

  const targetVid = document.getElementById('form-target-videos');
  if (targetVid) targetVid.value = session.targetVideos !== undefined ? session.targetVideos : (deliverablesType === 'photos' ? 0 : 4);

  const targetPho = document.getElementById('form-target-photos');
  if (targetPho) targetPho.value = session.targetPhotos !== undefined ? session.targetPhotos : (deliverablesType === 'videos' ? 0 : 30);

  const compVid = document.getElementById('form-completed-videos');
  if (compVid) compVid.value = session.completedVideos !== undefined ? session.completedVideos : 0;

  const compPho = document.getElementById('form-completed-photos');
  if (compPho) compPho.value = session.completedPhotos !== undefined ? session.completedPhotos : 0;

  handleSessionDeliverablesTypeChange(deliverablesType);
  updateSessionLiveProgress();

  updateSessionFormLiveCalculations();
  document.getElementById('session-modal').classList.add('show');
}

function sendWhatsAppAppointmentReminder(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  const client = getClientById(session.clientId);
  const cleanPhone = cleanPhoneForWhatsApp(client.phone);

  const studioName = studioProfile.studioName || 'عدسة برو للتصوير والإنتاج المرئي';
  const photogName = studioProfile.photogName || '';

  const msg = `مرحباً بك أستاذ/ة *${client.name}* 👋
نود تذكيركم بموعد جلسة التصوير القادمة معنا:

📸 *نوع الجلسة:* ${session.sessionType}
📅 *الموعد:* ${session.date}
⏰ *الساعة:* ${session.time || '16:00'}
📍 *الموقع:* ${session.location || 'الاستوديو / موقع الاتفاق'}
${session.notes ? `📝 *ملاحظات وتجهيزات:* ${session.notes}\n` : ''}
نتطلع للقائكم وتقديم أفضل عمل ينال إعجابكم بإذن الله! ✨
ـ
*${studioName}* ${photogName ? `(${photogName})` : ''}
${studioProfile.phone ? `للتواصل والاستفسار: ${studioProfile.phone}` : ''}`;

  if (cleanPhone) {
    openWhatsAppChat(cleanPhone, msg);
  } else {
    navigator.clipboard.writeText(msg).then(() => {
      showToast('تم نسخ رسالة التذكير بنجاح! قم بلصقها في محادثة الزبون.');
    });
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
        <strong style="color: var(--text-main);">${session.sessionType}</strong> — <span>${client.name}</span><br>
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

// ================= WHATSAPP INTEGRATION & HELPERS =================
function isMobileBrowser() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function cleanPhoneForWhatsApp(phone) {
  if (!phone) return '';
  let clean = String(phone).replace(/\D/g, '');
  if (clean.startsWith('00218')) {
    clean = clean.substring(2);
  } else if (clean.startsWith('09') && clean.length === 10) {
    clean = '218' + clean.substring(1);
  } else if (clean.startsWith('9') && clean.length === 9) {
    clean = '218' + clean;
  }
  return clean;
}

function getWhatsAppUrl(phone, text) {
  const clean = cleanPhoneForWhatsApp(phone);
  const encodedText = text ? encodeURIComponent(text) : '';
  const isMobile = isMobileBrowser();

  if (isMobile) {
    if (clean) return `https://wa.me/${clean}${encodedText ? `?text=${encodedText}` : ''}`;
    return `https://wa.me/${encodedText ? `?text=${encodedText}` : ''}`;
  } else {
    // Desktop PC: Launch native WhatsApp Desktop app directly (no web login needed)
    if (clean) return `whatsapp://send?phone=${clean}${encodedText ? `&text=${encodedText}` : ''}`;
    return `whatsapp://send${encodedText ? `?text=${encodedText}` : ''}`;
  }
}

function openWhatsAppChat(phone, text) {
  const clean = cleanPhoneForWhatsApp(phone);
  const encodedText = text ? encodeURIComponent(text) : '';
  const isMobile = isMobileBrowser();
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isIOS) {
    // iPhone / iPad: Native custom scheme opens the exact 1-on-1 chat directly without contact list search
    const iosUrl = clean 
      ? `whatsapp://send?phone=${clean}${encodedText ? `&text=${encodedText}` : ''}`
      : `whatsapp://send${encodedText ? `?text=${encodedText}` : ''}`;
    window.location.href = iosUrl;
    return true;
  } else if (isMobile) {
    const mobileUrl = clean 
      ? `https://wa.me/${clean}${encodedText ? `?text=${encodedText}` : ''}`
      : `https://wa.me/${encodedText ? `?text=${encodedText}` : ''}`;
    window.location.href = mobileUrl;
    return true;
  } else {
    // Desktop PC: Launch WhatsApp Desktop App directly via custom protocol
    const appUrl = clean
      ? `whatsapp://send?phone=${clean}${encodedText ? `&text=${encodedText}` : ''}`
      : `whatsapp://send${encodedText ? `?text=${encodedText}` : ''}`;

    const webFallbackUrl = clean
      ? `https://web.whatsapp.com/send?phone=${clean}${encodedText ? `&text=${encodedText}` : ''}`
      : `https://web.whatsapp.com/send${encodedText ? `?text=${encodedText}` : ''}`;

    try {
      const link = document.createElement('a');
      link.href = appUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      window.location.href = appUrl;
    }

    showWhatsAppAppOpenedToast(webFallbackUrl);
    return true;
  }
}

function showWhatsAppAppOpenedToast(webFallbackUrl) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast success';
  toast.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; gap:0.75rem;">
      <span>تم فتح تطبيق الواتساب مباشرة! 💬</span>
      <a href="${webFallbackUrl}" target="_blank" rel="noopener noreferrer" style="background: rgba(255,255,255,0.22); color: #fff; padding: 3px 8px; border-radius: 6px; text-decoration: none; font-size: 0.74rem; font-weight: 700; white-space: nowrap;">فتح عبر الموقع</a>
    </div>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 280);
  }, 5000);
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

  openWhatsAppChat(client.phone, message);
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

  openWhatsAppChat(client.phone, message);
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

function openGearChecklistModal() {
  playClickSound();
  renderGearChecklist();
  document.getElementById('gear-modal')?.classList.add('show');
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
  playClickSound();
  const fullBackup = {
    version: 2,
    appName: 'AdasaPro',
    exportDate: new Date().toISOString(),
    clients,
    sessions,
    assistants: typeof assistants !== 'undefined' ? assistants : [],
    studioProfile: typeof studioProfile !== 'undefined' ? studioProfile : null,
    gearList: typeof gearList !== 'undefined' ? gearList : []
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = `AdasaPro_Backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  
  // Record last backup timestamp
  localStorage.setItem('adasapro_last_export', Date.now().toString());
  showToast('تم تنزيل النسخة الاحتياطية الشاملة بنجاح 💾');
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
      if (Array.isArray(data.assistants) && typeof saveAssistants === 'function') {
        assistants = data.assistants;
        saveAssistants();
      }
      if (Array.isArray(data.gearList) && typeof saveGear === 'function') {
        gearList = data.gearList;
        saveGear();
      }
      if (data.studioProfile && typeof data.studioProfile === 'object') {
        studioProfile = { ...DEFAULT_STUDIO_PROFILE, ...data.studioProfile };
        saveStudioProfile();
        renderStudioProfile();
      }
      localStorage.removeItem('adasapro_is_demo');
      localStorage.setItem('adasapro_last_export', Date.now().toString());
      renderApp();
      showToast('تمت استعادة كافة البيانات والهوية بنجاح ✅');
      document.getElementById('backup-modal')?.classList.remove('show');
    } catch (err) {
      alert('الملف غير صالح أو تالف. يرجى اختيار ملف JSON صحيح تم تصديره من عدسة برو.');
    }
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

  // Reset session selection wrap
  const wrapSessionSelect = document.getElementById('wrap-contract-session-select');
  if (wrapSessionSelect) wrapSessionSelect.style.display = 'none';
  const sessionSelect = document.getElementById('contract-session-select');
  if (sessionSelect) sessionSelect.innerHTML = '<option value="">-- اضغط لاختيار الجلسة --</option>';

  // Preload saved photographer info from studio profile or localStorage
  const savedMyName = studioProfile.photogName || localStorage.getItem('adasapro_my_name') || '';
  const savedMyPhone = studioProfile.phone || localStorage.getItem('adasapro_my_phone') || '';
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
  const wrapSessionSelect = document.getElementById('wrap-contract-session-select');
  const sessionSelect = document.getElementById('contract-session-select');

  if (!clientId) {
    if (wrapSessionSelect) wrapSessionSelect.style.display = 'none';
    return;
  }
  const client = getClientById(clientId);
  if (client) {
    const compName = document.getElementById('contract-company-name');
    const compPhone = document.getElementById('contract-client-phone');
    if (compName) compName.value = client.name;
    if (compPhone) compPhone.value = client.phone;

    // Filter sessions belonging to this client and populate the session dropdown
    const clientSessions = sessions.filter(s => s.clientId === clientId);
    if (wrapSessionSelect && sessionSelect) {
      if (clientSessions.length > 0) {
        sessionSelect.innerHTML = '<option value="">-- اضغط لاختيار الجلسة --</option>' +
          clientSessions.map(s => {
            const fin = calculateSessionFinance(s);
            return `<option value="${s.id}">${s.date} - ${s.sessionType} (${fin.total.toLocaleString()} د.ل)</option>`;
          }).join('');
        wrapSessionSelect.style.display = 'block';
      } else {
        wrapSessionSelect.style.display = 'none';
      }
    }
  }
}

function autoFillContractSession(sessionId) {
  if (!sessionId) return;
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;

  const fin = calculateSessionFinance(session);
  const totalInput = document.getElementById('contract-total-price');
  const depositInput = document.getElementById('contract-deposit-price');
  if (totalInput) totalInput.value = fin.total || '';
  if (depositInput) depositInput.value = fin.paid || '';

  // Deliverables mapping
  const serviceTypeSelect = document.getElementById('contract-service-type');
  const videosInput = document.getElementById('contract-videos-count');
  const photosInput = document.getElementById('contract-photos-count');

  if (session.deliverablesType) {
    if (serviceTypeSelect) {
      serviceTypeSelect.value = session.deliverablesType;
      handleContractServiceTypeChange(session.deliverablesType);
    }
  } else if (session.sessionType === 'تصوير ريلز') {
    if (serviceTypeSelect) {
      serviceTypeSelect.value = 'videos';
      handleContractServiceTypeChange('videos');
    }
  } else if (session.sessionType === 'تصوير ثابت') {
    if (serviceTypeSelect) {
      serviceTypeSelect.value = 'photos';
      handleContractServiceTypeChange('photos');
    }
  }

  if (session.targetVideos !== undefined && videosInput) {
    videosInput.value = session.targetVideos;
  }
  if (session.targetPhotos !== undefined && photosInput) {
    photosInput.value = session.targetPhotos;
  }

  // Work type classification
  const workTypeSelect = document.getElementById('contract-work-type');
  if (workTypeSelect && session.sessionType) {
    if (session.sessionType === 'تصوير ريلز') {
      workTypeSelect.value = 'فيديوهات ريلز وسوشيال ميديا عمودية (9:16) تسويقية';
    } else if (session.sessionType === 'تصوير ثابت') {
      workTypeSelect.value = 'جلسة تصوير بورتريه مهني للكوادر وفريق العمل';
    } else {
      workTypeSelect.value = 'أخرى';
      const customWorkInput = document.getElementById('contract-custom-work-type');
      if (customWorkInput) customWorkInput.value = session.sessionType;
    }
    handleContractWorkTypeChange(workTypeSelect.value);
  }

  updateContractLiveCalculations();
  showToast('تمت تعبئة بيانات العقد والمخرجات تلقائياً من الجلسة! ⚡');
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
    contractSubtitle,
    deliveryDays,
    revisionsCount,
    extraSpecs,
    totalPrice,
    depositPrice,
    remainingPrice
  };

  // Save into savedContracts archive (Bag)
  const existingIdx = savedContracts.findIndex(item => item.code === contractCode);
  if (existingIdx >= 0) {
    savedContracts[existingIdx] = lastGeneratedContract;
  } else {
    savedContracts.unshift(lastGeneratedContract);
  }
  saveContracts();

  const printArea = document.getElementById('contract-print-area');
  if (printArea) {
    printArea.innerHTML = renderContractHTML(lastGeneratedContract);
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

  openWhatsAppChat(c.clientPhone, msg);
}

function renderContractHTML(c) {
  let deliverablesListHtml = '';
  if (c.serviceType === 'videos' || c.serviceType === 'both') {
    deliverablesListHtml += `<li><strong>عدد الفيديوهات المطلوبة:</strong> <span style="font-weight: 800; color: #0F172A; text-decoration: underline;">${c.videosCount} فيديو نهائي معتمد ومكتمل المونتاج</span>.</li>`;
  }
  if (c.serviceType === 'photos' || c.serviceType === 'both') {
    deliverablesListHtml += `<li><strong>عدد الصور الفوتوغرافية:</strong> <span style="font-weight: 800; color: #0F172A; text-decoration: underline;">${c.photosCount} صورة فوتوغرافية مصححة الألوان ومعدلة بالريتاتش الاحترافي</span>.</li>`;
  }
  deliverablesListHtml += `<li><strong>تصنيف ونوع العمل المطلوب:</strong> <span style="font-weight: 700; color: #1D4ED8;">${c.workType}</span>.</li>`;
  if (c.extraSpecs) {
    deliverablesListHtml += `<li><strong>المواصفات الفنية الخاصة:</strong> ${c.extraSpecs}.</li>`;
  } else {
    deliverablesListHtml += `<li><strong>المواصفات الفنية القياسية:</strong> تصوير بأعلى جودة سينمائية واحترافية (4K / Full HD / High-Res)، استخدام أحدث العدسات والإضاءة، معالجة وتصحيح ألوان متقدم، وتسليم نسخ عالية الدقة جاهزة للطباعة والنشر الرقمي.</li>`;
  }

  return `
    <div class="contract-header">
      <div class="contract-title-group" style="display: flex; align-items: center; gap: 0.75rem;">
        ${studioProfile.logo ? `
          <img src="${studioProfile.logo}" alt="شعار الاستوديو" style="height: 48px; max-width: 140px; object-fit: contain;">
        ` : ''}
        <div>
          <h2>${c.contractTitle}</h2>
          <p>${c.contractSubtitle || 'اتفاقية عمل مهنية رسمية لإنتاج المحتوى المرئي'} • ${escapeHTML(studioProfile.studioName || 'عدسة برو')}</p>
        </div>
      </div>
      <div class="contract-meta-box">
        <div><strong>رقم العقد:</strong> <span dir="ltr">${c.code}</span></div>
        <div><strong>تاريخ التحرير:</strong> ${c.date}</div>
        <div><strong>العملة المعتمدة:</strong> الدينار الليبي (د.ل)</div>
      </div>
    </div>

    <div class="contract-parties-grid">
      <div class="contract-party-box first-party">
        <div class="contract-party-title">الطرف الأول (المصور / جهة التنفيذ):</div>
        <div class="contract-party-row">
          <strong>الاسم / الاستوديو:</strong> <span>${escapeHTML(studioProfile.studioName ? `${studioProfile.studioName} (${c.photogName})` : c.photogName)}</span>
        </div>
        <div class="contract-party-row">
          <strong>رقم الهاتف / الواتساب:</strong> <span dir="ltr">${c.photogPhone || 'غير محدد'}</span>
        </div>
        <div class="contract-party-row">
          <strong>المقر / المدينة:</strong> <span>${escapeHTML(studioProfile.city || 'ليبيا')}</span>
        </div>
        <div class="contract-party-row">
          <strong>الصفة:</strong> <span>المسؤول والمشرف الفني على الإنتاج والتصوير</span>
        </div>
      </div>

      <div class="contract-party-box second-party">
        <div class="contract-party-title">الطرف الثاني (الشركة / العميل):</div>
        <div class="contract-party-row">
          <strong>اسم الجهة / الشركة:</strong> <span>${escapeHTML(c.companyName)}</span>
        </div>
        <div class="contract-party-row">
          <strong>رقم هاتف المفوض:</strong> <span dir="ltr">${c.clientPhone || 'غير محدد'}</span>
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
          <li>يلتزم الطرف الأول بتسليم النسخ المبدئية للعرض والمراجعة (Draft Preview) خلال مدة أقصاها <strong>${c.deliveryDays} أيام عمل</strong> تبدأ من تاريخ اكتمال جلسات التصوير الميداني وتسليم الطرف الثاني لكافة الشعارات والمواد اللازمة.</li>
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
          <li>يشمل هذا الاتفاق عدد <strong>(${c.revisionsCount}) جولات مراجعة وتعديل مجانية</strong> للمسودة الأولية، على أن يقوم الطرف الثاني بتقديم كافة ملاحظاته الفنية في قائمة واضحة وموحدة لكل جولة.</li>
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
              <td style="font-weight: 700; color: #15803D;">${c.depositPrice.toLocaleString()} د.ل</td>
              <td>تُدفع فوراً عند توقيع هذا الاتفاق لبدء التحضير والحجز</td>
            </tr>
            <tr>
              <td><strong>الدفعة الثانية (المتبقي النهائي)</strong></td>
              <td style="font-weight: 700; color: #B91C1C;">${c.remainingPrice.toLocaleString()} د.ل</td>
              <td>تُسدد عند اعتماد النسخ النهائية وقبل تسليم الملفات الأصلية</td>
            </tr>
            <tr class="total-row">
              <td><strong>إجمالي قيمة العقد</strong></td>
              <td colspan="2" style="font-size: 0.95rem; font-weight: 800; color: #0F172A;">${c.totalPrice.toLocaleString()} دينار ليبي فقط لا غير</td>
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
          <strong>الاسم:</strong> ${c.photogName}
        </div>
        <div class="contract-sig-line">
          <span>التوقيع: ............................</span>
          <span>التاريخ: .....................</span>
        </div>
      </div>

      <div class="contract-sig-col">
        <h4>توقيع وختم الطرف الثاني (الشركة / العميل):</h4>
        <div style="font-size: 0.82rem; color: #334155; margin-top: 0.35rem;">
          <strong>الجهة:</strong> ${escapeHTML(c.companyName)}
        </div>
        <div class="contract-sig-line">
          <span>التوقيع والختم: ............................</span>
          <span>التاريخ: .....................</span>
        </div>
      </div>
    </div>
  `;
}

// ================= SAVED CONTRACTS ARCHIVE (حقيبة العقود المحفوظة) =================
function openContractsArchiveModal() {
  playClickSound();
  renderContractsArchive();
  document.getElementById('contracts-archive-modal')?.classList.add('show');
}

function closeContractsArchiveModal() {
  document.getElementById('contracts-archive-modal')?.classList.remove('show');
}

function filterContractsArchive(query) {
  const q = (query || '').toLowerCase().trim();
  if (!q) {
    renderContractsArchive();
    return;
  }
  const filtered = savedContracts.filter(c => {
    return (c.companyName && c.companyName.toLowerCase().includes(q)) ||
           (c.clientPhone && c.clientPhone.includes(q)) ||
           (c.code && c.code.toLowerCase().includes(q)) ||
           (c.workType && c.workType.toLowerCase().includes(q)) ||
           (c.contractTitle && c.contractTitle.toLowerCase().includes(q));
  });
  renderContractsArchive(filtered);
}

function renderContractsArchive(listToRender = null) {
  const container = document.getElementById('contracts-archive-list');
  if (!container) return;

  const list = listToRender || savedContracts;
  updateContractsArchiveCountBadge();

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.8rem; margin-bottom: 0.5rem;">📜</div>
        <h4 style="color: var(--text-main); font-weight: 800; margin-bottom: 0.35rem;">لا توجد عقود محفوظة بعد</h4>
        <p style="font-size: 0.82rem; margin-bottom: 1.2rem;">عند إنشاء أي عقد رسمي للزبائن، سيتم حفظه تلقائياً في هذا الأرشيف للرجوع إليه وتصديره في أي وقت.</p>
        <button class="btn-primary" onclick="closeContractsArchiveModal(); openContractModal();">+ إنشاء عقد رسمي جديد الآن</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(c => `
    <div class="contract-archive-card">
      <div class="contract-archive-header">
        <div>
          <h4 class="contract-archive-title">${escapeHTML(c.companyName)}</h4>
          <div class="contract-archive-meta">
            <span># ${c.code}</span>
            <span>•</span>
            <span>${c.date}</span>
            <span>•</span>
            <span dir="ltr">${c.clientPhone}</span>
          </div>
        </div>
        <span class="pill-badge pill-purple" style="font-size: 0.72rem;">${c.contractTitle}</span>
      </div>

      <div class="contract-archive-details">
        <div class="contract-archive-detail-item">
          <span class="label">إجمالي العقد</span>
          <span class="val" style="color: #0284C7;">${c.totalPrice.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div class="contract-archive-detail-item">
          <span class="label">العربون المدفوع</span>
          <span class="val" style="color: #10B981;">${c.depositPrice.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div class="contract-archive-detail-item">
          <span class="label">المتبقي</span>
          <span class="val" style="color: ${c.remainingPrice > 0 ? '#DC2626' : '#10B981'};">
            ${c.remainingPrice > 0 ? `${c.remainingPrice.toLocaleString()} ${CURRENCY_LABEL}` : 'خالص ✓'}
          </span>
        </div>
        <div class="contract-archive-detail-item">
          <span class="label">المخرجات</span>
          <span class="val" style="font-size: 0.76rem;">
            ${(c.serviceType === 'videos' || c.serviceType === 'both') ? `🎬 ${c.videosCount} فيديو ` : ''}
            ${(c.serviceType === 'photos' || c.serviceType === 'both') ? `📷 ${c.photosCount} صورة` : ''}
          </span>
        </div>
      </div>

      <div class="contract-archive-actions">
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
          <button class="btn-primary-sm" onclick="loadAndOpenContract('${c.code}')">👁️ معاينة وطباعة</button>
          <button class="btn-whatsapp-sm" onclick="exportSavedContractPdf('${c.code}')">📥 تصدير PDF</button>
          <button class="btn-secondary-sm" onclick="sendSavedContractWhatsApp('${c.code}')">💬 واتساب</button>
        </div>
        <div>
          <button class="btn-danger-sm" onclick="deleteSavedContract('${c.code}')" title="حذف العقد من الأرشيف">🗑️ حذف</button>
        </div>
      </div>
    </div>
  `).join('');
}

function loadAndOpenContract(code) {
  playClickSound();
  const c = savedContracts.find(item => item.code === code);
  if (!c) {
    showToast('لم يتم العثور على العقد المطلوب.');
    return;
  }
  lastGeneratedContract = c;
  const printArea = document.getElementById('contract-print-area');
  if (printArea) {
    printArea.innerHTML = renderContractHTML(c);
  }
  const formView = document.getElementById('contract-form-view');
  const previewView = document.getElementById('contract-preview-view');
  if (formView) formView.style.display = 'none';
  if (previewView) {
    previewView.style.display = 'block';
    previewView.scrollTop = 0;
  }
  closeContractsArchiveModal();
  document.getElementById('contract-modal')?.classList.add('show');
}

function exportSavedContractPdf(code) {
  playClickSound();
  const c = savedContracts.find(item => item.code === code);
  if (!c) return;
  lastGeneratedContract = c;
  const printArea = document.getElementById('contract-print-area');
  if (printArea) {
    printArea.innerHTML = renderContractHTML(c);
  }
  sendContractPdfWhatsApp();
}

function sendSavedContractWhatsApp(code) {
  playClickSound();
  const c = savedContracts.find(item => item.code === code);
  if (!c) return;
  lastGeneratedContract = c;
  shareContractWhatsApp();
}

function deleteSavedContract(code) {
  playClickSound();
  const c = savedContracts.find(item => item.code === code);
  if (!c) return;

  if (confirm(`هل أنت متأكد من حذف عقد "${c.companyName}" (${c.code}) نهائياً من الأرشيف؟`)) {
    savedContracts = savedContracts.filter(item => item.code !== code);
    saveContracts();
    renderContractsArchive();
    showToast('تم حذف العقد من الأرشيف بنجاح. 🗑️');
  }
}

function cleanFileName(str) {
  if (!str) return 'وثيقة';
  return String(str)
    .replace(/[\/\\?%*:|"<>]/g, '_')
    .trim()
    .replace(/\s+/g, '_');
}

function triggerBlobDownload(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

async function generatePdfBlobFromElement(sourceElement, fileName, customOpt = {}, targetWidth = 794) {
  if (typeof html2pdf === 'undefined') {
    throw new Error('html2pdf is not loaded');
  }

  // Create an isolated sandbox attached directly to document.body, free from any modal, parent width constraints, or viewport limits
  const sandbox = document.createElement('div');
  sandbox.id = 'pdf-render-sandbox';
  sandbox.style.cssText = [
    'position: fixed',
    'top: 0',
    'left: 0',
    `width: ${targetWidth}px !important`,
    `min-width: ${targetWidth}px !important`,
    `max-width: ${targetWidth}px !important`,
    'background: #FFFFFF !important',
    'box-sizing: border-box !important',
    'padding: 0 !important',
    'margin: 0 !important',
    'z-index: -99999',
    'direction: rtl',
    'opacity: 1',
    'pointer-events: none',
    'visibility: visible !important'
  ].join(';');

  // Deep clone the element so we render inside the sandbox
  const clone = sourceElement.cloneNode(true);
  clone.classList.add('pdf-export-mode');
  clone.style.cssText += [
    'display: block !important',
    `width: ${targetWidth}px !important`,
    `min-width: ${targetWidth}px !important`,
    `max-width: ${targetWidth}px !important`,
    'box-sizing: border-box !important',
    'margin: 0 !important',
    'background: #FFFFFF !important',
    'color: #0F172A !important',
    'direction: rtl !important'
  ].join(';');

  sandbox.appendChild(clone);
  document.body.appendChild(sandbox);

  try {
    const opt = {
      margin: [10, 10, 10, 10],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF',
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all' },
      ...customOpt
    };

    const pdfBlob = await html2pdf().set(opt).from(clone).outputPdf('blob');
    return pdfBlob;
  } finally {
    if (sandbox.parentNode) {
      sandbox.parentNode.removeChild(sandbox);
    }
  }
}

async function sendContractPdfWhatsApp() {
  playClickSound();
  if (!lastGeneratedContract) {
    showToast('يرجى توليد ومعاينة العقد أولاً.');
    return;
  }
  const c = lastGeneratedContract;
  const phone = cleanPhoneForWhatsApp(c.clientPhone);

  const element = document.getElementById('contract-print-area');
  if (!element) return;

  const btn = document.getElementById('btn-contract-whatsapp-pdf');
  const originalHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>جاري تجهيز العقد A4... ⏳</span>`;
  }

  try {
    if (typeof html2pdf === 'undefined') {
      showToast('جاري تحميل محرك الـ PDF، يرجى المحاولة بعد لحظة...', 'info');
      return;
    }

    const fileName = `عقد_تصوير_${cleanFileName(c.companyName || 'شركة')}_${c.code || 'DOC'}.pdf`;

    // Strictly 1-Page A4 Contract: avoid-all mode guarantees 1 page without multi-page break on Samsung
    const pdfBlob = await generatePdfBlobFromElement(element, fileName, {
      pagebreak: { mode: 'avoid-all' }
    }, 794);

    triggerBlobDownload(pdfBlob, fileName);

    const shareText = `السلام عليكم ورحمة الله،\nتحية طيبة لكم من ${c.photogName || 'المصور'} 📸\nمرفق نسخة ${c.contractTitle || 'العقد الرسمي'} المعتمدة لشركة: *${c.companyName || ''}* بصيغة PDF.\nنتشرف بالتعاون معكم دائماً! ✨`;

    const isMobile = isMobileBrowser();

    if (isMobile) {
      setTimeout(() => {
        openWhatsAppChat(phone, shareText);
      }, 500);

      showToast(`تم تنزيل العقد كملف PDF رسمي (A4) وفتح محادثة الزبون مباشرة! اضغط على 📎 لإرفاق العقد فوراً.`, 'success', 8000);
    } else {
      setTimeout(() => {
        openWhatsAppChat(phone, shareText);
      }, 500);

      showToast(`تم تنزيل العقد (${fileName}) وفتح تطبيق الواتساب! يمكنك سحب الملف أو الضغط على 📎 لإرساله فوراً.`, 'success', 8000);
    }
  } catch (err) {
    console.error('Error sharing contract PDF:', err);
    showToast('تعذر توليد الـ PDF تلقائياً، يمكنك استخدام خيار طباعة / حفظ PDF.', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
    }
  }
}

// ================= OFFICIAL PAYMENT RECEIPT VOUCHER (سند قبض مالي رسمي) =================
let lastGeneratedReceipt = null;

function numberToArabicWordsLibyanDinar(num) {
  if (isNaN(num) || num === null) return '';
  num = Math.floor(Math.abs(num));
  if (num === 0) return 'صفر دينار ليبي';

  const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
  const teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
  const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
  const hundreds = ['', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

  function convertChunk(n) {
    let parts = [];
    const h = Math.floor(n / 100);
    const rem = n % 100;
    if (h > 0) parts.push(hundreds[h]);

    if (rem > 0) {
      if (rem < 10) {
        parts.push(ones[rem]);
      } else if (rem < 20) {
        parts.push(teens[rem - 10]);
      } else {
        const o = rem % 10;
        const t = Math.floor(rem / 10);
        if (o > 0) {
          parts.push(ones[o] + ' و' + tens[t]);
        } else {
          parts.push(tens[t]);
        }
      }
    }
    return parts.join(' و');
  }

  let words = [];
  const millions = Math.floor(num / 1000000);
  const thousands = Math.floor((num % 1000000) / 1000);
  const remaining = num % 1000;

  if (millions > 0) {
    if (millions === 1) words.push('مليون');
    else if (millions === 2) words.push('مليونان');
    else if (millions >= 3 && millions <= 10) words.push(convertChunk(millions) + ' ملايين');
    else words.push(convertChunk(millions) + ' مليون');
  }

  if (thousands > 0) {
    if (thousands === 1) words.push('ألف');
    else if (thousands === 2) words.push('ألفان');
    else if (thousands >= 3 && thousands <= 10) words.push(convertChunk(thousands) + ' آلاف');
    else words.push(convertChunk(thousands) + ' ألف');
  }

  if (remaining > 0) {
    words.push(convertChunk(remaining));
  }

  const result = words.join(' و');
  if (num === 1) return 'دينار ليبي واحد فقط لا غير';
  if (num === 2) return 'ديناران ليبيان فقط لا غير';
  if (num >= 3 && num <= 10 && thousands === 0 && millions === 0) {
    return result + ' دنانير ليبية فقط لا غير';
  }
  return result + ' دينار ليبي فقط لا غير';
}

function openPaymentReceipt(sessionId, paymentId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  const client = getClientById(session.clientId);
  const payment = (session.payments || []).find(p => p.id === paymentId);
  if (!payment) return;

  const fin = calculateSessionFinance(session);
  const wordsAmount = numberToArabicWordsLibyanDinar(payment.amount);
  const receiptNum = 'REC-' + (payment.id.replace('pay-', '').slice(-6) || Math.floor(100000 + Math.random() * 900000));

  lastGeneratedReceipt = {
    receiptNum,
    session,
    client,
    payment,
    fin,
    wordsAmount
  };

  const printArea = document.getElementById('receipt-print-area');
  if (printArea) {
    printArea.innerHTML = `
      <div class="receipt-header">
        <div class="receipt-title-group" style="display: flex; align-items: center; gap: 0.75rem;">
          ${studioProfile.logo ? `
            <img src="${studioProfile.logo}" alt="شعار الاستوديو" style="height: 48px; max-width: 130px; object-fit: contain;">
          ` : `
            <div style="width: 44px; height: 44px; border-radius: 8px; background: #0F172A; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">📷</div>
          `}
          <div>
            <h2 class="receipt-main-title" style="margin: 0; font-size: 1.15rem; font-weight: 800;">
              <span>سند قبض واستلام مالي</span>
            </h2>
            <p class="receipt-sub-title" style="margin: 0.15rem 0 0; font-size: 0.76rem;">
              ${escapeHTML(studioProfile.studioName || 'عدسة برو للتصوير')} • ${escapeHTML(studioProfile.photogName || 'المصور')} ${studioProfile.phone ? `(${escapeHTML(studioProfile.phone)})` : ''}
            </p>
          </div>
        </div>
        <div class="receipt-meta-box">
          <div><strong>رقم السند:</strong> #${receiptNum}</div>
          <div><strong>تاريخ القبض:</strong> ${payment.date || session.date}</div>
          <div><strong>طريقة الدفع:</strong> ${payment.method || 'كاش / نقداً'}</div>
        </div>
      </div>

      <div class="receipt-amount-highlight">
        <div>
          <span class="receipt-amount-label" style="font-size: 0.76rem; font-weight: 700; display: block;">المبلغ المستلم والمثبت:</span>
          <span class="receipt-amount-val">+${payment.amount.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <span class="pill-badge badge-success-soft" style="font-size: 0.84rem; padding: 0.35rem 0.85rem;">
          تم التحصيل والتوثيق ✓
        </span>
      </div>

      <table class="receipt-table">
        <tbody>
          <tr>
            <td class="receipt-label-col">استلمنا من السيد/ة:</td>
            <td class="receipt-val-col"><strong>${client.name}</strong> (${client.phone || 'غير مسجل'})</td>
          </tr>
          <tr>
            <td class="receipt-label-col">المبلغ كتابةً وتفقيطاً:</td>
            <td class="receipt-val-col receipt-words-val" style="font-weight: 800;">${wordsAmount}</td>
          </tr>
          <tr>
            <td class="receipt-label-col">وذلك مقابل / البيان:</td>
            <td class="receipt-val-col">${payment.note} — جلسة (${session.sessionType})</td>
          </tr>
          <tr>
            <td class="receipt-label-col">تاريخ وموعد الجلسة:</td>
            <td class="receipt-val-col">${session.date} ${session.location ? `• الموقع: ${session.location}` : ''}</td>
          </tr>
        </tbody>
      </table>

      <!-- موقف حساب الجلسة المالي -->
      <div class="receipt-section-subtitle" style="margin-bottom: 0.5rem; font-size: 0.8rem; font-weight: 800;">الموقف المالي للحساب بعد هذه الدفعة:</div>
      <div class="receipt-fin-summary">
        <div>
          <span class="receipt-fin-cell-label">إجمالي الاتفاق</span>
          <span class="receipt-fin-cell-val">${fin.total.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div>
          <span class="receipt-fin-cell-label">إجمالي المدفوع حتى الآن</span>
          <span class="receipt-fin-cell-val fin-paid-val" style="color: #059669;">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div>
          <span class="receipt-fin-cell-label">المتبقي النهائي</span>
          <span class="receipt-fin-cell-val ${fin.remaining > 0 ? 'fin-rem-val' : 'fin-paid-val'}" style="color: ${fin.remaining > 0 ? '#DC2626' : '#059669'};">
            ${fin.remaining > 0 ? fin.remaining.toLocaleString() + ' ' + CURRENCY_LABEL : 'مسدد بالكامل ✓'}
          </span>
        </div>
      </div>

      <div class="receipt-footer-watermark">
        هذا السند صادر رسمياً وموثق محاسبياً عبر منصة عدسة برو (AdasaPro) لإدارة أعمال التصوير والإنتاج المرئي • شاكرين حسن ثقتكم
      </div>
    `;
  }

  document.getElementById('receipt-modal')?.classList.add('show');
}

function closePaymentReceipt() {
  document.getElementById('receipt-modal')?.classList.remove('show');
}

function printReceiptDocument() {
  playClickSound();
  window.print();
}

function shareReceiptWhatsApp() {
  playClickSound();
  if (!lastGeneratedReceipt) return;
  const { receiptNum, session, client, payment, fin, wordsAmount } = lastGeneratedReceipt;

  const msg = `🧾 *سند قبض واستلام دفعة رسمي*
*${studioProfile.studioName || 'عدسة برو للتصوير والإنتاج المرئي'}*
----------------------------------------
• *رقم السند:* #${receiptNum}
• *التاريخ:* ${payment.date || session.date}
• *استلمنا من السيد/ة:* ${client.name}
• *المبلغ المستلم:* ${payment.amount.toLocaleString()} د.ل
• *المبلغ كتابةً:* ${wordsAmount}
• *طريقة الدفع:* ${payment.method}
• *البيان:* ${payment.note}
• *نوع الجلسة:* ${session.sessionType}
----------------------------------------
📊 *الموقف المالي للجلسة:*
• إجمالي قيمة الاتفاق: ${fin.total.toLocaleString()} د.ل
• المسدد حتى الآن: ${fin.paid.toLocaleString()} د.ل
• المتبقي النهائي: ${fin.remaining > 0 ? fin.remaining.toLocaleString() + ' د.ل' : 'مسدد بالكامل ✓'}
----------------------------------------
شاكرين ثقتكم وحسن تعاملكم معنا دائماً 📸🤍`;

  openWhatsAppChat(client.phone, msg);
}

async function sendReceiptPdfWhatsApp() {
  playClickSound();
  if (!lastGeneratedReceipt) {
    showToast('يرجى فتح سند القبض أولاً.');
    return;
  }
  const { receiptNum, session, client, payment } = lastGeneratedReceipt;
  const cleanPhone = cleanPhoneForWhatsApp(client.phone);
  const element = document.getElementById('receipt-print-area');
  if (!element) return;

  const btn = document.getElementById('btn-receipt-whatsapp-pdf');
  const originalHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>جاري تجهيز السند A5... ⏳</span>`;
  }

  try {
    if (typeof html2pdf === 'undefined') {
      showToast('جاري تحميل محرك الـ PDF، يرجى المحاولة بعد لحظة...', 'info');
      return;
    }

    const fileName = `سند_قبض_${cleanFileName(client.name || 'زبون')}_${receiptNum || 'REC'}.pdf`;

    // Strictly A5 format: 560px width matches 148mm at 96 DPI, edge-to-edge
    const pdfBlob = await generatePdfBlobFromElement(element, fileName, {
      jsPDF: { unit: 'mm', format: 'a5', orientation: 'portrait' },
      margin: [6, 6, 6, 6],
      pagebreak: { mode: 'avoid-all' }
    }, 560);

    // 1. Download/Save the A5 PDF directly onto the user's device
    triggerBlobDownload(pdfBlob, fileName);

    // 2. Prepare WhatsApp message
    const shareText = `السلام عليكم ورحمة الله،\nمرفق سند استلام دفعة رسمي (#${receiptNum}) من ${studioProfile.studioName || 'عدسة برو'}.\nشاكرين حسن تعاملكم معنا! 📸🤍`;

    const isMobile = isMobileBrowser();

    if (isMobile) {
      // Direct navigation to customer's chat on Mobile (no contact search required!)
      setTimeout(() => {
        openWhatsAppChat(cleanPhone, shareText);
      }, 500);

      showToast(`تم تنزيل سند القبض كملف PDF رسمي (A5) وفتح محادثة الزبون مباشرة! اضغط على 📎 لإرفاق السند فوراً.`, 'success', 8000);
    } else {
      // Direct navigation to customer's chat on PC via WhatsApp Desktop app
      setTimeout(() => {
        openWhatsAppChat(cleanPhone, shareText);
      }, 500);

      showToast(`تم تنزيل سند القبض (${fileName}) كملف A5 وفتح تطبيق الواتساب! يمكنك سحب الملف أو الضغط على 📎 لإرساله فوراً.`, 'success', 8000);
    }
  } catch (err) {
    console.error('Error exporting/sharing receipt PDF:', err);
    showToast('تعذر توليد الـ PDF، يمكنك استخدام خيار طباعة / حفظ PDF كبديل.', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
    }
  }
}

function copyReceiptText() {
  playClickSound();
  if (!lastGeneratedReceipt) return;
  const { receiptNum, session, client, payment, fin, wordsAmount } = lastGeneratedReceipt;
  const msg = `🧾 سند قبض واستلام دفعة رسمي (#${receiptNum})
التاريخ: ${payment.date || session.date}
استلمنا من: ${client.name}
المبلغ: ${payment.amount.toLocaleString()} د.ل (${wordsAmount})
طريقة الدفع: ${payment.method}
البيان: ${payment.note} (${session.sessionType})
المتبقي النهائي: ${fin.remaining.toLocaleString()} د.ل
شكراً لتعاملكم معنا.`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast('تم نسخ نص السند بنجاح! 📋');
  }).catch(() => {
    showToast('تعذر النسخ إلى الحافظة.');
  });
}

function shareDriveDeliveryWhatsApp(sessionId) {
  playClickSound();
  const session = sessions.find(s => s.id === sessionId);
  if (!session || !session.driveLink) return;
  const client = getClientById(session.clientId);

  const message = `أهلاً بك أستاذ/ة *${client.name}* 📸✨

يسرنا إعلامك بأن صور وفيديوهات جلسة التصوير (*${session.sessionType}*) أصبحت جاهزة ومرفوعة بجودة كاملة على الرابط السحابي التالي:

🔗 *رابط تحميل الصور:*
${session.driveLink}

نتمنى أن تنال الصور إعجابك ورضاك التام! نسعد دائماً بخدمتك، ولا تتردد في التواصل معنا لأي استفسار.
شكراً لاختيارك لنا 🤍`;

  openWhatsAppChat(client.phone, message);
}

// ================= EXCEL FINANCIAL EXPORT (WITH UTF-8 BOM) =================
function exportFinancialsToExcel() {
  playClickSound();

  const filteredSessions = (typeof getFilteredSessions === 'function') ? getFilteredSessions() : sessions;
  if (!filteredSessions || filteredSessions.length === 0) {
    alert('لا توجد جلسات مسجلة لتصدير التقرير المالي.');
    return;
  }

  // UTF-8 BOM ensures Arabic characters render flawlessly in Microsoft Excel
  const BOM = '\uFEFF';
  const headers = [
    'رقم الجلسة',
    'اسم الزبون',
    'رقم الهاتف',
    'نوع الجلسة',
    'حالة الجلسة',
    'التاريخ',
    'الوقت',
    'الموقع',
    'إجمالي الاتفاق (د.ل)',
    'المدفوع (د.ل)',
    'المتبقي المطلوب (د.ل)',
    'تكلفة المساعدين (د.ل)',
    'مصاريف إضافية (د.ل)',
    'صافي الربح (د.ل)',
    'ملاحظات الجلسة'
  ];

  let totalContractSum = 0;
  let totalPaidSum = 0;
  let totalRemainingSum = 0;
  let totalAssistantsSum = 0;
  let totalExpensesSum = 0;
  let totalNetProfitSum = 0;

  const escapeCSV = (str) => {
    if (str === null || str === undefined) return '""';
    const s = String(str).replace(/"/g, '""');
    return `"${s}"`;
  };

  const rows = filteredSessions.map((s, idx) => {
    const client = getClientById(s.clientId);
    const fin = calculateSessionFinance(s);

    totalContractSum += fin.total;
    totalPaidSum += fin.paid;
    totalRemainingSum += fin.remaining;
    totalAssistantsSum += (s.assistantsCost || 0);
    totalExpensesSum += (s.extraExpenses || 0);
    totalNetProfitSum += fin.netProfit;

    return [
      escapeCSV(`SESS-${idx + 1}`),
      escapeCSV(client.name),
      escapeCSV(client.phone),
      escapeCSV(s.sessionType),
      escapeCSV(s.status),
      escapeCSV(s.date),
      escapeCSV(s.time || ''),
      escapeCSV(s.location || ''),
      fin.total,
      fin.paid,
      fin.remaining,
      (s.assistantsCost || 0),
      (s.extraExpenses || 0),
      fin.netProfit,
      escapeCSV(s.notes || '')
    ].join(',');
  });

  const summaryRow = [
    escapeCSV('الإجمالي العام'),
    escapeCSV(`عدد الجلسات: ${filteredSessions.length}`),
    '""',
    '""',
    '""',
    '""',
    '""',
    '""',
    totalContractSum,
    totalPaidSum,
    totalRemainingSum,
    totalAssistantsSum,
    totalExpensesSum,
    totalNetProfitSum,
    escapeCSV(`تم الاستخراج بتاريخ: ${new Date().toLocaleDateString('ar-LY')}`)
  ].join(',');

  const csvContent = BOM + headers.join(',') + '\r\n' + rows.join('\r\n') + '\r\n' + summaryRow;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `AdasaPro_Financial_Report_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  showToast('تم تصدير التقرير المالي لإكسيل بنجاح 📊✓');
}

// ================= CUSTOMER STATEMENT OF ACCOUNT (A4 PRINT & WHATSAPP) =================
let lastGeneratedStatement = null;

function openClientStatement(clientId) {
  playClickSound();
  const client = getClientById(clientId);
  if (!client) return;

  const clientSessions = getSessionsForClient(clientId);
  const fin = calculateClientTotalFinance(clientId);
  const wordsAmount = numberToArabicWordsLibyanDinar(fin.remaining);
  const stmtCode = `STMT-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${(client.id.replace('cli-', '').slice(-4) || '001')}`;
  const todayFormatted = new Date().toLocaleDateString('ar-LY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const allPayments = [];
  clientSessions.forEach(s => {
    (s.payments || []).forEach(p => {
      allPayments.push({
        ...p,
        sessionType: s.sessionType,
        sessionDate: s.date
      });
    });
  });
  allPayments.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  lastGeneratedStatement = {
    stmtCode,
    date: todayFormatted,
    client,
    fin,
    wordsAmount,
    sessionsCount: clientSessions.length,
    paymentsCount: allPayments.length
  };

  const printArea = document.getElementById('statement-print-area');
  if (printArea) {
    printArea.innerHTML = `
      <!-- Statement Header -->
      <div class="statement-header">
        <div class="statement-brand-col">
          ${studioProfile.logo ? `
            <img src="${studioProfile.logo}" alt="شعار الاستوديو" class="statement-logo-img">
          ` : `
            <div style="width: 48px; height: 48px; border-radius: 10px; background: #0F172A; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">📷</div>
          `}
          <div>
            <h2 style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin: 0 0 0.15rem;">${escapeHTML(studioProfile.studioName || 'عدسة برو للتصوير والإنتاج')}</h2>
            <div style="font-size: 0.76rem; color: #64748B;">
              المشرف: ${escapeHTML(studioProfile.photogName || 'المصور')} ${studioProfile.phone ? `• هاتف: ${escapeHTML(studioProfile.phone)}` : ''} ${studioProfile.city ? `• ${escapeHTML(studioProfile.city)}` : ''}
            </div>
          </div>
        </div>

        <div class="statement-meta-col">
          <span class="statement-doc-type">كشف حساب مالي تفصيلي</span>
          <div style="font-size: 0.78rem; color: #334155; line-height: 1.6;">
            <div><strong>رقم الكشف:</strong> <span dir="ltr" style="font-weight: 700;">#${stmtCode}</span></div>
            <div><strong>تاريخ الإصدار:</strong> ${todayFormatted}</div>
            <div><strong>العملة:</strong> الدينار الليبي (د.ل)</div>
          </div>
        </div>
      </div>

      <!-- Client Info Box -->
      <div class="statement-client-box">
        <div>
          <span style="font-size: 0.72rem; color: #64748B; font-weight: 700; display: block; margin-bottom: 0.2rem;">بيانات الزبون / الجهة:</span>
          <h3 style="font-size: 1.05rem; font-weight: 800; color: #0F172A; margin: 0 0 0.25rem;">${escapeHTML(client.name)}</h3>
          <span style="font-size: 0.78rem; color: #475569;">${escapeHTML(client.type || 'زبون')} • هاتف: <strong dir="ltr">${escapeHTML(client.phone || 'غير مسجل')}</strong></span>
        </div>
        <div style="text-align: left;">
          <span class="pill-badge ${fin.remaining > 0 ? 'badge-danger-soft' : 'badge-success-soft'}" style="font-size: 0.82rem; padding: 0.35rem 0.85rem;">
            ${fin.remaining > 0 ? `متبقي دين: ${fin.remaining.toLocaleString()} د.ل` : 'الحساب مسدد بالكامل ✓'}
          </span>
        </div>
      </div>

      <!-- Financial Totals Strip -->
      <div class="statement-fin-strip">
        <div class="statement-fin-card">
          <span class="statement-fin-title">إجمالي الاتفاقيات</span>
          <span class="statement-fin-val" style="color: #0F172A;">${fin.total.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div class="statement-fin-card">
          <span class="statement-fin-title">إجمالي المدفوعات المستلمة</span>
          <span class="statement-fin-val" style="color: #059669;">${fin.paid.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div class="statement-fin-card">
          <span class="statement-fin-title">الرصيد المتبقي المطلوب</span>
          <span class="statement-fin-val" style="color: ${fin.remaining > 0 ? '#DC2626' : '#059669'};">${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
        <div class="statement-fin-card">
          <span class="statement-fin-title">نسبة التحصيل</span>
          <span class="statement-fin-val" style="color: #2563EB;">${fin.total > 0 ? Math.round((fin.paid / fin.total) * 100) : 100}%</span>
        </div>
      </div>

      <!-- Section: Sessions List -->
      <h4 style="font-size: 0.88rem; font-weight: 800; color: #0F172A; margin: 1.25rem 0 0.5rem;">سجل جلسات التصوير والاتفاقيات (${clientSessions.length})</h4>
      <table class="statement-table">
        <thead>
          <tr>
            <th style="width: 35px;">#</th>
            <th>نوع الجلسة / الوصف</th>
            <th>التاريخ</th>
            <th>قيمة الاتفاق</th>
            <th>المدفوع</th>
            <th>المتبقي</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          ${clientSessions.length === 0 ? `
            <tr><td colspan="7" style="text-align: center; color: #64748B;">لا توجد جلسات مسجلة لهذا الزبون.</td></tr>
          ` : clientSessions.map((s, idx) => {
            const sf = calculateSessionFinance(s);
            return `
              <tr>
                <td style="font-weight: 700; color: #64748B;">${idx + 1}</td>
                <td><strong>${escapeHTML(s.sessionType)}</strong> ${s.location ? `<br><small style="color: #64748B;">الموقع: ${escapeHTML(s.location)}</small>` : ''}</td>
                <td>${s.date}</td>
                <td style="font-weight: 700;">${sf.total.toLocaleString()} د.ل</td>
                <td style="color: #059669; font-weight: 700;">${sf.paid.toLocaleString()} د.ل</td>
                <td style="color: ${sf.remaining > 0 ? '#DC2626' : '#059669'}; font-weight: 800;">${sf.remaining.toLocaleString()} د.ل</td>
                <td><span style="font-size: 0.72rem; padding: 0.15rem 0.45rem; background: #F1F5F9; border-radius: 4px;">${s.status}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>

      <!-- Section: Payments History -->
      <h4 style="font-size: 0.88rem; font-weight: 800; color: #0F172A; margin: 1.25rem 0 0.5rem;">سندات القبض والدفعات المستلمة (${allPayments.length})</h4>
      <table class="statement-table">
        <thead>
          <tr>
            <th style="width: 35px;">#</th>
            <th>تاريخ الدفعة</th>
            <th>طريقة الدفع</th>
            <th>البيان / ملاحظة الدفعة</th>
            <th>الجلسة المرتبطة</th>
            <th>المبلغ المقبوض</th>
          </tr>
        </thead>
        <tbody>
          ${allPayments.length === 0 ? `
            <tr><td colspan="6" style="text-align: center; color: #64748B;">لم يتم استلام أي دفعات نقدية مسجلة بعد.</td></tr>
          ` : allPayments.map((p, idx) => `
            <tr>
              <td style="font-weight: 700; color: #64748B;">${idx + 1}</td>
              <td>${p.date}</td>
              <td><span style="font-size: 0.74rem;">${escapeHTML(p.method || 'كاش / نقداً')}</span></td>
              <td><strong>${escapeHTML(p.note || 'دفعة مالية')}</strong></td>
              <td><small style="color: #64748B;">${escapeHTML(p.sessionType)}</small></td>
              <td style="font-weight: 800; color: #047857; font-size: 0.92rem;">+${Number(p.amount).toLocaleString()} د.ل</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Net Balance & Arabic Words Banner -->
      <div style="margin-top: 1.15rem; background: ${fin.remaining > 0 ? '#FEF2F2' : '#F0FDF4'}; border: 1.5px solid ${fin.remaining > 0 ? '#FCA5A5' : '#86EFAC'}; border-radius: 8px; padding: 0.9rem 1.15rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <span style="font-size: 0.75rem; color: ${fin.remaining > 0 ? '#991B1B' : '#166534'}; font-weight: 700; display: block;">الرصيد الصافي المتبقي كتابةً وتفقيطاً:</span>
          <strong style="font-size: 0.92rem; color: ${fin.remaining > 0 ? '#B91C1C' : '#15803D'};">${fin.remaining > 0 ? wordsAmount : 'مسدد بالكامل ولا توجد أي مطالبات مالية'}</strong>
        </div>
        <div style="text-align: left;">
          <span style="font-size: 0.74rem; color: #64748B; display: block;">الصافي النهائي:</span>
          <span style="font-size: 1.35rem; font-weight: 900; color: ${fin.remaining > 0 ? '#DC2626' : '#059669'};">${fin.remaining.toLocaleString()} ${CURRENCY_LABEL}</span>
        </div>
      </div>

      ${studioProfile.paymentNotes ? `
        <div style="margin-top: 0.85rem; padding: 0.65rem 0.9rem; background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 6px; font-size: 0.75rem; color: #475569;">
          <strong>بيانات الحساب والتحويل المعتمدة:</strong> ${escapeHTML(studioProfile.paymentNotes)}
        </div>
      ` : ''}

      <!-- Signatures Grid -->
      <div class="statement-signatures-grid">
        <div class="statement-sig-col">
          <h4>اعتماد الحسابات (إدارة الاستوديو):</h4>
          <div style="font-size: 0.78rem; color: #64748B; margin-top: 0.25rem;">${escapeHTML(studioProfile.studioName || 'عدسة برو')}</div>
          <div class="statement-sig-line">
            <span>التوقيع والختم: ............................</span>
          </div>
        </div>
        <div class="statement-sig-col">
          <h4>اطلاع وموافقة العميل:</h4>
          <div style="font-size: 0.78rem; color: #64748B; margin-top: 0.25rem;">الاسم: ${escapeHTML(client.name)}</div>
          <div class="statement-sig-line">
            <span>التوقيع: ............................</span>
          </div>
        </div>
      </div>

      <!-- Watermark Footer -->
      <div class="statement-footer-watermark">
        صدر هذا الكشف رسمياً من منظومة عدسة برو (AdasaPro) لإدارة أعمال وتوثيق استوديوهات التصوير • نسعد دائماً بخدمتكم
      </div>
    `;
  }

  document.getElementById('statement-modal')?.classList.add('show');
}

function closeClientStatement() {
  document.getElementById('statement-modal')?.classList.remove('show');
}

function printClientStatement() {
  playClickSound();
  window.print();
}

function shareClientStatementWhatsApp() {
  playClickSound();
  if (!lastGeneratedStatement) return;
  const { stmtCode, client, fin, wordsAmount } = lastGeneratedStatement;

  const msg = `مرحباً ${client.name} 📄
مرفق ملخص كشف الحساب المالي من *${studioProfile.studioName || 'عدسة برو'}*:

• *رقم الكشف:* #${stmtCode}
• *إجمالي الاتفاقيات:* ${fin.total.toLocaleString()} د.ل
• *إجمالي المدفوع:* ${fin.paid.toLocaleString()} د.ل
• *الرصيد المتبقي:* ${fin.remaining.toLocaleString()} د.ل
(${fin.remaining > 0 ? wordsAmount : 'مسدد بالكامل ✓'})
${studioProfile.paymentNotes ? `\n💳 بيانات السداد: ${studioProfile.paymentNotes}` : ''}

شاكرين حسن تعاملكم وثقتكم بنا! 📸`;

  openWhatsAppChat(client.phone, msg);
}

async function sendStatementPdfWhatsApp() {
  playClickSound();
  if (!lastGeneratedStatement) {
    showToast('يرجى فتح كشف الحساب أولاً.');
    return;
  }
  const { stmtCode, client, fin, wordsAmount } = lastGeneratedStatement;
  const cleanPhone = cleanPhoneForWhatsApp(client.phone);
  const element = document.getElementById('statement-print-area');
  if (!element) return;

  const btn = document.getElementById('btn-statement-whatsapp-pdf');
  const originalHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>جاري تجهيز كشف الحساب A4... ⏳</span>`;
  }

  try {
    if (typeof html2pdf === 'undefined') {
      showToast('جاري تحميل محرك الـ PDF، يرجى المحاولة بعد لحظة...', 'info');
      return;
    }

    const fileName = `كشف_حساب_${cleanFileName(client.name || 'زبون')}_${stmtCode || 'STMT'}.pdf`;

    const pdfBlob = await generatePdfBlobFromElement(element, fileName, {
      pagebreak: { mode: ['css', 'legacy'] }
    });

    triggerBlobDownload(pdfBlob, fileName);

    const shareText = `السلام عليكم ورحمة الله،\nمرفق كشف حسابك المالي والعمليات المسجلة (#${stmtCode}) من ${studioProfile.studioName || 'عدسة برو'}.\nشاكرين حسن تعاملكم معنا! 📸`;

    const isMobile = isMobileBrowser();

    if (isMobile) {
      setTimeout(() => {
        openWhatsAppChat(cleanPhone, shareText);
      }, 500);

      showToast(`تم تنزيل كشف الحساب كملف PDF رسمي (A4) وفتح محادثة الزبون مباشرة! اضغط على 📎 لإرفاق الملف فوراً.`, 'success', 8000);
    } else {
      setTimeout(() => {
        openWhatsAppChat(cleanPhone, shareText);
      }, 500);

      showToast(`تم تنزيل كشف الحساب (${fileName}) وفتح تطبيق الواتساب! يمكنك سحب الملف أو الضغط على 📎 لإرساله فوراً.`, 'success', 8000);
    }
  } catch (err) {
    console.error('Error sharing statement PDF:', err);
    showToast('تعذر توليد الـ PDF تلقائياً، يمكنك استخدام خيار طباعة / حفظ PDF كبديل.', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
    }
  }
}

function copyClientStatementText() {
  playClickSound();
  if (!lastGeneratedStatement) return;
  const { stmtCode, client, fin, wordsAmount } = lastGeneratedStatement;
  const msg = `كشف حساب مالي تفصيلي - ${studioProfile.studioName || 'عدسة برو'}
رقم الكشف: #${stmtCode}
الزبون: ${client.name} (${client.phone})
--------------------------------------
• إجمالي الاتفاقيات: ${fin.total.toLocaleString()} د.ل
• إجمالي المدفوع: ${fin.paid.toLocaleString()} د.ل
• المتبقي النهائي: ${fin.remaining.toLocaleString()} د.ل (${fin.remaining > 0 ? wordsAmount : 'مسدد بالكامل'})
--------------------------------------
${studioProfile.paymentNotes ? `بيانات الحساب: ${studioProfile.paymentNotes}\n` : ''}تاريخ الإصدار: ${new Date().toLocaleDateString('ar-LY')}`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast('تم نسخ نص كشف الحساب للحافظة 📋');
  }).catch(() => {
    alert('تعذر النسخ التلقائي.');
  });
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
  document.getElementById('form-session-type')?.addEventListener('change', handleSessionTypeChange);
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

  // Financial Period Filter Pills
  document.querySelectorAll('#finance-period-pills .filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      playClickSound();
      document.querySelectorAll('#finance-period-pills .filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFinancePeriod = pill.getAttribute('data-period') || 'all';
      renderFinancesTab();
    });
  });

  // Receipt Modal listeners
  document.getElementById('close-receipt-modal-btn')?.addEventListener('click', closePaymentReceipt);

  // Studio Profile Settings listeners
  document.getElementById('btn-studio-settings')?.addEventListener('click', openStudioSettingsModal);
  document.getElementById('sidebar-studio-btn')?.addEventListener('click', openStudioSettingsModal);
  document.getElementById('mobile-studio-settings-btn')?.addEventListener('click', openStudioSettingsModal);
  document.getElementById('close-studio-settings-btn')?.addEventListener('click', closeStudioSettingsModal);

  // Financial Excel Export
  document.getElementById('btn-export-finance-excel')?.addEventListener('click', exportFinancialsToExcel);

  // Client Statement listeners
  document.getElementById('close-statement-modal-btn')?.addEventListener('click', closeClientStatement);

  // Contract Generator listeners
  document.getElementById('open-contract-modal-btn')?.addEventListener('click', () => openContractModal());
  document.getElementById('close-contract-modal-btn')?.addEventListener('click', closeContractModal);
  document.getElementById('contract-total-price')?.addEventListener('input', updateContractLiveCalculations);
  document.getElementById('contract-deposit-price')?.addEventListener('input', updateContractLiveCalculations);

  // Saved Contracts Archive listeners
  document.getElementById('open-contracts-archive-btn')?.addEventListener('click', () => openContractsArchiveModal());
  document.getElementById('close-contracts-archive-btn')?.addEventListener('click', closeContractsArchiveModal);

  // Studio Settings Modal listener
  document.getElementById('open-studio-modal-btn')?.addEventListener('click', () => openStudioSettingsModal());

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        checkAnyModalOpen();
      }
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
window.sendContractPdfWhatsApp = sendContractPdfWhatsApp;
window.handleContractServiceTypeChange = handleContractServiceTypeChange;
window.handleContractWorkTypeChange = handleContractWorkTypeChange;
window.addToGoogleCalendar = addToGoogleCalendar;
window.downloadIcsCalendar = downloadIcsCalendar;
window.toggleMobileMetrics = toggleMobileMetrics;
window.dismissBackupReminder = dismissBackupReminder;
window.checkBackupReminder = checkBackupReminder;
window.checkOnboardingState = checkOnboardingState;
window.openPaymentReceipt = openPaymentReceipt;
window.closePaymentReceipt = closePaymentReceipt;
window.printReceiptDocument = printReceiptDocument;
window.shareReceiptWhatsApp = shareReceiptWhatsApp;
window.sendReceiptPdfWhatsApp = sendReceiptPdfWhatsApp;
window.copyReceiptText = copyReceiptText;
window.shareDriveDeliveryWhatsApp = shareDriveDeliveryWhatsApp;
window.numberToArabicWordsLibyanDinar = numberToArabicWordsLibyanDinar;
window.studioProfile = studioProfile;
window.loadStudioProfile = loadStudioProfile;
window.saveStudioProfile = saveStudioProfile;
window.renderStudioProfile = renderStudioProfile;
window.openStudioSettingsModal = openStudioSettingsModal;
window.closeStudioSettingsModal = closeStudioSettingsModal;
window.handleStudioLogoUpload = handleStudioLogoUpload;
window.removeStudioLogo = removeStudioLogo;
window.handleSaveStudioProfile = handleSaveStudioProfile;
window.exportFinancialsToExcel = exportFinancialsToExcel;
window.openClientStatement = openClientStatement;
window.closeClientStatement = closeClientStatement;
window.printClientStatement = printClientStatement;
window.shareClientStatementWhatsApp = shareClientStatementWhatsApp;
window.sendStatementPdfWhatsApp = sendStatementPdfWhatsApp;
window.copyClientStatementText = copyClientStatementText;
window.editSession = editSession;
window.sendWhatsAppAppointmentReminder = sendWhatsAppAppointmentReminder;
window.exportDataAsJSON = exportDataAsJSON;
window.openGearChecklistModal = openGearChecklistModal;
window.isMobileBrowser = isMobileBrowser;
window.cleanPhoneForWhatsApp = cleanPhoneForWhatsApp;
window.getWhatsAppUrl = getWhatsAppUrl;
window.openWhatsAppChat = openWhatsAppChat;
window.autoFillContractSession = autoFillContractSession;
window.renderContractHTML = renderContractHTML;
window.openContractsArchiveModal = openContractsArchiveModal;
window.closeContractsArchiveModal = closeContractsArchiveModal;
window.filterContractsArchive = filterContractsArchive;
window.renderContractsArchive = renderContractsArchive;
window.loadAndOpenContract = loadAndOpenContract;
window.exportSavedContractPdf = exportSavedContractPdf;
window.sendSavedContractWhatsApp = sendSavedContractWhatsApp;
window.deleteSavedContract = deleteSavedContract;
window.updateContractsArchiveCountBadge = updateContractsArchiveCountBadge;
window.handleSessionDeliverablesTypeChange = handleSessionDeliverablesTypeChange;
window.updateSessionLiveProgress = updateSessionLiveProgress;
window.adjustSessionDeliverable = adjustSessionDeliverable;
window.promptSetSessionDeliverable = promptSetSessionDeliverable;
window.promptAddExtraVideos = promptAddExtraVideos;
window.removeExtraVideos = removeExtraVideos;
window.initModalScrollLock = initModalScrollLock;
window.checkAnyModalOpen = checkAnyModalOpen;
window.setBodyScrollLocked = setBodyScrollLocked;

document.addEventListener('DOMContentLoaded', initApp);
