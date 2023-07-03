const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listArr = ingredients.map((ing) => {
  const listItemsArr = document.createElement("li");
  listItemsArr.textContent = ing;
  listItemsArr.classList.add("item");
  return listItemsArr;
});
const elementsList = document.querySelector("#ingredients");
elementsList.append(...listArr);
console.log(listArr);
