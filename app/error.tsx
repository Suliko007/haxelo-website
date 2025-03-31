"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 text-center py-16">
          <h1 className="text-4xl font-bold">Something went wrong</h1>
          <p className="max-w-[600px] text-gray-500">
            We encountered an error while processing your request. Please try again or return to the homepage.
          </p>
          <div className="flex gap-4">
            <Button onClick={reset} variant="outline">
              Try Again
            </Button>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}