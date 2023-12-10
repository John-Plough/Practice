// in - arr of pos ints
// out - obj (w/ count of evens/odds)

// create count obj w/ even and odd keys
// loop over arr
//   if num is odd
//     increment val by 1 to odd prop
//   otherwise
//     increment val by 1 to even prop
// return our count obj

function collectOddsAndEvens(arr) {
  const counter = { odd: 0, even: 0 };

  for (let num of arr) {
    if (num % 2 !== 0) {
      counter.odd++;
    } else {
      counter.even++;
    }
  }
  return counter;
}

//8.5 mins
//mistake - used bracket notation on 17/19

function collectOddsAndEvens(numbers) {
  let odd = 0;
  let even = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return {
    odd: odd,
    even: even,
  };
}
