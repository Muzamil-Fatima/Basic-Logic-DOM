const input = document.querySelectorAll(".password");
const show = document.querySelectorAll(".pass-show");
const passwords = document.querySelectorAll(".pass");
const confirmPasswords = document.querySelectorAll(".confirm-pass");

// show hidden password
show.forEach((shows, index) => {
  shows.addEventListener("click", () => {
    const currentInput = input[index];
    if (currentInput.type === "password") {
      currentInput.type = "text";
    } else {
      currentInput.type = "password";
    }
  });
});

//  password match 
confirmPasswords.forEach((confirmPass, index) => {
  const passwordInput = passwords[index];

  let errMess = document.createElement("span");
  errMess.style.color = "red";
  confirmPass.parentNode.appendChild(errMess);

  confirmPass.addEventListener("blur", () => {
    if (confirmPass.value !== passwordInput.value) {
      errMess.textContent = "❌ Passwords do not match";
    } else {
      errMess.textContent = "";
    }
  });
});

