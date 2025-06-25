const tabs = document.querySelectorAll(".box");
const paragraphs = document.querySelectorAll(".para");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    paragraphs.forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    paragraphs[index].classList.add("active");
  });
});
