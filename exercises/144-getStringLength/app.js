function getStringLength(string) {
  // your code here
  let count = 0;
  for (let __ of string) count += 1;
  return count;
}

let output = getStringLength("hello");
console.log(output); // --> 5
