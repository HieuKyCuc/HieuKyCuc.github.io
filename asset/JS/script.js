const boxLog = document.querySelector(".boxlog");
const logInLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  boxLog.classList.add("active");
});

logInLink.addEventListener("click", () => {
  boxLog.classList.remove("active");
});
