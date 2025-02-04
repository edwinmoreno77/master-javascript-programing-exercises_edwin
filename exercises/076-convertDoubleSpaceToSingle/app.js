function convertDoubleSpaceToSingle(str) {
    // your code here
    const singleStr = str.replaceAll("  ", " ");
    return singleStr;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"