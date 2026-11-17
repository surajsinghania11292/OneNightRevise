# Video 3: API Gateway vs Load Balancer & High-Scale Infrastructure

---

## 1. API Gateway Fundamentals

### Role
Acts as the single entry point and abstraction interface between client applications (mobile/desktop) and backend microservices.

### Core Responsibility
Hides internal backend complexity and endpoints from the client. It inspects incoming request paths (e.g., `/api/v1/update-profile` or `/api/v1/payment`) and routes the request to the correct microservice.

### 3 Key Features of an API Gateway:
1. **API Composition (Payload Aggregation):** Tailors responses by device type. For example, on a desktop "My Orders" page, it calls Product, Invoice, and Ratings services, whereas on mobile devices with constrained bandwidth it only invokes Product and Invoice services (can also be paired with GraphQL).
2. **Centralized Authentication & Authorization (OAuth 2.0 Flow):** Instead of duplicating auth logic inside every microservice, the client gets an Access Token from an Auth Server and sends it to the API Gateway. The Gateway validates the token with the Auth Server before routing valid requests to backend services.
3. **Service Discovery Integration (e.g., Netflix Eureka):** Because microservices scale dynamically across different machines, IPs, and ports, instances register their active IP/port with a Service Discovery registry. The API Gateway queries Service Discovery to find the live network location of a target service.

---

## 2. Load Balancer Fundamentals

### Role
Distributes incoming network traffic evenly across multiple instances of a service (e.g., `Payment Instance 1`, `Payment Instance 2`, `Payment Instance 3`) based on active load and health checks.

### The Golden Rule: Core Difference
> - **API Gateway** determines **WHICH microservice** the user wants to talk to *(Service-level routing)*.
> - **Load Balancer** determines **WHICH instance** of that microservice should handle the request *(Instance-level routing)*.

*Note: While cloud Application Load Balancers (like AWS ALB) can perform path-based routing, dedicated API Gateways are preferred for payload composition, centralized authentication, and rate limiting.*

---

## 3. Global Infrastructure: Regions & Availability Zones (AZs)

- **Region:** A broad geographic area (e.g., `US-Massachusetts` or `US-California`).
- **Availability Zone (AZ):** Isolated data centers (cities) within a single Region:
  - *Massachusetts Region:* Boston as AZ1 and Cambridge as AZ2.
  - *California Region:* Los Angeles as AZ1 and San Francisco as AZ2.

### High Availability Failover:
If AZ1 (Los Angeles) goes down, traffic fails over to AZ2 (San Francisco). If both AZs in California experience an infrastructure failure, global DNS automatically switches traffic to another Region (Massachusetts).

---

## 4. High-Scale Request Flow & Interview Questions

### Q1: Which comes first in a real-world system — API Gateway or Load Balancer?
**Answer:** Both exist at different layers. A **DNS Load Balancer** comes first globally, followed by the **Regional API Gateway**, followed by an **Internal/AZ Load Balancer** inside the data center.

### Q2: If API Gateway is a "Single Entry Point", how does it handle millions of requests without crashing?
**Answer:** It is a *logical single entry point per region*, not a single physical server globally. Traffic is distributed geographically across multiple regional API Gateways using DNS Load Balancing.

---

### Complete End-to-End Request Lifecycle:
1. **Client Action:** The user clicks "Place Order", triggering `POST /api/v1/order`.
2. **DNS Load Balancer (Region Selection):** The browser queries DNS. The DNS Load Balancer checks the user's geographic proximity and returns the public IP address of the closest Regional API Gateway (e.g., API Gateway A in California), reducing latency.
3. **API Gateway + Service Discovery (AZ Selection):** The HTTP request hits API Gateway A. The Gateway identifies that it needs the Order Service and asks Service Discovery (Eureka) for the closest healthy Availability Zone (e.g., AZ1 - Los Angeles) and the IP address of the Load Balancer inside that AZ.
4. **Internal Load Balancer (Instance Selection):** The API Gateway forwards the request to the AZ1 Load Balancer, which runs health/traffic checks across `Order-1`, `Order-2`, and `Order-3` instances and routes the request to the healthiest available instance.
