function isEvenWithoutModulo(num) {
  // your code here
  return Math.floor(num / 2) == num / 2;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
