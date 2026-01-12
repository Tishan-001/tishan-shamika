import { ThemeProvider } from "./components/ThemeProvider"
import { Layout } from "./components/Layout"
import { Hero } from "./components/Hero"
import { ProjectGrid } from "./components/ProjectGrid"
import { About } from "./components/About"
import { Blog } from "./components/Blog"
import { Newsletter } from "./components/Newsletter"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Hero />
        <ProjectGrid />
        <About />
        <Blog />
        <Newsletter />
      </Layout>
    </ThemeProvider>
  )
}

export default App
