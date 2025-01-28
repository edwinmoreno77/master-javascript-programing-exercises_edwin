let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (key in obj) {
        if (obj[key] > num) {
            delete (obj[key])
        }
    }
    return obj;
}

console.log(removeNumbersLargerThan(5, obj));

