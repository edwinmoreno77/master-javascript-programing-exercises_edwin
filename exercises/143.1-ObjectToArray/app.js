function getAllKeys(obj) {
  // your code here
  let aux = [];
  for (let key in obj) aux.push(key);
  return aux;
}

let output = getAllKeys({ name: "Sam", age: 25, hasPets: true });
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
