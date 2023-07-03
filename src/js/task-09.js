function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector("body");
const btnCgangeColor = document.querySelector(".change-color");
const textChange = document.querySelector(".color");

btnCgangeColor.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor() {
  const newColor = getRandomHexColor();

  changeColor.style.backgroundColor = newColor;

  textChange.textContent = newColor;
}
