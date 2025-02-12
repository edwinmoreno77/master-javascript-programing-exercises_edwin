// Write your function here
function keep(arr, num) {
  return arr.filter((item) => item === num);
}

const output = keep([1, 2, 2, 3, 5, 6, 6, 9, 9], 2);
console.log(output);
