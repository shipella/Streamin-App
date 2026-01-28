document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container")
  const playPauseButton = document.querySelector(".play-pause")
  const playIcon = document.querySelector(".play-icon")
  const pauseIcon = document.querySelector(".pause-icon")
  const favoriteButton = document.querySelector(".favorite-button")

  let isPlaying = true
  let controlsTimeout

  // Toggle play/pause
  if (playPauseButton) {
    playPauseButton.addEventListener("click", () => {
      isPlaying = !isPlaying
      updatePlayPauseState()
    })
  }

  // Toggle favorite
  if (favoriteButton) {
    favoriteButton.addEventListener("click", () => {
      favoriteButton.classList.toggle("active")
    })
  }

  function updatePlayPauseState() {
    if (isPlaying) {
      pauseIcon.classList.remove("hidden")
      playIcon.classList.add("hidden")
    } else {
      pauseIcon.classList.add("hidden")
      playIcon.classList.remove("hidden")
    }
  }

  // Hide controls after inactivity
  function hideControls() {
    if (videoContainer) {
      videoContainer.classList.add("controls-hidden")
    }
  }

  function showControls() {
    if (videoContainer) {
      videoContainer.classList.remove("controls-hidden")

      // Reset the timeout
      clearTimeout(controlsTimeout)
      controlsTimeout = setTimeout(hideControls, 5000)
    }
  }

  // Show controls on mouse move
  document.addEventListener("mousemove", () => {
    showControls()
  })

  // Initial timeout to hide controls
  controlsTimeout = setTimeout(hideControls, 5000)
})
