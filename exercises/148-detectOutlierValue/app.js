function detectOutlierValue(string) {
  // your code here
  const arrayOfNum = string.split(" ").map((num) => Number(num));
  let result;
  let odd = 0;
  let even = 0;
  for (num of arrayOfNum) {
    if (num % 2 != 0) even += 1;
    if (num % 2 === 0) odd += 1;
  }

  if (odd > even) {
    for (let i = 0; i < arrayOfNum.length; i++) {
      if (arrayOfNum[i] % 2 > 0) {
        result = i + 1;
      }
    }
  } else {
    for (let i = 0; i < arrayOfNum.length; i++) {
      if (arrayOfNum[i] % 2 == 0) {
        result = i + 1;
      }
    }
  }

  return result;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1")); // --> 2
