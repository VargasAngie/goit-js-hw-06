let counterValue = 0;
let newValue = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const decrementClick = () => {
  counterValue = counterValue - 1;
  newValue.innerHTML = `<span id="value">${counterValue}</span >`;
};
decrementButton.addEventListener("click", decrementClick);

const incrementClick = () => {
  counterValue = counterValue + 1;
  newValue.innerHTML = `<span id="value">${counterValue}</span >`;
};
incrementButton.addEventListener("click", incrementClick);
