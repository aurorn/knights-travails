export const createChessBoard = () => {
    const board = document.createElement('div');
    board.className = 'chess-board';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'chess-square';
            square.setAttribute('data-pos', `${row},${col}`);
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            board.appendChild(square);
        }
    }
    return board;
};
