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
    }
  ]
};