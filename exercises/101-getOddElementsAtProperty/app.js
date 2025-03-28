function getOddElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return [];

  const oddNumber = obj[key].filter((num) => num % 2 !== 0);
  return oddNumber;
}

let obj = {
  key: [1, 2, 3, 4, 5],
};
let output = getOddElementsAtProperty(obj, "key");
console.log(output); // --> [1, 3, 5]
