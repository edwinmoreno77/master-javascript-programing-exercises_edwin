function transformEmployeeData(array) {
  // your code here
  return array.map((person) => {
    person.reduce((acc, [key, value]) => {
      if (!acc[key]) acc[key] = value;
      return acc;
    }, {});
  });
}

let output = transformEmployeeData([
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],

  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
