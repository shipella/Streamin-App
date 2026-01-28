"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Pause, SkipBack, SkipForward, ChevronDown, Star, Settings, Layers } from "lucide-react"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState("00:42:27")
  const [showControls, setShowControls] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showControls) setShowControls(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [showControls])

  const handleMouseMove = () => {
    setShowControls(true)
  }

  return (
    <main className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/leopard-full.jpg" alt="Video" fill className="object-cover" priority />
      </div>

      {/* Overlay for Controls */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}
      ></div>

      {/* Top Bar */}
      <div
        className={`absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center">
          <Image
            src="/images/channels/natgeo.png"
            alt="Nat Geo Wild"
            width={60}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="flex items-center">
          <div className="text-xl mr-2">12:51</div>
          <div className="flex items-center ml-2">
            <Image src="/images/weather-icon.png" alt="Weather" width={20} height={20} />
            <span className="ml-1">24°</span>
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center space-x-8">
          <button className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <SkipBack size={20} />
          </button>

          <button
            className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>

          <button className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <SkipForward size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 z-20 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="live-badge px-2 py-1 text-xs font-medium rounded mr-3">Live</div>
            <h2 className="text-2xl font-bold">Animals and Nature</h2>
          </div>
          <div className="text-sm text-gray-300">Nat Geo Wild HD</div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div>{currentTime}</div>
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <Layers size={18} />
            </button>

            <button
              className={`w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 ${isFavorite ? "text-orange-400" : ""}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Star size={18} fill={isFavorite ? "currentColor" : "none"} />
            </button>

            <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <Settings size={18} />
            </button>
          </div>
        </div>

        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full w-1/3 progress-bar"></div>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/live-tv">
            <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <ChevronDown size={20} />
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
