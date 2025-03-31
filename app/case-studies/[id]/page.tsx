import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"

// Sample data - in a real app this would come from an API or CMS
const caseStudies = {
  "racing-rivals": {
    title: "Racing Rivals",
    subtitle: "Mobile Racing Game",
    publisherName: "SpeedWorks Games",
    publisherLogo: "/placeholder-logo.png",
    heroImage: "/placeholder.jpg",
    date: "March 2024",
    summary: "How endemic advertising increased player engagement by 27% while generating 3x better ROI for advertisers.",
    challenge: "SpeedWorks Games was looking for a monetization strategy that wouldn't disrupt the immersive racing experience they had created. Traditional banner ads and video interstitials were breaking immersion and causing player frustration.",
    solution: "Haxelo worked with SpeedWorks to implement endemic in-game advertising that seamlessly integrated brand messaging into the racing environment. This included branded race tracks, car customizations, and trackside billboards that matched the game's art style perfectly.",
    results: {
      engagement: "+27%",
      revenue: "+42%",
      retention: "+18%",
      adComplaints: "-52%",
    },
    testimonial: {
      quote: "Haxelo's endemic approach transformed how we think about monetization. Our players actually enjoy the branded content because it enhances rather than interrupts their experience.",
      author: "Sarah Chen",
      title: "Product Manager, SpeedWorks Games",
    },
    gallery: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    advertisers: ["Auto Brand X", "Energy Drink Y", "Apparel Brand Z"],
    metrics: [
      { label: "Click-through rate", value: "3.8%" },
      { label: "Brand recall", value: "2.4x higher" },
      { label: "Player sentiment", value: "83% positive" },
    ],
  },
  "pixel-quest": {
    title: "Pixel Quest",
    subtitle: "Retro Adventure",
    publisherName: "RetroFuture Studios",
    publisherLogo: "/placeholder-logo.png",
    heroImage: "/placeholder.jpg",
    date: "February 2024",
    summary: "Seamless integration of branded elements into an 8-bit world without breaking immersion.",
    challenge: "RetroFuture Studios wanted to monetize their popular retro-style adventure game without compromising its distinct pixel art aesthetic. Traditional ad formats would have clashed with the game's carefully crafted visual style.",
    solution: "Haxelo designed pixel-perfect branded items, quests, and NPCs that maintained the game's authentic 8-bit look while delivering advertising value. Special branded power-ups and collectibles became desirable in-game items rather than intrusive ads.",
    results: {
      engagement: "+19%",
      revenue: "+35%",
      retention: "+21%",
      adComplaints: "-47%",
    },
    testimonial: {
      quote: "Our players actually seek out the branded content now! The pixel-perfect integration Haxelo provided maintained the artistic integrity of our game while creating a new revenue stream.",
      author: "Marco Liu",
      title: "Creative Director, RetroFuture Studios",
    },
    gallery: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    advertisers: ["Retro Gaming Co", "Tech Brand Y", "Streaming Service Z"],
    metrics: [
      { label: "Click-through rate", value: "3.2%" },
      { label: "Brand recall", value: "1.9x higher" },
      { label: "Player sentiment", value: "79% positive" },
    ],
  },
  // Additional case studies would be added here
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id]
  
  if (!caseStudy) {
    notFound()
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-[#2C238B] text-white">
          <div className="container px-4 py-8 md:py-12 md:px-6">
            <div className="mb-4">
              <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                <Link href="/case-studies">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {caseStudy.title}
                  </h1>
                  <p className="text-xl text-gray-200">{caseStudy.subtitle}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-2 h-12 w-12 flex items-center justify-center">
                    <Image
                      src={caseStudy.publisherLogo}
                      alt={caseStudy.publisherName}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{caseStudy.publisherName}</p>
                    <p className="text-sm text-gray-200">{caseStudy.date}</p>
                  </div>
                </div>
                <p className="text-lg max-w-[600px]">{caseStudy.summary}</p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">The Solution</h2>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Results</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="text-2xl font-bold text-[#13A4BF]">{caseStudy.results.engagement}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-2xl font-bold text-[#2C238B]">{caseStudy.results.revenue}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Retention</p>
                      <p className="text-2xl font-bold text-[#13A4BF]">{caseStudy.results.retention}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Ad Complaints</p>
                      <p className="text-2xl font-bold text-[#2C238B]">{caseStudy.results.adComplaints}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${caseStudy.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Testimonial</h3>
                  <div className="space-y-4">
                    <p className="italic">"{caseStudy.testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <Image 
                          src="/placeholder-user.jpg" 
                          alt={caseStudy.testimonial.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{caseStudy.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{caseStudy.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Featured Advertisers</h3>
                  <ul className="space-y-2">
                    {caseStudy.advertisers.map((advertiser, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        {advertiser}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Key Metrics</h3>
                  <ul className="space-y-3">
                    {caseStudy.metrics.map((metric, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="font-medium">{metric.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/#contact">Start Your Success Story</Link>
                  </Button>
                </div>
              </div>
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