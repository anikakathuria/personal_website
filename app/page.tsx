import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
  <main className="flex-1">
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className="flex flex-col items-center max-w-3xl">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m <span className="text-primary">Anika</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                a Columbia student passionate about climate justice and applying tech to climate solutions. trying to combine a technical background with environmental advocacy to create meaningful impact!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button className="gap-1" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
              <Button variant="outline" className="gap-1" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
  )
}

