const form = document.querySelector(".login-form");
form.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password === "") {
    return alert("всі поля повинні бути заповнені!!!!");
  }
  console.log(`Email: ${email.value}
Password: ${password.value}`);
  event.currentTarget.reset();
}
