import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const SkillsSection = () => {
  // Duplicate skills for seamless infinite scroll
  const duplicated = [...skills, ...skills];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center"
        >
          <span className="text-primary font-mono text-lg block mb-2">{"// skills"}</span>
          Tech Stack & Tools
        </motion.h2>
      </div>

      {/* Sliding cards */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-slide-skill hover:[animation-play-state:paused]">
          {duplicated.map((skill, i) => (
            <div key={`${skill.name}-${i}`} className="skill-card mx-3 flex-shrink-0">
              {skill.iconType === "img" ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-8 h-8 object-contain ${skill.invertIcon ? "brightness-0 invert" : ""}`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <span className="text-3xl">{skill.icon}</span>
              )}
              <span className="text-sm font-mono text-foreground whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
