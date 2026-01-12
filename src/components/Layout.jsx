import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground relative overflow-hidden">
            {/* Aurora Background */}
            <div className="fixed inset-0 z-[-1] aurora-gradient opacity-60 dark:opacity-40" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 max-w-7xl">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    )
}
