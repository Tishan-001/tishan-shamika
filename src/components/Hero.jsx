import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                {/* Top Toggle Pills */}
                <div className="flex items-center gap-1 mb-8 p-1 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full">
                    <span className="px-4 py-1.5 rounded-full bg-background shadow-sm text-xs font-medium text-foreground">
                        Once UI
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        Featured work
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent px-4">
                    Building bridges between<br className="hidden md:block" /> design and code
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4">
                    I'm Tishan, a software engineer at TechCorp, where I craft intuitive
                    user experiences. After hours, I build my own projects.
                </p>

                {/* Avatar Pill Button */}
                <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 pl-2 pr-4 py-2 bg-background border border-border rounded-full shadow-sm hover:shadow-md transition-all group"
                >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
                        <img
                            src="/images/tishan.jpg"
                            alt="Tishan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        About — Tishan
                    </span>
                </motion.a>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="text-muted-foreground/50" size={24} />
            </motion.div>
        </section>
    )
}
