// Title
const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', changeTitle = () => {
    h1.classList.add('changeTitle');
})
h1.addEventListener('mouseleave', changeTitle = () => {
    h1.classList.remove('changeTitle');
})
// Select color
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexBtn = document.querySelector('h3');

const time = 100;

function getHex() {
    let hexCol = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];
    }
    hexBtn.style.color = hexCol;
}
setInterval(getHex, time);

// Game logic

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHnd: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    game.playerHnd = this.dataset.option
    console.log(game.playerHnd);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px #665C84';
}

function aiChoise() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
    console.log(player, ai)
    if (player === ai) {
        return 'draw'
    } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
        return 'win'
    } else {
        return 'loss'
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "you win!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "green"
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "opponent win!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "red"
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "draw!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "black"
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHnd}"]`).style.boxShadow = "";
    game.playerHnd = "";
}

function startGame() {
    if (!game.playerHnd) return alert("please select");
    game.aiHand = aiChoise()
    const gameResult = checkResult(game.playerHnd, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHnd, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)