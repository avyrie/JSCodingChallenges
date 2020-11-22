// Create a function that prints all numbers starting at 1 up to and including a given argument. If the given argument is greater than 5, only print up to and including 5.

// ----- Solution #1 -----

function atMostFive(num) {
    if(num > 5) {
        num = 5
    }
    for(let i = 1; i <= num; i++) {
        console.log(i)
    } 
}
atMostFive(7)


// ----- Solution #2 -----

function logAtMostFive(num) {
    for (let i = 1; i <= Math.min(5, num); i++) {
        console.log(i)
    }
}
logAtMostFive(4)