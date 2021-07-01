// Sort the animals alphabetically by first letter, 
//but if two animals start with the same letter they should appear in the original order
const animals = ['elephant', 'dog', 'antelope', 'deer', 'crocodile', 'aardvark', 'eagle', 'cat']

animals.sort((a, b) => {
    if (a[0] < b[0]) {return -1}
    if (a[0] > b[0]) {return 1}
    return 0
})
console.log(animals)