/* ═══════════════════════════════════════════════════════════════
   APP.JS — Expandable Multi-Track Revision Engine (OneNightRevise)
   Tracks Supported:
   1. System Design & Distributed Systems (72 Topics · 187 Diagrams)
   2. ReactJS & Modern Frontend (5 Topics · 10 Diagrams)

   Features:
   • Single-Screen Compact Landing Page with Bento Subject Selection Cards
   • Dedicated Track Revision Views (System Design / ReactJS)
   • 2-per-row Rectangular Preview Cards with 100% Uniform 220px Height
   • Multi-Open Topics: Opened topics stay open until closed by user
   • Instant Close Snap: Directly restores view to closed card with zero scroll jitter
   • Responsive Vector SVG Architecture Diagrams with zero overflow
   • Sticky Active-Topic Topbar showing Current Open Topic in View
   ═══════════════════════════════════════════════════════════════ */

const StudyApp = (() => {
  // Current active subject track: 'system-design', 'reactjs', or null (landing view)
  let currentTrack = null;

  // Track all currently open topic IDs (allows multiple topics open simultaneously)
  const openTopicIds = new Set();
  let topbarActiveTopicId = null;

  /* ── 1. ACTIVE TRACK DATA RESOLVER ─────────────────────────── */
  function getActiveData() {
    if (currentTrack === 'reactjs') {
      return (typeof REACT_NOTES !== 'undefined') ? REACT_NOTES : { topics: [] };
    }
    return (typeof SYSTEM_DESIGN_NOTES !== 'undefined') ? SYSTEM_DESIGN_NOTES : { topics: [] };
  }

  /* ── 2. LANDING VIEW CONTROLLER ─────────────────────────────── */
  function showLandingView(pushState = true) {
    currentTrack = null;
    openTopicIds.clear();

    const landingView = document.getElementById('landing-view');
    const trackView = document.getElementById('track-view');
    const navBackBtn = document.getElementById('nav-back-to-landing');
    const topbar = document.getElementById('active-topic-topbar');

    if (landingView) landingView.style.display = 'flex';
    if (trackView) trackView.style.display = 'none';
    if (navBackBtn) navBackBtn.style.display = 'none';

    if (topbar) {
      topbar.classList.remove('is-visible');
      topbar.setAttribute('aria-hidden', 'true');
    }

    if (pushState) {
      try {
        history.replaceState(null, '', window.location.pathname);
      } catch (e) { }
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  /* ── 3. DEDICATED TRACK VIEW CONTROLLER ─────────────────────── */
  function openTrack(trackName, pushState = true) {
    if (trackName !== 'system-design' && trackName !== 'reactjs') {
      showLandingView(pushState);
      return;
    }

    currentTrack = trackName;
    openTopicIds.clear();

    const landingView = document.getElementById('landing-view');
    const trackView = document.getElementById('track-view');

    if (landingView) landingView.style.display = 'none';
    if (trackView) trackView.style.display = 'block';

    // Update Track Header Banner (Clean Title & Stats, No Track Badges)
    const titleEl = document.getElementById('active-track-title');
    const statsEl = document.getElementById('active-track-stats');

    if (trackName === 'reactjs') {
      const count = (typeof REACT_NOTES !== 'undefined' && REACT_NOTES.topics) ? REACT_NOTES.topics.length : 41;
      let diagCount = 0;
      if (typeof REACT_NOTES !== 'undefined' && REACT_NOTES.topics) {
        REACT_NOTES.topics.forEach(t => { diagCount += t.diagramCount || 0; });
      }
      if (titleEl) titleEl.textContent = 'ReactJS Revision Notes';
      if (statsEl) statsEl.textContent = `${count} Topics · ${diagCount || 82} Visual Architecture Diagrams`;
      if (pushState) {
        try { history.replaceState(null, '', '#reactjs'); } catch (e) { }
      }
    } else {
      const count = (typeof SYSTEM_DESIGN_NOTES !== 'undefined' && SYSTEM_DESIGN_NOTES.topics) ? SYSTEM_DESIGN_NOTES.topics.length : 72;
      if (titleEl) titleEl.textContent = 'System Design Revision Notes';
      if (statsEl) statsEl.textContent = `${count} Topics · 187 Visual Architecture Diagrams`;
      if (pushState) {
        try { history.replaceState(null, '', '#system-design'); } catch (e) { }
      }
    }

    renderTopics();
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateStickyTopbarOnScroll();
  }

  /* ── 3. SAFE HTML TEXT ESCAPER (PREVENTS <Component /> TAG STRIPPING) ── */
  function escapeUnsafeTags(str) {
    if (!str) return '';
    // Escapes raw <ComponentName ...> or <tag> so the browser's innerHTML parser doesn't swallow custom tags
    return String(str).replace(/<([A-Za-z][A-Za-z0-9]*(?:\s+[^>]*)?\/?)>/g, (m) => {
      return m.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    });
  }

  /* ── 4. RENDER TOPIC CARDS FOR CURRENT TRACK ────────────────── */
  function renderTopics() {
    const mount = document.getElementById('topics-mount');
    if (!mount) return;

    const activeData = getActiveData();
    const topics = activeData.topics || [];

    let html = '';

    topics.forEach((topic) => {
      const subCount = topic.sections.length;
      const diagText = topic.diagramCount === 1 ? '1 Diagram' : `${topic.diagramCount} Diagrams`;

      const previewChips = (topic.subtopicLabels || []).map(lbl => `
        <span class="preview-chip">${escapeUnsafeTags(lbl)}</span>
      `).join('');

      let sectionsHtml = '';
      topic.sections.forEach((sec, sIdx) => {
        sectionsHtml += `<div class="section-block">`;

        if (sec.title) {
          const badgeText = sec.num || sec.index || `${topic.number}.${sIdx + 1}`;
          sectionsHtml += `
            <div class="section-numbered-heading">
              <span class="section-index-badge">${badgeText}</span>
              <h3 class="section-title-text">${escapeUnsafeTags(sec.title)}</h3>
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
                  <div class="workflow-step__title">${escapeUnsafeTags(st.title)}</div>
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
              <h2 class="topic-title">${topic.number}. ${escapeUnsafeTags(topic.title)}</h2>
              <p class="topic-subtitle">${escapeUnsafeTags(topic.summary)}</p>

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

            <!-- Bottom Close Button (Clean light pill, instant snap restoration) -->
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

  /* ── 5. BIND TOPIC CARD EVENTS ──────────────────────────────── */
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

    // Footer Close Topic buttons (Instant Snap to closed card)
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

  /* ── 6. INDEPENDENT TOPIC TOGGLE / OPEN / CLOSE ─────────────── */
  function toggleTopic(topicId) {
    if (openTopicIds.has(topicId)) {
      closeTopic(topicId, false);
    } else {
      openTopic(topicId, false);
    }
  }

  function openTopic(topicId, shouldScroll = false) {
    // Focused accordion: close previously open topic so chronological card order is strictly preserved
    openTopicIds.forEach(id => {
      if (id !== topicId) {
        closeTopic(id, false);
      }
    });

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

  function closeTopic(topicId, snapToCard = false) {
    openTopicIds.delete(topicId);

    const card = document.getElementById(topicId);
    if (!card) return;

    // 1. Collapse the card immediately to its uniform 220px box
    card.classList.remove('is-expanded');
    const summary = card.querySelector('.topic-card-summary');
    if (summary) summary.setAttribute('aria-expanded', 'false');

    if (snapToCard) {
      // 2. Compute collapsed card top offset and jump directly to it with zero scrolling motion
      const cardTop = card.getBoundingClientRect().top + window.scrollY;
      const targetY = Math.max(0, cardTop - 70);

      window.scrollTo({ top: targetY, behavior: 'instant' });
    }

    updateStickyTopbarOnScroll();
  }

  /* ── 7. STICKY ACTIVE-TOPIC TOPBAR SYNC ──────────────────────── */
  function updateStickyTopbarOnScroll() {
    const topbar = document.getElementById('active-topic-topbar');
    if (!topbar) return;

    if (!currentTrack || openTopicIds.size === 0) {
      topbar.classList.remove('is-visible');
      topbar.setAttribute('aria-hidden', 'true');
      topbarActiveTopicId = null;
      return;
    }

    let currentInView = null;
    let closestTop = -Infinity;

    openTopicIds.forEach(id => {
      const card = document.getElementById(id);
      if (!card) return;
      const rect = card.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 100) {
        if (rect.top > closestTop) {
          closestTop = rect.top;
          currentInView = id;
        }
      }
    });

    if (currentInView) {
      topbarActiveTopicId = currentInView;
      const activeData = getActiveData();
      const topic = (activeData.topics || []).find(t => t.id === currentInView);
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

  /* ── 8. GLOBAL EVENT BINDINGS (TRACK SWITCHER & HASH ROUTING) ── */
  function bindGlobalEvents() {
    // Subject card click or CTA button click
    document.querySelectorAll('[data-switch-track]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const track = btn.getAttribute('data-switch-track');
        openTrack(track, true);
      });
    });

    document.querySelectorAll('[data-track-card]').forEach(card => {
      card.addEventListener('click', () => {
        const track = card.getAttribute('data-track-card');
        openTrack(track, true);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const track = card.getAttribute('data-track-card');
          openTrack(track, true);
        }
      });
    });

    // Navigation back buttons (Navbar + Track Banner + Brand Logo)
    const backBtn = document.getElementById('nav-back-to-landing');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showLandingView(true);
      });
    }

    const bannerBackBtn = document.getElementById('track-banner-back');
    if (bannerBackBtn) {
      bannerBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showLandingView(true);
      });
    }

    const brandLink = document.getElementById('brand-home-link');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLandingView(true);
      });
    }

    // URL Hash Navigation Routing
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('react')) {
        openTrack('reactjs', false);
      } else if (hash.includes('system')) {
        openTrack('system-design', false);
      } else {
        showLandingView(false);
      }
    });
  }

  /* ── 9. INITIALIZE STUDY ENGINE ─────────────────────────────── */
  function init() {
    bindGlobalEvents();

    // Check initial hash on page load
    const initialHash = window.location.hash.toLowerCase();
    if (initialHash.includes('react')) {
      openTrack('reactjs', false);
    } else if (initialHash.includes('system')) {
      openTrack('system-design', false);
    } else {
      showLandingView(false);
    }
  }

  return { init, openTrack, showLandingView, openTopic, closeTopic, toggleTopic };
})();

document.addEventListener('DOMContentLoaded', () => {
  StudyApp.init();
  UI.init();
});
