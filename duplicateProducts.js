// Given a list of n products each with a name, price, and weight, find out how many duplicate products are present within the list. Duplicate products contain identical parameters for all fields in the list (name, price, and weight)

function numDuplicates(name, price, weight) {
    let arr = [];
    let count = 0;
    arr.push(([name[0], price[0], weight[0]]).toString())
    console.log(arr)

    for (let i = 1; i < name.length; i++) {
        console.log(arr)
        console.log(arr.toString())
        console.log([name[i], price[i], weight[i]].toString())
        if (arr.includes(([name[i], price[i], weight[i]]).toString())) {
            
            count = count +1
        } else {
            arr.push(([name[i], price[i], weight[i]]).toString());
            console.log(arr[i])
        }
        console.log(arr)
        
    }
    return count;
}

const names = ['ball', 'bat', 'glove', 'glove', 'glove'];
const prices = [2, 3, 1, 2, 1];
const weights = [2, 5, 1, 1, 1];

console.log(numDuplicates(names, prices, weights))