import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import { ChevronLeft, Star, Search } from "lucide-react"

const countries = [
  { id: "it", name: "Italy", flag: "/images/flags/italy.png" },
  { id: "ua", name: "Ukraine", flag: "/images/flags/ukraine.png", active: true },
  { id: "br", name: "Brazil", flag: "/images/flags/brazil.png" },
  { id: "de", name: "Germany", flag: "/images/flags/germany.png" },
  { id: "us", name: "United States", flag: "/images/flags/usa.png", channels: "447 Channels" },
  { id: "fr", name: "France", flag: "/images/flags/france.png" },
  { id: "pt", name: "Portugal", flag: "/images/flags/portugal.png" },
  { id: "za", name: "South Africa", flag: "/images/flags/south-africa.png" },
  { id: "cn", name: "China", flag: "/images/flags/china.png" },
]

const channels = [
  {
    id: "natgeo",
    name: "Nat Geo Wild HD",
    logo: "/images/channels/natgeo.png",
    views: "8.2M Views",
    badges: ["HD", "EPG"],
    favorite: true,
  },
  {
    id: "disney",
    name: "Disney Channel",
    logo: "/images/channels/disney.png",
    views: "850K Views",
    badges: ["4K", "EPG", "$"],
  },
  {
    id: "hbo",
    name: "HBO Family",
    logo: "/images/channels/hbo.png",
    views: "1.7M Views",
  },
]

export default function LiveTV() {
  return (
    <main className="min-h-screen">
      <div className="animated-bg"></div>

      <Header />

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-md flex items-center justify-center mr-4 hover:bg-gray-700/70 transition-all duration-300"
          >
            <ChevronLeft size={20} className="text-gray-300" />
          </Link>

          <h1 className="text-2xl font-bold">Live TV's</h1>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="glass-card p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Countries</h3>
                <button className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/70 transition-all duration-300">
                  <Search size={16} className="text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                {countries.map((country) => (
                  <div
                    key={country.id}
                    className={`flex items-center p-2 rounded-lg transition-all duration-300 ${country.active ? "bg-white/10 selector" : "hover:bg-white/5"}`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={country.flag || "/placeholder.svg"}
                        alt={country.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{country.name}</div>
                      {country.channels && <div className="text-xs text-gray-400">{country.channels}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-md flex items-center justify-center mx-auto hover:bg-gray-700/70 transition-all duration-300">
                <Tv size={20} className="text-gray-300" />
              </button>

              <button className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-md flex items-center justify-center mx-auto hover:bg-gray-700/70 transition-all duration-300">
                <Star size={20} className="text-gray-300" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="grid grid-cols-1 gap-6">
              {channels.map((channel) => (
                <Link href={channel.id === "natgeo" ? "/player" : "#"} key={channel.id} className="group">
                  <div className="glass-card p-4 flex items-center hover:glow-border">
                    <div className="w-24 h-24 bg-gray-800/70 rounded-lg flex items-center justify-center mr-6 overflow-hidden">
                      <Image
                        src={channel.logo || "/placeholder.svg"}
                        alt={channel.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:glow-text">{channel.name}</h3>
                      <p className="text-gray-400">{channel.views}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {channel.badges?.map((badge) => (
                        <div key={badge} className="px-2 py-1 bg-gray-800/70 rounded text-xs font-medium">
                          {badge}
                        </div>
                      ))}

                      {channel.favorite && (
                        <button className="w-8 h-8 flex items-center justify-center text-orange-400">
                          <Star size={18} fill="currentColor" />
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-6 glass-card relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image src="/images/leopard-bg.jpg" alt="Now Playing" fill className="object-cover opacity-30" />
              </div>

              <div className="relative z-10">
                <div className="text-sm text-gray-300 mb-2">Now Playing...</div>

                <h2 className="text-2xl font-bold mb-4 glow-text">Animals and Nature</h2>

                <p className="text-gray-300 max-w-2xl mb-6">
                  Big cat expert Boone Smith follows a strange trail of carnage and death to track cats in Patagonia. He
                  documents their behavior - from kittens to killers.
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-gray-300">01:52:37</div>
                  <div className="text-gray-300">02:10:46</div>
                </div>

                <div className="w-full h-1 bg-gray-800/70 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-3/4 progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Tv(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}
