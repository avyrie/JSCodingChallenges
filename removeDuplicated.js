// Write a function that removes duplicate values from an array

let arr = [1, 2, 2, 4, 6, 6, 7, 4, 2, 8, 9]

// ----- Solution #1 -----

const remDups = (array) => {
    let finArr = [];
    finArr.push(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (!finArr.includes(array[i])) {
            finArr.push(array[i])
        }
    }
    return finArr
}
console.log(remDups(arr))