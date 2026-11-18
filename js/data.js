/* ═══════════════════════════════════════════════════════════════
   DATA.JS — User-Authored System Design Revision Notes
   Expandable Topic Cards + Structured Numbered Sections + SVG Diagrams
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    title: "OneNightRevise — System Design Revision Notes",
    totalTopics: 62
  },

  navGroups: [
    { label: "01–06 Monolith", targetId: "topic-1-monolith" },
    { label: "07–11 Gateway", targetId: "topic-7-api-gateway" },
    { label: "12–15 LB", targetId: "topic-12-load-balancing" },
    { label: "16–18 Proxy", targetId: "topic-16-forward-proxy" },
    { label: "19–21 Protocols", targetId: "topic-19-networking-protocols" },
    { label: "22–32 Scaling", targetId: "topic-22-what-is-scaling" },
    { label: "33–37 Cache", targetId: "topic-33-what-is-caching" },
    { label: "38–43 CAP", targetId: "topic-38-distributed-systems" },
    { label: "44–49 Rate Limit", targetId: "topic-44-rate-limiting" },
    { label: "50–54 HTTPS/SSL", targetId: "topic-50-http-symmetric-encryption" },
    { label: "55–59 DB & Storage", targetId: "topic-55-database-choice" },
    { label: "60–62 SPOF", targetId: "topic-60-what-is-spof" }
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
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 33: WHAT IS CACHING & WHY DO WE NEED IT?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-33-what-is-caching",
      number: "33",
      shortLabel: "What is Caching",
      title: "What is Caching & Why Do We Need It?",
      summary: "Amazon/Flipkart frequently accessed data, latency comparison without cache (2+2+2+2 = 8 ms) vs. with in-memory Cache (2+1+1+2 = 6 ms), and the 4 key benefits of caching.",
      subtopicLabels: ["33.1 E-Commerce Example", "33.2 Latency Without Cache (8ms)", "33.3 Latency With Cache (6ms)"],
      diagramCount: 1,
      sections: [
        {
          num: "33.1",
          title: "Real-World Example (E-Commerce Frequently Asked Data)",
          content: `
            <p>In an e-commerce application like <strong>Amazon</strong> or <strong>Flipkart</strong>, certain data is accessed repeatedly (<strong>Commonly / Frequently Asked Data</strong>) — such as a <strong>User's Profile</strong> or repeatedly checking the price of a specific item.</p>
          `
        },
        {
          num: "33.2",
          title: "Request Flow & Latency WITHOUT Caching (8 ms)",
          content: `
            <p>Suppose <strong>User A</strong> wants to access their profile when there is no cache:</p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li><code>Client (User A)</code> sends request to <code>Server</code>: <strong>2 ms</strong></li>
              <li><code>Server</code> makes a <strong>Network Call</strong> to query the <code>Database</code>: <strong>2 ms</strong></li>
              <li><code>Database</code> returns the response back to <code>Server</code>: <strong>2 ms</strong></li>
              <li><code>Server</code> returns the profile response to <code>Client</code>: <strong>2 ms</strong></li>
            </ol>
            <div class="formula-box">Total Time Taken (Without Caching) = 2 + 2 + 2 + 2 = 8 ms</div>

            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Problem 01</div>
                <div class="sub-box__title">Extra Network Call</div>
                <div class="sub-box__body">Every single profile view requires a network call to the database.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Problem 02</div>
                <div class="sub-box__title">Repeated Recomputation</div>
                <div class="sub-box__body">If User A accesses their profile 10 times, or 10,000 to 1 Million users repeatedly request their profiles in a single day, the server repeats the exact same database query every single time.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Problem 03</div>
                <div class="sub-box__title">Heavy DB Load &amp; Slow Response</div>
                <div class="sub-box__body">Database disk operations are very costly. Hitting the database repeatedly overloads the database and slows down the entire request-response cycle.</div>
              </div>
            </div>
          `
        },
        {
          num: "33.3",
          title: "Request Flow & Latency WITH Cache Memory (6 ms)",
          content: `
            <p><strong>What is Cache Memory?</strong> A <strong>fast, temporary, in-memory storage</strong> used to store frequently accessed data.</p>
            <p style="margin-top: 0.65rem;">Now suppose <strong>User A</strong> requests their profile when <strong>Cache Memory</strong> is present:</p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li><code>Client (User A)</code> sends request to <code>Server</code>: <strong>2 ms</strong></li>
              <li>Instead of going to the Database, the <code>Server</code> asks <code>Cache Memory</code> (<em>"Do you have User A's profile?"</em>): <strong>1 ms</strong> (fast because it is an in-memory solution).</li>
              <li><code>Cache Memory</code> returns User A's profile to <code>Server</code>: <strong>1 ms</strong></li>
              <li><code>Server</code> returns the response to <code>Client</code>: <strong>2 ms</strong></li>
            </ol>
            <div class="formula-box">Total Time Taken (With Cache Memory) = 2 + 1 + 1 + 2 = 6 ms</div>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">4 KEY BENEFITS OF CACHING</div>
              <ol class="notes-ordered-list" style="margin-top: 0.5rem;">
                <li><strong>Avoids Extra Network Calls</strong> to the database.</li>
                <li><strong>Avoids Recomputation</strong> for repeated identical requests.</li>
                <li><strong>Reduces Database Load</strong> drastically.</li>
                <li><strong>Makes Request-Response Time Fast.</strong></li>
              </ol>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 33.1 · Latency Comparison: Without Cache (8 ms) vs. With Cache (6 ms)</span>
                <span class="diagram-frame-tag">FASTER IN-MEMORY RETRIEVAL · REDUCED DB LOAD</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Caching latency comparison showing 8ms total time querying Database versus 6ms total time querying in-memory Cache">
                  <defs>
                    <marker id="arrow-33" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Without Cache -->
                  <rect x="16" y="16" width="848" height="90" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="36" y="40" class="svg-kicker" style="fill: var(--warning);">WITHOUT CACHE · 2 + 2 + 2 + 2 = 8 MS</text>
                  <rect x="36" y="52" width="130" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="101" y="77" text-anchor="middle" class="svg-node">User A</text>
                  <line x1="166" y1="72" x2="254" y2="72" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-33)"/>
                  <text x="210" y="64" text-anchor="middle" class="svg-mono-xs">2ms + 2ms</text>
                  <rect x="262" y="52" width="144" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="334" y="77" text-anchor="middle" class="svg-node">Server</text>
                  <line x1="406" y1="72" x2="516" y2="72" stroke="var(--warning)" stroke-width="2" marker-end="url(#arrow-33)"/>
                  <text x="461" y="64" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">2ms + 2ms (DB Call)</text>
                  <rect x="524" y="52" width="166" height="40" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="607" y="77" text-anchor="middle" class="svg-node">Database (Disk)</text>
                  <rect x="712" y="52" width="132" height="40" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="778" y="77" text-anchor="middle" class="svg-mono-md" style="fill: var(--danger);">8 ms Total</text>

                  <!-- With Cache -->
                  <rect x="16" y="124" width="848" height="90" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="36" y="148" class="svg-kicker" style="fill: var(--success);">WITH CACHE MEMORY · 2 + 1 + 1 + 2 = 6 MS</text>
                  <rect x="36" y="160" width="130" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="101" y="185" text-anchor="middle" class="svg-node">User A</text>
                  <line x1="166" y1="180" x2="254" y2="180" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-33)"/>
                  <text x="210" y="172" text-anchor="middle" class="svg-mono-xs">2ms + 2ms</text>
                  <rect x="262" y="160" width="144" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="334" y="185" text-anchor="middle" class="svg-node">Server</text>
                  <line x1="406" y1="180" x2="516" y2="180" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-33)"/>
                  <text x="461" y="172" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">1ms + 1ms (In-Mem)</text>
                  <rect x="524" y="160" width="166" height="40" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="607" y="185" text-anchor="middle" class="svg-node">Cache Memory</text>
                  <rect x="712" y="160" width="132" height="40" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="778" y="185" text-anchor="middle" class="svg-mono-md" style="fill: var(--success);">6 ms Fast ✓</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 34: CACHING FLOW (CACHE HIT VS. CACHE MISS) & LIMITS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-34-cache-hit-miss",
      number: "34",
      shortLabel: "Hit vs Miss",
      title: "Caching Flow (Cache Hit vs. Cache Miss) & Why Not Store Everything in Cache?",
      summary: "Step-by-step Cache Hit (DB untouched) vs. Cache Miss (DB lookup + write-back to Cache) flows, plus why we cannot replace Databases with Cache Memory.",
      subtopicLabels: ["34.1 Cache Hit vs Cache Miss", "34.2 Why Not Store Everything in Cache?"],
      diagramCount: 1,
      sections: [
        {
          num: "34.1",
          title: "Cache Hit vs. Cache Miss Flow",
          content: `
            <p>When <code>Client (User A)</code> requests their profile from the <code>Server</code>, the server checks the <code>Cache Memory</code> first:</p>
            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Case 1 · Fast Path</div>
                <div class="sub-box__title">Cache Hit (Data IS Present in Cache)</div>
                <div class="sub-box__body">The Server checks the Cache → finds User A's profile → Cache returns the profile to the Server → Server returns it to the Client. (<strong>The Database is never called</strong>).</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Case 2 · Fallback + Populate</div>
                <div class="sub-box__title">Cache Miss (Data is NOT Present in Cache)</div>
                <div class="sub-box__body">The Server checks the Cache → User A's profile is <strong>not found</strong> (<strong>Cache Miss</strong>). The Server goes to the <strong>Database</strong>, fetches User A's profile, returns the profile to the <strong>Client</strong>, and <strong>simultaneously stores User A's profile in the Cache Memory</strong> for future requests.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 34.1 · Cache Hit vs. Cache Miss Execution Flow</span>
                <span class="diagram-frame-tag">CHECK CACHE FIRST · POPULATE ON MISS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Side-by-side diagram showing Cache Hit returning profile directly without Database and Cache Miss fetching from Database and saving into Cache Memory">
                  <defs>
                    <marker id="arrow-34" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- LEFT: Cache Hit -->
                  <rect x="16" y="16" width="412" height="208" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="222" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">CASE 1 · CACHE HIT (DB NEVER CALLED)</text>

                  <rect x="38" y="88" width="96" height="62" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="86" y="124" text-anchor="middle" class="svg-node">Server</text>

                  <line x1="134" y1="108" x2="220" y2="108" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-34)"/>
                  <text x="177" y="99" text-anchor="middle" class="svg-mono-xs">1. Lookup</text>
                  <line x1="228" y1="132" x2="142" y2="132" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-34)"/>
                  <text x="177" y="149" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">2. Found ✓</text>

                  <rect x="228" y="82" width="174" height="74" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="315" y="114" text-anchor="middle" class="svg-title">Cache Memory</text>
                  <text x="315" y="136" text-anchor="middle" class="svg-mono-xs">User A Profile ✓</text>

                  <text x="222" y="198" text-anchor="middle" class="svg-sub">Fast return straight to Client (Zero DB Load)</text>

                  <!-- RIGHT: Cache Miss -->
                  <rect x="452" y="16" width="412" height="208" rx="16" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="658" y="44" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">CASE 2 · CACHE MISS (FETCH DB + STORE)</text>

                  <rect x="472" y="96" width="94" height="60" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="519" y="131" text-anchor="middle" class="svg-node">Server</text>

                  <path d="M 566 112 L 664 78" fill="none" stroke="var(--warning)" stroke-width="1.8" marker-end="url(#arrow-34)"/>
                  <text x="612" y="84" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">1. Miss ✕</text>
                  <rect x="672" y="54" width="170" height="48" rx="10" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="757" y="83" text-anchor="middle" class="svg-node">Cache (3. Store ✓)</text>

                  <path d="M 566 140 L 664 166" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-34)"/>
                  <text x="612" y="168" text-anchor="middle" class="svg-mono-xs">2. Fetch</text>
                  <rect x="672" y="140" width="170" height="48" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="757" y="169" text-anchor="middle" class="svg-node">Database</text>

                  <text x="658" y="210" text-anchor="middle" class="svg-sub">Returns to Client &amp; saves in Cache for next time</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "34.2",
          title: "Interview Question: If Cache is so fast, why can't we store EVERYTHING in Cache instead of using a Database?",
          content: `
            <p><strong>Answer:</strong> We <strong>cannot</strong> store infinite/all data in Cache Memory because:</p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li>Cache is an expensive, limited <strong>in-memory (RAM) storage</strong> meant only for temporary, frequently accessed data.</li>
              <li>If we dump tons of data into the Cache and <strong>overload the Cache</strong>, searching inside the Cache itself will become slow, degrading cache performance.</li>
            </ol>
            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">GOLDEN RULE</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                Store infinite/permanent data in the <strong>Database</strong>, and store only <strong>relevant, frequently accessed data</strong> in the <strong>Cache Memory</strong>.
              </p>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 35: LOCAL CACHING VS. DISTRIBUTED CACHING
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-35-local-vs-distributed-cache",
      number: "35",
      shortLabel: "Local vs Distributed",
      title: "Local Caching vs. Distributed Caching (Solving Data Inconsistency)",
      summary: "Why in-server Local Caching causes redundant misses and stale-data bugs across App Servers 1–3, and how a Global Distributed Cache (Redis Cluster) solves inconsistency.",
      subtopicLabels: ["35.1 Local Caching", "35.2 2 Problems in Multi-Server", "35.3 Distributed Cache (Redis)"],
      diagramCount: 1,
      sections: [
        {
          num: "35.1",
          title: "What is Local Caching?",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> The Cache Memory is placed <strong>inside the Application Server's own memory</strong> (In-Server Memory).</li>
              <li><strong>When it Works Well:</strong> When you only have <strong>1 single Application Server</strong>. The client sends a request to the App Server, and the App Server fulfills it directly from its internal local cache.</li>
            </ul>
          `
        },
        {
          num: "35.2",
          title: "The 2 Major Problems with Local Caching (In Multi-Server Systems)",
          content: `
            <p>When we horizontally scale our application across multiple servers (<code>App Server 1</code>, <code>App Server 2</code>, <code>App Server 3</code>) behind a <strong>Load Balancer</strong>, every server has its own separate Local Cache (<code>Cache 1</code>, <code>Cache 2</code>, <code>Cache 3</code>):</p>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Problem 01 · Wasted Lookups</div>
                <div class="sub-box__title">Redundant Cache Misses &amp; Duplicate DB Queries</div>
                <div class="sub-box__body">
                  1. <strong>User X</strong> requests profile → Load Balancer routes to <strong><code>App Server 1</code></strong>.<br>
                  2. <code>Cache 1</code> is empty (Miss) → fetches from DB, returns to User X, saves inside <strong><code>Cache 1</code></strong>.<br>
                  3. Moments later, <strong>User X</strong> requests again → Load Balancer routes to <strong><code>App Server 2</code></strong>.<br>
                  4. Even though <code>Cache 1</code> has it, <strong><code>Cache 2</code> is completely empty!</strong> Causes another Miss &amp; duplicate DB query.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
                <div class="sub-box__tag">Problem 02 · Stale Data Bug</div>
                <div class="sub-box__title">Data Inconsistency Across Servers</div>
                <div class="sub-box__body">
                  1. User X's old profile is saved in <strong><code>App Server 2</code>'s Local Cache (<code>Cache 2</code>)</strong>.<br>
                  2. <strong>User X updates their profile</strong> → Load Balancer routes update to <strong><code>App Server 3</code></strong>.<br>
                  3. <code>App Server 3</code> updates DB and saves new profile in <strong><code>Cache 3</code></strong>.<br>
                  4. Next read hits <strong><code>App Server 2</code></strong> → returns <strong>old/stale profile from <code>Cache 2</code></strong>! (<code>Cache 3</code> has new data, <code>Cache 2</code> serves stale data → <strong>Data Inconsistency</strong>).
                </div>
              </div>
            </div>
          `
        },
        {
          num: "35.3",
          title: "The Solution: Distributed Caching (Global Shared Cache — e.g., Redis)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> Instead of keeping separate local caches inside each server, we place a <strong>Global Cache (like Redis)</strong> at a <strong>shared external location</strong> that all Application Servers (<code>App Server 1</code>, <code>App Server 2</code>, <code>App Server 3</code>) connect to.</li>
              <li><strong>How it Solves the Problems:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.45rem;">
                  <li><strong>Solves Data Inconsistency:</strong> Because <code>App Server 1</code>, <code>App Server 2</code>, and <code>App Server 3</code> all read from and write to the <strong>exact same shared Global Cache</strong>, an update made through <code>App Server 3</code> is immediately visible to <code>App Server 1</code> and <code>App Server 2</code>.</li>
                  <li><strong>Independent Scaling &amp; No SPOF:</strong> If load on the Global Cache grows, we can horizontally scale <strong>Redis into a Redis Cluster with multiple instances</strong>, preventing the cache from becoming a Single Point of Failure.</li>
                </ol>
              </li>
              <li><strong>Trade-Off (Local vs. Distributed Cache):</strong> <strong>Distributed Cache</strong> is <strong>Accurate &amp; Consistent</strong>, but slightly <strong>Slower</strong> than Local Cache because accessing an external shared cache adds <strong>1 extra Network Call</strong> from the App Server to Redis.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 35.1 · Local Cache Inconsistency Bug vs. Shared Global Distributed Cache (Redis)</span>
                <span class="diagram-frame-tag">CONSISTENT SHARED STATE · REDIS CLUSTER</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 265" class="arch-svg" role="img" aria-label="Comparison of Local Caching where Cache 2 has stale data and Cache 3 has updated data versus Distributed Caching where App Servers 1, 2, and 3 share one Global Redis Cache">
                  <defs>
                    <marker id="arrow-35" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- LEFT: Local Cache Bug -->
                  <rect x="16" y="16" width="412" height="232" rx="16" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.5"/>
                  <text x="222" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">LOCAL CACHING (DATA INCONSISTENCY)</text>

                  <rect x="34" y="64" width="114" height="108" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="91" y="90" text-anchor="middle" class="svg-node">App 1</text>
                  <rect x="44" y="106" width="94" height="52" rx="8" fill="var(--bg-subsection)" stroke="var(--border)"/>
                  <text x="91" y="128" text-anchor="middle" class="svg-mono-xs">Cache 1</text>
                  <text x="91" y="146" text-anchor="middle" class="svg-sub">Empty</text>

                  <rect x="165" y="64" width="114" height="108" rx="10" fill="var(--bg-surface)" stroke="var(--danger)"/>
                  <text x="222" y="90" text-anchor="middle" class="svg-node">App 2</text>
                  <rect x="175" y="106" width="94" height="52" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="222" y="128" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Cache 2</text>
                  <text x="222" y="146" text-anchor="middle" class="svg-sub">OLD Data ✕</text>

                  <rect x="296" y="64" width="114" height="108" rx="10" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="353" y="90" text-anchor="middle" class="svg-node">App 3</text>
                  <rect x="306" y="106" width="94" height="52" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="353" y="128" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Cache 3</text>
                  <text x="353" y="146" text-anchor="middle" class="svg-sub">NEW Data ✓</text>

                  <text x="222" y="206" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Read on App 2 returns Stale Profile!</text>
                  <text x="222" y="226" text-anchor="middle" class="svg-sub">Separate local memory per server</text>

                  <!-- RIGHT: Distributed Cache (Redis) -->
                  <rect x="452" y="16" width="412" height="232" rx="16" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="658" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">DISTRIBUTED CACHE (GLOBAL REDIS)</text>

                  <rect x="474" y="62" width="108" height="44" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="528" y="89" text-anchor="middle" class="svg-node">App 1</text>

                  <rect x="604" y="62" width="108" height="44" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="658" y="89" text-anchor="middle" class="svg-node">App 2</text>

                  <rect x="734" y="62" width="108" height="44" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="788" y="89" text-anchor="middle" class="svg-node">App 3</text>

                  <line x1="528" y1="106" x2="620" y2="144" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-35)"/>
                  <line x1="658" y1="106" x2="658" y2="144" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-35)"/>
                  <line x1="788" y1="106" x2="696" y2="144" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-35)"/>

                  <rect x="524" y="150" width="268" height="62" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="658" y="176" text-anchor="middle" class="svg-title">Global Redis Cluster</text>
                  <text x="658" y="198" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">100% Consistent · Scales Solo</text>

                  <text x="658" y="232" text-anchor="middle" class="svg-sub">Trade-off: +1 network hop to Redis</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 36: CACHE EVICTION POLICIES (FIFO, LRU, LFU)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-36-cache-eviction",
      number: "36",
      shortLabel: "Eviction Policies",
      title: "Cache Policies — Cache Eviction Policies (FIFO, LRU, LFU)",
      summary: "How caches decide what to evict when full: FIFO (First In First Out & hourly-hot-key pitfall), LRU (Least Recently Used stack), and LFU (Least Frequently Used access counters).",
      subtopicLabels: ["36.1 What are Cache Policies?", "36.2 FIFO", "36.3 LRU", "36.4 LFU"],
      diagramCount: 1,
      sections: [
        {
          num: "36.1",
          title: "What are Cache Policies?",
          content: `
            <p>Rules that decide <strong>which data to load/keep in the cache</strong> and <strong>which data to evict (remove) out of the cache</strong>. Cache performance depends directly on these policies. There are two types:</p>
            <ol class="notes-ordered-list" style="margin-top: 0.65rem;">
              <li><strong>Cache Eviction Policy</strong> (Which data to remove when cache is full)</li>
              <li><strong>Cache Write Policy</strong> (How and when to update data in Cache vs. Database)</li>
            </ol>
          `
        },
        {
          num: "36.2",
          title: "FIFO (First In, First Out)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> The data that was stored <strong>first</strong> in the cache is the <strong>first</strong> one to be removed when space is needed for new data.</li>
              <li><strong>Example:</strong> Suppose data entries arrive in the order <code>1: A</code>, <code>2: B</code>, <code>3: C</code>. Since <strong><code>A</code></strong> entered the cache first, when a new entry <strong><code>D</code></strong> arrives, FIFO evicts <strong><code>A</code></strong>.</li>
              <li><strong>Major Drawback:</strong> FIFO completely ignores <strong>how frequently or recently</strong> an item is accessed. Suppose <strong><code>A</code></strong> is accessed <strong>every single hour</strong>, whereas <strong><code>B</code></strong> and <strong><code>C</code></strong> are accessed only <strong>once every 5 days</strong>. Even though <code>A</code> is heavily used every hour, FIFO still blindly deletes <code>A</code> just because it arrived first.</li>
            </ul>
          `
        },
        {
          num: "36.3",
          title: "LRU (Least Recently Used)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> Tracks <strong>how recently</strong> each entry was accessed:
                <ul class="notes-sub-list">
                  <li><strong>Recently used entries</strong> are kept at the <strong>Top</strong> of the cache.</li>
                  <li><strong>Least recently used entries</strong> (not accessed for a long time) sink to the <strong>Bottom</strong> of the cache and are kicked out first.</li>
                </ul>
              </li>
              <li><strong>Example:</strong> Suppose the cache holds 5 entries (<code>A, B, C, D, E</code>):
                <ul class="notes-sub-list">
                  <li><code>A</code> → used a few seconds ago (Top) &nbsp;|&nbsp; <code>C</code> → used a few seconds ago (Top) &nbsp;|&nbsp; <code>D</code> → used a few minutes ago (Top)</li>
                  <li><code>B</code> → used a few hours/days ago (Bottom) &nbsp;|&nbsp; <code>E</code> → used a few months ago (Bottom)</li>
                </ul>
              </li>
              <li>When space is needed, LRU evicts the bottom-most entries (<strong><code>B</code> and <code>E</code></strong>) that haven't been used recently.</li>
            </ul>
          `
        },
        {
          num: "36.4",
          title: "LFU (Least Frequently Used)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>How it Works:</strong> Tracks the <strong>access count (frequency)</strong> of every entry in the cache and evicts the entry that has been accessed the <strong>fewest number of times</strong>.</li>
              <li><strong>Example:</strong> Suppose the cache has 3 entries (<code>A, B, C</code>):
                <ul class="notes-sub-list">
                  <li>Entry <code>A</code> → accessed <strong>5 times</strong></li>
                  <li>Entry <code>B</code> → accessed <strong>3 times</strong></li>
                  <li>Entry <code>C</code> → accessed <strong>only 1 time</strong></li>
                </ul>
              </li>
              <li>When a new entry <strong><code>D</code></strong> needs to be inserted, LFU looks at the access counts (<code>5, 3, 1</code>) and evicts <strong><code>C</code></strong> because it is the least frequently used.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 36.1 · Cache Eviction Policies: FIFO vs. LRU vs. LFU</span>
                <span class="diagram-frame-tag">ARRIVAL ORDER · RECENCY · FREQUENCY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Three-panel visual diagram comparing FIFO evicting oldest entry A, LRU evicting bottom old entries B and E, and LFU evicting lowest count entry C">
                  <!-- FIFO -->
                  <rect x="14" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="150" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">1. FIFO (FIRST IN, FIRST OUT)</text>

                  <rect x="34" y="60" width="232" height="36" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="150" y="83" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">1: A (1st in) → Evicted ✕</text>
                  <rect x="34" y="104" width="232" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="150" y="126" text-anchor="middle" class="svg-mono-xs">2: B (Stays)</text>
                  <rect x="34" y="146" width="232" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="150" y="168" text-anchor="middle" class="svg-mono-xs">3: C (Stays)</text>
                  <text x="150" y="212" text-anchor="middle" class="svg-sub">Ignores frequency &amp; recency</text>

                  <!-- LRU -->
                  <rect x="304" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="440" y="42" text-anchor="middle" class="svg-kicker">2. LRU (LEAST RECENTLY USED)</text>

                  <rect x="324" y="58" width="232" height="36" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="440" y="81" text-anchor="middle" class="svg-mono-xs">Top: A, C (Seconds ago ✓)</text>
                  <rect x="324" y="102" width="232" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="440" y="124" text-anchor="middle" class="svg-mono-xs">Mid: D (Minutes ago)</text>
                  <rect x="324" y="144" width="232" height="42" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="440" y="162" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Bottom: B (Days), E (Months)</text>
                  <text x="440" y="179" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Kicked Out First ✕</text>
                  <text x="440" y="214" text-anchor="middle" class="svg-sub">Keeps recently touched items</text>

                  <!-- LFU -->
                  <rect x="594" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="730" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">3. LFU (LEAST FREQUENTLY USED)</text>

                  <rect x="614" y="60" width="232" height="34" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="730" y="82" text-anchor="middle" class="svg-mono-xs">A → Accessed 5 times ✓</text>
                  <rect x="614" y="102" width="232" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="730" y="124" text-anchor="middle" class="svg-mono-xs">B → Accessed 3 times</text>
                  <rect x="614" y="144" width="232" height="36" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="730" y="167" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">C → 1 time (Evicted for D ✕)</text>
                  <text x="730" y="212" text-anchor="middle" class="svg-sub">Evicts lowest access counter</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 37: CACHE WRITE POLICIES — WRITE-THROUGH VS. WRITE-BACK
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-37-cache-write-policies",
      number: "37",
      shortLabel: "Write Policies",
      title: "Cache Write Policies — Write-Through vs. Write-Back",
      summary: "Updating user age (17 → 18): Write-Through (synchronous Cache + DB update, strong consistency, slower writes) vs. Write-Back (fast Cache-only write + async background DB sync).",
      subtopicLabels: ["37.1 Write-Through Policy", "37.2 Write-Back Policy", "37.3 Comparison Table"],
      diagramCount: 1,
      sections: [
        {
          num: "37.1",
          title: "Write-Through Policy (Synchronous Cache + DB Update)",
          content: `
            <p>When a user updates data (e.g., changing their age from <code>17</code> to <code>18</code> or updating their phone number), <strong>where should we write the update first — Cache, Database, or both?</strong></p>
            <ol class="notes-ordered-list" style="margin-top: 0.75rem;">
              <li>The user sends an update request (e.g., update age from <code>17 → 18</code>) to the <code>App Server</code>.</li>
              <li>The update goes to the <strong>Cache</strong> first (<code>Age = 18</code>).</li>
              <li>The <strong>Cache immediately writes/reflects that update into the Database at the exact same time</strong> (<code>Age = 18</code> in DB).</li>
              <li>Only after <strong>both</strong> the Cache and the Database are updated is the operation complete.</li>
            </ol>
            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Pro</div>
                <div class="sub-box__title">Strong Data Consistency</div>
                <div class="sub-box__body">Both the Cache and the Database are <strong>always 100% in sync</strong> at all times.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Con</div>
                <div class="sub-box__title">Slow Writes</div>
                <div class="sub-box__body">Because every write operation must wait for a network call and disk write to the <strong>Database</strong> before completing, write operations are <strong>slow</strong>.</div>
              </div>
            </div>
          `
        },
        {
          num: "37.2",
          title: "Write-Back Policy (Fast Cache Write + Asynchronous Background DB Update)",
          content: `
            <ol class="notes-ordered-list">
              <li>The user sends an update request (e.g., update age from <code>17 → 18</code>) to the <code>App Server</code>.</li>
              <li>The <code>App Server</code> updates the data <strong>ONLY in the Cache</strong> (<code>Age = 18</code> in Cache, while the Database still has <code>Age = 17</code>).</li>
              <li>The <strong>Cache immediately sends a success response</strong> back to the <code>App Server</code>, which tells the user: <em>"Your age/phone number has been updated!"</em></li>
              <li><strong>Later, asynchronously in the background</strong>, a background process writes the updated change (<code>Age = 18</code>) from the Cache into the <strong>Database</strong>.</li>
            </ol>
            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Pro</div>
                <div class="sub-box__title">Very Fast Writes</div>
                <div class="sub-box__body">Because the user doesn't wait for a Database network call — only the in-memory Cache is updated upfront — write operations are <strong>extremely fast</strong>.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Con</div>
                <div class="sub-box__title">Temporary Data Inconsistency</div>
                <div class="sub-box__body">During the time window between the immediate Cache update (<code>Age = 18</code>) and the delayed background Database write (where DB still holds <code>Age = 17</code>), the Cache and Database are temporarily <strong>inconsistent</strong>.</div>
              </div>
            </div>
          `
        },
        {
          num: "37.3",
          title: "Comparison: Write-Through vs. Write-Back",
          content: `
            <div class="comparison-table-wrapper">
              <table class="spec-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Write-Through Policy</th>
                    <th>Write-Back Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Where Update Happens</strong></td>
                    <td>Updated in <strong>Cache and Database at the same time</strong> (Synchronously)</td>
                    <td>Updated in <strong>Cache first</strong>; written to <strong>Database later in background</strong> (Asynchronously)</td>
                  </tr>
                  <tr>
                    <td><strong>Write Speed</strong></td>
                    <td><strong>Slow Writes</strong> (Waits for DB network call)</td>
                    <td><strong>Fast Writes</strong> (No immediate DB network call)</td>
                  </tr>
                  <tr>
                    <td><strong>Data Consistency</strong></td>
                    <td><strong>Always Consistent</strong> (Cache &amp; DB always in sync)</td>
                    <td><strong>Temporarily Inconsistent</strong> (Until background sync finishes)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 37.1 · Write-Through (Synchronous) vs. Write-Back (Asynchronous Background Sync)</span>
                <span class="diagram-frame-tag">UPDATE AGE: 17 → 18</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Comparison diagram of Write-Through updating Cache and Database synchronously to Age 18 versus Write-Back updating Cache immediately to Age 18 and syncing Database asynchronously later">
                  <defs>
                    <marker id="arrow-37" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- TOP: Write-Through -->
                  <rect x="16" y="16" width="848" height="96" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="36" y="40" class="svg-kicker">1. WRITE-THROUGH (SYNCHRONOUS · ALWAYS CONSISTENT · SLOWER WRITES)</text>

                  <rect x="36" y="54" width="144" height="44" rx="9" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="108" y="81" text-anchor="middle" class="svg-node">App Server</text>

                  <line x1="180" y1="76" x2="260" y2="76" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-37)"/>
                  <text x="220" y="66" text-anchor="middle" class="svg-mono-xs">1. Age=18</text>

                  <rect x="268" y="54" width="184" height="44" rx="9" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="360" y="81" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Cache: Age = 18 ✓</text>

                  <line x1="452" y1="76" x2="548" y2="76" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-37)"/>
                  <text x="500" y="66" text-anchor="middle" class="svg-mono-xs">2. Sync Now</text>

                  <rect x="556" y="54" width="184" height="44" rx="9" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="648" y="81" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">DB: Age = 18 ✓</text>

                  <text x="802" y="81" text-anchor="middle" class="svg-mono-xs">3. Done</text>

                  <!-- BOTTOM: Write-Back -->
                  <rect x="16" y="130" width="848" height="98" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="36" y="154" class="svg-kicker" style="fill: var(--warning);">2. WRITE-BACK (ASYNCHRONOUS · FAST WRITES · TEMPORARY INCONSISTENCY)</text>

                  <rect x="36" y="168" width="144" height="44" rx="9" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="108" y="195" text-anchor="middle" class="svg-node">App Server</text>

                  <line x1="180" y1="190" x2="260" y2="190" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-37)"/>
                  <text x="220" y="180" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">1. Fast OK</text>

                  <rect x="268" y="168" width="184" height="44" rx="9" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="360" y="195" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Cache: Age = 18 ✓</text>

                  <line x1="452" y1="190" x2="548" y2="190" stroke="var(--warning)" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrow-37)"/>
                  <text x="500" y="180" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Later (Async)</text>

                  <rect x="556" y="168" width="286" height="44" rx="9" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="699" y="195" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">DB: Age = 17 → Updates to 18 Later</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 38: WHAT ARE DISTRIBUTED SYSTEMS?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-38-distributed-systems",
      number: "38",
      shortLabel: "Distributed Systems",
      title: "What are Distributed Systems?",
      summary: "Multiple independent computers (Computer 1, 2, 3) working together to solve a large problem while appearing as ONE single computer to the end user — powered by Horizontal Scaling, Load Balancers, and Networking Protocols.",
      subtopicLabels: ["38.1 Core Definition & Single-System Illusion", "38.2 Scaling, LB & Protocols Fit In"],
      diagramCount: 1,
      sections: [
        {
          num: "38.1",
          title: "Core Definition & Concept",
          content: `
            <ul class="notes-bullet-list">
              <li>All the foundational concepts covered earlier — <strong>Load Balancers</strong>, <strong>Horizontal Scaling</strong>, <strong>Regions</strong>, and <strong>Availability Zones</strong> — are core building blocks of <strong>Distributed Systems</strong>.</li>
              <li><strong>What happens in a Distributed System?</strong>
                <ul class="notes-sub-list">
                  <li>We have <strong>multiple independent computers/servers (nodes)</strong> (<code>Computer 1</code>, <code>Computer 2</code>, <code>Computer 3</code>) where the exact same application (e.g., an e-commerce app) is hosted, providing the exact same features, functionalities, and qualities.</li>
                  <li><strong>Single-System Illusion:</strong> Even though multiple independent servers are working behind the scenes to fulfill requests, to the <strong>end user</strong>, it appears as if <strong>only ONE single computer</strong> is handling their task.</li>
                </ul>
              </li>
            </ul>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">FORMAL DEFINITION</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary); font-size: 1.05rem;">
                A <strong>Distributed System</strong> is a system of <strong>multiple independent computers working together to solve a large problem</strong>, while <strong>appearing as a single computer to the user</strong>.
              </p>
            </div>
          `
        },
        {
          num: "38.2",
          title: "How Load Balancers, Horizontal Scaling & Networking Protocols Fit In",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Why Multiple Nodes?</div>
                <div class="sub-box__title">Horizontal Scaling</div>
                <div class="sub-box__body">Every single server has a hardware capacity limit. At <strong>1 Million concurrent requests</strong>, one server gets exhausted. Through Horizontal Scaling, we add multiple identical servers (<code>Server 1</code>, <code>Server 2</code>, <code>Server 3</code>) hosting the app.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">How Traffic Splits?</div>
                <div class="sub-box__title">Load Balancer (No SPOF)</div>
                <div class="sub-box__body">Sits in front of the servers and distributes the 1 Million requests so no server gets overloaded. If <code>Server 1</code> crashes, the Load Balancer seamlessly routes new user requests to <code>Server 2</code> or <code>Server 3</code>.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">How Nodes Talk?</div>
                <div class="sub-box__title">Networking Protocols</div>
                <div class="sub-box__body">All independent nodes/servers communicate and coordinate with each other over the network using <strong>Networking Protocols</strong>.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 38.1 · The Distributed System Single-Computer Illusion</span>
                <span class="diagram-frame-tag">MULTIPLE INDEPENDENT NODES → ONE UNIFIED INTERFACE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 235" class="arch-svg" role="img" aria-label="Distributed System diagram showing End User seeing one single system while Load Balancer distributes 1 Million requests across Computer 1, Computer 2, and Computer 3 communicating via Networking Protocols">
                  <defs>
                    <marker id="arrow-38" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- End User -->
                  <rect x="20" y="72" width="154" height="90" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="97" y="106" text-anchor="middle" class="svg-title">End User</text>
                  <text x="97" y="128" text-anchor="middle" class="svg-sub">Thinks it's just</text>
                  <text x="97" y="146" text-anchor="middle" class="svg-mono-xs">1 Single System</text>

                  <line x1="174" y1="117" x2="236" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-38)"/>
                  <text x="205" y="105" text-anchor="middle" class="svg-mono-xs">1M Reqs</text>

                  <!-- Distributed Cluster Illusion Boundary -->
                  <rect x="244" y="18" width="616" height="198" rx="18" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="6 4"/>
                  <text x="552" y="42" text-anchor="middle" class="svg-kicker">BEHIND THE SCENES · DISTRIBUTED SYSTEM (APPEARS AS ONE COMPUTER)</text>

                  <!-- Load Balancer -->
                  <rect x="266" y="74" width="158" height="86" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="345" y="108" text-anchor="middle" class="svg-title">Load Balancer</text>
                  <text x="345" y="130" text-anchor="middle" class="svg-sub">Splits load &amp;</text>
                  <text x="345" y="146" text-anchor="middle" class="svg-mono-xs">Eliminates SPOF</text>

                  <!-- Arrows to 3 Nodes -->
                  <path d="M 424 100 L 490 74" fill="none" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-38)"/>
                  <line x1="424" y1="117" x2="490" y2="117" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-38)"/>
                  <path d="M 424 134 L 490 162" fill="none" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-38)"/>

                  <!-- Independent Nodes -->
                  <rect x="498" y="54" width="160" height="40" rx="9" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="578" y="79" text-anchor="middle" class="svg-node">Server 1 (Node 1)</text>

                  <rect x="498" y="100" width="160" height="40" rx="9" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="578" y="125" text-anchor="middle" class="svg-node">Server 2 (Node 2)</text>

                  <rect x="498" y="146" width="160" height="40" rx="9" fill="var(--bg-surface)" stroke="var(--success)"/>
                  <text x="578" y="171" text-anchor="middle" class="svg-node">Server 3 (Node 3)</text>

                  <!-- Coordination Bracket -->
                  <rect x="682" y="68" width="158" height="104" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="761" y="102" text-anchor="middle" class="svg-kicker">COORDINATION</text>
                  <text x="761" y="126" text-anchor="middle" class="svg-node">Networking</text>
                  <text x="761" y="144" text-anchor="middle" class="svg-node">Protocols</text>
                  <text x="761" y="164" text-anchor="middle" class="svg-sub">Nodes talk together</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 39: WHY DO WE NEED DISTRIBUTED SYSTEMS? (3 MAJOR ADVANTAGES)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-39-why-distributed",
      number: "39",
      shortLabel: "3 Advantages",
      title: "Why Do We Need Distributed Systems? (3 Major Advantages)",
      summary: "Scalability across multiple nodes, Fault Tolerance eliminating Single Point of Failure, and Low Latency via geographic distribution (India vs. USA google.com example).",
      subtopicLabels: ["39.1 Scalability & Fault Tolerance", "39.2 Low Latency (India vs USA)"],
      diagramCount: 1,
      sections: [
        {
          num: "39.1",
          title: "Scalability & Fault Tolerance",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Advantage 01</div>
                <div class="sub-box__title">1. Scalability</div>
                <div class="sub-box__body">When the number of users in an application grows rapidly, a single server cannot fulfill all requests on its own. Distributed systems allow us to easily add more servers and distribute user requests across multiple server instances to handle massive scale seamlessly.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Advantage 02</div>
                <div class="sub-box__title">2. Fault Tolerance (No SPOF)</div>
                <div class="sub-box__body">In a single-server system, if that one server crashes, no user requests can be fulfilled (Single Point of Failure). In a distributed system with multiple servers, if one server crashes, user traffic is automatically routed to another healthy server, keeping the app online.</div>
              </div>
            </div>
          `
        },
        {
          num: "39.2",
          title: "3. Low Latency (Geographic Distribution Example)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>The High-Latency Problem:</strong> Suppose <code>google.com</code>'s server is hosted only in <strong>India</strong>. If a user in <strong>India</strong> accesses <code>google.com</code>, the request is served quickly. However, if a user in the <strong>USA</strong> tries to access <code>google.com</code>, their request has to travel across the globe to the server in India and back. This long travel distance increases <strong>latency</strong>, and even a half-second (<code>0.5s</code>) delay creates a bad user experience.</li>
              <li><strong>The Distributed Solution:</strong> If huge traffic is coming from the USA, we host an additional application server directly in the <strong>USA</strong>. Now, requests from USA users are routed to the local <strong>USA Server</strong> instead of traveling to India, drastically reducing latency.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 39.1 · Geographic Distribution for Low Latency (India &amp; USA Servers)</span>
                <span class="diagram-frame-tag">SERVE USERS FROM NEAREST LOCATION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Geographic low latency diagram comparing slow 0.5s round trip from USA to India against fast local USA Server and local India Server">
                  <defs>
                    <marker id="arrow-39" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Top: Problem -->
                  <rect x="16" y="16" width="848" height="82" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="36" y="40" class="svg-kicker" style="fill: var(--warning);">BEFORE (SINGLE SERVER IN INDIA ONLY)</text>
                  <rect x="36" y="50" width="160" height="36" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="116" y="73" text-anchor="middle" class="svg-node">USA User</text>
                  <line x1="196" y1="68" x2="646" y2="68" stroke="var(--danger)" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrow-39)"/>
                  <text x="421" y="60" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Long Cross-Globe Round Trip (~0.5s+ High Latency ✕)</text>
                  <rect x="654" y="50" width="186" height="36" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="747" y="73" text-anchor="middle" class="svg-node">India Server</text>

                  <!-- Bottom: Distributed Solution -->
                  <rect x="16" y="114" width="848" height="90" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="36" y="138" class="svg-kicker" style="fill: var(--success);">AFTER (DISTRIBUTED REGIONAL SERVERS → LOW LATENCY ✓)</text>

                  <rect x="36" y="150" width="136" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="104" y="175" text-anchor="middle" class="svg-node">USA User</text>
                  <line x1="172" y1="170" x2="232" y2="170" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-39)"/>
                  <rect x="240" y="150" width="174" height="40" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="327" y="175" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Local USA Server ✓</text>

                  <rect x="466" y="150" width="136" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="534" y="175" text-anchor="middle" class="svg-node">India User</text>
                  <line x1="602" y1="170" x2="662" y2="170" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-39)"/>
                  <rect x="670" y="150" width="174" height="40" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="757" y="175" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Local India Server ✓</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 40: KEY CHALLENGES — AGREEMENT (CONSENSUS) & CAP INTRO
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-40-consensus-cap-intro",
      number: "40",
      shortLabel: "Consensus & CAP",
      title: "Key Challenges & Concepts in Distributed Systems (Agreement & CAP Theorem)",
      summary: "Millisecond Agreement (Consensus) when User A on Server 2 and User B on Server 3 simultaneously buy the last 1 iPhone in stock, plus introduction to the CAP Theorem.",
      subtopicLabels: ["40.1 Agreement (Consensus)", "40.2 CAP Theorem Intro"],
      diagramCount: 1,
      sections: [
        {
          num: "40.1",
          title: "Agreement (Consensus Across Multiple Servers in Milliseconds)",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Real-World E-Commerce Scenario (Buying the Last iPhone in Stock):</strong>
                <ul class="notes-sub-list">
                  <li>Suppose an e-commerce platform runs on 3 distributed servers (<code>Server 1</code>, <code>Server 2</code>, <code>Server 3</code>) connected to a Database.</li>
                  <li>In the Database, there is <strong>only 1 iPhone left in stock</strong>.</li>
                  <li>At the exact same instant: <strong>User A</strong> hits <strong><code>Server 2</code></strong> to buy the iPhone, and <strong>User B</strong> hits <strong><code>Server 3</code></strong> to buy the exact same iPhone.</li>
                </ul>
              </li>
              <li><strong>The Challenge:</strong> <code>Server 2</code> wants to fulfill User A's order, and <code>Server 3</code> wants to fulfill User B's order — but there is only 1 iPhone available. In a distributed system, all servers must <strong>trust each other and reach an Agreement (Consensus) within milliseconds</strong> (just like real-time auction bidding in milliseconds) to decide which single user (<code>User A</code> or <code>User B</code>) actually gets the iPhone before committing the decision.</li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 40.1 · Distributed Agreement (Consensus for the Last 1 iPhone in Stock)</span>
                <span class="diagram-frame-tag">MILLISECOND CONSENSUS ACROSS NODES</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Consensus diagram showing User A hitting Server 2 and User B hitting Server 3 at the exact same instant for 1 iPhone left in stock, requiring millisecond agreement before DB commit">
                  <defs>
                    <marker id="arrow-40" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- User A & User B -->
                  <rect x="20" y="34" width="150" height="62" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="95" y="62" text-anchor="middle" class="svg-node">User A</text>
                  <text x="95" y="82" text-anchor="middle" class="svg-mono-xs">Buy iPhone (t=0ms)</text>

                  <rect x="20" y="132" width="150" height="62" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="95" y="160" text-anchor="middle" class="svg-node">User B</text>
                  <text x="95" y="180" text-anchor="middle" class="svg-mono-xs">Buy iPhone (t=0ms)</text>

                  <line x1="170" y1="65" x2="240" y2="65" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-40)"/>
                  <line x1="170" y1="163" x2="240" y2="163" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-40)"/>

                  <!-- Server 2 & Server 3 Reaching Consensus -->
                  <rect x="248" y="34" width="166" height="62" rx="12" fill="var(--accent-light)" stroke="var(--accent)"/>
                  <text x="331" y="62" text-anchor="middle" class="svg-node">Server 2</text>
                  <text x="331" y="82" text-anchor="middle" class="svg-sub">Wants User A to win</text>

                  <rect x="248" y="132" width="166" height="62" rx="12" fill="var(--accent-light)" stroke="var(--accent)"/>
                  <text x="331" y="160" text-anchor="middle" class="svg-node">Server 3</text>
                  <text x="331" y="180" text-anchor="middle" class="svg-sub">Wants User B to win</text>

                  <!-- Consensus Link -->
                  <line x1="331" y1="96" x2="331" y2="132" stroke="var(--warning)" stroke-width="2.2" stroke-dasharray="4 3"/>

                  <!-- Consensus Engine -->
                  <path d="M 414 65 L 492 106" fill="none" stroke="var(--warning)" stroke-width="1.8" marker-end="url(#arrow-40)"/>
                  <path d="M 414 163 L 492 126" fill="none" stroke="var(--warning)" stroke-width="1.8" marker-end="url(#arrow-40)"/>

                  <rect x="500" y="64" width="166" height="100" rx="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.6"/>
                  <text x="583" y="96" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">AGREEMENT</text>
                  <text x="583" y="122" text-anchor="middle" class="svg-title">Consensus</text>
                  <text x="583" y="146" text-anchor="middle" class="svg-sub">Decides 1 winner in ms</text>

                  <line x1="666" y1="114" x2="712" y2="114" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-40)"/>

                  <!-- DB Stock = 1 -->
                  <rect x="720" y="64" width="142" height="100" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="791" y="96" text-anchor="middle" class="svg-node">Database</text>
                  <text x="791" y="122" text-anchor="middle" class="svg-mono-xs">Stock = 1 iPhone</text>
                  <text x="791" y="146" text-anchor="middle" class="svg-sub">1 Confirmed ✓</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "40.2",
          title: "Introduction to the CAP Theorem",
          content: `
            <p>A fundamental principle of Distributed Systems is the <strong>CAP Theorem</strong>, where:</p>
            <div class="sub-card-grid-3" style="margin-top: 0.85rem;">
              <div class="sub-box">
                <div class="sub-box__tag">C</div>
                <div class="sub-box__title">Consistency</div>
                <div class="sub-box__body">Every node holds the exact same latest data.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">A</div>
                <div class="sub-box__title">Availability</div>
                <div class="sub-box__body">Every node responds with a valid non-error response.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">P</div>
                <div class="sub-box__title">Partition Tolerance</div>
                <div class="sub-box__body">System stays operational despite network breaks between nodes.</div>
              </div>
            </div>
            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">CORE RULE OF CAP THEOREM</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                In any distributed system, <strong>you cannot achieve all three (Consistency, Availability, and Partition Tolerance) at the exact same time</strong>.
              </p>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 41: WHAT IS THE CAP THEOREM & ITS 3 CORE PROPERTIES?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-41-cap-properties",
      number: "41",
      shortLabel: "CAP Properties",
      title: "What is the CAP Theorem & Its 3 Core Properties?",
      summary: "Deep dive into Consistency (C), Availability (A), and Partition Tolerance (P) using App Server A and Database Nodes B & C (updating variable a from 10 to 5).",
      subtopicLabels: ["41.1 Distributed Master-Slave Context", "41.2 C, A, and P with Example"],
      diagramCount: 1,
      sections: [
        {
          num: "41.1",
          title: "Distributed Systems & Master-Slave Context",
          content: `
            <ul class="notes-bullet-list">
              <li>In a Distributed System, we use <strong>multiple Application Servers</strong> (so if one App Server fails or traffic spikes, requests are routed to other App Servers).</li>
              <li>Similarly, to scale the Database, we use a <strong>Master-Slave Architecture</strong> (1 Master Node for <strong>Write operations</strong> and multiple Slave Nodes for <strong>Read operations</strong>), where data written to the Master is replicated across all Slave Nodes so every DB node holds the same data.</li>
              <li><strong>What is CAP?</strong> <code>C</code> (Consistency), <code>A</code> (Availability), and <code>P</code> (Partition Tolerance) are the three desirable properties of any Distributed System.</li>
            </ul>
          `
        },
        {
          num: "41.2",
          title: "Understanding Each Property with an Example (App A, DB Nodes B & C)",
          content: `
            <p>Suppose we have an Application Server <strong><code>A</code></strong> and two Database Nodes <strong><code>B</code></strong> and <strong><code>C</code></strong>, where initially both DB nodes hold a variable <code>a = 10</code>:</p>

            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Property 1 · C</div>
                <div class="sub-box__title">Consistency (C)</div>
                <div class="sub-box__body">
                  Every database node holds the exact same, most up-to-date data at the same time.<br><br>
                  <strong>Example:</strong> A user updates <code>a</code> from <code>10 → 5</code> on App <code>A</code>. App <code>A</code> writes <code>a = 5</code> to Node <code>B</code>, and Node <code>B</code> immediately <strong>replicates</strong> <code>a = 5</code> to Node <code>C</code>. Reads from either <code>B</code> or <code>C</code> return <code>a = 5</code>.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Property 2 · A</div>
                <div class="sub-box__title">Availability (A)</div>
                <div class="sub-box__body">
                  <strong>All database nodes (<code>B</code> and <code>C</code>) must remain up and at least respond</strong> to every incoming request with a <strong>non-error response</strong> (whether success or failure, the node itself must respond and not be unreachable).
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Property 3 · P</div>
                <div class="sub-box__title">Partition Tolerance (P)</div>
                <div class="sub-box__body">
                  <strong>Partition:</strong> A communication/network breakage between DB nodes <code>B</code> and <code>C</code> preventing replication.<br><br>
                  <strong>Partition Tolerance:</strong> Even if communication breaks between <code>B</code> and <code>C</code> (so <code>B</code> cannot replicate <code>a = 5</code> to <code>C</code>), <strong>the overall system must NOT fail or go down</strong>.
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 41.1 · The 3 CAP Properties Illustrated (App A, DB Nodes B &amp; C)</span>
                <span class="diagram-frame-tag">CONSISTENCY · AVAILABILITY · PARTITION TOLERANCE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Three-panel diagram illustrating Consistency B=5 and C=5, Availability both B and C responding, and Partition Tolerance network cut between B and C">
                  <defs>
                    <marker id="arrow-41" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Panel 1: Consistency -->
                  <rect x="14" y="16" width="272" height="198" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.4"/>
                  <text x="150" y="42" text-anchor="middle" class="svg-kicker">1. CONSISTENCY (C)</text>
                  <rect x="108" y="56" width="84" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="150" y="78" text-anchor="middle" class="svg-mono-xs">App A</text>
                  <rect x="34" y="118" width="94" height="52" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="81" y="140" text-anchor="middle" class="svg-node">Node B</text>
                  <text x="81" y="158" text-anchor="middle" class="svg-mono-xs">a = 5 ✓</text>
                  <line x1="128" y1="144" x2="164" y2="144" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-41)"/>
                  <rect x="172" y="118" width="94" height="52" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="219" y="140" text-anchor="middle" class="svg-node">Node C</text>
                  <text x="219" y="158" text-anchor="middle" class="svg-mono-xs">a = 5 ✓</text>
                  <text x="150" y="196" text-anchor="middle" class="svg-sub">Both return same latest value</text>

                  <!-- Panel 2: Availability -->
                  <rect x="304" y="16" width="272" height="198" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.4"/>
                  <text x="440" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">2. AVAILABILITY (A)</text>
                  <rect x="398" y="56" width="84" height="34" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="440" y="78" text-anchor="middle" class="svg-mono-xs">App A</text>
                  <line x1="422" y1="90" x2="378" y2="114" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-41)"/>
                  <line x1="458" y1="90" x2="502" y2="114" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-41)"/>
                  <rect x="324" y="118" width="96" height="52" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="372" y="140" text-anchor="middle" class="svg-node">Node B</text>
                  <text x="372" y="158" text-anchor="middle" class="svg-mono-xs">Responds ✓</text>
                  <rect x="460" y="118" width="96" height="52" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="508" y="140" text-anchor="middle" class="svg-node">Node C</text>
                  <text x="508" y="158" text-anchor="middle" class="svg-mono-xs">Responds ✓</text>
                  <text x="440" y="196" text-anchor="middle" class="svg-sub">All nodes up &amp; non-error reply</text>

                  <!-- Panel 3: Partition Tolerance -->
                  <rect x="594" y="16" width="272" height="198" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="730" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">3. PARTITION TOLERANCE (P)</text>
                  <rect x="614" y="106" width="92" height="56" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="660" y="132" text-anchor="middle" class="svg-node">Node B</text>
                  <text x="660" y="150" text-anchor="middle" class="svg-mono-xs">a = 5</text>

                  <line x1="706" y1="134" x2="754" y2="134" stroke="var(--danger)" stroke-width="2" stroke-dasharray="4 3"/>
                  <text x="730" y="124" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">✕ Cut</text>

                  <rect x="754" y="106" width="92" height="56" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="800" y="132" text-anchor="middle" class="svg-node">Node C</text>
                  <text x="800" y="150" text-anchor="middle" class="svg-mono-xs">a = 10</text>
                  <text x="730" y="194" text-anchor="middle" class="svg-sub">Network breaks → System stays up</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 42: WHY C+A+P TOGETHER IS IMPOSSIBLE & THE 3 COMBINATIONS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-42-cap-combinations",
      number: "42",
      shortLabel: "AP vs CP vs CA",
      title: "Why We Cannot Have All Three (C, A, and P) Together & The 3 Combinations",
      summary: "Proof of why C+A+P fails during a network partition (B has a=5 while C has a=10), breakdown of AP vs. CP vs. CA, and why real distributed systems NEVER drop Partition Tolerance (P).",
      subtopicLabels: ["42.1 Proof C+A+P is Impossible", "42.2 AP, CP, and CA Explained"],
      diagramCount: 1,
      sections: [
        {
          num: "42.1",
          title: "Proof: Why C + A + P Together is Impossible",
          content: `
            <p><strong>CAP Theorem states:</strong> In a distributed system, <strong>you CANNOT achieve all three properties (<code>Consistency</code>, <code>Availability</code>, and <code>Partition Tolerance</code>) at the exact same time</strong>. You can only pick <strong>2 out of 3</strong> (<code>AP</code>, <code>CP</code>, or <code>CA</code>).</p>

            <ol class="notes-ordered-list" style="margin-top: 0.75rem;">
              <li>Suppose App Server <code>A</code> is connected to DB Nodes <code>B</code> and <code>C</code> (initially <code>a = 10</code> on both). Normally, <code>A</code> updates <code>B</code> to <code>a = 5</code>, <code>B</code> replicates to <code>C</code> (<code>a = 5</code>), and both respond (Consistency + Availability).</li>
              <li>Now introduce <strong>Partition Tolerance (<code>P</code>)</strong>: a <strong>network/communication breakage</strong> happens between Node <code>B</code> and Node <code>C</code>, and we keep both nodes up.</li>
              <li>A user updates <code>a = 5</code> on Node <code>B</code>. Because of the network partition, Node <code>B</code> <strong>cannot replicate</strong> this update to Node <code>C</code> (<code>B</code> has <code>a = 5</code>, while <code>C</code> still has <code>a = 10</code>).</li>
              <li><strong>The Dilemma:</strong>
                <ul class="notes-sub-list">
                  <li>If we keep both <code>B</code> and <code>C</code> up and responding (<strong>Availability <code>A</code></strong>), Node <code>C</code> returns stale data (<code>a = 10</code>), so <strong>we lose Consistency (<code>C</code>)</strong> → <strong><code>AP</code> System</strong>.</li>
                  <li>If we refuse to serve stale data to preserve <strong>Consistency (<code>C</code>)</strong>, we must <strong>shut down / disable Node <code>C</code></strong>, so not all nodes respond and <strong>we lose Availability (<code>A</code>)</strong> → <strong><code>CP</code> System</strong>.</li>
                </ul>
              </li>
            </ol>
          `
        },
        {
          num: "42.2",
          title: "Breakdown of the 3 Pairs (AP, CP, and CA)",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Pair 1 · Drop Consistency</div>
                <div class="sub-box__title">AP (Availability + Partition Tolerance)</div>
                <div class="sub-box__body">
                  Network breaks between <code>B</code> and <code>C</code>. <code>B</code> holds <code>a = 5</code> while <code>C</code> still has <code>a = 10</code> (inconsistent), <strong>but BOTH nodes stay up and respond</strong> to queries from App <code>A</code>.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">Pair 2 · Drop Availability</div>
                <div class="sub-box__title">CP (Consistency + Partition Tolerance)</div>
                <div class="sub-box__body">
                  Used in <strong>Ticket Booking</strong> where stale data is unacceptable. During a partition (<code>B=5</code>, <code>C=10</code>), <strong>we disable Node <code>C</code></strong> and keep only Node <code>B</code> active so every read returns consistent <code>a = 5</code>.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Pair 3 · Single DB Only</div>
                <div class="sub-box__title">CA (No Partition Tolerance)</div>
                <div class="sub-box__body">
                  Shutting down the entire system on a network glitch is unacceptable. Achieving <code>CA</code> is only possible with <strong>1 Single Database Node</strong> (NOT distributed) where no network partition can occur.
                </div>
              </div>
            </div>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">GOLDEN RULE IN REAL DISTRIBUTED SYSTEMS</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                <strong>In the real world, you NEVER trade off on Partition Tolerance (<code>P</code>).</strong> Network failures between nodes are inevitable. Therefore, in any real-world distributed system, your real choice is strictly between <strong><code>AP</code></strong> and <strong><code>CP</code></strong>.
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 42.1 · Network Partition Dilemma: AP vs. CP vs. Why CA Isn't Distributed</span>
                <span class="diagram-frame-tag">REAL DISTRIBUTED CHOICE: AP OR CP</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="CAP Theorem tradeoff diagram showing AP keeping B=5 and C=10 up, CP disabling C to serve only consistent B=5, and CA existing only on a single non-distributed database">
                  <!-- AP -->
                  <rect x="14" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="150" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">AP · DROP CONSISTENCY</text>
                  <rect x="34" y="64" width="98" height="66" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="83" y="92" text-anchor="middle" class="svg-node">Node B ✓</text>
                  <text x="83" y="114" text-anchor="middle" class="svg-mono-xs">a = 5</text>

                  <text x="150" y="102" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">✕</text>

                  <rect x="168" y="64" width="98" height="66" rx="10" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="217" y="92" text-anchor="middle" class="svg-node">Node C ✓</text>
                  <text x="217" y="114" text-anchor="middle" class="svg-mono-xs">a = 10 (Stale)</text>

                  <text x="150" y="164" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Both B &amp; C stay UP</text>
                  <text x="150" y="186" text-anchor="middle" class="svg-sub">High availability, temporary</text>
                  <text x="150" y="204" text-anchor="middle" class="svg-sub">inconsistency allowed</text>

                  <!-- CP -->
                  <rect x="304" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="440" y="42" text-anchor="middle" class="svg-kicker">CP · DROP AVAILABILITY</text>
                  <rect x="324" y="64" width="98" height="66" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="373" y="92" text-anchor="middle" class="svg-node">Node B ✓</text>
                  <text x="373" y="114" text-anchor="middle" class="svg-mono-xs">a = 5 (Live)</text>

                  <text x="440" y="102" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">✕</text>

                  <rect x="458" y="64" width="98" height="66" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-dasharray="4 3" opacity="0.72"/>
                  <text x="507" y="92" text-anchor="middle" class="svg-node">Node C ✕</text>
                  <text x="507" y="114" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Shut Down</text>

                  <text x="440" y="164" text-anchor="middle" class="svg-mono-xs">100% Consistent (a = 5)</text>
                  <text x="440" y="186" text-anchor="middle" class="svg-sub">Ideal for Ticket Booking</text>
                  <text x="440" y="204" text-anchor="middle" class="svg-sub">&amp; Financial Transactions</text>

                  <!-- CA -->
                  <rect x="594" y="16" width="272" height="218" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.4"/>
                  <text x="730" y="42" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">CA · NON-DISTRIBUTED ONLY</text>
                  <rect x="646" y="64" width="168" height="66" rx="12" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="730" y="92" text-anchor="middle" class="svg-title">1 Single DB</text>
                  <text x="730" y="114" text-anchor="middle" class="svg-mono-xs">No Partition Possible</text>

                  <text x="730" y="164" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">Never trade off P in</text>
                  <text x="730" y="186" text-anchor="middle" class="svg-sub">real distributed systems!</text>
                  <text x="730" y="204" text-anchor="middle" class="svg-sub">Real choice = AP or CP</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 43: REAL-WORLD APPLICATION OF CAP THEOREM (BOOKMYSHOW)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-43-cap-bookmyshow",
      number: "43",
      shortLabel: "CAP: BookMyShow",
      title: "Real-World Application of CAP Theorem (BookMyShow Example)",
      summary: "Choosing CP vs. AP microservice-by-microservice in BookMyShow: Booking Service strictly uses CP (no double seat bookings), while Search & Recommendation Services use AP for high availability.",
      subtopicLabels: ["43.1 BookMyShow Microservices", "43.2 Choosing CP vs AP Per Service"],
      diagramCount: 1,
      sections: [
        {
          num: "43.1",
          title: "BookMyShow Architecture (3 Core Microservices)",
          content: `
            <p>In a real-world microservice architecture, you don't apply just <code>CP</code> or <code>AP</code> to the entire company — you choose <strong><code>CP</code> or <code>AP</code> service-by-service</strong> based on what each microservice does.</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Service 01</div>
                <div class="sub-box__title">Booking Service</div>
                <div class="sub-box__body">Manages concurrent movie ticket bookings and seat reservations.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Service 02</div>
                <div class="sub-box__title">Search Service</div>
                <div class="sub-box__body">Allows users to search for different movies and theaters.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Service 03</div>
                <div class="sub-box__title">Recommendation Service</div>
                <div class="sub-box__body">Recommends movies on the user's home page.</div>
              </div>
            </div>
          `
        },
        {
          num: "43.2",
          title: "Which CAP Property to Choose for Each Service?",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">Booking Service → Choose CP</div>
                <div class="sub-box__title">Consistency + Partition Tolerance</div>
                <div class="sub-box__body">When two users try to book the exact same movie seat concurrently, <strong>you cannot drop Consistency</strong> (otherwise two people will book the same seat). Therefore, the Booking Service strictly prioritizes <strong>Consistency (<code>CP</code>)</strong>.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Search &amp; Recommendation → Choose AP</div>
                <div class="sub-box__title">Availability + Partition Tolerance</div>
                <div class="sub-box__body">These are the initial <strong>user-facing services</strong> users interact with first when opening the app. If a new movie listing or recommendation is slightly delayed by a few seconds on one node, it doesn't break anything — what matters most is that the home page and search bar always load fast and never fail (<strong><code>AP</code></strong>).</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 43.1 · BookMyShow Microservices CAP Strategy (Per-Service Selection)</span>
                <span class="diagram-frame-tag">CP FOR SEAT BOOKINGS · AP FOR SEARCH &amp; HOME FEED</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 225" class="arch-svg" role="img" aria-label="BookMyShow CAP strategy diagram showing Booking Service configured as CP for strict seat consistency while Search and Recommendation Services are configured as AP for maximum availability">
                  <defs>
                    <marker id="arrow-43" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- User -> API Gateway -->
                  <rect x="20" y="72" width="168" height="82" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="104" y="106" text-anchor="middle" class="svg-title">BookMyShow</text>
                  <text x="104" y="128" text-anchor="middle" class="svg-sub">App / API Gateway</text>

                  <path d="M 188 94 L 278 52" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-43)"/>
                  <line x1="188" y1="113" x2="278" y2="113" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-43)"/>
                  <path d="M 188 132 L 278 174" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-43)"/>

                  <!-- Booking Service (CP) -->
                  <rect x="286" y="18" width="574" height="58" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="310" y="52" class="svg-title">Booking Service</text>
                  <rect x="498" y="31" width="76" height="32" rx="16" fill="var(--bg-surface)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="536" y="52" text-anchor="middle" class="svg-mono-md" style="fill: var(--accent);">CP</text>
                  <text x="592" y="52" class="svg-sub">Zero double seat bookings (Strict Consistency)</text>

                  <!-- Search Service (AP) -->
                  <rect x="286" y="84" width="574" height="58" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="310" y="118" class="svg-title">Search Service</text>
                  <rect x="498" y="97" width="76" height="32" rx="16" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="536" y="118" text-anchor="middle" class="svg-mono-md" style="fill: var(--success);">AP</text>
                  <text x="592" y="118" class="svg-sub">Movie/Theater search always fast &amp; available</text>

                  <!-- Recommendation Service (AP) -->
                  <rect x="286" y="150" width="574" height="58" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="310" y="184" class="svg-title">Recommendation Service</text>
                  <rect x="498" y="163" width="76" height="32" rx="16" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="536" y="184" text-anchor="middle" class="svg-mono-md" style="fill: var(--success);">AP</text>
                  <text x="592" y="184" class="svg-sub">Home feed always loads (slight delay is fine)</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 44: WHAT IS RATE LIMITING & WHY DO WE NEED IT?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-44-rate-limiting",
      number: "44",
      shortLabel: "Rate Limiting",
      title: "What is Rate Limiting & Why Do We Need It?",
      summary: "Stopping spam requests (refreshing YouTube 50 times in a row) that exploit server resources and delay genuine users, enforcing IP/user limits (3 req/min), and HTTP 429 Too Many Requests.",
      subtopicLabels: ["44.1 Spam Request Problem", "44.2 Rate Limiter & HTTP 429"],
      diagramCount: 1,
      sections: [
        {
          num: "44.1",
          title: "The Spam Request Problem (Resource Exploitation)",
          content: `
            <p>In any application, multiple users (Clients) send requests to a <strong>Server</strong>, and the Server sends back responses (forming a Request-Response cycle). Sometimes, a malicious or aggressive user (say, <strong>User A</strong>) continuously sends <strong>spam requests</strong> (<code>Req 1</code>, <code>Req 2</code>, <code>Req 3</code>, ...) — for example, going to a YouTube channel and hitting the browser refresh button 50 times in a row.</p>

            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Impact 01</div>
                <div class="sub-box__title">Resource Exploitation</div>
                <div class="sub-box__body">User A exploits and hogs the server's resources (CPU, memory, threads).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Impact 02</div>
                <div class="sub-box__title">Server Slows Down</div>
                <div class="sub-box__body">Flooded with spam requests from User A, the server gets overwhelmed and performance degrades.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
                <div class="sub-box__tag">Impact 03</div>
                <div class="sub-box__title">Genuine Users Suffer</div>
                <div class="sub-box__body">Genuine users' requests cannot be fulfilled on time and get delayed/forced to wait while User A hogs resources.</div>
              </div>
            </div>
          `
        },
        {
          num: "44.2",
          title: "How a Rate Limiter Solves This Problem (+ HTTP 429)",
          content: `
            <ul class="notes-bullet-list">
              <li>To protect the server from spam requests, we configure and place a <strong>Rate Limiter</strong> in front of the Server.</li>
              <li><strong>What a Rate Limiter Does:</strong> It restricts the <strong>rate</strong> at which a user (or a specific <strong>IP Address</strong>) can access the server within a given time window.</li>
              <li><strong>Example Rule:</strong> <em>"A single user (single IP address) can send a maximum of <strong>3 requests per 1 minute</strong> to the server."</em>
                <ul class="notes-sub-list">
                  <li>When <strong>User A</strong> sends <code>Req 1</code>, <code>Req 2</code>, and <code>Req 3</code> within 1 minute → The Rate Limiter allows them through to the Server.</li>
                  <li>The moment <strong>User A</strong> sends their <strong>4th request (<code>Req 4</code>)</strong> within that same minute → The Rate Limiter <strong>rejects the request</strong> (or tells User A to wait until the 1-minute time interval finishes before processing more requests).</li>
                  <li>By blocking or delaying User A's spam requests, the server's resources stay free to serve genuine users smoothly.</li>
                </ul>
              </li>
            </ul>

            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">HTTP STATUS CODE FOR RATE LIMITING</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary); font-size: 1.03rem;">
                When a user exceeds the allowed limit (e.g., more than 3 requests per minute), the server/rate limiter returns a <strong><code>429</code> Error Response</strong> — meaning <strong>"Too Many Requests"</strong>.
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 44.1 · Rate Limiter Protecting the Server (Rule: Max 3 Req / Min)</span>
                <span class="diagram-frame-tag">HTTP 429 TOO MANY REQUESTS</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Rate Limiter diagram allowing User A requests 1 to 3, blocking Request 4 with HTTP 429 Too Many Requests, while keeping Server healthy for Genuine User B">
                  <defs>
                    <marker id="arrow-44" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Spammer User A -->
                  <rect x="20" y="24" width="182" height="86" rx="12" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="111" y="54" text-anchor="middle" class="svg-title">User A (Spam)</text>
                  <text x="111" y="76" text-anchor="middle" class="svg-mono-xs">Req 1, 2, 3 ✓</text>
                  <text x="111" y="96" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Req 4, 5, ..., 50 ✕</text>

                  <!-- Genuine User B -->
                  <rect x="20" y="134" width="182" height="86" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="111" y="166" text-anchor="middle" class="svg-title">User B (Genuine)</text>
                  <text x="111" y="190" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Normal Request ✓</text>

                  <line x1="202" y1="67" x2="310" y2="104" stroke="var(--warning)" stroke-width="1.8" marker-end="url(#arrow-44)"/>
                  <line x1="202" y1="177" x2="310" y2="142" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arrow-44)"/>

                  <!-- Rate Limiter -->
                  <rect x="318" y="48" width="224" height="148" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="430" y="78" text-anchor="middle" class="svg-kicker">EDGE PROTECTION</text>
                  <text x="430" y="106" text-anchor="middle" class="svg-title">Rate Limiter</text>
                  <text x="430" y="130" text-anchor="middle" class="svg-mono-xs">Rule: Max 3 Req / 1 Min</text>
                  <rect x="340" y="148" width="180" height="32" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="430" y="169" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Req 4+ → HTTP 429 ✕</text>

                  <!-- Forward to Server -->
                  <line x1="542" y1="122" x2="650" y2="122" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-44)"/>
                  <text x="596" y="110" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Allowed Only</text>

                  <!-- Protected Server -->
                  <rect x="658" y="66" width="200" height="112" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="758" y="104" text-anchor="middle" class="svg-title">Backend Server</text>
                  <text x="758" y="128" text-anchor="middle" class="svg-sub">Resources Free &amp; Fast ✓</text>
                  <text x="758" y="150" text-anchor="middle" class="svg-mono-xs">Serves User B Smoothly</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 45: RATE LIMITING STRATEGY 1 — TOKEN BUCKET ALGORITHM
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-45-token-bucket",
      number: "45",
      shortLabel: "Token Bucket",
      title: "Rate Limiting Strategy 1 — Token Bucket Algorithm",
      summary: "Bucket capacity (5 tokens), fixed-rate Refiller Service (3 tokens/sec), Scenarios A–C (multi-user, single-user burst, idle overflow cap), and burst starvation latency drawback.",
      subtopicLabels: ["45.1 Core Components", "45.2 Working Scenarios (A–C)", "45.3 Major Drawbacks"],
      diagramCount: 1,
      sections: [
        {
          num: "45.1",
          title: "Core Components of Token Bucket Algorithm",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Component 01</div>
                <div class="sub-box__title">The Bucket</div>
                <div class="sub-box__body">A container that holds <strong>Tokens</strong> up to a fixed maximum capacity (e.g., <strong>Bucket Capacity = 5 Tokens</strong>).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Component 02</div>
                <div class="sub-box__title">The Refiller Service</div>
                <div class="sub-box__body">A background service that continuously refills the bucket with tokens at a <strong>fixed rate</strong> (e.g., <strong>Refill Rate = 3 Tokens per second</strong>).</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">Component 03</div>
                <div class="sub-box__title">The Rule</div>
                <div class="sub-box__body">A user <strong>must grab 1 Token</strong> from the bucket to reach the Server. If a Token exists → processed. If the bucket is empty (<code>0 Tokens</code>) → rejected/blocked.</div>
              </div>
            </div>
          `
        },
        {
          num: "45.2",
          title: "Step-by-Step Working Scenarios",
          content: `
            <ul class="notes-bullet-list">
              <li><strong>Scenario A: Multiple Users Arriving in 1 Second</strong>
                <ul class="notes-sub-list">
                  <li>At <strong>Second 1</strong>, the Refiller puts <strong>3 Tokens</strong> into the bucket.</li>
                  <li>Suppose 4 users (<code>User A</code>, <code>User B</code>, <code>User C</code>, <code>User D</code>) arrive in that first second: <code>User A</code> takes <strong>Token 1</strong> (processed), <code>User B</code> takes <strong>Token 2</strong> (processed), <code>User C</code> takes <strong>Token 3</strong> (processed).</li>
                  <li><code>User D</code> arrives and checks the bucket → <strong>The bucket is now completely empty (0 Tokens left)!</strong> Therefore, <code>User D</code>'s request is rejected.</li>
                  <li>At <strong>Second 2</strong>, the Refiller again adds <strong>3 new Tokens</strong> for the next batch.</li>
                </ul>
              </li>
              <li><strong>Scenario B: Single User Consuming All Tokens</strong>
                <ul class="notes-sub-list">
                  <li>If <strong><code>User A</code></strong> alone sends <strong>3 requests</strong> in a single second, <code>User A</code> takes all 3 tokens (<code>Token 1</code>, <code>Token 2</code>, <code>Token 3</code>). The bucket becomes empty, and any next user arriving in that second is blocked.</li>
                </ul>
              </li>
              <li><strong>Scenario C: Idle Bucket &amp; Maximum Capacity Cap (Bucket Overflow Prevention)</strong>
                <ul class="notes-sub-list">
                  <li>Suppose <strong>Bucket Capacity = 5 Tokens</strong> and <strong>Refill Rate = 3 Tokens/sec</strong>, and no user arrives for 2 seconds:</li>
                  <li><strong>Second 1:</strong> Refiller adds <strong>3 Tokens</strong> (Bucket = <code>3 Tokens</code>).</li>
                  <li><strong>Second 2:</strong> Refiller tries to add <strong>3 more Tokens</strong> (<code>3 + 3 = 6 Tokens</code>). Because <strong>Bucket Capacity is capped at 5 Tokens</strong>, only <strong>2 more Tokens</strong> fit (bringing it to max <code>5 Tokens</code>), and the extra token is discarded.</li>
                </ul>
              </li>
            </ul>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 45.1 · Token Bucket Algorithm (Capacity = 5, Refill Rate = 3/sec)</span>
                <span class="diagram-frame-tag">1 REQUEST = 1 TOKEN · EMPTY BUCKET = 429 REJECT</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Token Bucket diagram showing Refiller adding 3 tokens per second to a bucket of max capacity 5, allowing User A B C with tokens to reach Server while rejecting User D when empty">
                  <defs>
                    <marker id="arrow-45" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Refiller Service -->
                  <rect x="20" y="64" width="184" height="114" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.6"/>
                  <text x="112" y="94" text-anchor="middle" class="svg-kicker">BACKGROUND SERVICE</text>
                  <text x="112" y="120" text-anchor="middle" class="svg-title">Refiller</text>
                  <text x="112" y="144" text-anchor="middle" class="svg-mono-xs">+3 Tokens / sec</text>
                  <text x="112" y="164" text-anchor="middle" class="svg-sub">Excess discarded &gt; 5</text>

                  <line x1="204" y1="121" x2="270" y2="121" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-45)"/>

                  <!-- Bucket Container -->
                  <rect x="278" y="34" width="214" height="176" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="385" y="60" text-anchor="middle" class="svg-kicker">TOKEN BUCKET (MAX 5)</text>

                  <!-- 3 Active Tokens -->
                  <circle cx="332" cy="108" r="22" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="332" y="113" text-anchor="middle" class="svg-mono-xs">T1</text>

                  <circle cx="385" cy="108" r="22" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="385" y="113" text-anchor="middle" class="svg-mono-xs">T2</text>

                  <circle cx="438" cy="108" r="22" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="438" y="113" text-anchor="middle" class="svg-mono-xs">T3</text>

                  <!-- 2 Empty Capacity Slots -->
                  <circle cx="358" cy="160" r="20" fill="none" stroke="var(--border-strong)" stroke-dasharray="4 3"/>
                  <circle cx="412" cy="160" r="20" fill="none" stroke="var(--border-strong)" stroke-dasharray="4 3"/>
                  <text x="385" y="198" text-anchor="middle" class="svg-sub">Second 1: 3 Tokens Available</text>

                  <!-- Users -> Server / Rejected -->
                  <path d="M 492 94 L 580 62" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arrow-45)"/>
                  <rect x="588" y="24" width="272" height="82" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="724" y="54" text-anchor="middle" class="svg-node">Users A, B, C grab T1, T2, T3 ✓</text>
                  <text x="724" y="76" text-anchor="middle" class="svg-sub">Forwarded to Backend Server</text>
                  <text x="724" y="96" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Processed Normally</text>

                  <path d="M 492 152 L 580 180" fill="none" stroke="var(--danger)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow-45)"/>
                  <rect x="588" y="138" width="272" height="82" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.5"/>
                  <text x="724" y="168" text-anchor="middle" class="svg-node" style="fill: var(--danger);">User D arrives → 0 Tokens Left ✕</text>
                  <text x="724" y="190" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Rejected (HTTP 429)</text>
                  <text x="724" y="208" text-anchor="middle" class="svg-sub">Must wait for next Refiller tick</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "45.3",
          title: "Major Drawbacks of Token Bucket Algorithm",
          content: `
            <div class="callout-highlight-box" style="border-left-color: var(--warning);">
              <div class="callout-highlight-tag" style="color: var(--warning);">DRAWBACK · BURST STARVATION &amp; HIGH WAIT TIME</div>
              <ul class="notes-bullet-list" style="margin-top: 0.55rem;">
                <li>Suppose the bucket is empty, and the Refiller is set to refill <strong>20 Tokens every 5 seconds</strong>.</li>
                <li>At <strong>Second 1</strong>, the Refiller adds <strong>20 Tokens</strong> into the bucket. Immediately in that very first second, a single aggressive user (<strong><code>User A</code></strong>) fires <strong>20 requests at once</strong>, consuming <strong>all 20 Tokens</strong> and emptying the bucket in the 1st second itself.</li>
                <li>Now, when a genuine user (<strong><code>User B</code></strong>) arrives right after, the bucket is empty and the Refiller won't run again until the 5-second interval finishes.</li>
                <li><strong>Impact:</strong> <code>User B</code> is forced to <strong>wait for 4 full seconds</strong>, causing a massive delay in response time and <strong>increasing system latency</strong>.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 46: RATE LIMITING STRATEGY 2 — LEAKY BUCKET ALGORITHM
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-46-leaky-bucket",
      number: "46",
      shortLabel: "Leaky Bucket",
      title: "Rate Limiting Strategy 2 — Leaky Bucket Algorithm",
      summary: "Water bucket with a small bottom hole smoothing 1,000 req/s bursts into a constant 100 req/s drip, plus step-by-step numerical queue overflow example (900 → 1,800 → ~800 dropped).",
      subtopicLabels: ["46.1 Core Concept & Analogy", "46.2 Queue Delay & Overflow Math"],
      diagramCount: 1,
      sections: [
        {
          num: "46.1",
          title: "Core Concept & Analogy",
          content: `
            <p>Imagine a physical water bucket with a <strong>small hole at the bottom</strong>. No matter how fast you pour water into the top of the bucket, water drips (leaks) out of the bottom hole at a <strong>steady, constant rate</strong>.</p>
            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li><strong>Incoming Requests (Top of Bucket):</strong> Requests from different users (<code>User A</code>, <code>User B</code>, <code>User C</code>, etc.) are poured into the <strong>Bucket</strong> at a high/variable rate (e.g., <strong>1,000 requests per second</strong>).</li>
              <li><strong>Leaking Requests (Hole at Bottom of Bucket):</strong> The hole at the bottom leaks requests out to the <strong>Server</strong> at a strict, constant rate matching the <strong>Server's exact processing capacity</strong> (e.g., <strong>2 requests per second</strong> or <strong>100 requests per second</strong>).</li>
              <li><strong>Key Benefit:</strong> Even if a sudden burst of 1,000 requests/second hits the bucket, the Server only receives requests at its comfortable capacity (e.g., 2 requests/second), preventing the server from ever getting overwhelmed or exploited.</li>
            </ul>
          `
        },
        {
          num: "46.2",
          title: "Major Drawback of Leaky Bucket Algorithm (Queue Delay & Bucket Overflow)",
          content: `
            <p>Because the rate of requests entering the bucket is much higher than the rate of requests leaking out to the server, the bucket quickly fills up, causing heavy waiting delays:</p>
            <div class="sub-card-grid-3" style="margin-top: 0.85rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Second 1</div>
                <div class="sub-box__title">900 Remaining</div>
                <div class="sub-box__body"><code>1,000</code> requests enter, Server processes <code>100</code>.<br><code>1,000 − 100 = 900 requests</code> left in bucket.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Second 2</div>
                <div class="sub-box__title">1,800 Remaining</div>
                <div class="sub-box__body">Another <code>1,000</code> enter (<code>900 + 1,000 = 1,900</code>), Server processes <code>100</code>.<br><code>1,900 − 100 = 1,800</code> (only <code>200</code> slots left!).</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
                <div class="sub-box__tag">Second 3 · Overflow!</div>
                <div class="sub-box__title">~800 Dropped / Delayed</div>
                <div class="sub-box__body">Next <code>1,000</code> requests hit the <code>2,000</code> max capacity limit → roughly <strong>800 requests get dropped or suffer massive waiting delays</strong>.</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 46.1 · Leaky Bucket Constant Leak &amp; Queue Overflow (Cap: 2,000)</span>
                <span class="diagram-frame-tag">1,000 REQ/S IN → 100 REQ/S CONSTANT OUT</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Leaky Bucket diagram showing 1000 req/s burst pouring into a 2000 capacity bucket, filling from 900 to 1800 to overflow of 800 requests, while leaking steadily at 100 req/s to the server">
                  <defs>
                    <marker id="arrow-46" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Variable Burst Input -->
                  <rect x="20" y="64" width="184" height="114" rx="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="112" y="96" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">VARIABLE BURST IN</text>
                  <text x="112" y="122" text-anchor="middle" class="svg-title">1,000 req / sec</text>
                  <text x="112" y="148" text-anchor="middle" class="svg-sub">Users A, B, C, ...</text>

                  <line x1="204" y1="121" x2="278" y2="121" stroke="var(--warning)" stroke-width="2.4" marker-end="url(#arrow-46)"/>

                  <!-- Leaky Bucket Queue -->
                  <rect x="286" y="24" width="276" height="196" rx="16" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="424" y="50" text-anchor="middle" class="svg-kicker">LEAKY BUCKET (MAX CAP: 2,000)</text>

                  <rect x="308" y="64" width="232" height="36" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="424" y="87" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Sec 3: Cap 2,000 → ~800 Dropped ✕</text>

                  <rect x="308" y="110" width="232" height="36" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="424" y="133" text-anchor="middle" class="svg-mono-xs">Sec 2: 1,800 Queued (200 slots left)</text>

                  <rect x="308" y="156" width="232" height="36" rx="8" fill="var(--accent-light)" stroke="var(--accent)"/>
                  <text x="424" y="179" text-anchor="middle" class="svg-mono-xs">Sec 1: 900 Queued (1000 − 100)</text>

                  <!-- Steady Constant Leak Out -->
                  <line x1="562" y1="121" x2="652" y2="121" stroke="var(--success)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow-46)"/>
                  <text x="607" y="108" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Steady Leak</text>
                  <text x="607" y="142" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">100 req/s</text>

                  <!-- Protected Server -->
                  <rect x="660" y="64" width="200" height="114" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="760" y="100" text-anchor="middle" class="svg-title">Backend Server</text>
                  <text x="760" y="126" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Constant 100 req/s ✓</text>
                  <text x="760" y="150" text-anchor="middle" class="svg-sub">Never overwhelmed</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 47: RATE LIMITING STRATEGY 3 — FIXED WINDOW COUNTER
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-47-fixed-window",
      number: "47",
      shortLabel: "Fixed Window",
      title: "Rate Limiting Strategy 3 — Fixed Window Counter Algorithm",
      summary: "Fixed 1-second windows with Counter reset to 0 (Threshold: 3 req/sec), walkthrough across Windows 1–3, and the Boundary Traffic Spike drawback (0.5s to 1.5s processing 4 requests).",
      subtopicLabels: ["47.1 Core Setup", "47.2 Windows 1–3 Walkthrough", "47.3 Boundary Spike Problem"],
      diagramCount: 1,
      sections: [
        {
          num: "47.1",
          title: "Core Concept & Setup",
          content: `
            <ul class="notes-bullet-list">
              <li>In the <strong>Fixed Window Counter Algorithm</strong>, we divide time into <strong>fixed-size windows</strong> and maintain a <strong>Counter</strong> to count the number of requests arriving in each window.</li>
              <li><strong>How the Window Size is Decided:</strong>
                <ol class="notes-ordered-list" style="margin-top: 0.4rem;">
                  <li><strong>Decide a Threshold Value:</strong> e.g., <strong>Threshold = 3 requests per second</strong> (maximum 3 requests in 1 second).</li>
                  <li><strong>Define Fixed Window Size:</strong> Since threshold is <code>3 requests/second</code>, we define a <strong>Fixed Window Size of 1 second</strong> (time can be seconds, minutes, etc.).</li>
                </ol>
              </li>
              <li><strong>Graph &amp; Counter Representation:</strong> Y-Axis = Number of Requests, X-Axis = Time in 1-second intervals (<code>1st s</code>, <code>2nd s</code>, <code>3rd s</code>, <code>4th s</code>). For each window, Counter starts at <code>0</code>:
                <ul class="notes-sub-list">
                  <li>If <code>Counter &lt; Threshold (3)</code> → Increment counter and <strong>process the request</strong>.</li>
                  <li>If <code>Counter == Threshold (3)</code> → <strong>Reject any further requests</strong> in that window.</li>
                  <li>When the 1-second window ends and the next begins → <strong>Reset Counter back to <code>0</code></strong>.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          num: "47.2",
          title: "Step-by-Step Working Scenarios Across Windows",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">Window 1 (0s – 1s)</div>
                <div class="sub-box__title">Counter: 0 → 1 → 3</div>
                <div class="sub-box__body">
                  • 1st req arrives → <code>Counter: 0 → 1</code> (Processed ✓)<br>
                  • 2 more reqs arrive → <code>Counter: 1 → 3</code> (Both Processed ✓)
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Window 2 (1s – 2s)</div>
                <div class="sub-box__title">Reset 0 → 2 → 3 (2 Rejected)</div>
                <div class="sub-box__body">
                  • Resets to <code>0</code>. First 2 reqs arrive → <code>Counter = 2</code> (Processed ✓)<br>
                  • Next 3 reqs arrive → Only <strong>1 processed</strong> (<code>Counter = 3</code>), <strong>remaining 2 rejected ✕</strong>.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Window 3 (2s – 3s)</div>
                <div class="sub-box__title">Reset 0 → 3 (1 Rejected)</div>
                <div class="sub-box__body">
                  • Resets to <code>0</code>. 3 reqs arrive together → all 3 processed (<code>Counter = 3</code> ✓)<br>
                  • 1 more req arrives → <strong>Rejected ✕</strong> (limit reached).
                </div>
              </div>
            </div>
          `
        },
        {
          num: "47.3",
          title: "Major Drawback: Boundary Traffic Spike Problem",
          content: `
            <ul class="notes-bullet-list">
              <li>Fixed windows cover <code>0 to 1s</code>, <code>1 to 2s</code>, <code>2 to 3s</code>, etc. However, look at the 1-second interval spanning the boundary from <strong><code>0.5s to 1.5s</code></strong> (<code>1.5 − 0.5 = 1 second</code>):</li>
              <li>Between <code>0.5s and 1.0s</code> (latter half of Window 1): Server processed <strong>2 requests</strong>.</li>
              <li>Between <code>1.0s and 1.5s</code> (first half of Window 2): Server processed <strong>2 requests</strong>.</li>
            </ul>
            <div class="formula-box">Total Processed in 1 Second (0.5s → 1.5s) = 2 + 2 = 4 Requests (&gt; Threshold of 3!)</div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 47.1 · Fixed Window Counter &amp; The 0.5s–1.5s Boundary Spike Violation</span>
                <span class="diagram-frame-tag">THRESHOLD = 3 REQ/S · BOUNDARY ALLOWS 4 REQ/S</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 240" class="arch-svg" role="img" aria-label="Fixed Window Counter timeline showing Window 1 0 to 1s with 3 requests, Window 2 1 to 2s with 3 accepted and 2 rejected, and the 0.5s to 1.5s boundary spike totaling 4 requests">
                  <!-- Window 1 -->
                  <rect x="24" y="56" width="268" height="120" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="158" y="42" text-anchor="middle" class="svg-kicker">WINDOW 1 (0s – 1s) · COUNT = 3/3</text>
                  <circle cx="84" cy="116" r="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="84" y="121" text-anchor="middle" class="svg-mono-xs">R1</text>
                  <circle cx="206" cy="116" r="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="206" y="121" text-anchor="middle" class="svg-mono-xs">R2</text>
                  <circle cx="256" cy="116" r="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="256" y="121" text-anchor="middle" class="svg-mono-xs">R3</text>

                  <!-- Window 2 -->
                  <rect x="306" y="56" width="268" height="120" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="440" y="42" text-anchor="middle" class="svg-kicker">WINDOW 2 (1s – 2s) · RESET → 3/3</text>
                  <circle cx="344" cy="116" r="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="344" y="121" text-anchor="middle" class="svg-mono-xs">R4</text>
                  <circle cx="394" cy="116" r="14" fill="var(--warning-bg)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="394" y="121" text-anchor="middle" class="svg-mono-xs">R5</text>
                  <circle cx="468" cy="116" r="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="468" y="121" text-anchor="middle" class="svg-mono-xs">R6</text>
                  <circle cx="534" cy="116" r="14" fill="var(--danger-bg)" stroke="var(--danger)" stroke-dasharray="3 2"/>
                  <text x="534" y="121" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">✕2</text>

                  <!-- Window 3 -->
                  <rect x="588" y="56" width="268" height="120" rx="12" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="722" y="42" text-anchor="middle" class="svg-kicker">WINDOW 3 (2s – 3s) · RESET → 3/3</text>
                  <circle cx="654" cy="116" r="14" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="654" y="121" text-anchor="middle" class="svg-mono-xs">3✓</text>
                  <circle cx="766" cy="116" r="14" fill="var(--danger-bg)" stroke="var(--danger)" stroke-dasharray="3 2"/>
                  <text x="766" y="121" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">✕1</text>

                  <!-- Highlighted Boundary Violation Box (0.5s to 1.5s) -->
                  <rect x="170" y="76" width="260" height="132" rx="12" fill="none" stroke="var(--danger)" stroke-width="2" stroke-dasharray="6 4"/>
                  <rect x="184" y="184" width="232" height="28" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="300" y="203" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">0.5s – 1.5s = 4 Reqs (&gt; Limit 3!)</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 48: RATE LIMITING STRATEGY 4 — SLIDING WINDOW LOG
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-48-sliding-window-log",
      number: "48",
      shortLabel: "Sliding Log",
      title: "Rate Limiting Strategy 4 — Sliding Window Log Algorithm",
      summary: "Eliminating boundary spikes using a Request Log of exact timestamps (3 req / 5 sec window), evicting expired timestamps as the window slides (0–5s → 1–6s → 2–7s → 3–8s).",
      subtopicLabels: ["48.1 Core Concept & Request Log", "48.2 Sliding Scenarios (A–D)"],
      diagramCount: 1,
      sections: [
        {
          num: "48.1",
          title: "Core Concept & How It Solves the Fixed Window Problem",
          content: `
            <ul class="notes-bullet-list">
              <li>The boundary spike problem of the Fixed Window Counter Algorithm is solved by the <strong>Sliding Window Log Algorithm</strong>.</li>
              <li><strong>Threshold &amp; Window Setup:</strong> Suppose we set a threshold of <strong>3 requests per 5 seconds</strong> (<strong>Window Size = 5 seconds</strong>).</li>
              <li><strong>Maintaining a Request Log:</strong> Instead of a simple counter, we maintain a <strong>Request Log</strong> recording the <strong>exact timestamp</strong> of each incoming request. Whenever a new request arrives later, we <strong>slide our 5-second window forward</strong>, and any old timestamp falling <strong>outside the sliding 5-second window</strong> is treated as an <strong>expired log</strong> and <strong>removed from the Request Log</strong>.</li>
            </ul>
          `
        },
        {
          num: "48.2",
          title: "Step-by-Step Working Scenarios (Sliding the 5-Second Window)",
          content: `
            <div class="workflow-stack">
              <div class="workflow-step">
                <div class="step-circle">A</div>
                <div>
                  <div class="workflow-step__title">Scenario A: Initial Window (<code>0s to 5s</code>)</div>
                  <div class="workflow-step__desc">
                    • 1st Request (<code>0s–1s</code>, logged as <code>1s</code>) → Processed. Log: <code>[1s]</code><br>
                    • 2nd Request (<code>2s–3s</code>, logged as <code>3s</code>) → Processed. Log: <code>[1s, 3s]</code><br>
                    • 3rd Request (at <code>4.5s</code>) → Processed. Log: <code>[1s, 3s, 4.5s]</code> (All 3 slots full).
                  </div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">B</div>
                <div>
                  <div class="workflow-step__title">Scenario B: Window Slides to <code>1s to 6s</code> (New Req at <code>6s</code>)</div>
                  <div class="workflow-step__desc">Window slides forward to <code>1s–6s</code>. Timestamp <code>1s</code> falls outside → <strong>expired &amp; removed</strong>, leaving <code>[3s, 4.5s]</code> (only 2 left). The new request at <code>6s</code> is <strong>accepted</strong> → Log: <code>[3s, 4.5s, 6s]</code>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">C</div>
                <div>
                  <div class="workflow-step__title">Scenario C: Window Slides to <code>2s to 7s</code> (2 New Reqs in <code>6s–7s</code>)</div>
                  <div class="workflow-step__desc">Inside <code>2s–7s</code>, all 3 timestamps (<code>3s</code>, <code>4.5s</code>, <code>6s</code>) are still active (3/3 full). Therefore, <strong>both new requests in <code>6s–7s</code> are REJECTED ✕</strong>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">D</div>
                <div>
                  <div class="workflow-step__title">Scenario D: Window Slides to <code>3s to 8s</code> (1 New Req in <code>7s–8s</code>)</div>
                  <div class="workflow-step__desc">Timestamp <code>3s</code> now falls outside <code>3s–8s</code> → <strong>expired &amp; removed</strong>, leaving only 2 active entries <code>[4.5s, 6s]</code>. Since <code>2 &lt; 3</code>, the new request in <code>7s–8s</code> is <strong>processed ✓</strong> and added to the Request Log.</div>
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 48.1 · Sliding Window Log Progression (Max 3 Requests / 5 Seconds)</span>
                <span class="diagram-frame-tag">EXACT TIMESTAMPS · EXPIRED LOG EVICTION</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Sliding Window Log progression across four 5-second windows: 0-5s full, 1-6s evicting 1s and accepting 6s, 2-7s rejecting 2 requests, and 3-8s evicting 3s and accepting new request">
                  <!-- Row A -->
                  <rect x="18" y="14" width="844" height="48" rx="10" fill="var(--bg-subsection)" stroke="var(--border)"/>
                  <text x="36" y="43" class="svg-mono-xs">A. [0s → 5s]</text>
                  <rect x="172" y="23" width="250" height="30" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="297" y="43" text-anchor="middle" class="svg-mono-xs">Log: [ 1s, 3s, 4.5s ] (3/3 Full)</text>
                  <text x="444" y="43" class="svg-sub">All 3 initial requests processed ✓</text>

                  <!-- Row B -->
                  <rect x="18" y="72" width="844" height="48" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)"/>
                  <text x="36" y="101" class="svg-mono-xs">B. [1s → 6s]</text>
                  <rect x="172" y="81" width="94" height="30" rx="8" fill="var(--danger-bg)" stroke="var(--danger)" stroke-dasharray="3 2"/>
                  <text x="219" y="101" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">1s Exp ✕</text>
                  <rect x="278" y="81" width="246" height="30" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="401" y="101" text-anchor="middle" class="svg-mono-xs">Log: [ 3s, 4.5s, 6s ] ✓</text>
                  <text x="542" y="101" class="svg-sub">1s removed → 6s accepted</text>

                  <!-- Row C -->
                  <rect x="18" y="130" width="844" height="48" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)"/>
                  <text x="36" y="159" class="svg-mono-xs">C. [2s → 7s]</text>
                  <rect x="278" y="139" width="246" height="30" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="401" y="159" text-anchor="middle" class="svg-mono-xs">Log: [ 3s, 4.5s, 6s ] (Full)</text>
                  <rect x="540" y="139" width="302" height="30" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="691" y="159" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">2 New Reqs (6s–7s) REJECTED ✕</text>

                  <!-- Row D -->
                  <rect x="18" y="188" width="844" height="48" rx="10" fill="var(--bg-subsection)" stroke="var(--success)"/>
                  <text x="36" y="217" class="svg-mono-xs">D. [3s → 8s]</text>
                  <rect x="278" y="197" width="94" height="30" rx="8" fill="var(--danger-bg)" stroke="var(--danger)" stroke-dasharray="3 2"/>
                  <text x="325" y="217" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">3s Exp ✕</text>
                  <rect x="384" y="197" width="256" height="30" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="512" y="217" text-anchor="middle" class="svg-mono-xs">Log: [ 4.5s, 6s, 7.5s ] ✓</text>
                  <text x="658" y="217" class="svg-sub">3s removed → New req accepted</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 49: RATE LIMITING STRATEGY 5 — SLIDING WINDOW COUNTER
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-49-sliding-window-counter",
      number: "49",
      shortLabel: "Sliding Counter",
      title: "Rate Limiting Strategy 5 — Sliding Window Counter Algorithm",
      summary: "Hybrid approach combining Fixed Window Counter + Sliding Window Log: weighted overlap taking X% from Current Window + (100−X)% from Previous Window (10% & 20% examples).",
      subtopicLabels: ["49.1 Hybrid Core Concept", "49.2 Numerical Examples (10% & 20%)"],
      diagramCount: 1,
      sections: [
        {
          num: "49.1",
          title: "Core Concept (Hybrid Approach)",
          content: `
            <p>The <strong>Sliding Window Counter Algorithm</strong> is a <strong>Hybrid Approach</strong> that combines both:</p>
            <ol class="notes-ordered-list" style="margin-top: 0.5rem;">
              <li><strong>Fixed Window Counter Algorithm</strong></li>
              <li><strong>Sliding Window Log Algorithm</strong></li>
            </ol>
            <ul class="notes-bullet-list" style="margin-top: 0.75rem;">
              <li>Just like Fixed Window Counter, time is divided into fixed-size windows (e.g., <code>1-second</code> windows with a threshold of <strong>3 requests per second</strong>), where each full window represents <strong>100%</strong>.</li>
              <li>When a request arrives partway into the <strong>Current Window</strong> (after <strong><code>X%</code></strong> has elapsed), we dynamically form a sliding window by combining:</li>
            </ul>
            <div class="formula-box">Sliding Window (100%) = X% of Current Window + (100 − X)% of Previous Window</div>
          `
        },
        {
          num: "49.2",
          title: "Step-by-Step Numerical Examples (Partial Window Overlap)",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Example 1 · At 3.1s (10% Elapsed)</div>
                <div class="sub-box__title">10% Current + 90% Previous</div>
                <div class="sub-box__body">
                  • <strong>Setup:</strong> Threshold = <code>3 req/sec</code>, Current window = <code>3s–4s</code>.<br>
                  • A new request arrives at <strong><code>3.1s</code></strong> (<code>10%</code> into Current Window → 1 req).<br>
                  • Remaining <code>90%</code> of Previous Window (<code>2s–3s</code>) had <code>0</code> requests.<br>
                  • <strong>Total:</strong> <code>1 + 0 = 1 request</code> ≤ 3 → <strong>Approved ✓</strong>.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Example 2 · At 20% Elapsed</div>
                <div class="sub-box__title">20% Current + 80% Previous</div>
                <div class="sub-box__body">
                  • <strong>Setup:</strong> Threshold = <code>3 req/sec</code>. Trailing <code>80%</code> of Previous Window already had <strong>2 approved requests</strong>.<br>
                  • Now <strong>2 new requests</strong> arrive in the <code>20%</code> of Current Window:<br>
                  &nbsp;&nbsp;1. <strong>1st New Req:</strong> <code>2 + 1 = 3</code> → <strong>Approved ✓</strong> (hits limit of 3).<br>
                  &nbsp;&nbsp;2. <strong>2nd New Req:</strong> Exceeds max limit of 3 → <strong>Rejected ✕</strong>.
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 49.1 · Sliding Window Counter Hybrid Overlap (80% Previous + 20% Current)</span>
                <span class="diagram-frame-tag">THRESHOLD = 3 REQ/SEC · DYNAMIC WEIGHTED WINDOW</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 220" class="arch-svg" role="img" aria-label="Sliding Window Counter diagram showing 80 percent of Previous Window holding 2 requests combined with 20 percent of Current Window approving 1st new request and rejecting 2nd">
                  <!-- Previous Window -->
                  <rect x="24" y="48" width="404" height="106" rx="12" fill="var(--bg-subsection)" stroke="var(--border-strong)" stroke-width="1.4"/>
                  <text x="226" y="34" text-anchor="middle" class="svg-kicker">PREVIOUS WINDOW (100%)</text>

                  <!-- Ignored 20% of Prev -->
                  <rect x="34" y="60" width="76" height="82" rx="8" fill="var(--bg-surface)" stroke="var(--border)" opacity="0.5"/>
                  <text x="72" y="105" text-anchor="middle" class="svg-sub">20% Old</text>

                  <!-- Active 80% of Prev -->
                  <rect x="118" y="60" width="300" height="82" rx="8" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="268" y="92" text-anchor="middle" class="svg-node">Trailing 80% of Previous Window</text>
                  <text x="268" y="116" text-anchor="middle" class="svg-mono-xs">Already has 2 Approved Requests</text>

                  <!-- Current Window -->
                  <rect x="442" y="48" width="414" height="106" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                  <text x="649" y="34" text-anchor="middle" class="svg-kicker">CURRENT WINDOW (100%)</text>

                  <!-- Active 20% of Current -->
                  <rect x="452" y="60" width="160" height="82" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="532" y="86" text-anchor="middle" class="svg-mono-xs">Elapsed 20%</text>
                  <text x="532" y="108" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">1st New → 2+1=3 ✓</text>
                  <text x="532" y="128" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">2nd New → Reject ✕</text>

                  <!-- Future 80% of Current -->
                  <rect x="622" y="60" width="224" height="82" rx="8" fill="var(--bg-surface)" stroke="var(--border)" stroke-dasharray="4 3" opacity="0.65"/>
                  <text x="734" y="105" text-anchor="middle" class="svg-sub">Remaining 80% (Future)</text>

                  <!-- Combined Bracket -->
                  <rect x="118" y="166" width="494" height="36" rx="10" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.4"/>
                  <text x="365" y="189" text-anchor="middle" class="svg-mono-xs">Active Sliding Window = 80% Prev (2 reqs) + 20% Current (max 1 more req) = Limit 3</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 50: HTTP PLAIN-TEXT PROBLEM & SYMMETRIC ENCRYPTION
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-50-http-symmetric-encryption",
      number: "50",
      shortLabel: "Symmetric Crypto",
      title: "HTTP Plain-Text Problem & Symmetric Encryption",
      summary: "Why plain-text HTTP exposes banking credentials to Man-in-the-Middle hackers, how encryption locks data in transit, and why pure Symmetric Encryption fails due to the Key Exchange Problem.",
      subtopicLabels: ["50.1 HTTP Plain-Text Problem", "50.2 Encrypting Data", "50.3 Symmetric Encryption & Failure"],
      diagramCount: 1,
      sections: [
        {
          num: "50.1",
          title: "How Client-Server Communication Works Over HTTP (The Plain-Text Problem)",
          content: `
            <ul class="notes-bullet-list">
              <li>In a standard web application, a <strong>Client</strong> sends a <strong>Request</strong> to the <strong>Server</strong>, and the Server sends back a <strong>Response</strong> (Request-Response cycle). By default, this happens over the <strong>HTTP Protocol</strong>.</li>
              <li><strong>The Problem with HTTP:</strong> In HTTP communication, all data transferred between Client and Server goes in <strong>unencrypted form (Plain Text)</strong>.</li>
              <li><strong>Example (Banking Application):</strong> Suppose a user is logging into a banking app and sends their <strong><code>Email &amp; Password</code></strong> over HTTP. Because it travels as <strong>Plain Text</strong>, a <strong>Hacker (Man-in-the-Middle)</strong> sitting on the network between Client and Server can easily intercept, read, and steal the user's <code>Email &amp; Password</code>.</li>
            </ul>
          `
        },
        {
          num: "50.2",
          title: "How to Solve the Plain-Text Problem: Encrypting Data",
          content: `
            <div class="sub-card-grid-3">
              <div class="sub-box">
                <div class="sub-box__tag">1. Client Side</div>
                <div class="sub-box__title">Encrypt (Lock)</div>
                <div class="sub-box__body">Before sending <code>Email &amp; Password</code> to the Server, the Client <strong>encrypts (locks)</strong> the data.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">2. In Transit</div>
                <div class="sub-box__title">Unreadable Over Wire</div>
                <div class="sub-box__body">Even if a <strong>Hacker (MITM)</strong> intercepts the data along the way, they cannot read it because it is in <strong>encrypted (locked) form</strong>.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">3. Server Side</div>
                <div class="sub-box__title">Decrypt (Unlock)</div>
                <div class="sub-box__body">Once the encrypted data reaches the Server, the Server <strong>decrypts (unlocks)</strong> it to read the original <code>Email &amp; Password</code>.</div>
              </div>
            </div>
          `
        },
        {
          num: "50.3",
          title: "Approach 1 — Symmetric Encryption & Why It Fails (The Key Exchange Problem)",
          content: `
            <p><strong>What is Symmetric Encryption?</strong> Uses a <strong>Single Key (Symmetric Key)</strong> for everything — the <strong>exact same single key</strong> is used to <strong>encrypt (lock)</strong> data on the Client and <strong>decrypt (unlock)</strong> it on the Server.</p>
            <ol class="notes-ordered-list" style="margin-top: 0.75rem;">
              <li>The Client uses its <strong>Symmetric Key</strong> to encrypt (lock) <code>Email &amp; Password</code> and sends the locked data to the Server.</li>
              <li>The <strong>Hacker (Man-in-the-Middle)</strong> intercepts a copy of this locked data, but cannot read it yet.</li>
              <li>However, once the locked data reaches the Server, <strong>the Server also needs that exact same Symmetric Key</strong> to unlock/decrypt it — without the key, even the Server cannot read it!</li>
              <li>Therefore, the Client has to <strong>send the Symmetric Key over the network to the Server</strong> as well.</li>
              <li><strong>How the Hacker Steals the Data:</strong> When the Client sends the <strong>Symmetric Key</strong> across the network, the Hacker sitting in the middle <strong>easily sniffs/steals a copy of the Symmetric Key</strong> too!</li>
              <li>The Hacker uses the stolen <strong>Symmetric Key</strong> to unlock the <strong>encrypted data</strong> copied earlier and gets full access to the user's <code>Email &amp; Password</code>.</li>
            </ol>

            <div class="callout-highlight-box" style="margin-top: 1rem; border-left-color: var(--danger);">
              <div class="callout-highlight-tag" style="color: var(--danger);">WHY PURE SYMMETRIC ENCRYPTION FAILS</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                Sending both the <strong>locked data</strong> and the <strong>single key to unlock it</strong> over the same untrusted network allows a Man-in-the-Middle hacker to sniff both!
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 50.1 · Plain-Text HTTP Leak &amp; Symmetric Key Exchange Failure</span>
                <span class="diagram-frame-tag">MITM HACKER SNIFFS BOTH LOCKED DATA &amp; KEY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 245" class="arch-svg" role="img" aria-label="Diagram showing Symmetric Encryption failing when Client sends both Locked Data and the Symmetric Key over the network, allowing MITM Hacker to sniff both and decrypt Email and Password">
                  <defs>
                    <marker id="arrow-50" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Client -->
                  <rect x="20" y="64" width="166" height="114" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="103" y="96" text-anchor="middle" class="svg-title">Client</text>
                  <text x="103" y="120" text-anchor="middle" class="svg-mono-xs">Email &amp; Password</text>
                  <text x="103" y="146" text-anchor="middle" class="svg-sub">Has Symmetric Key</text>

                  <!-- Top Wire: Locked Data -->
                  <line x1="186" y1="88" x2="682" y2="88" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-50)"/>
                  <text x="434" y="76" text-anchor="middle" class="svg-mono-xs">1. Locked Data: [Email &amp; Password] (Encrypted)</text>

                  <!-- Bottom Wire: Symmetric Key sent in transit! -->
                  <line x1="186" y1="154" x2="682" y2="154" stroke="var(--danger)" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrow-50)"/>
                  <text x="434" y="144" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">2. Sends Same Symmetric Key Over Network!</text>

                  <!-- MITM Hacker Sniffing Both -->
                  <rect x="304" y="176" width="260" height="54" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                  <text x="434" y="199" text-anchor="middle" class="svg-node" style="fill: var(--danger);">Hacker (Man-in-the-Middle) ✕</text>
                  <text x="434" y="218" text-anchor="middle" class="svg-mono-xs">Sniffs Locked Data + Key → Unlocked!</text>

                  <!-- Server -->
                  <rect x="690" y="64" width="168" height="114" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="774" y="96" text-anchor="middle" class="svg-title">Server</text>
                  <text x="774" y="120" text-anchor="middle" class="svg-sub">Needs same key</text>
                  <text x="774" y="144" text-anchor="middle" class="svg-sub">to decrypt data</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 51: ASYMMETRIC ENCRYPTION & HYBRID ENCRYPTION APPROACH
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-51-asymmetric-hybrid-encryption",
      number: "51",
      shortLabel: "Hybrid Encryption",
      title: "Asymmetric Encryption & The Hybrid Encryption Approach",
      summary: "Public Key (lock only) + Private Key (unlock only, 100% secret), and the 5-step Hybrid Encryption flow that safely exchanges the Client Symmetric Key so a passive hacker cannot decrypt it.",
      subtopicLabels: ["51.1 Asymmetric Encryption", "51.2 5-Step Hybrid Encryption Flow"],
      diagramCount: 1,
      sections: [
        {
          num: "51.1",
          title: "What is Asymmetric Encryption?",
          content: `
            <p>Unlike Symmetric Encryption (single key), <strong>Asymmetric Encryption uses a pair of two mathematically linked keys</strong>:</p>
            <div class="sub-card-grid-2" style="margin-top: 0.85rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Openly Shared</div>
                <div class="sub-box__title">1. Public Key (Encrypt / Lock Only)</div>
                <div class="sub-box__body">Used strictly to <strong>encrypt (lock)</strong> data. It can be shared openly with anyone over the network.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">100% Secret</div>
                <div class="sub-box__title">2. Private Key (Decrypt / Unlock Only)</div>
                <div class="sub-box__body">Used strictly to <strong>decrypt (unlock)</strong> data. Kept <strong>100% secret</strong> by its owner and is never sent over the network.</div>
              </div>
            </div>
            <div class="callout-highlight-box" style="margin-top: 1rem;">
              <div class="callout-highlight-tag">CORE RULE OF ASYMMETRIC ENCRYPTION</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                Any data encrypted using a <strong>Public Key</strong> can <strong>ONLY</strong> be decrypted using its matching <strong>Private Key</strong> (not even the Public Key itself can unlock data it just locked!).
              </p>
            </div>
          `
        },
        {
          num: "51.2",
          title: "The Hybrid Encryption Approach (Combining Symmetric + Asymmetric)",
          content: `
            <p><strong>Initial Key Setup:</strong> Server generates <code>Server Public Key</code> + secret <code>Server Private Key</code>. Client generates <code>Client Symmetric Key</code>.</p>

            <div class="workflow-stack" style="margin-top: 0.85rem;">
              <div class="workflow-step">
                <div class="step-circle">1</div>
                <div>
                  <div class="workflow-step__title">Step 1: Server Sends Its Public Key to Client</div>
                  <div class="workflow-step__desc">The Server sends <code>Server Public Key</code> over the network to the Client. Even if the Hacker copies it, that is completely fine — a Public Key can only lock data, never unlock it.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">2</div>
                <div>
                  <div class="workflow-step__title">Step 2: Client Encrypts Its Symmetric Key Using Server's Public Key</div>
                  <div class="workflow-step__desc">Instead of sending <code>Client Symmetric Key</code> in plain text, the Client locks it with <code>Server Public Key</code> and sends <code>[Client Symmetric Key] locked with Server Public Key</code> to the Server.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">3</div>
                <div>
                  <div class="workflow-step__title">Step 3: Hacker Fails to Read the Symmetric Key</div>
                  <div class="workflow-step__desc">The Hacker intercepts the locked package, but because it was encrypted with <code>Server Public Key</code>, ONLY <code>Server Private Key</code> can unlock it — which the Hacker does NOT have!</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">4</div>
                <div>
                  <div class="workflow-step__title">Step 4: Server Decrypts &amp; Obtains the Client's Symmetric Key</div>
                  <div class="workflow-step__desc">The Server uses its secret <code>Server Private Key</code> to unlock the package and extract <code>Client Symmetric Key</code>. Now both Client and Server safely share the exact same Symmetric Key while the Hacker has nothing!</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">5</div>
                <div>
                  <div class="workflow-step__title">Step 5: Actual Data Transfer Using the Shared Symmetric Key</div>
                  <div class="workflow-step__desc">The Client encrypts <code>Email &amp; Password</code> using <code>Client Symmetric Key</code> and sends it to the Server. The Hacker cannot read it, and the Server cleanly decrypts it using its copy of <code>Client Symmetric Key</code>.</div>
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 51.1 · 5-Step Hybrid Encryption Flow (Asymmetric Key Exchange + Symmetric Data)</span>
                <span class="diagram-frame-tag">PASSIVE HACKER CANNOT DECRYPT</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Five-step Hybrid Encryption diagram showing Server sending Public Key, Client locking Symmetric Key with Server Public Key, Server unlocking with Private Key, and encrypted Email and Password transfer">
                  <defs>
                    <marker id="arrow-51" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)"/>
                    </marker>
                  </defs>

                  <!-- Client Box -->
                  <rect x="20" y="24" width="184" height="202" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="112" y="54" text-anchor="middle" class="svg-title">Client</text>
                  <text x="112" y="80" text-anchor="middle" class="svg-mono-xs">Generates:</text>
                  <text x="112" y="100" text-anchor="middle" class="svg-mono-xs" style="fill: var(--accent);">Client Sym Key</text>
                  <text x="112" y="138" text-anchor="middle" class="svg-sub">Locks Sym Key with</text>
                  <text x="112" y="156" text-anchor="middle" class="svg-sub">Server Public Key</text>
                  <text x="112" y="196" text-anchor="middle" class="svg-mono-xs">Email &amp; Password</text>

                  <!-- Server Box -->
                  <rect x="676" y="24" width="184" height="202" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                  <text x="768" y="54" text-anchor="middle" class="svg-title">Server</text>
                  <text x="768" y="80" text-anchor="middle" class="svg-mono-xs">Server Public Key</text>
                  <text x="768" y="102" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Server Private Key</text>
                  <text x="768" y="122" text-anchor="middle" class="svg-sub">(100% Secret)</text>
                  <text x="768" y="164" text-anchor="middle" class="svg-sub">Unlocks Sym Key ✓</text>
                  <text x="768" y="196" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Reads Email &amp; Pass ✓</text>

                  <!-- Step 1: Server Public Key -> Client -->
                  <line x1="676" y1="62" x2="212" y2="62" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#arrow-51)"/>
                  <text x="440" y="50" text-anchor="middle" class="svg-mono-xs">1. Sends Server Public Key (Openly Shared)</text>

                  <!-- Step 2: Locked Symmetric Key -> Server -->
                  <line x1="204" y1="114" x2="668" y2="114" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-51)"/>
                  <text x="440" y="102" text-anchor="middle" class="svg-mono-xs">2. [Client Sym Key] locked with Server Public Key</text>

                  <!-- Step 3: Hacker Blocked Badge -->
                  <rect x="304" y="128" width="272" height="34" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                  <text x="440" y="150" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">3. Passive Hacker Fails (No Server Private Key)</text>

                  <!-- Step 5: Encrypted Data -> Server -->
                  <line x1="204" y1="196" x2="668" y2="196" stroke="var(--success)" stroke-width="2.2" marker-end="url(#arrow-51)"/>
                  <text x="440" y="184" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">5. [Email &amp; Password] encrypted with Shared Client Sym Key ✓</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 52: HOW A HACKER BREAKS HYBRID ENCRYPTION (MITM REVERSE PROXY)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-52-mitm-reverse-proxy-attack",
      number: "52",
      shortLabel: "MITM Key Swap",
      title: "How a Hacker Breaks Hybrid Encryption (The Reverse Proxy MITM Attack)",
      summary: "How an active Man-in-the-Middle Hacker acting as a Reverse Proxy swaps in Hacker Public Key, unlocks the Client Symmetric Key with Hacker Private Key, and steals Email & Password — exposing the missing Validation & Trust layer.",
      subtopicLabels: ["52.1 Reverse Proxy Attack Setup", "52.2 4-Step Attack Flow & Root Cause"],
      diagramCount: 1,
      sections: [
        {
          num: "52.1",
          title: "The Vulnerability: When the Hacker Acts as a Reverse Proxy",
          content: `
            <p>Even though Hybrid Encryption never sends the Symmetric Key or Private Key in plain text, <strong>our data can STILL be hacked if the Man-in-the-Middle Hacker acts as a Reverse Proxy</strong> between Client and Server!</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Server Keys</div>
                <div class="sub-box__title">Real Server</div>
                <div class="sub-box__body"><code>Server Public Key</code> + <code>Server Private Key</code></div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
                <div class="sub-box__tag">Hacker Keys (Reverse Proxy)</div>
                <div class="sub-box__title">MITM Hacker</div>
                <div class="sub-box__body">Generates own pair: <strong><code>Hacker Public Key</code></strong> + <strong><code>Hacker Private Key</code></strong></div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Client Key</div>
                <div class="sub-box__title">Victim Client</div>
                <div class="sub-box__body"><code>Client Symmetric Key</code></div>
              </div>
            </div>
          `
        },
        {
          num: "52.2",
          title: "Step-by-Step Flow of the Reverse Proxy Attack & Root Cause",
          content: `
            <ol class="notes-ordered-list">
              <li><strong>Step 1 (Hacker Swaps Public Key):</strong> Server sends <code>Server Public Key</code> toward Client. The Hacker intercepts it, keeps it, does NOT let it reach Client, and sends <strong><code>Hacker Public Key</code></strong> to Client instead!</li>
              <li><strong>Step 2 (Client Trusts Hacker's Public Key):</strong> Client assumes <em>"This Public Key came from the genuine Server,"</em> locks its <code>Client Symmetric Key</code> using <strong><code>Hacker Public Key</code></strong>, and sends it toward Server.</li>
              <li><strong>Step 3 (Hacker Unlocks &amp; Steals Client's Symmetric Key):</strong> Hacker intercepts the package and uses <strong><code>Hacker Private Key</code></strong> to unlock it, gaining full access to <code>Client Symmetric Key</code>! (Hacker can also forward a key to the Server so neither side suspects anything).</li>
              <li><strong>Step 4 (Client Sends Data &amp; Gets Hacked):</strong> Client encrypts <code>Email &amp; Password</code> with <code>Client Symmetric Key</code>. Hacker intercepts and easily decrypts it using the stolen <code>Client Symmetric Key</code>!</li>
            </ol>

            <div class="callout-highlight-box" style="margin-top: 1rem; border-left-color: var(--danger);">
              <div class="callout-highlight-tag" style="color: var(--danger);">ROOT CAUSE — MISSING VALIDATION &amp; TRUST</div>
              <p style="margin-top: 0.45rem; color: var(--text-primary);">
                Our encryption math wasn't broken — what failed was <strong>Validation &amp; Trust</strong>! The Client had <strong>no way to verify</strong> whether the Public Key it received actually belonged to the <strong>real Server</strong> or to a <strong>Hacker pretending to be the Server</strong>.
              </p>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 52.1 · Active Reverse Proxy MITM Public Key Swap Attack</span>
                <span class="diagram-frame-tag">NO KEY VERIFICATION = COMPROMISED HANDSHAKE</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="MITM Reverse Proxy Key Swap attack where Hacker intercepts Server Public Key, sends Hacker Public Key to Client, decrypts Client Symmetric Key with Hacker Private Key, and steals Email and Password">
                  <defs>
                    <marker id="arrow-52" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--danger)"/>
                    </marker>
                  </defs>

                  <!-- Client -->
                  <rect x="20" y="34" width="182" height="184" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="111" y="64" text-anchor="middle" class="svg-title">Client</text>
                  <text x="111" y="92" text-anchor="middle" class="svg-sub">Thinks Hacker Pub</text>
                  <text x="111" y="110" text-anchor="middle" class="svg-sub">is Real Server Pub!</text>
                  <text x="111" y="152" text-anchor="middle" class="svg-mono-xs">Locks SymKey with</text>
                  <text x="111" y="172" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Hacker Pub Key</text>

                  <!-- Hacker Reverse Proxy in Middle -->
                  <rect x="320" y="20" width="240" height="212" rx="16" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.8"/>
                  <text x="440" y="48" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">ACTIVE MITM (REVERSE PROXY)</text>
                  <text x="440" y="74" text-anchor="middle" class="svg-title" style="fill: var(--danger);">Hacker</text>
                  <text x="440" y="98" text-anchor="middle" class="svg-mono-xs">Own Hacker Pub + Priv Keys</text>
                  <text x="440" y="132" text-anchor="middle" class="svg-mono-xs">1. Swaps Server Pub → Hacker Pub</text>
                  <text x="440" y="156" text-anchor="middle" class="svg-mono-xs">3. Unlocks SymKey w/ Hacker Priv</text>
                  <text x="440" y="182" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">4. Reads Email &amp; Password ✕</text>
                  <text x="440" y="212" text-anchor="middle" class="svg-sub">Client cannot verify key owner</text>

                  <!-- Real Server -->
                  <rect x="678" y="34" width="182" height="184" rx="14" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
                  <text x="769" y="64" text-anchor="middle" class="svg-title">Real Server</text>
                  <text x="769" y="96" text-anchor="middle" class="svg-mono-xs">Sends Server Pub</text>
                  <text x="769" y="122" text-anchor="middle" class="svg-sub">(Intercepted by</text>
                  <text x="769" y="140" text-anchor="middle" class="svg-sub">Hacker in middle)</text>

                  <!-- Arrows -->
                  <line x1="678" y1="74" x2="568" y2="74" stroke="var(--danger)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow-52)"/>
                  <text x="622" y="64" text-anchor="middle" class="svg-mono-xs">Server Pub</text>

                  <line x1="320" y1="74" x2="210" y2="74" stroke="var(--danger)" stroke-width="2" marker-end="url(#arrow-52)"/>
                  <text x="262" y="64" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Hacker Pub</text>

                  <line x1="202" y1="156" x2="312" y2="156" stroke="var(--danger)" stroke-width="2" marker-end="url(#arrow-52)"/>
                  <text x="258" y="146" text-anchor="middle" class="svg-mono-xs">SymKey + Data</text>
                </svg>
              </div>
            </figure>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 53: WHAT IS AN SSL CERTIFICATE & HOW IT WORKS?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-53-ssl-certificate",
      number: "53",
      shortLabel: "SSL Certificate",
      title: "What is an SSL Certificate & How It Works?",
      summary: "Trusted Certificate Authorities (GoDaddy, DigiCert, Let's Encrypt), the 3 components inside an SSL Certificate for www.designkarle.com, signature verification blocking Hacker key swaps, and CA-Signed vs. Self-Signed certificates.",
      subtopicLabels: ["53.1 Trusted CAs", "53.2 3 Components of SSL Cert", "53.3 Verification Flow", "53.4 CA-Signed vs Self-Signed"],
      diagramCount: 1,
      sections: [
        {
          num: "53.1",
          title: "Why We Need an SSL Certificate (Trusted Certificate Authorities)",
          content: `
            <p>To stop a Hacker from swapping in a fake Public Key, the Client needs a way to <strong>validate and verify</strong> that the Public Key genuinely belongs to the exact Server/Domain it is trying to talk to. This validation is provided by <strong>SSL Certificates</strong> issued by globally <strong>Trusted Certificate Authorities (CAs)</strong> such as: <strong>GoDaddy</strong>, <strong>DigiCert</strong>, <strong>Let's Encrypt</strong>, and <strong>GlobalSign / Comodo / Sectigo</strong>.</p>
          `
        },
        {
          num: "53.2",
          title: "How a Server Gets an SSL Certificate & Its 3 Core Components",
          content: `
            <p>When you build a server (e.g., <code>www.designkarle.com</code>) and request an SSL Certificate from a Trusted CA like <strong>GoDaddy</strong>, GoDaddy asks for (1) <strong>Your Domain Name</strong> and (2) <strong>Your Server's Public Key</strong>, verifies ownership, and digitally signs the certificate:</p>

            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Component 01</div>
                <div class="sub-box__title">Domain Name</div>
                <div class="sub-box__body">The verified domain name of the application (e.g., <code>www.designkarle.com</code>).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Component 02</div>
                <div class="sub-box__title">Public Key of the Server</div>
                <div class="sub-box__body">The genuine Public Key belonging to that server.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--accent);">
                <div class="sub-box__tag">Component 03</div>
                <div class="sub-box__title">Digital Signature of Authority</div>
                <div class="sub-box__body">Created by GoDaddy hashing <code>[Domain Name + Server Public Key]</code> and encrypting that hash with <strong>GoDaddy's secret Private Key</strong> — verifiable by anyone using <strong>GoDaddy's Public Key</strong>.</div>
              </div>
            </div>
          `
        },
        {
          num: "53.3",
          title: "Step-by-Step Verification Flow (Genuine Server vs. Hacker Swap)",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Scenario A · Verification Succeeds ✓</div>
                <div class="sub-box__title">Genuine Server Public Key</div>
                <div class="sub-box__body">
                  1. Server sends both <code>Server Public Key</code> + complete <code>SSL Certificate</code>.<br>
                  2. Client retrieves <code>Public Key of GoDaddy</code>.<br>
                  3. Client checks the signature using <code>GoDaddy's Public Key</code> + <code>Server Public Key</code>.<br>
                  4. <strong>Match Confirmed!</strong> Client knows the key genuinely belongs to <code>www.designkarle.com</code> and safely sends encrypted <code>Client Symmetric Key</code> &amp; <code>Email &amp; Password</code>.
                </div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
                <div class="sub-box__tag">Scenario B · Attack Blocked ✕</div>
                <div class="sub-box__title">Hacker Swaps in Hacker Public Key</div>
                <div class="sub-box__body">
                  1. MITM Hacker intercepts and sends <code>Hacker Public Key</code> to Client instead.<br>
                  2. Client checks <code>Hacker Public Key</code> against the SSL Certificate's Signature using <code>GoDaddy's Public Key</code>.<br>
                  3. <strong>Signature Mismatch!</strong> Produces a completely different value.<br>
                  4. Client detects MITM attack, <strong>terminates the connection immediately</strong>, and refuses to send your <code>Email &amp; Password</code>.
                </div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 53.1 · SSL Certificate Anatomy &amp; Cryptographic Verification Check</span>
                <span class="diagram-frame-tag">MATCH = TRUSTED ✓ · MISMATCH = MITM BLOCKED ✕</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="SSL Certificate verification diagram showing Domain Name, Server Public Key, and GoDaddy Digital Signature checked by browser to confirm genuine key or block Hacker key swap">
                  <!-- Left: SSL Certificate Box -->
                  <rect x="20" y="24" width="320" height="202" rx="16" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1.8"/>
                  <text x="180" y="52" text-anchor="middle" class="svg-kicker">SSL CERTIFICATE (SIGNED BY GODADDY)</text>
                  <rect x="40" y="68" width="280" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="180" y="93" text-anchor="middle" class="svg-mono-xs">1. Domain: www.designkarle.com</text>
                  <rect x="40" y="118" width="280" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
                  <text x="180" y="143" text-anchor="middle" class="svg-mono-xs">2. Genuine Server Public Key</text>
                  <rect x="40" y="168" width="280" height="42" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="180" y="194" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">3. GoDaddy Digital Signature ✓</text>

                  <!-- Right Top: Scenario A -->
                  <rect x="374" y="24" width="486" height="94" rx="14" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.6"/>
                  <text x="396" y="50" class="svg-kicker" style="fill: var(--success);">SCENARIO A · GENUINE SERVER PUBLIC KEY</text>
                  <text x="396" y="76" class="svg-node">Verify(Server Pub Key + GoDaddy Pub Key) == Cert Signature ✓</text>
                  <text x="396" y="100" class="svg-sub">100% Verified → Client encrypts Symmetric Key &amp; sends Email/Password safely</text>

                  <!-- Right Bottom: Scenario B -->
                  <rect x="374" y="132" width="486" height="94" rx="14" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.6"/>
                  <text x="396" y="158" class="svg-kicker" style="fill: var(--danger);">SCENARIO B · HACKER SWAPS IN HACKER PUBLIC KEY</text>
                  <text x="396" y="184" class="svg-node" style="fill: var(--danger);">Verify(Hacker Pub Key + GoDaddy Pub Key) ≠ Cert Signature ✕</text>
                  <text x="396" y="208" class="svg-sub">MITM Detected! Browser immediately terminates connection &amp; blocks data</text>
                </svg>
              </div>
            </figure>
          `
        },
        {
          num: "53.4",
          title: "Paid CA-Signed Certificates vs. Self-Signed Certificates",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box" style="border-left: 3.5px solid var(--success);">
                <div class="sub-box__tag">Verified by Trusted Authority</div>
                <div class="sub-box__title">CA-Signed SSL Certificates</div>
                <div class="sub-box__body">CAs like <strong>GoDaddy</strong> or <strong>DigiCert</strong> charge a fee to verify domain/organization ownership and sign your certificate (free automated CAs like <em>Let's Encrypt</em> also exist). Automatically trusted by all web browsers.</div>
              </div>
              <div class="sub-box" style="border-left: 3.5px solid var(--warning);">
                <div class="sub-box__tag">Unverified · Local Dev Only</div>
                <div class="sub-box__title">Self-Signed SSL Certificates</div>
                <div class="sub-box__body">Generated and signed for free on your own machine without a Trusted CA. Browsers mark it as <strong>Unverified / Not Trusted</strong> — useful only for internal testing or localhost development.</div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 54: DEEP-DIVE SECURITY Q&A (SSL TAMPERING, ROOT STORE & POST-SSL HACKS)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-54-ssl-security-deep-dive",
      number: "54",
      shortLabel: "SSL Security Q&A",
      title: "Deep-Dive Security Q&A — Faking SSL, Root Trust Store & Post-SSL Attacks",
      summary: "Why hackers fail all 4 SSL forgery tricks (SHA-256 Hash A vs Hash B, Domain Mismatch, HSM Private Key), why GoDaddy's Public Key lives offline in your OS Root Trust Store, and 6 ways data can STILL be hacked even with HTTPS.",
      subtopicLabels: ["54.1 Why Hackers Can't Fake SSL", "54.2 Offline Root Trust Store", "54.3 6 Post-SSL Attack Vectors"],
      diagramCount: 1,
      sections: [
        {
          num: "54.1",
          title: "Question 1: Why Can't a Hacker Steal or Fake the SSL Certificate? (Tricks A–D)",
          content: `
            <p>An SSL Certificate is completely public — a Hacker can easily copy it, <strong>but having it does not help the Hacker at all</strong>:</p>
            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Trick A · Copy Real Cert Unmodified</div>
                <div class="sub-box__title">Client Still Uses Real Server Public Key</div>
                <div class="sub-box__body">The real SSL cert contains the <code>Real Server Public Key</code>. Client encrypts <code>Client Symmetric Key</code> with it → only <code>Real Server Private Key</code> can unlock it (Hacker has nothing).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Trick B · Edit Cert to Swap Public Key</div>
                <div class="sub-box__title">SHA-256 Signature Mismatch (Hash A ≠ Hash B)</div>
                <div class="sub-box__body">GoDaddy hashes <code>[Domain + Server Pub Key]</code> with <strong>SHA-256 (Hash A)</strong> and signs it with <strong>GoDaddy's Secret Private Key</strong> (locked in offline HSMs). Editing the key changes <strong>Hash B</strong> (<code>Hash A ≠ Hash B</code>) and Hacker cannot forge a matching signature!</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Trick C · Buy Real Cert from GoDaddy</div>
                <div class="sub-box__title">Domain Verification &amp; Common Name Check</div>
                <div class="sub-box__body">• Requesting cert for <code>www.designkarle.com</code> fails <strong>DNS TXT / Domain Ownership Verification</strong>.<br>• Buying cert for <code>www.hacker.com</code> fails browser URL check with <code>ERR_CERT_COMMON_NAME_INVALID</code> (Domain Mismatch).</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Trick D · Self-Signed Fake Cert</div>
                <div class="sub-box__title">Browser Untrusted Authority Warning</div>
                <div class="sub-box__body">Signing with Hacker's own fake authority fails the browser's trusted CA list and triggers a full-screen red block: <strong>"Your connection is not private (<code>ERR_CERT_AUTHORITY_INVALID</code>)"</strong>.</div>
              </div>
            </div>
          `
        },
        {
          num: "54.2",
          title: "Question 2: Why Can't a Hacker Intercept GoDaddy's Public Key?",
          content: `
            <div class="callout-highlight-box" style="border-left-color: var(--success);">
              <div class="callout-highlight-tag" style="color: var(--success);">THE OFFLINE ROOT CERTIFICATE STORE (TRUST STORE)</div>
              <ul class="notes-bullet-list" style="margin-top: 0.55rem;">
                <li><strong>The Client NEVER Downloads GoDaddy's Public Key Over the Internet!</strong> Your browser does NOT make an internet request to GoDaddy during an HTTPS handshake.</li>
                <li>Instead, the Public Keys (<strong>Root Certificates</strong>) of all globally trusted CAs (<strong>GoDaddy, DigiCert, Let's Encrypt, GlobalSign, Sectigo, Google Trust Services, Apple, Microsoft</strong>) come <strong>pre-installed (built-in) directly inside your OS (Windows, macOS, Linux, Android, iOS) and Browser (Chrome, Firefox, Safari, Edge)</strong>.</li>
                <li>Because your browser looks up <code>GoDaddy's Public Key</code> <strong>100% offline/locally from your device's Root Certificate Store</strong>, it never crosses the Wi-Fi or wire — so a MITM Hacker can never intercept or replace it!</li>
              </ul>
            </div>
          `
        },
        {
          num: "54.3",
          title: "Question 3: Even With a Valid SSL Certificate (HTTPS), Can Your Data Still Be Hacked?",
          content: `
            <p><strong>YES!</strong> SSL/TLS <strong>only protects data in transit</strong> (while traveling across the network pipe). Here are <strong>6 real-world ways a hacker can STILL steal your data even with HTTPS active</strong>:</p>

            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Vector 01 · Valid Padlock Scam</div>
                <div class="sub-box__title">1. Phishing &amp; Lookalike Domains</div>
                <div class="sub-box__body">A hacker registers <code>www.designkar1e.com</code> or <code>www.hdfcbank-secure-login.com</code> and gets a <strong>genuine CA-signed SSL cert</strong> (showing the HTTPS padlock!). SSL only proves the pipe is encrypted — it delivers your typed password straight into the scammer's hands.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Vector 02 · Before Encryption</div>
                <div class="sub-box__title">2. Client-Side Compromise</div>
                <div class="sub-box__body">If your laptop/phone has a <strong>Keylogger</strong>, spyware, or malicious <strong>Chrome Extension</strong>, the hacker reads your <code>Email &amp; Password</code> from your keyboard or browser DOM <em>before SSL even encrypts it</em>.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Vector 03 · Trust Store Hack</div>
                <div class="sub-box__title">3. Compromised Root Trust Store</div>
                <div class="sub-box__body">If malware (or a shady free VPN/proxy cert) installs a <strong>Rogue Root CA Public Key</strong> into your OS Trust Store, your device trusts fake certs signed by that hacker. <em>(Corporate laptops also do this via tools like Zscaler).</em></div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Vector 04 · Code Bugs</div>
                <div class="sub-box__title">4. Web App Vulnerabilities (XSS, SQLi, CSRF)</div>
                <div class="sub-box__body">• <strong>XSS:</strong> Injected JS steals your logged-in Session Cookie / JWT over HTTPS.<br>• <strong>SQL Injection:</strong> SSL dutifully encrypts the hacker's malicious SQL payload, sends it to the server, and returns the dumped DB over HTTPS!</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Vector 05 · Data at Rest</div>
                <div class="sub-box__title">5. Server-Side / Database Breach</div>
                <div class="sub-box__body">Once decrypted at the Server and stored in a DB, a cloud/bucket/DB breach steals millions of records if passwords aren't hashed (<code>bcrypt</code>/<code>Argon2</code>) or encrypted at rest.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Vector 06 · Keys &amp; Sessions</div>
                <div class="sub-box__title">6. Stolen Session Cookie / Private Key (+ PFS)</div>
                <div class="sub-box__body">Stolen session cookies hijack accounts over HTTPS. A stolen <code>Server Private Key</code> allows impersonation until revoked — modern <strong>TLS 1.3 uses Perfect Forward Secrecy (PFS)</strong> ephemeral session keys so past recorded traffic stays safe!</div>
              </div>
            </div>

            <figure class="diagram-frame">
              <div class="diagram-frame-header">
                <span class="diagram-frame-title">Diagram 54.1 · Offline Root Trust Store &amp; What HTTPS Does (and Does Not) Protect</span>
                <span class="diagram-frame-tag">IN-TRANSIT PIPE PROTECTED ✓ · ENDPOINTS &amp; APP CODE STILL NEED SECURITY</span>
              </div>
              <div class="diagram-svg-wrap">
                <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Security boundary diagram showing Offline OS Root Trust Store validating SHA-256 Hash A vs Hash B, and HTTPS encrypting only the network pipe in transit while Client Malware, Phishing, XSS SQLi, and Server DB still require defense">
                  <!-- Left: Client Endpoint -->
                  <rect x="16" y="24" width="240" height="202" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="136" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">CLIENT DEVICE</text>
                  <rect x="34" y="64" width="204" height="58" rx="10" fill="var(--success-bg)" stroke="var(--success)"/>
                  <text x="136" y="88" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Offline Root Trust Store ✓</text>
                  <text x="136" y="108" text-anchor="middle" class="svg-sub">Built-in CA Public Keys</text>

                  <rect x="34" y="136" width="204" height="74" rx="10" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="136" y="158" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Still Vulnerable Here ✕</text>
                  <text x="136" y="178" text-anchor="middle" class="svg-sub">Keyloggers · Malware</text>
                  <text x="136" y="196" text-anchor="middle" class="svg-sub">Phishing · Rogue Root CA</text>

                  <!-- Middle: Protected HTTPS Pipe -->
                  <rect x="284" y="54" width="312" height="142" rx="16" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                  <text x="440" y="84" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">PROTECTED BY SSL / TLS (HTTPS)</text>
                  <text x="440" y="112" text-anchor="middle" class="svg-title">Data in Transit Encrypted ✓</text>
                  <text x="440" y="138" text-anchor="middle" class="svg-mono-xs">SHA-256: Hash A == Hash B ✓</text>
                  <text x="440" y="160" text-anchor="middle" class="svg-sub">Stops Wi-Fi / Router MITM Attacks</text>
                  <text x="440" y="180" text-anchor="middle" class="svg-mono-xs">TLS 1.3 Perfect Forward Secrecy</text>

                  <!-- Right: Server Endpoint -->
                  <rect x="624" y="24" width="240" height="202" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                  <text x="744" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">SERVER &amp; DATABASE</text>
                  <rect x="642" y="64" width="204" height="58" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="744" y="88" text-anchor="middle" class="svg-node">Decrypts Request</text>
                  <text x="744" y="108" text-anchor="middle" class="svg-sub">Processes App Logic</text>

                  <rect x="642" y="136" width="204" height="74" rx="10" fill="var(--danger-bg)" stroke="var(--danger)"/>
                  <text x="744" y="158" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Still Vulnerable Here ✕</text>
                  <text x="744" y="178" text-anchor="middle" class="svg-sub">XSS · SQL Injection · CSRF</text>
                  <text x="744" y="196" text-anchor="middle" class="svg-sub">DB Breach · Stolen Cookies</text>
                </svg>
              </div>
            </figure>
          `
        }
        ]
      },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 55: WHY DATABASE CHOICE MATTERS & FACTORS AFFECTING DATABASE SELECTION
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-55-database-choice",
      number: "55",
      shortLabel: "Database Choice",
      title: "Why Database Choice Matters & Factors Affecting Database Selection",
      summary: "\"How good your design is and how well you can scale your system depends on the choice of database that you have used.\" Why database choice dictates scalability, latency, and consistency without changing functional code, and the 3 core decision factors: Data Structure, Query Pattern, and Scale Ceiling.",
      subtopicLabels: ["55.1 Functional vs Non-Functional Impact","55.2 Factor 1: Structure of Data","55.3 Factor 2: Query Pattern","55.4 Factor 3: Scale Ceiling"],
      diagramCount: 2,
      sections: [
        {
          num: "55.1",
          title: "1. Why Database Choice Matters in System Design",
          content: `

          <blockquote class="notes-quote" style="border-left-color: var(--primary);">
            <strong>&ldquo;How good your design is and how well you can scale your system depends on the choice of database that you have used.&rdquo;</strong>
          </blockquote>

          <ul class="notes-bullet-list" style="margin-top: 1rem;">
            <li>Whether you are preparing for a <strong>System Design Interview</strong> or architecting a <strong>large-scale production system</strong>, choosing the right database is one of the highest-leverage engineering decisions you will ever make.</li>
            <li><strong>Functional vs. Non-Functional Requirements:</strong>
              <ul class="notes-sub-list">
                <li><strong>Functional Requirements (Features):</strong> Your database choice does <em>not</em> fundamentally prevent your functional requirements from working. You can build user authentication, an e-commerce catalog, or a checkout cart on top of MySQL, PostgreSQL, MongoDB, or Cassandra — the core business features will execute in all of them.</li>
                <li><strong>Non-Functional Requirements (Architecture Quality):</strong> However, your database selection <strong>heavily impacts</strong> your system's non-functional attributes: <strong>Scalability, Read/Write Latency, Availability, Fault Tolerance, ACID Consistency guarantees, and Operating Cost</strong>. A database poorly matched to your query pattern will bottleneck your entire architecture under traffic spikes.</li>
              </ul>
            </li>
          </ul>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 55.1 · Functional Logic vs Non-Functional Database Scale Impact</span>
              <span class="diagram-frame-tag">SAME FEATURES · DRAMATICALLY DIFFERENT SCALE &amp; LATENCY</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram contrasting Functional requirements handled in application code with Non-Functional constraints like latency, throughput, consistency, and scale ceiling strictly determined by database engine architecture">
                <!-- App Logic Block -->
                <rect x="20" y="25" width="260" height="200" rx="14" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="150" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">APPLICATION CODE LAYER</text>
                <text x="150" y="78" text-anchor="middle" class="svg-title">Functional Requirements</text>
                <rect x="36" y="94" width="228" height="116" rx="10" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="50" y="120" class="svg-node">✓ User Login &amp; Auth</text>
                <text x="50" y="145" class="svg-node">✓ Add Item to Cart</text>
                <text x="50" y="170" class="svg-node">✓ Checkout &amp; Pay</text>
                <text x="50" y="195" class="svg-sub" style="fill: var(--text-tertiary);">Code works identically on any DB engine</text>

                <!-- Arrow -->
                <path d="M 280 125 L 340 125" class="svg-arrow" stroke="var(--primary)"/>
                <polygon points="340,125 330,119 330,131" fill="var(--primary)"/>
                <text x="310" y="115" text-anchor="middle" class="svg-mono-xs">Hits Storage</text>

                <!-- Database Choice Block -->
                <rect x="345" y="25" width="515" height="200" rx="14" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                <text x="602" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">DATABASE ENGINE SELECTION</text>
                <text x="602" y="78" text-anchor="middle" class="svg-title">Non-Functional Constraints (Make or Break)</text>

                <g transform="translate(365, 95)">
                  <!-- Card 1 -->
                  <rect x="0" y="0" width="150" height="115" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="75" y="26" text-anchor="middle" class="svg-mono-xs" style="fill: var(--primary); font-weight: 700;">LATENCY &amp; IOPS</text>
                  <text x="75" y="52" text-anchor="middle" class="svg-node">Disk vs RAM</text>
                  <text x="75" y="72" text-anchor="middle" class="svg-sub">8ms Disk Read</text>
                  <text x="75" y="92" text-anchor="middle" class="svg-sub">vs 1ms In-Memory</text>

                  <!-- Card 2 -->
                  <rect x="162" y="0" width="150" height="115" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="237" y="26" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">ACID &amp; JOINS</text>
                  <text x="237" y="52" text-anchor="middle" class="svg-node">Consistency</text>
                  <text x="237" y="72" text-anchor="middle" class="svg-sub">Strict Money Debit</text>
                  <text x="237" y="92" text-anchor="middle" class="svg-sub">vs Eventual Sync</text>

                  <!-- Card 3 -->
                  <rect x="324" y="0" width="150" height="115" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="399" y="26" text-anchor="middle" class="svg-mono-xs" style="fill: var(--accent); font-weight: 700;">SCALE CEILING</text>
                  <text x="399" y="52" text-anchor="middle" class="svg-node">Throughput</text>
                  <text x="399" y="72" text-anchor="middle" class="svg-sub">10K QPS (RDBMS)</text>
                  <text x="399" y="92" text-anchor="middle" class="svg-sub">vs 1M+ QPS (NoSQL)</text>
                </g>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "55.2",
          title: "2. Three Key Factors That Determine Database Choice",
          content: `

          <p>When selecting a database for any tier of your architecture, evaluate these <strong>three fundamental pillars</strong>:</p>

          <div class="sub-card-grid-3" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Factor 01 · Data Format</div>
              <div class="sub-box__title">1. Structure of Data</div>
              <div class="sub-box__body">
                <strong>• Structured Data:</strong> Data organized with a <strong>fixed format / strict schema</strong> (e.g. relational tables with rigid rows &amp; columns).<br>
                <strong>• Unstructured / Semi-Structured Data:</strong> Data with <strong>no fixed format</strong>, no predefined model, or dynamic attributes (JSON docs, key-value blobs, columnar partitions).
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Factor 02 · Access Method</div>
              <div class="sub-box__title">2. Query Pattern</div>
              <div class="sub-box__body">
                How does your app read &amp; write?<br>
                <strong>• Relational Joins &amp; ACID:</strong> Combining tables (<code>JOIN users ON orders</code>) or atomic balance transfers → Pick <strong>SQL / RDBMS</strong>.<br>
                <strong>• Simple Key Lookup:</strong> <em>"Get me value for key X"</em> in sub-milliseconds → Pick <strong>Key-Value Store (Redis)</strong>.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Factor 03 · Data Volume &amp; QPS</div>
              <div class="sub-box__title">3. Amount of Scale</div>
              <div class="sub-box__body">
                <strong>• Small Scale:</strong> Few users, small data → <strong>PostgreSQL / MySQL</strong> (simple management &amp; ACID out of the box).<br>
                <strong>• Medium Scale:</strong> Millions of rows &amp; thousands of QPS → Still easily handled by an <strong>RDBMS with indexing &amp; read replicas</strong>.<br>
                <strong>• Massive Scale:</strong> Billions of records &amp; millions of QPS → Requires a distributed <strong>NoSQL database</strong>.
              </div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 55.2 · The 3 Database Selection Pillars: Structure, Query Pattern &amp; Scale Tier</span>
              <span class="diagram-frame-tag">ENGINEERING EVALUATION MATRIX</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 260" class="arch-svg" role="img" aria-label="Visual evaluation matrix showing the three pillars of database choice: Data Structure (Fixed schema vs Schemaless), Query Pattern (Complex Joins vs Key-Value), and Scale Ceiling (Small/Medium SQL vs Massive NoSQL)">
                <!-- Pillar 1 -->
                <rect x="20" y="20" width="260" height="220" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <rect x="36" y="36" width="228" height="32" rx="6" fill="var(--primary-bg)"/>
                <text x="150" y="57" text-anchor="middle" class="svg-mono-xs" style="fill: var(--primary); font-weight: 700;">PILLAR 1: DATA STRUCTURE</text>
                <rect x="36" y="80" width="228" height="64" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="50" y="104" class="svg-node">Fixed Schema (Tables)</text>
                <text x="50" y="126" class="svg-sub">Strict Rows &amp; Columns → RDBMS</text>
                <rect x="36" y="156" width="228" height="68" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="50" y="180" class="svg-node">Schemaless / Polymorphic</text>
                <text x="50" y="202" class="svg-sub">JSON Docs, Media Blobs → NoSQL</text>

                <!-- Pillar 2 -->
                <rect x="310" y="20" width="260" height="220" rx="12" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                <rect x="326" y="36" width="228" height="32" rx="6" fill="var(--accent-bg)"/>
                <text x="440" y="57" text-anchor="middle" class="svg-mono-xs" style="fill: var(--accent); font-weight: 700;">PILLAR 2: QUERY PATTERN</text>
                <rect x="326" y="80" width="228" height="64" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="340" y="104" class="svg-node">Relational JOINs &amp; ACID</text>
                <text x="340" y="126" class="svg-sub">Multi-table atomic transactions</text>
                <rect x="326" y="156" width="228" height="68" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="340" y="180" class="svg-node">Key-Value Point Lookup</text>
                <text x="340" y="202" class="svg-sub">GET key:id → 1ms response (Redis)</text>

                <!-- Pillar 3 -->
                <rect x="600" y="20" width="260" height="220" rx="12" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                <rect x="616" y="36" width="228" height="32" rx="6" fill="var(--success-bg)"/>
                <text x="730" y="57" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">PILLAR 3: SCALE CEILING</text>
                <rect x="616" y="80" width="228" height="64" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="630" y="104" class="svg-node">Small &amp; Medium Scale</text>
                <text x="630" y="126" class="svg-sub">Millions of records → SQL (PostgreSQL)</text>
                <rect x="616" y="156" width="228" height="68" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="630" y="180" class="svg-node">Massive Scale (Billions)</text>
                <text x="630" y="202" class="svg-sub">Petabytes &amp; 1M+ QPS → Cassandra</text>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 56: CACHING SOLUTIONS (REDIS & IN-MEMORY DATA STORES)
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-56-caching-solutions-redis",
      number: "56",
      shortLabel: "Caching & Redis",
      title: "Caching Solutions (Redis & In-Memory Data Stores)",
      summary: "Slashing Frequently Asked Data latency from 8ms down to 6ms, eliminating inter-service network hops between microservices (User Service to Inventory Service), and Redis Key-Value RAM store mechanics.",
      subtopicLabels: ["56.1 Latency Optimization (8ms vs 6ms)","56.2 Caching Remote Service Calls","56.3 Redis Key-Value Architecture"],
      diagramCount: 2,
      sections: [
        {
          num: "56.1",
          title: "1. Use Case 1 — Frequently Asked Data (Latency Optimization: 8ms vs 6ms)",
          content: `

          <div class="callout-highlight-box" style="border-left-color: var(--danger);">
            <div class="callout-highlight-tag" style="color: var(--danger);">THE PROBLEM: REPEATED DISK QUERIES WITHOUT CACHING (8 MS LATENCY)</div>
            <p style="margin-top: 0.5rem;">Suppose users repeatedly request the same piece of data (<strong>Frequently Asked Data</strong>) — such as a User Profile, Homepage Banners, or trending product details. Without caching, every request hits the primary disk database:</p>
            <ol class="notes-ordered-list" style="margin-top: 0.6rem;">
              <li><code>Client &rarr; Server</code>: Network travel = <strong>2 ms</strong></li>
              <li><code>Server &rarr; Database</code>: Query over internal network = <strong>2 ms</strong></li>
              <li><code>Database &rarr; Server</code>: Disk read &amp; return = <strong>2 ms</strong></li>
              <li><code>Server &rarr; Client</code>: Arranging &amp; returning HTTP response = <strong>2 ms</strong></li>
            </ol>
            <p style="margin-top: 0.6rem;"><strong>Total Round-Trip Latency:</strong> <code>2 + 2 + 2 + 2 = </code><strong>8 ms</strong>. When thousands of concurrent users arrive, repeated disk queries overwhelm the database and cause severe degradation.</p>
          </div>

          <div class="callout-highlight-box" style="border-left-color: var(--success); margin-top: 1rem;">
            <div class="callout-highlight-tag" style="color: var(--success);">THE SOLUTION: IN-MEMORY CACHE (REDUCED TO 6 MS!)</div>
            <p style="margin-top: 0.5rem;">We store a copy of the Frequently Asked Data locally in an <strong>in-memory Cache</strong> (stored in <strong>RAM</strong> instead of spinning disk/SSD):</p>
            <ul class="notes-bullet-list" style="margin-top: 0.6rem;">
              <li><strong>Step 1 (First Request / Cache Miss):</strong> Client asks Server (2 ms). Server fetches from DB (2 ms + 2 ms) and immediately <strong>stores a copy in the Cache</strong>, then returns to Client (2 ms). Total = 8 ms for the initial fetch.</li>
              <li><strong>Step 2 (Subsequent Requests / Cache Hit):</strong> Every subsequent request skips the database entirely:
                <div class="notes-mono-block" style="margin: 0.5rem 0;">Client &rarr; Server (2 ms) &rarr; Cache RAM Read (1 ms) &rarr; Cache to Server (1 ms) &rarr; Server to Client (2 ms) = 6 ms!</div>
              </li>
              <li><strong>Why Cache is Faster:</strong> RAM read access is measured in <strong>nanoseconds</strong> compared to milliseconds for disk I/O. The database is shielded from repetitive traffic, and user response time drops by 25%.</li>
            </ul>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 56.1 · Latency Benchmark: 8ms Without Cache vs 6ms With In-Memory Cache</span>
              <span class="diagram-frame-tag">25% LATENCY REDUCTION · 0% DATABASE LOAD ON CACHE HITS</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Timeline and architecture diagram comparing 8ms request without cache against 6ms request with in-memory Redis cache">
                <!-- TOP: Without Cache (8ms) -->
                <rect x="20" y="20" width="840" height="95" rx="10" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.2"/>
                <text x="35" y="42" class="svg-mono-xs" style="fill: var(--danger); font-weight: 700;">WITHOUT CACHE · 4 HOPS · TOTAL: 8 MS</text>

                <!-- Flow items -->
                <rect x="40" y="52" width="100" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="90" y="74" text-anchor="middle" class="svg-node">Client</text>
                <text x="90" y="90" text-anchor="middle" class="svg-sub">User Request</text>

                <path d="M 140 76 L 250 76" class="svg-arrow" stroke="var(--danger)"/>
                <text x="195" y="68" text-anchor="middle" class="svg-mono-xs">2 ms</text>

                <rect x="250" y="52" width="130" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="315" y="74" text-anchor="middle" class="svg-node">App Server</text>
                <text x="315" y="90" text-anchor="middle" class="svg-sub">API Endpoint</text>

                <path d="M 380 76 L 500 76" class="svg-arrow" stroke="var(--danger)"/>
                <text x="440" y="68" text-anchor="middle" class="svg-mono-xs">2 ms (Query)</text>

                <rect x="500" y="52" width="150" height="48" rx="6" fill="var(--bg-surface)" stroke="var(--danger)"/>
                <text x="575" y="74" text-anchor="middle" class="svg-node">Database (Disk)</text>
                <text x="575" y="90" text-anchor="middle" class="svg-sub">Heavy Disk I/O</text>

                <path d="M 650 76 L 730 76" class="svg-arrow" stroke="var(--danger)"/>
                <text x="690" y="68" text-anchor="middle" class="svg-mono-xs">2 ms (Data)</text>

                <rect x="730" y="52" width="110" height="48" rx="6" fill="var(--danger-bg)" stroke="var(--danger)"/>
                <text x="785" y="74" text-anchor="middle" class="svg-node" style="fill: var(--danger); font-weight: 700;">8 ms Total</text>
                <text x="785" y="90" text-anchor="middle" class="svg-sub">Slow &amp; Overloaded</text>

                <!-- BOTTOM: With Cache (6ms) -->
                <rect x="20" y="130" width="840" height="100" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.2"/>
                <text x="35" y="152" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">WITH REDIS CACHE · FAST RAM LOOKUP · TOTAL: 6 MS (SAVE 25%)</text>

                <rect x="40" y="162" width="100" height="52" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="90" y="186" text-anchor="middle" class="svg-node">Client</text>
                <text x="90" y="202" text-anchor="middle" class="svg-sub">User Request</text>

                <path d="M 140 188 L 250 188" class="svg-arrow" stroke="var(--success)"/>
                <text x="195" y="180" text-anchor="middle" class="svg-mono-xs">2 ms</text>

                <rect x="250" y="162" width="130" height="52" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="315" y="186" text-anchor="middle" class="svg-node">App Server</text>
                <text x="315" y="202" text-anchor="middle" class="svg-sub">Checks Cache</text>

                <path d="M 380 188 L 500 188" class="svg-arrow" stroke="var(--success)"/>
                <text x="440" y="180" text-anchor="middle" class="svg-mono-xs">1 ms (RAM Get)</text>

                <rect x="500" y="162" width="150" height="52" rx="6" fill="var(--bg-surface)" stroke="var(--success)" stroke-width="1.5"/>
                <text x="575" y="184" text-anchor="middle" class="svg-node" style="fill: var(--success);">Redis Cache (RAM)</text>
                <text x="575" y="202" text-anchor="middle" class="svg-mono-xs">Key-Value Sub-ms</text>

                <path d="M 650 188 L 730 188" class="svg-arrow" stroke="var(--success)"/>
                <text x="690" y="180" text-anchor="middle" class="svg-mono-xs">1 ms + 2 ms</text>

                <rect x="730" y="162" width="110" height="52" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                <text x="785" y="184" text-anchor="middle" class="svg-node" style="fill: var(--success); font-weight: 700;">6 ms Total</text>
                <text x="785" y="202" text-anchor="middle" class="svg-sub">25% Faster ✓</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "56.2",
          title: "2. Use Case 2 — Caching Remote Service Calls (Microservices)",
          content: `

          <ul class="notes-bullet-list">
            <li><strong>The Microservices Inter-Service Problem:</strong>
              <ul class="notes-sub-list">
                <li>Suppose you are building an Amazon-like e-commerce platform with microservices: <strong>User Service</strong> and <strong>Inventory Service</strong> (which tracks real-time item stock).</li>
                <li>Whenever a user views an item or proceeds through a workflow, the <strong>User Service</strong> must call the <strong>Inventory Service</strong> over the network (<code>2 ms</code> request + <code>2 ms</code> response = <code>4 ms</code> inter-service round trip).</li>
                <li>Making repetitive remote RPC/REST network calls to another microservice continuously adds network overhead, serializes/deserializes JSON, and ties up connection pools.</li>
              </ul>
            </li>
            <li><strong>The Caching Solution:</strong>
              <ul class="notes-sub-list">
                <li>We <strong>cache the Inventory Service response</strong> inside Redis at the shared caching layer or within the User Service boundary.</li>
                <li>Now, instead of dispatching a slow remote network call across services every single time, the User Service reads the cached product inventory response locally from Redis in sub-milliseconds and fulfills the user request instantly.</li>
              </ul>
            </li>
          </ul>
        
          `
        },
        {
          num: "56.3",
          title: "3. Redis as a Caching Solution (Key-Value RAM Store)",
          content: `

          <p>For high-performance caching, the global standard is <strong>Redis (Remote Dictionary Server)</strong>, an in-memory <strong>Key-Value data store</strong>.</p>

          <div class="sub-card-grid-2" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Storage Primitive</div>
              <div class="sub-box__title">Key-Value Structure</div>
              <div class="sub-box__body">
                <strong>• Key:</strong> A unique string identifier (e.g., <code>user:1082</code> or <code>item:4091:stock</code>).<br>
                <strong>• Value:</strong> The stored payload (e.g., serialized JSON User Profile, integer stock count, or string hash).
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Memory vs Disk</div>
              <div class="sub-box__title">In-Memory RAM Engine</div>
              <div class="sub-box__body">
                Redis resides entirely in <strong>RAM (Random Access Memory)</strong>. Unlike traditional databases that seek rotating disk platters or SSD flash sectors, Redis executes O(1) memory pointer lookups in microseconds.
              </div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 56.2 · Microservices Inter-Service Caching vs Remote Network Calls</span>
              <span class="diagram-frame-tag">ELIMINATING REMOTE RPC HOPS</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Diagram showing User Service reading cached product inventory from Redis RAM instead of making slow repeated 4ms remote RPC calls to Inventory Service">
                <!-- User Service -->
                <rect x="30" y="30" width="220" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="140" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">MICROSERVICE A</text>
                <text x="140" y="82" text-anchor="middle" class="svg-title">User Service</text>
                <rect x="50" y="105" width="180" height="95" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="140" y="132" text-anchor="middle" class="svg-node">Needs Product Stock</text>
                <text x="140" y="152" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">1. Checks Redis first</text>
                <text x="140" y="172" text-anchor="middle" class="svg-sub">Key: stock:prod_99</text>

                <!-- Middle: Redis Cache -->
                <rect x="330" y="30" width="220" height="190" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                <text x="440" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">IN-MEMORY CACHE</text>
                <text x="440" y="82" text-anchor="middle" class="svg-title">Redis RAM Store</text>
                <rect x="350" y="105" width="180" height="95" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                <text x="440" y="132" text-anchor="middle" class="svg-mono-xs" style="fill: var(--primary); font-weight: 700;">KEY: stock:prod_99</text>
                <text x="440" y="154" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">VALUE: 45 units</text>
                <text x="440" y="180" text-anchor="middle" class="svg-sub">&lt; 1 ms RAM Lookup ✓</text>

                <!-- Right: Remote Inventory Service -->
                <rect x="630" y="30" width="220" height="190" rx="12" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.5"/>
                <text x="740" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">MICROSERVICE B</text>
                <text x="740" y="82" text-anchor="middle" class="svg-title">Inventory Service</text>
                <rect x="650" y="105" width="180" height="95" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                <text x="740" y="132" text-anchor="middle" class="svg-node">Remote Network RPC</text>
                <text x="740" y="152" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">2 ms Req + 2 ms Res</text>
                <text x="740" y="174" text-anchor="middle" class="svg-sub">Skipped on Cache Hit ✕</text>

                <!-- Arrows -->
                <path d="M 250 145 L 330 145" class="svg-arrow" stroke="var(--success)"/>
                <path d="M 330 160 L 250 160" class="svg-arrow" stroke="var(--success)"/>
                <path d="M 550 152 L 630 152" class="svg-arrow-dashed" stroke="var(--danger)"/>
                <text x="590" y="142" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Only on Miss</text>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 57: BLOB STORAGE (AWS S3) & CDN FOR STATIC DATA
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-57-blob-storage-cdn",
      number: "57",
      shortLabel: "Blob & CDN",
      title: "Blob Storage (AWS S3) & CDN for Static Data",
      summary: "Decoupling heavy static media (product images, 4K videos, audio tracks) from databases into AWS S3 Object Storage, and eliminating cross-geography latency via a global CDN Edge hierarchy with India → Japan → USA fallback.",
      subtopicLabels: ["57.1 AWS S3 Blob Storage","57.2 Cross-Geography Latency","57.3 Multi-Tier CDN Edge Fallback"],
      diagramCount: 2,
      sections: [
        {
          num: "57.1",
          title: "1. Storing Static Data in Blob Storage (AWS S3)",
          content: `

          <ul class="notes-bullet-list">
            <li><strong>What is Static Data?</strong> Large, immutable or rarely modified media files such as <strong>Images, Videos, and Audio Files</strong>:
              <ul class="notes-sub-list">
                <li><strong>Amazon / E-Commerce:</strong> Hundreds of millions of product photos, 360-degree interactive views, and unboxing videos.</li>
                <li><strong>Netflix / YouTube / Spotify:</strong> Terabytes and petabytes of movie streams, 4K web series episodes, and high-fidelity audio tracks.</li>
              </ul>
            </li>
            <li><strong>Why NOT Store Static Media in a Relational Database?</strong>
              <ul class="notes-sub-list">
                <li>Storing multi-megabyte media files as binary columns (<code>BLOB</code>) inside MySQL or PostgreSQL rapidly bloats database storage, degrades backup/restore operations, chokes database memory buffer pools, and cripples read/write performance.</li>
              </ul>
            </li>
            <li><strong>Where We Store It — Object / Blob Storage:</strong>
              <ul class="notes-sub-list">
                <li>We decouple static media into dedicated <strong>Blob Storage</strong>, where data is stored in the form of discrete <strong>Objects</strong> accessible via unique HTTP URLs.</li>
                <li><strong>Industry Standard:</strong> <strong>AWS S3 (Simple Storage Service)</strong> — engineered for 99.999999999% (11 9's) durability, virtually infinite scale, and cost-effective tiered storage.</li>
              </ul>
            </li>
          </ul>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 57.1 · Decoupled Media Architecture: Database Metadata vs AWS S3 Object Storage</span>
              <span class="diagram-frame-tag">BLOB DECOUPLING PATTERN</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing database storing small JSON metadata and S3 image URL while heavy 5MB image is stored as an object in AWS S3">
                <!-- User Upload -->
                <rect x="25" y="30" width="180" height="170" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="115" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">CLIENT UPLOAD</text>
                <text x="115" y="82" text-anchor="middle" class="svg-title">Product Creator</text>
                <rect x="40" y="100" width="150" height="85" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="115" y="125" text-anchor="middle" class="svg-node">Product Image</text>
                <text x="115" y="145" text-anchor="middle" class="svg-mono-xs">shoe_photo.jpg (5 MB)</text>
                <text x="115" y="168" text-anchor="middle" class="svg-sub">Title, Price, Specs</text>

                <!-- Arrows -->
                <path d="M 205 105 L 340 75" class="svg-arrow" stroke="var(--primary)"/>
                <path d="M 205 145 L 340 165" class="svg-arrow" stroke="var(--success)"/>

                <!-- Top: Database Metadata -->
                <rect x="340" y="25" width="515" height="85" rx="10" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="360" y="50" class="svg-node" style="fill: var(--primary); font-weight: 700;">Relational Database (PostgreSQL / MySQL) — Metadata Only</text>
                <text x="360" y="72" class="svg-mono-xs">id: 101 | title: "Air Zoom" | price: $120 | image_url: "https://s3.aws.com/shoes/101.jpg"</text>
                <text x="360" y="92" class="svg-sub" style="fill: var(--text-tertiary);">Lightweight table row (&lt; 1 KB) — zero database bloat</text>

                <!-- Bottom: AWS S3 Object Store -->
                <rect x="340" y="125" width="515" height="85" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                <text x="360" y="150" class="svg-node" style="fill: var(--success); font-weight: 700;">AWS S3 (Simple Storage Service) — Dedicated Blob Object Store</text>
                <text x="360" y="172" class="svg-mono-xs">s3://bucket-ecommerce/shoes/101.jpg (Raw 5 MB binary object)</text>
                <text x="360" y="192" class="svg-sub" style="fill: var(--success);">11 9's durability · Virtually unlimited storage scale · Direct HTTP streaming</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "57.2",
          title: "2. Solving Global Latency With a CDN (Content Delivery Network)",
          content: `

          <div class="callout-highlight-box" style="border-left-color: var(--danger);">
            <div class="callout-highlight-tag" style="color: var(--danger);">THE PROBLEM: CROSS-GEOGRAPHY TRANS-OCEANIC LATENCY</div>
            <p style="margin-top: 0.5rem;">Suppose you build a Netflix-like streaming platform and host your <strong>Primary AWS S3 Storage in the USA (us-east-1)</strong>:</p>
            <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
              <li>Now, massive viewer traffic begins arriving from <strong>India</strong> streaming HD movies and web series.</li>
              <li>Because the media resides in USA data centers, every packet must travel thousands of miles through undersea fiber-optic cables and dozens of international router hops.</li>
              <li><strong>Result:</strong> High latency (250ms+ round trips), video buffering, dropped frames, and poor user retention.</li>
            </ul>
          </div>

          <div class="callout-highlight-box" style="border-left-color: var(--success); margin-top: 1rem;">
            <div class="callout-highlight-tag" style="color: var(--success);">THE SOLUTION: S3 STORAGE + GLOBAL CDN WITH REGIONAL FALLBACK</div>
            <p style="margin-top: 0.5rem;">We combine our <strong>Primary S3 Storage</strong> with a <strong>CDN (Content Delivery Network)</strong> — a distributed network of edge Point-of-Presence (PoP) proxy servers located in major cities worldwide (India, Japan, France, Germany, USA):</p>
            <ol class="notes-ordered-list" style="margin-top: 0.6rem;">
              <li><strong>Step 1 (Edge Serve):</strong> When a user in India requests a movie, the request hits the <strong>India CDN Edge</strong> in Mumbai/Delhi (served in &lt; 15 ms).</li>
              <li><strong>Step 2 (Regional Edge Fallback):</strong> If the requested movie is <strong>not available (Cache Miss)</strong> in the India CDN edge, the request cascades to the <strong>nearest Regional CDN PoP (e.g. Japan CDN)</strong>.</li>
              <li><strong>Step 3 (Origin Fallback):</strong> Only if the asset is missing across all regional edge caches does the request reach the <strong>Primary S3 Origin in the USA</strong>. The file is fetched, served to the user, and cached at the edge for all future Indian viewers.</li>
            </ol>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 57.2 · Global CDN Edge Hierarchy &amp; S3 Origin Fallback (India → Japan → USA)</span>
              <span class="diagram-frame-tag">MULTI-TIER EDGE CACHE ARCHITECTURE</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Architecture diagram showing Indian user requesting media from local India CDN edge (15ms), falling back to Japan regional CDN on miss, and finally fetching from USA S3 origin">
                <!-- User in India -->
                <rect x="20" y="35" width="160" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="100" y="62" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">CLIENT REQUEST</text>
                <text x="100" y="86" text-anchor="middle" class="svg-title">User in India</text>
                <rect x="35" y="105" width="130" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="100" y="132" text-anchor="middle" class="svg-node">Requests Movie</text>
                <text x="100" y="152" text-anchor="middle" class="svg-mono-xs">"Stranger Things"</text>
                <text x="100" y="174" text-anchor="middle" class="svg-sub">Low latency goal</text>

                <!-- India CDN Edge -->
                <rect x="230" y="35" width="180" height="180" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                <text x="320" y="62" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STEP 1: LOCAL EDGE</text>
                <text x="320" y="86" text-anchor="middle" class="svg-title">India CDN (Mumbai)</text>
                <rect x="245" y="105" width="150" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                <text x="320" y="132" text-anchor="middle" class="svg-node">Edge Cache Hit</text>
                <text x="320" y="152" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">&lt; 15 ms Latency ✓</text>
                <text x="320" y="174" text-anchor="middle" class="svg-sub">90%+ traffic served here</text>

                <!-- Japan CDN Regional -->
                <rect x="460" y="35" width="180" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                <text x="550" y="62" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">STEP 2: CACHE MISS</text>
                <text x="550" y="86" text-anchor="middle" class="svg-title">Japan Regional CDN</text>
                <rect x="475" y="105" width="150" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--warning)"/>
                <text x="550" y="132" text-anchor="middle" class="svg-node">Nearest Regional PoP</text>
                <text x="550" y="152" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning);">~60 ms Latency</text>
                <text x="550" y="174" text-anchor="middle" class="svg-sub">Regional shield tier</text>

                <!-- USA S3 Origin -->
                <rect x="690" y="35" width="170" height="180" rx="10" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.5"/>
                <text x="775" y="62" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">STEP 3: ORIGIN</text>
                <text x="775" y="86" text-anchor="middle" class="svg-title">USA AWS S3 Bucket</text>
                <rect x="705" y="105" width="140" height="90" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                <text x="775" y="132" text-anchor="middle" class="svg-node">Primary Storage</text>
                <text x="775" y="152" text-anchor="middle" class="svg-mono-xs">250 ms+ (Origin)</text>
                <text x="775" y="174" text-anchor="middle" class="svg-sub">Only on cold start miss</text>

                <!-- Connecting Arrows -->
                <path d="M 180 145 L 230 145" class="svg-arrow" stroke="var(--primary)"/>
                <path d="M 410 145 L 460 145" class="svg-arrow-dashed" stroke="var(--warning)"/>
                <path d="M 640 145 L 690 145" class="svg-arrow-dashed" stroke="var(--danger)"/>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 58: TEXT SEARCH ENGINES (ELASTICSEARCH) & DATA WAREHOUSES
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-58-elasticsearch-data-warehouse",
      number: "58",
      shortLabel: "Elasticsearch & DWH",
      title: "Text Search Engines (Elasticsearch) & Data Warehouses",
      summary: "Empowering fast e-commerce search with Apache Lucene Inverted Indexes, Fuzzy Searching (typo tolerance for 'Protein'), and prefix Autocomplete, why Elasticsearch is NOT a source of truth for live stock availability, and OLAP Data Warehouses for company-wide analytics.",
      subtopicLabels: ["58.1 Fuzzy Search & Autocomplete","58.2 ES vs Live Database (Source of Truth)","58.3 OLAP Data Warehouses"],
      diagramCount: 2,
      sections: [
        {
          num: "58.1",
          title: "1. Implementing Search Functionality With Elasticsearch",
          content: `

          <ul class="notes-bullet-list">
            <li>In an e-commerce platform like <strong>Amazon</strong>, users search millions of catalog items using <strong>Product Name, Brand, Category, or description keywords</strong>.</li>
            <li>Relational databases fail miserably at full-text search: running <code>LIKE '%protein%'</code> forces full-table disk scans that collapse under concurrent queries.</li>
            <li>To enable lightning-fast text search, we deploy an <strong>Elasticsearch Cluster</strong> (built on the open-source <strong>Apache Lucene</strong> search engine library).</li>
            <li><strong>Two Killer Capabilities Provided by Elasticsearch:</strong>
              <ul class="notes-sub-list">
                <li><strong>1. Fuzzy Searching (Typo Tolerance):</strong>
                  Suppose a user wants to search for <strong>&ldquo;Protein&rdquo;</strong> (<code>P-R-O-T-E-I-N</code>), but accidentally mistypes it (e.g. replacing &lsquo;I&rsquo; with &lsquo;E&rsquo; as <em>&ldquo;Protean&rdquo;</em>). Using Lucene's Levenshtein distance matching, Elasticsearch understands the user's intent and returns all <strong>Protein-related items</strong>.
                </li>
                <li><strong>2. Autocompletion &amp; Prefix Suggestion:</strong>
                  As soon as a shopper types the first few letters (e.g., <code>PROT</code>), Elasticsearch queries edge n-grams in its inverted index to instantly suggest <code>Protein Powder</code>, <code>Protein Bar</code>, and <code>Protein Shake</code>.
                </li>
              </ul>
            </li>
            <li><strong>How New Products Are Indexed:</strong> Whenever a new product is added to the catalog (e.g., <strong>Pintola Peanut Butter</strong>), an event publishes the product metadata into the Elasticsearch Cluster so it is instantly searchable.</li>
          </ul>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 58.1 · Elasticsearch Inverted Index, Fuzzy Typo Matching &amp; Prefix Autocomplete</span>
              <span class="diagram-frame-tag">APACHE LUCENE INVERTED INDEX ENGINE</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Architecture diagram showing user typing misspelled keyword 'Protean' into search bar, and Elasticsearch Lucene Inverted Index matching it via Levenshtein fuzzy distance and suggesting autocompletions in milliseconds">
                <!-- User Search Bar -->
                <rect x="25" y="30" width="220" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="135" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">CLIENT SEARCH INPUT</text>
                <text x="135" y="82" text-anchor="middle" class="svg-title">User Search Query</text>
                <rect x="40" y="100" width="190" height="100" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="55" y="125" class="svg-mono-xs" style="fill: var(--danger); font-weight: 700;">Typo: "Protean"</text>
                <text x="55" y="148" class="svg-mono-xs" style="fill: var(--primary);">Prefix: "PROT..."</text>
                <text x="55" y="172" class="svg-sub" style="fill: var(--text-tertiary);">Hits /api/v1/search</text>

                <!-- Arrows -->
                <path d="M 245 130 L 330 130" class="svg-arrow" stroke="var(--primary)"/>

                <!-- Elasticsearch Cluster -->
                <rect x="330" y="30" width="525" height="190" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.8"/>
                <text x="592" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--accent);">TEXT SEARCH CLUSTER (APACHE LUCENE)</text>
                <text x="592" y="82" text-anchor="middle" class="svg-title">Elasticsearch Inverted Index &amp; Fuzzy Matcher</text>

                <g transform="translate(350, 95)">
                  <!-- Subcard 1 -->
                  <rect x="0" y="0" width="235" height="105" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                  <text x="117" y="24" text-anchor="middle" class="svg-mono-xs" style="fill: var(--accent); font-weight: 700;">FUZZY MATCHING (TYPO TOLERANT)</text>
                  <text x="117" y="48" text-anchor="middle" class="svg-node">"Protean" &rarr; "Protein" ✓</text>
                  <text x="117" y="70" text-anchor="middle" class="svg-sub">Levenshtein edit distance = 1</text>
                  <text x="117" y="90" text-anchor="middle" class="svg-sub">Returns all Whey / Plant Protein</text>

                  <!-- Subcard 2 -->
                  <rect x="250" y="0" width="235" height="105" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                  <text x="367" y="24" text-anchor="middle" class="svg-mono-xs" style="fill: var(--accent); font-weight: 700;">PREFIX AUTOCOMPLETION</text>
                  <text x="367" y="48" text-anchor="middle" class="svg-node">"PROT" &rarr; Suggestions</text>
                  <text x="367" y="70" text-anchor="middle" class="svg-mono-xs" style="fill: var(--text-secondary);">• Protein Bars</text>
                  <text x="367" y="90" text-anchor="middle" class="svg-mono-xs" style="fill: var(--text-secondary);">• Protein Powder Whey</text>
                </g>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "58.2",
          title: "2. Elasticsearch vs. Actual Database (Not a Source of Truth!)",
          content: `

          <p>A crucial system design principle: <strong>Elasticsearch is a specialized search index, NOT a primary source of truth!</strong></p>

          <div class="sub-card-grid-2" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Durability Guarantees</div>
              <div class="sub-box__title">Primary DB vs Elasticsearch</div>
              <div class="sub-box__body">
                <strong>• Primary Database (RDBMS/NoSQL):</strong> Strictly guarantees data durability via Write-Ahead Logs (WAL), replication, and fsync transactions.<br>
                <strong>• Elasticsearch:</strong> Focuses on inverted index searching and aggregation. It does <strong>not</strong> give a strict guarantee against data loss under network partitions or node crashes.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Live State Integrity</div>
              <div class="sub-box__title">In Stock vs Out of Stock</div>
              <div class="sub-box__body">
                When a user searches for <em>&ldquo;Pintola Peanut Butter&rdquo;</em>, Elasticsearch returns matching product records.<br>
                However, Elasticsearch <strong>CANNOT tell you if it is In Stock or Out of Stock in real-time</strong>! The system must query the <strong>Inventory Service</strong> and its primary database for live inventory levels.
              </div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 58.2 · Search Engine vs Source of Truth: Elasticsearch Query &rarr; Inventory DB Stock Verification</span>
              <span class="diagram-frame-tag">SEPARATION OF DISCOVERY VS INVENTORY INTEGRITY</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing client searching for product in Elasticsearch for discovery, followed by API Gateway validating real-time stock availability against the Inventory Service's transactional database">
                <!-- User Search -->
                <rect x="20" y="30" width="160" height="170" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="100" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">STEP 1: DISCOVER</text>
                <text x="100" y="82" text-anchor="middle" class="svg-title">User Search</text>
                <rect x="35" y="100" width="130" height="85" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="100" y="125" text-anchor="middle" class="svg-node">"Pintola Butter"</text>
                <text x="100" y="145" text-anchor="middle" class="svg-mono-xs">Keyword Query</text>
                <text x="100" y="168" text-anchor="middle" class="svg-sub">Needs Matching IDs</text>

                <!-- Elasticsearch Node -->
                <rect x="240" y="30" width="260" height="170" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.5"/>
                <text x="370" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--accent);">SEARCH INDEX ONLY</text>
                <text x="370" y="82" text-anchor="middle" class="svg-title">Elasticsearch Cluster</text>
                <rect x="255" y="100" width="230" height="85" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="370" y="124" text-anchor="middle" class="svg-node">Returns Product IDs</text>
                <text x="370" y="145" text-anchor="middle" class="svg-mono-xs">[prod_501, prod_502]</text>
                <text x="370" y="168" text-anchor="middle" class="svg-sub" style="fill: var(--danger); font-weight: 700;">NOT Source of Truth for Stock ✕</text>

                <!-- Arrows -->
                <path d="M 180 115 L 240 115" class="svg-arrow" stroke="var(--primary)"/>
                <path d="M 500 115 L 580 115" class="svg-arrow" stroke="var(--success)"/>

                <!-- Inventory Service (Source of Truth) -->
                <rect x="580" y="30" width="280" height="170" rx="10" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                <text x="720" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">STEP 2: SOURCE OF TRUTH</text>
                <text x="720" y="82" text-anchor="middle" class="svg-title">Inventory Service &amp; Database</text>
                <rect x="595" y="100" width="250" height="85" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                <text x="720" y="124" text-anchor="middle" class="svg-node" style="fill: var(--success); font-weight: 700;">Live Stock Verification ✓</text>
                <text x="720" y="145" text-anchor="middle" class="svg-mono-xs">prod_501: 12 Units Left (In Stock)</text>
                <text x="720" y="168" text-anchor="middle" class="svg-sub">Guaranteed ACID transactional count</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "58.3",
          title: "3. Data Warehouse (Analytics & Large-Scale Reporting)",
          content: `

          <div class="callout-highlight-box" style="border-left-color: var(--accent);">
            <div class="callout-highlight-tag" style="color: var(--accent);">OLAP DATA WAREHOUSE (SNOWFLAKE, BIGQUERY, REDSHIFT)</div>
            <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
              <li><strong>When to Use:</strong> Whenever you need to run business intelligence, cohort metrics, revenue aggregations, and executive reports across <strong>all historical and operational data across the company</strong>.</li>
              <li><strong>What It Is:</strong> A <strong>Data Warehouse</strong> is a large, columnar database where you dump copies of all transactional and event data (via periodic ETL/ELT pipelines).</li>
              <li><strong>OLTP vs. OLAP Separation:</strong> Running heavy analytical queries with millions of row scans on your live <strong>OLTP (Online Transaction Processing) database</strong> would lock tables and crash live customer checkouts. Instead, analysts run heavy analytical queries exclusively against the <strong>OLAP (Online Analytical Processing) Data Warehouse</strong>.</li>
            </ul>
          </div>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 59: SQL VS. NOSQL DECISION FRAMEWORK & REAL-WORLD HYBRID ARCHITECTURE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-59-sql-vs-nosql-hybrid",
      number: "59",
      shortLabel: "SQL vs NoSQL Hybrid",
      title: "SQL vs. NoSQL Decision Framework & Real-World Hybrid Architecture",
      summary: "The step-by-step decision framework (Structured ACID RDBMS vs Columnar Cassandra for ever-growing data vs Document MongoDB for polymorphic cart attributes), and Amazon's Order Service hybrid architecture (Live Orders in SQL + Cron + Cassandra Archive).",
      subtopicLabels: ["59.1 SQL vs NoSQL Decision Tree","59.2 Columnar vs Document NoSQL","59.3 Amazon Order Service Hybrid Architecture"],
      diagramCount: 2,
      sections: [
        {
          num: "59.1",
          title: "1. Step-by-Step Decision Framework: SQL vs. NoSQL",
          content: `

          <div class="sub-card-grid-2" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Path A · Structured Data</div>
              <div class="sub-box__title">Fixed Format / Rows &amp; Columns</div>
              <div class="sub-box__body">
                <strong>Question:</strong> <em>Do you need strict ACID properties (Atomicity, Consistency, Isolation, Durability) or financial transactions?</em><br>
                <strong>• Example (Payment Service):</strong> User A sends money to User B. Money debited from A <strong>must</strong> be credited to B — it must never happen that money is lost mid-flight.<br>
                <strong>&rarr; If YES:</strong> Pick an <strong>RDBMS / SQL Database</strong> (PostgreSQL, MySQL).<br>
                <strong>&rarr; If NO:</strong> You can use <strong>either SQL or NoSQL</strong>.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Path B · Unstructured Data</div>
              <div class="sub-box__title">No Fixed Schema / Predefined Model</div>
              <div class="sub-box__body">
                Choose between two primary NoSQL database engines:<br>
                <strong>1. Columnar Database (e.g. Apache Cassandra):</strong> Finite set of queries, massive data volume, and <strong>ever-increasing historical data</strong> over time.<br>
                <strong>2. Document Database (e.g. MongoDB):</strong> Wide variety of queries, nested documents, and <strong>heterogeneous polymorphic attributes</strong> across items (e.g. Shopping Cart).
              </div>
            </div>
          </div>

          <div class="callout-highlight-box" style="border-left-color: var(--primary); margin-top: 1rem;">
            <div class="callout-highlight-tag" style="color: var(--primary);">SHOPPING CART EXAMPLE: WHY DOCUMENT DB (MONGODB) WINS FOR POLYMORPHIC ITEMS</div>
            <p style="margin-top: 0.5rem;">Suppose you build an Amazon or Swiggy Cart Service where users add completely diverse items into the same cart:</p>
            <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
              <li><strong>Shirt:</strong> <code>Shoulder Width</code>, <code>Chest Size</code>, <code>Fabric</code>, <code>Sleeve Length</code></li>
              <li><strong>Smart TV:</strong> <code>Screen Size (55")</code>, <code>Resolution (4K)</code>, <code>HDMI Ports</code>, <code>Refresh Rate (120Hz)</code></li>
              <li><strong>iPhone:</strong> <code>Storage (256GB)</code>, <code>Color (Titanium)</code>, <code>Carrier Lock</code></li>
            </ul>
            <p style="margin-top: 0.5rem;">A rigid relational table would require hundreds of sparse <code>NULL</code> columns. A <strong>Document DB (MongoDB)</strong> stores each item as a self-contained BSON/JSON document, allowing every key to possess completely different attributes naturally.</p>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 59.1 · Complete Decision Tree: SQL (RDBMS) vs Columnar (Cassandra) vs Document (MongoDB)</span>
              <span class="diagram-frame-tag">ARCHITECTURAL SELECTION ROADMAP</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 270" class="arch-svg" role="img" aria-label="Decision tree evaluating Structured vs Unstructured data, ACID transactions, finite queries, and polymorphic cart attributes to select between MySQL PostgreSQL, Cassandra, or MongoDB">
                <!-- Root Node -->
                <rect x="330" y="15" width="220" height="45" rx="8" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="1.8"/>
                <text x="440" y="35" text-anchor="middle" class="svg-node" style="font-weight: 700;">Data Structure Evaluation</text>
                <text x="440" y="50" text-anchor="middle" class="svg-mono-xs">Structured vs Unstructured?</text>

                <!-- Branch Left: Structured -->
                <path d="M 330 37 L 160 37 L 160 85" class="svg-arrow" stroke="var(--primary)"/>
                <text x="235" y="30" text-anchor="middle" class="svg-mono-xs">Structured</text>

                <rect x="50" y="85" width="220" height="50" rx="8" fill="var(--bg-subsection)" stroke="var(--warning)"/>
                <text x="160" y="106" text-anchor="middle" class="svg-node">Need ACID / Financial?</text>
                <text x="160" y="124" text-anchor="middle" class="svg-sub">Strict transaction guarantees</text>

                <!-- Left Outcomes -->
                <path d="M 110 135 L 70 175" class="svg-arrow" stroke="var(--success)"/>
                <text x="75" y="155" class="svg-mono-xs" style="fill: var(--success);">YES</text>
                <rect x="10" y="175" width="130" height="75" rx="8" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.5"/>
                <text x="75" y="200" text-anchor="middle" class="svg-node" style="fill: var(--success); font-weight: 700;">SQL / RDBMS</text>
                <text x="75" y="220" text-anchor="middle" class="svg-mono-xs">PostgreSQL / MySQL</text>
                <text x="75" y="238" text-anchor="middle" class="svg-sub">ACID Transactions</text>

                <path d="M 210 135 L 240 175" class="svg-arrow" stroke="var(--text-tertiary)"/>
                <text x="240" y="155" class="svg-mono-xs" style="fill: var(--text-tertiary);">NO</text>
                <rect x="160" y="175" width="140" height="75" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="230" y="200" text-anchor="middle" class="svg-node">SQL or NoSQL</text>
                <text x="230" y="220" text-anchor="middle" class="svg-sub">Either engine works</text>
                <text x="230" y="238" text-anchor="middle" class="svg-mono-xs">Pick team comfort</text>

                <!-- Branch Right: Unstructured -->
                <path d="M 550 37 L 720 37 L 720 85" class="svg-arrow" stroke="var(--accent)"/>
                <text x="645" y="30" text-anchor="middle" class="svg-mono-xs">Unstructured</text>

                <rect x="610" y="85" width="220" height="50" rx="8" fill="var(--bg-subsection)" stroke="var(--accent)"/>
                <text x="720" y="106" text-anchor="middle" class="svg-node">Query Pattern &amp; Attributes?</text>
                <text x="720" y="124" text-anchor="middle" class="svg-sub">Finite queries vs polymorphic items</text>

                <!-- Right Outcomes -->
                <path d="M 670 135 L 610 175" class="svg-arrow" stroke="var(--accent)"/>
                <rect x="530" y="175" width="160" height="75" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.5"/>
                <text x="610" y="200" text-anchor="middle" class="svg-node" style="fill: var(--accent); font-weight: 700;">Columnar NoSQL</text>
                <text x="610" y="220" text-anchor="middle" class="svg-mono-xs">Apache Cassandra</text>
                <text x="610" y="238" text-anchor="middle" class="svg-sub">Finite Queries · Ever-Growing</text>

                <path d="M 770 135 L 800 175" class="svg-arrow" stroke="var(--primary)"/>
                <rect x="710" y="175" width="160" height="75" rx="8" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="790" y="200" text-anchor="middle" class="svg-node" style="fill: var(--primary); font-weight: 700;">Document DB</text>
                <text x="790" y="220" text-anchor="middle" class="svg-mono-xs">MongoDB / DynamoDB</text>
                <text x="790" y="238" text-anchor="middle" class="svg-sub">Dynamic Cart Attributes</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "59.2",
          title: "2. Real-World Hybrid Architecture Example (Amazon Order Service)",
          content: `

          <p>In large-scale production architectures, <strong>we rarely rely on only a single database</strong> — multiple specialized databases work symbiotically:</p>

          <div class="callout-highlight-box" style="border-left-color: var(--danger);">
            <div class="callout-highlight-tag" style="color: var(--danger);">THE SCALE BOTTLENECK: STORING ALL ORDERS FOREVER IN RDBMS</div>
            <ul class="notes-bullet-list" style="margin-top: 0.5rem;">
              <li>In an Amazon-like e-commerce platform, the <strong>Order Service</strong> places orders, coordinates with Payment, updates Inventory, and triggers Notifications.</li>
              <li>Because payments can fail and orders can be cancelled or modified within the return window, the Order Service <strong>requires strict ACID transactional guarantees</strong> &rarr; so we must choose an <strong>RDBMS (SQL) database</strong>.</li>
              <li><strong>The Massive Growth Problem:</strong> If Amazon has 10 million users and takes <strong>100,000 new orders every day</strong>, order rows accumulate relentlessly. Storing all historical orders forever inside a single RDBMS will exhaust disk storage, blow up index trees, and crash query performance!</li>
            </ul>
          </div>

          <div class="callout-highlight-box" style="border-left-color: var(--success); margin-top: 1rem;">
            <div class="callout-highlight-tag" style="color: var(--success);">THE HYBRID SOLUTION: LIVE RDBMS + CRON MIGRATION + CASSANDRA ARCHIVE</div>
            <ol class="notes-ordered-list" style="margin-top: 0.5rem;">
              <li><strong>1. Live Orders in RDBMS (SQL):</strong> Keep <strong>only Live / Recent Orders</strong> (orders still within the 10-day or 30-day return window where transactional updates and cancellations can still happen) inside the <strong>RDBMS database</strong>.</li>
              <li><strong>2. Past Orders in Cassandra (Columnar NoSQL):</strong> Once an order is older than 30 days, it is completely finalized and never requires ACID modifications.</li>
              <li><strong>3. Scheduled Cron Job Migration:</strong> A background <strong>Past Order Service</strong> runs periodic Cron Jobs to extract finalized orders from the RDBMS, write them into an <strong>Apache Cassandra</strong> cluster (built for petabytes of ever-increasing immutable data), and purge them from the primary RDBMS.</li>
            </ol>
            <p style="margin-top: 0.6rem;"><strong>Key Takeaway:</strong> <strong>RDBMS</strong> provides ACID guarantees for active orders, while <strong>Cassandra</strong> provides massive horizontal scale for eternal order history!</p>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 59.2 · Amazon Order Service Hybrid Architecture (Live SQL DB + Cron Migration + Cassandra Past Orders)</span>
              <span class="diagram-frame-tag">DUAL-DATABASE HYBRID PATTERN</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Architecture diagram showing active orders handled by PostgreSQL RDBMS with ACID guarantees, migrated by a periodic Cron Job into Apache Cassandra for petabyte-scale historical storage">
                <!-- Order Service -->
                <rect x="25" y="30" width="180" height="190" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="115" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">ACTIVE TRANSACTIONS</text>
                <text x="115" y="82" text-anchor="middle" class="svg-title">Order Service</text>
                <rect x="40" y="105" width="150" height="95" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="115" y="132" text-anchor="middle" class="svg-node">New Orders</text>
                <text x="115" y="152" text-anchor="middle" class="svg-mono-xs">100K Orders/Day</text>
                <text x="115" y="174" text-anchor="middle" class="svg-sub">Handles Checkout &amp; Pay</text>

                <!-- Arrows -->
                <path d="M 205 140 L 290 140" class="svg-arrow" stroke="var(--primary)"/>

                <!-- Live Orders RDBMS -->
                <rect x="290" y="30" width="220" height="190" rx="10" fill="var(--primary-bg)" stroke="var(--primary)" stroke-width="1.8"/>
                <text x="400" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">TIER 1: LIVE ORDERS</text>
                <text x="400" y="82" text-anchor="middle" class="svg-title">RDBMS (SQL / Postgres)</text>
                <rect x="305" y="105" width="190" height="95" rx="8" fill="var(--bg-surface)" stroke="var(--primary)"/>
                <text x="400" y="130" text-anchor="middle" class="svg-node" style="fill: var(--primary); font-weight: 700;">Active &amp; Within 30 Days</text>
                <text x="400" y="152" text-anchor="middle" class="svg-mono-xs">Strict ACID Transactions</text>
                <text x="400" y="174" text-anchor="middle" class="svg-sub">Small, lean, lightning-fast</text>

                <!-- Cron Migration Bridge -->
                <path d="M 510 140 L 610 140" class="svg-arrow" stroke="var(--warning)"/>
                <rect x="520" y="115" width="80" height="50" rx="6" fill="var(--warning-bg)" stroke="var(--warning)"/>
                <text x="560" y="135" text-anchor="middle" class="svg-mono-xs" style="fill: var(--warning); font-weight: 700;">CRON JOB</text>
                <text x="560" y="152" text-anchor="middle" class="svg-sub">> 30 Days</text>

                <!-- Cassandra Past Orders -->
                <rect x="610" y="30" width="245" height="190" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.8"/>
                <text x="732" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--accent);">TIER 2: HISTORICAL ARCHIVE</text>
                <text x="732" y="82" text-anchor="middle" class="svg-title">Apache Cassandra NoSQL</text>
                <rect x="625" y="105" width="215" height="95" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="732" y="130" text-anchor="middle" class="svg-node" style="fill: var(--accent); font-weight: 700;">Past Orders (Finalized)</text>
                <text x="732" y="152" text-anchor="middle" class="svg-mono-xs">Ever-Growing Billions Rows</text>
                <text x="732" y="174" text-anchor="middle" class="svg-sub">Massive write scale · Never crashes</text>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 60: WHAT IS A SINGLE POINT OF FAILURE (SPOF)?
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-60-what-is-spof",
      number: "60",
      shortLabel: "What is SPOF?",
      title: "What is a Single Point of Failure (SPOF)?",
      summary: "The definition and catastrophic blast radius of a Single Point of Failure (System Downtime, Data Loss, User Churn), and the 7 vulnerable architectural tiers: App Servers, Load Balancers, Databases, Caches, Data Centers, AZs, and Geographic Regions.",
      subtopicLabels: ["60.1 Definition & Blast Radius","60.2 The 7 Vulnerable Architectural Tiers"],
      diagramCount: 2,
      sections: [
        {
          num: "60.1",
          title: "1. Definition & Impact of a Single Point of Failure (SPOF)",
          content: `

          <blockquote class="notes-quote" style="border-left-color: var(--danger);">
            <strong>&ldquo;A Single Point of Failure (SPOF) is any single component in your system whose failure can bring down the entire system.&rdquo;</strong>
          </blockquote>

          <p style="margin-top: 1rem;">In any distributed architecture, if the crash of <strong>one single server, wire, or process</strong> causes the whole platform to stop operating, that unredundant component is a Single Point of Failure.</p>

          <div class="sub-card-grid-3" style="margin-top: 1rem;">
            <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
              <div class="sub-box__tag">Impact 01</div>
              <div class="sub-box__title">1. System Downtime</div>
              <div class="sub-box__body">The entire application crashes or returns 502/503 HTTP errors. Revenue-generating customer flows immediately halt.</div>
            </div>

            <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
              <div class="sub-box__tag">Impact 02</div>
              <div class="sub-box__title">2. Potential Data Loss</div>
              <div class="sub-box__body">If an un-replicated database disk crashes, in-flight transactions and non-backed-up records can be permanently destroyed.</div>
            </div>

            <div class="sub-box" style="border-left: 3.5px solid var(--danger);">
              <div class="sub-box__tag">Impact 03</div>
              <div class="sub-box__title">3. User Churn &amp; Frustration</div>
              <div class="sub-box__body">Users blocked from using the app switch to competitors, damaging brand reputation, contractual SLAs, and trust.</div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 60.1 · Anatomy of a Single Point of Failure: The Domino Effect of Unredundant Design</span>
              <span class="diagram-frame-tag">CRITICAL RISK ASSESSMENT</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram showing client requests hitting a single unredundant component that crashes and blocks the entire backend architecture">
                <!-- Clients -->
                <rect x="25" y="30" width="170" height="170" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="110" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">THOUSANDS OF USERS</text>
                <text x="110" y="82" text-anchor="middle" class="svg-title">Active Clients</text>
                <rect x="40" y="100" width="140" height="85" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="110" y="125" text-anchor="middle" class="svg-node">Sending Requests</text>
                <text x="110" y="145" text-anchor="middle" class="svg-mono-xs">POST /checkout</text>
                <text x="110" y="168" text-anchor="middle" class="svg-sub">Expects 200 OK</text>

                <!-- Arrow -->
                <path d="M 195 115 L 290 115" class="svg-arrow" stroke="var(--danger)"/>

                <!-- The SPOF Component -->
                <rect x="290" y="25" width="280" height="180" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="2"/>
                <text x="430" y="54" text-anchor="middle" class="svg-kicker" style="fill: var(--danger); font-weight: 700;">SINGLE POINT OF FAILURE (SPOF)</text>
                <text x="430" y="80" text-anchor="middle" class="svg-title" style="fill: var(--danger);">Single Unredundant Instance</text>
                <rect x="310" y="98" width="240" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--danger)"/>
                <text x="430" y="125" text-anchor="middle" class="svg-node" style="fill: var(--danger); font-weight: 700;">💥 COMPONENT CRASHES!</text>
                <text x="430" y="148" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">No Backup / Standby Node</text>
                <text x="430" y="170" text-anchor="middle" class="svg-sub">All incoming traffic gets blocked</text>

                <!-- Arrow -->
                <path d="M 570 115 L 660 115" class="svg-arrow-dashed" stroke="var(--text-tertiary)"/>
                <text x="615" y="105" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">BLOCKED</text>

                <!-- Blocked Backend -->
                <rect x="660" y="30" width="195" height="170" rx="10" fill="var(--bg-subsection)" stroke="var(--border-strong)"/>
                <text x="757" y="58" text-anchor="middle" class="svg-kicker" style="fill: var(--text-tertiary);">HEALTHY BACKEND</text>
                <text x="757" y="82" text-anchor="middle" class="svg-title">Unreachable Services</text>
                <rect x="675" y="100" width="165" height="85" rx="8" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="757" y="125" text-anchor="middle" class="svg-node">Services are Alive</text>
                <text x="757" y="145" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Cannot receive traffic</text>
                <text x="757" y="168" text-anchor="middle" class="svg-sub">System-wide 100% outage</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "60.2",
          title: "2. Components That Can Become a Single Point of Failure",
          content: `

          <p>Any critical layer in your architecture becomes a Single Point of Failure if you deploy only a <strong>single instance</strong> without redundancy:</p>

          <div class="sub-card-grid-2" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Tier 01 &amp; 02</div>
              <div class="sub-box__title">Compute &amp; Routing</div>
              <div class="sub-box__body">
                <strong>• Application Servers:</strong> A single server running Node.js or Spring Boot crashes on an uncaught exception or OOM.<br>
                <strong>• Load Balancers:</strong> A single NGINX or HAProxy gateway failing halts all routing to healthy app servers.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Tier 03 &amp; 04</div>
              <div class="sub-box__title">Data &amp; In-Memory State</div>
              <div class="sub-box__body">
                <strong>• Databases:</strong> A single primary database instance suffering disk corruption stops all reads and writes.<br>
                <strong>• Cache (Redis):</strong> Single-instance cache dying causes a "Cache Avalanche" that crashes the backend database.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Tier 05, 06 &amp; 07</div>
              <div class="sub-box__title">Physical Infrastructure</div>
              <div class="sub-box__body">
                <strong>• Data Centers:</strong> Power grid blackout, fiber line severing, or cooling failure takes down the whole facility.<br>
                <strong>• Availability Zones (AZs):</strong> Severe localized network partition across adjacent buildings.<br>
                <strong>• Geographic Regions:</strong> Major regional cloud outage (e.g. AWS us-east-1 DNS failure).
              </div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 60.2 · The 7 Critical Architecture Tiers Vulnerable to Single Points of Failure</span>
              <span class="diagram-frame-tag">FULL ARCHITECTURAL BLAST RADIUS</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Horizontal tier diagram displaying all 7 architectural layers that can become single points of failure: App Server, Load Balancer, Database, Cache, Data Center, Availability Zone, and Region">
                <!-- 7 Tiers displayed horizontally -->
                <g transform="translate(10, 30)">
                  <!-- 1. App Server -->
                  <rect x="0" y="0" width="115" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="57" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 01</text>
                  <text x="57" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">App Server</text>
                  <rect x="10" y="65" width="95" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="57" y="90" text-anchor="middle" class="svg-mono-xs">OOM Crash</text>
                  <text x="57" y="112" text-anchor="middle" class="svg-sub">Uncaught Err</text>
                  <text x="57" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single VM ✕</text>

                  <!-- 2. Load Balancer -->
                  <rect x="125" y="0" width="115" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="182" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 02</text>
                  <text x="182" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">Load Balancer</text>
                  <rect x="135" y="65" width="95" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="182" y="90" text-anchor="middle" class="svg-mono-xs">Gateway Halt</text>
                  <text x="182" y="112" text-anchor="middle" class="svg-sub">No Route</text>
                  <text x="182" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single LB ✕</text>

                  <!-- 3. Database -->
                  <rect x="250" y="0" width="115" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="307" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 03</text>
                  <text x="307" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">Database</text>
                  <rect x="260" y="65" width="95" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="307" y="90" text-anchor="middle" class="svg-mono-xs">Disk Fail</text>
                  <text x="307" y="112" text-anchor="middle" class="svg-sub">Data Loss</text>
                  <text x="307" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single DB ✕</text>

                  <!-- 4. Cache -->
                  <rect x="375" y="0" width="115" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="432" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 04</text>
                  <text x="432" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">Cache</text>
                  <rect x="385" y="65" width="95" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="432" y="90" text-anchor="middle" class="svg-mono-xs">Avalanche</text>
                  <text x="432" y="112" text-anchor="middle" class="svg-sub">RAM Crash</text>
                  <text x="432" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single Redis ✕</text>

                  <!-- 5. Data Center -->
                  <rect x="500" y="0" width="115" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="557" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 05</text>
                  <text x="557" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">Data Center</text>
                  <rect x="510" y="65" width="95" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="557" y="90" text-anchor="middle" class="svg-mono-xs">Power Cut</text>
                  <text x="557" y="112" text-anchor="middle" class="svg-sub">Fiber Cut</text>
                  <text x="557" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single DC ✕</text>

                  <!-- 6. Availability Zone -->
                  <rect x="625" y="0" width="115" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="682" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 06</text>
                  <text x="682" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">Availability Zone</text>
                  <rect x="635" y="65" width="95" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="682" y="90" text-anchor="middle" class="svg-mono-xs">Zone Blackout</text>
                  <text x="682" y="112" text-anchor="middle" class="svg-sub">Flood / Storm</text>
                  <text x="682" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single AZ ✕</text>

                  <!-- 7. Region -->
                  <rect x="750" y="0" width="110" height="170" rx="8" fill="var(--bg-subsection)" stroke="var(--danger)" stroke-width="1.2"/>
                  <text x="805" y="26" text-anchor="middle" class="svg-kicker" style="fill: var(--danger);">TIER 07</text>
                  <text x="805" y="50" text-anchor="middle" class="svg-node" style="font-weight: 700;">Region</text>
                  <rect x="760" y="65" width="90" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                  <text x="805" y="90" text-anchor="middle" class="svg-mono-xs">Backbone Fail</text>
                  <text x="805" y="112" text-anchor="middle" class="svg-sub">Geo Disaster</text>
                  <text x="805" y="136" text-anchor="middle" class="svg-mono-xs" style="fill: var(--danger);">Single Geo ✕</text>
                </g>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 61: LAYER-BY-LAYER ELIMINATION OF SINGLE POINTS OF FAILURE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-61-layer-by-layer-spof-elimination",
      number: "61",
      shortLabel: "Eliminating SPOFs",
      title: "Layer-by-Layer Elimination of Single Points of Failure",
      summary: "A step-by-step 6-layer blueprint to systematically eradicate SPOFs from the smallest VM to entire continents: Horizontal App Servers &rarr; Redundant Load Balancers &rarr; Database Master-Slave Replication &rarr; Multi-Data Center &rarr; Multi-AZ &rarr; Multi-Region Geo Routing.",
      subtopicLabels: ["61.1 Layers 1 & 2: App Servers & Load Balancers","61.2 Layer 3: Database Master-Slave","61.3 Layers 4–6: Data Center, AZ & Region"],
      diagramCount: 2,
      sections: [
        {
          num: "61.1",
          title: "1. Layers 1 & 2 — Application Server & Load Balancer Redundancy",
          content: `

          <div class="sub-card-grid-2" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Layer 01 Elimination</div>
              <div class="sub-box__title">Application Server Redundancy</div>
              <div class="sub-box__body">
                <strong>• The Problem:</strong> A single Application Server handling client traffic crashes (due to uncaught exceptions, CPU spikes, or memory leaks), taking down the entire service.<br>
                <strong>• The Solution:</strong> <strong>Horizontally scale</strong> the application by deploying <strong>multiple stateless Application Servers</strong> (Server 1, Server 2, Server 3). If Server 1 dies, remaining servers fulfill traffic seamlessly.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Layer 02 Elimination</div>
              <div class="sub-box__title">Load Balancer Redundancy</div>
              <div class="sub-box__body">
                <strong>• The Problem:</strong> When we place a single Load Balancer in front of our scaled servers, <strong>the Load Balancer itself becomes the SPOF</strong>! If that single LB crashes, zero client requests reach healthy app servers.<br>
                <strong>• The Solution:</strong> Deploy <strong>multiple Load Balancers</strong> in an <strong>Active-Active or Active-Passive pair</strong> with Virtual IP (VRRP) and DNS Round-Robin failover.
              </div>
            </div>
          </div>
        
          `
        },
        {
          num: "61.2",
          title: "2. Layer 3 — Database Master-Slave Replication",
          content: `

          <ul class="notes-bullet-list">
            <li><strong>The Problem:</strong> Even after scaling compute and routing, a single database instance will crash the entire platform if its disk corrupts or its process dies.</li>
            <li><strong>The Solution — Master-Slave Architecture &amp; Data Replication:</strong>
              <ul class="notes-sub-list">
                <li>Deploy multiple database nodes in a <strong>Master-Slave (Primary-Replica)</strong> topology:
                  <ul class="notes-sub-list">
                    <li><strong>Master Node (Primary):</strong> Dedicated to handling <strong>all Write operations (INSERT, UPDATE, DELETE)</strong>.</li>
                    <li><strong>Slave Nodes (Replicas):</strong> Continuously <strong>replicate data from the Master</strong> via binlogs/WAL and serve <strong>all Read operations (SELECT)</strong>.</li>
                  </ul>
                </li>
                <li><strong>Automatic Failover:</strong> If the Master node crashes, an automated consensus monitor (e.g. Raft / Orchestrator) immediately promotes one of the healthy Slaves to become the new Master — ensuring zero downtime and preventing data loss!</li>
              </ul>
            </li>
          </ul>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 61.1 · Layers 1–3: Redundant Load Balancers, Horizontal Servers &amp; Master-Slave DB</span>
              <span class="diagram-frame-tag">ZERO SPOF IN THE SOFTWARE STACK</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 260" class="arch-svg" role="img" aria-label="End-to-end architecture diagram showing dual redundant load balancers distributing traffic to 3 horizontal app servers, which write to a DB Master and read from replicated DB Slaves">
                <!-- Dual Load Balancers -->
                <rect x="20" y="25" width="180" height="210" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="110" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">LAYER 2: LOAD BALANCERS</text>
                <rect x="35" y="65" width="150" height="70" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                <text x="110" y="92" text-anchor="middle" class="svg-node">Active LB 1 ✓</text>
                <text x="110" y="112" text-anchor="middle" class="svg-mono-xs">Virtual IP (VRRP)</text>

                <rect x="35" y="148" width="150" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="110" y="175" text-anchor="middle" class="svg-node">Passive LB 2 (Standby)</text>
                <text x="110" y="195" text-anchor="middle" class="svg-sub">Instant Auto-Failover</text>

                <!-- Arrows -->
                <path d="M 185 100 L 290 80" class="svg-arrow" stroke="var(--primary)"/>
                <path d="M 185 100 L 290 130" class="svg-arrow" stroke="var(--primary)"/>
                <path d="M 185 100 L 290 180" class="svg-arrow" stroke="var(--primary)"/>

                <!-- Layer 1: App Servers -->
                <rect x="290" y="25" width="220" height="210" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                <text x="400" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--accent);">LAYER 1: HORIZONTAL SERVERS</text>
                <rect x="305" y="65" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="400" y="91" text-anchor="middle" class="svg-node">App Server 1 (Stateless)</text>

                <rect x="305" y="117" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="400" y="143" text-anchor="middle" class="svg-node">App Server 2 (Stateless)</text>

                <rect x="305" y="169" width="190" height="42" rx="6" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="400" y="195" text-anchor="middle" class="svg-node">App Server 3 (Stateless)</text>

                <!-- Arrows -->
                <path d="M 510 90 L 610 80" class="svg-arrow" stroke="var(--warning)"/>
                <path d="M 510 160 L 610 170" class="svg-arrow" stroke="var(--success)"/>

                <!-- Layer 3: Master-Slave Database -->
                <rect x="610" y="25" width="250" height="210" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.8"/>
                <text x="735" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">LAYER 3: DB MASTER-SLAVE</text>

                <rect x="625" y="65" width="220" height="65" rx="8" fill="var(--warning-bg)" stroke="var(--warning)"/>
                <text x="735" y="90" text-anchor="middle" class="svg-node" style="fill: var(--warning); font-weight: 700;">DB Master (Writes Only)</text>
                <text x="735" y="112" text-anchor="middle" class="svg-sub">Replicates WAL to Slaves</text>

                <rect x="625" y="145" width="220" height="75" rx="8" fill="var(--success-bg)" stroke="var(--success)"/>
                <text x="735" y="170" text-anchor="middle" class="svg-node" style="fill: var(--success); font-weight: 700;">DB Slaves 1 &amp; 2 (Reads Only)</text>
                <text x="735" y="190" text-anchor="middle" class="svg-mono-xs">Exact Replicated Data ✓</text>
                <text x="735" y="208" text-anchor="middle" class="svg-sub">Promoted if Master dies</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "61.3",
          title: "3. Layers 4, 5 & 6 — Data Centers, Availability Zones & Geographic Regions",
          content: `

          <p>Even with completely redundant software components, physical catastrophe can strike hardware infrastructure. Here is how we eliminate SPOFs at the physical layers:</p>

          <div class="sub-card-grid-3" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Layer 04 Elimination</div>
              <div class="sub-box__title">Multi-Data Center</div>
              <div class="sub-box__body">
                <strong>• Problem:</strong> If all servers and databases reside inside one physical building (Data Center), a power outage or fire kills the entire platform.<br>
                <strong>• Solution:</strong> Replicate across <strong>multiple physical Data Centers</strong> inside the same Availability Zone.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Layer 05 Elimination</div>
              <div class="sub-box__title">Multi-Availability Zone</div>
              <div class="sub-box__body">
                <strong>• Problem:</strong> A localized flood, fiber backbone failure, or earthquake takes down all Data Centers within an AZ.<br>
                <strong>• Solution:</strong> Deploy across <strong>multiple isolated Availability Zones</strong> (<code>AZ 1</code>, <code>AZ 2</code>, <code>AZ 3</code>) separated by tens of kilometers with dedicated low-latency fiber.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Layer 06 Elimination</div>
              <div class="sub-box__title">Multi-Geographic Region</div>
              <div class="sub-box__body">
                <strong>• Problem:</strong> A continental undersea fiber cut or government regulatory blackout knocks out an entire Region (e.g. India Region).<br>
                <strong>• Solution:</strong> Replicate across <strong>multiple Geographic Regions</strong> (US-East, EU-Central, AP-South). Global Anycast DNS routes traffic away from failing regions.
              </div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 61.2 · Layers 4–6: Hierarchical Geographic Resilience (Data Center &rarr; AZ &rarr; Multi-Region)</span>
              <span class="diagram-frame-tag">GLOBAL DISASTER TOLERANCE</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Hierarchical diagram displaying multiple Data Centers forming Availability Zones, and multiple Availability Zones forming isolated Geographic Regions with automatic cross-continental failover">
                <!-- Region 1 -->
                <rect x="20" y="20" width="400" height="215" rx="12" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.8"/>
                <text x="220" y="46" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">GEOGRAPHIC REGION 1 (AP-SOUTH / INDIA)</text>

                <!-- AZ 1 in Region 1 -->
                <rect x="35" y="60" width="175" height="155" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="122" y="82" text-anchor="middle" class="svg-node" style="font-weight: 700;">Availability Zone 1</text>
                <rect x="45" y="95" width="155" height="50" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                <text x="122" y="117" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">Data Center A</text>
                <text x="122" y="135" text-anchor="middle" class="svg-sub">Servers + DB Master</text>
                <rect x="45" y="152" width="155" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="122" y="174" text-anchor="middle" class="svg-mono-xs">Data Center B</text>
                <text x="122" y="192" text-anchor="middle" class="svg-sub">Redundant Standby</text>

                <!-- AZ 2 in Region 1 -->
                <rect x="225" y="60" width="180" height="155" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="315" y="82" text-anchor="middle" class="svg-node" style="font-weight: 700;">Availability Zone 2</text>
                <rect x="237" y="95" width="156" height="50" rx="6" fill="var(--success-bg)" stroke="var(--success)"/>
                <text x="315" y="117" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success); font-weight: 700;">Data Center C</text>
                <text x="315" y="135" text-anchor="middle" class="svg-sub">Replicated Slaves</text>
                <rect x="237" y="152" width="156" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="315" y="174" text-anchor="middle" class="svg-mono-xs">Data Center D</text>
                <text x="315" y="192" text-anchor="middle" class="svg-sub">Auto Failover Target</text>

                <!-- Cross Region Failover Pipe -->
                <path d="M 420 125 L 460 125" class="svg-arrow" stroke="var(--accent)"/>
                <text x="440" y="115" text-anchor="middle" class="svg-mono-xs" style="fill: var(--accent);">SYNC</text>

                <!-- Region 2 -->
                <rect x="460" y="20" width="400" height="215" rx="12" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.8"/>
                <text x="660" y="46" text-anchor="middle" class="svg-kicker" style="fill: var(--accent);">GEOGRAPHIC REGION 2 (EU-CENTRAL / EUROPE)</text>

                <!-- AZ 1 in Region 2 -->
                <rect x="475" y="60" width="175" height="155" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="562" y="82" text-anchor="middle" class="svg-node" style="font-weight: 700;">Availability Zone 1</text>
                <rect x="485" y="95" width="155" height="105" rx="6" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="562" y="130" text-anchor="middle" class="svg-node">Full Mirror Stack</text>
                <text x="562" y="152" text-anchor="middle" class="svg-mono-xs">Cross-Region Replicas</text>
                <text x="562" y="174" text-anchor="middle" class="svg-sub">Survives full India outage</text>

                <!-- AZ 2 in Region 2 -->
                <rect x="665" y="60" width="180" height="155" rx="8" fill="var(--bg-surface)" stroke="var(--accent)"/>
                <text x="755" y="82" text-anchor="middle" class="svg-node" style="font-weight: 700;">Availability Zone 2</text>
                <rect x="677" y="95" width="156" height="105" rx="6" fill="var(--bg-surface)" stroke="var(--border-subtle)"/>
                <text x="755" y="130" text-anchor="middle" class="svg-node">Global Anycast</text>
                <text x="755" y="152" text-anchor="middle" class="svg-mono-xs">DNS Route53 Failover</text>
                <text x="755" y="174" text-anchor="middle" class="svg-sub">99.999% Availability</text>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 62: CORE STRATEGIES TO AVOID SINGLE POINTS OF FAILURE & REALISTIC GOAL
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-62-spof-strategies-realistic-goal",
      number: "62",
      shortLabel: "SPOF Strategies",
      title: "Core Strategies to Avoid Single Points of Failure & Realistic Goal",
      summary: "The 4 core resilience pillars: Redundancy (Active-Active vs Active-Passive standby), Data Replication, Geographic Distribution, and Graceful Degradation (Netflix recommendation fallback), plus why 100% elimination is impossible and the true goal of SPOF minimization.",
      subtopicLabels: ["62.1 4 Core Strategies","62.2 Active vs Passive Redundancy","62.3 Graceful Degradation","62.4 Realistic Goal: Minimizing SPOFs"],
      diagramCount: 2,
      sections: [
        {
          num: "62.1",
          title: "1. Four Core Strategies to Avoid SPOFs",
          content: `

          <div class="sub-card-grid-2" style="margin-top: 1rem;">
            <div class="sub-box">
              <div class="sub-box__tag">Strategy 01 · Instance Redundancy</div>
              <div class="sub-box__title">1. Redundancy (Active &amp; Passive)</div>
              <div class="sub-box__body">
                Deploy multiple instances of every software component (App Servers, Load Balancers) so that another component can immediately take over if one fails.<br>
                <strong>• Active Components:</strong> Always up and running, concurrently sharing live user load.<br>
                <strong>• Passive / Standby Components:</strong> Kept as warm or cold backups that take over when an active node fails.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Strategy 02 · State Synchronization</div>
              <div class="sub-box__title">2. Data Replication</div>
              <div class="sub-box__body">
                Continuously replicate database state across multiple nodes (Master-Slave / Leader-Follower replication). If one node crashes, another node with the exact identical data is already standing by to serve requests without data loss.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Strategy 03 · Fault Isolation</div>
              <div class="sub-box__title">3. Geographic Distribution</div>
              <div class="sub-box__body">
                Distribute Data Centers, Servers, Load Balancers, and Databases across <strong>multiple Availability Zones and multiple Geographic Regions</strong> (and leverage CDNs for static media). Ensures natural disasters or power blackouts never kill the app.
              </div>
            </div>

            <div class="sub-box">
              <div class="sub-box__tag">Strategy 04 · Partial Fault Tolerance</div>
              <div class="sub-box__title">4. Graceful Handling of Failures</div>
              <div class="sub-box__body">
                If <strong>one non-critical microservice</strong> fails, <strong>the entire application must NOT crash</strong>!<br>
                <strong>• Netflix Example:</strong> If Netflix's complex ML <strong>Recommendation Service</strong> crashes, the homepage should still render default top-10 lists and video playback must continue. Never take down the entire streaming platform just because recommendations failed!
              </div>
            </div>
          </div>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 62.1 · The 4 Resilience Pillars: Redundancy, Replication, Geo-Distribution &amp; Graceful Degradation</span>
              <span class="diagram-frame-tag">DISTRIBUTED FAULT-TOLERANT ARCHITECTURE</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 250" class="arch-svg" role="img" aria-label="Visual four-pillar diagram showcasing Redundancy (active passive), Replication (master slave), Geographic Distribution (multi region), and Graceful Degradation (Netflix recommendation fallback)">
                <!-- Pillar 1 -->
                <rect x="20" y="25" width="195" height="205" rx="10" fill="var(--bg-subsection)" stroke="var(--primary)" stroke-width="1.5"/>
                <text x="117" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--primary);">PILLAR 01</text>
                <text x="117" y="76" text-anchor="middle" class="svg-title">Redundancy</text>
                <rect x="32" y="95" width="171" height="120" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="117" y="122" text-anchor="middle" class="svg-node" style="fill: var(--primary);">Multiple Instances</text>
                <text x="117" y="145" text-anchor="middle" class="svg-sub">• Active-Active Nodes</text>
                <text x="117" y="168" text-anchor="middle" class="svg-sub">• Active-Passive Standby</text>
                <text x="117" y="195" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Instant takeover ✓</text>

                <!-- Pillar 2 -->
                <rect x="235" y="25" width="195" height="205" rx="10" fill="var(--bg-subsection)" stroke="var(--success)" stroke-width="1.5"/>
                <text x="332" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--success);">PILLAR 02</text>
                <text x="332" y="76" text-anchor="middle" class="svg-title">Replication</text>
                <rect x="247" y="95" width="171" height="120" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="332" y="122" text-anchor="middle" class="svg-node" style="fill: var(--success);">Data Sync</text>
                <text x="332" y="145" text-anchor="middle" class="svg-sub">• Master-Slave DBs</text>
                <text x="332" y="168" text-anchor="middle" class="svg-sub">• Write-Ahead Logs</text>
                <text x="332" y="195" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Zero data loss ✓</text>

                <!-- Pillar 3 -->
                <rect x="450" y="25" width="195" height="205" rx="10" fill="var(--bg-subsection)" stroke="var(--accent)" stroke-width="1.5"/>
                <text x="547" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--accent);">PILLAR 03</text>
                <text x="547" y="76" text-anchor="middle" class="svg-title">Geo Distribution</text>
                <rect x="462" y="95" width="171" height="120" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="547" y="122" text-anchor="middle" class="svg-node" style="fill: var(--accent);">Physical Isolation</text>
                <text x="547" y="145" text-anchor="middle" class="svg-sub">• Multi-AZ Deployments</text>
                <text x="547" y="168" text-anchor="middle" class="svg-sub">• Multi-Region Clouds</text>
                <text x="547" y="195" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">Survives disasters ✓</text>

                <!-- Pillar 4 -->
                <rect x="665" y="25" width="195" height="205" rx="10" fill="var(--bg-subsection)" stroke="var(--warning)" stroke-width="1.5"/>
                <text x="762" y="52" text-anchor="middle" class="svg-kicker" style="fill: var(--warning);">PILLAR 04</text>
                <text x="762" y="76" text-anchor="middle" class="svg-title">Graceful Failure</text>
                <rect x="677" y="95" width="171" height="120" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
                <text x="762" y="122" text-anchor="middle" class="svg-node" style="fill: var(--warning);">Partial Degradation</text>
                <text x="762" y="145" text-anchor="middle" class="svg-sub">• Netflix ML fails gracefully</text>
                <text x="762" y="168" text-anchor="middle" class="svg-sub">• Video streaming stays up</text>
                <text x="762" y="195" text-anchor="middle" class="svg-mono-xs" style="fill: var(--success);">No total crash ✓</text>
              </svg>
            </div>
          </figure>
        
          `
        },
        {
          num: "62.2",
          title: "2. Realistic Goal: Minimizing Single Points of Failure",
          content: `

          <ul class="notes-bullet-list">
            <li><strong>Can SPOFs Be 100% Eliminated?</strong>
              <ul class="notes-sub-list">
                <li><strong>NO.</strong> A Single Point of Failure is not something you can completely erase to 0% in distributed systems. Hardware will fail, cables will be cut, memory bits will flip, and software bugs will occur. Absolute 100.000% immunity does not exist in engineering.</li>
              </ul>
            </li>
            <li><strong>What Is Our Real Goal?</strong>
              <ul class="notes-sub-list">
                <li>Our engineering objective is to <strong>MINIMIZE Single Points of Failure as much as practically and economically possible</strong>.</li>
                <li>We design blast radiuses such that when any localized component encounters an error, <strong>the entire system does NOT crash or go down</strong>.</li>
              </ul>
            </li>
            <li><strong>The 3 Proven Engineering Benefits of Minimizing SPOFs:</strong>
              <ul class="notes-sub-list">
                <li><strong>1. Maximizes Reliability:</strong> Systems consistently deliver correct, predictable results without data corruption.</li>
                <li><strong>2. Maximizes Availability (High Availability / 99.999%):</strong> Ensures users can access critical services 24/7/365 with near-zero downtime.</li>
                <li><strong>3. Maximizes Resilience:</strong> Enables systems to absorb shock, self-heal, and recover automatically from partial outages.</li>
              </ul>
            </li>
          </ul>

          <figure class="diagram-frame" style="margin-top: 1.25rem;">
            <div class="diagram-frame-header">
              <span class="diagram-frame-title">Diagram 62.2 · Blast Radius Containment: Isolated Micro-Failure vs Total System Collapse</span>
              <span class="diagram-frame-tag">RESILIENCE &amp; FAULT ISOLATION MATRIX</span>
            </div>
            <div class="diagram-svg-wrap">
              <svg viewBox="0 0 880 230" class="arch-svg" role="img" aria-label="Diagram contrasting uncontained SPOF causing total system collapse with blast radius containment isolating the failure to a non-critical subservice">
                <!-- Bad: Uncontained SPOF -->
                <rect x="25" y="25" width="400" height="185" rx="12" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="1.5"/>
                <text x="225" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--danger); font-weight: 700;">UNCONTAINED SPOF (NAIVE DESIGN)</text>
                <text x="225" y="74" text-anchor="middle" class="svg-title" style="fill: var(--danger);">One Failure Crashes Everything</text>

                <rect x="45" y="90" width="160" height="100" rx="8" fill="var(--bg-surface)" stroke="var(--danger)"/>
                <text x="125" y="115" text-anchor="middle" class="svg-node" style="fill: var(--danger);">Non-Critical Bug</text>
                <text x="125" y="135" text-anchor="middle" class="svg-mono-xs">Recommendation Dies</text>
                <text x="125" y="160" text-anchor="middle" class="svg-sub" style="fill: var(--danger);">Uncaught in Monolith</text>

                <path d="M 205 140 L 255 140" class="svg-arrow" stroke="var(--danger)"/>

                <rect x="255" y="90" width="150" height="100" rx="8" fill="var(--danger-bg)" stroke="var(--danger)"/>
                <text x="330" y="115" text-anchor="middle" class="svg-node" style="fill: var(--danger); font-weight: 700;">100% OUTAGE</text>
                <text x="330" y="135" text-anchor="middle" class="svg-mono-xs">All Users Blocked</text>
                <text x="330" y="160" text-anchor="middle" class="svg-sub">Complete Platform Crash</text>

                <!-- Good: Minimizing SPOF -->
                <rect x="455" y="25" width="400" height="185" rx="12" fill="var(--success-bg)" stroke="var(--success)" stroke-width="1.8"/>
                <text x="655" y="50" text-anchor="middle" class="svg-kicker" style="fill: var(--success); font-weight: 700;">CONTAINED BLAST RADIUS (OUR GOAL)</text>
                <text x="655" y="74" text-anchor="middle" class="svg-title" style="fill: var(--success);">Minimizing Single Points of Failure</text>

                <rect x="475" y="90" width="160" height="100" rx="8" fill="var(--bg-surface)" stroke="var(--warning)"/>
                <text x="555" y="115" text-anchor="middle" class="svg-node">Service Degrades</text>
                <text x="555" y="135" text-anchor="middle" class="svg-mono-xs">Recommendation Dies</text>
                <text x="555" y="160" text-anchor="middle" class="svg-sub" style="fill: var(--warning); font-weight: 700;">Isolated via Circuit Breaker</text>

                <path d="M 635 140 L 685 140" class="svg-arrow" stroke="var(--success)"/>

                <rect x="685" y="90" width="150" height="100" rx="8" fill="var(--bg-surface)" stroke="var(--success)"/>
                <text x="760" y="115" text-anchor="middle" class="svg-node" style="fill: var(--success); font-weight: 700;">99.999% UP ✓</text>
                <text x="760" y="135" text-anchor="middle" class="svg-mono-xs">Core App Operates</text>
                <text x="760" y="160" text-anchor="middle" class="svg-sub">Streaming Uninterrupted</text>
              </svg>
            </div>
          </figure>
        
          `
        }
      ]
    }
    ]
  };
