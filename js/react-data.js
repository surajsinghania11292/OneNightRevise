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
                    <text x="200" y="186" text-anchor="middle" class="svg-sub">White flicker · destroys DOM · re-downloads all feeds & ads</text>
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
                    <text x="200" y="186" text-anchor="middle" class="svg-sub">Feeds, videos, and ads stay intact without re-rendering</text>
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
                    <text x="200" y="159" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:600;">✓ Can name it 'naam', 'chacha', or 'user'</text>
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
                  <pre style="background:var(--bg-frame); padding:0.75rem 0.9rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">const user = 'Sarthak';
export const age = 89;
export const skills = ['Frontend', 'Backend', 'UI/UX'];

// Default export at the bottom
export default user;</pre>
                </div>
              </div>

              <div class="sub-box">
                <div class="sub-box__tag">File 02 · Consumer</div>
                <div class="sub-box__title">script.js (Single Unified Import)</div>
                <div class="sub-box__body">
                  <pre style="background:var(--bg-frame); padding:0.75rem 0.9rem; border-radius:6px; border:1px solid var(--border); font-family:var(--font-mono); font-size:0.85rem; margin:0.4rem 0;">// Default import first, then { named } imports!
import naam, { age, skills } from './app.js';

console.log(naam);   // 'Sarthak'
console.log(age);    // 89
console.log(skills); // ['Frontend', 'Backend', 'UI/UX']</pre>
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

                    <text x="185" y="190" text-anchor="middle" class="svg-sub" style="font-size:11px;">Single module serves multiple consumer requirements</text>
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
                    <rect x="20" y="68" width="80" height="32" rx="4" fill="var(--danger)" stroke="var(--danger)"/>
                    <text x="60" y="89" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">&lt;h1&gt; *</text>

                    <rect x="115" y="68" width="80" height="32" rx="4" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="155" y="89" text-anchor="middle" class="svg-mono-xs">&lt;button&gt;</text>

                    <rect x="210" y="68" width="80" height="32" rx="4" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="250" y="89" text-anchor="middle" class="svg-mono-xs">&lt;div.card&gt;</text>

                    <rect x="20" y="112" width="270" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--danger)" stroke-dasharray="3 3"/>
                    <text x="155" y="132" text-anchor="middle" class="svg-mono-xs" style="fill:var(--danger); font-weight:600;">💥 Unnecessary Full-Tree Re-render</text>
                    <text x="155" y="148" text-anchor="middle" class="svg-sub">Unchanged elements forced through style recalculation</text>
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
                    <text x="200" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">🔍 Search: "Sheryians Coding School" [UNTOUCHED ✓]</text>

                    <!-- Feeds Node (Updated) -->
                    <rect x="25" y="122" width="350" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--primary)"/>
                    <text x="200" y="142" text-anchor="middle" class="svg-mono-xs" style="fill:var(--primary);">Video Player & Comments Updated Dynamically</text>
                    <text x="200" y="158" text-anchor="middle" class="svg-sub">Search input never re-renders or loses typed cursor</text>
                  </g>

                  <!-- Instagram Panel -->
                  <g transform="translate(455, 20)">
                    <rect x="0" y="0" width="400" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <text x="200" y="30" text-anchor="middle" class="svg-kicker" style="fill:var(--accent); font-weight:700;">INSTAGRAM NOTIFICATION EXAMPLE</text>
                    <text x="200" y="52" text-anchor="middle" class="svg-title">Granular Badge Increment</text>

                    <!-- Badge Node (Only updated part) -->
                    <rect x="25" y="70" width="350" height="42" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
                    <text x="200" y="96" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">💬 Messages Badge: [ 4 ] → [ 5 ] (Patched in 2ms)</text>

                    <!-- Feed Node (Untouched) -->
                    <rect x="25" y="122" width="350" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="200" y="142" text-anchor="middle" class="svg-mono-xs">Photo Feed, Stories & Sidebar 100% Intact</text>
                    <text x="200" y="158" text-anchor="middle" class="svg-sub">Zero page flicker · zero unnecessary network requests</text>
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
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--primary)" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">01</text>
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
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--accent)" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">03</text>
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
                    <rect x="15" y="15" width="40" height="20" rx="4" fill="var(--success)" />
                    <text x="35" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">04</text>
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
                    <rect x="15" y="15" width="65" height="22" rx="4" fill="var(--primary)"/>
                    <text x="47" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">PARENT</text>
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
                    <rect x="15" y="15" width="55" height="22" rx="4" fill="var(--accent)"/>
                    <text x="42" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">CHILD</text>
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
                    <rect x="15" y="15" width="100" height="22" rx="4" fill="var(--danger)"/>
                    <text x="65" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">ANTI-PATTERN</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Monolithic Sprawling App.jsx</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--danger);">App.jsx (500+ Lines of Clutter)</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--text-muted);">├── 50 lines: &lt;div className="nav"&gt;...&lt;/div&gt;</text>
                    <text x="35" y="130" class="svg-mono-xs" style="fill:var(--text-muted);">├── 120 lines: Card 1, Card 2, Card 3 (Duplicate HTML)</text>
                    <text x="35" y="148" class="svg-mono-xs" style="fill:var(--text-muted);">└── 80 lines: &lt;footer&gt;...&lt;/footer&gt;</text>
                  </g>

                  <!-- Good: Modular Components -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success)"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">RECOMMENDED PATTERN</text>
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
                    <text x="240" y="22" text-anchor="middle" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">GRANULAR ISOLATION: Only the mutated &lt;Badge&gt; re-renders!</text>
                    <text x="240" y="38" text-anchor="middle" class="svg-sub">All sibling nodes and parent components remain 100% idle with zero layout shifts.</text>
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
                    <rect x="20" y="16" width="140" height="22" rx="4" fill="var(--success)"/>
                    <text x="90" y="31" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">ORCHESTRATOR</text>
                    <text x="280" y="32" class="svg-title">src/App.jsx</text>

                    <!-- Code block inside App.jsx -->
                    <rect x="20" y="48" width="455" height="130" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="35" y="70" class="svg-mono-xs" style="fill:var(--primary);">import Navbar from './components/Navbar';</text>
                    <text x="35" y="88" class="svg-mono-xs" style="fill:var(--accent);">import Card from './components/Card';</text>
                    <text x="35" y="112" class="svg-mono-xs" style="fill:var(--text);">function App() {</text>
                    <text x="50" y="130" class="svg-mono-xs" style="fill:var(--text);">return (&lt;div&gt; &lt;Navbar /&gt; &lt;Card /&gt; &lt;Card /&gt; &lt;/div&gt;);</text>
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
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--success)"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">THE SOLUTION: PROPS</text>
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
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--primary)"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">VANILLA JAVASCRIPT</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Function Arguments: abc(10)</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">function <strong style="fill:var(--primary);">abc(a)</strong> {</text>
                    <text x="45" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">console.log('Hello', a);</text>
                    <text x="25" y="136" class="svg-mono-xs">}</text>
                    <text x="25" y="156" class="svg-mono-xs" style="fill:var(--accent); font-weight:700;">abc(10);  // Argument 10 maps to parameter a</text>
                  </g>

                  <!-- Right: React Component Props -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                    <rect x="15" y="15" width="160" height="22" rx="4" fill="var(--accent)"/>
                    <text x="95" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">REACT JS PARADIGM</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title">Component Props: &lt;Card user="..." /&gt;</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--text);">function <strong style="fill:var(--accent);">Card(props)</strong> {</text>
                    <text x="45" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">return &lt;h1&gt;{props.user}&lt;/h1&gt;;</text>
                    <text x="25" y="136" class="svg-mono-xs">}</text>
                    <text x="25" y="156" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;Card user="Sarthak" /&gt; // Bundled as props.user</text>
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
                  <rect x="55" y="82" width="130" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--primary)"/>
                  <text x="120" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--primary);">{user:"Sarthak", age:18}</text>

                  <!-- Flow to Card 2 -->
                  <path d="M 440 65 L 440 120" fill="none" stroke="var(--accent)" stroke-width="2"/>
                  <polygon points="435,120 440,128 445,120" fill="var(--accent)"/>
                  <rect x="375" y="82" width="130" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--accent)"/>
                  <text x="440" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--accent);">{user:"Aman", age:21}</text>

                  <!-- Flow to Card 3 -->
                  <path d="M 560 65 L 560 95 L 740 95 L 740 120" fill="none" stroke="var(--success)" stroke-width="2"/>
                  <polygon points="735,120 740,128 745,120" fill="var(--success)"/>
                  <rect x="675" y="82" width="130" height="22" rx="4" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="740" y="97" text-anchor="middle" class="svg-mono-xs" style="font-size:10px; fill:var(--success);">{user:"Aditya", age:24}</text>

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
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--danger)"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">INCORRECT ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Quotation Marks: Literal String</text>

                    <rect x="15" y="70" width="365" height="78" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">&lt;img src="props.img" /&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text-muted);">Browser fetches GET /props.img</text>
                    <text x="25" y="132" class="svg-mono-xs" style="fill:var(--danger);">Result: 404 Not Found (Broken Image Icon)</text>
                  </g>

                  <!-- Good: Curly Braces -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="170" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--success)"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">CORRECT ✓</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Curly Braces: JS Expression</text>

                    <rect x="15" y="70" width="365" height="78" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;img src={props.img} /&gt;</text>
                    <text x="25" y="114" class="svg-mono-xs" style="fill:var(--text-muted);">Evaluates variable: "https://images.unsplash.com/..."</text>
                    <text x="25" y="132" class="svg-mono-xs" style="fill:var(--success);">Result: Image loads and renders perfectly ✓</text>
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
                    <rect x="15" y="15" width="120" height="20" rx="4" fill="var(--danger)"/>
                    <text x="75" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">arr.forEach() ❌</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--danger);">Returns undefined</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="94" class="svg-mono-xs">{arr.forEach(item =&gt; &lt;h1&gt;{item}&lt;/h1&gt;)}</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--danger);">Return Value: undefined</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--text-muted);">Result: React renders blank screen with zero elements!</text>
                  </g>

                  <!-- map: Returns Array -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="100" height="20" rx="4" fill="var(--success)"/>
                    <text x="65" y="29" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">arr.map() ✓</text>
                    <text x="200" y="56" text-anchor="middle" class="svg-title" style="fill:var(--success);">Returns New JSX Array</text>

                    <rect x="15" y="70" width="365" height="88" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="94" class="svg-mono-xs">{arr.map(item =&gt; &lt;h1&gt;{item}&lt;/h1&gt;)}</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Return Value: [&lt;h1&gt;10&lt;/h1&gt;, &lt;h1&gt;20&lt;/h1&gt;, ...]</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--text-muted);">Result: React renders each item directly into the DOM ✓</text>
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
                    <rect x="15" y="15" width="130" height="22" rx="4" fill="var(--danger)"/>
                    <text x="80" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">WITHOUT KEYS ❌</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--danger);">No Roll Numbers / Anonymous Items</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Students have no ID cards</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--text-muted);">When Student 1 shifts seat, teacher must re-examine all 100!</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--danger);">React re-renders entire DOM list · Loses form focus/state</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--text-muted);">Console Warning: Each child should have a unique "key"</text>
                  </g>

                  <!-- With Keys -->
                  <g transform="translate(460, 20)">
                    <rect x="0" y="0" width="395" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                    <rect x="15" y="15" width="140" height="22" rx="4" fill="var(--success)"/>
                    <text x="85" y="30" text-anchor="middle" class="svg-mono-xs" style="fill:#fff; font-weight:700;">WITH KEY={ID} ✓</text>
                    <text x="200" y="58" text-anchor="middle" class="svg-title" style="fill:var(--success);">Unique Roll Number Identity</text>

                    <rect x="15" y="74" width="365" height="96" rx="6" fill="var(--bg-surface)" stroke="var(--success)"/>
                    <text x="25" y="96" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">&lt;Card key={idx} ... /&gt;</text>
                    <text x="25" y="116" class="svg-mono-xs" style="fill:var(--text);">Each student holds unique Roll No: [0, 1, 2, ...]</text>
                    <text x="25" y="136" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">React reconciles surgical in-place updates</text>
                    <text x="25" y="154" class="svg-mono-xs" style="fill:var(--text-muted);">Zero warnings · 60fps silky smooth list performance</text>
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
                    <text x="25" y="125" class="svg-mono-xs" style="fill:var(--danger);">React compares index 0 (A vs NEW) → Mutates!</text>
                    <text x="25" y="143" class="svg-mono-xs" style="fill:var(--danger);">React compares index 1 (B vs A) → Mutates!</text>
                    <text x="25" y="161" class="svg-mono-xs" style="fill:var(--danger); font-weight:700;">Total: 4 Destructive DOM Updates (Inefficient)</text>
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
                    <text x="25" y="125" class="svg-mono-xs" style="fill:var(--success);">React matches key:A and key:B existing nodes ✓</text>
                    <text x="25" y="143" class="svg-mono-xs" style="fill:var(--success);">Moves existing nodes without touching their state ✓</text>
                    <text x="25" y="161" class="svg-mono-xs" style="fill:var(--success); font-weight:700;">Total: Only 1 Surgical Insertion (Sub-millisecond)</text>
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
