// Create an array of random numbers that sdo not repeat and are not in consecutive order

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