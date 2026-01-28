"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        setLinkHovered(true)
      } else {
        setLinkHovered(false)
      }
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${hidden ? "opacity-0" : "opacity-100"}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div
        className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out
                   ${clicked ? "w-5 h-5 bg-white/30" : "w-6 h-6 bg-transparent border border-white/50"}
                   ${linkHovered ? "w-10 h-10 bg-white/10 border-white/30 backdrop-blur-sm" : ""}`}
      />
      <div
        className={`absolute rounded-full bg-white -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out
                   ${clicked ? "w-2 h-2" : "w-1 h-1"}
                   ${linkHovered ? "w-1 h-1 opacity-0" : "opacity-100"}`}
      />
      {linkHovered && (
        <div className="absolute w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
      )}
    </div>
  )
}
