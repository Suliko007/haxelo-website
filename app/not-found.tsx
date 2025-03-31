import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 text-center py-16">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-medium">Page Not Found</h2>
          <p className="max-w-[600px] text-gray-500">
            Sorry, we couldn't find the page you were looking for.
          </p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}