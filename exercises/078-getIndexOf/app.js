// Write your function here
function getIndexOf(letter, string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) return i;
  }
  return -1;
}

console.log(getIndexOf("a", "I am a hacker"));
