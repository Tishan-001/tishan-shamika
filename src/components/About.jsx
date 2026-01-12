import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 border-t border-border">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">

                {/* Sidebar Sticky Header */}
                <div className="relative">
                    <div className="sticky top-32 space-y-8">

                        {/* Profile Image */}
                        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-border mb-6">
                            <img
                                src="/images/tishan.jpg"
                                alt="Tishan"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-2">Tishan</h3>
                            <p className="text-lg text-muted-foreground mb-4">Software Engineer</p>

                            <div className="flex gap-4 mb-6">
                                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary hover:text-primary transition-colors">
                                    <Github size={18} />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary hover:text-primary transition-colors">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary hover:text-primary transition-colors">
                                    <Twitter size={18} />
                                </a>
                                <a href="mailto:hello@example.com" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary hover:text-primary transition-colors">
                                    <Mail size={18} />
                                </a>
                            </div>

                            <div className="space-y-2 text-sm text-muted-foreground font-mono">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Available for work
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>📍</span> Colombo, Sri Lanka
                                </div>
                            </div>
                        </div>

                        {/* Page Navigation */}
                        <nav className="hidden md:block space-y-2 mt-8">
                            {["Introduction", "Experience", "Skills"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors pl-3 border-l-2 border-transparent hover:border-primary"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-20">

                    {/* Introduction */}
                    <motion.div
                        id="introduction"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Introduction</h4>
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-foreground/90">
                            I'm a design-minded software engineer based in India, specializing in building exceptional digital experiences.
                            <br /><br />
                            With a deep understanding of standard web technologies and a passion for perfect UI,
                            I bridge the gap between static design and dynamic applications.
                        </p>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        id="experience"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">Work Experience</h4>
                        <div className="space-y-12">
                            <div className="group relative pl-8 border-l border-border">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h5 className="text-lg font-bold">TechCorp Inc.</h5>
                                    <span className="text-sm font-mono text-muted-foreground">2023 — Present</span>
                                </div>
                                <p className="text-base font-medium mb-3">Senior Frontend Engineer</p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Leading the frontend architecture for the core product. Improved performance by 40% and established the internal design system.
                                </p>
                            </div>

                            <div className="group relative pl-8 border-l border-border">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h5 className="text-lg font-bold">Startup Studio</h5>
                                    <span className="text-sm font-mono text-muted-foreground">2021 — 2023</span>
                                </div>
                                <p className="text-base font-medium mb-3">Software Engineer</p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Developed multiple MVP products for early-stage startups. Worked across the full stack using Next.js and Node.js.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div
                        id="skills"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Technical Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "PostgreSQL", "AWS", "Docker"].map(skill => (
                                <span key={skill} className="px-4 py-2 bg-secondary/30 border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
