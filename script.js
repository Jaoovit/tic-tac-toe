const Gameboard = (function gameboard() {
    const board = ['', '', '',
                   '', '', '',
                   '', '', '']
    return {board};
    
})();

console.log

// Factory to create players

function createPlayer (name, mark) {
    const playerName = name;
    const playerMark = mark;
    return{playerName, playerMark}
}

const playerOne = createPlayer('', 'x')
const playerTwo = createPlayer('', 'o')

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
]


