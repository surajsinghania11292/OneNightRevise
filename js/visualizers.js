/* ═══════════════════════════════════════════════════════════════
   VISUALIZERS.JS — Interactive Architecture Simulators
   1. Multi-Region Global Traffic & Edge Routing (Handling Millions of Requests)
   2. Strangler Fig Pattern Migration Stepper
   ═══════════════════════════════════════════════════════════════ */

const Visualizers = (() => {

  let isSimulating = false;
  let clientLocation = 'california'; // 'california' or 'massachusetts'
  let region1Down = false;

  /* ─────────────────────────────────────────────────────────────
     1. GLOBAL ARCHITECTURE SIMULATOR (Millions of Requests)
     ───────────────────────────────────────────────────────────── */
  function initRequestSimulator() {
    const container = document.getElementById('request-sim-mount');
    if (!container) return;

    container.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-header">
          <div class="visualizer-title">
            <span class="pulse-dot"></span>
            <span>Live Architecture Simulation: Edge Routing to Microservices</span>
          </div>
          <div class="visualizer-controls">
            <button id="btn-toggle-loc" class="btn-secondary" title="Change client origin">
              📍 Origin: <strong id="loc-display">California (US-West)</strong>
            </button>
            <button id="btn-toggle-outage" class="btn-secondary" title="Simulate regional data center failure">
              ⚡ <span id="outage-display">Simulate SF Outage</span>
            </button>
            <button id="btn-send-request" class="btn-primary">
              ▶ Send Request (GET /api/v1/order)
            </button>
          </div>
        </div>

        <div class="visualizer-canvas" id="sim-canvas">
          <!-- Animated Packet Element -->
          <div id="sim-packet" class="network-packet"></div>

          <!-- Architecture Grid -->
          <div class="sim-grid">
            <!-- Col 1: Client Ingress -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-client">
                <div class="sim-box-tag">Client Application</div>
                <div class="sim-box-title">Client Device</div>
                <div class="sim-box-desc" id="client-loc-text">Location: California (US-West)</div>
                <div class="sim-box-sub mono">GET /api/v1/order</div>
              </div>
            </div>

            <!-- Col 2: Global Anycast DNS -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-dns">
                <div class="sim-box-tag">Global Traffic Manager</div>
                <div class="sim-box-title">AWS Route 53 / Azure TM</div>
                <div class="sim-box-desc">Geo-DNS & Latency Routing</div>
                <div class="sim-box-sub mono" id="dns-action">Resolves nearest healthy edge</div>
              </div>
            </div>

            <!-- Col 3: Regional Data Centers -->
            <div class="sim-col sim-col--regions">
              <!-- Region 1: California / SF (AZ-2) -->
              <div class="sim-region-card" id="region-sf">
                <div class="sim-region-header">
                  <span>Region 1: US-West / San Francisco (AZ-2)</span>
                  <span class="badge badge--success" id="badge-sf">HEALTHY</span>
                </div>
                <div class="sim-region-inner">
                  <!-- API Gateway A -->
                  <div class="sim-box sim-node" id="node-gw-a">
                    <div class="sim-box-tag">Regional Ingress</div>
                    <div class="sim-box-title">API Gateway A</div>
                    <div class="sim-box-sub mono">18.10.5.22</div>
                    <div class="sim-pills-row">
                      <span class="micro-pill">SSL Term</span>
                      <span class="micro-pill">JWT Verify</span>
                      <span class="micro-pill">Rate Limit (Token Bucket)</span>
                    </div>
                  </div>

                  <!-- Internal LB + Service Pods -->
                  <div class="sim-sub-cluster">
                    <div class="sim-box sim-node" id="node-lb-a">
                      <div class="sim-box-tag">Internal L7 Load Balancer</div>
                      <div class="sim-box-title">AZ-2 ALB + Service Discovery</div>
                    </div>
                    <div class="sim-services-row">
                      <div class="sim-service-pill sim-node" id="node-order-a">📦 Order Service (3 Pods)</div>
                      <div class="sim-service-pill sim-node" id="node-user-a">👤 User Service (2 Pods)</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Region 2: Massachusetts / Boston (AZ-1) -->
              <div class="sim-region-card" id="region-boston">
                <div class="sim-region-header">
                  <span>Region 2: US-East / Massachusetts (AZ-1)</span>
                  <span class="badge badge--success" id="badge-boston">HEALTHY</span>
                </div>
                <div class="sim-region-inner">
                  <!-- API Gateway B -->
                  <div class="sim-box sim-node" id="node-gw-b">
                    <div class="sim-box-tag">Regional Ingress</div>
                    <div class="sim-box-title">API Gateway B</div>
                    <div class="sim-box-sub mono">35.90.45.88</div>
                    <div class="sim-pills-row">
                      <span class="micro-pill">Eureka Registry</span>
                      <span class="micro-pill">JWT Verify</span>
                    </div>
                  </div>

                  <!-- Internal LB + Service Pods -->
                  <div class="sim-sub-cluster">
                    <div class="sim-box sim-node" id="node-lb-b">
                      <div class="sim-box-tag">Internal L7 Load Balancer</div>
                      <div class="sim-box-title">AZ-1 ALB + Service Discovery</div>
                    </div>
                    <div class="sim-services-row">
                      <div class="sim-service-pill sim-node" id="node-order-b">📦 Order Service (3 Pods)</div>
                      <div class="sim-service-pill sim-node" id="node-user-b">👤 User Service (2 Pods)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Telemetry Log Bar -->
        <div class="visualizer-telemetry">
          <div id="sim-log">System Ready. Click <strong>"Send Request"</strong> to trace network path.</div>
          <div id="sim-metric" class="mono">
            <span class="telemetry-tag">STATUS:</span> IDLE | <span class="telemetry-tag">LATENCY:</span> --ms
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-send-request').addEventListener('click', runSimulation);
    document.getElementById('btn-toggle-loc').addEventListener('click', toggleLocation);
    document.getElementById('btn-toggle-outage').addEventListener('click', toggleOutage);
  }

  function toggleLocation() {
    if (isSimulating) return;
    clientLocation = (clientLocation === 'california') ? 'massachusetts' : 'california';
    const locDisplay = document.getElementById('loc-display');
    const clientDesc = document.getElementById('client-loc-text');
    if (clientLocation === 'california') {
      locDisplay.textContent = 'California (US-West)';
      clientDesc.textContent = 'Location: California (US-West)';
    } else {
      locDisplay.textContent = 'Massachusetts (US-East)';
      clientDesc.textContent = 'Location: Massachusetts (US-East)';
    }
  }

  function toggleOutage() {
    if (isSimulating) return;
    region1Down = !region1Down;
    const regionSf = document.getElementById('region-sf');
    const badgeSf = document.getElementById('badge-sf');
    const outageBtn = document.getElementById('outage-display');

    if (region1Down) {
      regionSf.classList.add('region-offline');
      badgeSf.className = 'badge badge--warning';
      badgeSf.textContent = 'OUTAGE / OFFLINE';
      outageBtn.textContent = 'Recover SF Region';
      document.getElementById('sim-log').innerHTML =
        '<strong>Region 1 Failure Simulated:</strong> Route 53 health check detects heartbeat failure; traffic automatically fails over to Region 2 (Boston).';
    } else {
      regionSf.classList.remove('region-offline');
      badgeSf.className = 'badge badge--success';
      badgeSf.textContent = 'HEALTHY';
      outageBtn.textContent = 'Simulate SF Outage';
      document.getElementById('sim-log').innerHTML = 'Region 1 (San Francisco) restored online.';
    }
  }

  function runSimulation() {
    if (isSimulating) return;
    isSimulating = true;

    const logEl = document.getElementById('sim-log');
    const metricEl = document.getElementById('sim-metric');
    const packet = document.getElementById('sim-packet');
    const canvas = document.getElementById('sim-canvas');

    const nodeClient = document.getElementById('node-client');
    const nodeDns = document.getElementById('node-dns');

    let targetRegion = 'sf';
    if (clientLocation === 'massachusetts' || region1Down) {
      targetRegion = 'boston';
    }

    const nodeGw = (targetRegion === 'sf') ? document.getElementById('node-gw-a') : document.getElementById('node-gw-b');
    const nodeLb = (targetRegion === 'sf') ? document.getElementById('node-lb-a') : document.getElementById('node-lb-b');
    const nodeService = (targetRegion === 'sf') ? document.getElementById('node-order-a') : document.getElementById('node-order-b');

    function getCenter(el) {
      const cRect = canvas.getBoundingClientRect();
      const eRect = el.getBoundingClientRect();
      return {
        x: eRect.left - cRect.left + eRect.width / 2,
        y: eRect.top - cRect.top + eRect.height / 2
      };
    }

    function movePacket(targetEl, callback) {
      const pt = getCenter(targetEl);
      packet.style.left = `${pt.x}px`;
      packet.style.top = `${pt.y}px`;
      setTimeout(callback, 550);
    }

    // Step 1: Client initiates request
    const startPt = getCenter(nodeClient);
    packet.style.left = `${startPt.x}px`;
    packet.style.top = `${startPt.y}px`;
    packet.classList.add('active');
    nodeClient.classList.add('hit');

    logEl.innerHTML = `[1/5] Client initiates <code>GET /api/v1/order</code> via TLS 1.3...`;
    metricEl.innerHTML = `<span class="telemetry-tag">STATUS:</span> 100 CONTINUE | <span class="telemetry-tag">LATENCY:</span> 8ms`;

    // Step 2: Route 53 DNS Resolution
    setTimeout(() => {
      nodeClient.classList.remove('hit');
      nodeDns.classList.add('hit');
      movePacket(nodeDns, () => {
        if (targetRegion === 'sf') {
          logEl.innerHTML = `[2/5] DNS Route 53: Geo-routing resolved closest endpoint <strong>Region 1 (18.10.5.22)</strong>.`;
        } else if (region1Down) {
          logEl.innerHTML = `[2/5] DNS Route 53: Region 1 failed health check. Automatic failover routed to <strong>Region 2 (35.90.45.88)</strong>.`;
        } else {
          logEl.innerHTML = `[2/5] DNS Route 53: Geo-routing resolved East Coast endpoint <strong>Region 2 (35.90.45.88)</strong>.`;
        }
        metricEl.innerHTML = `<span class="telemetry-tag">STATUS:</span> DNS RESOLVED | <span class="telemetry-tag">LATENCY:</span> 18ms`;

        // Step 3: Ingress API Gateway
        setTimeout(() => {
          nodeDns.classList.remove('hit');
          nodeGw.classList.add('hit');
          movePacket(nodeGw, () => {
            logEl.innerHTML = `[3/5] API Gateway: Terminated SSL, verified JWT signature, checked Token Bucket rate limiter (Passed).`;
            metricEl.innerHTML = `<span class="telemetry-tag">STATUS:</span> AUTH OK | <span class="telemetry-tag">LATENCY:</span> 26ms`;

            // Step 4: Internal Load Balancer
            setTimeout(() => {
              nodeGw.classList.remove('hit');
              nodeLb.classList.add('hit');
              movePacket(nodeLb, () => {
                logEl.innerHTML = `[4/5] Internal ALB: Queried Service Discovery (Eureka), selected healthy pod <code>order-service-pod-2</code>.`;
                metricEl.innerHTML = `<span class="telemetry-tag">STATUS:</span> ROUTING | <span class="telemetry-tag">LATENCY:</span> 32ms`;

                // Step 5: Service Execution
                setTimeout(() => {
                  nodeLb.classList.remove('hit');
                  nodeService.classList.add('hit');
                  movePacket(nodeService, () => {
                    logEl.innerHTML = `[5/5] <strong>Order Service Processed:</strong> Order record committed, returning <code>200 OK</code> response.`;
                    metricEl.innerHTML = `<span class="telemetry-tag">STATUS:</span> 200 OK | <span class="telemetry-tag">TOTAL RTT:</span> 38ms`;

                    setTimeout(() => {
                      nodeService.classList.remove('hit');
                      packet.classList.remove('active');
                      isSimulating = false;
                    }, 1200);
                  });
                }, 250);
              });
            }, 250);
          });
        }, 250);
      });
    }, 250);
  }

  /* ─────────────────────────────────────────────────────────────
     2. STRANGLER FIG PATTERN INTERACTIVE STEPPER
     ───────────────────────────────────────────────────────────── */
  function initStranglerVisualizer() {
    const container = document.getElementById('strangler-sim-mount');
    if (!container) return;

    const stages = [
      {
        step: 0,
        title: "Stage 0: The Unified Monolith",
        desc: "All business logic (User, Order, Payment, Inventory) resides in a single deployable artifact and accesses a single monolithic database. Tightly coupled, high blast radius.",
        diagram: `
          <div class="arch-box" style="border-left: 3px solid var(--warning);">
            <div class="arch-box__title">Monolithic Application Core</div>
            <div class="arch-sub-boxes">
              <div class="arch-unit">User Module</div>
              <div class="arch-unit">Order Module</div>
              <div class="arch-unit">Payment Module</div>
              <div class="arch-unit">Inventory Module</div>
            </div>
            <div class="arch-db">Shared Monolith Database (ACID / Single Point of Failure)</div>
          </div>
        `
      },
      {
        step: 1,
        title: "Stage 1: Interceptor Proxy Placement",
        desc: "An API Gateway / Reverse Proxy is placed in front of the existing Monolith. All client ingress flows through the gateway, but 100% of requests are still routed to the Monolith. Zero production risk.",
        diagram: `
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div class="arch-box" style="border-left: 3px solid var(--accent);">
              <div class="arch-box__title">API Gateway (Edge Interceptor)</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Rule: Default (/*) ➔ Forward 100% to Monolith</div>
            </div>
            <div style="text-align: center; font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent);">⬇ 100% Ingress Traffic</div>
            <div class="arch-box">
              <div class="arch-box__title">Existing Monolith</div>
              <div class="arch-db">Monolith Database</div>
            </div>
          </div>
        `
      },
      {
        step: 2,
        title: "Stage 2: Carve Out First Bounded Context (Order Microservice)",
        desc: "The Order domain is decoupled into an autonomous service with its own database. Data is synchronized in real time using Change Data Capture (CDC via Debezium + Kafka). The gateway canary-routes traffic to the new service.",
        diagram: `
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div class="arch-box" style="border-left: 3px solid var(--accent);">
              <div class="arch-box__title">API Gateway (Path-Based Routing)</div>
              <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
                <span class="badge badge--success">/api/v1/order ➔ Order Microservice</span>
                <span class="badge">All other routes ➔ Legacy Monolith</span>
              </div>
            </div>
            <div class="arch-comparison-grid" style="margin-top: 0.5rem;">
              <div class="arch-box" style="border-left: 3px solid var(--success);">
                <div class="arch-box__title">Order Microservice</div>
                <div class="arch-unit">Independent Order Pods</div>
                <div class="arch-db">Dedicated Order Database</div>
              </div>
              <div class="arch-box">
                <div class="arch-box__title">Monolith (Shrinking)</div>
                <div class="arch-unit">User, Payment, Inventory</div>
                <div class="arch-db">Monolith Database</div>
              </div>
            </div>
          </div>
        `
      },
      {
        step: 3,
        title: "Stage 3: Full Decomposition & Legacy Retirement",
        desc: "All remaining bounded contexts (User, Payment, Inventory) are extracted into independent services. The legacy monolith code is deprecated, and its database tables are safely dropped.",
        diagram: `
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div class="arch-box" style="border-left: 3px solid var(--accent);">
              <div class="arch-box__title">API Gateway + Service Mesh</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">Dynamic Service Discovery & Full Edge Routing</div>
            </div>
            <div class="arch-sub-boxes" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
              <div class="arch-box" style="border-left: 2px solid var(--success);">
                <div class="arch-box__title">Order Service</div>
                <div class="arch-db">Order DB</div>
              </div>
              <div class="arch-box" style="border-left: 2px solid var(--success);">
                <div class="arch-box__title">User Service</div>
                <div class="arch-db">User DB</div>
              </div>
              <div class="arch-box" style="border-left: 2px solid var(--success);">
                <div class="arch-box__title">Payment Service</div>
                <div class="arch-db">Payment DB</div>
              </div>
              <div class="arch-box" style="border-left: 2px solid var(--success);">
                <div class="arch-box__title">Inventory Service</div>
                <div class="arch-db">Inventory DB</div>
              </div>
            </div>
          </div>
        `
      }
    ];

    function renderStage(idx) {
      const s = stages[idx];
      document.getElementById('strangle-stage-title').textContent = s.title;
      document.getElementById('strangle-stage-desc').textContent = s.desc;
      document.getElementById('strangle-stage-visual').innerHTML = s.diagram;

      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`btn-strangle-${i}`);
        if (btn) {
          btn.className = (i === idx) ? 'btn-primary' : 'btn-secondary';
        }
      }
    }

    container.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-header">
          <div class="visualizer-title">
            <span>Strangler Fig Migration Architecture (Interactive Phases)</span>
          </div>
          <div class="visualizer-controls">
            <button id="btn-strangle-0" class="btn-primary">Phase 0: Monolith</button>
            <button id="btn-strangle-1" class="btn-secondary">Phase 1: Ingress Proxy</button>
            <button id="btn-strangle-2" class="btn-secondary">Phase 2: Service Carve-out</button>
            <button id="btn-strangle-3" class="btn-secondary">Phase 3: Autonomous Mesh</button>
          </div>
        </div>

        <div class="visualizer-canvas" style="min-height: 340px;">
          <h4 id="strangle-stage-title" style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--accent);"></h4>
          <p id="strangle-stage-desc" style="color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.7; font-size: 0.92rem;"></p>
          <div id="strangle-stage-visual"></div>
        </div>
      </div>
    `;

    for (let i = 0; i < 4; i++) {
      document.getElementById(`btn-strangle-${i}`).addEventListener('click', () => renderStage(i));
    }

    renderStage(0);
  }

  return {
    init() {
      initRequestSimulator();
      initStranglerVisualizer();
    }
  };
})();
