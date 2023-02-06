const inputRef = document.querySelector("#validation-input");

function onCheckNumbersOfInput(event) {
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}

inputRef.addEventListener("blur", onCheckNumbersOfInput);