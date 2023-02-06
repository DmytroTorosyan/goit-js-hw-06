const refs = {
  form: document.querySelector(".login-form"),
};

function onSendForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email !== "" && password !== "") {
    const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert("Все поля должны быть заполнены");
  }
}

refs.form.addEventListener("submit", onSendForm);
