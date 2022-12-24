const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const Email = email.value;
  const Password = password.value;

  const formData = {
    Email,
    Password,
  };

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    console.log(formData);
  }

  event.currentTarget.reset();
}
