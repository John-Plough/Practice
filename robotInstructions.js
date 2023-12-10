// in - array of moves
// out - obj (key is move, cval is total times move appears)

// create counter object
// loop thru arr
// if el exists in object as a key
// increment val of that key by one
// otherwise
// create a key with the els name, with a val of 1

// return counter obj

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

// 7.5 mins
// Perfect!

robotInstructions(["U", "D", "L", "R"]);
// { "U": 1, "D": 1, "L": 1, "R": 1 })

robotInstructions(["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"]);
// { "U": 3, "D": 3, "L": 3, "R": 3 })

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

robotInstructions(["", "D", "L", "R", "", "D", "L", "R", "", "D", "L", "R"]);
// { "U": 3, "D": 3, "L": 3, "R": 3 })
