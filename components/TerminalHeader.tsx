
import React, { useState, useEffect } from 'react';

export const TerminalHeader: React.FC = () => {
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
    <div className="bg-terminal-header px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0">
      <div className="flex gap-2">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-black/10"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-black/10"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-black/10"></div>
      </div>
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold">
        <span className="material-symbols-outlined text-sm">terminal</span>
        paul@portfolio: ~/main_branch — {dimensions.width}x{dimensions.height}
      </div>
      <div className="w-16"></div>
    </div>
  );
};
