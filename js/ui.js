/* ═══════════════════════════════════════════════════════════════
   UI.JS — Theme switching (Light Green & Dark Pine Green ONLY),
           Scroll progress, TOC spy, Toast alerts, Search filter
   ═══════════════════════════════════════════════════════════════ */

const UI = (() => {

  /* ── 1. THEME SWITCHER (Strictly Light Green & Dark Green) ── */
  const Theme = {
    THEMES: ['light', 'dark'],

    ICONS: {
      light: '☀ Light Mode',
      dark:  '🌙 Dark Mode'
    },

    TOASTS: {
      light: '☀ Switched to Clean Light Green Theme',
      dark:  '🌙 Switched to Deep Pine Dark Green Theme'
    },

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
        Toast.show(this.TOASTS[theme]);
      }
    }
  };

  /* ── 2. TOAST SYSTEM ─────────────────────────────────────────── */
  const Toast = {
    container: null,

    init() {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 8px;
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
        border: 1px solid var(--accent);
        border-radius: var(--r-md);
        padding: 0.65rem 1.1rem;
        font-family: var(--font-mono);
        font-size: 0.8rem;
        box-shadow: var(--shadow-lg);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: auto;
        animation: fadeInUp 0.25s ease;
      `;
      toast.innerHTML = `<span style="color:var(--accent);">●</span> ${message}`;
      this.container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2600);
    }
  };

  /* ── 3. SCROLL PROGRESS BAR ─────────────────────────────────── */
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

  /* ── 4. TABLE OF CONTENTS ACTIVE SPY ────────────────────────── */
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
      rootMargin: '-80px 0px -70% 0px'
    });

    sections.forEach(s => observer.observe(s));
  }

  /* ── 5. SEARCH & TOPIC FILTER ────────────────────────────────── */
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
        if (text.includes(query)) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    });
  }

  /* ── 6. ACCORDION SETUP ──────────────────────────────────────── */
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
      Toast.init();
      initProgressBar();
      initTocSpy();
      initSearch();
      initAccordions();
    },
    Toast
  };
})();
