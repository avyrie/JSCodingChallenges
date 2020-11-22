// Create a function that prints all numbers starting at 1 up to and including a given argument. No matter tha argument, the function should print each number starting at 1 up to and including 5

// ----- Solution #1 -----

function atLeastFive(num) {
    if(num < 5) {
        num = 5
    }
    for(let i = 1; i <= num; i++) {
        console.log(i)
    } 
}
atLeastFive(4)


// ----- Solution 2 -----

function logAtLEastFive(num) {
    for (let i = 1; i <= Math.max(5, num); i++) {
        console.log(i)
    }
}
logAtLEastFive(10)