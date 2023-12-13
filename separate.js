//create 3 new arrs
//loop thru input arr
// if cat, push to cat
// if dog, push to dog
// if water, push to water
//concat all three arrays to separate arr
//return separate arr

function separate(arr) {
  const cat = [];
  const dog = [];
  const water = [];

  for (let el of arr) {
    if (el === "cat") {
      cat.push(el);
    } else if (el === "dog") {
      dog.push(el);
    } else {
      water.push(el);
    }
  }

  const separateArr = cat.concat(water, dog);
  return separateArr;
}
