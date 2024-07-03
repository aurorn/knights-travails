import { knightMoves } from "./modules/knight_m";
import { createChessBoard } from "./modules/board";
import './styles.css';

const appMain = document.getElementById('app-main');
appMain.appendChild(createChessBoard());

// console.log tests
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);