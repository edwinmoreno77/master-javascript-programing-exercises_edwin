function search(array, value) {
  if (!Array.isArray(array) || array.length < 1) return -1;

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === value) return mid;

    if (array[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // 4
