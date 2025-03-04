function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return [];

  return obj[key].reduce((acc, current) => (current < acc ? current : acc));
}

let obj = {
  key: [2, 1, 5],
};
let output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1
