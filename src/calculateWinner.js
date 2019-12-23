/**
 * Returns the winner of the match based on the specified 3x3 tic tac toe board.
 * If there's no winner, i.e. the match hasn't finished or draw, returns "TIE".
 * @param {2d array} squares 3x3 tic tac toe board
 */
export function calculateWinner(squares) {
  let winner = "TIE";
  // Check for vertical
  for (let column = 0; column < 3; column++) {
    if (squares[0][column] === squares[1][column] 
      && squares[1][column] === squares[2][column] && squares[0][column]) {
      winner = squares[0][column]
    }
  }

  // Check for horizontal
  for (let row = 0; row < 3; row++) {
    if (squares[row][0] === squares[row][1]
      && squares[row][1] === squares[row][2] && squares[row][0]) {
        winner = squares[row][0];
      }
  }

  // Check \ diagonal
  if (squares[0][0] && squares[0][0] === squares[1][1] 
    && squares[1][1] === squares[2][2]) {
      winner = squares[0][0];
  }

  // Check / diagonal
  if (squares[0][2] && squares[0][2] === squares[1][1] 
    && squares[1][1] === squares[2][0]) {
      winner = squares[0][2];
    }

  return winner;
}