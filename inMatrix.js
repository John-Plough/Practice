// in - matrix, val
// out - Boolean

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// loop thru outer Array
//   determine in val is in each inner Array
//     if yes, return true
// return false if not found at end of loop

function inMatrix(arr, val) {
  for (innerArr of arr) {
    if (innerArr.includes(val)) {
      return true;
    }
  }
  return false;
}

// 6 mins
// Perfect!

inMatrix(matrix, 5); // true
inMatrix(matrix, 8); // true
inMatrix(matrix, 10); // false

function inMatrix(matrix, value) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(value) > -1) {
      return true;
    }
  }
  return false;
}
