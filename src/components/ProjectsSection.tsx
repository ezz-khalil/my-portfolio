import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/portfolio";
import projectCover1 from "@/assets/project-cover-1.jpg";
import projectCover2 from "@/assets/project-cover-2.jpg";
import projectCover3 from "@/assets/project-cover-3.jpg";

const coverImages: Record<string, string> = {
  "data-pipeline-project": projectCover1,
  "etl-automation": projectCover2,
  "data-warehouse": projectCover3,
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center mb-16"
        >
          <span className="text-primary font-mono text-lg block mb-2">{"// projects"}</span>
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="project-card group"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.coverImage || coverImages[project.id] || projectCover1}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.brief}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-primary text-sm font-mono group-hover:gap-2 transition-all mt-auto">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
