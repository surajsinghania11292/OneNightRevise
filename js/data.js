/* ═══════════════════════════════════════════════════════════════
   DATA.JS — User-Authored System Design Revision Notes
   Expandable Topic Cards + Structured Numbered Sections + SVG Diagrams
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    title: "OneNightRevise — System Design Revision Notes",
    totalTopics: 32
  },

  navGroups: [
    { label: "01–06 Monolith", targetId: "topic-1-monolith" },
    { label: "07–11 Gateway", targetId: "topic-7-api-gateway" },
    { label: "12–15 Load Balancing", targetId: "topic-12-load-balancing" },
    { label: "16–18 Proxies", targetId: "topic-16-forward-proxy" },
    { label: "19–21 Protocols", targetId: "topic-19-networking-protocols" },
    { label: "22–32 Scaling (0→1M)", targetId: "topic-22-what-is-scaling" }
  ],

  topics: [
    /* ═══════════════════════════════════════════════════════════════
       TOPIC 1: WHAT IS MONOLITHIC ARCHITECTURE?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-1-monolith",
      number: "01",
      shortLabel: "Monolith",
      title: "What is Monolithic Architecture?",
      summary: "Real-world Udemy Clone breakdown, how a single codebase (index.js on Port 4000) and shared database look in actual code, and why the lifecycle is tightly coupled.",
      subtopicLabels: ["1.1 Udemy Clone Example", "1.2 How it Looks in Code"],
      diagramCount: 1,
      sections: [
        {
          num: "1.1",
          title: "Real-World Example (Udemy Clone)",
          content: `
            <p>Imagine building an EdTech platform like <strong>Udemy</strong>. The application has multiple functional modules:</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Module 01</div>
                <div class="sub-box__title">Course Module</div>
                <div class="sub-box__body">Creating and managing different courses.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Module 02</div>
                <div class="sub-box__title">Auth Module</div>
                <div class="sub-box__body">Handling user login and signup flows.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Module 03</div>
                <div class="sub-box__title">Cart Module</div>
                <div class="sub-box__body">Managing courses added to the cart.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Module 04</div>
                <div class="sub-box__title">Payment Module</div>
                <div class="sub-box__body">Processing user payments.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Module 05</div>
                <div class="sub-box__title">Order Module</div>
                <div class="sub-box__body">Confirming course bookings.</div>
              </div>
            </div>
          `
        },
        {
          num: "1.2",
          title: "How it Looks in Actual Code",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Single Codebase:</strong> All modules (controllers/handlers like <code>Auth Handler</code>, <code>Category Handler</code>, <code>Payment Handler</code>, <code>Profile Handler</code>, <code>Rating &amp; Review Handler</code>) live inside a <strong>single repository/folder structure</strong>.</li>
              <li><strong>Single Entry Point:</strong> There is only <strong>one <code>index.js</code> file</strong> that starts the entire server (e.g., running on <code>Port 4000</code>) and establishes the database connection.</li>
              <li><strong>Shared Database:</strong> A monolith typically uses a <strong>single shared database</strong> containing separate tables for each module (<code>Users table</code>, <code>Payments table</code>, <code>Orders table</code>, <code>Courses table</code>).</li>
              <li><strong>Tightly Coupled Lifecycle:</strong> Because everything is connected to one <code>index.js</code>, all modules are <strong>built together, run together, tested together, and deployed together</strong>.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 1.1 · Monolithic Architecture (Udemy Clone)</span>
                <span class="diagram-frame-tag">SINGLE ENTRY POINT · PORT 4000</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 350" class="arch-svg" role="img" aria-label="Monolithic Architecture Diagram showing single index.js entry point on port 4000, five modules inside one codebase, and one shared database">
                  <defs>
                    <marker id="arrow-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Client Box -->
                  <rect x="24" y="112" width="136" height="84" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="92" y="148" text-anchor="middle" class="svg-title">Client</text>
                  <text x="92" y="168" text-anchor="middle" class="svg-sub">Web / Mobile App</text>

                  <!-- Arrow Client -> Monolith -->
                  <line x1="160" y1="154" x2="218" y2="154" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-1)"/>
                  <text x="189" y="144" text-anchor="middle" class="svg-mono-xs">HTTP</text>

                  <!-- Single Codebase Outer Box -->
                  <rect x="226" y="22" width="420" height="296" rx="18" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="6 4"/>
                  <text x="436" y="48" text-anchor="middle" class="svg-kicker">SINGLE CODEBASE / REPOSITORY</text>

                  <!-- Single Entry Point Banner -->
                  <rect x="252" y="62" width="368" height="44" rx="10" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.4"/>
                  <text x="436" y="89" text-anchor="middle" class="svg-mono-md">Single Entry Point: index.js (Port 4000)</text>

                  <!-- 5 Module Boxes -->
                  <rect x="252" y="124" width="114" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.4"/>
                  <text x="309" y="149" text-anchor="middle" class="svg-node">Course</text>
                  <text x="309" y="167" text-anchor="middle" class="svg-sub">Category / Rating</text>

                  <rect x="379" y="124" width="114" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.4"/>
                  <text x="436" y="149" text-anchor="middle" class="svg-node">Auth</text>
                  <text x="436" y="167" text-anchor="middle" class="svg-sub">Login / Profile</text>

                  <rect x="506" y="124" width="114" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.4"/>
                  <text x="563" y="149" text-anchor="middle" class="svg-node">Cart</text>
                  <text x="563" y="167" text-anchor="middle" class="svg-sub">Added Courses</text>

                  <rect x="308" y="198" width="122" height="58" rx="10" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="369" y="223" text-anchor="middle" class="svg-node">Payment</text>
                  <text x="369" y="241" text-anchor="middle" class="svg-sub">Payment Handler</text>

                  <rect x="444" y="198" width="122" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.4"/>
                  <text x="505" y="223" text-anchor="middle" class="svg-node">Order</text>
                  <text x="505" y="241" text-anchor="middle" class="svg-sub">Course Bookings</text>

                  <!-- Footer note inside Monolith -->
                  <text x="436" y="294" text-anchor="middle" class="svg-sub">Tightly Coupled: Built, Run, Tested &amp; Deployed Together</text>

                  <!-- Arrow Monolith -> Shared DB -->
                  <line x1="646" y1="154" x2="698" y2="154" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-1)"/>

                  <!-- Shared Database Cylinder / Box -->
                  <rect x="706" y="66" width="150" height="202" rx="16" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.6"/>
                  <text x="781" y="96" text-anchor="middle" class="svg-title">Shared DB</text>
                  <text x="781" y="114" text-anchor="middle" class="svg-sub">Single Database</text>

                  <rect x="724" y="128" width="114" height="26" rx="6" fill="var(--accent-light)"/>
                  <text x="781" y="145" text-anchor="middle" class="svg-mono-xs">Users Table</text>

                  <rect x="724" y="160" width="114" height="26" rx="6" fill="var(--accent-light)"/>
                  <text x="781" y="177" text-anchor="middle" class="svg-mono-xs">Courses Table</text>

                  <rect x="724" y="192" width="114" height="26" rx="6" fill="var(--accent-light)"/>
                  <text x="781" y="209" text-anchor="middle" class="svg-mono-xs">Payments Table</text>

                  <rect x="724" y="224" width="114" height="26" rx="6" fill="var(--accent-light)"/>
                  <text x="781" y="241" text-anchor="middle" class="svg-mono-xs">Orders Table</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 2: THE 3 MAJOR PROBLEMS WITH MONOLITH ARCHITECTURE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-2-problems",
      number: "02",
      shortLabel: "3 Problems",
      title: "The 3 Major Problems with Monolith Architecture",
      summary: "Single Point of Failure (SPOF) at 1M users, Deployment Bottlenecks for small Credit Card updates, and expensive full-app scaling under 20M+ Payment traffic.",
      subtopicLabels: ["2.1 Single Point of Failure", "2.2 Deployment Bottleneck", "2.3 Individual Scaling Impossible"],
      diagramCount: 1,
      sections: [
        {
          num: "2.1",
          title: "Problem 1: Single Point of Failure (SPOF)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What it means:</strong> Because all modules are tightly coupled in one codebase running under a single process (<code>index.js</code>), an unhandled bug or crash in <strong>any single module</strong> crashes the <strong>entire application</strong>.</li>
              <li><strong>Example:</strong>
                <ul class="notes-sub-list">
                  <li>At <code>100 → 10,000 → 1,00,000</code> users, the system works fine.</li>
                  <li>At <strong>1 Million users</strong>, the <strong>Payment Module crashes</strong>.</li>
                  <li><strong>Impact:</strong> Even though the bug is only in Payment, users can no longer log in/sign up (<strong>Auth stops working</strong>), view their <strong>Cart</strong>, or check <strong>Orders</strong>. The entire app goes down.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "2.2",
          title: "Problem 2: Deployment Bottleneck",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What it means:</strong> Even a tiny code change in one module forces you to rebuild and redeploy the <strong>entire application</strong>.</li>
              <li><strong>Example:</strong>
                <ul class="notes-sub-list">
                  <li>The app is already live in production.</li>
                  <li>You want to add a small <strong>Credit Card payment feature</strong> inside the Payment Module.</li>
                  <li>Even though Auth, Cart, and Order modules weren't touched, you must redeploy the <strong>entire codebase</strong>.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "2.3",
          title: "Problem 3: Individual Scaling is Impossible (High Cost)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What it means:</strong> You cannot scale a single high-traffic module independently; you are forced to scale the entire system.</li>
              <li><strong>Example:</strong>
                <ul class="notes-sub-list">
                  <li>Suppose the <strong>Payment Module</strong> gets <strong>20 Million+ daily requests</strong>, while Auth, Cart, and Order combined get <strong>less than 2 Million requests</strong>.</li>
                  <li>Only the Payment Module needs scaling so it doesn't crash.</li>
                  <li>However, because modules are tightly coupled, you must duplicate the <strong>entire Monolith (including Auth, Cart, Order)</strong> onto a new big server/machine.</li>
                  <li><strong>Result:</strong> Requires a much larger, expensive server instead of a small machine just for payments, <strong>drastically increasing infrastructure cost</strong>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 2.1 · SPOF Crash Cascade &amp; Costly Full-Monolith Scaling</span>
                <span class="diagram-frame-tag">WHY MONOLITHS STRUGGLE AT SCALE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 310" class="arch-svg" role="img" aria-label="Diagram showing Single Point of Failure where Payment crash kills entire app, and costly scaling where 20M payment traffic forces duplicating the entire monolith">
                  <!-- LEFT PANEL: SPOF -->
                  <rect x="16" y="16" width="410" height="278" rx="16" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="221" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">PROBLEM 1 · SINGLE POINT OF FAILURE (1M USERS)</text>

                  <!-- Crashing Payment Box -->
                  <rect x="128" y="62" width="186" height="52" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                  <text x="221" y="85" text-anchor="middle" class="svg-node" style="fill: var(--danger);">Payment Module Crashes</text>
                  <text x="221" y="103" text-anchor="middle" class="svg-sub">Unhandled bug at 1M users</text>

                  <!-- Downward cascade lines -->
                  <line x1="221" y1="114" x2="221" y2="146" stroke="var(--danger)" stroke-width="1.8" stroke-dasharray="4 3"/>
                  <text x="221" y="162" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single index.js Process Dies</text>

                  <!-- Collateral Down Modules -->
                  <rect x="38" y="180" width="112" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="94" y="203" text-anchor="middle" class="svg-node">Auth ✕</text>
                  <text x="94" y="221" text-anchor="middle" class="svg-sub">Offline</text>

                  <rect x="165" y="180" width="112" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="221" y="203" text-anchor="middle" class="svg-node">Cart ✕</text>
                  <text x="221" y="221" text-anchor="middle" class="svg-sub">Offline</text>

                  <rect x="292" y="180" width="112" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="348" y="203" text-anchor="middle" class="svg-node">Orders ✕</text>
                  <text x="348" y="221" text-anchor="middle" class="svg-sub">Offline</text>

                  <text x="221" y="268" text-anchor="middle" class="svg-sub">1 Module Crash = 100% App Downtime</text>

                  <!-- RIGHT PANEL: COSTLY SCALING -->
                  <rect x="454" y="16" width="410" height="278" rx="16" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="659" y="44" text-anchor="middle" class="svg-kicker">PROBLEM 3 · IMPOSSIBLE INDIVIDUAL SCALING</text>

                  <!-- Server 1 -->
                  <rect x="478" y="64" width="166" height="164" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="561" y="86" text-anchor="middle" class="svg-mono-xs">Big Server 1</text>
                  <rect x="494" y="96" width="134" height="36" rx="8" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.2"/>
                  <text x="561" y="119" text-anchor="middle" class="svg-mono-xs">Payment (20M+ req)</text>
                  <rect x="494" y="140" width="134" height="72" rx="8" fill="var(--accent-light)"/>
                  <text x="561" y="164" text-anchor="middle" class="svg-sub">Auth · Cart · Order</text>
                  <text x="561" y="184" text-anchor="middle" class="svg-mono-xs">(&lt; 2M req combined)</text>

                  <!-- Clone Arrow -->
                  <text x="659" y="142" text-anchor="middle" class="svg-title">+</text>

                  <!-- Server 2 (Forced Full Duplicate) -->
                  <rect x="674" y="64" width="166" height="164" rx="12" fill="var(--bg-surface)" stroke="var(--warning)" stroke-width="1.4" stroke-dasharray="5 3"/>
                  <text x="757" y="86" text-anchor="middle" class="svg-mono-xs">Forced Big Server 2</text>
                  <rect x="690" y="96" width="134" height="36" rx="8" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.2"/>
                  <text x="757" y="119" text-anchor="middle" class="svg-mono-xs">Payment (Needed)</text>
                  <rect x="690" y="140" width="134" height="72" rx="8" fill="var(--danger-bg)"/>
                  <text x="757" y="164" text-anchor="middle" class="svg-sub">Auth · Cart · Order</text>
                  <text x="757" y="184" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Wasted RAM &amp; Cost</text>

                  <text x="659" y="264" text-anchor="middle" class="svg-sub">Must duplicate entire app onto huge expensive machines</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 3: MICROSERVICES ARCHITECTURE & HOW IT SOLVES MONOLITH PROBLEMS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-3-microservices",
      number: "03",
      shortLabel: "Microservices",
      title: "Microservices Architecture & How It Solves Monolith Problems",
      summary: "Loosely coupled services (S1 Auth, S2 Cart, S3 Order, S4 Payment), separate index.js entry points, dedicated databases (PostgreSQL + Prisma vs NoSQL), and solving all 3 bottlenecks.",
      subtopicLabels: ["3.1 Core Concept", "3.2 Code & Dedicated DBs", "3.3 Solving 3 Problems"],
      diagramCount: 1,
      sections: [
        {
          num: "3.1",
          title: "Core Concept",
          content: `
            <ul class="notes-bullet-list">
              <li>Instead of keeping modules inside one codebase, each functional module is split into an <strong>independent small service</strong> (<code>S1: Auth Service</code>, <code>S2: Cart Service</code>, <code>S3: Order Service</code>, <code>S4: Payment Service</code>).</li>
              <li><strong>Loosely Coupled:</strong> Services have <strong>zero direct code dependency</strong> on each other.</li>
              <li><strong>Independent Lifecycle:</strong> Each service is <strong>built individually, run individually, tested individually, and deployed individually</strong>.</li>
            </ul>
          `
        },
        {
          num: "3.2",
          title: "How Microservices Look in Code & Database",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Separate Code &amp; Entry Points:</strong> In an Amazon-like project structure, there are separate folders for <code>Inbound Service</code>, <code>Product Service</code>, and <code>User Service</code>. <strong>Every service has its own separate <code>index.js</code> file</strong> and runs on its own port (e.g., User Service running independently on <code>Port 4002</code>).</li>
              <li><strong>Dedicated Database per Service:</strong> Unlike a monolith's shared DB, each microservice can have its <strong>own dedicated database</strong> chosen according to its specific data needs:
                <ul class="notes-sub-list">
                  <li><strong>User Service:</strong> Needs structured relational data → uses <strong>RDBMS (PostgreSQL with Prisma ORM)</strong>.</li>
                  <li><strong>Cart Service (Udemy example):</strong> Courses in a cart have dynamic features/components → uses a <strong>NoSQL (Key-Value / Document) Database</strong>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 3.1 · Loosely Coupled Microservices &amp; Dedicated Databases</span>
                <span class="diagram-frame-tag">INDEPENDENT LIFECYCLES · TARGETED SCALING</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 320" class="arch-svg" role="img" aria-label="Microservices diagram showing 4 independent services S1 User/Auth on port 4002 with PostgreSQL, S2 Cart with NoSQL, S3 Order with Order DB, and S4 Payment scaled independently across multiple instances">
                  <defs>
                    <marker id="arrow-3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- S1: User/Auth Service -->
                  <rect x="20" y="28" width="192" height="132" rx="14" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="116" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">S1 · INDEPENDENT</text>
                  <text x="116" y="78" text-anchor="middle" class="svg-title">User / Auth Service</text>
                  <text x="116" y="102" text-anchor="middle" class="svg-mono-xs">Own index.js · Port 4002</text>
                  <text x="116" y="128" text-anchor="middle" class="svg-sub">Built &amp; deployed solo</text>

                  <line x1="116" y1="160" x2="116" y2="206" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-3)"/>
                  <rect x="28" y="214" width="176" height="72" rx="12" fill="var(--accent-light)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="116" y="244" text-anchor="middle" class="svg-node">PostgreSQL (RDBMS)</text>
                  <text x="116" y="266" text-anchor="middle" class="svg-sub">Prisma ORM · Structured</text>

                  <!-- S2: Cart Service -->
                  <rect x="234" y="28" width="192" height="132" rx="14" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="330" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">S2 · INDEPENDENT</text>
                  <text x="330" y="78" text-anchor="middle" class="svg-title">Cart Service</text>
                  <text x="330" y="102" text-anchor="middle" class="svg-mono-xs">Own index.js · Port 4003</text>
                  <text x="330" y="128" text-anchor="middle" class="svg-sub">Dynamic course items</text>

                  <line x1="330" y1="160" x2="330" y2="206" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-3)"/>
                  <rect x="242" y="214" width="176" height="72" rx="12" fill="var(--accent-light)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="330" y="244" text-anchor="middle" class="svg-node">NoSQL Database</text>
                  <text x="330" y="266" text-anchor="middle" class="svg-sub">Key-Value / Document</text>

                  <!-- S3: Order Service -->
                  <rect x="448" y="28" width="184" height="132" rx="14" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="540" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">S3 · INDEPENDENT</text>
                  <text x="540" y="78" text-anchor="middle" class="svg-title">Order Service</text>
                  <text x="540" y="102" text-anchor="middle" class="svg-mono-xs">Own index.js · Port 4004</text>
                  <text x="540" y="128" text-anchor="middle" class="svg-sub">Course bookings</text>

                  <line x1="540" y1="160" x2="540" y2="206" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-3)"/>
                  <rect x="456" y="214" width="168" height="72" rx="12" fill="var(--accent-light)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="540" y="244" text-anchor="middle" class="svg-node">Order DB</text>
                  <text x="540" y="266" text-anchor="middle" class="svg-sub">Dedicated Store</text>

                  <!-- S4: Payment Service (Scaled x3) -->
                  <rect x="668" y="16" width="192" height="132" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.2" opacity="0.65"/>
                  <rect x="660" y="22" width="192" height="132" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.3" opacity="0.85"/>
                  <rect x="652" y="28" width="192" height="132" rx="14" fill="var(--bg-surface)" stroke="var(--warning)" stroke-width="1.6"/>
                  <text x="748" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">S4 · SCALED SOLO (20M)</text>
                  <text x="748" y="78" text-anchor="middle" class="svg-title">Payment Service</text>
                  <text x="748" y="102" text-anchor="middle" class="svg-mono-xs">Credit Card / PayPal</text>
                  <text x="748" y="128" text-anchor="middle" class="svg-sub">Multiple instances only here</text>

                  <line x1="748" y1="160" x2="748" y2="206" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-3)"/>
                  <rect x="660" y="214" width="176" height="72" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="748" y="244" text-anchor="middle" class="svg-node">Payment DB</text>
                  <text x="748" y="266" text-anchor="middle" class="svg-sub">Isolated Financial DB</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "3.3",
          title: "How Microservices Solve the 3 Monolith Problems",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Solution 01 · Fault Isolation</div>
                <div class="sub-box__title">Solves Single Point of Failure</div>
                <div class="sub-box__body">If the <strong>Payment Microservice</strong> (handling Credit Card, PayPal) crashes, the <strong>User Service</strong> and <strong>Cart Service</strong> remain 100% unaffected and keep running normally.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Solution 02 · Fast Releases</div>
                <div class="sub-box__title">Solves Deployment Bottleneck</div>
                <div class="sub-box__body">To add a <strong>Credit Card feature</strong>, you only modify and redeploy the <strong>Payment Microservice</strong> without touching any other service.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Solution 03 · Cost Control</div>
                <div class="sub-box__title">Solves Individual Scaling</div>
                <div class="sub-box__body">If the <strong>Payment Microservice</strong> hits <strong>20 Million traffic</strong>, you only add more machines/instances for the <strong>Payment Service</strong> instead of scaling the entire system, saving massive hardware costs.</div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 4: COMMON MISCONCEPTIONS (MONOLITH VS. MICROSERVICES)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-4-misconceptions",
      number: "04",
      shortLabel: "Myths",
      title: "Common Misconceptions (Monolith vs. Microservices)",
      summary: "Debunking the two biggest myths: Monoliths CAN run on multiple machines (App Server 1, 2), and Microservices CAN share one machine at low traffic.",
      subtopicLabels: ["4.1 Monolith Single-Machine Myth", "4.2 Microservices Separate-Machine Myth"],
      diagramCount: 1,
      sections: [
        {
          num: "4.1",
          title: 'Misconception 1: "In a Monolith, everything runs on only ONE single machine"',
          content: `
            <div class="myth-card">
              <div class="myth-header">MYTH 01 · DEBUNKED</div>
              <div class="myth-text">"In a Monolith, everything runs on only ONE single machine."</div>
              <div class="fact-text">
                <strong>Reality: FALSE.</strong> If a monolith has 20–30 Million users, a single App Server cannot handle the load. You <strong>can</strong> scale a monolith across multiple machines (<code>App Server 1</code>, <code>App Server 2</code>) by cloning the entire app — you just can't scale <em>individual modules</em> separately.
              </div>
            </div>
          `
        },
        {
          num: "4.2",
          title: 'Misconception 2: "In Microservices, every service MUST run on its own separate tiny machine"',
          content: `
            <div class="myth-card">
              <div class="myth-header">MYTH 02 · DEBUNKED</div>
              <div class="myth-text">"In Microservices, every service MUST run on its own separate tiny machine."</div>
              <div class="fact-text">
                <strong>Reality: FALSE.</strong> Separate machines (<code>M1</code> for User, <code>M2</code> for Cart) are only needed <strong>when traffic grows and scaling is required</strong>. When user traffic is low, <strong>all microservices (Cart, User, Payment) can easily run together on a single machine</strong> on different ports.
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 4.1 · Hardware Reality: Monolith vs. Microservices Deployment</span>
                <span class="diagram-frame-tag">LOGICAL DESIGN ≠ PHYSICAL MACHINE COUNT</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 280" class="arch-svg" role="img" aria-label="Side-by-side diagram showing Monolith scaled horizontally across App Server 1 and App Server 2, and Microservices running together on a single machine at low traffic on different ports">
                  <defs>
                    <marker id="arrow-4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- LEFT: Monolith on Multiple Machines -->
                  <rect x="16" y="16" width="410" height="248" rx="16" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="221" y="44" text-anchor="middle" class="svg-kicker">REALITY 1 · MONOLITH ON MULTIPLE SERVERS</text>

                  <rect x="148" y="60" width="146" height="36" rx="8" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.3"/>
                  <text x="221" y="83" text-anchor="middle" class="svg-mono-xs">20–30M Users Traffic</text>

                  <line x1="184" y1="96" x2="122" y2="128" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-4)"/>
                  <line x1="258" y1="96" x2="320" y2="128" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-4)"/>

                  <rect x="42" y="136" width="160" height="94" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="122" y="162" text-anchor="middle" class="svg-node">App Server 1</text>
                  <text x="122" y="186" text-anchor="middle" class="svg-sub">Full Cloned Monolith</text>
                  <text x="122" y="208" text-anchor="middle" class="svg-mono-xs">Auth+Cart+Pay+Order</text>

                  <rect x="240" y="136" width="160" height="94" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="320" y="162" text-anchor="middle" class="svg-node">App Server 2</text>
                  <text x="320" y="186" text-anchor="middle" class="svg-sub">Full Cloned Monolith</text>
                  <text x="320" y="208" text-anchor="middle" class="svg-mono-xs">Auth+Cart+Pay+Order</text>

                  <!-- RIGHT: Microservices on Single Host at Low Traffic -->
                  <rect x="454" y="16" width="410" height="248" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="659" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">REALITY 2 · MICROSERVICES ON 1 MACHINE (LOW LOAD)</text>

                  <rect x="484" y="64" width="350" height="148" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="5 3"/>
                  <text x="659" y="88" text-anchor="middle" class="svg-mono-xs">Single Host Machine (Low Traffic Stage)</text>

                  <rect x="502" y="106" width="96" height="78" rx="10" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                  <text x="550" y="138" text-anchor="middle" class="svg-node">User</text>
                  <text x="550" y="160" text-anchor="middle" class="svg-mono-xs">:4001</text>

                  <rect x="611" y="106" width="96" height="78" rx="10" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                  <text x="659" y="138" text-anchor="middle" class="svg-node">Cart</text>
                  <text x="659" y="160" text-anchor="middle" class="svg-mono-xs">:4002</text>

                  <rect x="720" y="106" width="96" height="78" rx="10" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.2"/>
                  <text x="768" y="138" text-anchor="middle" class="svg-node">Payment</text>
                  <text x="768" y="160" text-anchor="middle" class="svg-mono-xs">:4003</text>

                  <text x="659" y="242" text-anchor="middle" class="svg-sub">Split onto separate M1, M2 machines only when traffic grows</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 5: HOW TO CONVERT A MONOLITH TO MICROSERVICES
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-5-migration",
      number: "05",
      shortLabel: "Migration",
      title: "How to Convert a Monolith to Microservices",
      summary: "3 Golden Precautions, the 6-Step Amazon Migration Process (REST/gRPC, Kafka/RabbitMQ, MySQL, Docker), and the critical difference between Code Migration and Module Migration.",
      subtopicLabels: ["5.1 3 Golden Precautions", "5.2 6-Step Migration Process", "5.3 Code vs Module Migration"],
      diagramCount: 1,
      sections: [
        {
          num: "5.1",
          title: "3 Golden Precautions Before Migrating",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Precaution 01</div>
                <div class="sub-box__title">It is NOT a 1-Day Activity</div>
                <div class="sub-box__body">Migration takes time and happens gradually.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Precaution 02</div>
                <div class="sub-box__title">Never Migrate Everything at Once</div>
                <div class="sub-box__body">Do not convert Auth, Payment, Cart, and Course all at once. Migrate <strong>module-by-module</strong> starting with a small or high-pain module.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Precaution 03</div>
                <div class="sub-box__title">Never Route 100% Traffic Immediately</div>
                <div class="sub-box__body">Even after the new Payment Microservice is built and ready, do not shift 100% of live user traffic to it at once.</div>
              </div>
            </div>
          `
        },
        {
          num: "5.2",
          title: "The 6-Step Migration Process (Amazon Example)",
          type: "workflow",
          steps: [
            {
              num: "1",
              title: "Step 1: Understand Your Monolith",
              desc: "Identify all existing functional modules inside your monolith (<code>Auth</code>, <code>Search</code>, <code>Cart</code>, <code>Payment</code>, <code>Order</code>)."
            },
            {
              num: "2",
              title: "Step 2: Identify High-Impact Areas",
              desc: "Find the module getting the heaviest traffic or at risk of crashing in the near future (e.g., <strong>Payment Module</strong>) and select it as the first candidate to extract into a microservice."
            },
            {
              num: "3",
              title: "Step 3: Build API Contracts & Setup Communication",
              desc: "Define how services will communicate with each other: <strong>Synchronous Communication</strong> using <strong>REST APIs</strong> or <strong>gRPC</strong>, and <strong>Asynchronous Communication</strong> using <strong>Message Queues</strong> like <strong>Apache Kafka</strong> or <strong>RabbitMQ</strong>."
            },
            {
              num: "4",
              title: "Step 4: Take One Module & Work On It (Code Migration)",
              desc: "Create a new microservice repository (e.g., <code>Payment Service</code>), move the payment logic from the monolith, select and configure its dedicated database (e.g., <code>MySQL</code>), set up <code>Docker</code>, and create its own <code>index.js</code> entry point."
            },
            {
              num: "5",
              title: "Step 5: Monitoring & Observability",
              desc: "Test, deploy, and actively monitor the new service to observe whether it handles live traffic properly without crashing."
            },
            {
              num: "6",
              title: "Step 6: Scaling & Optimization",
              desc: "Horizontally scale the microservice by increasing the number of machines or vertically optimize it by assigning higher CPU/server resources as needed."
            }
          ]
        },
        {
          num: "5.3",
          title: "Important Distinction — Code Migration vs. Module Migration",
          content: `
            <div class="callout-highlight-box">
              <div class="callout-highlight-tag">CRITICAL MIGRATION RULE</div>
              <ul class="notes-bullet-list" style="margin-top: 0.6rem;">
                <li><strong>Code Migration:</strong> Moving the code to the new microservice repo and setting up its DB/Docker.</li>
                <li><strong>Module/Service Migration:</strong> Only complete when <strong>100% of live traffic</strong> is successfully routed to the new microservice.</li>
                <li><strong>Decommissioning Rule:</strong> <strong>NEVER remove/decommission the Payment Module code from the Monolith</strong> until 100% of traffic is stably running on the new Payment Microservice.</li>
              </ul>
            </div>

            <figure class="diagram-frame" style="margin-top: 1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 5.1 · 6-Step Zero-Downtime Migration Pipeline</span>
                <span class="diagram-frame-tag">CODE MIGRATION → LIVE TRAFFIC CUTOVER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Six-step migration pipeline from Understanding Monolith to High-Impact selection, API Contracts, Code Migration, Monitoring, and Scaling, highlighting the decommissioning gate">
                  <defs>
                    <marker id="arrow-5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Step 1 -->
                  <rect x="18" y="34" width="124" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="80" y="58" text-anchor="middle" class="svg-kicker">STEP 1</text>
                  <text x="80" y="80" text-anchor="middle" class="svg-node">Understand</text>
                  <text x="80" y="98" text-anchor="middle" class="svg-sub">Map Auth, Cart,</text>
                  <text x="80" y="114" text-anchor="middle" class="svg-sub">Payment, Order</text>
                  <line x1="142" y1="82" x2="158" y2="82" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-5)"/>

                  <!-- Step 2 -->
                  <rect x="164" y="34" width="124" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="226" y="58" text-anchor="middle" class="svg-kicker">STEP 2</text>
                  <text x="226" y="80" text-anchor="middle" class="svg-node">High-Impact</text>
                  <text x="226" y="98" text-anchor="middle" class="svg-sub">Pick Payment</text>
                  <text x="226" y="114" text-anchor="middle" class="svg-sub">Module first</text>
                  <line x1="288" y1="82" x2="304" y2="82" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-5)"/>

                  <!-- Step 3 -->
                  <rect x="310" y="34" width="124" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="372" y="58" text-anchor="middle" class="svg-kicker">STEP 3</text>
                  <text x="372" y="80" text-anchor="middle" class="svg-node">Contracts</text>
                  <text x="372" y="98" text-anchor="middle" class="svg-sub">REST / gRPC</text>
                  <text x="372" y="114" text-anchor="middle" class="svg-sub">Kafka / RabbitMQ</text>
                  <line x1="434" y1="82" x2="450" y2="82" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-5)"/>

                  <!-- Step 4 -->
                  <rect x="456" y="34" width="124" height="96" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="518" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">STEP 4</text>
                  <text x="518" y="80" text-anchor="middle" class="svg-node">Code Migrate</text>
                  <text x="518" y="98" text-anchor="middle" class="svg-sub">Repo + MySQL</text>
                  <text x="518" y="114" text-anchor="middle" class="svg-sub">Docker + index.js</text>
                  <line x1="580" y1="82" x2="596" y2="82" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-5)"/>

                  <!-- Step 5 -->
                  <rect x="602" y="34" width="124" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="664" y="58" text-anchor="middle" class="svg-kicker">STEP 5</text>
                  <text x="664" y="80" text-anchor="middle" class="svg-node">Monitor</text>
                  <text x="664" y="98" text-anchor="middle" class="svg-sub">Observe live</text>
                  <text x="664" y="114" text-anchor="middle" class="svg-sub">traffic stability</text>
                  <line x1="726" y1="82" x2="742" y2="82" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrow-5)"/>

                  <!-- Step 6 -->
                  <rect x="748" y="34" width="114" height="96" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="805" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STEP 6</text>
                  <text x="805" y="80" text-anchor="middle" class="svg-node">Scale</text>
                  <text x="805" y="98" text-anchor="middle" class="svg-sub">Horizontal /</text>
                  <text x="805" y="114" text-anchor="middle" class="svg-sub">Vertical CPU</text>

                  <!-- Bottom Distinction Banner -->
                  <rect x="18" y="158" width="844" height="62" rx="12" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.3"/>
                  <text x="440" y="184" text-anchor="middle" class="svg-mono-md">Step 4 = Code Migration Only  |  100% Stable Live Traffic = True Module Migration</text>
                  <text x="440" y="206" text-anchor="middle" class="svg-sub">Decommissioning Rule: Never delete Payment code from Monolith until 100% live traffic runs stably on the Microservice</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 6: 3 CRUCIAL MIGRATION CHALLENGES & DESIGN PATTERNS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-6-patterns",
      number: "06",
      shortLabel: "Patterns",
      title: "3 Crucial Migration Challenges & Design Patterns",
      summary: "Managing live traffic via Canary & Strangler Fig (90%/10% + instant rollback), Distributed Transactions with SAGA (6, 5, 8 tables), and Data Consistency via Outbox + Apache Kafka.",
      subtopicLabels: ["6.1 Canary & Strangler Pattern", "6.2 SAGA Pattern", "6.3 Outbox Pattern + Kafka"],
      diagramCount: 3,
      sections: [
        {
          num: "6.1",
          title: "Challenge 1: How to Manage Traffic? → Canary Deployment & Strangler Pattern",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">A. Gradual Percentage Rollout</div>
                <div class="sub-box__title">Canary Deployment</div>
                <div class="sub-box__body">
                  Instead of sending all users to the new software version (Payment Microservice), route a <strong>small subset of users</strong> first and increase gradually if no crashes occur:<br><br>
                  <strong>Rollout Progression:</strong> <code>0.1% users → 1% users → 5% users → 10% users → 50% users → 100% users</code>
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">B. Routing &amp; Instant Rollback</div>
                <div class="sub-box__title">Strangler Design Pattern</div>
                <div class="sub-box__body">
                  Places a <strong>Controller</strong> in front of both the legacy Monolith and the new Payment Microservice to split incoming API requests.<br><br>
                  <strong>Example:</strong> Out of <strong>100 API requests</strong>, the Controller routes <strong>90% (90 requests) to the Monolith</strong> and <strong>10% (10 requests) to the new Microservice</strong>.<br><br>
                  <strong>Fault Rollback:</strong> If the Payment Microservice fails to process those 10 requests properly, the Controller immediately drops microservice traffic from <strong>10% → 0%</strong>, routes <strong>100% back to the Monolith</strong>, and rolls back.
                </div>
              </div>
            </div>

            <figure class="diagram-frame" style="margin-top: 1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 6.1 · Canary Rollout &amp; Strangler Fig Controller</span>
                <span class="diagram-frame-tag">90% MONOLITH · 10% MICROSERVICE · INSTANT 0% ROLLBACK</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 285" class="arch-svg" role="img" aria-label="Strangler Fig Controller routing 90 percent of 100 requests to Monolith and 10 percent to New Payment Microservice with instant rollback back to 0 percent">
                  <defs>
                    <marker id="arrow-6a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                    <marker id="arrow-6warn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--warning)"/>
                    </marker>
                  </defs>

                  <!-- Incoming Requests -->
                  <rect x="20" y="76" width="150" height="74" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="95" y="108" text-anchor="middle" class="svg-title">100 API</text>
                  <text x="95" y="130" text-anchor="middle" class="svg-sub">Live Requests</text>

                  <line x1="170" y1="113" x2="232" y2="113" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-6a)"/>

                  <!-- Strangler Controller -->
                  <rect x="240" y="54" width="186" height="118" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="333" y="88" text-anchor="middle" class="svg-kicker">STRANGLER PATTERN</text>
                  <text x="333" y="114" text-anchor="middle" class="svg-title">Controller / Proxy</text>
                  <text x="333" y="138" text-anchor="middle" class="svg-sub">Splits Traffic &amp; Monitors</text>
                  <text x="333" y="156" text-anchor="middle" class="svg-mono-xs">Instant 10% → 0% Dial</text>

                  <!-- 90% Arrow to Monolith -->
                  <path d="M 426 92 C 480 92, 500 58, 566 58" fill="none" stroke="var(--accent)" stroke-width="2.2" marker-end="url(#arrow-6a)"/>
                  <text x="498" y="56" text-anchor="middle" class="svg-mono-xs">90% (90 reqs)</text>

                  <!-- Legacy Monolith -->
                  <rect x="574" y="22" width="280" height="76" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="714" y="54" text-anchor="middle" class="svg-title">Legacy Monolith</text>
                  <text x="714" y="76" text-anchor="middle" class="svg-sub">Safe Fallback (100% on Rollback)</text>

                  <!-- 10% Arrow to Microservice -->
                  <path d="M 426 134 C 480 134, 500 166, 566 166" fill="none" stroke="var(--warning)" stroke-width="2.2" marker-end="url(#arrow-6warn)"/>
                  <text x="498" y="176" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">10% (10 reqs)</text>

                  <!-- New Microservice -->
                  <rect x="574" y="124" width="280" height="76" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="714" y="156" text-anchor="middle" class="svg-title">New Payment Microservice</text>
                  <text x="714" y="178" text-anchor="middle" class="svg-sub">If failure → Controller drops 10% to 0%</text>

                  <!-- Canary Progression Strip -->
                  <rect x="20" y="222" width="834" height="44" rx="10" fill="var(--bg-subsection)" stroke="var(--border)" stroke-width="1.2"/>
                  <text x="437" y="249" text-anchor="middle" class="svg-mono-md">Canary Progression:  0.1%  →  1%  →  5%  →  10%  →  50%  →  100% Live Users</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "6.2",
          title: "Challenge 2: How to Manage Distributed Transactions? → SAGA Design Pattern",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Problem:</strong> Suppose a single transaction spans 3 separate microservices, each with its own dedicated database:
                <ol class="notes-ordered-list">
                  <li><code>User Microservice</code> (6 DB tables updated → <strong>Success</strong>)</li>
                  <li><code>Order Microservice</code> (5 DB tables updated → <strong>Success</strong>)</li>
                  <li><code>Payment Microservice</code> (Needs 8 DB table updates → <strong>2 succeed, 6 FAIL</strong>)</li>
                </ol>
              </li>
              <li>Because each service has a separate database, a simple local rollback cannot undo the committed changes in <code>Order DB</code> and <code>User DB</code>.</li>
              <li><strong>The Solution:</strong> Use the <strong>SAGA Design Pattern</strong>, which manages multi-service distributed transactions and triggers compensating rollbacks across <code>Payment</code>, <code>Order</code>, and <code>User</code> microservices if any step fails.</li>
            </ul>

            <figure class="diagram-frame" style="margin-top: 1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 6.2 · SAGA Pattern (Forward Steps &amp; Compensating Rollbacks)</span>
                <span class="diagram-frame-tag">DISTRIBUTED MULTI-DATABASE ROLLBACK</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="SAGA pattern diagram showing User Service updating 6 tables, Order Service updating 5 tables, Payment Service failing on 6 of 8 tables, and compensating rollback undoing all three in reverse">
                  <defs>
                    <marker id="arrow-6s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--success)"/>
                    </marker>
                    <marker id="arrow-6r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--danger)"/>
                    </marker>
                  </defs>

                  <!-- Step 1: User -->
                  <rect x="24" y="28" width="236" height="106" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="142" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STEP 1 · SUCCESS ✓</text>
                  <text x="142" y="80" text-anchor="middle" class="svg-title">User Microservice</text>
                  <text x="142" y="106" text-anchor="middle" class="svg-mono-xs">6 DB Tables Updated</text>

                  <line x1="260" y1="81" x2="314" y2="81" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-6s)"/>

                  <!-- Step 2: Order -->
                  <rect x="322" y="28" width="236" height="106" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="440" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STEP 2 · SUCCESS ✓</text>
                  <text x="440" y="80" text-anchor="middle" class="svg-title">Order Microservice</text>
                  <text x="440" y="106" text-anchor="middle" class="svg-mono-xs">5 DB Tables Updated</text>

                  <line x1="558" y1="81" x2="612" y2="81" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-6s)"/>

                  <!-- Step 3: Payment FAIL -->
                  <rect x="620" y="28" width="236" height="106" rx="14" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                  <text x="738" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">STEP 3 · FAILED ✕</text>
                  <text x="738" y="80" text-anchor="middle" class="svg-title">Payment Microservice</text>
                  <text x="738" y="106" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">2 Tables OK · 6 Tables FAIL</text>

                  <!-- Reverse SAGA Compensating Rollback Path -->
                  <path d="M 738 134 L 738 192 L 440 192 L 440 142" fill="none" stroke="var(--danger)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow-6r)"/>
                  <path d="M 440 192 L 142 192 L 142 142" fill="none" stroke="var(--danger)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow-6r)"/>

                  <rect x="234" y="206" width="412" height="38" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="440" y="230" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">SAGA Compensating Rollbacks: Undo Payment → Undo Order → Undo User</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "6.3",
          title: "Challenge 3: How to Manage Data Consistency? → Outbox Pattern",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Problem:</strong> During migration (before the monolith module is decommissioned), both the <strong>Monolith's Payment Table</strong> and the <strong>Payment Microservice's Dedicated DB</strong> exist at the same time. Both must hold identical data (e.g., if <code>x = 5</code> in the Monolith DB, it cannot be <code>x = 4</code> in the Microservice DB).</li>
              <li><strong>The Solution (Outbox Pattern + Kafka):</strong>
                <ol class="notes-ordered-list">
                  <li>When a user makes a payment, the write operation is saved to the <strong>Monolith DB's <code>Payment Table</code></strong>.</li>
                  <li>Simultaneously, the exact same write entry is recorded into an <strong><code>Outbox Table</code></strong> inside the same Monolith DB.</li>
                  <li>From the <code>Outbox Table</code>, an event is pushed to <strong>Apache Kafka</strong>.</li>
                  <li><strong>Kafka</strong> consumes/forwards that event to update the <strong>Payment Microservice's Database</strong>, keeping both databases 100% consistent.</li>
                </ol>
              </li>
            </ul>

            <figure class="diagram-frame" style="margin-top: 1.25rem;">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 6.3 · Transactional Outbox Pattern + Apache Kafka Sync</span>
                <span class="diagram-frame-tag">ZERO DATA DRIFT (x = 5 IN BOTH DBS)</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Outbox Pattern diagram showing payment write saved atomically to Monolith Payment Table and Outbox Table, then streamed to Apache Kafka to keep Payment Microservice DB 100 percent consistent">
                  <defs>
                    <marker id="arrow-6o" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- User Payment Write -->
                  <rect x="16" y="74" width="132" height="82" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="82" y="106" text-anchor="middle" class="svg-node">User Payment</text>
                  <text x="82" y="128" text-anchor="middle" class="svg-mono-xs">Write: x = 5</text>

                  <line x1="148" y1="115" x2="196" y2="115" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-6o)"/>

                  <!-- Monolith DB Container -->
                  <rect x="204" y="24" width="234" height="190" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="321" y="50" text-anchor="middle" class="svg-kicker">MONOLITH DATABASE (ATOMIC)</text>

                  <rect x="224" y="64" width="194" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="321" y="88" text-anchor="middle" class="svg-node">1. Payment Table</text>
                  <text x="321" y="106" text-anchor="middle" class="svg-mono-xs">Saved: x = 5 ✓</text>

                  <rect x="224" y="134" width="194" height="58" rx="10" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="321" y="158" text-anchor="middle" class="svg-node">2. Outbox Table</text>
                  <text x="321" y="178" text-anchor="middle" class="svg-mono-xs">Event Recorded: x = 5</text>

                  <!-- Arrow Outbox -> Kafka -->
                  <line x1="438" y1="162" x2="494" y2="162" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-6o)"/>
                  <text x="466" y="150" text-anchor="middle" class="svg-mono-xs">3. Push</text>

                  <!-- Apache Kafka -->
                  <rect x="502" y="94" width="138" height="110" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="571" y="130" text-anchor="middle" class="svg-kicker">EVENT BROKER</text>
                  <text x="571" y="156" text-anchor="middle" class="svg-title">Apache Kafka</text>
                  <text x="571" y="180" text-anchor="middle" class="svg-sub">Streams Event</text>

                  <!-- Arrow Kafka -> Microservice DB -->
                  <line x1="640" y1="149" x2="690" y2="149" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-6o)"/>
                  <text x="665" y="138" text-anchor="middle" class="svg-mono-xs">4. Sync</text>

                  <!-- Payment Microservice DB -->
                  <rect x="698" y="76" width="166" height="138" rx="16" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="781" y="108" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">MICROSERVICE DB</text>
                  <text x="781" y="134" text-anchor="middle" class="svg-title">Payment DB</text>
                  <text x="781" y="160" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Updated: x = 5 ✓</text>
                  <text x="781" y="186" text-anchor="middle" class="svg-sub">100% Consistent</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 7: WHAT IS AN API GATEWAY?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-7-api-gateway",
      number: "07",
      shortLabel: "API Gateway",
      title: "What is an API Gateway?",
      summary: "Amazon profile update example (/api/v1/update-profile), why clients shouldn't know internal microservice locations, and how the API Gateway acts as a single smart entry point.",
      subtopicLabels: ["7.1 Amazon Profile Update", "7.2 Core Role of API Gateway"],
      diagramCount: 1,
      sections: [
        {
          num: "7.1",
          title: "Real-World Example (Amazon Profile Update)",
          content: `
            <p>Imagine an Amazon-like application built with microservices (<code>User Service</code>, <code>Payment Service</code>, <code>Order Service</code>):</p>
            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li>A user on a mobile or laptop device (the <strong>Client</strong>) wants to update their phone number or email address.</li>
              <li>On the UI, the user simply clicks the <strong>"Update Profile"</strong> button, edits their details, and clicks <strong>"Save"</strong>.</li>
              <li>Behind the scenes, clicking "Save" triggers an API endpoint like <code>/api/v1/update-profile</code>.</li>
              <li><strong>The Problem:</strong> The client/user has zero knowledge of your backend architecture, which internal microservice handles profile updates, or where that microservice is hosted. Furthermore, exposing internal microservice details directly to the client is bad practice.</li>
            </ul>
          `
        },
        {
          num: "7.2",
          title: "Core Role of an API Gateway",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Acts as an Interface:</strong> The API Gateway sits between the <strong>Client</strong> and the <strong>Backend Microservices</strong>.</li>
              <li><strong>Single Entry Point:</strong> It serves as the single entry point for all incoming client API requests (whether related to users, payments, or orders).</li>
              <li><strong>Smart Request Routing:</strong> When the client hits <code>/api/v1/update-profile</code>, the API Gateway accepts the request, reads the endpoint, understands that profile information belongs to the <strong>User Microservice</strong>, and automatically routes/forwards the request to the <code>User Service</code>.</li>
            </ul>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">IN SIMPLE WORDS</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary); font-size: 1.05rem;">
                <strong>An API Gateway tells us WHICH microservice the user wants to talk to.</strong>
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 7.1 · API Gateway Routing (/api/v1/update-profile)</span>
                <span class="diagram-frame-tag">SINGLE ENTRY POINT · HIDES BACKEND TOPOLOGY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 260" class="arch-svg" role="img" aria-label="API Gateway diagram routing /api/v1/update-profile from Client to User Service while hiding Payment and Order microservices">
                  <defs>
                    <marker id="arrow-7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Client -->
                  <rect x="20" y="84" width="166" height="92" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="103" y="114" text-anchor="middle" class="svg-title">Client</text>
                  <text x="103" y="136" text-anchor="middle" class="svg-sub">Mobile / Laptop</text>
                  <text x="103" y="158" text-anchor="middle" class="svg-mono-xs">Clicks "Save"</text>

                  <!-- Arrow Client -> Gateway -->
                  <line x1="186" y1="130" x2="292" y2="130" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-7)"/>
                  <text x="239" y="118" text-anchor="middle" class="svg-mono-xs">/api/v1/</text>
                  <text x="239" y="148" text-anchor="middle" class="svg-mono-xs">update-profile</text>

                  <!-- API Gateway -->
                  <rect x="300" y="64" width="210" height="132" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="405" y="96" text-anchor="middle" class="svg-kicker">SINGLE ENTRY POINT</text>
                  <text x="405" y="124" text-anchor="middle" class="svg-title">API Gateway</text>
                  <text x="405" y="150" text-anchor="middle" class="svg-sub">Reads endpoint &amp; decides</text>
                  <text x="405" y="170" text-anchor="middle" class="svg-mono-xs">WHICH service to call</text>

                  <!-- Active Route -> User Service -->
                  <path d="M 510 106 C 560 106, 578 54, 628 54" fill="none" stroke="var(--success)" stroke-width="2.4" marker-end="url(#arrow-7)"/>
                  <text x="568" y="64" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Routed ✓</text>

                  <rect x="636" y="20" width="220" height="66" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="746" y="48" text-anchor="middle" class="svg-title">User Service</text>
                  <text x="746" y="68" text-anchor="middle" class="svg-sub">Updates Phone / Email ✓</text>

                  <!-- Inactive Routes -->
                  <line x1="510" y1="130" x2="628" y2="130" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="4 4"/>
                  <rect x="636" y="98" width="220" height="62" rx="12" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.4"/>
                  <text x="746" y="125" text-anchor="middle" class="svg-node">Payment Service</text>
                  <text x="746" y="144" text-anchor="middle" class="svg-sub">Internal · Hidden from Client</text>

                  <path d="M 510 156 C 560 156, 578 206, 628 206" fill="none" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="4 4"/>
                  <rect x="636" y="174" width="220" height="62" rx="12" fill="var(--bg-surface)" stroke="var(--border)" stroke-width="1.4"/>
                  <text x="746" y="201" text-anchor="middle" class="svg-node">Order Service</text>
                  <text x="746" y="220" text-anchor="middle" class="svg-sub">Internal · Hidden from Client</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 8: KEY ADVANTAGES & FACILITIES PROVIDED BY AN API GATEWAY
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-8-gateway-features",
      number: "08",
      shortLabel: "Gateway Features",
      title: "Key Advantages & Facilities Provided by an API Gateway",
      summary: "API Composition for Mobile vs Desktop (Amazon My Orders), Centralized OAuth 2.0 Authentication with Auth Server, and Dynamic Service Discovery via Eureka Server.",
      subtopicLabels: ["8.1 API Composition", "8.2 Centralized OAuth 2.0", "8.3 Service Discovery (Eureka)"],
      diagramCount: 3,
      sections: [
        {
          num: "8.1",
          title: "API Composition",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What it means:</strong> Calling multiple backend microservices and combining their responses based on the client's device type.</li>
              <li><strong>Example ("My Orders" Page on Amazon):</strong>
                <ul class="notes-sub-list">
                  <li><strong>On a Mobile Device:</strong> Because screen space is limited, the "My Orders" page only shows <strong>2 sections</strong>: <em>Product Details</em> and <em>Invoice Details</em>. The API Gateway only calls those 2 services.</li>
                  <li><strong>On a Laptop/Desktop Device:</strong> The exact same "My Orders" page shows <strong>3+ sections</strong>:
                    <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                      <li><em>Product Details</em> → Fetched from <strong>Product Service</strong></li>
                      <li><em>Invoice Details</em> → Fetched from <strong>Invoice Service</strong></li>
                      <li><em>Ratings &amp; Reviews</em> → Fetched from <strong>Rating &amp; Review Service</strong></li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>Depending on the device, the API Gateway dynamically invokes the required microservices and provides the appropriate set of APIs (this composition can also be managed using <strong>GraphQL</strong>).</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 8.1 · Device-Aware API Composition ("My Orders" Page)</span>
                <span class="diagram-frame-tag">MOBILE (2 CALLS) VS DESKTOP (3 CALLS)</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 260" class="arch-svg" role="img" aria-label="API Composition diagram showing Mobile fetching Product and Invoice services while Desktop fetches Product, Invoice, and Rating and Review services via API Gateway">
                  <defs>
                    <marker id="arrow-8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Mobile Client -->
                  <rect x="20" y="34" width="166" height="78" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="103" y="64" text-anchor="middle" class="svg-title">Mobile Client</text>
                  <text x="103" y="86" text-anchor="middle" class="svg-sub">Small screen · 2 Sections</text>

                  <!-- Laptop Client -->
                  <rect x="20" y="148" width="166" height="78" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="103" y="178" text-anchor="middle" class="svg-title">Laptop / Desktop</text>
                  <text x="103" y="200" text-anchor="middle" class="svg-sub">Wide screen · 3+ Sections</text>

                  <line x1="186" y1="73" x2="294" y2="110" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-8a)"/>
                  <line x1="186" y1="187" x2="294" y2="150" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-8a)"/>

                  <!-- API Gateway -->
                  <rect x="302" y="68" width="204" height="124" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="404" y="100" text-anchor="middle" class="svg-kicker">API COMPOSITION</text>
                  <text x="404" y="128" text-anchor="middle" class="svg-title">API Gateway</text>
                  <text x="404" y="152" text-anchor="middle" class="svg-sub">Aggregates responses</text>
                  <text x="404" y="172" text-anchor="middle" class="svg-mono-xs">(or GraphQL Layer)</text>

                  <!-- Calls to Services -->
                  <path d="M 506 102 L 628 54" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-8a)"/>
                  <line x1="506" y1="130" x2="628" y2="130" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-8a)"/>
                  <path d="M 506 158 L 628 206" fill="none" stroke="var(--warning)" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arrow-8a)"/>

                  <!-- Services -->
                  <rect x="636" y="22" width="222" height="60" rx="12" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="747" y="48" text-anchor="middle" class="svg-node">1. Product Service</text>
                  <text x="747" y="67" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Mobile + Desktop</text>

                  <rect x="636" y="100" width="222" height="60" rx="12" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="747" y="126" text-anchor="middle" class="svg-node">2. Invoice Service</text>
                  <text x="747" y="145" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Mobile + Desktop</text>

                  <rect x="636" y="178" width="222" height="60" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="747" y="204" text-anchor="middle" class="svg-node">3. Rating &amp; Review Service</text>
                  <text x="747" y="223" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Desktop Only</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "8.2",
          title: "Centralized Authentication & Authorization (OAuth 2.0 Flow)",
          content: `
            <p><strong>What it means:</strong> Instead of writing duplicate authentication logic inside every single microservice (<code>User</code>, <code>Payment</code>, <code>Order</code>), authentication is centralized using an <strong>Auth Server</strong> and the <strong>API Gateway</strong>.</p>
            <ol class="notes-ordered-list" style="margin-top: 0.75rem;">
              <li>The <strong>Client</strong> requests an <strong>Access Token</strong> from the <strong>Auth Server</strong>.</li>
              <li>The <strong>Auth Server</strong> provides the <strong>Access Token</strong> back to the Client.</li>
              <li>The <strong>Client</strong> sends the API request <em>along with the Access Token</em> to the <strong>API Gateway</strong>.</li>
              <li>The <strong>API Gateway</strong> validates the Access Token with the <strong>Auth Server</strong>.</li>
              <li><strong>If Valid:</strong> The API Gateway routes the request to the appropriate backend microservice.</li>
              <li><strong>If Invalid:</strong> The API Gateway immediately rejects the request at the edge.</li>
            </ol>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 8.2 · Centralized OAuth 2.0 Edge Authentication Flow</span>
                <span class="diagram-frame-tag">ZERO DUPLICATE AUTH IN MICROSERVICES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Six-step OAuth 2.0 centralized authentication flow between Client, Auth Server, API Gateway, and Backend Microservices">
                  <defs>
                    <marker id="arrow-8b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Auth Server (Top Center) -->
                  <rect x="292" y="18" width="230" height="66" rx="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.6"/>
                  <text x="407" y="46" text-anchor="middle" class="svg-title">Auth Server (OAuth 2.0)</text>
                  <text x="407" y="68" text-anchor="middle" class="svg-sub">Issues &amp; Validates Access Tokens</text>

                  <!-- Client (Bottom Left) -->
                  <rect x="24" y="142" width="164" height="84" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="106" y="176" text-anchor="middle" class="svg-title">Client</text>
                  <text x="106" y="198" text-anchor="middle" class="svg-sub">Holds Access Token</text>

                  <!-- Steps 1 & 2: Client <-> Auth Server -->
                  <path d="M 106 142 L 106 46 L 284 46" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-8b)"/>
                  <text x="192" y="36" text-anchor="middle" class="svg-mono-xs">1. Request Token</text>
                  <path d="M 292 66 L 136 66 L 136 134" fill="none" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#arrow-8b)"/>
                  <text x="218" y="84" text-anchor="middle" class="svg-mono-xs">2. Return Token</text>

                  <!-- Step 3: Client -> API Gateway -->
                  <line x1="188" y1="184" x2="310" y2="184" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-8b)"/>
                  <text x="249" y="172" text-anchor="middle" class="svg-mono-xs">3. Request + Token</text>

                  <!-- API Gateway (Bottom Center) -->
                  <rect x="318" y="138" width="196" height="92" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="416" y="172" text-anchor="middle" class="svg-title">API Gateway</text>
                  <text x="416" y="194" text-anchor="middle" class="svg-sub">Validates token at edge</text>
                  <text x="416" y="214" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">6. Invalid → Reject ✕</text>

                  <!-- Step 4: Gateway <-> Auth Server -->
                  <line x1="416" y1="138" x2="416" y2="92" stroke="var(--warning)" stroke-width="1.8" marker-end="url(#arrow-8b)"/>
                  <text x="490" y="118" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">4. Validate Token</text>

                  <!-- Step 5: Valid -> Backend -->
                  <line x1="514" y1="184" x2="626" y2="184" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-8b)"/>
                  <text x="570" y="172" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">5. Valid ✓</text>

                  <!-- Backend Services -->
                  <rect x="634" y="138" width="222" height="92" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="745" y="172" text-anchor="middle" class="svg-title">Backend Services</text>
                  <text x="745" y="196" text-anchor="middle" class="svg-sub">User · Payment · Order</text>
                  <text x="745" y="216" text-anchor="middle" class="svg-mono-xs">Pure business logic</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "8.3",
          title: "Service Discovery Integration",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Problem:</strong> When we horizontally scale a microservice (e.g., spinning up multiple instances of <code>User Service</code> like <code>User-1</code> and <code>User-2</code> on separate machines), each machine has a <strong>different IP address</strong> (e.g., <code>x.y.z</code> vs. <code>a.b.c</code>) and runs on a <strong>different port</strong> (e.g., <code>Port 4000</code> vs. <code>Port 4001</code>). Additionally, some instances (<code>Order-2</code>, <code>Order-3</code>) might go down or become inactive while only <code>Order-1</code> is active. How does the API Gateway know which IP and port to call?</li>
              <li><strong>The Solution (Service Discovery — e.g., Eureka Server):</strong>
                <ul class="notes-sub-list">
                  <li>Whenever a new microservice instance (<code>User-3</code>, <code>Order-1</code>) is created, it <strong>registers itself</strong> with <strong>Service Discovery</strong>.</li>
                  <li>When a client triggers <code>/api/v1/order</code>, the API Gateway asks <strong>Service Discovery</strong>: <em>"Which instance of the Order Service is currently active and free?"</em></li>
                  <li><strong>Service Discovery</strong> replies with the active instance's exact network location (e.g., <code>Order-1</code> is available at IP <code>x.y.z</code> on <code>Port 4002</code>).</li>
                  <li>The API Gateway then routes the request to that exact backend microservice.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 8.3 · Dynamic Service Discovery (Eureka Server Lookup)</span>
                <span class="diagram-frame-tag">DYNAMIC IPS &amp; PORTS · AUTO-REGISTRATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Service Discovery diagram showing API Gateway querying Eureka Server for /api/v1/order and routing to active Order-1 at x.y.z port 4002 while Order-2 and Order-3 are down">
                  <defs>
                    <marker id="arrow-8c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- API Gateway -->
                  <rect x="24" y="136" width="194" height="94" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="121" y="168" text-anchor="middle" class="svg-title">API Gateway</text>
                  <text x="121" y="190" text-anchor="middle" class="svg-mono-xs">/api/v1/order</text>
                  <text x="121" y="212" text-anchor="middle" class="svg-sub">Needs live IP &amp; Port</text>

                  <!-- Service Discovery (Eureka) -->
                  <rect x="282" y="20" width="268" height="84" rx="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.6"/>
                  <text x="416" y="48" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">SERVICE REGISTRY</text>
                  <text x="416" y="72" text-anchor="middle" class="svg-title">Service Discovery (Eureka)</text>
                  <text x="416" y="92" text-anchor="middle" class="svg-mono-xs">Order-1 → x.y.z : 4002 (Active)</text>

                  <!-- Query & Reply Arrows -->
                  <path d="M 121 136 L 121 54 L 274 54" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-8c)"/>
                  <text x="195" y="44" text-anchor="middle" class="svg-mono-xs">1. Query active Order?</text>

                  <path d="M 282 78 L 154 78 L 154 128" fill="none" stroke="var(--warning)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#arrow-8c)"/>
                  <text x="220" y="96" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">2. x.y.z:4002</text>

                  <!-- Route to Order-1 -->
                  <line x1="218" y1="182" x2="612" y2="182" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-8c)"/>
                  <text x="416" y="172" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">3. Routes directly to Order-1 (x.y.z : Port 4002)</text>

                  <!-- Registration arrow from instances -->
                  <path d="M 740 132 L 740 62 L 558 62" fill="none" stroke="var(--border-strong)" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrow-8c)"/>
                  <text x="652" y="52" text-anchor="middle" class="svg-mono-xs">Instances Auto-Register</text>

                  <!-- Order Instances -->
                  <rect x="620" y="138" width="236" height="50" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="738" y="160" text-anchor="middle" class="svg-node">Order-1 ✓ Active</text>
                  <text x="738" y="178" text-anchor="middle" class="svg-mono-xs">IP: x.y.z · Port 4002</text>

                  <rect x="620" y="198" width="112" height="44" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="676" y="224" text-anchor="middle" class="svg-sub">Order-2 ✕ Down</text>

                  <rect x="744" y="198" width="112" height="44" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="800" y="224" text-anchor="middle" class="svg-sub">Order-3 ✕ Down</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 9: WHAT IS A LOAD BALANCER & HOW DOES IT DIFFER FROM AN API GATEWAY?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-9-lb-vs-gateway",
      number: "09",
      shortLabel: "LB vs Gateway",
      title: "What is a Load Balancer & How Does It Differ from an API Gateway?",
      summary: "Distributing traffic across healthy Payment instances (Payment-1 vs busy Payment-3 & down Payment-2), and the golden difference between Service routing and Instance routing.",
      subtopicLabels: ["9.1 Core Role of Load Balancer", "9.2 API Gateway vs Load Balancer"],
      diagramCount: 1,
      sections: [
        {
          num: "9.1",
          title: "Core Role of a Load Balancer",
          content: `
            <ul class="notes-bullet-list">
              <li>Suppose a user wants to make a payment. The API Gateway reads <code>/api/v1/payment</code> and knows the request must go to the <strong>Payment Microservice</strong>.</li>
              <li>However, due to high traffic, the Payment Microservice is scaled across 3 instances: <code>Payment-1</code>, <code>Payment-2</code>, and <code>Payment-3</code>:
                <ul class="notes-sub-list">
                  <li><code>Payment-3</code> is currently <strong>busy</strong> handling heavy traffic.</li>
                  <li><code>Payment-2</code> is currently <strong>inactive/down</strong>.</li>
                  <li><code>Payment-1</code> is <strong>active and available</strong> to take traffic.</li>
                </ul>
              </li>
              <li>The <strong>Load Balancer</strong> checks the traffic load and health status of all instances and routes the user's request specifically to <code>Payment-1</code>.</li>
            </ul>
          `
        },
        {
          num: "9.2",
          title: "API Gateway vs. Load Balancer (The Core Difference)",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">Service-Level Routing</div>
                <div class="sub-box__title">API Gateway</div>
                <div class="sub-box__body">Determines <strong>WHICH microservice</strong> the user wants to talk to (e.g., <code>User Service</code> vs. <code>Payment Service</code> vs. <code>Order Service</code>).</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Instance-Level Distribution</div>
                <div class="sub-box__title">Load Balancer</div>
                <div class="sub-box__body">Determines <strong>WHICH instance of that microservice</strong> the user should talk to (e.g., Instance <code>P1</code> vs. <code>P2</code> vs. <code>P3</code> of the Payment Service) by distributing traffic across healthy instances.</div>
              </div>
            </div>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">NOTE ON AWS LOAD BALANCERS</div>
              <p style="margin-top: 0.45rem; color: var(--text-secondary);">
                Some cloud load balancers (like <strong>AWS Application Load Balancers</strong>) have the capability to route requests to different microservices, but they are very expensive, so dedicated <strong>API Gateways</strong> are widely used alongside Load Balancers.
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 9.1 · API Gateway (Which Service?) → Load Balancer (Which Instance?)</span>
                <span class="diagram-frame-tag">TWO-STAGE ROUTING</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram comparing API Gateway choosing Payment Service and Load Balancer choosing healthy Payment-1 over down Payment-2 and busy Payment-3">
                  <defs>
                    <marker id="arrow-9" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Client Request -->
                  <rect x="16" y="88" width="136" height="74" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="84" y="118" text-anchor="middle" class="svg-node">Client</text>
                  <text x="84" y="140" text-anchor="middle" class="svg-mono-xs">/api/v1/payment</text>

                  <line x1="152" y1="125" x2="196" y2="125" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-9)"/>

                  <!-- API Gateway -->
                  <rect x="204" y="68" width="176" height="114" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="292" y="96" text-anchor="middle" class="svg-kicker">WHICH SERVICE?</text>
                  <text x="292" y="122" text-anchor="middle" class="svg-title">API Gateway</text>
                  <text x="292" y="146" text-anchor="middle" class="svg-sub">Picks Payment</text>
                  <text x="292" y="164" text-anchor="middle" class="svg-sub">Microservice</text>

                  <line x1="380" y1="125" x2="424" y2="125" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-9)"/>

                  <!-- Load Balancer -->
                  <rect x="432" y="68" width="184" height="114" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="524" y="96" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">WHICH INSTANCE?</text>
                  <text x="524" y="122" text-anchor="middle" class="svg-title">Load Balancer</text>
                  <text x="524" y="146" text-anchor="middle" class="svg-sub">Health + Traffic</text>
                  <text x="524" y="164" text-anchor="middle" class="svg-sub">Check across P1–P3</text>

                  <!-- Routing to Payment-1 -->
                  <path d="M 616 104 L 672 52" fill="none" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-9)"/>
                  <line x1="616" y1="125" x2="672" y2="125" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="4 4"/>
                  <path d="M 616 146 L 672 198" fill="none" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="4 4"/>

                  <!-- Instances -->
                  <rect x="680" y="20" width="182" height="60" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="771" y="46" text-anchor="middle" class="svg-node">Payment-1 ✓</text>
                  <text x="771" y="65" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Active &amp; Selected</text>

                  <rect x="680" y="95" width="182" height="60" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.3" opacity="0.75"/>
                  <text x="771" y="121" text-anchor="middle" class="svg-node">Payment-2 ✕</text>
                  <text x="771" y="140" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Inactive / Down</text>

                  <rect x="680" y="170" width="182" height="60" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.3" opacity="0.85"/>
                  <text x="771" y="196" text-anchor="middle" class="svg-node">Payment-3 ⚠</text>
                  <text x="771" y="215" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Busy / Heavy Load</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 10: REGIONS & AVAILABILITY ZONES
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-10-regions-azs",
      number: "10",
      shortLabel: "Regions & AZs",
      title: "Regions & Availability Zones (High-Scale Infrastructure Basics)",
      summary: "Geographic Regions (Massachusetts, California), isolated city-level Availability Zones (Boston/Cambridge, LA/SF), and automatic AZ-level & Region-level failover.",
      subtopicLabels: ["10.1 Regions vs Availability Zones", "10.2 Failover & High Availability"],
      diagramCount: 1,
      sections: [
        {
          num: "10.1",
          title: "Regions vs. Availability Zones (AZs)",
          content: `
            <p>To understand how API Gateways and Load Balancers work together at massive scale, we must understand <strong>Regions</strong> and <strong>Availability Zones (AZs)</strong>:</p>
            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Geographic Level</div>
                <div class="sub-box__title">Region</div>
                <div class="sub-box__body">A broad geographic area, such as a US State (e.g., <strong>Massachusetts</strong> or <strong>California</strong>).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Data Center Level</div>
                <div class="sub-box__title">Availability Zone (AZ)</div>
                <div class="sub-box__body">
                  Isolated locations/cities within a Region that house dedicated data centers for the application:<br><br>
                  • Inside the <strong>Massachusetts Region</strong>: <strong>Boston (<code>AZ1</code>)</strong> and <strong>Cambridge (<code>AZ2</code>)</strong>.<br>
                  • Inside the <strong>California Region</strong>: <strong>Los Angeles (<code>AZ1</code>)</strong> and <strong>San Francisco (<code>AZ2</code>)</strong>.
                </div>
              </div>
            </div>
          `
        },
        {
          num: "10.2",
          title: "Why Do We Need Regions & AZs? (Failover & High Availability)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>AZ-Level Failover:</strong> If the <strong>Boston (<code>AZ1</code>)</strong> data center goes down, all traffic is automatically routed to <strong>Cambridge (<code>AZ2</code>)</strong> within the same region.</li>
              <li><strong>Region-Level Failover:</strong> If <strong>both</strong> Boston (<code>AZ1</code>) and Cambridge (<code>AZ2</code>) go down, the system switches the entire Region (e.g., routing traffic from <strong>Massachusetts</strong> to <strong>New York</strong> or <strong>California</strong>).</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 10.1 · Multi-Region &amp; Multi-AZ Failover Architecture</span>
                <span class="diagram-frame-tag">AZ FAILOVER + REGION FAILOVER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Regions and Availability Zones diagram showing Massachusetts with Boston AZ1 and Cambridge AZ2, California with Los Angeles AZ1 and San Francisco AZ2, and failover paths">
                  <defs>
                    <marker id="arrow-10" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--warning)"/>
                    </marker>
                  </defs>

                  <!-- Region 1: Massachusetts -->
                  <rect x="20" y="24" width="386" height="174" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="213" y="52" text-anchor="middle" class="svg-kicker">REGION 1 · MASSACHUSETTS</text>

                  <rect x="42" y="72" width="154" height="96" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.4" stroke-dasharray="4 3"/>
                  <text x="119" y="102" text-anchor="middle" class="svg-node">Boston (AZ1)</text>
                  <text x="119" y="124" text-anchor="middle" class="svg-sub">Data Center 1</text>
                  <text x="119" y="148" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">If Down ✕</text>

                  <line x1="196" y1="120" x2="224" y2="120" stroke="var(--warning)" stroke-width="2" marker-end="url(#arrow-10)"/>

                  <rect x="232" y="72" width="154" height="96" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="309" y="102" text-anchor="middle" class="svg-node">Cambridge (AZ2)</text>
                  <text x="309" y="124" text-anchor="middle" class="svg-sub">Data Center 2</text>
                  <text x="309" y="148" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">AZ Failover ✓</text>

                  <!-- Region-Level Failover Arrow -->
                  <path d="M 406 112 L 466 112" fill="none" stroke="var(--warning)" stroke-width="2.2" stroke-dasharray="5 3" marker-end="url(#arrow-10)"/>
                  <text x="440" y="96" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">If Both</text>
                  <text x="440" y="132" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Down</text>

                  <!-- Region 2: California -->
                  <rect x="474" y="24" width="386" height="174" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="667" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">REGION 2 · CALIFORNIA (OR NEW YORK)</text>

                  <rect x="496" y="72" width="158" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="575" y="102" text-anchor="middle" class="svg-node">Los Angeles (AZ1)</text>
                  <text x="575" y="124" text-anchor="middle" class="svg-sub">Data Center 1</text>
                  <text x="575" y="148" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Healthy ✓</text>

                  <rect x="680" y="72" width="158" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="759" y="102" text-anchor="middle" class="svg-node">San Francisco (AZ2)</text>
                  <text x="759" y="124" text-anchor="middle" class="svg-sub">Data Center 2</text>
                  <text x="759" y="148" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Healthy ✓</text>

                  <text x="440" y="228" text-anchor="middle" class="svg-sub">AZ-Level Failover protects against a single city data center outage · Region-Level Failover protects against state-wide outages</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 11: REAL-WORLD INTERVIEW QUESTIONS & END-TO-END REQUEST FLOW
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-11-e2e-flow",
      number: "11",
      shortLabel: "E2E Global Flow",
      title: "Real-World Interview Questions & End-to-End Request Flow",
      summary: "Which comes first (DNS LB → Regional API Gateway → AZ LB), scaling a logical Single Entry Point to millions of requests, and the full 5-step User 5 request journey + failover scenarios.",
      subtopicLabels: ["11.1 Gateway vs LB Order", "11.2 Handling Millions of Requests", "11.3 Complete 5-Step Flow"],
      diagramCount: 1,
      sections: [
        {
          num: "11.1",
          title: "Interview Question 1: Which comes first in a real-world system — API Gateway or Load Balancer?",
          content: `
            <p><strong>Short Answer:</strong> A <strong>DNS-based Load Balancer</strong> comes first, followed by a <strong>Regional API Gateway</strong>, followed by an <strong>Availability Zone (Internal) Load Balancer</strong>.</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Tier 1 · Global / Multi-Region</div>
                <div class="sub-box__title">DNS Load Balancer</div>
                <div class="sub-box__body">Operates at the <strong>Global / Multi-Region level</strong> (picks the closest Region).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Tier 2 · Region Level</div>
                <div class="sub-box__title">Regional API Gateway</div>
                <div class="sub-box__body">Operates at the <strong>Region level</strong> (routes traffic to the closest healthy Availability Zone).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Tier 3 · Availability Zone</div>
                <div class="sub-box__title">Internal Load Balancer</div>
                <div class="sub-box__body">Operates at the <strong>Availability Zone level</strong> (routes traffic to the specific healthy microservice instance).</div>
              </div>
            </div>
          `
        },
        {
          num: "11.2",
          title: 'Interview Question 2: If the API Gateway is a "Single Entry Point", how does it handle millions of requests without crashing?',
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Answer:</strong> It is a single entry point <strong>logically</strong> (hiding thousands of microservices behind one interface), <strong>NOT a single physical machine globally</strong>.</li>
              <li>We deploy <strong>separate API Gateways per Region</strong> (e.g., <code>API Gateway A</code> in California, <code>API Gateway B</code> in Massachusetts, plus gateways near India/Asia).</li>
              <li>A <strong>DNS Load Balancer</strong> distributes global user traffic to the API Gateway in the Region closest to the user, allowing the architecture to effortlessly handle millions of concurrent requests while reducing network latency.</li>
            </ul>
          `
        },
        {
          num: "11.3",
          title: "Complete End-to-End Request Flow (Step-by-Step)",
          content: `
            <p>Suppose <strong><code>User 5</code></strong> (located near California) clicks the <strong>"Place Order"</strong> button on an e-commerce website, triggering <code>/api/v1/order</code>:</p>

            <div class="workflow-stack" style="margin-top: 1rem;">
              <div class="workflow-step">
                <div class="step-circle">1</div>
                <div>
                  <div class="workflow-step__title">Browser &amp; DNS Resolution (DNS Load Balancer)</div>
                  <div class="workflow-step__desc">The browser only understands IP addresses, not English domain names, so it queries <strong>DNS</strong>. The application is hosted in two Regions: <strong>California (<code>API Gateway A</code>)</strong> and <strong>Massachusetts (<code>API Gateway B</code>)</strong>. The <strong>DNS Load Balancer</strong> checks the public IP addresses of all regional API Gateways, sees that <code>User 5</code> is geographically closest to <strong>California</strong>, and returns the <strong>Public IP address of <code>API Gateway A</code></strong>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">2</div>
                <div>
                  <div class="workflow-step__title">HTTP Request to Regional API Gateway</div>
                  <div class="workflow-step__desc">The browser initiates an HTTP request to <code>API Gateway A</code> (California). <code>API Gateway A</code> reads <code>/api/v1/order</code> and knows it needs to invoke the <strong>Order Microservice</strong>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">3</div>
                <div>
                  <div class="workflow-step__title">API Gateway Queries Service Discovery (Selecting the AZ)</div>
                  <div class="workflow-step__desc">Inside California, there are two Availability Zones: <strong>Los Angeles (<code>AZ1</code>)</strong> and <strong>San Francisco (<code>AZ2</code>)</strong>. <code>API Gateway A</code> asks <strong>Service Discovery</strong> for two things: (1) Which Availability Zone is closest to the user and currently healthy? (Returns <code>AZ1 - Los Angeles</code>), and (2) What is the address of the <strong>Load Balancer</strong> inside <code>AZ1</code>? <code>API Gateway A</code> then forwards the traffic to the <strong><code>AZ1</code> Load Balancer</strong>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">4</div>
                <div>
                  <div class="workflow-step__title">AZ Load Balancer Routes to Microservice Instance</div>
                  <div class="workflow-step__desc">Inside <code>AZ1</code>, the Order Microservice has 3 instances: <code>O1</code>, <code>O2</code>, and <code>O3</code>. The <strong><code>AZ1</code> Load Balancer</strong> performs <strong>Health Checks</strong> and <strong>Traffic Checks</strong> across <code>O1</code>, <code>O2</code>, and <code>O3</code>, and routes the request to the best available instance.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">5</div>
                <div>
                  <div class="workflow-step__title">What Happens During Failures? (Failover Scenarios)</div>
                  <div class="workflow-step__desc">
                    <strong>Scenario A (<code>AZ1</code> Goes Down):</strong> If Los Angeles (<code>AZ1</code>) is completely down, <strong>Service Discovery</strong> tells <code>API Gateway A</code> to use the second-closest healthy zone — <strong>San Francisco (<code>AZ2</code>)</strong> — and provides the <code>AZ2</code> Load Balancer's address.<br>
                    <strong>Scenario B (Entire California Region Goes Down):</strong> If both Los Angeles (<code>AZ1</code>) and San Francisco (<code>AZ2</code>) go down, the <strong>DNS Load Balancer</strong> switches regions and returns the IP address of <strong><code>API Gateway B</code> (Massachusetts)</strong>, routing the new HTTP request there.
                  </div>
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 11.1 · Complete Global End-to-End Request Flow (User 5 → Order Pod)</span>
                <span class="diagram-frame-tag">DNS LB → REGIONAL GATEWAY → AZ LB → INSTANCES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 300" class="arch-svg" role="img" aria-label="End-to-end global flow from User 5 in California to DNS Load Balancer, API Gateway A with Service Discovery, AZ1 Los Angeles Load Balancer, and Order instances O1 O2 O3 with failover paths to AZ2 and Massachusetts">
                  <defs>
                    <marker id="arrow-11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- User 5 -->
                  <rect x="14" y="88" width="114" height="78" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="71" y="116" text-anchor="middle" class="svg-node">User 5</text>
                  <text x="71" y="135" text-anchor="middle" class="svg-sub">Near California</text>
                  <text x="71" y="153" text-anchor="middle" class="svg-mono-xs">/api/v1/order</text>

                  <line x1="128" y1="127" x2="158" y2="127" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-11)"/>

                  <!-- DNS LB -->
                  <rect x="166" y="76" width="136" height="102" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="234" y="102" text-anchor="middle" class="svg-kicker">1. GLOBAL TIER</text>
                  <text x="234" y="126" text-anchor="middle" class="svg-node">DNS Load Balancer</text>
                  <text x="234" y="148" text-anchor="middle" class="svg-sub">Returns nearest</text>
                  <text x="234" y="164" text-anchor="middle" class="svg-mono-xs">Gateway A IP</text>

                  <!-- Primary Path -> CA Region -->
                  <line x1="302" y1="112" x2="346" y2="112" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-11)"/>

                  <!-- Region 1: California Box -->
                  <rect x="354" y="16" width="510" height="196" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="609" y="38" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">REGION 1 · CALIFORNIA (PRIMARY)</text>

                  <!-- API Gateway A -->
                  <rect x="372" y="54" width="144" height="82" rx="12" fill="var(--bg-surface)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="444" y="80" text-anchor="middle" class="svg-kicker">2. REGION TIER</text>
                  <text x="444" y="102" text-anchor="middle" class="svg-node">API Gateway A</text>
                  <text x="444" y="122" text-anchor="middle" class="svg-sub">California IP</text>

                  <!-- Service Discovery -->
                  <rect x="372" y="152" width="144" height="46" rx="10" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.3"/>
                  <text x="444" y="173" text-anchor="middle" class="svg-mono-xs">3. Service Discovery</text>
                  <text x="444" y="189" text-anchor="middle" class="svg-sub">Finds healthy AZ</text>
                  <line x1="444" y1="136" x2="444" y2="148" stroke="var(--warning)" stroke-width="1.5"/>

                  <!-- Arrow GW -> AZ1 LB -->
                  <line x1="516" y1="90" x2="554" y2="90" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-11)"/>

                  <!-- AZ1 Los Angeles -->
                  <rect x="562" y="50" width="286" height="86" rx="12" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="705" y="70" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">4. AZ1 (Los Angeles) · Internal LB</text>
                  <rect x="580" y="82" width="74" height="40" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.3"/>
                  <text x="617" y="106" text-anchor="middle" class="svg-mono-xs">O1 ✓</text>
                  <rect x="668" y="82" width="74" height="40" rx="8" fill="var(--accent-light)" stroke="var(--border)"/>
                  <text x="705" y="106" text-anchor="middle" class="svg-mono-xs">O2</text>
                  <rect x="756" y="82" width="74" height="40" rx="8" fill="var(--accent-light)" stroke="var(--border)"/>
                  <text x="793" y="106" text-anchor="middle" class="svg-mono-xs">O3</text>

                  <!-- AZ2 Failover -->
                  <path d="M 516 116 L 554 166" fill="none" stroke="var(--warning)" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrow-11)"/>
                  <rect x="562" y="148" width="286" height="50" rx="10" fill="var(--bg-surface)" stroke="var(--warning)" stroke-width="1.2" stroke-dasharray="4 3"/>
                  <text x="705" y="170" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Scenario A Failover → AZ2 (San Francisco LB)</text>
                  <text x="705" y="187" text-anchor="middle" class="svg-sub">Used automatically if Los Angeles (AZ1) goes down</text>

                  <!-- Region 2 Failover -->
                  <path d="M 234 178 L 234 256 L 346 256" fill="none" stroke="var(--warning)" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#arrow-11)"/>
                  <rect x="354" y="228" width="510" height="56" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.3" stroke-dasharray="5 3"/>
                  <text x="609" y="252" text-anchor="middle" class="svg-mono-md" style="fill: var(--warning);">Scenario B Failover → Region 2: API Gateway B (Massachusetts)</text>
                  <text x="609" y="272" text-anchor="middle" class="svg-sub">DNS Load Balancer switches regions if both AZ1 &amp; AZ2 in California go down</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 12: WHAT IS LOAD BALANCING? (CHAT APPLICATION EXAMPLE)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-12-load-balancing",
      number: "12",
      shortLabel: "Load Balancing",
      title: "What is Load Balancing? (Chat Application Example)",
      summary: "Horizontally scaling a Chat Service across multiple servers (Chat-1, Chat-2), WebSocket message delivery (User A → M1 → User B), and Health & Traffic checks.",
      subtopicLabels: ["12.1 Why Load Balancing", "12.2 Chat App WebSocket Flow"],
      diagramCount: 1,
      sections: [
        {
          num: "12.1",
          title: "Why We Need Load Balancing",
          content: `
            <ul class="notes-bullet-list">
              <li>Suppose we have a <strong>Chatting Application</strong> with a dedicated <strong>Chat Service</strong>.</li>
              <li>As user traffic grows rapidly, running the Chat Service on a single server will slow down or crash the system.</li>
              <li>To handle the load, we <strong>horizontally scale</strong> the Chat Service by adding more servers/instances (<code>Chat Service Instance 1</code> on Server 1, <code>Chat Service Instance 2</code> on Server 2).</li>
            </ul>
          `
        },
        {
          num: "12.2",
          title: "How User Communication & Load Balancing Work",
          content: `
            <ul class="notes-bullet-list">
              <li>Suppose <strong>User A</strong> wants to send message <code>M1</code> to <strong>User B</strong>.</li>
              <li>User A cannot send the message directly to User B; the communication must go <strong>via a Server (Chat Service)</strong> using <strong>WebSocket communication</strong>:
                <ul class="notes-sub-list">
                  <li><strong>Flow:</strong> <code>User A</code> → sends <code>M1</code> to <code>Chat Server</code> → forwards <code>M1</code> to <code>User B</code>.</li>
                </ul>
              </li>
              <li>Because we have multiple instances (<code>Chat-1</code> and <code>Chat-2</code>), how do we decide which server should receive User A's <code>POST</code> request?</li>
              <li><strong>Role of the Load Balancer:</strong>
                <ul class="notes-sub-list">
                  <li>Sits in front of the multiple microservice instances (<code>Chat-1</code>, <code>Chat-2</code>).</li>
                  <li>Distributes incoming traffic across multiple microservice instances.</li>
                  <li>Continuously performs <strong>Health Checks</strong> (checking which instance is active vs. down) and <strong>Traffic Checks</strong> (checking which instance is overloaded vs. ready to take traffic).</li>
                  <li>If <code>Chat-2</code> is down or not ready, the Load Balancer routes User A's request to <code>Chat-1</code>, which then delivers <code>M1</code> to User B.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 12.1 · Chat Application Load Balancing via WebSockets</span>
                <span class="diagram-frame-tag">HEALTH CHECKS &amp; TRAFFIC DISTRIBUTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 235" class="arch-svg" role="img" aria-label="Chat application load balancing diagram showing User A sending M1 through Load Balancer to healthy Chat-1 while skipping down Chat-2 and delivering to User B">
                  <defs>
                    <marker id="arrow-12" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- User A -->
                  <rect x="20" y="76" width="128" height="82" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="84" y="110" text-anchor="middle" class="svg-title">User A</text>
                  <text x="84" y="134" text-anchor="middle" class="svg-mono-xs">Sends Msg M1</text>

                  <line x1="148" y1="117" x2="218" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-12)"/>
                  <text x="183" y="106" text-anchor="middle" class="svg-mono-xs">WebSocket</text>

                  <!-- Load Balancer -->
                  <rect x="226" y="56" width="194" height="122" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="323" y="88" text-anchor="middle" class="svg-kicker">TRAFFIC DISTRIBUTOR</text>
                  <text x="323" y="114" text-anchor="middle" class="svg-title">Load Balancer</text>
                  <text x="323" y="140" text-anchor="middle" class="svg-sub">✓ Health Checks</text>
                  <text x="323" y="160" text-anchor="middle" class="svg-sub">✓ Traffic Checks</text>

                  <!-- Active Route -> Chat-1 -->
                  <path d="M 420 96 L 492 64" fill="none" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-12)"/>

                  <!-- Chat-1 -->
                  <rect x="500" y="24" width="174" height="78" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="587" y="54" text-anchor="middle" class="svg-node">Server 1 · Chat-1 ✓</text>
                  <text x="587" y="76" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Active &amp; Ready</text>

                  <!-- Inactive Route -> Chat-2 -->
                  <path d="M 420 138 L 492 170" fill="none" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="4 4"/>
                  <rect x="500" y="132" width="174" height="78" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.3" opacity="0.72"/>
                  <text x="587" y="162" text-anchor="middle" class="svg-node">Server 2 · Chat-2 ✕</text>
                  <text x="587" y="184" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Down / Not Ready</text>

                  <!-- Deliver to User B -->
                  <path d="M 674 64 L 728 110" fill="none" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-12)"/>
                  <text x="702" y="76" text-anchor="middle" class="svg-mono-xs">M1</text>

                  <!-- User B -->
                  <rect x="736" y="76" width="124" height="82" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="798" y="110" text-anchor="middle" class="svg-title">User B</text>
                  <text x="798" y="134" text-anchor="middle" class="svg-mono-xs">Receives M1 ✓</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 13: TYPES OF LOAD BALANCERS — L4 VS. L7 LOAD BALANCER
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-13-l4-vs-l7",
      number: "13",
      shortLabel: "L4 vs L7 LB",
      title: "Types of Load Balancers — L4 vs. L7 Load Balancer",
      summary: "OSI 7-Layer background, L4 Transport Layer (TCP/UDP, 4 IP/Port params, sticky TCP connection, Post Office Clerk analogy) vs. L7 Application Layer (inspects HTTP paths, body, cookies).",
      subtopicLabels: ["13.1 OSI Model", "13.2 L4 Load Balancer", "13.3 L7 Load Balancer"],
      diagramCount: 1,
      sections: [
        {
          num: "13.1",
          title: "OSI Model Background",
          content: `
            <p>In Computer Networks, the <strong>OSI Model</strong> has 7 layers. Load balancers primarily operate at <strong>Layer 4</strong> and <strong>Layer 7</strong>:</p>
            <div class="osi-layers-list">
              <div class="osi-layer-item"><span>Layer 1</span><span>Physical</span></div>
              <div class="osi-layer-item"><span>Layer 2</span><span>Data Link</span></div>
              <div class="osi-layer-item"><span>Layer 3</span><span>Network</span></div>
              <div class="osi-layer-item osi-layer-item--highlight"><span>Layer 4 ★</span><span>Transport (L4 LB)</span></div>
              <div class="osi-layer-item"><span>Layer 5</span><span>Session</span></div>
              <div class="osi-layer-item"><span>Layer 6</span><span>Presentation</span></div>
              <div class="osi-layer-item osi-layer-item--highlight"><span>Layer 7 ★</span><span>Application (L7 LB)</span></div>
            </div>
          `
        },
        {
          num: "13.2",
          title: "L4 Load Balancer (Transport Layer Load Balancer)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Operating Layer &amp; Protocols:</strong> Operates at <strong>Layer 4 (Transport Layer)</strong>, working directly at the <strong>TCP and UDP protocol level</strong>.</li>
              <li><strong>What L4 CANNOT Understand:</strong> Because it operates at the TCP/UDP level, it <strong>cannot read or understand</strong> <code>HTTP Requests</code>, <code>HTTP Headers</code>, <code>Cookies</code>, <code>Request Body</code>, or <code>HTTP URL Paths</code> (like <code>/api/v1/order</code>, <code>/api/v1/create-room</code>, or <code>/api/v1/send-message</code>).</li>
              <li><strong>What L4 Uses to Route Traffic (4 Parameters):</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Source (Client) IP Address &amp; Port</strong></li>
                  <li><strong>Destination (Server) IP Address &amp; Port</strong></li>
                  <li><strong>Protocol Type</strong> (whether it is TCP or UDP)</li>
                  <li><strong>Server Health / Availability</strong></li>
                </ol>
              </li>
              <li><strong>How L4 Works (Chat App Example):</strong>
                <ul class="notes-sub-list">
                  <li>Suppose we have 3 servers running Chat Service instances (<code>Chat-1</code>, <code>Chat-2</code>, <code>Chat-3</code>), each with its own IP address and running on <code>Port 5000</code>.</li>
                  <li>A <strong>Client (User A)</strong> with its own IP address and OS-assigned default port opens the chat app.</li>
                  <li>The <strong>L4 Load Balancer</strong> looks only at the Client's IP/Port, checks which server is healthy (e.g., selects <code>Server 2 / Chat-2</code>), and <strong>establishes a direct TCP connection</strong> between <code>User A</code> and <code>Server 2</code>.</li>
                  <li><strong>Sticky TCP Connection Behavior:</strong> Once the TCP connection between <code>User A</code> and <code>Server 2</code> is established, <strong>every subsequent message</strong> sent by <code>User A</code> (like <em>"Hi"</em>, creating a room, or joining a room) goes directly to <code>Server 2</code> until that connection is destroyed.</li>
                  <li>The L4 Load Balancer only sees raw, unreadable data packets flowing back and forth; the actual business logic (creating a room vs. sending a message) is handled inside the <code>Chat Service</code> code.</li>
                </ul>
              </li>
            </ul>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">REAL-WORLD ANALOGY · POST OFFICE CLERK</div>
              <p style="margin-top: 0.45rem; color: var(--text-secondary);">
                An L4 Load Balancer is like a <strong>post office clerk who only looks at the envelope's "From Address" and "To Address"</strong> without ever opening the envelope to read the letter inside.
              </p>
            </div>
          `
        },
        {
          num: "13.3",
          title: "L7 Load Balancer (Application Layer Load Balancer)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Operating Layer &amp; Protocols:</strong> Operates at <strong>Layer 7 (Application Layer)</strong>, where protocols like <strong>HTTP, HTTPS, and WebSockets</strong> exist.</li>
              <li><strong>What L7 CAN Understand:</strong> Unlike L4, the L7 Load Balancer is <strong>smart enough to inspect and understand</strong> <code>HTTP/HTTPS Requests</code>, <code>WebSocket connections</code>, <code>HTTP URL Paths</code> (e.g., <code>/api/v1/update-profile</code>), <code>Request Body</code> (e.g., JSON data to join a room), <code>Headers</code>, and <code>Cookies</code>.</li>
              <li><strong>How L7 Works (Multi-Service Routing Example):</strong>
                <ul class="notes-sub-list">
                  <li>Suppose our backend has two different services with multiple instances: <strong>Chat Service</strong> (<code>Chat-1</code>, <code>Chat-2</code>) and <strong>User Service</strong> (<code>User-1</code>, <code>User-2</code>).</li>
                  <li>A user triggers the endpoint <code>/api/v1/update-profile</code>.</li>
                  <li>The <strong>L7 Load Balancer</strong> reads the HTTP path <code>/api/v1/update-profile</code> and understands that this request belongs to the <strong>User Service</strong> (not the Chat Service).</li>
                  <li>It checks <strong>Service Discovery</strong> to see which User Service instance is healthy and available (e.g., <code>User-1</code> is down/busy, <code>User-2</code> is available) and routes the request specifically to <code>User-2</code>.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 13.1 · L4 (Transport Layer) vs. L7 (Application Layer) Load Balancer</span>
                <span class="diagram-frame-tag">ENVELOPE ONLY (L4) VS CONTENT-AWARE ROUTING (L7)</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 285" class="arch-svg" role="img" aria-label="Side-by-side comparison of L4 Load Balancer reading IP and Port to establish sticky TCP connection to Chat-2 port 5000 versus L7 Load Balancer inspecting /api/v1/update-profile and routing via Service Discovery to User-2">
                  <defs>
                    <marker id="arrow-13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- LEFT: L4 -->
                  <rect x="16" y="16" width="412" height="252" rx="16" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="222" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">L4 · TRANSPORT LAYER (TCP / UDP)</text>

                  <rect x="34" y="64" width="166" height="96" rx="12" fill="var(--bg-surface)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="117" y="92" text-anchor="middle" class="svg-node">L4 Load Balancer</text>
                  <text x="117" y="114" text-anchor="middle" class="svg-mono-xs">Reads IP + Port only</text>
                  <text x="117" y="134" text-anchor="middle" class="svg-sub">No URL/Header access</text>

                  <line x1="200" y1="112" x2="246" y2="112" stroke="var(--warning)" stroke-width="2.2" marker-end="url(#arrow-13)"/>
                  <text x="223" y="100" text-anchor="middle" class="svg-mono-xs">TCP</text>

                  <rect x="254" y="64" width="156" height="96" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="332" y="92" text-anchor="middle" class="svg-node">Server 2 (Chat-2)</text>
                  <text x="332" y="114" text-anchor="middle" class="svg-mono-xs">Port 5000</text>
                  <text x="332" y="136" text-anchor="middle" class="svg-sub">Sticky TCP Tunnel</text>

                  <rect x="34" y="182" width="376" height="66" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="222" y="208" text-anchor="middle" class="svg-mono-xs">All subsequent messages ("Hi", Join Room) stay on Server 2</text>
                  <text x="222" y="230" text-anchor="middle" class="svg-sub">Post Office Clerk Analogy: Reads From/To address, never opens letter</text>

                  <!-- RIGHT: L7 -->
                  <rect x="452" y="16" width="412" height="252" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="658" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">L7 · APPLICATION LAYER (HTTP / WS)</text>

                  <rect x="470" y="64" width="174" height="106" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="557" y="90" text-anchor="middle" class="svg-node">L7 Load Balancer</text>
                  <text x="557" y="112" text-anchor="middle" class="svg-mono-xs">Reads /api/v1/</text>
                  <text x="557" y="128" text-anchor="middle" class="svg-mono-xs">update-profile</text>
                  <text x="557" y="150" text-anchor="middle" class="svg-sub">+ Checks Discovery</text>

                  <path d="M 644 106 L 690 82" fill="none" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="4 3"/>
                  <rect x="698" y="56" width="148" height="48" rx="10" fill="var(--bg-surface)" stroke="var(--border)" opacity="0.65"/>
                  <text x="772" y="84" text-anchor="middle" class="svg-sub">Chat-1 / Chat-2</text>

                  <path d="M 644 128 L 690 156" fill="none" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-13)"/>
                  <rect x="698" y="124" width="148" height="62" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="772" y="150" text-anchor="middle" class="svg-node">User-2 ✓</text>
                  <text x="772" y="170" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">User-1 busy/down</text>

                  <rect x="470" y="202" width="376" height="46" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="658" y="230" text-anchor="middle" class="svg-mono-xs">Inspects URL Paths, Headers, Cookies &amp; JSON Body</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 14: STATIC LOAD BALANCING ALGORITHMS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-14-static-algos",
      number: "14",
      shortLabel: "Static Algos",
      title: "Static Load Balancing Algorithms",
      summary: "Round Robin (equal loop & hardware waste), Weighted Round Robin (Weight 3 vs 1 & 10ms vs 10s execution time drawback), and IP Hash (client IP hashing & Proxy Server bottleneck).",
      subtopicLabels: ["14.1 Round Robin", "14.2 Weighted Round Robin", "14.3 IP Hash"],
      diagramCount: 1,
      sections: [
        {
          num: "14.1",
          title: "Round Robin Algorithm",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> Distributes incoming requests <strong>sequentially and equally</strong> across all available server instances in a loop.</li>
              <li><strong>Example:</strong> Suppose 4 users (<code>U1</code>, <code>U2</code>, <code>U3</code>, <code>U4</code>) send requests <code>Req 1</code> to <code>Req 4</code> to two instances (<code>Chat-1</code> and <code>Chat-2</code>):
                <ul class="notes-sub-list">
                  <li><code>Req 1</code> → goes to <code>Chat-1</code> &nbsp;|&nbsp; <code>Req 2</code> → goes to <code>Chat-2</code></li>
                  <li><code>Req 3</code> → goes to <code>Chat-1</code> &nbsp;|&nbsp; <code>Req 4</code> → goes to <code>Chat-2</code></li>
                  <li>If <code>Req 5</code> and <code>Req 6</code> arrive → <code>Req 5</code> goes to <code>Chat-1</code>, <code>Req 6</code> goes to <code>Chat-2</code>.</li>
                </ul>
              </li>
              <li><strong>Major Drawback (Server Capacity Waste):</strong> Suppose <code>Chat-1</code> runs on a <strong>powerful server</strong> (multiple CPUs, high RAM, capable of handling 100 requests) while <code>Chat-2</code> runs on a <strong>weak server</strong> (low CPU/RAM). Because Round Robin distributes traffic 50-50 (e.g., 5 requests to <code>Chat-1</code> and 5 requests to <code>Chat-2</code>), the powerful server's extra capacity goes wasted while the weak server gets stressed.</li>
            </ul>
          `
        },
        {
          num: "14.2",
          title: "Weighted Round Robin Algorithm",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Why it is Used:</strong> Solves the server capacity problem of standard Round Robin.</li>
              <li><strong>How it Works:</strong> We assign a numerical <strong>Weight</strong> to each server based on its hardware capacity (CPU/RAM).</li>
              <li><strong>Example:</strong>
                <ul class="notes-sub-list">
                  <li><code>Chat-1</code> (Strong Server) is assigned <strong>Weight = 3</strong>.</li>
                  <li><code>Chat-2</code> (Weak Server) is assigned <strong>Weight = 1</strong>.</li>
                  <li>When requests <code>1, 2, 3, 4</code> arrive: the <strong>first 3 requests (<code>Req 1</code>, <code>Req 2</code>, <code>Req 3</code>)</strong> go to <code>Chat-1</code>, and the <strong>4th request (<code>Req 4</code>)</strong> goes to <code>Chat-2</code>.</li>
                  <li>When requests <code>5, 6, 7, 8</code> arrive: <code>Req 5, 6, 7</code> go to <code>Chat-1</code>, and <code>Req 8</code> goes to <code>Chat-2</code>.</li>
                </ul>
              </li>
              <li><strong>Major Drawback (Heavy Request Execution Time):</strong> It does not account for how long each individual request takes to execute. Suppose <code>Req 1, 2, 3</code> (sent to strong server <code>Chat-1</code>) are lightweight and finish in <strong>10ms each (30ms total)</strong>. Meanwhile, <code>Req 4</code> and <code>Req 8</code> (sent to weak server <code>Chat-2</code>) are heavy operations that take <strong>10 seconds each</strong>. Even with a lower weight, the weak server <code>Chat-2</code> gets overloaded with long-running requests.</li>
            </ul>
          `
        },
        {
          num: "14.3",
          title: "IP Hash Algorithm",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong>
                <ul class="notes-sub-list">
                  <li>Every client device (mobile/laptop) of users <code>U1, U2, U3, U4</code> has its own <strong>Client IP Address</strong>.</li>
                  <li>The Load Balancer passes the client's IP address into a <strong>Hash Function</strong>, which generates a <strong>Hash Value</strong> (e.g., <code>1</code>, <code>2</code>, etc.).</li>
                  <li>Based on the generated hash value, requests are consistently routed to a specific instance (e.g., Hash Value <code>1</code> → <code>Chat-1</code>, Hash Value <code>2</code> → <code>Chat-2</code>).</li>
                </ul>
              </li>
              <li><strong>Major Drawback (The Proxy Server Problem):</strong> Suppose a <strong>Proxy Server</strong> sits between the Clients (<code>U1, U2, U3, U4</code>) and the Load Balancer. The Proxy Server masks the individual client IPs with <strong>its own single Proxy IP Address</strong>. To the Load Balancer, all requests appear to come from <strong>one single source IP (the Proxy)</strong>. Passing the same IP into the Hash Function produces the <strong>exact same Hash Value every time</strong> (e.g., always <code>1</code>), causing the Load Balancer to dump <strong>100% of traffic onto a single server (<code>Chat-1</code>)</strong> while <code>Chat-2</code> sits idle.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 14.1 · Static Algorithms: Round Robin, Weighted RR &amp; IP Hash Proxy Pitfall</span>
                <span class="diagram-frame-tag">FIXED RULES · NO REAL-TIME LOAD INSPECTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Three-panel diagram comparing Round Robin 50-50 split, Weighted Round Robin 3-to-1 split, and IP Hash proxy bottleneck dumping 100 percent of traffic onto Chat-1">
                  <!-- Panel 1: Round Robin -->
                  <rect x="14" y="16" width="272" height="232" rx="14" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="150" y="42" text-anchor="middle" class="svg-kicker">1. ROUND ROBIN</text>
                  <rect x="34" y="60" width="232" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="150" y="83" text-anchor="middle" class="svg-node">Chat-1 (Strong)</text>
                  <text x="150" y="102" text-anchor="middle" class="svg-mono-xs">Req 1, 3, 5 (50%)</text>

                  <rect x="34" y="128" width="232" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="150" y="151" text-anchor="middle" class="svg-node">Chat-2 (Weak)</text>
                  <text x="150" y="170" text-anchor="middle" class="svg-mono-xs">Req 2, 4, 6 (50%)</text>

                  <text x="150" y="216" text-anchor="middle" class="svg-sub">Drawback: Wastes strong</text>
                  <text x="150" y="234" text-anchor="middle" class="svg-sub">server capacity</text>

                  <!-- Panel 2: Weighted RR -->
                  <rect x="304" y="16" width="272" height="232" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.4"/>
                  <text x="440" y="42" text-anchor="middle" class="svg-kicker">2. WEIGHTED ROUND ROBIN</text>
                  <rect x="324" y="60" width="232" height="54" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="440" y="83" text-anchor="middle" class="svg-node">Chat-1 · Weight = 3</text>
                  <text x="440" y="102" text-anchor="middle" class="svg-mono-xs">Req 1,2,3 · 5,6,7 (10ms)</text>

                  <rect x="324" y="128" width="232" height="54" rx="10" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="440" y="151" text-anchor="middle" class="svg-node">Chat-2 · Weight = 1</text>
                  <text x="440" y="170" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Req 4, 8 (10s heavy!)</text>

                  <text x="440" y="216" text-anchor="middle" class="svg-sub">Drawback: Ignores request</text>
                  <text x="440" y="234" text-anchor="middle" class="svg-sub">execution duration</text>

                  <!-- Panel 3: IP Hash Proxy Pitfall -->
                  <rect x="594" y="16" width="272" height="232" rx="14" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.4"/>
                  <text x="730" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">3. IP HASH (PROXY PITFALL)</text>
                  <rect x="614" y="56" width="232" height="36" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="730" y="79" text-anchor="middle" class="svg-mono-xs">U1..U4 → Single Proxy IP</text>

                  <rect x="614" y="104" width="232" height="44" rx="10" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="730" y="124" text-anchor="middle" class="svg-node">Chat-1 (Hash = 1)</text>
                  <text x="730" y="140" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">100% Traffic Dumped!</text>

                  <rect x="614" y="158" width="232" height="36" rx="10" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="730" y="181" text-anchor="middle" class="svg-sub">Chat-2 (0% · Completely Idle)</text>

                  <text x="730" y="216" text-anchor="middle" class="svg-sub">Same Proxy IP always hashes</text>
                  <text x="730" y="234" text-anchor="middle" class="svg-sub">to the exact same server</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 15: DYNAMIC LOAD BALANCING ALGORITHMS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-15-dynamic-algos",
      number: "15",
      shortLabel: "Dynamic Algos",
      title: "Dynamic Load Balancing Algorithms",
      summary: "Real-time load-aware routing: Least Connection, Weighted Least Connection (Ratio = Active Connections / Weight), and Least Response Time (Score = Active Connections × TTFB + Round Robin tie-breaker).",
      subtopicLabels: ["15.1 Least Connection", "15.2 Weighted Least Connection", "15.3 Least Response Time (TTFB)"],
      diagramCount: 1,
      sections: [
        {
          num: "15.1",
          title: "Least Connection Algorithm",
          content: `
            <p>Unlike static algorithms, dynamic algorithms inspect the <strong>real-time state and active load</strong> of the servers before routing traffic.</p>
            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li><strong>How it Works:</strong> Routes each new incoming request to the server instance that currently has the <strong>fewest active TCP connections</strong>.</li>
              <li><strong>Example:</strong>
                <ul class="notes-sub-list">
                  <li><code>Chat-1</code> currently has <strong>2 active connections</strong> (<code>U1</code> and <code>U2</code> are connected).</li>
                  <li><code>Chat-2</code> currently has <strong>1 active connection</strong> (<code>U3</code> is connected).</li>
                  <li>When a new user <strong><code>U4</code> (<code>Req 4</code>)</strong> arrives, the Load Balancer compares active connections (<code>2 vs. 1</code>) and routes <code>U4</code> to <strong><code>Chat-2</code></strong> (bringing <code>Chat-2</code>'s active connections to <code>2</code>).</li>
                </ul>
              </li>
              <li><strong>Major Drawback (Idle Connections vs. Active Traffic + Hardware Mismatch):</strong> Having an established TCP connection does <strong>not</strong> mean a user is actively sending requests. Suppose <code>U1</code> and <code>U2</code> (connected to <code>Chat-1</code>, a <strong>weak server</strong>) continuously spam requests (<code>Req 1, 2, 3, 4</code>), while <code>U3</code> and <code>U4</code> (connected to <code>Chat-2</code>, a <strong>powerful server</strong>) sit completely idle sending zero messages. Both servers show "2 active connections", so the weak server gets hammered with traffic while the powerful server processes zero requests.</li>
            </ul>
          `
        },
        {
          num: "15.2",
          title: "Weighted Least Connection Algorithm",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Why it is Used:</strong> Solves the hardware capacity mismatch in the Least Connection algorithm by combining <strong>active connections</strong> with <strong>server capacity weights</strong>.</li>
              <li><strong>How it Works (2-Step Formula):</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li>Calculate the <strong>Ratio of Active Connections to Weight</strong> for every server:</li>
                </ol>
              </li>
            </ul>

            <div class="formula-box">Ratio = Active Connections / Weight</div>

            <ul class="notes-bullet-list">
              <li>Route the new request to the server with the <strong>lowest ratio</strong>.</li>
              <li><strong>Step-by-Step Numerical Example:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Server 1 (<code>Chat-1</code> — Powerful Server):</strong> Active Connections = <code>2</code> (<code>U1</code>, <code>U2</code>), Assigned Weight = <code>10</code> → <strong>Ratio = <code>2 / 10 = 0.2</code></strong></li>
                  <li><strong>Server 2 (<code>Chat-2</code> — Weak Server):</strong> Active Connections = <code>1</code> (<code>U3</code>), Assigned Weight = <code>1</code> → <strong>Ratio = <code>1 / 1 = 1.0</code></strong></li>
                  <li><strong>Routing Decision for <code>U4</code> (<code>Req 4</code>):</strong> Since <code>0.2</code> is less than <code>1.0</code>, the Load Balancer routes <code>U4</code> to <strong>Server 1 (<code>Chat-1</code>)</strong>, properly utilizing the powerful server's capacity.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "15.3",
          title: "Least Response Time Algorithm",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> Routes traffic based on both <strong>Active Connections</strong> and how fast each server responds, measured using <strong>TTFB (Time to First Byte)</strong>.</li>
              <li><strong>What is TTFB (Time to First Byte)?</strong> The total time interval between a client <strong>sending a request</strong> and <strong>receiving the first response/acknowledgment</strong> back from the server.</li>
              <li><strong>Selection Formula (Lowest score wins):</strong></li>
            </ul>

            <div class="formula-box">Score = Active Connections × TTFB</div>

            <ul class="notes-bullet-list">
              <li><strong>Step-by-Step Numerical Example</strong> (3 servers: <code>Server 1</code>, <code>Server 2</code>, <code>Server 3</code>):
                <ul class="notes-sub-list">
                  <li><strong>Initial State:</strong>
                    <br>• <strong>Server 1:</strong> Active Connections = <code>2</code>, TTFB = <code>3 ms</code> → <code>Score = 2 × 3 = 6</code>
                    <br>• <strong>Server 2:</strong> Active Connections = <code>0</code>, TTFB = <code>2 ms</code> → <code>Score = 0 × 2 = 0</code>
                    <br>• <strong>Server 3:</strong> Active Connections = <code>4</code>, TTFB = <code>1 ms</code> → <code>Score = 4 × 1 = 4</code>
                  </li>
                  <li><strong>First New Request (<code>U4</code> arrives):</strong> Comparing scores (<code>6</code>, <code>0</code>, <code>4</code>), <strong>Server 2</strong> has the lowest score (<code>0</code>), so <code>U4</code> is routed to <strong>Server 2</strong>.</li>
                  <li><strong>Updated State (When the Next Request arrives):</strong> Server 2 now has <code>1</code> active connection, so its new score becomes: <code>1 × 2 ms = 2</code>. Comparing the updated scores (<code>6</code>, <code>2</code>, <code>4</code>), <strong>Server 2</strong> (<code>2</code>) is <em>still</em> the lowest, so the next incoming request is also routed to <strong>Server 2</strong>.</li>
                </ul>
              </li>
              <li><strong>Tie-Breaker Rule (Clash Handling):</strong> If two servers end up with the <strong>exact same score</strong> (e.g., both have a score of <code>4</code>), the Load Balancer falls back to <strong>Round Robin</strong> to break the tie.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 15.1 · Dynamic Algorithm Math: Weighted Least Conn &amp; Least Response Time</span>
                <span class="diagram-frame-tag">LOWEST RATIO / LOWEST SCORE WINS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Dynamic load balancing calculation diagram showing Weighted Least Connection ratios 0.2 versus 1.0 and Least Response Time scores 6, 0 updated to 2 winner, and 4">
                  <!-- LEFT: Weighted Least Connection -->
                  <rect x="16" y="16" width="388" height="232" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="210" y="44" text-anchor="middle" class="svg-kicker">WEIGHTED LEAST CONNECTION</text>
                  <text x="210" y="64" text-anchor="middle" class="svg-mono-xs">Ratio = Active Connections / Weight</text>

                  <rect x="34" y="80" width="352" height="62" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="52" y="105" class="svg-node">Chat-1 (Powerful · W=10)</text>
                  <text x="52" y="126" class="svg-mono-xs">2 / 10 = 0.2</text>
                  <text x="368" y="116" text-anchor="end" class="svg-mono-xs" style="fill: var(--success);">Lowest → Picks U4 ✓</text>

                  <rect x="34" y="156" width="352" height="62" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="52" y="181" class="svg-node">Chat-2 (Weak · W=1)</text>
                  <text x="52" y="202" class="svg-mono-xs">1 / 1 = 1.0</text>
                  <text x="368" y="192" text-anchor="end" class="svg-sub">Higher Ratio</text>

                  <!-- RIGHT: Least Response Time -->
                  <rect x="424" y="16" width="440" height="232" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="644" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">LEAST RESPONSE TIME (SCORE = CONN × TTFB)</text>

                  <!-- Server 1 -->
                  <rect x="442" y="62" width="128" height="122" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="506" y="88" text-anchor="middle" class="svg-node">Server 1</text>
                  <text x="506" y="110" text-anchor="middle" class="svg-sub">Conn: 2</text>
                  <text x="506" y="128" text-anchor="middle" class="svg-sub">TTFB: 3ms</text>
                  <text x="506" y="160" text-anchor="middle" class="svg-mono-md">Score = 6</text>

                  <!-- Server 2 (Winner) -->
                  <rect x="580" y="62" width="128" height="122" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                  <text x="644" y="88" text-anchor="middle" class="svg-node">Server 2 ★</text>
                  <text x="644" y="110" text-anchor="middle" class="svg-sub">Conn: 0 → 1</text>
                  <text x="644" y="128" text-anchor="middle" class="svg-sub">TTFB: 2ms</text>
                  <text x="644" y="160" text-anchor="middle" class="svg-mono-md" style="fill: var(--success);">0 → 2 (Wins)</text>

                  <!-- Server 3 -->
                  <rect x="718" y="62" width="128" height="122" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="782" y="88" text-anchor="middle" class="svg-node">Server 3</text>
                  <text x="782" y="110" text-anchor="middle" class="svg-sub">Conn: 4</text>
                  <text x="782" y="128" text-anchor="middle" class="svg-sub">TTFB: 1ms</text>
                  <text x="782" y="160" text-anchor="middle" class="svg-mono-md">Score = 4</text>

                  <text x="644" y="218" text-anchor="middle" class="svg-mono-xs">Tie-Breaker: Equal scores fall back to Round Robin</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 16: WHAT IS A PROXY SERVER (FORWARD PROXY)?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-16-forward-proxy",
      number: "16",
      shortLabel: "Forward Proxy",
      title: "What is a Proxy Server (Forward Proxy)?",
      summary: "Child–Parents–Chocolate Shop analogy, how a Forward Proxy sits between Client and Internet to mask IPs, plus its 5 major advantages (Anonymity, Corporate Site Filtering, Request Grouping, Restricted Content, Caching).",
      subtopicLabels: ["16.1 Child & Parents Analogy", "16.2 Technical Request Flow", "16.3 5 Major Advantages"],
      diagramCount: 1,
      sections: [
        {
          num: "16.1",
          title: "Real-World Analogy (Child, Parents & Chocolate Shop)",
          content: `
            <ul class="notes-bullet-list">
              <li>Imagine a <strong>5–6-year-old child</strong> wants to eat a chocolate.</li>
              <li>The child does not go directly to the shop. Instead, the child tells their <strong>Parents</strong>: <em>"I want to eat chocolate."</em></li>
              <li>The <strong>Parents</strong> go to the <strong>Shopkeeper</strong>, buy the chocolate, come back, and hand it to the child.</li>
              <li><strong>Key Takeaway:</strong> The Parents hid the child from the outer world (the Shopkeeper). The Shopkeeper has no idea who the chocolate is actually for — they only see the Parents. Thus, the Parents maintained <strong>anonymity</strong> for the child.</li>
            </ul>
          `
        },
        {
          num: "16.2",
          title: "How Forward Proxy Works Technically",
          content: `
            <p>Mapping the analogy to a real network:</p>
            <div class="sub-card-grid-3" style="margin: 0.85rem 0 1.25rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Child</div>
                <div class="sub-box__title">Client</div>
                <div class="sub-box__body">Has its own private Client IP Address.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Parents</div>
                <div class="sub-box__title">Forward Proxy Server</div>
                <div class="sub-box__body">Has its own Proxy IP Address exposed outward.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Shop / Shopkeeper</div>
                <div class="sub-box__title">Target Server</div>
                <div class="sub-box__body">External server sitting across the Internet.</div>
              </div>
            </div>

            <p><strong>Step-by-Step Request Flow:</strong></p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li><strong>Position:</strong> A Forward Proxy always sits <strong>between the Client and the Internet</strong> (<code>Client → Proxy Server → Internet → Target Server</code>).</li>
              <li><strong>Client Request:</strong> Suppose the Client wants to access <code>google.com</code> or <code>facebook.com</code>. The request goes first to the <strong>Proxy Server</strong>.</li>
              <li><strong>IP Masking:</strong> When the Proxy Server routes the request to the Internet and Target Server, it <strong>hides the Client's actual IP address</strong> and sends <strong>its own Proxy IP address</strong> instead.</li>
              <li><strong>Server Response:</strong> The Target Server thinks the request came from the Proxy Server's IP (it never knows the actual origin/client). It fulfills the request and sends the response back to the <strong>Proxy Server</strong>, which then forwards the data to the <strong>Client</strong>.</li>
              <li><strong>Security Benefit:</strong> Because the Target Server does not know the actual Client's IP address, <strong>no external server can communicate directly with the Client</strong>, keeping the local client network completely hidden.</li>
            </ol>
          `
        },
        {
          num: "16.3",
          title: "The 5 Major Advantages of a Forward Proxy",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 01</div>
                <div class="sub-box__title">IP Anonymity (Hiding the Client)</div>
                <div class="sub-box__body">Masks the Client's real IP address and exposes only the Proxy Server's IP to the outer network/Internet, keeping the client completely anonymous.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 02 · Corporate Network (XYZ Company)</div>
                <div class="sub-box__title">Access Control &amp; Site Filtering</div>
                <div class="sub-box__body">
                  Employees (<code>C1</code>, <code>C2</code>, <code>C3</code>, <code>C4</code>) cannot access the Internet directly; every request passes through the <strong>Company Proxy Server</strong>.<br><br>
                  • <strong>Scenario A (Blocked):</strong> <code>C3</code> requests <code>ChatGPT</code> → Proxy checks rules, cancels request, returns: <em>"This site is restricted / not allowed."</em><br>
                  • <strong>Scenario B (Allowed):</strong> <code>C2</code> requests <code>google.com</code> → Proxy verifies rule, masks <code>C2</code>'s IP with Proxy IP, fetches &amp; returns response.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 03</div>
                <div class="sub-box__title">Request Grouping (Clubbing Identical Requests)</div>
                <div class="sub-box__body">Suppose 4 clients (<code>C1</code>, <code>C2</code>, <code>C3</code>, <code>C4</code>) request <code>google.com</code> simultaneously. Instead of 4 separate requests across the Internet, the Proxy <strong>groups/clubs all 4 into 1 single request</strong>, fetches the response once, and distributes it back to all 4 clients.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 04</div>
                <div class="sub-box__title">Accessing Restricted Content</div>
                <div class="sub-box__body">On a personal laptop, configuring a Proxy Server can also help bypass regional or network restrictions to access restricted content.</div>
              </div>
              <div class="sub-box" style="grid-column: 1 / -1;">
                <div class="sub-box__tag">Advantage 05 · Lower Latency</div>
                <div class="sub-box__title">Caching</div>
                <div class="sub-box__body">When a client requests <code>google.com</code> for the first time, the Proxy fetches the response from Google's server, delivers it to the client, and <strong>caches (stores) the data locally</strong>. Next time a client makes the exact same request, the Proxy immediately returns the cached response directly without going back across the Internet.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 16.1 · Forward Proxy (Client Anonymity, Site Filtering, Grouping &amp; Caching)</span>
                <span class="diagram-frame-tag">CLIENT → FORWARD PROXY → INTERNET → TARGET SERVER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Forward Proxy diagram showing corporate clients C1 through C4 passing through Company Forward Proxy which blocks ChatGPT for C3, masks IP and groups requests for C2 to google.com across the Internet">
                  <defs>
                    <marker id="arrow-16" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Private Client Network -->
                  <rect x="16" y="20" width="184" height="224" rx="16" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4" stroke-dasharray="5 3"/>
                  <text x="108" y="44" text-anchor="middle" class="svg-kicker">PRIVATE CLIENTS</text>

                  <rect x="34" y="60" width="148" height="44" rx="9" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="108" y="80" text-anchor="middle" class="svg-node">C1, C2 (Allowed)</text>
                  <text x="108" y="96" text-anchor="middle" class="svg-mono-xs">google.com</text>

                  <rect x="34" y="116" width="148" height="44" rx="9" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="108" y="136" text-anchor="middle" class="svg-node">C3 (Blocked ✕)</text>
                  <text x="108" y="152" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">ChatGPT</text>

                  <rect x="34" y="172" width="148" height="44" rx="9" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="108" y="192" text-anchor="middle" class="svg-node">C4 (Grouped)</text>
                  <text x="108" y="208" text-anchor="middle" class="svg-mono-xs">google.com</text>

                  <!-- Arrows to Proxy -->
                  <line x1="200" y1="90" x2="256" y2="112" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-16)"/>
                  <line x1="200" y1="138" x2="256" y2="138" stroke="var(--danger)" stroke-width="1.6" stroke-dasharray="4 3"/>
                  <line x1="200" y1="194" x2="256" y2="164" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-16)"/>

                  <!-- Forward Proxy -->
                  <rect x="264" y="34" width="234" height="196" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="381" y="62" text-anchor="middle" class="svg-kicker">WORKS FOR CLIENTS</text>
                  <text x="381" y="88" text-anchor="middle" class="svg-title">Forward Proxy</text>
                  <text x="381" y="114" text-anchor="middle" class="svg-mono-xs">• Masks Client IP → Proxy IP</text>
                  <text x="381" y="136" text-anchor="middle" class="svg-mono-xs">• Blocks restricted sites</text>
                  <text x="381" y="158" text-anchor="middle" class="svg-mono-xs">• Clubs identical requests</text>
                  <text x="381" y="180" text-anchor="middle" class="svg-mono-xs">• Local Cache (fast hit)</text>
                  <text x="381" y="210" text-anchor="middle" class="svg-sub">Hides local network from outer world</text>

                  <!-- Internet Hop -->
                  <line x1="498" y1="132" x2="562" y2="132" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-16)"/>
                  <text x="530" y="120" text-anchor="middle" class="svg-mono-xs">Proxy IP</text>

                  <rect x="570" y="92" width="104" height="80" rx="40" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="622" y="136" text-anchor="middle" class="svg-node">Internet</text>

                  <line x1="674" y1="132" x2="716" y2="132" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-16)"/>

                  <!-- Target Server -->
                  <rect x="724" y="72" width="140" height="120" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="794" y="106" text-anchor="middle" class="svg-title">Target Server</text>
                  <text x="794" y="130" text-anchor="middle" class="svg-mono-xs">google.com</text>
                  <text x="794" y="156" text-anchor="middle" class="svg-sub">Sees Proxy IP</text>
                  <text x="794" y="174" text-anchor="middle" class="svg-sub">only (not C1–C4)</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 17: WHAT IS A REVERSE PROXY?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-17-reverse-proxy",
      number: "17",
      shortLabel: "Reverse Proxy",
      title: "What is a Reverse Proxy?",
      summary: "Sitting in front of Backend Servers (S1, S2, S3) for Facebook-scale systems, direction of communication vs Forward Proxy, and 4 major advantages (Server Anonymity, Load Balancing, Caching, DDoS Protection).",
      subtopicLabels: ["17.1 Core Concept & Direction", "17.2 Facebook Example", "17.3 4 Major Advantages"],
      diagramCount: 1,
      sections: [
        {
          num: "17.1",
          title: "Core Concept & Position",
          content: `
            <ul class="notes-bullet-list">
              <li>While a Forward Proxy sits in front of Clients, a <strong>Reverse Proxy sits in front of Backend Servers</strong> (<code>Client → Internet → Reverse Proxy → Backend Servers S1, S2, S3</code>).</li>
              <li><strong>Direction of Communication:</strong> The only fundamental difference between a Forward Proxy and a Reverse Proxy is the <strong>direction of communication</strong>:
                <ul class="notes-sub-list">
                  <li><strong>Forward Proxy</strong> works on behalf of the <strong>Client</strong> (hides the client network from the Internet).</li>
                  <li><strong>Reverse Proxy</strong> works on behalf of the <strong>Server</strong> (hides the backend server network from the Internet).</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "17.2",
          title: "How Reverse Proxy Works (Facebook Example)",
          content: `
            <ul class="notes-bullet-list">
              <li>Suppose <code>facebook.com</code> has 3 backend servers (<code>Server 1</code>, <code>Server 2</code>, <code>Server 3</code>) with a <strong>Reverse Proxy</strong> sitting in front of them.</li>
              <li>When a user on the Internet requests <code>facebook.com</code>, the request <strong>never hits <code>Server 1</code>, <code>Server 2</code>, or <code>Server 3</code> directly</strong>.</li>
              <li>It first hits the <strong>Reverse Proxy</strong>, and the Reverse Proxy forwards the request to one of the backend servers.</li>
            </ul>
          `
        },
        {
          num: "17.3",
          title: "The 4 Major Advantages of a Reverse Proxy",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 01</div>
                <div class="sub-box__title">IP Anonymity for Servers</div>
                <div class="sub-box__body">The actual IP addresses of <code>Server 1</code>, <code>Server 2</code>, and <code>Server 3</code> are <strong>never exposed to the public Internet</strong>. Only the Reverse Proxy's IP address is exposed.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 02</div>
                <div class="sub-box__title">Load Balancing</div>
                <div class="sub-box__body">When traffic arrives from the Internet, the Reverse Proxy performs <strong>health checks and availability checks</strong> on <code>Server 1</code>, <code>Server 2</code>, and <code>Server 3</code> (checking which server is active and not down) and distributes/routes the request to an available server.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 03</div>
                <div class="sub-box__title">Caching</div>
                <div class="sub-box__body">Just like a Forward Proxy, a Reverse Proxy can cache frequently requested responses so backend servers don't have to reprocess identical requests repeatedly.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 04</div>
                <div class="sub-box__title">Protection Against Attacks (e.g., DDoS Attacks)</div>
                <div class="sub-box__body">Because the real IP addresses of the backend servers (<code>S1</code>, <code>S2</code>, <code>S3</code>) are completely hidden and only the Reverse Proxy's IP is exposed to the Internet, any external attack (like a <strong>DDoS attack</strong>) hits the <strong>Reverse Proxy</strong> first, keeping the core backend servers safe.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 17.1 · Reverse Proxy Protecting Backend Servers (Facebook Example)</span>
                <span class="diagram-frame-tag">CLIENT → INTERNET → REVERSE PROXY → HIDDEN S1, S2, S3</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Reverse Proxy diagram showing public Internet traffic and DDoS attacks hitting Reverse Proxy first while hiding the real IPs of Server 1, Server 2, and Server 3 behind it">
                  <defs>
                    <marker id="arrow-17" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Public Client -->
                  <rect x="16" y="42" width="142" height="72" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="87" y="72" text-anchor="middle" class="svg-title">Client</text>
                  <text x="87" y="94" text-anchor="middle" class="svg-mono-xs">facebook.com</text>

                  <!-- External DDoS Attacker -->
                  <rect x="16" y="142" width="142" height="72" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.4"/>
                  <text x="87" y="172" text-anchor="middle" class="svg-node" style="fill: var(--danger);">DDoS Attack</text>
                  <text x="87" y="192" text-anchor="middle" class="svg-sub">Blocked at Edge</text>

                  <line x1="158" y1="78" x2="212" y2="112" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-17)"/>
                  <line x1="158" y1="178" x2="212" y2="146" stroke="var(--danger)" stroke-width="1.6" stroke-dasharray="4 3"/>

                  <!-- Internet -->
                  <rect x="220" y="88" width="102" height="80" rx="40" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="271" y="132" text-anchor="middle" class="svg-node">Internet</text>

                  <line x1="322" y1="128" x2="366" y2="128" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-17)"/>

                  <!-- Reverse Proxy -->
                  <rect x="374" y="30" width="222" height="198" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="485" y="58" text-anchor="middle" class="svg-kicker">WORKS FOR SERVERS</text>
                  <text x="485" y="84" text-anchor="middle" class="svg-title">Reverse Proxy</text>
                  <text x="485" y="108" text-anchor="middle" class="svg-mono-xs">Only Public Exposed IP</text>
                  <text x="485" y="134" text-anchor="middle" class="svg-sub">• Hides S1, S2, S3 IPs</text>
                  <text x="485" y="154" text-anchor="middle" class="svg-sub">• Health &amp; Load Balancing</text>
                  <text x="485" y="174" text-anchor="middle" class="svg-sub">• Response Caching</text>
                  <text x="485" y="194" text-anchor="middle" class="svg-sub">• Absorbs DDoS Attacks</text>

                  <!-- Routing to Backend Servers -->
                  <path d="M 596 98 L 656 62" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-17)"/>
                  <line x1="596" y1="128" x2="656" y2="128" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-17)"/>
                  <path d="M 596 158 L 656 196" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-17)"/>

                  <!-- Private Server Network -->
                  <rect x="664" y="18" width="200" height="224" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5" stroke-dasharray="5 3"/>
                  <text x="764" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">HIDDEN BACKEND</text>

                  <rect x="682" y="54" width="164" height="46" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="764" y="75" text-anchor="middle" class="svg-node">Server 1 (S1) ✓</text>
                  <text x="764" y="92" text-anchor="middle" class="svg-mono-xs">Private IP Hidden</text>

                  <rect x="682" y="110" width="164" height="46" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="764" y="131" text-anchor="middle" class="svg-node">Server 2 (S2)</text>
                  <text x="764" y="148" text-anchor="middle" class="svg-mono-xs">Private IP Hidden</text>

                  <rect x="682" y="166" width="164" height="46" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="764" y="187" text-anchor="middle" class="svg-node">Server 3 (S3)</text>
                  <text x="764" y="204" text-anchor="middle" class="svg-mono-xs">Private IP Hidden</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 18: IMPORTANT SYSTEM DESIGN INTERVIEW QUESTIONS (PROXY, VPN & LB)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-18-proxy-vpn-lb-qa",
      number: "18",
      shortLabel: "Proxy vs VPN vs LB",
      title: "Important System Design Interview Questions (Proxy, VPN & Load Balancer)",
      summary: "4 high-frequency interview questions: Proxy vs VPN (IP Masking vs Encrypted VPN Tunnel), Reverse Proxy vs Load Balancer (single server S1), when proxies aren't needed, and using BOTH at global scale.",
      subtopicLabels: ["18.1 Proxy vs VPN", "18.2 Reverse Proxy vs LB", "18.3 Do We Need Proxies Everywhere?", "18.4 Using Both Together"],
      diagramCount: 1,
      sections: [
        {
          num: "18.1",
          title: "Question 1: How is a Proxy Server different from a VPN?",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">IP Masking Only</div>
                <div class="sub-box__title">Proxy Server</div>
                <div class="sub-box__body">
                  Provides IP anonymity, access control, request grouping, and caching, <strong>but it only performs IP Masking</strong>.<br><br>
                  It hides the client's IP address from the server <strong>without encrypting the data payload</strong>.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Encrypted Tunnel + IP Masking</div>
                <div class="sub-box__title">VPN (Virtual Private Network)</div>
                <div class="sub-box__body">
                  When a Client connects to a VPN (<code>VPN Client → VPN Server</code>), it establishes a dedicated <strong>VPN Tunnel</strong> over the Internet.<br><br>
                  Every request travels through this <strong>VPN Tunnel as Encrypted Data</strong>, and the target server uses a decryption mechanism to decrypt the request.
                </div>
              </div>
            </div>
            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">CORE DIFFERENCE</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                A Proxy Server only masks the IP address (data is <strong>not encrypted</strong>), whereas a VPN creates a secure <strong>VPN Tunnel</strong> and transfers all traffic as <strong>encrypted data</strong>.
              </p>
            </div>
          `
        },
        {
          num: "18.2",
          title: "Question 2: How is a Reverse Proxy different from a Load Balancer?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Overlap:</strong> A Load Balancer distributes traffic across multiple server instances (<code>S1</code>, <code>S2</code>, <code>S3</code>) based on health checks and availability — and a Reverse Proxy sitting in front of servers can <em>also</em> do load balancing. So how do they differ?</li>
              <li><strong>The Single-Server Scenario:</strong> Suppose you have a small application with low traffic running on <strong>only 1 single server (<code>S1</code>)</strong>:
                <ul class="notes-sub-list">
                  <li><strong>Do you need a Load Balancer?</strong> <strong>NO</strong>, because a Load Balancer is only needed when you have <em>multiple</em> servers to distribute traffic across.</li>
                  <li><strong>Do you still need a Reverse Proxy?</strong> <strong>YES</strong>, it still makes complete sense to use a Reverse Proxy even with a single server because a Reverse Proxy provides critical features <strong>beyond load balancing</strong>:
                    <br>• <strong>IP Anonymity / IP Masking</strong> for <code>S1</code>
                    <br>• <strong>Request Logging</strong>
                    <br>• <strong>Caching</strong>
                    <br>• <strong>SSL Termination</strong>
                  </li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "18.3",
          title: "Question 3: Do we need a Proxy Server everywhere in every application?",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Small Applications</div>
                <div class="sub-box__title">Simple To-Do List App → NO</div>
                <div class="sub-box__body">Where user traffic is low and security is not a major concern, a proxy server is unnecessary overhead.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">Large-Scale / Global Applications</div>
                <div class="sub-box__title">High-Traffic Platforms → YES</div>
                <div class="sub-box__body">For global platforms with high traffic and strict security requirements, proxy servers are essential.</div>
              </div>
            </div>
          `
        },
        {
          num: "18.4",
          title: "Question 4: If a Reverse Proxy can do Load Balancing, why do we still need a dedicated Load Balancer? Should we use both?",
          content: `
            <p><strong>Answer: YES.</strong> In a <strong>large-scale global application</strong> receiving massive traffic across multiple Regions and Availability Zones, <strong>we use BOTH a dedicated Load Balancer AND a Reverse Proxy together</strong> (Separation of Concerns):</p>
            <div class="sub-card-grid-2" style="margin-top: 0.85rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Separation of Concerns · Layer 1</div>
                <div class="sub-box__title">Dedicated Load Balancer</div>
                <div class="sub-box__body">Handles the heavy lifting of distributing massive global traffic across servers.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Separation of Concerns · Layer 2</div>
                <div class="sub-box__title">Reverse Proxy</div>
                <div class="sub-box__body">Handles all the other critical edge responsibilities — <strong>IP Anonymity, IP Masking, Logging, Caching, and SSL Termination</strong>.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 18.1 · Proxy vs. VPN Tunnel &amp; Single-Server vs. Global Scale Architecture</span>
                <span class="diagram-frame-tag">INTERVIEW SUMMARY BLUEPRINT</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Comparison diagram showing Proxy IP masking without encryption versus VPN encrypted tunnel, and Single Server S1 with Reverse Proxy only versus Global Scale using Dedicated Load Balancer and Reverse Proxy together">
                  <defs>
                    <marker id="arrow-18" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- LEFT PANEL: PROXY VS VPN -->
                  <rect x="16" y="16" width="414" height="232" rx="16" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="223" y="42" text-anchor="middle" class="svg-kicker">Q1 · PROXY SERVER VS. VPN</text>

                  <!-- Proxy row -->
                  <rect x="34" y="60" width="94" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="81" y="94" text-anchor="middle" class="svg-node">Client</text>

                  <line x1="128" y1="89" x2="162" y2="89" stroke="var(--warning)" stroke-width="1.8" marker-end="url(#arrow-18)"/>
                  <rect x="170" y="60" width="118" height="58" rx="10" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="229" y="84" text-anchor="middle" class="svg-node">Proxy</text>
                  <text x="229" y="104" text-anchor="middle" class="svg-mono-xs">IP Masked Only</text>

                  <line x1="288" y1="89" x2="322" y2="89" stroke="var(--warning)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow-18)"/>
                  <rect x="330" y="60" width="82" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="371" y="84" text-anchor="middle" class="svg-sub">Plain</text>
                  <text x="371" y="102" text-anchor="middle" class="svg-sub">Data</text>

                  <!-- VPN row -->
                  <rect x="34" y="142" width="94" height="64" rx="10" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="81" y="170" text-anchor="middle" class="svg-node">VPN</text>
                  <text x="81" y="190" text-anchor="middle" class="svg-sub">Client</text>

                  <rect x="142" y="152" width="174" height="44" rx="22" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="229" y="179" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Encrypted VPN Tunnel</text>

                  <rect x="330" y="142" width="82" height="64" rx="10" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="371" y="170" text-anchor="middle" class="svg-node">VPN</text>
                  <text x="371" y="190" text-anchor="middle" class="svg-sub">Server</text>

                  <!-- RIGHT PANEL: SINGLE SERVER VS GLOBAL SCALE -->
                  <rect x="450" y="16" width="414" height="232" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="657" y="42" text-anchor="middle" class="svg-kicker">Q2 &amp; Q4 · REVERSE PROXY + LOAD BALANCER</text>

                  <!-- Single Server S1 -->
                  <rect x="470" y="60" width="374" height="72" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="657" y="82" text-anchor="middle" class="svg-mono-xs">Single Server (S1) → No LB needed, Reverse Proxy YES</text>
                  <text x="657" y="104" text-anchor="middle" class="svg-sub">Reverse Proxy handles: IP Masking · Logging · Caching · SSL Termination</text>

                  <!-- Global Scale Both -->
                  <rect x="470" y="148" width="374" height="82" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="657" y="172" text-anchor="middle" class="svg-mono-xs">Global Scale → Use BOTH (Separation of Concerns)</text>
                  <text x="657" y="196" text-anchor="middle" class="svg-node">Dedicated Load Balancer  +  Reverse Proxy</text>
                  <text x="657" y="216" text-anchor="middle" class="svg-sub">Massive Traffic Routing &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; SSL, Caching, Logging, Anonymity</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 19: WHAT ARE NETWORKING PROTOCOLS & HOW LAYERS WORK TOGETHER?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-19-networking-protocols",
      number: "19",
      shortLabel: "Protocols",
      title: "What are Networking Protocols & How Different Layers Work Together?",
      summary: "Definition of networking protocols, the 3 core OSI layers (Network IPv4/IPv6, Transport TCP/UDP, Application HTTP/HTTPS/WebSockets/WebRTC), and a WhatsApp end-to-end message walkthrough.",
      subtopicLabels: ["19.1 Definition", "19.2 3 Core OSI Layers", "19.3 WhatsApp Message Flow"],
      diagramCount: 1,
      sections: [
        {
          num: "19.1",
          title: "Definition of Networking Protocols",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Definition:</strong> Networking protocols are the set of rules and conventions that govern how data is transmitted and received across a network.</li>
              <li><strong>In Simple Words:</strong> They define how two devices communicate, transfer data, and receive data with each other over the internet/network.</li>
            </ul>
          `
        },
        {
          num: "19.2",
          title: "The 3 Core OSI Layers & Their Protocols",
          content: `
            <p>Out of the 7 layers in the OSI Model, three main layers and their protocols are used here:</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Layer 3 · Finds the Device</div>
                <div class="sub-box__title">1. Network Layer</div>
                <div class="sub-box__body">
                  <strong>Protocols:</strong> <code>IPv4</code>, <code>IPv6</code><br><br>
                  <strong>Role:</strong> Helps in <strong>IP Addressing and Routing</strong> (finding a device's IP address across the network).
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Layer 4 · Creates a Path</div>
                <div class="sub-box__title">2. Transport Layer</div>
                <div class="sub-box__body">
                  <strong>Protocols:</strong> <code>TCP</code>, <code>UDP</code><br><br>
                  <strong>Role:</strong> Establishes a reliable/secured path and defines how data packets travel between Client and Server.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Layer 7 · Delivers Message</div>
                <div class="sub-box__title">3. Application Layer</div>
                <div class="sub-box__body">
                  <strong>Client-Server:</strong> <code>HTTP</code>, <code>HTTPS</code>, <code>FTP</code>, <code>SMTP</code>, <code>WebSockets</code><br>
                  <strong>Peer-to-Peer (P2P):</strong> <code>WebRTC</code><br><br>
                  <em>Note: A common misconception is that WebSocket is a Peer-to-Peer protocol — it is <strong>NOT</strong>; WebSocket is a <strong>Client-Server protocol</strong>.</em>
                </div>
              </div>
            </div>
          `
        },
        {
          num: "19.3",
          title: "Real-World Example: How All 3 Layers Work Together (WhatsApp Message Flow)",
          content: `
            <p>Suppose you are on <strong>Device A</strong> and want to send a WhatsApp message (<em>"Hi, how are you?"</em>) to your friend on <strong>Device B</strong>:</p>

            <div class="workflow-stack" style="margin-top: 1rem;">
              <div class="workflow-step">
                <div class="step-circle">1</div>
                <div>
                  <div class="workflow-step__title">Step 1: Network Layer (<code>IPv4</code> / <code>IPv6</code>) → "Finds the Device"</div>
                  <div class="workflow-step__desc">Millions of devices exist on the internet, each with its own IP address. Before sending a message, the first task is to locate your friend's device (<strong>Device B</strong>) and the <strong>WhatsApp Server</strong> on the network. Network Layer protocols (<code>IPv4</code> and <code>IPv6</code>) handle IP addressing and routing to find the exact IP address of the required device/server.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">2</div>
                <div>
                  <div class="workflow-step__title">Step 2: Transport Layer (<code>TCP</code> / <code>UDP</code>) → "Creates a Path"</div>
                  <div class="workflow-step__desc">Device A cannot send a WhatsApp message directly to Device B; it must go <strong>via the WhatsApp Server</strong> (<code>Device A</code> sends encrypted message → <code>WhatsApp Server</code> → forwards encrypted message to <code>Device B</code>, which decrypts and reads it). Just knowing the IP address is not enough — we need a <strong>reliable path and a secured connection</strong> between Device A and the WhatsApp Server so data can travel between them. Transport Layer protocols (<code>TCP</code> / <code>UDP</code>) establish this connection and govern how data travels between the client and the server.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">3</div>
                <div>
                  <div class="workflow-step__title">Step 3: Application Layer (<code>HTTP</code> / <code>HTTPS</code> / <code>WebSockets</code>) → "Delivers the Actual Message"</div>
                  <div class="workflow-step__desc">Once we have the IP address and an established connection/path, how is the actual text <em>"Hi, how are you?"</em> formatted and delivered so both apps understand it? Application Layer protocols define the rules of conversation and format between applications (WhatsApp uses the <strong>WebSocket protocol</strong> to deliver the actual message).</div>
                </div>
              </div>
            </div>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">SUMMARY OF THE 3 LAYERS</div>
              <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
                <li><strong>Network Layer:</strong> <em>Finds the device</em> (IP Addressing &amp; Routing).</li>
                <li><strong>Transport Layer:</strong> <em>Creates a path</em> (Connection &amp; Data Transport).</li>
                <li><strong>Application Layer:</strong> <em>Delivers the actual message</em> (Message Formatting &amp; Delivery).</li>
              </ul>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 19.1 · How Network, Transport &amp; Application Layers Work Together (WhatsApp)</span>
                <span class="diagram-frame-tag">FIND DEVICE → CREATE PATH → DELIVER MESSAGE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Three-layer WhatsApp message flow showing Device A sending encrypted Hi how are you via WhatsApp Server to Device B using Network IPv4/IPv6, Transport TCP/UDP, and Application WebSockets">
                  <defs>
                    <marker id="arrow-19" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Top Message Flow Row -->
                  <rect x="24" y="20" width="194" height="78" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="121" y="50" text-anchor="middle" class="svg-title">Device A (You)</text>
                  <text x="121" y="72" text-anchor="middle" class="svg-mono-xs">"Hi, how are you?"</text>

                  <line x1="218" y1="59" x2="328" y2="59" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-19)"/>
                  <text x="273" y="48" text-anchor="middle" class="svg-mono-xs">Encrypted</text>

                  <rect x="336" y="20" width="208" height="78" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="440" y="50" text-anchor="middle" class="svg-title">WhatsApp Server</text>
                  <text x="440" y="72" text-anchor="middle" class="svg-sub">Relays Encrypted Message</text>

                  <line x1="544" y1="59" x2="654" y2="59" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-19)"/>
                  <text x="599" y="48" text-anchor="middle" class="svg-mono-xs">Encrypted</text>

                  <rect x="662" y="20" width="194" height="78" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="759" y="50" text-anchor="middle" class="svg-title">Device B (Friend)</text>
                  <text x="759" y="72" text-anchor="middle" class="svg-mono-xs">Decrypts &amp; Reads ✓</text>

                  <!-- 3 Layer Cards Beneath -->
                  <rect x="24" y="130" width="262" height="114" rx="14" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="155" y="156" text-anchor="middle" class="svg-kicker">1. NETWORK LAYER</text>
                  <text x="155" y="182" text-anchor="middle" class="svg-title">Finds the Device</text>
                  <text x="155" y="204" text-anchor="middle" class="svg-mono-xs">IPv4 / IPv6</text>
                  <text x="155" y="226" text-anchor="middle" class="svg-sub">IP Addressing &amp; Routing</text>

                  <line x1="286" y1="187" x2="303" y2="187" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-19)"/>

                  <rect x="309" y="130" width="262" height="114" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.4"/>
                  <text x="440" y="156" text-anchor="middle" class="svg-kicker">2. TRANSPORT LAYER</text>
                  <text x="440" y="182" text-anchor="middle" class="svg-title">Creates a Path</text>
                  <text x="440" y="204" text-anchor="middle" class="svg-mono-xs">TCP / UDP</text>
                  <text x="440" y="226" text-anchor="middle" class="svg-sub">Reliable Connection &amp; Transport</text>

                  <line x1="571" y1="187" x2="588" y2="187" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-19)"/>

                  <rect x="594" y="130" width="262" height="114" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.4"/>
                  <text x="725" y="156" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">3. APPLICATION LAYER</text>
                  <text x="725" y="182" text-anchor="middle" class="svg-title">Delivers the Message</text>
                  <text x="725" y="204" text-anchor="middle" class="svg-mono-xs">WebSockets / HTTP / HTTPS</text>
                  <text x="725" y="226" text-anchor="middle" class="svg-sub">Message Formatting &amp; Delivery</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 20: TRANSPORT LAYER PROTOCOLS — TCP VS. UDP
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-20-tcp-vs-udp",
      number: "20",
      shortLabel: "TCP vs UDP",
      title: "Transport Layer Protocols — TCP vs. UDP",
      summary: "TCP (Connection-oriented, ACK & retransmission, sequence numbers, 3-Way Handshake SYN/SYN-ACK/ACK) vs. UDP (Connectionless, fire-and-forget ultra-fast speed for video calls & online gaming).",
      subtopicLabels: ["20.1 TCP & 3-Way Handshake", "20.2 UDP & Real-Time Use Cases"],
      diagramCount: 1,
      sections: [
        {
          num: "20.1",
          title: "TCP (Transmission Control Protocol) & The 3-Way Handshake",
          content: `
            <p><strong>Core Characteristics of TCP:</strong></p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li><strong>Connection-Oriented &amp; Reliable:</strong> Establishes a verified connection before sending data.</li>
              <li><strong>Guaranteed Delivery:</strong> Data is sent in the form of <strong>packets</strong>, and the server sends an <strong>acknowledgment (ACK)</strong> for every packet received. If any data packet is lost or fails to deliver due to a network issue, the client <strong>resends/retransmits</strong> that packet until it is delivered.</li>
              <li><strong>Maintains Order / Sequence:</strong> Every data packet is assigned a <strong>Sequence Number</strong> (<code>Packet 1</code>, <code>Packet 2</code>, <code>Packet 3</code>), ensuring packets are delivered and reassembled in the exact order they were sent.</li>
              <li><strong>Slower Speed:</strong> Because TCP sets up a connection, checks every packet's delivery, resends lost packets, and maintains strict sequence order, it is <strong>slower than UDP</strong>.</li>
            </ol>

            <p style="margin-top: 1.25rem;"><strong>How TCP Establishes a Reliable Connection — The 3-Way Handshake:</strong></p>
            <p style="margin-top: 0.35rem;">Before sending actual data, the Client (You) and Server (Your Friend) perform a <strong>3-step process</strong>:</p>
            <div class="workflow-stack" style="margin-top: 0.75rem;">
              <div class="workflow-step">
                <div class="step-circle">1</div>
                <div>
                  <div class="workflow-step__title">Step 1 — Introduction (<code>SYN</code> / Connection Request)</div>
                  <div class="workflow-step__desc">The Client introduces itself to the Server (<em>"Hey, how are you?"</em>) and shares a random <strong>Sequence Number</strong> and port.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">2</div>
                <div>
                  <div class="workflow-step__title">Step 2 — Agreement &amp; Acknowledgment (<code>SYN-ACK</code>)</div>
                  <div class="workflow-step__desc">The Server replies (<em>"Yes, I am here, are you ready?"</em>), sends an <strong>Acknowledgment</strong> for the Client's request, and shares its own <strong>Sequence Number</strong>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">3</div>
                <div>
                  <div class="workflow-step__title">Step 3 — Final Confirmation (<code>ACK</code>)</div>
                  <div class="workflow-step__desc">The Client sends one final <strong>Acknowledgment</strong> back to the Server confirming that both sides are ready for communication, and the <strong>TCP connection is officially opened</strong>.</div>
                </div>
              </div>
            </div>
          `
        },
        {
          num: "20.2",
          title: "UDP (User Datagram Protocol)",
          content: `
            <p><strong>Core Characteristics (Exact Opposite of TCP):</strong></p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li><strong>Connectionless:</strong> There is <strong>no 3-Way Handshake</strong>. It immediately starts firing data packets to the receiver without establishing a prior connection.</li>
              <li><strong>Unreliable (No Retransmission):</strong> If a data packet is lost on the network, UDP <strong>does not care</strong> and <strong>never resends</strong> the lost packet — it simply continues sending the next packets.</li>
              <li><strong>No Order Maintained:</strong> Packets are not kept in strict sequence; <code>Packet 2</code> might arrive before <code>Packet 1</code>.</li>
              <li><strong>Very Fast Speed:</strong> Because there is no handshake overhead, no acknowledgment waiting, no packet retransmission, and no ordering, <strong>UDP is extremely fast</strong>.</li>
            </ol>

            <div class="callout-highlight-box" style="margin-top: 1.1rem;">
              <div class="callout-highlight-tag">REAL-WORLD USE CASES OF UDP</div>
              <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
                <li>Used in <strong>Video Calls, Live Video Streaming, and Online Video Games</strong>.</li>
                <li><strong>Example (Video Call with a Friend):</strong> If a brief network glitch causes a few video frames (data packets) to drop during a live video call, you do <strong>not</strong> want the video call to pause and replay old frames from 5 seconds ago — you want the live call to keep moving in real time. Similarly, if <code>Frame 2</code> arrives slightly before <code>Frame 1</code> due to a minor glitch, it doesn't matter — speed and real-time continuity matter more than recovering lost frames.</li>
              </ul>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 20.1 · TCP 3-Way Handshake &amp; Guaranteed Order vs. UDP Fast Streaming</span>
                <span class="diagram-frame-tag">RELIABILITY &amp; ORDER (TCP) VS SPEED &amp; REAL-TIME (UDP)</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 285" class="arch-svg" role="img" aria-label="Comparison diagram showing TCP 3-Way Handshake SYN, SYN-ACK, ACK with ordered packet delivery and retransmission versus UDP fire-and-forget live video frames with no handshake">
                  <defs>
                    <marker id="arrow-20" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                    <marker id="arrow-20w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--warning)"/>
                    </marker>
                  </defs>

                  <!-- LEFT: TCP 3-Way Handshake -->
                  <rect x="16" y="16" width="424" height="252" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="228" y="42" text-anchor="middle" class="svg-kicker">TCP · 3-WAY HANDSHAKE &amp; RELIABLE DELIVERY</text>

                  <!-- Client & Server Lifelines -->
                  <rect x="44" y="58" width="94" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="91" y="80" text-anchor="middle" class="svg-node">Client</text>
                  <line x1="91" y1="92" x2="91" y2="212" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 3"/>

                  <rect x="318" y="58" width="94" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="365" y="80" text-anchor="middle" class="svg-node">Server</text>
                  <line x1="365" y1="92" x2="365" y2="212" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 3"/>

                  <!-- 1. SYN -->
                  <line x1="96" y1="112" x2="356" y2="128" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-20)"/>
                  <text x="228" y="112" text-anchor="middle" class="svg-mono-xs">1. SYN (Seq # + Port)</text>

                  <!-- 2. SYN-ACK -->
                  <line x1="360" y1="146" x2="100" y2="162" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-20)"/>
                  <text x="228" y="148" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">2. SYN-ACK (Agree + Server Seq #)</text>

                  <!-- 3. ACK -->
                  <line x1="96" y1="180" x2="356" y2="196" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-20)"/>
                  <text x="228" y="182" text-anchor="middle" class="svg-mono-xs">3. ACK (Connection Opened ✓)</text>

                  <!-- Footer Summary -->
                  <rect x="36" y="218" width="384" height="36" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="228" y="241" text-anchor="middle" class="svg-mono-xs">Ordered: P1 → P2 → P3 · Resends lost packets · Slower</text>

                  <!-- RIGHT: UDP -->
                  <rect x="456" y="16" width="408" height="252" rx="16" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="660" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">UDP · CONNECTIONLESS &amp; ULTRA-FAST</text>

                  <rect x="476" y="72" width="90" height="106" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="521" y="118" text-anchor="middle" class="svg-node">Sender</text>
                  <text x="521" y="138" text-anchor="middle" class="svg-sub">No Handshake</text>

                  <rect x="754" y="72" width="90" height="106" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="799" y="118" text-anchor="middle" class="svg-node">Receiver</text>
                  <text x="799" y="138" text-anchor="middle" class="svg-sub">Live Stream</text>

                  <!-- Frame 1 Delivered -->
                  <line x1="566" y1="90" x2="746" y2="90" stroke="var(--warning)" stroke-width="2" marker-end="url(#arrow-20w)"/>
                  <text x="656" y="82" text-anchor="middle" class="svg-mono-xs">Frame 1 → Delivered</text>

                  <!-- Frame 2 Dropped -->
                  <line x1="566" y1="126" x2="668" y2="126" stroke="var(--danger)" stroke-width="1.8" stroke-dasharray="4 3"/>
                  <text x="656" y="118" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Frame 2 ✕ Lost (Not Resent)</text>

                  <!-- Frame 3 Delivered -->
                  <line x1="566" y1="162" x2="746" y2="162" stroke="var(--warning)" stroke-width="2" marker-end="url(#arrow-20w)"/>
                  <text x="656" y="154" text-anchor="middle" class="svg-mono-xs">Frame 3 → Keeps Moving!</text>

                  <rect x="476" y="198" width="368" height="56" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="660" y="220" text-anchor="middle" class="svg-mono-xs">Video Calls · Live Streaming · Online Gaming</text>
                  <text x="660" y="240" text-anchor="middle" class="svg-sub">Real-time speed matters more than replaying old dropped frames</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 21: APPLICATION LAYER PROTOCOLS — CLIENT-SERVER VS. P2P
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-21-application-protocols",
      number: "21",
      shortLabel: "HTTP / WS / P2P",
      title: "Application Layer Protocols — Client-Server vs. Peer-to-Peer (P2P)",
      summary: "Unidirectional Client-Server (HTTP, HTTPS with SSL/TLS, FTP, SMTP + why HTTP/HTTPS are TCP-based), Bidirectional WebSockets (WhatsApp/Telegram), and Direct Peer-to-Peer WebRTC.",
      subtopicLabels: ["21.1 Unidirectional (HTTP/HTTPS)", "21.2 Bidirectional (WebSocket)", "21.3 Peer-to-Peer (WebRTC)"],
      diagramCount: 1,
      sections: [
        {
          num: "21.1",
          title: "Client-Server — Unidirectional Protocols (HTTP, HTTPS, FTP, SMTP)",
          content: `
            <p>Client-Server protocols define how a <strong>Client</strong> and a <strong>Server</strong> exchange data. Two clients (<code>Client A</code> and <code>Client B</code>) cannot talk directly to each other; they must communicate through a central <strong>Server</strong>.</p>

            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li><strong>How Unidirectional (One-Way) Protocols Work:</strong> The <strong>Client ALWAYS initiates the request/connection</strong>, and the <strong>Server sends back a response</strong>, after which the request-response cycle closes. The Server can <strong>never</strong> initiate a message to the Client on its own — even if the Server has new information for the Client, it must wait until the Client makes a request.</li>
            </ul>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Unencrypted (Plain Text)</div>
                <div class="sub-box__title">HTTP (HyperText Transfer Protocol)</div>
                <div class="sub-box__body">Used for standard web requests (fetching web pages, submitting login credentials like email/password on Amazon). However, HTTP sends data in <strong>unencrypted (plain text) form</strong>, making it vulnerable to attacks.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Encrypted via SSL / TLS</div>
                <div class="sub-box__title">HTTPS (HyperText Transfer Protocol Secure)</div>
                <div class="sub-box__body">Secures HTTP by adding an <strong>encryption layer using SSL / TLS (Transport Layer Security)</strong>. All web requests and responses travel as <strong>encrypted data</strong>, which is why all large-scale production applications use HTTPS.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">File Transfer</div>
                <div class="sub-box__title">FTP (File Transfer Protocol)</div>
                <div class="sub-box__body">Used for transferring files between client and server.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Email Delivery</div>
                <div class="sub-box__title">SMTP (Simple Mail Transfer Protocol)</div>
                <div class="sub-box__body">Used for sending emails.</div>
              </div>
            </div>

            <div class="callout-highlight-box" style="margin-top: 1.1rem;">
              <div class="callout-highlight-tag">WHY DO WE SAY "HTTP AND HTTPS ARE TCP-BASED PROTOCOLS"?</div>
              <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
                <li>HTTP and HTTPS are <strong>Application Layer</strong> protocols responsible for <em>delivering the actual content</em>, while TCP is a <strong>Transport Layer</strong> protocol responsible for <em>establishing a reliable connection</em>.</li>
                <li>Saying <em>"HTTP/HTTPS is TCP-based"</em> means that <strong>before</strong> HTTP/HTTPS can send any web request, the Client and Server first perform a <strong>TCP 3-Way Handshake</strong> to establish a reliable connection, and then HTTP/HTTPS sends the request over that TCP connection.</li>
              </ul>
            </div>
          `
        },
        {
          num: "21.2",
          title: "Client-Server — Bidirectional Protocol (WebSocket)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How It Differs from HTTP:</strong> While still a <strong>Client-Server protocol</strong>, <strong>WebSocket is Bidirectional (Two-Way)</strong>.</li>
              <li>Once a WebSocket connection is established between a Client and a Server, <strong>both the Client and the Server can independently send messages to each other at any time</strong>.</li>
              <li>If the Server has a new message for <code>Client A</code>, the Server does <strong>not</strong> need to wait for <code>Client A</code> to send a request — the Server can push the message directly from its side.</li>
              <li><strong>Real-World Use Case:</strong> Used to build real-time chat applications like <strong>WhatsApp</strong> and <strong>Telegram</strong>, where <code>User A</code> and <code>User B</code> maintain open WebSocket connections with the WhatsApp Server so messages can be pushed instantly in both directions.</li>
            </ul>
          `
        },
        {
          num: "21.3",
          title: "Peer-to-Peer (P2P) Protocols (WebRTC)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How It Works:</strong> In a Peer-to-Peer protocol (like <strong>WebRTC</strong>), there is <strong>no discrimination between Client and Server</strong> — no central server is needed in the middle to relay the data.</li>
              <li>Two clients (<code>Client A</code> and <code>Client B</code>) connect directly to each other and <strong>can independently send messages/streams directly to one another</strong> (<code>Client A &lt;───&gt; Client B</code>).</li>
            </ul>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Core Difference · Client-Server</div>
                <div class="sub-box__title">Intermediate Server Required</div>
                <div class="sub-box__body"><code>Client A</code> and <code>Client B</code> <strong>cannot</strong> communicate directly; they require an intermediate <strong>Server</strong> (<code>Client A → Server → Client B</code>).</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Core Difference · Peer-to-Peer (P2P)</div>
                <div class="sub-box__title">Direct Client-to-Client Connection</div>
                <div class="sub-box__body"><code>Client A</code> and <code>Client B</code> communicate <strong>directly with each other</strong> without going through an intermediate server (<code>Client A &lt;───&gt; Client B</code>).</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 21.1 · HTTP/HTTPS (1-Way) vs. WebSocket (2-Way) vs. WebRTC (Direct P2P)</span>
                <span class="diagram-frame-tag">APPLICATION LAYER COMMUNICATION MODELS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Three-column comparison of Unidirectional HTTP/HTTPS, Bidirectional WebSocket via Server, and Direct Peer-to-Peer WebRTC">
                  <defs>
                    <marker id="arrow-21" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Column 1: HTTP/HTTPS -->
                  <rect x="14" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="150" y="42" text-anchor="middle" class="svg-kicker">1. UNIDIRECTIONAL (HTTP / HTTPS)</text>

                  <rect x="34" y="64" width="84" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="76" y="97" text-anchor="middle" class="svg-node">Client</text>

                  <rect x="182" y="64" width="84" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="224" y="97" text-anchor="middle" class="svg-node">Server</text>

                  <line x1="118" y1="82" x2="174" y2="82" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-21)"/>
                  <text x="150" y="74" text-anchor="middle" class="svg-mono-xs">Req</text>
                  <line x1="182" y1="106" x2="126" y2="106" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#arrow-21)"/>
                  <text x="150" y="122" text-anchor="middle" class="svg-mono-xs">Res</text>

                  <text x="150" y="164" text-anchor="middle" class="svg-sub">Client ALWAYS initiates first</text>
                  <text x="150" y="186" text-anchor="middle" class="svg-mono-xs">HTTPS = SSL/TLS Encrypted</text>
                  <text x="150" y="208" text-anchor="middle" class="svg-sub">Runs on TCP 3-Way Handshake</text>

                  <!-- Column 2: WebSocket -->
                  <rect x="304" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="440" y="42" text-anchor="middle" class="svg-kicker">2. BIDIRECTIONAL (WEBSOCKET)</text>

                  <rect x="318" y="68" width="64" height="52" rx="9" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="350" y="98" text-anchor="middle" class="svg-mono-xs">User A</text>

                  <rect x="404" y="64" width="72" height="60" rx="10" fill="var(--accent-light)" stroke="var(--accent)"/>
                  <text x="440" y="90" text-anchor="middle" class="svg-mono-xs">Central</text>
                  <text x="440" y="106" text-anchor="middle" class="svg-mono-xs">Server</text>

                  <rect x="498" y="68" width="64" height="52" rx="9" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="530" y="98" text-anchor="middle" class="svg-mono-xs">User B</text>

                  <line x1="382" y1="94" x2="404" y2="94" stroke="var(--accent)" stroke-width="2.2"/>
                  <line x1="476" y1="94" x2="498" y2="94" stroke="var(--accent)" stroke-width="2.2"/>

                  <text x="440" y="156" text-anchor="middle" class="svg-mono-xs">2-Way Persistent Pipe</text>
                  <text x="440" y="180" text-anchor="middle" class="svg-sub">Server pushes anytime</text>
                  <text x="440" y="202" text-anchor="middle" class="svg-sub">Still Client-Server (WhatsApp)</text>

                  <!-- Column 3: Peer-to-Peer WebRTC -->
                  <rect x="594" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="730" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">3. PEER-TO-PEER (WEBRTC)</text>

                  <rect x="614" y="64" width="84" height="58" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="656" y="97" text-anchor="middle" class="svg-node">Client A</text>

                  <rect x="762" y="64" width="84" height="58" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="804" y="97" text-anchor="middle" class="svg-node">Client B</text>

                  <line x1="704" y1="93" x2="756" y2="93" stroke="var(--success)" stroke-width="2.4" marker-start="url(#arrow-21)" marker-end="url(#arrow-21)"/>

                  <text x="730" y="156" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Direct Client A ⇄ Client B</text>
                  <text x="730" y="180" text-anchor="middle" class="svg-sub">No intermediate Server needed</text>
                  <text x="730" y="202" text-anchor="middle" class="svg-sub">Both act as equal peers</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 22: WHAT IS SCALING & WHY DO WE NEED IT?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-22-what-is-scaling",
      number: "22",
      shortLabel: "What is Scaling",
      title: "What is Scaling & Why Do We Need It?",
      summary: "Pizza Parlor & Chef analogy (1 slow chef vs weekend 10-order spike -> 1 super chef vs 3–4 chefs) and why a single server crashes as users grow from 100 to 1 Million.",
      subtopicLabels: ["22.1 Pizza Parlor Analogy", "22.2 Technical Need for Scaling"],
      diagramCount: 1,
      sections: [
        {
          num: "22.1",
          title: "Real-World Analogy (The Pizza Parlor & Chef)",
          content: `
            <ul class="notes-bullet-list">
              <li>Imagine you own a <strong>Pizza Parlor / Pizza Shop</strong> with only <strong>1 Single Chef</strong>.</li>
              <li><strong>Chef's Limitations:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.4rem;">
                  <li>The chef is very slow.</li>
                  <li>The chef's maximum capacity is <strong>2 pizza orders per hour</strong>.</li>
                </ol>
              </li>
              <li><strong>The Weekend Traffic Spike:</strong> On weekends, your pizza shop suddenly starts receiving <strong>10 pizza orders per hour</strong>. Because the single slow chef can only prepare 2 pizzas per hour, they cannot handle 10 orders. You cannot ask hungry customers to wait for hours, so you need a solution to deliver pizzas on time.</li>
            </ul>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Solution 1 · Scale Up</div>
                <div class="sub-box__title">Vertical Scaling (1 Fast Chef)</div>
                <div class="sub-box__body">Replace the slow chef by hiring a single super-fast, skilled chef who has the capability to prepare <strong>10 pizza orders per hour</strong> all by themselves.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Solution 2 · Scale Out</div>
                <div class="sub-box__title">Horizontal Scaling (Multiple Chefs)</div>
                <div class="sub-box__body">Instead of relying on just 1 chef, hire <strong>3 to 4 chefs</strong> in the kitchen. Now, even if 15 orders arrive, orders get distributed among Chef 1, Chef 2, Chef 3, and Chef 4, and everyone gets their pizza on time.</div>
              </div>
            </div>
          `
        },
        {
          num: "22.2",
          title: "Technical Need for Scaling (Client-Server Architecture)",
          content: `
            <ul class="notes-bullet-list">
              <li>When you build an application, you host it on a <strong>Server (Computer)</strong> that has a specific hardware capacity (a certain amount of <strong>RAM</strong> and <strong>CPUs</strong>).</li>
              <li><strong>Low Traffic (5, 10, or 100 Users):</strong> When clients send requests, the single server easily processes them and returns responses without any issue.</li>
              <li><strong>High Traffic (10,000 to 1 Million Users):</strong> As the number of users grows, the number of incoming requests skyrockets. A single server cannot handle that massive load and will crash — becoming a <strong>Single Point of Failure (SPOF)</strong>.</li>
              <li><strong>The 2 Options to Handle the Load:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.4rem;">
                  <li><strong>Increase the capacity of the existing server</strong> (Vertical Scaling).</li>
                  <li><strong>Increase the total number of servers</strong> and host the application across all of them (Horizontal Scaling).</li>
                </ol>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 22.1 · Overcoming Single-Server Overload (Scale Up vs. Scale Out)</span>
                <span class="diagram-frame-tag">100 USERS OK → 1M USERS CRASHES SINGLE SERVER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Diagram showing single server crashing at 1 million users and solving via Vertical Scaling or Horizontal Scaling">
                  <defs>
                    <marker id="arrow-22" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Overloaded Server -->
                  <rect x="20" y="64" width="220" height="114" rx="14" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                  <text x="130" y="92" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">10K → 1M USERS SPIKE</text>
                  <text x="130" y="118" text-anchor="middle" class="svg-title">1 Small Server</text>
                  <text x="130" y="142" text-anchor="middle" class="svg-sub">Maxed RAM &amp; CPU</text>
                  <text x="130" y="162" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Crashes (SPOF ✕)</text>

                  <!-- Two Solution Branches -->
                  <path d="M 240 100 L 342 66" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-22)"/>
                  <path d="M 240 140 L 342 174" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-22)"/>

                  <!-- Option 1: Vertical -->
                  <rect x="350" y="20" width="510" height="90" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="605" y="46" text-anchor="middle" class="svg-kicker">OPTION 1 · VERTICAL SCALING (SCALE UP)</text>
                  <text x="605" y="72" text-anchor="middle" class="svg-title">1 Super-Powerful Server (Like 1 Fast Chef → 10 Pizzas/hr)</text>
                  <text x="605" y="94" text-anchor="middle" class="svg-sub">Upgrade existing server RAM &amp; CPU capacity</text>

                  <!-- Option 2: Horizontal -->
                  <rect x="350" y="130" width="510" height="90" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="605" y="156" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">OPTION 2 · HORIZONTAL SCALING (SCALE OUT)</text>
                  <text x="605" y="182" text-anchor="middle" class="svg-title">Multiple Servers (Like 3–4 Chefs Distributing Orders)</text>
                  <text x="605" y="204" text-anchor="middle" class="svg-sub">Add Server 1, Server 2, Server 3 behind a Load Balancer</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 23: VERTICAL SCALING VS. HORIZONTAL SCALING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-23-vertical-vs-horizontal",
      number: "23",
      shortLabel: "Vertical vs Horizontal",
      title: "Vertical Scaling vs. Horizontal Scaling",
      summary: "Scale Up (upgrading or replacing a 16GB machine with a 32GB+ powerhouse) vs. Scale Out (hosting across Server 1, Server 2, Server 3 behind a Load Balancer).",
      subtopicLabels: ["23.1 Vertical Scaling (Scale Up)", "23.2 Horizontal Scaling (Scale Out)"],
      diagramCount: 1,
      sections: [
        {
          num: "23.1",
          title: "Vertical Scaling (Scale Up)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Core Concept:</strong> Increasing the hardware capacity/power of your <strong>single server</strong> rather than adding new servers.</li>
              <li><strong>2 Ways to Vertically Scale:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Buy &amp; Replace with a Bigger Machine:</strong> Replace your current server (e.g., <code>16GB RAM</code> + standard CPUs) with a much larger, more powerful server (e.g., <code>32GB RAM</code> + powerful CPUs).</li>
                  <li><strong>Upgrade the Existing Server:</strong> Enhance the existing server directly by adding more RAM (<code>16GB → 32GB</code>) and upgrading to more powerful CPUs.</li>
                </ol>
              </li>
            </ul>
          `
        },
        {
          num: "23.2",
          title: "Horizontal Scaling (Scale Out)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Core Concept:</strong> Instead of increasing a single server's hardware capacity, you <strong>increase the number of servers/machines</strong> (e.g., going from <code>1 Server</code> to <code>3 Servers</code>: <code>Server 1</code>, <code>Server 2</code>, <code>Server 3</code>) and host your application across all of them.</li>
              <li><strong>How it Handles Load:</strong> When thousands of users send requests, the load no longer falls on a single server — requests are distributed across multiple server instances using a <strong>Load Balancer</strong>.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 23.1 · Vertical Scaling (Scale Up) vs. Horizontal Scaling (Scale Out)</span>
                <span class="diagram-frame-tag">BIGGER SINGLE MACHINE VS MORE MACHINES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Side-by-side diagram comparing Vertical Scaling upgrading 16GB RAM to 32GB RAM on one server versus Horizontal Scaling using a Load Balancer across Server 1, Server 2, and Server 3">
                  <defs>
                    <marker id="arrow-23" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- LEFT: Vertical Scaling -->
                  <rect x="16" y="16" width="412" height="212" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="222" y="44" text-anchor="middle" class="svg-kicker">VERTICAL SCALING (SCALE UP)</text>

                  <rect x="44" y="88" width="116" height="90" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="102" y="122" text-anchor="middle" class="svg-node">Server</text>
                  <text x="102" y="144" text-anchor="middle" class="svg-mono-xs">16GB RAM</text>
                  <text x="102" y="162" text-anchor="middle" class="svg-sub">Standard CPU</text>

                  <line x1="160" y1="133" x2="218" y2="133" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-23)"/>
                  <text x="189" y="122" text-anchor="middle" class="svg-mono-xs">Upgrade</text>

                  <rect x="226" y="64" width="174" height="138" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="313" y="104" text-anchor="middle" class="svg-title">1 Big Server</text>
                  <text x="313" y="132" text-anchor="middle" class="svg-mono-md">32GB+ RAM</text>
                  <text x="313" y="156" text-anchor="middle" class="svg-sub">Powerful CPUs</text>
                  <text x="313" y="182" text-anchor="middle" class="svg-mono-xs">No Load Balancer</text>

                  <!-- RIGHT: Horizontal Scaling -->
                  <rect x="452" y="16" width="412" height="212" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="658" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">HORIZONTAL SCALING (SCALE OUT)</text>

                  <rect x="572" y="58" width="172" height="40" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="658" y="83" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Load Balancer</text>

                  <line x1="618" y1="98" x2="532" y2="132" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-23)"/>
                  <line x1="658" y1="98" x2="658" y2="132" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-23)"/>
                  <line x1="698" y1="98" x2="784" y2="132" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-23)"/>

                  <rect x="476" y="140" width="112" height="68" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="532" y="170" text-anchor="middle" class="svg-node">Server 1</text>
                  <text x="532" y="190" text-anchor="middle" class="svg-sub">Instance A</text>

                  <rect x="602" y="140" width="112" height="68" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="658" y="170" text-anchor="middle" class="svg-node">Server 2</text>
                  <text x="658" y="190" text-anchor="middle" class="svg-sub">Instance B</text>

                  <rect x="728" y="140" width="112" height="68" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="784" y="170" text-anchor="middle" class="svg-node">Server 3</text>
                  <text x="784" y="190" text-anchor="middle" class="svg-sub">Instance C</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 24: DETAILED COMPARISON — HORIZONTAL VS. VERTICAL SCALING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-24-scaling-comparison",
      number: "24",
      shortLabel: "Comparison Table",
      title: "Detailed Comparison — Horizontal Scaling vs. Vertical Scaling",
      summary: "Comparing both scaling approaches across 6 core engineering dimensions: Machines, Load Balancer, Fault Tolerance (SPOF), Data Consistency, Scaling Limits, and RPC vs. IPC speed.",
      subtopicLabels: ["24.1 6 Key Dimensions", "24.2 Comparison Table"],
      diagramCount: 0,
      sections: [
        {
          num: "24.1",
          title: "6 Core Engineering Dimensions",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">1. Number of Machines</div>
                <div class="sub-box__title">Multiple Servers vs. 1 Big Server</div>
                <div class="sub-box__body"><strong>Horizontal:</strong> Uses multiple machines/servers (3, 4, or more).<br><strong>Vertical:</strong> Uses only 1 single large machine/server.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">2. Need for a Load Balancer</div>
                <div class="sub-box__title">Required vs. Not Required</div>
                <div class="sub-box__body"><strong>Horizontal:</strong> Requires a Load Balancer to decide which server (<code>Server 1</code>, <code>2</code>, or <code>3</code>) handles each request.<br><strong>Vertical:</strong> Does NOT require a Load Balancer (only 1 server).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">3. Fault Tolerance &amp; SPOF</div>
                <div class="sub-box__title">Resilient vs. Single Point of Failure</div>
                <div class="sub-box__body"><strong>Horizontal:</strong> Highly resilient — if 1 or 2 servers crash, remaining active servers serve traffic seamlessly (No SPOF).<br><strong>Vertical:</strong> If that 1 single server crashes, the entire application goes down (SPOF).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">4. Data Consistency</div>
                <div class="sub-box__title">Challenging vs. Naturally Consistent</div>
                <div class="sub-box__body"><strong>Horizontal:</strong> Maintaining data consistency can become a bottleneck because state is spread across multiple servers.<br><strong>Vertical:</strong> Strong data consistency automatically on one server.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">5. Scaling Limits</div>
                <div class="sub-box__title">Easy Scale vs. Hardware Ceiling</div>
                <div class="sub-box__body"><strong>Horizontal:</strong> Practically limitless — simply add more machines (<code>Server 4</code>, <code>Server 5</code>, etc.).<br><strong>Vertical:</strong> Restricted by strict physical hardware limits on RAM/CPU upgrades.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">6. Internal Communication &amp; Speed</div>
                <div class="sub-box__title">RPC (Network) vs. IPC (In-Machine)</div>
                <div class="sub-box__body"><strong>Horizontal:</strong> Separate servers talk over the network via <strong>RPC (Remote Procedure Calls)</strong> → slower.<br><strong>Vertical:</strong> Modules on one machine talk via <strong>IPC (Inter-Process Communication)</strong> → very fast.</div>
              </div>
            </div>
          `
        },
        {
          num: "24.2",
          title: "Side-by-Side Comparison Matrix",
          content: `
            <div class="comparison-table-wrapper">
              <table class="spec-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Horizontal Scaling (Scale Out)</th>
                    <th>Vertical Scaling (Scale Up)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Servers Used</strong></td>
                    <td>Multiple machines/servers</td>
                    <td>1 single big server</td>
                  </tr>
                  <tr>
                    <td><strong>Load Balancer</strong></td>
                    <td>Required</td>
                    <td>Not required</td>
                  </tr>
                  <tr>
                    <td><strong>Failure Risk</strong></td>
                    <td><strong>Resilient</strong> (No SPOF)</td>
                    <td><strong>Single Point of Failure (SPOF)</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Data Consistency</strong></td>
                    <td>Challenging (Can become a bottleneck)</td>
                    <td>Easy &amp; naturally consistent</td>
                  </tr>
                  <tr>
                    <td><strong>Scaling Ceiling</strong></td>
                    <td>Easy to scale (Add more machines)</td>
                    <td>Restricted by <strong>Hardware Limits</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Communication</strong></td>
                    <td><strong>Network Calls (RPC)</strong> → Slower</td>
                    <td><strong>Inter-Process Communication (IPC)</strong> → Faster</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 25: WHICH SCALING SHOULD WE USE? (THE HYBRID APPROACH)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-25-hybrid-scaling",
      number: "25",
      shortLabel: "Hybrid Approach",
      title: "Which Scaling Should We Use in the Real World? (The Hybrid Approach)",
      summary: "Why real-world production systems combine Horizontal Scaling (Resilience & infinite growth) with Vertical Scaling (powerful RAM/CPU per instance & fast IPC).",
      subtopicLabels: ["25.1 The Hybrid Approach"],
      diagramCount: 1,
      sections: [
        {
          num: "25.1",
          title: "Combining Horizontal & Vertical Scaling in Production",
          content: `
            <p><strong>Question:</strong> In a real-world production system, should we use Horizontal Scaling or Vertical Scaling?</p>
            <p style="margin-top: 0.5rem;"><strong>Answer:</strong> Real-world systems use a <strong>Hybrid Approach</strong> that combines the best features of <strong>both</strong> Horizontal and Vertical Scaling:</p>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">From Horizontal Scaling, We Take</div>
                <div class="sub-box__title">Resilience &amp; Ease of Scaling</div>
                <div class="sub-box__body">
                  1. <strong>Resilience:</strong> Multiple servers behind a Load Balancer so there is no Single Point of Failure.<br><br>
                  2. <strong>Ease of Scaling:</strong> Ability to add more server instances as traffic grows to thousands/millions of users.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">From Vertical Scaling, We Take</div>
                <div class="sub-box__title">Data Consistency &amp; Fast Speed</div>
                <div class="sub-box__body">
                  Making each individual server instance reasonably powerful with strong RAM/CPU so it benefits from fast internal processing and IPC.
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 25.1 · Real-World Hybrid Scaling Architecture</span>
                <span class="diagram-frame-tag">MULTIPLE VERTICALLY POWERFUL SERVERS BEHIND A LOAD BALANCER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Hybrid Scaling architecture combining Load Balancer and multiple powerful vertically scaled server nodes">
                  <defs>
                    <marker id="arrow-25" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <rect x="330" y="18" width="220" height="48" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="440" y="47" text-anchor="middle" class="svg-title">Load Balancer (Horizontal)</text>

                  <line x1="380" y1="66" x2="180" y2="108" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-25)"/>
                  <line x1="440" y1="66" x2="440" y2="108" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-25)"/>
                  <line x1="500" y1="66" x2="700" y2="108" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-25)"/>

                  <rect x="64" y="114" width="232" height="84" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="180" y="144" text-anchor="middle" class="svg-node">Strong Server 1</text>
                  <text x="180" y="166" text-anchor="middle" class="svg-mono-xs">32GB RAM · High CPU</text>
                  <text x="180" y="186" text-anchor="middle" class="svg-sub">Fast IPC + Resilient Pool</text>

                  <rect x="324" y="114" width="232" height="84" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="440" y="144" text-anchor="middle" class="svg-node">Strong Server 2</text>
                  <text x="440" y="166" text-anchor="middle" class="svg-mono-xs">32GB RAM · High CPU</text>
                  <text x="440" y="186" text-anchor="middle" class="svg-sub">Fast IPC + Resilient Pool</text>

                  <rect x="584" y="114" width="232" height="84" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="700" y="144" text-anchor="middle" class="svg-node">Strong Server 3</text>
                  <text x="700" y="166" text-anchor="middle" class="svg-mono-xs">32GB RAM · High CPU</text>
                  <text x="700" y="186" text-anchor="middle" class="svg-sub">Add Server 4, 5 as needed</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 26: WHY DO WE NEED TO SCALE? (MOVIE TICKET COUNTER EXAMPLE)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-26-ticket-counter",
      number: "26",
      shortLabel: "Ticket Counter",
      title: "Why Do We Need to Scale? (Movie Ticket Counter Example)",
      summary: "Single vs. Multiple Movie Ticket Counters splitting 1,000 people into 500 + 500, and why systems scale step-by-step from 0 to 1 Million+ users.",
      subtopicLabels: ["26.1 Ticket Counter Analogy", "26.2 Software System Impact"],
      diagramCount: 0,
      sections: [
        {
          num: "26.1",
          title: "Real-World Analogy (Single vs. Multiple Ticket Counters)",
          content: `
            <ul class="notes-bullet-list">
              <li>Imagine standing at a <strong>Movie Ticket Counter</strong> where only <strong>1 single person</strong> is issuing tickets.</li>
              <li>Suddenly, <strong>1,000 users</strong> show up at once to buy movie tickets.</li>
              <li><strong>2 Major Problems Occur:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Massive Load on the Single Person:</strong> The single operator gets completely overwhelmed.</li>
                  <li><strong>System Slows Down:</strong> Because 1,000 people are processed one by one, anyone standing after the 500th spot has to wait a very long time to get their ticket.</li>
                </ol>
              </li>
              <li><strong>The Solution:</strong> Open a <strong>2nd Ticket Counter</strong> with another operator. Now the 1,000 people split into <strong>500 + 500</strong>, reducing the load per operator and serving everyone after the 500th spot twice as fast.</li>
            </ul>
          `
        },
        {
          num: "26.2",
          title: "What Happens in a Software System",
          content: `
            <ul class="notes-bullet-list">
              <li>When <code>1,000</code>, <code>5,000</code>, or <code>10,000</code> concurrent requests suddenly hit a single server:
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li>The server slows down and <strong>system performance degrades</strong>.</li>
                  <li>The server can get overwhelmed and <strong>crash the entire system</strong>.</li>
                </ol>
              </li>
              <li>To prevent slowdowns and crashes as user traffic grows, we scale our system step-by-step from <strong>0 to 1 Million+ users</strong> (covered across Stages 1 to 9 in the following topics).</li>
            </ul>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 27: STAGE 1 TO STAGE 3 — SCALING THE APPLICATION TIER
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-27-stages-1-to-3",
      number: "27",
      shortLabel: "Stages 1–3",
      title: "Stage 1 to Stage 3 — Scaling the Application Tier",
      summary: "Evolution from Stage 1 (Single College-Level Server with App + DB) → Stage 2 (Separate App & DB Servers) → Stage 3 (Multiple App Servers 1, 2, 3 behind a Load Balancer).",
      subtopicLabels: ["27.1 Stage 1: Single Server", "27.2 Stage 2: Split App & DB", "27.3 Stage 3: Multiple App Servers + LB"],
      diagramCount: 1,
      sections: [
        {
          num: "27.1",
          title: "Stage 1: Single Server Setup (College-Level Project Architecture)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> Both the <strong>Application (Business Logic — e.g., Node.js or Spring Boot)</strong> and the <strong>Database (e.g., MongoDB or SQL)</strong> run inside the <strong>exact same single server</strong>.</li>
              <li>The Client communicates directly with this single server.</li>
              <li><strong>Problem:</strong> Works fine for a college project or a handful of users, but both application logic and database queries compete for the same server's CPU and RAM.</li>
            </ul>
          `
        },
        {
          num: "27.2",
          title: "Stage 2: Separating Application Server & Database Server",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> As initial users start growing, we decouple the application and database onto <strong>two separate servers</strong>:
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Dedicated Application Server:</strong> Runs only the business logic.</li>
                  <li><strong>Dedicated Database Server:</strong> Handles only database queries and storage.</li>
                </ol>
              </li>
              <li><strong>Request Flow:</strong> <code>Client</code> → sends request to <code>Application Server</code> → queries <code>Database Server</code> (if DB operation is needed).</li>
              <li><strong>Benefit:</strong> Distributes the load — the App Server only handles business logic load, and the DB Server only handles database load.</li>
            </ul>
          `
        },
        {
          num: "27.3",
          title: "Stage 3: Multiple Application Servers + Load Balancer",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The Problem with a Single App Server:</strong> As users grow further, a single Application Server's CPU and memory get maxed out, slowing down performance and creating a <strong>Single Point of Failure (SPOF)</strong>.</li>
              <li><strong>The Solution:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li>Spin up <strong>Multiple Application Servers</strong> (<code>App Server 1</code>, <code>App Server 2</code>, <code>App Server 3</code>).</li>
                  <li>Place a <strong>Load Balancer</strong> in front of them because the Client does not know which App Server to call.</li>
                </ol>
              </li>
              <li><strong>How it Works:</strong> The <strong>Load Balancer</strong> inspects active traffic and server health (which server is active vs. inactive) and routes the client's request to the best available Application Server.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 27.1 · Application Tier Evolution (Stage 1 → Stage 2 → Stage 3)</span>
                <span class="diagram-frame-tag">0 TO THOUSANDS OF USERS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Three-stage scaling evolution from Stage 1 Single Server to Stage 2 Separate App and DB to Stage 3 Load Balancer with App Server 1, 2, and 3">
                  <defs>
                    <marker id="arrow-27" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- STAGE 1 -->
                  <rect x="14" y="18" width="224" height="214" rx="14" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="126" y="44" text-anchor="middle" class="svg-kicker">STAGE 1 · SINGLE SERVER</text>
                  <rect x="44" y="64" width="164" height="128" rx="12" fill="var(--bg-surface)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="126" y="92" text-anchor="middle" class="svg-node">1 Shared Server</text>
                  <rect x="64" y="106" width="124" height="30" rx="6" fill="var(--accent-light)"/>
                  <text x="126" y="126" text-anchor="middle" class="svg-mono-xs">App (Node/Spring)</text>
                  <rect x="64" y="144" width="124" height="30" rx="6" fill="var(--warning-bg)"/>
                  <text x="126" y="164" text-anchor="middle" class="svg-mono-xs">DB (SQL/Mongo)</text>
                  <text x="126" y="216" text-anchor="middle" class="svg-sub">Competes for CPU/RAM</text>

                  <!-- STAGE 2 -->
                  <rect x="256" y="18" width="240" height="214" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.4"/>
                  <text x="376" y="44" text-anchor="middle" class="svg-kicker">STAGE 2 · SPLIT APP &amp; DB</text>
                  <rect x="288" y="64" width="176" height="48" rx="10" fill="var(--bg-surface)" stroke="var(--accent)"/>
                  <text x="376" y="93" text-anchor="middle" class="svg-node">Dedicated App Server</text>
                  <line x1="376" y1="112" x2="376" y2="142" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-27)"/>
                  <rect x="288" y="148" width="176" height="48" rx="10" fill="var(--accent-light)" stroke="var(--border-strong)"/>
                  <text x="376" y="177" text-anchor="middle" class="svg-node">Dedicated DB Server</text>
                  <text x="376" y="218" text-anchor="middle" class="svg-sub">App Server still 1 SPOF</text>

                  <!-- STAGE 3 -->
                  <rect x="514" y="18" width="352" height="214" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="690" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STAGE 3 · MULTI-APP + LOAD BALANCER</text>
                  <rect x="614" y="56" width="152" height="32" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="690" y="77" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Load Balancer</text>

                  <rect x="534" y="106" width="96" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="582" y="132" text-anchor="middle" class="svg-mono-xs">App 1</text>

                  <rect x="642" y="106" width="96" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="690" y="132" text-anchor="middle" class="svg-mono-xs">App 2</text>

                  <rect x="750" y="106" width="96" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="798" y="132" text-anchor="middle" class="svg-mono-xs">App 3</text>

                  <rect x="598" y="168" width="184" height="42" rx="10" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="690" y="194" text-anchor="middle" class="svg-mono-xs">Single DB (Next SPOF!)</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 28: STAGE 4 — DATABASE REPLICATION (MASTER-SLAVE)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-28-stage-4-replication",
      number: "28",
      shortLabel: "Stage 4: Replication",
      title: "Stage 4 — Database Replication (Master-Slave Architecture)",
      summary: "Eliminating the Single Database SPOF: Write operations (POST/PUT/DELETE) go to Master, Master replicates to Slave 1/2/3, Read operations (GET) hit Slaves, and Slave promotes on Master crash.",
      subtopicLabels: ["28.1 Single DB SPOF", "28.2 Master-Slave Replication", "28.3 Fault Tolerance & Failover"],
      diagramCount: 1,
      sections: [
        {
          num: "28.1",
          title: "The Problem with a Single Database Server",
          content: `
            <ul class="notes-bullet-list">
              <li>Even though we scaled the Application Tier to 3 servers in Stage 3, all 3 App Servers still talk to <strong>only 1 single Database Server</strong>.</li>
              <li>If that single Database crashes or goes down, <strong>zero user requests can be fulfilled</strong> — making the single Database a <strong>Single Point of Failure (SPOF)</strong>.</li>
            </ul>
          `
        },
        {
          num: "28.2",
          title: "The Solution: Master-Slave Database Replication",
          content: `
            <p>We split the database tier into <strong>1 Master Node</strong> and <strong>Multiple Slave Nodes (<code>Slave 1</code>, <code>Slave 2</code>, <code>Slave 3</code>)</strong>:</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Writes Only</div>
                <div class="sub-box__title">POST / PUT / DELETE → Master</div>
                <div class="sub-box__body">Whenever a user updates their email address or modifies data (a <strong>Write Request</strong>), the App Server sends the write operation strictly to the <strong>Master Node</strong>.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Auto-Sync</div>
                <div class="sub-box__title">Data Replication (Master → Slaves)</div>
                <div class="sub-box__body">Whenever any write happens on the <strong>Master Node</strong>, the Master immediately <strong>replicates (copies)</strong> that change to all <strong>Slave Nodes</strong>. Thus, Slave Nodes are exact read copies of the Master Node.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Reads Only</div>
                <div class="sub-box__title">GET → Slave Nodes</div>
                <div class="sub-box__body">Whenever a user wants to fetch/view their personal details (a <strong>Read Request</strong>), the App Server queries one of the <strong>Slave Nodes</strong> (<code>Slave 1</code>, <code>Slave 2</code>, or <code>Slave 3</code>), keeping heavy read traffic off the Master.</div>
              </div>
            </div>
          `
        },
        {
          num: "28.3",
          title: "How Master-Slave Handles Failures (Fault Tolerance)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What if <code>Slave 1</code> goes down?</strong> No problem — <code>Slave 2</code>, <code>Slave 3</code>, or <code>Slave 4</code> immediately serve the user's read requests.</li>
              <li><strong>What if the <code>Master Node</code> itself crashes?</strong> One of the existing <strong>Slave Nodes is promoted to become the new Master Node</strong> and starts accepting Write operations, completely eliminating the Database Single Point of Failure.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 28.1 · Stage 4: Master-Slave Database Replication</span>
                <span class="diagram-frame-tag">WRITES TO MASTER · READS TO SLAVES · AUTO-PROMOTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Master-Slave Database Replication diagram showing App Servers sending Writes to Master DB, Master replicating to Slave 1, 2, and 3, and App Servers reading GET requests from Slaves">
                  <defs>
                    <marker id="arrow-28" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- App Tier -->
                  <rect x="20" y="76" width="184" height="114" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="112" y="108" text-anchor="middle" class="svg-title">App Servers</text>
                  <text x="112" y="132" text-anchor="middle" class="svg-mono-xs">App 1 · App 2 · App 3</text>
                  <text x="112" y="160" text-anchor="middle" class="svg-sub">Separates Write vs Read</text>

                  <!-- Write Arrow -> Master -->
                  <path d="M 204 106 L 332 64" fill="none" stroke="var(--warning)" stroke-width="2.2" marker-end="url(#arrow-28)"/>
                  <text x="266" y="72" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Writes (POST/PUT)</text>

                  <!-- Master Node -->
                  <rect x="340" y="24" width="214" height="86" rx="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.8"/>
                  <text x="447" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">MASTER DB NODE</text>
                  <text x="447" y="78" text-anchor="middle" class="svg-title">Primary Write DB</text>
                  <text x="447" y="98" text-anchor="middle" class="svg-sub">Replicates every write</text>

                  <!-- Read Arrow -> Slaves -->
                  <path d="M 204 162 L 332 184" fill="none" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-28)"/>
                  <text x="266" y="192" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Reads (GET)</text>

                  <!-- Replication Arrows Master -> Slaves -->
                  <path d="M 554 67 L 640 67 L 640 130" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arrow-28)"/>
                  <text x="698" y="64" text-anchor="middle" class="svg-mono-xs">Data Replication</text>
                  <text x="698" y="82" text-anchor="middle" class="svg-sub">(Master → Slaves)</text>

                  <!-- Slave Nodes Box -->
                  <rect x="340" y="138" width="516" height="106" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="598" y="162" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">READ REPLICA SLAVE NODES (PROMOTED IF MASTER CRASHES)</text>

                  <rect x="362" y="176" width="146" height="50" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="435" y="206" text-anchor="middle" class="svg-node">Slave 1 (Read ✓)</text>

                  <rect x="525" y="176" width="146" height="50" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="598" y="206" text-anchor="middle" class="svg-node">Slave 2 (Read ✓)</text>

                  <rect x="688" y="176" width="146" height="50" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="761" y="206" text-anchor="middle" class="svg-node">Slave 3 (Read ✓)</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 29: STAGE 5 — ADDING CACHE MEMORY FOR BETTER PERFORMANCE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-29-stage-5-caching",
      number: "29",
      shortLabel: "Stage 5: Cache",
      title: "Stage 5 — Adding Cache Memory for Better Performance",
      summary: "Why database disk queries take 12 ms (2+4+4+2), how in-memory Distributed Cache cuts latency by 50% to 6 ms (2+1+1+2), and step-by-step Cache Hit vs. Cache Miss flows.",
      subtopicLabels: ["29.1 Latency Without Cache (12ms)", "29.2 Cache Hit (6ms) & Cache Miss"],
      diagramCount: 1,
      sections: [
        {
          num: "29.1",
          title: "Why Database Queries Are Slow (Latency Breakdown WITHOUT Cache)",
          content: `
            <p>Database disk operations are inherently expensive and slow, especially under high user load. Suppose a client requests their personal profile details without a cache:</p>
            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li><code>Client</code> → <code>App Server 1</code>: <strong>2 ms</strong></li>
              <li><code>App Server 1</code> → queries <code>Slave DB 1</code>: <strong>4 ms</strong></li>
              <li><code>Slave DB 1</code> → returns data to <code>App Server 1</code>: <strong>4 ms</strong></li>
              <li><code>App Server 1</code> → returns response to <code>Client</code>: <strong>2 ms</strong></li>
            </ul>
            <div class="formula-box">Total Response Time (Without Cache) = 2 + 4 + 4 + 2 = 12 ms</div>
          `
        },
        {
          num: "29.2",
          title: "How Distributed Cache Cuts Latency in Half (Cache Hit vs. Cache Miss)",
          content: `
            <p>We introduce an in-memory <strong>Distributed Cache</strong> between the Application Tier (<code>App Servers</code>) and the Data Tier (<code>Master/Slave DBs</code>). Because Cache is an <strong>in-memory solution</strong>, reading from it is ultra-fast (<strong>1 ms</strong> instead of <strong>4 ms</strong>).</p>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Cache Hit · 50% Faster</div>
                <div class="sub-box__title">When User Data IS in Cache (6 ms)</div>
                <div class="sub-box__body">
                  • <code>Client</code> → <code>App Server 3</code>: <strong>2 ms</strong><br>
                  • <code>App Server 3</code> → checks <code>Cache Memory</code>: <strong>1 ms</strong><br>
                  • <code>Cache Memory</code> → returns data: <strong>1 ms</strong><br>
                  • <code>App Server 3</code> → returns to <code>Client</code>: <strong>2 ms</strong><br><br>
                  <strong>Total = <code>2 + 1 + 1 + 2 = 6 ms</code></strong> (50% faster than 12 ms!)
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Cache Miss · Backfill Flow</div>
                <div class="sub-box__title">When User Data is NOT in Cache</div>
                <div class="sub-box__body">
                  1. <code>App Server</code> checks <code>Cache</code> and doesn't find the data.<br>
                  2. <code>App Server</code> queries a <strong>Slave DB Node</strong> and fetches user details.<br>
                  3. <code>App Server</code> <strong>stores/writes that data into Cache Memory</strong> for future requests.<br>
                  4. <code>App Server</code> returns response to <code>Client</code>.
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 29.1 · Latency Comparison: Without Cache (12 ms) vs. With Cache (6 ms)</span>
                <span class="diagram-frame-tag">IN-MEMORY 1ms READS VS 4ms DISK READS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Latency comparison showing 12ms round trip without cache versus 6ms round trip with distributed cache hit and cache miss backfill flow">
                  <defs>
                    <marker id="arrow-29" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Row 1: Without Cache (12ms) -->
                  <rect x="16" y="18" width="848" height="92" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="36" y="42" class="svg-kicker" style="fill: var(--warning);">WITHOUT CACHE (TOTAL = 12 MS)</text>

                  <rect x="36" y="54" width="124" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="98" y="80" text-anchor="middle" class="svg-node">Client</text>

                  <line x1="160" y1="75" x2="254" y2="75" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-29)"/>
                  <text x="207" y="67" text-anchor="middle" class="svg-mono-xs">2ms + 2ms</text>

                  <rect x="262" y="54" width="150" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="337" y="80" text-anchor="middle" class="svg-node">App Server 1</text>

                  <line x1="412" y1="75" x2="520" y2="75" stroke="var(--warning)" stroke-width="2" marker-end="url(#arrow-29)"/>
                  <text x="466" y="67" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">4ms + 4ms (Slow)</text>

                  <rect x="528" y="54" width="164" height="42" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="610" y="80" text-anchor="middle" class="svg-node">Slave DB 1 (Disk)</text>

                  <rect x="714" y="54" width="132" height="42" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="780" y="80" text-anchor="middle" class="svg-mono-md" style="fill: var(--danger);">12 ms Total</text>

                  <!-- Row 2: With Cache (6ms) -->
                  <rect x="16" y="128" width="848" height="94" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="36" y="152" class="svg-kicker" style="fill: var(--success);">WITH DISTRIBUTED CACHE HIT (TOTAL = 6 MS · 50% FASTER)</text>

                  <rect x="36" y="164" width="124" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="98" y="190" text-anchor="middle" class="svg-node">Client</text>

                  <line x1="160" y1="185" x2="254" y2="185" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-29)"/>
                  <text x="207" y="177" text-anchor="middle" class="svg-mono-xs">2ms + 2ms</text>

                  <rect x="262" y="164" width="150" height="42" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="337" y="190" text-anchor="middle" class="svg-node">App Server 3</text>

                  <line x1="412" y1="185" x2="520" y2="185" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-29)"/>
                  <text x="466" y="177" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">1ms + 1ms (Fast)</text>

                  <rect x="528" y="164" width="164" height="42" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="610" y="190" text-anchor="middle" class="svg-node">In-Memory Cache</text>

                  <rect x="714" y="164" width="132" height="42" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="780" y="190" text-anchor="middle" class="svg-mono-md" style="fill: var(--success);">6 ms (2× Fast)</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 30: STAGE 6 & STAGE 7 — CDN & MULTIPLE DATA CENTERS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-30-stages-6-7-cdn-multidc",
      number: "30",
      shortLabel: "Stages 6–7: CDN",
      title: "Stage 6 & Stage 7 — CDN (Content Delivery Network) & Multiple Data Centers",
      summary: "Serving static content (HTML, Videos, Images, Audio) via Local UK CDN with 3-step fallback hierarchy, plus Multi-DC India/USA Intra-Region and Cross-Region failover.",
      subtopicLabels: ["30.1 Stage 6: Global CDN", "30.2 Stage 7: Multiple Data Centers"],
      diagramCount: 1,
      sections: [
        {
          num: "30.1",
          title: "Stage 6: Content Delivery Network (CDN) for Global Static Content",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>What is a CDN?</strong> A geographically distributed network of servers that <strong>caches and serves Static Data</strong> such as <strong>HTML pages, Videos, Images, and Audio files</strong>.</li>
              <li><strong>The Problem (Cross-Continent Latency):</strong> Suppose you build a global platform like <strong>Netflix</strong> or <strong>Swiggy</strong>. Your main <strong>Data Centers</strong> (App Servers + Master/Slave Databases) are hosted in <strong>India</strong> and <strong>USA</strong>. Suddenly, massive user traffic starts coming from the <strong>UK Region</strong>. Without a CDN, every UK user's request must travel all the way to the India or USA Data Center, causing <strong>high network latency</strong> and a poor user experience.</li>
              <li><strong>The Solution (Hosting a Local CDN):</strong> We deploy a <strong>local CDN in the UK</strong>. Now, UK users fetch static content (videos, images, HTML) directly from the <strong>UK CDN</strong> without hitting the India or USA Data Centers.</li>
              <li><strong>CDN Fallback Hierarchy (If Data is Missing in the Local CDN):</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Step 1:</strong> Request checks the <strong>Local UK CDN</strong>.</li>
                  <li><strong>Step 2:</strong> If the data is not cached in the UK CDN, the request goes to the <strong>Next Nearest CDN</strong>.</li>
                  <li><strong>Step 3:</strong> If the data is not in the nearest CDN either, the request finally goes to one of the origin <strong>Data Centers (India or USA)</strong>, fetches the data, caches it in the CDN, and serves the user.</li>
                </ol>
              </li>
            </ul>
          `
        },
        {
          num: "30.2",
          title: "Stage 7: Multiple Data Centers (Multi-DC & Multi-Region High Availability)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Architecture Setup:</strong> Inside a single Region (e.g., <strong>India Region</strong>), we can deploy <strong>Multiple Data Centers</strong> (<code>Data Center 1</code>, <code>Data Center 2</code>, <code>Data Center 3</code>), and we also maintain other Regions (e.g., <strong>USA Region</strong> with <code>DC 1</code>, <code>DC 2</code>).</li>
              <li><strong>2 Levels of Failover:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Intra-Region Data Center Failover:</strong> Inside the India Region, if <code>Data Center 1</code> crashes, <code>Data Center 2</code> serves Indian users. If <code>Data Center 2</code> also crashes, <code>Data Center 3</code> takes over.</li>
                  <li><strong>Cross-Region Failover:</strong> If all 3 Data Centers in the <strong>India Region</strong> fail (or if the entire <strong>USA Region Data Center</strong> goes down), user traffic from the failed region is automatically routed to the healthy <strong>USA / India Region Data Center</strong>, ensuring 100% high availability.</li>
                </ol>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 30.1 · Global CDN Fallback Hierarchy &amp; Multi-DC Regional Failover</span>
                <span class="diagram-frame-tag">STATIC EDGE CACHING + 2-LEVEL DC FAILOVER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Global CDN and Multi-DC diagram showing UK User hitting Local UK CDN, fallback to Nearest CDN, and origin India Region DC1 DC2 DC3 and USA Region DC1 DC2">
                  <defs>
                    <marker id="arrow-30" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- UK User -> UK CDN -> Nearest CDN -->
                  <rect x="16" y="24" width="128" height="82" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="80" y="56" text-anchor="middle" class="svg-node">UK Users</text>
                  <text x="80" y="78" text-anchor="middle" class="svg-sub">Videos / HTML</text>

                  <line x1="144" y1="65" x2="180" y2="65" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-30)"/>

                  <rect x="188" y="24" width="150" height="82" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="263" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STEP 1 · HIT</text>
                  <text x="263" y="74" text-anchor="middle" class="svg-node">Local UK CDN</text>
                  <text x="263" y="94" text-anchor="middle" class="svg-sub">Low Latency Edge</text>

                  <line x1="338" y1="65" x2="378" y2="65" stroke="var(--warning)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow-30)"/>
                  <text x="358" y="54" text-anchor="middle" class="svg-mono-xs">Miss</text>

                  <rect x="386" y="24" width="158" height="82" rx="12" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="465" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">STEP 2 · FALLBACK</text>
                  <text x="465" y="74" text-anchor="middle" class="svg-node">Nearest CDN</text>
                  <text x="465" y="94" text-anchor="middle" class="svg-sub">Secondary Cache</text>

                  <line x1="544" y1="65" x2="584" y2="65" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow-30)"/>
                  <text x="564" y="54" text-anchor="middle" class="svg-mono-xs">Origin</text>

                  <!-- Origin Multi-DC Regions -->
                  <rect x="592" y="16" width="272" height="100" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="728" y="38" text-anchor="middle" class="svg-kicker">STEP 3 · INDIA REGION (MULTI-DC)</text>
                  <rect x="608" y="50" width="74" height="48" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="645" y="79" text-anchor="middle" class="svg-mono-xs">DC 1</text>
                  <rect x="691" y="50" width="74" height="48" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="728" y="79" text-anchor="middle" class="svg-mono-xs">DC 2</text>
                  <rect x="774" y="50" width="74" height="48" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="811" y="79" text-anchor="middle" class="svg-mono-xs">DC 3</text>

                  <!-- USA Region -->
                  <rect x="592" y="136" width="272" height="94" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="728" y="158" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">USA REGION (CROSS-REGION FAILOVER)</text>
                  <rect x="626" y="170" width="92" height="44" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="672" y="197" text-anchor="middle" class="svg-mono-xs">USA DC 1</text>
                  <rect x="738" y="170" width="92" height="44" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="784" y="197" text-anchor="middle" class="svg-mono-xs">USA DC 2</text>

                  <!-- Summary Note Bottom Left -->
                  <rect x="16" y="136" width="528" height="94" rx="14" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="36" y="164" class="svg-kicker">MULTI-DC FAILOVER GUARANTEES</text>
                  <text x="36" y="188" class="svg-sub">1. Intra-Region: DC 1 crashes → DC 2 takes over → DC 3 takes over</text>
                  <text x="36" y="210" class="svg-sub">2. Cross-Region: Entire India Region down → Traffic seamlessly routes to USA Region</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 31: STAGE 8 — DATABASE SHARDING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-31-stage-8-sharding",
      number: "31",
      shortLabel: "Stage 8: Sharding",
      title: "Stage 8 — Database Sharding (Horizontal Database Scaling)",
      summary: "Splitting a slow 1 Million-row Users Table into independent horizontal Shards (Shard 1: 1–1,000, Shard 2: 1,001–2,000) routed via Shard Keys (Name, Age, Geo, Gender).",
      subtopicLabels: ["31.1 Massive Table Problem", "31.2 How Sharding Works", "31.3 Sharding Strategies"],
      diagramCount: 1,
      sections: [
        {
          num: "31.1",
          title: "The Problem with a Massive Table (1 Million+ Rows)",
          content: `
            <ul class="notes-bullet-list">
              <li>Suppose your <code>Users Table</code> grows to <strong>1 Million rows</strong>.</li>
              <li>Database queries are already expensive, and running a search operation across all 1 Million entries becomes very slow (while <strong>Database Indexing</strong> helps, indexing alone has its own drawbacks and storage overhead at massive scale).</li>
            </ul>
          `
        },
        {
          num: "31.2",
          title: "What is Database Sharding?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Core Concept:</strong> Splitting a huge dataset (e.g., 1 Million rows) into smaller, manageable horizontal pieces called <strong>Shards</strong> (<code>Shard 1</code>, <code>Shard 2</code>, <code>Shard 3</code>, <code>Shard 4</code>, <code>Shard 5</code>).</li>
              <li><strong>How Shards Work:</strong>
                <ul class="notes-sub-list">
                  <li><strong>Each Shard is an independent Database</strong> hosted on its own separate server (Horizontal Scaling of the Database).</li>
                  <li><strong>Example Row Distribution:</strong> <code>Shard 1 (S1)</code> manages rows <code>1 to 1,000</code>; <code>Shard 2 (S2)</code> manages rows <code>1,001 to 2,000</code>; and so on across the 1 Million rows.</li>
                </ul>
              </li>
              <li><strong>Why Sharding Makes Queries Fast:</strong> Instead of iterating through all 1,000,000 rows to find a record, the system uses a <strong>Shard Key</strong> to identify the exact relevant shard and searches only within that small shard (e.g., searching 1,000 rows instead of 1,000,000 rows).</li>
            </ul>
          `
        },
        {
          num: "31.3",
          title: "Common Sharding Strategies (Parameters / Shard Keys)",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Strategy 01</div>
                <div class="sub-box__title">Name-Based Sharding</div>
                <div class="sub-box__body">Users whose names start with <code>A</code> go to one shard; users whose names start with <code>S</code> go to another shard.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Strategy 02</div>
                <div class="sub-box__title">Age-Based Sharding</div>
                <div class="sub-box__body">Partitioning user records across database shards based on age ranges.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Strategy 03</div>
                <div class="sub-box__title">Geo / Location-Based Sharding</div>
                <div class="sub-box__body">Grouping users by geographic region or country on nearby database servers.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Strategy 04</div>
                <div class="sub-box__title">Gender-Based Sharding</div>
                <div class="sub-box__body">Splitting table partitions using gender attributes as the shard key.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 31.1 · Horizontal Database Sharding (1,000,000 Rows → Small Independent Shards)</span>
                <span class="diagram-frame-tag">SEARCH 1,000 ROWS INSTEAD OF 1,000,000</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Database Sharding diagram splitting 1 million user rows through a Shard Key Router into independent Shard 1 rows 1 to 1000, Shard 2 rows 1001 to 2000, and Shard N">
                  <defs>
                    <marker id="arrow-31" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Giant Unsharded Table -->
                  <rect x="20" y="54" width="188" height="122" rx="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="114" y="86" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">BEFORE SHARDING</text>
                  <text x="114" y="112" text-anchor="middle" class="svg-title">Users Table</text>
                  <text x="114" y="136" text-anchor="middle" class="svg-mono-xs">1,000,000 Rows</text>
                  <text x="114" y="158" text-anchor="middle" class="svg-sub">Very Slow Search</text>

                  <line x1="208" y1="115" x2="262" y2="115" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-31)"/>

                  <!-- Shard Key Router -->
                  <rect x="270" y="64" width="174" height="102" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.7"/>
                  <text x="357" y="94" text-anchor="middle" class="svg-kicker">SHARD KEY</text>
                  <text x="357" y="120" text-anchor="middle" class="svg-title">Shard Router</text>
                  <text x="357" y="144" text-anchor="middle" class="svg-sub">Name · Age · Geo · ID</text>

                  <!-- Fan out to Shards -->
                  <path d="M 444 92 L 522 50" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-31)"/>
                  <line x1="444" y1="115" x2="522" y2="115" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-31)"/>
                  <path d="M 444 138 L 522 180" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-31)"/>

                  <!-- Independent Shards -->
                  <rect x="530" y="20" width="330" height="54" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="695" y="44" text-anchor="middle" class="svg-node">Shard 1 (S1 · Independent DB Server)</text>
                  <text x="695" y="62" text-anchor="middle" class="svg-mono-xs">Rows 1 – 1,000 (Fast Lookup ✓)</text>

                  <rect x="530" y="88" width="330" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="695" y="112" text-anchor="middle" class="svg-node">Shard 2 (S2 · Independent DB Server)</text>
                  <text x="695" y="130" text-anchor="middle" class="svg-mono-xs">Rows 1,001 – 2,000</text>

                  <rect x="530" y="156" width="330" height="54" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="695" y="180" text-anchor="middle" class="svg-node">Shard 3 … Shard N (Separate Servers)</text>
                  <text x="695" y="198" text-anchor="middle" class="svg-mono-xs">Up to 1,000,000+ Rows Horizontally Scaled</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 32: STAGE 9 — MESSAGING QUEUES (KAFKA, RABBITMQ, AWS SQS)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-32-stage-9-queues",
      number: "32",
      shortLabel: "Stage 9: Queues",
      title: "Stage 9 — Messaging Queues (Kafka, RabbitMQ, AWS SQS)",
      summary: "Why 10 Million festive-sale orders crash a synchronous Payment Service (100 req/s cap), and how Producer → Kafka Queue → Consumer rate-smoothing decouples downstream services.",
      subtopicLabels: ["32.1 Synchronous Crash (10M Sale)", "32.2 Asynchronous Queue Buffering"],
      diagramCount: 1,
      sections: [
        {
          num: "32.1",
          title: "The Problem WITHOUT Messaging Queues (Synchronous Cascading Crash)",
          content: `
            <p>Imagine an <strong>Amazon-like E-Commerce Application</strong> during a festive sale where a user clicks <strong>"Place Order"</strong> (ordering Peanut Butter):</p>
            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li>Without a queue, the <code>Order Service</code> must synchronously call 4 downstream services one after another:
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Inventory Service</strong> (to decrease peanut butter stock count)</li>
                  <li><strong>Payment Service</strong> (to process the payment)</li>
                  <li><strong>Shipment Service</strong> (to initiate product shipping)</li>
                  <li><strong>Notification Service</strong> (to send order confirmation and live tracking updates)</li>
                </ol>
              </li>
              <li><strong>What Happens When 10 Million Requests Hit During a Sale?</strong>
                <ul class="notes-sub-list">
                  <li>All <strong>10 Million requests</strong> simultaneously hit <code>Order Service → Inventory Service → Payment Service → Shipment Service → Notification Service</code>.</li>
                  <li>Suppose the <strong>Payment Service</strong> only has a maximum capacity of <strong>1 Million requests at a time</strong> (or <code>100 requests/second</code>).</li>
                  <li>Getting slammed with 10 Million requests at once completely <strong>overwhelms and crashes the Payment Service</strong>, causing the <strong>entire order flow to fail</strong>.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "32.2",
          title: "The Solution WITH Messaging Queues (Asynchronous Buffering & Decoupling)",
          content: `
            <p>We place a <strong>Messaging Queue</strong> (<strong>Apache Kafka</strong>, <strong>RabbitMQ</strong>, or <strong>AWS SQS</strong>) between the <code>Order Service</code> and the downstream services (<code>Inventory</code>, <code>Payment</code>, <code>Shipment</code>, <code>Notification</code>):</p>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Step 1 · Producer</div>
                <div class="sub-box__title">Order Service Publishes Events</div>
                <div class="sub-box__body">When 1M or 10M order requests arrive, they do <strong>not</strong> hit downstream services directly. The <code>Order Service</code> acts as a <strong>Producer</strong>, pushes events (<code>Order Placed</code>, <code>Order Confirmed</code>, <code>Order Ready to Ship</code>) into the <strong>Kafka Messaging Queue</strong>, and immediately replies: <em>"Your order has been placed!"</em></div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Step 2 · Consumers (Rate Smoothing)</div>
                <div class="sub-box__title">Downstream Services Pull at Own Pace</div>
                <div class="sub-box__body">Each consumer (<code>Payment</code>, <code>Inventory</code>, <code>Shipment</code>, <code>Notification</code>) pulls messages strictly at its own capacity. If <code>Payment Service</code> handles <strong>100 requests/sec</strong>, it pulls only 100/sec safely without crashing — and can also scale horizontally if the backlog grows!</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 32.1 · Asynchronous Decoupling via Messaging Queue (Kafka / RabbitMQ / SQS)</span>
                <span class="diagram-frame-tag">10M SALE SPIKE BUFFERED · ZERO CRASHES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Messaging Queue architecture showing 10 Million orders hitting Order Service Producer, buffering inside Kafka RabbitMQ SQS Queue, and Consumers Inventory, Payment at 100 req/s, Shipment, and Notification pulling safely at their own pace">
                  <defs>
                    <marker id="arrow-32" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Producer: Order Service -->
                  <rect x="20" y="64" width="194" height="132" rx="14" fill="var(--bg-surface)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="117" y="92" text-anchor="middle" class="svg-kicker">PRODUCER</text>
                  <text x="117" y="118" text-anchor="middle" class="svg-title">Order Service</text>
                  <text x="117" y="142" text-anchor="middle" class="svg-mono-xs">10M Sale Requests</text>
                  <text x="117" y="166" text-anchor="middle" class="svg-sub">Instant "Order Placed!"</text>

                  <!-- Push Arrow -> Queue -->
                  <line x1="214" y1="130" x2="282" y2="130" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-32)"/>
                  <text x="248" y="118" text-anchor="middle" class="svg-mono-xs">Push</text>

                  <!-- Messaging Queue -->
                  <rect x="290" y="42" width="234" height="176" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="407" y="70" text-anchor="middle" class="svg-kicker">MESSAGING QUEUE</text>
                  <text x="407" y="96" text-anchor="middle" class="svg-title">Kafka / RabbitMQ / SQS</text>

                  <rect x="314" y="112" width="186" height="26" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="407" y="129" text-anchor="middle" class="svg-mono-xs">Event: Order Placed</text>

                  <rect x="314" y="144" width="186" height="26" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="407" y="161" text-anchor="middle" class="svg-mono-xs">Event: Order Confirmed</text>

                  <rect x="314" y="176" width="186" height="26" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="407" y="193" text-anchor="middle" class="svg-mono-xs">Event: Ready to Ship</text>

                  <!-- Pull Arrows to 4 Consumers -->
                  <path d="M 524 88 L 614 48" fill="none" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-32)"/>
                  <path d="M 524 118 L 614 104" fill="none" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-32)"/>
                  <path d="M 524 146 L 614 162" fill="none" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-32)"/>
                  <path d="M 524 174 L 614 218" fill="none" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-32)"/>
                  <text x="568" y="138" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Pull</text>

                  <!-- 4 Consumers -->
                  <rect x="622" y="22" width="238" height="46" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="741" y="50" text-anchor="middle" class="svg-node">1. Inventory Service</text>

                  <rect x="622" y="80" width="238" height="48" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="741" y="102" text-anchor="middle" class="svg-node">2. Payment Service ✓</text>
                  <text x="741" y="120" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Pulls safely at 100 req/sec</text>

                  <rect x="622" y="140" width="238" height="46" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="741" y="168" text-anchor="middle" class="svg-node">3. Shipment Service</text>

                  <rect x="622" y="198" width="238" height="46" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="741" y="226" text-anchor="middle" class="svg-node">4. Notification Service</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    }
  ]
};
