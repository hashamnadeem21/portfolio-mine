import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            role: "Senior Full Stack Developer",
            company: "Avicenna Enterprise Solutions",
            period: "2024 - Present",
            description: "Leading a team of developers to build scalable web applications using React, Node.js, React Native",
        },
        {
            role: "Mobile App Developer",
            company: "Falcon IT Consulting",
            period: "2022 - 2024",
            description: "Developed and published 10+ mobile applications for iOS and Android using React Native.",
        },
        {
            role: "Mobile Application Developer",
            company: "AMK SOLUTIONS LIMITED",
            period: "2021 - 2022",
            description: "Collaborated with designers to implement responsive user interfaces and interactive web experiences.",
        },
    ];

    return (
        <section id="experience" className="py-24 px-6 relative bg-secondary/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-primary/20 md:left-1/2 md:-ml-[1px]" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-0 md:left-1/2 md:-ml-3 w-10 h-10 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center z-10 shrink-0">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                                    <div className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <div className={`flex items-center gap-2 mb-2 text-primary font-medium ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Briefcase className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>

                                        <div className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for alternate side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
