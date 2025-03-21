// Write your function here

function getElementsLessThan100AtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) return [];

  return obj[key].filter((num) => num < 100);
}

let obj = {
  key: [1000, 20, 50, 500],
};
let output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]
