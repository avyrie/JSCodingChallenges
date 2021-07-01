// Given an array of integers, return a new array with each value doubled. Use the map method

// Solution #1
const numsArr = [1, 5, 9, 4]
const double = (arr) => {
    return arr.map((n) => n*2)
}
console.log(double(numsArr))

console.log(numsArr)