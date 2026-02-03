import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-semibold">Project Not Found</h2>
        <p className="text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/#projects"
          className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <Home className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    </div>
  )
}
