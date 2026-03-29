import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import { projects, Challenge } from "@/data/portfolio";
import { useState, useEffect } from "react";
import projectCover1 from "@/assets/project-cover-1.jpg";
import projectCover2 from "@/assets/project-cover-2.jpg";
import projectCover3 from "@/assets/project-cover-3.jpg";

const coverImages: Record<string, string> = {
  "data-pipeline-project": projectCover1,
  "etl-automation": projectCover2,
  "data-warehouse": projectCover3,
};

// ─── colour tokens matching the HTML's accent palette ───────────────────────
const challengeColors: Record<
  Challenge["color"],
  { border: string; tag: string; tagText: string; solBorder: string; label: string; num: string }
> = {
  teal: {
    border: "border-emerald-500/40",
    tag: "bg-emerald-950/60 text-emerald-300 border border-emerald-600/40",
    tagText: "text-emerald-300",
    solBorder: "border-l-emerald-500",
    label: "text-emerald-400",
    num: "text-emerald-500",
  },
  purple: {
    border: "border-violet-500/40",
    tag: "bg-violet-950/60 text-violet-300 border border-violet-600/40",
    tagText: "text-violet-300",
    solBorder: "border-l-violet-500",
    label: "text-violet-400",
    num: "text-violet-500",
  },
  blue: {
    border: "border-sky-500/40",
    tag: "bg-sky-950/60 text-sky-300 border border-sky-600/40",
    tagText: "text-sky-300",
    solBorder: "border-l-sky-500",
    label: "text-sky-400",
    num: "text-sky-500",
  },
  coral: {
    border: "border-rose-500/40",
    tag: "bg-rose-950/60 text-rose-300 border border-rose-600/40",
    tagText: "text-rose-300",
    solBorder: "border-l-rose-500",
    label: "text-rose-400",
    num: "text-rose-500",
  },
  amber: {
    border: "border-amber-500/40",
    tag: "bg-amber-950/60 text-amber-300 border border-amber-600/40",
    tagText: "text-amber-300",
    solBorder: "border-l-amber-500",
    label: "text-amber-400",
    num: "text-amber-500",
  },
};

// ─── Challenges accordion item ────────────────────────────────────────────────
function ChallengeItem({ c, index }: { c: Challenge; index: number }) {
  const [open, setOpen] = useState(false);
  const col = challengeColors[c.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`glass-card rounded-xl border ${col.border} overflow-hidden`}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className={`font-mono text-xs ${col.num} w-6 shrink-0`}>{c.num}</span>
        <span className="flex-1 text-sm font-medium text-foreground">{c.title}</span>
        <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full ${col.tag}`}>{c.tag}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Body */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-14 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
              <div className={`border-l-4 ${col.solBorder} bg-white/5 rounded-r-lg px-4 py-3`}>
                <p className={`font-mono text-[10px] font-semibold tracking-widest uppercase mb-1.5 ${col.label}`}>
                  Solution
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">{c.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-mono text-foreground mb-4">Project Not Found</h1>
          <button onClick={() => navigate("/")} className="text-primary font-mono hover:underline">
            ← Back Home
          </button>
        </div>
      </div>
    );
  }

  const coverSrc = project.coverImage || coverImages[project.id] || projectCover1;
  const { stats, overviewCards, diagramSections, challenges, steps, idea, whatWeDid } = project.details;
  const hasRichContent = !!(stats || overviewCards || diagramSections || challenges);

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero banner ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={coverSrc} alt={project.title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold gradient-text"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">

        {/* ── Tech stack pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-mono px-3 py-1.5 rounded-lg bg-secondary text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {hasRichContent ? (
          <>
            {/* ── 01 Overview ── */}
            <section className="mb-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="font-mono text-[11px] tracking-widest uppercase text-primary mb-1">01 — Overview</p>
                <h2 className="section-heading text-2xl mb-8">What was built &amp; why</h2>
              </motion.div>

              {/* KPI stats row */}
              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-8"
                >
                  {stats.map((s) => (
                    <div key={s.label} className="bg-background text-center px-6 py-6">
                      <div className="text-4xl font-bold gradient-text leading-none mb-2">{s.value}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Overview cards grid */}
              {overviewCards && (
                <div className="grid md:grid-cols-2 gap-4">
                  {overviewCards.map((card, i) => (
                    <motion.div
                      key={card.heading}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="glass-card rounded-xl p-6"
                    >
                      <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        {card.heading}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{card.body}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </section>

            {/* ── Dynamic Diagram Sections ── */}
            {diagramSections && diagramSections.map((ds, index) => (
              <section key={index} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-mono text-[11px] tracking-widest uppercase text-primary mb-1">
                    {ds.sectionPretitle || `0${index + 2} — Gallery`}
                  </p>
                  <h2 className="section-heading text-2xl mb-8">
                    {ds.sectionTitle || ds.title}
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden mb-8"
                >
                  <div className="px-6 pt-5 pb-3 flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{ds.title}</h3>
                    {ds.subtitle && (
                      <span className="text-sm text-muted-foreground">{ds.subtitle}</span>
                    )}
                  </div>
                  <div className="overflow-x-auto">
                    <img
                      src={ds.imagePath}
                      alt={ds.title}
                      className="w-full h-auto min-w-[300px]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </motion.div>
              </section>
            ))}

            {/* ── Implementation Steps ── */}
            {steps && steps.length > 0 && (
              <section className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-mono text-[11px] tracking-widest uppercase text-primary mb-1">
                    0{diagramSections ? diagramSections.length + 2 : 2} — Execution
                  </p>
                  <h2 className="section-heading text-2xl mb-8">Implementation steps</h2>
                </motion.div>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 glass-card p-4 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* ── 05 Challenges ── */}
            {challenges && challenges.length > 0 && (
              <section className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-mono text-[11px] tracking-widest uppercase text-primary mb-1">
                    05 — Behind the Scenes
                  </p>
                  <h2 className="section-heading text-2xl mb-8">Key challenges &amp; how they were solved</h2>
                </motion.div>
                <div className="space-y-2">
                  {challenges.map((c, i) => (
                    <ChallengeItem key={c.num} c={c} index={i} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          /* ── Fallback: simple legacy layout ── */
          <>
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
              <h2 className="section-heading mb-4 text-xl">
                <span className="text-primary mr-2">01.</span>The Idea
              </h2>
              <p className="text-muted-foreground leading-relaxed">{idea}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
              <h2 className="section-heading mb-4 text-xl">
                <span className="text-primary mr-2">02.</span>What We Did
              </h2>
              <p className="text-muted-foreground leading-relaxed">{whatWeDid}</p>
            </motion.section>

            {steps && steps.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
                <h2 className="section-heading mb-6 text-xl">
                  <span className="text-primary mr-2">03.</span>Implementation Steps
                </h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 glass-card p-4">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectDetail;
