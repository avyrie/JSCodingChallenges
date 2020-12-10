// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. It must return an integer representing the number of matching pairs of socks that are available.
// The function has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock

// Solution #1 

function sockPairs(n, ar) {
    let pairs = 0
    let sorted = ar.sort()
    console.log(sorted)

    for (let i = 0; i < n-1; i++) {
        if (sorted[i] === sorted[i+1]) {
            pairs++
            // incrementing i by 1 here will skip the next element since we will have already checked it
            i += 1
        }
    }
    return pairs
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockPairs(9, socks))