function computeCompoundInterest(principal, rate, timesCompounded, years) {
  return (
    principal * Math.pow(1 + rate / timesCompounded, timesCompounded * years) -
    principal
  );
}

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543
