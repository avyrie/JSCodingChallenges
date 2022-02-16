// A store selling clothes chooses which item to feature by what sells the best the day before. The provided array indicates the products sold the day before. If two products are tied for the most sold, those top products are sorted alphabetically with the last product being the featured product for the next day. Write a function to determine the featured product of the day. Must return the item as a string.

// Solution #1
function featuredProduct(products) {
    let feat = {};
    let arr = [];
    // Populates the empty object with the products as keys and the number of each product as the value
    for (let i = 0; i < products.length; i++) {
        if(!feat[products[i]]) {
            feat[products[i]] = 1
        } else {
            feat[products[i]] += 1
        }
    }
    console.log(Object.keys(feat).length)
    // Maps the values to an array
    let array = Object.keys(feat).map((key) => {
        return feat[key]
    })
    console.log(array)
    // Isolates the largest number amongst the values
    let ma = Math.max(...array)
    console.log(ma)
    // Pushes the products that have the highest amount sold to an empty array
    for (let i = 0; i < Object.keys(feat).length; i++) {
        if (feat[Object.keys(feat)[i]] === 2) {
            arr.push(Object.keys(feat)[i])
        }
    }
    
    console.log(arr)
    // Sorts the array of highest amount sold alphabetically
    const finArr = arr.sort()
    console.log(finArr)
    // Returns the last value in the array of items with the highest amount sold
    return finArr.slice(-1)
}

const prod = ['red', 'green', 'red', 'orange', 'black', 'black']

console.log(featuredProduct(prod))