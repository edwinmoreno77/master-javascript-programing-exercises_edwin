// Write your function here
function removeElement(arr, element) {
  const result = arr.filter((item) => item != element);
  return result;
}

const output = removeElement([1, 2, 3, 4, 5, 6], 5);
console.log(output);
