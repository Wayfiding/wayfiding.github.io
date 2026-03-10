import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import heroBg from "@/assets/hero-bg.png";
import profilePhoto from "@/assets/profile-photo.jpg";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Retro workstation"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="shrink-0"
          >
            <Avatar className="w-36 h-36 border-2 border-primary/50 shadow-[0_0_40px_rgba(0,255,136,0.2)]">
              <AvatarImage src={profilePhoto} alt="Alberto Souza" className="object-cover" />
              <AvatarFallback className="bg-secondary text-primary text-3xl font-mono">AS</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Text Content */}
          <div>
            <p className="font-mono text-sm text-terminal-green text-glow-green mb-4">
              &gt; {t.hero.greeting}<span className="cursor-blink">_</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              {t.hero.name}
            </h1>
            <p className="font-mono text-lg text-primary text-glow mb-6">
              {t.hero.title}
            </p>
            <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
              {t.hero.summary}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#skills"
                className="font-mono text-sm border border-primary text-primary px-5 py-2.5 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t.hero.cta}
              </a>
              <a
                href="https://github.com/Wayfiding"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-border text-muted-foreground px-5 py-2.5 rounded-sm hover:border-primary hover:text-primary transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
