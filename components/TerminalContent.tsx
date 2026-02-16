
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

export const TerminalContent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short'
      });
      
      const parts = formatter.formatToParts(now);
      const formattedDate = parts.map(p => {
        if (p.type === 'day') return p.value;
        return p.value;
      }).join('');
      
      // Format: Mon, 16 Feb 2026 17:28:46 GMT-6
      const timeString = now.toLocaleDateString('en-US', { weekday: 'short' }) + ', ' +
        now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' +
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const keywords = ['ReactJS', 'NodeJS', 'PHP', 'Laravel', 'Codeigniter', 'NextJS', 'WordPress', 'WooCommerce', 'SQL Server', 'MySQL', 'Figma', 'Elementor', 'Divi', 'SEO'];

  const highlightText = (text: string) => {
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return text.split(regex).map((part, i) => (
      <React.Fragment key={i}>
        {keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
          <span className="text-primary font-bold">{part}</span>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  };

  return (
    <main className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-12 space-y-20 scroll-smooth bg-terminal-body-light dark:bg-terminal-body text-gray-900 dark:text-gray-300 transition-colors">
      {/* Header / Intro */}
      <header className="mb-12">
        <div className="text-primary font-mono text-[11px] mb-8 opacity-60">
          Last login: {currentTime || 'Loading...'}
        </div>
        
        <div className="mb-8">
          <div className="mb-8 overflow-hidden">
             {/* Versión Desktop */}
             <pre className="hidden lg:block text-primary font-mono text-sm leading-[1.1] select-none whitespace-pre">
               {PORTFOLIO_DATA.asciiArt}
             </pre>
             
             {/* Versión Mobile & Tablet */}
             <div className="lg:hidden space-y-2">
               <pre className="text-primary font-mono text-[7px] sm:text-[10px] md:text-[12px] leading-[1.1] select-none whitespace-pre">
                 {PORTFOLIO_DATA.asciiArtMobile.paul}
               </pre>
               <pre className="text-primary font-mono text-[7px] sm:text-[10px] md:text-[12px] leading-[1.1] select-none whitespace-pre">
                 {PORTFOLIO_DATA.asciiArtMobile.perez}
               </pre>
             </div>
          </div>
          
          <div className="flex items-center text-xl md:text-2xl font-mono mt-8">
            <span className="text-primary font-bold mr-3">➜</span>
            <span className="text-blue-400 mr-3">~/developer</span>
            <span className="text-primary font-bold mr-3">$</span>
            <span className="text-gray-900 dark:text-white">whoami</span>
            <span className="cursor ml-2"></span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl" id="whoami">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-bold text-2xl">#</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Acerca de Mi</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        <div className="bg-white/80 dark:bg-[#1a1a1a]/40 border border-gray-200 dark:border-white/5 p-8 rounded-xl backdrop-blur-sm transition-colors">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-mono">
            {highlightText(PORTFOLIO_DATA.about)}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl" id="history">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-bold text-2xl">#</span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Work History</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        <div className="space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                   <h3 className="text-primary font-bold text-xl tracking-tight">{exp.role}</h3>
                </div>
                <span className="text-xs text-gray-500 font-mono mt-1 md:mt-0 uppercase tracking-widest">{exp.period}</span>
              </div>
              <div className="text-blue-400/80 text-sm mb-4 font-bold flex items-center gap-2 pl-5">
                <span className="material-symbols-outlined text-xs">business</span>
                {exp.company}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400 pl-5">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-primary font-bold shrink-0 mt-0.5">»</span>
                    <span>{highlightText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl" id="skills">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-bold text-2xl">#</span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Skills --list</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {PORTFOLIO_DATA.skills.map((group, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-terminal-sidebar/60 border border-gray-200 dark:border-white/5 p-6 rounded-lg hover:border-primary/20 transition-colors">
              <div className="text-[10px] text-primary mb-4 font-bold tracking-widest uppercase">{group.name.replace('// ', '')}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="flex items-center gap-2 px-3 py-1.5 text-[11px] bg-gray-100/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-md hover:text-primary hover:border-primary/40 transition-all cursor-default group"
                  >
                    <span className="text-primary/40 group-hover:text-primary transition-colors">●</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl pb-20" id="contacts">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-bold text-2xl">#</span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-[10px] text-gray-600 font-mono mb-4 uppercase tracking-widest font-bold">// direct_access</div>
            <a 
              className="flex items-center gap-4 text-gray-700 dark:text-gray-400 hover:text-primary transition-all group p-4 border border-gray-200 dark:border-white/5 hover:bg-gray-100/80 dark:hover:bg-white/5 rounded-lg" 
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
              <div className="font-mono">
                <div className="text-[9px] text-gray-600 font-bold uppercase mb-0.5">Email</div>
                <div className="text-sm">{PORTFOLIO_DATA.contact.email}</div>
              </div>
            </a>
            <a
              className="flex items-center gap-4 text-gray-700 dark:text-gray-400 hover:text-primary transition-all group p-4 border border-gray-200 dark:border-white/5 hover:bg-gray-100/80 dark:hover:bg-white/5 rounded-lg" 
              href={`tel:${PORTFOLIO_DATA.contact.phone.replace(/\s/g, '')}`}
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
              <div className="font-mono">
                <div className="text-[9px] text-gray-600 font-bold uppercase mb-0.5">Phone</div>
                <div className="text-sm">{PORTFOLIO_DATA.contact.phone}</div>
              </div>
            </a>
          </div>
          <div className="bg-white/80 dark:bg-white/[0.02] p-6 rounded-lg border border-gray-200 dark:border-white/5 transition-colors">
            <div className="text-[10px] text-gray-600 font-mono mb-6 uppercase tracking-widest font-bold">// professional_vouch</div>
            <div className="space-y-8">
              {PORTFOLIO_DATA.contact.references.map((ref, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                  <div className="text-sm font-bold text-gray-900 dark:text-white font-mono">{ref.name}</div>
                  <div className="text-[11px] text-gray-500 mb-1 italic">{ref.position}</div>
                  <div className="text-[11px] text-primary font-bold font-mono tracking-tight">{ref.phone}</div>
                  {ref.email && (
                    <div className="text-[10px] text-gray-600 font-mono mt-1 opacity-70">{ref.email}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pt-8 border-t border-white/5 flex items-center text-sm font-mono opacity-50">
        <span className="text-primary font-bold mr-3">➜</span>
        <span className="text-blue-400 mr-2">~/portfolio</span>
        <span className="text-gray-500 animate-pulse">_</span>
        <span className="ml-4 text-[9px] uppercase tracking-[0.4em]">End of session.</span>
      </div>
    </main>
  );
};
