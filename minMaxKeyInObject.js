// in - obj
// out - arr (two els) - low, high

//create two variables: low and high
//loop thru obj
//if key is lower than low,
//reassign low
//if key is higher than high,
//reassign high
//return arr containing low and high

function minMaxKeyInObject(obj) {
  let low = Infinity;
  let high = -Infinity;

  for (let key in obj) {
    key = Number(key);
    if (key < low) {
      low = key; // 1
    }
    if (key > high) {
      high = key; // 4
    }
  }

  return [low, high]; // [1, 4]
}

minMaxKeyInObject({ 2: "a", 7: "b", 1: "c", 10: "d", 4: "e" });
// [1, 10]
minMaxKeyInObject({ 1: "Elie", 4: "Matt", 2: "Tim" });
// [1, 4]
