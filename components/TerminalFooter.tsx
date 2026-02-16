
import React, { useState, useEffect } from 'react';

export const TerminalFooter: React.FC = () => {
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
    <div className="bg-terminal-header-light dark:bg-terminal-header border-t border-gray-200 dark:border-white/5 px-4 py-1.5 flex items-center justify-between text-[10px] text-gray-600 dark:text-gray-500 font-bold shrink-0 transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          CONNECTED
        </div>
        <div className="hidden md:block text-primary/50">UTF-8</div>
        <div className="block">Ln 124, Col 42</div>
        <div className="block">{dimensions.width < 767 ? ` — ${dimensions.width}x${dimensions.height}` : ''}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block">PHP 8.2.10</div>
        <div className="hidden md:block">Node 20.x</div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[10px]">account_tree</span>
          main*
        </div>
      </div>
    </div>
  );
};
