/* ═══════════════════════════════════════════════════════════════
   APP.JS — Render Engine for SauceLabs-Style Focused Study Cards
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderQuickJumpBar();
  renderTopics();

  // Initialize UI & Simulators
  UI.init();
  Visualizers.init();
});

/* ── 1. RENDER QUICK JUMP CAPSULE BAR ─────────────────────────── */
function renderQuickJumpBar() {
  const jumpMount = document.getElementById('quick-jump-mount');
  if (!jumpMount) return;

  let html = ``;
  SYSTEM_DESIGN_NOTES.topics.forEach((t, i) => {
    html += `
      <a href="#${t.id}" class="jump-pill ${i === 0 ? 'active' : ''}">
        ${t.number}. ${t.title}
      </a>
    `;
  });

  html += `
    <a href="#interactive-simulator" class="jump-pill" style="border:1px solid var(--border); font-weight:600;">
      ⚡ Live Simulator
    </a>
  `;

  jumpMount.innerHTML = html;
}

/* ── 2. RENDER THE 6 TOPIC CARDS ──────────────────────────────── */
function renderTopics() {
  const mount = document.getElementById('topics-mount');
  if (!mount) return;

  let html = '';

  SYSTEM_DESIGN_NOTES.topics.forEach((topic) => {
    html += `
      <section class="topic-card" id="${topic.id}">
        <!-- Focus Header Bar -->
        <div class="topic-header-bar">
          <div class="topic-kicker">
            <span class="pulse-dot"></span>
            <span>${topic.kicker}</span>
          </div>
          <span class="topic-progress-badge">TOPIC ${topic.number} OF 06</span>
        </div>

        <div>
          <h2 class="topic-title">${topic.number}. ${topic.title}</h2>
          <p class="topic-subtitle">${topic.lead}</p>
        </div>
    `;

    // Render Subsections
    topic.sections.forEach((sec) => {
      html += `<div style="display:flex; flex-direction:column; gap:0.85rem;">`;

      if (sec.title) {
        html += `<h3 style="font-family:var(--font-display); font-size:1.35rem; color:var(--text-primary); margin-top:0.5rem;">${sec.title}</h3>`;
      }

      if (sec.content) {
        html += `<div style="color:var(--text-secondary); line-height:1.8;">${sec.content}</div>`;
      }

      if (sec.rule) {
        html += sec.rule;
      }

      // Render 3 Bottlenecks or 3 Solutions Grid
      if (sec.items && (sec.type === 'bottlenecks' || sec.type === 'solutions' || sec.type === 'gateway-features')) {
        html += `<div class="sub-card-grid-3">`;
        sec.items.forEach(item => {
          html += `
            <div class="sub-box">
              <div class="sub-box__tag">${item.tag}</div>
              <div class="sub-box__title">${item.title}</div>
              <div class="sub-box__body">${item.desc}</div>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Render 4 Migration Patterns Grid
      if (sec.items && sec.type === 'patterns') {
        html += `<div class="sub-card-grid-2">`;
        sec.items.forEach(item => {
          html += `
            <div class="sub-box" style="border-left: 3px solid var(--accent);">
              <div class="sub-box__tag">${item.tag}</div>
              <div class="sub-box__title">${item.title}</div>
              <div class="sub-box__body">${item.desc}</div>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Render Myths vs Reality Cards
      if (sec.items && sec.type === 'myths') {
        sec.items.forEach(item => {
          html += `
            <div class="myth-card">
              <div class="myth-header">
                <span>⚠️ MYTH EXAMINATION</span>
              </div>
              <div class="myth-text">${item.myth}</div>
              <div class="fact-text"><strong>Reality:</strong> ${item.fact}</div>
            </div>
          `;
        });
      }

      // Render 6-Step Workflow Stack
      if (sec.steps && sec.type === 'workflow') {
        html += `<div class="workflow-stack">`;
        sec.steps.forEach(st => {
          html += `
            <div class="workflow-step">
              <div class="step-circle">${st.num}</div>
              <div>
                <div class="workflow-step__title">${st.title}</div>
                <div class="workflow-step__desc">${st.desc}</div>
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });

    html += `</section>`;
  });

  mount.innerHTML = html;
}
