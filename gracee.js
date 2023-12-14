// CHALLENGE

// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).

// [0] should return 0, because it occurs 1 time (which is odd).

// [1,1,2] should return 2, because it occurs 1 time (which is odd).

// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).

// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//initialize func called oddInt, accepts an arr of ints (one param)
//initialize empty obj, called intCount
//loop thru each el in input arr
//if el exists as key in obj intCount, increment val by one
//if el doesn't exist as key in obj intCount, create key, val equal to one
//loop thru obj intCount
//for each el in obj, test to see if val is odd number
//when odd val is found, return corresponding key (convert to num from str)

function oddInt(arr) {
  const intCount = {};

  for (let el of arr) {
    if (el in intCount) {
      intCount[el]++;
    }
    if (!(el in intCount)) {
      intCount[el] = 1;
    }
  }

  for (let el in intCount) {
    if (intCount[el] % 2 !== 0) {
      return Number(el);
    }
  }
}

// [7] should return 7, because it occurs 1 time (which is odd).

// [0] should return 0, because it occurs 1 time (which is odd).

// [1,1,2] should return 2, because it occurs 1 time (which is odd).

// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).

// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
