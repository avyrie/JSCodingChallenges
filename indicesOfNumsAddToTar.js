// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// ----- Solution #1 -----

const twoIndices = function(nums, target) {
    let arr = [];
    for (let j = 0; j <= nums.length; j++) {
        for (let i = 0; i < nums.length; i++) {
            if(i !== j && nums[i] + nums[j] === target) {
                arr.push(j, i)
                return arr
            } 
        }
    }
}
let thisNums = [3, 9, 8, 3];
let thisTarget = 6;
console.log(twoIndices(thisNums, thisTarget))