import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { calculateWinner } from './calculateWinner.js';
import { isFull } from './isFull.js';
import { FaRedoAlt } from "react-icons/fa";
import { human } from "./human.js";
import { computer } from "./computer.js";

function Square(props) {
  const squareClass = "square " + (props.value === human ? human : computer);

  return (
    <button className={squareClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(row, column) {
    return <Square
      value={this.props.squares[row][column]}
      onClick={() => this.props.onClick(row, column)}
    />;
  }

  createBoard() {
    let board = [];

    for (let row = 0; row < 3; row++) {
      let boardRow = [];

      for (let column = 0; column < 3; column++) {
        boardRow.push(this.renderSquare(row, column));
      }

      board.push(<div className="board-row">{boardRow}</div>);
    }

    return board;
  }

  render() {
    return (
      <>
        {this.createBoard()}
      </>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      computerNext: true,
    }
  }

  handleClick(row, column) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) !== "TIE" || isFull(squares)
      || squares[row][column]) {
      return (
        <button onClick={() => this.clearBoard()}>
          REPLAY <FaRedoAlt />
        </button>
      );
    }

    squares[row][column] = this.state.computerNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      computerNext: !this.state.computerNext,
    });
  }

  clearBoard() {
    this.setState({
      squares: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      computerNext: true,
    });
  }

  render() {
    const squares = this.state.squares;
    const winner = calculateWinner(squares);

    let replayBtn;

    let status;

    if (winner !== "TIE" || isFull(squares)) {
      status = "Winner: " + winner;
      replayBtn = <button onClick={() => this.clearBoard()} className="replay">
        REPLAY
        </button>
    } else {
      status = 'Next Player: ' + (this.state.computerNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="status">{status}</div>
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(row, column) => this.handleClick(row, column)}
          />
        </div>
        <>{replayBtn}</>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

