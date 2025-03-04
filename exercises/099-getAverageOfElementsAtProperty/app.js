function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) return 0;

  const sumOfElements = obj[key].reduce((acc, current) => (acc += current));
  const average = sumOfElements / obj[key].length;
  return average;
}

let obj = {
  key: [1, 2, 3],
};
let output = getAverageOfElementsAtProperty(obj, "key");
console.log(output); // --> 2
