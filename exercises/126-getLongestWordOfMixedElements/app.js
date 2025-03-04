function getLongestWordOfMixedElements(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;

  return arr.reduce((longestWord, element) => {
    if (typeof element !== "string") return longestWord;
    return longestWord === "" || element.length > longestWord
      ? element
      : longestWord;
  }, "");
}

let output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'
