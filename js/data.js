/* ═══════════════════════════════════════════════════════════════
   DATA.JS — Structured Master Notes for System Design
   Organized by Lecture / Topic. Easily extensible as you watch more videos!
   ═══════════════════════════════════════════════════════════════ */

const SYSTEM_DESIGN_NOTES = {
  meta: {
    course: "System Design Master Series",
    status: "Lectures 1 to 3 Completed",
    theme: "Light Green & Dark Pine Green",
    lastUpdated: "November 2026",
    readingTime: "18 mins"
  },

  topics: [
    {
      id: "topic-1-fundamentals",
      badge: "Lecture 01",
      title: "What is System Design? Core Pillars of Scalability",
      lead: "From a single-developer prototype to a system handling 50 million global users without breaking a sweat.",
      sections: [
        {
          heading: "1. What is System Design in Plain English?",
          type: "text",
          content: `
            <p><strong>The Lemonade Stand Analogy:</strong> Writing code is like opening a lemonade stand in your front yard. If 5 neighbors walk up, you squeeze the lemons, take the cash, and hand them a cup. It works perfectly.</p>
            <p><strong>System Design</strong> is what happens when 50,000 people show up at the exact same minute from 20 different cities. How do you source millions of lemons without running out? How do you prevent lines from blocking traffic? What happens if one juicer explodes? System design is the architectural blueprint that ensures software doesn't collapse under real-world load, traffic spikes, and hardware failures.</p>
          `,
          callouts: [
            {
              type: "junior",
              title: "Junior Dev Intuition",
              text: "Don't jump straight into fancy buzzwords (Kafka, Redis, K8s). System design is simply about understanding: <em>Where will this break first when traffic increases 100x?</em> Every component you add must solve a specific bottleneck."
            },
            {
              type: "senior",
              title: "Senior Architect Note",
              text: "Every architectural choice is a trade-off. There is no 'best' design—only the design whose trade-offs best match your business constraints (budget, latency tolerance, data consistency, team velocity)."
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
                    <th>Dimension</th>
                    <th>High-Level Design (HLD)</th>
                    <th>Low-Level Design (LLD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Scope</strong></td>
                    <td>Macro-architecture (System-wide bird's-eye view)</td>
                    <td>Micro-architecture (Internal module details)</td>
                  </tr>
                  <tr>
                    <td><strong>Components</strong></td>
                    <td>Load Balancers, API Gateways, Microservices, Caches, Databases, Message Brokers</td>
                    <td>Class diagrams, interfaces, DB schema tables, design patterns (Factory, Strategy), methods</td>
                  </tr>
                  <tr>
                    <td><strong>Focus</strong></td>
                    <td>Scalability, Availability, Fault tolerance, Network topology, Data flows</td>
                    <td>Code maintainability, OOP principles, SOLID guidelines, thread safety, clean code</td>
                  </tr>
                  <tr>
                    <td><strong>Who uses it?</strong></td>
                    <td>System Architects, Tech Leads, Engineering Managers</td>
                    <td>Software Engineers writing the actual implementation code</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "3. The 4 Non-Negotiable Pillars of System Design",
          type: "cards",
          items: [
            {
              title: "1. Scalability (Vertical vs Horizontal)",
              desc: "<strong>Vertical Scaling (Scale-Up):</strong> Adding more RAM/CPU to an existing machine (e.g. 16GB -> 128GB). Simple, no distributed coordination, but has a hard hardware ceiling and creates a massive Single Point of Failure (SPOF).<br><br><strong>Horizontal Scaling (Scale-Out):</strong> Adding 20 cheap commodity servers side-by-side behind a load balancer. Infinite scaling potential, fault tolerant, standard for modern cloud infrastructure."
            },
            {
              title: "2. Availability (The 'Nines' of Uptime)",
              desc: "Percentage of time a system is fully operational. Measured in 'Nines':<br>• <strong>99% (Two Nines):</strong> 3.65 days downtime/year (Unacceptable for business)<br>• <strong>99.9% (Three Nines):</strong> ~8.76 hours downtime/year<br>• <strong>99.99% (Four Nines):</strong> ~52.6 minutes downtime/year (Production grade)<br>• <strong>99.999% (Five Nines):</strong> ~5.26 minutes downtime/year (Telecom / Mission critical)"
            },
            {
              title: "3. Reliability vs Fault Tolerance",
              desc: "A reliable system delivers correct results consistently. Fault tolerance means when a hard drive burns or an AWS zone experiences a blackout, the overall system degrades gracefully without dropping customer transactions."
            },
            {
              title: "4. Latency vs Throughput",
              desc: "<strong>Latency:</strong> How long it takes for a single request to travel round-trip (e.g., 20ms).<br><strong>Throughput:</strong> How many total requests the system can process per second (e.g., 50,000 RPS).<br><em>Analogy:</em> A bullet train travels fast (low latency); a cargo train carries 500 tons of goods at once (high throughput)."
            }
          ]
        }
      ]
    },

    {
      id: "topic-2-monolith-microservices",
      badge: "Lecture 02",
      title: "Monolithic vs Microservices & The Strangler Fig Migration",
      lead: "Why monolithic systems break down at scale, and the exact step-by-step procedure to migrate safely with zero downtime.",
      sections: [
        {
          heading: "1. Monolith vs Microservices: The Honest Truth",
          type: "text",
          content: `
            <p>A <strong>Monolith</strong> packages all business logic (User management, Product catalog, Orders, Payments, Notifications) into a single unified binary and codebase that writes to a single shared database.</p>
            <p>A <strong>Microservices Architecture</strong> decomposes the application into small, independently deployable services organized around business capabilities. Each microservice manages its own private database (Database-per-service pattern) and communicates over lightweight network protocols (HTTP/REST, gRPC, or Kafka events).</p>
          `,
          callouts: [
            {
              type: "junior",
              title: "Junior Dev Intuition",
              text: "A Monolith is like a Swiss Army Knife: everything is in one tool. Great to carry in your pocket! Microservices are like a master carpenter's workshop with 50 specialized tools on the wall. Much more powerful, but requires organizing, cleaning, and tracking every single tool."
            },
            {
              type: "warning",
              title: "The Big Trap: Don't Start With Microservices",
              text: "If you start a brand new startup with 15 microservices on Day 1, you will spend 80% of your time wrestling with Docker, Kubernetes, network latencies, and distributed tracing instead of talking to customers. Start with a clean Modular Monolith first!"
            }
          ]
        },
        {
          heading: "2. Architectural Trade-off Breakdown",
          type: "comparison",
          content: `
            <div class="table-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Monolithic Architecture</th>
                    <th>Microservices Architecture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Development Speed (Early)</strong></td>
                    <td>Blazing fast. Single repo, simple local setup.</td>
                    <td>Slow initially. High DevOps and infrastructure overhead.</td>
                  </tr>
                  <tr>
                    <td><strong>Scaling Granularity</strong></td>
                    <td>All or nothing. Must scale the entire monolith even if only 1 module is slow.</td>
                    <td>Pinpoint scaling. Scale only the Order Service 10x during flash sales.</td>
                  </tr>
                  <tr>
                    <td><strong>Blast Radius</strong></td>
                    <td>High. A memory leak in the PDF exporter can crash payment processing.</td>
                    <td>Contained. If Recommendation Service crashes, users can still check out.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Consistency</strong></td>
                    <td>Trivial. Single DB ACID transactions (<code>BEGIN ... COMMIT</code>).</td>
                    <td>Complex. Eventual consistency, SAGA pattern, Two-Phase Commit avoidance.</td>
                  </tr>
                  <tr>
                    <td><strong>Network Overhead</strong></td>
                    <td>Zero. In-memory function calls take nanoseconds.</td>
                    <td>Higher. Network hops over HTTP/gRPC add milliseconds of latency.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "3. How to Migrate from Monolith to Microservices: The Strangler Fig Pattern",
          type: "procedure",
          content: `
            <p><strong>The Cardinal Rule:</strong> Never attempt a <em>Big Bang Rewrite</em> (halting all feature work for a year to rebuild from scratch). Big Bang rewrites almost always fail because business requirements evolve while you rewrite, and the legacy system continues accumulating bug fixes.</p>
            <p>The industry-standard solution is the <strong>Strangler Fig Pattern</strong> (coined by Martin Fowler). Just like the strangler fig vine grows around a host tree, gradually enveloping it until the original tree dies and leaves a hollow pillar of vines, we gradually replace monolithic modules one by one until the monolith vanishes.</p>
          `,
          steps: [
            {
              step: "1",
              title: "Step 1: Put an Interceptor Proxy (API Gateway) in Front",
              desc: "Deploy an API Gateway (NGINX, Envoy, Kong, AWS API Gateway) between your clients and the Monolith. All client traffic now passes through this proxy, but it forwards 100% of requests to the Monolith. Zero code changes; zero risk."
            },
            {
              step: "2",
              title: "Step 2: Choose a Bounded Context (The First Microservice)",
              desc: "Pick a small, loosely-coupled, low-risk module with minimal dependencies. Great candidates: Notification Service (Emails/SMS), User Profile, or Image Processing. Do NOT pick the core financial ledger on Day 1."
            },
            {
              step: "3",
              title: "Step 3: Build the New Service with Its Own Database",
              desc: "Build the microservice independently. It must have its own separate database (Database per Service pattern). Do not share the monolith's database tables."
            },
            {
              step: "4",
              title: "Step 4: Data Migration & Sync (Dual-Writing or CDC)",
              desc: "How do you keep data in sync without downtime? Use <strong>Change Data Capture (CDC)</strong> via tools like Debezium + Apache Kafka. Whenever the monolith updates, a stream event updates the new microservice DB. Once historical data is backfilled, verify 100% parity."
            },
            {
              step: "5",
              title: "Step 5: Canary Traffic Cutover at the API Gateway",
              desc: "Update the API Gateway routing rules. Send 5% of traffic for that endpoint (e.g. <code>/api/v1/notifications</code>) to the new microservice, keeping 95% on the Monolith. Monitor error rates and p99 latency. Slowly increase to 25% -> 50% -> 100%."
            },
            {
              step: "6",
              title: "Step 6: Deprecate Legacy Code & Repeat",
              desc: "Once 100% of traffic flows smoothly to the new service, delete the old notification module from the monolith repository and drop obsolete DB columns. Repeat for the next domain (Orders, Payments, Inventory) until the monolith is gone."
            }
          ]
        }
      ]
    },

    {
      id: "topic-3-api-gateway-load-balancing",
      badge: "Lecture 03",
      title: "API Gateway, Load Balancers & Handling Millions of Requests",
      lead: "Deconstructing the YouTube Architecture Diagram: Client ➔ DNS Route 53 ➔ Regional Gateways ➔ Service Discovery ➔ Load Balancers ➔ Microservices.",
      sections: [
        {
          heading: "1. What is a Load Balancer (LB)?",
          type: "text",
          content: `
            <p>A <strong>Load Balancer</strong> is a network device or software that sits in front of a pool of servers and distributes incoming network traffic evenly across all healthy backend nodes. It prevents any single server from becoming overwhelmed and automatically routes around dead servers.</p>
            <p><strong>L4 vs L7 Load Balancers:</strong></p>
            <ul>
              <li><strong>Layer 4 (Transport Layer - TCP/UDP):</strong> Operates purely on IP addresses and ports (e.g., <code>192.168.1.10:80</code>). It does not inspect HTTP packets. Blazing fast (millions of packets/second, kernel/hardware level).</li>
              <li><strong>Layer 7 (Application Layer - HTTP/HTTPS):</strong> Can inspect HTTP headers, cookies, query parameters, and URL paths (e.g., routing <code>/orders</code> vs <code>/users</code>). Slightly higher CPU overhead, but enables smart routing.</li>
            </ul>
          `
        },
        {
          heading: "2. What is an API Gateway?",
          type: "text",
          content: `
            <p>An <strong>API Gateway</strong> is an intelligent reverse proxy that acts as the single orchestrator and entry door for all client devices (iOS, Android, React Web, Partner APIs) into your microservices backend.</p>
            <p><strong>Why can't clients call Microservices directly?</strong></p>
            <ul>
              <li><strong>Too Many Roundtrips:</strong> Loading 1 mobile page would require calling 10 different microservices over slow mobile 4G/5G networks.</li>
              <li><strong>Security Nightmare:</strong> Exposing 50 internal microservices directly to the public internet creates 50 attack surfaces.</li>
              <li><strong>Coupling:</strong> If you rename an internal microservice or split it, all mobile apps in the world would break until users updated their app!</li>
            </ul>
          `,
          callouts: [
            {
              type: "senior",
              title: "The 6 Superpowers of an API Gateway",
              text: `
                1. <strong>Authentication & Authorization:</strong> Verifies JWT tokens / OAuth keys once at the edge. Downstream microservices don't duplicate auth code.<br>
                2. <strong>SSL/TLS Termination:</strong> Decrypts heavy HTTPS traffic at the perimeter; internal VPC communication uses fast plain HTTP/2 or gRPC.<br>
                3. <strong>Rate Limiting & Throttling:</strong> Blocks scrapers, bots, and DDoS attacks using Token Bucket / Leaky Bucket algorithms backed by Redis.<br>
                4. <strong>Request Aggregation (BFF - Backend For Frontend):</strong> Consolidates 4 microservice responses into 1 JSON payload optimized for mobile screens.<br>
                5. <strong>Dynamic Path Routing:</strong> Maps <code>/api/v1/order</code> to Order Service and <code>/api/v1/user</code> to User Service.<br>
                6. <strong>Distributed Tracing & Metrics:</strong> Injects Correlation IDs (e.g., <code>X-Request-Id</code>) to trace requests through the entire microservices mesh.
              `
            }
          ]
        },
        {
          heading: "3. API Gateway vs Load Balancer: Why We Need BOTH",
          type: "comparison",
          content: `
            <div class="table-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Load Balancer (e.g. AWS ALB, NGINX)</th>
                    <th>API Gateway (e.g. Kong, Apigee, Spring Cloud Gateway)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Primary Role</strong></td>
                    <td>Traffic Cop: Distribute traffic evenly across server replicas.</td>
                    <td>Security Guard & Concierge: Single entry point, auth, transformation, routing.</td>
                  </tr>
                  <tr>
                    <td><strong>OSI Layer</strong></td>
                    <td>Layer 4 (TCP/UDP) or Layer 7 (HTTP)</td>
                    <td>Strictly Layer 7 (Application logic aware)</td>
                  </tr>
                  <tr>
                    <td><strong>Authentication</strong></td>
                    <td>Basic or none (usually forwards headers).</td>
                    <td>Rich: JWT validation, OAuth2, API key validation, role checking.</td>
                  </tr>
                  <tr>
                    <td><strong>Rate Limiting</strong></td>
                    <td>Simple connection/IP limiting.</td>
                    <td>Granular per-user, per-tier, per-API-key rate limiting (Token Bucket).</td>
                  </tr>
                  <tr>
                    <td><strong>Payload Transformation</strong></td>
                    <td>No. Passes bytes transparently.</td>
                    <td>Yes. Can mutate headers, transform XML to JSON, aggregate responses.</td>
                  </tr>
                  <tr>
                    <td><strong>Do they replace each other?</strong></td>
                    <td colspan="2"><strong>No!</strong> The API Gateway handles edge security and smart routing; the Load Balancer sits behind (or in front) to scale multiple gateway/service replicas.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "4. DNS Load Balancing & Handling Millions of Requests (Video Walkthrough)",
          type: "walkthrough",
          content: `
            <div style="margin: 1.25rem 0; border: 1px solid var(--border); border-radius: var(--r-md); overflow: hidden; background: var(--bg-surface);">
              <div style="padding: 0.6rem 1rem; border-bottom: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); display: flex; justify-content: space-between; align-items: center;">
                <span>📸 Architecture Canvas (From YouTube Lecture 03)</span>
                <span>Eraser.io Whiteboard</span>
              </div>
              <img src="assets/youtube_eraser_diagram.jpg" alt="API Gateway vs Load Balancer Architecture" style="width: 100%; height: auto; display: block; max-height: 420px; object-fit: contain; background: #1a1a1a;" />
            </div>
            <p>Now let's examine the exact architecture shown in the YouTube video canvas:</p>
            <p><strong>Step-by-Step Flow:</strong></p>
            <ol style="margin-left: 1.5rem; line-height: 1.9; color: var(--text-secondary);">
              <li><strong>Client Request:</strong> A user in California opens the app and triggers <code>GET https://api.myApp.com/api/v1/order</code>.</li>
              <li><strong>DNS Load Balancer (AWS Route 53 / Azure Traffic Manager):</strong> 
                The DNS server uses <em>Geo-Location / Latency-Based Routing</em>. It detects the user's IP is in California, so it resolves the domain to <strong>API Gateway A (IP: 18.10.5.22)</strong> in Region 1 (San Francisco / AZ-2). If the user were in Massachusetts, it would return <strong>API Gateway B (IP: 35.90.45.88)</strong> in Boston!</li>
              <li><strong>Regional API Gateway (18.10.5.22):</strong>
                Terminates the SSL certificate, decodes the user's JWT token, verifies rate limit quotas in Redis, and inspects the route prefix <code>/api/v1/order</code>.</li>
              <li><strong>Service Discovery (Netflix Eureka / HashiCorp Consul / Kubernetes CoreDNS):</strong>
                Microservices are ephemeral—pods auto-scale, crash, and restart with dynamic IP addresses. Service Discovery maintains a live registry of healthy Order Service IPs.</li>
              <li><strong>Internal Load Balancer (AZ-2):</strong>
                The API Gateway queries the Service Discovery registry and forwards the request to the internal AZ Load Balancer, which distributes traffic across the 3 healthy replicas of <code>Order Service</code> using Round-Robin.</li>
              <li><strong>High Availability & Regional Failover:</strong>
                What if the entire California datacenter catches fire or experiences a network partition? Route 53's automated health checks fail within 15 seconds, and DNS automatically shifts 100% of global traffic to Region 2 (Boston) seamlessly!</li>
            </ol>
          `
        }
      ]
    }
  ],

  interviewFaq: [
    {
      q: "Q1: Can an API Gateway completely replace a Load Balancer?",
      a: "No. While modern API Gateways perform basic load balancing, they are compute-heavy (decoding JWTs, rate limiting, inspecting JSON). In production architectures handling millions of requests, you place high-speed L4/L7 Load Balancers in front of the API Gateways to scale the gateway instances themselves, and internal load balancers behind the gateway to balance traffic among microservice replicas."
    },
    {
      q: "Q2: What is the biggest mistake when migrating to Microservices?",
      a: "The 'Big Bang Rewrite'—attempting to freeze the existing monolith and rewrite the entire application from scratch. Almost all big-bang rewrites run over budget, deliver late, and fail. The recommended approach is the Strangler Fig Pattern: incrementally carving out small bounded contexts behind an API Gateway."
    },
    {
      q: "Q3: How does DNS Load Balancing differ from a Hardware Load Balancer?",
      a: "DNS Load Balancing operates at the client's DNS resolution phase before any HTTP connection is established, routing clients globally to the closest data center (e.g. US-West vs EU-Central). Hardware/Software Load Balancers (like AWS ALB or F5) operate inside the data center at Layer 4 or 7, balancing requests across individual server instances."
    },
    {
      q: "Q4: How do you maintain data consistency during Strangler Fig migration?",
      a: "By using Change Data Capture (CDC) via Kafka/Debezium or Dual-Writing. The monolith continues writing to its database while an asynchronous pipeline streams updates to the new microservice's database. Once data parity is validated, the API Gateway flips traffic to the new service."
    }
  ]
};
