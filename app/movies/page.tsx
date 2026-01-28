import Image from "next/image"
import Link from "next/link"

const categories = ["Home", "Favorites", "Series", "Movies", "Sports", "Kids", "Settings"]

const featuredShow = {
  title: "1883",
  logo: "/images/shows/1883-logo.png",
  genres: ["Action", "Crime", "Drama"],
  rating: "TV-MA",
  time: "7:00pm – 8:00pm",
  aired: "First aired: 5/20/04",
  episode:
    "S1 E3 'River' James butts heads with Shea and Thomas about an important decision. Tensions rise in camp when an accusation is made.",
  network: "Paramount+",
  now: "On Now: 7:00pm – 8:00pm",
}

const continueWatching = [
  { id: "1883", title: "1883", image: "/images/shows/1883.jpg", logo: "/images/shows/1883-logo.png" },
  {
    id: "yellowstone",
    title: "Yellowstone",
    image: "/images/shows/yellowstone.jpg",
    logo: "/images/shows/yellowstone-logo.png",
  },
  { id: "walker", title: "Walker", image: "/images/shows/walker.jpg", logo: "/images/shows/walker-logo.png" },
  {
    id: "blacklist",
    title: "The Blacklist",
    image: "/images/shows/blacklist.jpg",
    logo: "/images/shows/blacklist-logo.png",
  },
  {
    id: "oakisland",
    title: "Oak Island",
    image: "/images/shows/oakisland.jpg",
    logo: "/images/shows/oakisland-logo.png",
  },
]

export default function Movies() {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image src="/images/shows/1883-bg.jpg" alt="Background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Image src="/images/avatar.png" alt="Profile" width={36} height={36} className="rounded-full mr-3" />
              <span className="text-lg">Sam</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {categories.map((category, index) => (
                <Link
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className={`py-2 relative ${index === 0 ? "selector" : ""}`}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image
                src={featuredShow.logo || "/placeholder.svg"}
                alt={featuredShow.title}
                width={200}
                height={100}
                className="mb-4 object-contain"
              />

              <div className="flex items-center text-sm text-gray-400 mb-3">
                <span>{featuredShow.genres.join(", ")}</span>
                <span className="mx-2">•</span>
                <span className="px-1 border border-gray-500 text-xs">{featuredShow.rating}</span>
                <span className="mx-2">•</span>
                <span>{featuredShow.time}</span>
                <span className="mx-2">•</span>
                <span>{featuredShow.aired}</span>
              </div>

              <p className="text-lg mb-4 max-w-xl">{featuredShow.episode}</p>

              <div className="text-sm text-gray-400 mb-8">
                <span>{featuredShow.now}</span>
                <span className="ml-2">{featuredShow.network}</span>
              </div>

              <h2 className="text-xl font-medium mb-4">Continue Watching</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {continueWatching.map((show, index) => (
              <Link href="#" key={show.id} className="group">
                <div className={`glass-card overflow-hidden rounded-lg relative ${index === 0 ? "glow-border" : ""}`}>
                  <Image
                    src={show.image || "/placeholder.svg"}
                    alt={show.title}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <Image
                      src={show.logo || "/placeholder.svg"}
                      alt={show.title}
                      width={100}
                      height={50}
                      className="w-full h-auto object-contain max-h-10"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
