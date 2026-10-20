/**
 * PromptHub - Interactive Client Application Logic
 */

(function () {
  'use strict';

  // --- SVG Icons Catalog ---
  const ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    feather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    'book-open': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"></path><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>',
    activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"></path></svg>',
    church: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22V11l-6-5-6 5v11h12z"></path><path d="M12 2v4"></path><path d="M10 4h4"></path><path d="M10 22v-5a2 2 0 0 1 4 0v5"></path></svg>'
  };

  // --- State ---
  const initialFavs = JSON.parse(localStorage.getItem('prompthub_favorites') || '["dev-web-init"]');
  if (!initialFavs.includes('dev-web-init')) {
    initialFavs.unshift('dev-web-init');
  }

  const initialGeminiFavs = JSON.parse(localStorage.getItem('gemini_favorites') || '["gem-factcheck", "gem-deepresearch", "gem-gmail"]');

  const state = {
    currentView: 'prompts', // 'prompts' | 'gemini'
    activeCategory: 'all',
    searchQuery: '',
    onlyFavorites: false,
    favorites: initialFavs,
    activeModalPrompt: null,

    // Estado para Códigos de Gemini
    activeGeminiCategory: 'all',
    activeGeminiType: 'all', // 'all' | 'workspace' | 'command' | 'directive'
    geminiSearchQuery: '',
    onlyGeminiFavorites: false,
    geminiFavorites: initialGeminiFavs
  };

  // --- DOM Elements ---
  const elements = {
    // Navigation Tabs & Sections
    navTabPrompts: document.getElementById('navTabPrompts'),
    navTabGemini: document.getElementById('navTabGemini'),
    navTabConfig: document.getElementById('navTabConfig'),
    sectionPrompts: document.getElementById('sectionPrompts'),
    sectionGemini: document.getElementById('sectionGemini'),
    sectionConfig: document.getElementById('sectionConfig'),

    // Prompts Elements
    categoriesList: document.getElementById('categoriesList'),
    promptsGrid: document.getElementById('promptsGrid'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    promptsCount: document.getElementById('promptsCount'),
    favFilterBtn: document.getElementById('favFilterBtn'),
    headerFavBtn: document.getElementById('headerFavBtn'),
    headerFavCount: document.getElementById('headerFavCount'),

    // Gemini Elements
    searchGeminiInput: document.getElementById('searchGeminiInput'),
    searchGeminiClearBtn: document.getElementById('searchGeminiClearBtn'),
    geminiTypeFilters: document.getElementById('geminiTypeFilters'),
    geminiCategoriesList: document.getElementById('geminiCategoriesList'),
    geminiCount: document.getElementById('geminiCount'),
    geminiFavFilterBtn: document.getElementById('geminiFavFilterBtn'),
    geminiGrid: document.getElementById('geminiGrid'),
    footerGeminiLink: document.getElementById('footerGeminiLink'),
    footerConfigLink: document.getElementById('footerConfigLink'),

    // Instructions Builder Elements
    builderRole: document.getElementById('builderRole'),
    builderTone: document.getElementById('builderTone'),
    ruleNoFluff: document.getElementById('ruleNoFluff'),
    ruleCodeBestPractices: document.getElementById('ruleCodeBestPractices'),
    ruleSources: document.getElementById('ruleSources'),
    ruleMarkdown: document.getElementById('ruleMarkdown'),
    ruleSpanish: document.getElementById('ruleSpanish'),
    ruleAskBeforeAssuming: document.getElementById('ruleAskBeforeAssuming'),
    builderPreviewText: document.getElementById('builderPreviewText'),
    builderCharCount: document.getElementById('builderCharCount'),
    builderCopyBtn: document.getElementById('builderCopyBtn'),
    geminiInstructionsTemplates: document.getElementById('geminiInstructionsTemplates'),

    // Modal
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalTitle: document.getElementById('modalTitle'),
    modalDesc: document.getElementById('modalDesc'),
    modalFormFields: document.getElementById('modalFormFields'),
    modalPreview: document.getElementById('modalPreview'),
    modalVarsCount: document.getElementById('modalVarsCount'),
    modalPreviewStats: document.getElementById('modalPreviewStats'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalCancelBtn: document.getElementById('modalCancelBtn'),
    modalCopyBtn: document.getElementById('modalCopyBtn'),
    toastContainer: document.getElementById('toastContainer'),

    // Database Manager Elements
    headerDbBtn: document.getElementById('headerDbBtn'),
    footerDbBtn: document.getElementById('footerDbBtn'),
    configDbOpenBtn: document.getElementById('configDbOpenBtn'),
    configDbDownloadBtn: document.getElementById('configDbDownloadBtn'),
    dbModalBackdrop: document.getElementById('dbModalBackdrop'),
    dbModalCloseBtn: document.getElementById('dbModalCloseBtn'),
    dbDownloadBtn: document.getElementById('dbDownloadBtn'),
    dbFileInput: document.getElementById('dbFileInput'),
    dbResetBtn: document.getElementById('dbResetBtn'),
    dbStatusDot: document.getElementById('dbStatusDot'),
    dbStatusText: document.getElementById('dbStatusText'),
    dbStatusSub: document.getElementById('dbStatusSub'),
    dbCountPrompts: document.getElementById('dbCountPrompts'),
    dbCountCodes: document.getElementById('dbCountCodes'),
    dbCountInstructions: document.getElementById('dbCountInstructions'),
    dbCountCategories: document.getElementById('dbCountCategories')
  };

  // =========================================================================
  // Database Manager: Gestión desacoplada de Prompts e Instrucciones en JSON
  // =========================================================================

  const DB_STORAGE_KEY = 'prompts_world_database_custom';

  const DatabaseManager = {
    current: null,
    isCustomData: false,

    async init() {
      // 1. Intentar cargar versión personalizada guardada en localStorage
      try {
        const stored = localStorage.getItem(DB_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && Array.isArray(parsed.prompts)) {
            this.current = parsed;
            this.isCustomData = true;
            return;
          }
        }
      } catch (e) {
        console.warn('Error al leer base de datos de localStorage:', e);
      }

      // 2. Si no hay personalizada y estamos en HTTP/HTTPS, intentar cargar el archivo JSON
      if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
        try {
          const response = await fetch('data/prompts-database.json', { cache: 'no-cache' });
          if (response.ok) {
            this.current = await response.json();
            this.isCustomData = false;
            return;
          }
        } catch (e) {
          console.warn('Fetch de prompts-database.json falló, usando respaldo en memoria:', e);
        }
      }

      // 3. Respaldo por defecto: window.PROMPTS_WORLD_DEFAULT_DATABASE o fallback estructurado
      if (typeof window !== 'undefined' && window.PROMPTS_WORLD_DEFAULT_DATABASE) {
        this.current = JSON.parse(JSON.stringify(window.PROMPTS_WORLD_DEFAULT_DATABASE));
      } else {
        this.current = {
          metadata: {
            name: "PromptsWorld Unified Database",
            version: "1.1.0",
            description: "Base de datos unificada de Prompts Maestros, Códigos Secretos para Gemini e Instrucciones de Contexto Personal.",
            lastUpdated: "2026-10-19"
          },
          categories: typeof CATEGORIES_DATA !== 'undefined' ? CATEGORIES_DATA : [],
          geminiCategories: typeof GEMINI_CATEGORIES !== 'undefined' ? GEMINI_CATEGORIES : [],
          instructionsTemplates: typeof GEMINI_INSTRUCTIONS_TEMPLATES !== 'undefined' ? GEMINI_INSTRUCTIONS_TEMPLATES : [],
          geminiCodes: typeof GEMINI_CODES_DATA !== 'undefined' ? GEMINI_CODES_DATA : [],
          prompts: typeof PROMPTS_DATA !== 'undefined' ? PROMPTS_DATA : []
        };
      }
      this.isCustomData = false;
    },

    getPrompts() {
      return (this.current && Array.isArray(this.current.prompts)) ? this.current.prompts : (typeof PROMPTS_DATA !== 'undefined' ? PROMPTS_DATA : []);
    },

    getCategories() {
      return (this.current && Array.isArray(this.current.categories)) ? this.current.categories : (typeof CATEGORIES_DATA !== 'undefined' ? CATEGORIES_DATA : []);
    },

    getGeminiCodes() {
      return (this.current && Array.isArray(this.current.geminiCodes)) ? this.current.geminiCodes : (typeof GEMINI_CODES_DATA !== 'undefined' ? GEMINI_CODES_DATA : []);
    },

    getGeminiCategories() {
      return (this.current && Array.isArray(this.current.geminiCategories)) ? this.current.geminiCategories : (typeof GEMINI_CATEGORIES !== 'undefined' ? GEMINI_CATEGORIES : []);
    },

    getInstructionsTemplates() {
      return (this.current && Array.isArray(this.current.instructionsTemplates)) ? this.current.instructionsTemplates : (typeof GEMINI_INSTRUCTIONS_TEMPLATES !== 'undefined' ? GEMINI_INSTRUCTIONS_TEMPLATES : []);
    },

    exportJSON() {
      const dataToExport = this.current ? JSON.parse(JSON.stringify(this.current)) : {};
      if (!dataToExport.metadata) dataToExport.metadata = {};
      dataToExport.metadata.lastExported = new Date().toISOString();
      dataToExport.metadata.totalPrompts = this.getPrompts().length;
      dataToExport.metadata.totalGeminiCodes = this.getGeminiCodes().length;
      dataToExport.metadata.totalInstructionsTemplates = this.getInstructionsTemplates().length;

      const jsonStr = JSON.stringify(dataToExport, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'prompts-database.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },

    importJSON(jsonString) {
      let data;
      try {
        data = JSON.parse(jsonString);
      } catch (err) {
        throw new Error('El archivo no tiene un formato JSON válido.');
      }

      let newDb = {};
      if (Array.isArray(data)) {
        newDb = JSON.parse(JSON.stringify(this.current || {}));
        newDb.prompts = data;
      } else if (typeof data === 'object' && data !== null) {
        newDb = { ...this.current, ...data };
        if (!Array.isArray(newDb.prompts)) {
          throw new Error('El archivo JSON debe contener un array "prompts".');
        }
      } else {
        throw new Error('Estructura de JSON no compatible.');
      }

      this.current = newDb;
      this.isCustomData = true;
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(newDb));
      return {
        prompts: this.getPrompts().length,
        codes: this.getGeminiCodes().length,
        instructions: this.getInstructionsTemplates().length
      };
    },

    resetToDefault() {
      localStorage.removeItem(DB_STORAGE_KEY);
      this.isCustomData = false;
      if (typeof window !== 'undefined' && window.PROMPTS_WORLD_DEFAULT_DATABASE) {
        this.current = JSON.parse(JSON.stringify(window.PROMPTS_WORLD_DEFAULT_DATABASE));
      }
    },

    isCustom() {
      return this.isCustomData;
    }
  };

  // --- Modal de Base de Datos ---
  function openDbModal() {
    if (!elements.dbModalBackdrop) return;
    updateDatabaseModalStatus();
    elements.dbModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDbModal() {
    if (!elements.dbModalBackdrop) return;
    elements.dbModalBackdrop.classList.remove('open');
    if (!elements.modalBackdrop?.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function updateDatabaseModalStatus() {
    const isCustom = DatabaseManager.isCustom();
    const prompts = DatabaseManager.getPrompts();
    const codes = DatabaseManager.getGeminiCodes();
    const instructions = DatabaseManager.getInstructionsTemplates();
    const categories = DatabaseManager.getCategories();

    if (elements.dbStatusDot) {
      elements.dbStatusDot.className = 'db-status-indicator' + (isCustom ? ' custom' : '');
    }
    if (elements.dbStatusText) {
      elements.dbStatusText.textContent = isCustom
        ? 'Base de Datos: Personalizada (Guardada en Navegador)'
        : 'Base de Datos: Predeterminada (Original)';
    }
    if (elements.dbStatusSub) {
      elements.dbStatusSub.innerHTML = isCustom
        ? 'Fuente: <code>Almacenamiento Local (Custom JSON)</code>'
        : 'Archivo fuente: <code>data/prompts-database.json</code>';
    }
    if (elements.dbCountPrompts) elements.dbCountPrompts.textContent = prompts.length;
    if (elements.dbCountCodes) elements.dbCountCodes.textContent = codes.length;
    if (elements.dbCountInstructions) elements.dbCountInstructions.textContent = instructions.length;
    if (elements.dbCountCategories) elements.dbCountCategories.textContent = categories.length;
  }

  function updateHeaderBadges() {
    const totalPrompts = DatabaseManager.getPrompts().length;
    const totalCodes = DatabaseManager.getGeminiCodes().length;

    const promptsBadge = elements.navTabPrompts?.querySelector('.nav-count-badge');
    if (promptsBadge) promptsBadge.textContent = totalPrompts + '+';

    const codesBadge = elements.navTabGemini?.querySelector('.nav-count-badge');
    if (codesBadge) codesBadge.textContent = totalCodes + ' Atajos';
  }

  function refreshEntireAppAfterDbChange() {
    renderCategories();
    renderPrompts();
    renderGeminiCategories();
    renderGeminiCodes();
    renderInstructionsTemplates();
    updateInstructionsBuilder();
    updateDatabaseModalStatus();
    updateHeaderBadges();
  }

  // --- Helpers ---
  function getIcon(name) {
    return ICONS[name] || ICONS.code;
  }

  function saveFavorites() {
    localStorage.setItem('prompthub_favorites', JSON.stringify(state.favorites));
    updateFavoritesCount();
  }

  function updateFavoritesCount() {
    const count = state.favorites.length;
    elements.headerFavCount.textContent = count;
    elements.headerFavCount.style.display = count > 0 ? 'flex' : 'none';
  }

  function showToast(message, iconSvg = ICONS.check) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  async function copyToClipboard(text, successMsg = '¡Prompt copiado al portapapeles!') {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMsg);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(successMsg);
    }
  }

  function highlightVariables(text) {
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return escaped
      .replace(/\[([A-Z0-9_ÁÉÍÓÚÑ]+)\]/g, '<span class="var-tag">[$1]</span>')
      .replace(/\[(ESCRIBE AQUÍ EL TEMA, FECHA Y DETALLES DE LA ACTIVIDAD O NOTICIA)\]/g, '<span class="var-tag">[$1]</span>');
  }

  // --- Filtering & Searching ---
  function getFilteredPrompts() {
    const query = state.searchQuery.toLowerCase().trim();

    return DatabaseManager.getPrompts().filter((prompt) => {
      // Category filter
      if (state.activeCategory !== 'all' && prompt.category !== state.activeCategory) {
        return false;
      }

      // Favorites filter
      if (state.onlyFavorites && !state.favorites.includes(prompt.id)) {
        return false;
      }

      // Search query filter
      if (query) {
        const inTitle = prompt.title.toLowerCase().includes(query);
        const inDesc = prompt.description.toLowerCase().includes(query);
        const inTemplate = prompt.template.toLowerCase().includes(query);
        const inTags = prompt.tags.some(tag => tag.toLowerCase().includes(query));
        const inCategory = prompt.categoryLabel.toLowerCase().includes(query);

        return inTitle || inDesc || inTemplate || inTags || inCategory;
      }

      return true;
    });
  }

  // --- Render Categories ---
  function renderCategories() {
    elements.categoriesList.innerHTML = DatabaseManager.getCategories().map((cat) => {
      const isActive = state.activeCategory === cat.id && !state.onlyFavorites;
      return `
        <button class="category-chip ${isActive ? 'active' : ''}" data-category="${cat.id}">
          ${getIcon(cat.icon)}
          <span>${cat.label}</span>
        </button>
      `;
    }).join('');
  }

  // --- Render Cards ---
  function renderPrompts() {
    const filtered = getFilteredPrompts();
    elements.promptsCount.textContent = filtered.length;

    if (filtered.length === 0) {
      elements.promptsGrid.innerHTML = `
        <div class="empty-state animate-fade-in">
          <div class="empty-state-icon">
            ${getIcon('search')}
          </div>
          <h3>No se encontraron prompts</h3>
          <p>Intenta ajustar tu búsqueda, cambiar de categoría o remover el filtro de favoritos.</p>
          <button class="btn-action-secondary" id="resetFiltersBtn">Restablecer filtros</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.searchQuery = '';
          state.activeCategory = 'all';
          state.onlyFavorites = false;
          elements.searchInput.value = '';
          elements.searchClearBtn.style.display = 'none';
          elements.favFilterBtn.classList.remove('active');
          renderCategories();
          renderPrompts();
        });
      }
      return;
    }

    elements.promptsGrid.innerHTML = filtered.map((prompt) => {
      const isFav = state.favorites.includes(prompt.id);
      const highlightedPreview = highlightVariables(prompt.template);

      return `
        <article class="prompt-card animate-fade-in" data-id="${prompt.id}">
          <div class="card-header">
            <div class="card-title-group">
              <span class="card-category-tag">${prompt.categoryLabel}</span>
              <h3 class="card-title">${prompt.title}</h3>
            </div>
            <button class="card-favorite-btn ${isFav ? 'favorited' : ''}" data-fav-id="${prompt.id}" title="${isFav ? 'Eliminar de favoritos' : 'Guardar en favoritos'}">
              ${isFav ? getIcon('heartFilled') : getIcon('heart')}
            </button>
          </div>

          <p class="card-description">${prompt.description}</p>

          <div class="card-models">
            ${prompt.models.map(m => `<span class="model-badge">${m}</span>`).join('')}
          </div>

          <div class="card-preview-box">${highlightedPreview}</div>

          <div class="card-tags">
            ${prompt.tags.map(t => `<span class="card-tag" data-tag="${t}">#${t}</span>`).join('')}
          </div>

          <div class="card-actions">
            <button class="btn-action-primary copy-raw-btn" data-id="${prompt.id}">
              ${getIcon('copy')}
              <span>Copiar</span>
            </button>
            <button class="btn-action-secondary customize-btn" data-id="${prompt.id}">
              ${getIcon('edit')}
              <span>Personalizar</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // =========================================================================
  // Gemini Secret Codes: Filtering & Rendering
  // =========================================================================

  function saveGeminiFavorites() {
    localStorage.setItem('gemini_favorites', JSON.stringify(state.geminiFavorites));
  }

  function getFilteredGeminiCodes() {
    const list = DatabaseManager.getGeminiCodes();
    if (!list || list.length === 0) return [];
    const query = state.geminiSearchQuery.toLowerCase().trim();

    return list.filter((item) => {
      // Category filter
      if (state.activeGeminiCategory !== 'all' && item.category !== state.activeGeminiCategory) {
        return false;
      }

      // Syntax type filter (workspace, command, directive)
      if (state.activeGeminiType !== 'all' && item.type !== state.activeGeminiType) {
        return false;
      }

      // Favorites filter
      if (state.onlyGeminiFavorites && !state.geminiFavorites.includes(item.id)) {
        return false;
      }

      // Search query filter
      if (query) {
        const inCode = item.code.toLowerCase().includes(query);
        const inDesc = item.description.toLowerCase().includes(query);
        const inDescEs = item.descriptionEs.toLowerCase().includes(query);
        const inCat = item.categoryLabel.toLowerCase().includes(query);
        const inExample = item.example.toLowerCase().includes(query);
        const inTags = item.tags && item.tags.some(t => t.toLowerCase().includes(query));

        return inCode || inDesc || inDescEs || inCat || inExample || inTags;
      }

      return true;
    });
  }

  function renderGeminiCategories() {
    if (!elements.geminiCategoriesList) return;
    const list = DatabaseManager.getGeminiCategories();

    elements.geminiCategoriesList.innerHTML = list.map((cat) => {
      const isActive = state.activeGeminiCategory === cat.id && !state.onlyGeminiFavorites;
      return `
        <button class="category-chip ${isActive ? 'active' : ''}" data-gemini-category="${cat.id}">
          ${getIcon(cat.icon)}
          <span>${cat.label}</span>
          <span class="category-chip-count">${cat.count}</span>
        </button>
      `;
    }).join('');
  }

  function renderGeminiCodes() {
    if (!elements.geminiGrid) return;
    const filtered = getFilteredGeminiCodes();
    if (elements.geminiCount) {
      elements.geminiCount.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      elements.geminiGrid.innerHTML = `
        <div class="empty-state animate-fade-in" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">
            ${getIcon('search')}
          </div>
          <h3>No se encontraron códigos de Gemini</h3>
          <p>Intenta ajustar el término de búsqueda, cambiar de categoría o remover los filtros de tipo y favoritos.</p>
          <button class="btn-action-secondary" id="resetGeminiFiltersBtn">Restablecer filtros</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetGeminiFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.geminiSearchQuery = '';
          state.activeGeminiCategory = 'all';
          state.activeGeminiType = 'all';
          state.onlyGeminiFavorites = false;
          if (elements.searchGeminiInput) elements.searchGeminiInput.value = '';
          if (elements.searchGeminiClearBtn) elements.searchGeminiClearBtn.style.display = 'none';
          if (elements.geminiFavFilterBtn) elements.geminiFavFilterBtn.classList.remove('active');
          if (elements.geminiTypeFilters) {
            elements.geminiTypeFilters.querySelectorAll('.type-filter-chip').forEach(btn => {
              btn.classList.toggle('active', btn.getAttribute('data-type') === 'all');
            });
          }
          renderGeminiCategories();
          renderGeminiCodes();
        });
      }
      return;
    }

    elements.geminiGrid.innerHTML = filtered.map((item) => {
      const isFav = state.geminiFavorites.includes(item.id);
      let typeLabel = 'Directiva';
      let badgeClass = 'badge-directive';
      if (item.type === 'workspace') {
        typeLabel = '@ Workspace';
        badgeClass = 'badge-workspace';
      } else if (item.type === 'command') {
        typeLabel = '/ Comando';
        badgeClass = 'badge-command';
      }

      return `
        <article class="gemini-card animate-fade-in" data-id="${item.id}">
          <div class="gemini-card-header">
            <div class="gemini-code-group">
              <span class="gemini-type-tag">${typeLabel}</span>
              <button class="gemini-code-badge ${badgeClass} copy-code-trigger" data-code="${escapeHtml(item.code)}" title="Clic para copiar código">
                <span>${escapeHtml(item.code)}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="gemini-category-badge">${escapeHtml(item.categoryLabel)}</span>
              <button class="card-favorite-btn gemini-fav-btn ${isFav ? 'favorited' : ''}" data-gemini-fav-id="${item.id}" title="${isFav ? 'Eliminar de favoritos' : 'Guardar en favoritos'}">
                ${isFav ? getIcon('heartFilled') : getIcon('heart')}
              </button>
            </div>
          </div>

          <p class="gemini-desc-es">${escapeHtml(item.descriptionEs)}</p>

          <div class="gemini-desc-orig" title="Descripción original del documento">
            "${escapeHtml(item.description)}"
          </div>

          <div class="gemini-example-wrapper">
            <div class="gemini-example-label">
              <span>Ejemplo en Gemini</span>
              <button class="copy-example-mini-btn" data-example="${escapeHtml(item.example)}" title="Copiar este ejemplo">
                Copiar
              </button>
            </div>
            <div class="gemini-example-text">${escapeHtml(item.example)}</div>
          </div>

          <div class="gemini-card-actions">
            <button class="btn-action-primary gemini-copy-code-btn" data-code="${escapeHtml(item.code)}">
              ${getIcon('copy')}
              <span>Copiar Código</span>
            </button>
            <button class="btn-action-secondary gemini-copy-example-btn" data-example="${escapeHtml(item.example)}">
              ${getIcon('terminal')}
              <span>Copiar con Ejemplo</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- Switch View (Prompts vs Gemini Codes vs Config) ---
  function switchView(viewName) {
    if (viewName !== 'prompts' && viewName !== 'gemini' && viewName !== 'config') return;
    state.currentView = viewName;

    const isPrompts = viewName === 'prompts';
    const isGemini = viewName === 'gemini';
    const isConfig = viewName === 'config';

    if (elements.navTabPrompts) {
      elements.navTabPrompts.classList.toggle('active', isPrompts);
      elements.navTabPrompts.setAttribute('aria-pressed', isPrompts ? 'true' : 'false');
    }
    if (elements.navTabGemini) {
      elements.navTabGemini.classList.toggle('active', isGemini);
      elements.navTabGemini.setAttribute('aria-pressed', isGemini ? 'true' : 'false');
    }
    if (elements.navTabConfig) {
      elements.navTabConfig.classList.toggle('active', isConfig);
      elements.navTabConfig.setAttribute('aria-pressed', isConfig ? 'true' : 'false');
    }

    if (elements.sectionPrompts) {
      elements.sectionPrompts.style.display = isPrompts ? 'block' : 'none';
      elements.sectionPrompts.classList.toggle('active', isPrompts);
    }

    if (elements.sectionGemini) {
      elements.sectionGemini.style.display = isGemini ? 'block' : 'none';
      elements.sectionGemini.classList.toggle('active', isGemini);
    }

    if (elements.sectionConfig) {
      elements.sectionConfig.style.display = isConfig ? 'block' : 'none';
      elements.sectionConfig.classList.toggle('active', isConfig);
    }

    // URL Hash synchronization
    const targetHash = isPrompts ? '#prompts' : (isGemini ? '#codigos-gemini' : '#config');
    if (window.location.hash !== targetHash) {
      history.replaceState(null, '', targetHash);
    }

    // Document Title
    if (isPrompts) {
      document.title = 'PromptHub — Los Mejores Prompts de IA para Desarrolladores y Creadores';
    } else if (isGemini) {
      document.title = 'Códigos Secretos Gemini (100 Atajos) — PromptHub';
    } else {
      document.title = 'Instrucciones para Gemini (Contexto Personal) — PromptHub';
    }

    if (isGemini) {
      renderGeminiCategories();
      renderGeminiCodes();
    } else if (isConfig) {
      updateInstructionsBuilder();
      renderInstructionsTemplates();
    }
  }

  // =========================================================================
  // Sección 3: Contexto Personal & Instrucciones para Gemini
  // =========================================================================

  const GEMINI_INSTRUCTIONS_TEMPLATES = [
    {
      id: "tpl-dev",
      role: "Desarrollo & DevOps",
      title: "Ingeniero de Software Senior & Arquitecto Cloud",
      desc: "Optimizado para código de producción, clean code, tipado estricto y cero explicaciones condescendientes.",
      content: `Soy un Ingeniero de Software Senior.
Directrices para tus respuestas:
1. Responde de forma técnica, concisa y directa al grano. Omite introducciones del tipo "Claro, aquí tienes".
2. Proporciona código listo para producción, tipado estrictamente (TypeScript, Go, Python) y aplicando principios SOLID.
3. Si el código involucra seguridad, concurrencia o rendimiento Big-O, añade notas breves sobre trade-offs y edge cases.
4. No expliques conceptos básicos (qué es una variable, cómo funciona un bucle) a menos que te lo solicite.
5. Usa Markdown con nombres de archivo explícitos y comentarios breves solo en partes críticas.`
    },
    {
      id: "tpl-universal",
      role: "Universal",
      title: "Anti-Relleno & Eficiencia Máxima (Directo al Grano)",
      desc: "Elimina el 100% de la paja, saludos y clichés típicos de IA para trabajar a máxima velocidad.",
      content: `Directrices obligatorias de estilo y formato:
1. Comienza directamente con la respuesta en la primera línea. Cero saludos, cero cierres de cortesía y cero disculpas.
2. Elimina absolutamente todo cliché típico de IA: "en el tapiz digital", "es crucial entender", "un viaje fascinante", "en un mundo en constante evolución".
3. Prioriza viñetas ordenadas por impacto y tablas comparativas siempre que haya más de 2 opciones.
4. Si falta información crítica para una respuesta precisa, haz una sola pregunta de clarificación antes de asumir.
5. Cita fuentes o fechas si buscas datos factuales en tiempo real.`
    },
    {
      id: "tpl-pm",
      role: "Producto & Negocios",
      title: "Product Manager & Estratega de Negocios Tech",
      desc: "Enfocado en métricas (CAC/LTV), validación de hipótesis, trade-offs y comunicación para stakeholders.",
      content: `Soy un Líder de Producto (Product Manager) y Fundador Tecnológico.
Directrices para tus respuestas:
1. Enfoca siempre los problemas desde el impacto en el negocio: métricas (ARR, Retención, CAC, LTV) y valor para el usuario.
2. Estructura propuestas en: Diagnóstico, Hipótesis Validable, Solución Recomendada y Métricas de Éxito.
3. Incluye siempre una sección explícita de "Trade-offs y Riesgos Principales".
4. Utiliza frameworks contrastados (RICE, ICE, Jobs To Be Done, Lean Canvas).
5. Mantén un tono ejecutivo, persuasivo y preparado para presentar ante directores o inversionistas.`
    },
    {
      id: "tpl-copy",
      role: "Marketing & Redacción",
      title: "Copywriter Persuasivo & Creador de Contenido",
      desc: "Redacción magnética, oraciones asimétricas, ganchos de retención y cero lenguaje corporativo aburrido.",
      content: `Soy Copywriter y Creador de Contenido Digital.
Directrices para tus respuestas:
1. Escribe con voz humana, dinámica y conversacional. Alterna frases cortas y contundentes con oraciones explicativas.
2. Cada texto debe contar con un gancho (hook) de alto impacto en los primeros 3 segundos y un CTA claro al final.
3. Elimina lenguaje corporativo frío o robótico. Usa verbos de acción y metáforas visuales.
4. Cuando te pida copys, titulares o guiones, entrega siempre 3 variantes con diferentes ángulos psicológicos.
5. Prioriza marcos de persuasión probados (AIDA, PAS, BAB).`
    },
    {
      id: "tpl-academic",
      role: "Investigación & Ciencia",
      title: "Investigador Académico & Fact-Checker Riguroso",
      desc: "Citas con fuentes primarias, pensamiento crítico, análisis de sesgos y rigor metodológico.",
      content: `Soy un Investigador Académico y Analista Crítico.
Directrices para tus respuestas:
1. Toda afirmación factual relevante debe estar verificada en tiempo real con fuentes primarias usando Google Search.
2. Cita autores, instituciones, DOI o enlaces oficiales para respaldar conclusiones.
3. Distingue claramente entre: datos empíricos comprobados, consenso científico dominante e hipótesis o conjeturas.
4. Señala posibles sesgos metodológicos, limitaciones de muestra o conflictos de interés.
5. Estructura respuestas con rigor lógico, definiciones operacionales y síntesis balanceada.`
    },
    {
      id: "tpl-data",
      role: "Datos & Finanzas",
      title: "Analista Cuantitativo & Especialista en SQL/BI",
      desc: "Consultas SQL optimizadas, modelos financieros, fórmulas DAX y visualización de KPIs.",
      content: `Soy un Analista Cuantitativo y Especialista en Datos.
Directrices para tus respuestas:
1. Proporciona consultas SQL optimizadas (legibles, con CTEs y comentadas) y scripts en Python (Pandas/Polars).
2. Para finanzas, estructura modelos con supuestos explícitos, análisis de sensibilidad y fórmulas claras.
3. Sugiere siempre el gráfico o visualización idónea (tipo de visual en Power BI / Tableau) para cada métrica.
4. Interpreta los números: no te limites a listar datos, aporta el "qué significa" y "qué acción tomar".
5. Valida siempre la integridad de los datos considerando valores nulos, duplicados y outliers.`
    }
  ];

  function updateInstructionsBuilder() {
    if (!elements.builderRole || !elements.builderPreviewText) return;

    const role = elements.builderRole.value;
    const tone = elements.builderTone.value;

    const rolesMap = {
      dev: "Soy un Desarrollador de Software Senior y Arquitecto de Soluciones.",
      pm: "Soy un Product Manager y Estratega de Negocios Tecnológicos.",
      copy: "Soy un Copywriter Profesional y Creador de Contenido Digital.",
      data: "Soy un Analista Cuantitativo de Datos y Finanzas.",
      academic: "Soy un Investigador Académico y Fact-Checker Riguroso.",
      general: "Soy un Profesional enfocado en Alta Productividad y Velocidad de Ejecución."
    };

    const tonesMap = {
      direct: "Responde de forma concisa, directa al grano, sin saludos vacíos ni cortesías innecesarias.",
      technical: "Responde con máximo rigor técnico, priorizando código limpio, fundamentos arquitectónicos y mejores prácticas.",
      pedagogical: "Adopta un tono pedagógico y didáctico, explicando el porqué de cada concepto con analogías claras.",
      executive: "Comunica en formato ejecutivo de alto nivel, con resúmenes concisos, viñetas de impacto y análisis de ROI."
    };

    const rules = [];
    if (elements.ruleNoFluff?.checked) {
      rules.push("Elimina todo relleno, clichés de IA ('en el tapiz digital', 'es crucial') y frases vacías.");
    }
    if (elements.ruleCodeBestPractices?.checked) {
      rules.push("Proporciona código listo para producción, tipado estricto, modular y siguiendo principios SOLID.");
    }
    if (elements.ruleSources?.checked) {
      rules.push("Verifica afirmaciones factuales en tiempo real y cita las fuentes o enlaces originales.");
    }
    if (elements.ruleMarkdown?.checked) {
      rules.push("Formatea siempre con Markdown limpio: títulos jerárquicos, viñetas concisas y tablas comparativas.");
    }
    if (elements.ruleSpanish?.checked) {
      rules.push("Responde en Español neutro, fluido, natural y con excelente ortografía profesional.");
    }
    if (elements.ruleAskBeforeAssuming?.checked) {
      rules.push("Si una instrucción es ambigua o falta información crítica, haz 1 o 2 preguntas breves antes de asumir.");
    }

    let text = `${rolesMap[role] || rolesMap.general}\n\nDirectrices fijas para todas tus respuestas:\n1. ${tonesMap[tone] || tonesMap.direct}\n`;
    rules.forEach((rule, idx) => {
      text += `${idx + 2}. ${rule}\n`;
    });

    elements.builderPreviewText.textContent = text.trim();
    if (elements.builderCharCount) {
      const len = text.trim().length;
      elements.builderCharCount.textContent = `${len} caracteres`;
    }
  }

  function renderInstructionsTemplates() {
    if (!elements.geminiInstructionsTemplates) return;

    const list = DatabaseManager.getInstructionsTemplates();
    elements.geminiInstructionsTemplates.innerHTML = list.map((tpl) => {
      return `
        <article class="template-card animate-fade-in" data-tpl-id="${tpl.id}">
          <div class="template-card-header">
            <span class="template-role-tag">${escapeHtml(tpl.role)}</span>
            <h3 class="template-card-title">${escapeHtml(tpl.title)}</h3>
            <p class="template-card-desc">${escapeHtml(tpl.desc)}</p>
          </div>

          <pre class="template-preview-box">${escapeHtml(tpl.content)}</pre>

          <div class="template-card-actions">
            <button class="btn-action-primary copy-template-btn" data-tpl-id="${tpl.id}" style="width: 100%;">
              ${getIcon('copy')}
              <span>Copiar Plantilla para Gemini</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- Modal: Customize Variables ---
  function openModal(promptId) {
    const prompt = DatabaseManager.getPrompts().find(p => p.id === promptId);
    if (!prompt) return;

    state.activeModalPrompt = prompt;
    elements.modalTitle.textContent = prompt.title;
    elements.modalDesc.textContent = prompt.description;

    // Generate input fields for variables
    elements.modalFormFields.innerHTML = prompt.variables.map(v => {
      const fieldHtml = v.multiline
        ? `<textarea class="form-textarea var-input" data-var="${v.name}" placeholder="${v.placeholder}" rows="3"></textarea>`
        : `<input type="text" class="form-input var-input" data-var="${v.name}" placeholder="${v.placeholder}">`;

      return `
        <div class="form-group">
          <label class="form-label">
            <span>${v.label}</span>
            <span class="form-label-tag">[${v.name}]</span>
          </label>
          ${fieldHtml}
        </div>
      `;
    }).join('');

    updateModalPreview();

    // Attach real-time input event listeners
    const inputs = elements.modalFormFields.querySelectorAll('.var-input');
    inputs.forEach(input => {
      input.addEventListener('input', updateModalPreview);
    });

    elements.modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus first input
    if (inputs.length > 0) {
      setTimeout(() => inputs[0].focus(), 150);
    }
  }

  function closeModal() {
    elements.modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    state.activeModalPrompt = null;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getFilledTemplate() {
    if (!state.activeModalPrompt) return '';
    let result = state.activeModalPrompt.template;
    const inputs = elements.modalFormFields.querySelectorAll('.var-input');

    inputs.forEach(input => {
      const varName = input.getAttribute('data-var');
      const val = input.value.trim();
      const placeholder = `[${varName}]`;
      if (val) {
        result = result.split(placeholder).join(val);
        if (varName === 'TEMA_Y_DETALLES_ACTIVIDAD') {
          result = result.split('[ESCRIBE AQUÍ EL TEMA, FECHA Y DETALLES DE LA ACTIVIDAD O NOTICIA]').join(val);
        }
      }
    });

    return result;
  }

  function updateModalPreview() {
    if (!state.activeModalPrompt) return;
    const template = state.activeModalPrompt.template;
    const inputs = elements.modalFormFields.querySelectorAll('.var-input');

    const totalVars = state.activeModalPrompt.variables ? state.activeModalPrompt.variables.length : 0;
    let filledCount = 0;
    const replacements = {};

    inputs.forEach(input => {
      const varName = input.getAttribute('data-var');
      const val = input.value;
      if (val && val.trim()) {
        filledCount++;
        replacements[varName] = val;
      }
    });

    // Update variable completion badge
    if (elements.modalVarsCount) {
      if (totalVars === 0) {
        elements.modalVarsCount.textContent = 'Sin variables';
      } else {
        elements.modalVarsCount.textContent = `${filledCount} de ${totalVars} completada${totalVars === 1 ? '' : 's'}`;
      }
      if (filledCount === totalVars && totalVars > 0) {
        elements.modalVarsCount.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        elements.modalVarsCount.style.color = 'var(--accent-emerald)';
      } else {
        elements.modalVarsCount.style.borderColor = '';
        elements.modalVarsCount.style.color = '';
      }
    }

    // Build highlighted HTML
    let formatted = escapeHtml(template);
    if (state.activeModalPrompt.variables) {
      state.activeModalPrompt.variables.forEach(v => {
        const placeholderEscaped = escapeHtml(`[${v.name}]`);
        if (replacements[v.name]) {
          const valEscaped = escapeHtml(replacements[v.name]);
          formatted = formatted.split(placeholderEscaped).join(`<span class="preview-highlight-filled">${valEscaped}</span>`);
          if (v.name === 'TEMA_Y_DETALLES_ACTIVIDAD') {
            formatted = formatted.split(escapeHtml('[ESCRIBE AQUÍ EL TEMA, FECHA Y DETALLES DE LA ACTIVIDAD O NOTICIA]')).join(`<span class="preview-highlight-filled">${valEscaped}</span>`);
          }
        } else {
          formatted = formatted.split(placeholderEscaped).join(`<span class="preview-highlight-placeholder">[${escapeHtml(v.name)}]</span>`);
          if (v.name === 'TEMA_Y_DETALLES_ACTIVIDAD') {
            formatted = formatted.split(escapeHtml('[ESCRIBE AQUÍ EL TEMA, FECHA Y DETALLES DE LA ACTIVIDAD O NOTICIA]')).join(`<span class="preview-highlight-placeholder">[${escapeHtml(v.name)}]</span>`);
          }
        }
      });
    }

    elements.modalPreview.innerHTML = formatted;

    // Update line and word stats badge
    const plainText = getFilledTemplate();
    const lineCount = plainText.split('\n').length;
    const words = plainText.trim() ? plainText.trim().split(/\s+/).length : 0;
    if (elements.modalPreviewStats) {
      elements.modalPreviewStats.textContent = `${lineCount} línea${lineCount === 1 ? '' : 's'} • ${words} palabras`;
    }
  }

  // --- Event Listeners Setup ---
  function setupEvents() {
    // --- Navigation Tabs (Prompts vs Gemini Codes vs Config) ---
    if (elements.navTabPrompts) {
      elements.navTabPrompts.addEventListener('click', () => switchView('prompts'));
    }
    if (elements.navTabGemini) {
      elements.navTabGemini.addEventListener('click', () => switchView('gemini'));
    }
    if (elements.navTabConfig) {
      elements.navTabConfig.addEventListener('click', () => switchView('config'));
    }
    if (elements.footerGeminiLink) {
      elements.footerGeminiLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('gemini');
        if (elements.searchGeminiInput) {
          elements.searchGeminiInput.focus();
          window.scrollTo({ top: elements.searchGeminiInput.offsetTop - 100, behavior: 'smooth' });
        }
      });
    }
    if (elements.footerConfigLink) {
      elements.footerConfigLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('config');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Hash change handler
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      if (hash === '#codigos-gemini') {
        switchView('gemini');
      } else if (hash === '#config' || hash === '#instrucciones-gemini') {
        switchView('config');
      } else if (hash === '#prompts' || hash === '' || hash === '#') {
        switchView('prompts');
      }
    });

    // --- Prompts Section Events ---
    // Categories click delegation
    if (elements.categoriesList) {
      elements.categoriesList.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-chip');
        if (!btn) return;
        state.activeCategory = btn.getAttribute('data-category');
        state.onlyFavorites = false;
        elements.favFilterBtn.classList.remove('active');
        renderCategories();
        renderPrompts();
      });
    }

    // Search input Prompts
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        elements.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
        renderPrompts();
      });
    }

    // Clear search Prompts
    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        elements.searchClearBtn.style.display = 'none';
        elements.searchInput.focus();
        renderPrompts();
      });
    }

    // Favorites Filter toggles
    const toggleFavorites = () => {
      state.onlyFavorites = !state.onlyFavorites;
      elements.favFilterBtn.classList.toggle('active', state.onlyFavorites);
      renderCategories();
      renderPrompts();
    };

    if (elements.favFilterBtn) elements.favFilterBtn.addEventListener('click', toggleFavorites);
    if (elements.headerFavBtn) elements.headerFavBtn.addEventListener('click', toggleFavorites);

    // Prompt Grid delegation (Copy, Customize, Favorite, Tag click)
    if (elements.promptsGrid) {
      elements.promptsGrid.addEventListener('click', (e) => {
        // Favorite button
        const favBtn = e.target.closest('.card-favorite-btn');
        if (favBtn) {
          const id = favBtn.getAttribute('data-fav-id');
          if (state.favorites.includes(id)) {
            state.favorites = state.favorites.filter(favId => favId !== id);
            showToast('Prompt removido de favoritos');
          } else {
            state.favorites.push(id);
            showToast('Prompt guardado en favoritos ❤️');
          }
          saveFavorites();
          renderPrompts();
          return;
        }

        // Copy raw prompt
        const copyBtn = e.target.closest('.copy-raw-btn');
        if (copyBtn) {
          const id = copyBtn.getAttribute('data-id');
          const prompt = DatabaseManager.getPrompts().find(p => p.id === id);
          if (prompt) {
            copyToClipboard(prompt.template);
          }
          return;
        }

        // Customize prompt
        const custBtn = e.target.closest('.customize-btn');
        if (custBtn) {
          const id = custBtn.getAttribute('data-id');
          openModal(id);
          return;
        }

        // Tag click
        const tagSpan = e.target.closest('.card-tag');
        if (tagSpan) {
          const tag = tagSpan.getAttribute('data-tag');
          elements.searchInput.value = tag;
          state.searchQuery = tag;
          elements.searchClearBtn.style.display = 'block';
          renderPrompts();
          window.scrollTo({ top: elements.searchInput.offsetTop - 100, behavior: 'smooth' });
          return;
        }
      });
    }

    // --- Gemini Codes Section Events ---
    // Gemini Search Input
    if (elements.searchGeminiInput) {
      elements.searchGeminiInput.addEventListener('input', (e) => {
        state.geminiSearchQuery = e.target.value;
        elements.searchGeminiClearBtn.style.display = state.geminiSearchQuery ? 'block' : 'none';
        renderGeminiCodes();
      });
    }

    // Gemini Clear Search
    if (elements.searchGeminiClearBtn) {
      elements.searchGeminiClearBtn.addEventListener('click', () => {
        elements.searchGeminiInput.value = '';
        state.geminiSearchQuery = '';
        elements.searchGeminiClearBtn.style.display = 'none';
        elements.searchGeminiInput.focus();
        renderGeminiCodes();
      });
    }

    // Gemini Type Filter buttons (@Workspace, /Comandos, Directivas)
    if (elements.geminiTypeFilters) {
      elements.geminiTypeFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.type-filter-chip');
        if (!btn) return;
        elements.geminiTypeFilters.querySelectorAll('.type-filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeGeminiType = btn.getAttribute('data-type');
        renderGeminiCodes();
      });
    }

    // Gemini Categories delegation
    if (elements.geminiCategoriesList) {
      elements.geminiCategoriesList.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-chip');
        if (!btn) return;
        state.activeGeminiCategory = btn.getAttribute('data-gemini-category');
        state.onlyGeminiFavorites = false;
        if (elements.geminiFavFilterBtn) elements.geminiFavFilterBtn.classList.remove('active');
        renderGeminiCategories();
        renderGeminiCodes();
      });
    }

    // Gemini Favorites Filter toggle
    if (elements.geminiFavFilterBtn) {
      elements.geminiFavFilterBtn.addEventListener('click', () => {
        state.onlyGeminiFavorites = !state.onlyGeminiFavorites;
        elements.geminiFavFilterBtn.classList.toggle('active', state.onlyGeminiFavorites);
        renderGeminiCategories();
        renderGeminiCodes();
      });
    }

    // Gemini Grid delegation (Copy Code, Copy Example, Favorite)
    if (elements.geminiGrid) {
      elements.geminiGrid.addEventListener('click', (e) => {
        // Favorite toggle
        const favBtn = e.target.closest('.gemini-fav-btn');
        if (favBtn) {
          const id = favBtn.getAttribute('data-gemini-fav-id');
          if (state.geminiFavorites.includes(id)) {
            state.geminiFavorites = state.geminiFavorites.filter(favId => favId !== id);
            showToast('Código removido de favoritos');
          } else {
            state.geminiFavorites.push(id);
            showToast('Código guardado en favoritos ❤️');
          }
          saveGeminiFavorites();
          renderGeminiCodes();
          return;
        }

        // Copy Code string
        const codeBtn = e.target.closest('.gemini-copy-code-btn, .copy-code-trigger');
        if (codeBtn) {
          const code = codeBtn.getAttribute('data-code');
          copyToClipboard(code, `¡Código ${code} copiado al portapapeles!`);
          return;
        }

        // Copy Example prompt
        const exBtn = e.target.closest('.gemini-copy-example-btn, .copy-example-mini-btn');
        if (exBtn) {
          const example = exBtn.getAttribute('data-example');
          copyToClipboard(example, '¡Prompt de ejemplo copiado al portapapeles!');
          return;
        }
      });
    }

    // --- Instructions Builder & Templates Events ---
    const builderControls = [
      elements.builderRole,
      elements.builderTone,
      elements.ruleNoFluff,
      elements.ruleCodeBestPractices,
      elements.ruleSources,
      elements.ruleMarkdown,
      elements.ruleSpanish,
      elements.ruleAskBeforeAssuming
    ];
    builderControls.forEach(ctrl => {
      if (ctrl) {
        ctrl.addEventListener('change', updateInstructionsBuilder);
        ctrl.addEventListener('input', updateInstructionsBuilder);
      }
    });

    if (elements.builderCopyBtn) {
      elements.builderCopyBtn.addEventListener('click', () => {
        const text = elements.builderPreviewText ? elements.builderPreviewText.textContent : '';
        if (text) {
          copyToClipboard(text, '¡Instrucciones para Gemini copiadas! Pégalas en Configuración > Contexto personal.');
        }
      });
    }

    if (elements.geminiInstructionsTemplates) {
      elements.geminiInstructionsTemplates.addEventListener('click', (e) => {
        const btn = e.target.closest('.copy-template-btn');
        if (!btn) return;
        const tplId = btn.getAttribute('data-tpl-id');
        const template = DatabaseManager.getInstructionsTemplates().find(t => t.id === tplId);
        if (template) {
          copyToClipboard(template.content, '¡Plantilla copiada! Lista para pegar en Contexto personal.');
        }
      });
    }

    // Modal Events
    if (elements.modalCloseBtn) elements.modalCloseBtn.addEventListener('click', closeModal);
    if (elements.modalCancelBtn) elements.modalCancelBtn.addEventListener('click', closeModal);
    if (elements.modalBackdrop) {
      elements.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.modalBackdrop) closeModal();
      });
    }

    if (elements.modalCopyBtn) {
      elements.modalCopyBtn.addEventListener('click', () => {
        const text = getFilledTemplate();
        copyToClipboard(text, '¡Prompt personalizado copiado con éxito!');
        closeModal();
      });
    }

    // Database Management Events
    if (elements.headerDbBtn) elements.headerDbBtn.addEventListener('click', openDbModal);
    if (elements.footerDbBtn) elements.footerDbBtn.addEventListener('click', openDbModal);
    if (elements.configDbOpenBtn) elements.configDbOpenBtn.addEventListener('click', openDbModal);
    
    if (elements.configDbDownloadBtn) {
      elements.configDbDownloadBtn.addEventListener('click', () => {
        DatabaseManager.exportJSON();
        showToast('📥 Base de datos descargada como prompts-database.json');
      });
    }

    if (elements.dbDownloadBtn) {
      elements.dbDownloadBtn.addEventListener('click', () => {
        DatabaseManager.exportJSON();
        showToast('📥 Base de datos descargada como prompts-database.json');
      });
    }

    if (elements.dbModalCloseBtn) elements.dbModalCloseBtn.addEventListener('click', closeDbModal);
    if (elements.dbModalBackdrop) {
      elements.dbModalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.dbModalBackdrop) closeDbModal();
      });
    }

    if (elements.dbFileInput) {
      elements.dbFileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const stats = DatabaseManager.importJSON(event.target.result);
            refreshEntireAppAfterDbChange();
            showToast(`✅ Base de datos actualizada (${stats.prompts} prompts, ${stats.codes} códigos, ${stats.instructions} plantillas)`);
          } catch (err) {
            alert('Error al importar el archivo JSON: ' + err.message);
          } finally {
            elements.dbFileInput.value = '';
          }
        };
        reader.onerror = () => {
          alert('Error al leer el archivo del disco.');
          elements.dbFileInput.value = '';
        };
        reader.readAsText(file);
      });
    }

    if (elements.dbResetBtn) {
      elements.dbResetBtn.addEventListener('click', () => {
        if (confirm('¿Deseas restaurar la base de datos a los valores de fábrica? Se descartarán los cambios personalizados en el navegador.')) {
          DatabaseManager.resetToDefault();
          refreshEntireAppAfterDbChange();
          showToast('🔄 Base de datos restaurada a valores por defecto');
        }
      });
    }

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.dbModalBackdrop && elements.dbModalBackdrop.classList.contains('open')) {
          closeDbModal();
          return;
        }
        if (elements.modalBackdrop && elements.modalBackdrop.classList.contains('open')) {
          closeModal();
          return;
        }
      }
      // Press '/' to search active view
      if (e.key === '/' && !elements.modalBackdrop?.classList.contains('open') && !elements.dbModalBackdrop?.classList.contains('open')) {
        const isPrompts = state.currentView === 'prompts';
        const activeInput = isPrompts ? elements.searchInput : elements.searchGeminiInput;
        if (document.activeElement !== activeInput && activeInput) {
          e.preventDefault();
          activeInput.focus();
        }
      }
    });
  }

  // --- Initialize ---
  async function init() {
    await DatabaseManager.init();
    updateFavoritesCount();
    renderCategories();
    renderPrompts();
    renderGeminiCategories();
    renderGeminiCodes();
    updateInstructionsBuilder();
    renderInstructionsTemplates();
    updateDatabaseModalStatus();
    updateHeaderBadges();
    setupEvents();

    // Check initial hash
    if (window.location.hash === '#codigos-gemini') {
      switchView('gemini');
    } else if (window.location.hash === '#config' || window.location.hash === '#instrucciones-gemini') {
      switchView('config');
    } else {
      switchView('prompts');
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
