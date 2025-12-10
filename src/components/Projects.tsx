import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = {
  web: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization, user management, and subscription handling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["Next.js", "TypeScript", "Prisma", "Charts"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creators to showcase their work with customizable themes.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      tags: ["React", "Tailwind", "Supabase"],
      github: "#",
      live: "#",
    },
  ],
  mobile: [
    {
      title: "Fitness Tracker App",
      description: "Track workouts, nutrition, and progress with AI-powered recommendations and social features.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
      tags: ["React Native", "Firebase", "Health Kit"],
      github: "#",
      live: "#",
    },
    {
      title: "Food Delivery App",
      description: "Complete food ordering experience with real-time tracking, payments, and restaurant management.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop",
      tags: ["Flutter", "Dart", "Google Maps"],
      github: "#",
      live: "#",
    },
    {
      title: "Finance Manager",
      description: "Personal finance app with budget tracking, expense categorization, and financial insights.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop",
      tags: ["React Native", "Redux", "Plaid API"],
      github: "#",
      live: "#",
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");

  return (
    <section id="projects" className="py-24 px-6 bg-card/50 relative">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
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
            variant={activeTab === "web" ? "hero" : "outline"}
            size="lg"
            onClick={() => setActiveTab("web")}
            className="gap-2"
          >
            <Globe className="w-5 h-5" />
            Web Projects
          </Button>
          <Button
            variant={activeTab === "mobile" ? "hero" : "outline"}
            size="lg"
            onClick={() => setActiveTab("mobile")}
            className="gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Mobile Apps
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects[activeTab].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-card border border-border overflow-hidden card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
