const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = (quantity) => {
    let markup = "";
    for (let i = 0; i < quantity; i++) {
        const block = document.createElement("div");
        block.className = "item";
        block.innerText = i + 1;

        markup += block.outerHTML;
    }
    return markup;
};

quantitySelector.addEventListener("change", (e) => {
    const quantity = e.target.value;
    const markup = createMarkup(quantity);

    blocksContainer.innerHTML = markup;
});

  const colorTheBlock = (block, color) => {
   block.style.backgroundColor = color;
 };


colorSelector.addEventListener("change", e => {
    const color = e.target.value;
    const items = blocksContainer.querySelectorAll(".item");

    for (let i = 0; i < items.lenght; i++) {
        colorTheBlock(items[0], color);
    }
    
});