
import React from 'react';

export const TerminalFooter: React.FC = () => {
  return (
    <div className="bg-terminal-header border-t border-white/5 px-4 py-1.5 flex items-center justify-between text-[10px] text-gray-500 font-bold shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          CONNECTED
        </div>
        <div className="text-primary/50">UTF-8</div>
        <div className="hidden sm:block">Ln 124, Col 42</div>
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
