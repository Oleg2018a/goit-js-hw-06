const inputValue = document.querySelector("#validation-input");
inputValue.addEventListener("blur", validInput);
const inputLengthValue = Number(inputValue.dataset.length);
function validInput() {
  if (inputValue.value.length === inputLengthValue) {
    inputValue.classList.add("valid");
    inputValue.classList.remove("invalid");
  } else {
    inputValue.classList.add("invalid");
    inputValue.classList.remove("valid");
  }
}
console.dir(inputValue);
