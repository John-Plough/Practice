// in - Array, index
// out - same Array, altered
// remove two els, starting at index
// replace with 'hello', 'world'

// use index, and remove two els after, add hello world
// return Array

function replaceAfter(arr, index) {
  arr.splice(index, 2, "Hello", "world");
  return arr;
}

// 5.5 mins
// Perfect!

replaceAfter(["1", "2", "a", "b", "3", "4"], 2);
// ["1", "2", "Hello", "world", "3", "4"]

replaceAfter(["a", "b", "c"], 0);
// ["Hello", "world", "c"]

function replaceAfter(array, idx) {
  array.splice(idx, 2, "Hello", "world");
  return array;
}
