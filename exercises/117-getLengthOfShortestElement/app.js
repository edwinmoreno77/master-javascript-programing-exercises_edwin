function getLengthOfShortestElement(arr) {
  // your code here
  if (!arr || arr.length === 0) return 0;

  return arr.reduce((ShortestElement, element) => {
    if (typeof element !== "string") return ShortestElement;
    return Math.min(ShortestElement, element.length);
  }, Infinity);
}

let output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3
