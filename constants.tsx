
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "PAÚL PÉREZ",
  title: "Senior Full Stack Developer",
  asciiArt: `██████╗  █████╗ ██╗   ██╗██╗         ██████╗ ███████╗██████╗ ███████╗███████╗
██╔══██╗██╔══██╗██║   ██║██║         ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══███╔╝
██████╔╝███████║██║   ██║██║         ██████╔╝█████╗  ██████╔╝█████╗    ███╔╝ 
██╔═══╝ ██╔══██║██║   ██║██║         ██╔═══╝ ██╔══╝  ██╔══██╗██╔══╝   ███╔╝  
██║     ██║  ██║╚██████╔╝███████╗    ██║     ███████╗██║  ██║███████╗███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝`,
  asciiArtMobile: {
    paul: `██████╗  █████╗ ██╗   ██╗██╗     
██╔══██╗██╔══██╗██║   ██║██║     
██████╔╝███████║██║   ██║██║     
██╔═══╝ ██╔══██║██║   ██║██║     
██║     ██║  ██║╚██████╔╝███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝`,
    perez: `██████╗ ███████╗██████╗ ███████╗███████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══███╔╝
██████╔╝█████╗  ██████╔╝█████╗    ███╔╝ 
██╔═══╝ ██╔══╝  ██╔══██╗██╔══╝   ███╔╝  
██║     ███████╗██║  ██║███████╗███████╗
╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝`,
  },
  about: "Senior Full Stack Developer con amplia experiencia liderando proyectos web de alto rendimiento. Especialista en el ecosistema JavaScript con ReactJS y NodeJS, complementado con un sólido dominio de PHP y frameworks como Laravel y Codeigniter. Recientemente he integrado NextJS en mi flujo de trabajo para optimizar el SEO y la experiencia de usuario. Soy experto en WordPress, desarrollando desde plugins a la medida hasta ecosistemas completos con WooCommerce, Elementor y Divi, siempre bajo una visión de diseño centrada en el usuario (Figma).",
  experiences: [
    {
      role: "Senior Full Stack Developer",
      company: "Web Informática S.A. de C.V.",
      period: "2019 — Presente",
      highlights: [
        "Desarrollo de sistemas empresariales escalables con Laravel y NodeJS.",
        "Implementación de arquitecturas modernas con ReactJS y NextJS para proyectos de alto tráfico.",
        "Creación de plugins personalizados para WordPress y optimización de tiendas WooCommerce.",
        "Gestión de bases de datos complejas en MySQL y SQL Server asegurando integridad y rapidez.",
        "Optimización SEO técnica logrando posicionamiento orgánico en mercados competitivos."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "English 4 Call Center",
      period: "2023 — 2024",
      highlights: [
        "Migración de plataformas legacy en Codeigniter a microservicios modernos en NodeJS.",
        "Diseño y desarrollo de interfaces reactivas en ReactJS basadas en prototipos de Figma.",
        "Automatización de despliegues y mantenimiento de servidores cloud para entornos educativos."
      ]
    },
    {
      role: "Web Developer & CMS Specialist",
      company: "Freelance & Consulting",
      period: "2017 — 2019",
      highlights: [
        "Desarrollo de sitios web corporativos con WordPress utilizando Elementor y Divi con personalización avanzada de código.",
        "Consultoría en optimización de rendimiento web (WPO) y auditorías SEO.",
        "Creación de soluciones a medida para gestión de inventarios con PHP y SQL Server."
      ]
    }
  ],
  skills: [
    {
      name: "// js_ecosystem",
      items: ["ReactJS", "NodeJS", "NextJS", "TypeScript", "Redux", "Express"]
    },
    {
      name: "// php_frameworks",
      items: ["PHP", "Laravel", "Codeigniter (v3/v4)", "Custom Plugins"]
    },
    {
      name: "// wordpress_stack",
      items: ["WordPress", "Elementor", "Divi", "WooCommerce", "SEO Optimization"]
    },
    {
      name: "// data_infrastructure",
      items: ["MySQL", "SQL Server", "MongoDB", "AWS", "Docker", "GIT"]
    },
    {
      name: "// design_tools",
      items: ["Figma (Básico)", "UI/UX Concepts", "Responsive Design"]
    }
  ],
  contact: {
    email: "paulperezsv@gmail.com",
    phone: "+503 7956 8140",
    references: [
      { name: "Ing. Raúl Vigil", position: "Full Stack Developer - Web Informática S. A. de C. V." },
      { name: "Fernando Marinero", position: "Technical Lead - CityLab" },
      { name: "Kevin Arce", position: "AWS Dev Engineer - Telus" }
    ]
  }
};
