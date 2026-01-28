document.addEventListener("DOMContentLoaded", () => {
  const countryItems = document.querySelectorAll(".country-item")

  // Add click event to country items
  countryItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      countryItems.forEach((i) => i.classList.remove("active"))

      // Add active class to clicked item
      item.classList.add("active")
    })
  })
})
