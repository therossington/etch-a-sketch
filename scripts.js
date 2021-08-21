const container = document.querySelector('.container');
const clearButton = document.querySelector('#clear-button');


const setColor = 'blue';
let size = 16;

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

function createGrid () {
    for (let i = 0; i < size * size; i++) {
      const gridItem = document.createElement('div'+i);
      container.appendChild(gridItem);
      gridItem.addEventListener('mouseenter', () => {
          gridItem.style.backgroundColor = setColor;
      })
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;}
}

clearButton.addEventListener('click', () => {
    container.innerHTML = '';
    getSize = Number(window.prompt('Enter the grid size'));
    function sizeCheck () {
        if (getSize > 100) {
        return alert('Please enter a number less than 100');
        } else return getSize;
    };
    size = sizeCheck();
    createGrid();
})

window.onload = () => {
    createGrid();
};