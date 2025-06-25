//  only work in first button
let button = document.querySelector('.btn')
button.addEventListener("click", handelClick, true)

function handelClick(){
    button.innerText = "Button Clicked!"
    console.log("Button Clicked!")
}

//  now work in all button
let buttons = document.querySelectorAll(".btn");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", nowClick, true);
  function nowClick() {
    buttons.innerText = "Button Clicked!";
    console.log("Button Clicked");
  }
});