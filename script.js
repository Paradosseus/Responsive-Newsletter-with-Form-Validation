const form = document.getElementById("email-form");
let errorMessage = document.querySelector(".error-container");
let userEmail = document.getElementById("userEmail");

form.addEventListener("submit", (e) => {
  const userEmailValue = userEmail.value;
  if (!isEmailValid(userEmailValue)) {
    e.preventDefault();
    errorMessage.style.display = "block";
    userEmail.classList.add("invalid");
  }
});

const isEmailValid = (userEmail) => {
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailReg.test(userEmail);
};
