import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";
import sectionBg3 from "@/assets/section-bg-3.png";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={sectionBg3}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-2xl text-primary text-glow mb-12"
        >
          {t.contact.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 items-start"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Avatar className="w-32 h-32 border-2 border-primary/50 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <AvatarImage src={profilePhoto} alt="Alberto Souza" className="object-cover" />
              <AvatarFallback className="bg-secondary text-primary text-2xl font-mono">AS</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href={`mailto:${t.contact.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">{t.contact.email}</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">{t.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">{t.contact.location}</span>
            </div>

            <div className="pt-4 flex gap-4 flex-wrap">
              <a
                href="https://github.com/Wayfiding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs border border-border px-4 py-2 rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alberto-souza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs border border-border px-4 py-2 rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://wakatime.com/@Wayfiding"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs border border-border px-4 py-2 rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                Wakatime
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="font-mono text-xs text-terminal-dim">
            {t.footer.built} ⚡
          </p>
        </div>
      </div>
    </section>
  );
}
