document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor")
  const cursorDot = document.querySelector(".custom-cursor-dot")

  // Initial state - hidden
  cursor.style.opacity = "0"
  cursorDot.style.opacity = "0"

  // Show cursor when mouse enters the window
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1"
    cursorDot.style.opacity = "1"
  })

  // Hide cursor when mouse leaves the window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0"
    cursorDot.style.opacity = "0"
  })

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
    cursorDot.style.left = e.clientX + "px"
    cursorDot.style.top = e.clientY + "px"

    // Check if hovering over clickable elements
    const target = e.target
    const isClickable =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.classList.contains("clickable") ||
      target.classList.contains("card-link") ||
      target.classList.contains("carousel-card")

    if (isClickable) {
      cursor.classList.add("hover")
      cursorDot.classList.add("hover")
    } else {
      cursor.classList.remove("hover")
      cursorDot.classList.remove("hover")
    }
  })

  // Add active state on mouse down
  document.addEventListener("mousedown", () => {
    cursor.classList.add("active")
    cursorDot.classList.add("active")
  })

  // Remove active state on mouse up
  document.addEventListener("mouseup", () => {
    cursor.classList.remove("active")
    cursorDot.classList.remove("active")
  })
})
