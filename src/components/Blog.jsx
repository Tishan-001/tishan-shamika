import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const BLOG_POSTS = [
    {
        title: "The Future of Design Engineering",
        summary: "Exploring the convergence of design tools and development workflows in 2025.",
        date: "April 12, 2025",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        tags: ["Design", "Engineering"]
    },
    {
        title: "Building Scalable Design Systems",
        summary: "Lessons learned from maintaining a multi-brand design system at scale.",
        date: "March 28, 2025",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2680&auto=format&fit=crop",
        tags: ["Systems", "React"]
    },
    {
        title: "Mastering Tailwind CSS Animations",
        summary: "Deep dive into creating performant, beautiful animations with utility classes.",
        date: "March 15, 2025",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        tags: ["CSS", "Tutorial"]
    }
]

export function Blog() {
    return (
        <section id="blog" className="py-20 md:py-32 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest from the blog</h2>
                    <p className="text-muted-foreground max-w-md text-lg">
                        Thoughts on technology, design, and everything in between.
                    </p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    View all posts <ArrowUpRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {BLOG_POSTS.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-6">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex gap-2 mb-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {post.summary}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono pt-2">
                                {post.date}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    View all posts <ArrowUpRight size={16} />
                </a>
            </div>
        </section>
    )
}
