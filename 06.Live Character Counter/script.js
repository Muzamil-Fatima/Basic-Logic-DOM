const btnAdd = document.querySelector("#increment");
const btnSub = document.querySelector("#decrement");
const countDis = document.querySelector(".number");

let count = 1;

btnAdd.addEventListener("click", () => {
  count++;
  countDis.textContent = count;
});

btnSub.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDis.textContent = count;
  }
});
