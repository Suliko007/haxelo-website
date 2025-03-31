"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  interval?: number
}

export function ImageCarousel({
  images,
  interval = 5000,
}: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative w-full h-full group">
      <div className="overflow-hidden h-full rounded-lg">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, index) => (
            <div key={src} className="relative h-full" style={{ width: `${100 / images.length}%` }}>
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}