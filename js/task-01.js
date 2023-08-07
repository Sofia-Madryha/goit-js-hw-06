const amountOfCategories = document.querySelectorAll("#categories > li").length;
const items = document.querySelectorAll(".item");



console.log(`Numbers of categories: ${amountOfCategories}`);

items.forEach((item)=>{
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})