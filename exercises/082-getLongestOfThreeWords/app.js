function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  const arrayOfWords = [word1, word2, word3];
  let longestWord = "";

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
}

let output = getLongestOfThreeWords("these", "three", "words");
console.log(output); // --> 'these'
