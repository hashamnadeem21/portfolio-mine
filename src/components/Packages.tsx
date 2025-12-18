import { useState, useEffect, useRef } from "react";
import { Check, Shield, Smartphone, Globe, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView, animate } from "framer-motion";
import confetti from "canvas-confetti";

const Packages = () => {
    const packages = [
        {
            title: "Mobile App Development",
            price: "$1500",
            description: "Complete mobile application solution for your business.",
            icon: <Smartphone className="w-12 h-12 text-primary mb-4" />,
            features: [
                "Up to 15 Screens",
                "iOS & Android Compatible",
                "Custom UI/UX Design",
                "API Integration",

                "App Publishing",
                "Source Code Included",
                "1 Months Support",
            ],
            highlight: false,
        },
        {
            title: "Complete Website",
            price: "$1800",
            description: "Full-stack website development with modern technologies.",
            icon: <Globe className="w-12 h-12 text-primary mb-4" />,
            features: [
                "Up to 12 Pages",
                "Frontend & Backend Integration",
                "Mobile Responsive Design",
                "API Integrationn",
                "Complete Source Code",
                "Database Setup",
            ],
            highlight: true,
        },
        {
            title: "Maintenance & Fixes",
            price: "$20",
            period: "/hour",
            description: "Dedicated support for bug fixes and updates.",
            icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
            features: [
                "Bug Fixes",
                "Performance Optimization",
                "Security Updates",
                "Content Updates",
                "Code Refactoring",
                "Consultation",
            ],
            highlight: false,
        },
    ];

    const handleConfetti = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    return (
        <section id="packages" className="py-20 bg-secondary/30 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Service Packages
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Choose the perfect package for your project needs. Transparent pricing with no hidden costs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`h-full flex flex-col border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.highlight
                                ? "border-primary/50 shadow-lg shadow-primary/10 bg-background/60 backdrop-blur-sm"
                                : "border-white/10 bg-background/40 backdrop-blur-sm hover:border-primary/20"
                                }`}>
                                <CardHeader className="text-center pb-2">
                                    <div className="flex justify-center">{pkg.icon}</div>
                                    <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                                    <CardDescription className="text-sm mt-2">{pkg.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl font-bold text-primary flex justify-center items-center gap-1">
                                            <PriceCounter value={pkg.price} onComplete={pkg.highlight ? handleConfetti : undefined} />
                                        </div>
                                        {pkg.period && <span className="text-muted-foreground">{pkg.period}</span>}
                                    </div>
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-foreground/80">
                                                <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className={`w-full ${pkg.highlight ? "default" : "variant='outline'"}`}
                                        variant={pkg.highlight ? "default" : "outline"}
                                        asChild
                                    >
                                        <a href="https://wa.me/923134951116" target="_blank" rel="noopener noreferrer">Get Started</a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PriceCounter = ({ value, onComplete }: { value: string, onComplete?: () => void }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
    const numericValue = parseInt(value.replace(/\D/g, ""));
    const prefix = value.match(/^\D+/)?.[0] || "";

    useEffect(() => {
        if (isInView && nodeRef.current) {
            const node = nodeRef.current;
            const controls = animate(0, numericValue, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(v) {
                    node.textContent = Math.round(v).toString();
                },
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            return () => controls.stop();
        }
    }, [numericValue, isInView, onComplete]);

    return (
        <div className="flex items-baseline">
            <span className="text-2xl mr-1">{prefix}</span>
            <span ref={nodeRef} className="tabular-nums">{0}</span>
        </div>
    );
};

export default Packages;
