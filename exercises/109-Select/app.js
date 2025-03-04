// Write your function here

function select(arr, obj) {
  return arr.reduce((acc, curr) => {
    if (obj[curr]) acc[curr] = obj[curr];
    return acc;
  }, {});
}

let arr = ["a", "c", "e"];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
