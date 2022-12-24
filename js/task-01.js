const totalEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalEl.length}`);

const elArray = [...totalEl]
    .map(
          el =>`Category: ${el.children[0].textContent}
        Elements: ${el.children[1].children.length}`
).join('\n');
console.log(elArray)






