/* ═══════════════════════════════════════════════════════════════
   UI.JS — Clean Theme Toggle, Reading Progress, and Active Jump Navigation
   ═══════════════════════════════════════════════════════════════ */

const UI = (() => {

  /* ── 1. THEME SWITCHER (SauceLabs Light & Soft Slate Dark) ── */
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
          <span>${theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
        `;
      }

      if (showToast) {
        Toast.show(theme === 'light' ? '☀ Switched to Light Mode' : '🌙 Switched to Soft Dark Mode');
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
