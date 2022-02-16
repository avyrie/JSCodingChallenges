// Return a string with the first and last characters removed

const string = 'This is a string'

// Solution #1
const removeChar = (str) => {
    str = str.split('')
    str.splice(0, 1)
    str.splice(str.length - 1, 1)
    return str.join('')
}

console.log(removeChar(string))