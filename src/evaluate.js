import { calculateWinner } from "./calculateWinner";

export function evaluate(board) {
  let winner = calculateWinner(board);
  
  if (winner === "TIE") {
    return 0;
  } else if (winner === "X") {
    return -10;
  } else {
    return 10;
  }
}