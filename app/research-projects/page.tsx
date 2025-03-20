import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Github, Microscope } from "lucide-react"
import Link from 'next/link'

export default function ResearchProjectsPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research & Projects</h1>
          </div>

          {/* Research Section */}
          <div className="mx-auto w-full max-w-5xl py-8">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-left">Research</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-1">Climate Accountability Lab</h4>
                  <p className="text-sm text-primary font-medium">Research Assistant</p>
                  <p className="text-sm text-muted-foreground mb-3">January 2025 - Present</p>
                  <p className="text-muted-foreground mb-4">
                    Building an LLM and accompanying dashboard to classify and visualize greenwashing and
                    misinformation in fossil fuel social media, academia, and public discourse data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NLP", "Data Visualization","Prompt Engineering", "R","Dash"].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-1">Columbia University Speech Lab</h4>
                  <p className="text-sm text-primary font-medium">Research Assistant</p>
                  <p className="text-sm text-muted-foreground mb-3">May 2020 - May 2022</p>
                  <p className="text-muted-foreground mb-4">
                    Applied NLP techniques to detect the spread of mis/disinformation on Twitter and build a graph-based
                    SVM classifier to identify radical video content online. See Publications for published paper.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NLP", "Machine Learning", "SVM", "Graph Analysis", "Data Scraping"].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mx-auto w-full max-w-5xl py-8">
            <div className="flex items-center gap-2 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-left">Projects</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold">LionLeftovers</h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Fall 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Developed a cloud-native application for reselling leftover food from Columbia&apos;s dining halls.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["AWS", "Google Cloud", "S3", "Lambda", "EC2", "DynamoDB"].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href="https://github.com/anikakathuria/lion-leftovers">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold">FreeForFriends</h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Fall 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Implemented a full stack web application for connecting students to free NYC events.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "HTML", "Flask", "Python", "TypeScript", "JavaScript"].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href='https://github.com/anikakathuria/free-for-friends'>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold">SustainableU</h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      Fall 2021 - Spring 2022
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Developed the mobile frontend for app facilitating on-campus engagement with SDGs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "TypeScript"].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

