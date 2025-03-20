import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
export const runtime = "edge";


export default function ContactPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Contact</h1>

      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        I&apos;d love to connect with anyone with similar interests. Please reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" size="lg" className="gap-2" asChild>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            GitHub
          </Link>
        </Button>

        <Button variant="outline" size="lg" className="gap-2" asChild>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Link>
        </Button>
      </div>
    </div>
  )
}

