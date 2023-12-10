// in - str
// out - num

// countValidNumsInString("") // 0
// countValidNumsInString("1") // 1
// countValidNumsInString("12") // 2
// countValidNumsInString("12abc3") // 3
// countValidNumsInString("1s2d3dsadas4") // 4
// countValidNumsInString("512,3,4!?!") // 5
// countValidNumsInString("123456") // 6

// create counter
// loop over str
//   if char is a num
//     incrememetn counter by onemptied
// return counter

function countValidNumsInString(str) {
  let validNums = 0;
  for (let char of str) {
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)) {
      validNums++;
    }
  }
  return validNums;
}

// 7 mins
// Perfect!

function countValidNumsInString(string) {
  let count = 0;
  for (let char of string) {
    if (isValidNum(char)) {
      count++;
    }
  }
  return count;

  function isValidNum(char) {
    return char >= "0" && char <= "9";
  }
}
