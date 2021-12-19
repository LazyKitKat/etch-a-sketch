const container = document.querySelector('.container');
const resetBtn = document.querySelector('#resetBtn');
const elements = document.getElementsByClassName('divs');

createGrid = () => {
    for (let i = 0; i < (16 * 16); i++) {
        const div = document.createElement('div');
        div.classList.add('divs');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
        container.appendChild(div); 
    }
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  resetBtn.addEventListener('click', function () {
    let children = container.children;
    for (let i = 0; i < (16*16); i++) {
        children[i].style.backgroundColor = 'white';
    }
})

createGrid();
console.log(container);