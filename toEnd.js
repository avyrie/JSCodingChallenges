// Write a function that takes in a given array of integers and a target number and returns the array with all instances of the target number now moved to the end of the array. The order of integers need not be maintained.

let arr = [2, 1, 2, 1, 2, 2, 3, 5, 2];
let tar = 2;

// ----- Solution #1 ----- O(n2) time

function moveElementToEnd(array, toMove) {
	let newArr = [];
	for (let i = 0; i <= array.length; i++) {
		if (array[i] === toMove) {
            newArr.push(array[i])
            array.splice(i, 1)
            i--
		}
    }
    newArr.forEach((num) => {
        return array.push(num)
    })
  return array
}
console.log(moveElementToEnd(arr, tar))

// ----- Solution #2 -----

function moveNumToEnd(array, toMove) {
    array.sort()
    let filt = array.filter((num) => {
        return num === toMove
    })
    let nums = array.splice(array.indexOf(toMove), filt.length);
    array = array.concat(nums)
    return array
}
console.log(moveNumToEnd(arr, tar))