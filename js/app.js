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
    activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>'
  };

  // --- State ---
  const initialFavs = JSON.parse(localStorage.getItem('prompthub_favorites') || '["dev-web-init"]');
  if (!initialFavs.includes('dev-web-init')) {
    initialFavs.unshift('dev-web-init');
  }

  const state = {
    activeCategory: 'all',
    searchQuery: '',
    onlyFavorites: false,
    favorites: initialFavs,
    activeModalPrompt: null
  };

  // --- DOM Elements ---
  const elements = {
    categoriesList: document.getElementById('categoriesList'),
    promptsGrid: document.getElementById('promptsGrid'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    promptsCount: document.getElementById('promptsCount'),
    favFilterBtn: document.getElementById('favFilterBtn'),
    headerFavBtn: document.getElementById('headerFavBtn'),
    headerFavCount: document.getElementById('headerFavCount'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalTitle: document.getElementById('modalTitle'),
    modalDesc: document.getElementById('modalDesc'),
    modalFormFields: document.getElementById('modalFormFields'),
    modalPreview: document.getElementById('modalPreview'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalCancelBtn: document.getElementById('modalCancelBtn'),
    modalCopyBtn: document.getElementById('modalCopyBtn'),
    toastContainer: document.getElementById('toastContainer')
  };

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
    return escaped.replace(/\[([A-Z0-9_ÁÉÍÓÚÑ]+)\]/g, '<span class="var-tag">[$1]</span>');
  }

  // --- Filtering & Searching ---
  function getFilteredPrompts() {
    const query = state.searchQuery.toLowerCase().trim();

    return PROMPTS_DATA.filter((prompt) => {
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
    elements.categoriesList.innerHTML = CATEGORIES_DATA.map((cat) => {
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

  // --- Modal: Customize Variables ---
  function openModal(promptId) {
    const prompt = PROMPTS_DATA.find(p => p.id === promptId);
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
      }
    });

    return result;
  }

  function updateModalPreview() {
    const filled = getFilledTemplate();
    elements.modalPreview.textContent = filled;
  }

  // --- Event Listeners Setup ---
  function setupEvents() {
    // Categories click delegation
    elements.categoriesList.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-chip');
      if (!btn) return;
      state.activeCategory = btn.getAttribute('data-category');
      state.onlyFavorites = false;
      elements.favFilterBtn.classList.remove('active');
      renderCategories();
      renderPrompts();
    });

    // Search input
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      elements.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
      renderPrompts();
    });

    // Clear search
    elements.searchClearBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.searchClearBtn.style.display = 'none';
      elements.searchInput.focus();
      renderPrompts();
    });

    // Favorites Filter toggles
    const toggleFavorites = () => {
      state.onlyFavorites = !state.onlyFavorites;
      elements.favFilterBtn.classList.toggle('active', state.onlyFavorites);
      renderCategories();
      renderPrompts();
    };

    elements.favFilterBtn.addEventListener('click', toggleFavorites);
    elements.headerFavBtn.addEventListener('click', toggleFavorites);

    // Prompt Grid delegation (Copy, Customize, Favorite, Tag click)
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
        const prompt = PROMPTS_DATA.find(p => p.id === id);
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

    // Modal Events
    elements.modalCloseBtn.addEventListener('click', closeModal);
    elements.modalCancelBtn.addEventListener('click', closeModal);
    elements.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === elements.modalBackdrop) closeModal();
    });

    elements.modalCopyBtn.addEventListener('click', () => {
      const text = getFilledTemplate();
      copyToClipboard(text, '¡Prompt personalizado copiado con éxito!');
      closeModal();
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.modalBackdrop.classList.contains('open')) {
        closeModal();
      }
      // Press '/' to search
      if (e.key === '/' && document.activeElement !== elements.searchInput && !elements.modalBackdrop.classList.contains('open')) {
        e.preventDefault();
        elements.searchInput.focus();
      }
    });
  }

  // --- Initialize ---
  function init() {
    updateFavoritesCount();
    renderCategories();
    renderPrompts();
    setupEvents();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
