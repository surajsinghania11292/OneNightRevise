# Topic 01: System Design Fundamentals & Core Pillars

> **Lecture Context:** Foundations of High-Level & Low-Level Design, Scalability, and Non-Functional Requirements.

---

## 1. What is System Design in Plain English?

### The Lemonade Stand Analogy
- **Writing Code (No System Design):** You open a lemonade stand in your front yard. If 5 neighbors walk up, you squeeze lemons, take cash, and hand them a cup. It works easily!
- **System Design:** What happens when **50,000 customers** arrive at the same second across 20 different cities?
  - How do you supply lemons without running out?
  - How do you prevent traffic jams around the stall?
  - What happens if one juicer catches fire?

**Formal Definition:** System Design is the architectural process of defining software components, data stores, communication protocols, and network topologies to ensure an application can scale gracefully under heavy traffic, maintain 99.99% uptime, and survive unexpected server crashes.

---

## 2. High-Level Design (HLD) vs Low-Level Design (LLD)

| Dimension | High-Level Design (HLD) | Low-Level Design (LLD) |
| :--- | :--- | :--- |
| **Perspective** | Macro-architecture (Bird's-eye view) | Micro-architecture (Internal code structure) |
| **Key Components** | Load Balancers, API Gateways, Caches, DBs, Message Brokers, Microservices | Class diagrams, interfaces, DB tables, schemas, design patterns |
| **Primary Goal** | Scalability, High Availability, Fault Tolerance, Partition Tolerance | Code maintainability, Clean Code, SOLID principles, Thread safety |
| **Primary Audience**| Solution Architects, Tech Leads, Engineering Managers | Software Developers implementing the features |

---

## 3. The 4 Non-Negotiable Pillars of System Design

### Pillar 1: Scalability (Vertical vs Horizontal)
- **Vertical Scaling (Scale Up):** Adding more CPU/RAM to a single computer (e.g., upgrading an AWS EC2 instance from `t3.medium` to `m5.24xlarge`).
  - *Pros:* Simple, no distributed synchronization, trivial database transactions.
  - *Cons:* Hard physical limits, expensive, and creates a critical **Single Point of Failure (SPOF)**.
- **Horizontal Scaling (Scale Out):** Adding 20 inexpensive commodity servers side-by-side behind a load balancer.
  - *Pros:* Infinite scaling headroom, zero-downtime rolling updates, true high availability.
  - *Cons:* Requires stateless application layers, distributed caching, and eventual data consistency.

### Pillar 2: Availability (The "Nines" of Uptime)
Availability measures the percentage of time a service remains operational:
- **99% (Two Nines):** 3.65 days downtime/year *(Unacceptable for modern businesses)*
- **99.9% (Three Nines):** ~8.76 hours downtime/year *(Decent for internal tools)*
- **99.99% (Four Nines):** ~52.6 minutes downtime/year *(Production standard for cloud services)*
- **99.999% (Five Nines):** ~5.26 minutes downtime/year *(Telecom, financial banking cores)*

### Pillar 3: Reliability & Fault Tolerance
- **Reliability:** The probability that a system performs its intended function without failure over a given period.
- **Fault Tolerance:** The ability of a system to continue operating properly in the event of hardware or software component failures (e.g. server crash, power loss, network partition).

### Pillar 4: Latency vs Throughput
- **Latency:** How long it takes for a single request to travel round-trip (measured in milliseconds, e.g., 25ms).
- **Throughput:** How many total requests the system processes per second (measured in RPS or QPS, e.g., 60,000 requests/sec).
- *Analogy:* A sports car travels fast (low latency); a freight cargo train moves thousands of containers at once (high throughput).

---

## 4. Junior Dev Intuition vs Senior Architect Insights

> **🐣 Junior Dev Note:** Don't start a system design discussion by throwing buzzwords (Kafka, Redis, Kubernetes) at the problem. Always ask: *"What is the expected read vs write ratio?"* and *"What is the latency budget?"* first.

> **📐 Senior Architect Note:** Every design choice is a trade-off. There is no universally 'perfect' architecture—only the architecture whose trade-offs best match your specific constraints (cost, latency, consistency, team size).
