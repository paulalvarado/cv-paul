
import React, { useState } from 'react';
import { TerminalWindow } from './components/TerminalWindow';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-dvh w-full flex items-center justify-center p-4 lg:p-10 bg-background-light dark:bg-background-dark transition-colors">
      <TerminalWindow />

      <button
        onClick={toggleTheme}
        className="fixed bottom-10 right-10 w-14 h-14 bg-primary text-black rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95 group overflow-hidden"
        title="Toggle Theme"
      >
        <span className="material-symbols-outlined font-bold group-hover:rotate-12 transition-transform">
          {isDark ? 'terminal' : 'light_mode'}
        </span>
      </button>

      {/* Decorative scanning line effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[100] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
};

export default App;
