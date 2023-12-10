/**
 * This function accepts an object where the values are either strings or numbers,
 * and returns an array of arrays. The first subarray contains a total of all of 
 * the numbers and the second subarray contains a number which is the total 
 * of all the characters of all the strings.
//  */

// divideObject({
//   first: "hi",
//   second: "hello",
//   third: "hey",
//   fourth: 2,
//   fifth: "fun",
//   sixth: 10,
// })

// create two count variables
// loop over obj
//   if val is str
//     add all chars to strCount
//   else
//     add val to numTotal
// return an array with an arr of numTotal, and an arr of strCount

function divideObject(obj) {
  let numTotal = 0;
  let strCount = 0;

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strCount += obj[key].length;
    } else {
      numTotal += obj[key];
    }
  }

  return [[numTotal], [strCount]];
}

// 11.5 mins
// Perfect!

let sumNumbers = 0;
let sumStrings = 0;
for (let key in obj) {
  if (typeof obj[key] === "string") {
    sumStrings += obj[key].length;
  } else {
    sumNumbers += obj[key];
  }
}
return [[sumNumbers], [sumStrings]];
}