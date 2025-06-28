const email = document.querySelector("#form-email");

const fields = [
  {element: email, placeholder: "Your email address...", message: "Please provide a valid email address"}
];

document.querySelector("#form-email").addEventListener("click", function(event) {
  event.preventDefault();

  fields.forEach(field => {
    const input = field.element;
    // const errorMessage = input.nextElementSibling;
    const errorMessage = input.parentElement.querySelector(".error-message");

    let hasError = input.value.trim() === "";

    if (input === email && input.value.trim() !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      hasError = !emailPattern.test(input.value.trim());
    }

    if (hasError) {
      if (input === email && input.value.trim() !== "") {
        input.placeholder = "email@example/com";
      } else {
        input.placeholder = "";
      }

      input.classList.add("error");
      input.dataset.placeholder = input.placeholder;
      input.value = "";
      input.style.borderColor = "var(--Light-Red)";

      if (errorMessage) {
        errorMessage.textContent = field.message;
        errorMessage.style.display = "block";
      }
    } else {
      input.classList.remove("error");
      input.style.borderColor = "var(--Pale-Blue)";
      input.placeholder = input.dataset.placeholder || "";

      if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
      }
    }
  });
});

fields.forEach(field => {
  field.element.addEventListener("input", () => {
    const input = field.element;
    const errorMessage = input.parentElement.querySelector(".error-message");

    input.classList.remove("error");
    input.placeholder = field.placeholder;
    input.style.borderColor = "var(--Pale-Blue)";

    if(errorMessage) {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
  });
});