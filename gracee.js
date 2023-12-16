/**
 * create obj
 * loop thru arr adding one to val of corresponding key
 * return obj
 */

function robotInstructions(arr) {
  const obj = { U: 0, D: 0, L: 0, R: 0 };

  for (let move of arr) {
    obj[move]++;
  }

  return obj;
}

function robotInstructions(arr) {
  const totalMoves = {};
  for (let move of arr) {
    if (move in totalMoves) {
      totalMoves[move]++;
    } else {
      totalMoves[move] = 1;
    }
  }
  return totalMoves;
}

function robotInstructions(moves) {
  let moveCount = {};
  for (let move of moves) {
    if (moveCount[move]) {
      moveCount[move]++;
    } else {
      moveCount[move] = 1;
    }
  }
  return moveCount;
}
