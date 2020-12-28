// Given a string, return the string with the first letter of each word capitalized

let string = "How can mirrors be real if our eyes aren't real";

// ----- Solution #1 -----

const capital = (str) => {
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ')
}

console.log(capital(string))