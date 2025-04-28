import type React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import "./globals.css"
export const metadata = {
  title: "Anika Kathuria",
  description: "Personal website of Anika Kathuria",
}
import Link from 'next/link'
import { MobileNavToggle } from "@/components/mobile-nav-toggle"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-950/75 border-b">
              <div className="container flex h-16 items-center justify-between">
                <MobileNavToggle />
                <div className="font-bold text-xl pl-2">
                  <Link href = "/">Anika Kathuria</Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  <a href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                    About
                  </a>
                  <a href="/internships" className="text-sm font-medium hover:underline underline-offset-4">
                    Internships
                  </a>
                  <a href="/research-projects" className="text-sm font-medium hover:underline underline-offset-4">
                    Research & Projects
                  </a>
                  <a href="/publications" className="text-sm font-medium hover:underline underline-offset-4">
                    Publications
                  </a>
                  <a href="/awards" className="text-sm font-medium hover:underline underline-offset-4">
                    Awards
                  </a>
                  <a href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                  </a>
                </nav>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://github.com/anikakathuria" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://www.linkedin.com/in/anika-kathuria-1b10931bb/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-8">
              <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Anika Kathuria. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
      </body>
    </html>
  )
}

