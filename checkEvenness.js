// Write a function that returns the "odd number out" in an array (ex. array would be all even numbers except for one odd number or vice versa)

let odds = [1, 2, 3, 5, 7]
let evens = [1, 2, 4, 6, 8]

// ----- Solution #1 -----

function iqTest(numbers){
    let odd = [];
    let even = [];
    numbers.forEach((num) => {
      if (num % 2 === 0) {
        even.push(num)
      } else {odd.push(num)}
    })
    if (odd.length === 1) {
        return odd
    } else if (even.length === 1) {
        return even
    }
  }
  console.log(iqTest(evens))