function multiply(num1, num2) {
  // your code here
  let result = 0;
  let isNegative = false;

  // Check if the result will be negative
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    isNegative = true;
  }

  // Convert both numbers to positive
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // Add num1 to result num2 times
  for (let i = 0; i < num2; i++) {
    result += num1;
  }

  if (isNegative) {
    result = -result;
  }
  return result;
}

let output = multiply(4, 7);
console.log(output); // --> 28
