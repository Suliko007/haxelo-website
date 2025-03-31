"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, CheckCircle, GamepadIcon, Layers, Target, DollarSign, Code, Users, Shield, MousePointerClick } from "lucide-react"
import { useEffect, useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageCarouselHeroBanner } from "@/components/image-carousel-hero-banner"
import { ImageCarousel } from "@/components/image-carousel"
import Header from "@/components/header"

export default function Home() {
  // Component code is too large to include in full, so this is a placeholder.
  // The complete code is in the actual file in your project.
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#2C238B] to-[#13A4BF] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Making in-game ads endemic
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Haxelo enables the only endemic in-game monetization that match your game's art style and vibe,
                  enhancing player experience while maximizing revenue.
                </p>
                <div className="flex flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#2C238B] hover:bg-[#2C238B]/90 text-white no-underline hover:no-underline">
                    <Link href="#publishers">For Publishers</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#13A4BF] hover:bg-[#13A4BF]/90 text-white no-underline hover:no-underline">
                    <Link href="#advertisers">For Advertisers</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[500px] rounded-lg overflow-hidden">
                <ImageCarouselHeroBanner
                  images={["/images/retro.png", "/images/pixel.png", "/images/cyber.png"]}
                  interval={5000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Publishers Section */}
        <section id="publishers" className="w-full py-12 md:py-24 lg:py-32">
          {/* Content for publishers section */}
        </section>

        {/* Advertisers Section */}
        <section id="advertisers" className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          {/* Content for advertisers section */}
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          {/* Content for how it works section */}
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#2C238B] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Haxelo</h2>
                  <p className="text-gray-200 md:text-xl">
                    Haxelo is revolutionizing in-game advertising with our endemic approach that respects both players
                    and game developers.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/10 p-2">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-200">Founded by gaming industry veterans</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/10 p-2">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-200">Partnered with leading game studios</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/10 p-2">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-200">Trusted by global brands for in-game campaigns</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-white text-[#2C238B] hover:bg-gray-100">
                    <Link href="#contact" className="no-underline hover:no-underline">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/images/About-haxelo.png"
                  alt="Haxelo about section illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  style={{ objectFit: 'contain', transform: 'scale(1.5)' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          {/* Content for demo section */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          {/* Content for contact section */}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          {/* Footer content */}
          <div className="flex flex-col gap-6 md:max-w-[400px]">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Haxelo" width={120} height={30} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Haxelo is revolutionizing in-game advertising with our endemic approach that respects both players and
              game developers.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/haxelo" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          {/* Footer legal links */}
          <div className="border-t py-6">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Haxelo. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">
                <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-foreground">
                  Privacy Policy
                </Link>{" "}
                ·{" "}
                <Link href="/terms-and-conditions" className="underline underline-offset-4 hover:text-foreground">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}