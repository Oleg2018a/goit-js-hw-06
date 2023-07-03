const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onChangeValue);

function onChangeValue() {
  textOutput.textContent =
    textInput.value === "" ? "Anonymous" : textInput.value;
}
