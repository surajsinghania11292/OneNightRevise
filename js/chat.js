/* ═══════════════════════════════════════════════════════════════
   CHAT.JS — ReviseBot AI Revision Assistant Client
   Interactive Robot Animation + FLIP Morph + Multi-Track Revision Context
   Serverless API: /api/chat
   ═══════════════════════════════════════════════════════════════ */

(function () {
  let widget, toggleBtn, chatPanel, closeBtn, clearBtn, chatBody, chatForm, chatInput, sendBtn;
  let botContainer, botHead, avatarTarget, contextBadge, starterChipsContainer;

  let history = [];
  let isOpen = false;
  let isRequestInFlight = false;

  // Track-specific default starter chips
  const STARTER_PRESETS = {
    reactjs: [
      "Why does useState batch updates in React 18?",
      "Explain the Road & Truck analogy in useEffect",
      "Virtual DOM vs Real DOM: 5-stage browser pipeline",
      "Quiz me on React Router nested routes & Outlet"
    ],
    'system-design': [
      "L4 vs L7 Load Balancer: When to use which?",
      "Why does consistent hashing use virtual nodes?",
      "Kafka vs RabbitMQ: Commit log vs Worker queue",
      "What causes database cache thrashing & lock contention?"
    ],
    general: [
      "How do I systematically revise for an SDE interview?",
      "Explain Monolith vs Microservices with real trade-offs",
      "How does React Fiber reconciliation prevent UI freezing?",
      "Quiz me on a high-availability architecture scenario"
    ]
  };

  function initChat() {
    widget = document.getElementById('ts-chat-widget');
    if (!widget) return;

    toggleBtn = document.getElementById('ts-chat-toggle');
    chatPanel = document.getElementById('ts-chat-panel');
    closeBtn = document.getElementById('ts-chat-close');
    clearBtn = document.getElementById('ts-chat-clear');
    chatBody = document.getElementById('ts-chat-body');
    chatForm = document.getElementById('ts-chat-form');
    chatInput = document.getElementById('ts-chat-input');
    sendBtn = document.getElementById('ts-chat-send');
    botContainer = document.querySelector('.ts-bot-container');
    botHead = document.getElementById('ts-bot-head');
    avatarTarget = document.getElementById('ts-avatar-target');
    contextBadge = document.getElementById('ts-context-badge');
    starterChipsContainer = document.getElementById('ts-starter-chips');

    // Bind event listeners
    if (toggleBtn) toggleBtn.addEventListener('click', toggleChat);
    if (closeBtn) closeBtn.addEventListener('click', toggleChat);
    if (clearBtn) clearBtn.addEventListener('click', resetChat);
    if (chatForm) chatForm.addEventListener('submit', handleSend);

    // Initial nudge after 7 seconds if not opened
    if (!sessionStorage.getItem('ts-chat-nudged')) {
      setTimeout(() => {
        if (!isOpen && widget && !sessionStorage.getItem('ts-chat-nudged')) {
          widget.classList.add('ts-nudge-active');
          sessionStorage.setItem('ts-chat-nudged', 'true');
          setTimeout(() => {
            if (widget) widget.classList.remove('ts-nudge-active');
          }, 4500);
        }
      }, 7000);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleChat();
      }
    });

    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          chatForm.dispatchEvent(new Event('submit'));
        }
      });
    }

    // Recalculate FLIP position on resize
    window.addEventListener('resize', () => {
      if (isOpen) updateBotFlipPosition(false);
    });

    // Update context badge on track changes
    window.addEventListener('hashchange', updateContextView);
    updateContextView();
  }

  /* ── FLIP ANIMATION FOR BOT SPRITE ─────────────────────────── */
  function updateBotFlipPosition(animate = true) {
    if (!botContainer || !avatarTarget) return;

    if (!animate) {
      botContainer.style.transition = 'none';
    }

    // Get current bounding rects
    botContainer.style.transform = '';
    const botRect = botContainer.getBoundingClientRect();
    const targetRect = avatarTarget.getBoundingClientRect();

    const scale = (targetRect.height * 1.25) / botRect.height;
    const scaledWidth = botRect.width * scale;
    const scaledHeight = botRect.height * scale;

    const offsetX = (targetRect.width - scaledWidth) / 2;
    const offsetY = (targetRect.height - scaledHeight) / 2;

    const deltaX = targetRect.left - botRect.left + offsetX;
    const deltaY = targetRect.top - botRect.top + offsetY;

    if (!animate) {
      void botContainer.offsetWidth;
      botContainer.style.transition = '';
    }

    botContainer.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (!widget || !chatPanel) return;

    if (isOpen) {
      widget.classList.add('is-open');
      widget.classList.remove('ts-nudge-active');
      sessionStorage.setItem('ts-chat-nudged', 'true');

      // Update current revision context & chips before opening
      updateContextView();

      // Measure target rect with FLIP
      const origTrans = chatPanel.style.transition;
      chatPanel.style.transition = 'none';
      chatPanel.classList.add('is-open');

      updateBotFlipPosition(true);

      chatPanel.classList.remove('is-open');
      void chatPanel.offsetWidth;

      chatPanel.style.transition = origTrans;
      chatPanel.classList.add('is-open');

      if (botContainer) botContainer.style.pointerEvents = 'none';

      setTimeout(() => {
        if (chatInput) chatInput.focus();
      }, 200);
    } else {
      chatPanel.classList.remove('is-open');
      widget.classList.remove('is-open');
      if (botContainer) {
        botContainer.style.transform = '';
        botContainer.style.pointerEvents = 'auto';
      }
      if (toggleBtn) toggleBtn.focus();
    }
  }

  /* ── CONTEXT SYNCHRONIZATION ────────────────────────────────── */
  function getRevisionContext() {
    if (window.StudyApp && typeof window.StudyApp.getContext === 'function') {
      return window.StudyApp.getContext();
    }
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('react')) return { track: 'ReactJS' };
    if (hash.includes('system')) return { track: 'System Design' };
    return { track: 'Overview' };
  }

  function updateContextView() {
    const ctx = getRevisionContext();
    if (contextBadge) {
      if (ctx.topicTitle) {
        contextBadge.textContent = ctx.topicTitle;
        contextBadge.title = `Current Revision: ${ctx.topicTitle}`;
      } else if (ctx.track) {
        contextBadge.textContent = `${ctx.track} Track`;
        contextBadge.title = `Active Track: ${ctx.track}`;
      }
    }

    renderStarterChips(ctx);
  }

  function renderStarterChips(ctx) {
    if (!starterChipsContainer) return;
    if (history.length > 0) {
      starterChipsContainer.style.display = 'none';
      return;
    }

    let chips = STARTER_PRESETS.general;
    if (ctx.track === 'ReactJS') chips = STARTER_PRESETS.reactjs;
    if (ctx.track === 'System Design') chips = STARTER_PRESETS['system-design'];

    starterChipsContainer.innerHTML = `
      <div class="ts-starter-chips-label">Suggested Questions</div>
      ${chips.map(chip => `
        <button class="ts-starter-chip" type="button">
          <span>${chip}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      `).join('')}
    `;
    starterChipsContainer.style.display = 'flex';

    starterChipsContainer.querySelectorAll('.ts-starter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        if (isRequestInFlight) return;
        const query = btn.querySelector('span')?.textContent || btn.textContent;
        if (chatInput) chatInput.value = query.trim();
        if (chatForm) chatForm.dispatchEvent(new Event('submit'));
      });
    });
  }

  /* ── MARKDOWN FORMATTER WITH CODE BLOCKS ─────────────────────── */
  function parseMarkdown(raw) {
    if (!raw) return '';

    // Escape HTML first
    let text = raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Code blocks with syntax copy button: ```lang ... ```
    text = text.replace(/```([a-zA-Z0-9_\-\s]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const cleanLang = (lang || 'code').trim();
      const codeId = 'code-' + Math.random().toString(36).substring(2, 9);
      return `<div class="ts-code-block">
        <div class="ts-code-header">
          <span>${cleanLang}</span>
          <button class="ts-code-copy-btn" data-target="${codeId}" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
          </button>
        </div>
        <pre><code id="${codeId}">${code.trim()}</code></pre>
      </div>`;
    });

    // Inline code: `code`
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold: **text**
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Bulleted lists: lines starting with • or * or -
    const lines = text.split('\n');
    let inList = false;
    let formattedLines = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (/^[•\-\*]\s+(.*)/.test(trimmed)) {
        if (!inList) {
          formattedLines.push('<ul>');
          inList = true;
        }
        formattedLines.push(`<li>${trimmed.replace(/^[•\-\*]\s+/, '')}</li>`);
      } else {
        if (inList) {
          formattedLines.push('</ul>');
          inList = false;
        }
        if (trimmed.length > 0 && !trimmed.startsWith('<div class="ts-code-block"')) {
          formattedLines.push(`<p>${line}</p>`);
        } else {
          formattedLines.push(line);
        }
      }
    });

    if (inList) formattedLines.push('</ul>');

    return formattedLines.join('\n');
  }

  /* ── TYPEWRITER TEXT STREAMING ───────────────────────────────── */
  async function streamReply(container, htmlContent) {
    container.innerHTML = htmlContent;
    chatBody.scrollTop = chatBody.scrollHeight;

    // Attach copy buttons
    container.querySelectorAll('.ts-code-copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const codeEl = document.getElementById(targetId);
        if (codeEl) {
          navigator.clipboard.writeText(codeEl.innerText).then(() => {
            const span = btn.querySelector('span');
            if (span) {
              const old = span.textContent;
              span.textContent = 'Copied!';
              setTimeout(() => { span.textContent = old; }, 2000);
            }
          });
        }
      });
    });
  }

  /* ── MESSAGE RENDERING ───────────────────────────────────────── */
  let typingRow = null;

  function showTyping() {
    typingRow = document.createElement('div');
    typingRow.className = 'ts-msg-row';
    typingRow.innerHTML = `
      <img src="assets/bot/robot-128.png" class="ts-msg-avatar" alt="AI">
      <div class="ts-msg ts-msg-ai">
        <div class="ts-typing-indicator">
          <div class="ts-dot"></div>
          <div class="ts-dot"></div>
          <div class="ts-dot"></div>
        </div>
      </div>
    `;
    chatBody.appendChild(typingRow);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function hideTyping() {
    if (typingRow && typingRow.parentNode) {
      typingRow.parentNode.removeChild(typingRow);
    }
    typingRow = null;
  }

  async function appendMessage(role, text, isSystem = false) {
    if (role === 'model' && !isSystem) {
      const row = document.createElement('div');
      row.className = 'ts-msg-row';

      const avatar = document.createElement('img');
      avatar.src = 'assets/bot/robot-128.png';
      avatar.className = 'ts-msg-avatar';
      avatar.alt = 'AI';

      const msg = document.createElement('div');
      msg.className = 'ts-msg ts-msg-ai';

      row.appendChild(avatar);
      row.appendChild(msg);
      chatBody.appendChild(row);

      const html = parseMarkdown(text);
      await streamReply(msg, html);
    } else {
      const msg = document.createElement('div');
      msg.classList.add('ts-msg', role === 'user' ? 'ts-msg-user' : 'ts-msg-ai');
      if (isSystem) msg.classList.add('ts-msg-system');
      msg.textContent = text;
      chatBody.appendChild(msg);
    }
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  /* ── CHAT RESET ──────────────────────────────────────────────── */
  function resetChat() {
    history = [];
    if (chatBody) {
      chatBody.innerHTML = `
        <div class="ts-msg-row">
          <img src="assets/bot/robot-128.png" class="ts-msg-avatar" alt="AI">
          <div class="ts-msg ts-msg-ai">
            <p><strong>Hi! I'm ReviseBot</strong> · your AI visual engineering revision companion.</p>
            <p>Ask me anything about whatever topic you are currently revising — concept clarifications, diagram breakdowns, or interview quiz questions!</p>
          </div>
        </div>
        <div class="ts-starter-chips" id="ts-starter-chips"></div>
      `;
      starterChipsContainer = document.getElementById('ts-starter-chips');
      updateContextView();
    }
  }

  /* ── SUBMIT HANDLER ──────────────────────────────────────────── */
  async function handleSend(e) {
    e.preventDefault();
    if (isRequestInFlight) return;

    const query = chatInput.value.trim();
    if (!query) return;

    chatInput.value = '';
    chatInput.disabled = true;
    sendBtn.disabled = true;
    isRequestInFlight = true;

    // Hide starter chips once user starts conversation
    if (starterChipsContainer) starterChipsContainer.style.display = 'none';

    await appendMessage('user', query);
    history.push({ role: 'user', text: query });
    if (history.length > 12) history = history.slice(-12);

    widget.classList.add('ts-thinking');
    showTyping();

    const topicContext = getRevisionContext();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, topicContext })
      });

      widget.classList.remove('ts-thinking');
      hideTyping();

      if (!res.ok) {
        let errMessage = 'Failed to generate response.';
        try {
          const errData = await res.json();
          if (errData && errData.error) errMessage = errData.error;
        } catch (_) {}
        throw new Error(errMessage);
      }

      const data = await res.json();
      if (data && data.reply) {
        await appendMessage('model', data.reply);
        history.push({ role: 'model', text: data.reply });
        if (history.length > 12) history = history.slice(-12);
      } else {
        throw new Error('Empty response received from AI');
      }
    } catch (err) {
      console.error('ReviseBot Chat Error:', err);
      widget.classList.remove('ts-thinking');
      hideTyping();
      await appendMessage('model', `I had trouble answering: ${err.message || "Please check your network and try again."}`, true);
      history.pop();
    } finally {
      chatInput.disabled = false;
      sendBtn.disabled = false;
      isRequestInFlight = false;
      chatInput.focus();
    }
  }

  // Self-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
  } else {
    initChat();
  }
})();
