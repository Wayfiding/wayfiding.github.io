import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import sectionBg1 from "@/assets/section-bg-1.png";

export function EducationSection() {
  const { t } = useI18n();

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={sectionBg1}
          alt=""
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-2xl text-primary text-glow mb-12"
        >
          {t.education.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.education.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border rounded-sm bg-card/80 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
            >
              <p className="font-mono text-sm text-terminal-green text-glow-green mb-1">
                {item.name}
              </p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
