document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleClick(cell, index));
    });

    restartButton.addEventListener('click', restartGame);

    function handleClick(cell, index) {
        if (cell.textContent || checkWinner()) return;
        cell.textContent = currentPlayer;
        board[index] = currentPlayer;
        if (checkWinner()) {
            message.textContent = `${currentPlayer} Wins!`;
        } else if (board.every(cell => cell)) {
            message.textContent = 'Draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            
        }
    }

    function checkWinner() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return board[index] === currentPlayer;
            });
        });
    }

    function restartGame() {
        board.fill(null);
        cells.forEach(cell => (cell.textContent = ''));
        currentPlayer = 'X';
        message.textContent = `Current Player: ${currentPlayer}`;
    }
});
