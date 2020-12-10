const names = ['max', 'naomi']
const name = 'max' + 'naomi';
console.log(name)
const u = []
u.push(names[1]+1)
console.log(u)

function deviceNamesSystem(devicenames) {
    let obj = Object.assign({}, devicenames);
    console.log(obj)
    let names = [];
    
    let sorted = Object.keys(obj).sort((a, b) => {
        return obj[a] - obj[b]
    };
    console.log(Object.keys(sorted))
    console.log(sorted)
}

const nNames = ['switch', 'tv', 'switch', 'tv', 'switch', 'tv']
console.log(deviceNamesSystem(nNames))
console.log(nNames.sort())





function deviceNamesSystem(devicenames) {
    let uniqueNames = [];
    let sorted = devicenames.sort();
    let num = 1;
    for (let i = 0; i < sorted.length; i++) {
        if (uniqueNames.includes(sorted[i])) {
            uniqueNames.push(sorted[i]+num)
            num++
        } else {
            uniqueNames.push(sorted[i])
            num = 1;
        }
        
    }
    return uniqueNames
}
