/**
 * loop thru arr
 *  if val is even, skip it and next two nums
 *  otherwise add to new arr
 * reverse new arr
 * return new arr
 *
 * [0,1,2,3,4,5,6,7,8,9]
 */
function reverseValues(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      i += 2;
    } else {
      newArr.push(num); //[3,7]
    }
  }

  return newArr.reverse(); // --> [7,3]
}

function reverseValues(arr) {
  const nonSkipped = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      i += 2;
    } else {
      nonSkipped.push(arr[i]);
    }
  }
  const reversed = nonSkipped.reverse();
  return reversed;
}

function reverseValues(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result.unshift(arr[i]);
    } else {
      i += 2;
    }
  }
  return result;
}
