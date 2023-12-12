function sortStrings(string) {
  let newArray = string.split(" ");
  let counter = {};
  let value = Infinity;
  let tempArr = [];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      let newVal = newArray[i];
      let letterVal = newArray[i][j];

      if (!isNaN(letterVal)) {
        counter[newVal] = letterVal;
      }
    }
  }

  console.log(counter);
  let highestVal = Object.values(counter);
  console.log(highestVal.sort());
  let lastVal = highestVal[highestVal.length - 1];

  for (let k = 1; k <= Number(lastVal); k++) {
    for (let key in counter) {
      let newVal = counter[key];
      if (Number(newVal) === k) {
        tempArr.push(key);
      }
    }
  }

  return tempArr.join(" ");
}

("Al1 7bud M6y ghu2hk sj9hkj s4hkk");

// for (let key in counter) {
//   let objectVal = counter[key];
//   if (objectVal < value) {
//     value = objectVal;
//     tempArr.unshift(key);
//   } else {
//     tempArr.push(key);
//   }
// }
