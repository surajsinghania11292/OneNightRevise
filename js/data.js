/* ═══════════════════════════════════════════════════════════════
   DATA.JS — System Architecture & Distributed Systems Reference
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    title: "System Architecture Engineering Reference",
    version: "Chapters 01–03",
    status: "Production Ready",
    readingTime: "18 mins"
  },

  topics: [
    {
      id: "topic-1-fundamentals",
      badge: "Chapter 01",
      title: "Distributed System Fundamentals & Scalability",
      lead: "Core architectural principles required to scale services from initial deployment to millions of concurrent requests.",
      sections: [
        {
          heading: "1. Core Definition & The Scaling Challenge",
          type: "text",
          content: `
            <p><strong>System Design</strong> is the discipline of defining the hardware boundaries, network topologies, software modularity, and data persistence models of an application to fulfill business requirements under massive concurrency, strict latency budgets, and hardware failures.</p>
            <p>In simple terms: building code is constructing an individual service that works for 10 users. System design is ensuring that service continues operating with 99.99% reliability when 100,000 requests per second hit the cluster simultaneously across multiple global continents.</p>
          `,
          callouts: [
            {
              type: "junior",
              title: "Mental Model",
              text: "Premature optimization is the enemy of good design. System design begins by identifying the primary bottleneck: Is the system <strong>I/O bound</strong> (waiting on databases or external APIs) or <strong>CPU bound</strong> (heavy computations, image/video compression)? Add infrastructure only to resolve confirmed bottlenecks."
            },
            {
              type: "senior",
              title: "Architectural Principle",
              text: "Every distributed system design is a study in trade-offs governed by the CAP theorem and PACELC theorem. You cannot maximize consistency, latency, and throughput simultaneously across a partitioned network. Good architecture documents these trade-offs explicitly."
            }
          ]
        },
        {
          heading: "2. High-Level Design (HLD) vs Low-Level Design (LLD)",
          type: "comparison",
          content: `
            <div class="table-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Architectural Layer</th>
                    <th>High-Level Design (HLD)</th>
                    <th>Low-Level Design (LLD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Scope</strong></td>
                    <td>Macro-system architecture & network topology</td>
                    <td>Micro-component logic & internal software contracts</td>
                  </tr>
                  <tr>
                    <td><strong>Primary Entities</strong></td>
                    <td>API Gateways, Load Balancers, Message Brokers (Kafka), Caches (Redis), Service Clusters</td>
                    <td>Class diagrams, interface contracts, relational schemas, design patterns (Strategy, Factory, Circuit Breaker)</td>
                  </tr>
                  <tr>
                    <td><strong>Core Concerns</strong></td>
                    <td>Horizontal scalability, high availability, failover mechanisms, partition tolerance</td>
                    <td>Maintainability, thread safety, SOLID principles, algorithm complexity</td>
                  </tr>
                  <tr>
                    <td><strong>Deliverable</strong></td>
                    <td>System architecture blueprints & data flow diagrams</td>
                    <td>Executable class implementations, database migrations, and unit test suites</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "3. The 4 Non-Negotiable Pillars of System Architecture",
          type: "cards",
          items: [
            {
              title: "1. Scalability: Vertical vs Horizontal",
              desc: "<strong>Vertical Scaling (Scale Up):</strong> Provisioning larger compute instances (e.g., 16 cores ➔ 128 cores). Zero distributed network overhead, but hits a hard hardware ceiling and produces a severe Single Point of Failure (SPOF).<br><br><strong>Horizontal Scaling (Scale Out):</strong> Deploying dozens of stateless commodity instances behind load balancers. Enables elastic auto-scaling, regional redundancy, and zero-downtime rolling deployments."
            },
            {
              title: "2. High Availability (The Nines of Uptime)",
              desc: "Availability represents the operational uptime percentage over a trailing 365-day period:<br>• <strong>99.9% (Three Nines):</strong> ~8.76 hours downtime/year (standard internal tools)<br>• <strong>99.99% (Four Nines):</strong> ~52.6 minutes downtime/year (enterprise cloud standard)<br>• <strong>99.999% (Five Nines):</strong> ~5.26 minutes downtime/year (mission-critical telecommunications and payment rails)"
            },
            {
              title: "3. Reliability & Fault Tolerance",
              desc: "Reliability is the probability that a system performs its specified function without failure. Fault tolerance is the architectural capability to survive component crashes (disk failures, network timeouts, power loss) via automatic retries, exponential backoff with jitter, and dead letter queues."
            },
            {
              title: "4. Latency Budgets vs Throughput",
              desc: "<strong>Latency:</strong> Time elapsed to process a single request from client transmission to response receipt (e.g. p99 < 50ms).<br><strong>Throughput:</strong> Total volume of requests or transactions processed per unit of time (e.g. 75,000 QPS). Tuning for throughput often sacrifices tail latency due to batching."
            }
          ]
        }
      ]
    },

    {
      id: "topic-2-monolith-microservices",
      badge: "Chapter 02",
      title: "Decomposing the Monolith: The Strangler Fig Migration",
      lead: "Strategic trade-offs between unified monoliths and distributed microservices, including zero-downtime production migration patterns.",
      sections: [
        {
          heading: "1. Monolith vs Microservices: Structural Analysis",
          type: "text",
          content: `
            <p>A <strong>Monolithic Architecture</strong> compiles all domain capabilities (Authentication, User Management, Order Processing, Payment Settlement, Notifications) into a unified binary communicating via in-memory function calls and backed by a single relational database.</p>
            <p>A <strong>Microservices Architecture</strong> decouples business domains into autonomous, independently deployable services communicating over strict network interfaces (gRPC, REST, Kafka). Each service strictly adheres to the <strong>Database-per-Service</strong> pattern.</p>

            <!-- Vector Architectural Diagram -->
            <div class="arch-diagram">
              <div class="arch-diagram__header">
                <span>Figure 2.1 — Structural Topology: Monolith vs Microservices</span>
                <span>Architectural Boundary</span>
              </div>
              <div class="arch-diagram__body">
                <div class="arch-comparison-grid">
                  <!-- Monolith Topology -->
                  <div class="arch-box">
                    <div class="arch-box__title">
                      <span>Monolithic Deployable Unit</span>
                      <span class="badge">In-Memory IPC</span>
                    </div>
                    <div class="arch-sub-boxes">
                      <div class="arch-unit">User Domain</div>
                      <div class="arch-unit">Order Domain</div>
                      <div class="arch-unit">Payment Domain</div>
                      <div class="arch-unit">Inventory Domain</div>
                    </div>
                    <div class="arch-db">Shared Monolithic Database (ACID / Tight Coupling)</div>
                  </div>

                  <!-- Microservices Topology -->
                  <div class="arch-box">
                    <div class="arch-box__title">
                      <span>Distributed Microservices</span>
                      <span class="badge badge--success">gRPC / Kafka Event Mesh</span>
                    </div>
                    <div class="arch-sub-boxes">
                      <div class="arch-unit" style="border-left: 2px solid var(--accent);">User Pod + DB</div>
                      <div class="arch-unit" style="border-left: 2px solid var(--accent);">Order Pod + DB</div>
                      <div class="arch-unit" style="border-left: 2px solid var(--accent);">Payment Pod + DB</div>
                      <div class="arch-unit" style="border-left: 2px solid var(--accent);">Inventory Pod + DB</div>
                    </div>
                    <div class="arch-db">Autonomous Databases (Eventual Consistency / SAGA)</div>
                  </div>
                </div>
              </div>
            </div>
          `,
          callouts: [
            {
              type: "junior",
              title: "Junior Dev Intuition",
              text: "A Monolith is like an all-in-one kitchen blender. It is fast, simple to clean, and perfect when starting. Microservices are a 10-person industrial commercial restaurant line. Much higher output, but demands rigorous tickets, communication standards, and coordination."
            },
            {
              type: "warning",
              title: "Anti-Pattern: Distributed Monolith",
              text: "The worst possible outcome is a <em>Distributed Monolith</em>: splitting code into separate repositories while retaining a single shared database or tight synchronous HTTP coupling. You pay the full operational cost of distributed systems with none of the independent scaling benefits."
            }
          ]
        },
        {
          heading: "2. Engineering Trade-off Matrix",
          type: "comparison",
          content: `
            <div class="table-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>Monolithic Architecture</th>
                    <th>Microservices Architecture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Deployment Velocity (Day 1)</strong></td>
                    <td>Extremely high. Single pipeline, zero network configuration.</td>
                    <td>Low initially. High Kubernetes, CI/CD, and mesh overhead.</td>
                  </tr>
                  <tr>
                    <td><strong>Scaling Granularity</strong></td>
                    <td>Coarse-grained. Entire application must be replicated to scale one hot path.</td>
                    <td>Fine-grained. Scale only the high-throughput Order Service during peak traffic.</td>
                  </tr>
                  <tr>
                    <td><strong>Fault Isolation</strong></td>
                    <td>Poor. An unhandled exception or leak in one module can crash the host process.</td>
                    <td>High. Failure of Recommendation Service does not block payment checkout.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Consistency</strong></td>
                    <td>Strong consistency. Native database transactions (<code>BEGIN ... COMMIT</code>).</td>
                    <td>Eventual consistency. Requires SAGA orchestration, Outbox Pattern, and CDC.</td>
                  </tr>
                  <tr>
                    <td><strong>Inter-Process Latency</strong></td>
                    <td>Nanoseconds (in-memory function calls).</td>
                    <td>Milliseconds (TCP/TLS handshake, serialization, network hops).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "3. Step-by-Step Migration: The Strangler Fig Pattern",
          type: "procedure",
          content: `
            <p><strong>The Core Directive:</strong> Avoid the <em>Big Bang Rewrite</em>. Freezing product roadmaps to rewrite complex legacy software from scratch carries an extraordinarily high failure rate. Production systems require incremental, zero-downtime decomposition.</p>
            <p>The <strong>Strangler Fig Pattern</strong> (Martin Fowler) incrementally intercepts incoming traffic at an edge proxy, routing specific URL prefixes to freshly carved microservices while forwarding remaining traffic to the legacy host until the host is safely deprecated.</p>
          `,
          steps: [
            {
              step: "1",
              title: "1. Position an Edge Ingress Proxy (API Gateway)",
              desc: "Deploy a high-performance reverse proxy (NGINX, Envoy, Kong) in front of the existing Monolith. 100% of traffic routes through the proxy, which transparently forwards all requests to the legacy monolith. No business logic is touched."
            },
            {
              step: "2",
              title: "2. Isolate a Clean Bounded Context",
              desc: "Select a self-contained domain with minimal foreign key entanglements (e.g. Notification Service or User Profile). Avoid beginning with the core financial ledger or order state machine."
            },
            {
              step: "3",
              title: "3. Implement the Autonomous Service & Isolated Database",
              desc: "Build the service independently with its own persistence layer. Do not allow direct SQL connections from the new service into the legacy monolith database."
            },
            {
              step: "4",
              title: "4. Synchronize Data via Change Data Capture (CDC)",
              desc: "Deploy tools such as <strong>Debezium + Apache Kafka</strong> to tail the Monolith database transaction log (WAL). Stream mutations to the new service database in real time. Backfill historical records and run automated parity assertions."
            },
            {
              step: "5",
              title: "5. Canary Traffic Cutover at the Ingress Layer",
              desc: "Configure the API Gateway route: shift 5% of traffic for the endpoint (e.g. <code>/api/v1/notifications</code>) to the new microservice. Monitor p99 latency and error budgets before ramping to 25% ➔ 50% ➔ 100%."
            },
            {
              step: "6",
              title: "6. Deprecate Legacy Monolith Code",
              desc: "Once the new service handles 100% of production traffic stably, remove the legacy module from the monolith repository and archive redundant tables. Repeat for subsequent domains."
            }
          ]
        }
      ]
    },

    {
      id: "topic-3-api-gateway-load-balancing",
      badge: "Chapter 03",
      title: "Edge Routing, Load Balancing & Global Traffic Management",
      lead: "Deconstructing multi-region high-scale architectures: Client Ingress ➔ Anycast DNS ➔ Edge API Gateway ➔ Internal Load Balancing ➔ Microservice Pods.",
      sections: [
        {
          heading: "1. Load Balancing Mechanics: Layer 4 vs Layer 7",
          type: "text",
          content: `
            <p>A <strong>Load Balancer</strong> distributes network or application traffic across a pool of healthy backend instances to maximize throughput, minimize response latency, and prevent resource exhaustion.</p>

            <div class="arch-diagram">
              <div class="arch-diagram__header">
                <span>Figure 3.1 — OSI Model Layer Separation</span>
                <span>L4 vs L7 Routing</span>
              </div>
              <div class="arch-diagram__body">
                <div class="arch-comparison-grid">
                  <div class="arch-box">
                    <div class="arch-box__title">
                      <span>Layer 4 (Transport: TCP / UDP)</span>
                      <span class="badge">Ultra-High Throughput</span>
                    </div>
                    <ul style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 1.25rem; line-height: 1.7;">
                      <li>Routes based on IP Address & Port (e.g. <code>10.0.0.1:443</code>).</li>
                      <li>No TLS decryption; passes raw packet streams transparently.</li>
                      <li>Millions of packets/sec with sub-millisecond CPU overhead.</li>
                      <li>Examples: AWS Network Load Balancer (NLB), HAProxy (TCP mode).</li>
                    </ul>
                  </div>

                  <div class="arch-box">
                    <div class="arch-box__title">
                      <span>Layer 7 (Application: HTTP / HTTPS)</span>
                      <span class="badge badge--success">Content-Aware Routing</span>
                    </div>
                    <ul style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 1.25rem; line-height: 1.7;">
                      <li>Inspects HTTP headers, cookies, URL paths, and query parameters.</li>
                      <li>Terminates TLS/SSL certificates at the perimeter.</li>
                      <li>Enables path routing: <code>/order/*</code> ➔ Order Cluster, <code>/user/*</code> ➔ User Cluster.</li>
                      <li>Examples: AWS Application Load Balancer (ALB), NGINX, Envoy.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          heading: "2. The Role of the Edge API Gateway",
          type: "text",
          content: `
            <p>An <strong>API Gateway</strong> serves as the single public entry gate for all client devices (Web, Mobile iOS/Android, Public Developer APIs) into the private microservice network.</p>
            <p>Direct client-to-microservice communication is avoided in production because mobile networks suffer high latency when initiating dozens of separate TLS handshakes, internal microservice addresses should never be exposed to the public internet, and clients must not break when internal microservice topologies evolve.</p>
          `,
          callouts: [
            {
              type: "senior",
              title: "The 6 Core Responsibilities of an API Gateway",
              text: `
                1. <strong>Authentication & Edge Authorization:</strong> Validates JWT signatures and OAuth2 tokens at the perimeter, injecting verified user headers (e.g. <code>X-User-Id</code>) for downstream services.<br>
                2. <strong>TLS/SSL Termination:</strong> Cryptographic decryption occurs at the edge; internal traffic within the private VPC communicates over high-speed HTTP/2 or gRPC.<br>
                3. <strong>Rate Limiting & DDoS Mitigation:</strong> Enforces Token Bucket and Leaky Bucket quotas backed by distributed Redis clusters.<br>
                4. <strong>Request Routing & Path Rewriting:</strong> Routes requests dynamically based on URI prefixes (<code>/api/v1/order</code>).<br>
                5. <strong>Backend for Frontend (BFF) Aggregation:</strong> Fetches responses from multiple internal services in parallel and merges them into a single response payload tailored for mobile clients.<br>
                6. <strong>Distributed Tracing Injection:</strong> Attaches standardized Correlation IDs (e.g. <code>X-Request-Id</code>) to trace request lifecycles across distributed nodes.
              `
            }
          ]
        },
        {
          heading: "3. Architectural Comparison: API Gateway vs Load Balancer",
          type: "comparison",
          content: `
            <div class="table-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Load Balancer (e.g. AWS ALB, NGINX)</th>
                    <th>API Gateway (e.g. Kong, Envoy, Apigee)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Primary Function</strong></td>
                    <td>Traffic distribution & server fleet health monitoring</td>
                    <td>Perimeter security, authentication, request routing & transformation</td>
                  </tr>
                  <tr>
                    <td><strong>Protocol Awareness</strong></td>
                    <td>L4 (TCP/UDP) or L7 (HTTP/HTTPS)</td>
                    <td>Strictly L7 (Deep application payload awareness)</td>
                  </tr>
                  <tr>
                    <td><strong>Authentication</strong></td>
                    <td>Basic / Passthrough</td>
                    <td>Rich: JWT validation, OAuth2 token inspection, HMAC signatures</td>
                  </tr>
                  <tr>
                    <td><strong>Rate Limiting</strong></td>
                    <td>IP-level connection limits</td>
                    <td>Fine-grained: Per-user, per-API-key, per-tenant Token Bucket</td>
                  </tr>
                  <tr>
                    <td><strong>Payload Mutation</strong></td>
                    <td>None (Transparent streaming)</td>
                    <td>Yes: Header injection, JSON aggregation, protocol translation (REST ➔ gRPC)</td>
                  </tr>
                  <tr>
                    <td><strong>Production Topology</strong></td>
                    <td colspan="2"><strong>Complementary Collaboration:</strong> High-throughput L4/L7 Load Balancers sit in front to scale the API Gateway cluster itself, while internal load balancers distribute traffic among microservice pod replicas behind the gateway.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "4. Global Traffic Routing: Handling Millions of Requests",
          type: "walkthrough",
          content: `
            <p>At multi-million request scale, no single data center or gateway instance can handle global ingress. Distributed systems deploy <strong>Global Anycast DNS</strong> combined with <strong>Regional Ingress Zones</strong>:</p>

            <div class="arch-diagram">
              <div class="arch-diagram__header">
                <span>Figure 3.2 — Multi-Region Global Ingress Architecture</span>
                <span>Active-Active Multi-Zone Deployment</span>
              </div>
              <div class="arch-diagram__body">
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <div class="arch-box" style="text-align: center; border-left: 3px solid var(--accent);">
                    <div class="arch-box__title" style="justify-content: center;">Client Ingress (Mobile / Web Clients)</div>
                    <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">Request: https://api.myApp.com/api/v1/order</div>
                  </div>

                  <div style="text-align: center; font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent);">⬇ DNS Query: api.myApp.com</div>

                  <div class="arch-box" style="border-left: 3px solid #0284c7;">
                    <div class="arch-box__title">
                      <span>Anycast DNS Load Balancer (AWS Route 53 / Azure Traffic Manager)</span>
                      <span class="badge">Latency & Geo-Routing</span>
                    </div>
                    <div style="font-size: 0.82rem; color: var(--text-secondary);">Inspects client resolver IP; routes client to lowest-latency healthy regional edge.</div>
                  </div>

                  <div class="arch-comparison-grid" style="margin-top: 0.5rem;">
                    <!-- Region 1 -->
                    <div class="arch-box">
                      <div class="arch-box__title">
                        <span>Region 1: US-West (San Francisco / AZ-2)</span>
                        <span class="badge badge--success">18.10.5.22</span>
                      </div>
                      <div class="arch-unit">Edge API Gateway A (SSL, JWT, Rate Limiting)</div>
                      <div class="arch-unit">Internal L7 Load Balancer + Eureka Discovery</div>
                      <div class="arch-sub-boxes">
                        <div class="arch-unit">Order Service Pods (3x)</div>
                        <div class="arch-unit">User Service Pods (2x)</div>
                      </div>
                    </div>

                    <!-- Region 2 -->
                    <div class="arch-box">
                      <div class="arch-box__title">
                        <span>Region 2: US-East (Boston / AZ-1)</span>
                        <span class="badge badge--success">35.90.45.88</span>
                      </div>
                      <div class="arch-unit">Edge API Gateway B (SSL, JWT, Rate Limiting)</div>
                      <div class="arch-unit">Internal L7 Load Balancer + Eureka Discovery</div>
                      <div class="arch-sub-boxes">
                        <div class="arch-unit">Order Service Pods (3x)</div>
                        <div class="arch-unit">User Service Pods (2x)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p><strong>The End-to-End Request Lifecycle:</strong></p>
            <ol style="margin-left: 1.5rem; line-height: 1.9; color: var(--text-secondary);">
              <li><strong>Client Dispatch:</strong> A client device in California issues <code>GET https://api.myApp.com/api/v1/order</code>.</li>
              <li><strong>DNS Resolution:</strong> AWS Route 53 performs <em>Geo-Proximity / Latency Routing</em>, resolving the domain to <strong>Region 1 API Gateway (18.10.5.22)</strong>.</li>
              <li><strong>Edge Perimeter Inspection:</strong> The API Gateway terminates TLS 1.3, authenticates the client's JWT signature, and checks the client's Redis Token Bucket allocation.</li>
              <li><strong>Dynamic Service Discovery:</strong> Because containerized Kubernetes pods scale elastically with ephemeral IP addresses, the gateway queries the Service Registry (Netflix Eureka / Consul) for healthy instance addresses of <code>Order Service</code>.</li>
              <li><strong>Internal Load Balancing:</strong> Traffic is passed to the internal Layer 7 Load Balancer, which distributes requests across healthy replicas using Weighted Round Robin.</li>
              <li><strong>Automated Regional Failover:</strong> If the San Francisco data center experiences an outage, Route 53 health probes fail within seconds, automatically shifting 100% of global DNS answers to the healthy Boston region (35.90.45.88).</li>
            </ol>
          `
        }
      ]
    }
  ],

  interviewFaq: [
    {
      q: "Q1: Can an API Gateway completely replace a Load Balancer?",
      a: "No. API Gateways perform heavy Layer 7 application logic (JWT decoding, rate limit evaluations, payload transformations). In high-scale systems, high-speed L4 Load Balancers (like AWS NLB) sit in front of the API Gateways to scale the gateway fleet itself, while internal load balancers sit behind the gateway to balance traffic among microservice instances."
    },
    {
      q: "Q2: What is the primary failure mode of a Microservices migration?",
      a: "The 'Big Bang Rewrite'—attempting to freeze feature delivery and rebuild everything from scratch. It almost universally misses deadlines due to shifting business requirements. The standard industry solution is the Strangler Fig Pattern: incrementally carving out small bounded contexts behind an API Gateway."
    },
    {
      q: "Q3: How does DNS Load Balancing differ from Hardware/L7 Load Balancing?",
      a: "DNS Load Balancing operates during the client's DNS resolution phase before any TCP handshake begins, routing users globally to the closest regional data center (e.g. US-West vs EU-Central). Hardware and L7 Load Balancers operate inside the data center, distributing active HTTP/TCP sessions across server instances."
    },
    {
      q: "Q4: How do you guarantee data consistency during Strangler Fig migration?",
      a: "By using Change Data Capture (CDC via Debezium + Kafka) or Dual-Writing. The legacy monolith continues writing to its database while an asynchronous pipeline streams changes to the microservice's database. Once data parity validation passes, the gateway cuts over traffic."
    }
  ]
};
