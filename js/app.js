/* ═══════════════════════════════════════════════════════════════
   APP.JS — Expandable Topic Study Engine
   Features:
   • Collapsed Rectangular Preview Cards (Click to Expand)
   • Sticky Active-Topic Topbar with Live Per-Topic Scroll Progress
   • One-Click Close Topic & Mark Complete (Persisted in localStorage)
   • Overall Revision Progress Bar
   ═══════════════════════════════════════════════════════════════ */

const StudyApp = (() => {
  const STORAGE_KEY = 'onr-completed-topics';
  let activeTopicId = null;
  let completedTopics = new Set();

  function loadCompleted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          completedTopics = new Set(parsed);
        }
      }
    } catch (e) {
      completedTopics = new Set();
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedTopics]));
    } catch (e) { }
  }

  /* ── 1. RENDER NAVBAR LINKS DYNAMICALLY ─────────────────────── */
  function renderNavbarLinks() {
    const navMount = document.getElementById('nav-links-mount');
    if (!navMount) return;

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

  /* ── 2. RENDER ALL EXPANDABLE RECTANGULAR TOPIC CARDS ───────── */
  function renderTopics() {
    const mount = document.getElementById('topics-mount');
    if (!mount) return;

    const total = SYSTEM_DESIGN_NOTES.topics.length;
    let html = '';

    SYSTEM_DESIGN_NOTES.topics.forEach((topic, idx) => {
      const isDone = completedTopics.has(topic.id);
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
        <article class="topic-card ${isDone ? 'is-completed' : ''}" id="${topic.id}" data-topic-id="${topic.id}">
          <!-- Clickable Rectangular Summary Header -->
          <div class="topic-card-summary" role="button" tabindex="0" aria-expanded="false" data-toggle-topic="${topic.id}">
            <div class="topic-summary-main">
              <div class="topic-summary-top-row">
                <span class="topic-num-pill">TOPIC ${topic.number} OF ${String(total).padStart(2, '0')}</span>
                <span class="topic-done-badge">✓ Completed</span>
                <span class="topic-meta-count">${subCount} Subtopics · ${diagText}</span>
              </div>

              <h2 class="topic-title">${topic.number}. ${topic.title}</h2>
              <p class="topic-subtitle">${topic.summary}</p>

              <div class="topic-preview-pills">
                ${previewChips}
              </div>
            </div>

            <div class="topic-summary-action">
              <span class="topic-expand-btn" data-expand-label="${topic.id}">Read Topic ↓</span>
            </div>
          </div>

          <!-- Expanded Full Content Body -->
          <div class="topic-card-body">
            ${sectionsHtml}

            <!-- Bottom Completion & Close Footer -->
            <div class="topic-footer-bar">
              <div style="display:flex; gap:0.75rem; flex-wrap:wrap; align-items:center;">
                <button type="button" class="topbar-btn topbar-btn--complete ${isDone ? 'is-done' : ''}" data-footer-complete="${topic.id}">
                  ${isDone ? '✓ Completed' : '✓ Mark Topic Complete'}
                </button>
                <button type="button" class="topbar-btn topbar-btn--close" data-footer-close="${topic.id}">
                  ✕ Close Topic
                </button>
              </div>

              ${nextTopic ? `
                <button type="button" class="topbar-btn topbar-btn--complete" data-next-topic="${nextTopic.id}">
                  Next: Topic ${nextTopic.number} →
                </button>
              ` : `
                <span style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted);">
                  End of current notes
                </span>
              `}
            </div>
          </div>
        </article>
      `;
    });

    mount.innerHTML = html;
    bindCardEvents();
    updateOverallProgress();
  }

  /* ── 3. BIND CLICK & KEYBOARD EVENTS ────────────────────────── */
  function bindCardEvents() {
    // Expand / Collapse on rectangular card click
    document.querySelectorAll('[data-toggle-topic]').forEach(header => {
      const handleToggle = () => {
        const id = header.getAttribute('data-toggle-topic');
        if (activeTopicId === id) {
          closeActiveTopic(false);
        } else {
          openTopic(id, true);
        }
      };

      header.addEventListener('click', handleToggle);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      });
    });

    // Footer Mark Complete buttons
    document.querySelectorAll('[data-footer-complete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-footer-complete');
        toggleComplete(id);
      });
    });

    // Footer Close Topic buttons
    document.querySelectorAll('[data-footer-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        closeActiveTopic(true);
      });
    });

    // Footer Next Topic buttons
    document.querySelectorAll('[data-next-topic]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nextId = btn.getAttribute('data-next-topic');
        if (activeTopicId && !completedTopics.has(activeTopicId)) {
          toggleComplete(activeTopicId, true);
        }
        openTopic(nextId, true);
      });
    });

    // Sticky Topbar buttons
    const topbarClose = document.getElementById('btn-topbar-close');
    if (topbarClose) {
      topbarClose.addEventListener('click', () => closeActiveTopic(true));
    }

    const topbarComplete = document.getElementById('btn-topbar-complete');
    if (topbarComplete) {
      topbarComplete.addEventListener('click', () => {
        if (activeTopicId) toggleComplete(activeTopicId);
      });
    }

    // Close active topic on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && activeTopicId) {
        closeActiveTopic(true);
      }
    });

    // Live scroll progress tracking inside expanded topic
    window.addEventListener('scroll', updateActiveTopicScrollProgress, { passive: true });
    window.addEventListener('resize', updateActiveTopicScrollProgress, { passive: true });
  }

  /* ── 4. OPEN & CLOSE TOPIC LOGIC ────────────────────────────── */
  function openTopic(topicId, shouldScroll) {
    // Collapse any previously open topic
    if (activeTopicId && activeTopicId !== topicId) {
      collapseCardDOM(activeTopicId);
    }

    activeTopicId = topicId;
    const card = document.getElementById(topicId);
    const topic = SYSTEM_DESIGN_NOTES.topics.find(t => t.id === topicId);
    if (!card || !topic) return;

    card.classList.add('is-expanded');
    const summary = card.querySelector('.topic-card-summary');
    if (summary) summary.setAttribute('aria-expanded', 'true');

    const label = card.querySelector(`[data-expand-label="${topicId}"]`);
    if (label) label.textContent = 'Close Topic ↑';

    // Show & populate Sticky Active-Topic Topbar
    updateTopbarState(topic);
    const topbar = document.getElementById('active-topic-topbar');
    if (topbar) {
      topbar.classList.add('is-visible');
      topbar.setAttribute('aria-hidden', 'false');
    }

    if (shouldScroll) {
      requestAnimationFrame(() => {
        const y = card.getBoundingClientRect().top + window.scrollY - 82;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    }

    updateActiveTopicScrollProgress();
  }

  function collapseCardDOM(topicId) {
    const card = document.getElementById(topicId);
    if (!card) return;
    card.classList.remove('is-expanded');

    const summary = card.querySelector('.topic-card-summary');
    if (summary) summary.setAttribute('aria-expanded', 'false');

    const label = card.querySelector(`[data-expand-label="${topicId}"]`);
    if (label) label.textContent = 'Read Topic ↓';
  }

  function closeActiveTopic(scrollBackToCard) {
    if (!activeTopicId) return;
    const closingId = activeTopicId;
    collapseCardDOM(closingId);
    activeTopicId = null;

    const topbar = document.getElementById('active-topic-topbar');
    if (topbar) {
      topbar.classList.remove('is-visible');
      topbar.setAttribute('aria-hidden', 'true');
    }

    if (scrollBackToCard) {
      const card = document.getElementById(closingId);
      if (card) {
        requestAnimationFrame(() => {
          const y = card.getBoundingClientRect().top + window.scrollY - 28;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        });
      }
    }
  }

  /* ── 5. COMPLETION TRACKING & TOPBAR SYNC ───────────────────── */
  function toggleComplete(topicId, forceComplete = false) {
    if (forceComplete) {
      completedTopics.add(topicId);
    } else if (completedTopics.has(topicId)) {
      completedTopics.delete(topicId);
    } else {
      completedTopics.add(topicId);
    }

    saveCompleted();
    const isDone = completedTopics.has(topicId);

    const card = document.getElementById(topicId);
    if (card) {
      card.classList.toggle('is-completed', isDone);
      const footerBtn = card.querySelector(`[data-footer-complete="${topicId}"]`);
      if (footerBtn) {
        footerBtn.classList.toggle('is-done', isDone);
        footerBtn.textContent = isDone ? '✓ Completed' : '✓ Mark Topic Complete';
      }
    }

    if (activeTopicId === topicId) {
      const topic = SYSTEM_DESIGN_NOTES.topics.find(t => t.id === topicId);
      if (topic) updateTopbarState(topic);
    }

    updateOverallProgress();
  }

  function updateTopbarState(topic) {
    const numEl = document.getElementById('active-topbar-num');
    const titleEl = document.getElementById('active-topbar-title');
    const completeBtn = document.getElementById('btn-topbar-complete');

    if (numEl) numEl.textContent = `TOPIC ${topic.number}`;
    if (titleEl) titleEl.textContent = topic.title;

    if (completeBtn) {
      const isDone = completedTopics.has(topic.id);
      completeBtn.classList.toggle('is-done', isDone);
      completeBtn.textContent = isDone ? '✓ Completed' : '✓ Mark Complete';
    }
  }

  function updateOverallProgress() {
    const total = SYSTEM_DESIGN_NOTES.topics.length;
    const validCompleted = SYSTEM_DESIGN_NOTES.topics.filter(t => completedTopics.has(t.id)).length;
    const pct = total > 0 ? Math.round((validCompleted / total) * 100) : 0;

    const headingEl = document.getElementById('overall-progress-heading');
    const pctEl = document.getElementById('overall-progress-pct');
    const fillEl = document.getElementById('overall-progress-fill');

    if (headingEl) headingEl.textContent = `${validCompleted} of ${total} Topics Completed`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  }

  /* ── 6. LIVE PER-TOPIC SCROLL READING PROGRESS ──────────────── */
  function updateActiveTopicScrollProgress() {
    if (!activeTopicId) return;
    const card = document.getElementById(activeTopicId);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const viewH = window.innerHeight;
    const scrollable = Math.max(1, rect.height - viewH + 140);
    const scrolled = Math.max(0, 82 - rect.top);
    const pct = Math.min(100, Math.max(0, Math.round((scrolled / scrollable) * 100)));

    const pctEl = document.getElementById('active-topbar-pct');
    const fillEl = document.getElementById('active-topbar-fill');

    if (pctEl) pctEl.textContent = `${pct}% read`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  }

  function init() {
    loadCompleted();
    renderNavbarLinks();
    renderTopics();
  }

  return { init, openTopic, closeActiveTopic };
})();

document.addEventListener('DOMContentLoaded', () => {
  StudyApp.init();
  UI.init();
});
