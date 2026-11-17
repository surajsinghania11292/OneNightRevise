/* ═══════════════════════════════════════════════════════════════
   APP.JS — Render Engine & Inline Interactive Architecture Simulators
   Structured Numbered Sections (1.1, 1.2, 2.1, etc.) + Live Demos
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderQuickJumpBar();
  renderTopics();
  initInlineBlueprints();

  // Initialize UI & Global Simulators
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
      ⚡ Live Global Lab
    </a>
  `;

  jumpMount.innerHTML = html;
}

/* ── 2. RENDER THE 6 TOPIC CARDS WITH NUMBERED STRUCTURE ──────── */
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

    // Render Structured Numbered Subsections
    topic.sections.forEach((sec) => {
      html += `<div class="section-block">`;

      if (sec.title) {
        if (sec.num) {
          html += `
            <div class="section-numbered-heading">
              <span class="section-index-badge">${sec.num}</span>
              <h3 class="section-title-text">${sec.title}</h3>
            </div>
          `;
        } else {
          html += `<h3 class="section-title-text">${sec.title}</h3>`;
        }
      }

      if (sec.content) {
        html += `<div style="color:var(--text-secondary); line-height:1.8;">${sec.content}</div>`;
      }

      if (sec.rule) {
        html += sec.rule;
      }

      // Render 3 Bottlenecks or 3 Gateway Capabilities Grid
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

/* ── 3. INTERACTIVE INLINE ARCHITECTURE BLUEPRINT CONTROLLERS ─── */
function initInlineBlueprints() {
  /* 3A. TOPIC 1: MONOLITH SPOF FAILURE CASCADE */
  const btnCrashMono = document.getElementById('btn-crash-monolith');
  const btnResetMono = document.getElementById('btn-reset-monolith');
  const monoContainer = document.getElementById('mono-process-container');
  const monoStatusPill = document.getElementById('mono-status-pill');
  const modPayment = document.getElementById('mod-payment');
  const collateralMods = ['mod-auth', 'mod-course', 'mod-cart', 'mod-order'];
  const monoDbBox = document.getElementById('mono-db-box');
  const monoDiag = document.getElementById('mono-diagnostic');

  if (btnCrashMono && btnResetMono && monoContainer) {
    btnCrashMono.addEventListener('click', () => {
      monoContainer.classList.add('system-crashed');
      monoStatusPill.textContent = '⚠️ STATUS: 503 CRASHED (OS PROCESS KILLED)';
      monoStatusPill.style.color = '#B45309';
      monoStatusPill.style.borderColor = '#B45309';

      if (modPayment) modPayment.classList.add('crashed-mod');
      collateralMods.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('collateral-crash');
      });

      if (monoDbBox) {
        monoDbBox.innerHTML = '<span>⚠️ Connection Pool Dropped: 0 / 50 Active Connections</span>';
        monoDbBox.style.borderColor = '#B45309';
      }

      if (monoDiag) monoDiag.style.display = 'flex';
    });

    btnResetMono.addEventListener('click', () => {
      monoContainer.classList.remove('system-crashed');
      monoStatusPill.textContent = '● STATUS: ONLINE (100% HEALTHY)';
      monoStatusPill.style.color = 'var(--success)';
      monoStatusPill.style.borderColor = 'var(--success)';

      if (modPayment) modPayment.classList.remove('crashed-mod');
      collateralMods.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('collateral-crash');
      });

      if (monoDbBox) {
        monoDbBox.innerHTML = '<span>🗄️ Single Central Database (Tables: users, courses, carts, payments, orders)</span>';
        monoDbBox.style.borderColor = 'var(--border-strong)';
      }

      if (monoDiag) monoDiag.style.display = 'none';
    });
  }

  /* 3B. TOPIC 2: MICROSERVICES FAULT ISOLATION */
  const btnCrashMicro = document.getElementById('btn-crash-micro');
  const btnResetMicro = document.getElementById('btn-reset-micro');
  const podPayment = document.getElementById('pod-payment');
  const statusPayment = document.getElementById('status-payment');
  const microDiag = document.getElementById('micro-diagnostic');

  if (btnCrashMicro && btnResetMicro && podPayment) {
    btnCrashMicro.addEventListener('click', () => {
      podPayment.classList.remove('pod-healthy');
      podPayment.classList.add('pod-crashed');
      if (statusPayment) {
        statusPayment.textContent = '⚠️ CIRCUIT BREAKER OPEN (DOWN)';
        statusPayment.classList.remove('status-ok');
        statusPayment.classList.add('status-down');
      }
      if (microDiag) microDiag.style.display = 'flex';
    });

    btnResetMicro.addEventListener('click', () => {
      podPayment.classList.remove('pod-crashed');
      podPayment.classList.add('pod-healthy');
      if (statusPayment) {
        statusPayment.textContent = '● ONLINE (HEALTHY)';
        statusPayment.classList.remove('status-down');
        statusPayment.classList.add('status-ok');
      }
      if (microDiag) microDiag.style.display = 'none';
    });
  }

  /* 3C. TOPIC 5: STRANGLER FIG CANARY SLIDER & INSTANT ROLLBACK */
  const canarySlider = document.getElementById('canary-slider');
  const canaryLabel = document.getElementById('canary-pct-label');
  const monoPct = document.getElementById('mono-pct-display');
  const microPct = document.getElementById('micro-pct-display');
  const btnRollback = document.getElementById('btn-instant-rollback');
  const rollbackMsg = document.getElementById('rollback-msg');

  if (canarySlider && canaryLabel && monoPct && microPct) {
    const updateSplits = (val) => {
      const mVal = parseInt(val, 10);
      const legacyVal = 100 - mVal;
      canaryLabel.textContent = `${mVal}%`;
      microPct.textContent = `${mVal}%`;
      monoPct.textContent = `${legacyVal}%`;
    };

    canarySlider.addEventListener('input', (e) => {
      updateSplits(e.target.value);
      if (rollbackMsg) {
        rollbackMsg.textContent = `Routing ${e.target.value}% live traffic to Payment Microservice`;
        rollbackMsg.style.color = 'var(--text-muted)';
      }
    });

    if (btnRollback) {
      btnRollback.addEventListener('click', () => {
        canarySlider.value = 0;
        updateSplits(0);
        if (rollbackMsg) {
          rollbackMsg.textContent = '⚡ INSTANT ROLLBACK COMPLETE: 100% traffic returned to Monolith in 8ms!';
          rollbackMsg.style.color = '#B45309';
          rollbackMsg.style.fontWeight = '700';
        }
      });
    }
  }
}
