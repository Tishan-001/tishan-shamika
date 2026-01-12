import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
    return (
        <section className="py-20 border-t border-border">
            <div className="relative rounded-3xl bg-secondary/20 border border-border overflow-hidden p-8 md:p-12">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to my newsletter</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            I share thoughts on design, engineering, and the tech industry.
                            No spam, just quality content once a month.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="flex-grow px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                            >
                                <span>Subscribe</span>
                                <ArrowRight size={16} />
                            </button>
                        </form>
                        <p className="text-xs text-muted-foreground">
                            Join 2,000+ subscribers. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
