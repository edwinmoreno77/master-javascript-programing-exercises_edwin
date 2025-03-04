function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  const tip = preTaxAndTipAmount * 0.095;
  const tax = preTaxAndTipAmount * 0.15;
  return preTaxAndTipAmount + tip + tax;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
