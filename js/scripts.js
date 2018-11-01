// Business Logic for Tic Tac Toe

function Board (square1, square2, square3, square4, square5, square6, square7, square8, square9) {
  this.square1 = square1,
  this.square2 = square2,
  this.square3 = square3,
  this.square4 = square4,
  this.square5 = square5,
  this.square6 = square6,
  this.square7 = square7,
  this.square8 = square8,
  this.square9 = square9
};

var square1; var square2; var square3;
var square4; var square5; var square6;
var square7; var square8; var square9;
var newBoard = new Board(square1, square2, square3, square4, square5, square6, square7, square8, square9);

function Player (playerTurn, playerId, value) {
  this.playerTurn = playerTurn,
  this.playerId = playerId,
  this.value = value
}

var playerX = new Player(0, 1, "X");
var playerO = new Player(1, 2, "O");

var playerTurn = 0;
var turnFunction = function() {
  if (playerTurn ===0) {
    playerTurn = 1;
    return 0;
  }
  else if (playerTurn === 1) {
    playerTurn = 0;
    return 1;
  }
}
var checkForWinner = function() {
  for (i = 1; i <= 7; i += 3) {
    if (newBoard["square"+i] !== undefined && newBoard["square"+i] === (newBoard["square"+(i+1)]) && (newBoard["square"+i]) === (newBoard["square"+(i+2)])) {
      alert("End of the game");
    }
  }
    for (i = 1; i <= 9; i += 1) {
      if (newBoard["square"+i] !== undefined && newBoard["square"+i] === (newBoard["square"+(i+3)]) && (newBoard["square"+i]) === (newBoard["square"+(i+6)])) {
        alert("End of the game");
      }
    }
    // for (i = 1; i <= 9; i += 1) {
      if (newBoard.square1 !== undefined && newBoard.square1 === newBoard.square5 && newBoard.square1 === newBoard.square9) {
        alert("End of the game");
      }
      if (newBoard.square3 !== undefined && newBoard.square3 === newBoard.square5 && newBoard.square3 === newBoard.square7) {
        alert("End of the game");
      }
      if (newBoard.square1 !== undefined && newBoard.square2 !== undefined && newBoard.square3 !== undefined && newBoard.square4 !== undefined && newBoard.square5 !== undefined && newBoard.square6 !== undefined && newBoard.square7 !== undefined && newBoard.square8 !== undefined && newBoard.square9 !== undefined) {
        alert("Tie game!");
      }
    }

// User Interface Logic
$(document).ready(function() {

  $(".col-md-4").click(function() {
    for (i = 1; i <= 9; i++) {
      if(i === this.id); {
        if (playerTurn === 0) {
          newBoard["square" + this.id] = playerX.value;
          $("#" + this.id).html(playerX.value);
        } else if (playerTurn === 1) {
          newBoard["square" + this.id] = playerO.value;
          $("#" + this.id).html(playerO.value);
        }
      }
      turnFunction();
    }
    checkForWinner();

  });
});
