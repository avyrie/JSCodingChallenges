// Write a function that returns true if the given array is monotonic and false if not. An array is monotonic if the values continually increase with no decrease or vice versa.

let arr = [-1, -5, -10, -40, -70, -90]
let arr1 = [1, 4, 8, 13, 19, 33]
let arr2 = [1, 5, 2, 0, 4, 9]


// ----- Solution #1 -----

function isMonotonic(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i+1] && array[i+1] < array[i+2] || array[i] < array[i+1] && array[i+1] > array[i+2]) {
            return false
        } 
    }
    return true
}
console.log(isMonotonic(arr2))