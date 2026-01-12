import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { cn } from "../lib/utils"

export function ThemeToggle({ className }) {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
                "p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                className
            )}
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2 text-blue-400" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
