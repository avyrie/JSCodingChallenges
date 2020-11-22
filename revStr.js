// Write a function that takes in a string and outputs that same string, but reversed

// ----- Solution #1 -----

function reverse(str) {
    return str.split('').reverse().join('')
}
console.log(reverse('this is a string'))