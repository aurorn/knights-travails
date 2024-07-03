export const knightMoves = (start, end) => {
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    const isValidMove = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const bfsAlg = (start, end) => {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if (x === end[0] && y === end[1]) return path;

            for(const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValidMove(newX, newY) && !visited.has([newX, newY].toString())) {
                    visited.add([newX, newY].toString());
                    queue.push([...path, [newX, newY]]);
                }
            }
        }
    };

    const path = bfsAlg(start, end);
    console.log(`You reached your goal in ${path.length - 1} moves. Here's your Path:`);
    path.forEach(pos => console.log(pos));
    return path;
}