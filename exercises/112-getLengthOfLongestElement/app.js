function getLengthOfLongestElement(arr) {
  // Your code here
  if (arr.length < 1) return 0;

  return arr.reduce((acc, curr) => {
    return Math.max(acc, curr.length);
  }, 0);
}

let output = getLengthOfLongestElement(["one", "two", "three"]);
console.log(output); // --> 5
