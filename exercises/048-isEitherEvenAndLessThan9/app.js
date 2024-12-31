function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    const isEitherEven = num1 % 2 == 0 || num2 % 2 == 0;
    const lessThan9 = num1 < 9 && num2 < 9;
    const result = isEitherEven && lessThan9;

    return result;
}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
