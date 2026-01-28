import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import { Tv, Film, Radio } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="animated-bg"></div>

      <Header />

      <div className="container mx-auto px-6 py-8">
        <div className="text-xs text-gray-400 mb-8">
          <span className="mr-2">Last update:</span>
          <span>2 day ago</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live TV Card */}
          <Link href="/live-tv" className="group">
            <div className="glass-card p-6 h-64 relative overflow-hidden group-hover:glow-border">
              <div className="absolute top-2 right-2">
                <div className="text-xs text-gray-400">
                  <span className="mr-1">New</span>
                </div>
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center mb-6">
                    <Tv size={24} className="text-gray-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:glow-text">Live TV's</h3>
                  <p className="text-gray-400">+5000 Channels</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:glow-highlight"></div>
              </div>
            </div>
          </Link>

          {/* Movies Card */}
          <Link href="/movies" className="group">
            <div className="glass-card p-6 h-64 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center mb-6">
                    <Film size={24} className="text-gray-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:glow-text">Movies</h3>
                  <p className="text-gray-400">+1200 Series</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Radios Card */}
          <Link href="/radios" className="group">
            <div className="glass-card p-6 h-64 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-32 h-48 opacity-20 blur-sm">
                <Image src="/images/radio-bg.png" alt="Radio Background" fill className="object-cover" />
              </div>

              <div className="absolute top-2 right-2">
                <div className="flex items-center text-xs text-gray-400">
                  <span className="mr-1">Playing...</span>
                  <span className="text-white">Hit Radio - Maluma Amigos</span>
                </div>
              </div>

              <div className="flex flex-col h-full justify-between relative z-10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center mb-6">
                    <Radio size={24} className="text-gray-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:glow-text">Radios</h3>
                  <p className="text-gray-400">+500 Stations</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-end">
          <div className="text-center">
            <div className="text-6xl font-light mb-2">12:51</div>
            <div className="text-gray-400">Wednesday, Jan 2</div>
          </div>
        </div>
      </div>
    </main>
  )
}
