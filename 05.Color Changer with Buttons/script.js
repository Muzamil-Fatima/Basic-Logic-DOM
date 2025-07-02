const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeBackground(btn.value);
  });
});

function changeBackground(color){
    body.className = "";

    switch(color){
        case "purple":
            body.classList.add("purple")
            break;
        case "red":
            body.classList.add("red")
            break;
        case "teal":
            body.classList.add("teal")
            break;
        case "yellow":
            body.classList.add("yellow")
            break;
        case "green":
            body.classList.add("green")
            break;
        case "blue":
            body.classList.add("blue")
            break;
        default:
            body.classList.add("teal")
    }
}