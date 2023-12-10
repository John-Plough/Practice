// in - arr of arrs, move
// out - new arr (w/ index of where that move first exists)
//     if not there, return -1

// let moves = [
//   ["a", "b", "c"],
//   ["d", "a", "f"],
//   ["g", "h", "h"],
// ];

// loop over arr
//   check if move exists
//   if it does, return its index
// return -1;

function findFirstMove(arr, move) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(move)) {
      return [i, arr[i].indexOf(move)];
    }
  }
  return -1;
}

findFirstMove(moves, "a"); // [0, 0]
findFirstMove(moves, "h"); // [2, 1]
findFirstMove(moves, "z"); // -1

// 12 mins
// Perfect!

function findFirstMove(moves, move) {
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i].length; j++) {
      if (moves[i][j] === move) {
        return [i, j];
      }
    }
  }
  return -1;
}
