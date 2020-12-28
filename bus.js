// Given an array of arrays signifying the amount of people getting on and leaving a bus at each stop (where each item in the array represents a stop, the first value of each item represents the amount of people boarding while the second represents the amount of people leaving) write a function that returns the amount of people left on the bus at the end of its route.

const bus = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]


// ----- Solution #1 -----

const number = (busStops) => {
    let count = 0;
    busStops.forEach((person) => {
        count += person[0];
        count -= person[1]
    })
    return count
}

console.log(number(bus))


// ----- Solution #2 -----

const number1 = (busStops) => busStops.reduce((stop, [on, off]) => stop + on - off, 0)
console.log(number1(bus))