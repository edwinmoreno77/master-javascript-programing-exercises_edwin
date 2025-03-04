function joinArrayOfArrays(arr) {
  // your code here
  if (!arr || arr.length < 1) return [];
  let result = [];
  for (let item of arr) {
    result = result.concat(item);
  }

  return result;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
