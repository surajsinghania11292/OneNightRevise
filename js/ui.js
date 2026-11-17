/* ═══════════════════════════════════════════════════════════════
   UI.JS — Core Navigation, Collapsible Sidebar, Theme Toggler,
           Search Filter, and Table of Contents Tracking
   ═══════════════════════════════════════════════════════════════ */

const UI = (() => {

  /* ── 1. THEME SWITCHER (Light & Modern Slate Dark) ──────────── */
  const Theme = {
    THEMES: ['light', 'dark'],

    init() {
      const saved = localStorage.getItem('onr-theme') || 'light';
      this.apply(saved, false);

      const toggleBtn = document.getElementById('theme-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => this.cycle());
      }
    },

    cycle() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      this.apply(next, true);
    },

    apply(theme, showToast) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('onr-theme', theme);

      const toggleBtn = document.getElementById('theme-toggle');
      if (toggleBtn) {
        toggleBtn.innerHTML = `
          <span class="theme-icon">${theme === 'light' ? '☀' : '🌙'}</span>
          <span>${theme === 'light' ? 'Light' : 'Dark'}</span>
        `;
      }

      if (showToast) {
        Toast.show(theme === 'light' ? 'Light mode enabled' : 'Dark mode enabled');
      }
    }
  };

  /* ── 2. COLLAPSIBLE SIDEBAR CONTROLLER ──────────────────────── */
  const Sidebar = {
    init() {
      const shell = document.querySelector('.app-shell');
      const toggleBtn = document.getElementById('sidebar-toggle');
      if (!shell || !toggleBtn) return;

      // Check saved preference (default to open on widescreen)
      const savedState = localStorage.getItem('onr-sidebar') || 'open';
      if (savedState === 'closed') {
        shell.classList.add('sidebar-collapsed');
        this.updateBtn(toggleBtn, false);
      } else {
        this.updateBtn(toggleBtn, true);
      }

      toggleBtn.addEventListener('click', () => {
        const isCollapsed = shell.classList.toggle('sidebar-collapsed');
        const state = isCollapsed ? 'closed' : 'open';
        localStorage.setItem('onr-sidebar', state);
        this.updateBtn(toggleBtn, !isCollapsed);
        Toast.show(isCollapsed ? 'Sidebar hidden (Full-width reader mode)' : 'Sidebar visible');
      });

      // Keyboard shortcut: Press '[' to toggle sidebar
      window.addEventListener('keydown', (e) => {
        if (e.key === '[' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          toggleBtn.click();
        }
      });
    },

    updateBtn(btn, isOpen) {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
        <span>${isOpen ? 'Hide Sidebar' : 'Show Sidebar'}</span>
      `;
    }
  };

  /* ── 3. TOAST NOTIFICATIONS ──────────────────────────────────── */
  const Toast = {
    container: null,

    init() {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 6px;
        pointer-events: none;
      `;
      document.body.appendChild(this.container);
    },

    show(message) {
      if (!this.container) this.init();

      const toast = document.createElement('div');
      toast.style.cssText = `
        background: var(--bg-card);
        color: var(--text-primary);
        border: 1px solid var(--border);
        border-radius: var(--r-sm);
        padding: 0.5rem 0.85rem;
        font-family: var(--font-mono);
        font-size: 0.76rem;
        box-shadow: var(--shadow-md);
        display: flex;
        align-items: center;
        gap: 6px;
        pointer-events: auto;
        animation: fadeIn 0.2s ease;
      `;
      toast.innerHTML = `<span style="color:var(--accent);">●</span> ${message}`;
      this.container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.25s ease';
        setTimeout(() => toast.remove(), 250);
      }, 2000);
    }
  };

  /* ── 4. SCROLL PROGRESS BAR ─────────────────────────────────── */
  function initProgressBar() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      bar.style.width = scrolled + '%';
    }, { passive: true });
  }

  /* ── 5. TOC SPY ──────────────────────────────────────────────── */
  function initTocSpy() {
    const sections = document.querySelectorAll('.note-section');
    const tocLinks = document.querySelectorAll('.toc-link');

    if (!sections.length || !tocLinks.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-70px 0px -70% 0px'
    });

    sections.forEach(s => observer.observe(s));
  }

  /* ── 6. SEARCH & TOPIC FILTER ────────────────────────────────── */
  function initSearch() {
    const searchInput = document.getElementById('quick-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const sections = document.querySelectorAll('.note-section');

      sections.forEach(sec => {
        if (!query) {
          sec.style.display = 'block';
          return;
        }
        const text = sec.textContent.toLowerCase();
        sec.style.display = text.includes(query) ? 'block' : 'none';
      });
    });
  }

  /* ── 7. ACCORDION SETUP ──────────────────────────────────────── */
  function initAccordions() {
    document.querySelectorAll('.accordion__trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const parent = trigger.closest('.accordion');
        parent.classList.toggle('open');
      });
    });
  }

  return {
    init() {
      Theme.init();
      Sidebar.init();
      Toast.init();
      initProgressBar();
      initTocSpy();
      initSearch();
      initAccordions();
    },
    Toast
  };
})();
