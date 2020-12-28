// Given two strings containing only letters a-z, return the longest possible string containing distinct, non-repeating letters from both strings

const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"

// ----- Solution #1 -----

function longest(s1, s2) {
    let finArr = [];
    let newStr = s1.concat(s2).split('')
    newStr.forEach((letter) => {
        if (!finArr.includes(letter)) {
            finArr.push(letter)
        }
    })
    finArr.sort()
    finArr = finArr.join('').toString()
    return finArr
}

console.log(longest(a, b))