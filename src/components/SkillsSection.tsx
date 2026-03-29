import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import { useState, useEffect } from "react";

const CHUNK_SIZE = 8;
const chunkedSkills: typeof skills[] = [];
for (let i = 0; i < skills.length; i += CHUNK_SIZE) {
  chunkedSkills.push(skills.slice(i, i + CHUNK_SIZE));
}

const SkillsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % chunkedSkills.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

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

      <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
        <div className="relative min-h-[280px] md:min-h-[260px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
            >
              {chunkedSkills[currentPage].map((skill, i) => (
                <div key={`${skill.name}-${i}`} className="skill-card w-full group cursor-pointer">
                  {skill.iconType === "img" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.invertIcon ? "brightness-0 invert opacity-90" : ""}`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{skill.icon}</span>
                  )}
                  <span className="text-sm font-mono text-foreground text-center line-clamp-1">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Pagination */}
        {chunkedSkills.length > 1 && (
          <div className="flex justify-center mt-8 gap-3">
            {chunkedSkills.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentPage ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to skills page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
