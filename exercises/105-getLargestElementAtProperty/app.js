function getLargestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key])) return [];

  return obj[key].reduce((acc, current) => (current > acc ? current : acc));
}

let obj = {
  key: [1, 2, 4],
};
let output = getLargestElementAtProperty(obj, "key");
console.log(output); // --> 4
