import React, { useCallback, useEffect, useState } from 'react';
import { TerminalWindow } from './components/TerminalWindow';

const SECTIONS = ['whoami', 'history', 'skills', 'contacts'];

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      document.documentElement.classList.toggle('dark', !prev);
      return !prev;
    });
  }, []);

  // Atajos reales del sitio: T = tema, 1-4 = saltar a sección (los mismos que anuncia la barra lateral)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;

      if (event.key.toLowerCase() === 't') {
        event.preventDefault();
        toggleTheme();
        return;
      }

      const index = Number(event.key);
      if (Number.isInteger(index) && index >= 1 && index <= SECTIONS.length) {
        const section = document.getElementById(SECTIONS[index - 1]);
        if (section) {
          event.preventDefault();
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <div className="h-dvh w-full flex items-center justify-center p-4 lg:p-10 bg-background-light dark:bg-background-dark transition-colors">
      <TerminalWindow isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Decorative scanning line effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[100] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
};

export default App;
