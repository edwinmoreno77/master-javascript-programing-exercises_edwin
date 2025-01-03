// Write your function here

function computeAverageOfNumbers(numArray) {

    if (numArray.length == 0) return 0;

    let sumOfArray = 0;
    for (num of numArray) {
        sumOfArray += num;
    }
    const averegaOfNumbers = sumOfArray / numArray.length
    return averegaOfNumbers;
}


