const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const items = [];

function addList(arr) {

arr.map((elem) => {
  const item = document.createElement("li");
  item.textContent = elem;
  item.classList.add('item')
  items.push(item)
});

list.append(...items)
}

addList(ingredients)