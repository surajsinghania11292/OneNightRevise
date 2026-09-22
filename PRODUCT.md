# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Technical interview candidates and software engineers doing rapid revision (specifically the night or days before high-stakes technical interviews) who need to rebuild, solidify, and test mental models under time pressure.

## Product Purpose
OneNightRevise eliminates cognitive overload and passive reading before technical interviews by replacing hours of video tutorials with interactive execution visualizers and high-yield, battle-tested interview breakdowns. Success means a candidate can look at complex engine behaviors, data structure operations, or architectural flows and intuitively explain their execution step-by-step.

## Positioning
Unlike static cheatsheets, interview question dumps (e.g. LeetCode discuss, generic blogs), or long video courses, OneNightRevise pairs interactive, step-by-step runtime visualizers (showing call stack, memory allocations, TDZ, microtask queues, and scope chains) directly with condensed, interview-focused checklists.

## Operating Context
- Usage scenario: Late-night, pre-interview cramming and rapid review sessions on desktop browsers.
- Environments: Chrome, Firefox, Safari on desktop and laptop displays (1280px+ optimal for multi-panel visualizers).
- Mindset: High anxiety, time-constrained, seeking clarity and confidence over exhaustive encyclopedic theory.

## Capabilities and Constraints
- Tracks: JavaScript Deep Dive, Data Structures & Algorithms (DSA), Node.js Internals, System Design, and AI & Machine Learning.
- Interactive Engines: Step-by-step execution simulation (play, pause, step forward/back, state inspection, call stack, memory heap, microtask/macrotask queues).
- Technical Stack: Next.js 14 App Router, React 18, Tailwind CSS, Lucide React, TypeScript, Node.js backend.
- Dark & Light mode support: Optimized for late-night viewing with high contrast, crisp code fonts, and low eye fatigue.

## Brand Commitments
- Name: OneNightRevise (v1.0)
- Tone: Direct, punchy, technically precise, authoritative without academic fluff.
- Visual Identity: Monospace/technical accents, dark-mode first terminal aesthetic with refined borders and clean typography.

## Evidence on Hand
- Implemented JavaScript engine execution visualizer (`JsExecutionVisualizer.tsx`) modeling Phase 1 (Creation/Hoisting) and Phase 2 (Code Execution) with interactive controls.
- Defined interview syllabus for JavaScript, DSA, Node.js, System Design, and AI in `frontend/app/page.tsx`.

## Product Principles
1. **Interactive Over Passive**: Never describe what can be animated or stepped through interactively.
2. **High Signal, Zero Fluff**: Respect the candidate's last-night panic—deliver condensed, punchy explanations and common interview traps immediately.
3. **Execution Reality**: Mental models must match the actual runtime engine behavior (V8, Libuv, browser event loop).
4. **Instant Comprehension**: Layouts, call stacks, and diagrams must be readable at a glance without unnecessary friction.

## Accessibility & Inclusion
- High contrast syntax and visualizer states for readability in both dark and light modes.
- Full keyboard navigable interactive visualizers (step forward, reset, play/pause).
