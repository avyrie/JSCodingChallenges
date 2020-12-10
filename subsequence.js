// Given two non-empty arrays of inteers, write a functionn that determines whether the second array is a subsequence of the first array.
// A subsequence of an array is a set of numbers that are in the same order as they appear in the array, but are not necessarily adjacent.
// Ex. [1, 3, 5] is a subsequence of [1, 2, 3, 4, 5]. [1, 1, 3, 4, 8] is not.

let validArr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [5, 1, 22, 25, 6, -1, 8, 10, 10]


// ----- Solution #1 ----- O(n) time, O(1) space

function isValidSub(arr, seq) {
    let arrI = 0;
    let subI = 0;
    while (arrI < arr.length && subI < seq.length) {
        if (arr[arrI] === seq[subI]) {
            subI++;
            arrI++;
        }
    }
    return subI === seq.length
}

console.log(isValidSub(validArr, seq))


// ----- Solution #2 ----- O(n) time

function validSub(arr, seq) {
    let seqI = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === seq[seqI]) {
            seqI++
        }
    }
    return seqI === seq.length
}

console.log(validSub(validArr, seq))