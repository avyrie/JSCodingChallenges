// NEED TO FINISH

const lengthOfLongestSubstring = function(s) {
    let splitStr = s.split('')
    let strArr = [];
    let iArr = [];
    let final = 0;
    for (let i = 0; i < splitStr.length; i++) {
        iArr.push(splitStr[i])
        for (let j = 0; j < splitStr.length; j++){
            if (splitStr[j] !== iArr[i]) {
                continue
            } else {
            
                if (strArr.length > final) {
                    final = iArr.length;
                }
            }
        }
        return final
    }
}

console.log(lengthOfLongestSubstring('thiss is a stringabcl'))


// const lengthOfLongestSubstring = function(s) {
//     let splitStr = s.split('')
//     let strArr = [];
//     let final = 0;
//     for (let i = 0; i < splitStr.length; i++) {
//         for (let j = 0; j < splitStr.length; j++){
//             if (splitStr[j] !== splitStr[j+1]) {
//                 strArr.push(s[j])
//             } else {
//                 strArr.push(splitStr[j+1])
//                 if (strArr.length > final) {
//                     final = strArr.length;
//                 }
//             }
//         }
//         return final
//     }
//     return final
// }

// console.log(lengthOfLongestSubstring('thiss is a stringabcl'))