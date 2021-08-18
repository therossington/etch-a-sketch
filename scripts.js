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
      })}
}

clearButton.addEventListener('click', () => {
    container.innerHTML = '';
    size = Number(window.prompt('Enter the grid size'));
    createGrid();
})

window.onload = () => {
    createGrid();
    size;
};