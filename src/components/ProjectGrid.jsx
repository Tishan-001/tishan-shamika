import { ProjectCard } from "./ProjectCard"

const PROJECTS = [
    {
        title: "E-Commerce Dashboard",
        category: "Web Application",
        year: "2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Finance App Mobile",
        category: "Mobile Design",
        year: "2024",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "AI Chat Interface",
        category: "Product Design",
        year: "2024",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
    },
    {
        title: "Portfolio 2023",
        category: "Web Design",
        year: "2023",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop"
    }
]

export function ProjectGrid() {
    return (
        <section id="work" className="py-20 md:py-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        A collection of projects exploring the intersection of design and technology.
                    </p>
                </div>
                <a href="#" className="hidden md:inline-block text-sm font-mono border-b border-gray-300 dark:border-gray-700 pb-1 hover:text-blue-500 hover:border-blue-500 transition-colors">
                    View All Projects
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {PROJECTS.map((project, index) => (
                    <div key={index} className={index % 2 === 1 ? "md:mt-16" : ""}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <a href="#" className="text-sm font-mono border-b border-gray-300 dark:border-gray-700 pb-1">
                    View All Projects
                </a>
            </div>
        </section>
    )
}
