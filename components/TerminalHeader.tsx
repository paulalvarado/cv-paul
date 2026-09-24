
import React, { useState, useEffect } from 'react';

interface TerminalHeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ isDark, onToggleTheme }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-terminal-header-light dark:bg-terminal-header px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 dark:border-white/5 shrink-0 transition-colors">
      <div className="flex gap-2 shrink-0">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-black/10"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-black/10"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-black/10"></div>
      </div>
      <div className="flex items-center gap-2 min-w-0 text-[10px] sm:text-sm uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 font-bold text-center">
        <span className="material-symbols-outlined text-sm shrink-0">terminal</span>
        <span className="truncate">
          <span className="hidden sm:inline">paul@portfolio: </span>
          ~/main_branch{dimensions.width > 767 ? ` — ${dimensions.width}x${dimensions.height}` : ''}
        </span>
      </div>
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
        title={`${isDark ? 'Tema claro' : 'Tema oscuro'} (atajo: T)`}
        className="group shrink-0 flex items-center gap-2 px-1.5 sm:px-2 py-1 rounded-md font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 dark:text-gray-400 hover:text-primary-ink dark:hover:text-primary hover:bg-black/[0.04] dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60"
      >
        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-12">
          {isDark ? 'light_mode' : 'dark_mode'}
        </span>
        <span className="hidden md:inline">{isDark ? 'light' : 'dark'}</span>
      </button>
    </div>
  );
};
