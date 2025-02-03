function removeArrayValues(obj) {
    // your code here
    for (key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key]
        }
    }
}

removeArrayValues({ a: 1, b: 2, c: { a: 4, g: 'deded' } })