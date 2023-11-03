const submitForm = document.getElementById("submitForm");
const submitButton = document.getElementById("emailToNotify");
const emailInput = document.getElementById("inputEmail");
const message = document.querySelector(".ping__notify-content-message");

const submitForChecked = () => {
  const regex =
    /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const emailValue = emailInput.value;

  if (!regex.test(emailValue)) {
    emailInput.classList.remove("submit-success");
    emailInput.classList.add("submit-error");
    message.textContent = "Please provide a valid email address";
  } else {
    emailInput.classList.remove("submit-error");
    emailInput.classList.add("submit-success");
    message.textContent = "Subscribe Success!";
  }
};

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
submitButton.addEventListener("click", submitForChecked);
