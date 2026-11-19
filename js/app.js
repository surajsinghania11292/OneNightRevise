/* ═══════════════════════════════════════════════════════════════
   APP.JS — Expandable Topic Study Engine (OneNightRevise)
   Features:
   • Compact 2-per-row Rectangular Preview Cards
   • Arrow Down Icon Button / Whole Card Click to Expand & Collapse
   • Multi-Open Topics: Opened topics stay open until closed by user
   • Smooth Scrolling & Responsive Viewport Fitting
   • Sticky Active-Topic Topbar showing Current Open Topic in View
   ═══════════════════════════════════════════════════════════════ */

const StudyApp = (() => {
  // Track all currently open topic IDs (allows multiple topics open simultaneously)
  const openTopicIds = new Set();
  let topbarActiveTopicId = null;

  /* ── 1. RENDER NAVBAR LINKS DYNAMICALLY ────────────────────── */
  function renderNavbarLinks() {
    const navMount = document.getElementById('nav-links-mount');
    if (!navMount) return;

    const groups = SYSTEM_DESIGN_NOTES.navGroups || [];
    if (groups.length > 0) {
      navMount.innerHTML = groups.map(g => `
        <li>
          <a href="#${g.targetId}" class="nav-link" data-nav-scroll="${g.targetId}">
            ${g.label}
          </a>
        </li>
      `).join('');

      navMount.querySelectorAll('[data-nav-scroll]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-nav-scroll');
          const el = document.getElementById(targetId);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 32;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          }
        });
      });
      return;
    }

    navMount.innerHTML = SYSTEM_DESIGN_NOTES.topics.map(t => `
      <li>
        <a href="#${t.id}" class="nav-link" data-nav-topic="${t.id}">
          ${t.number}. ${t.shortLabel}
        </a>
      </li>
    `).join('');

    navMount.querySelectorAll('[data-nav-topic]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('data-nav-topic');
        openTopic(id, true);
      });
    });
  }

  /* ── 2. RENDER ALL TOPIC CARDS ──────────────────────────────── */
  function renderTopics() {
    const mount = document.getElementById('topics-mount');
    if (!mount) return;

    let html = '';

    SYSTEM_DESIGN_NOTES.topics.forEach((topic, idx) => {
      const nextTopic = SYSTEM_DESIGN_NOTES.topics[idx + 1] || null;
      const subCount = topic.sections.length;
      const diagText = topic.diagramCount === 1 ? '1 Diagram' : `${topic.diagramCount} Diagrams`;

      const previewChips = (topic.subtopicLabels || []).map(lbl => `
        <span class="preview-chip">${lbl}</span>
      `).join('');

      let sectionsHtml = '';
      topic.sections.forEach((sec) => {
        sectionsHtml += `<div class="section-block">`;

        if (sec.title) {
          sectionsHtml += `
            <div class="section-numbered-heading">
              <span class="section-index-badge">${sec.num}</span>
              <h3 class="section-title-text">${sec.title}</h3>
            </div>
          `;
        }

        if (sec.content) {
          sectionsHtml += `<div style="color:var(--text-secondary); line-height:1.8;">${sec.content}</div>`;
        }

        if (sec.steps && sec.type === 'workflow') {
          sectionsHtml += `<div class="workflow-stack">`;
          sec.steps.forEach(st => {
            sectionsHtml += `
              <div class="workflow-step">
                <div class="step-circle">${st.num}</div>
                <div>
                  <div class="workflow-step__title">${st.title}</div>
                  <div class="workflow-step__desc">${st.desc}</div>
                </div>
              </div>
            `;
          });
          sectionsHtml += `</div>`;
        }

        sectionsHtml += `</div>`;
      });

      html += `
        <article class="topic-card" id="${topic.id}" data-topic-id="${topic.id}">
          <!-- Compact Clickable Header Summary Box -->
          <div class="topic-card-summary" role="button" tabindex="0" aria-expanded="false" data-toggle-topic="${topic.id}">
            <div class="topic-summary-main">
              <div class="topic-summary-top-row">
                <span class="topic-num-pill">TOPIC ${topic.number}</span>
                <span class="topic-meta-count">${subCount} Subtopics · ${diagText}</span>
              </div>

              <h2 class="topic-title">${topic.number}. ${topic.title}</h2>
              <p class="topic-subtitle">${topic.summary}</p>

              <div class="topic-preview-pills">
                ${previewChips}
              </div>
            </div>

            <!-- Clean Circular Arrow Down Button (Rotates to Up when open) -->
            <div class="topic-summary-action">
              <span class="topic-toggle-arrow" aria-hidden="true" title="Toggle Topic">
                <svg class="topic-arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
          </div>

          <!-- Expanded Full Content Body -->
          <div class="topic-card-body">
            ${sectionsHtml}

            <!-- Bottom Close Button (Clean light pill, Next Topic removed) -->
            <div class="topic-footer-bar">
              <button type="button" class="topic-close-btn-bottom" data-footer-close="${topic.id}">
                ✕ Close Topic
              </button>
            </div>
          </div>
        </article>
      `;
    });

    mount.innerHTML = html;
    bindCardEvents();
  }

  /* ── 3. BIND CARD EVENTS ────────────────────────────────────── */
  function bindCardEvents() {
    // Expand / Collapse on clicking the header summary
    document.querySelectorAll('[data-toggle-topic]').forEach(header => {
      const handleToggle = () => {
        const id = header.getAttribute('data-toggle-topic');
        toggleTopic(id);
      };

      header.addEventListener('click', handleToggle);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      });
    });

    // Footer Close Topic buttons
    document.querySelectorAll('[data-footer-close]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-footer-close');
        closeTopic(id, true);
      });
    });

    // Close on Escape key (closes whichever open topic is currently in view)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && topbarActiveTopicId) {
        closeTopic(topbarActiveTopicId, true);
      }
    });

    // Live scroll tracking for Sticky Active-Topic Topbar
    window.addEventListener('scroll', updateStickyTopbarOnScroll, { passive: true });
    window.addEventListener('resize', updateStickyTopbarOnScroll, { passive: true });
  }

  /* ── 4. INDEPENDENT TOPIC TOGGLE / OPEN / CLOSE ─────────────── */
  function toggleTopic(topicId) {
    if (openTopicIds.has(topicId)) {
      closeTopic(topicId, false);
    } else {
      openTopic(topicId, false);
    }
  }

  function openTopic(topicId, shouldScroll = false) {
    // Add to open set — does NOT close any previously opened topics!
    openTopicIds.add(topicId);

    const card = document.getElementById(topicId);
    if (!card) return;

    card.classList.add('is-expanded');
    const summary = card.querySelector('.topic-card-summary');
    if (summary) summary.setAttribute('aria-expanded', 'true');

    if (shouldScroll) {
      requestAnimationFrame(() => {
        const y = card.getBoundingClientRect().top + window.scrollY - 36;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    }

    updateStickyTopbarOnScroll();
  }

  function closeTopic(topicId, scrollBackToCard = false) {
    openTopicIds.delete(topicId);

    const card = document.getElementById(topicId);
    if (!card) return;

    card.classList.remove('is-expanded');
    const summary = card.querySelector('.topic-card-summary');
    if (summary) summary.setAttribute('aria-expanded', 'false');

    if (scrollBackToCard) {
      requestAnimationFrame(() => {
        const y = card.getBoundingClientRect().top + window.scrollY - 36;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    }

    updateStickyTopbarOnScroll();
  }

  /* ── 5. STICKY ACTIVE-TOPIC TOPBAR SYNC ──────────────────────── */
  function updateStickyTopbarOnScroll() {
    const topbar = document.getElementById('active-topic-topbar');
    if (!topbar) return;

    if (openTopicIds.size === 0) {
      topbar.classList.remove('is-visible');
      topbar.setAttribute('aria-hidden', 'true');
      topbarActiveTopicId = null;
      return;
    }

    // Find which open topic is currently in the reading viewport
    let currentInView = null;
    let closestTop = -Infinity;

    openTopicIds.forEach(id => {
      const card = document.getElementById(id);
      if (!card) return;
      const rect = card.getBoundingClientRect();

      // Card is currently active if top is near or above header line, and bottom is below header line
      if (rect.top <= 120 && rect.bottom >= 100) {
        if (rect.top > closestTop) {
          closestTop = rect.top;
          currentInView = id;
        }
      }
    });

    if (currentInView) {
      topbarActiveTopicId = currentInView;
      const topic = SYSTEM_DESIGN_NOTES.topics.find(t => t.id === currentInView);
      if (topic) {
        const numEl = document.getElementById('active-topbar-num');
        const titleEl = document.getElementById('active-topbar-title');
        if (numEl) numEl.textContent = `TOPIC ${topic.number}`;
        if (titleEl) titleEl.textContent = topic.title;
      }

      topbar.classList.add('is-visible');
      topbar.setAttribute('aria-hidden', 'false');
    } else {
      topbar.classList.remove('is-visible');
      topbar.setAttribute('aria-hidden', 'true');
      topbarActiveTopicId = null;
    }
  }

  function init() {
    renderNavbarLinks();
    renderTopics();
  }

  return { init, openTopic, closeTopic, toggleTopic };
})();

document.addEventListener('DOMContentLoaded', () => {
  StudyApp.init();
  UI.init();
});