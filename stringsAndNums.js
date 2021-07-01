// Sort an array with both strings and numbers so that the strings come first and the numbers come after. 
// The strings should be sorted in reverse order and the numbers should be in ascending order
const mixed = ['pie', 5, 'cake', 2, 'pudding', 12, 'meringue', 22, 'mousse', 6, 'ice cream', 44];
// Should return ['pudding', 'pie', 'mousse', 'meringue', 'ice cream', 'cake', 2, 5, 6, 12, 22, 44]

// Solution #1
const sortStrNums = (arr) => {
    return arr.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'number') return -1;
        if (typeof b === 'string' && typeof a === 'number') return 1;
        if (typeof a === 'string' && typeof b === 'string' && a > b) return -1;
        if (typeof a === 'string' && typeof b === 'string' && a < b) return 1;
        if (typeof a === 'number' && typeof b === 'number' && a > b) return 1;
        if (typeof a === 'number' && typeof b === 'number' && a < b) return -1;
        return 0
    })
}
console.log(sortStrNums(mixed))


// Solution #2
// let str = [];
// let nums = [];
// mixed.forEach((item) => {
//     if (typeof item === 'string') str.push(item)
//     if (typeof item === 'number') nums.push(item)
// })
// console.log(str)
// console.log(nums)

// str.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     return 0
// })
// nums.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0
// })

// console.log(str)
// console.log(nums)

// console.log(str.concat(nums))
