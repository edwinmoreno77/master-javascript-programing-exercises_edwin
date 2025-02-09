function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  let result = word1;
  if (word2 < result) result = word2;
  if (word3 < result) result = word3;
  return result;
}

let output = findShortestOfThreeWords("a", "two", "three");
console.log(output); // --> 'a'
