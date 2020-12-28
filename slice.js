// Given two strings (a & b) if you can shift 'a' a number of times (where the first value is being removed and added to the end of the string) so that it is equal to 'b', return true, if not return false

const al = 'abcde'
const bl = 'cdaeb'


// ----- Solution #1 -----

const shifting = (a, b) => {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a.slice(i) + a.slice(0, i) === b) {
            return true
        }
    };
    return false
}
console.log(shifting(al, bl))