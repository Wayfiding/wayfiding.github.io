import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Navbar() {
  const { lang, setLang, t } = useI18n();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="font-mono text-sm text-primary text-glow">
          ~/alberto
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            className="font-mono text-xs border border-border px-3 py-1 rounded-sm text-primary hover:bg-secondary transition-colors"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
