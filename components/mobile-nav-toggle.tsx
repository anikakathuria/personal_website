"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNavToggle() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 border-t z-50">
          <nav className="flex flex-col p-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm">
            <a href="/about" className="py-2 text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="/internships" className="py-2 text-sm font-medium hover:underline underline-offset-4">
              Internships
            </a>
            <a href="/research-projects" className="py-2 text-sm font-medium hover:underline underline-offset-4">
              Research & Projects
            </a>
            <a href="/publications" className="py-2 text-sm font-medium hover:underline underline-offset-4">
              Publications
            </a>
            <a href="/awards" className="py-2 text-sm font-medium hover:underline underline-offset-4">
              Awards
            </a>
            <a href="/contact" className="py-2 text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

