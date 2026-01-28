import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import "./globals.css"
import { Inter } from "next/font/google"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MI IPTV - Modern Streaming Platform",
  description: "A modern streaming platform with glassmorphism and glow effects",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden`}>
        <div className="min-h-screen relative">
          <div className="absolute inset-0 bg-[url('/images/bg-texture.png')] bg-cover bg-center opacity-20 z-0"></div>
          <div className="relative z-10">{children}</div>
          <CustomCursor />
        </div>
      </body>
    </html>
  )
}
