// Write a function that takes in a given non-empty array and returns an array containing the product of every other number in the given array
// Ex. array = [1, 6, 3] would return [18, 3, 6]
// 6*3 = 18
// 1*3 = 3
// 6*1 = 6


// ----- Solution #1 ----- O(n)

function arrayOfProducts(array) {
    let ans = [];
    const l = array.length
	for (let i = 0; i < l; i++) {
		let filt = array.splice(0, 1)
        let noI = array.reduce((currTotal, num) => {
                return num * currTotal
            })
            ans.push(noI)
            array.push(filt[0])
            filt.pop()
    }
	return ans
}
let arr = [1, 2, 3, 7, 6, 2]
console.log(arrayOfProducts(arr))