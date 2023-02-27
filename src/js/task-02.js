const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list;
const ingredientsList = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  list = document.createElement("li");
  list.textContent = ingredients[i];
  list.classList.add("item");
  ingredientsList.append(list);
}
