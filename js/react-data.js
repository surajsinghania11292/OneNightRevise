/* ═══════════════════════════════════════════════════════════════
   REACT-DATA.JS — ReactJS Revision Notes Data Engine (OneNightRevise)
   Topics 01 through 03 with full SVG Architecture Diagrams
   ═══════════════════════════════════════════════════════════════ */

const REACT_NOTES = {
  subject: "ReactJS Revision Notes",
  shortTitle: "ReactJS",
  tagline: "Modern Frontend Engineering, Virtual DOM & Component Architecture",
  topics: [
    /* ═══════════════════════════════════════════════════════════════
       TOPIC 1: WHAT IS REACTJS & WHY WAS IT NEEDED?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-01-what-is-react",
      number: "01",
      shortLabel: "What Is ReactJS?",
      title: "What Is ReactJS & Why Was It Needed?",
      summary: "Definition as a UI library, Jordan Walke's Meta/Facebook origin story (2013), the message reload bottleneck, and buttery smooth granular updates.",
      subtopicLabels: ["1.1 What Is React?", "1.2 Facebook Story", "1.3 Key Benefits"],
      diagramCount: 2,
      sections: [
        {
          num: "1.1",
          title: "What Is ReactJS?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Simple Definition:</strong> ReactJS is an open-source <strong>JavaScript Library</strong> used specifically for building <strong>User Interfaces (UI)</strong>—in simple terms, it powers the <strong>Frontend</strong> of modern web applications.</li>
              <li><strong>Why Not Just HTML, CSS, and Vanilla JS?</strong>
                <ul class="notes-sub-list">
                  <li>You can certainly build frontends using plain HTML, CSS, and JavaScript, but as applications grow in complexity, synchronizing UI state with the DOM imperatively becomes messy, slow, and error-prone.</li>
                  <li>ReactJS is purpose-built to engineer <strong>complex, interactive, and high-performance frontends</strong> cleanly, predictably, and efficiently.</li>
                </ul>
              </li>
              <li><strong>Who Created It & When?</strong>
                <ul class="notes-sub-list">
                  <li>Created inside <strong>Meta</strong> (formerly <strong>Facebook</strong>) and open-sourced in <strong>2013</strong>.</li>
                  <li>Originally developed by Facebook software engineer <strong>Jordan Walke</strong> (founding creator of React, who introduced FaxJS which evolved into React).</li>
                </ul>
              </li>
              <li><strong>Industry Relevance:</strong> Even amidst rapid AI advancements, ReactJS remains the undisputed industry standard frontend skill demanded by top tech companies and startups worldwide.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 1.1 · Frontend Architecture Evolution: From Imperative DOM to ReactJS</span>
                <span class="diagram-frame-tag">HISTORICAL TIMELINE & PARADIGM SHIFT</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing the evolution from manual DOM manipulation in 2010 to Jordan Walke inventing React at Meta in 2013 to modern industry standard">
                  <!-- Era 1: 2010 -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="250" height="180" rx="12" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.5"/>
                    <text x="125" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">2010 · TRADITIONAL WEB</text>
                    <text x="125" y="56" text-anchor="middle" class="svg-title">Imperative jQuery / DOM</text>
                    <rect x="18" y="72" width="214" height="42" rx="6" fill="var(--danger-bg)" stroke="var(--danger)"/>
                    <text x="125" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger);">Manual Node Mutation</text>
                    <rect x="18" y="122" width="214" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="148" text-anchor="middle" class="svg-sub">Full page reloads & spaghetti sync</text>
                  </g>

                  <!-- Arrow 1 -->
                  <g transform="translate(285, 95)">
                    <line x1="0" y1="15" x2="30" y2="15" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3"/>
                    <polygon points="30,10 40,15 30,20" fill="var(--accent)"/>
                  </g>

                  <!-- Era 2: 2013 -->
                  <g transform="translate(335, 20)">
                    <rect x="0" y="0" width="250" height="180" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="125" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2013 · META (FACEBOOK)</text>
                    <text x="125" y="56" text-anchor="middle" class="svg-title">Jordan Walke Invents React</text>
                    <rect x="18" y="72" width="214" height="42" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="125" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:600;">UI = f(State) Model</text>
                    <rect x="18" y="122" width="214" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="148" text-anchor="middle" class="svg-sub">Virtual DOM & Declarative JSX</text>
                  </g>

                  <!-- Arrow 2 -->
                  <g transform="translate(595, 95)">
                    <line x1="0" y1="15" x2="30" y2="15" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="30,10 40,15 30,20" fill="var(--success)"/>
                  </g>

                  <!-- Era 3: Present -->
                  <g transform="translate(645, 20)">
                    <rect x="0" y="0" width="210" height="180" rx="12" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                    <text x="105" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">PRESENT · GLOBAL STANDARD</text>
                    <text x="105" y="56" text-anchor="middle" class="svg-title">Modern Ecosystem</text>
                    <rect x="15" y="72" width="180" height="42" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="105" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">Component Architecture</text>
                    <rect x="15" y="122" width="180" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="105" y="148" text-anchor="middle" class="svg-sub">Next.js, Vite, Hooks & RSC</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "1.2",
          title: "Why Was ReactJS Needed? (The Facebook Story)",
          content: `
            <div class="callout-highlight-box">
              <span class="callout-highlight-tag">The Real-World Facebook Problem (2010–2011)</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary);">
                As Facebook exploded to hundreds of millions of users, its frontend was built using traditional static HTML, CSS, and fragmented JavaScript.
              </p>
            </div>

            <ul class="notes-bullet-list" style="margin-top:1rem;">
              <li><strong>The Core Problem (Full Page Reloads for Tiny UI Updates):</strong>
                <ul class="notes-sub-list">
                  <li>Imagine scrolling down your Facebook News Feed. Your <strong>Messages counter</strong> currently reads <code>3</code>.</li>
                  <li>Suddenly, a friend sends you a new message. In the traditional architecture, that counter <code>3</code> could <strong>not update automatically</strong> on the spot.</li>
                  <li>To see the new message count (<code>4</code>), you had to <strong>manually reload the entire webpage</strong> (hit <code>F5</code> or browser refresh).</li>
                  <li>A full reload meant tearing down the entire page, causing a jarring white flash, re-fetching posts, images, sidebar ads, and re-rendering everything from scratch—all just to increment one single digit from <code>3</code> to <code>4</code>!</li>
                </ul>
              </li>
              <li><strong>Identical Issue with Likes & Notifications:</strong>
                <ul class="notes-sub-list">
                  <li>If someone liked your photo or commented on a thread, you had zero real-time visibility without refreshing the page.</li>
                  <li>Traditional static multi-page apps forced full-page replacements because browsers had no clean way to isolate and patch only the specific DOM node that changed.</li>
                </ul>
              </li>
              <li><strong>The Impact:</strong> High network bandwidth waste, heavy server strain, constant white screen flickering, and a frustrating, sluggish user experience.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 1.2 · Facebook 2010 Reload Bottleneck vs. ReactJS Granular Virtual DOM</span>
                <span class="diagram-frame-tag">FULL RELOAD FLICKER VS SURGICAL COMPONENT PATCH</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram contrasting Facebook 2010 full page reload bottleneck where entire page reloads to update message counter from 3 to 4 with ReactJS surgical DOM patch updating only the badge">
                  <!-- BAD PANEL: Full Page Reload -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="210" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="200" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">TRADITIONAL 2010 ARCHITECTURE (THE BOTTLENECK)</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Full Page Reload to Update 1 Number</text>

                    <rect x="25" y="74" width="160" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="105" y="98" text-anchor="middle" class="svg-node">News Feed Scroll</text>
                    <text x="105" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">Messages: [ 3 ]</text>

                    <path d="M 195 104 L 235 104" class="svg-arrow" stroke="var(--danger)"/>

                    <rect x="245" y="74" width="130" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="310" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">New Message!</text>
                    <text x="310" y="118" text-anchor="middle" class="svg-sub" style="fill:var(--danger);">Counter stuck at 3</text>

                    <rect x="25" y="148" width="350" height="48" rx="8" fill="var(--bg-surface)" stroke="var(--danger)" stroke-dasharray="4 3"/>
                    <text x="200" y="170" text-anchor="middle" class="svg-node" style="fill:var(--danger); font-weight:600;">💥 Must Hit F5 / Reload Entire Webpage</text>
                    <text x="200" y="186" text-anchor="middle" class="svg-sub">White screen flicker · Destroys DOM tree</text>
                  </g>

                  <!-- GOOD PANEL: ReactJS Surgical Patch -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="210" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="200" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">REACTJS DECLARATIVE SOLUTION (OUR GOAL)</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Granular Virtual DOM Update</text>

                    <rect x="25" y="74" width="160" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="105" y="98" text-anchor="middle" class="svg-node">Virtual DOM Diff</text>
                    <text x="105" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent);">Detects count: 3 → 4</text>

                    <path d="M 195 104 L 235 104" class="svg-arrow" stroke="var(--success)"/>

                    <rect x="245" y="74" width="130" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="310" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Badge: [ 4 ] ✓</text>
                    <text x="310" y="118" text-anchor="middle" class="svg-sub" style="fill:var(--success);">Instant in 2 ms</text>

                    <rect x="25" y="148" width="350" height="48" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="200" y="170" text-anchor="middle" class="svg-node" style="fill:var(--success); font-weight:600;">✨ Zero Page Reload · Surgically Patched</text>
                    <text x="200" y="186" text-anchor="middle" class="svg-sub">Feeds & videos stay intact without reflow</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "1.3",
          title: "The Key Benefit of ReactJS",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Buttery Smooth Updates:</strong> React eliminates full-page reloads and makes UI transitions instant, fluid, and seamless.</li>
              <li><strong>Smart Reconciliation (Virtual DOM):</strong>
                <ul class="notes-sub-list">
                  <li>React creates a lightweight in-memory representation of the UI called the <strong>Virtual DOM</strong>.</li>
                  <li>When state changes (e.g. message received), React compares the new Virtual DOM with the previous Virtual DOM snapshot (a process called <strong>Diffing</strong>).</li>
                  <li>It calculates the minimal set of changes and applies them directly to the real browser DOM in a single batch (<strong>Reconciliation</strong>).</li>
                </ul>
              </li>
              <li><strong>Zero Unnecessary Re-renders:</strong> Nothing in the UI re-renders or updates unnecessarily—only the exact DOM element whose underlying data changed gets touched.</li>
            </ul>

            <div class="sub-card-grid-3" style="margin-top:1.25rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Benefit 01 · Granular Diffing</div>
                <div class="sub-box__title">Surgical DOM Updates</div>
                <div class="sub-box__body">Instead of replacing a 1,000-line DOM tree, React modifies only the single <code>&lt;span&gt;4&lt;/span&gt;</code> element in real time.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Benefit 02 · Declarative Code</div>
                <div class="sub-box__title">Predictable UI State</div>
                <div class="sub-box__body">You describe what the UI should look like based on state; React handles the intricate browser DOM mutations behind the scenes.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Benefit 03 · User Retention</div>
                <div class="sub-box__title">No Screen Flicker</div>
                <div class="sub-box__body">Users browse uninterrupted without disruptive blank flashes, making single-page apps feel like high-performance native desktop software.</div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 2: JAVASCRIPT ESSENTIALS & FIRST DOM SETUP
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-02-js-essentials-dom",
      number: "02",
      shortLabel: "JS Essentials & DOM Setup",
      title: "JavaScript Essentials & First DOM Setup",
      summary: "Core JS prerequisites (Variables, Arrow Functions, map/filter/reduce), VS Code & Live Server setup, and HTML vs 3-step Vanilla DOM creation.",
      subtopicLabels: ["2.1 JS Prerequisites", "2.2 Environment Setup", "2.3 HTML vs Vanilla DOM"],
      diagramCount: 2,
      sections: [
        {
          num: "2.1",
          title: "JavaScript Prerequisites Before Learning ReactJS",
          content: `
            <p style="color:var(--text-secondary); margin-bottom:1rem;">
              Before diving deep into React components and JSX, you should have a solid foundation in HTML, CSS, and modern JavaScript (ES6+):
            </p>

            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Prerequisite 01 · JS Basics</div>
                <div class="sub-box__title">Core Syntax & Types</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong>Variables:</strong> <code>const</code> and <code>let</code> (block scoped) vs <code>var</code>.</li>
                    <li><strong>Data Types:</strong> Primitives (string, number, boolean) vs Reference types (objects, arrays).</li>
                    <li><strong>Conditionals:</strong> <code>if-else</code> and ternary operator (<code>condition ? a : b</code>).</li>
                    <li><strong>Loops:</strong> <code>for</code>, <code>for...of</code>, and iterators.</li>
                  </ul>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Prerequisite 02 · Functions</div>
                <div class="sub-box__title">Functional Building Blocks</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong>Standard Functions:</strong> <code>function add(a, b) { return a + b; }</code></li>
                    <li><strong>Arrow Functions:</strong> <code>const add = (a, b) => a + b;</code></li>
                    <li><strong>Implicit vs Explicit Return:</strong> Understanding when a function yields a value.</li>
                    <li><strong>Callbacks:</strong> Passing functions as arguments to other functions.</li>
                  </ul>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Prerequisite 03 · Arrays</div>
                <div class="sub-box__title">Higher-Order Array Methods</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong><code>.map()</code>:</strong> Transforms every item and returns a new array (crucial for rendering lists in JSX).</li>
                    <li><strong><code>.filter()</code>:</strong> Returns items matching a condition.</li>
                    <li><strong><code>.reduce()</code>:</strong> Accumulates items into a single value.</li>
                    <li><strong><code>.forEach()</code>:</strong> Executes a side effect for each item.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="callout-highlight-box" style="margin-top:1.25rem;">
              <span class="callout-highlight-tag">Comforting Rule of Thumb</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary);">
                Don't worry if you feel slightly rusty on any of these! Every essential JavaScript concept will be revisited and explained clearly with code examples whenever it appears in our React journey.
              </p>
            </div>
          `
        },
        {
          num: "2.2",
          title: "Environment Setup (Code Editor & Extensions)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Folder Setup:</strong> Create a dedicated project directory (e.g., <code>reactjs/</code>) on your machine and open it directly inside <strong>VS Code</strong>.</li>
              <li><strong>Code Editors in the Modern Ecosystem:</strong>
                <ul class="notes-sub-list">
                  <li>While AI-powered editors like <strong>Cursor</strong>, <strong>Windsurf</strong>, <strong>Trae</strong>, and classics like <strong>Sublime Text</strong> are popular, <strong>VS Code</strong> is the reliable industry standard used throughout this course.</li>
                </ul>
              </li>
              <li><strong>Two Highly Recommended Extensions:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Live Server (by Ritwick Dey):</strong> Lets you right-click any <code>index.html</code> file and launch a local development server at <code>http://127.0.0.1:5500</code> with auto-reload upon file save.</li>
                  <li><strong>Dark Reader (Browser Extension):</strong> Automatically switches bright browser preview tabs to a soothing dark theme so late-night revision sessions don't cause eye strain.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 2.1 · Local Development Environment & Hot Reload Architecture</span>
                <span class="diagram-frame-tag">DEVELOPER TOOLCHAIN PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 200" class="arch-svg" role="img" aria-label="Diagram showing VS Code workspace communicating with Live Server on port 5500 serving browser with Dark Reader">
                  <!-- Step 1: VS Code -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                    <text x="115" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">EDITOR ENVIRONMENT</text>
                    <text x="115" y="56" text-anchor="middle" class="svg-title">VS Code</text>
                    <rect x="18" y="72" width="194" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="115" y="96" text-anchor="middle" class="svg-mono-xs">📁 reactjs/</text>
                    <text x="115" y="118" text-anchor="middle" class="svg-sub">index.html · script.js</text>
                  </g>

                  <!-- Pipe 1 -->
                  <g transform="translate(265, 88)">
                    <line x1="0" y1="12" x2="40" y2="12" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="40,7 50,12 40,17" fill="var(--accent)"/>
                    <text x="25" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">Save</text>
                  </g>

                  <!-- Step 2: Live Server -->
                  <g transform="translate(325, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                    <text x="115" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">DEV WEBSERVER</text>
                    <text x="115" y="56" text-anchor="middle" class="svg-title">Live Server</text>
                    <rect x="18" y="72" width="194" height="60" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="115" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:600;">Port 5500 (WebSocket)</text>
                    <text x="115" y="118" text-anchor="middle" class="svg-sub">Instant hot auto-reload</text>
                  </g>

                  <!-- Pipe 2 -->
                  <g transform="translate(560, 88)">
                    <line x1="0" y1="12" x2="40" y2="12" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="40,7 50,12 40,17" fill="var(--success)"/>
                    <text x="25" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">Render</text>
                  </g>

                  <!-- Step 3: Browser Preview -->
                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                    <text x="115" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">CLIENT RUNTIME</text>
                    <text x="115" y="56" text-anchor="middle" class="svg-title">Browser Chrome</text>
                    <rect x="18" y="72" width="194" height="60" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="115" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">Live DOM Preview</text>
                    <text x="115" y="118" text-anchor="middle" class="svg-sub">Dark Reader eye protection</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "2.3",
          title: "Creating Elements in HTML vs. Vanilla JavaScript (DOM)",
          content: `
            <p style="color:var(--text-secondary); margin-bottom:1rem;">
              Before understanding how React creates elements using JSX and <code>React.createElement</code>, let's contrast how elements are created in plain HTML versus Vanilla JavaScript:
            </p>

            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Approach 01 · Static Markup</div>
                <div class="sub-box__title">In Plain HTML (index.html)</div>
                <div class="sub-box__body">
                  <p>In standard HTML, you write tags directly into your file:</p>
                  <pre style="background:var(--bg-frame); padding:0.75rem 1rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.5rem 0; overflow-x:auto;">&lt;h1&gt;Hello from HTML&lt;/h1&gt;</pre>
                  <p>The browser parses this static string upon page load and draws the heading on screen.</p>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Approach 02 · Imperative DOM</div>
                <div class="sub-box__title">In Vanilla JavaScript (script.js)</div>
                <div class="sub-box__body">
                  <p>In Vanilla JS, you create the DOM node imperatively in 3 distinct steps:</p>
                  <pre style="background:var(--bg-frame); padding:0.75rem 1rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.5rem 0; overflow-x:auto;">// Step 1: Create Element Node in Memory
var h1 = document.createElement('h1');

// Step 2: Inject Content / Properties
h1.innerHTML = 'Hello from JS';

// Step 3: Append to the Real DOM Tree
document.body.appendChild(h1);</pre>
                  <p>This programmatically constructs the element in memory and attaches it to the browser's live DOM tree.</p>
                </div>
              </div>
            </div>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 2.2 · The 3-Step Imperative Vanilla DOM Pipeline vs Declarative React Target</span>
                <span class="diagram-frame-tag">DOM CREATION LIFECYCLE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing Step 1 createElement, Step 2 innerHTML, Step 3 appendChild pipeline in Vanilla JS and how React abstracts it">
                  <!-- Step 1 -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="240" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.5"/>
                    <text x="120" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">STEP 1 · ALLOCATION</text>
                    <text x="120" y="54" text-anchor="middle" class="svg-title">document.createElement</text>
                    <rect x="15" y="70" width="210" height="46" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="120" y="98" text-anchor="middle" class="svg-mono-xs">var h1 = document.createElement('h1')</text>
                    <text x="120" y="142" text-anchor="middle" class="svg-sub">Allocates empty node in JS heap</text>
                    <text x="120" y="158" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning);">Not visible on screen yet</text>
                  </g>

                  <!-- Arrow 1 -->
                  <g transform="translate(275, 95)">
                    <line x1="0" y1="12" x2="35" y2="12" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="35,7 45,12 35,17" fill="var(--accent)"/>
                  </g>

                  <!-- Step 2 -->
                  <g transform="translate(325, 25)">
                    <rect x="0" y="0" width="240" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                    <text x="120" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">STEP 2 · MUTATION</text>
                    <text x="120" y="54" text-anchor="middle" class="svg-title">h1.innerHTML</text>
                    <rect x="15" y="70" width="210" height="46" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="120" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:600;">h1.innerHTML = 'Hello from JS'</text>
                    <text x="120" y="142" text-anchor="middle" class="svg-sub">Assigns text/children to node</text>
                    <text x="120" y="158" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning);">Still detached from document</text>
                  </g>

                  <!-- Arrow 2 -->
                  <g transform="translate(570, 95)">
                    <line x1="0" y1="12" x2="35" y2="12" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="35,7 45,12 35,17" fill="var(--success)"/>
                  </g>

                  <!-- Step 3 -->
                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="230" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="115" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">STEP 3 · MOUNTING</text>
                    <text x="115" y="54" text-anchor="middle" class="svg-title">appendChild</text>
                    <rect x="15" y="70" width="200" height="46" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="115" y="98" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">document.body.appendChild(h1)</text>
                    <text x="115" y="142" text-anchor="middle" class="svg-sub">Triggers reflow & paint</text>
                    <text x="115" y="158" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">✓ Visible to user on screen</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 3: LIBRARY VS. FRAMEWORK
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-03-library-vs-framework",
      number: "03",
      shortLabel: "Library vs Framework",
      title: "Library vs. Framework",
      summary: "Modular libraries (GSAP, Lenis, React) vs all-in-one frameworks (Next.js, Angular, Remix), and the House Analogy (Ready-Made Flat vs Empty Plot of Land).",
      subtopicLabels: ["3.1 Library", "3.2 Framework", "3.3 House Analogy"],
      diagramCount: 2,
      sections: [
        {
          num: "3.1",
          title: "What Is a Library?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Core Definition:</strong> A <strong>Library</strong> is a collection of pre-written functions and utilities designed to handle <strong>one specific job or feature</strong> for your web application.</li>
              <li><strong>Modular & In Control:</strong>
                <ul class="notes-sub-list">
                  <li>When you use a library, <strong>YOU are in the driver's seat</strong> (your code calls the library whenever you need it).</li>
                  <li>You mix, match, and swap separate libraries for separate needs without being forced into an inflexible project architecture.</li>
                </ul>
              </li>
              <li><strong>Real-World Examples of Libraries:</strong>
                <ul class="notes-sub-list">
                  <li><strong>GSAP (GreenSock):</strong> Used specifically for crafting high-performance <strong>moving animations</strong>.</li>
                  <li><strong>Lenis:</strong> Used specifically for adding luxurious <strong>smooth scrolling</strong> behavior.</li>
                  <li><strong>ReactJS:</strong> Used specifically for constructing and updating the <strong>UI (Frontend)</strong> of your application.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "3.2",
          title: "What Is a Framework?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Core Definition:</strong> A <strong>Framework</strong> provides a <strong>complete, structured, all-in-one foundation</strong> for your entire project rather than making you assemble independent tools for every capability.</li>
              <li><strong>Inversion of Control:</strong>
                <ul class="notes-sub-list">
                  <li>In a framework, the <strong>framework is in the driver's seat</strong>. The framework calls YOUR code according to its strict lifecycles, conventions, and directory structures.</li>
                  <li>Routing, state handling, compilation, data fetching, and build pipelines are bundled and pre-configured out of the box.</li>
                </ul>
              </li>
              <li><strong>Real-World Examples of Frameworks:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Next.js:</strong> The full-stack React framework providing Server-Side Rendering (SSR), file-based routing, and API endpoints.</li>
                  <li><strong>Angular:</strong> Google's opinionated enterprise framework with built-in dependency injection, TypeScript, and routing.</li>
                  <li><strong>Remix:</strong> Full-stack web framework focused on web standards and nested routing.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 3.1 · Control Flow: Library (You Call Code) vs. Framework (Framework Calls You)</span>
                <span class="diagram-frame-tag">INVERSION OF CONTROL (IoC) ARCHITECTURE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting Library where user code calls library with Framework where framework lifecycle calls user code">
                  <!-- LEFT: LIBRARY -->
                  <g transform="translate(30, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="197" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">LIBRARY PATTERN (REACTJS, GSAP, LENIS)</text>
                    <text x="197" y="56" text-anchor="middle" class="svg-title">You Are in Complete Control</text>

                    <rect x="25" y="74" width="150" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="100" y="102" text-anchor="middle" class="svg-node" style="font-weight:700; fill:var(--accent);">YOUR CODE</text>
                    <text x="100" y="124" text-anchor="middle" class="svg-sub">Calls library when needed</text>

                    <path d="M 185 114 L 230 114" class="svg-arrow" stroke="var(--accent)"/>
                    <text x="207" y="105" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-size:10px;">calls</text>

                    <rect x="240" y="74" width="130" height="80" rx="8" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="305" y="102" text-anchor="middle" class="svg-node">Library</text>
                    <text x="305" y="124" text-anchor="middle" class="svg-mono-xs">React / GSAP</text>
                  </g>

                  <!-- RIGHT: FRAMEWORK -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="197" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">FRAMEWORK PATTERN (NEXT.JS, ANGULAR)</text>
                    <text x="197" y="56" text-anchor="middle" class="svg-title">Framework Controls Execution</text>

                    <rect x="25" y="74" width="135" height="80" rx="8" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="92" y="102" text-anchor="middle" class="svg-node" style="fill:var(--primary); font-weight:700;">Framework</text>
                    <text x="92" y="124" text-anchor="middle" class="svg-mono-xs">Next.js Engine</text>

                    <path d="M 170 114 L 215 114" class="svg-arrow" stroke="var(--primary)"/>
                    <text x="192" y="105" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-size:10px;">calls</text>

                    <rect x="225" y="74" width="145" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="297" y="102" text-anchor="middle" class="svg-node">YOUR CODE</text>
                    <text x="297" y="124" text-anchor="middle" class="svg-sub">Plugged into lifecycle</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "3.3",
          title: "The House Analogy (Ready-Made Flat vs. Buying a Plot)",
          content: `
            <div class="callout-highlight-box">
              <span class="callout-highlight-tag">How to Remember the Difference Forever</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary);">
                Think about getting a place to live: a <strong>Framework</strong> is like moving into a <strong>Ready-Made Flat</strong>, whereas a <strong>Library</strong> is like buying an <strong>Empty Plot of Land</strong>.
              </p>
            </div>

            <div class="sub-card-grid-2" style="margin-top:1.25rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Analogy 01 · Framework</div>
                <div class="sub-box__title">🏢 Buying a Ready-Made Flat</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong>Pre-Constructed:</strong> The rooms, kitchen, pipes, and walls are already built and hooked together.</li>
                    <li><strong>Quick Setup:</strong> You move in instantly without having to hire architects or plumbers.</li>
                    <li><strong>Limited Customization:</strong> If you want to demolish a wall between two bedrooms to make a giant gaming hall, the building regulations and surrounding flats forbid it!</li>
                    <li><strong>Real Example:</strong> Next.js gives you routing, compilation, and SSR out of the box, but you must adhere to its file-based routing rules.</li>
                  </ul>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Analogy 02 · Library</div>
                <div class="sub-box__title">🏞️ Buying an Empty Plot of Land</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong>Zero Pre-Imposed Walls:</strong> You start with bare ground and design your house entirely on your own terms.</li>
                    <li><strong>Total Architectural Freedom:</strong> If you want a massive master bathroom with showers stretching across the floor, you can build it exactly that way!</li>
                    <li><strong>Modular Choices:</strong> You pick your own bricks (React for UI), your own lighting (GSAP for animations), and your own flooring (Lenis for smooth scrolling).</li>
                    <li><strong>Real Example:</strong> React only cares about rendering UI; you freely choose Redux/Zustand for state and React Router for URLs.</li>
                  </ul>
                </div>
              </div>
            </div>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 3.2 · The House Analogy: Ready-Made Flat (Framework) vs. Empty Plot (Library)</span>
                <span class="diagram-frame-tag">MENTAL MODEL ILLUSTRATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram showing House Analogy: Ready-made flat representing Framework with fixed layout vs Empty plot representing Library with total customization">
                  <!-- FLAT (FRAMEWORK) -->
                  <g transform="translate(30, 20)">
                    <rect x="0" y="0" width="395" height="210" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="197" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">FRAMEWORK = READY-MADE FLAT (NEXT.JS, ANGULAR)</text>
                    <text x="197" y="56" text-anchor="middle" class="svg-title">Pre-Built Layout & Rigid Walls</text>

                    <!-- Flat Layout Box -->
                    <rect x="25" y="74" width="345" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                    <rect x="35" y="84" width="95" height="50" rx="4" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="82" y="112" text-anchor="middle" class="svg-mono-xs" style="font-size:11px;">Fixed Room 1</text>
                    <rect x="140" y="84" width="105" height="50" rx="4" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="192" y="112" text-anchor="middle" class="svg-mono-xs" style="font-size:11px;">Fixed Kitchen</text>
                    <rect x="255" y="84" width="105" height="50" rx="4" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="307" y="112" text-anchor="middle" class="svg-mono-xs" style="font-size:11px;">Fixed Bath</text>

                    <rect x="25" y="154" width="345" height="46" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="197" y="174" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:600;">Fast move-in · Zero setup</text>
                    <text x="197" y="190" text-anchor="middle" class="svg-sub" style="fill:var(--warning);">Cannot break walls or alter structure</text>
                  </g>

                  <!-- PLOT (LIBRARY) -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="395" height="210" rx="12" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="197" y="32" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">LIBRARY = EMPTY PLOT OF LAND (REACTJS)</text>
                    <text x="197" y="56" text-anchor="middle" class="svg-title">Total Flexibility & Custom Design</text>

                    <!-- Plot Custom Box -->
                    <rect x="25" y="74" width="345" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--success)" stroke-dasharray="4 3"/>
                    <rect x="35" y="84" width="145" height="50" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="107" y="105" text-anchor="middle" class="svg-node" style="fill:var(--success); font-size:12px;">ReactJS UI</text>
                    <text x="107" y="122" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">Custom size!</text>

                    <rect x="190" y="84" width="85" height="50" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="232" y="105" text-anchor="middle" class="svg-node" style="font-size:11px;">GSAP</text>
                    <text x="232" y="122" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">Animations</text>

                    <rect x="285" y="84" width="75" height="50" rx="6" fill="var(--accent-gold-bg)" stroke="var(--accent-gold)"/>
                    <text x="322" y="105" text-anchor="middle" class="svg-node" style="font-size:11px;">Lenis</text>
                    <text x="322" y="122" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">Scroll</text>

                    <rect x="25" y="154" width="345" height="46" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="197" y="174" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">100% Architectural Freedom</text>
                    <text x="197" y="190" text-anchor="middle" class="svg-sub">Plug in any tool exactly how you want</text>
                  </g>
                </svg>
              </div>
            </figure>

            <div class="callout-highlight-box" style="margin-top:1.25rem;">
              <span class="callout-highlight-tag">The Golden Rule</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary); font-weight:500;">
                <strong>Library</strong> = A targeted tool for each specific feature (full customization, you call the code).<br>
                <strong>Framework</strong> = An all-in-one pre-built structure (strict conventions, framework calls your code).
              </p>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 4: WHY IMPORT & EXPORT ARE NEEDED & ENABLING MODULES
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-04-import-export-modules",
      number: "04",
      shortLabel: "Import, Export & Modules",
      title: "Why Import & Export Are Needed & Enabling Modules",
      summary: "The multi-file isolation bottleneck (app.js vs script.js), sending and receiving data across files, and enabling ES6 modules via type=\"module\".",
      subtopicLabels: ["4.1 Multi-File Problem", "4.2 Import & Export", "4.3 type=\"module\""],
      diagramCount: 2,
      sections: [
        {
          num: "4.1",
          title: "The Multi-File Problem (Lexical File Isolation)",
          content: `
            <div class="callout-highlight-box">
              <span class="callout-highlight-tag">The Multi-File Dilemma</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary);">
                Before jumping into React components, we must understand how code communicates across multiple JavaScript files.
              </p>
            </div>

            <ul class="notes-bullet-list" style="margin-top:1rem;">
              <li><strong>The Scenario:</strong>
                <ul class="notes-sub-list">
                  <li>Suppose your project has two separate JavaScript files: <code>app.js</code> and <code>script.js</code> (linked in your <code>index.html</code>).</li>
                  <li>Inside <code>app.js</code>, you define a variable:
                    <pre style="background:var(--bg-frame); padding:0.6rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">var a = 20;</pre>
                  </li>
                  <li>Inside <code>script.js</code>, you attempt to print that variable to the browser console:
                    <pre style="background:var(--bg-frame); padding:0.6rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">console.log(a);</pre>
                  </li>
                </ul>
              </li>
              <li><strong>What Happens in the Console?</strong>
                <ul class="notes-sub-list">
                  <li>You instantly get a runtime crash: <code style="color:var(--danger); font-weight:600;">Uncaught ReferenceError: a is not defined</code>.</li>
                </ul>
              </li>
              <li><strong>Why Does This Happen?</strong>
                <ul class="notes-sub-list">
                  <li>By default, each JavaScript file has its own isolated file scope or executes in a separate lexical context.</li>
                  <li><code>script.js</code> has zero access or visibility into variables created inside <code>app.js</code> unless a bridge is explicitly constructed.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 4.1 · Multi-File Isolation Problem vs. ES Module Export/Import Bridge</span>
                <span class="diagram-frame-tag">CROSS-FILE DATA COMMUNICATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing isolated files causing ReferenceError on the left vs ES6 module export and import bridge allowing data flow on the right">
                  <!-- LEFT: Without Import/Export -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">DEFAULT ISOLATION (NO BRIDGE)</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Multi-File ReferenceError</text>

                    <!-- File 1: app.js -->
                    <rect x="25" y="70" width="150" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="100" y="92" text-anchor="middle" class="svg-mono-xs" style="font-weight:700;">📄 app.js</text>
                    <text x="100" y="112" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">var a = 20;</text>

                    <!-- Wall Barrier -->
                    <line x1="200" y1="70" x2="200" y2="130" stroke="var(--danger)" stroke-width="2.5" stroke-dasharray="4 4"/>
                    <text x="200" y="104" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-size:9px;">WALL</text>

                    <!-- File 2: script.js -->
                    <rect x="225" y="70" width="150" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="300" y="92" text-anchor="middle" class="svg-mono-xs" style="font-weight:700;">📄 script.js</text>
                    <text x="300" y="112" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger);">console.log(a);</text>

                    <rect x="25" y="142" width="350" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="200" y="165" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:600;">💥 ReferenceError: a is not defined</text>
                  </g>

                  <!-- RIGHT: With Import/Export -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">WITH ES6 MODULES (EXPLICIT CONTRACT)</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Seamless Cross-File Data Flow</text>

                    <!-- File 1: app.js with Export -->
                    <rect x="25" y="70" width="155" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="102" y="92" text-anchor="middle" class="svg-mono-xs" style="font-weight:700; fill:var(--success);">📄 app.js (Sender)</text>
                    <text x="102" y="112" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:600;">export default a;</text>

                    <!-- Arrow Bridge -->
                    <path d="M 185 100 L 220 100" class="svg-arrow" stroke="var(--success)"/>
                    <text x="202" y="92" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-size:9px;">data</text>

                    <!-- File 2: script.js with Import -->
                    <rect x="225" y="70" width="155" height="60" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="302" y="92" text-anchor="middle" class="svg-mono-xs" style="font-weight:700; fill:var(--success);">📄 script.js (Receiver)</text>
                    <text x="302" y="112" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:600;">import a from './app'</text>

                    <rect x="25" y="142" width="350" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="200" y="165" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">✓ Output: 20 printed perfectly in console</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "4.2",
          title: "What Are Import and Export?",
          content: `
            <p style="color:var(--text-secondary); margin-bottom:1rem;">
              <strong>Import</strong> and <strong>Export</strong> are the official ES6 mechanism allowing JavaScript files to share, send, and receive data cleanly between one another:
            </p>

            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Action 01 · Giver</div>
                <div class="sub-box__title">📤 Export = Giving / Sending</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong>Role:</strong> Makes variables, functions, arrays, objects, or components available to the outside world.</li>
                    <li><strong>Example:</strong> In <code>app.js</code>, writing <code>export default a</code> gives permission to other files to borrow <code>a</code>.</li>
                    <li><strong>Analogy:</strong> Like setting up an outbound parcel delivery dispatch center.</li>
                  </ul>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Action 02 · Receiver</div>
                <div class="sub-box__title">📥 Import = Taking / Receiving</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li><strong>Role:</strong> Pulls in exported data from another file into the current file's execution scope.</li>
                    <li><strong>Example:</strong> In <code>script.js</code>, writing <code>import a from './app.js'</code> receives that parcel and makes <code>a</code> ready to use.</li>
                    <li><strong>Analogy:</strong> Like accepting the delivered package at your doorstep and opening it.</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        {
          num: "4.3",
          title: "Enabling Modules with type=\"module\"",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Browser Default Limitation:</strong>
                <ul class="notes-sub-list">
                  <li>By default, a standard HTML script tag like <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code> runs as a traditional, non-modular script.</li>
                  <li>If you write <code>import</code> or <code>export</code> inside a normal script, the browser rejects it with:
                    <br><code style="color:var(--danger); font-weight:600;">Uncaught SyntaxError: Cannot use import statement outside a module</code>.
                  </li>
                </ul>
              </li>
              <li><strong>How to Enable Modules in HTML:</strong>
                <ul class="notes-sub-list">
                  <li>You must explicitly tell the browser that the JavaScript file is an ES6 Module by adding <strong><code>type="module"</code></strong>:</li>
                </ul>
                <pre style="background:var(--bg-frame); padding:0.75rem 1rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.88rem; margin:0.6rem 0;">&lt;script type="module" src="script.js"&gt;&lt;/script&gt;</pre>
              </li>
              <li><strong>Key Architectural Superpowers of <code>type="module"</code>:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Native Import / Export:</strong> Unlocks modern modular syntax natively in all modern browsers without requiring Webpack, Babel, or Vite during early learning.</li>
                  <li><strong>Automatic Strict Mode:</strong> Modules automatically execute in <code>'use strict'</code> mode, eliminating silent bugs and legacy quirks.</li>
                  <li><strong>Isolated Top-Level Scope:</strong> Variables declared at the top level of a module do NOT pollute the global <code>window</code> object.</li>
                  <li><strong>Automatic Deferred Execution:</strong> Module scripts download in parallel with HTML parsing and execute automatically after the DOM is ready (identical to <code>defer</code>).</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 4.2 · The type="module" Browser Pipeline & Strict Execution Environment</span>
                <span class="diagram-frame-tag">BROWSER RUNTIME ARCHITECTURE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Diagram showing browser HTML parser encountering type module, resolving dependency graph, enabling strict mode, and executing imports cleanly">
                  <!-- Step 1: HTML Tag -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="240" height="160" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                    <text x="120" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">HTML ENTRYPOINT</text>
                    <text x="120" y="54" text-anchor="middle" class="svg-title">script type="module"</text>
                    <rect x="15" y="70" width="210" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="120" y="96" text-anchor="middle" class="svg-mono-xs">&lt;script type="module" ...&gt;</text>
                    <text x="120" y="132" text-anchor="middle" class="svg-sub">Informs browser JS engine</text>
                    <text x="120" y="148" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent);">Auto-deferred execution</text>
                  </g>

                  <!-- Arrow 1 -->
                  <g transform="translate(275, 95)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="35,5 45,10 35,15" fill="var(--accent)"/>
                  </g>

                  <!-- Step 2: Dependency Resolution -->
                  <g transform="translate(325, 25)">
                    <rect x="0" y="0" width="240" height="160" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                    <text x="120" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">BROWSER LOADER</text>
                    <text x="120" y="54" text-anchor="middle" class="svg-title">Module Graph Fetch</text>
                    <rect x="15" y="70" width="210" height="42" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="120" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:600;">Fetches ./app.js via HTTP</text>
                    <text x="120" y="132" text-anchor="middle" class="svg-sub">Pre-parses export signatures</text>
                    <text x="120" y="148" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary);">Builds module dependency tree</text>
                  </g>

                  <!-- Arrow 2 -->
                  <g transform="translate(570, 95)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="35,5 45,10 35,15" fill="var(--success)"/>
                  </g>

                  <!-- Step 3: Strict Execution -->
                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="230" height="160" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="115" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">RUNTIME SANDBOX</text>
                    <text x="115" y="54" text-anchor="middle" class="svg-title">Strict Mode Execution</text>
                    <rect x="15" y="70" width="200" height="42" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="115" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">'use strict' enforced</text>
                    <text x="115" y="132" text-anchor="middle" class="svg-sub">No window pollution</text>
                    <text x="115" y="148" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">✓ Safe Component Architecture</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 5: DEFAULT EXPORT VS. NAMED EXPORT
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-05-default-vs-named-export",
      number: "05",
      shortLabel: "Default vs. Named Export",
      title: "Default Export vs. Named Export",
      summary: "Single primary exports with flexible alias naming (export default) vs multiple exact-match exports ({ named }), and combining both in a single module.",
      subtopicLabels: ["5.1 Export Types", "5.2 Default Export", "5.3 Named Export", "5.4 Combined Imports", "5.5 Summary"],
      diagramCount: 2,
      sections: [
        {
          num: "5.1",
          title: "Two Types of Exports in JavaScript",
          content: `
            <p style="color:var(--text-secondary); margin-bottom:1rem;">
              Whenever you share data from a JavaScript file, ES Modules give you <strong>two distinct export flavors</strong>:
            </p>

            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Type 01 · Single Primary</div>
                <div class="sub-box__title">⭐ Default Export</div>
                <div class="sub-box__body">
                  Exporting <strong>one main, primary value</strong> as the signature payload of that file. Imported with any custom name, with <strong>no curly braces</strong>.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Type 02 · Multiple Exact</div>
                <div class="sub-box__title">🏷️ Named Export</div>
                <div class="sub-box__body">
                  Exporting <strong>multiple specific values</strong> by their exact variable names. Imported inside <strong>curly braces <code>{}</code></strong> matching their exact exported identifier.
                </div>
              </div>
            </div>
          `
        },
        {
          num: "5.2",
          title: "Default Export (export default)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>When to Use:</strong> When a file is dedicated to one primary entity—like a major React component (e.g. <code>App</code>, <code>Navbar</code>) or a single config object.</li>
              <li><strong>How to Export (in <code>app.js</code>):</strong>
                <pre style="background:var(--bg-frame); padding:0.65rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">const a = 10;
export default a;</pre>
              </li>
              <li><strong>How to Import (in <code>script.js</code>):</strong>
                <pre style="background:var(--bg-frame); padding:0.65rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">import a from './app.js';</pre>
              </li>
              <li><strong>The Flexible Naming Rule (Super Important!):</strong>
                <ul class="notes-sub-list">
                  <li>Because <code>app.js</code> sends only <strong>one single default export</strong>, there is zero ambiguity about what is being received.</li>
                  <li>Therefore, the receiving file can assign it <strong>ANY custom name</strong> during import!</li>
                  <li>All of the following work identically:
                    <pre style="background:var(--bg-frame); padding:0.65rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">import b from './app.js';        // Works! b = 10
import chacha from './app.js';   // Works! chacha = 10
import username from './app.js'; // Works! username = 10</pre>
                  </li>
                </ul>
              </li>
              <li><strong>Real-World Example (<code>arr</code> vs <code>user</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Suppose <code>app.js</code> declares an array <code>arr</code> and a variable <code>const user = 'Sarthak'</code>, but only writes <code>export default arr</code>.</li>
                  <li>In <code>script.js</code>, <code>import array from './app.js'</code> successfully prints the array.</li>
                  <li>However, attempting to access <code>user</code> in <code>script.js</code> throws <code style="color:var(--danger);">user is not defined</code> because <code>user</code> was never exported!</li>
                  <li>If you change <code>app.js</code> to <code>export default user</code>, importing <code>import username from './app.js'</code> will output <code>'Sarthak'</code>.</li>
                </ul>
              </li>
              <li><strong>Hard Limit:</strong> A file can have at most <strong>ONE default export</strong>. Attempting multiple <code>export default</code> statements throws a SyntaxError.</li>
            </ul>
          `
        },
        {
          num: "5.3",
          title: "Named Export (export const ...)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>When to Use:</strong> When a file contains <strong>multiple helper utilities, icons, functions, or constants</strong> that multiple consumers might need individually.</li>
              <li><strong>How to Export (in <code>app.js</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Simply prepend the keyword <strong><code>export</code></strong> right in front of your variable or function declaration:</li>
                </ul>
                <pre style="background:var(--bg-frame); padding:0.65rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">export const arr = [10, 20, 30, 40];
export const API_URL = 'https://api.example.com';</pre>
              </li>
              <li><strong>How to Import (in <code>script.js</code>):</strong>
                <ul class="notes-sub-list">
                  <li>You <strong>MUST wrap the imported identifiers in curly braces <code>{}</code></strong>:</li>
                </ul>
                <pre style="background:var(--bg-frame); padding:0.65rem 0.85rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">import { arr, API_URL } from './app.js';</pre>
              </li>
              <li><strong>The Strict Naming Rule:</strong>
                <ul class="notes-sub-list">
                  <li>Unlike default imports, you <strong>cannot rename a named import arbitrarily</strong> inside <code>{}</code> without the explicit <code>as</code> keyword.</li>
                  <li>The name inside <code>{ arr }</code> must <strong>exactly match</strong> the variable name exported from <code>app.js</code>, because JavaScript relies on that name to pull the correct value out of the module's export record.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 5.1 · Default Export (Single Custom Alias) vs. Named Export (Exact Destructuring)</span>
                <span class="diagram-frame-tag">EXPORT PARADIGM COMPARISON</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram contrasting default export with custom import alias vs named exports requiring curly braces and exact matching names">
                  <!-- LEFT: Default Export -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">DEFAULT EXPORT (MAX 1 PER FILE)</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">Single Channel · Flexible Naming</text>

                    <rect x="25" y="68" width="150" height="56" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="100" y="90" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">export default user;</text>
                    <text x="100" y="110" text-anchor="middle" class="svg-sub">user = 'Sarthak'</text>

                    <path d="M 185 96 L 225 96" class="svg-arrow" stroke="var(--accent)"/>

                    <rect x="235" y="68" width="140" height="56" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="305" y="90" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">import naam from '...'</text>
                    <text x="305" y="110" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">No { } needed</text>

                    <rect x="25" y="136" width="350" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="200" y="159" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">✓ Alias freely: 'naam', 'user', or 'chacha'</text>
                  </g>

                  <!-- RIGHT: Named Export -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">NAMED EXPORTS (MULTIPLE PER FILE)</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">Multi-Channel · Exact Name Matching</text>

                    <rect x="25" y="68" width="150" height="56" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="100" y="90" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">export const age = 89</text>
                    <text x="100" y="110" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary);">export const skills</text>

                    <path d="M 185 96 L 225 96" class="svg-arrow" stroke="var(--primary)"/>

                    <rect x="235" y="68" width="140" height="56" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="305" y="90" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">import { age, skills }</text>
                    <text x="305" y="110" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">Strict { } required</text>

                    <rect x="25" y="136" width="350" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="200" y="159" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:600;">⚠ Names inside { } MUST match exports</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "5.4",
          title: "Combining Default & Multiple Named Exports (Practice Example)",
          content: `
            <p style="color:var(--text-secondary); margin-bottom:1rem;">
              In production React development, you will frequently combine <strong>one default export</strong> (usually the React component) with <strong>multiple named exports</strong> (subcomponents, action creators, or constants) from the exact same file.
            </p>

            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">File 01 · Producer</div>
                <div class="sub-box__title">app.js (Exporting Everything)</div>
                <div class="sub-box__body">
                  <pre style="background:var(--bg-frame); padding:0.75rem 0.9rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.82rem; margin:0.4rem 0; overflow-x:auto; max-width:100%;">const user = 'Sarthak';
export const age = 89;
export const skills = [
  'Frontend', 'Backend', 'UI/UX'
];

// Default export at bottom
export default user;</pre>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">File 02 · Consumer</div>
                <div class="sub-box__title">script.js (Single Unified Import)</div>
                <div class="sub-box__body">
                  <pre style="background:var(--bg-frame); padding:0.75rem 0.9rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.82rem; margin:0.4rem 0; overflow-x:auto; max-width:100%;">// Default first, then named { }
import naam, { age, skills } from './app';

console.log(naam);   // 'Sarthak'
console.log(age);    // 89
console.log(skills);
// ['Frontend', 'Backend', 'UI/UX']</pre>
                </div>
              </div>
            </div>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 5.2 · Unified Import Architecture: Combining Default & Named Exports</span>
                <span class="diagram-frame-tag">PRODUCTION MODULE PATTERN</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram showing app.js exporting 1 default user and 2 named exports age and skills, and script.js receiving them in a single combined import statement">
                  <!-- Producer: app.js -->
                  <g transform="translate(30, 20)">
                    <rect x="0" y="0" width="370" height="210" rx="12" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.6"/>
                    <text x="185" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">PRODUCER MODULE · app.js</text>
                    <text x="185" y="52" text-anchor="middle" class="svg-title">1 Default + 2 Named Exports</text>

                    <!-- Default Channel -->
                    <rect x="25" y="70" width="320" height="40" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="185" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">export default user ('Sarthak')</text>

                    <!-- Named Channel 1 -->
                    <rect x="25" y="118" width="155" height="40" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="102" y="143" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:600;">export const age = 89</text>

                    <!-- Named Channel 2 -->
                    <rect x="190" y="118" width="155" height="40" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="267" y="143" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:600;">export const skills = [...]</text>

                    <text x="185" y="190" text-anchor="middle" class="svg-sub" style="font-size:11px;">Single module serves multiple consumers</text>
                  </g>

                  <!-- Bridges -->
                  <g transform="translate(415, 75)">
                    <!-- Arrow 1 Default -->
                    <line x1="0" y1="15" x2="45" y2="15" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="45,10 55,15 45,20" fill="var(--accent)"/>
                    <!-- Arrow 2 Named -->
                    <line x1="0" y1="65" x2="45" y2="65" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="45,60 55,65 45,70" fill="var(--primary)"/>
                  </g>

                  <!-- Consumer: script.js -->
                  <g transform="translate(480, 20)">
                    <rect x="0" y="0" width="370" height="210" rx="12" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="185" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">CONSUMER MODULE · script.js</text>
                    <text x="185" y="52" text-anchor="middle" class="svg-title">Single Combined Import</text>

                    <rect x="20" y="70" width="330" height="50" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="185" y="100" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700; font-size:12px;">import naam, { age, skills } from './app.js'</text>

                    <rect x="20" y="130" width="330" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="35" y="152" class="svg-mono-xs" style="fill:var(--accent);">naam → 'Sarthak' (Default, aliased)</text>
                    <text x="35" y="172" class="svg-mono-xs" style="fill:var(--primary);">age → 89 · skills → ['Frontend', ...]</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "5.5",
          title: "Quick Summary: Default Export vs. Named Export",
          content: `
            <div style="overflow-x:auto; margin:0.5rem 0 1rem;">
              <table class="spec-table" style="width:100%; border-collapse:collapse;">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Default Export (export default)</th>
                    <th>Named Export (export const ...)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Export Syntax</strong></td>
                    <td><code>export default user;</code></td>
                    <td><code>export const age = 89;</code></td>
                  </tr>
                  <tr>
                    <td><strong>Import Syntax</strong></td>
                    <td><code>import anyName from './app.js';</code></td>
                    <td><code>import { age, skills } from './app.js';</code></td>
                  </tr>
                  <tr>
                    <td><strong>Curly Braces <code>{}</code></strong></td>
                    <td><span style="color:var(--success); font-weight:600;">NO curly braces</span></td>
                    <td><span style="color:var(--danger); font-weight:600;">MUST use curly braces {}</span></td>
                  </tr>
                  <tr>
                    <td><strong>Naming Freedom</strong></td>
                    <td>Can use <strong>ANY custom name</strong> on import</td>
                    <td>Must match <strong>exact exported name</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Limit Per File</strong></td>
                    <td><strong>Strictly 1</strong> default export per file</td>
                    <td><strong>Multiple</strong> named exports allowed</td>
                  </tr>
                  <tr>
                    <td><strong>Typical React Use Case</strong></td>
                    <td>Main React Component (e.g. <code>export default Button</code>)</td>
                    <td>Helper utils, constants, icons, sub-types</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="callout-highlight-box">
              <span class="callout-highlight-tag">Golden Rule for React Engineers</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary); font-weight:500;">
                If you are importing a <strong>Default Export</strong>, write the name directly with <strong>no curly braces</strong> (e.g., <code>import React from 'react'</code>).<br>
                If you are importing <strong>Named Exports</strong>, always put them inside <strong>curly braces <code>{}</code></strong> (e.g., <code>import { useState, useEffect } from 'react'</code>).
              </p>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 6: REAL DOM & WHY DIRECT DOM UPDATES ARE INEFFICIENT
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-06-real-dom-inefficiency",
      number: "06",
      shortLabel: "Real DOM Inefficiencies",
      title: "Real DOM & Why Direct DOM Updates Are Inefficient",
      summary: "The browser's live tree structure, why modifying the Real DOM directly triggers expensive reflows and repaints, and the button & heading text mutation problem.",
      subtopicLabels: ["6.1 What Is Real DOM?", "6.2 Direct Mutation Problem", "6.3 Browser Reflow Cost"],
      diagramCount: 2,
      sections: [
        {
          num: "6.1",
          title: "What Is the Real DOM?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Core Definition:</strong> The <strong>Real DOM (Document Object Model)</strong> is the actual live tree structure of your web page constructed and rendered in memory by the browser engine.</li>
              <li><strong>What It Contains:</strong> Every single HTML element you write—<code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;p&gt;</code>—lives as an active node inside this live hierarchical tree.</li>
              <li><strong>Traditional Web Architecture:</strong>
                <ul class="notes-sub-list">
                  <li>In traditional websites built using plain HTML, CSS, and Vanilla JavaScript, any UI update directly mutates this <strong>Real DOM</strong> (using methods like <code>document.getElementById()</code>, <code>innerHTML</code>, or <code>appendChild()</code>).</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "6.2",
          title: "The Problem With Updating the Real DOM Directly",
          content: `
            <div class="callout-highlight-box">
              <span class="callout-highlight-tag">The &lt;button&gt; &amp; &lt;h1&gt; Dilemma</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary);">
                Imagine a simple webpage with a <strong><code>&lt;button&gt;</code></strong> and an <strong><code>&lt;h1&gt;</code></strong> heading. On clicking the button, your code only needs to change the text of that single <strong><code>&lt;h1&gt;</code></strong>.
              </p>
            </div>

            <ul class="notes-bullet-list" style="margin-top:1rem;">
              <li><strong>What Happens in Traditional Real DOM Updates?</strong>
                <ul class="notes-sub-list">
                  <li>When JavaScript directly changes that <code>&lt;h1&gt;</code> element, the browser engine cannot easily isolate that text change without recalculating surrounding geometry.</li>
                  <li>Directly updating the Real DOM forces heavy overhead: <strong>re-calculating the layout, recalculating styles, and re-rendering branches of the DOM tree</strong> just to change one tiny string of text!</li>
                </ul>
              </li>
              <li><strong>The Performance Cost:</strong>
                <ul class="notes-sub-list">
                  <li>For a tiny toy webpage with 10 elements, you won't notice the lag.</li>
                  <li>However, in modern web applications containing <strong>thousands of nested nodes</strong> (feeds, chats, sidebars, video players, comments), frequent direct DOM mutations choke the browser's main thread.</li>
                  <li><strong>The Result:</strong> The browser does massive amounts of unnecessary extra work, causing dropped animation frames, stuttering scroll, high battery drain, and sluggish responsiveness.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 6.1 · Direct Real DOM Mutation Bottleneck: Heavy Cascading Reflow</span>
                <span class="diagram-frame-tag">TRADITIONAL IMPERATIVE WEB PROBLEM</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing direct Real DOM mutation where clicking a button triggers cascading layout reflow and repaint across unchanged DOM nodes">
                  <!-- Trigger Box -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="190" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">USER INTERACTION</text>
                    <text x="95" y="54" text-anchor="middle" class="svg-title">Button Click</text>
                    <rect x="15" y="70" width="160" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="95" y="96" text-anchor="middle" class="svg-mono-xs">&lt;button&gt; Clicked</text>
                    <text x="95" y="132" text-anchor="middle" class="svg-sub">Target: Update &lt;h1&gt; text</text>
                    <text x="95" y="152" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-size:10px;">Direct DOM Call</text>
                  </g>

                  <!-- Pipe 1 -->
                  <g transform="translate(225, 100)">
                    <line x1="0" y1="12" x2="35" y2="12" stroke="var(--danger)" stroke-width="2"/>
                    <polygon points="35,7 45,12 35,17" fill="var(--danger)"/>
                  </g>

                  <!-- Real DOM Tree -->
                  <g transform="translate(275, 25)">
                    <rect x="0" y="0" width="310" height="175" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="155" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">LIVE BROWSER REAL DOM</text>
                    <text x="155" y="52" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Cascading Tree Mutation</text>

                    <!-- Tree Nodes -->
                    <rect x="20" y="68" width="80" height="32" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2" stroke="var(--danger)"/>
                    <text x="60" y="89" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">&lt;h1&gt; *</text>

                    <rect x="115" y="68" width="80" height="32" rx="4" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="155" y="89" text-anchor="middle" class="svg-mono-xs">&lt;button&gt;</text>

                    <rect x="210" y="68" width="80" height="32" rx="4" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="250" y="89" text-anchor="middle" class="svg-mono-xs">&lt;div.card&gt;</text>

                    <rect x="20" y="112" width="270" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--danger)" stroke-dasharray="3 3"/>
                    <text x="155" y="132" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:600;">💥 Unnecessary Full-Tree Re-render</text>
                    <text x="155" y="148" text-anchor="middle" class="svg-sub">Unchanged elements forced to recalculate layout</text>
                  </g>

                  <!-- Pipe 2 -->
                  <g transform="translate(595, 100)">
                    <line x1="0" y1="12" x2="35" y2="12" stroke="var(--danger)" stroke-width="2"/>
                    <polygon points="35,7 45,12 35,17" fill="var(--danger)"/>
                  </g>

                  <!-- Engine Penalty -->
                  <g transform="translate(640, 25)">
                    <rect x="0" y="0" width="215" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.5"/>
                    <text x="107" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">BROWSER ENGINE</text>
                    <text x="107" y="52" text-anchor="middle" class="svg-title">Reflow & Repaint</text>
                    <rect x="15" y="68" width="185" height="36" rx="6" fill="var(--danger-bg)" stroke="var(--danger)"/>
                    <text x="107" y="91" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:600;">Layout Reflow (Heavy)</text>
                    <rect x="15" y="112" width="185" height="36" rx="6" fill="var(--danger-bg)" stroke="var(--danger)"/>
                    <text x="107" y="135" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:600;">Full Raster Repaint</text>
                    <text x="107" y="162" text-anchor="middle" class="svg-sub" style="font-size:10px;">Blocks UI Thread · Slow FPS</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "6.3",
          title: "The 5-Stage Browser Rendering Engine Pipeline",
          content: `
            <p style="color:var(--text-secondary); margin-bottom:1rem;">
              To understand why direct Real DOM updates are so inefficient, look at what the browser's C++ rendering engine (Blink / WebKit / Gecko) must execute whenever the DOM is touched:
            </p>

            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Stage 01 & 02 · Setup</div>
                <div class="sub-box__title">JavaScript & Styles</div>
                <div class="sub-box__body">
                  1. <strong>JS Execution:</strong> Code mutates a node via the DOM API.<br>
                  2. <strong>Style Recalculation:</strong> Browser re-evaluates all matching CSS selectors across the DOM tree.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Stage 03 · The Costliest</div>
                <div class="sub-box__title">Layout / Reflow</div>
                <div class="sub-box__body">
                  3. <strong>Layout:</strong> The browser calculates the exact geometry, coordinates, margins, and bounding boxes of every affected element on the page.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Stage 04 & 05 · Pixels</div>
                <div class="sub-box__title">Paint & Composite</div>
                <div class="sub-box__body">
                  4. <strong>Repaint:</strong> Rasterizes text, colors, and shadows into bitmap pixels.<br>
                  5. <strong>Compositing:</strong> Sends GPU layers to the physical screen.
                </div>
              </div>
            </div>

            <div class="callout-highlight-box" style="margin-top:1.25rem;">
              <span class="callout-highlight-tag">Core Takeaway</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary); font-weight:500;">
                JavaScript itself is blazingly fast in modern engines (V8). The bottleneck is <strong>touching the Real DOM</strong>, because crossing into the browser's C++ DOM tree triggers heavy Layout and Repaint loops.
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 6.2 · 5-Stage Browser Rendering Pipeline (DOM Mutation Cost)</span>
                <span class="diagram-frame-tag">BROWSER RENDERING ENGINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 185" class="arch-svg" role="img" aria-label="5-stage browser rendering engine pipeline from DOM manipulation to layout, paint, and screen compositing">
                  <!-- Stage 1 & 2: Parse & Style -->
                  <g transform="translate(20, 20)">
                    <rect x="0" y="0" width="155" height="145" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="77" y="24" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">STAGE 1 &amp; 2</text>
                    <text x="77" y="46" text-anchor="middle" class="svg-title">DOM &amp; Styles</text>
                    <rect x="10" y="60" width="135" height="72" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="77" y="82" text-anchor="middle" class="svg-mono-xs">• JS mutates DOM</text>
                    <text x="77" y="100" text-anchor="middle" class="svg-mono-xs">• CSSOM recalculates</text>
                    <text x="77" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">Matches all rules</text>
                  </g>

                  <!-- Arrow 1 -->
                  <line x1="175" y1="92" x2="195" y2="92" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="195,88 203,92 195,96" fill="var(--primary)"/>

                  <!-- Stage 3: Render Tree -->
                  <g transform="translate(205, 20)">
                    <rect x="0" y="0" width="155" height="145" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="77" y="24" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">INTERMEDIATE</text>
                    <text x="77" y="46" text-anchor="middle" class="svg-title">Render Tree</text>
                    <rect x="10" y="60" width="135" height="72" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="77" y="82" text-anchor="middle" class="svg-mono-xs">• Visible nodes only</text>
                    <text x="77" y="100" text-anchor="middle" class="svg-mono-xs">• Filters display:none</text>
                    <text x="77" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">Tree construction</text>
                  </g>

                  <!-- Arrow 2 -->
                  <line x1="360" y1="92" x2="380" y2="92" stroke="var(--danger)" stroke-width="2"/>
                  <polygon points="380,88 388,92 380,96" fill="var(--danger)"/>

                  <!-- Stage 4: Layout / Reflow (HEAVY) -->
                  <g transform="translate(390, 20)">
                    <rect x="0" y="0" width="165" height="145" rx="8" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="10" width="135" height="18" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="82" y="23" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">STAGE 3 · BOTTLENECK</text>
                    <text x="82" y="48" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Layout / Reflow</text>
                    <rect x="10" y="60" width="145" height="72" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="82" y="82" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">• Exact geometry (X,Y)</text>
                    <text x="82" y="100" text-anchor="middle" class="svg-mono-xs">• Recalculates boxes</text>
                    <text x="82" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger);">Heavy CPU spike ⚠</text>
                  </g>

                  <!-- Arrow 3 -->
                  <line x1="555" y1="92" x2="575" y2="92" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="575,88 583,92 575,96" fill="var(--primary)"/>

                  <!-- Stage 5: Paint -->
                  <g transform="translate(585, 20)">
                    <rect x="0" y="0" width="135" height="145" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="67" y="24" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">STAGE 4</text>
                    <text x="67" y="46" text-anchor="middle" class="svg-title">Paint / Draw</text>
                    <rect x="10" y="60" width="115" height="72" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="67" y="82" text-anchor="middle" class="svg-mono-xs">• Rasterize pixels</text>
                    <text x="67" y="100" text-anchor="middle" class="svg-mono-xs">• Colors, borders</text>
                    <text x="67" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">Bitmap creation</text>
                  </g>

                  <!-- Arrow 4 -->
                  <line x1="720" y1="92" x2="735" y2="92" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="735,88 743,92 735,96" fill="var(--success)"/>

                  <!-- Stage 6: Composite -->
                  <g transform="translate(745, 20)">
                    <rect x="0" y="0" width="115" height="145" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="57" y="24" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">STAGE 5</text>
                    <text x="57" y="46" text-anchor="middle" class="svg-title" style="fill:var(--success);">Composite</text>
                    <rect x="8" y="60" width="99" height="72" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="57" y="82" text-anchor="middle" class="svg-mono-xs">• GPU layers</text>
                    <text x="57" y="100" text-anchor="middle" class="svg-mono-xs">• Hardware accel</text>
                    <text x="57" y="118" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Screen Render ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 7: VIRTUAL DOM — HOW REACT SOLVES THE PERFORMANCE PROBLEM
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-07-virtual-dom-reconciliation",
      number: "07",
      shortLabel: "Virtual DOM & Reconciliation",
      title: "Virtual DOM — How React Solves the Performance Problem",
      summary: "React's lightweight in-memory DOM copy, 3-step reconciliation diffing algorithm, targeted surgical DOM patches, and real-world YouTube & Instagram case studies.",
      subtopicLabels: ["7.1 What Is Virtual DOM?", "7.2 3-Step Reconciliation", "7.3 YouTube & Instagram Cases", "7.4 Key Benefits"],
      diagramCount: 2,
      sections: [
        {
          num: "7.1",
          title: "What Is the Virtual DOM?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Simple Definition:</strong> To avoid unnecessary full DOM re-renders, React introduced the <strong>Virtual DOM</strong>—a <strong>lightweight in-memory copy of the Real DOM</strong> maintained entirely inside JavaScript objects.</li>
              <li><strong>How Many Copies Does React Make?</strong>
                <ul class="notes-sub-list">
                  <li>Technically, React maintains <strong>one primary in-memory model</strong> of the DOM structure.</li>
                  <li>During updates, React keeps the <strong>previous snapshot</strong> and builds a <strong>new updated snapshot</strong> (maintaining 2–3 representations in memory) to compare differences.</li>
                </ul>
              </li>
              <li><strong>Why Is It So Fast?</strong>
                <ul class="notes-sub-list">
                  <li>The Virtual DOM is simply a plain JavaScript object tree (e.g., <code>{ type: 'h1', props: { children: 'Hello' } }</code>).</li>
                  <li>Creating, reading, and comparing JavaScript objects in memory takes microseconds and triggers <strong>zero browser reflows or repaints</strong>!</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "7.2",
          title: "How Virtual DOM Works Step-by-Step (Example)",
          content: `
            <div class="callout-highlight-box">
              <span class="callout-highlight-tag">The 3-Step Reconciliation Pipeline</span>
              <p style="margin-top:0.4rem; color:var(--text-secondary);">
                When you click a <strong><code>&lt;button&gt;</code></strong> to update an <strong><code>&lt;h1&gt;</code></strong> in React, the browser does NOT touch the Real DOM immediately. Here is the exact 3-step process:
              </p>
            </div>

            <div class="sub-card-grid-3" style="margin-top:1.15rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Step 01 · In-Memory Mutation</div>
                <div class="sub-box__title">1. Change in Copy</div>
                <div class="sub-box__body">
                  Instead of touching the live screen, React registers the <code>&lt;h1&gt;</code> text change inside its lightweight <strong>Virtual DOM copy</strong>.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Step 02 · Diffing Algorithm</div>
                <div class="sub-box__title">2. Spot the Difference</div>
                <div class="sub-box__body">
                  React compares the updated Virtual DOM against the previous snapshot (a fast process called <strong>Diffing</strong>) to pinpoint exactly what changed.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Step 03 · Surgical Patch</div>
                <div class="sub-box__title">3. Targeted Update</div>
                <div class="sub-box__body">
                  React applies <strong>only the changed part</strong> (updating solely that single <code>&lt;h1&gt;</code>) to the Real DOM—leaving every other element completely untouched!
                </div>
              </div>
            </div>

            <div class="formula-box" style="margin-top:1.25rem;">
              Golden Rule: Make a Copy → Spot Only What Changed → Surgically Patch Only That Element in Real DOM
            </div>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 7.1 · Virtual DOM 3-Step Reconciliation & Surgical DOM Patching</span>
                <span class="diagram-frame-tag">REACT RECONCILIATION ENGINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram showing Virtual DOM reconciliation: Step 1 in-memory update, Step 2 diffing against previous snapshot, Step 3 surgical targeted patch to the Real DOM">
                  <!-- Step 1: Virtual DOM -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="250" height="205" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="125" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">STEP 1 · IN-MEMORY COPY</text>
                    <text x="125" y="52" text-anchor="middle" class="svg-title">Virtual DOM Snapshot</text>

                    <rect x="18" y="70" width="214" height="42" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="125" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">h1: "Updated Text" ✓</text>

                    <rect x="18" y="122" width="214" height="34" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="144" text-anchor="middle" class="svg-sub">button: "Click Me" (Same)</text>

                    <text x="125" y="185" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-size:10px;">Zero Browser Reflow Yet</text>
                  </g>

                  <!-- Pipe 1 -->
                  <g transform="translate(285, 110)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="35,5 45,10 35,15" fill="var(--accent)"/>
                    <text x="22" y="0" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">diff</text>
                  </g>

                  <!-- Step 2: Diffing -->
                  <g transform="translate(335, 20)">
                    <rect x="0" y="0" width="245" height="205" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="122" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">STEP 2 · DIFFING ENGINE</text>
                    <text x="122" y="52" text-anchor="middle" class="svg-title">Spot What Changed</text>

                    <rect x="15" y="70" width="215" height="54" rx="6" fill="var(--primary-bg)" stroke="var(--primary)"/>
                    <text x="122" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">Delta Isolated: 1 Node</text>
                    <text x="122" y="112" text-anchor="middle" class="svg-sub">&lt;h1&gt; text differs · button identical</text>

                    <rect x="15" y="134" width="215" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="122" y="160" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">Computes Minimal Patch</text>
                  </g>

                  <!-- Pipe 2 -->
                  <g transform="translate(590, 110)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="35,5 45,10 35,15" fill="var(--success)"/>
                    <text x="22" y="0" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--success);">patch</text>
                  </g>

                  <!-- Step 3: Targeted Real DOM -->
                  <g transform="translate(635, 20)">
                    <rect x="0" y="0" width="220" height="205" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="110" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">STEP 3 · REAL DOM</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Targeted Surgical Update</text>

                    <rect x="15" y="70" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="105" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;h1&gt; Patched Only ✓</text>

                    <rect x="15" y="122" width="190" height="34" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="105" y="144" text-anchor="middle" class="svg-sub">button untouched (0 reflow)</text>

                    <text x="110" y="185" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">✨ Fluid 60fps Performance</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "7.3",
          title: "Real-World Examples of Targeted Updates",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Example 01 · State Retention</div>
                <div class="sub-box__title">📺 YouTube Search Bar Case</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li>Suppose you type <code>Sheryians Coding School</code> into the YouTube search bar and click different video results.</li>
                    <li>The video player loads, recommendations change, comments render, and the URL updates dynamically.</li>
                    <li><strong>Notice:</strong> The text you typed inside the search bar stays completely intact—it does <strong>not reload, flicker, or re-render</strong> because its state never changed!</li>
                  </ul>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Example 02 · Surgical Mutation</div>
                <div class="sub-box__title">💬 Instagram Chat Badge Case</div>
                <div class="sub-box__body">
                  <ul class="notes-sub-list" style="padding-left:1rem;">
                    <li>Suppose your Instagram chat icon shows an unread notification badge of <strong><code>4</code></strong>.</li>
                    <li>When a 5th friend messages you, <strong>only that tiny badge number updates from <code>4</code> to <code>5</code></strong>.</li>
                    <li>The rest of the entire webpage (stories bar, photo feed, reels tab) does <strong>NOT</strong> reload or re-render just to increment one digit.</li>
                  </ul>
                </div>
              </div>
            </div>

            <figure class="diagram-frame" style="margin-top:1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 7.2 · Real-World Targeted UI State Preservation: YouTube & Instagram</span>
                <span class="diagram-frame-tag">PRODUCTION CASE STUDIES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing YouTube search bar state preservation while videos load, and Instagram chat notification badge incrementing from 4 to 5 without feed re-renders">
                  <!-- YouTube Panel -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">YOUTUBE TARGETED STATE EXAMPLE</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">Search Bar Text Preserved</text>

                    <!-- Search Bar Node (Untouched) -->
                    <rect x="25" y="70" width="350" height="42" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="200" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">🔍 Search input preserved [UNTOUCHED ✓]</text>

                    <!-- Feeds Node (Updated) -->
                    <rect x="25" y="122" width="350" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="200" y="142" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary);">Video Player & Comments Updated Dynamically</text>
                    <text x="200" y="158" text-anchor="middle" class="svg-sub">Search input never loses focus or typed text</text>
                  </g>

                  <!-- Instagram Panel -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">INSTAGRAM NOTIFICATION EXAMPLE</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">Granular Badge Increment</text>

                    <!-- Badge Node (Only updated part) -->
                    <rect x="25" y="70" width="350" height="42" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="200" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">💬 Badge: [ 4 ] → [ 5 ] (Patched in 2ms)</text>

                    <!-- Feed Node (Untouched) -->
                    <rect x="25" y="122" width="350" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="200" y="142" text-anchor="middle" class="svg-mono-xs">Photo Feed, Stories & Sidebar 100% Intact</text>
                    <text x="200" y="158" text-anchor="middle" class="svg-sub">Zero page flicker · zero redundant requests</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "7.4",
          title: "Key Architectural Benefits of the Virtual DOM",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Benefit 01 · Browser</div>
                <div class="sub-box__title">Less Browser Load</div>
                <div class="sub-box__body">
                  The browser eliminates redundant layout recalculations and repaints. Only the nodes whose state truly mutated get touched in the live DOM.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Benefit 02 · Device</div>
                <div class="sub-box__title">Less System & CPU Overhead</div>
                <div class="sub-box__body">
                  Computing differences in JavaScript object graphs takes almost zero CPU cycles compared to C++ browser layout tree calculations, saving battery life.
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">Benefit 03 · UX</div>
                <div class="sub-box__title">Faster, Smoother Apps</div>
                <div class="sub-box__body">
                  Even as your application grows to hundreds of complex interactive components, UI updates feel snappy, instantaneous, and butter-smooth at 60 frames per second.
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 08: CREATING & RUNNING A REACT APP WITH VITE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-08-vite-setup",
      number: "08",
      shortLabel: "Vite Setup & Tooling",
      title: "Creating & Running a React App with Vite",
      summary: "Step-by-step Vite setup commands (npm create vite, cd, npm i, npm run dev), port 5173 dev server, index.css cleanup, and ESLint static code quality guardrails.",
      subtopicLabels: ["8.1 Vite Setup Commands", "8.2 index.css Reset & ESLint"],
      diagramCount: 2,
      sections: [
        {
          num: "8.1",
          title: "Step-by-Step Vite Setup Commands",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Why Vite Instead of Create-React-App (CRA)?</strong>
                <ul class="notes-sub-list">
                  <li>Legacy tooling like CRA bundles your entire codebase with Webpack before serving, resulting in sluggish cold starts and slow reloads as apps grow.</li>
                  <li><strong>Vite</strong> leverages native browser <strong>ES Modules (ESM)</strong> and the ultra-fast Go-based compiler <strong>esbuild</strong> to start development servers in milliseconds with instantaneous <strong>Hot Module Replacement (HMR)</strong>.</li>
                </ul>
              </li>
              <li><strong>The 4 Essential Setup Commands:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Step 1 · Initialize the Project:</strong> Run <code>npm create vite</code> in your terminal. When prompted, enter your project directory name, select <strong>React</strong> as your framework, and select <strong>JavaScript</strong> as your language variant.</li>
                  <li><strong>Step 2 · Navigate into Folder:</strong> Run <code>cd &lt;your-project-name&gt;</code> to change your terminal working directory into the newly scaffolded project.</li>
                  <li><strong>Step 3 · Install Dependencies:</strong> Run <code>npm i</code> (shorthand for <code>npm install</code>). This reads <code>package.json</code> and downloads React, ReactDOM, and dev dependencies into the local <code>node_modules/</code> folder.</li>
                  <li><strong>Step 4 · Start Development Server:</strong> Run <code>npm run dev</code>. Vite compiles your code on demand and launches a live local server—typically accessible at <strong>http://localhost:5173</strong>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 8.1 · Next-Gen Vite Build Toolchain & Terminal Execution Pipeline</span>
                <span class="diagram-frame-tag">DEV TOOLING & LOCAL RUNTIME</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing the 4 terminal commands to create and run a React app with Vite on localhost:5173">
                  <!-- Step 1: npm create vite -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="190" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">01</text>
                    <text x="65" y="30" class="svg-kicker" style="fill:var(--primary); font-weight:700;">SCAFFOLD</text>
                    <text x="95" y="62" text-anchor="middle" class="svg-title">npm create vite</text>
                    <rect x="15" y="76" width="160" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="95" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent);">Select: React</text>
                    <text x="95" y="112" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">Variant: JavaScript</text>
                  </g>

                  <!-- Arrow 1 -> 2 -->
                  <g transform="translate(217, 90)">
                    <line x1="0" y1="10" x2="22" y2="10" stroke="var(--primary)" stroke-width="2" stroke-dasharray="3 3"/>
                    <polygon points="22,6 30,10 22,14" fill="var(--primary)"/>
                  </g>

                  <!-- Step 2: cd <dir> -->
                  <g transform="translate(249, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--border)" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">02</text>
                    <text x="65" y="30" class="svg-kicker" style="font-weight:700;">NAVIGATE</text>
                    <text x="90" y="62" text-anchor="middle" class="svg-title">cd app-name</text>
                    <rect x="15" y="76" width="150" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="90" y="96" text-anchor="middle" class="svg-mono-xs">Switch Directory</text>
                    <text x="90" y="112" text-anchor="middle" class="svg-sub">Enter project root</text>
                  </g>

                  <!-- Arrow 2 -> 3 -->
                  <g transform="translate(431, 90)">
                    <line x1="0" y1="10" x2="22" y2="10" stroke="var(--primary)" stroke-width="2" stroke-dasharray="3 3"/>
                    <polygon points="22,6 30,10 22,14" fill="var(--primary)"/>
                  </g>

                  <!-- Step 3: npm i -->
                  <g transform="translate(463, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">03</text>
                    <text x="65" y="30" class="svg-kicker" style="fill:var(--accent); font-weight:700;">DEPENDENCIES</text>
                    <text x="90" y="62" text-anchor="middle" class="svg-title">npm i</text>
                    <rect x="15" y="76" width="150" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="90" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent);">node_modules/</text>
                    <text x="90" y="112" text-anchor="middle" class="svg-sub">react & react-dom</text>
                  </g>

                  <!-- Arrow 3 -> 4 -->
                  <g transform="translate(645, 90)">
                    <line x1="0" y1="10" x2="22" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="22,6 30,10 22,14" fill="var(--success)"/>
                  </g>

                  <!-- Step 4: npm run dev -->
                  <g transform="translate(677, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">04</text>
                    <text x="65" y="30" class="svg-kicker" style="fill:var(--success); font-weight:700;">LIVE SERVER</text>
                    <text x="90" y="62" text-anchor="middle" class="svg-title" style="fill:var(--success);">npm run dev</text>
                    <rect x="15" y="76" width="150" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="90" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">localhost:5173</text>
                    <text x="90" y="112" text-anchor="middle" class="svg-sub">Instant HMR Active</text>
                  </g>

                  <!-- Footer note inside diagram -->
                  <text x="440" y="205" text-anchor="middle" class="svg-sub" style="letter-spacing:1px; fill:var(--text-muted);">
                    NATIVE ES MODULES SERVING · SUB-MILLISECOND HOT MODULE REPLACEMENT · ZERO BUNDLE LATENCY
                  </text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "8.2",
          title: "Cleaning Up Default Styles (index.css) & ESLint",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Resetting <code>index.css</code> for a Clean Canvas:</strong>
                <ul class="notes-sub-list">
                  <li>By default, Vite injects starter CSS styling (centered logos, default padding, button animations) inside <code>src/index.css</code>, which is imported inside <code>src/main.jsx</code>.</li>
                  <li>To prevent unwanted style conflicts, clear out default boilerplate inside <code>index.css</code> and establish your clean base styles:
                    <pre class="notes-code-block"><code>/* src/index.css */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #111;
  color: #fff;
  font-family: system-ui, -apple-system, sans-serif;
}</code></pre>
                  </li>
                  <li>Since <code>main.jsx</code> imports <code>index.css</code>, these global rules automatically propagate to every component rendered inside the root element.</li>
                </ul>
              </li>
              <li><strong>What Is ESLint & Why Does It Matter?</strong>
                <ul class="notes-sub-list">
                  <li><strong>ESLint</strong> is a static code analysis tool that parses your JavaScript/JSX code to catch syntax bugs, unused imports, and anti-patterns before runtime.</li>
                  <li>Vite includes ESLint by default via <code>eslint.config.js</code>.</li>
                  <li><strong>Common Linter Warning:</strong> If you write <code>import React from 'react'</code> at the top of a modern component without calling any React method directly, ESLint displays a warning: <code>'React' is defined but never used (no-unused-vars)</code>. Since React 17's new JSX transform automatically handles compilation behind the scenes, explicit React imports are no longer necessary unless using hooks or React APIs.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 8.2 · ESLint Static Code Analysis & Developer Feedback Loop</span>
                <span class="diagram-frame-tag">STATIC ANALYSIS & CODE HYGIENE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing ESLint inspecting JSX code for unused variables and warnings">
                  <!-- Source Code Box -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="240" height="160" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker">DEVELOPER CODE</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title">src/App.jsx</text>
                    <rect x="15" y="66" width="210" height="80" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs" style="fill:var(--danger);">import React from 'react';</text>
                    <text x="25" y="108" class="svg-mono-xs" style="fill:var(--text);">function App() {</text>
                    <text x="35" y="128" class="svg-mono-xs" style="fill:var(--primary);">&lt;h1&gt;Hello World&lt;/h1&gt;</text>
                  </g>

                  <!-- Arrow 1 -> 2 -->
                  <g transform="translate(275, 95)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--primary)"/>
                    <text x="22" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">AST Parse</text>
                  </g>

                  <!-- ESLint Engine Box -->
                  <g transform="translate(325, 25)">
                    <rect x="0" y="0" width="230" height="160" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">STATIC ANALYSIS ENGINE</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title">ESLint Rules Evaluator</text>
                    <rect x="15" y="66" width="200" height="80" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="88" class="svg-mono-xs">✓ Detects Syntax Errors</text>
                    <text x="25" y="108" class="svg-mono-xs">✓ Enforces Hooks Rules</text>
                    <text x="25" y="128" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">⚠ Flags Unused Imports</text>
                  </g>

                  <!-- Arrow 2 -> 3 -->
                  <g transform="translate(560, 95)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--accent)"/>
                    <text x="22" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--accent);">Terminal Log</text>
                  </g>

                  <!-- Dev Terminal Warning Box -->
                  <g transform="translate(605, 25)">
                    <rect x="0" y="0" width="245" height="160" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="122" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">DEV FEEDBACK</text>
                    <text x="122" y="52" text-anchor="middle" class="svg-title">VS Code / Terminal</text>
                    <rect x="15" y="66" width="215" height="80" rx="6" fill="var(--danger-bg)" stroke="var(--danger)"/>
                    <text x="25" y="88" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">⚠ Warning (no-unused-vars):</text>
                    <text x="25" y="108" class="svg-mono-xs" style="fill:var(--danger);">'React' is defined but</text>
                    <text x="25" y="126" class="svg-mono-xs" style="fill:var(--danger);">never used in App.jsx</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 09: HOW A REACT VITE APP WORKS UNDER THE HOOD
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-09-how-vite-react-works",
      number: "09",
      shortLabel: "Vite Bootstrap Architecture",
      title: "How a React Vite App Works Under the Hood (index.html → main.jsx → App.jsx)",
      summary: "Single HTML entry point, createRoot DOM mounting, the 3-generation Family Tree analogy (Grandparent, Parent, Child), JSX compilation, and the rafce shortcut.",
      subtopicLabels: ["9.1 Core File Roles", "9.2 Family Tree Analogy", "9.3 JSX & rafce Shortcut"],
      diagramCount: 2,
      sections: [
        {
          num: "9.1",
          title: "Role of Each Core File",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Even with modern modular architecture, everything reaches the browser through a single HTML document:</strong></li>
              <li><strong>1. <code>index.html</code> (Single Page Entry Point):</strong>
                <ul class="notes-sub-list">
                  <li>Contains a single empty mounting container: <code>&lt;div id="root"&gt;&lt;/div&gt;</code>.</li>
                  <li>Loads your application code via an ES module script: <code>&lt;script type="module" src="/src/main.jsx"&gt;&lt;/script&gt;</code>.</li>
                  <li>All React UI is dynamically rendered into this <code>#root</code> div.</li>
                </ul>
              </li>
              <li><strong>2. <code>src/main.jsx</code> (The Mounting Bridge):</strong>
                <ul class="notes-sub-list">
                  <li>Selects the container using <code>document.getElementById('root')</code>.</li>
                  <li>Initializes the React DOM rendering engine via <code>createRoot(...)</code> and mounts your root component with <code>.render(&lt;App /&gt;)</code>.</li>
                  <li>Imports global styles via <code>import './index.css'</code>.</li>
                  <li>Wraps <code>&lt;App /&gt;</code> in <code>&lt;StrictMode&gt;</code> during development to perform dual-render integrity checks.</li>
                </ul>
              </li>
              <li><strong>3. <code>src/App.jsx</code> (Root Component):</strong>
                <ul class="notes-sub-list">
                  <li>A JavaScript function returning UI markup via <strong>JSX</strong> (e.g. <code>return &lt;h1&gt;Hello Guys&lt;/h1&gt;</code>).</li>
                  <li>Whatever JSX is returned from <code>App.jsx</code> is converted into Virtual DOM nodes and injected into <code>#root</code>.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "9.2",
          title: "The Family Tree Analogy (How the Three Files Connect)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>To remember the exact connection hierarchy, think of the three files as three family generations:</strong>
                <ul class="notes-sub-list">
                  <li><strong><code>index.html</code> = Grandparent (Dadaji):</strong> Owns the physical real estate (the browser HTML document) and provides the empty foundation container <code>&lt;div id="root"&gt;</code>.</li>
                  <li><strong><code>main.jsx</code> = Parent / Father (Papa):</strong> The coordinator. It takes the child (<code>App.jsx</code>) and physically places it inside Dadaji's foundation (<code>#root</code>) using <code>createRoot().render()</code>.</li>
                  <li><strong><code>App.jsx</code> = Child (Baccha):</strong> Creates and returns the actual visual content (headings, buttons, cards, forms).</li>
                </ul>
              </li>
              <li><strong>Browser Inspect Verification:</strong>
                <ul class="notes-sub-list">
                  <li>Open any React Vite app in Google Chrome or Firefox, right-click, and select <strong>Inspect</strong>.</li>
                  <li>Inside <code>&lt;body&gt;</code>, you will see <code>&lt;div id="root"&gt;</code>, and sitting directly inside it is the exact HTML generated by <code>App.jsx</code>!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 9.1 · The Three Generations Bootstrap Architecture (Dadaji → Papa → Baccha)</span>
                <span class="diagram-frame-tag">BOOTSTRAP HIERARCHY & MOUNTING</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram showing the 3 generations: index.html (Dadaji) hosting main.jsx (Papa) which mounts App.jsx (Baccha) into div id=root">
                  <!-- Grandparent: index.html -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="250" height="195" rx="12" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="85" height="22" rx="4" fill="var(--border)"/>
                    <text x="57" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">GRANDPARENT</text>
                    <text x="125" y="62" text-anchor="middle" class="svg-title">index.html (Dadaji)</text>
                    <text x="125" y="80" text-anchor="middle" class="svg-sub">Physical DOM Foundation</text>

                    <rect x="15" y="95" width="220" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="116" text-anchor="middle" class="svg-mono-xs" style="font-weight:700; fill:var(--primary);">&lt;div id="root"&gt;&lt;/div&gt;</text>
                    <text x="125" y="134" text-anchor="middle" class="svg-sub">Target mounting container</text>

                    <rect x="15" y="152" width="220" height="30" rx="4" fill="var(--bg-canvas)" stroke="var(--border)"/>
                    <text x="125" y="172" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">&lt;script src="/src/main.jsx"&gt;</text>
                  </g>

                  <!-- Connect 1 -> 2 -->
                  <g transform="translate(280, 110)">
                    <line x1="0" y1="10" x2="30" y2="10" stroke="var(--primary)" stroke-width="2.5"/>
                    <polygon points="30,5 40,10 30,15" fill="var(--primary)"/>
                    <text x="20" y="-2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">Loads</text>
                  </g>

                  <!-- Parent: main.jsx -->
                  <g transform="translate(325, 25)">
                    <rect x="0" y="0" width="260" height="195" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="2"/>
                    <rect x="15" y="15" width="65" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="47" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">PARENT</text>
                    <text x="130" y="62" text-anchor="middle" class="svg-title">main.jsx (Papa)</text>
                    <text x="130" y="80" text-anchor="middle" class="svg-sub">Mounting & Root Engine</text>

                    <rect x="15" y="95" width="230" height="85" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--text-muted);">const root = document...</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">createRoot(root)</text>
                    <text x="35" y="158" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">.render(&lt;App /&gt;)</text>
                  </g>

                  <!-- Connect 2 -> 3 -->
                  <g transform="translate(590, 110)">
                    <line x1="0" y1="10" x2="30" y2="10" stroke="var(--accent)" stroke-width="2.5"/>
                    <polygon points="30,5 40,10 30,15" fill="var(--accent)"/>
                    <text x="20" y="-2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--accent);">Mounts</text>
                  </g>

                  <!-- Child: App.jsx -->
                  <g transform="translate(635, 25)">
                    <rect x="0" y="0" width="220" height="195" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
                    <rect x="15" y="15" width="55" height="22" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                    <text x="42" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">CHILD</text>
                    <text x="110" y="62" text-anchor="middle" class="svg-title">App.jsx (Baccha)</text>
                    <text x="110" y="80" text-anchor="middle" class="svg-sub">UI Markup & Content</text>

                    <rect x="15" y="95" width="190" height="85" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="118" class="svg-mono-xs">function App() {</text>
                    <text x="35" y="138" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">return &lt;h1&gt;Hello&lt;/h1&gt;</text>
                    <text x="25" y="158" class="svg-mono-xs">}</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "9.3",
          title: "JSX Basics, &lt;App /&gt; vs. App(), &amp; the rafce Shortcut",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Is JSX (JavaScript XML)?</strong>
                <ul class="notes-sub-list">
                  <li>JSX is a syntax extension for JavaScript that allows you to write HTML-like tags directly inside JavaScript functions.</li>
                  <li>JSX is not native browser JavaScript; build tools like Vite (via Babel or esbuild) compile JSX tags into standard <code>React.createElement(...)</code> function calls.</li>
                </ul>
              </li>
              <li><strong>Calling Components: <code>&lt;App /&gt;</code> vs. <code>App()</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Under the hood, a React component is simply a <strong>JavaScript function</strong>.</li>
                  <li>Inside <code>main.jsx</code>, calling <code>App()</code> is a standard JavaScript function call, while writing <strong><code>&lt;App /&gt;</code></strong> is the <strong>JSX syntax</strong> to invoke the component function with React lifecycle management and hooks support.</li>
                </ul>
              </li>
              <li><strong>Boilerplate Shortcut (<code>rafce</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Instead of typing out arrow functions, export statements, and return blocks manually in VS Code, install the <em>ES7+ React/Redux/React-Native snippets</em> extension.</li>
                  <li>Type <strong><code>rafce</code></strong> and press <strong>Enter</strong> to instantly generate a complete <strong>React Arrow Function Component with Export</strong>:
                    <pre class="notes-code-block"><code>import React from 'react'

const App = () => {
  return (
    &lt;div&gt;App&lt;/div&gt;
  )
}

export default App</code></pre>
                  </li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 9.2 · JSX Compilation Pipeline: From JSX Tag to DOM Node</span>
                <span class="diagram-frame-tag">COMPILATION & RUNTIME EVALUATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Diagram showing JSX code being compiled to React.createElement and rendered to live DOM">
                  <!-- Step 1: JSX Tag -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="90" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">1 · JSX TAG</text>
                    <text x="90" y="52" text-anchor="middle" class="svg-title">Developer Code</text>
                    <rect x="15" y="66" width="150" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="90" y="106" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">&lt;App /&gt;</text>
                  </g>

                  <!-- Arrow 1 -> 2 -->
                  <g transform="translate(215, 90)">
                    <line x1="0" y1="10" x2="25" y2="10" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="25,6 33,10 25,14" fill="var(--primary)"/>
                    <text x="16" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">Compile</text>
                  </g>

                  <!-- Step 2: Transpiled JS -->
                  <g transform="translate(253, 25)">
                    <rect x="0" y="0" width="200" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="100" y="28" text-anchor="middle" class="svg-kicker">2 · COMPILER OUTPUT</text>
                    <text x="100" y="52" text-anchor="middle" class="svg-title">React.createElement</text>
                    <rect x="15" y="66" width="170" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="100" y="98" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">React.createElement(</text>
                    <text x="100" y="116" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--accent);">App, null)</text>
                  </g>

                  <!-- Arrow 2 -> 3 -->
                  <g transform="translate(458, 90)">
                    <line x1="0" y1="10" x2="25" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="25,6 33,10 25,14" fill="var(--accent)"/>
                    <text x="16" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--accent);">Execute</text>
                  </g>

                  <!-- Step 3: Virtual DOM Node -->
                  <g transform="translate(496, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="90" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">3 · VIRTUAL DOM</text>
                    <text x="90" y="52" text-anchor="middle" class="svg-title">JS Object Tree</text>
                    <rect x="15" y="66" width="150" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="90" y="96" text-anchor="middle" class="svg-mono-xs" style="font-size:10px;">{ type: 'div',</text>
                    <text x="90" y="114" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--accent);">props: {...} }</text>
                  </g>

                  <!-- Arrow 3 -> 4 -->
                  <g transform="translate(681, 90)">
                    <line x1="0" y1="10" x2="25" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="25,6 33,10 25,14" fill="var(--success)"/>
                    <text x="16" y="3" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Mount</text>
                  </g>

                  <!-- Step 4: Real DOM -->
                  <g transform="translate(719, 25)">
                    <rect x="0" y="0" width="140" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="70" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">4 · REAL DOM</text>
                    <text x="70" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">#root Node</text>
                    <rect x="12" y="66" width="116" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="70" y="106" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Live HTML</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 10: COMPONENT-BASED ARCHITECTURE & CLASSNAME IN JSX
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-10-component-architecture-classname",
      number: "10",
      shortLabel: "Component Architecture & JSX",
      title: "Component-Based Architecture & className in JSX",
      summary: "Why className is used over class, why App.jsx must stay clean, avoiding copy-paste anti-patterns, and sheryians.com component breakdown with isolated rendering.",
      subtopicLabels: ["10.1 className vs class", "10.2 Clean App.jsx & Anti-Patterns", "10.3 Component Architecture"],
      diagramCount: 2,
      sections: [
        {
          num: "10.1",
          title: "Using className Instead of class in JSX",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Reserved Keyword Collision:</strong>
                <ul class="notes-sub-list">
                  <li>In traditional HTML, you assign CSS styling classes with <code>class="card"</code>.</li>
                  <li>In JSX, you <strong>cannot</strong> write <code>class="card"</code>; you must write <strong><code>className="card"</code></strong>.</li>
                  <li><strong>Why?</strong> In JavaScript, <code>class</code> is a reserved keyword used to define ES6 classes (e.g. <code>class Car {}</code>). Because JSX compiles directly into JavaScript object representations, using <code>class</code> as an attribute name causes lexical naming collisions.</li>
                </ul>
              </li>
              <li><strong>What About the <code>id</code> Attribute?</strong>
                <ul class="notes-sub-list">
                  <li><code>id</code> is <strong>not</strong> a reserved keyword in JavaScript.</li>
                  <li>Therefore, <code>id="header"</code> or <code>id="root"</code> remains completely unchanged in JSX—only <code>class</code> is written as <code>className</code>.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "10.2",
          title: "Why We Keep App.jsx Clean (The Copy-Paste Problem)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Copy-Paste Anti-Pattern:</strong>
                <ul class="notes-sub-list">
                  <li>Suppose you build a card element directly inside <code>App.jsx</code>:
                    <pre class="notes-code-block"><code>function App() {
  return (
    &lt;div&gt;
      &lt;div className="card" style={{ background: 'pink', borderRadius: 10, padding: 20 }}&gt;
        &lt;h2&gt;Sarthak Sharma&lt;/h2&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</code></pre>
                  </li>
                  <li>If you need five more cards, you might be tempted to copy-paste that card markup five times inside <code>App.jsx</code>.</li>
                  <li><strong>The Critical Flaw:</strong> <code>App.jsx</code> is your application's <strong>root entry orchestrator</strong>. Dumping raw markup directly into <code>App.jsx</code> creates a sprawling 500-line monolith where updating a button or card design requires making manual edits in dozens of different places.</li>
                  <li><strong>The Solution:</strong> Embrace <strong>Component-Based Architecture</strong>—extract individual UI blocks into dedicated, single-responsibility component files.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 10.1 · Monolithic Copy-Paste Sprawl vs. Clean Modular Component Architecture</span>
                <span class="diagram-frame-tag">ARCHITECTURAL DESIGN PATTERNS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram contrasting a monolithic App.jsx full of copy-pasted HTML with a modular App.jsx importing separate components">
                  <!-- Bad: Monolith -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="100" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="65" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">ANTI-PATTERN</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Monolithic Sprawling App.jsx</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--danger);">App.jsx (500+ Lines of Clutter)</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--text-muted);">├── 50 lines: Nav markup clutter</text>
                    <text x="35" y="130" class="svg-mono-xs" style="fill:var(--text-muted);">├── 120 lines: Duplicate Card HTML</text>
                    <text x="35" y="148" class="svg-mono-xs" style="fill:var(--text-muted);">└── 80 lines: Footer markup clutter</text>
                  </g>

                  <!-- Good: Modular Components -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">RECOMMENDED PATTERN</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">Clean Component Architecture</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">App.jsx (Clean 20-Line Orchestrator)</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--primary);">&lt;Navbar /&gt;</text>
                    <text x="35" y="130" class="svg-mono-xs" style="fill:var(--accent);">&lt;Card /&gt;  &lt;Card /&gt;  &lt;Card /&gt;</text>
                    <text x="35" y="148" class="svg-mono-xs" style="fill:var(--text-muted);">&lt;Footer /&gt;</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "10.3",
          title: "What Are Components & Component-Based Architecture?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Is a Component?</strong>
                <ul class="notes-sub-list">
                  <li>A <strong>Component</strong> is a self-contained, independent, and reusable piece of code (a JavaScript function returning JSX) responsible for rendering a specific feature of the UI.</li>
                </ul>
              </li>
              <li><strong>Deconstructing a Production Website (sheryians.com Example):</strong>
                <ul class="notes-sub-list">
                  <li>Rather than thinking of a page as one huge HTML document, break it down into a tree of components:
                    <ul class="notes-sub-list">
                      <li><strong><code>&lt;Navbar /&gt;</code></strong> component (which internally contains a <code>&lt;Logo /&gt;</code> component and a <code>&lt;NavLinks /&gt;</code> component).</li>
                      <li><strong><code>&lt;HeroSection /&gt;</code></strong> component with call-to-action buttons.</li>
                      <li><strong><code>&lt;CourseGrid /&gt;</code></strong> component rendering multiple instances of <strong><code>&lt;CourseCard /&gt;</code></strong>.</li>
                      <li><strong><code>&lt;Footer /&gt;</code></strong> component.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>Major Performance & Re-Rendering Advantage:</strong>
                <ul class="notes-sub-list">
                  <li>Suppose a user receives an unread alert, incrementing the notification count from <code>0</code> to <code>1</code>.</li>
                  <li>In traditional architectures, the entire navbar or whole document might re-render.</li>
                  <li>In React's Component Architecture, <strong>only that single notification badge component re-renders</strong>! The rest of the page (Hero, Cards, Footer) remains completely untouched and idle, delivering massive performance gains.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 10.2 · Component Tree Isolation & Granular Re-rendering Efficiency</span>
                <span class="diagram-frame-tag">TREE RECONCILIATION & ISOLATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Component tree showing App branching into Navbar, Hero, and CourseGrid. When NotificationBadge changes state, only that single node re-renders">
                  <!-- App Root -->
                  <g transform="translate(370, 15)">
                    <rect x="0" y="0" width="140" height="42" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <text x="70" y="26" text-anchor="middle" class="svg-title">&lt;App /&gt;</text>
                  </g>

                  <!-- Connectors from App to 3 branches -->
                  <path d="M 440 57 L 440 80 L 160 80 L 160 100" fill="none" stroke="var(--border)" stroke-width="1.8"/>
                  <path d="M 440 57 L 440 100" fill="none" stroke="var(--border)" stroke-width="1.8"/>
                  <path d="M 440 57 L 440 80 L 720 80 L 720 100" fill="none" stroke="var(--border)" stroke-width="1.8"/>

                  <!-- Branch 1: Navbar -->
                  <g transform="translate(85, 100)">
                    <rect x="0" y="0" width="150" height="42" rx="8" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="75" y="26" text-anchor="middle" class="svg-title">&lt;Navbar /&gt;</text>
                  </g>

                  <!-- Branch 2: Hero -->
                  <g transform="translate(365, 100)">
                    <rect x="0" y="0" width="150" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="75" y="26" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">&lt;HeroSection /&gt; [IDLE]</text>
                  </g>

                  <!-- Branch 3: Courses -->
                  <g transform="translate(645, 100)">
                    <rect x="0" y="0" width="150" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="75" y="26" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">&lt;CourseGrid /&gt; [IDLE]</text>
                  </g>

                  <!-- Sub-connectors under Navbar -->
                  <path d="M 160 142 L 160 165 L 80 165 L 80 180" fill="none" stroke="var(--border)" stroke-width="1.5"/>
                  <path d="M 160 142 L 160 165 L 240 165 L 240 180" fill="none" stroke="var(--border)" stroke-width="1.5"/>

                  <!-- Navbar Child 1: Logo (Idle) -->
                  <g transform="translate(15, 180)">
                    <rect x="0" y="0" width="130" height="38" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="65" y="24" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">&lt;Logo /&gt; [IDLE]</text>
                  </g>

                  <!-- Navbar Child 2: Notification Badge (RE-RENDERS) -->
                  <g transform="translate(165, 180)">
                    <rect x="0" y="0" width="170" height="38" rx="6" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
                    <text x="85" y="24" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">🔔 &lt;Badge [ 1 ] /&gt; ⚡</text>
                  </g>

                  <!-- Callout note on right -->
                  <g transform="translate(370, 175)">
                    <rect x="0" y="0" width="480" height="48" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-dasharray="3 3"/>
                    <text x="240" y="22" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">GRANULAR ISOLATION: Only &lt;Badge&gt; re-renders</text>
                    <text x="240" y="38" text-anchor="middle" class="svg-sub">All sibling components remain 100% idle with zero layout shifts.</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 11: CREATING, EXPORTING, IMPORTING & REUSING COMPONENTS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-11-creating-reusing-components-props-intro",
      number: "11",
      shortLabel: "Component Lifecycle & Props Intro",
      title: "Creating, Exporting, Importing & Reusing Components",
      summary: "Building Card.jsx, Navbar.jsx with rafce, Capital Letter naming rule, VS Code auto-import gotchas, and why Props are needed (Instagram feed analogy).",
      subtopicLabels: ["11.1 First Component Card.jsx", "11.2 Navbar.jsx & Auto-Import Rules", "11.3 Reusability & Props Motivation"],
      diagramCount: 2,
      sections: [
        {
          num: "11.1",
          title: "Creating Your First Component (Card.jsx)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Step-by-Step Component Creation Workflow:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Step 1 · Create Components Directory:</strong> Inside your project's <code>src/</code> directory, create a dedicated folder named <strong><code>components/</code></strong> to keep your project organized.</li>
                  <li><strong>Step 2 · Create the Component File:</strong> Inside <code>src/components/</code>, create a new file named <strong><code>Card.jsx</code></strong> (the <code>.jsx</code> extension signifies JavaScript XML).</li>
                  <li><strong>Step 3 · Write the Component Function:</strong>
                    <pre class="notes-code-block"><code>// src/components/Card.jsx
function Card() {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;Sarthak Sharma&lt;/h2&gt;
      &lt;p&gt;Full-Stack React Developer&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default Card;</code></pre>
                  </li>
                  <li><strong>Step 4 · Export the Component:</strong> The <code>export default Card;</code> statement exposes the component function so other files across your application can import it.</li>
                  <li><strong>Step 5 · Import and Render Inside App.jsx:</strong>
                    <pre class="notes-code-block"><code>// src/App.jsx
import Card from './components/Card';

function App() {
  return (
    &lt;div&gt;
      &lt;Card /&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "11.2",
          title: "Creating Multiple Components (Navbar.jsx) & Auto-Import Rules",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Building <code>Navbar.jsx</code> with <code>rafce</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Inside <code>src/components/</code>, create <code>Navbar.jsx</code>.</li>
                  <li>Type <strong><code>rafce</code></strong> and press <strong>Enter</strong> to generate boilerplate arrow-function syntax.</li>
                  <li>Add your navigation JSX markup and style it accordingly:
                    <pre class="notes-code-block"><code>// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    &lt;div className="nav"&gt;
      &lt;h3&gt;OneNightRevise Navigation&lt;/h3&gt;
    &lt;/div&gt;
  );
};

export default Navbar;</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>The Capital Letter Naming Rule (Crucial!):</strong>
                <ul class="notes-sub-list">
                  <li>React components <strong>MUST ALWAYS</strong> begin with an <strong>Uppercase Letter</strong> (e.g., <code>Navbar</code>, <code>Card</code>, <code>UserProfile</code>).</li>
                  <li><strong>Why?</strong> React's JSX parser treats lowercase tags (like <code>&lt;navbar&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;button&gt;</code>) as native built-in HTML elements. If a component name starts with a lowercase letter, React attempts to find a matching HTML DOM element instead of invoking your component function!</li>
                </ul>
              </li>
              <li><strong>The VS Code Auto-Import Gotcha:</strong>
                <ul class="notes-sub-list">
                  <li>When you start typing <code>&lt;Navbar</code> inside <code>App.jsx</code>, VS Code suggests an auto-completion that automatically inserts <code>import Navbar from './components/Navbar';</code> at the top.</li>
                  <li><strong>Gotcha:</strong> Auto-import <strong>only works if the target component is already exported</strong> (<code>export default Navbar</code>). If you haven't written the export statement yet, VS Code has no symbol in its index and cannot offer the auto-import suggestion.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 11.1 · Component Module Pipeline: Exporting from components/ to App.jsx</span>
                <span class="diagram-frame-tag">MODULE EXPORT & IMPORT ORCHESTRATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing Card.jsx and Navbar.jsx exporting components and App.jsx importing them">
                  <!-- Navbar Component File -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="240" height="90" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="120" y="24" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">src/components/Navbar.jsx</text>
                    <rect x="15" y="34" width="210" height="42" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="120" y="52" text-anchor="middle" class="svg-mono-xs">const Navbar = () =&gt; {...}</text>
                    <text x="120" y="68" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">export default Navbar;</text>
                  </g>

                  <!-- Card Component File -->
                  <g transform="translate(25, 125)">
                    <rect x="0" y="0" width="240" height="90" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="120" y="24" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">src/components/Card.jsx</text>
                    <rect x="15" y="34" width="210" height="42" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="120" y="52" text-anchor="middle" class="svg-mono-xs">function Card() {...}</text>
                    <text x="120" y="68" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">export default Card;</text>
                  </g>

                  <!-- Arrows linking to App.jsx -->
                  <g transform="translate(275, 65)">
                    <line x1="0" y1="0" x2="60" y2="35" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="60,31 68,39 57,41" fill="var(--primary)"/>
                  </g>
                  <g transform="translate(275, 170)">
                    <line x1="0" y1="0" x2="60" y2="-35" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="57,-41 68,-39 60,-31" fill="var(--accent)"/>
                  </g>

                  <!-- App.jsx Container -->
                  <g transform="translate(355, 20)">
                    <rect x="0" y="0" width="495" height="195" rx="12" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="2"/>
                    <rect x="20" y="16" width="140" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="90" y="31" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">ORCHESTRATOR</text>
                    <text x="280" y="32" class="svg-title">src/App.jsx</text>

                    <!-- Code block inside App.jsx -->
                    <rect x="20" y="48" width="455" height="130" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="35" y="70" class="svg-mono-xs" style="fill:var(--primary);">import Navbar from './components/Navbar';</text>
                    <text x="35" y="88" class="svg-mono-xs" style="fill:var(--accent);">import Card from './components/Card';</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--text);">function App() {</text>
                    <text x="50" y="130" class="svg-mono-xs" style="fill:var(--text);">return &lt;div&gt;&lt;Navbar /&gt;&lt;Card /&gt;&lt;/div&gt;;</text>
                    <text x="35" y="148" class="svg-mono-xs" style="fill:var(--text);">}</text>
                    <text x="35" y="166" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">export default App;</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "11.3",
          title: "Reusability, Independent Updates & The Limitation (Why Props Exist)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Power of Reusability & Independent Updates:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Instant Reusability:</strong> Writing <code>&lt;Card /&gt;</code> twice or three times in <code>App.jsx</code> renders three full cards instantly without duplicating any underlying HTML markup.</li>
                  <li><strong>Fault & Update Isolation:</strong> Modifying <code>Navbar.jsx</code> will never break or trigger changes in <code>Card.jsx</code>. Each component has an isolated boundary.</li>
                </ul>
              </li>
              <li><strong>The Critical Hardcoded Data Limitation:</strong>
                <ul class="notes-sub-list">
                  <li>Right now, every instance of <code>&lt;Card /&gt;</code> displays the exact same hardcoded data (<em>"Sarthak Sharma"</em> and the exact same bio paragraph).</li>
                </ul>
              </li>
              <li><strong>The Instagram Feed Analogy (Why Props Are Essential):</strong>
                <ul class="notes-sub-list">
                  <li>Think of real-world applications like <strong>Instagram</strong> (Feed Posts or Stories):
                    <ul class="notes-sub-list">
                      <li>Every single post card in your Instagram feed shares the <strong>exact same visual shell</strong>: user avatar on top left, username, image/video container, like/comment/share buttons, and a caption section.</li>
                      <li>However, Post 1 shows <strong>@virat.kohli</strong> with 2M likes, while Post 2 shows <strong>@nationalgeographic</strong> with wildlife photography and a custom caption!</li>
                    </ul>
                  </li>
                  <li><strong>How React Solves This:</strong> To reuse one unified component shell while passing <strong>different, dynamic data</strong> into each instance, React provides <strong>Props (Properties)</strong>—the core mechanism for component customization covered next!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 11.2 · Component Reusability & The Hardcoded Limitation: The Instagram Case Study</span>
                <span class="diagram-frame-tag">REUSABILITY PATTERNS & PROPS MOTIVATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing identical component shells reused across Instagram feed posts, requiring Props to inject dynamic usernames and images">
                  <!-- Post 1 -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="250" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <circle cx="35" cy="32" r="14" fill="var(--primary)"/>
                    <text x="35" y="36" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">A</text>
                    <text x="60" y="28" class="svg-title">@alice_dev</text>
                    <text x="60" y="42" class="svg-sub">San Francisco · 2h ago</text>

                    <!-- Image container -->
                    <rect x="15" y="55" width="220" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">[ Photo: Workspace Setup ]</text>

                    <!-- Action bar -->
                    <text x="25" y="145" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">❤️ 1,240 likes</text>
                    <text x="25" y="165" class="svg-sub">"Shipped my first React app today! 🚀"</text>
                  </g>

                  <!-- Post 2 -->
                  <g transform="translate(315, 20)">
                    <rect x="0" y="0" width="250" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <circle cx="35" cy="32" r="14" fill="var(--accent)"/>
                    <text x="35" y="36" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">B</text>
                    <text x="60" y="28" class="svg-title">@bob_codes</text>
                    <text x="60" y="42" class="svg-sub">Bengaluru · 4h ago</text>

                    <!-- Image container -->
                    <rect x="15" y="55" width="220" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">[ Photo: Coffee & Algorithms ]</text>

                    <!-- Action bar -->
                    <text x="25" y="145" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">❤️ 890 likes</text>
                    <text x="25" y="165" class="svg-sub">"Mastering System Design & Queues ☕"</text>
                  </g>

                  <!-- Summary Box: Why Props -->
                  <g transform="translate(605, 20)">
                    <rect x="0" y="0" width="250" height="190" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">THE SOLUTION: PROPS</text>
                    <text x="125" y="60" text-anchor="middle" class="svg-title" style="fill:var(--success);">Same Shell · Dynamic Data</text>

                    <rect x="15" y="74" width="220" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="font-weight:700; fill:var(--primary);">&lt;PostCard</text>
                    <text x="35" y="114" class="svg-mono-xs" style="fill:var(--accent);">user="alice_dev"</text>
                    <text x="35" y="132" class="svg-mono-xs" style="fill:var(--accent);">likes={1240}</text>
                    <text x="25" y="152" class="svg-mono-xs" style="font-weight:700; fill:var(--primary);">/&gt;</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 12: WHAT ARE PROPS? (THE FUNCTION PARAMETER ANALOGY)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-12-what-are-props-function-parameter",
      number: "12",
      shortLabel: "What Are Props?",
      title: "What Are Props? (The Function Parameter Analogy)",
      summary: "Definition of Props (Properties), the abc(10) JavaScript function argument analogy, passing props from parent App.jsx to child Card.jsx, strings vs. curly braces {}.",
      subtopicLabels: ["12.1 What Are Props?", "12.2 Function Argument Analogy", "12.3 Parent to Child Data Flow"],
      diagramCount: 2,
      sections: [
        {
          num: "12.1",
          title: "What Are Props?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Props Stands for "Properties":</strong>
                <ul class="notes-sub-list">
                  <li>When you write <code>&lt;Card user="Aman" /&gt;</code> in React, the attribute <code>user="Aman"</code> looks just like a standard HTML attribute (such as <code>class="..."</code> or <code>src="..."</code>).</li>
                  <li>In React, these custom attributes passed into components are called <strong>Props</strong>.</li>
                </ul>
              </li>
              <li><strong>The Core Purpose of Props:</strong>
                <ul class="notes-sub-list">
                  <li>Props enable you to reuse the <strong>exact same component structure and styling</strong> (like a reusable user card, product card, or button) while injecting <strong>different dynamic data</strong> (different usernames, ages, avatar images, prices) into each individual instance.</li>
                  <li>Without props, component reusability would be useless because every card would show identical, hardcoded data.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "12.2",
          title: "How Props Work Like JavaScript Function Arguments (abc(10) Analogy)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Traditional JavaScript Function Parallel:</strong>
                <ul class="notes-sub-list">
                  <li>Consider a simple JavaScript function with a parameter:
                    <pre class="notes-code-block"><code>function abc(a) {
  console.log('Hello', a);
}

abc(10); // Prints: Hello 10</code></pre>
                  </li>
                  <li>Here, <code>10</code> is the <strong>argument</strong> supplied at the call site, and <code>a</code> is the <strong>parameter</strong> that receives that value inside the function body.</li>
                </ul>
              </li>
              <li><strong>Applying the Exact Same Logic to React:</strong>
                <ul class="notes-sub-list">
                  <li>A React component (like <code>Card</code>) is fundamentally a <strong>JavaScript function</strong>.</li>
                  <li>Writing <code>&lt;Card user="Sarthak" age={18} /&gt;</code> in JSX is simply the JSX syntax for invoking <code>Card({ user: "Sarthak", age: 18 })</code>.</li>
                  <li>Under the hood, React collects all attributes passed to the component tag, bundles them into a single JavaScript object named <strong><code>props</code></strong>, and delivers that object as the first argument to your component function!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 12.1 · JavaScript Function Arguments vs. React Component Props</span>
                <span class="diagram-frame-tag">FUNCTIONAL PARALLEL & ANALOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing the parallel between plain JS function arguments and React component props">
                  <!-- Left: Vanilla JS Function -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">VANILLA JAVASCRIPT</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Function Arguments: abc(10)</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">function <strong style="fill:var(--primary);">abc(a)</strong> {</text>
                    <text x="45" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">console.log('Hello', a);</text>
                    <text x="25" y="136" class="svg-mono-xs">}</text>
                    <text x="25" y="156" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">abc(10); // Argument 10 maps to a</text>
                  </g>

                  <!-- Right: React Component Props -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">REACT JS PARADIGM</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Component Props: &lt;Card user="..." /&gt;</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">function <strong style="fill:var(--accent);">Card(props)</strong> {</text>
                    <text x="45" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">return &lt;h1&gt;{props.user}&lt;/h1&gt;;</text>
                    <text x="25" y="136" class="svg-mono-xs">}</text>
                    <text x="25" y="156" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;Card user="Sarthak" /&gt; // props.user</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "12.3",
          title: "Passing Props From Parent (App.jsx) to Child (Card.jsx)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Unidirectional Data Flow (Top to Bottom):</strong>
                <ul class="notes-sub-list">
                  <li>In React, data strictly flows in one direction: from the <strong>Parent component</strong> down to the <strong>Child component</strong>.</li>
                  <li><strong>Parent (<code>App.jsx</code>):</strong> Responsible for defining and passing the data when rendering each child instance:
                    <pre class="notes-code-block"><code>// src/App.jsx
import Card from './components/Card';

function App() {
  return (
    &lt;div className="container"&gt;
      &lt;Card user="Sarthak" age={18} img="https://images.unsplash.com/photo-1" /&gt;
      &lt;Card user="Aman" age={21} img="https://images.unsplash.com/photo-2" /&gt;
      &lt;Card user="Aditya" age={24} img="https://images.unsplash.com/photo-3" /&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>Syntax Rules for Passing Props:</strong>
                <ul class="notes-sub-list">
                  <li><strong>String Literals:</strong> Plain text values (like usernames or URLs) can be passed directly inside quotes: <code>user="Sarthak"</code> or <code>img="..."</code>.</li>
                  <li><strong>Numbers, Booleans & JavaScript Expressions:</strong> Must be wrapped inside <strong>curly braces <code>{}</code></strong>: <code>age={18}</code>, <code>isMember={true}</code>, or <code>total={10 + 5}</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 12.2 · Parent-to-Child Unidirectional Props Data Flow</span>
                <span class="diagram-frame-tag">COMPONENT HIERARCHY & DATA STREAM</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Diagram showing parent App.jsx passing distinct props objects down to three child Card components">
                  <!-- Parent: App.jsx -->
                  <g transform="translate(240, 15)">
                    <rect x="0" y="0" width="400" height="50" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="2"/>
                    <text x="200" y="24" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">PARENT COMPONENT</text>
                    <text x="200" y="42" text-anchor="middle" class="svg-title">src/App.jsx (Data Source)</text>
                  </g>

                  <!-- 3 Downward Arrows with Props Labels -->
                  <!-- Flow to Card 1 -->
                  <path d="M 320 65 L 320 95 L 140 95 L 140 120" fill="none" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="135,120 140,128 145,120" fill="var(--primary)"/>
                  <rect x="40" y="82" width="200" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                  <text x="140" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--primary);">{ user: "Sarthak", age: 18 }</text>

                  <!-- Flow to Card 2 -->
                  <path d="M 440 65 L 440 120" fill="none" stroke="var(--accent)" stroke-width="2"/>
                  <polygon points="435,120 440,128 445,120" fill="var(--accent)"/>
                  <rect x="340" y="82" width="200" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                  <text x="440" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--accent);">{ user: "Aman", age: 21 }</text>

                  <!-- Flow to Card 3 -->
                  <path d="M 560 65 L 560 95 L 740 95 L 740 120" fill="none" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="735,120 740,128 745,120" fill="var(--success)"/>
                  <rect x="640" y="82" width="200" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="740" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--success);">{ user: "Aditya", age: 24 }</text>

                  <!-- Child 1 -->
                  <g transform="translate(30, 130)">
                    <rect x="0" y="0" width="220" height="90" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                    <text x="110" y="24" text-anchor="middle" class="svg-title">&lt;Card /&gt; Instance 1</text>
                    <rect x="15" y="36" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="54" text-anchor="middle" class="svg-mono-xs">user: "Sarthak"</text>
                    <text x="110" y="70" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">age: 18</text>
                  </g>

                  <!-- Child 2 -->
                  <g transform="translate(330, 130)">
                    <rect x="0" y="0" width="220" height="90" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                    <text x="110" y="24" text-anchor="middle" class="svg-title">&lt;Card /&gt; Instance 2</text>
                    <rect x="15" y="36" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="54" text-anchor="middle" class="svg-mono-xs">user: "Aman"</text>
                    <text x="110" y="70" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">age: 21</text>
                  </g>

                  <!-- Child 3 -->
                  <g transform="translate(630, 130)">
                    <rect x="0" y="0" width="220" height="90" rx="8" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                    <text x="110" y="24" text-anchor="middle" class="svg-title">&lt;Card /&gt; Instance 3</text>
                    <rect x="15" y="36" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="54" text-anchor="middle" class="svg-mono-xs">user: "Aditya"</text>
                    <text x="110" y="70" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">age: 24</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 13: RECEIVING, USING & RENDERING DYNAMIC DATA WITH PROPS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-13-receiving-rendering-props",
      number: "13",
      shortLabel: "Receiving & Rendering Props",
      title: "Receiving, Using & Rendering Dynamic Data With Props",
      summary: "Accessing props via dot notation ({props.user}, {props.age}), passing dynamic image URLs, and the crucial JSX gotcha of curly braces {} vs string quotes.",
      subtopicLabels: ["13.1 Displaying Props in Card", "13.2 Passing Dynamic Images", "13.3 Curly Braces vs Quotes Gotcha"],
      diagramCount: 2,
      sections: [
        {
          num: "13.1",
          title: "Receiving & Displaying Props Inside Card.jsx",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Accepting <code>props</code> in the Child Component:</strong>
                <ul class="notes-sub-list">
                  <li>In <code>Card.jsx</code>, declare <strong><code>props</code></strong> as the parameter of your functional component:
                    <pre class="notes-code-block"><code>// src/components/Card.jsx
const Card = (props) => {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{props.user}&lt;/h2&gt;
      &lt;p&gt;Age: {props.age}&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default Card;</code></pre>
                  </li>
                  <li>Because <code>props</code> is a standard JavaScript object (e.g. <code>{ user: "Sarthak", age: 18 }</code>), you read each property using <strong>dot notation</strong> inside JSX curly braces:
                    <ul class="notes-sub-list">
                      <li><code>{props.user}</code> → Dynamically renders the person's name (<em>Sarthak</em>, <em>Aman</em>, <em>Aditya</em>).</li>
                      <li><code>{props.age}</code> → Dynamically renders their age (<em>18</em>, <em>21</em>, <em>24</em>).</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "13.2",
          title: "Passing Dynamic Images Through Props",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Passing Image URLs Dynamically:</strong>
                <ul class="notes-sub-list">
                  <li>Just like text strings and numbers, image URLs (such as image addresses copied from Unsplash or a CDN) can be passed as props from <code>App.jsx</code>:
                    <pre class="notes-code-block"><code>// In App.jsx
&lt;Card user="Aditya" age={24} img="https://images.unsplash.com/photo-1534528741775-53994a69daeb" /&gt;</code></pre>
                  </li>
                  <li>Inside <code>Card.jsx</code>, bind the prop to the <code>src</code> attribute using curly braces:
                    <pre class="notes-code-block"><code>// In Card.jsx
const Card = (props) => {
  return (
    &lt;div className="card"&gt;
      &lt;img src={props.img} alt={props.user} /&gt;
      &lt;h2&gt;{props.user}&lt;/h2&gt;
      &lt;p&gt;Age: {props.age}&lt;/p&gt;
    &lt;/div&gt;
  );
};</code></pre>
                  </li>
                  <li>Now every single <code>&lt;Card /&gt;</code> shares the exact same CSS border, shadow, and layout structure, while automatically displaying its own unique photo, name, and age!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 13.1 · Props Object Extraction & JSX DOM Data Binding Pipeline</span>
                <span class="diagram-frame-tag">OBJECT EXTRACTION & DOM INJECTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing props object arriving and binding to h2, p, and img DOM elements via dot notation">
                  <!-- Props Object -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="240" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">PROPS OBJECT</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title">Received Parameter</text>
                    <rect x="15" y="66" width="210" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs">props = {</text>
                    <text x="40" y="108" class="svg-mono-xs" style="fill:var(--primary);">user: "Aditya",</text>
                    <text x="40" y="126" class="svg-mono-xs" style="fill:var(--accent);">age: 24,</text>
                    <text x="40" y="144" class="svg-mono-xs" style="fill:var(--success);">img: "https://..."</text>
                    <text x="25" y="156" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Extraction Arrows -->
                  <g transform="translate(280, 50)">
                    <line x1="0" y1="20" x2="60" y2="0" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="60,-4 68,0 60,4" fill="var(--primary)"/>
                    <line x1="0" y1="65" x2="60" y2="65" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="60,61 68,65 60,69" fill="var(--accent)"/>
                    <line x1="0" y1="110" x2="60" y2="130" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="60,126 68,130 60,134" fill="var(--success)"/>
                  </g>

                  <!-- JSX Binding Nodes -->
                  <g transform="translate(355, 25)">
                    <rect x="0" y="0" width="220" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker">JSX TEMPLATE</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">Dot Notation Binding</text>

                    <rect x="15" y="66" width="190" height="28" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="105" y="84" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">&lt;h2&gt;{props.user}&lt;/h2&gt;</text>

                    <rect x="15" y="102" width="190" height="28" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="105" y="120" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">&lt;p&gt;Age: {props.age}&lt;/p&gt;</text>

                    <rect x="15" y="138" width="190" height="28" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="105" y="156" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;img src={props.img} /&gt;</text>
                  </g>

                  <!-- Render Arrow -->
                  <g transform="translate(585, 105)">
                    <line x1="0" y1="10" x2="40" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="40,6 48,10 40,14" fill="var(--success)"/>
                    <text x="20" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Renders</text>
                  </g>

                  <!-- Live Rendered Output -->
                  <g transform="translate(640, 25)">
                    <rect x="0" y="0" width="210" height="175" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="105" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">RENDERED HTML</text>
                    <text x="105" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Live DOM Node</text>

                    <rect x="15" y="66" width="180" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">Aditya</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">Age: 24</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--success); font-size:10px;">[Photo Rendered ✓]</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "13.3",
          title: "Common JSX Gotcha: Curly Braces {} vs. Quotes \"\"",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Golden Rule of JSX:</strong>
                <ul class="notes-sub-list">
                  <li>Whenever you want to evaluate a <strong>JavaScript expression, variable, or prop</strong> inside JSX, you <strong>must wrap it in curly braces <code>{}</code></strong>.</li>
                </ul>
              </li>
              <li><strong>What Happens If You Forget <code>{}</code> or Use Quotes?</strong>
                <ul class="notes-sub-list">
                  <li><strong>Gotcha 1 (Text):</strong> Writing <code>&lt;h1&gt;props.user&lt;/h1&gt;</code> does not evaluate the variable—it literally prints the characters <code>props.user</code> onto the screen instead of displaying <code>"Sarthak"</code>.</li>
                  <li><strong>Gotcha 2 (Images):</strong> Writing <code>&lt;img src="props.img" /&gt;</code> instructs the browser to request an image file named literally <code>props.img</code>, resulting in a <strong>404 Not Found broken image icon</strong>! Always write <strong><code>&lt;img src={props.img} /&gt;</code></strong> without quotes.</li>
                </ul>
              </li>
              <li><strong>Architecture Note (Towards Dynamic Lists):</strong>
                <ul class="notes-sub-list">
                  <li>Manually copy-pasting ten <code>&lt;Card /&gt;</code> components with hardcoded prop values in <code>App.jsx</code> is fine for initial practice, but in real production applications data comes from APIs as an <strong>Array of Objects</strong> and is dynamically mapped into components using <code>.map()</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 13.2 · JSX Evaluation Gotcha: String Literal vs. JavaScript Expression</span>
                <span class="diagram-frame-tag">JSX SYNTAX GUARDRAIL</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Diagram contrasting incorrect string quotes causing broken image with correct curly braces evaluating prop URL">
                  <!-- Bad: Quotes -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="170" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">INCORRECT ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Quotation Marks: Literal String</text>

                    <rect x="15" y="70" width="365" height="78" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">&lt;img src="props.img" /&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text-muted);">Browser fetches GET /props.img</text>
                    <text x="25" y="132" class="svg-mono-xs" style="fill:var(--danger);">Result: 404 Not Found (Broken Image)</text>
                  </g>

                  <!-- Good: Curly Braces -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="170" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT ✓</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Curly Braces: JS Expression</text>

                    <rect x="15" y="70" width="365" height="78" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;img src={props.img} /&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text-muted);">Evaluates prop variable to image URL</text>
                    <text x="25" y="132" class="svg-mono-xs" style="fill:var(--success);">Result: Photo renders successfully ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 14: RENDERING DYNAMIC LISTS WITH .MAP() & ARRAY OF OBJECTS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-14-rendering-lists-map-objects",
      number: "14",
      shortLabel: "Lists & Array of Objects",
      title: "Rendering Dynamic Lists With .map() & Array of Objects",
      summary: "Why manual indexing fails, .map() inside JSX curly braces, forEach vs map, transforming items, array of objects, and fixing 'Objects are not valid as a React child'.",
      subtopicLabels: ["14.1 Manual Indexing vs .map()", "14.2 forEach vs map", "14.3 Array of Objects & Job Cards", "14.4 Objects Not Valid Error"],
      diagramCount: 2,
      sections: [
        {
          num: "14.1",
          title: "Why Manual Indexing Fails & Using .map() in JSX",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Failure of Manual Array Indexing:</strong>
                <ul class="notes-sub-list">
                  <li>When you have an array of data, manually accessing elements one-by-one (e.g. <code>arr[0]</code>, <code>arr[1]</code>, <code>arr[2]</code>) is tedious, repetitive, and fails the moment array items are added or deleted dynamically.</li>
                </ul>
              </li>
              <li><strong>The Solution — <code>.map()</code> Inside JSX Curly Braces:</strong>
                <ul class="notes-sub-list">
                  <li>In JSX, JavaScript expressions must always be wrapped in curly braces: <code>{arr.map((elem) =&gt; ...)}</code>.</li>
                  <li><strong>Gotcha:</strong> If you write <code>arr.map(...)</code> without curly braces, React treats it as plain text and literally outputs <code>arr.map(...)</code> on the web page instead of executing JavaScript!</li>
                </ul>
              </li>
              <li><strong>How <code>.map()</code> Renders Elements Step-by-Step:</strong>
                <ul class="notes-sub-list">
                  <li><code>.map()</code> iterates over every item in the array and returns a new transformed value or JSX element for each one.</li>
                  <li><strong>Example:</strong> If <code>arr = [10, 20, 30, 40]</code> (4 elements), whatever JSX you return inside <code>.map()</code> renders <strong>exactly 4 times</strong>. If the array contains 10 items, it renders 10 times automatically.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "14.2",
          title: "forEach vs. map & Transforming Elements",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Why Use <code>.map()</code> Instead of <code>.forEach()</code> in JSX?</strong>
                <ul class="notes-sub-list">
                  <li><strong><code>.forEach()</code>:</strong> Iterates through an array for side effects, but its return value is always <strong><code>undefined</code></strong>. If you place <code>arr.forEach(...)</code> inside JSX, React receives <code>undefined</code> and renders absolutely nothing on the screen!</li>
                  <li><strong><code>.map()</code>:</strong> Returns a <strong>brand new array</strong> of JSX elements. React automatically unwraps arrays of JSX elements and renders them into the DOM.</li>
                </ul>
              </li>
              <li><strong>Accessing & Transforming Each Item (<code>elem</code>):</strong>
                <ul class="notes-sub-list">
                  <li>The callback parameter <code>elem</code> holds the current item on each iteration.</li>
                  <li>You can transform values dynamically:
                    <ul class="notes-sub-list">
                      <li><code>elem * 2</code> on <code>[10, 99, 30]</code> outputs <code>20</code>, <code>198</code>, <code>60</code>.</li>
                      <li>Wrapping in JSX: <code>arr.map((elem) =&gt; &lt;h1&gt;{elem}&lt;/h1&gt;)</code> renders each number inside a separate heading.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 14.1 · Array Iteration in React: .forEach() vs. .map()</span>
                <span class="diagram-frame-tag">FUNCTIONAL TRANSFORMATION PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting forEach returning undefined with map returning an array of JSX elements">
                  <!-- forEach: Undefined -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="120" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="75" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">arr.forEach() ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Returns undefined</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs">{arr.forEach(item =&gt; &lt;h1&gt;{item}&lt;/h1&gt;)}</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--danger);">Return Value: undefined</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--text-muted);">Result: Blank screen (zero items rendered)</text>
                  </g>

                  <!-- map: Returns Array -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">arr.map() ✓</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Returns New JSX Array</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs">{arr.map(item =&gt; &lt;h1&gt;{item}&lt;/h1&gt;)}</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Return Value: [&lt;h1&gt;10&lt;/h1&gt;, &lt;h1&gt;20&lt;/h1&gt;]</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--text-muted);">Result: Renders each item in DOM ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "14.3",
          title: "Working With an Array of Objects (Job Openings Cards Project)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Real-World Structured Data:</strong>
                <ul class="notes-sub-list">
                  <li>Production applications rarely work with flat numbers like <code>[10, 20, 30]</code>. Data arrives from databases or APIs as an <strong>Array of Objects</strong>:
                    <pre class="notes-code-block"><code>const users = [
  { user: 'Sarthak', age: 18 },
  { user: 'Harsh', age: 22 },
  { user: 'Aman', age: 21 }
];</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>The Job Openings Cards Project (<code>04-cards-project</code>):</strong>
                <ul class="notes-sub-list">
                  <li>To build a real-world career portal interface, create an array of <strong>10 job opening objects</strong> for top tech enterprises: <strong>Meta, Amazon, Apple, Netflix, Google, Microsoft, IBM, Tesla, Nvidia, and Oracle</strong>.</li>
                  <li>Each object encapsulates rich structured properties:
                    <pre class="notes-code-block"><code>const jobOpenings = [
  {
    companyName: "Google",
    logo: "https://...google-logo.svg",
    datePosted: "2 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "React / TS",
    pay: "$185,000 / yr",
    location: "Mountain View, CA"
  },
  // ... 9 more company opening objects
];</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "14.4",
          title: "Common Error: 'Objects are not valid as a React child'",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Mistake:</strong>
                <ul class="notes-sub-list">
                  <li>If you map over an array of objects and write <code>{jobOpenings.map(elem =&gt; &lt;h1&gt;{elem}&lt;/h1&gt;)}</code>, React crashes immediately!</li>
                  <li><strong>The Error Message:</strong> <code>Uncaught Error: Objects are not valid as a React child (found: object with keys {companyName, logo, ...}). If you meant to render a collection of children, use an array instead.</code></li>
                  <li><strong>Why?</strong> React can only render primitive values (strings, numbers, JSX elements) directly into text nodes. It cannot guess how to render an entire JavaScript object dictionary.</li>
                </ul>
              </li>
              <li><strong>The Two Fixes:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Fix 1 (Direct Property Access):</strong> Render primitive fields individually: <code>&lt;h1&gt;{elem.companyName}&lt;/h1&gt;</code>.</li>
                  <li><strong>Fix 2 (Component Props Pattern):</strong> Return a reusable component (like <code>&lt;Card ... /&gt;</code>) and forward each object property as a prop: <code>&lt;Card company={elem.companyName} pay={elem.pay} /&gt;</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 14.2 · Array of Objects Transformation to UI Cards (Job Openings Pipeline)</span>
                <span class="diagram-frame-tag">DATA-DRIVEN RENDERING PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Diagram showing array of 10 tech company job objects being mapped into reusable Card components">
                  <!-- Raw Data Box -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="230" height="195" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">RAW DATA SOURCE</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title">jobOpenings Array</text>
                    <rect x="15" y="66" width="200" height="115" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs" style="fill:var(--primary);">[</text>
                    <text x="35" y="106" class="svg-mono-xs">{ company: "Meta", ... },</text>
                    <text x="35" y="124" class="svg-mono-xs">{ company: "Google", ... },</text>
                    <text x="35" y="142" class="svg-mono-xs">{ company: "Apple", ... },</text>
                    <text x="35" y="160" class="svg-mono-xs" style="fill:var(--text-muted);">// 7 more objects</text>
                    <text x="25" y="174" class="svg-mono-xs" style="fill:var(--primary);">]</text>
                  </g>

                  <!-- Map Transformation Arrow -->
                  <g transform="translate(265, 105)">
                    <line x1="0" y1="10" x2="60" y2="10" stroke="var(--primary)" stroke-width="2.5"/>
                    <polygon points="60,5 70,10 60,15" fill="var(--primary)"/>
                    <rect x="5" y="-12" width="55" height="18" rx="3" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="32" y="1" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">.map()</text>
                  </g>

                  <!-- Mapping Logic -->
                  <g transform="translate(345, 20)">
                    <rect x="0" y="0" width="240" height="195" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">TRANSFORMATION</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title">App.jsx Mapped Loop</text>
                    <rect x="15" y="66" width="210" height="115" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="90" class="svg-mono-xs">jobOpenings.map(elem =&gt;</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">&lt;Card</text>
                    <text x="45" y="130" class="svg-mono-xs">company={elem.companyName}</text>
                    <text x="45" y="148" class="svg-mono-xs">pay={elem.pay}</text>
                    <text x="35" y="166" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">/&gt;</text>
                    <text x="25" y="176" class="svg-mono-xs">)</text>
                  </g>

                  <!-- Mount Arrow -->
                  <g transform="translate(595, 105)">
                    <line x1="0" y1="10" x2="50" y2="10" stroke="var(--success)" stroke-width="2.5"/>
                    <polygon points="50,5 60,10 50,15" fill="var(--success)"/>
                    <text x="25" y="-2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Renders</text>
                  </g>

                  <!-- Rendered Cards Grid -->
                  <g transform="translate(665, 20)">
                    <rect x="0" y="0" width="190" height="195" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="95" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">OUTPUT DOM</text>
                    <text x="95" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">10 Dynamic Cards</text>

                    <rect x="15" y="66" width="160" height="34" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="95" y="87" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">Meta · $180k</text>

                    <rect x="15" y="106" width="160" height="34" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="95" y="127" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">Google · $185k</text>

                    <rect x="15" y="146" width="160" height="34" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="95" y="167" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted);">+ 8 More Tech Cards</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 15: PASSING OBJECT PROPS & SOLVING THE MISSING KEY WARNING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-15-object-props-key-warning",
      number: "15",
      shortLabel: "Object Props & Key Warning",
      title: "Passing Object Props & Solving the Missing 'key' Prop Warning",
      summary: "Project setup for 04-cards-project, passing multi-attribute props, the College Roll Number analogy for unique keys, fixing warnings with idx, and practice ideas.",
      subtopicLabels: ["15.1 Cards Project Setup", "15.2 Why React Needs key (Roll Number Analogy)", "15.3 Fixing With idx & Practice Ideas"],
      diagramCount: 2,
      sections: [
        {
          num: "15.1",
          title: "Project Setup & Rendering Reusable <Card /> Components",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Clean Project Architecture (<code>04-cards-project</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Reset <code>App.jsx</code> and <code>index.css</code> to remove starter boilerplate.</li>
                  <li>Create a <code>components/</code> folder inside <code>src/</code> and add <code>Card.jsx</code>.</li>
                  <li>In <code>index.css</code>, style the outer container (e.g. <code>.parent { min-height: 100vh; width: 100%; background-color: #111; padding: 2rem; display: flex; flex-wrap: wrap; gap: 1.5rem; }</code>).</li>
                </ul>
              </li>
              <li><strong>Mapping Objects to Component Props:</strong>
                <ul class="notes-sub-list">
                  <li>Render <code>&lt;Card /&gt;</code> inside <code>.map()</code> over the 10-item <code>jobOpenings</code> array:
                    <pre class="notes-code-block"><code>// src/App.jsx
import Card from './components/Card';

function App() {
  return (
    &lt;div className="parent"&gt;
      {jobOpenings.map((elem, idx) =&gt; (
        &lt;Card
          key={idx}
          companyName={elem.companyName}
          logo={elem.logo}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>
                  </li>
                  <li><strong>Notice on Image URLs:</strong> Placeholder image links (like Clearbit CDN logos) can occasionally break. Always verify URLs in a browser tab and replace any broken links with working assets.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "15.2",
          title: "Why React Needs a Unique 'key' Prop (College Roll Number Analogy)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Dreaded Console Warning:</strong>
                <ul class="notes-sub-list">
                  <li>When you render lists using <code>.map()</code> without a key, React prints: <code>Warning: Each child in a list should have a unique "key" prop. See https://react.dev/link/warning-keys for more information.</code></li>
                </ul>
              </li>
              <li><strong>Why React Demands a Unique Key:</strong>
                <ul class="notes-sub-list">
                  <li>When an array updates (e.g. a new item is inserted at the beginning, an item is deleted, or the list is sorted), React compares the old Virtual DOM tree with the new Virtual DOM tree.</li>
                  <li>Without unique identifiers, React cannot determine which item moved, which item was added, or which item was removed—forcing it to discard and destructively rebuild the entire list of DOM nodes.</li>
                </ul>
              </li>
              <li><strong>The College Roll Number Analogy:</strong>
                <ul class="notes-sub-list">
                  <li>Imagine a classroom of 100 students wearing identical school uniforms. To a substitute teacher, every student looks indistinguishable.</li>
                  <li>If the college assigns each student a permanent, unique <strong>Roll Number / Student ID Card</strong>, the teacher can instantly identify and update the record of one specific student without inspecting all 100 students!</li>
                  <li>In the exact same way, the <strong><code>key</code> prop</strong> acts as an internal ID badge that tells React's reconciliation engine exactly which DOM node corresponds to which data item.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 15.1 · The College Roll Number Analogy: Why the React Reconciler Demands Unique Keys</span>
                <span class="diagram-frame-tag">DIFFING ALGORITHM & IDENTITY RECONCILIATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing college roll number analogy where keys uniquely identify list items during updates">
                  <!-- Without Keys -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">WITHOUT KEYS ❌</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">No Roll Numbers / Anonymous Items</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Students have no ID cards</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">Teacher cannot identify individuals</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--danger);">React tears down & recreates DOM list</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--danger);">Warning: Child must have unique "key"</text>
                  </g>

                  <!-- With Keys -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">WITH KEY={ID} ✓</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">Unique Roll Number Identity</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;Card key={idx} ... /&gt;</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--text);">Unique ID per student: [0, 1, 2, ...]</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">React does surgical in-place updates</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--text-muted);">Zero warnings · 60fps silky performance</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "15.3",
          title: "Fixing the Warning With idx (key={idx}) & Practice Ideas",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How to Fix the Warning Using <code>idx</code>:</strong>
                <ul class="notes-sub-list">
                  <li>The second argument of <code>.map()</code> provides the zero-based index of each item in the array: <code>array.map((elem, idx) =&gt; ...)</code>.</li>
                  <li>Pass <strong><code>key={idx}</code></strong> to the top-level element returned inside the callback:
                    <pre class="notes-code-block"><code>{jobOpenings.map((elem, idx) =&gt; (
  &lt;Card key={idx} {...elem} /&gt;
))}</code></pre>
                  </li>
                  <li><strong>Invisible in the DOM:</strong> Notice that React uses <code>key</code> solely for its internal reconciliation engine. If you inspect the rendered HTML in Chrome DevTools, you will see that <code>key</code> does <strong>not</strong> appear as an attribute on the physical DOM node!</li>
                </ul>
              </li>
              <li><strong>Recommended Production Practice:</strong>
                <ul class="notes-sub-list">
                  <li>While <code>key={idx}</code> eliminates the console warning for static lists, for dynamic lists that support deletion, insertion, or reordering, always prefer a stable unique database ID: <code>key={elem.id}</code>.</li>
                </ul>
              </li>
              <li><strong>Interactive Practice Ideas:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Contact Directory:</strong> Render 20 contacts with avatar, full name, phone number, and an "Active" badge.</li>
                  <li><strong>Freelancer Profile Cards:</strong> Render freelancer profiles showing hourly rate, rating stars, location, and a list of skill chips (<code>React</code>, <code>Tailwind</code>, <code>Node.js</code>).</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 15.2 · Reconciliation Diffing Engine: List Updates With Keys vs. Without Keys</span>
                <span class="diagram-frame-tag">VIRTUAL DOM RECONCILIATION BENCHMARK</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing list insertion at beginning: without keys all elements are destroyed and recreated, with keys only the new element is inserted">
                  <!-- Case A: Without Keys -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.5"/>
                    <text x="200" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">MUTATION WITHOUT KEYS</text>
                    <text x="200" y="50" text-anchor="middle" class="svg-title">Prepending Item to List</text>

                    <!-- Old vs New Nodes -->
                    <rect x="15" y="65" width="170" height="30" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="100" y="85" text-anchor="middle" class="svg-mono-xs">[A, B, C]</text>

                    <text x="200" y="85" text-anchor="middle" class="svg-title" style="fill:var(--danger);">→</text>

                    <rect x="215" y="65" width="165" height="30" rx="4" fill="var(--danger-bg)" stroke="var(--danger)"/>
                    <text x="297" y="85" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">[NEW, A, B, C]</text>

                    <rect x="15" y="105" width="365" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="125" class="svg-mono-xs" style="fill:var(--danger);">Index 0: A vs NEW → Mutates DOM</text>
                    <text x="25" y="143" class="svg-mono-xs" style="fill:var(--danger);">Index 1: B vs A → Mutates DOM</text>
                    <text x="25" y="161" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Total: 4 Destructive DOM Repaints</text>
                  </g>

                  <!-- Case B: With Keys -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="200" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">SURGICAL RECONCILIATION WITH KEYS</text>
                    <text x="200" y="50" text-anchor="middle" class="svg-title">Key-Guided Minimal Patch</text>

                    <rect x="15" y="65" width="170" height="30" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="100" y="85" text-anchor="middle" class="svg-mono-xs">{key:A}, {key:B}</text>

                    <text x="200" y="85" text-anchor="middle" class="svg-title" style="fill:var(--success);">→</text>

                    <rect x="215" y="65" width="165" height="30" rx="4" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="297" y="85" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">{key:NEW}, {key:A}, ...</text>

                    <rect x="15" y="105" width="365" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="125" class="svg-mono-xs" style="fill:var(--success);">Matches key:A & key:B nodes in-place ✓</text>
                    <text x="25" y="143" class="svg-mono-xs" style="fill:var(--success);">Preserves internal DOM node state ✓</text>
                    <text x="25" y="161" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Total: Only 1 surgical prepend operation</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 16: STYLING IN REACT — GLOBAL CSS VS. SEPARATE CSS FILES
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-16-styling-global-vs-separate-css",
      number: "16",
      shortLabel: "Global CSS vs Separate CSS",
      title: "Styling in React — Global CSS vs. Separate CSS Files",
      summary: "Global index.css scalability bottlenecks, component-scoped CSS files in styles/, runtime global stylesheet injection, and the CSS class name clash bug.",
      subtopicLabels: ["16.1 Global CSS & Limitations", "16.2 Separate Component CSS", "16.3 The Class Name Clash Bug"],
      diagramCount: 2,
      sections: [
        {
          num: "16.1",
          title: "Method 1: Global CSS (index.css) & Its Limitations",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Project Architecture Setup (<code>05-css</code>):</strong>
                <ul class="notes-sub-list">
                  <li>In a fresh project setup, reset <code>App.jsx</code> and <code>index.css</code> to start with a clean baseline.</li>
                  <li>In basic React tutorials, all styles are dumped into a single global stylesheet: <code>src/index.css</code> (which is imported into <code>src/main.jsx</code>).</li>
                </ul>
              </li>
              <li><strong>How Global CSS Operates:</strong>
                <ul class="notes-sub-list">
                  <li>Every CSS selector declared inside <code>index.css</code> applies universally to every component rendered anywhere in the DOM.</li>
                </ul>
              </li>
              <li><strong>The Production Scalability Bottleneck:</strong>
                <ul class="notes-sub-list">
                  <li>Writing all CSS in one file is viable only for small demos (like a simple Calculator or To-Do app).</li>
                  <li>In enterprise applications with dozens or hundreds of components, dumping all styles into <code>index.css</code> creates an unmaintainable "hodgepodge"—dead styles accumulate, selector specificity wars break layouts, and refactoring becomes dangerous.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "16.2",
          title: "Method 2: Separate Component CSS Files (styles/ Folder)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Splitting CSS into Component-Dedicated Files:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Step 1:</strong> Create your components inside <code>src/components/</code> (e.g. <code>Button.jsx</code> and <code>Header.jsx</code> using the <code>rafce</code> shortcut).</li>
                  <li><strong>Step 2:</strong> Create a dedicated <code>src/styles/</code> directory containing matching CSS files:
                    <ul class="notes-sub-list">
                      <li><code>Button.css</code> → Declares button styling (e.g. <code>.btn { padding: 10px 20px; border-radius: 8px; }</code>).</li>
                      <li><code>Header.css</code> → Declares header layout rules (e.g. <code>.header { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; margin: 5px; }</code>).</li>
                    </ul>
                  </li>
                  <li><strong>Step 3:</strong> Keep <code>index.css</code> strictly for universal resets (box-sizing, body font-family).</li>
                  <li><strong>Step 4:</strong> Import each stylesheet directly inside its respective component:
                    <pre class="notes-code-block"><code>// src/components/Button.jsx
import '../styles/Button.css';

// src/components/Header.jsx
import '../styles/Header.css';</code></pre>
                  </li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 16.1 · React Styling Architecture: Monolithic Global CSS vs. Component-Linked Files</span>
                <span class="diagram-frame-tag">CODEBASE ORGANIZATION PATTERNS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram contrasting monolithic global CSS with component-linked CSS files">
                  <!-- Global Monolith -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">MONOLITHIC GLOBAL CSS</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Single Massive index.css</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--danger);">src/index.css (2,000+ Lines)</text>
                    <text x="35" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">/* Mixed Button, Nav, Modal styles */</text>
                    <text x="35" y="134" class="svg-mono-xs" style="fill:var(--danger);">Zero encapsulation · High regression risk</text>
                    <text x="35" y="152" class="svg-mono-xs" style="fill:var(--text-muted);">Dead CSS accumulates indefinitely</text>
                  </g>

                  <!-- Separate Files -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">COMPONENT-LINKED CSS</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Split Styles Directory</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--primary);">src/styles/</text>
                    <text x="35" y="116" class="svg-mono-xs" style="fill:var(--text);">├── Button.css ↔ Button.jsx</text>
                    <text x="35" y="134" class="svg-mono-xs" style="fill:var(--text);">└── Header.css ↔ Header.jsx</text>
                    <text x="35" y="152" class="svg-mono-xs" style="fill:var(--accent);">Clean on disk · But lacks runtime scoping!</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "16.3",
          title: "The Class Name Clash Problem (Why Plain Separate CSS Fails at Scale)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Actually Happens in the Browser at Runtime:</strong>
                <ul class="notes-sub-list">
                  <li>When you write <code>import '../styles/Button.css'</code> and <code>import '../styles/Header.css'</code>, Vite bundles both files together and injects their raw CSS text into the <strong>same global <code>&lt;head&gt;</code> stylesheet</strong>.</li>
                  <li><strong>Plain CSS imports have ZERO lexical scoping in JavaScript!</strong></li>
                </ul>
              </li>
              <li><strong>The Style Leakage Bug:</strong>
                <ul class="notes-sub-list">
                  <li>Suppose <code>Button.css</code> defines a solid rounded action button:
                    <pre class="notes-code-block"><code>/* Button.css */
.btn {
  background-color: royalblue;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}</code></pre>
                  </li>
                  <li>Inside <code>Header.jsx</code>, you also use <code>className="btn"</code> for a simple, minimalist login link in the navbar.</li>
                  <li><strong>The Critical Failure:</strong> The styles from <code>Button.css</code> bleed directly into <code>Header.jsx</code>, unintentionally overwriting the header link with heavy blue padding!</li>
                </ul>
              </li>
              <li><strong>Staff Engineer Key Takeaway:</strong>
                <ul class="notes-sub-list">
                  <li>Physical file separation on your hard drive organizes files in VS Code, but does <strong>not</strong> isolate styles in the browser. That is why plain separate CSS files are an anti-pattern for large-scale React applications.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 16.2 · The Global Scope CSS Leak: How Plain CSS Imports Collide at Runtime</span>
                <span class="diagram-frame-tag">RUNTIME SCOPING PITFALL</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing Button.css and Header.css both defining .btn colliding in the global DOM stylesheet">
                  <!-- Button.css -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="230" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">SOURCE FILE 1</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title">Button.css</text>
                    <rect x="15" y="66" width="200" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="90" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">.btn {</text>
                    <text x="35" y="110" class="svg-mono-xs">background: royalblue;</text>
                    <text x="35" y="128" class="svg-mono-xs">padding: 12px 24px;</text>
                    <text x="25" y="148" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Header.css -->
                  <g transform="translate(285, 25)">
                    <rect x="0" y="0" width="230" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">SOURCE FILE 2</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title">Header.css</text>
                    <rect x="15" y="66" width="200" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="90" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">.btn {</text>
                    <text x="35" y="110" class="svg-mono-xs">background: transparent;</text>
                    <text x="35" y="128" class="svg-mono-xs">padding: 4px 8px;</text>
                    <text x="25" y="148" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Bundling Arrow -->
                  <g transform="translate(525, 100)">
                    <line x1="0" y1="10" x2="45" y2="10" stroke="var(--danger)" stroke-width="2.5"/>
                    <polygon points="45,5 55,10 45,15" fill="var(--danger)"/>
                    <text x="22" y="-2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--danger);">Vite Bundle</text>
                  </g>

                  <!-- Global DOM Collision -->
                  <g transform="translate(595, 25)">
                    <rect x="0" y="0" width="260" height="175" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="2"/>
                    <text x="130" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">GLOBAL DOM &lt;HEAD&gt;</text>
                    <text x="130" y="52" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Naming Collision 💥</text>

                    <rect x="15" y="66" width="230" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="88" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Both .btn rules collide!</text>
                    <text x="25" y="108" class="svg-mono-xs" style="fill:var(--text-muted);">Last imported rule overrides first.</text>
                    <text x="25" y="128" class="svg-mono-xs" style="fill:var(--danger);">Navbar link turns blue & heavy!</text>
                    <text x="25" y="146" class="svg-mono-xs" style="fill:var(--text-muted);">Zero style isolation.</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 17: MODULE CSS (.MODULE.CSS) — SCOPED COMPONENT STYLING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-17-module-css-scoped-styling",
      number: "17",
      shortLabel: "Module CSS & Scoped Styles",
      title: "Module CSS (.module.css) — Scoped Component Styling",
      summary: "Component co-location architecture, .module.css naming convention, importing styles objects, hashed class names, and eliminating CSS collisions.",
      subtopicLabels: ["17.1 Co-location & Naming", "17.2 Importing & Applying styles", "17.3 How Modules Stop Collisions"],
      diagramCount: 2,
      sections: [
        {
          num: "17.1",
          title: "Component-Based Folder Structure & Naming Convention",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Is Module CSS?</strong>
                <ul class="notes-sub-list">
                  <li><strong>Module CSS</strong> is a built-in bundler mechanism (supported natively by Vite, Webpack, and Next.js) that scopes CSS class names strictly to the component that imports them.</li>
                </ul>
              </li>
              <li><strong>The Co-location Folder Structure Pattern:</strong>
                <ul class="notes-sub-list">
                  <li>Instead of a distant, separated <code>src/styles/</code> directory, senior engineers co-locate the component's JavaScript and stylesheet in their own dedicated component directory:
                    <pre class="notes-code-block"><code>src/
└── components/
    ├── button/
    │   ├── Button.jsx
    │   └── Button.module.css
    └── header/
        ├── Header.jsx
        └── Header.module.css</code></pre>
                  </li>
                  <li><strong>The Strict Naming Rule:</strong> Module stylesheets <strong>MUST</strong> use the <strong><code>.module.css</code></strong> file extension (e.g. <code>Button.module.css</code>). Vite relies specifically on this extension to trigger its automated class-hashing transform.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "17.2",
          title: "Importing & Applying Module CSS (className={styles.className})",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Step 1 · Import as a JavaScript Object:</strong>
                <ul class="notes-sub-list">
                  <li>Import the CSS module as a named JavaScript object (conventionally named <code>styles</code>):
                    <pre class="notes-code-block"><code>// src/components/button/Button.jsx
import styles from './Button.module.css';

// src/components/header/Header.jsx
import styles from './Header.module.css';</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>Step 2 · Apply via <code>className</code> (Not <code>style</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Bind the hashed class property using JSX dot notation:
                    <pre class="notes-code-block"><code>// In Button.jsx
const Button = () => {
  return &lt;button className={styles.btn}&gt;Click Me&lt;/button&gt;;
};

// In Header.jsx
const Header = () => {
  return &lt;header className={styles.header}&gt;Header UI&lt;/header&gt;;
};</code></pre>
                  </li>
                  <li><strong>Common Beginner Pitfall:</strong> Never write <code>style={styles.btn}</code>! The HTML <code>style</code> prop expects an inline JavaScript style object (e.g. <code>{ color: 'red' }</code>), whereas <code>styles.btn</code> is a string containing the compiled class name. Always use <code>className={styles.btn}</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 17.1 · CSS Module Compilation & Class Name Hashing Pipeline</span>
                <span class="diagram-frame-tag">POSTCSS COMPILATION & HASH GENERATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing Button.module.css .btn getting transformed into a unique hash _btn_1a4f9_12 by Vite">
                  <!-- Author Code -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="240" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">1 · AUTHOR CSS</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title">Button.module.css</text>
                    <rect x="15" y="66" width="210" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="90" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">.btn {</text>
                    <text x="35" y="110" class="svg-mono-xs">background: royalblue;</text>
                    <text x="35" y="128" class="svg-mono-xs">padding: 10px 20px;</text>
                    <text x="25" y="148" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Compiler Arrow -->
                  <g transform="translate(275, 105)">
                    <line x1="0" y1="10" x2="45" y2="10" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="45,6 53,10 45,14" fill="var(--primary)"/>
                    <text x="22" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">Vite Transform</text>
                  </g>

                  <!-- Hashed Styles Object -->
                  <g transform="translate(340, 25)">
                    <rect x="0" y="0" width="250" height="175" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="125" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2 · JS STYLES OBJECT</text>
                    <text x="125" y="52" text-anchor="middle" class="svg-title">Hashed Key-Value Map</text>
                    <rect x="15" y="66" width="220" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="90" class="svg-mono-xs">styles = {</text>
                    <text x="35" y="114" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">btn: "_btn_a91b_1"</text>
                    <text x="25" y="136" class="svg-mono-xs">}</text>
                    <text x="25" y="152" class="svg-sub">Unique deterministic hash</text>
                  </g>

                  <!-- DOM Injection Arrow -->
                  <g transform="translate(600, 105)">
                    <line x1="0" y1="10" x2="45" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="45,6 53,10 45,14" fill="var(--success)"/>
                    <text x="22" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Injects</text>
                  </g>

                  <!-- Final Rendered DOM -->
                  <g transform="translate(655, 25)">
                    <rect x="0" y="0" width="200" height="175" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="100" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">3 · BROWSER DOM</text>
                    <text x="100" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Scoped Node</text>
                    <rect x="15" y="66" width="170" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">&lt;button</text>
                    <text x="30" y="118" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">class="_btn_a91b_1"</text>
                    <text x="25" y="138" class="svg-mono-xs">&gt;Click&lt;/button&gt;</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "17.3",
          title: "How Module CSS Eliminates Class Collisions",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Collision Immunity via Lexical Scoping:</strong>
                <ul class="notes-sub-list">
                  <li>Even if ten different components declare a class called <code>.btn</code>:
                    <ul class="notes-sub-list">
                      <li><code>Button.module.css</code> compiles to: <code>._btn_button_8x1</code></li>
                      <li><code>Header.module.css</code> compiles to: <code>._btn_header_9q2</code></li>
                      <li><code>Modal.module.css</code> compiles to: <code>._btn_modal_4f7</code></li>
                    </ul>
                  </li>
                  <li>When <code>Header.jsx</code> binds <code>className={styles.btn}</code>, it is impossible for styles from <code>Button.module.css</code> to leak in because the DOM element receives the unique hash <code>_btn_header_9q2</code>.</li>
                </ul>
              </li>
              <li><strong>Industry Perspective (Why Teams Transition to Tailwind CSS):</strong>
                <ul class="notes-sub-list">
                  <li>While CSS Modules completely solve collision problems, developers still experience <strong>context-switching fatigue</strong> (jumping between <code>.jsx</code> and <code>.module.css</code>) and <strong>naming fatigue</strong> (thinking up names for every single wrapper and container).</li>
                  <li>Modern production React teams largely prefer <strong>Tailwind CSS</strong> (utility-first) or component primitives for higher developer velocity and design-system consistency.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 17.2 · CSS Collision Immunity: Isolated Hashed Identifiers Across Components</span>
                <span class="diagram-frame-tag">LEXICAL SCOPING & ENCAPSULATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing Button and Header using identical .btn class name compiling to two distinct unique hashes without collision">
                  <!-- Button Component Scope -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="170" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="100" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">BUTTON SCOPE</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Button.module.css (.btn)</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="25" y="96" class="svg-mono-xs">Rule: .btn { background: royalblue; }</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">Hash: ._btn_btnScope_a1</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--success);">✓ Scoped strictly to &lt;Button /&gt;</text>
                    <text x="25" y="154" class="svg-sub">Cannot affect any other component in tree</text>
                  </g>

                  <!-- Header Component Scope -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="170" height="22" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                    <text x="100" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">HEADER SCOPE</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Header.module.css (.btn)</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="96" class="svg-mono-xs">Rule: .btn { background: transparent; }</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Hash: ._btn_hdrScope_x9</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--success);">✓ Scoped strictly to &lt;Header /&gt;</text>
                    <text x="25" y="154" class="svg-sub">Zero namespace pollution · 100% scoped</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 18: WHAT IS TAILWIND CSS? (UTILITY-FIRST VS. BOOTSTRAP)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-18-what-is-tailwind-css",
      number: "18",
      shortLabel: "Tailwind CSS Fundamentals",
      title: "What Is Tailwind CSS? (Utility-First Library vs. Bootstrap)",
      summary: "Utility-first design paradigm, utility classes vs component libraries, the Bootstrap comparison, and Tailwind v3 vs v4 architecture differences.",
      subtopicLabels: ["18.1 Utility-First vs Component Library", "18.2 Tailwind vs Bootstrap", "18.3 Tailwind v3 vs v4 Architecture"],
      diagramCount: 2,
      sections: [
        {
          num: "18.1",
          title: "Utility-First Library vs. Component Library",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Is Tailwind CSS?</strong>
                <ul class="notes-sub-list">
                  <li><strong>Tailwind CSS</strong> is a <strong>Utility-First CSS framework</strong>. Rather than providing pre-packaged UI widgets, it provides thousands of single-responsibility, low-level utility classes directly inside your JSX:
                    <pre class="notes-code-block"><code>&lt;div className="h-screen w-full bg-gray-900 flex items-center justify-center"&gt;
  &lt;h1 className="text-3xl font-bold text-white tracking-wide"&gt;OneNightRevise&lt;/h1&gt;
&lt;/div&gt;</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>Utility-First Library vs. Component Library:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Utility-First Library (Tailwind CSS):</strong> Provides primitive styling classes (<code>p-4</code>, <code>bg-red-600</code>, <code>rounded-xl</code>). You retain complete freedom to architect bespoke designs rapidly without ever writing a custom CSS file or inventing class names like <code>.card-container-wrapper</code>.</li>
                  <li><strong>Component Library (MUI, Bootstrap, Chakra):</strong> Ships pre-built, opinions-included components (like a complete <code>&lt;Button /&gt;</code>, <code>&lt;Modal /&gt;</code>, or <code>&lt;Navbar /&gt;</code>). Customizing them often requires fighting high-specificity overrides. <strong>Tailwind CSS is NOT a component library.</strong></li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "18.2",
          title: "Why Tailwind Over Bootstrap",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Paradigm Shift (Moving Beyond Bootstrap):</strong>
                <ul class="notes-sub-list">
                  <li>Bootstrap was built in 2011 for an earlier generation of the web. Sites built with default Bootstrap classes look rigid, identical, and unmistakably dated.</li>
                  <li>Overriding Bootstrap components requires aggressive specificity hacks and <code>!important</code> tags.</li>
                  <li><strong>Tailwind CSS</strong> has become the modern industry standard for React frontends because it allows engineering teams to construct pixel-perfect, custom design systems directly inside component markup with zero dead CSS in production.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 18.1 · Frontend Styling Evolution: Traditional CSS vs. Bootstrap vs. Tailwind CSS</span>
                <span class="diagram-frame-tag">PARADIGM EVOLUTION & DEVELOPER VELOCITY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing evolution from Vanilla CSS to Bootstrap to Tailwind utility-first CSS">
                  <!-- Vanilla CSS -->
                  <g transform="translate(20, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="130" y="28" text-anchor="middle" class="svg-kicker">2010s · MANUAL</text>
                    <text x="130" y="52" text-anchor="middle" class="svg-title">Vanilla / Separate CSS</text>
                    <rect x="15" y="66" width="230" height="105" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs">• Heavy context switching</text>
                    <text x="25" y="106" class="svg-mono-xs">• Class naming exhaustion</text>
                    <text x="25" y="124" class="svg-mono-xs">• Unused CSS deadweight</text>
                    <text x="25" y="146" class="svg-mono-xs" style="fill:var(--danger);">Velocity: Low</text>
                  </g>

                  <!-- Bootstrap -->
                  <g transform="translate(310, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                    <text x="130" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2014s · OPINIONATED</text>
                    <text x="130" y="52" text-anchor="middle" class="svg-title">Bootstrap Components</text>
                    <rect x="15" y="66" width="230" height="105" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="88" class="svg-mono-xs">• Pre-built UI widgets</text>
                    <text x="25" y="106" class="svg-mono-xs">• Identical generic aesthetics</text>
                    <text x="25" y="124" class="svg-mono-xs">• Painful custom overrides</text>
                    <text x="25" y="146" class="svg-mono-xs" style="fill:var(--accent);">Flexibility: Rigid</text>
                  </g>

                  <!-- Tailwind CSS -->
                  <g transform="translate(600, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="130" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">MODERN STANDARD ✓</text>
                    <text x="130" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Tailwind Utility-First</text>
                    <rect x="15" y="66" width="230" height="105" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="88" class="svg-mono-xs">• Co-located atomic classes</text>
                    <text x="25" y="106" class="svg-mono-xs">• 100% custom design freedom</text>
                    <text x="25" y="124" class="svg-mono-xs">• Zero dead CSS (Purged)</text>
                    <text x="25" y="146" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Velocity: Lightning Fast</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "18.3",
          title: "Tailwind Version Architecture (v3 vs. v4)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Tailwind v3 vs. Tailwind v4 Architectural Changes:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Tailwind v3:</strong> Depended on PostCSS, requiring multiple config files (<code>tailwind.config.js</code>, <code>postcss.config.js</code>) and explicit <code>content: [...]</code> glob arrays to scan templates.</li>
                  <li><strong>Tailwind v4 (Modern Standard):</strong> Completely rewritten from scratch using a high-performance Rust engine (**Lightning CSS**). It features a dedicated Vite plugin (<code>@tailwindcss/vite</code>), requires zero configuration files by default, and starts up to 10× faster.</li>
                </ul>
              </li>
              <li><strong>Senior Developer Note:</strong> When reading older tutorials online, be aware that setup instructions differ between v3 and v4. Always refer to the official <code>tailwindcss.com</code> v4 documentation for modern Vite projects.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 18.2 · Build Engine Evolution: Tailwind v3 (PostCSS) vs. Tailwind v4 (Lightning CSS)</span>
                <span class="diagram-frame-tag">COMPILATION ENGINE BENCHMARK</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting Tailwind v3 PostCSS setup with modern Tailwind v4 Lightning CSS engine">
                  <!-- Tailwind v3 -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="200" y="28" text-anchor="middle" class="svg-kicker">LEGACY ENGINE</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">Tailwind CSS v3 (JavaScript/PostCSS)</text>

                    <rect x="15" y="66" width="365" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs">• Requires tailwind.config & postcss</text>
                    <text x="25" y="106" class="svg-mono-xs">• Manual content globs configuration</text>
                    <text x="25" y="124" class="svg-mono-xs">• JavaScript-based template scanner</text>
                    <text x="25" y="144" class="svg-mono-xs" style="fill:var(--text-muted);">Build Speed: Standard (~300ms HMR)</text>
                  </g>

                  <!-- Tailwind v4 -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="200" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">MODERN RUST ENGINE ✓</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Tailwind CSS v4 (Lightning CSS)</text>

                    <rect x="15" y="66" width="365" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="88" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• Zero config files needed by default</text>
                    <text x="25" y="106" class="svg-mono-xs">• Native Vite plugin: @tailwindcss/vite</text>
                    <text x="25" y="124" class="svg-mono-xs">• Lightning CSS (Rust compiler) built-in</text>
                    <text x="25" y="144" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Build Speed: Sub-millisecond (10x Faster)</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 19: INSTALLING & CONFIGURING TAILWIND CSS (V4) WITH REACT + VITE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-19-install-configure-tailwind-v4",
      number: "19",
      shortLabel: "Tailwind v4 Setup with Vite",
      title: "Installing & Configuring Tailwind CSS (v4) With React + Vite",
      summary: "4-step modern Vite setup (@tailwindcss/vite), preventing the fatal vite.config.js overwrite trap, Tailwind IntelliSense, and h-screen viewport sizing.",
      subtopicLabels: ["19.1 Four-Step Setup Guide", "19.2 Fatal vite.config.js Mistake", "19.3 Tooling & Production Tips"],
      diagramCount: 2,
      sections: [
        {
          num: "19.1",
          title: "Four-Step Setup Guide (Using Vite)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The 4-Step Production Setup for React + Vite:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Step 1 · Install Packages:</strong> Run the modern v4 installer in your project directory:
                    <pre class="notes-code-block"><code>npm install tailwindcss @tailwindcss/vite</code></pre>
                  </li>
                  <li><strong>Step 2 · Configure <code>vite.config.js</code>:</strong> Import the Vite plugin and include it in your <code>plugins</code> array:
                    <pre class="notes-code-block"><code>// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})</code></pre>
                  </li>
                  <li><strong>Step 3 · Import Tailwind in <code>src/index.css</code>:</strong> Clear out starter styles and place this single line at the very top:
                    <pre class="notes-code-block"><code>@import "tailwindcss";</code></pre>
                  </li>
                  <li><strong>Step 4 · Run the Dev Server:</strong> Start your development server:
                    <pre class="notes-code-block"><code>npm run dev</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "19.2",
          title: "Critical Mistake to Avoid in vite.config.js",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Fatal Overwrite Pitfall:</strong>
                <ul class="notes-sub-list">
                  <li>When developers consult the official Tailwind "Using Vite" guide, they often blindly copy the entire <code>vite.config.js</code> code block and replace their existing configuration file.</li>
                  <li><strong>Why This Crashes React:</strong> The generic snippet on the documentation website is tailored for vanilla JavaScript Vite projects—it <strong>does NOT contain <code>@vitejs/plugin-react</code></strong>! Overwriting your file completely removes the React compiler plugin, causing JSX compilation to fail with fatal syntax errors.</li>
                </ul>
              </li>
              <li><strong>The Senior Engineer Rule:</strong>
                <ul class="notes-sub-list">
                  <li>Never replace existing config files blindly. <strong>Merge plugins additively</strong>: preserve <code>react()</code> and append <code>tailwindcss()</code> into the array:
                    <pre class="notes-code-block"><code>plugins: [react(), tailwindcss()]</code></pre>
                  </li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 19.1 · The Fatal vite.config.js Overwrite Trap vs. Additive Plugin Chaining</span>
                <span class="diagram-frame-tag">BUILD CONFIGURATION SAFETY GUARDRAIL</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram contrasting overwriting vite.config.js removing react with proper additive plugin chaining">
                  <!-- Bad: Overwrite -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">FATAL TRAP ❌</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Overwriting vite.config.js</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--danger);">plugins: [tailwindcss()]</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--danger);">⚠ Removed: react() plugin deleted!</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--text-muted);">Result: Vite cannot transpile JSX</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Error: Unexpected token &lt; in App.jsx</text>
                  </g>

                  <!-- Good: Additive -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT PATTERN ✓</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">Additive Plugin Chaining</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">plugins: [react(), tailwindcss()]</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--primary);">✓ react(): Transpiles JSX tags</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--accent);">✓ tailwindcss(): Scans & injects CSS</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Result: Instant HMR with live styles</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "19.3",
          title: "VS Code Tooling & Production Layout Tips",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Install Tailwind CSS IntelliSense:</strong>
                <ul class="notes-sub-list">
                  <li>In VS Code, search for the official extension: <strong>Tailwind CSS IntelliSense</strong>.</li>
                  <li>Provides real-time autocomplete suggestions, CSS color previews, and hover tooltips showing the underlying CSS rule (e.g. hovering over <code>p-4</code> displays <code>padding: 1rem;</code>).</li>
                </ul>
              </li>
              <li><strong>Viewport Layout Tip: <code>h-screen</code> vs. <code>h-full</code>:</strong>
                <ul class="notes-sub-list">
                  <li><code>h-full</code> resolves to <code>height: 100%</code>. In CSS, percentage heights only expand if every ancestor up to <code>&lt;html&gt;</code> has an explicitly declared height.</li>
                  <li>Use <strong><code>h-screen</code></strong> (which maps to <code>height: 100vh</code> or <code>100dvh</code>) on your root container to reliably fill the entire browser viewport:
                    <pre class="notes-code-block"><code>&lt;div className="h-screen w-full bg-neutral-950 text-white flex flex-col"&gt;
  &lt;Navbar /&gt;
  &lt;MainFeed /&gt;
&lt;/div&gt;</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>The Senior Path to Frontend Mastery:</strong>
                <ul class="notes-sub-list">
                  <li>To bridge the gap between learner and job-ready frontend engineer, stop writing static HTML/CSS mockups. Build production-grade interfaces by synthesizing <strong>Component Architecture + Props Data Flow + Tailwind Utility Design</strong>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 19.2 · Full-Stack React + Tailwind v4 Dev Execution Loop</span>
                <span class="diagram-frame-tag">DEVELOPER WORKFLOW & PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing the developer workflow from writing Tailwind classes in JSX to Lightning CSS compile to instant browser HMR">
                  <!-- Step 1: JSX with Tailwind -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="90" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">1 · JSX MARKUP</text>
                    <text x="90" y="52" text-anchor="middle" class="svg-title">App.jsx</text>
                    <rect x="15" y="66" width="150" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs">&lt;div</text>
                    <text x="30" y="106" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">className=</text>
                    <text x="30" y="124" class="svg-mono-xs" style="fill:var(--accent);">"h-screen p-4"</text>
                  </g>

                  <!-- Arrow 1 -> 2 -->
                  <g transform="translate(210, 90)">
                    <line x1="0" y1="10" x2="30" y2="10" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="30,6 38,10 30,14" fill="var(--primary)"/>
                    <text x="18" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">Scan</text>
                  </g>

                  <!-- Step 2: Lightning CSS Compiler -->
                  <g transform="translate(255, 25)">
                    <rect x="0" y="0" width="190" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="95" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2 · LIGHTNING CSS</text>
                    <text x="95" y="52" text-anchor="middle" class="svg-title">Rust Engine</text>
                    <rect x="15" y="66" width="160" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="92" class="svg-mono-xs">On-Demand JIT</text>
                    <text x="25" y="112" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Generates CSS in 2ms</text>
                    <text x="25" y="128" class="svg-sub">Purges unused rules</text>
                  </g>

                  <!-- Arrow 2 -> 3 -->
                  <g transform="translate(450, 90)">
                    <line x1="0" y1="10" x2="30" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="30,6 38,10 30,14" fill="var(--accent)"/>
                    <text x="18" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--accent);">Vite HMR</text>
                  </g>

                  <!-- Step 3: Vite Dev Server -->
                  <g transform="translate(485, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="90" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">3 · DEV SERVER</text>
                    <text x="90" y="52" text-anchor="middle" class="svg-title">localhost:5173</text>
                    <rect x="15" y="66" width="150" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">WebSocket Push</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--primary);">Hot Replacement</text>
                    <text x="25" y="128" class="svg-sub">Zero page reload</text>
                  </g>

                  <!-- Arrow 3 -> 4 -->
                  <g transform="translate(670, 90)">
                    <line x1="0" y1="10" x2="30" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="30,6 38,10 30,14" fill="var(--success)"/>
                    <text x="18" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">DOM</text>
                  </g>

                  <!-- Step 4: Rendered Browser -->
                  <g transform="translate(705, 25)">
                    <rect x="0" y="0" width="150" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="75" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">4 · LIVE UI</text>
                    <text x="75" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Targeted Render</text>
                    <rect x="12" y="66" width="126" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="75" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Pixel-Perfect</text>
                    <text x="75" y="116" text-anchor="middle" class="svg-mono-xs">Full Viewport</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 20: COMPONENT ARCHITECTURE: FEATURE-BASED VS. ATOMIC DESIGN
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-20-component-architecture-feature-vs-atomic",
      number: "20",
      shortLabel: "Feature-Based vs Atomic Design",
      title: "Component-Based Architecture (Feature-Based vs. Atomic Design)",
      summary: "Modern banking UI case study (07-ui-project), clean App.jsx orchestration, Feature-Based vs. Atomic Design methodologies, and decomposing complex component trees.",
      subtopicLabels: ["20.1 Digital Banking UI Setup", "20.2 Feature vs Atomic Structure", "20.3 Component Tree Decomposition"],
      diagramCount: 2,
      sections: [
        {
          num: "20.1",
          title: "Project Setup & Goal (07-ui-project — Digital Banking UI)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Project Bootstrap & Tech Stack:</strong>
                <ul class="notes-sub-list">
                  <li>Initialize a clean Vite + React application (<code>07-ui-project</code>), install Tailwind CSS v4 (<code>tailwindcss</code> + <code>@tailwindcss/vite</code>), configure <code>vite.config.js</code>, and add <code>@import "tailwindcss";</code> in <code>src/index.css</code>.</li>
                  <li><strong>What We Are Building:</strong> A production-grade <strong>Digital Banking & Customer Segmentation Platform</strong> featuring a responsive top navbar, left-aligned hero callouts with action arrows, and a right-aligned horizontally scrollable card carousel (<em>"Satisfied"</em>, <em>"Underserved"</em>, <em>"Underbanked"</em>).</li>
                </ul>
              </li>
              <li><strong>The Golden Rule for <code>App.jsx</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Never dump hundreds of lines of UI markup directly into <code>App.jsx</code>.</li>
                  <li><code>App.jsx</code> serves solely as a <strong>top-level layout coordinator</strong> that imports and organizes dedicated section components.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "20.2",
          title: "Feature-Based Structure vs. Atomic Structure",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>1. Feature-Based Architecture:</strong>
                <ul class="notes-sub-list">
                  <li>Decomposes your codebase into components aligned with <strong>domain features or UI sections</strong>.</li>
                  <li><strong>Examples:</strong> The <code>Navbar</code> is one self-contained feature, <code>HeroSection</code> is a feature, <code>CustomerCarousel</code> is a feature, and <code>Footer</code> is a feature. Sub-components live within their respective feature folders.</li>
                  <li><strong>Best For:</strong> Complex web apps, dashboards, and multi-team codebases where engineers own specific functional domains.</li>
                </ul>
              </li>
              <li><strong>2. Atomic Design Methodology:</strong>
                <ul class="notes-sub-list">
                  <li>Decomposes UI into a hierarchy of granular physical units:
                    <ul class="notes-sub-list">
                      <li><strong>Atoms:</strong> Basic building blocks (<code>Button</code>, <code>Input</code>, <code>Icon</code>, <code>Badge</code>).</li>
                      <li><strong>Molecules:</strong> Combinations of atoms (<code>SearchBar</code> = Input + Button).</li>
                      <li><strong>Organisms:</strong> Distinct UI sections assembled from molecules (<code>Navbar</code>).</li>
                      <li><strong>Templates & Pages:</strong> Full-page layouts binding data to organisms.</li>
                    </ul>
                  </li>
                  <li><strong>Best For:</strong> Centralized design systems and shared cross-company UI component libraries.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 20.1 · UI Architecture Patterns: Feature-Based Structure vs. Atomic Design</span>
                <span class="diagram-frame-tag">DESIGN PATTERN COMPARISON</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram contrasting Feature-Based Structure with Atomic Design">
                  <!-- Feature-Based Box -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">FEATURE-BASED ARCH</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Domain Section Decomposition</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="25" y="96" class="svg-mono-xs">• Navbar Feature (Logo, Links, Auth)</text>
                    <text x="25" y="116" class="svg-mono-xs">• Hero Feature (Text, Action Arrows)</text>
                    <text x="25" y="136" class="svg-mono-xs">• Customer Carousel (Cards, Details)</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">Best for: High-velocity domain teams</text>
                  </g>

                  <!-- Atomic Structure Box -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="150" height="22" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                    <text x="90" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">ATOMIC DESIGN</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Hierarchical Building Blocks</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="96" class="svg-mono-xs">• Atoms: &lt;Button&gt;, &lt;Heading&gt;, &lt;Icon&gt;</text>
                    <text x="25" y="116" class="svg-mono-xs">• Molecules: SearchBar (Input + Button)</text>
                    <text x="25" y="136" class="svg-mono-xs">• Organisms: Navbar (Assembled UI)</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Best for: Design systems & UI kits</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "20.3",
          title: "Breaking Down the Component Tree (07-ui-project)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Hierarchical Component Decomposition:</strong>
                <ul class="notes-sub-list">
                  <li><strong><code>App.jsx</code>:</strong> Renders top-level structural sections: <code>&lt;Section1 /&gt;</code> and <code>&lt;Section2 /&gt;</code>.</li>
                  <li><strong><code>Section1.jsx</code>:</strong> Combines <code>&lt;Navbar /&gt;</code> and <code>&lt;Page1Content /&gt;</code>.</li>
                  <li><strong><code>Page1Content.jsx</code>:</strong> Horizontally partitions the viewport into <code>&lt;LeftContent /&gt;</code> and <code>&lt;RightContent /&gt;</code>.</li>
                  <li><strong><code>LeftContent.jsx</code>:</strong> Contains <code>&lt;HeroText /&gt;</code> and <code>&lt;Arrow /&gt;</code>.</li>
                  <li><strong><code>RightContent.jsx</code>:</strong> Loops over the customer data array and mounts multiple <code>&lt;RightCard /&gt;</code> instances.</li>
                  <li><strong><code>RightCard.jsx</code>:</strong> Handles card background imagery and renders <code>&lt;RightCardContent /&gt;</code> text overlays.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 20.2 · Production Component Tree Decomposition: Digital Banking UI</span>
                <span class="diagram-frame-tag">COMPONENT HIERARCHY TREE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Hierarchical component tree from App down to Section1, Page1Content, LeftContent, RightContent, RightCard">
                  <!-- Root: App -->
                  <g transform="translate(370, 15)">
                    <rect x="0" y="0" width="140" height="38" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <text x="70" y="24" text-anchor="middle" class="svg-title">&lt;App /&gt;</text>
                  </g>

                  <!-- Down line to Section1 -->
                  <line x1="440" y1="53" x2="440" y2="75" stroke="var(--border)" stroke-width="1.8"/>

                  <!-- Section1 -->
                  <g transform="translate(360, 75)">
                    <rect x="0" y="0" width="160" height="38" rx="8" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <text x="80" y="24" text-anchor="middle" class="svg-title">&lt;Section1 /&gt;</text>
                  </g>

                  <!-- Branches to Navbar and Page1Content -->
                  <path d="M 440 113 L 440 130 L 220 130 L 220 145" fill="none" stroke="var(--border)" stroke-width="1.6"/>
                  <path d="M 440 113 L 440 130 L 640 130 L 640 145" fill="none" stroke="var(--border)" stroke-width="1.6"/>

                  <!-- Navbar -->
                  <g transform="translate(140, 145)">
                    <rect x="0" y="0" width="160" height="38" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="80" y="24" text-anchor="middle" class="svg-mono-xs">&lt;Navbar /&gt;</text>
                  </g>

                  <!-- Page1Content -->
                  <g transform="translate(550, 145)">
                    <rect x="0" y="0" width="180" height="38" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="90" y="24" text-anchor="middle" class="svg-title">&lt;Page1Content /&gt;</text>
                  </g>

                  <!-- Sub-branches under Page1Content -->
                  <path d="M 640 183 L 640 200 L 510 200 L 510 210" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
                  <path d="M 640 183 L 640 200 L 760 200 L 760 210" fill="none" stroke="var(--accent)" stroke-width="1.5"/>

                  <!-- LeftContent -->
                  <g transform="translate(425, 210)">
                    <rect x="0" y="0" width="170" height="24" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="85" y="16" text-anchor="middle" class="svg-mono-xs">&lt;LeftContent /&gt;</text>
                  </g>

                  <!-- RightContent -->
                  <g transform="translate(675, 210)">
                    <rect x="0" y="0" width="170" height="24" rx="4" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="85" y="16" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;RightContent /&gt; (Cards)</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 21: HORIZONTAL SCROLLABLE CARDS, MULTI-LEVEL PROPS & STYLING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-21-horizontal-scroll-props-dynamic-styles",
      number: "21",
      shortLabel: "Horizontal Scroll & Multi-Level Props",
      title: "Horizontal Scrollable Cards, Multi-Level Props & Dynamic Styling",
      summary: "Tailwind horizontal scroll layout (flex-nowrap, shrink-0, overflow-x-auto), multi-tier prop drilling, and dynamic inline styling with debugging workflows.",
      subtopicLabels: ["21.1 Horizontal Scroll Layout", "21.2 Multi-Level Prop Drilling", "21.3 Dynamic Styles & Debugging"],
      diagramCount: 2,
      sections: [
        {
          num: "21.1",
          title: "Building a Horizontally Scrollable Carousel With Tailwind",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Three Essential Flexbox Utility Rules:</strong>
                <ul class="notes-sub-list">
                  <li><strong>1. Prevent Row Wrapping (<code>flex-nowrap</code>):</strong> Standard Flexbox wraps overflow items onto a second line. Use <code>flex flex-nowrap gap-10</code> on the parent to lock all cards into a single horizontal strip.</li>
                  <li><strong>2. Prevent Card Squishing (<code>shrink-0</code>):</strong> By default, Flexbox shrinks children (<code>flex-shrink: 1</code>) to prevent overflow. Adding <strong><code>shrink-0</code></strong> to each card ensures each card retains its full designated width (e.g. <code>w-80</code>).</li>
                  <li><strong>3. Enable Horizontal Scroll (<code>overflow-x-auto</code>):</strong> Add <code>overflow-x-auto</code> to the container so users can swipe horizontally across cards on touch devices or scroll with trackpads.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 21.1 · Flexbox Horizontal Scroll Architecture: flex-nowrap + shrink-0</span>
                <span class="diagram-frame-tag">CSS FLEXBOX CAROUSEL MECHANICS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing Flexbox horizontal scroll container using flex-nowrap, overflow-x-auto, and shrink-0 cards">
                  <!-- Outer Container -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="830" height="180" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="220" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="125" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">overflow-x-auto flex flex-nowrap</text>

                    <!-- Card 1 -->
                    <g transform="translate(20, 50)">
                      <rect x="0" y="0" width="230" height="110" rx="8" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.5"/>
                      <text x="115" y="32" text-anchor="middle" class="svg-title">Card 1: Satisfied</text>
                      <rect x="15" y="48" width="200" height="26" rx="4" fill="var(--bg-canvas)" stroke="var(--border)"/>
                      <text x="115" y="65" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success);">shrink-0 (Fixed Width)</text>
                      <text x="115" y="94" text-anchor="middle" class="svg-sub">Full width preserved ✓</text>
                    </g>

                    <!-- Card 2 -->
                    <g transform="translate(270, 50)">
                      <rect x="0" y="0" width="230" height="110" rx="8" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.5"/>
                      <text x="115" y="32" text-anchor="middle" class="svg-title">Card 2: Underserved</text>
                      <rect x="15" y="48" width="200" height="26" rx="4" fill="var(--bg-canvas)" stroke="var(--border)"/>
                      <text x="115" y="65" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success);">shrink-0 (Fixed Width)</text>
                      <text x="115" y="94" text-anchor="middle" class="svg-sub">Full width preserved ✓</text>
                    </g>

                    <!-- Card 3 -->
                    <g transform="translate(520, 50)">
                      <rect x="0" y="0" width="230" height="110" rx="8" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.5"/>
                      <text x="115" y="32" text-anchor="middle" class="svg-title">Card 3: Underbanked</text>
                      <rect x="15" y="48" width="200" height="26" rx="4" fill="var(--bg-canvas)" stroke="var(--border)"/>
                      <text x="115" y="65" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success);">shrink-0 (Fixed Width)</text>
                      <text x="115" y="94" text-anchor="middle" class="svg-sub">Full width preserved ✓</text>
                    </g>

                    <!-- Peek Arrow -->
                    <text x="795" y="110" text-anchor="middle" class="svg-title" style="fill:var(--accent);">➔</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "21.2",
          title: "Passing Props Down Multiple Component Levels (Prop Drilling)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Prop Forwarding Pipeline:</strong>
                <ul class="notes-sub-list">
                  <li>In real projects, data often lives at the application root (<code>App.jsx</code>) and must travel down multiple component layers:
                    <ul class="notes-sub-list">
                      <li><strong>Level 1 (<code>App</code>):</strong> Holds <code>users</code> array → passes to <code>&lt;Section1 users={users} /&gt;</code>.</li>
                      <li><strong>Level 2 (<code>Section1</code>):</strong> Forwards <code>props.users</code> → <code>&lt;Page1Content users={props.users} /&gt;</code>.</li>
                      <li><strong>Level 3 (<code>Page1Content</code>):</strong> Forwards <code>props.users</code> → <code>&lt;RightContent users={props.users} /&gt;</code>.</li>
                      <li><strong>Level 4 (<code>RightContent</code>):</strong> Maps over array → passes individual fields to <code>&lt;RightCard color={elem.color} ... /&gt;</code>.</li>
                      <li><strong>Level 5 (<code>RightCard</code>):</strong> Forwards props to <code>&lt;RightCardContent color={props.color} /&gt;</code>.</li>
                    </ul>
                  </li>
                  <li><strong>The Architectural Friction:</strong> Passing props through intermediary components that do not need the data themselves is known as <strong>Prop Drilling</strong>—this pattern motivates the use of the React Context API in advanced applications.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 21.2 · Multi-Tier Prop Drilling Pipeline Across Component Generations</span>
                <span class="diagram-frame-tag">UNIDIRECTIONAL PROP CHAIN</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Diagram illustrating prop drilling from App down through Section1, Page1Content, RightContent to RightCard">
                  <!-- Flow from left to right -->
                  <!-- Step 1 -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="140" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="70" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">TIER 1</text>
                    <text x="70" y="52" text-anchor="middle" class="svg-title">App.jsx</text>
                    <rect x="10" y="66" width="120" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="70" y="98" text-anchor="middle" class="svg-mono-xs">users data</text>
                    <text x="70" y="118" text-anchor="middle" class="svg-sub">Origin Source</text>
                  </g>

                  <line x1="170" y1="100" x2="195" y2="100" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="195,96 203,100 195,104" fill="var(--primary)"/>

                  <!-- Step 2 -->
                  <g transform="translate(208, 25)">
                    <rect x="0" y="0" width="140" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="70" y="28" text-anchor="middle" class="svg-kicker">TIER 2</text>
                    <text x="70" y="52" text-anchor="middle" class="svg-title">Section1</text>
                    <rect x="10" y="66" width="120" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="70" y="98" text-anchor="middle" class="svg-mono-xs">props.users</text>
                    <text x="70" y="118" text-anchor="middle" class="svg-sub">Intermediary</text>
                  </g>

                  <line x1="353" y1="100" x2="378" y2="100" stroke="var(--border)" stroke-width="2"/>
                  <polygon points="378,96 386,100 378,104" fill="var(--border)"/>

                  <!-- Step 3 -->
                  <g transform="translate(391, 25)">
                    <rect x="0" y="0" width="140" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="70" y="28" text-anchor="middle" class="svg-kicker">TIER 3</text>
                    <text x="70" y="52" text-anchor="middle" class="svg-title">Page1Content</text>
                    <rect x="10" y="66" width="120" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="70" y="98" text-anchor="middle" class="svg-mono-xs">props.users</text>
                    <text x="70" y="118" text-anchor="middle" class="svg-sub">Pass-through</text>
                  </g>

                  <line x1="536" y1="100" x2="561" y2="100" stroke="var(--accent)" stroke-width="2"/>
                  <polygon points="561,96 569,100 561,104" fill="var(--accent)"/>

                  <!-- Step 4 -->
                  <g transform="translate(574, 25)">
                    <rect x="0" y="0" width="140" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="70" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">TIER 4</text>
                    <text x="70" y="52" text-anchor="middle" class="svg-title">RightContent</text>
                    <rect x="10" y="66" width="120" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="70" y="98" text-anchor="middle" class="svg-mono-xs">.map(elem)</text>
                    <text x="70" y="118" text-anchor="middle" class="svg-sub">Extracts Fields</text>
                  </g>

                  <line x1="719" y1="100" x2="744" y2="100" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="744,96 752,100 744,104" fill="var(--success)"/>

                  <!-- Step 5 -->
                  <g transform="translate(757, 25)">
                    <rect x="0" y="0" width="100" height="150" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="50" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">LEAF</text>
                    <text x="50" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Card</text>
                    <rect x="8" y="66" width="84" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="50" y="98" text-anchor="middle" class="svg-mono-xs">UI Node</text>
                    <text x="50" y="118" text-anchor="middle" class="svg-sub">Renders</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "21.3",
          title: "Dynamic Inline Styles & Debugging undefined Props",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Dynamic Color Binding with the <code>style</code> Attribute:</strong>
                <ul class="notes-sub-list">
                  <li>When CSS values (like custom brand hex codes or theme colors) arrive dynamically via props, apply them using React's inline style object:
                    <pre class="notes-code-block"><code>&lt;button style={{ backgroundColor: props.color }} className="px-4 py-2 rounded-full text-white"&gt;
  Learn More
&lt;/button&gt;</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>How to Debug <code>undefined</code> Props:</strong>
                <ul class="notes-sub-list">
                  <li>If a deeply nested child receives <code>undefined</code>, do not panic. Place a <code>console.log(props.color)</code> at each level of the hierarchy:
                    <ul class="notes-sub-list">
                      <li><code>RightCardContent</code> (shows undefined) → check <code>RightCard</code></li>
                      <li><code>RightCard</code> (shows undefined) → check <code>RightContent</code></li>
                      <li><code>RightContent</code> (shows undefined) → check <code>Page1Content</code></li>
                    </ul>
                  </li>
                  <li>The exact link where the log changes from defined to <code>undefined</code> reveals the missing prop assignment!</li>
                </ul>
              </li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 22: HANDLING EVENTS & CALLING FUNCTIONS IN REACT
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-22-handling-events-functions",
      number: "22",
      shortLabel: "Event Handling & Functions",
      title: "Handling Events & Calling Functions in React",
      summary: "Vanilla JS addEventListener vs. React synthetic event props, function reference vs. immediate function execution, and passing arguments via wrapper arrow functions.",
      subtopicLabels: ["22.1 Vanilla JS vs React Events", "22.2 Reference vs Immediate Call", "22.3 Passing Arguments via Arrow Functions"],
      diagramCount: 2,
      sections: [
        {
          num: "22.1",
          title: "Vanilla JS addEventListener vs. React Event Props (onClick)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Imperative Vanilla JS Way:</strong>
                <ul class="notes-sub-list">
                  <li>In traditional JavaScript, you first find the DOM node with <code>document.querySelector('button')</code>, then manually register a listener with <code>btn.addEventListener('click', handler)</code>.</li>
                  <li>This imperative approach creates detached listener management and memory leak risks when elements unmount.</li>
                </ul>
              </li>
              <li><strong>The Declarative React Way:</strong>
                <ul class="notes-sub-list">
                  <li>React eliminates <code>document.querySelector</code> completely. You attach event listeners directly onto the JSX element using camelCase attributes:
                    <pre class="notes-code-block"><code>function App() {
  function btnClicked() {
    console.log('Button was clicked!');
  }

  return &lt;button onClick={btnClicked}&gt;Click Here&lt;/button&gt;;
}</code></pre>
                  </li>
                  <li>Under the hood, React uses a centralized <strong>SyntheticEvent</strong> delegator attached to the root container for maximum performance.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 22.1 · Event Delegation: Imperative DOM Listeners vs. React Synthetic Events</span>
                <span class="diagram-frame-tag">EVENT DISPATCHING ARCHITECTURE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting manual addEventListener on individual DOM nodes with React declarative onClick synthetic event">
                  <!-- Vanilla JS -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="200" y="28" text-anchor="middle" class="svg-kicker">IMPERATIVE JAVASCRIPT</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">document.addEventListener()</text>

                    <rect x="15" y="66" width="365" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="88" class="svg-mono-xs">const btn = document.querySelector('button');</text>
                    <text x="25" y="108" class="svg-mono-xs">btn.addEventListener('click', handleClick);</text>
                    <text x="25" y="130" class="svg-mono-xs" style="fill:var(--danger);">• Direct node attachment</text>
                    <text x="25" y="148" class="svg-mono-xs" style="fill:var(--text-muted);">• Manual cleanup needed on unmount</text>
                  </g>

                  <!-- React JSX -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="200" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">DECLARATIVE REACT ✓</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">SyntheticEvent Props (onClick)</text>

                    <rect x="15" y="66" width="365" height="95" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="88" class="svg-mono-xs">&lt;button onClick={handleClick}&gt;Click&lt;/button&gt;</text>
                    <text x="25" y="110" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• Declarative & co-located in JSX</text>
                    <text x="25" y="130" class="svg-mono-xs" style="fill:var(--primary);">• Root event delegation (Fast)</text>
                    <text x="25" y="148" class="svg-mono-xs" style="fill:var(--success);">• Automatic memory garbage collection</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "22.2",
          title: "Function Reference vs. Function Call (Critical Rule)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Number One Beginner React Mistake:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Correct (Passing Reference):</strong> <code>&lt;button onClick={btnClicked}&gt;</code></li>
                  <li><strong>Fatal Bug (Immediate Invocation):</strong> <code>&lt;button onClick={btnClicked()}&gt;</code></li>
                </ul>
              </li>
              <li><strong>Why <code>onClick={btnClicked()}</code> Breaks:</strong>
                <ul class="notes-sub-list">
                  <li>Adding parentheses <code>()</code> executes the JavaScript function <strong>immediately during component render</strong> before the user touches anything!</li>
                  <li>Whatever value the function returns (usually <code>undefined</code>) is assigned to <code>onClick</code>. When the user later clicks the button, nothing happens because <code>onClick={undefined}</code>!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 22.2 · Execution Timing: Function Reference vs. Immediate Execution</span>
                <span class="diagram-frame-tag">EXECUTION TIMING GUARDRAIL</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting incorrect immediate execution onClick={fn()} with correct reference passing onClick={fn}">
                  <!-- Bad: Immediate Call -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="80" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">FATAL MISTAKE ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">onClick={btnClicked()}</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Executes immediately on initial render!</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text-muted);">Runs before user ever clicks</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--danger);">Leaves onClick bound to undefined</text>
                  </g>

                  <!-- Good: Function Reference -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="80" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT PATTERN ✓</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">onClick={btnClicked}</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Passes function reference (idle)</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text);">Waits completely idle until click occurs</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--success);">Runs on-demand when clicked ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "22.3",
          title: "Passing Arguments Using an Inline Wrapper Arrow Function",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Dilemma:</strong> How do you pass arguments to your event handler (like <code>deleteUser(user.id)</code>) without invoking it immediately?</li>
              <li><strong>The Solution — Wrap with an Anonymous Arrow Function:</strong>
                <pre class="notes-code-block"><code>// WRONG: Fires immediately on render
&lt;button onClick={deleteUser(user.id)}&gt;Delete&lt;/button&gt;

// CORRECT: Wrapped in an arrow function
&lt;button onClick={() => deleteUser(user.id)}&gt;Delete&lt;/button&gt;</code></pre>
              </li>
              <li>Because <code>deleteUser(user.id)</code> sits inside the arrow function's body, JavaScript does not execute it during render. It executes strictly when the user clicks the button!</li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 23: WORKING WITH INPUT EVENTS (ONCHANGE) & SCROLL WHEEL (ONWHEEL)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-23-input-change-wheel-events",
      number: "23",
      shortLabel: "Input & Wheel Events",
      title: "Working With Input Events (onChange) & Scroll Wheel Events (onWheel)",
      summary: "Capturing user typing with onChange and SyntheticEvent e.target.value, detecting scroll direction and velocity with onWheel and deltaY.",
      subtopicLabels: ["23.1 Reading Input with onChange", "23.2 Scroll Direction with onWheel", "23.3 Interactive Event Patterns"],
      diagramCount: 2,
      sections: [
        {
          num: "23.1",
          title: "Reading Live Input Values With onChange & elem.target.value",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Listening to Keystrokes in Real Time:</strong>
                <ul class="notes-sub-list">
                  <li>Attach <code>onChange</code> to an <code>&lt;input&gt;</code> element to run a handler function on every single character typed or deleted:
                    <pre class="notes-code-block"><code>function App() {
  function inputChanging(val) {
    console.log('User typed:', val);
  }

  return (
    &lt;input
      type="text"
      placeholder="Type something..."
      onChange={(elem) => inputChanging(elem.target.value)}
      className="border p-2 rounded bg-neutral-900 text-white"
    /&gt;
  );
}</code></pre>
                  </li>
                  <li><strong>The Event Target Object:</strong> React passes a <code>SyntheticEvent</code> object into your callback. The <code>elem.target.value</code> property provides the exact real-time string inside the input field (e.g. typing <em>"sarthak"</em> logs <em>s</em>, <em>sa</em>, <em>sar</em>, <em>sart</em>, <em>sarth</em>, <em>sartha</em>, <em>sarthak</em>).</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 23.1 · Live Input Stream: Keystroke to SyntheticEvent Pipeline</span>
                <span class="diagram-frame-tag">REAL-TIME INPUT DISPATCH</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Diagram showing user keystrokes firing onChange and extracting e.target.value into handler">
                  <!-- Step 1: User Types -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">1 · USER KEYSTROKE</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">Keyboard Input</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">Types: "sarthak"</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-sub">Triggers raw DOM input</text>
                  </g>

                  <!-- Arrow 1 -> 2 -->
                  <g transform="translate(260, 90)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--primary)"/>
                    <text x="20" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--primary);">onChange</text>
                  </g>

                  <!-- Step 2: SyntheticEvent -->
                  <g transform="translate(315, 25)">
                    <rect x="0" y="0" width="250" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="125" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2 · REACT SYNTHETIC EVENT</text>
                    <text x="125" y="52" text-anchor="middle" class="svg-title">Event Object Interception</text>
                    <rect x="15" y="66" width="220" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="125" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">e.target.value</text>
                    <text x="125" y="114" text-anchor="middle" class="svg-sub">Extracts live string value</text>
                  </g>

                  <!-- Arrow 2 -> 3 -->
                  <g transform="translate(575, 90)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--success)"/>
                    <text x="20" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Passes val</text>
                  </g>

                  <!-- Step 3: Function Handler -->
                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">3 · HANDLER EXECUTION</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">inputChanging(val)</text>
                    <rect x="15" y="66" width="200" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="115" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">console.log(val)</text>
                    <text x="115" y="115" text-anchor="middle" class="svg-sub">Logs each keystroke ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "23.2",
          title: "Detecting Scroll Direction & Speed With onWheel & elem.deltaY",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Tracking Mouse Wheel Movements:</strong>
                <ul class="notes-sub-list">
                  <li>React provides the <strong><code>onWheel</code></strong> listener for containers to capture trackpad and mouse-wheel events:
                    <pre class="notes-code-block"><code>&lt;div onWheel={(e) => pageScrolling(e.deltaY)} className="h-screen w-full"&gt;
  Scroll over this canvas
&lt;/div&gt;</code></pre>
                  </li>
                </ul>
              </li>
              <li><strong>Decoding <code>elem.deltaY</code> (Direction & Velocity):</strong>
                <ul class="notes-sub-list">
                  <li><strong>Positive (<code>deltaY &gt; 0</code>):</strong> User is scrolling <strong>downwards / forward</strong> (<em>seedha</em> scroll).</li>
                  <li><strong>Negative (<code>deltaY &lt; 0</code>):</strong> User is scrolling <strong>upwards / backward</strong> (<em>ulta</em> scroll).</li>
                  <li><strong>Magnitude (Speed):</strong> Gentle scrolling produces small numbers near <code>0</code>, while rapid gestures produce large values (e.g. <code>+100</code> or <code>-100</code>).</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 23.2 · Mouse Wheel Vector Analysis: onWheel & deltaY Polarity</span>
                <span class="diagram-frame-tag">WHEEL GESTURE TELEMETRY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing onWheel deltaY polarity: deltaY greater than 0 means downward scrolling, deltaY less than 0 means upward scrolling">
                  <!-- Downward Scroll -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">SCROLL DOWNWARD</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title">deltaY &gt; 0 (Positive Value)</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">Direction: Forward / Down</text>
                    <text x="25" y="114" class="svg-mono-xs">Example values: +15, +50, +120</text>
                    <text x="25" y="134" class="svg-sub">Reveal next section, shrink navbar</text>
                  </g>

                  <!-- Upward Scroll -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="20" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                    <text x="95" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">SCROLL UPWARD</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title">deltaY &lt; 0 (Negative Value)</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Direction: Backward / Up</text>
                    <text x="25" y="114" class="svg-mono-xs">Example values: -15, -50, -120</text>
                    <text x="25" y="134" class="svg-sub">Reveal floating header, back to top</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "23.3",
          title: "Interactive Event Patterns Summary",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Three Core React Function Execution Patterns:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Pattern 1 · Direct Function Reference:</strong> <code>onClick={handleClick}</code> — best for zero-argument handlers.</li>
                  <li><strong>Pattern 2 · Inline Wrapper Arrow Function:</strong> <code>onClick={() => deleteItem(item.id)}</code> — mandatory when passing custom arguments.</li>
                  <li><strong>Pattern 3 · Event Data Pass-through:</strong> <code>onChange={(e) => updateSearch(e.target.value)}</code> — essential for extracting form inputs and telemetry.</li>
                </ul>
              </li>
              <li><strong>Senior Engineering Foundation:</strong> Master these three core invocation patterns thoroughly before diving into React Hooks, as all interactive state updates in modern React build directly on top of them.</li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 24: WHAT IS STATE & INTRODUCTION TO THE USESTATE HOOK
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-24-what-is-state-usestate-intro",
      number: "24",
      shortLabel: "State & useState Intro",
      title: "What Is State & Introduction to the useState Hook",
      summary: "Understanding UI state transitions, why standard variables fail to trigger re-renders, useState hook fundamentals, and the counter app implementation.",
      subtopicLabels: ["24.1 Understanding State", "24.2 Variables vs useState", "24.3 Counter App Implementation"],
      diagramCount: 2,
      sections: [
        {
          num: "24.1",
          title: "Understanding State With Real-World Examples",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Is Component State?</strong>
                <ul class="notes-sub-list">
                  <li><strong>State</strong> represents the live data or condition held by a component at any given point in time.</li>
                  <li>Whenever that data mutates, React transitions the component from its previous state to a <strong>new visual state</strong> by automatically re-rendering the UI.</li>
                </ul>
              </li>
              <li><strong>Real-World Everyday Examples:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Counter:</strong> A badge showing <code>1</code> is State A; user clicks increase and it shows <code>2</code> (State B).</li>
                  <li><strong>User Profile:</strong> A username showing <code>"Sarthak"</code> updates to <code>"Harsh"</code> after an API fetch.</li>
                  <li><strong>Input Field:</strong> An empty search box is State 1; typing the letter <code>"S"</code> transitions it to State 2.</li>
                  <li><strong>Instagram Feed:</strong> A post's like count updating from <code>26</code> to <code>27</code>, or an unread DM badge jumping from <code>7</code> to <code>8</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 24.1 · Component State Lifecycle: Transitions & Re-rendering</span>
                <span class="diagram-frame-tag">STATE RECONCILIATION LIFECYCLE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing component state transitioning from State A to State B via user action and re-rendering">
                  <!-- State A -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">INITIAL STATE (A)</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">Followers: 26</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs">count = 26</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-sub">Rendered in DOM</text>
                  </g>

                  <!-- User Action Arrow -->
                  <g transform="translate(260, 90)">
                    <line x1="0" y1="10" x2="50" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="50,6 58,10 50,14" fill="var(--accent)"/>
                    <rect x="5" y="-12" width="48" height="18" rx="3" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="29" y="1" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--accent);">Click</text>
                  </g>

                  <!-- React Reconciler -->
                  <g transform="translate(335, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">REACT SCHEDULER</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title">setCount(27)</text>
                    <rect x="15" y="66" width="200" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="115" y="92" text-anchor="middle" class="svg-mono-xs">Detects state change</text>
                    <text x="115" y="112" text-anchor="middle" class="svg-sub">Triggers Virtual DOM diff</text>
                  </g>

                  <!-- Re-render Arrow -->
                  <g transform="translate(580, 90)">
                    <line x1="0" y1="10" x2="50" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="50,6 58,10 50,14" fill="var(--success)"/>
                    <text x="25" y="1" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Patches</text>
                  </g>

                  <!-- State B -->
                  <g transform="translate(645, 25)">
                    <rect x="0" y="0" width="210" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="105" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">NEW STATE (B)</text>
                    <text x="105" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Followers: 27</text>
                    <rect x="15" y="66" width="180" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="105" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">count = 27</text>
                    <text x="105" y="115" text-anchor="middle" class="svg-sub">Surgical DOM update ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "24.2",
          title: "Why We Need useState Instead of Normal Variables",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Failure of Standard JavaScript Variables:</strong>
                <ul class="notes-sub-list">
                  <li>If you create a normal variable (<code>let count = 0</code>) and increment it (<code>count++</code>), the value in JavaScript memory changes, but <strong>React has no mechanism to know about it</strong>.</li>
                  <li>React never schedules a re-render, leaving the browser screen frozen showing the old value!</li>
                </ul>
              </li>
              <li><strong>The Role of <code>useState</code>:</strong>
                <ul class="notes-sub-list">
                  <li><code>useState</code> bridges the gap between memory and screen. When you call the setter function (<code>setCount</code>), it alerts React's reconciliation engine to trigger a fresh render with the updated value.</li>
                  <li><strong>Common Beginner Gotcha:</strong> Calling <code>useState()</code> without importing it from <code>'react'</code> triggers a fatal error: <code>ReferenceError: useState is not defined</code>. Always import:
                    <pre class="notes-code-block"><code>import React, { useState } from 'react';</code></pre>
                  </li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 24.2 · Standard Variables vs. useState: The Re-rendering Engine</span>
                <span class="diagram-frame-tag">ENGINEERING COMPARISON</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting regular variables with useState in React re-rendering">
                  <!-- Normal Variable -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="95" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">NORMAL VARIABLE ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">let count = 0; count++</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Mutates in RAM memory only</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">• React engine is NEVER notified!</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">Result: Screen stays frozen at 0</text>
                  </g>

                  <!-- useState Hook -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="140" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="85" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">USESTATE HOOK ✓</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">const [num, setNum] = useState(0)</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs">• setNum(1) alerts React engine</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• Schedules immediate re-render</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">Result: UI updates instantly to 1 ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "24.3",
          title: "Counter App Implementation (Exact Code)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Three Core Counter Actions:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Increase:</strong> <code>setNum(num + 1)</code></li>
                  <li><strong>Decrease:</strong> <code>setNum(num - 1)</code></li>
                  <li><strong>Jump by 5:</strong> <code>setNum(num + 5)</code></li>
                  <li><strong>Rule:</strong> Never write <code>num++</code> or <code>num = num + 1</code>. Always use the setter function <code>setNum(...)</code>.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }

  function jump5Num() {
    setNum(num + 5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increase by 5</button>
    </div>
  )
}

export default App</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 25: HOW USESTATE WORKS UNDER THE HOOD
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-25-usestate-async-arrays-objects",
      number: "25",
      shortLabel: "useState Async, Arrays & Objects",
      title: "How useState Works Under the Hood (Async Updates, Arrays & Objects)",
      summary: "Asynchronous state setter execution, immutability & the Cameraman Analogy, array updates with spread operator, and object updates with prev callback.",
      subtopicLabels: ["25.1 Asynchronous State Setter", "25.2 Array Updates & Cameraman Analogy", "25.3 Object Updates with prev Callback"],
      diagramCount: 2,
      sections: [
        {
          num: "25.1",
          title: "Asynchronous Behavior of the State Setter (setNum)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Synchronous vs. Asynchronous:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Synchronous:</strong> Code executes strictly sequentially line-by-line, blocking execution until the statement completes.</li>
                  <li><strong>Asynchronous:</strong> Tasks are scheduled in the background, allowing subsequent code to execute immediately without waiting.</li>
                </ul>
              </li>
              <li><strong>The Stale Log Gotcha:</strong>
                <ul class="notes-sub-list">
                  <li>State setters in React run <strong>asynchronously</strong>. When you call <code>setNum(30)</code>, React schedules the update for the next render.</li>
                  <li>If you inspect <code>console.log(num)</code> on the very next line, it <strong>STILL logs the old value (10)</strong> because the current render cycle has not completed!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)

  const btnClicked = () => {
    console.log(num) // logs 10
    setNum(30)
    console.log(num) // STILL logs 10!
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 25.1 · Asynchronous State Setter: Why console.log Reads Stale State</span>
                <span class="diagram-frame-tag">EXECUTION QUEUE TIMELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Timeline showing setNum scheduling state in background while console.log reads old render value">
                  <!-- Step 1 -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">1 · SYNC CALL</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">setNum(30)</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs">Schedules update in RAM</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-sub">Does not block next line</text>
                  </g>

                  <!-- Arrow 1 -> 2 -->
                  <g transform="translate(260, 90)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--primary)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--primary)"/>
                  </g>

                  <!-- Step 2 -->
                  <g transform="translate(315, 25)">
                    <rect x="0" y="0" width="240" height="150" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">2 · IMMEDIATE NEXT LINE</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title" style="fill:var(--danger);">console.log(num)</text>
                    <rect x="15" y="66" width="210" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="120" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">STILL LOGS: 10</text>
                    <text x="120" y="115" text-anchor="middle" class="svg-sub">Current render snapshot</text>
                  </g>

                  <!-- Arrow 2 -> 3 -->
                  <g transform="translate(565, 90)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--success)"/>
                  </g>

                  <!-- Step 3 -->
                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">3 · NEXT RENDER</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">num is now 30</text>
                    <rect x="15" y="66" width="200" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="115" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">UI Displays 30 ✓</text>
                    <text x="115" y="115" text-anchor="middle" class="svg-sub">DOM updated cleanly</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "25.2",
          title: "Updating Arrays in useState (Spread Operator & Cameraman Analogy)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Cameraman Analogy (Why Direct Mutation Fails):</strong>
                <ul class="notes-sub-list">
                  <li>Just as the instructor doesn't walk over to the studio camera to nudge it manually—they ask the cameraman to adjust it—in React, you <strong>never mutate state arrays directly</strong> (e.g. <code>num.push(99)</code>).</li>
                  <li>In JavaScript, arrays are reference types. Mutating an array in-place keeps the <strong>exact same memory address</strong> (<code>oldRef === newRef</code>), so React's diffing engine assumes nothing changed and skips rendering!</li>
                </ul>
              </li>
              <li><strong>The Immutable Pattern (Spread Operator <code>...</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Create a new copy with <code>[...num]</code>, push the item into the copy, and pass the copy to <code>setNum</code>:</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10, 20, 30])

  const btnClicked = () => {
    const newNum = [...num]
    newNum.push(99)
    setNum(newNum) // New memory reference triggers re-render!
  }

  return (
    <div>
      <h1>{num.join(', ')}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App</code></pre>
          `
        },
        {
          num: "25.3",
          title: "Updating Objects in useState (prev Callback Shorthand)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Updating Nested Object Properties Safely:</strong>
                <ul class="notes-sub-list">
                  <li>Just like arrays, modifying an object property directly (<code>num.age = 50</code>) does not trigger a re-render.</li>
                  <li>Use the <strong>functional state updater with spread operator</strong> to copy all existing fields and overwrite only the target key:
                    <pre class="notes-code-block"><code>setNum(prev => ({ ...prev, age: 50 }))</code></pre>
                  </li>
                  <li>This cleanly preserves <code>user: 'Rishi'</code> while immutably setting <code>age: 50</code>.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({ user: 'Rishi', age: 17 })

  const btnClicked = () => {
    setNum(prev => ({ ...prev, age: 50 }))
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 25.2 · Object State Immutability: Shallow Copy & Selective Overwrite</span>
                <span class="diagram-frame-tag">IMMUTABLE OBJECT UPDATE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing prev object spreading properties and selectively overriding age to 50">
                  <!-- Previous Object -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker">PREVIOUS STATE (prev)</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">Original Object</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="90" class="svg-mono-xs">user: 'Rishi'</text>
                    <text x="25" y="112" class="svg-mono-xs" style="fill:var(--text-muted);">age: 17</text>
                  </g>

                  <!-- Spread Arrow -->
                  <g transform="translate(265, 90)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--accent)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--accent)"/>
                    <text x="18" y="2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--accent);">...prev</text>
                  </g>

                  <!-- Spread & Override -->
                  <g transform="translate(320, 25)">
                    <rect x="0" y="0" width="240" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">SHALLOW MERGE</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title">{ ...prev, age: 50 }</text>
                    <rect x="15" y="66" width="210" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="90" class="svg-mono-xs">user preserved: 'Rishi'</text>
                    <text x="25" y="112" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">age overridden: 50</text>
                  </g>

                  <!-- Final State Arrow -->
                  <g transform="translate(575, 90)">
                    <line x1="0" y1="10" x2="35" y2="10" stroke="var(--success)" stroke-width="2"/>
                    <polygon points="35,6 43,10 35,14" fill="var(--success)"/>
                  </g>

                  <!-- New State Object -->
                  <g transform="translate(625, 25)">
                    <rect x="0" y="0" width="225" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="112" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">NEW OBJECT IN MEMORY</text>
                    <text x="112" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">New Reference ✓</text>
                    <rect x="15" y="66" width="195" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="90" class="svg-mono-xs">{ user: 'Rishi',</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">age: 50 }</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 26: BATCH UPDATES IN REACT (NUM + 1 VS. PREV => PREV + 1)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-26-batch-updates-functional-state",
      number: "26",
      shortLabel: "Batch Updates & Functional Setters",
      title: "Batch Updates in React (num + 1 vs. prev => prev + 1)",
      summary: "React automatic batching mechanics, why multiple setNum(num + 1) calls collapse into one, and fixing updates with updater functions (prev => prev + 1).",
      subtopicLabels: ["26.1 Batching Mechanics", "26.2 Functional State Updaters"],
      diagramCount: 2,
      sections: [
        {
          num: "26.1",
          title: "Why Calling setNum(num + 1) Three Times Only Increments by 1",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Batching Puzzle:</strong>
                <ul class="notes-sub-list">
                  <li>If you call <code>setNum(num + 1)</code> three times sequentially inside a single click handler, you might expect <code>10</code> to jump to <code>13</code>.</li>
                  <li><strong>What Actually Happens:</strong> The counter only increments from <strong><code>10</code> to <code>11</code></strong>!</li>
                </ul>
              </li>
              <li><strong>Why This Happens (Automatic Batching):</strong>
                <ul class="notes-sub-list">
                  <li>To prevent excessive layout recalculations, React groups multiple state setter calls into a single batch update.</li>
                  <li>During this render pass, the variable <code>num</code> is still closed over as <code>10</code>. All three statements compute <code>10 + 1 = 11</code> and assign <code>11</code>:</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>const [num, setNum] = useState(10)

const btnClicked = () => {
  setNum(num + 1) // setNum(10 + 1)
  setNum(num + 1) // setNum(10 + 1)
  setNum(num + 1) // setNum(10 + 1)
  // Clicking once updates 10 -> 11 (NOT 13!)
}</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 26.1 · State Batching: Why Triple setNum(num + 1) Collapses</span>
                <span class="diagram-frame-tag">BATCH RENDERING PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing 3 setNum(num + 1) calls reading identical num = 10 and resolving to 11">
                  <!-- Call 1 -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">CALL 1 (SNAPSHOT)</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">setNum(num + 1)</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs">num is captured as 10</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger);">Resolves to: 11</text>
                  </g>

                  <!-- Call 2 -->
                  <g transform="translate(270, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">CALL 2 (SAME SNAPSHOT)</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">setNum(num + 1)</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs">num is STILL 10!</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger);">Resolves to: 11</text>
                  </g>

                  <!-- Call 3 & Result -->
                  <g transform="translate(515, 25)">
                    <rect x="0" y="0" width="340" height="150" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <text x="170" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">CALL 3 & FINAL BATCH VALUE</text>
                    <text x="170" y="52" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Final Resolved Value: 11</text>
                    <rect x="15" y="66" width="310" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="95" class="svg-mono-xs">• All three read initial snapshot 10</text>
                    <text x="25" y="115" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">• Result: Increments 10 → 11 only</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "26.2",
          title: "Fixing Batch Updates With prev => prev + 1",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Solution — Functional State Updaters:</strong>
                <ul class="notes-sub-list">
                  <li>Instead of passing a static value, pass an <strong>updater callback function</strong>: <code>setNum(prev =&gt; prev + 1)</code>.</li>
                  <li>React places these callback functions in a pending execution queue. Each callback receives the <strong>latest resolved value from the previous updater</strong>:
                    <ul class="notes-sub-list">
                      <li>Call 1: receives <code>10</code> → returns <code>11</code></li>
                      <li>Call 2: receives <code>11</code> → returns <code>12</code></li>
                      <li>Call 3: receives <code>12</code> → returns <code>13</code></li>
                    </ul>
                  </li>
                  <li><strong>Result:</strong> Clicking once cleanly jumps <strong><code>10 -&gt; 13</code></strong>!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)

  const btnClicked = () => {
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
    // Clicking once updates 10 -> 13!
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 26.2 · Functional Updater Queue: How prev Chaining Increments State</span>
                <span class="diagram-frame-tag">FUNCTIONAL QUEUE CHAIN</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Queue showing prev chaining from 10 to 11 to 12 to 13">
                  <!-- Start -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="160" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="80" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">INITIAL</text>
                    <text x="80" y="52" text-anchor="middle" class="svg-title">num = 10</text>
                    <rect x="15" y="66" width="130" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="80" y="105" text-anchor="middle" class="svg-mono-xs">Base State</text>
                  </g>

                  <line x1="195" y1="100" x2="225" y2="100" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="225,96 233,100 225,104" fill="var(--primary)"/>

                  <!-- Step 1 -->
                  <g transform="translate(240, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="90" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">QUEUE 1</text>
                    <text x="90" y="52" text-anchor="middle" class="svg-title">prev =&gt; prev + 1</text>
                    <rect x="15" y="66" width="150" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="90" y="94" text-anchor="middle" class="svg-mono-xs">10 + 1</text>
                    <text x="90" y="114" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Passes: 11</text>
                  </g>

                  <line x1="430" y1="100" x2="460" y2="100" stroke="var(--accent)" stroke-width="2"/>
                  <polygon points="460,96 468,100 460,104" fill="var(--accent)"/>

                  <!-- Step 2 -->
                  <g transform="translate(475, 25)">
                    <rect x="0" y="0" width="180" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="90" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">QUEUE 2</text>
                    <text x="90" y="52" text-anchor="middle" class="svg-title">prev =&gt; prev + 1</text>
                    <rect x="15" y="66" width="150" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="90" y="94" text-anchor="middle" class="svg-mono-xs">11 + 1</text>
                    <text x="90" y="114" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Passes: 12</text>
                  </g>

                  <line x1="665" y1="100" x2="695" y2="100" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="695,96 703,100 695,104" fill="var(--success)"/>

                  <!-- Step 3 Final -->
                  <g transform="translate(710, 25)">
                    <rect x="0" y="0" width="145" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="72" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">FINAL</text>
                    <text x="72" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">num = 13</text>
                    <rect x="10" y="66" width="125" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="72" y="94" text-anchor="middle" class="svg-mono-xs">12 + 1</text>
                    <text x="72" y="114" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Result: 13 ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 27: FORM HANDLING IN REACT (ONSUBMIT & E.PREVENTDEFAULT())
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-27-form-handling-prevent-default",
      number: "27",
      shortLabel: "Form Handling & preventDefault",
      title: "Form Handling in React (onSubmit & e.preventDefault())",
      summary: "Default HTML form POST behavior and page reload flaw, capturing submit events via onSubmit, and keeping the SPA alive with e.preventDefault().",
      subtopicLabels: ["27.1 The Page Reload Problem", "27.2 Preventing Reloads with e.preventDefault()"],
      diagramCount: 2,
      sections: [
        {
          num: "27.1",
          title: "Default Form Submission Behavior (The Page Reload Problem)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Traditional Browser Form Submission Behavior:</strong>
                <ul class="notes-sub-list">
                  <li>In standard HTML, submitting a <code>&lt;form&gt;</code> instructs the browser to bundle all form inputs and trigger an HTTP request, resulting in a <strong>hard page reload</strong>.</li>
                  <li>In a Single Page Application (SPA) built with React, hard page reloads destroy the entire in-memory state tree and wipe the browser console in a fraction of a millisecond!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 27.1 · Default HTML Form Submission: Full Page Reload Flaw</span>
                <span class="diagram-frame-tag">BROWSER DEFAULT BEHAVIOR</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing default HTML form submission triggering full page reload and wiping SPA state">
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="95" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">DEFAULT BROWSER FORM ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Hard Page Reload Triggered</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Browser refreshes the entire page</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">• React in-memory state is wiped out!</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">• Console logs flash and disappear</text>
                  </g>

                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <rect x="15" y="15" width="150" height="20" rx="4" fill="var(--border)"/>
                    <text x="90" y="29" text-anchor="middle" class="svg-mono-xs">DESIRED SPA FLOW</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title">Single Page Preservation</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Keep browser on current page</text>
                    <text x="25" y="114" class="svg-mono-xs">• Process form inputs in JavaScript</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--success);">• Retain all existing component state</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "27.2",
          title: "Preventing Reload With e.preventDefault() (Exact Code)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Solution — <code>e.preventDefault()</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Attach <code>onSubmit={(e) => submitHandler(e)}</code> directly onto the <code>&lt;form&gt;</code> tag.</li>
                  <li>In the first line of your handler function, call <strong><code>e.preventDefault()</code></strong>. This cancels the browser's default document reload while keeping your event listener active.</li>
                  <li><strong>Senior Gotcha:</strong> Ensure exact camelCase spelling: <code>e.preventDefault()</code>. A typo here causes the reload to slip through.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 27.2 · React SPA Form Submission: Intercepting with e.preventDefault()</span>
                <span class="diagram-frame-tag">EVENT INTERCEPTION PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing e.preventDefault cancelling default navigation and processing data in React state">
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">1 · SUBMIT EVENT</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">&lt;form onSubmit&gt;</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs">User clicks Submit</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-sub">SyntheticEvent dispatched</text>
                  </g>

                  <line x1="260" y1="100" x2="295" y2="100" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="295,96 303,100 295,104" fill="var(--primary)"/>

                  <g transform="translate(315, 25)">
                    <rect x="0" y="0" width="240" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="120" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2 · INTERCEPT</text>
                    <text x="120" y="52" text-anchor="middle" class="svg-title">e.preventDefault()</text>
                    <rect x="15" y="66" width="210" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="120" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">Cancels page reload</text>
                    <text x="120" y="114" text-anchor="middle" class="svg-sub">Keeps JavaScript heap alive</text>
                  </g>

                  <line x1="565" y1="100" x2="600" y2="100" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="600,96 608,100 600,104" fill="var(--success)"/>

                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="230" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="115" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">3 · CLIENT PROCESSING</text>
                    <text x="115" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">Seamless SPA Action</text>
                    <rect x="15" y="66" width="200" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="115" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Logs data & saves state</text>
                    <text x="115" y="114" text-anchor="middle" class="svg-sub">Zero page flicker ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 28: TWO-WAY BINDING IN REACT ("EK TEER SE DO NISHANE")
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-28-two-way-binding-controlled-inputs",
      number: "28",
      shortLabel: "Two-Way Binding & Controlled Inputs",
      title: "Two-Way Binding in React (Controlled Inputs: Value & onChange)",
      summary: "The 'Ek Teer Se Do Nishane' analogy, bidirectional sync between state and input (value={title} + onChange), and programmatic input clearing on submit.",
      subtopicLabels: ["28.1 Two-Way Binding Architecture", "28.2 Controlled Input & Auto-Reset Pattern"],
      diagramCount: 2,
      sections: [
        {
          num: "28.1",
          title: "What Is Two-Way Binding & How It Works",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Analogy: "Ek Teer Se Do Nishane" (Dual Control):</strong>
                <ul class="notes-sub-list">
                  <li>In traditional web forms, the DOM input stores its own private text, and React has no real-time awareness of what the user is typing.</li>
                  <li><strong>Two-Way Binding (Controlled Component):</strong> Creates a seamless bidirectional loop between React state and the DOM input element:
                    <ul class="notes-sub-list">
                      <li><strong>Direction 1 (State → Input):</strong> <code>value={title}</code> locks the text displayed in the input to whatever string is stored in the <code>title</code> state variable.</li>
                      <li><strong>Direction 2 (Input → State):</strong> Every keystroke triggers <code>onChange</code>, reads <code>e.target.value</code>, and updates <code>setTitle(e.target.value)</code>.</li>
                    </ul>
                  </li>
                  <li><strong>Why Both Are Mandatory:</strong> If you attach <code>value={title}</code> without <code>onChange</code>, the input box is locked and user keystrokes cannot change anything!</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 28.1 · Controlled Component: The Bidirectional State Loop</span>
                <span class="diagram-frame-tag">BIDIRECTIONAL DATA BINDING</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing bidirectional data binding between React useState and input element">
                  <!-- React State Node -->
                  <g transform="translate(50, 40)">
                    <rect x="0" y="0" width="300" height="150" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="2"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">REACT STATE</text>
                    <text x="150" y="65" text-anchor="middle" class="svg-title">const [title, setTitle]</text>

                    <rect x="15" y="80" width="270" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="150" y="105" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">Single Source of Truth</text>
                    <text x="150" y="122" text-anchor="middle" class="svg-sub">Stores live input text</text>
                  </g>

                  <!-- Top Arrow: State to Input (value={title}) -->
                  <g transform="translate(365, 60)">
                    <line x1="0" y1="10" x2="140" y2="10" stroke="var(--primary)" stroke-width="2.5"/>
                    <polygon points="140,5 150,10 140,15" fill="var(--primary)"/>
                    <rect x="15" y="-14" width="120" height="20" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="75" y="0" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--primary); font-weight:700;">value={title}</text>
                  </g>

                  <!-- Bottom Arrow: Input to State (onChange) -->
                  <g transform="translate(365, 140)">
                    <line x1="150" y1="10" x2="10" y2="10" stroke="var(--accent)" stroke-width="2.5"/>
                    <polygon points="10,5 0,10 10,15" fill="var(--accent)"/>
                    <rect x="15" y="-14" width="120" height="20" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="75" y="0" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--accent); font-weight:700;">onChange={e =&gt; ...}</text>
                  </g>

                  <!-- DOM Input Node -->
                  <g transform="translate(530, 40)">
                    <rect x="0" y="0" width="300" height="150" rx="12" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="2"/>
                    <rect x="15" y="15" width="120" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="75" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">DOM ELEMENT</text>
                    <text x="150" y="65" text-anchor="middle" class="svg-title">&lt;input /&gt; on Page</text>

                    <rect x="15" y="80" width="270" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="150" y="105" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Controlled Component</text>
                    <text x="150" y="122" text-anchor="middle" class="svg-sub">Mirrors state in real time</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "28.2",
          title: "Binding value={title}, onChange & Clearing Input on Submit",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Auto-Reset Feature:</strong>
                <ul class="notes-sub-list">
                  <li>Because React owns the input value, resetting the field after submission is effortless: simply call <strong><code>setTitle('')</code></strong> inside <code>submitHandler</code>.</li>
                  <li>The input box clears instantly on screen with zero DOM querying!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title)

    setTitle('') // Automatically clears input!
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 28.2 · Controlled Input Lifecycle: Keystroke Event vs. Programmatic Clear</span>
                <span class="diagram-frame-tag">CONTROLLED COMPONENT EVENT LIFECYCLE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Controlled input lifecycle showing user typing triggering onChange to state and programmatic clear via setTitle empty string on submit">
                  <!-- Step 1: Keystroke to State -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="255" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="12" width="130" height="18" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="25" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">DIRECTION 1: INPUT → STATE</text>
                    <text x="127" y="50" text-anchor="middle" class="svg-title">User Keystroke</text>
                    <rect x="15" y="64" width="225" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="86" class="svg-mono-xs">1. User types in &lt;input /&gt;</text>
                    <text x="25" y="106" class="svg-mono-xs">2. Fires onChange={(e) =&gt; ...}</text>
                    <text x="25" y="126" class="svg-mono-xs">3. Calls setTitle(e.target.value)</text>
                    <text x="25" y="144" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">→ State updates immediately</text>
                  </g>

                  <!-- Arrow 1: To Controller -->
                  <line x1="280" y1="105" x2="305" y2="105" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="305,101 313,105 305,109" fill="var(--primary)"/>

                  <!-- Step 2: State Controls Input (Single Source of Truth) -->
                  <g transform="translate(315, 20)">
                    <rect x="0" y="0" width="255" height="170" rx="8" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="1.8"/>
                    <text x="127" y="26" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">SINGLE SOURCE OF TRUTH</text>
                    <text x="127" y="50" text-anchor="middle" class="svg-title">React State Controller</text>
                    <rect x="15" y="64" width="225" height="90" rx="6" fill="var(--bg-subsection)" stroke="var(--border)"/>
                    <text x="25" y="86" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">const [title, setTitle] = useState('')</text>
                    <text x="25" y="106" class="svg-mono-xs">&lt;input value={title} /&gt;</text>
                    <text x="25" y="126" class="svg-mono-xs">DOM input NEVER has own state</text>
                    <text x="25" y="144" class="svg-mono-xs" style="fill:var(--text-muted);">Input always reflects {title}</text>
                  </g>

                  <!-- Arrow 2: To Reset -->
                  <line x1="570" y1="105" x2="595" y2="105" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="595,101 603,105 595,109" fill="var(--success)"/>

                  <!-- Step 3: Programmatic Reset -->
                  <g transform="translate(605, 20)">
                    <rect x="0" y="0" width="250" height="170" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="12" width="135" height="18" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="82" y="25" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">FORM SUBMIT &amp; RESET</text>
                    <text x="125" y="50" text-anchor="middle" class="svg-title" style="fill:var(--success);">Auto-Reset Pattern</text>
                    <rect x="15" y="64" width="220" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="86" class="svg-mono-xs">submitHandler(e):</text>
                    <text x="25" y="106" class="svg-mono-xs">• e.preventDefault()</text>
                    <text x="25" y="126" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• setTitle('') // Resets State</text>
                    <text x="25" y="144" class="svg-mono-xs" style="fill:var(--success);">Input clears automatically! ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 29: BUILDING THE NOTES APP — STATE SETUP & ADDING NOTES
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-29-building-notes-app-adding-notes",
      number: "29",
      shortLabel: "Notes App: State & Adding Notes",
      title: "Building the Notes App — State Setup, Two-Way Binding & Adding Notes",
      summary: "Full-stack frontend architecture of 08-notes-app, three useState hooks (title, details, task), immutable note creation with copyTask, and auto-resetting form fields.",
      subtopicLabels: ["29.1 Architecture & State Triad", "29.2 Immutable Note Creation & Reset"],
      diagramCount: 2,
      sections: [
        {
          num: "29.1",
          title: "Project Architecture & Three State Variables (title, details, task)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Mobile-First Responsive Layout:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Left Section (Add Notes Form):</strong> A controlled <code>&lt;form&gt;</code> containing an <code>&lt;input&gt;</code> for heading, a <code>&lt;textarea&gt;</code> for detailed notes, and a submit button.</li>
                  <li><strong>Right Section (Recent Notes Feed):</strong> Separated on desktop screens by <code>lg:border-l-2</code> with a scrollable flexbox container (<code>overflow-auto h-[90%]</code>) displaying sticky-note cards.</li>
                </ul>
              </li>
              <li><strong>The Three Core State Variables:</strong>
                <ul class="notes-sub-list">
                  <li><code>const [title, setTitle] = useState('')</code> → Stores live heading input.</li>
                  <li><code>const [details, setDetails] = useState('')</code> → Stores live textarea body.</li>
                  <li><code>const [task, setTask] = useState([])</code> → Stores the master <strong>Array of Note Objects</strong>: <code>[{ title: '...', details: '...' }]</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 29.1 · Notes App Architecture: Form State to Master Array Stream</span>
                <span class="diagram-frame-tag">APPLICATION STATE TOPOLOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing form inputs feeding into master task array and rendering sticky notes">
                  <!-- Left Form -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="380" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">LEFT: FORM PANEL</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Controlled Input State</text>

                    <rect x="15" y="74" width="350" height="40" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">title: "Revise React State"</text>

                    <rect x="15" y="122" width="350" height="40" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="146" class="svg-mono-xs">details: "Finish Topics 24 to 30"</text>
                  </g>

                  <!-- Down Arrow / Flow -->
                  <g transform="translate(415, 105)">
                    <line x1="0" y1="10" x2="45" y2="10" stroke="var(--success)" stroke-width="2.5"/>
                    <polygon points="45,5 55,10 45,15" fill="var(--success)"/>
                    <text x="22" y="-2" text-anchor="middle" class="svg-mono-xs" style="font-size:9px; fill:var(--success);">Appends</text>
                  </g>

                  <!-- Right Feed -->
                  <g transform="translate(480, 20)">
                    <rect x="0" y="0" width="375" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">RIGHT: RECENT NOTES</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">task Master Array</text>

                    <rect x="15" y="74" width="345" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">task = [</text>
                    <text x="35" y="116" class="svg-mono-xs">{ title: "...", details: "..." },</text>
                    <text x="35" y="134" class="svg-mono-xs">{ title: "...", details: "..." }</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">]</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "29.2",
          title: "Adding Notes Immutably With copyTask & Resetting Inputs",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The 5-Step Immutable Submission Workflow:</strong>
                <ul class="notes-sub-list">
                  <li><strong>1. <code>e.preventDefault()</code>:</strong> Stops page reload.</li>
                  <li><strong>2. <code>const copyTask = [...task]</code>:</strong> Clones existing array.</li>
                  <li><strong>3. <code>copyTask.push({ title, details })</code>:</strong> Appends new note object.</li>
                  <li><strong>4. <code>setTask(copyTask)</code>:</strong> Saves new array reference to state.</li>
                  <li><strong>5. <code>setTitle('')</code> & <code>setDetails('')</code>:</strong> Clears both inputs automatically via two-way binding.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 29.2 · 5-Step Immutable Note Append Pipeline</span>
                <span class="diagram-frame-tag">MUTATION GUARD PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Diagram showing 5-step immutable note submission pipeline">
                  <!-- Step 1 -->
                  <g transform="translate(25, 25)">
                    <rect x="0" y="0" width="150" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <text x="75" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">STEP 1</text>
                    <text x="75" y="52" text-anchor="middle" class="svg-title">preventDefault()</text>
                    <rect x="10" y="66" width="130" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="75" y="105" text-anchor="middle" class="svg-mono-xs">Stops Reload</text>
                  </g>

                  <line x1="185" y1="100" x2="205" y2="100" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="205,96 213,100 205,104" fill="var(--primary)"/>

                  <!-- Step 2 -->
                  <g transform="translate(218, 25)">
                    <rect x="0" y="0" width="150" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="75" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">STEP 2</text>
                    <text x="75" y="52" text-anchor="middle" class="svg-title">[...task]</text>
                    <rect x="10" y="66" width="130" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="75" y="105" text-anchor="middle" class="svg-mono-xs">Clones Array</text>
                  </g>

                  <line x1="378" y1="100" x2="398" y2="100" stroke="var(--accent)" stroke-width="2"/>
                  <polygon points="398,96 406,100 398,104" fill="var(--accent)"/>

                  <!-- Step 3 -->
                  <g transform="translate(411, 25)">
                    <rect x="0" y="0" width="150" height="150" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="75" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">STEP 3</text>
                    <text x="75" y="52" text-anchor="middle" class="svg-title">copy.push(obj)</text>
                    <rect x="10" y="66" width="130" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="75" y="105" text-anchor="middle" class="svg-mono-xs">Appends Note</text>
                  </g>

                  <line x1="571" y1="100" x2="591" y2="100" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="591,96 599,100 591,104" fill="var(--success)"/>

                  <!-- Step 4 -->
                  <g transform="translate(604, 25)">
                    <rect x="0" y="0" width="130" height="150" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                    <text x="65" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">STEP 4</text>
                    <text x="65" y="52" text-anchor="middle" class="svg-title">setTask(copy)</text>
                    <rect x="8" y="66" width="114" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="65" y="105" text-anchor="middle" class="svg-mono-xs">Triggers Render</text>
                  </g>

                  <line x1="744" y1="100" x2="759" y2="100" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="759,96 767,100 759,104" fill="var(--success)"/>

                  <!-- Step 5 -->
                  <g transform="translate(772, 25)">
                    <rect x="0" y="0" width="85" height="150" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="42" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">STEP 5</text>
                    <text x="42" y="52" text-anchor="middle" class="svg-title">Reset</text>
                    <rect x="6" y="66" width="73" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="42" y="105" text-anchor="middle" class="svg-mono-xs">Clears Input</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 30: RENDERING NOTE CARDS & DELETING NOTES WITH SPLICE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-30-rendering-deleting-notes-splice",
      number: "30",
      shortLabel: "Notes App: Render & Splice Delete",
      title: "Rendering Note Cards & Deleting Notes With .splice(idx, 1)",
      summary: "Mapping notes array to sticky note cards, delete handler with copyTask.splice(idx, 1), lexical variable scoping, and full Notes App production code.",
      subtopicLabels: ["30.1 Deleting Notes with splice(idx, 1)", "30.2 Full Notes App Code & Memory Lifecycle"],
      diagramCount: 2,
      sections: [
        {
          num: "30.1",
          title: "Deleting a Specific Note Using idx & copyTask.splice(idx, 1)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Targeted Deletion via Array Index (<code>idx</code>):</strong>
                <ul class="notes-sub-list">
                  <li>When looping with <code>task.map((elem, idx) =&gt; ...)</code>, attach an arrow function wrapper to the delete button:
                    <pre class="notes-code-block"><code>onClick={() => deleteNote(idx)}</code></pre>
                  </li>
                  <li><strong>Inside <code>deleteNote(idx)</code>:</strong>
                    <ol class="notes-sub-list">
                      <li>Copy the master array: <code>const copyTask = [...task]</code>.</li>
                      <li>Remove exactly 1 item at index <code>idx</code>: <code>copyTask.splice(idx, 1)</code>.</li>
                      <li>Update state: <code>setTask(copyTask)</code>.</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li><strong>Lexical Scope Note:</strong> Reusing the variable name <code>copyTask</code> inside both <code>submitHandler</code> and <code>deleteNote</code> causes zero collisions because each <code>const copyTask</code> is lexically block-scoped to its own function.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 30.1 · Array Deletion: Targeted Splice & State Re-render</span>
                <span class="diagram-frame-tag">DELETION RECONCILIATION FLOW</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram showing delete button clicking with index, splice removing item from copy, and state re-rendering">
                  <!-- User Click -->
                  <g transform="translate(30, 25)">
                    <rect x="0" y="0" width="220" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.6"/>
                    <text x="110" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--danger); font-weight:700;">1 · DELETE TRIGGER</text>
                    <text x="110" y="52" text-anchor="middle" class="svg-title">deleteNote(idx)</text>
                    <rect x="15" y="66" width="190" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="110" y="95" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Target Index: 1</text>
                    <text x="110" y="115" text-anchor="middle" class="svg-sub">Click event receives index</text>
                  </g>

                  <!-- Splice Action -->
                  <g transform="translate(315, 25)">
                    <rect x="0" y="0" width="250" height="150" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                    <text x="125" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">2 · IMMUTABLE SPLICE</text>
                    <text x="125" y="52" text-anchor="middle" class="svg-title">copy.splice(idx, 1)</text>
                    <rect x="15" y="66" width="220" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="125" y="94" text-anchor="middle" class="svg-mono-xs">Removes 1 item at idx</text>
                    <text x="125" y="114" text-anchor="middle" class="svg-sub">New array length: n - 1</text>
                  </g>

                  <!-- Final Re-render -->
                  <g transform="translate(625, 25)">
                    <rect x="0" y="0" width="225" height="150" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <text x="112" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--success); font-weight:700;">3 · STATE UPDATE</text>
                    <text x="112" y="52" text-anchor="middle" class="svg-title" style="fill:var(--success);">setTask(copy)</text>
                    <rect x="15" y="66" width="195" height="65" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="112" y="94" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Target Card Removed</text>
                    <text x="112" y="114" text-anchor="middle" class="svg-sub">Instant surgical patch ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "30.2",
          title: "Complete Notes App Code (App.jsx — Production Logic)",
          content: `
            <pre class="notes-code-block"><code>import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    &lt;div className="h-screen lg:flex bg-black text-white"&gt;
      {/* Left Section: Add Notes Form */}
      &lt;form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      &gt;
        &lt;h1 className="text-4xl mb-2 font-bold"&gt;Add Notes&lt;/h1&gt;

        &lt;input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded bg-neutral-900"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        /&gt;

        &lt;textarea
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded bg-neutral-900"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        /&gt;

        &lt;button className="bg-white active:scale-95 font-medium w-full text-black px-5 py-2 rounded"&gt;
          Add Note
        &lt;/button&gt;
      &lt;/form&gt;

      {/* Right Section: Recent Notes */}
      &lt;div className="lg:w-1/2 lg:border-l-2 p-10"&gt;
        &lt;h1 className="text-4xl font-bold"&gt;Recent Notes&lt;/h1&gt;
        &lt;div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto"&gt;
          {task.map(function (elem, idx) {
            return (
              &lt;div
                key={idx}
                className="flex justify-between flex-col items-start h-52 w-40 rounded-xl text-black pt-6 pb-4 px-4 bg-amber-100 shadow-md"
              &gt;
                &lt;div&gt;
                  &lt;h3 className="leading-tight text-lg font-bold"&gt;{elem.title}&lt;/h3&gt;
                  &lt;p className="mt-2 leading-tight text-xs font-semibold text-gray-700"&gt;
                    {elem.details}
                  &lt;/p&gt;
                &lt;/div&gt;
                &lt;button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className="w-full active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                &gt;
                  Delete
                &lt;/button&gt;
              &lt;/div&gt;
            )
          })}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 30.2 · In-Memory State vs. Browser Persistence (LocalStorage Preview)</span>
                <span class="diagram-frame-tag">STORAGE ARCHITECTURE EVOLUTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Diagram contrasting RAM in-memory state with persistent browser localStorage">
                  <!-- Memory State -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.5"/>
                    <rect x="15" y="15" width="160" height="20" rx="4" fill="var(--border)"/>
                    <text x="95" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">CURRENT: VOLATILE RAM</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title">useState In-Memory Heap</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Notes exist only in JavaScript memory</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--danger);">• Browser reload wipes all added notes</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">State resets to initial useState([])</text>
                  </g>

                  <!-- LocalStorage -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="95" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">NEXT CHAPTER: PERSISTENCE</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Browser localStorage API</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs">• JSON.stringify() saves to disk</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• Survives page reloads & closes ✓</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">Hydrates useState on initial mount</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 31: BROWSER STORAGE — LOCALSTORAGE VS. SESSIONSTORAGE & CORE METHODS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-31-localstorage-vs-sessionstorage",
      number: "31",
      shortLabel: "LocalStorage vs. SessionStorage",
      title: "Browser Storage — LocalStorage vs. SessionStorage & Core Methods",
      summary: "Client-side persistence mechanics, key-value storage lifecycles, SessionStorage ephemeral tabs vs. LocalStorage permanent disk persistence, and the 4 core CRUD methods.",
      subtopicLabels: ["31.1 Storage Lifecycles", "31.2 Core Storage Methods", "31.3 DevTools Inspection"],
      diagramCount: 2,
      sections: [
        {
          num: "31.1",
          title: "LocalStorage vs. SessionStorage: Key Differences",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What Is Client-Side Web Storage?</strong>
                <ul class="notes-sub-list">
                  <li>Both <strong>LocalStorage</strong> and <strong>SessionStorage</strong> are synchronous, sandboxed key-value databases built directly into the browser (via Web Storage API).</li>
                  <li>Storage is scoped per <strong>Origin</strong> (Protocol + Domain + Port). Neither transmits data over HTTP headers like cookies do, giving fast local access up to <strong>5MB - 10MB</strong>.</li>
                </ul>
              </li>
              <li><strong>Storage Lifespan Comparison:</strong>
                <ul class="notes-sub-list">
                  <li><strong>SessionStorage:</strong> Data lives <strong>only for the duration of the browser tab session</strong>. Closing the tab or browser immediately destroys all stored records. Duplicating a tab creates a new isolated copy.</li>
                  <li><strong>LocalStorage:</strong> Data persists <strong>permanently across sessions</strong>. Survives tab closures, browser restarts, and operating system reboots until programmatically cleared or manually wiped by the user.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 31.1 · Browser Client Storage Comparison: LocalStorage vs. SessionStorage Lifecycle</span>
                <span class="diagram-frame-tag">CLIENT PERSISTENCE LIFECYCLE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Comparison between SessionStorage ephemeral lifecycle and LocalStorage permanent disk persistence">
                  <!-- SessionStorage -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="150" height="22" rx="4" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.2"/>
                    <text x="90" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">SESSIONSTORAGE</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--warning);">Ephemeral Tab Memory</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• Active only while tab stays open</text>
                    <text x="25" y="118" class="svg-mono-xs">• Closing tab wipes 100% of data ⚠</text>
                    <text x="25" y="138" class="svg-mono-xs">• Scoped strictly to current window</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Use Case: One-time form wizards</text>
                  </g>

                  <!-- LocalStorage -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">LOCALSTORAGE</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">Permanent Disk Storage</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="98" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• Survives closing tabs &amp; restarts ✓</text>
                    <text x="25" y="118" class="svg-mono-xs">• Shared across all tabs same origin</text>
                    <text x="25" y="138" class="svg-mono-xs">• Capacity: ~5MB - 10MB per origin</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Use Case: Notes, Auth Tokens, Themes</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "31.2",
          title: "The 4 Essential LocalStorage CRUD Methods",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Key-Value String Protocol:</strong> Both the <code>key</code> and the <code>value</code> passed to storage methods <strong>must be strings</strong>.</li>
              <li><strong>The 4 Storage Operations:</strong>
                <ul class="notes-sub-list">
                  <li><strong><code>setItem(key, value)</code>:</strong> Inserts a new key-value pair, or overwrites existing key with new value.</li>
                  <li><strong><code>getItem(key)</code>:</strong> Retrieves the saved string value. If key doesn't exist, returns <code>null</code>.</li>
                  <li><strong><code>removeItem(key)</code>:</strong> Deletes one specific target key without affecting other keys.</li>
                  <li><strong><code>clear()</code>:</strong> Wipes all stored keys for that origin simultaneously.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>// 1. Create / Update (both key &amp; value must be strings)
localStorage.setItem('user', 'Sarthak');

// 2. Read (returns string, or null if key does not exist)
const user = localStorage.getItem('user'); // 'Sarthak'

// 3. Delete a specific key
localStorage.removeItem('user');

// 4. Wipe all keys for this domain
localStorage.clear();

// Note: The identical 4 methods work on sessionStorage:
// sessionStorage.setItem('token', 'xyz123');</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 31.2 · LocalStorage CRUD Operations &amp; DevTools Application Tab Pipeline</span>
                <span class="diagram-frame-tag">STORAGE PROTOCOL INTERFACE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Visual representation of the 4 CRUD operations interacting with the browser LocalStorage store and DevTools inspection">
                  <!-- JS Operations -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="270" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">JS API CALLS</text>
                    <text x="135" y="56" text-anchor="middle" class="svg-title">4 Storage Methods</text>

                    <rect x="15" y="70" width="240" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="92" class="svg-mono-xs">• setItem(key, val)</text>
                    <text x="25" y="112" class="svg-mono-xs">• getItem(key)</text>
                    <text x="25" y="132" class="svg-mono-xs">• removeItem(key)</text>
                    <text x="25" y="152" class="svg-mono-xs">• clear()</text>
                  </g>

                  <!-- Arrow 1 -->
                  <line x1="295" y1="110" x2="325" y2="110" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="325,106 333,110 325,114" fill="var(--primary)"/>

                  <!-- Browser Disk Storage Engine -->
                  <g transform="translate(335, 20)">
                    <rect x="0" y="0" width="250" height="180" rx="10" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="1.8"/>
                    <text x="125" y="28" text-anchor="middle" class="svg-kicker" style="fill:var(--primary); font-weight:700;">ORIGIN ISOLATED STORE</text>
                    <text x="125" y="52" text-anchor="middle" class="svg-title">Key-Value Pairs</text>

                    <rect x="15" y="68" width="220" height="96" rx="6" fill="var(--bg-subsection)" stroke="var(--border)"/>
                    <text x="25" y="92" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">'user' : 'Sarthak'</text>
                    <text x="25" y="112" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">'theme' : 'dark'</text>
                    <text x="25" y="132" class="svg-mono-xs">• 5MB - 10MB Disk Buffer</text>
                    <text x="25" y="150" class="svg-mono-xs" style="fill:var(--text-muted);">Synchronous Disk Access</text>
                  </g>

                  <!-- Arrow 2 -->
                  <line x1="585" y1="110" x2="615" y2="110" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="615,106 623,110 615,114" fill="var(--success)"/>

                  <!-- Chrome DevTools -->
                  <g transform="translate(625, 20)">
                    <rect x="0" y="0" width="230" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">LIVE INSPECTION</text>
                    <text x="115" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Application Tab</text>

                    <rect x="15" y="70" width="200" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs">1. Press F12 / Inspect</text>
                    <text x="25" y="114" class="svg-mono-xs">2. Application tab</text>
                    <text x="25" y="134" class="svg-mono-xs">3. Storage &gt; Local Storage</text>
                    <text x="25" y="152" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">View &amp; Edit Keys Live ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 32: STORING & RETRIEVING OBJECTS/ARRAYS WITH JSON.STRINGIFY & JSON.PARSE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-32-json-stringify-and-parse",
      number: "32",
      shortLabel: "JSON.stringify & parse",
      title: "Storing & Retrieving Objects/Arrays With JSON.stringify & JSON.parse",
      summary: "Solving the [object Object] serialization bottleneck, converting JavaScript memory trees into JSON strings, and rehydrating arrays and objects on application mount.",
      subtopicLabels: ["32.1 The [object Object] Trap", "32.2 Serialization Pipeline", "32.3 Array & Object Hydration"],
      diagramCount: 2,
      sections: [
        {
          num: "32.1",
          title: "The [object Object] Trap (Why Direct Storage Fails)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Underlying Problem:</strong>
                <ul class="notes-sub-list">
                  <li>LocalStorage accepts <strong>only primitive strings</strong> as storage values.</li>
                  <li>When you pass a raw JavaScript object into <code>localStorage.setItem('user', user)</code>, JavaScript implicitly invokes its default string coercion: <code>user.toString()</code>.</li>
                  <li>The default <code>toString()</code> on generic JS objects produces the useless literal string <strong><code>&quot;[object Object]&quot;</code></strong>!</li>
                  <li>All your keys (<code>username</code>, <code>age</code>, <code>city</code>) are permanently lost because the data structure was flattened into an opaque string token.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 32.1 · The [object Object] Serialization Trap vs. JSON Stringification</span>
                <span class="diagram-frame-tag">SERIALIZATION DATA INTEGRITY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Contrast between passing raw object resulting in [object Object] failure vs JSON.stringify saving structured JSON string">
                  <!-- BAD: Implicit toString() -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">INCORRECT WAY ✕</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Direct Object Coercion</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="98" class="svg-mono-xs">localStorage.setItem('user', user)</text>
                    <text x="25" y="118" class="svg-mono-xs">• Implicitly runs: user.toString()</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">• Stored Value: &quot;[object Object]&quot; ✕</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--danger);">Fatal: All properties erased!</text>
                  </g>

                  <!-- GOOD: JSON.stringify -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="120" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="75" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT WAY ✓</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">JSON Serialization</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="98" class="svg-mono-xs">setItem('user', JSON.stringify(user))</text>
                    <text x="25" y="118" class="svg-mono-xs">• Serializes to valid JSON text</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• '{&quot;username&quot;:&quot;Sarthak&quot;,&quot;age&quot;:18}'</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--success);">100% data fidelity preserved ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "32.2",
          title: "Saving & Reading Objects Properly With stringify & parse",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Two-Step Persistence Handshake:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Write Phase (Heap Object → Storage):</strong> Use <strong><code>JSON.stringify(data)</code></strong> to encode your JavaScript object or array into a valid JSON string.</li>
                  <li><strong>Read Phase (Storage → Heap Object):</strong> Use <strong><code>JSON.parse(string)</code></strong> to rehydrate the stored string back into a live JavaScript memory object.</li>
                </ul>
              </li>
              <li><strong>Critical Production Guardrail:</strong> Always safeguard <code>JSON.parse()</code> with fallback initialization (e.g. <code>JSON.parse(localStorage.getItem('tasks')) || []</code>) to prevent parsing <code>null</code> when a user visits the app for the first time.</li>
            </ul>

            <pre class="notes-code-block"><code>// Sample user object in JavaScript memory
const user = {
  username: 'Sarthak',
  age: 18,
  city: 'Bhopal'
};

// 1. SAVE: Convert Object -&gt; JSON string before saving
localStorage.setItem('user', JSON.stringify(user));

// 2. RETRIEVE: Read JSON string and parse back -&gt; JS Object
const storedUser = JSON.parse(localStorage.getItem('user'));

console.log(storedUser.username); // 'Sarthak'
console.log(storedUser.city);     // 'Bhopal'

// Persisting Arrays of Objects (Notes App Tasks pattern):
const tasks = [
  { id: 1, title: 'Learn React State' },
  { id: 2, title: 'Master LocalStorage' }
];

localStorage.setItem('all-tasks', JSON.stringify(tasks));
const loadedTasks = JSON.parse(localStorage.getItem('all-tasks')) || [];</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 32.2 · Bidirectional Object Storage Pipeline: Heap Object ↔ Serialized JSON String</span>
                <span class="diagram-frame-tag">SERIALIZATION DATA PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Bidirectional pipeline showing serialization to JSON string on write and deserialization with parse on read">
                  <!-- JavaScript In-Memory Heap -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">JS IN-MEMORY HEAP</text>
                    <text x="130" y="58" text-anchor="middle" class="svg-title">Live Object / Array</text>

                    <rect x="15" y="74" width="230" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">{</text>
                    <text x="35" y="118" class="svg-mono-xs">  username: &quot;Sarthak&quot;,</text>
                    <text x="35" y="138" class="svg-mono-xs">  age: 18, city: &quot;Bhopal&quot;</text>
                    <text x="25" y="158" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Top Arrow: JSON.stringify() -->
                  <path d="M 295 85 L 435 85" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="435,81 443,85 435,89" fill="var(--primary)"/>
                  <rect x="305" y="62" width="130" height="20" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                  <text x="370" y="76" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">JSON.stringify()</text>

                  <!-- Bottom Arrow: JSON.parse() -->
                  <path d="M 435 155 L 295 155" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="295,151 287,155 295,159" fill="var(--success)"/>
                  <rect x="315" y="160" width="110" height="20" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="370" y="174" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">JSON.parse()</text>

                  <!-- Browser LocalStorage Disk -->
                  <g transform="translate(450, 20)">
                    <rect x="0" y="0" width="405" height="190" rx="10" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">BROWSER LOCALSTORAGE</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">Serialized String Buffer</text>

                    <rect x="15" y="74" width="375" height="100" rx="6" fill="var(--bg-subsection)" stroke="var(--success)"/>
                    <text x="25" y="98" class="svg-mono-xs">Key: &quot;user&quot;</text>
                    <text x="25" y="122" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Val: '{&quot;username&quot;:&quot;Sarthak&quot;,&quot;age&quot;:18}'</text>
                    <text x="25" y="148" class="svg-mono-xs" style="fill:var(--text-muted);">Survives reloads, tabs &amp; laptop restarts</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 33: CALLING APIS WITH FETCH() & ASYNC / AWAIT
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-33-calling-apis-with-fetch-async-await",
      number: "33",
      shortLabel: "APIs With fetch() & async",
      title: "Calling APIs With fetch() & async / await",
      summary: "Client-server API architectures, native fetch() vs. Axios, understanding pending asynchronous promises, and the two-stage await stream handshake.",
      subtopicLabels: ["33.1 fetch vs Axios", "33.2 Sync vs Async Promises", "33.3 Two-Stage await Stream"],
      diagramCount: 2,
      sections: [
        {
          num: "33.1",
          title: "Two Ways to Call APIs in React (fetch vs. axios)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Role of the Frontend:</strong> Real-world frontend applications rarely store master data on the client. The backend server provides REST or GraphQL endpoints (JSON), and the frontend's job is to fetch, transform, and render that data.</li>
              <li><strong>The Two Primary API Tools:</strong>
                <ul class="notes-sub-list">
                  <li><strong><code>fetch()</code>:</strong> Native browser API built into JavaScript. Requires <strong>zero npm packages</strong>, but demands a 2-step async process (HTTP stream handshake + <code>response.json()</code> stream consumption).</li>
                  <li><strong><code>axios</code>:</strong> Popular third-party HTTP client library (<code>npm i axios</code>). Streamlines requests into a <strong>single <code>await</code></strong>, automatically converts JSON responses into objects inside <code>response.data</code>, and offers clean interceptors.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 33.1 · Synchronous JS Call Stack vs. Asynchronous Promise &amp; Event Loop Pipeline</span>
                <span class="diagram-frame-tag">EVENT LOOP &amp; ASYNC HANDSHAKE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Visualizing synchronous JavaScript execution delegating fetch network call to browser Web APIs and resolving via Microtask Queue">
                  <!-- Main Call Stack -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="240" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">JS CALL STACK</text>
                    <text x="120" y="58" text-anchor="middle" class="svg-title">Single Threaded</text>

                    <rect x="15" y="74" width="210" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">1. Runs synchronously</text>
                    <text x="25" y="118" class="svg-mono-xs">2. Calls fetch(url)</text>
                    <text x="25" y="138" class="svg-mono-xs">3. Cannot freeze UI</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">→ Offloads to Web API</text>
                  </g>

                  <!-- Arrow 1 -->
                  <line x1="270" y1="115" x2="305" y2="115" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="305,111 313,115 305,119" fill="var(--primary)"/>

                  <!-- Browser Web API Engine -->
                  <g transform="translate(315, 20)">
                    <rect x="0" y="0" width="250" height="190" rx="10" fill="var(--bg-surface)" stroke="var(--warning)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">BROWSER WEB APIS</text>
                    <text x="125" y="58" text-anchor="middle" class="svg-title" style="fill:var(--warning);">Network Thread</text>

                    <rect x="15" y="74" width="220" height="100" rx="6" fill="var(--bg-subsection)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• Sends HTTP GET to API</text>
                    <text x="25" y="118" class="svg-mono-xs">• Returns Promise: Pending</text>
                    <text x="25" y="138" class="svg-mono-xs">• Waits for network (200ms)</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">→ Resolves to Microtask</text>
                  </g>

                  <!-- Arrow 2 -->
                  <line x1="570" y1="115" x2="605" y2="115" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="605,111 613,115 605,119" fill="var(--success)"/>

                  <!-- Microtask Queue & await resume -->
                  <g transform="translate(615, 20)">
                    <rect x="0" y="0" width="240" height="190" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">MICROTASK QUEUE</text>
                    <text x="120" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">await Resume</text>

                    <rect x="15" y="74" width="210" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="98" class="svg-mono-xs">1. Promise fulfilled ✓</text>
                    <text x="25" y="118" class="svg-mono-xs">2. Event Loop pushes back</text>
                    <text x="25" y="138" class="svg-mono-xs">3. await unpauses code</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">4. response is returned</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "33.2",
          title: "The Two-Stage await Stream in Native fetch()",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Why <code>fetch()</code> Needs <code>await</code> Twice:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Stage 01 (<code>const response = await fetch(url)</code>):</strong> Pauses until the HTTP headers and status code arrive from the remote server (e.g. <code>200 OK</code>). At this point, the response body is still an open, unread network byte stream.</li>
                  <li><strong>Stage 02 (<code>const data = await response.json()</code>):</strong> Reading and parsing that incoming byte stream into a JavaScript JSON object is itself asynchronous. Thus, you must <code>await</code> the stream parser before using the resulting object!</li>
                </ul>
              </li>
              <li><strong>Async Function Requirement:</strong> You cannot use <code>await</code> at top-level within regular functions. The enclosing function must always be marked with the <strong><code>async</code></strong> keyword.</li>
            </ul>

            <pre class="notes-code-block"><code>// The enclosing function must be marked async
const getData = async () => {
  try {
    // 1. First await: Wait for initial HTTP response stream headers
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // 2. Second await: Wait for response body stream to parse into JSON
    const data = await response.json();

    console.log(data); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  } catch (error) {
    console.error('API Fetch failed:', error);
  }
};</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 33.2 · Two-Stage fetch() Pipeline: Network Stream Handshake &amp; JSON Stream Body Parsing</span>
                <span class="diagram-frame-tag">STREAM HANDSHAKE PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 210" class="arch-svg" role="img" aria-label="Two-stage fetch process showing first await resolving HTTP headers and second await consuming response body stream">
                  <!-- Stage 1 -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="380" height="170" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STAGE 1: AWAIT FETCH(URL)</text>
                    <text x="190" y="56" text-anchor="middle" class="svg-title">HTTP Stream Handshake</text>

                    <rect x="15" y="72" width="350" height="82" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Resolves HTTP Status (200 OK)</text>
                    <text x="25" y="114" class="svg-mono-xs">• Reads response headers &amp; metadata</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">• Body is still unread ReadableStream!</text>
                  </g>

                  <!-- Arrow -->
                  <line x1="410" y1="105" x2="465" y2="105" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="465,101 473,105 465,109" fill="var(--success)"/>
                  <text x="440" y="92" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-muted); font-size:10px;">Streams Body</text>

                  <!-- Stage 2 -->
                  <g transform="translate(475, 20)">
                    <rect x="0" y="0" width="380" height="170" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">STAGE 2: AWAIT RES.JSON()</text>
                    <text x="190" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Stream Body Deserialization</text>

                    <rect x="15" y="72" width="350" height="82" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Reads incoming byte stream to end</text>
                    <text x="25" y="114" class="svg-mono-xs">• Parses JSON syntax into JS Object</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">• Returns final JS Object / Array ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 34: CALLING APIS WITH AXIOS (CLEANER & SHORTER METHOD)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-34-calling-apis-with-axios",
      number: "34",
      shortLabel: "APIs With Axios",
      title: "Calling APIs With Axios (Cleaner & Shorter Method)",
      summary: "Installing and leveraging Axios for automatic JSON deserialization, saving HTTP responses into useState arrays, and rendering dynamic API data cards with key props.",
      subtopicLabels: ["34.1 Why Axios Beats fetch", "34.2 Axios State Pipeline", "34.3 Dynamic Rendering & useEffect Teaser"],
      diagramCount: 2,
      sections: [
        {
          num: "34.1",
          title: "Installing Axios & Why It Beats Native fetch()",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Installation &amp; Setup:</strong> Install in your project terminal: <code>npm i axios</code>, then import at the top of your component: <code>import axios from 'axios';</code>.</li>
              <li><strong>Why Developers Prefer Axios Over Native <code>fetch()</code>:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Single <code>await</code> Step:</strong> You only write <code>const response = await axios.get(url)</code>. No second <code>response.json()</code> await is required!</li>
                  <li><strong>Automatic JSON Transformation:</strong> Axios inspects the response headers and automatically deserializes JSON into a clean JavaScript object or array directly on <strong><code>response.data</code></strong>.</li>
                  <li><strong>Automatic Error Rejection:</strong> Unlike <code>fetch()</code> (which considers HTTP <code>404</code> or <code>500</code> as successful promises), Axios automatically throws an error for any status code outside the 2xx range, jumping straight into your <code>catch</code> block.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 34.1 · Native fetch() vs. Axios Execution Pipeline: 2-Stage Stream vs. 1-Stage Auto-Deserialization</span>
                <span class="diagram-frame-tag">HTTP CLIENT ARCHITECTURE COMPARISON</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Comparison showing fetch requiring two await steps vs Axios executing in one await step with response.data ready">
                  <!-- Native fetch() -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">NATIVE FETCH()</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">2-Step Manual Stream Parsing</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">1. const res = await fetch(url)</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">2. const data = await res.json() ⚠</text>
                    <text x="25" y="138" class="svg-mono-xs">• Manual 2-stage stream consumption</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Built-in, but more boilerplate</text>
                  </g>

                  <!-- Axios -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="120" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="75" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">AXIOS LIBRARY</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">1-Step Auto-Deserialization</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="98" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">1. const res = await axios.get(url) ✓</text>
                    <text x="25" y="118" class="svg-mono-xs">• res.data is ALREADY parsed JS data</text>
                    <text x="25" y="138" class="svg-mono-xs">• Zero second await needed</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Cleaner, faster &amp; production standard ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "34.2",
          title: "Fetching & Storing API Data With Axios + useState",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The 3-Step API-to-UI Pattern:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Step 1 (State Initialization):</strong> Create an empty array state: <code>const [data, setData] = useState([]);</code> to hold incoming objects.</li>
                  <li><strong>Step 2 (Data Fetch &amp; State Dispatch):</strong> When triggered, <code>axios.get('https://picsum.photos/v2/list')</code> receives the array of 30 image objects and updates state: <code>setData(response.data)</code>.</li>
                  <li><strong>Step 3 (Re-render &amp; Array Mapping):</strong> React re-renders the component and runs <code>data.map((item, idx) =&gt; ...)</code>, projecting each object dynamically onto UI elements.</li>
                </ul>
              </li>
              <li><strong>Upcoming Chapter Teaser (<code>useEffect</code>):</strong> In this practice example, the API only triggers when the user clicks a button. In production, we usually want data to load <strong>automatically on initial page mount</strong>—which brings us to the fundamental <strong><code>useEffect</code> Hook</strong>!</li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // 1. Initialize empty state array to hold fetched API records
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      // 2. Fetch data with Axios (Lorem Picsum public API)
      const response = await axios.get('https://picsum.photos/v2/list')

      // 3. Save directly into state (response.data is already an array of 30 items)
      setData(response.data)
      console.log('Fetched', response.data.length, 'records')
    } catch (err) {
      console.error('API call failed:', err)
    }
  }

  return (
    &lt;div style={{ padding: '2rem' }}&gt;
      &lt;button onClick={getData}&gt;Get Data&lt;/button&gt;

      {/* 4. Render array items dynamically on screen */}
      &lt;div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}&gt;
        {data.map((elem, idx) =&gt; (
          &lt;div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}&gt;
            &lt;h4&gt;Author: {elem.author}&lt;/h4&gt;
            &lt;img src={elem.download_url} alt={elem.author} width="160" height="100" style={{ objectFit: 'cover' }} /&gt;
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 34.2 · React API State Pipeline: Network Response to State Setter to DOM Card Render</span>
                <span class="diagram-frame-tag">API TO DOM STATE LIFECYCLE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="End to end React pipeline from button click to axios get, state setter dispatch, re-render, and array mapping cards into the DOM">
                  <!-- Step 1: User Click -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STEP 01</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Trigger Action</text>

                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">&lt;button onClick&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs">Fires getData()</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">await axios.get()</text>
                    <text x="25" y="150" class="svg-mono-xs" style="fill:var(--text-muted);">Hits Picsum API</text>
                  </g>

                  <!-- Arrow 1 -->
                  <line x1="205" y1="110" x2="235" y2="110" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="235,106 243,110 235,114" fill="var(--primary)"/>

                  <!-- Step 2: State Dispatch -->
                  <g transform="translate(245, 20)">
                    <rect x="0" y="0" width="200" height="180" rx="10" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STEP 02</text>
                    <text x="100" y="56" text-anchor="middle" class="svg-title">State Mutation</text>

                    <rect x="15" y="70" width="170" height="92" rx="6" fill="var(--bg-subsection)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">setData(res.data)</text>
                    <text x="25" y="114" class="svg-mono-xs">• Array of 30 items</text>
                    <text x="25" y="134" class="svg-mono-xs">• Triggers re-render</text>
                    <text x="25" y="150" class="svg-mono-xs" style="fill:var(--text-muted);">Reconciliation runs</text>
                  </g>

                  <!-- Arrow 2 -->
                  <line x1="445" y1="110" x2="475" y2="110" stroke="var(--primary)" stroke-width="2"/>
                  <polygon points="475,106 483,110 475,114" fill="var(--primary)"/>

                  <!-- Step 3: Array Mapping -->
                  <g transform="translate(485, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STEP 03</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">JSX Projection</text>

                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">data.map(elem =&gt;)</text>
                    <text x="25" y="114" class="svg-mono-xs">• Returns Card JSX</text>
                    <text x="25" y="134" class="svg-mono-xs">• Assigns key={idx}</text>
                    <text x="25" y="150" class="svg-mono-xs" style="fill:var(--text-muted);">30 virtual cards</text>
                  </g>

                  <!-- Arrow 3 -->
                  <line x1="665" y1="110" x2="695" y2="110" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="695,106 703,110 695,114" fill="var(--success)"/>

                  <!-- Step 4: Live DOM Render -->
                  <g transform="translate(705, 20)">
                    <rect x="0" y="0" width="150" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">STEP 04</text>
                    <text x="75" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">DOM Render</text>

                    <rect x="15" y="70" width="120" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Live Screen</text>
                    <text x="25" y="114" class="svg-mono-xs">30 Image Cards</text>
                    <text x="25" y="134" class="svg-mono-xs">Authors &amp; photos</text>
                    <text x="25" y="150" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Rendered ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    }
,
    {
      id: 'react-35',
      number: 35,
      shortLabel: 'React 35',
      title: 'Understanding useEffect (The Road & Truck Analogy)',
      summary: 'Demystifying side effects in React: Why API calls, DOM manipulation, and timers must not execute directly within the component body, and how useEffect offloads non-rendering operations into an asynchronous side stack.',
      subtopicLabels: [
        '35.1 Side Effects & Execution Cost',
        '35.2 The Road & Truck Analogy'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-35-1',
          num: '35.1',
          title: 'What Are Side Effects & Why Running Them Directly Fails',
          content: `
            <p>
              In React, a component's primary responsibility is <strong>pure rendering</strong>: accepting props and state, computing the corresponding JSX structure, and returning a Virtual DOM tree for the browser to display.
            </p>
            <p>
              A <strong>Side Effect</strong> is any operation that reaches outside the pure render cycle to interact with the external environment or mutate external systems. Standard examples include:
            </p>
            <ul>
              <li><strong>Network Requests:</strong> Fetching data from a REST endpoint or GraphQL service via <code>axios</code> or <code>fetch()</code>.</li>
              <li><strong>Direct DOM Mutations:</strong> Setting <code>document.title</code>, manually scrolling the viewport, or interfacing with external canvas libraries.</li>
              <li><strong>Asynchronous Timers:</strong> Setting intervals or timeouts via <code>setInterval</code> or <code>setTimeout</code>.</li>
              <li><strong>Event Subscriptions:</strong> Attaching global listeners to <code>window.addEventListener('resize', ...)</code> or WebSockets.</li>
            </ul>

            <div class="callout-card callout-warning">
              <div class="callout-title">The Danger of Direct Execution Inside the Component Body</div>
              <p>
                If an asynchronous operation (such as an API call or timer) is executed directly in the body of a functional component, it triggers on <strong>every single render</strong>. If that operation updates state, it causes an immediate re-render, creating an <strong>infinite execution loop</strong> that crashes the browser tab and overwhelms backend APIs.
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 35.1 · Main Render Thread vs. Asynchronous Side-Effect Stack</span>
                <span class="diagram-frame-tag">THREAD ARCHITECTURE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Main UI render thread executing Pure JSX vs isolated useEffect queue running after paint">
                  <!-- Main UI Thread -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="150" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="90" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PRIMARY RENDER THREAD</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Pure UI Pipeline (60 FPS Goal)</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">1. Component Function Call: App()</text>
                    <text x="25" y="118" class="svg-mono-xs">2. Compute Virtual DOM &amp; Diffing</text>
                    <text x="25" y="138" class="svg-mono-xs">3. Commit DOM Mutation to Screen</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Synchronous &amp; deterministic ✓</text>
                  </g>

                  <!-- Side-Effect Stack -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">EFFECT TASK QUEUE</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Asynchronous Side Stack</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• API Network Stream (Axios / Fetch)</text>
                    <text x="25" y="118" class="svg-mono-xs">• Subscriptions &amp; Window Event Handlers</text>
                    <text x="25" y="138" class="svg-mono-xs">• Document Title &amp; LocalStorage Sync</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Runs AFTER browser layout paint</text>
                  </g>

                  <!-- Connection Bridge -->
                  <path d="M 425 115 L 455 115" fill="none" stroke="var(--border)" stroke-width="2" stroke-dasharray="4 3"/>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-35-2',
          num: '35.2',
          title: 'The Road & Truck Analogy: Main UI Highway vs. Decoupled Side Stack',
          content: `
            <p>
              To visualize why React introduces <code>useEffect</code>, consider the <strong>Road and Truck Analogy</strong>:
            </p>
            <ul>
              <li><strong>The Highway:</strong> Represents the browser’s render process. It must remain fluid, unobstructed, and fast to maintain a responsive 60 frames per second.</li>
              <li><strong>The Delivery Truck:</strong> Represents React’s main rendering engine. Its sole purpose is delivering and displaying UI pixels on screen without delay.</li>
              <li><strong>The Cargo (Side Effects):</strong> Represents heavyweight, unpredictable asynchronous operations—such as remote API latency, database queries, and timers.</li>
            </ul>
            <p>
              If heavy cargo is loaded directly into the driver’s cabin while the truck is navigating rush hour traffic, the truck stalls, creating a massive traffic jam (frozen UI frames).
            </p>
            <p>
              <strong>The Solution:</strong> <code>useEffect</code> acts as a dedicated <strong>side service lane</strong>. React tells the truck: <em>"Finish delivering the UI pixels to the screen first. Once the road is clear and the user sees the page, I will process the cargo in the side lane."</em>
            </p>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 35.2 · The Highway Bottleneck: Direct Execution vs. Decoupled useEffect Queue</span>
                <span class="diagram-frame-tag">EXECUTION TOPOLOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Visual analogy of direct body execution blocking rendering vs useEffect side-stack isolation">
                  <!-- Anti Pattern -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">UNCONTROLLED EXECUTION</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Direct In-Body Call (Bottleneck)</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">const App = () =&gt; {</text>
                    <text x="35" y="118" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">  axios.get('/api') // ⚠ Runs every render!</text>
                    <text x="35" y="138" class="svg-mono-xs">  setData(...)     // Triggers re-render!</text>
                    <text x="25" y="158" class="svg-mono-xs">} // Result: Infinite Loop &amp; Stalled UI</text>
                  </g>

                  <!-- Production Pattern -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">USEEFFECT SHIELD</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Decoupled Side Lane Execution</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">useEffect(() =&gt; {</text>
                    <text x="35" y="118" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">  axios.get('/api').then(...) // Isolated</text>
                    <text x="25" y="138" class="svg-mono-xs">}, []) // Controlled dependency array</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Zero blocking on primary UI paint</text>
                  </g>
                </svg>
              </div>
            </figure>

            <div class="takeaways-box">
              <div class="takeaways-title">Key Architectural Principles</div>
              <ul>
                <li><strong>Render Purity:</strong> Component bodies must remain pure mathematical functions mapping state/props to JSX.</li>
                <li><strong>Deferred Execution:</strong> <code>useEffect</code> callbacks execute strictly after the browser paints the current frame, ensuring zero input latency for user clicks and keyboard events.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'react-36',
      number: 36,
      shortLabel: 'React 36',
      title: 'The Dependency Array & Lifecycle Execution Patterns',
      summary: 'Mastering the three execution modes of useEffect via the dependency array: Unbounded execution, initial mount only (componentDidMount), and surgical re-execution on state mutation, plus cleanup functions and StrictMode dev behavior.',
      subtopicLabels: [
        '36.1 The 3 Dependency Array Modes',
        '36.2 Practical State-Watching Pattern',
        '36.3 Multiple Hooks, StrictMode & Cleanup'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-36-1',
          num: '36.1',
          title: 'The 3 Execution Modes of useEffect Controlled by Dependencies',
          content: `
            <p>
              The <code>useEffect</code> hook accepts two arguments:
            </p>
            <ol>
              <li><strong>Effect Callback:</strong> The function encapsulating the side-effect logic.</li>
              <li><strong>Dependency Array (Optional):</strong> An array of values (state or props) that React tracks between renders.</li>
            </ol>
            <p>
              The presence and structure of this array determines which of the three lifecycle execution modes React activates:
            </p>

            <div class="table-wrap">
              <table class="notes-table">
                <thead>
                  <tr>
                    <th>Syntax</th>
                    <th>Execution Trigger</th>
                    <th>Lifecycle Equivalent</th>
                    <th>Standard Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>useEffect(fn)</code></td>
                    <td>After <strong>every single render</strong> and state mutation</td>
                    <td><code>componentDidMount</code> + <code>componentDidUpdate</code></td>
                    <td>Global logging, metrics tracking (rarely needed)</td>
                  </tr>
                  <tr>
                    <td><code>useEffect(fn, [])</code></td>
                    <td>Runs <strong>exactly once</strong> when component mounts</td>
                    <td><code>componentDidMount</code></td>
                    <td>Initial API load, WebSocket init, event listener bind</td>
                  </tr>
                  <tr>
                    <td><code>useEffect(fn, [a, b])</code></td>
                    <td>Runs on mount AND when <code>a</code> or <code>b</code> mutates</td>
                    <td>Targeted <code>componentDidUpdate</code></td>
                    <td>Filtered search query, page pagination, id-based fetching</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 36.1 · Dependency Array Execution Matrix (3 Core Modes)</span>
                <span class="diagram-frame-tag">EXECUTION MODES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Visual comparison of the three useEffect dependency array states: no array, empty array, and dependency array">
                  <!-- Mode 1: No Deps -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">MODE 01</text>
                    <text x="130" y="56" text-anchor="middle" class="svg-title">No Array [ ]</text>
                    <rect x="15" y="70" width="230" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">useEffect(() =&gt; {</text>
                    <text x="25" y="114" class="svg-mono-xs">  // Runs every render</text>
                    <text x="25" y="134" class="svg-mono-xs">})</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">Unbounded execution</text>
                  </g>

                  <!-- Mode 2: Empty Array -->
                  <g transform="translate(310, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">MODE 02</text>
                    <text x="130" y="56" text-anchor="middle" class="svg-title">Empty Array [ ]</text>
                    <rect x="15" y="70" width="230" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">useEffect(() =&gt; {</text>
                    <text x="25" y="114" class="svg-mono-xs">  // Initial mount only</text>
                    <text x="25" y="134" class="svg-mono-xs">}, [])</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Mount once ✓</text>
                  </g>

                  <!-- Mode 3: With Dependencies -->
                  <g transform="translate(595, 20)">
                    <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">MODE 03</text>
                    <text x="130" y="56" text-anchor="middle" class="svg-title">Watched [ a, b ]</text>
                    <rect x="15" y="70" width="230" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">useEffect(() =&gt; {</text>
                    <text x="25" y="114" class="svg-mono-xs">  // Mount + 'a' changed</text>
                    <text x="25" y="134" class="svg-mono-xs">}, [a])</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Surgical re-run ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-36-2',
          num: '36.2',
          title: 'Practical State-Watching Implementation',
          content: `
            <p>
              In production, components frequently maintain multiple state variables (e.g., <code>a</code> and <code>b</code>). By passing specific variables into the dependency array, React ignores mutations to other states:
            </p>

            <pre class="notes-code-block"><code>import React, { useEffect, useState } from 'react'

const CounterComparison = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  // Subscribed specifically to 'a'
  // Ignores all changes to 'b' entirely
  useEffect(() => {
    console.log('State a updated to:', a)
  }, [a]) // Dependency array watches 'a' only

  return (
    &lt;div className="p-6 border rounded-lg"&gt;
      &lt;h2&gt;A: {a} | B: {b}&lt;/h2&gt;
      &lt;button onClick={() =&gt; setA(prev =&gt; prev + 1)}&gt;Increment A (Triggers Effect)&lt;/button&gt;
      &lt;button onClick={() =&gt; setB(prev =&gt; prev - 1)}&gt;Decrement B (Zero Effect)&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default CounterComparison</code></pre>
          `
        },
        {
          id: 'react-36-3',
          num: '36.3',
          title: 'Multiple Hooks, StrictMode Double Invocations & Cleanup Functions',
          content: `
            <p>
              To maintain robust applications, senior engineers follow three essential <code>useEffect</code> guidelines:
            </p>
            <ul>
              <li><strong>Separation of Concerns:</strong> You are not restricted to one hook. Split independent concerns into distinct <code>useEffect</code> hooks (e.g., one for user session heartbeat, another for page search query updates).</li>
              <li><strong>Why Does useEffect Run Twice in Dev Mode?</strong> When wrapped with <code>&lt;React.StrictMode&gt;</code> in <code>main.jsx</code>, React intentionally mounts, unmounts, and re-mounts every component during local development to expose memory leaks and missing cleanup functions. In production builds, this double invocation is automatically disabled.</li>
              <li><strong>The Cleanup Function:</strong> When an effect sets up subscriptions, intervals, or WebSocket connections, it must return a cleanup function. React invokes this cleanup before re-running the effect on dependency change and when the component unmounts from the DOM.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 36.2 · Lifecycle Execution &amp; Cleanup Pipeline</span>
                <span class="diagram-frame-tag">LIFECYCLE PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="End to end lifecycle timeline showing initial mount, effect execution, dependency update, cleanup function call, and unmount">
                  <!-- Step 1: Mount -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 1</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Initial Mount</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">1. Component Mount</text>
                    <text x="25" y="114" class="svg-mono-xs">2. DOM Rendered</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">3. Run Effect fn()</text>
                  </g>

                  <!-- Step 2: Delta -->
                  <g transform="translate(245, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 2</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">State Mutation</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">State 'a' changes</text>
                    <text x="25" y="114" class="svg-mono-xs">Re-render executes</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">React flags delta</text>
                  </g>

                  <!-- Step 3: Cleanup -->
                  <g transform="translate(465, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 3</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Run Cleanup</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">return () =&gt; {</text>
                    <text x="35" y="114" class="svg-mono-xs">  cleanOldData()</text>
                    <text x="25" y="134" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Step 4: Re-execution -->
                  <g transform="translate(675, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 4</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Re-Run Effect</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">Effect re-runs</text>
                    <text x="25" y="114" class="svg-mono-xs">with new state</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Memory safe ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },
    {
      id: 'react-37',
      number: 37,
      shortLabel: 'React 37',
      title: 'HTTP Methods, JSON Wire Protocol & Cookie Storage',
      summary: 'Client-server communication fundamentals for frontend engineers: RESTful HTTP verbs (GET, POST, PATCH, DELETE) mapped to Axios methods, JSON wire serialization, and why production authentication relies on browser Cookies over LocalStorage.',
      subtopicLabels: [
        '37.1 HTTP Verbs & Axios Method Mapping',
        '37.2 Cookies vs. LocalStorage for Auth Tokens'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-37-1',
          num: '37.1',
          title: 'How Data Moves Across the Web: HTTP Verbs & Axios Mappings',
          content: `
            <p>
              Modern frontend client applications exchange data with cloud backend microservices using the <strong>HTTP (Hypertext Transfer Protocol)</strong> suite. Information is serialized primarily as <strong>JSON</strong> (JavaScript Object Notation) or occasionally XML.
            </p>
            <p>
              When issuing requests via <strong>Axios</strong>, developers select specific HTTP verbs matching the CRUD (Create, Read, Update, Delete) intent of the operation:
            </p>

            <div class="table-wrap">
              <table class="notes-table">
                <thead>
                  <tr>
                    <th>HTTP Method</th>
                    <th>Axios Signature</th>
                    <th>Operation Intent</th>
                    <th>Payload Body?</th>
                    <th>Idempotent?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>GET</strong></td>
                    <td><code>axios.get(url)</code></td>
                    <td>Read/Retrieve resources from database</td>
                    <td>No (URL Query Strings only)</td>
                    <td>Yes (Repeated calls return identical state)</td>
                  </tr>
                  <tr>
                    <td><strong>POST</strong></td>
                    <td><code>axios.post(url, payload)</code></td>
                    <td>Submit new record / trigger business logic</td>
                    <td>Yes (Request Body: <code>{ user, pass }</code>)</td>
                    <td>No (Repeated calls create duplicate records)</td>
                  </tr>
                  <tr>
                    <td><strong>PATCH</strong></td>
                    <td><code>axios.patch(url, delta)</code></td>
                    <td>Partial update of an existing resource</td>
                    <td>Yes (Only modified fields sent)</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>DELETE</strong></td>
                    <td><code>axios.delete(url)</code></td>
                    <td>Permanently destroy a resource by ID</td>
                    <td>No (Identifier passed in URL)</td>
                    <td>Yes (Deleting an already deleted item has no further side effect)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <pre class="notes-code-block"><code>// Example: Dispatching an authenticated login payload via POST
const handleLogin = async (credentials) =&gt; {
  try {
    const response = await axios.post('https://api.domain.com/v1/auth/login', {
      username: credentials.email,
      password: credentials.password
    })
    console.log('Session established:', response.data)
  } catch (err) {
    console.error('Authentication rejected:', err.response?.data?.message)
  }
}</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 37.1 · Client-Server HTTP Method Architecture</span>
                <span class="diagram-frame-tag">REST TOPOLOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Visual representation of four HTTP methods GET POST PATCH DELETE mapped to their operational intents">
                  <!-- GET -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="55" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="42" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">GET</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Read Resource</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">axios.get('/photos')</text>
                    <text x="25" y="114" class="svg-mono-xs">No body attached</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Cached &amp; Idempotent</text>
                  </g>

                  <!-- POST -->
                  <g transform="translate(245, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="55" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="42" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">POST</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Create Record</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">axios.post('/auth')</text>
                    <text x="25" y="114" class="svg-mono-xs">Payload JSON body</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">Non-Idempotent</text>
                  </g>

                  <!-- PATCH -->
                  <g transform="translate(465, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="60" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="45" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PATCH</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Partial Delta</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">axios.patch('/user')</text>
                    <text x="25" y="114" class="svg-mono-xs">Sends updated fields</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Minimal bandwidth</text>
                  </g>

                  <!-- DELETE -->
                  <g transform="translate(675, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="65" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="47" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DELETE</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Remove Item</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">axios.delete('/card')</text>
                    <text x="25" y="114" class="svg-mono-xs">Resource destroyed</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">Status 204 No Content</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-37-2',
          num: '37.2',
          title: 'Cookies vs. LocalStorage for Production Authentication',
          content: `
            <p>
              In production engineering interviews, a classic question asks: <em>"Where should JWT auth tokens (accessToken, refreshToken) be stored in the client browser?"</em>
            </p>
            <p>
              While beginner tutorials save tokens in <code>localStorage</code>, production applications universally favor <strong>HTTP-Only, Secure Cookies</strong>:
            </p>
            <ul>
              <li><strong>The Vulnerability of LocalStorage:</strong> Any script running on your page (including third-party tracking libraries or compromised npm packages) has direct read access to <code>localStorage.getItem('token')</code>. An attacker injecting malicious JavaScript (Cross-Site Scripting, or XSS) can instantly exfiltrate tokens and hijack user accounts.</li>
              <li><strong>The Security of HttpOnly Cookies:</strong> When a server flags a cookie as <code>HttpOnly; Secure; SameSite=Lax</code>, client-side JavaScript is completely blocked from reading the cookie value (preventing XSS theft). The browser automatically includes the cookie in every outgoing HTTP request header without manual code intervention.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 37.2 · Session Security Topology: HttpOnly Cookies vs. Insecure LocalStorage</span>
                <span class="diagram-frame-tag">SECURITY TOPOLOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Comparison diagram showing how HttpOnly cookies block malicious JavaScript access vs LocalStorage vulnerability to XSS attacks">
                  <!-- LocalStorage (Insecure) -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">LOCALSTORAGE APPROACH</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Client-Readable (XSS Vulnerable)</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• Accessible to ALL client JS: window.localStorage</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">• Vulnerable to third-party script injection (XSS)</text>
                    <text x="25" y="138" class="svg-mono-xs">• Requires manual 'Authorization: Bearer' headers</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Convenient for prototypes, unsafe for production</text>
                  </g>

                  <!-- HttpOnly Cookies (Secure) -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">HTTPONLY COOKIE APPROACH</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Browser-Enforced (Production Standard)</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">• JavaScript CANNOT read token (XSS immune) ✓</text>
                    <text x="25" y="118" class="svg-mono-xs">• Browser automatically attaches to matching domain</text>
                    <text x="25" y="138" class="svg-mono-xs">• Protected via SameSite=Lax &amp; Secure HTTPS flags</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Industry standard for enterprise session auth</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },
    {
      id: 'react-38',
      number: 38,
      shortLabel: 'React 38',
      title: 'Building the Gallery App (useEffect + Axios + Pagination)',
      summary: 'Architecting a real-world asynchronous Photo Gallery in Vite + Tailwind CSS: Managing dual state (userData and index), wiring declarative re-fetching with useEffect([index]), boundary guarding, and comparing page pagination with infinite scroll streams.',
      subtopicLabels: [
        '38.1 Project Architecture & Setup',
        '38.2 Core State & Fetching Logic (App.jsx)',
        '38.3 Defensive State Clearing & Boundary Guards',
        '38.4 Production Concept: Infinite Scrolling Streams'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-38-1',
          num: '38.1',
          title: 'Project Setup & Architectural Flow',
          content: `
            <p>
              In this hands-on project, we combine <strong>React State</strong>, <strong>Axios</strong>, and <strong>useEffect</strong> to engineer a paginated Photo Gallery consuming the Lorem Picsum public REST API:
            </p>
            <pre class="notes-code-block"><code>npm create vite@latest 08-gallery-app -- --template react
cd 08-gallery-app
npm install axios</code></pre>
            <p>
              The application dynamically interpolates the current page number into the query string using JavaScript template literals:
            </p>
            <pre class="notes-code-block"><code>'https://picsum.photos/v2/list?page=' + index + '&amp;limit=15'</code></pre>
          `
        },
        {
          id: 'react-38-2',
          num: '38.2',
          title: 'Complete Application Source Code (App.jsx)',
          content: `
            <pre class="notes-code-block"><code>import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  // 1. Dual Reactive State Engine
  const [userData, setUserData] = useState([]) // Stores fetched photo objects
  const [index, setIndex] = useState(1)        // Current page counter (starts at 1)

  // 2. Asynchronous API Service Function
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://picsum.photos/v2/list?page=' + index + '&limit=15'
      )
      setUserData(response.data) // Hydrate state array
    } catch (err) {
      console.error('Failed to load gallery assets:', err)
    }
  }

  // 3. Declarative Effect Trigger
  // Runs once on mount AND automatically re-runs whenever 'index' mutates
  useEffect(() => {
    getData()
  }, [index])

  // 4. Fallback / Loading UI Indicator
  let printUserData = &lt;h3 className="text-gray-400 font-mono"&gt;Loading Gallery Assets...&lt;/h3&gt;

  // 5. Array Mapping for Visual Card Grid
  if (userData.length &gt; 0) {
    printUserData = userData.map((item) =&gt; {
      return (
        &lt;div key={item.id} className="gallery-card rounded-lg overflow-hidden border shadow-sm"&gt;
          &lt;a href={item.url} target="_blank" rel="noreferrer"&gt;
            &lt;img 
              src={item.download_url} 
              alt={item.author} 
              className="w-full h-48 object-cover" 
            /&gt;
            &lt;div className="p-3"&gt;
              &lt;h4 className="font-semibold text-sm"&gt;{item.author}&lt;/h4&gt;
            &lt;/div&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      )
    })
  }

  return (
    &lt;div className="max-w-6xl mx-auto p-6"&gt;
      &lt;h1 className="text-3xl font-bold mb-6"&gt;Engineering Gallery&lt;/h1&gt;

      {/* Gallery Cards Grid */}
      &lt;div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"&gt;
        {printUserData}
      &lt;/div&gt;

      {/* Pagination Controller */}
      &lt;div className="flex items-center justify-center gap-6"&gt;
        &lt;button
          disabled={index === 1}
          style={{ opacity: index === 1 ? 0.4 : 1 }}
          onClick={() =&gt; {
            if (index &gt; 1) {
              setUserData([])      // Purge stale photos to expose fallback state
              setIndex(prev =&gt; prev - 1) // Decrement page (triggers useEffect)
            }
          }}
          className="px-5 py-2 border rounded font-mono"
        &gt;
          Prev Page
        &lt;/button&gt;

        &lt;span className="font-mono font-bold"&gt;Page {index}&lt;/span&gt;

        &lt;button
          onClick={() =&gt; {
            setUserData([])      // Purge stale photos
            setIndex(prev =&gt; prev + 1) // Increment page (triggers useEffect)
          }}
          className="px-5 py-2 border rounded font-mono"
        &gt;
          Next Page
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 38.1 · Paginated Gallery Reactive Engine</span>
                <span class="diagram-frame-tag">REACTIVE PIPELINE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="End to end reactive data pipeline showing user click, page index state mutation, useEffect trigger, Axios GET response, and DOM grid reconciliation">
                  <!-- Step 1: User Click -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 01</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Click 'Next'</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">setIndex(index + 1)</text>
                    <text x="25" y="114" class="svg-mono-xs">setUserData([])</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">Purges stale UI</text>
                  </g>

                  <!-- Step 2: Reactive Effect -->
                  <g transform="translate(245, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 02</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Effect Fires</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">useEffect([index])</text>
                    <text x="25" y="114" class="svg-mono-xs">Detects index: 1-&gt;2</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Calls getData() ✓</text>
                  </g>

                  <!-- Step 3: Axios Query -->
                  <g transform="translate(465, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 03</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Axios Stream</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">GET ?page=2&amp;limit=15</text>
                    <text x="25" y="114" class="svg-mono-xs">Awaits JSON array</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">15 Photo Objects</text>
                  </g>

                  <!-- Step 4: DOM Grid Paint -->
                  <g transform="translate(675, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="70" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 04</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Grid Paint</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">setUserData(data)</text>
                    <text x="25" y="114" class="svg-mono-xs">Virtual DOM diff</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">15 Cards Rendered ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-38-3',
          num: '38.3',
          title: 'Defensive State Clearing & Boundary Guard Patterns',
          content: `
            <p>
              Two critical engineering patterns are implemented in this gallery architecture:
            </p>
            <ul>
              <li><strong>Immediate State Clearing (<code>setUserData([])</code>):</strong> When switching pages over a high-latency network connection, stale cards from the previous page might linger on screen for 1–2 seconds before new cards arrive. Resetting the array immediately on click forces the component into its fallback state (<code>"Loading Gallery Assets..."</code>), preventing visual dissonance.</li>
              <li><strong>Boundary Guard (<code>if (index &gt; 1)</code>):</strong> Prevents invalid API requests (such as <code>page=0</code> or <code>page=-1</code>). Combining logic guards with the HTML <code>disabled={index === 1}</code> attribute and reduced opacity creates accessible, error-free navigation.</li>
            </ul>
          `
        },
        {
          id: 'react-38-4',
          num: '38.4',
          title: 'Production Concept: Discrete Pagination vs. Infinite Scrolling',
          content: `
            <p>
              In modern applications, content feeds (Instagram, Twitter, YouTube) utilize <strong>Infinite Scrolling</strong> rather than manual pagination buttons:
            </p>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 38.2 · Discrete Pagination vs. Continuous Infinite Scroll Architecture</span>
                <span class="diagram-frame-tag">STREAM COMPARISON</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Comparison diagram showing Discrete Page Navigation replacing state array vs Infinite Scrolling appending items via Intersection Observer">
                  <!-- Discrete Pagination -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DISCRETE PAGINATION</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Page-by-Page State Replacement</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• Controlled via explicit Prev / Next buttons</text>
                    <text x="25" y="118" class="svg-mono-xs">• Overwrites state: setUserData(newPageItems)</text>
                    <text x="25" y="138" class="svg-mono-xs">• Memory constant: exactly 15 items in DOM</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Ideal for data tables &amp; administrative panels ✓</text>
                  </g>

                  <!-- Infinite Scrolling -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">INFINITE STREAMING</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Intersection Observer Accumulation</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• Triggered when user scrolls to bottom sentinel</text>
                    <text x="25" y="118" class="svg-mono-xs">• Appends state: setUserData([...prev, ...next])</text>
                    <text x="25" y="138" class="svg-mono-xs">• Growing DOM footprint (requires virtual list)</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Standard for social media &amp; media feeds ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    }
,
    {
      id: 'react-39',
      number: 39,
      shortLabel: 'React 39',
      title: 'React Router DOM Basics & Single Page Applications (SPA)',
      summary: 'Architecting modern Single Page Applications (SPAs): How client-side routing eliminates full-page browser reloads, setting up BrowserRouter, Routes, and Route matching, and why <Link> replaces the traditional HTML <a> tag.',
      subtopicLabels: [
        '39.1 Single Page Application Architecture',
        '39.2 Core Setup: BrowserRouter, Routes & Wildcard 404',
        '39.3 Link Component vs. Traditional Anchor Tag'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-39-1',
          num: '39.1',
          title: 'What Is a Single Page Application (SPA)?',
          content: `
            <p>
              In traditional <strong>Multi-Page Applications (MPAs)</strong>, every user navigation link triggers a complete round-trip network request to a web server. The browser discards its entire in-memory JavaScript heap, tears down the existing DOM, flashes a blank white screen, and parses an entirely new HTML document.
            </p>
            <p>
              In a <strong>Single Page Application (SPA)</strong> built with React, the browser loads a single lightweight HTML shell (<code>index.html</code>) once. As the user navigates, a client-side router intercepts URL changes, updates the browser's <code>window.history</code> stack, and surgically mounts/unmounts components inside the existing Virtual DOM <strong>without reloading the web page</strong>.
            </p>
            <p>
              <strong>React Router DOM</strong> is the enterprise standard library for implementing declarative, component-based client-side routing in React:
            </p>
            <pre class="notes-code-block"><code>npm install react-router-dom</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 39.1 · Multi-Page Application (MPA) vs. Single Page Application (SPA)</span>
                <span class="diagram-frame-tag">ROUTING ARCHITECTURE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Comparison between Multi-Page Applications requesting full HTML reloads vs Single Page Applications swapping components in Virtual DOM">
                  <!-- MPA -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">TRADITIONAL MPA (&lt;a href&gt;)</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Full Document Teardown</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">• User clicks &lt;a href="/about"&gt;</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">• Full HTTP document fetch + white flash</text>
                    <text x="25" y="138" class="svg-mono-xs">• Memory wiped: all React state lost</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Slow network round-trips for static shells</text>
                  </g>

                  <!-- SPA -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">REACT SPA (&lt;Link to&gt;)</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Client-Side Virtual DOM Swap</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">• Intercepts click: pushState(null, '', '/about') ✓</text>
                    <text x="25" y="118" class="svg-mono-xs">• Zero browser reload / zero white screen</text>
                    <text x="25" y="138" class="svg-mono-xs">• In-memory state &amp; caches preserved</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Instant component mounting &amp; 60fps UX</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-39-2',
          num: '39.2',
          title: 'Core Setup: BrowserRouter, Routes & Wildcard 404 Routes',
          content: `
            <p>
              Configuring client-side routing requires three foundational components working in concert:
            </p>
            <ol>
              <li><strong><code>&lt;BrowserRouter&gt;</code>:</strong> The root context provider that connects your React application to the browser's HTML5 History API. It must wrap the entire component tree in <code>main.jsx</code>.</li>
              <li><strong><code>&lt;Routes&gt;</code>:</strong> The smart container placed inside <code>App.jsx</code> that inspects the current URL pathname and renders the best single matching child <code>&lt;Route&gt;</code>.</li>
              <li><strong><code>&lt;Route&gt;</code>:</strong> Defines the mapping between a specific URL path (e.g., <code>path="/product"</code>) and the component element to mount (<code>element={&lt;Product /&gt;}</code>).</li>
              <li><strong>Wildcard Route (<code>path="*"</code>):</strong> Catches all unmatched paths and serves a custom 404 Not Found fallback view.</li>
            </ol>

            <pre class="notes-code-block"><code>// 1. main.jsx (Root Provider Initialization)
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // BrowserRouter synchronizes UI with browser History API
  &lt;BrowserRouter&gt;
    &lt;App /&gt;
  &lt;/BrowserRouter&gt;
)</code></pre>

            <pre class="notes-code-block"><code>// 2. App.jsx (Route Matching Table)
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    &lt;div className="app-container"&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
        &lt;Route path="/product" element={&lt;Product /&gt;} /&gt;
        {/* Wildcard path catches any unregistered route */}
        &lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/div&gt;
  )
}

export default App</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 39.2 · React Router DOM Tree Hierarchy &amp; Path Matching</span>
                <span class="diagram-frame-tag">PROVIDER TOPOLOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Hierarchy showing BrowserRouter wrapping App, containing Routes container and individual Route components mapping to pages">
                  <!-- BrowserRouter Provider -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="220" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="140" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="85" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">ROOT PROVIDER</text>
                    <text x="110" y="56" text-anchor="middle" class="svg-title">&lt;BrowserRouter&gt;</text>
                    <rect x="15" y="70" width="190" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">Wraps &lt;App /&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs">Listens to popstate</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">History Context API</text>
                  </g>

                  <!-- Routes Container -->
                  <g transform="translate(270, 20)">
                    <rect x="0" y="0" width="250" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="120" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="75" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DISPATCHER</text>
                    <text x="125" y="56" text-anchor="middle" class="svg-title">&lt;Routes&gt; Switch</text>
                    <rect x="15" y="70" width="220" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">Diffs window.location</text>
                    <text x="25" y="114" class="svg-mono-xs">Executes path matching</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Selects best Route</text>
                  </g>

                  <!-- Route Branches -->
                  <g transform="translate(545, 20)">
                    <rect x="0" y="0" width="310" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="130" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="80" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PAGE TARGETS</text>
                    <text x="155" y="56" text-anchor="middle" class="svg-title">&lt;Route /&gt; Declarations</text>
                    <rect x="15" y="70" width="280" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">/          -&gt; &lt;Home /&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs">/about     -&gt; &lt;About /&gt;</text>
                    <text x="25" y="134" class="svg-mono-xs">/product   -&gt; &lt;Product /&gt;</text>
                    <text x="25" y="150" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">*          -&gt; &lt;NotFound /&gt; (404)</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-39-3',
          num: '39.3',
          title: '<Link> vs. HTML <a> Tag (Preserving SPA State)',
          content: `
            <p>
              A critical pitfall for developers migrating from vanilla HTML is using standard anchor tags:
            </p>
            <ul>
              <li><strong>The Anchor Problem:</strong> <code>&lt;a href="/about"&gt;</code> instructs the browser to bypass React Router and initiate a standard HTTP navigation, triggering a full page reload and wiping out all active state.</li>
              <li><strong>The Link Solution:</strong> The <code>&lt;Link to="/about"&gt;</code> component renders an accessible anchor tag under the hood, but automatically calls <code>event.preventDefault()</code> on user click. It then uses the History API to push the new URL seamlessly into the address bar.</li>
            </ul>

            <pre class="notes-code-block"><code>// components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    &lt;nav className="flex gap-4 p-4 border-b"&gt;
      {/* Use Link + 'to' to preserve React state without reloading */}
      &lt;Link to="/" className="hover:underline"&gt;Home&lt;/Link&gt;
      &lt;Link to="/about" className="hover:underline"&gt;About&lt;/Link&gt;
      &lt;Link to="/product" className="hover:underline"&gt;Product&lt;/Link&gt;
    &lt;/nav&gt;
  )
}

export default Navbar</code></pre>
          `
        }
      ]
    },
    {
      id: 'react-40',
      number: 40,
      shortLabel: 'React 40',
      title: 'Advanced Routing (Nested, Dynamic & Programmatic)',
      summary: 'Mastering production routing patterns in React Router DOM: Building sub-page layouts with Nested Routes and <Outlet />, reading dynamic URL segments via useParams(), and redirecting imperatively with useNavigate().',
      subtopicLabels: [
        '40.1 Nested Routes & the <Outlet /> Component',
        '40.2 Dynamic Routes & useParams()',
        '40.3 Programmatic Navigation with useNavigate()'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-40-1',
          num: '40.1',
          title: 'Nested Routes & the <Outlet /> Component',
          content: `
            <p>
              Enterprise web applications frequently have sections that share a common layout while rendering sub-pages internally (e.g., an eCommerce product catalog with persistent category filters showing <code>/product/men</code> and <code>/product/women</code>).
            </p>
            <p>
              In React Router DOM, this is handled through <strong>Nested Routes</strong>:
            </p>
            <ul>
              <li><strong>Relative Child Paths:</strong> Child routes nested inside a parent <code>&lt;Route&gt;</code> must have relative paths (omitting the leading slash). For example, <code>path="men"</code> inside <code>path="/product"</code> resolves automatically to <code>/product/men</code>.</li>
              <li><strong>The <code>&lt;Outlet /&gt;</code> Slot:</strong> The parent component (<code>Product.jsx</code>) renders <code>&lt;Outlet /&gt;</code> where the matched child route should appear. When navigating between <code>/product/men</code> and <code>/product/women</code>, the parent component remains mounted and never re-renders, while only the inner child swaps out.</li>
            </ul>

            <pre class="notes-code-block"><code>// App.jsx (Nested Route Definition)
&lt;Routes&gt;
  &lt;Route path="/product" element={&lt;Product /&gt;}&gt;
    {/* Child routes inherit parent path -> /product/men &amp; /product/women */}
    &lt;Route path="men" element={&lt;Men /&gt;} /&gt;
    &lt;Route path="women" element={&lt;Women /&gt;} /&gt;
  &lt;/Route&gt;
&lt;/Routes&gt;</code></pre>

            <pre class="notes-code-block"><code>// pages/Product.jsx (Parent Shell with Outlet)
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    &lt;div className="product-layout"&gt;
      &lt;h1&gt;Product Catalog&lt;/h1&gt;
      {/* Persistent sub-navigation */}
      &lt;nav className="subnav flex gap-4 my-4"&gt;
        &lt;Link to="/product/men"&gt;Men's Collection&lt;/Link&gt;
        &lt;Link to="/product/women"&gt;Women's Collection&lt;/Link&gt;
      &lt;/nav&gt;

      {/* Outlet marks the exact slot where child routes mount */}
      &lt;div className="child-view border p-4 rounded"&gt;
        &lt;Outlet /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

export default Product</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 40.1 · Nested Route Topology &amp; &lt;Outlet /&gt; Slot Projection</span>
                <span class="diagram-frame-tag">LAYOUT PROJECTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Visual representation of Parent Product layout containing persistent navigation while Outlet dynamically projects Men or Women child components">
                  <!-- Parent Shell -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="150" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="90" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PARENT SHELL: /product</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Persistent Layout Frame</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">Shared Header: &lt;h1&gt;Product Catalog&lt;/h1&gt;</text>
                    <text x="25" y="118" class="svg-mono-xs">Sub-Navigation: [Men] [Women]</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">&lt;Outlet /&gt; Projection Slot</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Never unmounts during child navigation</text>
                  </g>

                  <!-- Dynamic Child Slot -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">OUTLET PROJECTION</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Conditional Child Mounting</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">URL = /product/men   -&gt; Mounts &lt;Men /&gt;</text>
                    <text x="25" y="118" class="svg-mono-xs">URL = /product/women -&gt; Mounts &lt;Women /&gt;</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Zero full-page remounting overhead ✓</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Targeted Virtual DOM reconciliation</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-40-2',
          num: '40.2',
          title: 'Dynamic Routes & useParams()',
          content: `
            <p>
              When dozens of detail pages share an identical design template (e.g., <code>/courses/frontend</code>, <code>/courses/backend</code>, <code>/courses/react</code>), creating static routes for each is anti-pattern.
            </p>
            <p>
              Instead, define a <strong>Dynamic Parameter</strong> segment prefixed with a colon (<code>:id</code>) in the route path, and extract that variable inside the component using the <strong><code>useParams()</code></strong> hook:
            </p>

            <pre class="notes-code-block"><code>// 1. App.jsx: Defining the parameter token
&lt;Route path="/courses/:id" element={&lt;CourseDetail /&gt;} /&gt;</code></pre>

            <pre class="notes-code-block"><code>// 2. pages/CourseDetail.jsx: Consuming dynamic parameters
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  // Extracts URL segment parameters into a key-value dictionary
  // When visiting /courses/frontend -> params = { id: 'frontend' }
  const params = useParams()

  return (
    &lt;div className="p-6"&gt;
      &lt;h1 className="text-2xl font-bold capitalize"&gt;
        {params.id} Course Overview
      &lt;/h1&gt;
      &lt;p&gt;Active route parameter: &lt;code&gt;{params.id}&lt;/code&gt;&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default CourseDetail</code></pre>
          `
        },
        {
          id: 'react-40-3',
          num: '40.3',
          title: 'Programmatic Navigation with useNavigate()',
          content: `
            <p>
              While declarative <code>&lt;Link&gt;</code> elements handle standard user clicks, asynchronous workflows often require triggering navigation <strong>imperatively inside JavaScript functions</strong>:
            </p>
            <ul>
              <li>Redirecting a user to <code>/dashboard</code> immediately upon successful login authentication.</li>
              <li>Pushing the user to <code>/order-confirmation</code> after Stripe payment completes.</li>
              <li>Implementing custom "Back" or "Forward" history controls.</li>
            </ul>
            <p>
              The <strong><code>useNavigate()</code></strong> hook returns a dispatch function that executes these programmatic transitions:
            </p>

            <pre class="notes-code-block"><code>// pages/About.jsx
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleReturnHome = () => {
    // Perform cleanup or telemetry logging here...
    navigate('/') // Imperative redirect to root
  }

  return (
    &lt;div className="p-6 space-y-4"&gt;
      &lt;h1&gt;About Engineering Portal&lt;/h1&gt;
      &lt;button onClick={handleReturnHome} className="btn-primary"&gt;
        Return to Home Page
      &lt;/button&gt;

      {/* Numeric arguments traverse browser history stack */}
      &lt;div className="flex gap-2 pt-4"&gt;
        &lt;button onClick={() =&gt; navigate(-1)} className="btn-secondary"&gt;
          ← History Back
        &lt;/button&gt;
        &lt;button onClick={() =&gt; navigate(1)} className="btn-secondary"&gt;
          History Forward →
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

export default About</code></pre>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 40.2 · Dynamic Route Parsing &amp; History Stack Navigation</span>
                <span class="diagram-frame-tag">DYNAMIC &amp; IMPERATIVE ROUTING</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Visual explanation of useParams extracting tokens from URL and useNavigate pushing/popping frames on the browser history stack">
                  <!-- Dynamic Params -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DYNAMIC PARAMETER (useParams)</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">URL Token Deserialization</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">Route Pattern:  /courses/:id</text>
                    <text x="25" y="118" class="svg-mono-xs">Browser URL:    /courses/frontend</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">useParams() -&gt; { id: 'frontend' }</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Eliminates redundant static route files</text>
                  </g>

                  <!-- useNavigate -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">IMPERATIVE ROUTING (useNavigate)</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Browser History Stack Control</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">navigate('/cart')   -&gt; Pushes frame to stack</text>
                    <text x="25" y="118" class="svg-mono-xs">navigate(-1)        -&gt; Pops 1 frame (Back)</text>
                    <text x="25" y="138" class="svg-mono-xs">navigate(1)         -&gt; Advances 1 frame (Next)</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Used inside async callbacks &amp; auth flows ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },
    {
      id: 'react-41',
      number: 41,
      shortLabel: 'React 41',
      title: 'Updating Parent State from a Child Component (Child-to-Parent Data Flow)',
      summary: 'Mastering unidirectional state inversion: How a child component triggers updates in a parent component by passing setter callbacks via props, handling event bindings cleanly, and identifying when Props Drilling necessitates Context API.',
      subtopicLabels: [
        '41.1 Unidirectional Data Flow & Setter Inversion',
        '41.2 Implementation: App.jsx to Navbar.jsx',
        '41.3 Event Gotchas & Props Drilling Limitations'
      ],
      diagramCount: 2,
      sections: [
        {
          id: 'react-41-1',
          num: '41.1',
          title: 'The Core Concept: Callback Setter Inversion',
          content: `
            <p>
              In React, props always flow strictly in a <strong>unidirectional (top-down)</strong> direction: from Parent down to Child. A child component receives props as read-only values and is strictly forbidden from mutating them directly.
            </p>
            <p>
              However, modern UI patterns frequently require user actions inside a child component (e.g., clicking a theme switch button in a <code>&lt;Navbar /&gt;</code>) to modify state owned by the root parent (<code>&lt;App /&gt;</code>).
            </p>
            <p>
              <strong>The Architecture:</strong> The parent maintains the state variable and its setter function (<code>const [theme, setTheme] = useState('light')</code>). It passes the setter function down to the child as a prop. When the child detects a user event, it invokes that callback, causing the parent to update its state and trigger a top-down re-render.
            </p>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 41.1 · Unidirectional Props Flow vs. Inverted Setter Callback Execution</span>
                <span class="diagram-frame-tag">DATA FLOW ARCHITECTURE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Visual diagram showing top down flow of props theme and setTheme, and bottom up execution of callback on button click">
                  <!-- Parent Box -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="380" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PARENT COMPONENT (App)</text>
                    <text x="190" y="58" text-anchor="middle" class="svg-title">Single Source of Truth</text>

                    <rect x="15" y="74" width="350" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">const [theme, setTheme] = useState('light')</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Passes: &lt;Navbar theme={theme} setTheme={setTheme} /&gt;</text>
                    <text x="25" y="138" class="svg-mono-xs">Receives callback invocation</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Re-renders whole tree with theme='dark'</text>
                  </g>

                  <!-- Child Box -->
                  <g transform="translate(475, 20)">
                    <rect x="0" y="0" width="380" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">CHILD COMPONENT (Navbar)</text>
                    <text x="190" y="58" text-anchor="middle" class="svg-title">Event Consumer &amp; Dispatcher</text>

                    <rect x="15" y="74" width="350" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">Receives props: { theme, setTheme }</text>
                    <text x="25" y="118" class="svg-mono-xs">User clicks: &lt;button onClick={changeTheme}&gt;</text>
                    <text x="25" y="138" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">props.setTheme('dark') is executed ✓</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Child never mutates props directly</text>
                  </g>

                  <!-- Middle Arrow -->
                  <path d="M 405 115 L 475 115" fill="none" stroke="var(--border)" stroke-width="2" stroke-dasharray="4 3"/>
                </svg>
              </div>
            </figure>
          `
        },
        {
          id: 'react-41-2',
          num: '41.2',
          title: 'Implementation: Parent (App.jsx) to Child (Navbar.jsx)',
          content: `
            <pre class="notes-code-block"><code>// 1. App.jsx (Parent: Owns State & Passes Setter)
import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  // Master state lives in parent
  const [theme, setTheme] = useState('light')

  return (
    &lt;div className="app-shell p-6"&gt;
      &lt;h1 className="text-xl font-bold mb-4"&gt;Current Theme: {theme}&lt;/h1&gt;

      {/* Pass both the reactive value AND the setter function down as props */}
      &lt;Navbar theme={theme} setTheme={setTheme} /&gt;
    &lt;/div&gt;
  )
}

export default App</code></pre>

            <pre class="notes-code-block"><code>// 2. components/Navbar.jsx (Child: Consumes Props & Triggers Setter)
import React from 'react'

const Navbar = (props) => {
  const changeTheme = () => {
    // Calls the parent function to invert/mutate App's state
    props.setTheme(props.theme === 'light' ? 'dark' : 'light')
  }

  return (
    &lt;header className="p-4 border rounded flex items-center justify-between"&gt;
      &lt;span className="font-semibold"&gt;Brand Navigation&lt;/span&gt;
      
      {/* Event listener triggers callback invocation */}
      &lt;button 
        onClick={changeTheme}
        className="px-4 py-2 border rounded font-mono"
      &gt;
        Toggle Theme
      &lt;/button&gt;
    &lt;/header&gt;
  )
}

export default Navbar</code></pre>
          `
        },
        {
          id: 'react-41-3',
          num: '41.3',
          title: 'Event Gotchas & The Props Drilling Limitation',
          content: `
            <p>
              Two essential architectural caveats every engineer must know:
            </p>
            <ul>
              <li><strong>Event Listener Gotcha (<code>onClick</code> vs <code>onChange</code>):</strong> Always attach <code>onClick</code> to button elements. Attaching <code>onChange</code> to a <code>&lt;button&gt;</code> will fail silently because <code>onChange</code> is exclusively dispatched by form control inputs (<code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>).</li>
              <li><strong>When Callback Inversion Breaks Down (Props Drilling):</strong> Passing setters through props is clean and explicit for 1–2 component levels (<code>App</code> → <code>Navbar</code>). But when deep leaf components need state (e.g., <code>App</code> → <code>Dashboard</code> → <code>Sidebar</code> → <code>UserPanel</code> → <code>ThemeButton</code>), intermediate components must manually thread props they never use. This architectural anti-pattern is called <strong>Props Drilling</strong>, and is solved globally via <strong>React Context API</strong>.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 41.2 · Shallow Callback Inversion vs. The Deep Props Drilling Bottleneck</span>
                <span class="diagram-frame-tag">ARCHITECTURE COMPARISON</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Comparison showing clean 1-level callback inversion vs messy 4-level props drilling requiring Context API">
                  <!-- Clean 1-Level -->
                  <g transform="translate(25, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">SHALLOW CALLBACK (1-2 LEVELS)</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Direct Setter Delegation</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">App (Owns State) -&gt; Navbar (Consumes Callback)</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">• Direct 1-hop prop connection ✓</text>
                    <text x="25" y="138" class="svg-mono-xs">• High readability &amp; easy refactoring</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-muted);">Standard pattern for localized sibling/child UI</text>
                  </g>

                  <!-- Deep Drilling -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">PROPS DRILLING (4+ LEVELS)</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Architectural Anti-Pattern</text>

                    <rect x="15" y="74" width="370" height="100" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="98" class="svg-mono-xs">App -&gt; Dashboard -&gt; Nav2 -&gt; Panel -&gt; Button</text>
                    <text x="25" y="118" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">• Intermediate components burdened with unused props</text>
                    <text x="25" y="138" class="svg-mono-xs">• Brittle refactoring &amp; maintenance headache</text>
                    <text x="25" y="158" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Solution: Migrate to React Context API ✓</text>
                  </g>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    }
  ]
};
