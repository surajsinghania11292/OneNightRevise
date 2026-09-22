import Link from 'next/link';
import { Sparkles, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="w-full border-b border-border/80 bg-background transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link 
          href="/" 
          className="group flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-contrast bg-surface-100 text-foreground dark:bg-surface-900">
            <Terminal className="h-4 w-4 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-semibold tracking-tight">OneNightRevise</span>
              <span className="inline-flex items-center rounded-md border border-border px-1.5 py-0.5 text-2xs font-medium text-foreground/70">
                v1.0
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/70 md:flex">
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
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
