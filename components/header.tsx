"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Settings, Mic } from "lucide-react"

export default function Header() {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center mr-8">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">MI</span>
            <span className="text-gray-400 ml-2">IPTV</span>
          </div>
        </Link>

        <div className={`relative flex items-center transition-all duration-300 ${searchActive ? "w-64" : "w-10"}`}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-md transition-all duration-300 ${searchActive ? "bg-gray-700/70" : ""}`}
          >
            <button
              onClick={() => setSearchActive(!searchActive)}
              className="flex items-center justify-center w-full h-full"
            >
              <Search size={18} className="text-gray-400" />
            </button>
          </div>

          {searchActive && (
            <div className="absolute left-0 flex items-center w-64 h-10 pl-10 rounded-full bg-gray-700/70 backdrop-blur-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-400"
                autoFocus
              />
              <button className="absolute right-2 w-8 h-8 flex items-center justify-center">
                <Mic size={16} className="text-gray-400" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="text-xl mr-1 text-gray-300">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className="flex items-center ml-2">
            <Image src="/images/weather-icon.png" alt="Weather" width={20} height={20} />
            <span className="ml-1 text-gray-300">24°</span>
          </div>
        </div>

        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 backdrop-blur-md hover:bg-gray-700/70 transition-all duration-300">
          <Settings size={18} className="text-gray-400" />
        </button>

        <Link
          href="/profile"
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-white/30 transition-all duration-300"
        >
          <Image src="/images/avatar.png" alt="Profile" width={40} height={40} />
        </Link>
      </div>
    </header>
  )
}
