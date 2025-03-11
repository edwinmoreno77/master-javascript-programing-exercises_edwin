function fromListToObject(array) {
  // your code here
  return array.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

let output = fromListToObject([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);
console.log(output); // --> { make: 'Ford', model: 'Mustang', year: 1964 }
