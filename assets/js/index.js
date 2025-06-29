function sendButton(event) {
  event.preventDefault();

  const email = document.querySelector("#form-email");
  const errorMessage = email.parentElement.querySelector(".error-message");

  let hasError = email.value.trim() === "";

  if (email.value.trim() !== "") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    hasError = !emailPattern.test(email.value.trim());
  }

  if (hasError) {
    email.style.borderColor = "var(--Light-Red)";
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.style.display = "block";

    email.value = "";
    email.placeholder = "email@example.com";
  } else {
    email.style.borderColor = "var(--Pale-Blue)";
    errorMessage.style.display = "none";
  }
}

document.querySelector("#form-email").addEventListener("input", function() {
  const email = this;
  const errorMessage = email.parentElement.querySelector(".error-message");

  email.style.borderColor = "var(--Pale-Blue)";
  errorMessage.style.display = "none";
})