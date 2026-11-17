/* ═══════════════════════════════════════════════════════════════
   VISUALIZERS.JS — Interactive animations & simulations:
   1. Millions of Requests Journey (DNS -> Gateway -> LB -> Services)
   2. Strangler Fig Pattern Migration Interactive Stepper
   3. API Gateway vs Load Balancer Feature Comparison Matrix
   ═══════════════════════════════════════════════════════════════ */

const Visualizers = (() => {

  /* ─────────────────────────────────────────────────────────────
     1. ARCHITECTURE FLOW SIMULATOR (Millions of Requests)
     Matches the YouTube video Eraser.io canvas:
     Client -> DNS Load Balancer (Route 53) -> API Gateway -> Eureka -> LB -> Services
     ───────────────────────────────────────────────────────────── */
  let isSimulating = false;
  let clientLocation = 'california'; // 'california' or 'massachusetts'
  let region1Down = false;

  function initRequestSimulator() {
    const container = document.getElementById('request-sim-mount');
    if (!container) return;

    container.innerHTML = `
      <div class="visualizer-container radar-scan-panel">
        <div class="visualizer-header">
          <div class="visualizer-title">
            <span class="pulse-dot"></span>
            <span>Live Architecture Flow Simulator (Handling Millions of Requests)</span>
          </div>
          <div class="visualizer-controls">
            <button id="btn-toggle-loc" class="btn-secondary" title="Change client origin">
              📍 Client: <strong id="loc-display">California (US-West)</strong>
            </button>
            <button id="btn-toggle-outage" class="btn-secondary" title="Simulate a data-center crash">
              ⚡ <span id="outage-display">Simulate SF Outage</span>
            </button>
            <button id="btn-send-request" class="btn-primary">
              🚀 Send Request (GET /api/v1/order)
            </button>
          </div>
        </div>

        <div class="visualizer-canvas" id="sim-canvas">
          <!-- Animated Packet Element -->
          <div id="sim-packet" class="network-packet"></div>

          <!-- Architecture Nodes Grid -->
          <div class="sim-grid">
            <!-- Left Column: Client -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-client">
                <div class="sim-box-tag">Client Device</div>
                <div class="sim-box-title">📱 Mobile / Laptop</div>
                <div class="sim-box-desc" id="client-loc-text">Location: California (US-West)</div>
                <div class="sim-box-sub mono">URL: api.myApp.com/api/v1/order</div>
              </div>
            </div>

            <!-- Middle-Left Column: DNS Load Balancer -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-dns">
                <div class="sim-box-tag">DNS Load Balancer</div>
                <div class="sim-box-title">🌐 AWS Route 53 / Azure TM</div>
                <div class="sim-box-desc">Latency & Geo Routing</div>
                <div class="sim-box-sub mono" id="dns-action">Resolves nearest healthy region</div>
              </div>
            </div>

            <!-- Right Column: Multi-Region Deployments -->
            <div class="sim-col sim-col--regions">
              <!-- Region 1: San Francisco (AZ-2) -->
              <div class="sim-region-card" id="region-sf">
                <div class="sim-region-header">
                  <span>Region 1: San Francisco (AZ-2)</span>
                  <span class="badge badge--success" id="badge-sf">ONLINE</span>
                </div>
                <div class="sim-region-inner">
                  <!-- API Gateway A -->
                  <div class="sim-box sim-node" id="node-gw-a">
                    <div class="sim-box-tag">Regional Gateway</div>
                    <div class="sim-box-title">🚪 API Gateway A</div>
                    <div class="sim-box-sub mono">IP: 18.10.5.22</div>
                    <div class="sim-pills-row">
                      <span class="micro-pill">SSL Term</span>
                      <span class="micro-pill">JWT Auth</span>
                      <span class="micro-pill">Rate Limit</span>
                    </div>
                  </div>

                  <!-- Internal LB + Microservices -->
                  <div class="sim-sub-cluster">
                    <div class="sim-box sim-node" id="node-lb-a">
                      <div class="sim-box-tag">Internal LB</div>
                      <div class="sim-box-title">⚖️ AZ-2 Load Balancer</div>
                    </div>
                    <div class="sim-services-row">
                      <div class="sim-service-pill sim-node" id="node-order-a">📦 Order Service (x3)</div>
                      <div class="sim-service-pill sim-node" id="node-user-a">👤 User Service (x2)</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Region 2: Massachusetts (Region 2 / AZ-1) -->
              <div class="sim-region-card" id="region-boston">
                <div class="sim-region-header">
                  <span>Region 2: Massachusetts / Boston (AZ-1)</span>
                  <span class="badge badge--success" id="badge-boston">ONLINE</span>
                </div>
                <div class="sim-region-inner">
                  <!-- API Gateway B -->
                  <div class="sim-box sim-node" id="node-gw-b">
                    <div class="sim-box-tag">Regional Gateway</div>
                    <div class="sim-box-title">🚪 API Gateway B</div>
                    <div class="sim-box-sub mono">IP: 35.90.45.88</div>
                    <div class="sim-pills-row">
                      <span class="micro-pill">Service Discovery (Eureka)</span>
                    </div>
                  </div>

                  <!-- Internal LB + Microservices -->
                  <div class="sim-sub-cluster">
                    <div class="sim-box sim-node" id="node-lb-b">
                      <div class="sim-box-tag">Internal LB</div>
                      <div class="sim-box-title">⚖️ AZ-1 Load Balancer</div>
                    </div>
                    <div class="sim-services-row">
                      <div class="sim-service-pill sim-node" id="node-order-b">📦 Order Service (x3)</div>
                      <div class="sim-service-pill sim-node" id="node-user-b">👤 User Service (x2)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Telemetry Log Bar -->
        <div class="visualizer-telemetry">
          <div id="sim-log">Ready. Click <strong>"Send Request"</strong> to trace packet execution.</div>
          <div id="sim-metric" class="mono">RTT: --ms | Status: IDLE</div>
        </div>
      </div>
    `;

    // Bind event handlers
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
      badgeSf.textContent = 'OFFLINE (OUTAGE)';
      outageBtn.textContent = 'Recover SF Region';
      document.getElementById('sim-log').innerHTML =
        '⚠️ <strong>SF Region Outage active!</strong> Route 53 health check will automatically reroute all traffic to Boston.';
    } else {
      regionSf.classList.remove('region-offline');
      badgeSf.className = 'badge badge--success';
      badgeSf.textContent = 'ONLINE';
      outageBtn.textContent = 'Simulate SF Outage';
      document.getElementById('sim-log').innerHTML = 'SF Region restored online.';
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

    // Determine target region based on location and failover
    let targetRegion = 'sf';
    if (clientLocation === 'massachusetts' || region1Down) {
      targetRegion = 'boston';
    }

    const nodeGw = (targetRegion === 'sf') ? document.getElementById('node-gw-a') : document.getElementById('node-gw-b');
    const nodeLb = (targetRegion === 'sf') ? document.getElementById('node-lb-a') : document.getElementById('node-lb-b');
    const nodeService = (targetRegion === 'sf') ? document.getElementById('node-order-a') : document.getElementById('node-order-b');

    // Utility to get center of element relative to canvas
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
      setTimeout(callback, 650);
    }

    // Step 1: Client initiates request
    const startPt = getCenter(nodeClient);
    packet.style.left = `${startPt.x}px`;
    packet.style.top = `${startPt.y}px`;
    packet.classList.add('active');
    nodeClient.classList.add('hit');

    logEl.innerHTML = `[1/5] Client in <strong>${clientLocation.toUpperCase()}</strong> queries <code>api.myApp.com/api/v1/order</code>...`;
    metricEl.textContent = 'RTT: 8ms | Resolving DNS...';

    // Step 2: Move to DNS Load Balancer
    setTimeout(() => {
      nodeClient.classList.remove('hit');
      nodeDns.classList.add('hit');
      movePacket(nodeDns, () => {
        if (targetRegion === 'sf') {
          logEl.innerHTML = `[2/5] DNS Route 53: Geo-routing picked nearest region <strong>San Francisco</strong> (IP: 18.10.5.22).`;
        } else if (region1Down) {
          logEl.innerHTML = `[2/5] DNS Route 53: SF region is DOWN! Health-check failover routes to <strong>Boston</strong> (IP: 35.90.45.88).`;
        } else {
          logEl.innerHTML = `[2/5] DNS Route 53: Geo-routing picked East Coast region <strong>Boston</strong> (IP: 35.90.45.88).`;
        }
        metricEl.textContent = 'RTT: 18ms | DNS Resolved';

        // Step 3: Move to Regional API Gateway
        setTimeout(() => {
          nodeDns.classList.remove('hit');
          nodeGw.classList.add('hit');
          movePacket(nodeGw, () => {
            logEl.innerHTML = `[3/5] Regional Gateway: Decrypted SSL, verified JWT Auth, checked Rate-Limit (OK), matched route <code>/api/v1/order</code>.`;
            metricEl.textContent = 'RTT: 26ms | Gateway Auth & Rate-Limit OK';

            // Step 4: Move to Internal Load Balancer
            setTimeout(() => {
              nodeGw.classList.remove('hit');
              nodeLb.classList.add('hit');
              movePacket(nodeLb, () => {
                logEl.innerHTML = `[4/5] Internal LB (AZ): Queried Service Discovery (Eureka), selected healthy pod <strong>Order-Service-Pod-2</strong>.`;
                metricEl.textContent = 'RTT: 32ms | Routing to Pod';

                // Step 5: Land on Order Service
                setTimeout(() => {
                  nodeLb.classList.remove('hit');
                  nodeService.classList.add('hit');
                  movePacket(nodeService, () => {
                    logEl.innerHTML = `[5/5] 🎉 <strong>Order Service Processed!</strong> Returned <code>200 OK</code> response back through the edge!`;
                    metricEl.textContent = 'RTT: 38ms | 200 OK (SUCCESS)';

                    // Finish
                    setTimeout(() => {
                      nodeService.classList.remove('hit');
                      packet.classList.remove('active');
                      isSimulating = false;
                    }, 1200);
                  });
                }, 300);
              });
            }, 300);
          });
        }, 300);
      });
    }, 300);
  }

  /* ─────────────────────────────────────────────────────────────
     2. STRANGLER FIG PATTERN INTERACTIVE STEPPER
     Visualizing step-by-step transition from Monolith to Microservices
     ───────────────────────────────────────────────────────────── */
  function initStranglerVisualizer() {
    const container = document.getElementById('strangler-sim-mount');
    if (!container) return;

    const stages = [
      {
        step: 0,
        title: "Stage 0: The Big Ball of Mud (Tangled Monolith)",
        desc: "All business logic (User, Order, Payment, Inventory) lives in a single code repository, shares 1 massive database, and is deployed as 1 giant binary. Fast to build early, but 1 bug crashes everything and scaling requires cloning the entire monster.",
        proxyPercent: 0,
        microCount: 0,
        diagram: `
          <div class="strangle-box strangle-box--monolith">
            <div class="strangle-title">🧱 Single Monolithic App</div>
            <div class="strangle-modules">
              <span class="s-mod">User Module</span>
              <span class="s-mod">Order Module</span>
              <span class="s-mod">Payment Module</span>
              <span class="s-mod">Inventory Module</span>
            </div>
            <div class="strangle-db">🗄️ Shared Monolith Database (Tightly Coupled Tables)</div>
          </div>
        `
      },
      {
        step: 1,
        title: "Stage 1: Introduce the Interceptor (API Gateway / Reverse Proxy)",
        desc: "Before writing any microservices, place an API Gateway (NGINX / Envoy / Cloudflare) in front of the existing Monolith. All client traffic goes to the Gateway first. Initially, the Gateway forwards 100% of traffic to the Monolith. Zero downtime, zero code changes.",
        proxyPercent: 100,
        microCount: 0,
        diagram: `
          <div class="strangle-step-row">
            <div class="strangle-box strangle-box--proxy">
              <div class="strangle-title">🛡️ API Gateway (Interceptor)</div>
              <div class="strangle-sub">Routes 100% of traffic to Monolith</div>
            </div>
            <div class="strangle-arrow">➔ 100% traffic</div>
            <div class="strangle-box strangle-box--monolith">
              <div class="strangle-title">🧱 Existing Monolith</div>
              <div class="strangle-db">🗄️ Monolith DB</div>
            </div>
          </div>
        `
      },
      {
        step: 2,
        title: "Stage 2: Carve out First Bounded Context (Order Microservice)",
        desc: "Build the first independent service (Order Service) with its OWN dedicated database (Database per Service). Set up Change Data Capture (Debezium/Kafka) or Dual-Writing to synchronize data. The API Gateway switches: /api/v1/order goes to the new microservice; everything else still goes to Monolith!",
        proxyPercent: 80,
        microCount: 1,
        diagram: `
          <div class="strangle-step-row">
            <div class="strangle-box strangle-box--proxy">
              <div class="strangle-title">🛡️ API Gateway</div>
              <div class="strangle-sub">Smart Path Routing</div>
            </div>
            <div class="strangle-split">
              <div class="strangle-branch">
                <span class="badge badge--success">20% Path: /api/v1/order</span>
                <div class="strangle-box strangle-box--micro">
                  <div class="strangle-title">📦 Order Microservice</div>
                  <div class="strangle-db">🗄️ Order DB (Autonomous)</div>
                </div>
              </div>
              <div class="strangle-branch">
                <span class="badge">80% All Other Routes</span>
                <div class="strangle-box strangle-box--monolith">
                  <div class="strangle-title">🧱 Monolith (Shrinking)</div>
                  <div class="strangle-db">🗄️ Monolith DB</div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        step: 3,
        title: "Stage 3: Eventual Strangulation (All Services Independent)",
        desc: "Repeat service by service (User, Payment, Inventory). The old monolith codebase shrinks until it can be safely decommissioned and retired. Congratulations! You migrated with ZERO user-facing downtime and no Big Bang disaster.",
        proxyPercent: 0,
        microCount: 4,
        diagram: `
          <div class="strangle-step-row">
            <div class="strangle-box strangle-box--proxy">
              <div class="strangle-title">🛡️ API Gateway</div>
              <div class="strangle-sub">Full Service Routing & Load Balancing</div>
            </div>
            <div class="strangle-micro-grid">
              <div class="strangle-box strangle-box--micro">📦 Order Service + DB</div>
              <div class="strangle-box strangle-box--micro">👤 User Service + DB</div>
              <div class="strangle-box strangle-box--micro">💳 Payment Service + DB</div>
              <div class="strangle-box strangle-box--micro">📊 Inventory Service + DB</div>
            </div>
          </div>
          <div class="strangle-graveyard">
            ⚰️ Legacy Monolith completely strangled and safely deleted!
          </div>
        `
      }
    ];

    let currentStage = 0;

    function renderStage(idx) {
      currentStage = idx;
      const s = stages[idx];
      document.getElementById('strangle-stage-title').textContent = s.title;
      document.getElementById('strangle-stage-desc').textContent = s.desc;
      document.getElementById('strangle-stage-visual').innerHTML = s.diagram;

      // Update button active state
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`btn-strangle-${i}`);
        if (btn) {
          if (i === idx) {
            btn.className = 'btn-primary';
          } else {
            btn.className = 'btn-secondary';
          }
        }
      }
    }

    container.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-header">
          <div class="visualizer-title">
            <span>🌿 Strangler Fig Migration Pattern (Step-by-Step Interactive)</span>
          </div>
          <div class="visualizer-controls">
            <button id="btn-strangle-0" class="btn-primary">Stage 0: Monolith</button>
            <button id="btn-strangle-1" class="btn-secondary">Stage 1: Proxy In</button>
            <button id="btn-strangle-2" class="btn-secondary">Stage 2: First Service</button>
            <button id="btn-strangle-3" class="btn-secondary">Stage 3: Full Microservices</button>
          </div>
        </div>

        <div class="visualizer-canvas" style="min-height: 380px;">
          <h4 id="strangle-stage-title" style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--accent);"></h4>
          <p id="strangle-stage-desc" style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.7; font-size: 0.95rem;"></p>
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
