// in arr, num
// out new arr
// if not twice, return -1

// create var first
// create var last

// assign first with method
// assign last with method
// if first equals last or -1, return -1
// else return [first, last]

function findFirstAndLastIndex(arr, num) {
  let first = arr.indexOf(num);
  let last = arr.lastIndexOf(num);
  if (first === last || first === -1) {
    return -1;
  } else {
    return [first, last];
  }
}

// findFirstAndLastIndex([1, 2, 3, 4, 5], 3) // -1
// findFirstAndLastIndex([1, 2, 2, 2, 5], 12) // -1
// findFirstAndLastIndex([1, 2, 2, 2, 5], 2) // [1, 3]

// 10.5 mins
// Perfect!

function findFirstAndLastIndex(arr, num) {
  let firstIndex = arr.indexOf(num);
  let lastIndex = arr.lastIndexOf(num);

  let doesNotHaveFirstOrLast = firstIndex === -1 || lastIndex === -1;
  let areBothAtSameIndex = firstIndex === lastIndex;

  if (doesNotHaveFirstOrLast || areBothAtSameIndex) {
    return -1;
  }

  return [firstIndex, lastIndex];
}
