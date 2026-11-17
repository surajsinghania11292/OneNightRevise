/* ═══════════════════════════════════════════════════════════════
   APP.JS — Master Controller: Reads data.js, builds DOM elements,
            mounts visualizers, and starts UI listeners
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderContent();
  renderFaq();

  // Initialize UI & Interactive Visualizers
  UI.init();
  Visualizers.init();
});

/* ── 1. RENDER SIDEBAR TABLE OF CONTENTS ──────────────────────── */
function renderSidebar() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  let html = '';
  SYSTEM_DESIGN_NOTES.topics.forEach((topic, idx) => {
    html += `
      <li>
        <a href="#${topic.id}" class="toc-link ${idx === 0 ? 'active' : ''}">
          <span class="toc-num">0${idx + 1}</span>
          <span>${topic.title}</span>
        </a>
      </li>
    `;
  });

  // Add Visualizers and Interview FAQ links
  html += `
    <li>
      <a href="#interactive-visualizers" class="toc-link">
        <span class="toc-num">⚡</span>
        <span>Interactive Architecture Simulators</span>
      </a>
    </li>
    <li>
      <a href="#interview-qa" class="toc-link">
        <span class="toc-num">🎯</span>
        <span>FAANG Interview Q&A</span>
      </a>
    </li>
  `;

  tocList.innerHTML = html;
}

/* ── 2. RENDER TOPIC SECTIONS ─────────────────────────────────── */
function renderContent() {
  const contentMount = document.getElementById('content-mount');
  if (!contentMount) return;

  let html = '';

  SYSTEM_DESIGN_NOTES.topics.forEach((topic, tIdx) => {
    html += `
      <section class="note-section" id="${topic.id}">
        <div class="section-eyebrow">${topic.badge}</div>
        <h2 class="section-title">${topic.title}</h2>
        <p class="section-lead">${topic.lead}</p>

        <div class="topic-body">
    `;

    // Render internal sub-sections
    topic.sections.forEach(sec => {
      html += `
        <div class="card" style="margin-bottom: 2rem;">
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 1rem;">
            ${sec.heading}
          </h3>
          <div style="color: var(--text-secondary); line-height: 1.8;">
            ${sec.content}
          </div>
      `;

      // Render Callouts if present
      if (sec.callouts && sec.callouts.length > 0) {
        sec.callouts.forEach(c => {
          const icon = c.type === 'junior' ? '🐣' : (c.type === 'senior' ? '📐' : (c.type === 'warning' ? '⚠️' : '🎯'));
          html += `
            <div class="callout callout--${c.type}">
              <div class="callout__header">
                <span class="callout__icon">${icon}</span>
                <span>${c.title}</span>
              </div>
              <div class="callout__body">${c.text}</div>
            </div>
          `;
        });
      }

      // Render Cards grid if present
      if (sec.items && sec.items.length > 0) {
        html += `<div class="grid-2" style="margin-top: 1.5rem; gap: 1rem;">`;
        sec.items.forEach(item => {
          html += `
            <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--r-md); padding: 1.25rem;">
              <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--accent); margin-bottom: 0.5rem;">
                ${item.title}
              </h4>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.7;">
                ${item.desc}
              </p>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Render Step timeline if present (Strangler Fig)
      if (sec.steps && sec.steps.length > 0) {
        html += `<div class="step-timeline">`;
        sec.steps.forEach(st => {
          html += `
            <div class="step-item">
              <div class="step-node">${st.step}</div>
              <div class="step-content">
                <div class="step-title">
                  <span>${st.title}</span>
                </div>
                <div class="step-desc">${st.desc}</div>
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`; // Close card
    });

    html += `
        </div>
      </section>
    `;
  });

  contentMount.innerHTML = html;
}

/* ── 3. RENDER INTERVIEW FAQ ACCORDION ────────────────────────── */
function renderFaq() {
  const faqMount = document.getElementById('faq-mount');
  if (!faqMount) return;

  let html = '';
  SYSTEM_DESIGN_NOTES.interviewFaq.forEach(item => {
    html += `
      <div class="accordion">
        <button class="accordion__trigger">
          <span>${item.q}</span>
          <span class="accordion__icon">▼</span>
        </button>
        <div class="accordion__content">
          <p>${item.a}</p>
        </div>
      </div>
    `;
  });

  faqMount.innerHTML = html;
}
