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

        score = minimax(board, 0, true, -Infinity, Infinity);
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
 * @param {number} alpha the minimum score the maximizing player (computer) is
 *  guaranteed to have
 * @param {number} beta the maximum score the minimizing player (human) is
 *  guaranteed to have
 */
function minimax(board, depth, isMinimizing, alpha, beta) {
  if (calculateWinner(board) !== "TIE" || isFull(board)) {
    let evaluation = evaluate(board);
    evaluation += evaluation > 0 ? -depth : depth;

    return evaluation;
  }

  let bestEval;
  if (isMinimizing) {
    bestEval = Infinity;
  } else {
    bestEval = -Infinity;
  }

  for (let row = 0; row < 3; row++) {

    for (let column = 0; column < 3; column++) {

      if (!board[row][column]) {
        board[row][column] = isMinimizing ? human : computer;
        let score = minimax(board, depth + 1, !isMinimizing, alpha, beta);
        board[row][column] = "";

        bestEval = isMinimizing ? min(bestEval, score) : max(bestEval, score);

        if (isMinimizing) {
          beta = min(bestEval, beta);
        } else {
          alpha = max(bestEval, alpha);
        }

        if (alpha >= beta) {
          break;
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