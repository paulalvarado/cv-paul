
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
        "Desarrollo de plataformas empresariales escalables con PHP (CodeIgniter 3/4 y Laravel) y APIs en NodeJS (Express y NestJS).",
        "Construcción de SPAs y paneles administrativos con React y TypeScript sobre Vite e Inertia, con Tailwind CSS, componentes accesibles (Radix/Headless UI) y manejo de estado y datos con Zustand, TanStack Query, React Hook Form y Zod.",
        "Diseño y optimización de bases de datos relacionales (MySQL, SQL Server, PostgreSQL) usando Redis para caché y colas de trabajos en background.",
        "Implementación de autenticación y seguridad: JWT, Passport, Sanctum, OAuth, cifrado de credenciales y control de roles y permisos.",
        "Integraciones con ERP (Odoo vía XML-RPC), facturación electrónica (DTE) y servicios de terceros: pasarelas de pago, correo transaccional y almacenamiento en la nube (AWS S3, Google Cloud, Firebase).",
        "Automatización de reportes y documentos empresariales (Excel y PDF) con PhpSpreadsheet, TCPDF, FPDF y Dompdf.",
        "Contenerización de servicios con Docker y Docker Compose, y despliegues automatizados en PaaS self-hosted (Dokploy) con Nginx, dominios personalizados, HTTPS y bases de datos gestionadas.",
        "Calidad de código y testing: PHPUnit, Pest, Jest y Vitest, ESLint/Prettier, migraciones versionadas, control de versiones con Git/GitHub y pipelines CI/CD en GitHub Actions.",
        "Documentación técnica y funcional (LaTeX, Markdown y diagramas de arquitectura) y adopción de flujos de trabajo asistidos por IA con verificación por checkpoints para acelerar entregas sin perder trazabilidad."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "English 4 Call Center",
      period: "2023 — 2024",
      highlights: [
        "Migración de plataformas legacy en CodeIgniter a APIs y servicios modernos en NodeJS, documentando endpoints y separando responsabilidades por capas.",
        "Diseño y desarrollo de interfaces reactivas en ReactJS con TypeScript a partir de prototipos de Figma, con componentes reutilizables y diseño responsive.",
        "Implementación de autenticación con JWT, integración de servicios REST de terceros y optimización de consultas a base de datos.",
        "Automatización de despliegues con Docker y mantenimiento de servidores cloud para entornos educativos, priorizando disponibilidad y rendimiento."
      ]
    },
    {
      role: "Web Developer & CMS Specialist",
      company: "Freelance & Consulting",
      period: "2017 — 2019",
      highlights: [
        "Desarrollo de sitios web corporativos con WordPress, Elementor y Divi, incluyendo plugins a medida, temas personalizados y despliegues contenerizados con Docker.",
        "Implementación de e-commerce con WooCommerce: catálogos, checkout, pasarelas de pago e integración con servicios de correo y analítica.",
        "Creación de soluciones a medida para gestión de inventarios, facturación y reportería con PHP, MySQL y SQL Server.",
        "Consultoría en optimización de rendimiento web (WPO) y auditorías SEO técnica y on-page.",
        "Diseño de interfaces a partir de prototipos de Figma, con sistemas de componentes reutilizables y enfoque mobile-first.",
        "Documentación de procesos, manuales de usuario y entregables técnicos para clientes."
      ]
    }
  ],
  skills: [
    {
      name: "// js_ecosystem",
      items: ["ReactJS", "TypeScript", "NodeJS", "NestJS", "Express", "NextJS", "Inertia", "Zustand/Redux", "TanStack Query", "Vite"]
    },
    {
      name: "// php_frameworks",
      items: ["PHP", "Laravel", "Codeigniter (v3/v4)", "APIs REST/SOAP/XML-RPC", "Custom Plugins"]
    },
    {
      name: "// wordpress_stack",
      items: ["WordPress", "Elementor", "Divi", "WooCommerce", "WPO & SEO"]
    },
    {
      name: "// data_infrastructure",
      items: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB", "Redis", "Docker", "Nginx", "AWS S3", "Google Cloud", "Firebase", "Git"]
    },
    {
      name: "// delivery_quality",
      items: ["CI/CD (GitHub Actions)", "Dokploy (PaaS)", "PHPUnit/Pest", "Jest/Vitest", "ESLint/Prettier", "Documentación (LaTeX)"]
    },
    {
      name: "// integrations_ai",
      items: ["Odoo (XML-RPC)", "Facturación electrónica (DTE)", "Pasarelas de pago", "Firebase Auth/FCM", "OpenAI/Gemini", "Flujos asistidos por IA"]
    },
    {
      name: "// design_tools",
      items: ["Figma (Básico)", "UI/UX Concepts", "Tailwind CSS", "shadcn/Radix", "Responsive Design"]
    }
  ],
  contact: {
    email: "paulperezsv@gmail.com",
    linkedin: "https://www.linkedin.com/in/paul-perez-dev/",
    github: "https://github.com/paulalvarado",
    references: [
      { name: "Ing. Raúl Vigil", position: "Full Stack Developer - Web Informática S. A. de C. V." },
      { name: "Fernando Marinero", position: "Technical Lead - CityLab" },
      { name: "Kevin Arce", position: "AWS Dev Engineer - Telus" }
    ]
  }
};
