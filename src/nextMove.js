import { calculateWinner } from "./calculateWinner";
import { isFull } from "./isFull";
import {evaluate} from "./evaluate.js";
import { human } from "./human.js";
import { computer } from "./computer.js";

export function nextMove(board) {
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
        }
      }
    }

}

  board[bestMoveRow][bestMoveColumn] = computer;
}

function minimax(board, depth, isMinimizing) {
  if (calculateWinner(board) !== "TIE" || isFull(board)) {
    return evaluate(board);
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