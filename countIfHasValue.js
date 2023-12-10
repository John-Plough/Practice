// in - obj where all vals are arrays, and num
// out - num

// let obj = {
//   a: [1, 10, 3],
//   b: [4, 1, 7],
//   c: [7, 7, 7],
//   d: [10, 7, 12]
// };

// loop over obj
//   if val in prop includes num
//     increment arraysWithThisNumber
// return arraysWithThisNumber

function countIfHasValue(obj, num) {
  let arraysWithThisNumber = 0;
  for (let key in obj) {
    if (obj[key].includes(num)) {
      arraysWithThisNumber++;
    }
  }
  return arraysWithThisNumber;
}

//8 mins
//Perfect!

function countIfHasValue(obj, value) {
  let count = 0;
  for (let key in obj) {
    if (obj[key].includes(value)) {
      count++;
    }
  }
  return count;
}
