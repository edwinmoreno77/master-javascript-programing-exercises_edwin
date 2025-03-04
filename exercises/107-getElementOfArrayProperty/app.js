function getElementOfArrayProperty(obj, key, index) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || index > obj[key].length - 1)
    return undefined;

  return obj[key][index];
}

let obj = {
  key: ["Jamil", "Albrey"],
};
let output = getElementOfArrayProperty(obj, "key", 0);
console.log(output); // --> 'Jamil'
