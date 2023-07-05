const inputValueSize = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

textValue.style.fontSize = inputValueSize.value + "px";

inputValueSize.addEventListener("input", onChangeSize);

function onChangeSize() {
  textValue.style.fontSize = inputValueSize.value + "px";
}
