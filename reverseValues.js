// in - Array

// loop thru, if val is even, we skip it and the next two. If not skipped, add to new arr.

//new arr should be revreed and returned;

// //loop thru
//   if even,
//     skip and add two to i
//   add val to new arr

//   reverse new arr

//   return new arr

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

// 9.5 mins

reverseValues([1, 1, 3, 3, 2]); // [3, 3, 1, 1]
reverseValues([1, 3, 5, 7]); // [7, 5, 3, 1]
reverseValues([1, 3, 4, 7]); // [3, 1]
reverseValues([11, 13, 15, 20, 1, 1]); // [15, 13, 11]
reverseValues([4, 5, 1, 1, 2, 1, 1]); // [1]
reverseValues([2, 2, 2]); // []

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
