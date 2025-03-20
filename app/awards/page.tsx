import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
export const runtime = "edge";


export default function AwardsPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards</h1>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-1">NCWIT Award for Aspirations in Computing</h3>
                <p className="text-sm text-muted-foreground mb-2">Honorable Mention, March 2021</p>
                <p className="text-muted-foreground">
                  Recognized for computing-related aspirations and achievements in technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-1">Virtasant Future Leaders in Technology Award</h3>
                <p className="text-sm text-muted-foreground mb-2">Winner, May 2021</p>
                <p className="text-muted-foreground">
                  Awarded for demonstrating exceptional leadership potential in technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-1">Congressional App Challenge Winner</h3>
                <p className="text-sm text-muted-foreground mb-2">2018-2019</p>
                <p className="text-muted-foreground">
                  Built an app that facilitated discreet contact to law enforcement using text-to-speech, presented to Congress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

