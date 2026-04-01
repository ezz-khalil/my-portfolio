import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  { icon: Mail, href: `mailto:${personalInfo.contacts.email}`, label: personalInfo.contacts.email },
  { icon: Phone, href: `tel:${personalInfo.contacts.phone}`, label: personalInfo.contacts.phone },
  { icon: Linkedin, href: personalInfo.contacts.linkedin, label: "LinkedIn" },
  { icon: Github, href: personalInfo.contacts.github, label: "GitHub" },
];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Trigger Navbar drop-down when scrolling past the main hero content
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 250 && !isScrolled) setIsScrolled(true);
    else if (latest <= 250 && isScrolled) setIsScrolled(false);
  });

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="aurora-bg" />
      </div>

      {/* DROPDOWN STICKY NAVBAR - Animates cleanly in without altering DOM flow */}
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: isScrolled ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 h-20 bg-background/85 backdrop-blur-xl border-b border-white/5 shadow-2xl"
      >
        <div className="w-full h-full mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-primary/40 p-0.5 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-secondary overflow-hidden">
                <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base gradient-text leading-tight">{personalInfo.name}</span>
              <span className="text-primary font-mono text-[10px] sm:text-xs leading-tight">{"< "}{personalInfo.title}{" />"}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-3">
            {contactLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors"
                title={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* NORMAL FLOW HERO SECTION - No empty space, no layout shifting jitter */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center pt-32 pb-16 min-h-[70vh]">
        <div className="w-full mx-auto px-6 lg:px-12 flex flex-col items-center justify-center gap-8">
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="rounded-full border-2 border-primary/40 p-1 w-44 h-44 md:w-56 md:h-56 animate-pulse-glow"
          >
            <div className="w-full h-full rounded-full bg-secondary overflow-hidden flex items-center justify-center">
              {personalInfo.photo && personalInfo.photo !== "/placeholder-avatar.svg" ? (
                <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
              ) : (
                 <span className="font-mono font-bold text-primary text-4xl">
                   {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                 </span>
              )}
            </div>
          </motion.div>

          {/* Name & Title */}
          <div className="flex flex-col items-center gap-2 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-bold tracking-tight text-4xl md:text-6xl"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-primary font-mono tracking-wider text-lg md:text-2xl mt-2"
            >
              {"< "}{personalInfo.title}{" />"}
            </motion.p>
          </div>

          {/* Brief */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed text-center"
          >
            {personalInfo.brief}
          </motion.p>

          {/* Contacts */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            {contactLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="px-5 py-3 glass-card hover:-translate-y-1 hover:border-primary/40 flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">{label}</span>
              </a>
            ))}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              />
            </div>
          </motion.div>
          
        </div>
      </section>
    </>
  );
};

export default HeroSection;
