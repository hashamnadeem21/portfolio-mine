import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = {
  web: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe for seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization, user management, and subscription handling. Features beautiful charts and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      tags: ["Next.js", "TypeScript", "Prisma", "Charts"],
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creators to showcase their work with customizable themes and drag-and-drop editing capabilities.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
      tags: ["React", "Tailwind", "Supabase"],
    },
  ],
  mobile: [
    {
      title: "Fitness Tracker App",
      description: "Track workouts, nutrition, and progress with AI-powered recommendations and social features. Syncs with Apple Health and Google Fit.",
      images: [
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop",
      ],
      tags: ["React Native", "Firebase", "Health Kit"],
    },
    {
      title: "Food Delivery App",
      description: "Complete food ordering experience with real-time tracking, payments, and restaurant management. Features smart recommendations.",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=600&fit=crop",
      ],
      tags: ["Flutter", "Dart", "Google Maps"],
    },
    {
      title: "Finance Manager",
      description: "Personal finance app with budget tracking, expense categorization, and financial insights. Secure bank integration with Plaid API.",
      images: [
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=600&fit=crop",
      ],
      tags: ["React Native", "Redux", "Plaid API"],
    },
  ],
};

const LaptopMockup = ({ image }: { image: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const lidRotation = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative w-full max-w-lg mx-auto perspective-1000"
    >
      {/* Laptop container with 3D perspective */}
      <div className="relative" style={{ perspective: "1000px" }}>
        {/* Laptop Lid (Screen) */}
        <motion.div
          style={{ rotateX: lidRotation }}
          className="relative origin-bottom"
        >
          {/* Screen bezel */}
          <div className="bg-secondary rounded-t-xl p-3 pb-0 shadow-2xl">
            {/* Camera */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-muted-foreground/30 rounded-full" />

            {/* Screen */}
            <div className="relative rounded-t-lg overflow-hidden bg-background aspect-[16/10]">
              <img
                src={image}
                alt="Project screenshot"
                className="w-full h-full object-cover"
              />

              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Laptop Base (Keyboard) */}
        <div className="relative">
          {/* Hinge */}
          <div className="h-2 bg-secondary rounded-b-sm mx-4 shadow-inner" />

          {/* Base */}
          <div className="bg-secondary rounded-b-xl pt-1 pb-3 px-4 shadow-xl">
            {/* Keyboard area */}
            <div className="bg-muted/50 rounded-lg h-20 flex items-center justify-center">
              {/* Keyboard lines */}
              <div className="space-y-1.5 w-4/5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-1">
                    {[...Array(12 - i)].map((_, j) => (
                      <div
                        key={j}
                        className="flex-1 h-2.5 bg-muted-foreground/10 rounded-sm"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Trackpad */}
            <div className="mx-auto mt-2 w-24 h-14 bg-muted/30 rounded-lg border border-border/50" />
          </div>

          {/* Bottom edge */}
          <div className="h-1 bg-muted-foreground/20 rounded-b-xl mx-2" />
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/10 rounded-full blur-xl" />
    </motion.div>
  );
};

const PhoneMockup = ({ image, delay = 0 }: { image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative"
  >
    {/* Phone frame */}
    <div className="relative w-36 md:w-44 bg-secondary rounded-[2.5rem] p-2 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-full z-10" />

      {/* Screen */}
      <div className="relative rounded-[2rem] overflow-hidden aspect-[9/19.5] bg-background">
        <img
          src={image}
          alt="App screenshot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-muted-foreground/30 rounded-full" />
    </div>
  </motion.div>
);

const WebProjectCard = ({ project, index }: { project: typeof projects.web[0]; index: number }) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 py-20 transition-all`}
    >
      {/* Laptop Mockup */}
      <div className="flex-1 w-full">
        <LaptopMockup image={project.image} />
      </div>

      {/* Project Info */}
      <div className={`flex-1 text-center lg:text-left ${isReversed ? 'lg:text-right' : ''}`}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Project {String(index + 1).padStart(2, '0')}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className={`flex flex-wrap gap-2 justify-center ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const MobileProjectCard = ({ project, index }: { project: typeof projects.mobile[0]; index: number }) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 py-16 border-b border-border last:border-b-0 transition-all`}
    >
      {/* Phone Mockups */}
      <div className="flex items-end gap-4 shrink-0">
        <PhoneMockup image={project.images[0]} delay={0.2} />
        <div className="-mb-8">
          <PhoneMockup image={project.images[1]} delay={0.4} />
        </div>
      </div>

      {/* Project Info */}
      <div className={`flex-1 text-center lg:text-left ${isReversed ? 'lg:text-right' : ''}`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Project {String(index + 1).padStart(2, '0')}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className={`flex flex-wrap gap-2 justify-center ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("mobile");

  return (
    <section id="projects" className="py-24 px-6 bg-card/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A selection of my recent work in web and mobile development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            variant={activeTab === "mobile" ? "hero" : "outline"}
            size="lg"
            onClick={() => setActiveTab("mobile")}
            className="gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Mobile Apps
          </Button>
          <Button
            variant={activeTab === "web" ? "hero" : "outline"}
            size="lg"
            onClick={() => setActiveTab("web")}
            className="gap-2"
          >
            <Globe className="w-5 h-5" />
            Web Projects
          </Button>
        </motion.div>

        {/* Projects List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "web" ? (
              <div className="divide-y divide-border">
                {projects.web.map((project, index) => (
                  <WebProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            ) : (
              projects.mobile.map((project, index) => (
                <MobileProjectCard key={project.title} project={project} index={index} />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
