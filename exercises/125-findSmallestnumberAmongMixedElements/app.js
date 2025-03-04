function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (!arr || arr.length < 1) return 0;

  return arr.reduce((smallest, element) => {
    if (typeof element !== "number") return smallest;
    return element < smallest ? element : smallest;
  }, Infinity);
}

let output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4

