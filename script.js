const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.gameStatus');
const restartBtn = document.querySelector('.restartBtn');
const startBtn = document.querySelector('button[type="submit"]')
const playerOneInput = document.querySelector('#player1')
const playerTwoInput = document.querySelector('#player2')
const popwindow = document.querySelector('#popup-window')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

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

// Factory to create players

function createPlayer (name, mark) {
    const playerName = name;
    const playerMark = mark;
    return{playerName, playerMark}
};

let playerOne = createPlayer('', 'x')
let playerTwo = createPlayer('', 'o')


startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    playerOne = createPlayer(playerOneInput.value, 'x')
    playerTwo = createPlayer(playerTwoInput.value, 'o')
    popwindow.style.display = 'none'
    currentPlayerMark = playerOne.playerMark;
    currentPlayerName = playerOne.playerName;
    one.textContent += playerOneInput.value
    two.textContent += playerTwoInput.value
    initializeGame();
})

let running = false;

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
    currentPlayerMark = playerOne.playerMark;
    Gameboard.board = ['', '', '', '', '', '','', '', '']
    statusText.textContent = `${currentPlayerName}'s turn`;
    cells.forEach(cell => cell.textContent = '');
    running = true;
    document.querySelector("#popup-window").style.display = "block";
    one.textContent = 'Player 1: '
    two.textContent = 'Player 2: '

}

function updateCell(cell, index) {
    Gameboard.board[index] = currentPlayerMark;
    cell.textContent = currentPlayerMark;
}

function changePlayer() {
    currentPlayerMark = (currentPlayerMark == playerOne.playerMark) ? playerTwo.playerMark : playerOne.playerMark;
    currentPlayerName = (currentPlayerName == playerOne.playerName) ? playerTwo.playerName : playerOne.playerName;
    statusText.textContent = `${currentPlayerName}'s turn`;

}

function checkWinner() {
    let roundWon = false;

    for(let i = 0; i < winningCombinations.length; i++){
        const condition = winningCombinations[i];
        const cellA = Gameboard.board[condition[0]];
        const cellB = Gameboard.board[condition[1]];
        const cellC = Gameboard.board[condition[2]];

        if(cellA == '' || cellB == '' || cellC == '') {
            continue;
        }
        if(cellA == cellB & cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        changePlayer()
        statusText.textContent = `${currentPlayerName} wins!`;
        running = false;
    }
    else if(!Gameboard.board.includes('')) {
        statusText.textContent = 'Draw';
        running = false;
    }
    

}


