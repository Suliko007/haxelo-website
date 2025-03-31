"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-10">
        <div className="mb-6">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: March 2024</p>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-4">
          {isMounted && (
            <div className="w-full">
              <iframe 
                src="/legal documents/Haxelo Data Privacy Policу_v.1.0.pdf" 
                className="w-full h-[800px] border-0"
                title="Haxelo Privacy Policy"
              />
            </div>
          )}

          {!isMounted && (
            <div className="w-full h-[800px] flex items-center justify-center bg-gray-100 rounded-md">
              <p>Loading document...</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <Button asChild>
            <a 
              href="/legal documents/Haxelo Data Privacy Policу_v.1.0.pdf" 
              download="Haxelo_Privacy_Policy.pdf"
              className="no-underline hover:no-underline"
            >
              Download PDF
            </a>
          </Button>
        </div>
      </main>
      <footer className="border-t py-6 bg-background">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Haxelo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="text-sm text-primary font-medium">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}