function findShortestWordAmongMixedElements(arr) {
  // your code here
  if (!arr || arr.length < 1) return "";
  return arr.reduce((shortest, element) => {
    if (typeof element !== "string") return shortest;
    return shortest === "" || element.length < shortest.lenght
      ? element
      : shortest;
  }, "");
}
let output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output); // --> 'two'