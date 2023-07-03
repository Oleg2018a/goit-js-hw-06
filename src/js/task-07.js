const inputValueSize = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

inputValueSize.addEventListener("input", onChangeSize);
console.dir(inputValueSize);
function onChangeSize() {
  textValue.style.fontSize = inputValueSize.value + "px";
}
