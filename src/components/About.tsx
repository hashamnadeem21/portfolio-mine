import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Download, Code, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import resume from "./assets/pdf/Muhammad Hasham Nadeem.pdf";

const About = () => {
  const skills = [
    { icon: Smartphone, title: "Mobile Development", desc: "React Native, iOS & Android" },
    { icon: Globe, title: "Web Development", desc: "React, TypeScript, Node.js" },
    { icon: Code, title: "Clean Code", desc: "Best practices, testing, CI/CD" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer with a passion for creating seamless digital experiences
              across mobile and web platforms. With years of experience in building scalable
              applications, I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with curiosity about how apps work, and now I help businesses
              and startups build products that make a difference. I believe in writing code
              that's not just functional, but maintainable and elegant.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border card-hover transition-colors"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "10+", label: "Apps Published" },
          ].map((stat, index) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} delay={0.5 + index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, delay }: { value: string, label: string, delay: number }) => {
  const number = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, type: "spring", bounce: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
      whileHover={{ scale: 1.1 }}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 flex justify-center">
        <Counter from={0} to={number} />
        <span>{suffix}</span>
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });

      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={nodeRef} className="tabular-nums">{from}</span>;
};


export default About;
