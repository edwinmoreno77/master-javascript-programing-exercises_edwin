function getElementsAfter(array, n) {
  // your code here
  const arrayAfter = array.slice(n + 1)
  return arrayAfter;

}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']
