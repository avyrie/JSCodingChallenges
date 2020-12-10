// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing those two numbers with the number from the first array in the first position.
// Absolute difference of two integers is the distance between them on the number line
// Ex. The absolute difference between 2 and -5 is 7

function smallestDifference(arrayOne, arrayTwo) {
    let small;
    let diff;
    let fin = []
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            diff = arrayOne[i] - arrayTwo[j];
            if (diff < 0) {
                diff = diff * (-1)
            }
            console.log(diff);
            console.log(small)
            if (small > diff || small === undefined) {
                small = diff
                fin.splice(0)
                fin.push(arrayOne[i], arrayTwo[j])
                console.log(small)
            } 
        }     
    }
    return fin
}
let arr1 = [-1, 5, 10, 20, 28, 3];
let arr2 = [26, 134, 235, 15, 17];
console.log(smallestDifference(arr1, arr2))
