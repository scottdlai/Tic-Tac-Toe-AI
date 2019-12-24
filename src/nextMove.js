import { calculateWinner } from "./calculateWinner";
import { isFull } from "./isFull";
import {evaluate} from "./evaluate.js";
import { human } from "./human.js";


export function nextMove(board) {
  let bestMoveEval;
  let bestMove;

  for (let row = 0; row < 3; row++) {

    for (let column = 0; column < 3; column++) {

      if (board[row][column]) {
        let newBoard = board;
        newBoard[row][column] = "O";

        let score = minimax(newBoard, 0, false);

        if (score > bestMoveEval) {
          bestMoveEval = score;
          bestMove = {row, column}
        }
      }
    }
  }

  return bestMove;
}

function minimax(board, depth, isMinimizing) {

  if(calculateWinner(board) !== "TIE" || isFull(board)) {
    return evaluate(board);
  }

  let bestVal;
  // Minimizing player
  if (isMinimizing) {
    bestVal = Infinity;

    for (let row = 0; row < 3; row++) {

      for (let column = 0; column < 3; column++) {

        if (board[row][column]) {
          let newBoard = board;
          newBoard[row][column] = "X";

          let score = minimax(newBoard, depth + 1, false);
          bestVal = score < bestVal ? score : bestVal;
        }
      }

    }
    // Maximimzing player
  } else {
    bestVal = -Infinity;

    for (let row = 0; row < 3; row++) {
      
      for (let column = 0; column < 3; column++) {

        if ((board[row][column])) {
          let newBoard = board;
          newBoard[row][column] = "O";

          let score = minimax(newBoard, depth + 1, true);
          bestVal = score > bestVal ? score : bestVal;
        }
      }
    }
  }

  return bestVal;
}