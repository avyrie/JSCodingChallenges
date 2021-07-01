// Sort the words in descending order by length
const words = ['long', 'longer', 'longest', 'longlierest', 'short', 'shor', 'sho', 'sh'];
// Should return ['longlierest', 'longest', 'longer', 'short', 'shor', 'long', 'sho', 'sh']

// Solution #1
words.sort((a, b) => {
    if (a.length > b.length) {return -1}
    if (a.length < b.length) {return 1}
    return 0 
})
console.log(words)
