/* ═══════════════════════════════════════════════════════════════
   DATA.JS — System Architecture Master Study Notes
   Authored for focused, distraction-free study (SauceLabs-style clarity)
   Strictly structured: Numbered Topics, Numbered Sections (1.1, 1.2, etc.)
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    title: "System Architecture Master Notes",
    course: "Distributed Systems & Architecture Reference",
    totalTopics: 6,
    readingTime: "18 mins"
  },

  topics: [
    /* ═══════════════════════════════════════════════════════════════
       TOPIC 01: MONOLITHIC ARCHITECTURE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-1-monolith",
      number: "01",
      kicker: "Topic 01 / 06 · Architecture Fundamentals",
      title: "Monolithic Architecture",
      lead: "All application domains compile into a single codebase with a single entry point and share a centralized database connection pool.",
      sections: [
        {
          num: "1.1",
          title: "System Anatomy & Execution Flow",
          content: `
            <p><strong>Codebase & Deployment Structure:</strong> In a monolithic architecture, all business modules (<code>Auth</code>, <code>Course</code>, <code>Cart</code>, <code>Payment</code>, <code>Order</code>) reside in a single repository, compile into one unified artifact (e.g., a single Node.js bundle, Java JAR, or Go binary), and execute through a single entry point (e.g., <code>server.js</code> or <code>main()</code>).</p>
            <p style="margin-top: 0.65rem;"><strong>In-Memory Inter-Module Communication:</strong> Because all modules run inside the same operating system process, inter-module communication happens through direct in-memory function calls (e.g., <code>cartService.checkout()</code> calling <code>paymentService.charge()</code>). While this eliminates network latency, it tightly couples module lifecycles—they must be tested, built, and deployed as an indivisible unit.</p>
          `
        },
        {
          num: "1.2",
          title: "The Three Critical Production Bottlenecks",
          type: "bottlenecks",
          items: [
            {
              tag: "Bottleneck 01",
              title: "Single Point of Failure (SPOF)",
              desc: "An unhandled runtime exception or memory leak in any single module (e.g., the Payment module running out of memory under 1M users) crashes the entire operating system process, instantly knocking Auth, Cart, and Orders completely offline."
            },
            {
              tag: "Bottleneck 02",
              title: "Deployment Gate Bottleneck",
              desc: "Shipping a trivial 1-line CSS or text fix in the Course module requires recompiling the entire application, running the full test suite for all modules, and redeploying the entire server binary with associated rollback risks."
            },
            {
              tag: "Bottleneck 03",
              title: "Inefficient Horizontal Scaling",
              desc: "You cannot scale a high-traffic module (e.g., Payment receiving 20M requests during a flash sale) independently. You are forced to duplicate the entire monolithic application onto larger, expensive machines, wasting RAM/CPU on idle modules."
            }
          ]
        },
        {
          num: "1.3",
          title: "Interactive System Blueprint: SPOF Failure Cascade Simulation",
          type: "blueprint-monolith",
          content: `
            <div class="blueprint-card">
              <div class="blueprint-header">
                <span class="blueprint-title">📐 Technical Architecture Blueprint · Monolith Execution Model</span>
                <span class="blueprint-badge">SINGLE OS PROCESS (PORT 3000)</span>
              </div>

              <!-- Monolith Server Container -->
              <div class="blueprint-system-container" id="mono-process-container">
                <div class="blueprint-container-meta">
                  <span class="blueprint-container-name">
                    <span>🖥️ Node.js / JVM Host Process</span>
                    <span style="font-size:0.75rem; color:var(--text-muted);">(PID: 8042 · Single Memory Heap)</span>
                  </span>
                  <span class="blueprint-tag-pill" id="mono-status-pill" style="color:var(--success); border-color:var(--success);">
                    ● STATUS: ONLINE (100% HEALTHY)
                  </span>
                </div>

                <!-- 5 In-Memory Modules -->
                <div class="blueprint-modules-grid">
                  <div class="blueprint-module-node" id="mod-auth">
                    <span>🔐 Auth Module</span>
                    <span class="mod-sub">JWT & Session</span>
                  </div>
                  <div class="blueprint-module-node" id="mod-course">
                    <span>📚 Course Module</span>
                    <span class="mod-sub">Catalog & Lessons</span>
                  </div>
                  <div class="blueprint-module-node" id="mod-cart">
                    <span>🛒 Cart Module</span>
                    <span class="mod-sub">Shopping Items</span>
                  </div>
                  <div class="blueprint-module-node" id="mod-payment" style="border-color: #B45309; background: rgba(245, 158, 11, 0.08);">
                    <span>💳 Payment (SPOF)</span>
                    <span class="mod-sub" style="color: #B45309; font-weight:700;">Vulnerable Module</span>
                  </div>
                  <div class="blueprint-module-node" id="mod-order">
                    <span>📦 Order Module</span>
                    <span class="mod-sub">Fulfillment & Status</span>
                  </div>
                </div>

                <!-- Shared DB Connection Arrow -->
                <div class="blueprint-flow-arrow">
                  <span>▼ All 5 Modules Query Same Central DB Pool (Max 50 Connections) ▼</span>
                </div>

                <!-- Centralized Database -->
                <div class="blueprint-db-box" id="mono-db-box">
                  <span>🗄️ Single Central Database (Tables: users, courses, carts, payments, orders)</span>
                </div>
              </div>

              <!-- Interactive Controls & Diagnostics -->
              <div class="blueprint-controls-row">
                <div style="display:flex; gap:0.65rem; align-items:center;">
                  <button id="btn-crash-monolith" class="blueprint-action-btn">
                    ⚡ Simulate Memory Leak in Payment
                  </button>
                  <button id="btn-reset-monolith" class="blueprint-reset-btn">
                    🔄 Reset Server
                  </button>
                </div>
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">
                  Interactive SPOF Demonstration
                </span>
              </div>

              <div id="mono-diagnostic" class="blueprint-diagnostic-box" style="display:none;">
                <span>⚠️</span>
                <div>
                  <strong>SPOF Catastrophic Cascade Triggered:</strong> A memory leak in the <code>Payment</code> module caused an Out-Of-Memory (OOM) panic in the shared heap. Because all modules reside in the single OS process (PID 8042), the operating system terminated the entire process. <code>Auth</code>, <code>Course</code>, <code>Cart</code>, and <code>Order</code> were immediately knocked offline despite having zero bugs in their own code!
                </div>
              </div>
            </div>
          `
        },
        {
          num: "1.4",
          title: "Production Realities & Senior Engineer Trade-offs",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">When Monoliths Excel</div>
                <div class="sub-box__title">Startups & Early Product Market Fit</div>
                <div class="sub-box__body">
                  When engineering teams are under 20 developers and business domains are actively shifting, a monolith is dramatically faster to develop. Zero RPC network serialization overhead, unified transactional rollbacks, and zero distributed tracing tax.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">The Breaking Point</div>
                <div class="sub-box__title">Team Scale & Traffic Imbalance</div>
                <div class="sub-box__body">
                  Decomposition becomes mandatory when 50+ engineers experience Git merge conflicts on release branches, or when one domain (e.g. Payment or Video Transcoding) requires 100x the compute of other modules.
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 02: MICROSERVICES ARCHITECTURE
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-2-microservices",
      number: "02",
      kicker: "Topic 02 / 06 · Decoupled Domains",
      title: "Microservices Architecture & Polyglot Persistence",
      lead: "Decomposing business domains into autonomous, loosely coupled services with independent lifecycles and dedicated data stores.",
      sections: [
        {
          num: "2.1",
          title: "Domain Decomposition & Autonomous Lifecycles",
          content: `
            <p><strong>Domain-Driven Decomposition:</strong> Each business capability is extracted into an independent service (<code>User Service</code>, <code>Cart Service</code>, <code>Payment Service</code>) bounded by its domain context. Services communicate exclusively over network interfaces using lightweight protocols such as <strong>REST (JSON over HTTP)</strong>, <strong>gRPC (Protobuf over HTTP/2)</strong>, or asynchronous event brokers like <strong>Apache Kafka</strong>.</p>
            <p style="margin-top:0.65rem;"><strong>Autonomous Lifecycles:</strong> Each service maintains its own dedicated Git repository, container definition (Dockerfile), CI/CD pipeline, and deployment schedule. The Payment team can deploy 15 times a day to production without coordinating with or waiting for the Cart or User teams.</p>
          `
        },
        {
          num: "2.2",
          title: "Polyglot Persistence: Why Database-per-Service Matters",
          content: `
            <p>The cardinal architectural rule of microservices is: <strong>Services never share a common database.</strong> Direct cross-service database querying violates encapsulation and re-introduces tight coupling. Instead, each service adopts <em>Polyglot Persistence</em>—matching the exact database engine to its domain workload:</p>
            <div class="sub-card-grid-3" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Structured Profile Data</div>
                <div class="sub-box__title">User Service: PostgreSQL</div>
                <div class="sub-box__body">
                  Relational SQL engine paired with <strong>Prisma ORM</strong>. Enforces relational schemas, ACID integrity, and strict constraints for authentication, passwords, and billing profiles.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">High-Write Ephemeral State</div>
                <div class="sub-box__title">Cart Service: Redis / MongoDB</div>
                <div class="sub-box__body">
                  In-Memory Key-Value store with sub-millisecond read/write latency and automatic TTL (Time-To-Live) expiration for abandoned shopping carts.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Financial Transactions</div>
                <div class="sub-box__title">Payment Service: Dedicated Vault DB</div>
                <div class="sub-box__body">
                  Isolated ACID database with immutable audit ledgers and strict encryption, meeting PCI-DSS compliance boundaries without exposing audit trails to the Cart or Course teams.
                </div>
              </div>
            </div>
          `
        },
        {
          num: "2.3",
          title: "Interactive System Blueprint: Fault Isolation in Action",
          type: "blueprint-microservices",
          content: `
            <div class="blueprint-card">
              <div class="blueprint-header">
                <span class="blueprint-title">📐 Technical Architecture Blueprint · Microservices Fleet</span>
                <span class="blueprint-badge" style="color:var(--success); border-color:var(--success);">ISOLATED BLAST RADIUS</span>
              </div>

              <!-- Microservices Pods Grid -->
              <div class="blueprint-pods-grid">
                <!-- Pod 1: User Service -->
                <div class="blueprint-pod-node pod-healthy" id="pod-user">
                  <div class="pod-header">
                    <span>👤 User Service</span>
                    <span class="pod-port">Port 4001</span>
                  </div>
                  <div class="pod-db-badge">🗄️ PostgreSQL + Prisma</div>
                  <div class="pod-status-badge status-ok" id="status-user">● ONLINE (HEALTHY)</div>
                </div>

                <!-- Pod 2: Cart Service -->
                <div class="blueprint-pod-node pod-healthy" id="pod-cart">
                  <div class="pod-header">
                    <span>🛒 Cart Service</span>
                    <span class="pod-port">Port 4002</span>
                  </div>
                  <div class="pod-db-badge">⚡ Redis Key-Value Store</div>
                  <div class="pod-status-badge status-ok" id="status-cart">● ONLINE (HEALTHY)</div>
                </div>

                <!-- Pod 3: Payment Service -->
                <div class="blueprint-pod-node pod-healthy" id="pod-payment">
                  <div class="pod-header">
                    <span>💳 Payment Service</span>
                    <span class="pod-port">Port 4003</span>
                  </div>
                  <div class="pod-db-badge">🗄️ Dedicated Payment DB</div>
                  <div class="pod-status-badge status-ok" id="status-payment">● ONLINE (HEALTHY)</div>
                </div>
              </div>

              <!-- Interactive Controls & Diagnostics -->
              <div class="blueprint-controls-row">
                <div style="display:flex; gap:0.65rem; align-items:center;">
                  <button id="btn-crash-micro" class="blueprint-action-btn">
                    ⚡ Simulate Payment Service Crash
                  </button>
                  <button id="btn-reset-micro" class="blueprint-reset-btn">
                    🔄 Recover Service
                  </button>
                </div>
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">
                  Fault Isolation Test
                </span>
              </div>

              <div id="micro-diagnostic" class="blueprint-diagnostic-box diagnostic-success" style="display:none;">
                <span>🛡️</span>
                <div>
                  <strong>Fault Isolation Verified:</strong> <code>Payment Service</code> crashed under high load, tripping its Circuit Breaker. However, because each microservice runs in an isolated container with its own database, <code>User Service</code> and <code>Cart Service</code> remain <strong>100% online</strong>! Users can still log in, browse courses, and add items to cart uninterrupted.
                </div>
              </div>
            </div>
          `
        },
        {
          num: "2.4",
          title: "Monolith vs Microservices: Engineering Comparison Matrix",
          content: `
            <div class="comparison-table-wrapper">
              <table class="spec-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Monolithic Architecture</th>
                    <th>Microservices Architecture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Codebase & Packaging</strong></td>
                    <td>Single repo, single executable binary or container</td>
                    <td>Multi-repo or monorepo with independent deployable artifacts</td>
                  </tr>
                  <tr>
                    <td><strong>Data Layer</strong></td>
                    <td>Shared centralized database with shared foreign keys</td>
                    <td>Database-per-service (Polyglot Persistence)</td>
                  </tr>
                  <tr>
                    <td><strong>Failure Boundary</strong></td>
                    <td>Global (SPOF): 1 module crash kills the entire process</td>
                    <td>Isolated: Blast radius confined to single service pod</td>
                  </tr>
                  <tr>
                    <td><strong>Deployment Cycle</strong></td>
                    <td>Coupled: Full regression test and full redeployment</td>
                    <td>Autonomous: Continuous independent delivery per team</td>
                  </tr>
                  <tr>
                    <td><strong>Resource Scaling</strong></td>
                    <td>Coarse: Must scale all modules together on large VMs</td>
                    <td>Targeted: Scale only high-traffic pods cost-efficiently</td>
                  </tr>
                  <tr>
                    <td><strong>Network Overhead</strong></td>
                    <td>Sub-microsecond (Direct in-memory function calls)</td>
                    <td>5–30ms network RPC latency + JSON/Protobuf serialization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 03: ARCHITECTURAL MISCONCEPTIONS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-3-myths",
      number: "03",
      kicker: "Topic 03 / 06 · Reality Check",
      title: "Common Architectural Misconceptions",
      lead: "Separating production engineering realities from pervasive interview misconceptions.",
      sections: [
        {
          num: "3.1",
          title: "Industry Reality vs Common Interview Myths",
          content: `
            <p>Engineers often confuse the <em>logical separation of software code</em> with the <em>physical allocation of hardware infrastructure</em>. Let us examine the two most pervasive architecture misconceptions debunked by high-scale production systems.</p>
          `
        },
        {
          num: "3.2",
          title: "Myth 1 Debunked: \"A Monolith Only Runs on a Single Machine\"",
          content: `
            <div class="myth-card">
              <div class="myth-header">❌ INTERVIEW MYTH 01</div>
              <div class="myth-text">"A Monolith is inherently restricted to running on one single physical machine."</div>
              <div class="fact-text">
                <strong>ENGINEERING REALITY: FALSE.</strong> While you cannot scale individual modules independently, you can easily scale the <strong>entire monolithic application horizontally</strong> across 2, 10, or 100 application servers behind a Load Balancer (AWS ALB, Nginx, HAProxy).
              </div>
            </div>

            <!-- Horizontal Monolith Scaling Blueprint -->
            <div class="blueprint-card" style="margin-top: 1rem;">
              <div class="blueprint-header">
                <span class="blueprint-title">📐 Architecture Blueprint · Horizontal Monolith Scaling</span>
                <span class="blueprint-badge">MULTI-INSTANCE POOL</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:0.78rem; background:var(--bg-card); padding:1.25rem; border-radius:var(--r-sm); border:1px solid var(--border); line-height:1.8;">
                Incoming Web/Mobile Traffic<br>
                &nbsp;&nbsp;▼<br>
                <strong>[ Load Balancer (AWS ALB / Nginx) ]</strong><br>
                &nbsp;&nbsp;├─► <strong>App Server 1 (Host A):</strong> [ Auth | Course | Cart | Payment | Order ]<br>
                &nbsp;&nbsp;├─► <strong>App Server 2 (Host B):</strong> [ Auth | Course | Cart | Payment | Order ]<br>
                &nbsp;&nbsp;└─► <strong>App Server 3 (Host C):</strong> [ Auth | Course | Cart | Payment | Order ]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ (Connection Pool)<br>
                <strong>[ Central Database Cluster (Primary Write DB + Read Replicas) ]</strong>
              </div>
            </div>
          `
        },
        {
          num: "3.3",
          title: "Myth 2 Debunked: \"Every Microservice Needs Its Own Separate Machine\"",
          content: `
            <div class="myth-card">
              <div class="myth-header">❌ INTERVIEW MYTH 02</div>
              <div class="myth-text">"Every microservice must be deployed on its own dedicated physical or virtual server."</div>
              <div class="fact-text">
                <strong>ENGINEERING REALITY: FALSE.</strong> At early and medium scale, multiple independent microservices can comfortably run on a <strong>single host machine</strong> (e.g. an AWS EC2 instance) listening on distinct internal network ports (e.g., <code>:4001</code>, <code>:4002</code>, <code>:4003</code>) managed by Docker containers or systemd units.
              </div>
            </div>

            <!-- Single Host Containerization Blueprint -->
            <div class="blueprint-card" style="margin-top: 1rem;">
              <div class="blueprint-header">
                <span class="blueprint-title">📐 Architecture Blueprint · Multi-Port Single Host Containerization</span>
                <span class="blueprint-badge">COST-EFFICIENT DOCKER FLEET</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:0.78rem; background:var(--bg-card); padding:1.25rem; border-radius:var(--r-sm); border:1px solid var(--border); line-height:1.8;">
                <strong>[ Single Physical / Cloud Host (e.g., AWS EC2 t3.large) ]</strong><br>
                &nbsp;&nbsp;│<br>
                &nbsp;&nbsp;├─► <strong>Docker Container 1:</strong> User Service ──── (Listening on <code>0.0.0.0:4001</code>)<br>
                &nbsp;&nbsp;├─► <strong>Docker Container 2:</strong> Cart Service ──── (Listening on <code>0.0.0.0:4002</code>)<br>
                &nbsp;&nbsp;└─► <strong>Docker Container 3:</strong> Payment Service ─ (Listening on <code>0.0.0.0:4003</code>)<br>
                &nbsp;&nbsp;│<br>
                Only migrate services to dedicated machines or Kubernetes nodes when specific CPU/RAM saturation demands it!
              </div>
            </div>
          `
        },
        {
          num: "3.4",
          title: "The Distributed Systems Tax",
          content: `
            <p>Moving from a Monolith to Microservices does not eliminate complexity—it trades <em>code complexity</em> for <em>operational network complexity</em>. Senior engineers account for the <strong>Distributed Systems Tax</strong>:</p>
            <div class="sub-card-grid-2" style="margin-top:0.85rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Operational Cost</div>
                <div class="sub-box__title">Observability & Distributed Tracing</div>
                <div class="sub-box__body">
                  A single user action may traverse 6 services. Pinpointing bugs requires OpenTelemetry tracing, Jaeger trace IDs, centralized logging (ELK/Datadog), and Prometheus health metrics.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Network Realities</div>
                <div class="sub-box__title">Fallacies of Distributed Computing</div>
                <div class="sub-box__body">
                  Networks are not reliable, latency is not zero, and bandwidth is not infinite. Every cross-service network hop introduces socket timeouts, retry storms, and serialization cost.
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 04: STEP-BY-STEP MIGRATION
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-4-migration",
      number: "04",
      kicker: "Topic 04 / 06 · Production Playbook",
      title: "Step-by-Step Migration: Monolith to Microservices",
      lead: "The non-negotiable engineering roadmap to decompose a monolithic system with zero downtime and zero business disruption.",
      sections: [
        {
          num: "4.1",
          title: "The 4 Core Migration Rules (Golden Principles)",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box" style="border-left: 3px solid var(--accent);">
                <div class="sub-box__tag">Rule 01</div>
                <div class="sub-box__title">Never Migrate in a Single Day (No Big Bangs)</div>
                <div class="sub-box__body">Big Bang rewrites fail in 80% of enterprise projects. Real production migrations are executed incrementally, domain-by-domain, over months while the business continues operating.</div>
              </div>
              <div class="sub-box" style="border-left: 3px solid var(--accent);">
                <div class="sub-box__tag">Rule 02</div>
                <div class="sub-box__title">Migrate Module by Module</div>
                <div class="sub-box__body">Carve out one isolated business module at a time. Validate its telemetry, latency, and database consistency under live traffic before touching the next module.</div>
              </div>
              <div class="sub-box" style="border-left: 3px solid var(--accent);">
                <div class="sub-box__tag">Rule 03</div>
                <div class="sub-box__title">Code Migration vs Module Migration</div>
                <div class="sub-box__body">Copying code and setting up a new database is merely <em>Code Migration</em>. The module is not truly migrated until <strong>100% of live production traffic</strong> is stably handled by the new service.</div>
              </div>
              <div class="sub-box" style="border-left: 3px solid var(--accent);">
                <div class="sub-box__tag">Rule 04</div>
                <div class="sub-box__title">Never Decommission Prematurely</div>
                <div class="sub-box__body">Retain the legacy monolith code and database tables as a warm fallback until the microservice has run stably at 100% traffic across multiple billing and reporting cycles.</div>
              </div>
            </div>
          `
        },
        {
          num: "4.2",
          title: "The 6-Step Migration Workflow Roadmap",
          type: "workflow",
          steps: [
            {
              num: "1",
              title: "Understand the Monolith & Map Dependencies",
              desc: "Audit the codebase to map all domain modules (Auth, Course, Cart, Payment, Order). Identify shared database tables, foreign keys, and in-memory function call dependencies."
            },
            {
              num: "2",
              title: "Identify High-Impact Candidate Modules",
              desc: "Prioritize modules experiencing the heaviest transaction load, highest cloud resource contention, or most frequent crashes (e.g., Payment or Search)."
            },
            {
              num: "3",
              title: "Establish API Contracts & Communication Protocols",
              desc: "Define strict synchronous interfaces (REST OpenAPI / gRPC Protobuf) for real-time requests and asynchronous event schemas (Apache Kafka / RabbitMQ) for event notifications."
            },
            {
              num: "4",
              title: "Extract Code, Containerize & Spin Up Dedicated DB",
              desc: "Carve logic into a dedicated repository, configure a separate database (Polyglot Persistence), containerize with Docker, and build independent CI/CD deployment pipelines."
            },
            {
              num: "5",
              title: "Deploy Observability & Health Probes",
              desc: "Deploy the microservice behind a reverse proxy. Establish distributed tracing (OpenTelemetry), CPU/RAM alerts, and p99 latency thresholds under shadow or canary traffic."
            },
            {
              num: "6",
              title: "Targeted Independent Auto-Scaling & Decommission",
              desc: "Configure auto-scaling policies based strictly on service-specific metrics. Once 100% traffic has run cleanly for 30+ days, safely decommission the legacy monolith module."
            }
          ]
        },
        {
          num: "4.3",
          title: "Production Migration Execution Matrix & Gates",
          content: `
            <div class="comparison-table-wrapper">
              <table class="spec-table">
                <thead>
                  <tr>
                    <th>Migration Phase</th>
                    <th>Target Module Action</th>
                    <th>Traffic Distribution</th>
                    <th>Safety / Rollback Mechanism</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Phase 1: Dual-Write & Shadow</strong></td>
                    <td>Deploy service + replicate DB writes via Outbox CDC</td>
                    <td>0% Read traffic (Shadow replay)</td>
                    <td>Zero user impact; compare DB outputs</td>
                  </tr>
                  <tr>
                    <td><strong>Phase 2: Canary Rollout</strong></td>
                    <td>Strangler Fig reverse proxy routes subset of users</td>
                    <td>0.1% ➔ 1% ➔ 5% ➔ 10% ➔ 50%</td>
                    <td>Proxy instant-dial back to 0% in &lt;10ms</td>
                  </tr>
                  <tr>
                    <td><strong>Phase 3: 100% Cutover</strong></td>
                    <td>All live production traffic handled by Microservice</td>
                    <td>100% Microservice</td>
                    <td>Monolith DB kept in warm sync for 14 days</td>
                  </tr>
                  <tr>
                    <td><strong>Phase 4: Cleanup & Retire</strong></td>
                    <td>Delete deprecated monolith endpoints and DB tables</td>
                    <td>100% Microservice (Autonomous)</td>
                    <td>Final migration completion milestone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 05: MIGRATION DESIGN PATTERNS
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-5-patterns",
      number: "05",
      kicker: "Topic 05 / 06 · Distributed Systems Patterns",
      title: "Migration Design Patterns: Traffic, Transactions & Consistency",
      lead: "Proven architectural patterns that guarantee zero downtime, distributed transaction rollbacks, and data consistency during decomposition.",
      sections: [
        {
          num: "5.1",
          title: "Traffic Routing: Canary Rollouts & The Strangler Fig Pattern",
          content: `
            <p><strong>The Strangler Fig Pattern:</strong> Inspired by the strangler fig tree that grows around an existing tree until it replaces it entirely, this pattern places an intermediary reverse proxy (e.g., Cloudflare, Envoy, or AWS ALB) in front of the legacy monolith. The proxy intercepts incoming API requests and intelligently splits traffic based on the route:</p>
            <div class="sub-card-grid-2" style="margin-top: 1rem;">
              <div class="sub-box">
                <div class="sub-box__tag">Traffic Control</div>
                <div class="sub-box__title">Canary Deployments</div>
                <div class="sub-box__body">
                  Instead of sending 100% of traffic to a new service immediately, route a tiny slice first: <code>0.1% ➔ 1% ➔ 5% ➔ 10% ➔ 50% ➔ 100%</code>. Observe error budgets, database lock contention, and p99 latency at each increment.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Fail-Safe Operation</div>
                <div class="sub-box__title">Instant Rollback Without Redeploying</div>
                <div class="sub-box__body">
                  If the new microservice spikes 5xx errors or CPU throttles, the reverse proxy immediately dials the routing weight back to <strong>0%</strong>, sending 100% of traffic back to the legacy monolith in under 10 milliseconds without a new deployment.
                </div>
              </div>
            </div>
          `
        },
        {
          num: "5.2",
          title: "Distributed Transactions: The SAGA Design Pattern",
          content: `
            <p><strong>The Problem with Distributed ACID:</strong> In a monolith, a transaction spans multiple tables within a single database, allowing a simple <code>BEGIN ... COMMIT / ROLLBACK</code>. In microservices, when a transaction spans <code>User DB ➔ Order DB ➔ Payment DB</code>, standard single-DB ACID rollbacks cannot work across separate physical databases.</p>
            <div class="sub-box" style="margin-top: 1rem; border-left: 3px solid var(--accent);">
              <div class="sub-box__tag">SAGA Distributed Transaction Pattern</div>
              <div class="sub-box__title">Compensating Transactions (Undoing Forward Actions)</div>
              <div class="sub-box__body">
                A SAGA executes a sequence of local transactions. If any step fails (e.g. Payment is declined), the SAGA orchestrator invokes <strong>Compensating Transactions</strong> in reverse order:
                <div style="font-family:var(--font-mono); font-size:0.78rem; background:var(--bg-card); padding:0.85rem; border-radius:var(--r-sm); border:1px solid var(--border); margin:0.75rem 0; line-height:1.7;">
                  Step 1: User Service reserves balance ✅<br>
                  Step 2: Order Service creates PENDING order ✅<br>
                  Step 3: Payment Service declines card ❌ (FAILURE)<br>
                  &nbsp;&nbsp;▼ (Trigger Compensating Actions in Reverse)<br>
                  Compensating Step 2: Order Service cancels order status to VOID 🔄<br>
                  Compensating Step 1: User Service un-reserves and restores balance 🔄
                </div>
              </div>
            </div>
          `
        },
        {
          num: "5.3",
          title: "Data Consistency: The Transactional Outbox Pattern + Apache Kafka",
          content: `
            <p><strong>The Dual-Write Problem:</strong> During migration, writing to the Monolith DB and simultaneously publishing an event to Kafka can fail (e.g., DB commits, but the network drops before Kafka receives the event). This creates corrupt, desynchronized databases.</p>
            <div class="sub-box" style="margin-top: 1rem; border-left: 3px solid var(--success);">
              <div class="sub-box__tag">Guaranteed Zero-Data-Loss Consistency</div>
              <div class="sub-box__title">Transactional Outbox Pattern + CDC (Change Data Capture)</div>
              <div class="sub-box__body">
                Instead of making two separate network writes, the application writes the business record AND an event entry into an <strong>Outbox Table</strong> inside the <em>same local ACID transaction</em>:
                <div style="font-family:var(--font-mono); font-size:0.78rem; background:var(--bg-card); padding:0.85rem; border-radius:var(--r-sm); border:1px solid var(--border); margin:0.75rem 0; line-height:1.7;">
                  <strong>1. Local ACID Transaction:</strong><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;<code>INSERT INTO payment_records (...)</code><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;<code>INSERT INTO outbox_events (event_id, payload, status='PENDING')</code><br>
                  <strong>2. Asynchronous CDC Poller (Debezium):</strong><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;Reads the database WAL (Write-Ahead Log) and publishes events to <strong>Apache Kafka</strong>.<br>
                  <strong>3. Microservice Consumer:</strong><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;Reads from Kafka topic and updates the dedicated Payment Service DB with at-least-once delivery!
                </div>
              </div>
            </div>
          `
        },
        {
          num: "5.4",
          title: "Interactive Traffic Splitting & Instant Rollback Simulator",
          type: "blueprint-strangler",
          content: `
            <div class="blueprint-card">
              <div class="blueprint-header">
                <span class="blueprint-title">📐 Technical Architecture Blueprint · Strangler Fig Proxy</span>
                <span class="blueprint-badge">DYNAMIC TRAFFIC DIAL</span>
              </div>

              <div class="canary-slider-wrap">
                <div class="canary-slider-header">
                  <span>CANARY TRAFFIC DIAL: <strong id="canary-pct-label" style="color:var(--accent);">10%</strong></span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">Adjust traffic between Monolith & Microservice</span>
                </div>
                <input type="range" min="0" max="100" step="5" value="10" id="canary-slider" class="canary-range-input">
                
                <div class="canary-flow-splits">
                  <div class="canary-split-col">
                    <span class="canary-split-name">Legacy Monolith Server</span>
                    <span class="canary-split-pct" id="mono-pct-display">90%</span>
                    <span style="font-size:0.75rem; color:var(--text-muted);">Handles majority of legacy traffic</span>
                  </div>
                  <div class="canary-split-col" style="border-color:var(--accent);">
                    <span class="canary-split-name">New Payment Microservice</span>
                    <span class="canary-split-pct" id="micro-pct-display">10%</span>
                    <span style="font-size:0.75rem; color:var(--accent);">Targeted canary observation pool</span>
                  </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem; flex-wrap:wrap; gap:0.5rem;">
                  <button id="btn-instant-rollback" class="blueprint-action-btn" style="background:#B45309; border-color:#B45309;">
                    🚨 Trigger Instant Rollback to 0%
                  </button>
                  <span id="rollback-msg" style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">
                    Simulate instant rollback if 5xx error threshold breached
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════════
       TOPIC 06: API GATEWAY VS LOAD BALANCER
       ═══════════════════════════════════════════════════════════════ */
    {
      id: "topic-6-gateway-lb",
      number: "06",
      kicker: "Topic 06 / 06 · Global Traffic Management",
      title: "API Gateway vs Load Balancer & Global Infrastructure",
      lead: "Understanding single entry points, instance balancing, Regions, Availability Zones, and the complete high-scale request lifecycle.",
      sections: [
        {
          num: "6.1",
          title: "The Golden Rule: Gateway vs Load Balancer",
          content: `
            <div class="golden-rule-card">
              <div class="golden-rule-title">⭐ THE ARCHITECTURAL GOLDEN RULE</div>
              <div class="golden-rule-comparison">
                <div class="rule-col">
                  <div class="rule-col__name">API Gateway</div>
                  <div class="rule-col__rule">
                    Determines <em>WHICH microservice</em> the user wants to talk to.<br>
                    <span style="font-size:0.85rem; font-weight:400; color:var(--text-secondary);">(Layer 7 Service-level routing based on URL path like /api/v1/order vs /api/v1/payment)</span>
                  </div>
                </div>
                <div class="rule-col">
                  <div class="rule-col__name">Load Balancer</div>
                  <div class="rule-col__rule">
                    Determines <em>WHICH instance</em> of that microservice should handle the request.<br>
                    <span style="font-size:0.85rem; font-weight:400; color:var(--text-secondary);">(Layer 4/7 Instance-level distribution across Order-1, Order-2, Order-3)</span>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          num: "6.2",
          title: "The Three Essential Capabilities of an API Gateway",
          type: "gateway-features",
          items: [
            {
              tag: "Capability 01",
              title: "API Composition (Payload Aggregation)",
              desc: "Tailors response payloads by client device type. When a desktop loads 'My Orders', the Gateway queries Product, Invoice, and Ratings services simultaneously and aggregates them into one rich JSON response. For a mobile client on cellular data, it queries only Product and Invoice, eliminating unnecessary payload weight."
            },
            {
              tag: "Capability 02",
              title: "Centralized Authentication & Authorization (OAuth 2.0)",
              desc: "Instead of duplicating JWT decryption and security checks inside every single microservice, the client passes an Access Token to the API Gateway. The Gateway validates the signature with the Auth Server once, injecting verified user claims into downstream request headers."
            },
            {
              tag: "Capability 03",
              title: "Dynamic Service Discovery Integration (Eureka / Consul)",
              desc: "Because microservices auto-scale dynamically across dynamic IP addresses and ephemeral container ports, instances register their IP/port with a Service Discovery registry. The API Gateway queries Service Discovery in real time to resolve healthy destination endpoints."
            }
          ]
        },
        {
          num: "6.3",
          title: "Global Cloud Infrastructure: Regions vs Availability Zones (AZs)",
          content: `
            <div class="sub-card-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Geographic Level</div>
                <div class="sub-box__title">Region</div>
                <div class="sub-box__body">
                  A broad geographic territory (e.g., <strong>US-Massachusetts</strong> or <strong>US-California</strong>). Regions are isolated from each other to prevent shared global outages.
                </div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Data Center Level</div>
                <div class="sub-box__title">Availability Zone (AZ)</div>
                <div class="sub-box__body">
                  Physically separated, fault-tolerant data centers connected by high-speed fiber within a single Region:<br>
                  • <em>Massachusetts Region:</em> Boston (AZ1) & Cambridge (AZ2)<br>
                  • <em>California Region:</em> Los Angeles (AZ1) & San Francisco (AZ2)
                </div>
              </div>
            </div>
          `
        },
        {
          num: "6.4",
          title: "Complete 4-Step Global Request Lifecycle (End-to-End Visual Blueprint)",
          content: `
            <div class="blueprint-card" style="margin-bottom: 1.5rem;">
              <div class="blueprint-header">
                <span class="blueprint-title">📐 Technical Architecture Blueprint · Multi-Region Request Journey</span>
                <span class="blueprint-badge">MILLIONS OF REQUESTS</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:0.78rem; background:var(--bg-card); padding:1.25rem; border-radius:var(--r-sm); border:1px solid var(--border); line-height:1.9;">
                <strong>[ 1. Client Mobile / Laptop (Location: California) ]</strong><br>
                &nbsp;&nbsp;│ (Submits order: <code>POST /api/v1/order</code>)<br>
                &nbsp;&nbsp;▼<br>
                <strong>[ 2. DNS Anycast Load Balancer (AWS Route 53 / Azure Traffic Manager) ]</strong><br>
                &nbsp;&nbsp;│ (Evaluates geographic latency: returns IP of closest healthy Regional Gateway)<br>
                &nbsp;&nbsp;├─► <strong>[ API Gateway A (California - 18.10.5.22) ]</strong> ── queries ──► <strong>[ Netflix Eureka Registry ]</strong><br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (Validates JWT auth + queries Eureka for healthy AZ)<br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>[ Internal Load Balancer (AZ-1: Los Angeles ALB) ]</strong><br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (Distributes via Round Robin / Least Connections)<br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─► [ Order Pod 1 ]<br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─► [ Order Pod 2 ] (Chosen & Executed)<br>
                &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─► [ Order Pod 3 ]<br>
                &nbsp;&nbsp;│<br>
                &nbsp;&nbsp;└─► <strong>[ API Gateway B (Massachusetts - 35.90.45.88) ]</strong> (Active Secondary Region for Failover)
              </div>
            </div>

            <div class="workflow-stack">
              <div class="workflow-step">
                <div class="step-circle">1</div>
                <div>
                  <div class="workflow-step__title">Step 1: Client Action</div>
                  <div class="workflow-step__desc">The user clicks "Place Order" on their phone in California, initiating <code>POST /api/v1/order</code>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">2</div>
                <div>
                  <div class="workflow-step__title">Step 2: DNS Anycast Load Balancer (Region Selection)</div>
                  <div class="workflow-step__desc">AWS Route 53 performs Geo-Proximity & Latency Routing, returning the public IP of Regional API Gateway A (California), ensuring minimal cross-country latency.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">3</div>
                <div>
                  <div class="workflow-step__title">Step 3: Regional API Gateway + Eureka (AZ Selection)</div>
                  <div class="workflow-step__desc">API Gateway A validates the user's OAuth2 JWT token, inspects <code>/api/v1/order</code>, and queries Service Discovery (Eureka) to check which AZ (AZ1 Los Angeles vs AZ2 San Francisco) is healthiest.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">4</div>
                <div>
                  <div class="workflow-step__title">Step 4: Internal Load Balancer (Instance Selection)</div>
                  <div class="workflow-step__desc">The gateway forwards the request to the internal ALB inside AZ1, which evaluates active connection counts and routes the request to healthy instance Order-2.</div>
                </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};
