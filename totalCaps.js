// in - arr of strs
// out - num (of cap letters)

//create counter
//loop over arr
//loop over str
//determine if char is uppercase
//asking if the char is equal tp the UC version of the char
//if it is, incrememnt counter
//return counter

function totalCaps(arr) {
  let total = 0;

  for (let str of arr) {
    for (let char of str) {
      if (char === char.toUpperCase()) {
        total++;
      }
    }
  }

  return total;
}

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]); // 8
totalCaps(["Elie", "Matt", "Tim"]); // 3
totalCaps(["hello", "world"]); // 0
