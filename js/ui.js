/* ═══════════════════════════════════════════════════════════════
   UI.JS — Clean Theme Toggle, Reading Progress, and Active Jump Navigation
   ═══════════════════════════════════════════════════════════════ */

const UI = (() => {

  /* ── 1. THEME MANAGER (Light / Dark / System Segmented Control) ── */
  const Theme = {
    preferenceKey: 'onr-theme-preference',

    getSavedPreference() {
      try {
        return localStorage.getItem(this.preferenceKey) || 'system';
      } catch (e) {
        return 'system';
      }
    },

    resolveTheme(preference) {
      if (preference === 'dark') return 'dark';
      if (preference === 'light') return 'light';
      // System mode: inspect OS color scheme
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    },

    apply(preference, showToast = false) {
      const theme = this.resolveTheme(preference);
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.setAttribute('data-theme-preference', preference);

      try {
        localStorage.setItem(this.preferenceKey, preference);
      } catch (e) { }

      this.updateButtonUI(preference);

      if (showToast) {
        const labels = {
          light: 'Switched to Light mode',
          dark: 'Switched to Dark mode',
          system: 'Using System default theme'
        };
        Toast.show(labels[preference] || 'Theme updated');
      }
    },

    updateButtonUI(activePreference) {
      const buttons = document.querySelectorAll('.theme-mode-btn');
      buttons.forEach(btn => {
        const mode = btn.getAttribute('data-theme-mode');
        const isActive = mode === activePreference;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    },

    init() {
      const preference = this.getSavedPreference();
      this.apply(preference, false);

      // Delegated click handler for theme segmented buttons (both nav & sticky topbar)
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.theme-mode-btn');
        if (!btn) return;
        e.preventDefault();
        const mode = btn.getAttribute('data-theme-mode');
        if (mode) {
          this.apply(mode, true);
        }
      });

      // Dynamic OS system dark/light change listener
      if (window.matchMedia) {
        try {
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const currentPref = this.getSavedPreference();
            if (currentPref === 'system') {
              const newTheme = e.matches ? 'dark' : 'light';
              document.documentElement.setAttribute('data-theme', newTheme);
            }
          });
        } catch (e) { }
      }
    }
  };

  /* ── 2. TOAST NOTIFICATIONS ──────────────────────────────────── */
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
        border: 1px solid var(--border);
        border-radius: var(--r-pill);
        padding: 0.55rem 1.1rem;
        font-family: var(--font-body);
        font-size: 0.82rem;
        font-weight: 500;
        box-shadow: var(--shadow-md);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: auto;
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

  /* ── 3. SCROLL PROGRESS BAR (REMOVED) ───────────────────────── */
  function initProgressBar() {
    // Disabled per user request (distracting scroll bar removed)
  }

  /* ── 4. QUICK JUMP CAPSULE ACTIVE TRACKER ───────────────────── */
  function initJumpSpy() {
    const sections = document.querySelectorAll('.topic-card');
    const jumpLinks = document.querySelectorAll('.jump-pill');

    if (!sections.length || !jumpLinks.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          jumpLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-50px 0px -65% 0px'
    });

    sections.forEach(s => observer.observe(s));
  }

  return {
    init() {
      Theme.init();
      Toast.init();
      initProgressBar();
      initJumpSpy();
    },
    Toast
  };
})();
