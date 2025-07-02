console.log(document.getElementsByTagName("h4"));

const blue = document.getElementById("blue");
console.log(blue);

const h4 = document.querySelector("h4");
h4.innerHTML = "Text Changed";
h4.innerHTML = "<em>Muzamil Fatima </em>";
console.log(h4.innerText);