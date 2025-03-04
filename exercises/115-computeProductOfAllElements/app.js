function computeProductOfAllElements(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;
  return arr.reduce((acc, curr) => (acc *= curr));
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
