import { useI18n } from "@/lib/i18n";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const categoryKeys = ["frontend", "backend", "devops", "networking", "ai", "database"] as const;

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-2xl text-primary text-glow mb-12"
        >
          {t.skills.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-sm bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-mono text-sm text-terminal-green text-glow-green mb-3">
                {t.skills.categories[key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData[key].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-secondary text-foreground px-2.5 py-1 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
