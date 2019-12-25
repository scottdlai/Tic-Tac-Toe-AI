import { calculateWinner } from "./calculateWinner";
import { isFull } from "./isFull";
import {evaluate} from "./evaluate.js";
import { human } from "./human.js";
import { computer } from "./computer.js";

/**
 * Make the best moves by checking every move and calling the minimax function.
 * @param {2d array} board current position of a 3x3 tic-tac-toe board
 */
export function nextMove(board) {
  if (isFull(board)) {
    return;
  }

  let bestMoveEval = -Infinity;
  let bestMoveRow;
  let bestMoveColumn;
  let score;
  
  for (let row = 0; row < 3; row++) {

    for (let column = 0; column < 3; column++) {

      if (!board[row][column]) {
        board[row][column] = computer;

        score = minimax(board, 0, true);
        board[row][column] = ""

        if (score > bestMoveEval) {
          bestMoveEval = score;
          bestMoveRow = row;
          bestMoveColumn = column;
        } else if (score === bestMoveEval) {
          let n = Math.random();
          bestMoveRow = n < 0.35 ? row : bestMoveRow;
          bestMoveColumn = n < 0.35 ? column : bestMoveColumn;
        }
      }
    }

}

  board[bestMoveRow][bestMoveColumn] = computer;
}

/**
 * Returns the evaluation of a position.
 * @param {2d array} board current postiion of the 3x3 tic-tac-toe board
 * @param {number} depth depth of the tree
 * @param {boolean} isMinimizing if it is the minimizing player's (human) turn
 */
function minimax(board, depth, isMinimizing) {
  if (calculateWinner(board) !== "TIE" || isFull(board)) {
    return evaluate(board) - depth;
  }

  let bestEval;
  if (isMinimizing) {
    bestEval = Infinity;

    for (let row = 0; row < 3; row++) {

      for (let column = 0; column < 3; column++) {

        if (!board[row][column]) {
          board[row][column] = human;
          let score = minimax(board, depth + 1, false);
          board[row][column] = "";

          bestEval = min(bestEval, score);
        }
      }
    }
  } else {
    bestEval = -Infinity;

    for (let row = 0; row < 3; row++) {

      for (let column = 0; column < 3; column++) {

        if (!board[row][column]) {
          board[row][column] = computer;
          let score = minimax(board, depth + 1, true);
          board[row][column] = "";

          bestEval = max(bestEval, score);
        }
      }
    }
  }

  return bestEval
}

function min(a, b) {
  return a < b ? a : b;
}

function max(a, b) {
  return a > b ? a : b;
} 