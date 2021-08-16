const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
    const gridItem = document.createElement('div'+i);
    container.appendChild(gridItem);
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = 'blue';
    })
};


