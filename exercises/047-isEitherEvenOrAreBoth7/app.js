function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    const isEitherEven = (num1 % 2 == 0) || (num2 % 2 == 0)
    const areBoth7 = (num1 == 7 && num2 == 7)
    const result = isEitherEven || areBoth7;

    return result;
}

console.log(isEitherEvenOrAreBoth7(3, 7));

