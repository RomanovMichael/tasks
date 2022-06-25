const list = document.querySelector('#list');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const computedStyles = getComputedStyle(list);

rightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);
    if (currentRight < 500) {

        list.style.right = `${currentRight + 100}px`;
    }
});


leftBtn.addEventListener('click', (e) => {
    e.preventDefault();
   let currentRight = parseInt(computedStyles.right);

   if (currentRight > 0) {
        list.style.right = `${currentRight - 100}px`;
    }
});