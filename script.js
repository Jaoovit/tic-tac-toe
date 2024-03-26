const Gameboard = (function gameboard() {
    const board = [['', '', ''],['', '', ''],['', '', '']]
    return {board};
})();

console.log(Gameboard)

function createPlayer (name, mark) {
    const playerName = name;
    const playerMark = mark;
    return{playerName, playerMark}
}

const playerOne = createPlayer('', 'x')
const playerTwo = createPlayer('', 'o')

console.log(playerOne)
console.log(playerTwo)