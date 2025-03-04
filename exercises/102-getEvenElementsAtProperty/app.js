function getEvenElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key])) return [];
  const evenElements = obj[key].filter((element) => element % 2 == 0);
  return evenElements;
}

let obj = {
  key: [1000, 11, 50, 17],
};
let output = getEvenElementsAtProperty(obj, "key");
console.log(output); // --> [1000, 50]
