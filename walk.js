// A man is waiting for the train. He has 10 minutes until the train's arrival and would like to go on a walk in the meantime so that he arrives back at the station as the train is arriving. Given an array containing 'n', 's', 'e', and 'w' referring to the direction of each block the man walks where each block takes 1 minute to walk, return true if the man will arrive back where he started in 10 minutes and false is not.

const trail = ['n','s','n','s','n','s','n','s','n','s'];
const trail2 = ['w','e','w','e','w','e','w','e','w','e','w','e'];
const trail3 = ['w','e','w','e','w','e','w','e','w','s']


// ----- Solution #1 -----

function isValidWalk(walk) {
    let path = [];
    walk.forEach((item) => {
        if (item === 'n') path.push(1)
        else if (item === 's') path.push(-1)
        else if (item === 'e') path.push(2)
        else if (item === 'w') path.push(-2)

    }) 
    return (path.reduce((a, b) => a + b, 0)) === 0 && path.length === 10
}

console.log(isValidWalk(trail))
console.log(isValidWalk(trail2))
console.log(isValidWalk(trail3))


// ----- Solution #2 -----

function isValidWalk1(walk) {
    let start = 0;
    walk.forEach((item) => {
        if (item === 'n') start++ 
        else if (item === 's') start--
        else if (item === 'e') start += 2
        else if (item === 'w') start -= 2
    }) 
    return start === 0 && walk.length === 10
}

console.log(isValidWalk1(trail))
console.log(isValidWalk1(trail2))
console.log(isValidWalk1(trail3))