let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (key in obj2) {
        obj1[key] ? null : obj1[key] = obj2[key]
    }
}

extend(obj1, obj2);