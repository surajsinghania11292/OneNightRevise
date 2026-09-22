import Link from 'next/link';
import { 
  Code2, 
  Binary, 
  Server, 
  Boxes, 
  BrainCircuit, 
  ArrowRight, 
  Zap, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';
import { TopicCard, TopicCardProps } from '@/components/TopicCard';

const TRACKS: TopicCardProps[] = [
  {
    title: 'JavaScript Deep Dive',
    href: '/javascript',
    category: 'Language Core',
    description:
      'Master the V8 engine mechanics, execution contexts, hoisting, closure scopes, and asynchronous task scheduling with precision.',
    icon: Code2,
    concepts: [
      'Execution Context',
      'Call Stack',
      'Event Loop',
      'Closures',
      'Prototypal Inheritance',
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    href: '/dsa',
    category: 'Problem Solving',
    description:
      'Visualize pointer movements, recursive trees, traversal orders, and graph relaxation algorithms step-by-step.',
    icon: Binary,
    concepts: [
      'Array & Two Pointers',
      'Linked Lists',
      'Trees & BSTs',
      'Graphs (BFS/DFS)',
      'Sorting & Searching',
    ],
  },
  {
    title: 'Node.js Internals',
    href: '/nodejs',
    category: 'Runtime & Backend',
    description:
      'Unpack the Libuv event loop phases, non-blocking asynchronous I/O, backpressured streams, and threadpool worker mechanics.',
    icon: Server,
    concepts: [
      'Libuv Threadpool',
      'Event Loop Phases',
      'Streams & Buffers',
      'Worker Threads',
      'Microservices',
    ],
  },
  {
    title: 'System Design',
    href: '/system-design',
    category: 'Distributed Systems',
    description:
      'Architect resilient web-scale platforms with proven partitioning strategies, caching tiers, consensus protocols, and failover topologies.',
    icon: Boxes,
    concepts: [
      'Architecture Patterns',
      'Caching Strategies',
      'Load Balancing',
      'DB Sharding',
      'Rate Limiting & CAP',
    ],
  },
  {
    title: 'AI & Machine Learning',
    href: '/ai',
    category: 'Modern Intelligence',
    description:
      'Demystify embedding spaces, vector search indexes, context window chunking, RAG pipelines, and LLM inference workflows.',
    icon: BrainCircuit,
    concepts: [
      'Vector Embeddings',
      'LLM Pipelines',
      'RAG Architecture',
      'Neural Net Concepts',
      'Context Windows & Attention',
    ],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-20 text-center sm:px-6 md:pt-28">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          OneNightRevise
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
          Rapid revision for Full Stack, DSA, and AI. Built for the night before your technical interviews with interactive execution visualizers, mental models, and zero fluff.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tracks"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <span>Explore Revision Tracks</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/javascript"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface-50 px-6 text-sm font-medium text-foreground transition-colors hover:border-border-contrast hover:bg-surface-100 dark:bg-surface-900 dark:hover:bg-surface-800"
          >
            Start with JavaScript
          </Link>
        </div>

        {/* Value Highlights Pill Bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-6 border-t border-border/60 pt-8 text-xs text-foreground/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-foreground" />
            <span>5 Comprehensive Tracks</span>
          </div>
          <span className="hidden text-border-contrast sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-foreground" />
            <span>Interactive Visualizers</span>
          </div>
          <span className="hidden text-border-contrast sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-foreground" />
            <span>Interview-Focused Breakdowns</span>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Revision Tracks
            </h2>
            <p className="mt-1 text-sm text-foreground/70">
              Select a module to review core mechanics, visual runtime diagrams, and high-frequency questions.
            </p>
          </div>
          <div className="text-xs font-mono text-foreground/50">
            5 MODULES READY
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track) => (
            <TopicCard key={track.href} {...track} />
          ))}
        </div>
      </section>

      {/* Methodology / Philosophy Section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-surface-50/50 p-8 sm:p-12 dark:bg-surface-950/50">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              The Night-Before Learning Philosophy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              Technical interviews don’t test whether you memorized documentation. They test whether you have an accurate mental model of how systems actually execute under load.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-background/60 p-5">
              <div className="text-sm font-semibold text-foreground">
                Mental Models First
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                Skip 50-slide decks. Every topic provides direct diagrams of memory, execution call stacks, and event loops.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-background/60 p-5">
              <div className="text-sm font-semibold text-foreground">
                Visual State Machines
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                Interactive runtime components show code stepping, queue transitions, and pointer movements in real time.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-background/60 p-5">
              <div className="text-sm font-semibold text-foreground">
                Tradeoff-Driven
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                Concrete pros, cons, and failure scenarios that senior and staff interviewers evaluate during rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl border-t border-border/60 px-4 pt-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-xs text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">OneNightRevise</span>
            <span>&copy; {new Date().getFullYear()} Monorepo</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/javascript" className="transition-colors hover:text-foreground">
              JavaScript
            </Link>
            <Link href="/dsa" className="transition-colors hover:text-foreground">
              DSA
            </Link>
            <Link href="/nodejs" className="transition-colors hover:text-foreground">
              Node.js
            </Link>
            <Link href="/system-design" className="transition-colors hover:text-foreground">
              System Design
            </Link>
            <Link href="/ai" className="transition-colors hover:text-foreground">
              AI & ML
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
