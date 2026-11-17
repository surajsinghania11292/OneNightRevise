# Monolith to Microservices: Architecture, Misconceptions & Migration Patterns

---

## 1. Monolithic Architecture

### Structure
All application modules (`Auth`, `Course`, `Cart`, `Payment`, `Order`) reside in a single codebase with a single entry point (e.g., a single main server file like `server.js` or `main()`) and typically share a single database containing all tables.

### Lifecycle
Tightly coupled — all modules must be built, tested, run, and deployed together in one package.

### 3 Major Bottlenecks:
1. **Single Point of Failure (SPOF):** An unhandled bug or memory leak in one module (e.g., Payment crashing under 1M users) brings down the entire server process, simultaneously breaking Auth, Cart, and Orders.
2. **Deployment Bottleneck:** Adding a minor feature (e.g., credit card support in Payment) requires rebuilding, retesting, and redeploying the entire application.
3. **Inefficient Scaling:** You cannot scale a high-traffic module (e.g., Payment receiving 20M requests) independently; you must duplicate the entire monolith on bigger, expensive machines, wasting resources and increasing cloud costs.

---

## 2. Microservices Architecture

### Structure
Each business domain is split into an independent, loosely coupled service (`User Service`, `Cart Service`, `Payment Service`) with its own entry point and independent lifecycle (built, tested, deployed, and scaled separately).

### Polyglot Persistence (Database per Service)
Each microservice manages its own dedicated database tailored to its data model:
- **User Service:** Relational database (e.g., **PostgreSQL with Prisma ORM**) for structured user records and strict schemas.
- **Cart Service:** Fast NoSQL key-value/document store (e.g., **Redis / MongoDB**) for dynamic, ephemeral shopping cart items.

### How Microservices Solve Monolith Issues:
- **Fault Isolation:** If the Payment Service crashes, User and Cart services stay online.
- **Independent Deployment:** Changes to Payment only require redeploying the Payment Service.
- **Targeted Scaling:** High traffic on payments only requires spinning up more instances of the Payment Service on smaller, cost-effective machines.

---

## 3. Common Architectural Misconceptions

- **Myth 1: "A Monolith only runs on a single machine"**  
  ➔ **FALSE.** While you cannot scale individual modules separately, you can horizontally scale the entire monolith across multiple application servers (`App Server 1`, `App Server 2`, `App Server 3`) behind a load balancer.

- **Myth 2: "Every Microservice must run on its own separate machine"**  
  ➔ **FALSE.** At low traffic, multiple microservices can run on a single host machine (listening on different ports like `4001`, `4002`) and only move to dedicated virtual machines when scaling demands it.

---

## 4. Step-by-Step Migration: Monolith to Microservices

### Core Migration Rules:
1. Never migrate the entire system in a single day or a single go (avoid Big Bang rewrites).
2. Migrate module-by-module.
3. Distinguish between **Code Migration** (moving logic and DB config to a new repo) and **Module Migration** (routing 100% of live production traffic).
4. Never decommission the monolith module until 100% of production traffic is stably handled by the new microservice.

### 6-Step Migration Workflow:
1. **Understand the Monolith:** Map out all existing domain modules (Auth, Search, Cart, Payment, Order) and their dependencies.
2. **Identify High-Impact Areas:** Prioritize modules experiencing heavy load or frequent crashes (e.g., Payment).
3. **Build API Contracts & Setup Communication:** Define how services talk — Synchronous (REST APIs, gRPC) or Asynchronous (Message queues like Apache Kafka or RabbitMQ).
4. **Migrate Module by Module:** Extract code into a dedicated service repo, configure its dedicated database, and containerize with Docker.
5. **Monitoring & Observability:** Deploy the service and monitor health metrics, error rates, and p99 latency under load.
6. **Scaling & Optimization:** Horizontally scale instances or vertically allocate CPU/RAM based on specific service demands.

---

## 5. Migration Design Patterns (Traffic, Transactions & Consistency)

### 1. Canary Deployment (Gradual Traffic Rollout)
Instead of sending 100% of traffic to the newly deployed microservice immediately, route a tiny subset of users first (`0.1%` ➔ `1%` ➔ `5%` ➔ `10%` ➔ `50%` ➔ `100%`) as stability is verified.

### 2. Strangler Fig Pattern (Traffic Routing & Rollback)
Uses an intermediary controller/proxy in front of the system to split incoming API requests (e.g., 90% routed to the legacy Monolith, 10% to the new Microservice). If the microservice fails, the controller immediately dials traffic back to 0% and routes 100% back to the monolith for an instant rollback.

### 3. SAGA Design Pattern (Distributed Transactions)
Solves multi-service transaction rollbacks. When a transaction spans `User DB ➔ Order DB ➔ Payment DB` and fails at Payment, standard single-DB rollback cannot work across separate databases; SAGA orchestrates **compensating transactions** to revert changes in Order and User services.

### 4. Transactional Outbox Pattern (Data Consistency)
Keeps the Monolith DB's payment table and the new Microservice DB in sync during partial traffic migration. When a write hits the Monolith Payment Table, it simultaneously writes an entry to an **Outbox Table** in the same DB transaction, which pushes an event to **Apache Kafka**, asynchronously updating the Payment Microservice DB.
