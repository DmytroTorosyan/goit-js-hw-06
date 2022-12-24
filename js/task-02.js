const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredient = ingredients.map((element) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = element;
  listItemRef.classList.add("item");

  return listItemRef;
});

const listRef = document.querySelector("#ingredients");
listRef.append(...ingredient);
console.log(listRef);