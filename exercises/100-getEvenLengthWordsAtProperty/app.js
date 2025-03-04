function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return [];

  const evenWords = obj[key].filter((word) => word.length % 2 === 0);
  return evenWords;
}

let obj = {
  key: ["a", "long", "game"],
};
let output = getEvenLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['long', 'game']
