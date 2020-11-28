// Create an array of random numbers that sdo not repeat and are not in consecutive order

// ----- Solution #1 -----

// Fills array with random, non-repeating numbers. These numbers will be in order from least to greatest
function randomArr() {
    let keys = {}
    // while(Object.keys(keys).length < (however long you want the array to be) {
    while (Object.keys(keys).length < 10) {
        // Math.floor(Math.random() * (max - min) + min)
        let num = Math.floor(Math.random() * (20 - 0) + 0);
        //While length of an object keys < 10, we add a new unique key
        keys[num] = true;
    }
    // Keys of an object are always a string. Iterate and parse integers. Map will save it into an array
    let randNumsArr = Object.keys(keys).map((num) => parseInt(num))
    return randNumsArr
}
let randArr = randomArr();

// Shuffles the array of random numbers so they are no longer in order
function shuffle() {
    let currentIndex = randArr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Picks a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swaps remaining element with the current element.
        temporaryValue = randArr[currentIndex];
        randArr[currentIndex] = randArr[randomIndex];
        randArr[randomIndex] = temporaryValue;
    }
    return randArr;
}

console.log(shuffle())

// Thanks to: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// and Yulia Tsernet


// ----- Solution #2 -----

function randmArr(arrLength, min, max) {
    let keys = {}
    while (Object.keys(keys).length < arrLength) {
        let num = Math.floor(Math.random() * (max - min) + min);
        keys[num] = true;
    }
    let randNumsArr = Object.keys(keys).map((num) => parseInt(num))
    let shuffArr = randNumsArr.sort(() => Math.random() - 0.5)
    return shuffArr
}
console.log(randmArr(10, 20, 0))

// Thanks to Ron Fybish


// ----- Solution #3 -----

function arrRandom(arrLength, maxNum) {
    let arr = Array(maxNum + 1).fill().map((_, i) => i).sort(() => Math.random() - 0.5);
    return arr.slice(0, (arrLength))
}
console.log(arrRandom(10, 20))

// Thanks to Julian Bovone.
// Explanation: Array(max + 1) creates an array with a length that is equal to the specified max number + 1. fill() fills the array so we can iterate over it with map. .map iterates over the array and assigns each item as its index (_ is there to hold the place of an unused parameter (item)). .sort randomizes the order of the items in the array. .slice removes all items in the array from the index that corresponds to the length argument onwards leaving an array with a length of length.


// ----- Solution #4 -----

function randomArr(arrLength, maxNum) {
    const aSet = new Set;
    while (aSet.size < arrLength) {
        aSet.add(Math.floor(Math.random() * maxNum + 1));
    }
    return [...aSet];
}
console.log(randomArr(10, 20))