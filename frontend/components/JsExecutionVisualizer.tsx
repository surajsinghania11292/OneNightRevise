'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, AlertTriangle, Terminal, Layers, Database } from 'lucide-react';

interface ExecutionStep {
  line: number;
  phase: 'creation' | 'execution';
  title: string;
  description: string;
  callStack: string[];
  memory: {
    globalScope: { name: string; value: string; status: 'hoisted' | 'assigned' | 'empty' }[];
    scriptScope: { name: string; value: string; status: 'tdz' | 'assigned' | 'empty' }[];
  };
  consoleOutput: string[];
  error?: string;
}

const steps: ExecutionStep[] = [
  {
    line: 0,
    phase: 'creation',
    title: 'Phase 1: Memory Creation (Compilation / Hoisting)',
    description: 'Before running any code, the JS engine scans the entire file. Memory is allocated for all variables and functions.',
    callStack: ['Global Execution Context (GEC)'],
    memory: {
      globalScope: [
        { name: 'var a', value: 'undefined', status: 'hoisted' }
      ],
      scriptScope: [
        { name: 'let b', value: '<uninitialized> (TDZ)', status: 'tdz' },
        { name: 'const c', value: '<uninitialized> (TDZ)', status: 'tdz' }
      ]
    },
    consoleOutput: []
  },
  {
    line: 1,
    phase: 'execution',
    title: 'Line 1: Accessing var before declaration',
    description: 'console.log(a) is executed. Because var a was hoisted with undefined in the Global Scope, it prints undefined without throwing an error.',
    callStack: ['Global Execution Context (GEC)', 'console.log(a)'],
    memory: {
      globalScope: [
        { name: 'var a', value: 'undefined', status: 'hoisted' }
      ],
      scriptScope: [
        { name: 'let b', value: '<uninitialized> (TDZ)', status: 'tdz' },
        { name: 'const c', value: '<uninitialized> (TDZ)', status: 'tdz' }
      ]
    },
    consoleOutput: ['> undefined']
  },
  {
    line: 2,
    phase: 'execution',
    title: 'Line 2: Accessing let in Temporal Dead Zone (TDZ)',
    description: 'Attempting to read "b" before its initialization line triggers a ReferenceError. The period from scope start to line 4 is the Temporal Dead Zone for b.',
    callStack: ['Global Execution Context (GEC)'],
    memory: {
      globalScope: [
        { name: 'var a', value: 'undefined', status: 'hoisted' }
      ],
      scriptScope: [
        { name: 'let b', value: '<uninitialized> (TDZ)', status: 'tdz' },
        { name: 'const c', value: '<uninitialized> (TDZ)', status: 'tdz' }
      ]
    },
    consoleOutput: ['> undefined'],
    error: 'Uncaught ReferenceError: Cannot access "b" before initialization'
  },
  {
    line: 3,
    phase: 'execution',
    title: 'Line 3: Assigning value to var a',
    description: 'var a is assigned the number 10. The value undefined in Global Memory is replaced with 10.',
    callStack: ['Global Execution Context (GEC)'],
    memory: {
      globalScope: [
        { name: 'var a', value: '10', status: 'assigned' }
      ],
      scriptScope: [
        { name: 'let b', value: '<uninitialized> (TDZ)', status: 'tdz' },
        { name: 'const c', value: '<uninitialized> (TDZ)', status: 'tdz' }
      ]
    },
    consoleOutput: ['> undefined']
  },
  {
    line: 4,
    phase: 'execution',
    title: 'Line 4: Initializing let b (TDZ ends for b)',
    description: 'The execution reaches let b = 20. Variable b is now initialized and leaves the Temporal Dead Zone.',
    callStack: ['Global Execution Context (GEC)'],
    memory: {
      globalScope: [
        { name: 'var a', value: '10', status: 'assigned' }
      ],
      scriptScope: [
        { name: 'let b', value: '20', status: 'assigned' },
        { name: 'const c', value: '<uninitialized> (TDZ)', status: 'tdz' }
      ]
    },
    consoleOutput: ['> undefined']
  },
  {
    line: 5,
    phase: 'execution',
    title: 'Line 5: Initializing const c (TDZ ends for c)',
    description: 'const c is initialized with 30. Its TDZ ends and its value becomes immutable.',
    callStack: ['Global Execution Context (GEC)'],
    memory: {
      globalScope: [
        { name: 'var a', value: '10', status: 'assigned' }
      ],
      scriptScope: [
        { name: 'let b', value: '20', status: 'assigned' },
        { name: 'const c', value: '30', status: 'assigned' }
      ]
    },
    consoleOutput: ['> undefined']
  },
  {
    line: 6,
    phase: 'execution',
    title: 'Line 6: Safe access after initialization',
    description: 'Both b and c are safely accessed because their declarations have passed. console.log(b + c) computes 20 + 30 = 50.',
    callStack: ['Global Execution Context (GEC)', 'console.log(b + c)'],
    memory: {
      globalScope: [
        { name: 'var a', value: '10', status: 'assigned' }
      ],
      scriptScope: [
        { name: 'let b', value: '20', status: 'assigned' },
        { name: 'const c', value: '30', status: 'assigned' }
      ]
    },
    consoleOutput: ['> undefined', '> 50']
  },
  {
    line: 7,
    phase: 'execution',
    title: 'Execution Complete',
    description: 'Global Execution Context finishes execution. The Call Stack is popped clean.',
    callStack: [],
    memory: {
      globalScope: [
        { name: 'var a', value: '10', status: 'assigned' }
      ],
      scriptScope: [
        { name: 'let b', value: '20', status: 'assigned' },
        { name: 'const c', value: '30', status: 'assigned' }
      ]
    },
    consoleOutput: ['> undefined', '> 50', '=== Program Exited Successfully ===']
  }
];

