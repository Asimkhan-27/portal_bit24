// Expand/Collapse for sections
document.querySelectorAll(".section-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");

    // Toggle arrow symbol
    const arrow = header.querySelector(".arrow");
    if (arrow) {
      arrow.textContent = content.classList.contains("active") ? "▼" : "▶";
    }
  });
});
