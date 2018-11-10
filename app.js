const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', changeTitle = () => {
    h1.classList.add('changeTitle');
})
h1.addEventListener('mouseleave', changeTitle = () => {
    h1.classList.remove('changeTitle');
})
const h3 = document.querySelector('h3');

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexBtn = document.querySelector('h3');

const time = 2000;

function getHex() {
    let hexCol = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];
    }
    hexBtn.style.color = hexCol;
}
setInterval(getHex, time);