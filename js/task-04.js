const counter = document.getElementById("counter");
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueElement = counter.querySelector("#value");
let counterValue = 0;
function updateCounter() {
  valueElement.textContent = counterValue;
}
decrementButton.addEventListener("click", function () {
  counterValue--;
  updateCounter();
});
incrementButton.addEventListener("click", function () {
  counterValue++;
  updateCounter();
});
updateCounter();

// const counter = document.querySelector("#counter");
// const decrementButton = document.querySelector('[data-action="decrement"]');
// const incrementButton = document.querySelector('[data-action="increment"]');
// const elementValue = document.querySelector("#value");
// let counterValue = 0;
// console.log(counterValue);

// decrementButton.addEventListener("click", onDecrementClick);
// incrementButton.addEventListener("click", onIncrementClick);

// const updateCounter = () => {
//   elementValue.textContent = counterValue;
// };

// const onIncrementClick = () => {
//   counterValue++;
//   updateCounter();
// };

// const onDecrementClick = () => {
//   counterValue--;
//   updateCounter();
// };
// updateCounter();
