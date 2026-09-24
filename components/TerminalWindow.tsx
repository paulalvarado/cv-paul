
import React from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { TerminalHeader } from './TerminalHeader';
import { TerminalFooter } from './TerminalFooter';
import { TerminalContent } from './TerminalContent';

interface TerminalWindowProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ isDark, onToggleTheme }) => {
  return (
    <div className="terminal-window w-full max-w-7xl h-[90lvh] flex flex-col rounded-xl overflow-hidden bg-terminal-body-light dark:bg-terminal-body transition-colors">
      <TerminalHeader isDark={isDark} onToggleTheme={onToggleTheme} />
      <MobileNav />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <TerminalContent />
      </div>
      <TerminalFooter />
    </div>
  );
};
