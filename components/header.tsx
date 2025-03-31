"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  
  // Add smooth scrolling for hash links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute("href")
      
      // Handle # links
      if (href?.startsWith("/#")) {
        e.preventDefault()
        const targetId = href.substring(2) // Remove "/#" to get the ID
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
      // Handle logo click (when already on homepage)
      else if (href === "/" && pathname === "/") {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    }

    // Select all anchor links including the logo
    const anchorLinks = document.querySelectorAll('a[href^="/#"], a[href="/"]')
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick)
      })
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline hover:no-underline">
          <Image src="/images/logo.png" alt="Haxelo" width={150} height={40} priority />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link 
            href="/#publishers" 
            className={`text-black font-medium no-underline hover:no-underline hover:text-primary ${pathname === '/' ? 'hover:text-primary' : ''}`}
          >
            For Publishers
          </Link>
          <Link 
            href="/#advertisers" 
            className={`text-black font-medium no-underline hover:no-underline hover:text-primary ${pathname === '/' ? 'hover:text-primary' : ''}`}
          >
            For Advertisers
          </Link>
          <Link 
            href="/#about" 
            className={`text-black font-medium no-underline hover:no-underline hover:text-primary ${pathname === '/#about' ? 'text-primary' : ''}`}
          >
            About Us
          </Link>
          {/* Case Studies link - uncomment to restore 
          <Link 
            href="/case-studies" 
            className={`text-black font-medium no-underline hover:no-underline hover:text-primary ${pathname.includes('/case-studies') ? 'text-primary' : ''}`}
          >
            Case Studies
          </Link>
          */}
          <Link 
            href="/#contact" 
            className={`text-black font-medium no-underline hover:no-underline hover:text-primary ${pathname === '/#contact' ? 'text-primary' : ''}`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:flex no-underline hover:no-underline">
            <Link href="https://platform.haxelo.com/" className="no-underline hover:no-underline">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="https://calendar.app.google/1fwhCffwjFM858ia9" className="no-underline hover:no-underline">Request Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}