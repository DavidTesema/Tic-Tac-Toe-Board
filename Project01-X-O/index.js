//  empty array
var board = [];
// The functions of the game
function play(clickedId) {
  var playrSpan = document.getElementById("player");
  var clickedElement = document.getElementById(clickedId);
  if (playrSpan.innerText === "X") {
    playrSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playrSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  //  name each square
  var topLeft = board[0];
  var topCenter = board[1];
  var topRight = board[2];
  var middleLeft = board[3];
  var middleCenter = board[4];
  var middleRight = board[5];
  var buttomLeft = board[6];
  var buttomCenter = board[7];
  var buttomRight = board[8];
  //   var i=0; i < board.length; i++;{

  //   }
  // First option top row
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert("wimer");
  }
  //Second option Middle row
  if (
    middleLeft !== undefined &&
    middleLeft === middleCenter &&
    middleLeft === middleRight
  ) {
    alert("wimer");
  }
  // Third option Bottom row
  if (
    buttomLeft !== undefined &&
    buttomLeft === buttomCenter &&
    buttomLeft === buttomRight
  ) {
    alert("wimer");
  }
  // Fourth option left column
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    topLeft === buttomLeft
  ) {
    alert("wimer");
  }
  // Fifth option Middle column
  if (
    topCenter !== undefined &&
    topCenter === middleCenter &&
    topCenter === buttomCenter
  ) {
    alert("wimer");
  }
  // Option Six right column
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === buttomRight
  ) {
    alert("wimer");
  }
  // Seventh option, left curve
  if (
    topLeft !== undefined &&
    topLeft === middleCenter &&
    topLeft === buttomRight
  ) {
    alert("wimer");
  }
  // Seventh option, right curve
  if (
    topRight !== undefined &&
    topRight === middleCenter &&
    topRight === buttomLeft
  ) {
    alert("wimer");
  }

  // end of option to win
  var boardFull = true;

  for (i = 0; i < 1; i++)
if (  topLeft === undefined ||
  topCenter === undefined ||
  topRight === undefined ||
  middleLeft === undefined ||
  middleCenter === undefined ||
  middleRight === undefined ||
  buttomLeft === undefined ||
  buttomCenter === undefined ||
  buttomRight === undefined) {
      boardFull = false
} else {
  alert("cats game.")
}
}
