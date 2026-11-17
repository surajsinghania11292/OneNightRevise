# Topic 02: Monolithic vs Microservices & The Strangler Fig Migration Pattern

> **Lecture Context:** When Monoliths win, why they fail at scale, and the production-tested step-by-step procedure to migrate to Microservices with zero downtime.

---

## 1. Monolithic Architecture

A **Monolith** is an application where all business logic (Auth, Users, Orders, Payments, Inventory, Notifications) is built into a single codebase, compiled into a single deployable artifact (e.g., a `.jar`, `.war`, or Node.js process), and shares a single central database.

### The Real Advantages of Monoliths (Why Start Here?):
1. **Blazing Development Speed:** Single repository, simple local dev environment (`npm start` or `./gradlew bootRun`), no network overhead.
2. **ACID Transactions:** Cross-table updates are trivial within one database (`BEGIN TRANSACTION; ... COMMIT;`).
3. **Zero Network Latency Between Modules:** Function calls occur in-memory within CPU nanoseconds.
4. **Simple Deployment:** Deploying 1 container/server is straightforward.

### Where Monoliths Break Down (The Pain Points):
- **Blast Radius:** A memory leak or uncaught exception in the PDF generation module can crash the entire payment and checkout service.
- **Scaling Inefficiency:** If only the Video Transcoding module requires heavy GPU/RAM, you are forced to clone the entire monolithic application across 50 expensive high-spec servers.
- **Team Bottlenecks:** 60+ engineers pushing to one repository creates merge conflicts, long CI/CD test queues, and deployment fear ("Nobody deploy on Friday!").

---

## 2. Microservices Architecture

A **Microservices Architecture** divides an application into a collection of small, autonomous, loosely-coupled services organized around specific business capabilities (e.g., Order Service, User Service, Payment Service).

### Core Characteristics:
- **Database per Service:** Each microservice manages its own private database schema. No external service is allowed to query another service's database directly.
- **Independent Deployability:** The Order Service team can deploy 10 times a day without coordinating with the Payment Service team.
- **Polyglot Stacks:** Python for AI/ML services, Go for high-throughput streaming, Node.js for rapid I/O APIs.

### The Hidden Costs of Microservices:
- **Distributed Data Consistency:** No cross-service SQL `JOIN`s. Must use eventual consistency, SAGA patterns, and event brokers (Kafka/RabbitMQ).
- **Network Overhead:** Every inter-service hop adds latency and introduces partial network failure risks.
- **Operational Complexity:** Demands container orchestration (Kubernetes), distributed tracing (OpenTelemetry/Jaeger), service mesh, and centralized logging.

---

## 3. How to Migrate from Monolith to Microservices (The Strangler Fig Pattern)

> **⚠️ The Golden Rule:** NEVER do a "Big Bang Rewrite"!  
> Freezing feature development for a year to rewrite everything from scratch almost always ends in disaster. Business requirements change, and the legacy monolith keeps accumulating fixes.

### The Strangler Fig Origin Analogy
In tropical rainforests, the strangler fig vine takes root high in the canopy of a host tree. It sends roots downward to the soil, gradually wraps around the host's trunk, and absorbs nutrients. Over decades, the host tree dies and rots away, leaving an independent, hollow fig tree standing in its place.

---

### Step-by-Step Migration Procedure

```
[ Clients: Mobile / Web ]
           │
           ▼
┌─────────────────────────────────┐
│   API Gateway / Reverse Proxy   │ (Stage 1: Placed in front)
└─────────────────────────────────┘
     │ (80% legacy)         │ (20% new route: /api/v1/order)
     ▼                      ▼
┌──────────────┐     ┌─────────────────────┐
│ Old Monolith │     │ Order Microservice  │ (Stage 2: Extracted)
│ (Shrinking)  │     │ + Dedicated DB      │
└──────────────┘     └─────────────────────┘
```

#### Step 1: Place an Interceptor Proxy (API Gateway) in Front
- Deploy a reverse proxy (e.g., NGINX, Envoy, Kong, Cloudflare) in front of the existing Monolith.
- Initially, configure the proxy to forward **100% of all traffic** directly to the Monolith.
- *Result:* Zero risk, zero business logic changed, but you now control the ingress path.

#### Step 2: Identify a Bounded Context (The First Candidate)
- Select a small, low-risk domain with few cross-table dependencies.
- *Good candidates:* Notification Service (emails/SMS), User Profile, Image Resizer.
- *Avoid on Day 1:* Core ledger, checkout engine, or order state machine.

#### Step 3: Build the New Service with Its Own Database
- Build the microservice independently.
- Strictly adhere to the **Database per Service** principle.

#### Step 4: Data Migration & Synchronization
- How to sync data without stopping production traffic?
  - **Change Data Capture (CDC):** Attach Debezium to the Monolith database write-ahead log (WAL) and publish change events to Kafka.
  - A consumer reads Kafka events and populates the new microservice's database.
  - Run a backfill script for historical data and run reconciliation queries until data reaches 100% parity.

#### Step 5: Canary Cutover at the API Gateway
- Change the routing rule on the API Gateway:
  - Route `5%` of requests for `/api/v1/notifications` to the new microservice; `95%` remains on the Monolith.
  - Monitor error rates, p99 latency, and server telemetry.
  - Gradually ramp traffic: `5%` ➔ `25%` ➔ `50%` ➔ `100%`.

#### Step 6: Deprecate Legacy Monolith Code & Repeat
- Once 100% of traffic is successfully handled by the new service, delete the legacy code module from the monolith repository and drop obsolete DB columns.
- Move to the next bounded context (e.g. Orders, Payments, Inventory).
- Eventually, the monolith is completely replaced or reduced to a manageable legacy core.

---

## 4. Supporting Design Patterns

1. **Branch by Abstraction:** In the monolith code, create an interface/abstraction layer around the module you intend to extract. Initially, call the in-memory class. Later, swap the implementation to make an HTTP/gRPC remote call to the new service.
2. **Transactional Outbox Pattern:** Guarantees that database updates and outgoing Kafka event publications occur atomically without distributed 2-phase commits.
