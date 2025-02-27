// Write your function here

function getLastElementOfProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
    return undefined;
  }
  const index = obj[key].length - 1;
  return obj[key][index];
}

let obj = {
  key: [1, 2, 5],
};
let output = getLastElementOfProperty(obj, "key");
console.log(output); // --> 5
