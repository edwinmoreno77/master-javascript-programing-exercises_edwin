// Write your function here
function getNthElementOfProperty(obj, key, num) {
  if (!obj[key][num] || !Array.isArray(obj[key] || num >= obj[key].length)) {
    return undefined;
  }
  return obj[key][num];
}

let obj = {
  key: [1, 2, 6],
};
let output = getNthElementOfProperty(obj, "key", 1);
console.log(output); // --> 2
