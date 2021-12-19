createGrid();

const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    for(let i = 0; i < container.length; i++) {
        container[i].style.backgroundColor = 'white';
    }
})

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let newGridElement = document.createElement('div');
            newGridElement.classList.add('divs');
            newGridElement.addEventListener('mouseover', () => {
                newGridElement.style.backgroundColor = getRandomColor();
            })
            container.appendChild(newGridElement);
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }