
import React from 'react';
import { Sidebar } from './Sidebar';
import { TerminalHeader } from './TerminalHeader';
import { TerminalFooter } from './TerminalFooter';
import { TerminalContent } from './TerminalContent';

export const TerminalWindow: React.FC = () => {
  return (
    <div className="terminal-window w-full max-w-7xl h-[85vh] lg:h-[90vh] flex flex-col rounded-xl overflow-hidden bg-terminal-body">
      <TerminalHeader />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <TerminalContent />
      </div>
      <TerminalFooter />
    </div>
  );
};
