import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import sectionBg2 from "@/assets/section-bg-2.png";

export function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={sectionBg2}
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-2xl text-primary text-glow mb-12"
        >
          {t.experience.title}
        </motion.h2>

        <div className="space-y-8">
          {t.experience.jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-l-2 border-primary/40 pl-6 relative"
            >
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                <span className="font-mono text-xs text-terminal-green text-glow-green">
                  @ {job.company}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-4">{job.period}</p>
              <ul className="space-y-2">
                {job.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-terminal-dim mt-0.5 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-mono text-xl text-primary text-glow mb-6">
            {t.achievements.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {t.achievements.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-sm bg-card/80 backdrop-blur-sm p-4 text-sm text-muted-foreground"
              >
                <span className="text-primary mr-2">→</span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
