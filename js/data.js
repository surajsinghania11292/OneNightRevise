/* ═══════════════════════════════════════════════════════════════
   DATA.JS — System Architecture Master Study Notes
   Authored for focused, distraction-free study (SauceLabs-style clarity)
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    title: "System Architecture Master Notes",
    course: "Distributed Systems & Architecture Reference",
    totalTopics: 6,
    readingTime: "16 mins"
  },

  topics: [
    /* ── TOPIC 1: MONOLITHIC ARCHITECTURE ── */
    {
      id: "topic-1-monolith",
      number: "01",
      kicker: "Topic 01 / 06 · Architecture Fundamentals",
      title: "Monolithic Architecture",
      lead: "All application domains compile into a single codebase with a single entry point and share a centralized database.",
      sections: [
        {
          type: "overview",
          title: "Core Structure & Lifecycle",
          content: `
            <p><strong>Structure:</strong> All application modules (<code>Auth</code>, <code>Course</code>, <code>Cart</code>, <code>Payment</code>, <code>Order</code>) reside in a single codebase with a single entry point (e.g., a single <code>server.js</code> or <code>main()</code> entry) and typically share a single database containing all tables.</p>
            <p><strong>Lifecycle:</strong> Tightly coupled — all modules must be built, tested, run, and deployed together in one unified package.</p>
          `
        },
        {
          type: "bottlenecks",
          title: "3 Major Bottlenecks of Monoliths",
          items: [
            {
              tag: "Bottleneck 1",
              title: "Single Point of Failure (SPOF)",
              desc: "An unhandled bug, unmanaged exception, or memory leak in one module (e.g., the Payment module crashing under 1M users) brings down the entire server process, simultaneously knocking Auth, Cart, and Orders offline."
            },
            {
              tag: "Bottleneck 2",
              title: "Deployment Bottleneck",
              desc: "Adding a minor feature or bugfix (e.g., adding credit card support in Payment) requires rebuilding the entire application, running the complete test suite, and redeploying the entire server."
            },
            {
              tag: "Bottleneck 3",
              title: "Inefficient Scaling",
              desc: "You cannot scale a high-traffic module (e.g., Payment receiving 20M requests) independently. You are forced to duplicate the entire monolithic application onto larger, expensive machines, wasting RAM/CPU and driving up cloud costs."
            }
          ]
        }
      ]
    },

    /* ── TOPIC 2: MICROSERVICES ARCHITECTURE ── */
    {
      id: "topic-2-microservices",
      number: "02",
      kicker: "Topic 02 / 06 · Decoupled Domains",
      title: "Microservices Architecture",
      lead: "Decomposing the business into autonomous, loosely coupled services with independent lifecycles and dedicated data stores.",
      sections: [
        {
          type: "overview",
          title: "Structure & Polyglot Persistence",
          content: `
            <p><strong>Structure:</strong> Each business domain is split into an independent, loosely coupled service (<code>User Service</code>, <code>Cart Service</code>, <code>Payment Service</code>) with its own entry point and independent lifecycle (built, tested, deployed, and scaled separately).</p>
            <div class="sub-box" style="margin: 1.25rem 0; border-left: 3px solid var(--accent);">
              <div class="sub-box__tag">Key Architectural Pattern</div>
              <div class="sub-box__title">Polyglot Persistence (Database per Service)</div>
              <div class="sub-box__body">
                Each microservice manages its own dedicated database tailored specifically to its data model.
                <br><br>
                • <strong>User Service:</strong> Relational database (e.g., <strong>PostgreSQL with Prisma ORM</strong>) for structured profile data and strict schema enforcement.<br>
                • <strong>Cart Service:</strong> Fast NoSQL key-value/document store (e.g., <strong>Redis / MongoDB</strong>) for dynamic, ephemeral shopping cart items with high write speed.
              </div>
            </div>
          `
        },
        {
          type: "solutions",
          title: "How Microservices Solve Monolith Bottlenecks",
          items: [
            {
              tag: "Solution 1",
              title: "Fault Isolation",
              desc: "If the Payment Service encounters an out-of-memory crash, the User and Cart services remain online without interruption. Users can still browse products and add items to their carts."
            },
            {
              tag: "Solution 2",
              title: "Independent Deployment",
              desc: "The Payment team can deploy updates 10 times a day without waiting for or coordinating deployments with the Auth or Course teams."
            },
            {
              tag: "Solution 3",
              title: "Targeted Scaling",
              desc: "High traffic spikes on payments during a flash sale only require spinning up more instances of the Payment Service on smaller, cost-effective instances."
            }
          ]
        }
      ]
    },

    /* ── TOPIC 3: ARCHITECTURAL MISCONCEPTIONS ── */
    {
      id: "topic-3-myths",
      number: "03",
      kicker: "Topic 03 / 06 · Reality Check",
      title: "Common Architectural Misconceptions",
      lead: "Separating production engineering reality from common interview myths.",
      sections: [
        {
          type: "myths",
          title: "Debunking Industry Myths",
          items: [
            {
              myth: 'Myth 1: "A Monolith only runs on a single machine"',
              fact: 'FALSE. While you cannot scale individual modules separately, you can horizontally scale the entire monolithic application across multiple application servers (App Server 1, App Server 2, App Server 3) behind a load balancer.'
            },
            {
              myth: 'Myth 2: "Every Microservice must run on its own separate machine"',
              fact: 'FALSE. At low or medium traffic, multiple microservices can comfortably run on a single host machine (listening on different ports like 4001, 4002, 4003) and only move to dedicated virtual machines or container pods when traffic demands it.'
            }
          ]
        }
      ]
    },

    /* ── TOPIC 4: STEP-BY-STEP MIGRATION ── */
    {
      id: "topic-4-migration",
      number: "04",
      kicker: "Topic 04 / 06 · Production Playbook",
      title: "Step-by-Step Migration: Monolith to Microservices",
      lead: "The practical roadmap to deconstruct a monolithic application without downtime or business disruption.",
      sections: [
        {
          type: "rules",
          title: "4 Core Migration Rules",
          content: `
            <div class="sub-box-grid-2">
              <div class="sub-box">
                <div class="sub-box__tag">Rule 01</div>
                <div class="sub-box__title">Never Migrate in a Single Day</div>
                <div class="sub-box__body">Avoid Big Bang rewrites. High-scale production systems are migrated incrementally module-by-module.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Rule 02</div>
                <div class="sub-box__title">Migrate Module by Module</div>
                <div class="sub-box__body">Carve out one isolated domain at a time, verify stability, and then move to the next.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Rule 03</div>
                <div class="sub-box__title">Code Migration vs Module Migration</div>
                <div class="sub-box__body">Moving code and database configuration to a new repository is only Code Migration. It is not migrated until 100% of live traffic routes to it.</div>
              </div>
              <div class="sub-box">
                <div class="sub-box__tag">Rule 04</div>
                <div class="sub-box__title">Never Decommission Prematurely</div>
                <div class="sub-box__body">Never delete or decommission the monolith code until 100% of production traffic has been handled stably by the new microservice for an observation period.</div>
              </div>
            </div>
          `
        },
        {
          type: "workflow",
          title: "The 6-Step Migration Workflow",
          steps: [
            {
              num: "1",
              title: "Understand the Monolith",
              desc: "Map out all existing domain modules (Auth, Search, Cart, Payment, Order) and document their foreign-key and code dependencies."
            },
            {
              num: "2",
              title: "Identify High-Impact Areas",
              desc: "Prioritize modules experiencing the heaviest load, highest cloud bills, or most frequent production crashes (e.g., Payment)."
            },
            {
              num: "3",
              title: "Build API Contracts & Setup Communication",
              desc: "Define strict interfaces for service communication: Synchronous (REST APIs, gRPC) or Asynchronous (Event brokers like Apache Kafka or RabbitMQ)."
            },
            {
              num: "4",
              title: "Migrate Module by Module",
              desc: "Extract code into a dedicated repository, configure its dedicated database, containerize with Docker, and establish independent CI/CD pipelines."
            },
            {
              num: "5",
              title: "Monitoring & Observability",
              desc: "Deploy the service and continuously monitor health metrics, error rates, CPU/RAM utilization, and p99 latency under real traffic."
            },
            {
              num: "6",
              title: "Scaling & Optimization",
              desc: "Horizontally scale instances or vertically allocate compute resources based strictly on specific service demands."
            }
          ]
        }
      ]
    },

    /* ── TOPIC 5: MIGRATION DESIGN PATTERNS ── */
    {
      id: "topic-5-patterns",
      number: "05",
      kicker: "Topic 05 / 06 · Distributed Systems Patterns",
      title: "Migration Design Patterns: Traffic, Transactions & Consistency",
      lead: "Proven engineering patterns that guarantee data consistency and zero downtime during architecture transitions.",
      sections: [
        {
          type: "patterns",
          title: "The 4 Essential Migration Patterns",
          items: [
            {
              tag: "Traffic Routing",
              title: "1. Canary Deployment (Gradual Traffic Rollout)",
              desc: "Instead of sending 100% of traffic to the newly deployed microservice immediately, route a tiny subset of real users first: <code>0.1% ➔ 1% ➔ 5% ➔ 10% ➔ 50% ➔ 100%</code> as stability, error budgets, and latency metrics are confirmed."
            },
            {
              tag: "Traffic Splitting & Rollback",
              title: "2. Strangler Fig Pattern (Traffic Controller & Instant Rollback)",
              desc: "Uses an intermediary controller/proxy in front of the system to split incoming API requests (e.g., 90% to legacy Monolith, 10% to new Microservice). If the microservice encounters errors, the controller immediately dials traffic back to 0% and routes 100% back to the monolith for an instant, zero-downtime rollback."
            },
            {
              tag: "Distributed Transactions",
              title: "3. SAGA Design Pattern (Multi-Database Rollbacks)",
              desc: "Solves multi-service transaction rollbacks. When a transaction spans <code>User DB ➔ Order DB ➔ Payment DB</code> and fails at Payment, standard single-DB ACID rollbacks cannot work across separate databases. SAGA orchestrates <strong>compensating transactions</strong> that run in reverse to safely undo changes in the Order and User services."
            },
            {
              tag: "Data Consistency",
              title: "4. Transactional Outbox Pattern (Asynchronous Database Sync)",
              desc: "Keeps the Monolith DB's payment table and the new Microservice DB in sync during partial traffic migration. When a write hits the Monolith Payment Table, it simultaneously writes an event to an <strong>Outbox Table</strong> within the same atomic database transaction. An asynchronous CDC process reads the Outbox table and pushes events to <strong>Apache Kafka</strong>, updating the Payment Microservice DB."
            }
          ]
        }
      ]
    },

    /* ── TOPIC 6: API GATEWAY VS LOAD BALANCER ── */
    {
      id: "topic-6-gateway-lb",
      number: "06",
      kicker: "Topic 06 / 06 · Global Traffic Management",
      title: "API Gateway vs Load Balancer & Global Infrastructure",
      lead: "Understanding single entry points, instance balancing, Regions, Availability Zones, and the complete high-scale request lifecycle.",
      sections: [
        {
          type: "golden-rule",
          title: "The Golden Rule: Gateway vs Load Balancer",
          rule: `
            <div class="golden-rule-card">
              <div class="golden-rule-title">⭐ The Golden Rule</div>
              <div class="golden-rule-comparison">
                <div class="rule-col">
                  <div class="rule-col__name">API Gateway</div>
                  <div class="rule-col__rule">Determines <em>WHICH microservice</em> the user wants to talk to.<br><span style="font-size:0.85rem; font-weight:400; color:var(--text-secondary);">(Service-level routing based on URL path like /api/v1/order)</span></div>
                </div>
                <div class="rule-col">
                  <div class="rule-col__name">Load Balancer</div>
                  <div class="rule-col__rule">Determines <em>WHICH instance</em> of that microservice should handle the request.<br><span style="font-size:0.85rem; font-weight:400; color:var(--text-secondary);">(Instance-level distribution across Order-1, Order-2, Order-3)</span></div>
                </div>
              </div>
            </div>
          `
        },
        {
          type: "gateway-features",
          title: "3 Key Features of an API Gateway",
          items: [
            {
              tag: "Feature 01",
              title: "API Composition (Payload Aggregation)",
              desc: "Tailors response payloads by device type. On a desktop 'My Orders' page, the gateway invokes Product, Invoice, and Ratings services. On mobile devices with limited bandwidth, it only calls Product and Invoice services, returning a compact JSON response (can also be paired with GraphQL)."
            },
            {
              tag: "Feature 02",
              title: "Centralized Authentication & Authorization (OAuth 2.0)",
              desc: "Instead of duplicating JWT and session validation inside every microservice, the client obtains an Access Token from an Auth Server and sends it to the API Gateway. The Gateway verifies the token with the Auth Server once before routing authenticated requests to downstream services."
            },
            {
              tag: "Feature 03",
              title: "Service Discovery Integration (e.g., Netflix Eureka)",
              desc: "Microservices scale dynamically across different host machines, IP addresses, and ports. Instances register their active IP/port with a Service Discovery registry (Eureka). The API Gateway queries Service Discovery in real time to locate target services."
            }
          ]
        },
        {
          type: "infra-structure",
          title: "Global Infrastructure: Regions vs Availability Zones (AZs)",
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
                  Isolated data centers located in distinct cities within a single Region.<br>
                  • <em>Massachusetts:</em> Boston (AZ1) & Cambridge (AZ2)<br>
                  • <em>California:</em> Los Angeles (AZ1) & San Francisco (AZ2)
                </div>
              </div>
            </div>
            <div class="sub-box" style="margin-top: 1rem; border-left: 3px solid var(--success);">
              <div class="sub-box__tag">High Availability Failover Architecture</div>
              <div class="sub-box__body">
                If AZ1 (Los Angeles) experiences an outage, traffic immediately fails over to AZ2 (San Francisco). If the entire California region suffers an infrastructure partition, global DNS immediately switches traffic to another Region (Massachusetts).
              </div>
            </div>
          `
        },
        {
          type: "interview-qa",
          title: "Top Architecture Interview Questions & End-to-End Flow",
          content: `
            <div class="myth-card">
              <div class="myth-text" style="color:var(--accent);">Q1: Which comes first in a real-world system — API Gateway or Load Balancer?</div>
              <div class="fact-text">
                <strong>Answer:</strong> Both exist at different architectural layers. The <strong>DNS Load Balancer</strong> comes first globally, followed by the <strong>Regional API Gateway</strong>, followed by an <strong>Internal/AZ Load Balancer</strong> inside the data center.
              </div>
            </div>

            <div class="myth-card">
              <div class="myth-text" style="color:var(--accent);">Q2: If API Gateway is a "Single Entry Point", how does it handle millions of requests without crashing?</div>
              <div class="fact-text">
                <strong>Answer:</strong> It is a <em>logical single entry point per region</em>, not a single physical server globally. Traffic is distributed geographically across multiple regional API Gateways using DNS Load Balancing (Route 53 / Azure Traffic Manager).
              </div>
            </div>

            <h4 style="font-family: var(--font-display); font-size: 1.2rem; margin: 1.75rem 0 0.85rem; color: var(--text-primary);">
              Complete 4-Step End-to-End Request Lifecycle:
            </h4>
            <div class="workflow-stack">
              <div class="workflow-step">
                <div class="step-circle">1</div>
                <div>
                  <div class="workflow-step__title">Client Action</div>
                  <div class="workflow-step__desc">The user clicks "Place Order" on their phone, triggering <code>POST /api/v1/order</code>.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">2</div>
                <div>
                  <div class="workflow-step__title">DNS Load Balancer (Region Selection)</div>
                  <div class="workflow-step__desc">The client browser queries DNS. The DNS Load Balancer evaluates geographic proximity and returns the public IP address of the closest Regional API Gateway (API Gateway A in California), minimizing latency.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">3</div>
                <div>
                  <div class="workflow-step__title">API Gateway + Service Discovery (AZ Selection)</div>
                  <div class="workflow-step__desc">The HTTP request arrives at API Gateway A. The Gateway inspects the path, identifies that it needs the Order Service, and queries Service Discovery (Eureka) for the healthiest Availability Zone (AZ1 - Los Angeles) and the IP address of the internal Load Balancer inside that AZ.</div>
                </div>
              </div>
              <div class="workflow-step">
                <div class="step-circle">4</div>
                <div>
                  <div class="workflow-step__title">Internal Load Balancer (Instance Selection)</div>
                  <div class="workflow-step__desc">The API Gateway forwards the request to the AZ1 Load Balancer, which evaluates active connections across Order-1, Order-2, and Order-3 instances and routes the request to the healthiest available pod.</div>
                </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};
