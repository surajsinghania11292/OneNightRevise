/* ═══════════════════════════════════════════════════════════════
   VISUALIZERS.JS — Interactive Architecture Simulators
   1. End-to-End High-Scale Request Flow (DNS Region ➔ Gateway AZ ➔ LB Instance)
   2. Strangler Fig & Canary Deployment Stepper with Instant Rollback
   ═══════════════════════════════════════════════════════════════ */

const Visualizers = (() => {

  let isSimulating = false;
  let clientLocation = 'california'; // 'california' or 'massachusetts'
  let az1Down = false;

  /* ─────────────────────────────────────────────────────────────
     1. END-TO-END HIGH-SCALE REQUEST FLOW SIMULATOR
     Matches:
     1. Client Action (POST /api/v1/order)
     2. DNS Load Balancer (Region Selection: CA vs MA)
     3. API Gateway + Eureka (AZ Selection: LA AZ1 vs SF AZ2)
     4. Internal LB (Instance Selection: Order-1, Order-2, Order-3)
     ───────────────────────────────────────────────────────────── */
  function initRequestSimulator() {
    const container = document.getElementById('request-sim-mount');
    if (!container) return;

    container.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-header">
          <div class="visualizer-title">
            <span class="pulse-dot"></span>
            <span>Live High-Scale Request Flow: Region ➔ AZ ➔ Instance</span>
          </div>
          <div class="visualizer-controls">
            <button id="btn-toggle-loc" class="sim-btn-outline" title="Change client geographic location">
              📍 Origin: <strong id="loc-display">California</strong>
            </button>
            <button id="btn-toggle-az" class="sim-btn-outline" title="Simulate data center failure">
              ⚡ <span id="az-display">Simulate AZ1 Outage</span>
            </button>
            <button id="btn-send-request" class="sim-btn-pill">
              ▶ Send Request (POST /api/v1/order)
            </button>
          </div>
        </div>

        <div class="visualizer-canvas" id="sim-canvas">
          <!-- Animated Packet Element -->
          <div id="sim-packet" class="network-packet"></div>

          <!-- Architecture Pipeline (Full Width 4-Stage Grid) -->
          <div class="sim-grid">
            <!-- Stage 1: Client Device -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-client">
                <div class="sim-box-tag">Stage 1 · Client Action</div>
                <div class="sim-box-title">Client Device</div>
                <div class="sim-box-desc" id="client-loc-text">Location: California (US-West)</div>
                <div class="sim-box-sub mono">POST /api/v1/order</div>
              </div>
            </div>

            <!-- Stage 2: DNS Anycast Load Balancer -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-dns">
                <div class="sim-box-tag">Stage 2 · Region Selection</div>
                <div class="sim-box-title">DNS Anycast Balancer</div>
                <div class="sim-box-desc">AWS Route 53 / Azure TM</div>
                <div class="sim-box-sub mono" id="dns-action">Resolves nearest healthy Region IP</div>
              </div>
            </div>

            <!-- Stage 3: Regional API Gateway + Eureka -->
            <div class="sim-col">
              <div class="sim-box sim-node" id="node-gw-ca">
                <div class="sim-box-tag">Stage 3 · Regional Ingress</div>
                <div class="sim-box-title" id="gw-title">API Gateway A (California)</div>
                <div class="sim-box-desc" id="gw-ip">IP: 18.10.5.22 · SSL & JWT Auth</div>
                <div class="sim-box-sub mono" id="gw-eureka">
                  Queries Eureka Service Discovery for healthy AZ
                </div>
              </div>
            </div>

            <!-- Stage 4 & 5: Availability Zones & Internal Pods -->
            <div class="sim-col">
              <div class="sim-sub-cluster">
                <!-- AZ 1: Primary Data Center -->
                <div class="sim-box sim-node" id="node-az1">
                  <div class="sim-box-tag">Stage 4 · Internal LB (Primary AZ)</div>
                  <div class="sim-box-title" id="az1-title">AZ-1: Los Angeles ALB</div>
                  <div class="sim-box-desc">Distributes to healthiest instance</div>
                  <div class="sim-services-row" style="margin-top: 8px;">
                    <div class="sim-service-pill sim-node" id="node-order-1">Order-1</div>
                    <div class="sim-service-pill sim-node" id="node-order-2">Order-2</div>
                    <div class="sim-service-pill sim-node" id="node-order-3">Order-3</div>
                  </div>
                </div>

                <!-- AZ 2: Failover Data Center -->
                <div class="sim-box sim-node" id="node-az2" style="opacity: 0.85;">
                  <div class="sim-box-tag">Failover AZ · Internal LB</div>
                  <div class="sim-box-title" id="az2-title">AZ-2: San Francisco ALB</div>
                  <div class="sim-box-desc">Hot standby for zero-downtime failover</div>
                  <div class="sim-services-row" style="margin-top: 8px;">
                    <div class="sim-service-pill sim-node" id="node-order-sf1">Order-SF1</div>
                    <div class="sim-service-pill sim-node" id="node-order-sf2">Order-SF2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Telemetry Log Bar -->
        <div class="visualizer-telemetry">
          <div id="sim-log">Ready. Click <strong>"Send Request"</strong> to trace execution from Region to AZ to Instance.</div>
          <div id="sim-metric" class="mono">
            <span class="telemetry-tag">STATUS:</span> IDLE | <span class="telemetry-tag">LATENCY:</span> --ms
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-send-request').addEventListener('click', runSimulation);
    document.getElementById('btn-toggle-loc').addEventListener('click', toggleLocation);
    document.getElementById('btn-toggle-az').addEventListener('click', toggleAzOutage);
  }

  function toggleLocation() {
    if (isSimulating) return;
    clientLocation = (clientLocation === 'california') ? 'massachusetts' : 'california';
    const locDisplay = document.getElementById('loc-display');
    const clientDesc = document.getElementById('client-loc-text');
    const gwTitle = document.getElementById('gw-title');
    const gwIp = document.getElementById('gw-ip');
    const az1Title = document.getElementById('az1-title');
    const az2Title = document.getElementById('az2-title');

    if (clientLocation === 'california') {
      locDisplay.textContent = 'California';
      clientDesc.textContent = 'Location: California (US-West)';
      if (gwTitle) gwTitle.textContent = 'API Gateway A (California)';
      if (gwIp) gwIp.textContent = 'IP: 18.10.5.22 · SSL & JWT Auth';
      if (az1Title) az1Title.textContent = 'AZ-1: Los Angeles ALB';
      if (az2Title) az2Title.textContent = 'AZ-2: San Francisco ALB';
    } else {
      locDisplay.textContent = 'Massachusetts';
      clientDesc.textContent = 'Location: Massachusetts (US-East)';
      if (gwTitle) gwTitle.textContent = 'API Gateway B (Massachusetts)';
      if (gwIp) gwIp.textContent = 'IP: 35.90.45.88 · SSL & JWT Auth';
      if (az1Title) az1Title.textContent = 'AZ-1: Boston ALB';
      if (az2Title) az2Title.textContent = 'AZ-2: Cambridge ALB';
    }
  }

  function toggleAzOutage() {
    if (isSimulating) return;
    az1Down = !az1Down;
    const nodeAz1 = document.getElementById('node-az1');
    const azBtn = document.getElementById('az-display');

    if (az1Down) {
      nodeAz1.style.opacity = '0.35';
      nodeAz1.style.borderStyle = 'dashed';
      azBtn.textContent = 'Recover AZ1 (Los Angeles)';
      document.getElementById('sim-log').innerHTML =
        '<strong>AZ1 Outage Active:</strong> Los Angeles data center down. API Gateway + Eureka will dynamically route to <strong>AZ2 (San Francisco)</strong>.';
    } else {
      nodeAz1.style.opacity = '1';
      nodeAz1.style.borderStyle = 'solid';
      azBtn.textContent = 'Simulate AZ1 Outage';
      document.getElementById('sim-log').innerHTML = 'AZ1 (Los Angeles) restored healthy.';
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
    const nodeGw = document.getElementById('node-gw-ca');
    const targetAz = az1Down ? document.getElementById('node-az2') : document.getElementById('node-az1');
    const targetOrder = az1Down ? document.getElementById('node-order-sf1') : document.getElementById('node-order-2');

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
      setTimeout(callback, 500);
    }

    // Step 1: Client action
    const startPt = getCenter(nodeClient);
    packet.style.left = `${startPt.x}px`;
    packet.style.top = `${startPt.y}px`;
    packet.classList.add('active');
    nodeClient.classList.add('hit');

    logEl.innerHTML = `[1/4] Client clicks Place Order ➔ <code>POST /api/v1/order</code> initiated.`;
    metricEl.innerHTML = `<span class="telemetry-tag">STEP 1:</span> CLIENT DISPATCH | <span class="telemetry-tag">TIME:</span> 4ms`;

    // Step 2: DNS Region Selection
    setTimeout(() => {
      nodeClient.classList.remove('hit');
      nodeDns.classList.add('hit');
      movePacket(nodeDns, () => {
        const regName = (clientLocation === 'california') ? 'California (18.10.5.22)' : 'Massachusetts (35.90.45.88)';
        logEl.innerHTML = `[2/4] <strong>DNS Load Balancer:</strong> Proximity routing evaluated! Resolved closest region <strong>${regName}</strong>.`;
        metricEl.innerHTML = `<span class="telemetry-tag">STEP 2:</span> REGION SELECTED | <span class="telemetry-tag">TIME:</span> 12ms`;

        // Step 3: API Gateway + Eureka (AZ Selection)
        setTimeout(() => {
          nodeDns.classList.remove('hit');
          nodeGw.classList.add('hit');
          movePacket(nodeGw, () => {
            const azPrimary = (clientLocation === 'california') ? 'AZ-1 (Los Angeles)' : 'AZ-1 (Boston)';
            const azFailover = (clientLocation === 'california') ? 'AZ-2 (San Francisco)' : 'AZ-2 (Cambridge)';

            if (az1Down) {
              logEl.innerHTML = `[3/4] <strong>API Gateway + Eureka:</strong> ${azPrimary} is DOWN. Eureka dynamically resolves healthy failover <strong>${azFailover}</strong>.`;
            } else {
              logEl.innerHTML = `[3/4] <strong>API Gateway + Eureka:</strong> Verified OAuth 2.0 Token. Eureka resolves healthy <strong>${azPrimary}</strong> Internal ALB.`;
            }
            metricEl.innerHTML = `<span class="telemetry-tag">STEP 3:</span> AZ RESOLVED | <span class="telemetry-tag">TIME:</span> 22ms`;

            // Step 4: Internal LB Instance Selection
            setTimeout(() => {
              nodeGw.classList.remove('hit');
              targetAz.classList.add('hit');
              movePacket(targetAz, () => {
                logEl.innerHTML = `[4/4] <strong>Internal Load Balancer:</strong> Instance selection! Checks load & routes to <strong>${targetOrder.textContent}</strong>.`;
                metricEl.innerHTML = `<span class="telemetry-tag">STEP 4:</span> INSTANCE SELECTED | <span class="telemetry-tag">TIME:</span> 30ms`;

                // Land on Pod
                setTimeout(() => {
                  targetAz.classList.remove('hit');
                  targetOrder.classList.add('hit');
                  movePacket(targetOrder, () => {
                    logEl.innerHTML = `🎉 <strong>Order Placed Successfully:</strong> <code>Order-2</code> committed record to DB. Returned <code>201 Created</code>!`;
                    metricEl.innerHTML = `<span class="telemetry-tag">STATUS:</span> 201 CREATED | <span class="telemetry-tag">TOTAL RTT:</span> 36ms`;

                    setTimeout(() => {
                      targetOrder.classList.remove('hit');
                      packet.classList.remove('active');
                      isSimulating = false;
                    }, 1400);
                  });
                }, 200);
              });
            }, 250);
          });
        }, 250);
      });
    }, 250);
  }

  /* ─────────────────────────────────────────────────────────────
     2. STRANGLER FIG & CANARY TRAFFIC ROLLOUT STEPPER
     ───────────────────────────────────────────────────────────── */
  function initStranglerVisualizer() {
    const container = document.getElementById('strangler-sim-mount');
    if (!container) return;

    const stages = [
      {
        percent: "0.1%",
        title: "Canary Stage 1: 0.1% Pilot Traffic",
        desc: "The proxy routes 0.1% of live traffic to the new Payment microservice and 99.9% to the Monolith. Real-time telemetry evaluates memory, CPU, and error budgets.",
        diagram: `
          <div class="sub-card-grid-2">
            <div class="sub-box" style="border-left: 3px solid var(--accent);">
              <div class="sub-box__tag">Traffic Split</div>
              <div class="sub-box__title">99.9% Monolith · 0.1% Canary</div>
              <div class="sub-box__body">Payment Microservice receives synthetic / small pilot traffic. Zero user impact if bugs surface.</div>
            </div>
            <div class="sub-box" style="border-left: 3px solid var(--success);">
              <div class="sub-box__tag">Data Sync</div>
              <div class="sub-box__title">Transactional Outbox + Kafka</div>
              <div class="sub-box__body">Monolith database payment table mutations stream asynchronously to the Microservice DB.</div>
            </div>
          </div>
        `
      },
      {
        percent: "5%",
        title: "Canary Stage 2: 5% Production Load",
        desc: "Traffic is increased to 5%. p99 latency is verified against the monolith baseline. SAGA compensating transactions tested for failure rollbacks.",
        diagram: `
          <div class="sub-card-grid-2">
            <div class="sub-box" style="border-left: 3px solid var(--accent);">
              <div class="sub-box__tag">Traffic Split</div>
              <div class="sub-box__title">95% Monolith · 5% Microservice</div>
              <div class="sub-box__body">Significant real-world user distribution. Edge proxy verifies auth tokens and routes reliably.</div>
            </div>
            <div class="sub-box" style="border-left: 3px solid var(--warning);">
              <div class="sub-box__tag">Instant Rollback Guarantee</div>
              <div class="sub-box__title">Strangler Proxy Dial</div>
              <div class="sub-box__body">If error rates cross 0.5%, the controller instantly dials traffic back to 0% with no deployment needed.</div>
            </div>
          </div>
        `
      },
      {
        percent: "50%",
        title: "Canary Stage 3: 50% High-Scale Ingress",
        desc: "Equal split between Monolith and Payment microservice. Elastic auto-scaling verifies that Payment pods scale up smoothly under peak demand.",
        diagram: `
          <div class="sub-card-grid-2">
            <div class="sub-box" style="border-left: 3px solid var(--accent);">
              <div class="sub-box__tag">Traffic Split</div>
              <div class="sub-box__title">50% Monolith · 50% Microservice</div>
              <div class="sub-box__body">Microservice handles half of global payments. Dedicated PostgreSQL DB handles load cleanly.</div>
            </div>
            <div class="sub-box" style="border-left: 3px solid var(--success);">
              <div class="sub-box__tag">Health Assertion</div>
              <div class="sub-box__title">Zero Data Drift Confirmed</div>
              <div class="sub-box__body">Dual-write reconciliation scripts confirm 100% financial transaction parity across stores.</div>
            </div>
          </div>
        `
      },
      {
        percent: "100%",
        title: "Canary Stage 4: 100% Full Cutover & Monolith Decommission",
        desc: "100% of live production traffic now flows to the Payment Microservice. The old payment module inside the monolith is safely removed and deprecated.",
        diagram: `
          <div class="sub-box" style="border-left: 3px solid var(--success); text-align:center;">
            <div class="sub-box__tag">Migration Complete</div>
            <div class="sub-box__title">100% Traffic on Autonomous Microservice</div>
            <div class="sub-box__body">
              The Payment module inside the monolith codebase is safely decommissioned. Congratulations! You migrated with zero user downtime and zero data loss.
            </div>
          </div>
        `
      }
    ];

    function renderStage(idx) {
      const s = stages[idx];
      document.getElementById('canary-stage-title').textContent = s.title;
      document.getElementById('canary-stage-desc').textContent = s.desc;
      document.getElementById('canary-stage-visual').innerHTML = s.diagram;

      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`btn-canary-${i}`);
        if (btn) {
          btn.className = (i === idx) ? 'sim-btn-pill' : 'sim-btn-outline';
        }
      }
    }

    container.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-header">
          <div class="visualizer-title">
            <span>Canary Deployment & Strangler Fig Rollout (Interactive Traffic Dial)</span>
          </div>
          <div class="visualizer-controls">
            <button id="btn-canary-0" class="sim-btn-pill">0.1% Pilot</button>
            <button id="btn-canary-1" class="sim-btn-outline">5% Traffic</button>
            <button id="btn-canary-2" class="sim-btn-outline">50% Traffic</button>
            <button id="btn-canary-3" class="sim-btn-outline">100% Full Cutover</button>
          </div>
        </div>

        <div class="visualizer-canvas" style="min-height: 280px; padding: 1.75rem;">
          <h4 id="canary-stage-title" style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--accent);"></h4>
          <p id="canary-stage-desc" style="color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.7; font-size: 0.94rem;"></p>
          <div id="canary-stage-visual"></div>
        </div>
      </div>
    `;

    for (let i = 0; i < 4; i++) {
      document.getElementById(`btn-canary-${i}`).addEventListener('click', () => renderStage(i));
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
