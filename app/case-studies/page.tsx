import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatBubbleIcon, RocketIcon, BackpackIcon } from "lucide-react"

// Sample data - in a real app this would come from an API or CMS
const caseStudies = [
  {
    id: "racing-rivals",
    title: "Racing Rivals",
    category: "Mobile Racing Game",
    description: "How endemic advertising increased player engagement by 27% while generating 3x better ROI for advertisers.",
    image: "/placeholder.jpg",
    kpis: { engagement: "+27%", revenue: "+42%", retention: "+18%" },
  },
  {
    id: "pixel-quest",
    title: "Pixel Quest",
    category: "Retro Adventure",
    description: "Seamless integration of branded elements into an 8-bit world without breaking immersion.",
    image: "/placeholder.jpg",
    kpis: { engagement: "+19%", revenue: "+35%", retention: "+21%" },
  },
  {
    id: "cyber-empire",
    title: "Cyber Empire",
    category: "Strategy MMO",
    description: "Creating futuristic branded experiences that enhanced the cyberpunk atmosphere.",
    image: "/placeholder.jpg",
    kpis: { engagement: "+31%", revenue: "+53%", retention: "+15%" },
  },
  {
    id: "fantasy-legends",
    title: "Fantasy Legends",
    category: "RPG Adventure",
    description: "Turning brand integrations into meaningful in-game quests and rewards.",
    image: "/placeholder.jpg",
    kpis: { engagement: "+23%", revenue: "+47%", retention: "+22%" },
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-[#2C238B] text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Case Studies</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Real-world success stories from publishers and advertisers using Haxelo's endemic in-game advertising platform.
              </p>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {caseStudies.map((study) => (
                <Card key={study.id} className="overflow-hidden">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {study.category}
                    </div>
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{study.description}</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                        <span className="text-xs text-muted-foreground">Engagement</span>
                        <span className="font-bold text-primary">{study.kpis.engagement}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                        <span className="text-xs text-muted-foreground">Revenue</span>
                        <span className="font-bold text-[#13A4BF]">{study.kpis.revenue}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                        <span className="text-xs text-muted-foreground">Retention</span>
                        <span className="font-bold text-[#2C238B]">{study.kpis.retention}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/case-studies/${study.id}`}>Read Full Case Study</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Haxelo. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                Case Studies
              </Link>
              {" | "}
              <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground">
                Terms & Conditions
              </Link>
              {" | "}
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}