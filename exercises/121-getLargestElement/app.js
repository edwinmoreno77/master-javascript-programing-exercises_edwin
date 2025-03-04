function getLargestElement(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc));
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
