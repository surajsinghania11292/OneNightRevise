'use client';

import React, { useState } from 'react';
import { AlertOctagon, CheckCircle2, ShieldAlert, Lock, Unlock, ArrowRight } from 'lucide-react';

export function TdzDiagram() {
  const [activeStage, setActiveStage] = useState<'tdz' | 'safe'>('tdz');

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-panel space-y-5">
      {/* Top Diagram Header */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
            TDZ Scope Lifetime Map
          </span>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setActiveStage('tdz')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all ${
              activeStage === 'tdz'
                ? 'border-rose-500/50 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold shadow-sm'
                : 'border-border text-foreground/60 hover:text-foreground'
            }`}
          >
            Trap Zone
          </button>
          <button
            onClick={() => setActiveStage('safe')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all ${
              activeStage === 'safe'
                ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm'
                : 'border-border text-foreground/60 hover:text-foreground'
            }`}
          >
            Safe Zone
          </button>
        </div>
      </div>

      {/* Visual Timeline / Scope Container */}
      <div className="space-y-3 font-mono text-xs">
        {/* Scope Entry */}
        <div className="flex items-center gap-3 text-foreground/60 text-2xs pb-1 border-b border-dashed border-border">
          <span className="font-semibold text-foreground">LINE 1</span>
          <span>&#123; // Block Scope Entered &rarr; `let x` hoisted as &lt;uninitialized&gt;</span>
        </div>

        {/* TDZ Active Zone */}
        <div className={`rounded-xl border transition-all p-4 space-y-2 relative overflow-hidden ${
          activeStage === 'tdz'
            ? 'border-rose-500/60 bg-rose-500/5 dark:bg-rose-950/20 shadow-sm'
            : 'border-rose-500/20 bg-rose-500/[0.02] opacity-70'
        }`}>
          <div className="flex items-center justify-between text-rose-600 dark:text-rose-400 font-semibold">
            <span className="flex items-center gap-1.5 text-2xs uppercase tracking-wider">
              <Lock size={12} /> Temporal Dead Zone (TDZ)
            </span>
            <span className="text-2xs font-sans px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
              Access Forbidden
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-950 dark:bg-black text-surface-100 border border-border-contrast space-y-1">
            <div className="flex items-center justify-between text-2xs text-foreground/40">
              <span>LINE 2</span>
              <span className="text-rose-400 font-semibold">Throws ReferenceError!</span>
            </div>
            <p className="text-rose-400 font-bold">console.log(score);</p>
            <p className="text-2xs text-neutral-400 pt-1">
              &gt; Uncaught ReferenceError: Cannot access &apos;score&apos; before initialization
            </p>
          </div>
          <p className="text-2xs text-foreground/70 font-sans leading-relaxed">
            Identifier exists in memory, but reading or writing to it throws immediately.
          </p>
        </div>

        {/* Declaration Point */}
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-contrast bg-surface-100 dark:bg-surface-900">
          <span className="font-semibold text-xs text-foreground">LINE 3</span>
          <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
            <code className="text-emerald-600 dark:text-emerald-400 font-bold">let score = 95;</code>
            <span className="inline-flex items-center gap-1 text-2xs text-emerald-600 dark:text-emerald-400 font-sans font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              <Unlock size={11} /> TDZ Ends Here
            </span>
          </div>
        </div>

        {/* Safe Execution Zone */}
        <div className={`rounded-xl border transition-all p-4 space-y-2 relative ${
          activeStage === 'safe'
            ? 'border-emerald-500/60 bg-emerald-500/5 dark:bg-emerald-950/20 shadow-sm'
            : 'border-emerald-500/20 bg-emerald-500/[0.02] opacity-70'
        }`}>
          <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="flex items-center gap-1.5 text-2xs uppercase tracking-wider">
              <CheckCircle2 size={12} /> Safe Access Zone
            </span>
            <span className="text-2xs font-sans px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Normal Execution
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-950 dark:bg-black text-surface-100 border border-border-contrast space-y-1">
            <div className="flex items-center justify-between text-2xs text-foreground/40">
              <span>LINE 4</span>
              <span className="text-emerald-400 font-semibold">Returns 95</span>
            </div>
            <p className="text-emerald-300">console.log(score);</p>
            <p className="text-2xs text-emerald-400/80 pt-1">&gt; 95</p>
          </div>
        </div>

        {/* Scope Exit */}
        <div className="flex items-center gap-3 text-foreground/60 text-2xs pt-1 border-t border-dashed border-border">
          <span className="font-semibold text-foreground">LINE 5</span>
          <span>&#125; // Block Scope Exited &rarr; Variable popped from declarative record</span>
        </div>
      </div>
    </div>
  );
}
export default TdzDiagram;
