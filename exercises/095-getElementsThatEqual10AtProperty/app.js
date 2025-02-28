// Write your function here

function getElementsThatEqual10AtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) return [];

  const newArray = [...obj[key]];
  return newArray.filter((item) => item === 10);
}

let obj = {
  key: [1000, 10, 50, 10],
};
let output = getElementsThatEqual10AtProperty(obj, "key");
console.log(output); // --> [10, 10]
