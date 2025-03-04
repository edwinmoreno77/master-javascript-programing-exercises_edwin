function convertScoreToGrade(score) {
  // your code here
  if (score > 100 || score < 0) return "INVALID SCORE";
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
