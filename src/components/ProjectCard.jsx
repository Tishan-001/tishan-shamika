import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function ProjectCard({ title, category, image, year }) {
    return (
        <motion.div
            className="group block cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted mb-4 border border-border/10 shadow-sm group-hover:shadow-lg transition-all duration-300">

                {/* Image */}
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/50 text-muted-foreground font-mono text-sm">
                        /project_preview
                    </div>
                )}

                {/* Overlay Button */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-md rounded-full border border-border/50 shadow-sm">
                        <span className="text-xs font-medium">Read case study</span>
                        <ArrowUpRight size={14} />
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                        {year}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground">{category}</p>
            </div>
        </motion.div>
    )
}
