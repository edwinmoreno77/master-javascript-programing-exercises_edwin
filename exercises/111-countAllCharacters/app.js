// Write your function here
function countAllCharacters(str) {
  if (str.length < 1) return {};

  return str.split("").reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 1) : (acc[curr] += 1);
    return acc;
  }, {});
}
  