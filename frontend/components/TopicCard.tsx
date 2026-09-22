import Link from 'next/link';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

export interface TopicCardProps {
  title: string;
  href: string;
  category: string;
  description: string;
  icon: LucideIcon;
  concepts: string[];
  accentColor?: string;
}

export function TopicCard({
  title,
  href,
  category,
  description,
  icon: Icon,
  concepts,
}: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface-50/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-contrast hover:bg-surface-100/60 hover:shadow-panel dark:bg-surface-950/40 dark:hover:bg-surface-900/60"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-100 text-foreground transition-colors group-hover:border-border-contrast dark:bg-surface-900">
            <Icon className="h-5 w-5 stroke-[2]" />
          </div>
          <span className="flex items-center gap-1 text-2xs font-medium uppercase tracking-wider text-foreground/50 transition-colors group-hover:text-foreground">
            <span>Explore</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <div className="mt-5">
          <div className="text-2xs font-semibold uppercase tracking-wider text-foreground/50">
            {category}
          </div>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-border/60 pt-4">
        <div className="text-2xs font-medium uppercase tracking-wider text-foreground/50">
          Core Focus Areas
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="inline-flex items-center rounded-md border border-border/80 bg-background/80 px-2 py-0.5 text-xs text-foreground/80 transition-colors group-hover:border-border-contrast/60"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
