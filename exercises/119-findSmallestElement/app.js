function findSmallestElement(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;
  return arr.reduce((acc, curr) => (acc < curr ? acc : curr));
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
