# OneNightRevise — System Design Master Notes & Visualizer

A fast, interactive, and beautifully styled System Design learning & revision workspace built directly with the **Light Green & Dark Pine Green** aesthetic adapted from Suraj's portfolio.

---

## 📂 Project Structure

```
d:\OneNightRevise\
├── index.html                   ← The Interactive Web Application (Open directly in browser)
├── css/
│   ├── variables.css            ← Light Green & Deep Dark Pine Green tokens (No terminal/robotic theme)
│   ├── layout.css               ← Responsive grid, sticky sidebar, reading progress bar
│   ├── components.css           ← Junior/Senior callout boxes, step timelines, tables, badges
│   └── animations.css           ← Radar sweep, glowing packet simulation, pulse indicators
├── js/
│   ├── data.js                  ← Central structured notes object (Easily add Lecture 4, 5, etc.)
│   ├── visualizers.js           ← Live packet animation simulator & Strangler Fig stepper
│   ├── ui.js                    ← Theme toggle (persisted), search filter, TOC spy, toast alerts
│   └── app.js                   ← Main app controller & DOM renderer
├── notes/                       ← Markdown notes for offline, VS Code, or Obsidian reading
│   ├── 01-system-design-fundamentals.md
│   ├── 02-monolith-vs-microservices-migration.md
│   └── 03-api-gateway-load-balancing-millions-requests.md
└── package.json                 ← Optional scripts for local dev server
```

---

## 🚀 How to Run & View

### Option 1: Direct Double-Click (Zero Setup)
Simply double-click `index.html` in your file explorer or open it in Google Chrome / Edge / Firefox:
```
file:///d:/OneNightRevise/index.html
```

### Option 2: Live Server / Node
If you have `npx` or Python installed:
```bash
# Using npx serve:
npx serve .

# Or using Python:
python -m http.server 3000
```

---

## 📚 Topics Covered So Far (Lectures 1–3)

1. **Lecture 01:** What is System Design? Core Pillars (Scalability, Availability, Reliability, Latency vs Throughput, HLD vs LLD).
2. **Lecture 02:** Monolithic vs Microservices Architecture & The Strangler Fig Pattern (Zero-downtime migration, Database per Service, CDC with Kafka).
3. **Lecture 03:** API Gateway vs Load Balancer + DNS Load Balancing (AWS Route 53, Azure Traffic Manager, Netflix Eureka, and handling millions of requests matching the YouTube Eraser.io diagram).

---

## ⚡ Interactive Labs Included

1. **Live Architecture Flow Simulator:**
   - Visualizes request packet trajectory: `Client` ➔ `DNS Load Balancer` ➔ `Regional API Gateway` ➔ `Service Discovery (Eureka)` ➔ `Internal LB` ➔ `Order Service`.
   - Controls to toggle client location (`California` vs `Massachusetts`) and trigger a simulated **San Francisco Regional Outage** to see real-time DNS failover!
2. **Strangler Fig Pattern Stepper:**
   - 4-stage interactive slider demonstrating how a monolithic architecture is incrementally strangled and replaced with autonomous microservices without downtime.
