// Validate Phone Number
// Phone number will consist of a normal phone number with area (10 numbers total)
// There may be a 1 in front of those 10 numbers
// Phone number may be in multiple different formats and all of those formats should pass (see test examples)
// If groups of numbers are separated by space, parentheses, hyphen, etc, they should be grouped 3,3,4
// Assume there will be no letters or special characters outside of '-' and ')'

// Tests
const phone1 = '1234567890' 
// returns true
const phone2 = '123-456-7890' 
// returns true
const phone3 = '123 456 7890' 
// returns true
const phone4 = '12 3456 7890' 
// returns false
const phone5 = '(123)456-7890' 
// returns true
const phone6 = '1 123 456 7890' 
// returns true
const phone7 = '3 456 7890' 
// returns false

// Solution #1
const validPhone = (number) => {
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    number = number.split('').filter((num) => {
        return nums.includes(num)
    })
    if (number[0] = 1 && number.length === 11 || number.length === 10 ) return true;
    return false
}
console.log(validPhone(phone5))