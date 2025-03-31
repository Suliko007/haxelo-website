"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageCarouselHeroBannerProps {
  images: string[]
  interval?: number
}

export function ImageCarouselHeroBanner({
  images,
  interval = 5000,
}: ImageCarouselHeroBannerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Function to go to the next image
    const goToNextImage = () => {
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // Match this to your CSS transition time
    }

    // Set up a timer for automatic sliding
    const timer = setInterval(goToNextImage, interval)

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover rounded-lg"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}