document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date()

    // Format time as HH:MM
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const timeString = `${hours}:${minutes}`

    // Format date as Day, Month Date
    const options = { weekday: "long", month: "short", day: "numeric" }
    const dateString = now.toLocaleDateString("en-US", options)

    // Update all time elements
    const timeElements = document.querySelectorAll("#current-time, #time-large")
    timeElements.forEach((el) => {
      if (el) el.textContent = timeString
    })

    // Update date element
    const dateElement = document.getElementById("current-date")
    if (dateElement) dateElement.textContent = dateString
  }

  // Update time immediately and then every minute
  updateTime()
  setInterval(updateTime, 60000)
})
