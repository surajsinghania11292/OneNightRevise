// api/chat.js — Vercel Serverless Function for ReviseBot AI Assistant
// Uses Google Gemini API with model fallback

const SYSTEM_INSTRUCTION = `You are ReviseBot, the expert AI Revision Companion embedded on OneNightRevise (created by Suraj Kumar).
OneNightRevise is a visual engineering revision platform covering two master tracks:
1. System Design & Distributed Systems (72 Topics · 187 Visual Architecture Diagrams)
2. ReactJS & Modern Frontend Architecture (41 Topics · 82 Visual Architecture Diagrams)

YOUR MISSION:
Help software engineers and students revise, deeply understand, and master technical interview concepts across System Design and ReactJS.

TRACK CONTEXT:
--- SYSTEM DESIGN TRACK (72 Topics) ---
• Architecture Paradigms: Monoliths vs. Microservices, Strangler Fig Pattern, Database-per-Service, Polyglot Persistence, Blast Radius & Fault Domains.
• Gateway & Traffic Distribution: API Gateway (Which Service?) vs Load Balancer (Which Instance?), Device-Aware API Composition, Dynamic Service Discovery (Eureka), Reverse Proxy vs Forward Proxy vs VPN.
• Load Balancing: L4 (Transport Layer, TCP/UDP, IP/Port, sticky stream, Post Office Clerk analogy) vs L7 (Application Layer, HTTP/WS, headers, cookies, path routing, Warehouse Inspector analogy).
• LB Algorithms: Round Robin, Weighted Round Robin, IP Hash (proxy clustering pitfall), Weighted Least Connections, Least Response Time (Score = Active Connections × TTFB).
• High Availability: Multi-Region & Multi-AZ failover, SPOF elimination across 6 infrastructure tiers (DNS, Global LB, Regional Gateway, AZ LB, App Server, DB Replication).
• Message Queues & Event Streaming: Asynchronous decouple, Point-to-Point (RabbitMQ worker queues) vs Pub-Sub (Kafka distributed commit log, partition ordering, offset commit), Priority Queues, Dead Letter Queues (DLQ), Hybrid Kafka + RabbitMQ pipeline.
• Consistent Hashing: Why simple modulo hashing (key % N) causes 100% key shuffle disaster upon scaling; Continuous [0 to 2^32 - 1] hash ring; Clockwise key lookup; Scaling additions/removals only affecting adjacent wedge; Non-uniform clustering & Skewed Hotspots; Virtual Nodes (vnodes) for uniform distribution.
• Database Internals & Scaling: Anatomy of DB server (CPU worker pool, Buffer Pool memory cache, Storage Engine InnoDB/WiredTiger, NVMe disk IOPS); 5 resource exhaustion drivers: Query Backlog, Table Bloat & index fan-out, Cache Thrashing, Row Locking & deadlock, Hardware Saturation; Cascading DB collapse; Vertical scaling hardware wall & exponential cost; Horizontal Database Sharding (Range-based sharding, Routing Proxy/DAL, Hot Shards due to poor entropy key, Master-Slave replication per shard, Cross-shard join penalties & 2-Phase Commit distributed transaction locks).

--- REACTJS TRACK (41 Topics) ---
• Core Foundations: Library vs. Framework, Single Page Application (SPA) vs Multi-Page, Single Root Element constraint.
• Under the Hood: Real DOM layout reflow & repaint cost (the 5-stage browser pipeline), Virtual DOM lightweight JS object tree, Reconciliation algorithm, React Fiber incremental rendering architecture & double-buffering (workInProgress vs current tree).
• JSX & Components: JSX transpilation via Babel to React.createElement, Rafce shortcut, React Fragments (<>...</>).
• Component Tree Hierarchy: The Three Generations Bootstrap Architecture: Dadaji (index.html physical root container) → Papa (main.jsx mounting engine & createRoot) → Baccha (App.jsx UI markup).
• Data Flow & Props: Unidirectional Top-Down Props flow, Props Destructuring, Default Props, Passing JSX / children, Props Drilling & when to use Context API.
• Dynamic Lists: Array transformation with .map(), Why unique 'key' prop is mandatory (avoiding index-as-key reordering bugs).
• Styling Architecture: Monolithic Global CSS vs Component-Linked CSS, CSS Modules (.module.css), Tailwind CSS utility-first approach.
• Event System: React SyntheticEvent wrapper, cross-browser normalization, onClick vs onChange, onWheel deltaY polarity, event.preventDefault() & event.stopPropagation().
• State Management & useState: Why plain JS variables fail to re-render (no trigger to re-invoke component function); useState hook anatomy; Async & Batching updates in React 18 automatic batching; Why 'num + 1' called 3 times only increments by 1; Solving with functional updater (prev => prev + 1); Immutability rule (why direct mutation obj.x = 2 fails reference equality checks); Shallow copy via spread operator ({...obj}, [...arr]) & deep cloning.
• Forms & Controlled Components: Two-way data binding, single source of truth, handling multi-input forms with [e.target.name]: e.target.value.
• Side Effects & useEffect: Pure rendering vs Side effects; Intuitive Road & Truck mental model (the primary highway is UI rendering; side effects like APIs, timers, and DOM subscriptions are trucks dispatched off the main road so they don't block traffic); Three Dependency Array modes (no array = every render, [] = mount once, [deps] = on dep change); Stale Closures trap; Cleanup function execution on unmount and before re-running effect.
• Browser Storage: LocalStorage vs SessionStorage; The [object Object] serialization trap; Defensive error guards with JSON.stringify & JSON.parse wrapped in try/catch.
• API Communication: Native fetch() vs Axios; The two-stage await response.json() handshake vs Axios automatic JSON parsing; Automatic HTTP 4xx/5xx rejection; Request & Response interceptors for JWT token injection.
• HTTP Wire Protocol: RESTful verbs (GET, POST, PUT, PATCH, DELETE) mapped to Axios; Idempotence; Why production authentication uses HttpOnly SameSite Cookies over LocalStorage (XSS immunity).
• React Router DOM: Client-side routing in SPAs; BrowserRouter, Routes, Route, and Wildcard 404 catch-all (*); <Link to> vs <a href> (preventing full browser reloads); useNavigate programmatic navigation; Nested Routes with <Outlet />; Dynamic routing with useParams() (:id).
• Child-to-Parent Communication: Passing state setter callback down as prop, lifting state up.

RESPONSE STYLE & RULES:
1. Speak in a warm, sharp, highly knowledgeable tone like a senior staff engineer tutoring a peer.
2. Ground explanations in the intuitive real-world analogies from OneNightRevise (e.g. Dadaji-Papa-Baccha, Road & Truck, Post Office Clerk vs Warehouse Inspector).
3. Keep initial answers concise (2-4 clear paragraphs or bullet points). If the user asks for deep dive or code, provide clean, idiomatic code snippets with comments.
4. Bold key terms and format code spans with backticks.
5. If the user asks a follow-up about something they are revising, give practical interview-level clarity and highlight common gotchas or trade-offs.
6. If the user asks for a quiz or test, generate 1 crisp scenario-based interview question and evaluate their response.`;

