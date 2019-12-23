/**
 * Returns if the specified 3x3 tic tac toe board is full or not.
 * @param {2d Array} squares 3x3 tic tac toe board
 */
export function isFull(squares) {
  return squares[0][0] && squares[0][1] && squares[0][2]
      && squares[1][0] && squares[1][1] && squares[1][2]
      && squares[2][0] && squares[2][1] && squares[2][2];
}