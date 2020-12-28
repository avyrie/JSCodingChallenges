let input = "  My    name     is   Chai  "
//string.split
//["My","name","is","Chai"]
let arr = [];
let val = '';
function stringSplit(input) {
 for (let i = 0; i < input.length; i++) {
   if (input[i] !== ' ' ) {
     val += input[i]
     continue;
   }
   if (input[i] === ' ' && val !== '') {
     arr.push(val)
     val = '';
   }
 }
 if (val.length) {
  arr.push(val)
 }
  return arr;
}

console.log(stringSplit(input))