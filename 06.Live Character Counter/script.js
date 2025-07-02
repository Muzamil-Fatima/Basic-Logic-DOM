const btnAdd = document.querySelector("#increment");
const btnSub = document.querySelector("#decrement");
const numberPosition = document.querySelector(".number");

let count = 1;

btnAdd.addEventListener("click", () => {
  count++;
  numberPosition.textContent = count;
});

btnSub.addEventListener("click", () => {
  if (count > 0) {
    count--;
    numberPosition.textContent = count;
  }
});