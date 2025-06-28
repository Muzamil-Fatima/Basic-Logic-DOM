const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.classList.remove("active");
      }
    });

    content.classList.toggle("active");
  });
});