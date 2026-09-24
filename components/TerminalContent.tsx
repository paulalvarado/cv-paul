
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: PORTFOLIO_DATA.contact.email,
    href: `mailto:${PORTFOLIO_DATA.contact.email}`,
    external: false,
    icon: <span className="material-symbols-outlined text-[20px]">mail</span>,
  },
  {
    label: 'LinkedIn',
    value: PORTFOLIO_DATA.contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
    href: PORTFOLIO_DATA.contact.linkedin,
    external: true,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: PORTFOLIO_DATA.contact.github.replace(/^https?:\/\/(www\.)?/, ''),
    href: PORTFOLIO_DATA.contact.github,
    external: true,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

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
          
          <div className="flex items-center text-sm md:text-2xl font-mono mt-8">
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
        <div className="bg-white/80 dark:bg-[#1a1a1a]/40 border border-gray-200 dark:border-white/5 p-4 sm:p-8 rounded-xl backdrop-blur-sm transition-colors">
          <p className="text-sm sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-mono">
            {highlightText(PORTFOLIO_DATA.about)}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl" id="history">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-bold text-2xl">#</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Work History</h2>
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
                <span className="text-xs text-gray-500 font-mono mt-1 md:mt-0 uppercase tracking-widest ml-4 sm:ml-0">{exp.period}</span>
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Skills --list</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {PORTFOLIO_DATA.skills.map((group, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-terminal-sidebar/60 border border-gray-200 dark:border-white/5 p-4 sm:p-6 rounded-lg hover:border-primary/20 transition-colors">
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-white/5 overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-gray-100/70 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">// direct_access</span>
            <span aria-hidden="true" className="font-mono text-sm leading-none text-primary animate-pulse">_</span>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-white/5">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-5 transition-colors duration-200 ease-out hover:bg-gray-100/70 dark:hover:bg-white/[0.03] focus-visible:outline-none focus-visible:bg-gray-100/70 dark:focus-visible:bg-white/[0.03] focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary/60"
              >
                <span className="shrink-0 text-primary transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-3">
                  {link.icon}
                </span>
                <span className="hidden sm:block w-24 shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 group-hover:text-primary/80 transition-colors">
                  {link.label}
                </span>
                <span className="min-w-0 break-all sm:break-normal font-mono text-[13px] sm:text-sm text-gray-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {link.value}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden sm:block flex-1 translate-y-[0.3rem] border-b border-dotted border-gray-300 dark:border-white/10 group-hover:border-primary/40 transition-colors"
                />
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined shrink-0 text-[18px] text-primary opacity-30 sm:opacity-0 transition-all duration-200 ease-out sm:-translate-x-2 sm:group-hover:translate-x-0 sm:group-hover:opacity-100"
                >
                  arrow_outward
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-8 border-t border-white/5 flex items-center text-[10px] sm:text-sm font-mono opacity-50">
        <span className="text-primary font-bold mr-3">➜</span>
        <span className="text-blue-400 mr-2">~/portfolio</span>
        <span className="text-gray-500 animate-pulse">_</span>
        <span className="ml-4 text-[9px] uppercase tracking-[0.4em]">End of session.</span>
      </div>
    </main>
  );
};
