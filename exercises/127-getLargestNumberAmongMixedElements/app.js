function getLargestNumberAmongMixedElements(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;

  return arr.reduce((largestNum, num) => {
    if (typeof num != "number") return largestNum;
    return num > largestNum ? num : largestNum;
  });
}

let output = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 5
