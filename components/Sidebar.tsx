
import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'whoami', label: 'whoami.sh' },
  { id: 'history', label: 'history.log' },
  { id: 'skills', label: 'skills.json' },
  { id: 'contacts', label: 'contact.md' },
];

// Solo atajos que existen de verdad (ver App.tsx)
const SHORTCUTS = [
  { keys: 'T', label: 'Theme' },
  { keys: '1-4', label: 'Sections' },
];

export const Sidebar: React.FC = () => {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <aside className="w-64 bg-terminal-sidebar-light dark:bg-terminal-sidebar border-r border-gray-200 dark:border-white/5 flex flex-col p-6 hidden lg:flex shrink-0 transition-colors">
      <div className="mb-10">
        {/* Contenedor con borde azul según el diseño */}
        <div className="border border-blue-500/40 p-4 rounded-sm">
          <div className="text-primary-ink dark:text-primary text-[11px] font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">folder_open</span>
            PROJECT_FILES
          </div>
          <nav className="flex flex-col">
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
                  className={`flex items-center gap-3 text-sm transition-colors group py-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 ${
                    isActive
                      ? 'text-primary-ink dark:text-primary'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-ink dark:hover:text-primary'
                  }`}
                >
                  <span
                    className={`font-bold ${
                      isActive
                        ? 'text-primary-ink/70 dark:text-primary/70'
                        : 'text-gray-400 dark:text-gray-600 group-hover:text-primary-ink/70 dark:group-hover:text-primary/70'
                    }`}
                  >
                    $
                  </span>
                  <span className="font-mono">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mt-auto p-2">
        <div className="text-[10px] text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-widest font-bold">Shortcuts</div>
        <div className="space-y-2 text-[11px] text-gray-600 dark:text-gray-400 font-mono">
          {SHORTCUTS.map((shortcut) => (
            <div key={shortcut.label} className="flex justify-between gap-2">
              <span>{shortcut.label}</span>
              <span className="text-primary-ink/80 dark:text-primary/60">{shortcut.keys}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
