
import React from 'react';

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a
    href={href}
    className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors group py-1"
    onClick={(e) => {
      // Opcional: Manejo manual del scroll si el ancla estándar falla en contenedores con overflow
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <span className="text-primary/70 group-hover:text-primary font-bold">$</span>
    <span className="font-mono">{label}</span>
  </a>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-terminal-sidebar-light dark:bg-terminal-sidebar border-r border-gray-200 dark:border-white/5 flex flex-col p-6 hidden lg:flex shrink-0 transition-colors">
      <div className="mb-10">
        {/* Contenedor con borde azul según el diseño */}
        <div className="border border-blue-500/40 p-4 rounded-sm">
          <div className="text-primary text-[11px] font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">folder_open</span>
            PROJECT_FILES
          </div>
          <nav className="flex flex-col">
            <NavLink href="#whoami" label="whoami.sh" />
            <NavLink href="#history" label="history.log" />
            <NavLink href="#skills" label="skills.json" />
            <NavLink href="#contacts" label="contact.md" />
          </nav>
        </div>
      </div>

      <div className="mt-auto p-2">
        <div className="text-[10px] text-gray-600 mb-4 uppercase tracking-widest font-bold">Shortcuts</div>
        <div className="space-y-2 text-[11px] text-gray-500 font-mono">
          <div className="flex justify-between"><span>Help</span> <span className="text-primary/40">F1</span></div>
          <div className="flex justify-between"><span>Search</span> <span className="text-primary/40">^F</span></div>
          <div className="flex justify-between"><span>Execute</span> <span className="text-primary/40 text-right">ENTER</span></div>
        </div>
      </div>
    </aside>
  );
};
