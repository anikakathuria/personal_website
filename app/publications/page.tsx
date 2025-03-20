import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PublicationsPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h1>
          </div>

          <div className="mx-auto w-full max-w-5xl py-8">
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-4 text-left">
                <h4 className="font-bold text-lg">
                  Identifying the Popularity and Persuasiveness of Right and Left-Leaning Group Videos on Social Media
                </h4>
                <p className="text-muted-foreground">Second Author & Presenter</p>
                <p className="text-muted-foreground italic">IEEE Big Data 2021 Conference</p>
                <Link href="https://ieeexplore.ieee.org/document/9671635">
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  View Publication
                </Button>
                </Link>
              </div>

              <div className="border-l-4 border-primary pl-4 text-left">
                <h4 className="font-bold text-lg">
                  The Influence of Fossil Fuel Funding on Climate Research
                </h4>
                <p className="text-muted-foreground">Co-author</p>
                <p className="text-muted-foreground italic">September 2024</p>
                <p className="text-sm text-muted-foreground">
                  Personally built an<Link href="http://ffr-research-visualization.streamlit.app" className="text-primary underline hover:text-primary/80 font-medium mx-1">interactive data visualization tool</Link>for uncovered funding
                </p>
                <Link href="https://drive.google.com/file/d/1oMXo-QkGZCld9cRA7dq78lYox3j5GyQP/view">
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  View Report
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

