function isIsogram(text) {
  // your code here
  const str = text.toLowerCase();
  if (str.length === 0) return true;
  const arrayOfLetter = []
  for (let i = 0; i < str.length; i++) {
    if (arrayOfLetter.includes(str[i])) return false;
    arrayOfLetter.push(str[i]);
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false

// :::::::::::::::::::::::::::::::::::::::::
// ::::::::::: Short function ::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::

// function isIsogram(text) {
//   const lowerText = text.toLowerCase();
//   return new Set(lowerText).size === lowerText.length;
// }