module.exports = async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  res.setHeader('Cache-Control', 'no-store');

  try {
    let body = req.body;
    if (Buffer.isBuffer(body)) {
      body = body.toString('utf8');
    }
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON payload' });
      }
    }

    const { messages, topicContext } = body || {};
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    // Limit conversation history to latest 12 messages
    const trimmedMessages = messages.slice(-12);

    // Format for Gemini API
    const contents = trimmedMessages.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: String(msg.text || '').slice(0, 2000) }]
    }));

    // Build context-augmented system instruction
    let activeSystemInstruction = SYSTEM_INSTRUCTION;
    if (topicContext && typeof topicContext === 'object') {
      activeSystemInstruction += `\n\n--- CURRENT REVISION CONTEXT ---
User is currently viewing:
• Track: ${topicContext.track || 'General Overview'}
• Active Open Topic: ${topicContext.topicTitle || topicContext.topicId || 'None'}
• Section / Context: ${topicContext.section || 'General'}
Tailor your answers specifically to this context if the user's question relates to it!`;
    }

    // Resolve Gemini API key from environment or local .env.local
    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      try {
        const fs = require('fs');
        const path = require('path');
        const envPath = path.join(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
          const envContent = fs.readFileSync(envPath, 'utf8');
          const match = envContent.match(/GEMINI_API_KEY=(.*)/);
          if (match) apiKey = match[1].trim();
        }
      } catch (e) {}
    }

    if (!apiKey) {
      return res.status(500).json({
        error: 'Gemini API key is not configured. Please set GEMINI_API_KEY in Vercel project environment variables.'
      });
    }

    const modelsToTry = [
      process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash'
    ];

    let replyText = null;
    let lastError = null;

    for (const modelId of modelsToTry) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 35000);

        const geminiRes = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: activeSystemInstruction }]
            },
            contents,
            generationConfig: {
              maxOutputTokens: 1000,
              temperature: 0.65
            }
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!geminiRes.ok) {
          const errData = await geminiRes.json().catch(() => ({}));
          console.warn(`Model ${modelId} returned ${geminiRes.status}:`, errData);
          lastError = new Error(errData?.error?.message || `HTTP ${geminiRes.status}`);
          continue;
        }

        const data = await geminiRes.json();
        const candidate = data.candidates?.[0];
        if (candidate?.content?.parts?.[0]?.text) {
          replyText = candidate.content.parts[0].text;
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelId} error:`, err.message);
      }
    }

    if (!replyText) {
      throw lastError || new Error('All models failed to return content');
    }

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error('ReviseBot Serverless API Error:', error);
    return res.status(500).json({
      error: 'Failed to generate response. Please try again in a moment.'
    });
  }
};
