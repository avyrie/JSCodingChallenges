// Given an unsorted array of n elements, find if the element k is present in the array or not. The function includes two parameters, an array of integers (arr) denoting the elements in the array and an integer, k, denoting the element to be searched in the array. The function must return a string "YES" or "NO" denoting if the element is present in te array or not

function findNum(arr, k) {
    if (arr.includes(k)) {
        return "YES"
    } else {
        return "NO"
    }
}

const arr = [1, 4, 0, 3, 9, 5, 8]
console.log(findNum(arr, 7))