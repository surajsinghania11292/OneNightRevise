# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are software engineers—ranging from junior developers establishing mental models to senior engineers preparing for system design interviews at top tech companies. They need deep, rigorous architectural explanations combined with intuitive visual simulations they can revise quickly the night before an interview or reference on the job.

## Product Purpose

OneNightRevise exists to turn complex, dry, and distributed system design theory into an authoritative, living engineering textbook and revision hub. Success means a developer can read a topic in plain, accessible language without sacrificing technical depth, watch real-time packet-level simulations of the architecture, and study code-level implementations and trade-offs they can speak to in high-stakes interviews.

## Positioning

Unlike static blog posts, generic interview cheat sheets, or academic textbooks, OneNightRevise pairs comprehensive, long-form textbook theory with interactive, runnable architectural simulators and dual-format output (an in-browser interactive web app plus offline-ready Markdown notes).

## Operating Context

- **Study & Revision:** Developers studying lecture-by-lecture from video courses and industry references on desktop or mobile devices.
- **Interview Prep:** Fast, high-yield navigation via sticky table of contents, telemetry logs, and FAANG-style interview Q&A accordions.
- **Offline Reading:** Clean markdown files (`notes/*.md`) compatible with Obsidian, VS Code, and GitHub.
- **Production Hosting:** Hosted on Vercel with automated GitHub CI/CD deployments.

## Capabilities and Constraints

- **Confirmed Capabilities:**
  - Multi-topic coverage starting with Lecture 01 (Fundamentals, HLD vs LLD, Scalability), Lecture 02 (Monolith vs Microservices & Strangler Fig), and Lecture 03 (API Gateway, L4/L7 Load Balancing, DNS Geo-routing, and handling millions of requests).
  - Interactive architecture visualizers (Packet journey simulator matching whiteboard diagrams, multi-stage Strangler Fig migration stepper).
  - Search filter, reading progress tracker, and persistent theme switcher.
  - Zero-dependency, pure static architecture for instant page loads and zero build errors.
- **Constraints:**
  - Strictly static frontend (HTML5/CSS3/Vanilla ES6 JS) to ensure zero hosting overhead and instant Vercel deployment.
  - Full comprehensive theory format with code implementations for all future topics.

## Brand Commitments

- **Name:** OneNightRevise
- **Visual Identity:** Custom Light Green (sage ivory `#F2F6F3` with forest emerald `#004743`) and Deep Pine Dark Green (`#071916` with mint `#34D399`).
- **Typography:** Fraunces (editorial serif headings), DM Sans (clean body), and DM Mono (code, telemetry, and architectural chips).
- **Tone:** Authoritative yet accessible—neither overly academic nor dumbed down. Junior developer intuition first, senior architect depth next.
- **Anti-Reference:** No robotic, CRT-scanline, or matrix terminal themes.

## Evidence on Hand

- `index.html`: Fully functional interactive revision hub.
- `css/`: Production design system (`variables.css`, `layout.css`, `components.css`, `animations.css`).
- `js/`: Modular data and simulation engine (`data.js`, `visualizers.js`, `ui.js`, `app.js`).
- `notes/`: Structured Markdown textbook chapters (`01-system-design-fundamentals.md`, `02-monolith-vs-microservices-migration.md`, `03-api-gateway-load-balancing-millions-requests.md`).
- `assets/youtube_eraser_diagram.jpg`: Actual lecture whiteboard reference diagram.

## Product Principles

1. **Depth Without Pretense:** Explain complex distributed systems intuitively first (real-world analogies), then dive into rigorous production-grade mechanics, failure modes, and code implementations.
2. **Interactive Proof:** Never describe an architectural flow with static text alone when a dynamic, packet-tracing simulation makes the mental model indelible.
3. **Dual Form Factor:** Every concept must live both in the rich, interactive web application and in clean, portable, offline-friendly Markdown files.
4. **Zero-Lag Performance:** Keep the core engine zero-dependency, ensuring sub-second load times and seamless static hosting on any CDN.

## Accessibility & Inclusion

- Responsive typography and fluid layouts across mobile, tablet, and widescreen viewports.
- High color contrast ratios in both light green and dark green themes.
- Clear visual hierarchy with semantic HTML headings, readable line lengths, and legible monospace code blocks.
