import { personalInfo } from "@/data/portfolio";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} {personalInfo.name}. Built with passion for data.
      </p>
    </div>
  </footer>
);

export default Footer;