const codeSnippet = [
  'console.log(a);     // Line 1: What prints?',
  '// console.log(b);  // Line 2: What would happen here? (TDZ)',
  'var a = 10;         // Line 3: var declaration & assignment',
  'let b = 20;         // Line 4: let initialization (TDZ ends)',
  'const c = 30;       // Line 5: const initialization',
  'console.log(b + c); // Line 6: Safe access'
];

export default function JsExecutionVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const step = steps[currentStep];

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-panel space-y-6">
      {/* Top Header & Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 text-xs font-mono font-semibold rounded-md uppercase tracking-wider ${
              step.phase === 'creation'
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
            }`}>
              {step.phase === 'creation' ? 'Phase 1: Creation (Hoisting)' : 'Phase 2: Code Execution'}
            </span>
            <span className="text-xs font-mono text-foreground/50">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(Math.max(0, currentStep - 1)); }}
            disabled={currentStep === 0}
            className="p-2.5 rounded-lg border border-border text-foreground/80 hover:text-foreground hover:bg-surface-100 dark:hover:bg-surface-900 disabled:opacity-30 transition-colors"
            title="Previous Step"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-mono text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>

          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(Math.min(steps.length - 1, currentStep + 1)); }}
            disabled={currentStep === steps.length - 1}
            className="p-2.5 rounded-lg border border-border text-foreground/80 hover:text-foreground hover:bg-surface-100 dark:hover:bg-surface-900 disabled:opacity-30 transition-colors"
            title="Next Step"
          >
            <ChevronRight size={16} />
          </button>

          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(0); }}
            className="p-2.5 rounded-lg border border-border text-foreground/60 hover:text-foreground hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors"
            title="Reset to Line 0"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Engine Action Narrative Banner */}
      <div className="p-4 rounded-xl border border-border bg-surface-50 dark:bg-surface-950/80 flex items-start gap-3">
        <div className="mt-0.5 p-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Terminal size={16} />
        </div>
        <div>
          <span className="font-mono text-2xs uppercase tracking-wider text-foreground/50 block font-semibold">
            Engine Action in this step:
          </span>
          <p className="text-sm leading-relaxed text-foreground mt-0.5 font-medium">
            {step.description}
          </p>
        </div>
      </div>

      {/* Main 2-Column Split: Code Left vs Runtime State Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Code Inspector */}
        <div className="lg:col-span-6 rounded-xl border border-border-contrast bg-surface-950 dark:bg-black text-surface-100 p-5 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-border-contrast mb-3">
              <span className="text-foreground/60 font-sans text-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="font-mono text-foreground font-semibold">script.js</span>
              </span>
              <span className="text-2xs font-mono text-foreground/40">Step execution pointer</span>
            </div>

            <div className="space-y-1.5 py-1">
              {codeSnippet.map((lineText, index) => {
                const lineNum = index + 1;
                const isActive = step.line === lineNum;
                return (
                  <div
                    key={index}
                    className={`flex items-center px-3 py-1.5 rounded-md transition-all duration-200 ${
                      isActive
                        ? 'bg-amber-500/25 text-amber-300 border-l-2 border-amber-400 font-semibold'
                        : 'text-surface-300 hover:text-white'
                    }`}
                  >
                    <span className="w-6 text-foreground/40 select-none text-right mr-3 text-xs">{lineNum}</span>
                    <span className="flex-1 text-xs">{lineText}</span>
                    {isActive && (
                      <span className="text-2xs font-mono px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-200 uppercase">
                        Current
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border-contrast flex items-center justify-between text-2xs text-foreground/50 font-sans">
            <span>Phase: {step.phase === 'creation' ? 'Hoisting / Memory Allocation' : 'Runtime Code Evaluation'}</span>
            <span>Active Line: {step.line === 0 ? 'Pre-execution Scan' : `Line ${step.line}`}</span>
          </div>
        </div>

        {/* Right Column: Runtime Memory & Stack */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Call Stack Panel */}
            <div className="rounded-xl border border-border bg-surface-50 dark:bg-surface-950 p-4 flex flex-col h-[220px]">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground pb-2 border-b border-border">
                <Layers size={14} className="text-blue-500" />
                <span>Call Stack (LIFO)</span>
              </div>
              <div className="flex-1 flex flex-col-reverse gap-2 overflow-y-auto justify-start py-2">
                {step.callStack.length === 0 ? (
                  <div className="text-xs text-foreground/40 text-center my-auto italic">Stack Empty</div>
                ) : (
                  step.callStack.map((frame, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 text-xs font-mono font-medium rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    >
                      {frame}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Memory Environment Panel */}
            <div className="rounded-xl border border-border bg-surface-50 dark:bg-surface-950 p-4 flex flex-col h-[220px]">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground pb-2 border-b border-border">
                <Database size={14} className="text-emerald-500" />
                <span>Memory Allocation</span>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto py-2 pr-1 text-xs">
                {/* Global var */}
                <div>
                  <span className="text-2xs font-mono uppercase tracking-wider text-foreground/50 block mb-1">
                    Global Record (var)
                  </span>
                  {step.memory.globalScope.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-md bg-card border border-border font-mono text-xs"
                    >
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <span className={item.status === 'assigned' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-foreground/60'}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Declarative let/const */}
                <div>
                  <span className="text-2xs font-mono uppercase tracking-wider text-foreground/50 block mb-1">
                    Declarative Record (let/const)
                  </span>
                  <div className="space-y-1.5">
                    {step.memory.scriptScope.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-2 rounded-md border font-mono text-xs transition-colors ${
                          item.status === 'tdz'
                            ? 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'
                            : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold'
                        }`}
                      >
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-2xs">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Console Output */}
          <div className="rounded-xl border border-border-contrast bg-surface-950 dark:bg-black p-4 text-xs font-mono text-surface-200">
            <div className="flex items-center gap-2 text-foreground/50 text-2xs mb-2 border-b border-border-contrast pb-1.5">
              <Terminal size={12} />
              <span>Console Output Terminal</span>
            </div>
            <div className="min-h-[48px] space-y-1">
              {step.consoleOutput.length === 0 && !step.error && (
                <span className="text-foreground/40 italic text-2xs">No stdout logged for this step</span>
              )}
              {step.consoleOutput.map((out, idx) => (
                <div key={idx} className="text-emerald-400 font-semibold">{out}</div>
              ))}
              {step.error && (
                <div className="flex items-center gap-1.5 text-rose-400 font-medium">
                  <AlertTriangle size={14} />
                  <span>{step.error}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}