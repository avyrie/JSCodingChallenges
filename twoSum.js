// Given an array of integers (nums) and an integer (target) return 2 numbers in the array that add up to the target

// ----- Solution #1 -----

const twoSum = function(nums, target) {
    let arr = [];
    for (let j = 0; j < nums.length; j ++) {
        for (let i = 0; i < nums.length; i++) {
            if (j !== i && nums[i] + nums[j] === target) {
                arr.push(nums[i], nums[j])
                return arr
            } 
        }
    }
}
let thisNums = [3, 9, 2, 5, 0, 1, 11];
let thisTarget = 11;
console.log(twoSum(thisNums, thisTarget))