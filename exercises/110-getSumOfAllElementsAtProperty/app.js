function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return 0;

  return obj[key].reduce((acc, curr) => (acc += curr));
}

let obj = {
  key: [4, 1, 8],
};
let output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 13
