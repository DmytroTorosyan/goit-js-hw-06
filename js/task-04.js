const counterValue = document.querySelector("span#value");
let spanValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onClickDecrement);
incrementBtn.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  spanValue -= 1;
  counterValue.textContent = spanValue;
}

function onClickIncrement() {
  spanValue += 1;
  counterValue.textContent = spanValue;
}