import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { calculateWinner } from './calculateWinner.js';
import { isFull } from './isFull.js';
import { nextMove } from "./nextMove.js";
import { human } from "./human.js";
import { computer } from "./computer.js";


function Square(props) {
  const squareClass = "square " + (props.value ? "" : "hoverable ")
    + (props.value === human ? human : computer);

  return (
    <button className={squareClass} onClick={props.onClick}>
      <span>{props.value}</span>
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
      <>{this.createBoard()}</>
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
      humanFirst: true,
      gameStart: true,
    }
  }

  handleClick(row, column) {
    const squares = this.state.squares.slice();

    if (squares[row][column]) {
      return;
    }

    if (calculateWinner(squares) !== "TIE" || isFull(squares)) {
      return (
        <button onClick={() => this.clearBoard()}>
          REPLAY
        </button>
      );
    }

    squares[row][column] = human;

    this.setState({
      squares: squares,
      gameStart: false,
    });

    nextMove(squares);
  }

  clearBoard() {
    this.setState({
      squares: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      humanFirst: !this.state.humanFirst,
      gameStart: true,
    });
  }

  render() {
    const squares = this.state.squares;
    let playBtn;

    let status = "Tic-Tac-Toe";

    const winner = calculateWinner(squares);

    if (this.state.gameStart && !this.state.humanFirst) {
      nextMove(squares);
      this.setState({
        squares: squares,
        gameStart: false,
      });
    }

    if (winner !== "TIE" || isFull(squares)) {
      status = "Winner: " + winner;
      playBtn = <button onClick={() => this.clearBoard()}
                  className="replay">
                    REPLAY
                  </button>
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
        <>{playBtn}</>
      </div>
    );
  }
}

class Footer extends React.Component {

  render() {

    return (
      <div className="footer">
        <p>
          <a href="https://github.com/tuonglai3602/Tic-Tac-Toe-AI">
            Made by Scott Lai
          </a>
        </p>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <>
    <Game />
    <Footer />
  </>,
  document.getElementById('root')
);

