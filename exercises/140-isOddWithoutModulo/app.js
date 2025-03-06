function isOddWithoutModulo(num) {
  // your code here
  return Math.floor(num / 2) !== num / 2;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
