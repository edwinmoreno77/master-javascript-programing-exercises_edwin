// Write your function here
function getFirstElementProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key])) return undefined;
  return obj[key][0];
}

let obj = {
  key: [1, 2, 4],
};
let output = getFirstElementProperty(obj, "key");
console.log(output); // --> 1
