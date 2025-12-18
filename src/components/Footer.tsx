import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hashamnadeem21", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hasham-nadeem-0075a7243", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/hashamnadeem_", label: "Instagram" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Logo />
            <p className="text-muted-foreground mt-2 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Muhammad Hasham Nadeem
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
