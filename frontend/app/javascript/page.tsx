'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  Code2, 
  ShieldAlert, 
  HelpCircle, 
  CheckCircle2,
  Lock,
  ArrowRight,
  Database
} from 'lucide-react';
import JsExecutionVisualizer from '@/components/JsExecutionVisualizer';
import TdzDiagram from '@/components/TdzDiagram';

export default function JavaScriptRevisionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* ========================================================
            HERO: MENTAL MODEL & ENGINE ANATOMY
        ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Core Thesis & Readability */}
          <div className="lg:col-span-7 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back to Track Overview
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface-100 dark:bg-surface-900 border border-border-contrast text-foreground">
                <Terminal size={12} className="text-amber-500" />
                TRACK 01 // FOUNDATIONS
              </span>
              <span className="text-xs font-mono text-foreground/50">
                V8 Engine &bull; Memory Lifecycle &bull; Scopes
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              JavaScript Engine, Scope & Code Execution
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Everything in JavaScript runs inside an <strong>Execution Context</strong>. Before any line executes, the V8 engine compiles source code, assigns memory addresses, and configures the lexical environment.
            </p>

            {/* High-Yield Mental Model Anchor */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-panel">
              <span className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Core Interview Mental Model
              </span>
              <p className="text-sm text-foreground/85 leading-relaxed">
                JavaScript execution is split into <strong>two distinct phases</strong>:
                <br />
                <span className="font-mono text-xs font-semibold text-foreground">1. Memory Creation (Hoisting):</span> Identifiers scanned & allocated in memory.
                <br />
                <span className="font-mono text-xs font-semibold text-foreground">2. Code Execution:</span> Values evaluated and assigned line-by-line synchronously on the Call Stack.
              </p>
            </div>
          </div>

          {/* Right: Engine Architecture Visual Diagram */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-panel space-y-4">
            <div className="flex items-center justify-between border-b border-border/80 pb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
                <Cpu size={14} className="text-amber-500" />
                V8 Engine Architecture
              </span>
              <span className="font-mono text-2xs text-foreground/50">PIPELINE</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Box 1: Parser */}
              <div className="p-3 rounded-lg border border-border bg-surface-50 dark:bg-surface-950 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-foreground block">1. Parser</span>
                  <span className="text-2xs text-foreground/60 font-sans">Tokenizes code & builds AST (Abstract Syntax Tree)</span>
                </div>
                <ArrowRight size={14} className="text-foreground/40 rotate-90 sm:rotate-0" />
              </div>

              {/* Box 2: Ignition */}
              <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-amber-600 dark:text-amber-400 block">2. Ignition (Interpreter)</span>
                  <span className="text-2xs text-foreground/60 font-sans">Compiles AST into fast bytecode immediately</span>
                </div>
                <ArrowRight size={14} className="text-foreground/40 rotate-90 sm:rotate-0" />
              </div>

              {/* Box 3: TurboFan */}
              <div className="p-3 rounded-lg border border-border bg-surface-50 dark:bg-surface-950 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-foreground block">3. TurboFan (JIT Compiler)</span>
                  <span className="text-2xs text-foreground/60 font-sans">Profiles hot functions & compiles to optimized machine code</span>
                </div>
                <ArrowRight size={14} className="text-foreground/40 rotate-90 sm:rotate-0" />
              </div>

              {/* Box 4: Execution Context */}
              <div className="p-3.5 rounded-xl border border-border-contrast bg-surface-100 dark:bg-surface-900 text-foreground">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs uppercase tracking-wider">Execution Context</span>
                  <span className="text-2xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                    Active Runtime
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-2xs font-mono pt-1">
                  <div className="p-2 rounded bg-card border border-border text-center">
                    <span className="text-foreground/60 block">Thread</span>
                    <strong className="text-foreground">Call Stack</strong>
                  </div>
                  <div className="p-2 rounded bg-card border border-border text-center">
                    <span className="text-foreground/60 block">Storage</span>
                    <strong className="text-foreground">Memory Heap</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PART 1: SCOPE HIERARCHIES & VARIABLE COMPARISON
        ======================================================== */}
        <section className="space-y-8">
          <div className="border-b border-border/80 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Module 01.1
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Variable Declarations & Lexical Scope
            </h2>
            <p className="text-foreground/75 text-sm sm:text-base mt-1">
              Where identifiers are bound, how they resolve across scopes, and why <code className="font-mono text-amber-600 dark:text-amber-400">var</code> differs from <code className="font-mono text-emerald-600 dark:text-emerald-400">let</code> and <code className="font-mono text-blue-600 dark:text-blue-400">const</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Scope Breakdown & Explanations */}
            <div className="lg:col-span-5 space-y-4 text-sm leading-relaxed text-foreground/80">
              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <h3 className="font-bold text-base text-foreground flex items-center justify-between">
                  <span>1. Global Scope</span>
                  <span className="font-mono text-2xs text-foreground/50">ROOT</span>
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Variables declared outside any function or block. In browsers, declaring with <code className="font-mono text-amber-500">var</code> attaches directly as a property of the <code className="font-mono">window</code> object, polluting the global namespace.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <h3 className="font-bold text-base text-foreground flex items-center justify-between">
                  <span>2. Function Scope</span>
                  <span className="font-mono text-2xs text-foreground/50">FRAME BOUND</span>
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Variables declared inside a function are locked to that function execution context. <code className="font-mono text-amber-500">var</code> is strictly function-scoped; it ignores <code className="font-mono">if</code> statements or <code className="font-mono">for</code> loops and leaks out!
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <h3 className="font-bold text-base text-foreground flex items-center justify-between">
                  <span>3. Block Scope (ES6)</span>
                  <span className="font-mono text-2xs text-emerald-600 dark:text-emerald-400 font-semibold">STRICT</span>
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Any block wrapped in curly braces <code className="font-mono">{"{ ... }"}</code>. <code className="font-mono text-emerald-500">let</code> and <code className="font-mono text-blue-400">const</code> are strictly confined to their block, eliminating accidental variable leakage.
                </p>
              </div>
            </div>

            {/* Right Side: High-Yield Comparison Table */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card overflow-hidden shadow-panel">
              <div className="p-4 border-b border-border bg-surface-50 dark:bg-surface-950 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-foreground">
                  Quick-Reference Cheat Matrix
                </span>
                <span className="text-2xs font-mono text-foreground/50">3 VARIABLE TYPES</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="border-b border-border text-foreground font-semibold bg-surface-100/50 dark:bg-surface-900/50 font-mono">
                    <tr>
                      <th className="p-3.5">Mechanic</th>
                      <th className="p-3.5 text-amber-600 dark:text-amber-400">var</th>
                      <th className="p-3.5 text-emerald-600 dark:text-emerald-400">let</th>
                      <th className="p-3.5 text-blue-600 dark:text-blue-400">const</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    <tr className="hover:bg-surface-50 dark:hover:bg-surface-950 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">Scope Type</td>
                      <td className="p-3.5 text-foreground/70">Function Scope</td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Block Scope</td>
                      <td className="p-3.5 text-blue-600 dark:text-blue-400 font-medium">Block Scope</td>
                    </tr>
                    <tr className="hover:bg-surface-50 dark:hover:bg-surface-950 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">Hoisting</td>
                      <td className="p-3.5 text-foreground/70">Initialized with <code className="font-mono">undefined</code></td>
                      <td className="p-3.5 text-foreground/80 font-medium">Hoisted (TDZ Active)</td>
                      <td className="p-3.5 text-foreground/80 font-medium">Hoisted (TDZ Active)</td>
                    </tr>
                    <tr className="hover:bg-surface-50 dark:hover:bg-surface-950 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">TDZ Guard</td>
                      <td className="p-3.5 text-rose-500 font-mono">No (returns undefined)</td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-mono font-medium">Yes (ReferenceError)</td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-mono font-medium">Yes (ReferenceError)</td>
                    </tr>
                    <tr className="hover:bg-surface-50 dark:hover:bg-surface-950 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">Re-declaration</td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-mono">Allowed</td>
                      <td className="p-3.5 text-rose-500 font-mono">Forbidden (SyntaxError)</td>
                      <td className="p-3.5 text-rose-500 font-mono">Forbidden (SyntaxError)</td>
                    </tr>
                    <tr className="hover:bg-surface-50 dark:hover:bg-surface-950 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">Re-assignment</td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-mono">Allowed</td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-mono">Allowed</td>
                      <td className="p-3.5 text-rose-500 font-mono">Forbidden (TypeError)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PART 2: HOISTING & THE TEMPORAL DEAD ZONE (TDZ)
        ======================================================== */}
        <section className="space-y-8">
          <div className="border-b border-border/80 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-semibold text-rose-500 uppercase tracking-wider">
                Module 01.2
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Hoisting & The Temporal Dead Zone (TDZ)
            </h2>
            <p className="text-foreground/75 text-sm sm:text-base mt-1">
              Why accessing modern variables early throws a hard error instead of returning undefined.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Editorial Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 space-y-3 shadow-panel">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <ShieldAlert size={18} className="text-rose-500" />
                  What is the Temporal Dead Zone?
                </h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  The <strong>Temporal Dead Zone (TDZ)</strong> is the region of code between the start of a lexical scope and the actual line where the variable declaration is evaluated by the engine.
                </p>
                <div className="p-3 rounded-lg bg-surface-50 dark:bg-surface-950 border border-border text-xs text-foreground/75 leading-relaxed">
                  <strong className="text-foreground">Why TDZ is a blessing:</strong> In older JavaScript, reading an uninitialized <code className="font-mono text-amber-500">var</code> silently produced <code className="font-mono">undefined</code>, allowing silent bugs to spread. TDZ forces a hard <code className="font-mono text-rose-500">ReferenceError</code> immediately.
                </div>
              </div>

              {/* Crucial Interview Question Pill */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
                <span className="font-mono text-2xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                  Top Interview Question
                </span>
                <h4 className="font-bold text-sm text-foreground">
                  Are `let` and `const` hoisted in JavaScript?
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  <strong>Yes, they ARE hoisted!</strong> Memory is allocated in Phase 1. The difference is that <code className="font-mono text-amber-500">var</code> is initialized with <code className="font-mono">undefined</code>, while <code className="font-mono text-emerald-500">let</code> and <code className="font-mono text-blue-500">const</code> remain <em>uninitialized</em> until their declaration line.
                </p>
              </div>
            </div>

            {/* Right Side: Interactive TDZ Visual Diagram */}
            <div className="lg:col-span-7">
              <TdzDiagram />
            </div>
          </div>
        </section>

        {/* ========================================================
            PART 3: INTERACTIVE EXECUTION SIMULATOR
        ======================================================== */}
        <section className="space-y-6">
          <div className="border-b border-border/80 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Module 01.3 // LIVE SIMULATION
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Watch How JavaScript Runs Code Line by Line
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-md">
              Step through the slow-motion debugger to observe how the Call Stack grows and how the Declarative Environment resolves values.
            </p>
          </div>

          {/* Full-width interactive simulation workbench */}
          <JsExecutionVisualizer />
        </section>

        {/* ========================================================
            PART 4: RAPID INTERVIEW QUESTION DRILLS
        ======================================================== */}
        <section className="space-y-6">
          <div className="border-b border-border/80 pb-4 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
                Module 01.4 // INTERVIEW PREP
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                High-Frequency Interview Traps
              </h2>
            </div>
            <span className="font-mono text-xs text-foreground/50 hidden sm:inline-block">
              3 High-Yield Questions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Q1 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-panel hover:border-border-contrast transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xs px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-900 border border-border text-foreground/70 mb-2 inline-block">
                  CLOSURE & TIMERS
                </span>
                <h3 className="font-bold text-sm text-foreground mb-2">
                  What does this print?
                </h3>
                <div className="p-3 rounded-lg bg-surface-950 dark:bg-black font-mono text-2xs text-surface-200 border border-border-contrast mb-3">
                  <p>for (var i = 0; i &lt; 3; i++) &#123;</p>
                  <p className="pl-3">setTimeout(() =&gt; console.log(i), 100);</p>
                  <p>&#125;</p>
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  <strong>Output:</strong> Prints <code className="text-rose-500 font-mono font-bold">3, 3, 3</code>.
                </p>
                <p className="text-xs text-foreground/70 leading-relaxed mt-1">
                  Because <code className="font-mono text-amber-500">var</code> is not block-scoped, all 3 timer callbacks reference the exact same memory address.
                </p>
              </div>
              <div className="pt-2 border-t border-border text-2xs text-emerald-600 dark:text-emerald-400 font-medium">
                Fix: Use <code className="font-mono">let</code> for separate block bindings &rarr; prints <code className="font-mono">0, 1, 2</code>.
              </div>
            </div>

            {/* Q2 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-panel hover:border-border-contrast transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xs px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-900 border border-border text-foreground/70 mb-2 inline-block">
                  FUNCTION HOISTING
                </span>
                <h3 className="font-bold text-sm text-foreground mb-2">
                  Declaration vs Expression Hoisting
                </h3>
                <div className="p-3 rounded-lg bg-surface-950 dark:bg-black font-mono text-2xs text-surface-200 border border-border-contrast mb-3">
                  <p><span className="text-blue-400">fn1</span>(); // &check; Works</p>
                  <p><span className="text-rose-400">fn2</span>(); // &cross; TypeError</p>
                  <p>function fn1() &#123;&#125;</p>
                  <p>var fn2 = () =&gt; &#123;&#125;;</p>
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  Function declarations are hoisted with their entire body. Function expressions only hoist the variable name as <code className="font-mono">undefined</code>.
                </p>
              </div>
              <div className="pt-2 border-t border-border text-2xs text-amber-600 dark:text-amber-400 font-medium">
                Takeaway: Invoking <code className="font-mono">undefined()</code> throws a TypeError!
              </div>
            </div>

            {/* Q3 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-panel hover:border-border-contrast transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xs px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-900 border border-border text-foreground/70 mb-2 inline-block">
                  MUTABILITY & CONST
                </span>
                <h3 className="font-bold text-sm text-foreground mb-2">
                  Can `const` object properties mutate?
                </h3>
                <div className="p-3 rounded-lg bg-surface-950 dark:bg-black font-mono text-2xs text-surface-200 border border-border-contrast mb-3">
                  <p>const obj = &#123; age: 20 &#125;;</p>
                  <p>obj.age = 21; // &check; Valid!</p>
                  <p>obj = &#123;&#125;; // &cross; TypeError!</p>
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  <strong>Yes!</strong> <code className="font-mono">const</code> protects the variable <em>reference</em> from being reassigned, but the object in heap memory remains mutable.
                </p>
              </div>
              <div className="pt-2 border-t border-border text-2xs text-blue-600 dark:text-blue-400 font-medium">
                Fix: To make properties truly immutable, use <code className="font-mono">Object.freeze(obj)</code>.
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}