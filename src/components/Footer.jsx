import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-12 border-t border-border mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Tishan. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <span>Designed with</span>
                    <span className="text-red-500">♥</span>
                    <span>using Once UI</span>
                </div>
            </div>
        </footer>
    )
}
