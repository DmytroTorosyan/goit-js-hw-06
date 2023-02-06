const itemList = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemList.length}`);
itemList.forEach((item) => {
  const sublist = item.querySelectorAll("ul li");
  const title = item.querySelector("h2");
  console.log("");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${sublist.length}`);
});






