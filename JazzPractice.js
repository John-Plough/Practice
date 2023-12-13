function solution(num) {
  const roman = {                           // object of all numerals with their value
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let numAsRomNum = "";                       //str that will be built up thru the for loop below

  for (let key of Object.keys(roman)) {       //[V,I,X]
                                              //loop thru array of the keys(numerals)
    let quot = Math.floor(num / roman[key]);  //assign quotient = (input number / value)
    numAsRomNum += key.repeat(quot);          //add numerals to str 'quot' times
    num -= (quot * roman[key]);               //subtract (val * quot) from num
  }

  return numAsRomNum;
}

//33 -- XXX

XXXIII -- 30
3

roman.keys()







function arrayDiff(A, B) {

  const finalArr = [];
  for (let el of A) {
    if (!B.includes(el)) {
      finalArr.push(el);
    }
  }

  return finalArr;
}




































