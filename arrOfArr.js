// You are given a positive integer n.  
// Create an array that is n length where each item is an array with just the index of that particular array in it
// if n === 6 result would be [[0], [1], [2], [3], [4], [5]]

// Solution #1
// const arrNum = (n) => {
//     let nums = [];
//     for (let i = 0; i < n; i++) {
//         nums.push([i])
//     }
//     return nums
// }
// console.log(arrNum(7))

// Solution #2
const arrNum = (n) => {
    return new Array(n).fill(null).map((x, i) => [i])
}
console.log(arrNum(6))