import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";

const contactLinks = [
  { icon: Mail, href: `mailto:${personalInfo.contacts.email}`, label: personalInfo.contacts.email },
  { icon: Phone, href: `tel:${personalInfo.contacts.phone}`, label: personalInfo.contacts.phone },
  { icon: Linkedin, href: personalInfo.contacts.linkedin, label: "LinkedIn" },
  { icon: Github, href: personalInfo.contacts.github, label: "GitHub" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center gap-8">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-primary/60 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-secondary overflow-hidden flex items-center justify-center">
              {personalInfo.photo && personalInfo.photo !== "/placeholder-avatar.svg" ? (
                <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl font-mono font-bold text-primary">
                  {personalInfo.name.split(" ").map(n => n[0]).join("")}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-mono tracking-wider">
            {"< "}{personalInfo.title}{" />"}
          </p>
        </motion.div>

        {/* Brief */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          {personalInfo.brief}
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contactLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
