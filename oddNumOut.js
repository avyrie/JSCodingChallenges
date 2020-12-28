// Given an array, write a function that returns the value int he array that does not match the others

const array = [1, 1, 1, 1, 4, 1, 1, 1];
const array2 = [3, 1, 1, 1, 1, 1]


// ----- Solution #1 -----

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1] && arr[i] !== arr[i+2]) {
            return arr[i]
        } else if (arr[i] !== arr[i+1] && arr[i] === arr[i+2]) {
            return arr[i+1]
        }
    }
}
console.log(findUnique(array2))