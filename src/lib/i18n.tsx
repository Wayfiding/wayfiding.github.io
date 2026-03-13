import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, World.",
      name: "Alberto Souza da Silva Júnior",
      title: "Full Stack Developer | Network Engineer",
      summary:
        "Hybrid developer with 5+ years in full-stack development, Linux automation, and network architecture (CCNA). Combines software engineering expertise with infrastructure optimization for scalable solutions.",
      cta: "View Terminal",
    },
    skills: {
      title: "// technical_expertise",
      categories: {
        frontend: "Front-End",
        backend: "Back-End",
        devops: "DevOps & Cloud",
        networking: "Networking",
        ai: "AI",
        database: "Database",
      },
    },
    experience: {
      title: "// work_history",
      current: "Current",
      jobs: [
        {
          role: "Full Stack Developer",
          company: "Open Labs",
          period: "Current",
          items: [
            "Spearheaded the main automation app (React + Node.js) for revenue management, reducing manual processes by 40%.",
            "Implemented GitLab CI/CD pipelines and Docker orchestration, cutting deployment time by 50%.",
            "Developed Python/Flask apps and Bash scripts to automate system administration.",
            "Managed SQL (PostgreSQL) and NoSQL (MongoDB) databases for high-traffic applications.",
            "Integrated AI tools (TensorFlow/LangChain) for proactive service monitoring.",
          ],
        },
        {
          role: "Junior Support Analyst N2",
          company: "Compos",
          period: "2019 – 2020",
          items: [
            "Deployed switches/routers and resolved L2 issues, improving service uptime by 25%.",
            "Administered DNS/WEB/IP services, deepening TCP/IP stack expertise.",
            "Developed an entire Chat AI Application with Agents to interact with user requests.",
          ],
        },
      ],
    },
    achievements: {
      title: "// key_achievements",
      items: [
        "Built a full-stack automation ecosystem (React + Node.js + Flask) reducing manual processes by 40%.",
        "Designed CI/CD pipelines and containerized 10+ microservices.",
        "Led Linux server optimization with Bash/Python, enhancing performance by 30%.",
        "Integrated AI tools (TensorFlow/LangChain) for proactive monitoring.",
      ],
    },
    education: {
      title: "// education & certs",
      items: [
        { name: "Software Engineering", detail: "UNIME, 2024–2027" },
        { name: "Computer Networks", detail: "Senai CETIND, 2019" },
        { name: "Cisco CCNA", detail: "2023–2026" },
        { name: "Secure Nginx", detail: "NIC.br" },
        { name: "Linux/DevOps", detail: "4Linux, Udemy" },
        { name: "AI/ML: TensorFlow & LangChain", detail: "Intermediary" },
      ],
    },
    contact: {
      title: "// establish_connection",
      email: "albertojr11@hotmail.com",
      phone: "(71) 9 9399-9204",
      location: "Centro, Lauro de Freitas, Bahia, Brazil",
      links: "Links",
    },
    footer: {
      built: "Built with passion & code",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Educação",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, Mundo.",
      name: "Alberto Souza da Silva Júnior",
      title: "Desenvolvedor Full Stack | Engenheiro de Redes",
      summary:
        "Desenvolvedor híbrido com 5+ anos em desenvolvimento full-stack, automação Linux e arquitetura de redes (CCNA). Combina expertise em engenharia de software com otimização de infraestrutura para soluções escaláveis.",
      cta: "Ver Terminal",
    },
    skills: {
      title: "// expertise_técnica",
      categories: {
        frontend: "Front-End",
        backend: "Back-End",
        devops: "DevOps & Cloud",
        networking: "Redes",
        ai: "IA",
        database: "Banco de Dados",
      },
    },
    experience: {
      title: "// histórico_profissional",
      current: "Atual",
      jobs: [
        {
          role: "Desenvolvedor Full Stack",
          company: "Open Labs",
          period: "Atual",
          items: [
            "Liderou o app principal de automação (React + Node.js) para gestão de receita, reduzindo processos manuais em 40%.",
            "Implementou pipelines GitLab CI/CD e orquestração Docker, reduzindo tempo de deploy em 50%.",
            "Desenvolveu apps Python/Flask e scripts Bash para automação de administração de sistemas.",
            "Gerenciou bancos SQL (PostgreSQL) e NoSQL (MongoDB) para aplicações de alto tráfego.",
            "Integrou ferramentas de IA (TensorFlow/LangChain) para monitoramento proativo.",
          ],
        },
        {
          role: "Analista de Suporte Júnior N2",
          company: "Compos",
          period: "2019 – 2020",
          items: [
            "Implantou switches/roteadores e resolveu problemas L2, melhorando uptime em 25%.",
            "Administrou serviços DNS/WEB/IP, aprofundando expertise em TCP/IP.",
            "Desenvolveu uma aplicação completa de Chat IA com Agentes para interagir com requisições de usuários.",
          ],
        },
      ],
    },
    achievements: {
      title: "// conquistas_chave",
      items: [
        "Construiu ecossistema de automação full-stack (React + Node.js + Flask) reduzindo processos manuais em 40%.",
        "Projetou pipelines CI/CD e containerizou 10+ microsserviços.",
        "Liderou otimização de servidores Linux com Bash/Python, melhorando performance em 30%.",
        "Integrou ferramentas de IA (TensorFlow/LangChain) para monitoramento proativo.",
      ],
    },
    education: {
      title: "// educação & certificações",
      items: [
        { name: "Engenharia de Software", detail: "UNIME, 2024–2027" },
        { name: "Redes de Computadores", detail: "Senai CETIND, 2019" },
        { name: "Cisco CCNA", detail: "2023–2026" },
        { name: "Nginx Seguro", detail: "NIC.br" },
        { name: "Linux/DevOps", detail: "4Linux, Udemy" },
        { name: "IA/ML: TensorFlow & LangChain", detail: "Intermediário" },
      ],
    },
    contact: {
      title: "// estabelecer_conexão",
      email: "albertojr11@hotmail.com",
      phone: "(71) 9 9399-9204",
      location: "Centro, Lauro de Freitas, Bahia, Brasil",
      links: "Links",
    },
    footer: {
      built: "Construído com paixão & código",
    },
  },
} as const;

type Translations = (typeof translations)["en"] | (typeof translations)["pt"];

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
