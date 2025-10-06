document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#photo-gallery .filter-buttons button");
  const items = document.querySelectorAll("#photo-gallery .gallery-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove “active” from all
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      items.forEach(item => {
        if (filter === "all") {
          item.style.display = ""; 
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});
