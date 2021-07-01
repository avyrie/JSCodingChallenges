// Determine if a given email address is valid
// - Email must follow normal email format (XXXXXX@XXXX.XXX)
// - It must end with either .com, .edu, or .nz
// - Email can contain numbers but can't begin with a number

const email1 = 'john.doe@email.com'
// returns true
const email2 = 'john.doe@email'
// returns false
const email3 = 'john.doe@email.edu'
// returns true 
const email4 = 'john.doe@email.nz'
// returns true
const email5 = '12john@email.com'
// returns false
const email6 = 'johnemail.com'
// returns false
const email7 = '@johnemail.com'
// returns false
const email8 = 'johnemail@.com'
// returns false

// Solution #1
const validEmail = (email) => {
    if (!isNaN(email[0])) return false;
    if (email[0] === '@' || !email.includes('@') || email.includes('@.')) return false;
    if (email.endsWith('.com') || email.endsWith('.edu') || email.endsWith('.nz')) {
        return true
    } 
    return false
}

console.log(validEmail(email1))
console.log(validEmail(email2))
console.log(validEmail(email3))
console.log(validEmail(email4))
console.log(validEmail(email5))
console.log(validEmail(email6))
console.log(validEmail(email7))
console.log(validEmail(email8))
