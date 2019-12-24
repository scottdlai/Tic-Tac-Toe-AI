import { calculateWinner } from "./calculateWinner";
import { computer } from "./computer";
import { human } from "./human";

export function evaluate(board) {
  let winner = calculateWinner(board);
  
  if (winner === computer) {
    return 10;
  } else if (winner === human) {
    return -10;
  } else {
    return 0;
  }
}
