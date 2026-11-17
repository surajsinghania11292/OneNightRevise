/* ═══════════════════════════════════════════════════════════════
   DATA.JS — User-Authored System Design Revision Notes
   Expandable Topic Cards + Structured Numbered Sections + SVG Diagrams
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    title: "OneNightRevise — System Design Revision Notes",
    totalTopics: 6
  },

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
    }
  ]
};
