const form = document.querySelector(".login-form");
form.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені!!!!");
  }
  const useEemail = email.value;
  const userPassword = password.value;

  const formData = {
    email: useEemail,
    password: userPassword,
  };
  console.log(formData);

  event.currentTarget.reset();
}
