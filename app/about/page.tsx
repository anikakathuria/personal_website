import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, GraduationCap } from "lucide-react"
export const runtime = "edge";


export default function AboutPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I study Computer Science and Sustainable Development at Columbia and am extremely passionate about applying tech to climate solutions. 
              I&apos;m interested in environmental justice, AI and climate, energy systems, the built environment, transportation, and more.
              Currently working at the Climate Accountability Lab at University of Miami as a research assistant.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <p className="text-muted-foreground">
                Columbia University
                <br />
                Graduating May 2025
                <br />
                Major: Computer Science
                <br />
                Minor: Sustainable Development
                <br />
                GPA: 3.9
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Skills</h3>
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium">Languages:</span> Python, Java, C, Go, SQL, JavaScript, TypeScript
                <br />
                <span className="font-medium">Frameworks/Libraries:</span> React, Next.js, GraphQL
                <br />
                <span className="font-medium">Cloud/DevOps:</span> AWS, Google Cloud, Docker, Kubernetes, CI/CD
                <br />
                <span className="font-medium">Data:</span> Spark, Databricks, Elasticsearch, SQLAlchemy
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-left">What I&apos;m Up To</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Climate Action",
                  period: "Spring 2022 - Present",
                  description:
                    "Lead and strategize campaigns, events, outreach, club meetings for institutional climate action; coordinate with university administration, faculty, national/NYC organizations",
                },
                {
                  title: "College to Climate Launchpad Fellowship",
                  period: "Fall 2023",
                  description:
                    "Received an interactive introduction into climate tech and harnessing technical skills for climate work.",
                },
                {
                  title: "Teaching Assistant",
                  role: "Data Structures, Intro to Java",
                  period: "Fall 2022 - Fall 2024",
                },
              ].map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold">{activity.title}</h4>
                    <p className="text-sm text-primary font-medium">{activity.role}</p>
                    <p className="text-xs text-muted-foreground mb-2">{activity.period}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

