// src/modules/buttons.js

import { knightMoves } from './knight_m';
import { createChessBoard } from './board';

export const createButtons = (appMain) => {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const placeKnightBtn = document.createElement('button');
    placeKnightBtn.textContent = 'Place the Knight';
    buttonsContainer.appendChild(placeKnightBtn);

    const chooseEndPointBtn = document.createElement('button');
    chooseEndPointBtn.textContent = 'Choose End Point';
    buttonsContainer.appendChild(chooseEndPointBtn);

    const goBtn = document.createElement('button');
    goBtn.textContent = 'Go';
    goBtn.disabled = true;
    buttonsContainer.appendChild(goBtn);

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    buttonsContainer.appendChild(clearBtn);

    appMain.appendChild(buttonsContainer);

    let start = null;
    let end = null;

    const initializeBoard = () => {
        const newBoard = createChessBoard();
        appMain.appendChild(newBoard);

        newBoard.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('chess-square')) {
                const pos = target.getAttribute('data-pos').split(',').map(Number);
                if (newBoard.classList.contains('placing-knight')) {
                    start = pos;
                    target.classList.add('knight');
                    newBoard.classList.remove('placing-knight');
                } else if (newBoard.classList.contains('choosing-end-point')) {
                    end = pos;
                    target.classList.add('end-point');
                    newBoard.classList.remove('choosing-end-point');
                }
                if (start && end) {
                    goBtn.disabled = false;
                }
            }
        });
    };

    initializeBoard();

    placeKnightBtn.addEventListener('click', () => {
        const board = appMain.querySelector('.chess-board');
        board.classList.add('placing-knight');
    });

    chooseEndPointBtn.addEventListener('click', () => {
        const board = appMain.querySelector('.chess-board');
        board.classList.add('choosing-end-point');
    });

    goBtn.addEventListener('click', () => {
        if (start && end) {
            const path = knightMoves(start, end);
            const board = appMain.querySelector('.chess-board');
            path.forEach((pos, index) => {
                const square = board.querySelector(`[data-pos="${pos}"]`);
                if (square) {
                    square.textContent = index;
                }
            });
        }
    });

    clearBtn.addEventListener('click', () => {
        start = null;
        end = null;
        goBtn.disabled = true;
        const board = appMain.querySelector('.chess-board');
        board.remove();
        initializeBoard();
    });

    return buttonsContainer;
};
