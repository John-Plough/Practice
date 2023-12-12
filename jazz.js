// in - str
// out - new str

// sort words in order of the number that is contained inside.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

//make empty arr for ordered words

//turn str into stringAsArr, with words separated into individual els
//loop over array
// loop over the word(str), looking for number
//ex 'Thi4s' --> find number 4 --> turn character into number
//assign to ordered array at that index - 1
//ex 'Thi4s' would become arr[3] = 'Thi4s'

//make empty output str
//make ordered array a string, joined on a space
//return output str

function order(words) {
  const orderedArr = [];
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const strAsArr = words.split(" ");
  for (let word of strAsArr) {
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!letters.includes(char)) {
        orderedArr[Number(char) - 1] = word;
      }
    }
  }
  let orderedStr = orderedArr.join(" ");
  return orderedStr;
}

// 26 mins
