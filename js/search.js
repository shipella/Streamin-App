document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".search-button")
  const searchInput = document.querySelector(".search-input")
  const searchInputField = searchInput ? searchInput.querySelector("input") : null

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      searchInput.classList.toggle("active")
      if (searchInput.classList.contains("active") && searchInputField) {
        searchInputField.focus()
      }
    })

    // Close search when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container") && searchInput.classList.contains("active")) {
        searchInput.classList.remove("active")
      }
    })
  }
})
