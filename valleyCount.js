// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly *steps* steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Solution #1 - slow

function valleyCount(steps, path) {
    let splitPath = path.split('');
    let split = []
    let hike = 0;
    let valleys = 0;
    splitPath.forEach((step) => {
        if (step === 'U') {
            split.push(1)
        } else {
            split.push(-1)
        }
    })
    console.log(split)
    for (let i = 0; i < steps; i++) {
        hike += split[i]
        if (hike === 0 && split[i] === 1) {
            valleys++
        }
        console.log(hike)
    }
    return valleys
}

const path = 'UDDDUDUU';
const steps = 8;
console.log(path.split(''))
console.log(valleyCount(steps, path))


// Solution #2

function valleyCount2(steps, path) {
    let splitPath = path.split('');
    let hike = 0;
    let valleys = 0;

    for (let i = 0; i < steps; i++) {
        if (splitPath[i] == 'U') {
            hike += 1
            if (hike === 0) {
                valleys++
            }
        } else {
            hike -= 1
        }
        
        console.log(hike)
    }
    return valleys
}

const path2 = 'DUDDDUUDUU';
const steps2 = 10;
console.log(path2.split(''))
console.log(valleyCount2(steps2, path2))