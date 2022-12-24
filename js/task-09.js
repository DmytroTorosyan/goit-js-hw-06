function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const colorValue = document.querySelector("span.color");
const bodyBGColor = document.querySelector("body");

changeColorBtn.addEventListener("click", changeBGColor);

function changeBGColor() {
  bodyBGColor.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyBGColor.style.backgroundColor;
}