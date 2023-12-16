/**
 * create vowel str
 * loop over str
 *    if char is vowel, skip it, plus next char
 *    else add char to arr
 *
 * returns arr
 */

function skipVowels(str) {
  let vowels = "AEIOUaeiou";
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      i++;
    } else {
      arr.push(char);
    }
  }

  return arr;
}

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
