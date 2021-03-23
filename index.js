const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password_value = document.querySelector("#password").value;
const error_message = document.querySelector(".error");
const submit_form = document.querySelector("#login-form");

submit_form.addEventListener("submit", (e) => {
  e.preventDefault();

  error_message.style.color = "red";

  if (!username.value && !password.value)
    return (error_message.innerHTML =
      "Both fields are empty. Data required to perform login!");

  if (!username.value)
    return (error_message.innerHTML = "Username can't be empty");

  if (!password.value)
    return (error_message.innerHTML = "Password can't be empty");

  error_message.innerHTML = "You're logged in.";

  submit_form.style.border = "2px solid #4caf50";

  error_message.style.color = "#4caf50";
});
