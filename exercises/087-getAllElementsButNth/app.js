function getAllElementsButNth(array, n) {
  // your code here
  return array.toSpliced(n, 1);
}

let output = getAllElementsButNth(["a", "b", "c"], 1);
console.log(output); // --> ['a', 'c']
