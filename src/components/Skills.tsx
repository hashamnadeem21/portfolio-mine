import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        "TypeScript",
        "React",
        "Node.js",
        "Native Module",
        "Figma",
        "GitHub",
        "Postman API",
        "App Store",
        "Play Store",
        "Xcode",
        "Android Studio",
        "Jest",
        "CI/CD Pipeline",
        "Payment Gateway",
        "Stripe",
        "RevenueCat",
        "Firebase",
        "API Integration",
        "Mobile Application Development",
        "Website Development",
        "App Deployment",
        "Team Leadership",
        "Communication",
    ];

    // Remove duplicates if any (Figma was mentioned twice in the prompt)
    const uniqueSkills = Array.from(new Set(skills));

    return (
        <section id="skills" className="py-24 px-6 relative bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {uniqueSkills.map((skill) => (
                        <motion.div
                            key={skill}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-default shadow-sm text-lg text-muted-foreground hover:text-foreground hover:shadow-md"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
