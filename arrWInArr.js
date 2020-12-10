// Write a function that returns true if all items in an array exist within another array and false if not 

let validArr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [5, 1, 22, 22, 25, 6, -1, 8]


// ----- Solution #1 -----

function wInArr(array, sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (array.includes(sequence[i])) {
            array.splice(array.indexOf(sequence[i]), 1); 
            console.log(array)
        } else {
            return false;
        } 
    }
    return true;
}

console.log(wInArr(validArr, seq))

