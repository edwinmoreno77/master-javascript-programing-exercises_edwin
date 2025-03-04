function findShortestElement(arr) {
  // your code here
  if (!arr || arr.length < 1) return "";
  return arr.reduce((acc, curr) => (curr.length < acc.length ? curr : acc));
}

let output = findShortestElement(["a", "two", "three"]);
console.log(output); // --> 'a'
