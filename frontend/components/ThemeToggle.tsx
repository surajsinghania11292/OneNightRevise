'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="flex items-center gap-0.5 rounded-full border border-border/80 bg-surface-100/80 p-0.5 dark:bg-surface-900/80"
        aria-label="Theme toggle loading"
      >
        <div className="h-7 w-7 rounded-full" />
        <div className="h-7 w-7 rounded-full" />
        <div className="h-7 w-7 rounded-full" />
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Color theme switcher"
      className="flex items-center gap-0.5 rounded-full border border-border/80 bg-surface-100/90 p-0.5 transition-colors duration-200 dark:bg-surface-900/90"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Switch to light theme"
        title="Light Mode"
        className={`flex h-7 w-7 items-center justify-center rounded-full text-foreground/60 transition-all duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 ${
          theme === 'light'
            ? 'bg-white text-foreground shadow-sm dark:bg-surface-800 dark:text-foreground'
            : 'hover:bg-black/5 dark:hover:bg-white/5'
        }`}
      >
        <Sun className="h-3.5 w-3.5 stroke-[2.2]" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark theme"
        title="Dark Mode"
        className={`flex h-7 w-7 items-center justify-center rounded-full text-foreground/60 transition-all duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 ${
          theme === 'dark'
            ? 'bg-white text-foreground shadow-sm dark:bg-surface-800 dark:text-foreground'
            : 'hover:bg-black/5 dark:hover:bg-white/5'
        }`}
      >
        <Moon className="h-3.5 w-3.5 stroke-[2.2]" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        aria-label="Switch to system theme"
        title="System Preference"
        className={`flex h-7 w-7 items-center justify-center rounded-full text-foreground/60 transition-all duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 ${
          theme === 'system'
            ? 'bg-white text-foreground shadow-sm dark:bg-surface-800 dark:text-foreground'
            : 'hover:bg-black/5 dark:hover:bg-white/5'
        }`}
      >
        <Monitor className="h-3.5 w-3.5 stroke-[2.2]" />
      </button>
    </div>
  );
}
