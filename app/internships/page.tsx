export default function InternshipsPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Internships</h1>

          </div>

          <div className="mx-auto w-full max-w-5xl py-8">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-primary pl-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold">Software/Cloud Engineering Intern</h4>
                  <p className="text-sm text-muted-foreground">Crusoe Energy</p>
                  <p className="text-sm text-muted-foreground">June 2024 - August 2024</p>
                </div>
                <div className="md:w-2/3 text-left">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Architected and deployed a scalable test automation framework on Google Cloud Kubernetes Engine
                      (GKE) to support daily test execution for cloud platform supporting 400+ MW across 200+ data
                      centers
                    </li>
                    <li>
                      Implemented 10+ end-to-end testing workflows in Go, Playwright, Next.js for VM/disk lifecycles;
                      leveraged CI/CD pipelines to build Docker containers upon cloud infrastructure edits executed by a
                      scheduled CronJob
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-primary pl-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold">Software Engineering Intern</h4>
                  <p className="text-sm text-muted-foreground">Nextdoor</p>
                  <p className="text-sm text-muted-foreground">May 2023 - August 2023</p>
                </div>
                <div className="md:w-2/3 text-left">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Built 2 internal Generative AI tools on top of the OpenAI API to pre-populate composer fields
                      based on user input, directly leading to a 20% increase in marketplace and structured Event posts
                    </li>
                    <li>
                      Developed backend GraphQL frameworks for promotional features of the app&apos;s secondhand marketplace
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-primary pl-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold">Data Engineering Intern</h4>
                  <p className="text-sm text-muted-foreground">Intent HQ</p>
                  <p className="text-sm text-muted-foreground">June 2022 - August 2022</p>
                </div>
                <div className="md:w-2/3 text-left">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Built an interactive backtesting/visualization tool for analyzing historical trends in 3 years of
                      client data and 60+ client features in Databricks; set up pipelines for ~16 million users through
                      S3, Scylla, and Elasticsearch
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-primary pl-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold">Directed Study and Internship</h4>
                  <p className="text-sm text-muted-foreground">Stonybrook University</p>
                  <p className="text-sm text-muted-foreground">February 2020 - May 2020</p>
                </div>
                <div className="md:w-2/3 text-left">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Hybrid internship in mathematical linguistics under Dr. Thomas Graf</li>
                    <li>
                      Studied applications of algebra, order theory, graph theory, and theoretical computer science to
                      language modeling; proofread textbook manuscript and provided in-depth feedback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

