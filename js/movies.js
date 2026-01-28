document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel")
  const cards = document.querySelectorAll(".carousel-card")
  const prevButton = document.querySelector(".carousel-arrow.prev")
  const nextButton = document.querySelector(".carousel-arrow.next")

  let activeIndex = 0
  const totalCards = cards.length

  // Initialize carousel
  function initCarousel() {
    updateCarousel()
  }

  // Update carousel positions
  function updateCarousel() {
    cards.forEach((card, index) => {
      // Calculate position relative to active card
      const offset = index - activeIndex

      // Remove all classes first
      card.classList.remove("active")

      if (index === activeIndex) {
        // Active card
        card.style.transform = `translateX(-50%) scale(1.2)`
        card.style.zIndex = "10"
        card.style.opacity = "1"
        card.classList.add("active")
      } else {
        // Position cards to left or right of active card
        const xPosition = offset * 60 // percentage of card width
        const scale = 1 - Math.min(Math.abs(offset) * 0.15, 0.3)
        const zIndex = 10 - Math.abs(offset)
        const opacity = 1 - Math.min(Math.abs(offset) * 0.2, 0.6)

        card.style.transform = `translateX(calc(-50% + ${xPosition}%)) scale(${scale})`
        card.style.zIndex = zIndex
        card.style.opacity = opacity
      }
    })
  }

  // Navigate to previous card
  function goToPrev() {
    activeIndex = (activeIndex - 1 + totalCards) % totalCards
    updateCarousel()
  }

  // Navigate to next card
  function goToNext() {
    activeIndex = (activeIndex + 1) % totalCards
    updateCarousel()
  }

  // Add event listeners
  if (prevButton) {
    prevButton.addEventListener("click", goToPrev)
  }

  if (nextButton) {
    nextButton.addEventListener("click", goToNext)
  }

  // Allow clicking on cards to make them active
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      activeIndex = index
      updateCarousel()
    })
  })

  // Initialize the carousel
  initCarousel()

  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goToPrev()
    } else if (e.key === "ArrowRight") {
      goToNext()
    }
  })
})
