// Write a function that returns true if a given string is a palindrome and false if it is not

// ----- Solution #1 -----

function isPalindrome(string) {
    let spl = string.split('');
    let pos = 0;
    for (let i = spl.length - 1; i >= 0; i--) {
        if (spl[pos] !== spl[i]) {
            return false
        } else {
            pos++
        }
    }
    return true
}
let str = 'abb';

console.log(isPalindrome(str))


// ----- Solution #2 ----- O(1) time

function isPalindrome(string) {
    let rev = string.split('').reverse().join('');
    if (string !== rev) {
        return false
    }
    return true
}
let str1 = 'tacocat';
console.log(isPalindrome(str1))