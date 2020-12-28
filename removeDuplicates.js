// Given two arrays of numbers, return an array containing only the numbers that are present in array a that are not present in array b

const one = [1, 2, 2, 2, 2, 3, 4, 5, 6];
const two = [2, 4];

// ----- Solution #1 -----

function arrayDiff(a, b) {
    for (let i = 0; i <= b.length; i++) {
        a.forEach(() => {
            if (a.includes(b[i])) {
                a.splice(a.indexOf(b[i]), 1)
            }
        })
    }
    return a
}
console.log(arrayDiff(one, two))


// ----- Solution #2 -----

function arrDiff(a, b) {
    return a.filter((num) => !b.includes(num))
}
console.log(arrDiff(one, two))