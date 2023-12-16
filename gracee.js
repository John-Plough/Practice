// output - Boolean
//loop thru arrofarr
// determine if val is included in that arr
//   if yes, return true;
//return false

function inMatrix(arrOfArrs, val) {
  for (let arr of arrOfArrs) {
    if (arr.includes(val)) {
      return true;
    }
  }
  return false;
}

function inMatrix(arr, val) {
  for (innerArr of arr) {
    if (innerArr.includes(val)) {
      return true;
    }
  }
  return false;
}

function inMatrix(matrix, value) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(value) > -1) {
      return true;
    }
  }
  return false;
}
