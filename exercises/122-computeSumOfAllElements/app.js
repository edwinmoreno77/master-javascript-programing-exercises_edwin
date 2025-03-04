function computeSumOfAllElements(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;
  return arr.reduce((acc, curr) => (acc += curr));
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
