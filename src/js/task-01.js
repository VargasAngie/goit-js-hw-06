// Número de categorías
const category = document.querySelector("#categories");
console.log(`Number of categories: ${category.childElementCount}`);

// Título y número de artículos

for (let i = 0; i < category.children.length; i += 1) {
  const eachCategory = category.children[i];
  const categoryName = eachCategory.firstElementChild;
  const categoryList = eachCategory.lastElementChild;
  const categoryNumber = categoryList.childElementCount;

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryNumber}`);
}
