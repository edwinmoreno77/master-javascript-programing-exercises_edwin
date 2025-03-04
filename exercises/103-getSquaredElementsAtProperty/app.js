function getSquaredElementsAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key])) return [];
  const squareElements = obj[key].map((element) => Math.pow(element, 2));
  return squareElements;
}

let obj = {
  key: [2, 1, 5],
};

let output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]
