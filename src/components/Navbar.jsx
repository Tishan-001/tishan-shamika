import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { ThemeToggle } from "./ThemeToggle"
import { Home, User, Briefcase, FileText, Image as ImageIcon, Menu, X, CloudSun } from "lucide-react"

export function Navbar() {
    const [time, setTime] = useState("")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [weather, setWeather] = useState({ temp: null, loading: true })

    useEffect(() => {
        // Time update
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Colombo'
            }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)

        // Weather fetch (Colombo coordinates)
        fetch("https://api.open-meteo.com/v1/forecast?latitude=6.9271&longitude=79.8612&current_weather=true")
            .then(res => res.json())
            .then(data => {
                setWeather({
                    temp: Math.round(data.current_weather.temperature),
                    loading: false
                })
            })
            .catch(err => {
                console.error("Failed to fetch weather", err)
                setWeather({ temp: null, loading: false })
            })

        return () => clearInterval(interval)
    }, [])

    const navLinks = [
        { name: "About", href: "#about", icon: User },
        { name: "Work", href: "#work", icon: Briefcase },
        { name: "Blog", href: "#blog", icon: FileText },
        { name: "Gallery", href: "#gallery", icon: ImageIcon },
    ]

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="w-full max-w-7xl flex items-center justify-between">

                {/* Location - Left Side */}
                <div className="hidden md:flex flex-col text-xs font-mono text-muted-foreground">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                        Colombo, LK
                        <span className="text-muted-foreground">|</span>
                        <span className="flex items-center gap-1">
                            <CloudSun size={12} />
                            {weather.loading ? "..." : (weather.temp !== null ? `${weather.temp}°C` : "29°C")}
                        </span>
                    </span>
                    <span>Local time</span>
                </div>

                {/* Center Navigation Pill */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 p-1.5 bg-background/80 backdrop-blur-xl border border-border/50 rounded-full shadow-sm supports-[backdrop-filter]:bg-background/50">

                    <a href="#" className="p-2 rounded-full hover:bg-accent/50 text-muted-foreground hover:text-foreground transition-colors" aria-label="Home">
                        <Home size={18} strokeWidth={2} />
                    </a>

                    <div className="w-px h-4 bg-border mx-1" />

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
                            >
                                <link.icon size={16} />
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-accent/50 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>

                    <div className="w-px h-4 bg-border mx-1" />

                    <ThemeToggle className="ml-0 hover:bg-accent/50" />
                </div>

                {/* Time - Right Side */}
                <div className="hidden md:block text-xs font-mono font-medium text-muted-foreground tabular-nums">
                    {time}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-4 right-4 p-2 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl md:hidden flex flex-col gap-1 anim-scale-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                        >
                            <link.icon size={18} />
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}
