const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.gameStatus');
const restartBtn = document.querySelector('.restartBtn');

// Check winner

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const Gameboard = (function gameboard() {
    let board = ['', '', '',
                   '', '', '',
                   '', '', '']
    return {board};
})();

console.log(Gameboard.board)

// Factory to create players

function createPlayer (name, mark) {
    const playerName = name;
    const playerMark = mark;
    return{playerName, playerMark}
};

let playerOne = createPlayer('João', 'x');
let playerTwo = createPlayer('Maria', 'o');

let currentPlayerMark = playerOne.playerMark;
let currentPlayerName = playerOne.playerName;
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartBtn.addEventListener('click', restartGame)
    statusText.textContent = `${currentPlayerName}'s turn`
    running = true;
};

function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex');

    if(Gameboard.board[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    changePlayer();
    checkWinner()
}

function restartGame() {

}

function updateCell(cell, index) {
    Gameboard.board[index] = currentPlayerMark;
    cell.textContent = currentPlayerMark;
    console.log(Gameboard.board)
}

function changePlayer() {
    currentPlayerMark = (currentPlayerMark == playerOne.playerMark) ? playerTwo.playerMark : playerOne.playerMark;
    currentPlayerName = (currentPlayerName == playerOne.playerName) ? playerTwo.playerName : playerOne.playerName;
    statusText.textContent = `${currentPlayerName}'s turn`;

}

function checkWinner() {

}


