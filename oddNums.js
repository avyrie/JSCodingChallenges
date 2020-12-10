// Given two integers, l and r, print all the odd numbers between l and r (l and r inclusive). l is the left part of the range while r is the right. The funciton must return an array of integers denoting the odd numbers between l and r

// ----- Solition #1 -----

function odd(l, r) {
    let arr = []
    for (let i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            arr.push(i)
        }
    }
    return arr
}

console.log(odd(2, 5))