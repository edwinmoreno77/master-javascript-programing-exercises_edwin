function getAllLetters(str) {
    // your code here
    const letters = [];
    for (letter of str) letters.push(letter)
    return letters;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
