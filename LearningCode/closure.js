function sumArray(a) {
    let array = [];
    return function() {
        let b = 2;
        for (let i = 0; i < a.length; i++) {
            array.push(a[i] + b);
        }
        return array;
    }
}
// const newArray = sumArray([1, 2, 3])
// console.log(newArray());

// const newArray2 = sumArray([2, 4, 8])
// console.log(newArray2());