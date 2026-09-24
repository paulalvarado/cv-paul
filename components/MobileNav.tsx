import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'whoami', label: 'whoami.sh' },
  { id: 'history', label: 'history.log' },
  { id: 'skills', label: 'skills.json' },
  { id: 'contacts', label: 'contact.md' },
];

export const MobileNav: React.FC = () => {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <nav className="lg:hidden shrink-0 flex flex-wrap items-center gap-1 px-2 py-2 border-b border-gray-200 dark:border-white/5 bg-terminal-sidebar-light dark:bg-terminal-sidebar transition-colors">
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={(event) => {
              event.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md font-mono text-[11px] whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 ${
              isActive
                ? 'text-primary-ink dark:text-primary bg-primary/10'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary-ink dark:hover:text-primary hover:bg-black/[0.04] dark:hover:bg-white/5'
            }`}
          >
            <span className={isActive ? 'text-primary-ink/70 dark:text-primary/70' : 'text-gray-400 dark:text-gray-600'}>$</span>
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};
