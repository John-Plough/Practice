// in - str
// out - arr
// if vowel, skip current and next
// otherwise, add current to output arr

// create arr
// create vowel str
// loop over str
// if vowel, skip cur and next
// otherwise add to output arr
// return arr

function skipVowels(str) {
  const withoutVowels = [];
  let vowels = "aeiuoAEIOU";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      i++;
    } else {
      withoutVowels.push(char);
    }
  }

  return withoutVowels;
}

// 8.5 mins
// Perfect!

function skipVowels(string) {
  let vowels = "aeiouAEIOU";
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      i++;
    } else {
      result.push(string[i]);
    }
  }
  return result;
}

skipVowels("hello"); // ["h", "l"]
skipVowels("much fun"); // ["m", "h", " ", "f"]
skipVowels("aaaa"); // []
